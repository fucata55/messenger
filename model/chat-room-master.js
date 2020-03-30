const isStrWithLength = require('../util/library').isStrWithLength
const Bus = require('../util/bus')
const ChatRoom = require('./chat-room')
const uniqid = require('uniqid')

class ChatRoomMaster {
    constructor() {
        /**
         * @typedef {import('../model/chat-room')} ChatRoom
         * @type ChatRoom[]
         */
        this.rooms = []
        Bus.listenToRequestChatRoom((id) => {
            try {
                const room = isStrWithLength(id) ? this.get(id) : this.create()
                Bus.giveChatRoom(room)
            } catch (error) {}
        })
    }

    handleChat() {}

    create() {
        const id = uniqid('chatRoom')
        return new ChatRoom(id)
    }

    /**
     *
     * @param {string} id string with length
     * @returns {ChatRoom | void}
     */
    get(id) {
        let validInput = isStrWithLength(id)
        /**
         * @type ChatRoom | void
         */
        const result = validInput ? this.rooms.find((room) => room.id === id) : null
        if (result === undefined) {
            throw `room with id ${id} doesn't exist`
        }
        return result
    }
}

module.exports = ChatRoomMaster
