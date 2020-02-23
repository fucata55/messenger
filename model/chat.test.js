const Chat = require('./chat')

const chai = require('chai')
const assert = chai.assert

describe('Chat', () => {
	describe('contructor', () => {
		it('should instantiate Chat', () => {
			const subject = new Chat()
			assert.isString(subject.speakerId, 'ChatRoom.speakerId should be instantiated as a string')
			assert.isString(subject.content, 'ChatRoom.content should be instantiated as a string')
		})

		it('should accept object with speakerId and content as parameter', () => {
			const param = {
				speakerId: '123',
				content: 'Hi! How are you doing?'
			}
			let subject = new Chat(param)
			assert.deepEqual(subject.speakerId, '123', 'Chat.speakerId should be equal to param.speakerId')
			assert.deepEqual(subject.content, 'Hi! How are you doing?', 'Chat.content should be equal to param.content')
		})

		it('should only accept object with speakerId and content as parameter', () => {
			const param = {
				speakerId: 123,
				content: 'Hi! How are you doing?'
			}
			let subject = new Chat(param)
			assert.deepEqual(
				subject.speakerId,
				'',
				'Chat.speakerId should default to "" if param.speakerId is not string'
			)
			assert.deepEqual(subject.content, '', 'Chat.content should default to "" if param.content is not string')
		})
	})
})
