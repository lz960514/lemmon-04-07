Vue.component("switcher", {
    props: {
        value: Boolean,
        size: {
            type :String,
            default: "small"
        }
    },
    watch: {
      value(n) {
        this.ivalue = n;
      },
      ivalue(n) {
        this.$emit("input", n)
      }  
    },
    template: `
        <div :class="['switcher',{active:ivalue,small:size=='small',large:size=='large'}]" @click="click">
            <slot name="on"></slot>
            <div :class="['btn', {active:ivalue}]"></div>
            <slot name="off"></slot>
        </div>
    `,
    data() {
        return {
            ivalue: this.value,
        }
    },
    methods: {
        click() {
            this.ivalue = !this.ivalue
        }
    }
})

new Vue({
    el: "#app",
    template: `
        <div>
            <span>{{sw}}</span>
            <switcher v-model="sw" size="small">
                <div class="on" v-if="sw" slot="on">开</div>
                <div class="off" v-if="!sw" slot="off">关</div>
            </switcher>
            <br />
            <switcher v-model="sw" size="large">
                <div class="on" v-if="sw" slot="on">开启</div>
                <div class="off" v-if="!sw" slot="off">关闭</div>
            </switcher>
        </div>
    `,
    data: {
        sw: false
    }
})