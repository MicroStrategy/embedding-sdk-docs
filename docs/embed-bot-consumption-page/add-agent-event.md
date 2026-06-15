---
title: Add agent event handling
description:
  Agent events allow an embedded Strategy agent consumption page to communicate with the container
  page. You can listen for agent events and provide handler functions to respond to user actions.
---

Agent events allow an embedded Strategy agent consumption page to communicate with the container page.
You can register agent event handlers to track user interactions, trigger custom workflows, or
synchronize your host application state.

Once you have embedded the agent page by using
`microstrategy.embeddingContexts.embedBotConsumptionPage(props)`, you can use
`embeddingContext.registerEventHandler(evtName, handler)` to listen for events.

## Agent event types

Use the `AgentEventType` enumeration in your application code to register handlers.

```js
const AgentEventType = {
  ON_QUESTION_SUBMITTED: "onQuestionSubmitted",
  ON_ANSWER_RECEIVED: "onAnswerReceived",
  ON_ERROR: "onError",
  ON_CONVERSATION_SWITCH: "onConversationSwitch",
  ON_NEW_CHAT: "onNewChat",
  ON_THUMBS_UP: "onThumbsUp",
  ON_THUMBS_DOWN: "onThumbsDown",
  ON_FOLLOW_UP: "onFollowUp",
  ON_SOURCE_CLICK: "onSourceClick",
  ON_CHAT_DELETED: "onChatDeleted",
  ON_CLEAR_HISTORY: "onClearHistory",
  ON_CLEAR_ALL_CHATS: "onClearAllChats",
  ON_ASK_AGAIN: "onAskAgain",
};
```

## Register and remove handlers

Use `registerEventHandler` to bind a callback and `removeEventHandler` to unbind it.

```js
const onQuestionSubmittedHandler = (content) => {
  // Add your own logic here
  console.log("Question submitted", content);
};

embeddingContext.registerEventHandler(
  AgentEventType.ON_QUESTION_SUBMITTED,
  onQuestionSubmittedHandler
);

// Later, when cleanup is needed:
embeddingContext.removeEventHandler(
  AgentEventType.ON_QUESTION_SUBMITTED,
  onQuestionSubmittedHandler
);
```

## Events

The following sections describe the supported agent events.

### onQuestionSubmitted

#### Event enumeration

`AgentEventType.ON_QUESTION_SUBMITTED`

#### Description

Raised when a user submits a question to the agent.

#### Content

Object containing the submitted question context.

#### Code example

```js
embeddingContext.registerEventHandler(
  AgentEventType.ON_QUESTION_SUBMITTED,
  questionSubmittedHandler
);
```

#### Content example

```json
{
  "text": "hi",
  "conversationId": "21A1AD8B96364095BDF92FC1E297C75A"
}
```

### onAnswerReceived

#### Event enumeration

`AgentEventType.ON_ANSWER_RECEIVED`

#### Description

Raised when the agent receives an answer for a submitted question.

#### Content

Object containing answer metadata and answer body.

#### Code example

```js
embeddingContext.registerEventHandler(AgentEventType.ON_ANSWER_RECEIVED, answerReceivedHandler);
```

#### Content example

```json
{
  "questionId": "B7CA92F04B9FAE8D941C3E9B7E0CD754:DC8E28DFF1C84F48AA4F56BA7368CFC4:1E4A24D905D14B469512A38513AC7469",
  "answer": {
    "text": "Hi, welcome back!"
  }
}
```

### onError

#### Event enumeration

`AgentEventType.ON_ERROR`

#### Description

Raised when the agent flow encounters an error.

#### Content

Object containing `message` and `type`.

#### Code example

```js
embeddingContext.registerEventHandler(AgentEventType.ON_ERROR, errorHandler);
```

#### Content example

```json
{
  "message": "{\"message\":\"Oops. Something went wrong. Please try again.\",\"details\":\"\"}",
  "type": "question_streaming_error"
}
```

### onConversationSwitch

#### Event enumeration

`AgentEventType.ON_CONVERSATION_SWITCH`

#### Description

Raised when a user switches to another conversation.

#### Content

Object containing the current `conversationId`.

#### Code example

```js
embeddingContext.registerEventHandler(
  AgentEventType.ON_CONVERSATION_SWITCH,
  conversationSwitchHandler
);
```

#### Content example

```json
{
  "conversationId": "1E4A24D905D14B469512A38513AC7469"
}
```

### onNewChat

#### Event enumeration

`AgentEventType.ON_NEW_CHAT`

#### Description

Raised when a user starts a new chat.

#### Content

Object containing the newly created conversation identifier.

#### Code example

