+++
title = "QAtlas.jl"
description = "Publication-traced reference table for quantum many-body physics — confidence-tiered, cross-checked."
date = 2026-05-11
weight = 40

[taxonomies]
category = ["Reference Data"]
language = ["Julia"]

[extra]
role = "Reference DB"
repo = "https://github.com/sotashimozono/QAtlas.jl"
docs_stable = "/QAtlas.jl/stable/"
docs_dev = "/QAtlas.jl/dev/"
julia_min = "1.12"
tagline_en = "Curated dictionary of rigorous results in quantum and statistical physics"
tagline_ja = "量子・統計物理の厳密結果を整理した参照テーブル"
depends_on = []
+++

QAtlas exposes a curated dictionary of rigorous results in quantum and
statistical physics. Every stored value traces back to a specific
publication and is cross-validated against independent numerical
computations (dense / sparse exact diagonalisation, brute-force
enumeration, Bloch diagonalisation, automatic differentiation,
bipartite fluctuations, …).

## Confidence tiers

- **Highest confidence**: results the maintainer derives and checks line-by-line (TFIM BdG + thermodynamics, Onsager $T_c$, Yang $M(T)$, Heisenberg dimer, bipartite-fluctuation Luttinger $K$, PBC Calabrese–Cardy central charge).
- **Cross-checked**: tight-binding Bloch formulas, 3D O(N) bootstrap values, $E_8$ mass ratios — verified numerically but not all re-derived by hand.

> If you use QAtlas values in a publication, verify them against the
> cited original references.

## Status

The source and the derivation notes are written with heavy LLM
assistance and are being independently reviewed. Found an error — a
formula, a proof step, a citation, a type signature? Please
[open an issue](https://github.com/sotashimozono/QAtlas.jl/issues).
Recent review cycles have already caught one flagship bug ($E_8$ mass
ratios $m_7, m_8$ were 2× the literature value, fixed in PR #83).
