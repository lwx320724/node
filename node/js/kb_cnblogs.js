const superagent = require('superagent')
let writeXls = require('./writeXls')
const cheerio = require('cheerio')

//csdn-Web 开发论坛-数据
let data = []  //excel数据
let title = ['类目', '标题', '地址','阅读','推荐','时间']
data.push(title)


function run(start, end) {
    if (start >= end) return
    let csdnArr = [] //每页的数据
    let url = `https://kb.cnblogs.com/${(start+1)}/`
    superagent.get(url).then(res => {
        let $ = cheerio.load(res.text)
        $('.aiticle_item>.message_info').each((i, item) => {
            // /\([^\)]*\)/g
            let arr = []
            arr.push($(item).children(".msg_title").children("p").children(".classify_name").text().trim())
            arr.push($(item).children(".msg_title").children("p").children('a').text().trim())
            arr.push('https://kb.cnblogs.com' + $(item).children(".msg_title").children("p").children('a').attr('href'))
            arr.push($(item).children(".msg_tag").children('.view').text().trim().replace('阅读',''))
            arr.push($(item).children(".msg_tag").children('.recommend').text().trim().replace('推荐',''))
            arr.push($(item).children(".msg_tag").children('.green').text().trim())
            csdnArr.push(arr)
        })
        data = data.concat(csdnArr)
        console.log(start + 1 + '页录入数组')
        if (start == end - 1) {
            console.log('excel表生成')
            writeXls.writeXls('js/sheet4.xlsx', data, 'sheet1')
        }
        start++
        run(start, end)
    })
}

run(0, 100)





