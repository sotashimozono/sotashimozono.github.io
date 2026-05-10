+++
title = "Reversi.jl"
description = "High-performance Othello on StaticArrays — designed for ML/RL research."
date = 2026-05-11
weight = 50

[taxonomies]
category = ["Game / RL"]
language = ["Julia"]

[extra]
role = "Game / RL"
repo = "https://github.com/sotashimozono/Reversi.jl"
docs_stable = "/Reversi.jl/stable/"
docs_dev = "/Reversi.jl/dev/"
julia_min = "1.12"
tagline_en = "Reversi/Othello engine with a clean RL-friendly API"
tagline_ja = "強化学習に組み込みやすい高速 Othello エンジン"
depends_on = []
+++

A high-performance Reversi (Othello) implementation in Julia, built on
StaticArrays.jl for efficient board representation. Designed with
flexibility for machine learning and reinforcement learning research.

## Features

- **Efficient implementation**: StaticArrays.jl for fast, stack-allocated boards.
- **Terminal gameplay**: play interactively in the terminal.
- **Flexible player system**: easy to plug in custom AI players and ML models.
- **Clean API**: simple, well-documented interface for programmatic control.
- **Extensible**: abstract player interface allows new strategies.

## Quick start

```julia
using Reversi

# Human vs Random AI
play_game(HumanPlayer(), RandomPlayer())
```
