---
title: The customized UI settings in Embedding SDK
description: The Embedding SDK enables you to customize the UI components of all embedded pages, like MicroStrategy home page, dossier consumption page, dossier authoring page, and report consumption page.
---

The Embedding SDK supports the user to customize the UI components of all embedded pages, including MicroStrategy home page, dossier consumption page, dossier authoring page, and report consumption page. To do this, you need to set the input parameters `props.customUi` in the functions below:

- `microstrategy.embeddingContexts.embedLibraryPage(props)`

Here is an example:

```js
microstrategy.embeddingContexts.embedLibraryPage({
  serverUrl: "{YOUR_LIBRARY_SERVER_URL}",
  placeholder: document.getElementById("container"),
  customUi: {
    reportConsumption: {
      navigationBar: {
        enabled: true,
        gotoLibrary: true,
        pageBy: true,
        reset: true,
        reExecute: true,
        filter: true,
        share: {
          enabled: true,
        },
        account: {
          enabled: true,
        },
        reprompt: true,
      },
    },
    library: {
      navigationBar: {
        enabled: true,
        sortAndFilter: true,
        title: true,
        searchBar: true,
        createNew: {
          enabled: true,
        },
        notifications: true,
        multiSelect: {
          enabled: true,
        },
        account: {
          enabled: true,
        },
      },
      sideBar: {
        enabled: true,
        show: false,
      },
    },
    dossierConsumption: {
      navigationBar: {
        enabled: true,
        gotoLibrary: false,
        title: false,
        toc: true,
        reset: true,
        reprompt: false,
        share: false,
        comment: true,
        notification: false,
        filter: true,
        options: true,
        search: false,
        bookmark: true,
        undoRedo: true,
        edit: false,
      },
    },
    dossierAuthoring: {
      toolbar: {
        tableOfContents: {
          visible: false,
        },
        undo: {
          visible: false,
        },
        redo: {
          visible: false,
        },
        refresh: {
          visible: false,
        },
        pauseDataRetrieval: {
          visible: false,
        },
        dividerLeft: {
          visible: false,
        },
        addData: {
          visible: false,
        },
        addChapter: {
          visible: false,
        },
        addPage: {
          visible: false,
        },
        insertVisualization: {
          visible: false,
        },
        insertFilter: {
          visible: false,
        },
        insertText: {
          visible: false,
        },
        insertImage: {
          visible: false,
        },
        insertHtml: {
          visible: false,
        },
        insertShape: {
          visible: false,
        },
        insertPanelStack: {
          visible: false,
        },
        insertInfoWindow: {
          visible: false,
        },
        save: {
          visible: false,
        },
        dividerRight: {
          visible: false,
        },
        more: {
          visible: false,
        },
        freeformLayout: {
          visible: false,
        },
        nlp: {
          visible: false,
        },
        responsiveViewEditor: {
          visible: false,
        },
        responsivePreview: {
          visible: false,
        },
      },
      menubar: {
        library: {
          visible: false,
        },
      },
    },
  },
});
```

In the example above, the user uses `microstrategy.embeddingContexts.embedLibraryPage` to embed a MicroStrategy Library home page. After the embedded page is loaded, the user may click a dossier in the dossier list to go to a dossier consumption page, or RMC the "Edit" menu to go to a dossier authoring page. The user could use fields `props.customUi.dossierConsumption` and `props.customUi.dossierAuthoring` to show or hide the components in these 2 pages.

The details of `props.customUi` are as below:

### `props.customUi.library`

This field is used to customized the UI components on the MicroStrategy Library home page. It has 2 properties: `sidebar` and `navigationBar`.

#### Properties

##### `sidebar`

Use the `sidebar` object to customize the sidebar on the MicroStrategy Library home page. All detailed properties below are `Boolean`.

- `show`
  - Show the Library home page sidebar or not. If the sidebar is disabled in custom application, or `prop.customUi.library.sidebar.enabled` is false, the true value wouldn’t take effect.
  - Default value: `false`.
