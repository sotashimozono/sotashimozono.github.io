using UUIDs

new_name = ARGS[1]
new_uuid = string(uuid4())
old_name = "MyModule"

files_to_fix = [
    "Project.toml",
    "src/$old_name.jl",
    "test/runtests.jl",
    "README.md",
    "docs/make.jl",
    "docs/src/index.md",
]

for file in files_to_fix
    if isfile(file)
        content = read(file, String)
        content = replace(content, old_name => new_name)
        if file == "Project.toml"
            content = replace(content, r"uuid = \".*\"" => "uuid = \"$new_uuid\"")
            content = replace(content, r"name = \".*\"" => "name = \"$new_name\"")
        end
        write(file, content)
    end
end

if isfile("src/$old_name.jl")
    mv("src/$old_name.jl", "src/$new_name.jl")
end
