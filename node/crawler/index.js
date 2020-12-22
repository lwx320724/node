const superagent = require('superagent')
const cheerio = require('cheerio')

const async = require('async')


const bky = require('../js/request.js')

var concurrencyCount = 0

function requestCallBack(item, callback) {
    concurrencyCount++
    console.log('并发数', concurrencyCount, item)
    bky.bky(item).then(res => {
        concurrencyCount--;
        callback(null, res)
    })
}

function crawler(urls, limit, requestCallBack) {
    //并发
    async.mapLimit(urls, limit, requestCallBack, (err, result) => {
        if (err) return err
        return result
    });
}

var urls = [];
for (var i = 0; i < 20; i++) {
    urls.push('https://www.cnblogs.com/?CategoryId=808&CategoryType=SiteHome&ItemListActionName=AggSitePostList&PageIndex=' + (i + 1) + '&ParentCategoryId=0&TotalPostCount=4000')
}


crawler(urls, 3, requestCallBack)