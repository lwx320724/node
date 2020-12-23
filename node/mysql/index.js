const mysql = require('mysql')
const { connect } = require('superagent')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'lwx',
    typeCast: true
})

connection.connect()


const crawler = require('../crawler/index')







var urls = [];
for (var i = 0; i < 100; i++) {
    urls.push(`https://kb.cnblogs.com/${(i + 1)}/`)
}
let data = ''


async function add() {
    let res = await crawler.crawler(urls, 3)
    res.map(item => {
        let $ = item
        $('.message_info').each((i, item) => {
            let arr = []
            arr.push(`'${$(item).children(".msg_title").children("p").children(".classify_name").text().trim()}'`)
            arr.push(`"${$(item).children(".msg_title").children("p").children('a').text().trim().replace(/\"/g, "")}"`)
            let url = 'https://kb.cnblogs.com' + $(item).children(".msg_title").children("p").children('a').attr('href')
            url = "'" + url + "'"
            arr.push(url)
            arr.push($(item).children(".msg_tag").children('.view').text().trim().replace('阅读', '').slice(1, -1))
            arr.push($(item).children(".msg_tag").children('.recommend').text().trim().replace('推荐', '').slice(1, -1))
            arr.push(`'${$(item).children(".msg_tag").children('.green').text().trim()}'`)
            data = data ? data + ',(' + arr + ')' : data + '(' + arr + ')'
        })
    })

    let sql = 'insert into bky(type,title,url,count,star,time) values ' + data
    connection.query(sql, (error, res) => {
        if (error) console.log(error)
        console.log(res)
    })
}

add()
