import Vue from "vue";
import App from "./App.vue";
// import store from './store'

import VWave from "v-wave";

Vue.use(VWave)

//引入router
import router from "@/router";

//引入swiper
import "swiper/css/swiper.css"

// //图片懒加载cnpm i vue-lazyload
// import VueLazyload from 'vue-lazyload'
// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   error: errorimage,
//   loading: loadimage,
//   attempt: 1
// })

//统一接口api文件夹里面全部请求函数
import * as API from "@/api"

//三级联动全局组件
import TypeNav from "@/components/TypeNav";
Vue.component(TypeNav.name, TypeNav);
//分液器全局组件
import Pagination from "@/components/Pagination";
Vue.component(Pagination.name, Pagination);
//导航栏
import Nav from "@/components/Nav";
Vue.component(Nav.name, Nav);

//引入vuex仓库
import store from "@/store";

//引入MockServer.js----mock数据
import "@/mock/mockServe";

//使用element ui插件
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

//引入并注册图标字体库
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
Vue.component("font-awesome-icon", FontAwesomeIcon);
//按需引入图标字体
//fas风格
import {
	faUser,
	faArrowUp,
	faArrowDown,
	faCircleCheck,
	faEyeSlash,
	faPhone,
	faMobile,
	faUsers,
	faComments,
	faBell,
	faCartShopping,
	faCommentDots,
	faGlobe,
	faChevronDown,
	faRankingStar,
	faHandHoldingHand,
	faHeadset,
	faWarehouse,
	faCreditCard
} from "@fortawesome/free-solid-svg-icons";
// fab风格
import {
	faWeixin,
	faWeibo,
	faQq,
	faGithub,
	faWpforms

} from "@fortawesome/free-brands-svg-icons";
//在核心依赖中加入这个引入的图标
library.add(faUser,
	faWeixin,
	faArrowUp,
	faArrowDown,
	faCircleCheck,
	faEyeSlash,
	faWeibo,
	faQq,
	faGithub,
	faPhone,
	faMobile,
	faUsers,
	faComments,
	faBell,
	faCartShopping,
	faCommentDots,
	faGlobe,
	faChevronDown,
	faRankingStar,
	faHandHoldingHand,
	faHeadset,
	faWarehouse,
	faCreditCard,
	faWpforms
);

//关闭生产提示
Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
	//全局事件总线$bus配置
	beforeCreate() {
		Vue.prototype.$bus = this;
		Vue.prototype.$API = API
	},
	//注册路由
	router,
	//注册vuex仓库
	store
}).$mount("#app");
