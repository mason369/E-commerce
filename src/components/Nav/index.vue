<template>
    <!--    <nav class="nav">-->

    <div class="nav">

        <router-link to="/search" active-class="active" >全部商品分类</router-link>
      <router-link to="/home" active-class="active">首页</router-link>
        <router-link to="/news" active-class="active">农业新闻</router-link>
        <a>美妆馆</a>
        <a>全球购</a>
        <a>闪购</a>
        <a>全球购</a>
    </div>

    <!--    </nav>-->
</template>

<script>
export default {
    name: "Nav",
};
</script>

<style lang="scss" scoped>
.nav {
    display: flex;
    justify-content: center;
    border-bottom: 2px solid #8dc742;

    a,
    router-link {
        display: inline-block;
        width: 171px;
        line-height: 45px;
        cursor: pointer;
        height: 45px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
        text-align: center;

        &:hover {
            background-color: #8dc742;
            color: #fff;
        }
    }

    .active {
        background-color: #8dc742;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
    }
}
</style>
