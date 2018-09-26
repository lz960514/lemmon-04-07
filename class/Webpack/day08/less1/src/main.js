import Vue from "vue";

import App from "./App"

import "@style/normalize";

import "@less/style";

// import "./js/app"

new Vue({
    el: "#app",
    template: `
        <App />
    `,
    components: {
        App
    }
})