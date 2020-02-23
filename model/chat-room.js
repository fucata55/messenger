const isStr = require('../util/library').isStr
class ChatRoom {
	constructor(id) {
		const validInput = isStr(id)
		this.id = validInput ? id : ''
		this.chats = []
		this.participantIds = []
	}
}

module.exports = ChatRoom
