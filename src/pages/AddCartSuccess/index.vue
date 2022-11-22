<template>
    <div class="cart-complete-wrap">
        <div class="cart-complete">
            <h3>
                <font-awesome-icon icon="fa-solid fa-circle-check" />
                商品已成功加入购物车！
            </h3>
            <div class="goods">
                <div class="left-good">
                    <div class="left-pic">
                        <img :src="skuInfo.skuDefaultImg" />
                    </div>
                    <div class="right-info">
                        <p class="title">{{ skuInfo.skuName }}</p>
                        <p class="attr">
                            {{ skuInfo.skuDesc }} <span class="color">数量：{{ $route.query.skuNum }}</span>
                        </p>
                    </div>
                </div>
                <div class="right-gocart">
                    <!--                    <a href="javascript:" class="sui-btn btn-xlarge">查看商品详情</a>-->
                    <router-link class="sui-btn btn-xlarge" :to="`/detail/${skuInfo.id}`">查看商品详情</router-link>
                    <!--                    <a href="javascript:">去购物车结算 > </a>-->
                    <router-link to="/shopcart">去购物车结算 ></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddCartSuccess",
    computed: {
        skuInfo() {
            return JSON.parse(sessionStorage.getItem("SKUINFO"));
        },
    },
};
</script>

<style lang="scss" scoped>
.fa-circle-check {
    margin-right: 6px;
}

.cart-complete-wrap {
    background-color: #f4f4f4;

    .cart-complete {
        width: 1200px;
        margin: 0 auto;

        h3 {
            line-height: 30px;
            font-weight: bold;
            font-size: 18px;
            color: #6aaf04;
            padding-top: 15px;
            padding-bottom: 15px;
            margin: 0;

            .icon-pc-right {
                background-color: #fff;
                border: 2px solid #6aaf04;
                padding: 3px;
                margin-right: 8px;
                border-radius: 15px;
            }
        }

        .goods {
            border: 1px solid #c9c9c9;
            box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
            overflow: hidden;
            padding: 10px 0;

            .left-good {
                margin-left: 10px;
                float: left;

                .left-pic {
                    border: 1px solid #dfdfdf;
                    width: 60px;
                    float: left;

                    img {
                        width: 60px;
                        height: 60px;
                    }
                }

                .right-info {
                    color: #444;
                    float: left;
                    margin-left: 10px;

                    .title {
                        width: 100%;
                        line-height: 28px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        font-size: 14px;
                    }

                    .attr {
                        color: #aaa;

                        .color {
                            margin-left: 20px;
                            font-weight: bold;
                            color: #e1251b;
                        }
                    }
                }
            }

            .right-gocart {
                margin-right: 10px;
                float: right;
                margin-top: 36px;

                a {
                    padding: 7px 36px;
                    font-size: 15px;
                    line-height: 22px;
                    color: #333;
                    background-color: #eee;
                    text-decoration: none;
                    box-sizing: border-box;
                    border: 1px solid #e1e1e1;
                }

                a:hover {
                    background-color: #d3d3d3;
                    border: 1px solid #eaeaea;
                }

                a:active {
                    background-color: #888888;
                    border: 1px solid #d5d5d5;
                }

                .btn-danger {
                    background-color: #e1251b;
                    color: #fff;
                }

                .btn-danger:hover {
                    background-color: #e1251b;
                }
            }
        }
    }
}
</style>
