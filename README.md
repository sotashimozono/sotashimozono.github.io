# sotashimozono.github.io

[![Release Drafter](https://github.com/sotashimozono/sotashimozono.github.io/actions/workflows/release-drafter.yml/badge.svg)](https://github.com/sotashimozono/sotashimozono.github.io/actions/workflows/release-drafter.yml)
[![HTML Validation](https://github.com/sotashimozono/sotashimozono.github.io/actions/workflows/html-validation.yml/badge.svg)](https://github.com/sotashimozono/sotashimozono.github.io/actions/workflows/html-validation.yml)
[![Check Links](https://github.com/sotashimozono/sotashimozono.github.io/actions/workflows/link-checker.yml/badge.svg)](https://github.com/sotashimozono/sotashimozono.github.io/actions/workflows/link-checker.yml)
[![Lighthouse CI](https://github.com/sotashimozono/sotashimozono.github.io/actions/workflows/lighthouse.yml/badge.svg)](https://github.com/sotashimozono/sotashimozono.github.io/actions/workflows/lighthouse.yml)
[![CI](https://github.com/sotashimozono/sotashimozono.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/sotashimozono/sotashimozono.github.io/actions/workflows/ci.yml)
[![Deployment Status](https://github.com/sotashimozono/sotashimozono.github.io/actions/workflows/deployment-status.yml/badge.svg)](https://github.com/sotashimozono/sotashimozono.github.io/actions/workflows/deployment-status.yml)
[![Update SEO Files](https://github.com/sotashimozono/sotashimozono.github.io/actions/workflows/update-seo.yml/badge.svg)](https://github.com/sotashimozono/sotashimozono.github.io/actions/workflows/update-seo.yml)
[![CodeQL](https://github.com/sotashimozono/sotashimozono.github.io/actions/workflows/codeql.yml/badge.svg)](https://github.com/sotashimozono/sotashimozono.github.io/actions/workflows/codeql.yml)
[![Update AI Files](https://github.com/sotashimozono/sotashimozono.github.io/actions/workflows/update-ai-files.yml/badge.svg)](https://github.com/sotashimozono/sotashimozono.github.io/actions/workflows/update-ai-files.yml)

## 🌐 Website

**Main Site**: https://codes.sota-shimozono.com  
**Official Site**: https://sota-shimozono.com

## 📊 Automated Workflows

このリポジトリは以下の自動化ワークフローで品質とメンテナンスを管理しています：

### 🔧 コード品質
- **HTML Validation**: HTML/CSSの構文検証を自動実行
- **CI Quality Checks**: ファイルサイズ、TODO コメント、JSON検証

### 🔒 セキュリティ
- **CodeQL Security Scan**: JavaScript/HTMLのセキュリティ脆弱性を週次スキャン
- **Dependabot**: GitHub Actions、npm、pipの依存関係を自動更新

### 🔗 リンク管理
- **Link Checker**: 毎週日曜日にリンク切れを自動チェック（手動実行も可能）

### 🚦 パフォーマンス & SEO
- **Lighthouse CI**: SEOスコアとパフォーマンスを継続的に測定
- **Update SEO Files**: 毎月1日にSEOファイル（sitemap.xml、robots.txt）を自動更新
- **Update AI/LLM Files**: 毎週月曜日にai.txt/llm.txtを自動更新

### 📦 リリース管理
- **Release Drafter**: PRの履歴から自動的にリリースノートを生成

### 🚀 デプロイ
- **Deployment Status**: GitHub Pagesへのデプロイ状況を自動通知

## 🔐 セキュリティ機能

このサイトには以下のセキュリティ機能が実装されています：

- **Content Security Policy (CSP)**: XSS攻撃からの保護
- **X-Frame-Options**: クリックジャッキング攻撃の防止
- **X-Content-Type-Options**: MIMEタイプスニッフィング攻撃の防止
- **Referrer-Policy**: リファラー情報の制御
- **Permissions-Policy**: ブラウザ機能の制限

セキュリティヘッダーは `index.html` のメタタグとして実装されています。
Cloudflare Pages等のCDNに移行する場合は `_headers` ファイルが使用できます。

## 📱 PWA対応

このサイトはProgressive Web App (PWA)として動作します：

- **Service Worker** (`sw.js`): オフラインキャッシュと高速読み込み
- **Web App Manifest** (`manifest.json`): ホーム画面への追加対応
- **キャッシュ戦略**:
  - 静的アセット: Cache First（キャッシュ優先）
  - HTML: Network First（ネットワーク優先）
  - API: Stale While Revalidate（古いキャッシュを使いつつ更新）

## 🔌 GitHub API統合

GitHub APIを使用してリポジトリ情報を動的に表示：

- 公開リポジトリのリスト
- スター数とフォーク数
- プログラミング言語統計
- 最終更新日

JavaScript実装は `index.html` 内に含まれています。

## 📊 アナリティクス設定（オプション）

プライバシーを重視したPlausible Analyticsに対応しています：

1. Plausible Analyticsアカウントを作成
2. `index.html` の以下の行のコメントを解除:
   ```html
   <script defer data-domain="codes.sota-shimozono.com" src="https://plausible.io/js/script.js"></script>
   ```
3. `data-domain` を自分のドメインに変更

Google Analytics 4を使用する場合は、トラッキングコードを同様に追加してください。

## 🤖 AI/LLMサポート

AI agents向けの情報ファイルを提供：

- **ai.txt / llm.txt**: AIエージェント向けのサイト情報
  - 自動更新: 毎週月曜日
  - バージョン管理
  - README.mdからの自動情報抽出

## 📄 License

MIT License