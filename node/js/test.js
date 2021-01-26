// function Parent(){
//     this.name='parent'
// }
// Parent.prototype.say = function (){
//     console.log('parent吃了')
// }

// function Child(){
//     Parent.call(this)
// }

// Child.prototype = Parent.prototype
// Child.prototype.constructor = Child

// var child1 = new Child()
// var child2 = new Child()
// child1.name = 'zhangsan'
// console.log(child1)
// console.log(child2.name)
// child1.say()
// child2.say()


function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) return obj
    

}
