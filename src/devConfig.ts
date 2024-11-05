import {jsonrepair} from "jsonrepair";

export default {
    styles: '',
    icon: '',
    uiTexts:  {
        title: 'this is title',
        subtitle: 'this is subtitle',
        inputTitle: '',
        placeholder: 'write text here',
    },
    messageHandlers: {
        existOptions: true,
        userMessageShow: (data: { history: {content: string}[] }) => {
            return data.history[0].content
        },
        botMessageShow: (data: { message: string }) => {
            return data.message
        },
        optionMessageShow: (data: object) => {
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
        url: '/proxy',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        processRequest: ({message, messages}) => {
            return {
                history: [{
                    content: message,
                    'role': 'user'
                }]
            }
        },
        processResponse: (ans: { message: string }) => {
            const out = ans.message;
            const start = out.indexOf('{')
            const end = out.lastIndexOf('}')
            return JSON.parse(jsonrepair(out.substring(start, end)))
        }
    }
}
