new Vue({
    el: "#app",
    data: {
        isShow: true,
        state: true
    },
    methods: {
        show() {
            if (this.state == true) {
                this.isShow = !this.isShow;
            }
        },
        // 动画 JavaScript 钩子
        beforeEnter() {
            // console.log("beforeEnter");
            this.state = false;
        },
        enter() {
            // console.log("enter");
        },
        afterEnter() {
            // console.log("afterEnter");
            this.state = true;
        },
        enterCancelled() {
            console.log("enterCancelled");
        },
        beforeLeave() {
            console.log("beforeLeave");
            this.state = false;
        },
        leave() {
            // console.log("leave");
        },
        afterLeave() {
            console.log("afterLeave");
            this.state = true;
        },
        leaveCancelled() {
            // console.log("leaveCancelled");
        }
    }
})