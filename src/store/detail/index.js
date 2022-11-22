import { reqAddOrUpdateShopCart, reqGoodsInfo } from "@/api";
//封装临时身份的模块
import {getUUID} from '@/utils/uuid_token'
const actions = {
    //获取产品信息
    async getGoodsInfo({ commit }, skuId) {
        let result = await reqGoodsInfo(skuId);
        if (result.code === 200) {
            commit("GETGOODSINFO", result.data);
        }
    },
    //将产品添加到购物车中
    //加入购物车以后（发请求），前台将参数带给服务器
    //服务器写入数据成功，并没有返回其他的数据，只是返回code=200，代表这次操作成功
    async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
        //加入购物车的解构
        let result = await reqAddOrUpdateShopCart(skuId, skuNum);

        if (result.code == 200) {
            //代表加入购物车成功
            return "ok";
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
};
const mutations = {
    GETGOODSINFO(state, goodsInfo) {
        state.goodsInfo = goodsInfo;
    },
};
const state = {
    goodsInfo: {},
    //游客的临时身份
    uuid_token: getUUID(),
};
const getters = {
    //state.goodInfo初始状态空对象，空对象的categoryView属性值undefined
    categoryView(state) {
        //当前计算出的categoryview属性值至少是一个空对象，假的报错不会有
        return state.goodsInfo.categoryView || {};
    },
    skuInfo(state) {
        return state.goodsInfo.skuInfo || {};
    },
};

export default {
    state,
    actions,
    mutations,
    getters,
};
