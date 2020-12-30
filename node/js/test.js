
function getRondomArr(arr) {
    arr.push(getRondom(2, 32));
    arr = Array.from(new Set(arr));
    if (arr.length == 5) {
        console.log(arr)
        return arr
    } else {
        getRondomArr(arr)
    }
};

function getRondom(min, max) {
    return Math.round(Math.random() * (max - min) + min);
};


let a = getRondomArr([])
console.log(a, '===a');