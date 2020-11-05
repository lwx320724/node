const fs = require('fs')
const xlsx = require('node-xlsx')

/**
 * 
 * @param {数据} datas 
 * @param {路径} path
 * @param {表格名} name
 */

function writeXls(path,datas,name){
    let buffer =xlsx.build([{
        name:name,
        data:datas
    }])
    fs.writeFileSync(path,buffer,{'flag':'w'})
}

module.exports = {writeXls}