const User = require('./user')
const uniqid = require('uniqid')

const isStrWithLength = require('../util/library').isStrWithLength

class UserMaster {
	constructor() {
		this.users = []
	}

	create(name) {
		let result = null
		if (isStrWithLength(name)) {
			const id = uniqid('user')
			const param = {
				id,
				name
			}
			result = new User(param)
			this.users.push(result)
		}
		return result
	}

	get() {}
}

module.exports = UserMaster
