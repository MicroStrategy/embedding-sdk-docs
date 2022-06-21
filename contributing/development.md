# Development Guidelines

## Requirements

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above (which can be checked by running `node -v`). You can use [nvm](https://github.com/nvm-sh/nvm) for managing multiple Node versions on a single machine installed.
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Getting Started

1. Fork the repo.
1. Clone the forked repo to your local machine.
1. Run `yarn` in the directory.
1. Run `yarn start` to view the documentation locally.

## Content Styling Guidelines

We want to keep our documentation consistent in styling. More details could be found [here](./content-style-guide.md).

## Adding new content

- All documentation markdown files are located within `./docs/`.
- Every documentation markdown file should have the frontmatter. You should have required `title` and optional `sidebar_label`. Please see the example below:

  ```text/1-2
  ---
  title: Workflow Sample - Authentication
  sidebar_label: Authentication
  ---
  ```

  - `title` is the `h1` heading that shows on the HTML page.
  - `sidebar_label` is the title you want to show in the sidebar navigation.

### Pages ordering on the navigation sidebar and pagination buttons

This is all based on the ordering in `sidebar.js` file.

## Testing your changes

You can run `yarn start` to test your local changes. Make sure everything looks okay before creating a Pull Request.

## Committing your changes

When you try to commit your changes, `yarn eslint`, `yarn prettify`, and `yarn markdownlint` will be run in sequence. If any error is detected, the commit will fail. You need to follow the error messages and suggestions of changes to fix all the errors before committing them.

You can also run `yarn lint` before committing to make sure no errors exist.

## Creating Pull Request

When you finish making changes, and you'd like to propose them for review, fill up the [pull request template](../.github/pull_request_template.md) to open your PR (pull request). You can find more detail on creating a PR in the official GitHub documentation [here](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).
