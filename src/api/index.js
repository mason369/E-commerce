//api统一管理
import requests from "./request";
//引入mock
import mockRequest from "./mockRequest";
//引入后端接口
// import localRequest from "./localRequest";

//三级联动接口
export const reqCategoryList = () => requests({ url: "/product/getBaseCategoryList", method: "get" });

//获取轮播图
export const reqGetBannerList = () => mockRequest({ url: "/banner", method: "get" });

//获取搜索模块数据
export const reqGetSearchInfo = (params) => requests({ url: "/list", method: "post", data: params });

//获取floor模块轮播图
export const reqGetFloorBannerList = () => mockRequest({ url: "/floorBanner", method: "get" });

//获取商品详情
export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: "get"})

//将产品添加到购物车中（获取更新某一个产品的个数)
export const reqAddOrUpdateShopCart = (skuId, skuNum)=>requests({url: `/cart/addToCart/${skuId}/${skuNum}`, method: "post"})

//获取购物车列表
export const reqCartList = () => requests({ url: "/cart/cartList", method: "get"})

//删除操作
export const reqDeleteCartById = (skuId) =>requests({ url: `/cart/deleteCart/${skuId}`, method: "delete"})

//修改商品选中状态/api/cart/checkCart/{skuID}/{isChecked}

export const reqUpdateCheckdById = (skuID, isChecked) =>requests({ url: `/cart/checkCart/${skuID}/${isChecked}`, method: "get"})

//获取验证码/api/user/passport/sendCode/{phone}
export const reqGetCode = (email) =>requests({ url: `user/passport/sendCode/${email}`, method: "get"})

// 注册
export const reqUserRegister = (data) =>requests({ url: "user/passport/register", data, method: "post"})

//登录
export const reqUserLogin = (data) => requests({ url: "/user/passport/login", data, method: "post"})

//退出登录
export const reqLogOut = ()=>requests({url: "/user/passport/logout", method: "get"})

//获取用户信息
export const reqUserInfo = () =>requests({ url: "/user/passport/auth/getUserInfo", method: "get"})

//获取用户地址信息
export  const reqAddressInfo = () => requests({ url: "/user/userAddress/auth/findUserAddressList", method: "get"})

//获取热门商品列表 TODO
export const reqGetGoodsHot = ()=>mockRequest({ url: "/goodsList", method: "get"})

//获取商品清单
export const reqOrderInfo = () => requests({ url: "/order/auth/trade", method: "get"})

//提交订单
export const reqSubmitOrder = (tradeNo, data)=>requests({url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, data, method: "post"})

//获取支付信息
export const reqPayInfo = (order)=>requests({url: `/payment/weixin/createNative/${order}`, method: "get"})

//获取支付订单状态
export const reqPayStatus = (orderId)=>requests({url: `/payment/weixin/queryPayStatus/${orderId}`, method: "get"})

//获取个人中心数据
export const reqMyOrderList = (page, limit) => requests({url: `/order/auth/${page}/${limit}`, method: "get"})
