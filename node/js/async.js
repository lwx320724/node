var async = require('async');

const bky = require('./request')
const writeXls = require('./writeXls')

var concurrencyCount = 0;
let data = []
let title = ['文章标题', '文章地址']
data.push(title)
var fetchUrl = function (url, callback) {
  concurrencyCount++;
  console.log('现在的并发数是', concurrencyCount, '，正在抓取的是', url);
  bky.bky(url).then(res => {
    concurrencyCount--;
    console.log(res)
    callback(null, res)
  })
};

var urls = [];
for (var i = 0; i < 2; i++) {
  urls.push('https://www.cnblogs.com/?CategoryId=808&CategoryType=SiteHome&ItemListActionName=AggSitePostList&PageIndex=' + (i + 1) + '&ParentCategoryId=0&TotalPostCount=4000')
}

async.mapLimit(urls, 6, function (url, callback) {
  fetchUrl(url, callback);
}, function (err, result) {
  data = data.concat(result)
  console.log(result)
  // writeXls.writeXls('js/sheet2.xlsx', data, 'sheet1')
});
