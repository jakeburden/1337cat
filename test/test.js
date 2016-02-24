const fs = require('fs')
const test = require('tape')
const leetcat = require('../')

test('should be a 1337 buffer', t => {
  t.plan(1)
  const expected = '1337 73$7\n'
  fs.createReadStream(__dirname + '/test.txt')
    .pipe(leetcat(buf => {
      t.same(buf.toString(), expected)
    }))
})
