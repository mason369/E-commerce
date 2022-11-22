<template>
    <div class="order">
        <ul>
            <h3>设置</h3>
            <li><a href="">个人信息</a></li>
            <li><a href="">账户安全</a></li>
            <li><a href="">收货地址</a></li>
        </ul>
    </div>
</template>

<script>

export default {
    components: {
    },
  mounted(){
  }
};
</script>
<style lang="scss" scoped>
@import "../../../assets/scss/_color.scss";
@import "../../../assets/scss/_fonts.scss";
.order{
    margin-top: 30px;
    width: 150px;
    ul{
        li{
            margin: 16px 0;
            a{
                font-size: 16px;
                color: rgb(159, 159, 159);
            }
        }
    }
}
</style>
