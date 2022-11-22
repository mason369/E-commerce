<template>
    <div class="order" id="order">
        <div class="order-left">
            <div class="order-left-list">
                <ul>
                <h3>订单中心</h3>
                <li><router-link to="/personal/myorder">我的订单</router-link></li>
                <li><router-link to="/personal/grouporder">团购订单</router-link></li>
                <li><a >评价晒单</a></li>
                <li><a >我的常购商品<span>NEW</span></a></li>
                <li><a >代下单</a></li>
            </ul>
            <ul>
                <h3>关注中心</h3>
                <li><a >关注的商品</a></li>
                <li><a >关注的店铺</a></li>
                <li><a >关注的活动</a></li>
            </ul>
            <ul>
                <h3>设置</h3>
                <li><a >个人信息</a></li>
                <router-link to="/site" id="shipping"><a >收货地址</a></router-link>
            </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
        #order{
            // 此处是整个商品区域距离hader部分的距离
            margin: 30px 0 750px 0;
        }
        .order{
            //这里是设置页面通用宽度以及居中
            // margin: 0 auto;
            // width: 1230px;
            // display: flex;
            .order-left{
                width: 150px;
                .order-left-list{
                    font-size: 16px;
                    #shipping{
                        a{
                            color: rgb(159, 159, 159);
                        }
                    }
                    ul:nth-child(1){
                        margin-bottom: 40px;
                    }
                    ul{
                        li{
                            margin: 16px 0;
                            a{
                                color: rgb(159, 159, 159);
                            }
                            span{
                                background-color: red;
                                color: white;
                                font-size: 10px;
                            }
                        }
                        li{
                            a:hover{
                                color: red;
                                border-bottom: 1px red solid;
                            }
                        }
                    }
                }
            }
        }
</style>
