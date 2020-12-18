const superagent = require('superagent')
const cheerio = require('cheerio')

const async = require()


/*



*/



function crawler(urls) {

    //并发
    async.mapLimit(urls, 6, function (url, callback) {
        fetchUrl(url, callback);
    }, function (err, result) {
        data = data.concat(result)
        console.log(result)
    });

}