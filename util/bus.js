const isStrWithLength = require('./library').isStrWithLength
const EventEmitter = require('events').EventEmitter

class Bus extends EventEmitter {
    constructor() {
        super()
        this.code = {
            requestChatRoom: 'requestChatRoom',
            giveChatRoom: 'giveChatRoom'
        }
    }

    /**
     *
     * @param {string} [id] string with length
     */
    requestChatRoom(id) {
        const hasId = isStrWithLength(id)
        if (hasId) {
            this.emit(this.code.requestChatRoom, id)
        } else {
            this.emit(this.code.requestChatRoom)
        }
    }

    /**
     *
     * @param {(x: string | void) => void} func
     */
    listenToRequestChatRoom(func) {
        this.on(this.code.requestChatRoom, func)
    }

    /**
     * @typedef {import('../model/chat-room')} ChatRoom
     * @param {ChatRoom} chatRoom
     */
    giveChatRoom(chatRoom) {
        this.emit(this.code.giveChatRoom, chatRoom)
    }

    /**
     * @typedef {import('../model/chat-room')} ChatRoom
     * @param {(chatRoom?: ChatRoom)  => void} func
     */
    listenToGiveChatRoom(func) {
        this.on(this.code.giveChatRoom, func)
    }
}

const emitter = new Bus()

module.exports = emitter
