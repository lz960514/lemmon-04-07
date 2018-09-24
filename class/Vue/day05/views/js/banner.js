Vue.component("Banner", {
    props: {
        imgs: {
            validator: (value) => {
                return Array.isArray(value) && value.length >= 1;
            }
        }
    },
    template: `
        <div class="banner">
            <transition-group
            :enterActiveClass="enter" 
            :leaveActiveClass="leave" 
            @before-enter="befor"
            @after-enter="after" 
            @before-leave="befor"
            @after-leave="after"
            >
                <div class="item" v-for="(item,index) in imgs" :key="index" @mouseover.stop="over" @mouseout.stop="out" v-show="index==imgIndex">
                    <img :src="item">
                </div>
            </transition-group>
            <div v-show="isShow" @mouseover="over" @mouseout="out">
                <input type="button" class="left" @click="prev">
                <input type="button" class="right" @click="next">
            </div>
            <div class="index">
                <div class="index-item">
                    <span :class="{active:index==imgIndex}" v-for="(item,index) in imgs" :key="index" @mouseover.stop="iOver(index)" @mouseout.stop="iOut">{{index+1}}</span>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            isShow: false,
            imgIndex: 0,
            bannerState: true,
            enter: "fadeDot3 fadeInLeft",
            leave: "fadeDot3 fadeOutRight",
            timer: null,
            time: 2000
        }
    },
    methods: {
        prev() {
            if (!this.bannerState) {
                return;
            }
            if (this.bannerState == true) {
                this.enter = "animated fadeInRight";
                this.leave = "animated fadeOutLeft";
                this.imgIndex--;
                if (this.imgIndex < 0) {
                    this.imgIndex = this.imgs.length - 1;
                }
            }
        },
        next() {
            if (!this.bannerState) {
                return;
            }
            this.enter = "animated fadeInLeft";
            this.leave = "animated fadeOutRight";
            this.imgIndex++;
            if (this.imgIndex > this.imgs.length - 1) {
                this.imgIndex = 0;
            }
        },
        // 动画 JavaScript 钩子
        befor() {
            this.bannerState = false;
        },
        after() {
            this.bannerState = true;
        },
        /****************************/
        autoPlay() {
            this.timer = setInterval(() => {
                this.next();
            }, this.time)
        },
        over() {
            this.isShow = true;
            clearInterval(this.timer);
        },
        out() {
            this.isShow = false;
            this.autoPlay();
        },
        iOver(index) {
            clearInterval(this.timer);
            if (this.imgIndex > index) {
                this.enter = "animated fadeInRight";
                this.leave = "animated fadeOutLeft";
                this.imgIndex = index;
            } else if (this.imgIndex < index) {
                this.enter = "animated fadeInLeft";
                this.leave = "animated fadeOutRight";
                this.imgIndex = index;
            }
        },
        iOut() {
            this.autoPlay();
        }
    },
    // watch: {
    //     imgIndex(newValue, oleValue) {
    //         if (newValue > oleValue) {
    //             this.enter = "animated fadeInLeft";
    //             this.leave = "animated fadeOutRight";
    //         } else if (newValue < oleValue) {
    //             this.enter = "animated fadeInRight";
    //             this.leave = "animated fadeOutLeft";
    //         }
    //     }
    // },
    mounted() {
        this.autoPlay();
    }
})


new Vue({
    el: "#app",
    template: `
        <div>
            <Banner :imgs="imgs" />
        </div>
    `,
    data: {
        imgs: [
            "https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g5/M00/05/0C/ChMkJ1l_JRCIA-oAAAS5EW43hXUAAfSaAEVxL8ABLkp466.jpg",
            "https://desk-fd.zol-img.com.cn/t_s1920x1080c5/g5/M00/05/0C/ChMkJ1l_JQ-IfkkoABFDwss4troAAfSaAEBYQAAEUPa636.jpg",
            "http://up.enterdesk.com/edpic_source/66/d1/01/66d101b5b9ac3a1f78e852d9c44c83f3.jpg",
            "http://up.enterdesk.com/edpic_source/62/44/de/6244de1143f5f14491cf54433583d6bb.jpg"
        ],
    }
})