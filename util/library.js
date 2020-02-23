const isObj = (o) => typeof o === 'object' && !isNull(o)
const isNull = (o) => o === null
const isArr = (o) => Array.isArray(o)
const isStr = (o) => typeof o === 'string'

module.exports.isObj = isObj
module.exports.isNull = isNull
module.exports.isArr = isArr
module.exports.isStr = isStr
