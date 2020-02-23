const UserMaster = require('./user-master')

const chai = require('chai')
const assert = chai.assert

describe('UserMaster', () => {
	describe('contructor', () => {
		it('should instantiate UserMaster', () => {
			const subject = new UserMaster()
			assert.isArray(subject.users, 'UserMaster.users should be instantiated as an array')
		})
	})
})
