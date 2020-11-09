const superagent = require('superagent')
let writeXls = require('./writeXls')
const cheerio = require('cheerio')

//csdn-Web 开发论坛-数据
let data = []  //excel数据
let title = ['类目', '状态', '金额', '地址', '标题','作者','回复','查看']
data.push(title)


function run(start, end) {
    if (start >= end) return
    let csdnArr = [] //每页的数据
    let url = 'https://bbs.csdn.net/forums/WebDevelop?page=' + (start + 1)
    // let url = 'https://bbs.csdn.net/forums/WebDevelop?page=2'
    superagent.get(url).then(res => {
        let $ = cheerio.load(res.text)
        $('tbody>tr').each((i, item) => {
            let arr = []
            arr.push($(item).children(".forums_topic").children('.forums_t').text().trim())
            arr.push($(item).children(".forums_topic_flag").children('span').text().trim())
            arr.push($(item).children(".forums_score").children('.gain_score').text().trim())
            arr.push('https://bbs.csdn.net' + $(item).children(".forums_topic").children('.forums_title').attr('href'))
            arr.push($(item).children(".forums_topic").children('.forums_title').attr('title'))
            arr.push($(item).children(".forums_author").children('.Hash').attr('title'))
            let reply = $(item).children(".forums_reply").children('.reply_num').text().trim()
            arr.push(reply.substring(0,reply.indexOf('/')))
            arr.push(reply.substring(reply.indexOf('/')+1))
            csdnArr.push(arr)
        })
        data = data.concat(csdnArr)
        console.log(start + 1 + '页录入数组')
        if (start == end - 1) {
            console.log('excel表生成')
            writeXls.writeXls('js/sheet3.xlsx', data, 'sheet1')
        }
        start++
        run(start, end)
    })
}

run(0, 20)





