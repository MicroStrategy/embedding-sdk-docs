---
title: Add navigation
description: Once you have embedded a dossier, you can use helper methods in the Embedding SDK to let users navigate within the dashboard. For example, you can add code to get the table of contents for the dossier, go to the previous or next page, navigate to a specific page, get the current page or chapter, get a specific page, or get a list of pages, chapters and visualizations.
---

The Embedding SDK allows you to quickly integrate dossiers into a web application in a responsive manner. Once you have embedded a dossier, you can use helper methods in the Embedding SDK to let users navigate within the dashboard. For example, you can add code to get the table of contents for the dossier, go to the previous or next page, navigate to a specific page, get the current page or chapter, get a specific page, or get a list of pages, chapters and visualizations.

:::tip

To help you get started, we have provided a [page navigation example in the Embedding SDK Playground](https://microstrategy.github.io/playground/?example=g14).

:::

## Helper methods for navigation

You can use the methods described below to navigate within the dashboard. You can get the table of contents for the dossier, go to the previous or next page, navigate to a specific page, get the current page or chapter, get a specific page, or get a list of pages, chapters and visualizations.

Most of the navigation is performed using methods of the Dossier class, but there is one method for navigation in the Chapter class.

### getTableContent()

#### Class

`Dossier`

#### Return type

`Object`

#### Description

Return the structure of the embedded dashboard in the following format:

```json
{
  "chapters": [
    {
      "name": "Chapter01",
      "nodeKey": "K36",
      "pages": [
        {
          "name": "Page1",
          "nodeKey": "K53--K46"
        },
        {
          "name": "Page2",
          "nodeKey": "K53--K48"
        }
      ]
    },
    {
      "name": "Chapter01",
      "nodeKey": "K36",
      "pages": [
        {
          "name": "Page1",
          "nodeKey": "K53--K46"
        }
      ]
    }
  ]
}
```

#### Example

```js
embedDossier.getTableContent();
```

### goToPrevPage()

#### Class

`Dossier`

#### Return type

`Promise`

#### Description

Go to the previous page of the embedded dashboard.

Return a promise, resolved with

```json
{
  "valid": true,
  "message": "page loading success!"
}
```

when navigation is successful.

Rejected with an error when navigation fails.

#### Example

```js
embedDossier.goToPrevPage();
```

### goToNextPage()

#### Class

`Dossier`

#### Return type

`Promise`

#### Description

Go to the next page of the embedded dashboard.

Return a promise, resolved with

```json
{
  "valid": true,
  "message": "page loading success!"
}
```

when navigation is successful.

Rejected with an error when navigation fails.

#### Example

```js
embedDossier.goToNextPage();
```

### navigateToPage(page:Page)

#### Class

`Dossier`

#### Return type

`Promise`

#### Description

Switch to the specified page of the embedded dashboard.

Return a promise, resolved with

```json
{
  "valid": true,
  "message": "page loading success!"
}
```

when navigation is successful.

Rejected with an error when navigation fails.

#### Example

```js
const lastPageOfChapter = embedDossier.getCurrentChapter().getLastPage();
embedDossier.navigateToPage(lastPageOfChapter);
```

### getCurrentChapter()

#### Class

`Dossier`

#### Return type

`Chapter`

#### Description

Return the current chapter of the embedded dashboard.

#### Example

```js
embedDossier.getCurrentChapter();
```

### getCurrentPage()

#### Class

`Dossier`

#### Return type

`Page`

#### Description

Return the current page of the embedded dashboard.

#### Example

```js
embedDossier.getCurrentPage();
```

### getPageByNodeKey(nodeKey)

#### Class

`Dossier`

#### Return type

`Page`

#### Description

Return the page of the embedded dashboard with the specified `nodeKey`.

You can get the `nodeKey` from the return value of `getTableContent()`, or You can get the `nodeKey` from the `nodeKey` property of the Page object (`Page.nodeKey`).

#### Example

```js
embedDossier.getPageByNodeKey("K52");
```

### getChapterList()

#### Class

`Dossier`

#### Return type

`Chapter[]`

#### Description

Return a list of all chapters in the embedded dashboard.

#### Example

```js
embedDossier.getChapterList();
```

### getCurrentPageVisualizationList()

#### Class

`Dossier`

#### Return type

`Promise([{key:vizKey, name: vizName}])`

#### Description

Return an array of all the visualizations in the current page of the embedded dashboard.

#### Example

```js
embedDossier.getCurrentPageVisualizationList();
```

### openFilterSummaryBar()

#### Class

`Dossier`

#### Return type

`null`

#### Description

Open the filter summary bar.

#### Example

```js
embedDossier.openFilterSummaryBar();
```

### closeFilterSummaryBar()

#### Class

`Dossier`

#### Return type

`null`

#### Description

Close the filter summary bar.

#### Example

```js
embedDossier.closeFilterSummaryBar();
```

### getPageList()

#### Class

`Chapter`

#### Return type

`Page[]`

#### Description

Return an array of all the pages in this chapter of the embedded dashboard.

#### Example

```js
chapter.getPageList();
```
