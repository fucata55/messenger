const ChatRoomMaster = require('./chat-room-master')

const chai = require('chai')
const assert = chai.assert

describe('ChatRoomMaster', () => {
    describe('contructor', () => {
        it('should instantiate ChatRoomMaster', () => {
            const subject = new ChatRoomMaster()
            assert.isArray(subject.rooms, 'room should be array')
        })
    })
})
