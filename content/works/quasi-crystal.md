+++
title = "QuasiCrystal.jl"
description = "Aperiodic lattices: Fibonacci / Penrose / Ammann-Beenker — unified with `AbstractLattice`."
date = 2026-05-11
weight = 30

[taxonomies]
category = ["Lattice Suite"]
language = ["Julia"]

[extra]
role = "Geometry"
repo = "https://github.com/sotashimozono/QuasiCrystal.jl"
docs_stable = "/QuasiCrystal.jl/stable/"
docs_dev = "/QuasiCrystal.jl/dev/"
julia_min = "1.10"
tagline_en = "Aperiodic structures via the AbstractLattice interface"
tagline_ja = "AbstractLattice インターフェース上の準結晶構造"
depends_on = ["lattice-core"]
+++

Quasicrystal structures (Fibonacci sequence, Penrose tile,
Ammann-Beenker lattice) accessible through the same `AbstractLattice{D}`
interface as periodic lattices, so downstream Monte Carlo / spectral
codes can run uniformly on either kind of structure.

## Available structures

- Fibonacci Lattice
- Penrose Tile
- Ammann-Beenker Lattice

## Unified interface

Periodic lattices and quasicrystals expose the same methods:
`get_positions`, `get_bonds`, `get_nearest_neighbors`, `num_sites`,
`num_bonds`. Package quality is checked on CI via Aqua.jl (`Aqua.test_all`).
