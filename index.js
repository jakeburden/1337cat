const pumpify = require('pumpify')
const concat = require('concat-stream')
const leet = require('l33tsp34k-stream')

module.exports = (opts, cb) => pumpify(leet(), concat(opts, cb))


