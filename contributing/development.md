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
- Every documentation markdown file should have the frontmatter. You should have `sidebar_position` and `title`. Please see the example below:

  ```text/1-2
  ---
  sidebar_position: 1
  sidebar_label: Authentication
  title: Workflow Sample - Authentication
  ---
  ```

  - `sidebar_position` is used by ordering the pages. The number is folder level based only. If you want to place your page in between two pages, you just need to make sure your `sidebar_position` value is in between. For example, if you want to add a new page between two exisiting pages which have `sidebar_position` values as `1` and `2`, you can use float number `1.1`, `1.5` or even `1.05` as the value.
  - `sidebar_label` is the title you want to show in the sidebar navigation.
  - `title` is the `h1` heading that shows on the HTML page.

### Pages ordering on the navigation sidebar and pagination buttons

This is all based on the `sidebar_position` values and folder structure. The `sidebar_position` value comparision is only folder level based.

## Testing your changes

You can run `yarn start` to test your local changes. Make sure everything looks okay before creating a Pull Request.

## Committing your changes

When you try to commit your changes, `yarn eslint`, `yarn prettify`, and `yarn markdownlint` will be run in sequence. If any error is detected, the commit will fail. You need to follow the error messages and suggestions of changes to fix all the errors before committing them.

You can also run `yarn lint` before committing to make sure no errors exist.

## Creating Pull Request

When you finish making changes, and you'd like to propose them for review, fill up the [pull request template](../.github/pull_request_template.md) to open your PR (pull request). You can find more detail on creating a PR in the official GitHub documentation [here](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).
