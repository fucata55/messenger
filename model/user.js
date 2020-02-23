const isObj = require('../util/library').isObj
const isStr = require('../util/library').isStr

class User {
	constructor(o) {
		const validInput = isObj(o) && isStr(o.id) && isStr(o.name)
		this.id = validInput ? o.id : ''
		this.name = validInput ? o.name : ''
		this.chatRoomIds = []
	}

	chat() {}
}

module.exports = User
