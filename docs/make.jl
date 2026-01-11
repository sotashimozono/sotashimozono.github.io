using sotashimozono.github.io
using Documenter

makedocs(
    sitename = "sotashimozono.github.io.jl",
    modules  = [sotashimozono.github.io],
    pages    = [
        "Home" => "index.md"
    ]
)

deploydocs(
    repo = "github.com/sotashimozono/sotashimozono.github.io.jl.git",
)