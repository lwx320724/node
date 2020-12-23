const superagent = require('superagent')
const cheerio = require('cheerio')
const async = require('async')

var concurrencyCount = 0

/*

爬虫封装（并发）

*/


//main      urls:要爬取的url数组     limit：并发限制
async function crawler(urls, limit) {
    //并发
    let res = await async.mapLimit(urls, limit, requestCallBack);
    return res
}

// 迭代执行该异步函数
function requestCallBack(item, callback) {
    concurrencyCount++
    console.log('并发数', concurrencyCount, item)
    UrlResult(item).then(res => {
        concurrencyCount--;
        callback(null, res)
    })
}

//superagent     返回的原始数据
async function UrlResult(url) {
    let res = await superagent.get(url)
    return cheerio.load(res.text)
}


module.exports = { crawler }