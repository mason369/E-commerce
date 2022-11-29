import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from "@/store";

Vue.use(VueRouter);

//重写push、replace防止控制台报错
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

//重写VueRouter.prototype身上的push方法
VueRouter.prototype.push = function (location, resolve, reject) {
    if (reject && resolve) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(
            this,
            location,
            () => {},
            () => {},
        );
    }
};

//重写VueRouter.prototype身上的replace方法
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (reject && resolve) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(
            this,
            location,
            () => {},
            () => {},
        );
    }
};

let router = new VueRouter({
    routes,
    scrollBehavior() {
        return { y: 0 };
    },
});

//全局守卫,前置守卫（在路由跳转之间进行判断)
router.beforeEach(async (to, from, next) => {
    //to:可以获取到你要跳转到那个路由信息
    //from:可以获取到你从哪个路由而来的信息
    //next:放行函数 next()放行 next(path)放行到指令路由
    next();
    //用户登录了,才会有token,未登录一定不会有token
    let name = store.state.user.userInfo.name;
    let token = store.state.user.token;
    if (token) {
        //登录后组织跳转login
        if (to.path == "/login" || to.path == "/register") {
            next("/");
        } else {
            // 登陆了,但是去的不是login和regster且拥有用户信息放行
            if (name) {
                next();
            } else {
                //没有用户信息,派发action让仓库存储用户信息再跳转
                try {
                    await store.dispatch("getUserInfo");
                    //获取用户信息成功
                    next();
                } catch (error) {
                    //token失效了,获取不到用户信息，重新登录
                    //清除token
                    await store.dispatch("userLogOut");
                    next("/login");
                }
            }
        }
    } else {
        //未登录:不能去交易相关、不能去支付相关【pay |paysuccess】、不能去个人中心
        let toPath = to.path;
        //如果去trade
        if (toPath.indexOf("/trade") != -1 || toPath.indexOf("/pay") != -1 || toPath.indexOf("/personal") != -1) {
            next("/login?redirect=" + toPath);
        } else {
            next();
        }
    }
});

export default router;
