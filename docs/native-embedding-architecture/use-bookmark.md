---
title: Manage bookmarks on a dashboard
description: The user can use Native Embedding SDK API to get the bookmark list of a dashboard.
---

<Available since="Strategy ONE December 2025"/>

The user can use bookmarks to store multiple pieces of copies for one dashboard object. These bookmarks are independent, so the manipulations on one bookmark will not affect another.

For example, if you have the requirements to show a visualization in one dossier multiple times on your web page, and these visualizations should have different filters, you can create a bookmark for each visualization copy. Here is an example:

## Example Case

### Embed a normal visualization

At start, the user uses the old APIs to create an environment and load a dossier, then embed some visualizations:

```js
const mstrEnvironment = await microstrategy.embeddingComponent.environments.create({
  serverUrl: configs.serverUrl,
  hasExtraCheckBeforeApiCall: false,
  getAuthToken,
});
const mstrDossier = await mstrEnvironment.loadDossier({
  projectId: configs.projectId,
  objectId: configs.objectId,
});
await mstrDossier.refresh([
  {
    key: "W65",
    container: document.getElementById("container1"),
  },
]);
```

### Copy the visualization to another container

After the visualization is embedded, the user can use a “copy“ command (Might be invoked by some menu implemented by the user) to execute the APIs

```js
const { id } = await mstrDossier.createNewBookmark({
  name: "Visualization A copy 1",
});
const mstrDossierCopy = await mstrEnvironment.loadDossier({
  projectId,
  dossierId,
  bookmarkId: id,
});
await mstrDossierCopy.refresh([
  {
    key: "W65",
    container: document.getElementById("container2"),
  },
]);
```

Now we can see the original visualization `W65` is in "container1" and the copied visualization `W65` is in "container2". We can apply different filter content to the 2 visualizations as below. On one visualization, the user can do manipulations, which will not affect the other visualization.

### Apply different filters to different visualization copies

```js
// These 2 APIs can execute at the same time. No need to await the 1st API call.
mstrDossier.applyFilter({
  key: "W181",
  currentSelection: {
    elements: [
      {
        id: "h6;8D679D4511D3E4981000E787EC6DE8A4",
        name: "June",
      },
    ],
  },
});
mstrDossierCopy.applyFilter({
  key: "W181",
  currentSelection: {
    elements: [
      {
        id: "h4;8D679D4511D3E4981000E787EC6DE8A4",
        name: "April",
      },
    ],
  },
});
```

The "Copy" process in steps 2-3 can be done for multiple times, and can be based on the original visualization or the copied visualization.

### Reload the visualization copies by bookmarks

The user needs to store the bookmark IDs for the copied visualizations. If the page is refreshed, the user needs to call the following APIs to restore all the visualization’s latest status. Please note that all the bookmarks' instances can be created in parallel:

```js
const mstrEnvironment = await microstrategy.embeddingComponent.environments.create({
  serverUrl: configs.serverUrl,
  hasExtraCheckBeforeApiCall: false,
  getAuthToken,
});

async function showOriginalVisualization(containerId) {
  const mstrDossier = await mstrEnvironment.loadDossier({
    projectId,
    dossierId,
  });
  await mstrDossier.refresh([
    {
      key: "W65",
      container: document.getElementById(containerId),
    },
  ]);
  return mstrDossier;
}

async function showCopiedVisualization(bookmarkId, containerId) {
  const mstrDossierCopy = await mstrEnvironment.loadDossier({
    projectId,
    dossierId,
    bookmarkId,
  });
  await mstrDossierCopy.refresh([
    {
      key: "W65",
      container: document.getElementById(containerId),
    },
  ]);
  return mstrDossierCopy;
}

const mstrDossiers = await Promise.all([
  showOriginalVisualization("container1"),
  showCopiedVisualization(bookmarkIdA, "container2"),
  showCopiedVisualization(bookmarkIdB, "container3"),
  showCopiedVisualization(bookmarkIdC, "container4"),
]);
```

## APIs

### MstrDossier.createNewBookmark(props)

#### Function

`async MstrDossier.createNewBookmark(props)`

#### Example

```js
const bookmark = await mstrDossier.createNewBookmark({
  name: "Visualization A copy 1",
});
```

#### New Input Parameters

| New Parameter name | Data Type | Description            | Default Value | Is Required |
| ------------------ | --------- | ---------------------- | ------------- | ----------- |
| props.name         | string    | The new bookmark name. | N/A           | true        |

#### Response

A Promise object that resolves to an object like:

```json
{
  "id": "07002F50734DC255D70A37BA1962B3A5"
}
```

#### API Errors

| Error case                                                                              | Error handling                   | Error message                                                                                                         |
| --------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| The input parameter fails input validation: The bookmarkName isn't a string or is empty | The error object could be caught | The validation error                                                                                                  |
| The dossier object doesn’t have a shortcut                                              | The error object could be caught | “This dossier doesn’t have a shortcut, so it can’t be used to create a bookmark. Please add it to the Library first.” |
| The background REST API fails                                                           | Caught by custom error handler   | The error message provided by the REST API                                                                            |

### MstrDossier.deleteBookmark()

The user can use this API to get a full bookmark list of the dossier. It can be used for the initial loading.

#### Function

`async MstrDossier.deleteBookmark(bookmarkId)`

#### Example

```js
await mstrDossier.deleteBookmark(bookmarkId);
```

#### Response

N/A

#### API Errors

| Error case                    | Error handling                 | Error message                              |
| ----------------------------- | ------------------------------ | ------------------------------------------ |
| The background REST API fails | Caught by custom error handler | The error message provided by the REST API |

### MstrDossier.getAvailableBookmarkList()

The user can use this API to get a full bookmark list of the dossier. It can be used for the initial loading.

#### Function

`async MstrDossier.getAvailableBookmarkList()`

#### Example

```js
const bookmarkList = await mstrDossier.getAvailableBookmarkList();
```

#### Response

```json
[
  {
    "id": "35D095A8114E7C1469ED87B1F21533B9",
    "name": "Visualization A copy 1"
  },
  {
    "id": "46D095A8114E7C1469ED87B1F21533B9",
    "name": "Visualization A copy 2"
  }
]
```

#### API Errors

| Error case                    | Error handling                 | Error message                              |
| ----------------------------- | ------------------------------ | ------------------------------------------ |
| The background REST API fails | Caught by custom error handler | The error message provided by the REST API |
