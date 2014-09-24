# Hash functions for Bitcoin applications

## Installation

`npm install bitcoin-hash`

## Example

```javascript
var hash = require('bitcoin-hash')

var buf = new Buffer([1, 2, 3, 4])

var hash160 = hash.hash160(buf)
```

## API

All methods take a Buffer as argument and return a Buffer.

### hash.sha256(buf)

### hash.dsha256(buf)
Two rounds of SHA256

### hash.ripemd160(buf)

### hash.hash160(buf)
One round of SHA256 followed by a round of RIPEMD160
