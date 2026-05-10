+++
title = "doiget"
description = "Single-binary CLI + stdio MCP server that turns DOIs and arXiv IDs into local PDFs via official OA-first APIs."
date = 2026-05-11
weight = 8

[taxonomies]
category = ["Tools"]
language = ["Rust"]

[extra]
role = "CLI / MCP server"
repo = "https://github.com/sotashimozono/doiget"
julia_min = ""
tagline_en = "DOI / arXiv ID → local PDF via OA-first official APIs"
tagline_ja = "DOI / arXiv ID から OA優先の公式 API 経由でローカル PDF を取得"
depends_on = []
+++

A general-purpose CLI for fetching scholarly PDFs from public sources. Ships a stdio MCP
server so AI agents can drive it. Retrieves only through open-access sources (Crossref,
Unpaywall, arXiv) by default; user-provided personal subscription credentials can be
opted in via compile-time flags. Does not work around any access control or redistribute
content.