- `enabled`
  - Show the "show sidebar" icon or not.
  - Default value: `true`.

##### `navigationBar`

Use the `navigationBar` object to customize navigation bar on the MicroStrategy Library home page. All detailed properties below are `Boolean`.

- `enabled`
  - Show the Library home page navigation bar or not. If the navigation bar is disabled in custom application, the true value wouldn’t take effect, which is the same as the original dossier navigation bar icons behavior.
  - Default value: `true`.
- `sortAndFilter`
  - Show the library filter icon and the search bar on the Library home page navigation bar or not.
  - Default value: `true`.
- `title`
  - Show the title "Library" on the Library home page navigation bar or not.
  - Default value: `true`.
- `searchBar`
  - Show the search bar on the Library home page navigation bar or not.
  - Default value: `true`.
- `createNew.enabled`
  - Show the "Create New" button on the Library home page navigation bar or not.
  - Default value: `true`.
- `notifications`
  - Show the notification button on the Library home page navigation bar or not.
  - Default value: `true`.
- `multiSelect.enabled`
  - Show the multi-select button on the Library home page navigation bar or not.
  - Default value: `true`.
- `account.enabled`
  - Show the account button on the Library home page navigation bar or not.
  - Default value: `true`.

#### Required?

No

### `props.customUi.dossierConsumption`

This field is used to customized the UI components on the dossier consumption page. It has 1 property: `navigationBar`.

#### Properties

##### `navigationBar`

Use the `navigationBar` object to customize the navigation bar on the page. All detailed properties below are `Boolean`.

- `enabled`
  - Enable or disable the navigation bar.
  - Default value: `false` if this field is in `microstrategy.dossier.create()`, and `true` if this field is in `microstrategy.embedddingContexts.embedLibraryPage()`.
- `gotoLibrary`
  - Show or hide the gotoLibrary icon.
  - Default value: `true`.
- `title`
  - Show or hide the dossier title.
  - Default value: `true`.
- `toc`
  - Show or hide the TOC icon.
  - Default value: `true`.
- `reset`
  - Show or hide the reset icon.
  - Default value: `true`.
- `reprompt`
  - Show or hide the reprompt icon.
  - Default value: `true`.
- `share`
  - Show or hide the share icon.
  - Default value: `true`.
- `comment`
  - Show or hide the comment icon.
  - Default value: `true`.
- `notification`
  - Show or hide the notification icon.
  - Default value: `true`.
- `filter`
  - Show or hide the filter icon.
  - Default value: `true`.
- `options`
  - Show or hide the options icon.
  - Default value: `true`.
- `search`
  - Show or hide the search icon.
  - Default value: `true`.
- `bookmark`
  - Show or hide the bookmark icon.
  - Default value: `true`.
- `undoRedo`
  - Show or hide the undo and redo buttons.
  - Default value: `true`.
- `edit`
  - Show or hide the edit icon.
  - Default value: `false`.

#### Required?

No

### props.customUi.dossierAuthoring

This field is used to customized the UI components on the dossier authoring page. It has 2 properties: `toolbar` and `menubar`.

#### Properties

##### `toolbar`

Use the `toolbar` object to customize the visibilities of the toolbar icons on the dossier authoring page. All detailed properties below are `Boolean`.

- `tableOfContents.visible`
  - Show the TOC button on the dossier authoring page toolbar or not.
  - Default value: `true`.
- `undo.visible`
  - Show the undo button on the dossier authoring page toolbar or not.
  - Default value: `true`.
- `redo.visible`
  - Show the redo button on the dossier authoring page toolbar or not.
  - Default value: `true`.
- `refresh.visible`
  - Show the refresh button on the dossier authoring page toolbar or not.
  - Default value: `true`.
