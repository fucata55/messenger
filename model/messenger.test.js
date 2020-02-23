const Messenger = require('./messenger')
const ChatRoomMaster = require('./chat-room-master')
const UserMaster = require('./user-master')

const chai = require('chai')
const assert = chai.assert

describe('Messenger', () => {
	describe('contructor', () => {
		it('should instantiate Messenger', () => {
			const subject = new Messenger()
			assert.instanceOf(
				subject.chatRoomMaster,
				ChatRoomMaster,
				'Messenger.chatRoomMaster should be instantiated as ChatRoomMaster'
			)
			assert.instanceOf(
				subject.userMaster,
				UserMaster,
				'Messenger.userMaster should be instantiated as UserMaster'
			)
		})
	})
})
