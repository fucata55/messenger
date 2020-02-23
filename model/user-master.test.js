const UserMaster = require('./user-master')
const User = require('./user')

const chai = require('chai')
const assert = chai.assert

const isStrWithLength = require('../util/library').isStrWithLength

describe('UserMaster', () => {
	let userMaster

	beforeEach(() => {
		userMaster = new UserMaster()
	})
	describe('contructor', () => {
		it('should instantiate UserMaster', () => {
			assert.isArray(userMaster.users, 'userMaster.users should be instantiated as an array')
		})
	})
	describe('create', () => {
		it('should return a User', () => {
			const name = 'Natalie'
			const result = userMaster.create(name)
			assert.deepEqual(result.name, name, 'parameter name should be passed along to User')
			assert.deepEqual(isStrWithLength(result.id), true, 'should generate id for User')
		})

		it('should add user to users list', () => {
			const users = [...userMaster.users]
			userMaster.create('Natalie')
			assert.deepEqual(userMaster.users.length > users.length, true, 'should add user to users list')
		})
		it('should require name parameter', () => {
			const result = userMaster.create()
			assert.isNull(result, 'should not return a User')
		})
	})
})
