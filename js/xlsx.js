const xlsx = require('node-xlsx')
const async = require('async')
const fs = require('fs')

let bky = require('./request')
let writeXls = require('./writeXls')

let data = []
let title = ['文章标题', '文章地址']
data.push(title)


function getData(i, max) {
    if (i >= max) return
    let bkyUrl = 'https://www.cnblogs.com/?CategoryId=808&CategoryType=SiteHome&ItemListActionName=AggSitePostList&PageIndex=' + (i + 1) + '&ParentCategoryId=0&TotalPostCount=4000'
    bky.bky(bkyUrl).then(res => {
        data = data.concat(res)
        console.log(i+1+'页录入数组')
        if (i == max - 1) {
            console.log('excel表生成')
            writeXls.writeXls('js/sheet2.xlsx', data, 'sheet1')
        }
        i++
        getData(i,max)
    })
}
getData(0, 200)


