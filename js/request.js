const superagent = require('superagent')
// const async = require('async')

//博客园文章
function bky(url) {
    let Arr = []
    let regTitle = /target="_blank">.*?(\/a>)/gi
    let regUrl = /(https|http).*?(\.html)/gi
    superagent.get(url).end((err, res) => {
        let reg = /<a class="post-item-title".*?(\/a>)/gi
        let str = JSON.stringify(res)
        str = str.replace(/\\/gi, '')
        let aArr = str.match(reg)
        aArr.forEach(item => {
            let a = {}
            let value = item
            let urlValue = value.match(regUrl)[0]
            let titleValue = (value.match(regTitle)[0]).substring(16, (item.match(regTitle)[0]).indexOf('</a>'))
            a.title = titleValue
            a.url = urlValue
            Arr.push(a)
        })      
        // return Arr
        console.log(Arr)  
    })
}
let url = 'https://www.cnblogs.com/'
bky(url)

