Vue.component("AInput", {
    props: {
        a: String,
        b: String
    },
    template: `
        <div>
            <input type="text" v-model="value1" />
            <input type="text" v-model="value2" />
        </div>
    `,
    data() {
        return {
            value1: this.a,
            value2: this.b
        }
    },
    watch: {
        a(n) {
            this.value1 = n;
        },
        value1(n) {
            this.$emit("update:a", n);
        },
        b(n) {
            this.value2 = n;
        },
        value2(n) {
            this.$emit("update:b", n);
        }
    }
})

new Vue({
    el: "#app",
    template: `
        <div>
            <h1>A:{{valueA}}</h1>
            <p><input type="text" v-model="valueA" /></p>
            <h1>B:{{valueB}}</h1>
            <h1><input type="text" v-model="valueB" /></h1>
            <AInput :a.sync="valueA" :b.sync="valueB" />
        </div>
    `,
    data: {
        valueA: "",
        valueB: ""
    }
})