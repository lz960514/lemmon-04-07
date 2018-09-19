const vm = new Vue({
    el: "#app", // 把实例绑定到dom的html标签上
    data: { // 给实例添加数据
        title: "Hello Vue!",
        arr: ["张三", "李四", "隔壁老王"],
        users: [{
                name: "张三",
                age: 22,
                sex: "女"
            },
            {
                name: "李四",
                age: 26,
                sex: "男"
            },
            {
                name: "隔壁老王",
                age: 45,
                sex: "男"
            },
            {
                name: "赵寡妇",
                age: 38,
                sex: "女"
            }
        ],
        inputValue: "输入框内容",
        show: true,
        arr2: Array(100000),
        user: {
            name: "",
            age: "",
            sex: ""
        },
        text: "",
        isactive: true,
        ishove: true,
        message: [{
                user: "张三",
                type: "other",
                content: "哈哈"
            },
            {
                user: "我",
                type: "mine",
                content: "呵呵"
            }
        ]
    },
    methods: { //methods 选项用于给实例添加方法
        click() {
            // console.log(`点击事件1触发了`);
            // console.log(this); // this指向当前实例
            // 在实例方法里 要访问vm对象的属性成员，必须通过this访问
            this.show = !this.show;
        },
        click2() {
            if (this.user.name && this.user.age && this.user.sex) {
                this.users.push(this.user);
                this.user = {};
            } else {
                alert(`请输入数据`);
            }
        },
        keydown() {
            console.log(this.text);
        }
    },
    watch: { // watch 选项可以用来观察实例数据的变化
        text(newVal, oldVale) { // 观察实例中数据的变化，使用实例变量名的同名方法
            console.log(`text发生变化`);
            console.log(newVal); // 本次新更新的值
            console.log(`是当前变量上一次的值`);
            console.log(oldVale); // 是当前变量上一次的值
        },
        // user() {
        //     // 对象不能通过下面的方式来观察变量的变化
        //     // user 是一个对象 只有整个对象发生变化才会触发监听
        //     console.log(`user发生变化`)
        // }
        user: {
            handler() {
                console.log(`user发生变化`);
            },
            // 深度watch
            // 对象要使用深度监听
            deep: true
        }
    }
})