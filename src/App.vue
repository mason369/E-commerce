<template>
    <div class="root">
        <Header></Header>
        <!-- 路由出口 -->
        <router-view ></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
// import axios from "axios"
// import bootstrap from "bootstrap"

// 引入页面
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default {
    name: "App",
    //注册组件
    components: {
        Header,
        Footer,
    },
  mounted(){
    //通知Vuex发请求,获取数据,存储于仓库当中
    this.$store.dispatch("categoryList");
  }
};
</script>

<style lang="scss" scoped></style>
