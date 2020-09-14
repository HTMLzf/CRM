import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';
//import VueAxios from 'vue-axios' ;
import QS from 'qs'
Vue.prototype.qs = QS;
Vue.prototype.axios = axios//请求
//Vue.use(VueAxios, axios);


//样式初始化
import "./assets/css/reset.css";
//element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);


Vue.config.productionTip = false;
//设置拦截后可取消
if(localStorage.token){
  //登录成功 给请求添加请求头部 token
  axios.defaults.headers.common['Authorization'] = localStorage.token
}else{
  location.href = './#/login'
}
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");


