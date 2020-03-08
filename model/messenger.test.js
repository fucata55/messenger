const Messenger = require('./messenger')
const ChatRoomMaster = require('./chat-room-master')
const UserMaster = require('./user-master')

const chai = require('chai')
const assert = chai.assert

describe('Messenger', () => {
    describe('contructor', () => {
        it('should instantiate Messenger', () => {
            const subject = new Messenger()
            assert.instanceOf(subject.chatRoomMaster, ChatRoomMaster, 'chatRoomMaster should be ChatRoomMaster instance')
            assert.instanceOf(subject.userMaster, UserMaster, 'userMaster should be UserMaster instance')
        })
    })
})
