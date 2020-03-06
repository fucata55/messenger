const User = require('./user')
const uniqid = require('uniqid')

const isStrWithLength = require('../util/library').isStrWithLength

class UserMaster {
  constructor() {
    this.users = []
  }

  create(name) {
    let result = null
    const validInput = isStrWithLength(name)
    if (validInput) {
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

  get(userId) {
    let result
    const validInput = isStrWithLength(userId)
    if (validInput) {
      result = this.users.find((user) => user.id === userId)
    }
    return result || null
  }
}

module.exports = UserMaster
