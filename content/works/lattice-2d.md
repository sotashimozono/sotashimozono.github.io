+++
title = "Lattice2D.jl"
description = "Square / Triangular / Honeycomb / Kagome / Lieb / Shastry-Sutherland — unit-cell driven 2D lattices."
date = 2026-05-11
weight = 20

[taxonomies]
category = ["Lattice Suite"]
language = ["Julia"]

[extra]
role = "Geometry"
repo = "https://github.com/sotashimozono/Lattice2D.jl"
docs_stable = "/Lattice2D.jl/stable/"
docs_dev = "/Lattice2D.jl/dev/"
julia_min = "1.10"
tagline_en = "Two-dimensional lattices built from unit cells"
tagline_ja = "ユニットセルから組み立てる2次元格子"
depends_on = ["lattice-core"]
+++

Provides two-dimensional lattices. Given unit-cell information (basis
vectors and connections), arbitrary lattices can be constructed.
Reciprocal vectors, bipartiteness checks, and periodic / open boundary
conditions are first-class. Plotting is available through `materialize`
and `require_finite` (re-exported).

## Available lattices

- Square lattice
- Triangular lattice
- Honeycomb lattice
- Kagome lattice
- Lieb lattice
- Shastry-Sutherland lattice

## Example

```julia
using Lattice2D

# 4x4 Honeycomb lattice with periodic boundary conditions
lat = build_lattice(Honeycomb, 4, 4; boundary=PBC())
println("Total sites: ", lat.N)
println("Is bipartite? ", lat.is_bipartite)
```
