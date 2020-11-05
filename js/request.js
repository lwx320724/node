const request = require('request')

const fs = require('fs')

let data = '追加的内容'

fs.appendFileSync('test.txt',data)



