var hjs = require('hash.js')

var hash = module.exports

hash.sha256 = function (buf) {
  if (!Buffer.isBuffer(buf)) {
    throw new Error('sha256 only takes Buffers as arguments')
  }
  return new Buffer(hjs.sha256().update(buf).digest())
}

hash.ripemd160 = function (buf) {
  if (!Buffer.isBuffer(buf)) {
    throw new Error('ripemd160 only takes Buffers as arguments')
  }
  return new Buffer(hjs.ripemd160().update(buf).digest())
}

hash.hash160 = function (buf) {
  if (!Buffer.isBuffer(buf)) {
    throw new Error('ripemd160 only takes Buffers as arguments')
  }
  return hash.ripemd160(hash.sha256(buf))
}

hash.dsha256 = function (buf) {
  if (!Buffer.isBuffer(buf)) {
    throw new Error('dsha256 only takes Buffers as arguments')
  }
  return hash.sha256(hash.sha256(buf))
}
