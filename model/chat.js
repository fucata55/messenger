const isStr = require('../util/library').isStr
const isObj = require('../util/library').isObj

class Chat {
    /**
     *
     * @param {{speakerId: string, content: string}} o
     */
    constructor(o) {
        const validInput = isObj(o) && isStr(o.speakerId) && isStr(o.content)
        this.speakerId = validInput ? o.speakerId : ''
        this.content = validInput ? o.content : ''
    }
}

module.exports = Chat
