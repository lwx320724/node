
const ddu = {
    //打印
    log(obj) {
        console.log(obj)
    },
    //判断是否为空
    isEmpty(obj) {
        if (obj) {
            if (typeof (obj) === 'object') {
                if (Object.prototype.toString.call(obj) == '[object Array]' && obj.length > 0) {
                    //数组长度大于0  =非空
                    return true;
                } else if (Object.prototype.toString.call(obj) == '[object Object]' && JSON.stringify(obj) != "{}") {
                    //对象转字符串  不等于‘{}’  =非空
                    return true;
                }
            } else if (typeof (obj) === 'string') {
                //防止字符串undefined和null
                return !(obj === 'undefined' || obj === 'null')
            } else {
                return true
            }
        }
        return false;
    },
    //浮点数精确计算
    floatCalculate(num1, num2, type) {
        let a, b, m
        //获取数的小数点后有几位（整数 和 浮点数）
        a = (num1 % 1 === 0) ? 0 : num1.toString().split('.')[1].length
        b = (num2 % 1 === 0) ? 0 : num2.toString().split('.')[1].length
        m = Math.pow(10, Math.max(a, b))
        if (type == '-') {
            return (num1 * m - num2 * m) / m
        } else if (type == '+') {
            return (num1 * m + num2 * m) / m
        } else if (type == '*') {
            return (num1 * m * num2 * m) / Math.pow(m, 2)
        } else if (type == '/') {
            return (num1 * m) / (num2 * m)
        }
    },
    //替换url中的值
    replaceParamVal(url, paramName, replaceVal) {
        var re = new RegExp('(' + paramName + '=)([^&]*)', 'gi')
        return url.replace(re, paramName + '=' + replaceVal)
    }
}

module.exports = ddu

