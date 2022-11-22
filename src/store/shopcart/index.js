import { reqCartList, reqDeleteCartById, reqUpdateCheckdById } from "@/api";

const actions = {
    //获取购物车列表数据
    async getCartList({ commit }) {
        let result = await reqCartList();
        if (result.code == 200) {
            commit("GETCARTLIST", result.data);
        }
    },
    //删除购物车商品
    async deleteCartListBySkuId({ commit }, skuId) {
        let result = await reqDeleteCartById(skuId);
        if (result.code == 200) {
            return "ok";
        } else {
            return Promise.reject(new Error("failed"));
        }
    },
    //修改购物车商品选中状态
    async updateCheckedById({ commit }, { skuId, isChecked }) {
        let result = await reqUpdateCheckdById(skuId, isChecked);
        if (result.code == 200) {
            return "ok";
        } else {
            return Promise.reject(new Error("failed"));
        }
    },
    //删除全部选中的商品
    deleteAllCheckedCart({ dispatch, getters }) {
        //context:小仓库，comm北【提交mutations修改state】 getters【计算属性】dispatch【派发action】 state【当前仓库数据】
        // 获取购物车中全部的产品（是一个数组)
        let PromiseAll = [];
        getters.cartList.cartInfoList.forEach((item) => {
            let promise = item.isChecked == 1 ? dispatch("deleteCartListBySkuId", item.skuId) : "";
            //将每一次返回的Promise添加到数组当中
            PromiseAll.push(promise);
        });
        //只要全部的pi|p2....都成功，返回结果即为成功
        // 如果有一个失败,返回即为失败结果
        return Promise.all(PromiseAll);
    },
    //修改全部商品的选中状态
    updateAllCartIsChecked({ dispatch, state }, isChecked) {
        let promiseAll = [];
        state.cartList[0].cartInfoList.forEach((item) => {
            let promise = dispatch("updateCheckedById", { skuId: item.skuId, isChecked });
            promiseAll.push(promise);
        });
        //最终返回结果
return Promise.all(promiseAll);
    },
};
const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList;
    },
};
const state = {
    cartList: [],
};
const getters = {
    cartList(state) {
        return state.cartList[0] || {};
    },
};

export default {
    actions,
    mutations,
    state,
    getters,
};
