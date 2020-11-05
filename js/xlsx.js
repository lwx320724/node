const xlsx = require('node-xlsx')

const fs = require('fs')

let writeXls = require('./writeXls')

let data = []
let title =['id','name','sex','age','address']
data.push(title)
let data1 = ['1','lwx','男','23','1111111111']
data.push(data1)


writeXls.writeXls('js/sheet2.xlsx',data,'sheet1')