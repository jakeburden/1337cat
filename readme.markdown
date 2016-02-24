# 1337cat

Writable stream that transforms data from a stream into l33tsp34k, conatenates that data, and calls a callback with the result.

[![build status](http://img.shields.io/travis/jekrb/1337cat.svg?style=flat)](http://travis-ci.org/jekrb/1337cat)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

Concatenates l33tsp34k!

```
npm install 1337cat -S
```

## Usage

```js
const fs = require('fs')
const leetcat = require('1337cat')

fs.createReadStream(__dirname + '/leet.txt')
  .pipe(leetcat(buf => {
    console.log(buf.toString()) // '1337\n'
  }))
```

