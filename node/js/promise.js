// const PENDING = 'pending'
// const RESOLVED = 'resolved'
// const REJECTED = 'rejected'

// /**
//  *  
//  * 
//  * 
//  * 
//  * 
//  */
// class MyPromise {
//     status = PENDING;
//     value = undefined;

//     constructor(resolver) {
//         let resolve = (val) => {
//             this.status = RESOLVED
//             this.value = val
//         }
//         let reject = (val) => {
//             this.status = REJECTED
//             this.value = val
//         }
//         resolver(resolve, reject)
//     }


//     then = (callbackResolve, callbackReject) => {
//         if (callbackResolve) {
//             callbackResolve(this.value)
//         }

//         return this
//     }

//     catch = (callbackReject) => {
//         if (callbackReject && this.status === REJECTED) {
//             callbackReject(this.value)
//         }
//     }



//     static resolve = (value) => {
//         if (value instanceof this) return value
//         return new this(resolve => { resolve(value) })
//     }

//     static reject = (reason) => {
//         return new this((_, reject) => { reject(reason) })
//     }


// }


// MyPromise.resolve('MyPromise').then().then(res => { console.log(res) })




new Promise(resolve => {
    console.log('1');
    resolve(5)
    new Promise(resolve => {
        resolve(4);
        console.log('2')
    }).then((num) => {
        console.log(num)
    })
}).then(num => {
    console.log(num)
})
console.log('3')