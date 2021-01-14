function Promise(fn) {
    this.cbs = [];

    const resolve = (value) => {
        setTimeout(() => {
            this.data = value;
            this.cbs.forEach((cb) => cb(value));
        });
    }

    fn(resolve.bind(this));
}

Promise.prototype.then = function (onResolved) {
    return new Promise((resolve) => {
        this.cbs.push(() => {
            const res = onResolved(this.data);
            if (res instanceof Promise) {
                res.then(resolve);
            } else {
                resolve(res);
            }
        });
    });
};


// new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(1);
//     }, 500);
// })
//     .then((res) => {
//         console.log(res);
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve(2);
//             }, 500);
//         });
//     })
//     .then(console.log);





class Parent1 {
    constructor() {
        this.name = 'parent1';
    }
    say() {
        console.log(this.name);
    }
}
class Child1 {
    constructor() {
        Parent1.call(this); //构造函数继承核心代码
        this.type = 'child1';
    }
}
let child1_1 = new Child1()

console.log(child1_1.name) // parent1
console.log(child1_1.say()) // child1_1.say is not a function

















