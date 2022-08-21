# Contributing

Thank you so much for your interest in contributing!. All types of contributions are encouraged and valued.
Please read the [CODE of CONDUCT](CODE_OF_CONDUCT.md).

## Setting Up Your Code

First, fork the repository to your own account and run the following command:

- Clone your repo: `git clone https://github.com/<your_name>/coffee-stores`
- Change directory to the working dir: `cd coffee-stores`
- Install the dependencies: `npm i`

Next, use `git checkout -b <branch_name>` to create a new branch for your work. It's always a good idea to avoid committing changes directly to your `master` branch - this keeps it clean and avoid some weird issues.

Branch names should be a brief description of your changes, such as `fix-typo` for fixing a typo.

> **Note**
> In order to make git commit messages easier to read and faster to reason about, we follow some guidelines on most commits to keep the format predictable. Check [Conventional Commits specification](https://www.conventionalcommits.org/) for more information about our guidelines.

## :art: Code linting And Formatting

To check the code and styles quality, use the following command:

```sh
npm run lint
```

To fix the linting errors, use the following command:

```sh
npm run format
```

It is advised to run this command before committing or opening a pull request.

## Pull Request

Push your changes to your forked repository by using `git push -u origin <branch_name>`.

- `-u` tells `git` to set the upstream, it's the same as `--set-upstream`
- `origin` tells `git` to push to your fork
- `branch_name` tells `git` to push to a branch - this MUST match the name of the branch you created locally.

Make sure to change the PR title in something like: `fix: correct typo` or `feat: add node latest`

## License​

By contributing to this project, you agree that your contributions will be licensed under its [AGPL LICENSE](LICENSE).
