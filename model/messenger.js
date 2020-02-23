const ChatRoomMaster = require('./chat-room-master')
const UserMaster = require('./user-master')

class Messenger {
	constructor() {
		this.chatRoomMaster = new ChatRoomMaster()
		this.userMaster = new UserMaster()
	}

	handleChat() {}
}

module.exports = Messenger