```js
embeddingContext.registerEventHandler(AgentEventType.ON_NEW_CHAT, newChatHandler);
```

#### Content example

```json
{
  "conversationId": "40C259C9854C4AC1A6C4D73721769D18"
}
```

### onThumbsUp

#### Event enumeration

`AgentEventType.ON_THUMBS_UP`

#### Description

Raised when a user gives positive feedback to an answer.

#### Content

Object containing `messageId`.

#### Code example

```js
embeddingContext.registerEventHandler(AgentEventType.ON_THUMBS_UP, thumbsUpHandler);
```

#### Content example

```json
{
  "messageId": "B7CA92F04B9FAE8D941C3E9B7E0CD754:DC8E28DFF1C84F48AA4F56BA7368CFC4:1E4A24D905D14B469512A38513AC7469"
}
```

### onThumbsDown

#### Event enumeration

`AgentEventType.ON_THUMBS_DOWN`

#### Description

Raised when a user gives negative feedback to an answer.

#### Content

Object containing `messageId`.

#### Code example

```js
embeddingContext.registerEventHandler(AgentEventType.ON_THUMBS_DOWN, thumbsDownHandler);
```

#### Content example

```json
{
  "messageId": "B7CA92F04B9FAE8D941C3E9B7E0CD754:DC8E28DFF1C84F48AA4F56BA7368CFC4:1E4A24D905D14B469512A38513AC7469"
}
```

### onFollowUp

#### Event enumeration

`AgentEventType.ON_FOLLOW_UP`

#### Description

Raised when a user clicks or sends a follow-up question.

#### Content

Object containing `messageId`.

#### Code example

```js
embeddingContext.registerEventHandler(AgentEventType.ON_FOLLOW_UP, followUpHandler);
```

#### Content example

```json
{
  "messageId": "B7CA92F04B9FAE8D941C3E9B7E0CD754:DC8E28DFF1C84F48AA4F56BA7368CFC4:1E4A24D905D14B469512A38513AC7469"
}
```

### onSourceClick

#### Event enumeration

`AgentEventType.ON_SOURCE_CLICK`

#### Description

Raised when a user clicks a source reference in an answer.

#### Content

Object containing the clicked source metadata.

#### Code example

```js
embeddingContext.registerEventHandler(AgentEventType.ON_SOURCE_CLICK, sourceClickHandler);
```

#### Content example

```json
{
  "sourceId": "6703BC33A1F74D3895FAE1403EB0401D",
  "name": "AUTO_MD.md",
  "url": "https://..."
}
```

### onChatDeleted

#### Event enumeration

`AgentEventType.ON_CHAT_DELETED`

#### Description

Raised when a user deletes a single chat conversation.

#### Content

Object containing the deleted conversation identifier.

#### Code example

```js
embeddingContext.registerEventHandler(AgentEventType.ON_CHAT_DELETED, chatDeletedHandler);
```

#### Content example

```json
{
  "conversationId": "1E4A24D905D14B469512A38513AC7469"
}
```

### onClearHistory

#### Event enumeration

`AgentEventType.ON_CLEAR_HISTORY`

#### Description

Raised when a user clears the history inside the active conversation.

#### Content

Object containing the affected conversation identifier.

#### Code example

```js
embeddingContext.registerEventHandler(AgentEventType.ON_CLEAR_HISTORY, clearHistoryHandler);
```

#### Content example

```json
{
  "conversationId": "1E4A24D905D14B469512A38513AC7469"
}
```

### onClearAllChats

#### Event enumeration

`AgentEventType.ON_CLEAR_ALL_CHATS`

#### Description

Raised when a user clears all chat conversations.

#### Content

Empty object.

#### Code example

```js
embeddingContext.registerEventHandler(AgentEventType.ON_CLEAR_ALL_CHATS, clearAllChatsHandler);
```

#### Content example

```json
{}
```

### onAskAgain

#### Event enumeration

`AgentEventType.ON_ASK_AGAIN`

#### Description

Raised when a user triggers Ask Again on a previous question.

#### Content

Object containing `messageId`.

#### Code example

```js
embeddingContext.registerEventHandler(AgentEventType.ON_ASK_AGAIN, askAgainHandler);
```

#### Content example

```json
{
  "messageId": "B7CA92F04B9FAE8D941C3E9B7E0CD754:DC8E28DFF1C84F48AA4F56BA7368CFC4:4C63C7442E4747D8AB74A96B2"
}
```

## Best practices

- Register handlers after `embedBotConsumptionPage(props)` resolves.
- Remove handlers when your host view is unmounted or destroyed.
- Keep handlers lightweight and push long-running work to async tasks.
- Use `onError` to centralize fallback behavior and diagnostics.
