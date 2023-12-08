---
title: Library page APIs
description: Describes which Embedding SDK APIs are available on the MicroStrategy Library home page.
---

The `LibraryPage` object is the manipulator of the MicroStrategy Library home page. It could be got by `embeddingContext.libraryPage`.

The details of the `embeddingContext` object could be seen in [Embedding context](./embedding-context.md).

The APIs under Library page object are as below.

## Library page APIs

### `getAllMyGroups()`

#### Description

This API is used for getting all the group items under "My Groups".

#### Class

`LibraryPage`

#### Return type

This API would return a Promise object that resolves to an object that contains the information of all groups contained in “My Groups“ and “Default Groups“. Its serialized JSON string is as below:

```json
[
  {
    "id": "D1ADEEDFC8D94008A8D66F27CB1EFF47",
    "name": "My Group A"
  },
  {
    "id": "0A88CE2CF43C4242A86A5439850C3EAA",
    "name": "My Group B"
  }
]
```

#### Example

```js
const myGroups = await embeddingContext.libraryPage.getAllMyGroups();
```

### `getAllDefaultGroups()`

#### Description

This API is used for getting all the group items under "Default Groups".

#### Class

`LibraryPage`

#### Return type

This API would return a Promise object that resolves to an object that contains the information of all groups contained in “My Groups“ and “Default Groups“. Its serialized JSON string is as below:

```json
[
  {
    "id": "D1ADEEDFC8D94008A8D66F27CB1EFF47",
    "name": "Default Group A"
  },
  {
    "id": "0A88CE2CF43C4242A86A5439850C3EAA",
    "name": "Default Group B"
  }
]
```

#### Example

```js
const myGroups = await embeddingContext.libraryPage.getAllDefaultGroups();
```

### `setNavigationBarEnabled(enabled: Boolean)`

#### Description

This API is used for enabling or disabling the navigation bar dynamically.

#### Class

`LibraryPage`

#### Input parameters

- `enabled`:

  **Data Type**

  `Boolean`

  **Required?**

  Yes

#### Return type

This API would return a Promise object that resolves to nothing.

#### Example

```js
await embeddingContext.libraryPage.setNavigationBarEnabled(true);
```

#### API errors

This API would report an error in these 2 cases:

- When `enabled` value isn't boolean.
- When `enabled` is true, and the navigation bar is disabled by the application settings.

### `setSidebarVisibility(shown: Boolean)`

#### Description

This API is used for showing or hiding the sidebar.

#### Class

`LibraryPage`

#### Input parameters

- `shown`:

  **Data Type**

  `Boolean`

  **Required?**

  Yes

#### Return type

This API would return a Promise object that resolves to nothing.

#### Example

```js
await embeddingContext.libraryPage.setSidebarVisibility(true);
```

#### API errors

This API would report an error in these 2 cases:

- When `shown` value isn't boolean.
- When `shown` is true, and the sidebar is disabled by the application settings.
