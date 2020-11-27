/*

*/

var fourSumCount = function (A, B, C, D) {
    let number = 0

    for (let a = 0; a < A.length; a++) {
        for (let b = 0; b < B.length; b++) {
            for (let c = 0; c < C.length; c++) {
                for (let d = 0; d < D.length; d++) {
                    if (A[a] + B[b] + C[c] + D[d] == 0) {
                        number++
                    }
                }
            }
        }
    }
    return number

};