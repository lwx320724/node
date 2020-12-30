
let data = [
    [8, 0, 0, 0, 0, 0, 0, 0, 4],
    [0, 0, 0, 0, 7, 0, 0, 0, 3],
    [0, 0, 0, 0, 5, 0, 0, 6, 0],
    [2, 0, 9, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 6, 0, 0, 0],
    [0, 0, 0, 0, 0, 7, 6, 9, 0],
    [0, 2, 0, 3, 9, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 4, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
]

function checkGrid(sudo, i, j) {
    let row = {}, col = {}, subSudo = {}        //辅助变量
    for (let k = 0; k < 9; k++) {
        let cur1 = sudo[i][k], cur2 = sudo[k][j]
        if (cur1) {                    //当前元素已经在行中出现，优化掉零的判断，key为0时值为0，不需要额外判断
            if (row[cur1])
                return 1;                //返回错误代码
            else
                row[cur1] = cur1            //当前元素未在行中出现，存入辅助变量中
        }
        if (cur2) {                    //列的判定与行类似，优化掉零的判断，key为0时值为0，不需要额外判断
            if (col[cur2])
                return 2;
            else
                col[cur2] = cur2;
        }
        //转化循环变量到小九宫格的坐标
        let key = sudo[Math.floor(i / 3) * 3 + Math.floor(k / 3)][Math.floor(j / 3) * 3 + Math.floor(k % 3)]
        if (subSudo[key])                //九宫格判定与行类似，优化掉零的判断，key为0时值为0，不需要额外判断
            return 3
        else
            subSudo[key] = key
    }
    return 0;
}


function findAnswer(problem) {
    let stack = [], flag = false;

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9;) {
            if (problem[i][j] === 0 || flag) {       //当前位置为待定元素的首次处理或回溯到当前位置，两种情况看似不同，其实处理相同，自加1即可
                flag = false;
                let k = problem[i][j] + 1;        //搜索向下一个合法值迈进
                while (k < 10) {               //循环找到下一个合法值
                    problem[i][j] = k;          //填值
                    if (checkGrid(problem, i, j) == 0) {  //判定合法，相关二十格判定
                        stack.push([i, j++])        //存储回溯点，并步进
                        break;
                    }
                    k++;
                }
                if (k > 9) {                 //当前位置找不到合法值，回溯
                    problem[i][j] = 0;          //回溯前归零
                    let rt = stack.pop();         //堆栈中取回溯信息
                    if (!rt)                //无解判断，返回0
                        return 0;
                    i = rt[0]                //穿越
                    j = rt[1]
                    flag = true;
                }
            } else {                    //当前位置数字为题目给定
                j++;
            }
        }
    }
    return problem                    //成功找到一组解
}