- `pauseDataRetrieval.visible`
  - Show the "pauseDataRetrieval" button on the dossier authoring page toolbar or not.
  - Default value: `true`.
- `dividerLeft.visible`
  - Show the left divider on the dossier authoring page toolbar or not.
  - Default value: `true`.
- `addData.visible`
  - Show the "Add Data" button on the dossier authoring page toolbar or not.
  - Default value: `true`.
- `addChapter.visible`
  - Show the "Add Chapter" button on the dossier authoring page toolbar or not.
  - Default value: `true`.
- `addPage.visible`
  - Show the "Add Page" button on the dossier authoring page toolbar or not.
  - Default value: `true`.
- `insertVisualization.visible`
  - Show the "Visualization" button on the dossier authoring page toolbar or not.
  - Default value: `true`.
- `insertFilter.visible`
  - Show the "Filter" button on the dossier authoring page toolbar or not.
  - Default value: `true`.
- `insertText.visible`
  - Show the "Text" button on the dossier authoring page toolbar or not.
  - Default value: `true`.
- `insertImage.visible`
  - Show the "Image" button on the dossier authoring page toolbar or not.
  - Default value: `true`.
- `insertHtml.visible`
  - Show the "Html" button on the dossier authoring page toolbar or not.
  - Default value: `true`.
- `insertShape.visible`
  - Show the "Shape" button on the dossier authoring page toolbar or not.
  - Default value: `true`.
- `insertPanelStack.visible`
  - Show the "Panel Stack" button on the dossier authoring page toolbar or not.
  - Default value: `true`.
- `insertInfoWindow.visible`
  - Show the "Information Window" button on the dossier authoring page toolbar or not.
  - Default value: `true`.
- `save.visible`
  - Show the save button on the dossier authoring page toolbar or not.
  - Default value: `true`.
- `dividerRight.visible`
  - Show the right divider on the dossier authoring page toolbar or not.
  - Default value: `true`.
- `more.visible`
  - Show the "More" button(Only shown in small window) on the dossier authoring page toolbar or not.
  - Default value: `true`.
- `freeformLayout.visible`
  - Show the "Freeform Layout" button on the dossier authoring page toolbar or not.
  - Default value: `true`.
- `nlp.visible`
  - Show the nlp button on the dossier authoring page toolbar or not.
  - Default value: `true`.
- `responsiveViewEditor.visible`
  - Show the "Responsive View Editor" button on the dossier authoring page toolbar or not.
  - Default value: `true`.
- `responsivePreview.visible`
  - Show the "Responsive Preview" button on the dossier authoring page toolbar or not.
  - Default value: `true`

##### `menubar`

Use the `menubar` object to customize the visibilities of the menubar items on the dossier authoring page. All detailed properties below are `Boolean`.

- `library.visible`
  - Show the Library home icon on the dossier authoring page menubar or not.
  - Default value: `true`.

### `props.customUi.reportConsumption`

This field is used to customize the UI components on the report consumption page. It has 1 property: `navigationBar`.

#### Properties

##### `navigationBar`

Use the `navigationBar` object to customize the navigation bar on the page. All detailed properties below are `Boolean`.

- `enabled`
  - Enable or disable the navigation bar in report consumption page.
  - Default value: `true`.
- `gotoLibrary`
  - Show or hide the gotoLibrary icon.
  - Default value: `true`.
- `pageBy`
  - Show or hide the pageBy icon.
  - Default value: `true`.
- `reset`
  - Show or hide the reset icon.
  - Default value: `true`.
- `reExecute`
  - Show or hide the reExecute icon.
  - Default value: `true`.
- `filter`
  - Show or hide the filter icon.
  - Default value: `true`.
- `reprompt`
  - Show or hide the re-prompt icon.
  - Default value: `true`.
- `share.enabled`
  - Show or hide the share icon.
  - Default value: `true`.
- `account.enabled`
  - Show or hide the account icon.
  - Default value: `true`.

#### Required?

No
