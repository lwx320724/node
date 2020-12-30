function gobang(n, type) {
    this.name = '五子棋'
    //谁先手
    this.type = type
    //生成棋盘
    this.init = () => {
        let board = []
        for (let i = 0; i < n; i++) {
            board[i] = []
            for (let j = 0; j < n; j++) {
                board[i].push(0)
            }
        }
        return board
    }
    this.board = this.init()
    //棋子数
    this.reckon = (type) => {
        let whiteCount = 0
        let blackCount = 0
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (!this.board) {
                    console.log('没有棋盘！！！！！')
                    return
                }
                let value = this.board[i][j]
                if (value == 1) {
                    whiteCount++
                } else if (value == 2) {
                    blackCount++
                }
            }
        }
        return type == 1 ? whiteCount : blackCount
    }
    //判断是否赢
    this.typeWin = (type) => {
        if (this.reckon(type) < 5) return 0
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (!this.board) {
                    console.log('没有棋盘！！！！！')
                    return
                }
                let value = this.board[i][j]
                if (value == type) {
                    if (this.board[i + 1][j] == value && this.board[i + 2][j] == value && this.board[i + 3][j] == value && this.board[i + 4][j] == value) {
                        return 1
                    }
                    if (this.board[i][j + 1] == value && this.board[i][j + 2] == value && this.board[i][j + 3] == value && this.board[i][j + 4] == value) {
                        return 1
                    }
                    if (this.board[i + 1][j + 1] == value && this.board[i + 2][j + 2] == value && this.board[i + 3][j + 3] == value && this.board[i + 4][j + 4] == value) {
                        return 1
                    }
                }

            }
        }
        return 0
    }
    //下子 type 1-白 2-黑
    this.paly = (x, y, type) => {
        if (!this.board) {
            console.log('没有棋盘！！！！！')
            return
        }
        if (type != this.type) {
            console.log("现在是" + (this.type == 1 ? '白棋' : '黑棋'))
            return
        }
        let value = this.board[x][y]
        if (value) {
            value == 1 ? console.log('已经有白棋了') : console.log('已经有黑棋了')
            return
        } else {
            this.board[x][y] = type
            this.type = type == 1 ? 2 : 1
        }
        if (this.typeWin(type)) {
            console.log((type == 1 ? '白棋' : '黑棋') + '赢了')
            console.log(this.board)
        }
    }
}



/*
    白棋：1
    黑棋：2
*/


let a = new gobang(6, 2)
a.paly(1, 1, 2)
a.paly(2, 1, 1)
a.paly(2, 2, 2)
a.paly(3, 1, 1)
a.paly(3, 3, 2)
a.paly(4, 1, 1)
a.paly(4, 4, 2)
a.paly(1, 5, 1)
a.paly(0, 0, 2)


/*
[
  [ 2, 0, 0, 0, 0, 0 ],
  [ 0, 2, 0, 0, 0, 1 ],
  [ 0, 1, 2, 0, 0, 0 ],
  [ 0, 1, 0, 2, 0, 0 ],
  [ 0, 1, 0, 0, 2, 0 ],
  [ 0, 0, 0, 0, 0, 0 ]
]
*/