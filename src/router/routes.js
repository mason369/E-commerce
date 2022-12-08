//配置路由
export default [
	{
		path     : "/paysuccess",
		component: () => import("@/pages/PaySuccess"),
		name     : "paysuccess"
	},
	{
		path       : "/pay",
		component  : () => import("@/pages/Pay"),
		name       : "pay",
		beforeEnter: (to, from, next) => {
			//去交易页面,必须是从购物车而来
			if (from.path === "/trade") {
				next();
			}
			else {
				next(false);
			}
		}
	},
	{
		path       : "/trade",
		component  : () => import("@/pages/Trade"),
		name       : "trade",
		//路由独享守卫
		beforeEnter: (to, from, next) => {
			//去交易页面,必须是从购物车而来
			if (from.path === "/shopcart") {
				next();
			}
			else {
				next(false);
			}
		}
	},
	{
		path     : "/shopcart",
		component: () => import("@/pages/ShopCart"),
		name     : "shopcart"
	},
	{
		path     : "/addcartsuccess",
		component: () => import("@/pages/AddCartSuccess"),
		name     : "addcartsuccess"
	},
	{
		path     : "/site",
		component: () => import("@/pages/Site"),
		name     : "site"
	},
	{
		path     : "/news",
		component: () => import("@/pages/News"),
		name     : "news"
	},
	{
		path     : "/detail/:skuid",
		component: () => import("@/pages/Detail"),
		name     : "detail"
	},
	{
		path     : "/home",
		component: () => import("@/pages/Home"),
		name     : "home"
	},
	{
		path     : "/search/:keyword?",
		component: () => import("@/pages/Search"),
		name     : "search"
	},
	{
		path     : "/register",
		component: () => import("@/pages/Register"),
		name     : "register"
	},
	{
		path     : "/school",
		component: () => import("@/pages/School"),
		name     : "school"
	},
	{
		path     : "/personal",
		component: () => import("@/pages/Personal"),
		name     : "personal",
		//二级路由
		children : [
			{
				path     : "myorder",
				component: () => import("@/pages/Personal/Wicket"),
				name     : "myorder"
			},
			{
				path     : "grouporder",
				component: () => import("@/pages/Personal/groupOrder"),
				name     : "grouporder"
			},
			{
				//访问父路由跳转默认界面
				path    : "/personal",
				redirect: "/personal/myorder"
			}
		]
	},
	{
		path     : "/login",
		component: () => import("@/pages/Login"),
		name     : "login"
	},
	{
		path    : "*",
		redirect: "/home"
	}
];
