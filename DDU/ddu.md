----------vue 生命周期 详细----------------



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







----------vue router 详细----------------
$router:    全局路由的实例，router构造方法的实例
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
    