const ChatRoom = require('./chat-room')

const isObj = require('../util/library').isObj
const isStr = require('../util/library').isStr
const isStrWithLength = require('../util/library').isStrWithLength
const Bus = require('../util/bus')

class User {
    constructor(o) {
        const validInput = isObj(o) && isStr(o.id) && isStr(o.name)
        this.id = validInput ? o.id : ''
        this.name = validInput ? o.name : ''
        /**
         * @type string[]
         */
        this.chatRoomIds = []
    }

    chat() {}

    /**
     * @param {string} id room id
     * @returns {Promise<ChatRoom>} a promise of chat room
     */
    requestChatRoom(id) {
        const hasId = isStrWithLength(id)
        const result = new Promise((resolve, reject) => {
            Bus.listenToGiveChatRoom((chatRoom) => {
                if (hasId && id === chatRoom.id) {
                    // first time in room
                    if (!this.chatRoomIds.includes(id)) {
                        this.chatRoomIds.push(id)
                    }
                } else if (!hasId) {
                    this.chatRoomIds.push(chatRoom.id)
                } else {
                    reject(`request chatroom ${id} but received chatroom ${chatRoom.id}`)
                }
                resolve(chatRoom)
            })
        })
        Bus.requestChatRoom(hasId? id : null)
        return result
    }
}

module.exports = User
