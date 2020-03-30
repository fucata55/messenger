const User = require('./user')
const ChatRoom = require('./chat-room')
const ChatRoomMaster = require('./chat-room-master')

const chai = require('chai')
const assert = chai.assert

describe('User', () => {
    describe('contructor', () => {
        it('should instantiate User', () => {
            const subject = new User()
            assert.isString(subject.id, 'User.id should be instantiated as a string')
            assert.isString(subject.name, 'User.name should be instantiated as a string')
            assert.isArray(subject.chatRoomIds, 'User.chatRoomIds should be instantiated as an array')
        })

        it('should accept object with id and name as parameter', () => {
            const param = {
                id: '123',
                name: 'Natalie'
            }
            let subject = new User(param)
            assert.deepEqual(subject.id, '123', 'User.id should be equal to param.id')
            assert.deepEqual(subject.name, 'Natalie', 'User.name should be equal to param.name')
        })

        it('should only accept object with id and name as parameter', () => {
            const param = {}
            let subject = new User(param)
            assert.deepEqual(subject.id, '', 'User.id should default to "" if param.id is not string')
            assert.deepEqual(subject.name, '', 'User.name should default to "" if param.name is not string')
        })
    })

    describe('requestChatRoom', () => {
        /**
         * @type User
         */
        let user
        const userId = '123'
        const userName = 'Natalie'
        /**
         * @type ChatRoomMaster
         */
        let chatRoomMaster
        beforeEach(() => {
            user = new User({
                id: userId,
                name: userName
            })
            chatRoomMaster = new ChatRoomMaster()
        })
        it('should return promise of a new chat room', async () => {
            // execute
            const result = await user.requestChatRoom()
            // assert
            assert.instanceOf(result, ChatRoom, 'chatRoom should be a ChatRoom instance')
            assert.include(user.chatRoomIds, result.id, 'chatRooms id should include roomId')
        })

        it('should return promise of the requested chat room', async () => {
            // set up
            const roomId = 'chatRoom123'
            const mockChatRoom = new ChatRoom(roomId)
            chatRoomMaster.rooms.push(mockChatRoom)
            // execute
            const result = await user.requestChatRoom(roomId)
            // assert
            assert.instanceOf(result, ChatRoom, 'result should be a ChatRoom instance')
            assert.deepEqual(result.id, roomId, 'id should match')
        })

        it('should add room id to list', async () => {
            // set up
            const roomId = 'chatRoom123'
            const mockChatRoom = new ChatRoom(roomId)
            chatRoomMaster.rooms.push(mockChatRoom)
            // execute
            await user.requestChatRoom(roomId)
            // assert
            assert.include(user.chatRoomIds, roomId, 'chatRooms id should include roomId')
        })
    })
})
