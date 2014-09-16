var bufferEqual = require('buffer-equal')
var hash = require('../')
var test = require('tape')

test('Hash tests', function (t) {
  t.plan(4)

  var b = new Buffer([1, 2, 3, 4])
  var sha256b = new Buffer('9f64a747e1b97f131fabb6b447296c9b6f0201e79fb3c5356e6c77e89b6a806a', 'hex')
  var dsha256b = new Buffer('8de472e2399610baaa7f84840547cd409434e31f5d3bd71e4d947f283874f9c0', 'hex')
  var ripemd160b = new Buffer('179bb366e5e224b8bf4ce302cefc5744961839c5', 'hex')
  var hash160b = new Buffer('ecd2cbd8262d2c361b93bf89c4f0a78d76a16e70', 'hex')

  t.ok(bufferEqual(sha256b, new Buffer(hash.sha256(b))))
  t.ok(bufferEqual(dsha256b, new Buffer(hash.dsha256(b))))
  t.ok(bufferEqual(ripemd160b, new Buffer(hash.ripemd160(b))))
  t.ok(bufferEqual(hash160b, new Buffer(hash.hash160(b))))
})
