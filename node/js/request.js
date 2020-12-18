const superagent = require('superagent')
const async = require('async')
const cheerio = require('cheerio')


async function getBKY(url) {
    const res = await superagent.post(url)
    let str = (JSON.stringify(res)).replace(/\\/gi, '')
    return new Promise((resolve, reject) => {
        resolve(str)
    })
}

//博客园文章
async function bky(url) {
    let Arr = []
    let regTitle = /target="_blank">.*?(\/a>)/gi
    let regUrl = /(https|http).*?(\.html)/gi
    let res = await getBKY(url)
    let reg = /<a class="post-item-title".*?(\/a>)/gi
    let str = JSON.stringify(res)
    str = str.replace(/\\/gi, '')
    let aArr = str.match(reg)
    aArr.forEach(item => {
        let a = []
        let urlValue = item.match(regUrl)[0]
        let titleValue = (item.match(regTitle)[0]).substring(16, (item.match(regTitle)[0]).indexOf('</a>'))
        a.push(titleValue)
        a.push(urlValue)
        Arr.push(a)
    })
    return Arr
}

module.exports = {bky}

