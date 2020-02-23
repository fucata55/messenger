const User = require('./user')

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
})
