----------**vue 生命周期 详细**----------------

beforeCreate 、created 、beforeMount 、 mounted 、beforeUpdate 、 updated 、 beforeDestroy 、 destroyed

创建 => 挂载 => 更新 => 销毁

beforCreate 还没有data 等数据

created   才有数据

vue 各阶段数据可使用情况 ： created 、 computed 、data 、prop 、mounted 、methods 、watch

类型     加载顺序      加载时间                        作用                   备注     
prop        1         beforeCreated，created之间      接收父组件传递的值
data        3         同上                            定义以及初始化数据
computed    4         同上                            提供简单的数据计算      带有缓存功能
method      2         同上                            提供复杂的数据计算      不带缓存

----------**vue router 详细**----------------
$router:    全局路由的实例，router构造方法的实例

    router.go()
    router.push()               
    router.replace()

$route:    当前路由的信息

路由 钩子函数

    全局钩子函数
        1.router.beforeEach((to,from,next)=>{})   
        2.router.afterEach((to,from)=>)
    单个路由钩子函数
        1.beforeEnter(to,from,next){}
    组件钩子函数
        1.beforeRouteEnter(to,from,next){}   早于beforeCreate生命周期
        2.beforeRouteUpdate(to, from, next){}
        3.beforeRouteLeave(to,from,next){}

路由监听 

    watch
        watch: {
            '$route':'方法名' //放在methods
        },

----------**js 运行机制  （Event Loop）**----------------

所有的同步任务都在主线程上运行，形成一个执行栈

先执行同步任务，后微任务，再宏任务

异步操作：

    1.setTimeOut
    2.setInterval
    3.ajax
    4.promise
    5.I/O

实例1：

    setTimeout(function(){                 //setTimeOut  宏任务
        console.log(1)
    });

    new Promise(function(resolve){         //new Promise  同步任务
        console.log(2);
        for(var i = 0; i < 10000; i++){
            i == 9999 && resolve();
        }
    }).then(function(){                    //promise.then()    微任务
         console.log(3)
    });

    console.log(4);                        //同步任务

    执行结果：
    // 2， 4， 3， 1
    

----------**promise  async await**----------------

promise 三种状态 pending(等待)  resolve(完成)  reject(失败)

解决回调地狱

async函数的返回值 是promise对象   可以  then() 链式

实例1：

    async function kk(){
        const data = await getData();
        console.log(data)
    };

    function getData(){
        return new Promise((resolve) => {
            setTimeout(function () {
                console.log('我是data方法')
                resolve('data')
            },3000)
        })
    }

    kk()

----------**双向绑定**----------------

mvvm
    model：应用数据及业务逻辑
    view：视图
    viewModel：数据-----视图相关联