# Chat Widget Example

## example to use [@mgvts/chat-widget](https://www.npmjs.com/package/@mgvts/chat-widget)

### With Vue 3

```vue
<script>
import { ChatWidget } from "@mgvts/chat-widget";

import '@mgvts/chat-widget/dist/style.css'
</script>

<template>
  <ChatWidget :config="config" class="override-props" />
</template>
```
config is a [ChatConfig](https://github.com/mgvts/chat-widget/blob/main/src/types/ChatConfig.ts) object
example of config is in [src/devConfig.ts](https://github.com/mgvts/chat-widget/blob/main/examples/src/devConfig.ts)

```typescript
import type { ChatConfig } from '@mgvts/chat-widget'

export const config: ChatConfig = {
    uiTexts:  {
        title: 'this is title',
        subtitle: 'this is subtitle',
        inputTitle: 'here is input title',
        placeholder: 'write text here',
    },
    messageHandlers: {
        existOptions: true,
        userMessageShow: (data: { message: string}) => {
            return data.message
        },
        botMessageShow: (data: { content: string }) => {
            return data.content
        },
        optionMessageShow: (data: {options: object}) => {
            const optionsMap = data.options
            if (!optionsMap) return null
            if ('radio' in optionsMap) {
                return {radio: optionsMap.radio}
            } else if ('checkbox' in optionsMap) {
                return {checkbox: optionsMap.checkbox}
            }else {
                return null
            }
        }
    },
    host: {
        url: "example.com",
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        processRequest: (data) => ({
            message: data.message
        }),
        processResponse: (response) => response
    }
}
```

примеры ответа от сервера:
```json
{
    "content": "Получено: radio",
    "timestamp": "2024-11-05T11:29:22.328Z",
    "options": {
        "radio": [
            "answer 1",
            "answer 2"
        ]
    }
}
```
![radio example](./radmeImg/image.png)
```json
{
    "content": "Получено: checkbox",
    "timestamp": "2024-11-05T11:29:33.297Z",
    "options": {
        "checkbox": [
            "choose A",
            "choose B"
        ]
    }
}
```
![checkbox example](./radmeImg/image-1.png)

данные сохраняются в localStorage [chatHistory], поэтому при перезагрузке страницы история сообщений не пропадет

