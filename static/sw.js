// Service Worker for PWA support and offline caching
// キャッシュバージョン - 更新時は番号を変更
const CACHE_VERSION = 'v1.0.0';
const CACHE_NAME = `sota-portfolio-${CACHE_VERSION}`;

// キャッシュする静的ファイルのリスト
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/robots.txt',
  '/sitemap.xml',
  '/ai.txt',
  '/llm.txt'
];

// Service Worker インストール時
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('[Service Worker] Installation complete');
        // 新しいService Workerを即座にアクティブ化
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[Service Worker] Installation failed:', error);
      })
  );
});

// Service Worker アクティベート時
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        // 古いキャッシュを削除
        const deletePromises = cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          });
        return Promise.all(deletePromises);
      })
      .then(() => {
        console.log('[Service Worker] Activation complete');
        // 既存のクライアントも制御下に置く
        return self.clients.claim();
      })
  );
});

// Fetch リクエストのハンドリング
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // 同一オリジンのリクエストのみ処理
  if (url.origin !== location.origin) {
    // 外部リソース（GitHub API等）はキャッシュしない
    if (url.hostname === 'api.github.com' || url.hostname === 'plausible.io') {
      // Stale While Revalidate戦略（古いキャッシュを使いつつバックグラウンドで更新）
      event.respondWith(
        caches.open(CACHE_NAME).then((cache) => {
          return cache.match(request).then((cachedResponse) => {
            const fetchPromise = fetch(request).then((networkResponse) => {
              // 成功したレスポンスのみキャッシュ
              if (networkResponse && networkResponse.status === 200) {
                cache.put(request, networkResponse.clone());
              }
              return networkResponse;
            });
            
            // キャッシュがあればそれを返し、バックグラウンドで更新
            return cachedResponse || fetchPromise;
          });
        })
      );
      return;
    }
    
    // その他の外部リソースはそのまま通す
    return;
  }
  
  // HTMLファイル: Network First戦略（常に最新を取得、失敗時はキャッシュ）
  if (request.mode === 'navigate' || request.destination === 'document') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // レスポンスをキャッシュに保存
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });
          return response;
        })
        .catch(() => {
          // ネットワークエラー時はキャッシュから返す
          return caches.match(request).then((cachedResponse) => {
            return cachedResponse || caches.match('/index.html');
          });
        })
    );
    return;
  }
  
  // 静的アセット: Cache First戦略（キャッシュ優先、なければネットワーク）
  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        
        // キャッシュになければネットワークから取得
        return fetch(request).then((response) => {
          // 有効なレスポンスのみキャッシュ
          if (!response || response.status !== 200 || response.type === 'error') {
            return response;
          }
          
          // レスポンスのクローンをキャッシュに保存
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });
          
          return response;
        });
      })
      .catch((error) => {
        console.error('[Service Worker] Fetch failed:', error);
        // オフライン時の代替ページ
        if (request.destination === 'document') {
          return caches.match('/index.html');
        }
      })
  );
});

// メッセージハンドラ（キャッシュクリアなどの制御用）
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => caches.delete(cacheName))
        );
      })
    );
  }
});
