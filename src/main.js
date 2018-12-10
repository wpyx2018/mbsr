// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from "./router";
import '../src/assets/iconfonts/iconfont.js';
import Axios from "axios";

//import '../static/css/global.css'

//引入加载指示器组件
import { Indicator } from "mint-ui";
Vue.use(Indicator);

Vue.prototype.$ajax = Axios;
Axios.defaults.baseURL = "http://www.dgli.net:8888/practiceActivity/";

Vue.config.productionTip = false;
//Axios:拦截器操作全局loadding
Axios.interceptors.request.use(function(config) {
    //显示图标
    Indicator.open({
        text: "加载中...",
        spinnerType: "fading-circle"
    });
    return config;
});
Axios.interceptors.response.use(function(config) {
    //隐藏图标
    Indicator.close();
    //获取到config中的data，进行加工
    return config;
});
/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>',
    router,
})