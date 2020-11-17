/**
 * 正则基础：
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */




const regExp = {
    //是否中文姓名
    isChinaName(val) {
        let reg = /^[\u4E00-\u9FA5]{2,4}$/
        return reg.test(val)
    },
    //是否手机号
    isPhoneNum(val) {
        let reg = /^[1][3|4|5|6|7|8]\d{9}$/
        return reg.test(val)
    },
    //是否邮箱
    // isEmail(val) {
    //     let reg = //
    // }

}

console.log(regExp.isPhoneNum(13345678900))