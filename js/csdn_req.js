const superagent = require('superagent')
let writeXls = require('./writeXls')
const cheerio = require('cheerio')

//csdn-Web 开发论坛-数据
let data = []  //excel数据
let title = ['类目', '状态', '金额', '地址', '标题']
data.push(title)

let csdnArr = [] //每页的数据


function run(i, max) {
    if (i >= max) return
    let url = 'https://bbs.csdn.net/forums/WebDevelop?page=' + (i + 1)
    superagent.get(url).then(res => {
        let $ = cheerio.load(res.text)
        $('tbody>tr').each((i, item) => {
            let arr = []
            arr.push($(item).children(".forums_topic").children('.forums_t').text().trim())
            arr.push($(item).children(".forums_topic_flag").children('span').text().trim())
            arr.push($(item).children(".forums_score").children('.gain_score').text().trim())
            arr.push('https://bbs.csdn.net' + $(item).children(".forums_topic").children('.forums_title').attr('href'))
            arr.push($(item).children(".forums_topic").children('.forums_title').attr('title'))
            csdnArr.push(arr)
        })
        data = data.concat(csdnArr)
        console.log(i + 1 + '页录入数组')
        if (i == max - 1) {
            console.log('excel表生成')
            writeXls.writeXls('js/sheet3.xlsx', data, 'sheet1')
        }
        i++
        run(i, max)
    })
}

run(0, 20)





