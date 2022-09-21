<!-- markdownlint-disable-file MD041 -->

# Content Styling Guidelines

We try to keep our styling consistent throughout the documentation. Please follow the guidelines to help us provide better documentation.

## Markdownlint

Some rules are enforced by the [`markdownlint`](../.markdownlint.yml).

You can download the [markdownlint linter](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) from the VSCode marketplace, and it will warn you in the markdown files.

To automatically fix these violations when saving a Markdown document, configure Visual Studio Code's [`editor.codeActionsOnSave` setting](https://code.visualstudio.com/docs/getstarted/settings) like so:

```text
"editor.codeActionsOnSave": {
    "source.fixAll.markdownlint": true
}
```

More information about `markdownlint` could be found [here](https://github.com/DavidAnson/markdownlint#rules--aliases).

## Headers

Use two hashes (##) for the headers to begin, and continue moving down the line (###, ####, etc.) for subsections.

For headers that need an ordered list, e.g., "1. Do something in this step", it is recommended to write it like `### Step 1: Do something here`, `### 1. Do something here` or something similar instead of `1. ### Do something here` because this would cause the Table of Contents plugin to show the wrong order.

## Code blocks

- Code blocks (not inline code) should be surrounded by three backticks on either side. The language should also be specified after the first three backticks, like so:

  ````text
  ```bash
  code used in the terminal such as curl
  ```

  ```json
  JSON code
  ```

  ```js
  JavaScript code
  ```

  ```xml
  XML code
  ```

  ```java
  Java code
  ```

  ```html
  HTML code
  ```

  ```text
  any other code that is not language-specific
  ```
  ````

Supported languages are listed [here](https://prismjs.com/#languages-list).

- Inline code blocks only need one backtick in front and behind, like so:

  ```text
  `INLINE CODE BLOCK`
  ```

- Inline code that is also a link should not have a backtick so that it still appears blue. Like the following:

  ```text
  [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/#!/Authentication/postLogin)
  ```

## Ordered List

It is enforced to use `1.` only for all ordered lists for ease of maintenance.

## Emojis

Our docs site supports all [Github-supported emojis](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md). Please use it as needed.

The list below shows the usage of emojis in our Docs site:

- `:heavy_check_mark:` for the checkmark in the table.

## Links and Images

- Make sure you check that all links and images are still functional after adding them into Markdown. Some of the REST API links have spaces in them, which don’t work in Markdown and should be replaced by a `%20` or the appropriate generated characters (you can use inspect on the page to identify the id/anchor link).

- Images in the `/images` folder are linked relatively. The pathway back can be found by looking at the permalink for the page and backing out until the root folder is reached. For example, if you want to access the images from `content/common-workflows.md`, you need to access the images like this: `![ALT TEXT](./images/IMAGE-NAME)`, and if you want to access the images from `content/common-workflows/authentication.md`, you need to access the images like this: `![ALT TEXT](../images/IMAGE-NAME)`.

- Endpoints for REST API should have links if possible.

## Naming conventions

- All folder and file names should have **dashes** (`-`) between **lowercase** letters. There should be no spaces in folder or file names.
- Permalinks for nested files or folders should recognize the nesting; that is, the permalink should be an absolute path from content and include all the folders like `/common-workflows/manage-prompt-objects/prompt-types.html`.
- Lowercase letters only.
- If the page is the root page of the folder, please don’t include the folder name in the permalink, e.g., Use `/common-workflows/filter-data.html` instead of `/common-workflows/filter-data/filter-data.html`.

## Tables

- The recommended converter could convert the basic HTML table to a Markdown table. However, Markdown doesn’t support merged cells (1 cell in 1 row covers multiple smaller rows). You need to add duplicated entries for the wider row manually).

  For example:

  For the HTML table below,

  ![original table example](../docs/images/original_table_example.png)

You need to add "information" cell multiple times manually because the converter cannot handle this correctly. It will omit the "information" cell for the following rows to make the table not correct.

![markdown table example](../docs/images/markdown_table_example.png)

- Use `:heavy_check_mark:` instead of `X` to display the checkmarks.

## Admonitions

We use `:::tip` to to provide some tips, `:::info` to provide some extra information, and `:::danger` to let readers to pay more attention in this section.

Examples:

```text

:::note

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::caution

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::danger

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

```

should be rendered as

![Admonitions](../docs/images/admonitions.png)
