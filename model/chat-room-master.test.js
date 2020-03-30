const ChatRoomMaster = require('./chat-room-master')
const ChatRoom = require('./chat-room')

const chai = require('chai')
const assert = chai.assert

describe('ChatRoomMaster', () => {
    /**
     * @type ChatRoomMaster
     */
    let chatRoomMaster
    describe('contructor', () => {
        it('should instantiate ChatRoomMaster', () => {
            chatRoomMaster = new ChatRoomMaster()
            assert.isArray(chatRoomMaster.rooms, 'room should be array')
        })
    })

    describe('create', () => {
        beforeEach(() => {
            chatRoomMaster = new ChatRoomMaster()
        })

        it('should return a chat room', () => {
            const result = chatRoomMaster.create()
            assert.instanceOf(result, ChatRoom, 'result should be a ChatRoom instance')
        })
    })
})
