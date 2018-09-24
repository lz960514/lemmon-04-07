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
            <div class="item" v-for="(item,index) in imgs" @mouseover="over" @mouseout="out" v-show="index==imgIndex">
                <img :src="item">
            </div>
            <div v-show="isShow" @mouseover="over" @mouseout="out">
                <input type="button" class="left" @click="prev">
                <input type="button" class="right" @click="next">
            </div>
        </div>
    `,
    data() {
        return {
            isShow: false,
            imgIndex: 0,
        }
    },
    methods: {
        over() {
            this.isShow = true;
        },
        out() {
            this.isShow = false;
        },
        prev() {
            this.imgIndex--;
            if (this.imgIndex < 0) {
                this.imgIndex = this.imgs.length - 1;
            }
        },
        next() {
            this.imgIndex++;
            if (this.imgIndex > this.imgs.length - 1) {
                this.imgIndex = 0;
            }
        }
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
            "http://img1.3lian.com/2015/a1/46/d/100.jpg",
            "http://img3.imgtn.bdimg.com/it/u=514898128,4171807485&fm=214&gp=0.jpg",
            "http://up.enterdesk.com/edpic_source/66/d1/01/66d101b5b9ac3a1f78e852d9c44c83f3.jpg",
            "http://up.enterdesk.com/edpic_source/62/44/de/6244de1143f5f14491cf54433583d6bb.jpg"
        ],
    }
})