+++
title = "LatticeCore.jl"
description = "Abstract lattice interface — traits, BC composition, momentum space (FFT / NUFFT)."
date = 2026-05-11
weight = 10

[taxonomies]
category = ["Lattice Suite"]
language = ["Julia"]

[extra]
role = "Foundation"
repo = "https://github.com/sotashimozono/LatticeCore.jl"
docs_stable = "/LatticeCore.jl/stable/"
docs_dev = "/LatticeCore.jl/dev/"
julia_min = "1.10"
tagline_en = "Abstract lattice interface for quantum many-body simulations"
tagline_ja = "量子多体シミュレーション向けの抽象格子インターフェース"
depends_on = []
+++

LatticeCore is the interface layer for a family of Julia packages that
simulate physical systems on geometric lattices. It defines the types
and trait vocabulary that every lattice — periodic or aperiodic, finite
or conceptually infinite — must implement, then ships a pair of
reference implementations (`LineLattice`, `SimpleSquareLattice`) and a
momentum-space layer so the interface is verifiable end-to-end without
any other dependency.

## Highlights

- `AbstractLattice{D, T}` with trait-based extension (`TopologyTrait`, `Periodic` / `Aperiodic`, `is_bipartite`, `reciprocal_support`, `size_trait`).
- Per-axis boundary conditions (`PeriodicAxis`, `OpenAxis`, `TwistedAxis`) composed into a `LatticeBoundary`. Mixed BCs (cylinders) are first-class.
- Coordinate system and indexing split: `RealSpace`, `LatticeCoord`, `HigherDimCoord`, plus `RowMajor` / `ColMajor` / `Snake` strategies decoupled from coordinates.
- Site types (`IsingSite`, `PottsSite{Q}`, `XYSite`, `HeisenbergSite`, `EmptySite`) through three layouts (`UniformLayout`, `SublatticeLayout`, `ExplicitLayout`) so mixed-spin and disordered models compose cleanly.
- Element centering trait (`VertexCenter` default, `BondCenter` / `PlaquetteCenter` / `CellCenter` as extension points) for dimer, gauge-link, and flux variables.
- Momentum-space layer: `AbstractMomentumLattice`, `PeriodicMomentumLattice`, `monkhorst_pack` / `gamma_centered` meshes, and `structure_factor` with trait-dispatched fast paths (`LatticeCoreFFTWExt` for Bravais; `LatticeCoreNFFTExt` reserved for the quasicrystal case).
