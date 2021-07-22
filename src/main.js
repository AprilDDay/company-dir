import Vue from 'vue';
//import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import VueAxios from "vue-axios";


//createApp(App).mount('#app')

//set up global axios
const base = axios.create({
    baseURL: "https://api.jsonbin.io/b/5f20829bc58dc34bf5dca275",
});

//following for Vue 2 not Vue 3
//Vue.prototype.$http = base;

//after Vue 3
//checked answer on https://www.reddit.com/r/vuejs/comments/j99qgn/help_vue_js_3_cannot_read_property_prototype_of/
//const app = Vue.creatApp({})
const app = Vue.createApp(App)
app.config.globalProperties.$http = () => { base }
//throws error createApp is defined but never used


Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
    router, 
    render: (h) => h(App),
}).$mount("#app");