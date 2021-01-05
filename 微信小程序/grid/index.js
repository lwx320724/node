Page({
  data: {
    dotCount: 49,
    touchS: [],
    touchE: [],
    rowLine: [],
    verLine: [],
    currentIndex: 0,
    aGrid: [],
    bGrid: []
  },
  touchStart(e) {
    let sx = e.touches[0].pageX
    let sy = e.touches[0].pageY
    this.data.touchS = [sx, sy]
  },
  touchMove: function (e) {
    let sx = e.touches[0].pageX;
    let sy = e.touches[0].pageY;
    this.data.touchE = [sx, sy]
  },
  touchEnd: function (e) {
    let start = this.data.touchS
    let end = this.data.touchE
    let startX = Math.floor(Math.abs(start[0] - 9) / 50)
    let startY = Math.floor(Math.abs(start[1] - 1) / 50)
    let endX = Math.floor(Math.abs(end[0] - 9) / 50)
    let endY = Math.floor(Math.abs(end[1] - 1) / 50)
    let differX = endX ? endX - startX : 0 - startX
    let differY = endY ? endY - startY : 0 - startY
    if (Math.abs(differX) > 1 || Math.abs(differY) > 1) {
      this.data.touchE = [0, 0]
      return
    }
    if (Math.abs(differY) >= 1 && Math.abs(differX) >= 1) {
      this.data.touchE = [0, 0]
      return
    }
    //竖线
    if (differX == 0) {
      let a = 0
      if (differY > 0) {
        a = startX + startY * 7
      } else {
        a = endX + endY * 7
      }
      let data = this.data.verLine
      if (data.indexOf(a) != -1) return
      let currentIndex = this.data.currentIndex ? 0 : 1
      data.push(a)
      if (a % 7 && this.data.verLine.indexOf(a - 1) != -1 && this.data.rowLine.indexOf(a - Math.ceil(a / 7)) != -1 && this.data.rowLine.indexOf(a + 6 - Math.ceil(a / 7)) != -1) {
        let grid = a - Math.ceil(a / 7)
        if (currentIndex) {
          let bGrid = this.data.bGrid
          bGrid.push(grid)
          let set = new Set(bGrid);
          bGrid = [...set]
          this.setData({
            bGrid: bGrid
          })
        } else {
          let aGrid = this.data.aGrid
          aGrid.push(grid)
          let set = new Set(aGrid);
          aGrid = [...set]
          this.setData({
            aGrid: aGrid
          })
        }
        currentIndex = this.data.currentIndex
      }
      if ((a + 1) / 7 != 0 && this.data.verLine.indexOf(a + 1) != -1 && this.data.rowLine.indexOf(a - Math.floor(a / 7)) != -1 && this.data.rowLine.indexOf(a - Math.floor(a / 7) + 6) != -1) {
        let grid = a - Math.floor(a / 7)
        currentIndex = this.data.currentIndex ? 0 : 1
        if (currentIndex) {
          let bGrid = this.data.bGrid
          bGrid.push(grid)
          let set = new Set(bGrid);
          bGrid = [...set]
          this.setData({
            bGrid: bGrid
          })
        } else {
          let aGrid = this.data.aGrid
          aGrid.push(grid)
          let set = new Set(aGrid);
          aGrid = [...set]
          this.setData({
            aGrid: aGrid
          })
        }
        currentIndex = this.data.currentIndex
      }
      this.setData({
        verLine: data,
        currentIndex: currentIndex
      })
      this.data.touchE = [0, 0]
      return
    }
    //横线
    if (differY == 0) {
      let a = 0
      if (differX > 0) {
        a = startX + startY * 6
      } else {
        a = endX + endY * 6
      }
      let data = this.data.rowLine
      if (data.indexOf(a) != -1) return
      let currentIndex = this.data.currentIndex ? 0 : 1
      data.push(a)
      if (a >= 6 && this.data.verLine.indexOf((Math.floor(a / 6) - 1) * 7 + (a % 6)) != -1 && this.data.rowLine.indexOf(a - 6) != -1 && this.data.verLine.indexOf((Math.floor(a / 6) - 1) * 7 + (a % 6) + 1) != -1) {
        let grid = a - 6
        if (currentIndex) {
          let bGrid = this.data.bGrid
          bGrid.push(grid)
          let set = new Set(bGrid);
          bGrid = [...set]
          this.setData({
            bGrid: bGrid
          })
        } else {
          let aGrid = this.data.aGrid
          aGrid.push(grid)
          let set = new Set(aGrid);
          aGrid = [...set]
          this.setData({
            aGrid: aGrid
          })
        }
        currentIndex = this.data.currentIndex
      }
      if (a <= 36 && this.data.verLine.indexOf(Math.floor(a / 6) * 7 + (a % 6)) != -1 && this.data.rowLine.indexOf(a + 6) != -1 && this.data.verLine.indexOf(Math.floor(a / 6) * 7 + (a % 6) + 1) != -1) {
        let grid = a
        currentIndex = this.data.currentIndex ? 0 : 1
        if (currentIndex) {
          let bGrid = this.data.bGrid
          bGrid.push(grid)
          let set = new Set(bGrid);
          bGrid = [...set]
          this.setData({
            bGrid: bGrid
          })
        } else {
          let aGrid = this.data.aGrid
          aGrid.push(grid)
          let set = new Set(aGrid);
          aGrid = [...set]
          this.setData({
            aGrid: aGrid
          })
        }
        currentIndex = this.data.currentIndex
      }
      this.setData({
        rowLine: data,
        currentIndex: currentIndex
      })
      this.data.touchE = [0, 0]
      return
    }
  },
  again() {
    this.setData({
      ...this.data,
      touchS: [],
      touchE: [],
      rowLine: [],
      verLine: [],
      currentIndex: 0,
      aGrid: [],
      bGrid: []
    })
  }
})