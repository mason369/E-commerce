<template>
    <div>
        <!-- 三级联动全局组件 -->
        <TypeNav></TypeNav>
        <ListContainer></ListContainer>
        <Recommend></Recommend>
        <Rank></Rank>
        <Like></Like>
        <Foolr></Foolr>
    </div>
</template>

<script>
// 引入其他的组件
import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Foolr from "@/pages/Home/Foolr";

export default {
    components: {
        ListContainer,
        Recommend,
        Rank,
        Like,
        Foolr,
    },
};
</script>

<style lang="scss" scoped></style>
