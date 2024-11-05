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
        url: "/api",
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        processRequest: (data) => ({
            message: data.message
        }),
        processResponse: (response) => response
    }
}
