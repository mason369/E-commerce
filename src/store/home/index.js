//home模块仓库
/* eslint-disable */
import { reqCategoryList, reqGetBannerList, reqGetFloorBannerList, reqGetGoodsHot } from "@/api";

// //创建actions(本质就是对象) 用于响应组件中的动作
const actions = {
    //收到上下文对象(包含commit)和dispatch过来的值
    // 获取服务器数据
    async categoryList({ commit }) {
        let result = await reqCategoryList();
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data);
        }
    },
    //获取首页轮播图的数据
    async getBannerList({ commit }) {
        let result = await reqGetBannerList();
        if (result.code == 200) {
            commit("GETBANNERLIST", result.data);
        }
    },
    //获取首页floor轮播图
    async getFloorBannerList({ commit }) {
        let result = await reqGetFloorBannerList();
        if (result.code == 200) {
            commit("GETFLOORBANLIST", result.data);
        }
    },
    //获取热门商品列表
    async getGoodsHot({ commit }) {
        let result = await reqGetGoodsHot();
        if (result.code == 200) {
            commit("GETGOODSHOT", result.data);
        }
    },
};

// //创建mutations(本质也是对象) 用于修改数据(state)
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    },
    GETFLOORBANLIST(state, floorBannerList) {
        state.floorBannerList = floorBannerList;
    },

    GETGOODSHOT(state, goodsHot) {
        state.goodsHot = goodsHot;
    },
};

// //准备state(数据) 存储数据
// //类似于各个组件里的computed(计算属性),只不过它是共享的
const state = {
    //三级联动列表数据
    categoryList: [],
    //轮播图数据
    bannerList: [],
    //floor组件轮播图数据
    floorBannerList: [],
    goodsHot: [],
};

/* eslint-disable */
// //准备getters用于加工state，将其共享于各个组件当中
const getters = {};

// //创建并暴露store
export default {
    actions,
    mutations,
    state,
    getters,
};
