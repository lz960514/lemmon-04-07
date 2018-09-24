Vue.component("MyRadio", {
    template: `
        <div>
            {{radio}}
            <input type="radio" value="男" v-model="radio">
            <input type="radio" value="女" v-model="radio">
        </div>
    `,
    data() {
        return {
            radio: "女",
        }
    }
})

Vue.component("MyCheckbox", {
    template: `
        <div>
            <span>{{checkbox1}}</span>
            <input type="checkbox" v-model="checkbox1" >
            <span>{{checkbox2}}</span>
            <input type="checkbox" v-model="checkbox2" >
        </div>
    `,
    data() {
        return {
            checkbox1: true,
            checkbox2: false,
        }
    }
})

Vue.component("MySelect", {
    template: `
        <div>
            <span>{{select}}</span>
            <select v-model="select">
                <option v-for="(item, index) in options" :value="item.value">{{item.name}}</option>
            </select>
        </div>
    `,
    data() {
        return {
            options: [{
                    value: "A",
                    name: "张三"
                },
                {
                    value: "B",
                    name: "李四"
                },
                {
                    value: "C",
                    name: "王二"
                },
                {
                    value: "D",
                    name: "马武"
                }
            ],
            select: "A"
        }
    }
})

new Vue({
    el: "#app",
    template: `
        <div class="main">
            <MyRadio />
            <MyCheckbox />
            <MySelect />
        </div>
    `,
    data: {

    }
})