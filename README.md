![Test the action](https://github.com/mwbowers/vs-project-version/workflows/Test%20the%20action/badge.svg)

# Project Version
GitHub action to get the Version from the Visual Studio Project file

## Usage
Create new `.github/workflows/dostuff.yml` file:

```yml
name: Do stuff
on:
  push:
    branches:
      - master

jobs:
  DoStuff:
    name: Do Stuff
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Get version
        id: get_version
        uses: mwbowers81/vs-project-version
        with:
          
          # Filepath of the Project File, relative to root of repository
          AI_PATH: MyProject/Project.csproj
          VER_PLACES: 3

      -name: Next Step
       run: echo "${{ steps.get_version.outputs.ASSEMBLY_VERSION }}"
```

## Inputs

Input | Description
--- | ---
AI_PATH | Filepath of the project file, relative to root of repository
VER_PLACES | Number of parts of the version number to return. 1.2.3.4

## Outputs

Output | Description
--- | ---
VERSION | Version in Project File
