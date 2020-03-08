const ChatRoom = require('./chat-room')

const chai = require('chai')
const assert = chai.assert

describe('ChatRoom', () => {
    describe('contructor', () => {
        it('should instantiate ChatRoom', () => {
            // @ts-ignore
            const subject = new ChatRoom()
            assert.isString(subject.id, 'id should be instantiated as a string')
            assert.isArray(subject.chats, 'chats should be instantiated as an array')
            assert.isArray(subject.participantIds, 'participantIds should be instantiated as an array')
        })

        it('should accept string as parameter', () => {
            let subject = new ChatRoom('1903')
            assert.deepEqual(subject.id, '1903', 'id should be set equal to its parameter')
        })

        it('should not accept parameter other than string', () => {
            // @ts-ignore
            let subject = new ChatRoom(1903)
            assert.deepEqual(subject.id, '', 'id should be set to "" if input is not string')
        })
    })
})
