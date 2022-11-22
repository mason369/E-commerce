<template>
    <div class="order-my">
        <div class="parti">
            <!-- 右侧内容 -->
            <div class="order-right">
                <div class="order-content">
                    <div class="title">
                        <h3>我的订单</h3>
                    </div>
                    <div class="chosetype">
                        <table>
                            <thead>
                                <tr>
                                    <th width="29%">商品</th>
                                    <th width="31%">订单详情</th>
                                    <th width="13%">收货人</th>
                                    <th>金额</th>
                                    <th>状态</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div class="orders">
                        <table class="order-item" v-for="order in myOrder.records" :key="order.id">
                            <thead>
                                <tr>
                                    <th colspan="5">
                                        <span class="ordertitle"
                                            >{{ order.createTime }} 　订单编号：{{ order.outTradeNo }}
                                            <span class="pull-right delete"><img src="./images/delete.png" /></span
                                        ></span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(cart, index) in order.orderDetailList" :key="cart.id">
                                    <td width="60%">
                                        <div class="typographic">
                                            <img style="width: 82px; height: 82px" :src="cart.imgUrl" />
                                            <a href="#" class="block-text">{{ cart.skuName }}</a>
                                            <span>x{{ cart.skuNum }}</span>
                                            <a href="#" class="service">售后申请</a>
                                        </div>
                                    </td>
                                    <td
                                        :rowspan="order.orderDetailList.length"
                                        v-if="index == 0"
                                        width="8%"
                                        class="center"
                                    >
                                        {{ order.consignee }}
                                    </td>
                                    <td
                                        v-if="index == 0"
                                        :rowspan="order.orderDetailList.length"
                                        width="13%"
                                        class="center"
                                    >
                                        <ul class="unstyled">
                                            <li>总金额¥{{ order.totalAmount }}.00</li>
                                            <li>在线支付</li>
                                        </ul>
                                    </td>
                                    <td
                                        v-if="index == 0"
                                        :rowspan="order.orderDetailList.length"
                                        width="8%"
                                        class="center"
                                    >
                                        <a href="#" class="btn">{{ order.orderStatusName }}</a>
                                    </td>
                                    <td
                                        v-if="index == 0"
                                        :rowspan="order.orderDetailList.length"
                                        width="13%"
                                        class="center"
                                    >
                                        <ul class="unstyled">
                                            <li>
                                                <a href="mycomment.html" target="_blank">评价|晒单</a>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="choose-order">
<!--                        //分页器-->
                        <Pagination
                            :pageNo="page"
                            :pageSize="limit"
                            :total="myOrder.total"
                            :continues="5"
                            @getPageNo="getPageNo"
                        />
                    </div>
                </div>
                <!--猜你喜欢-->
                <div class="flooter">
                    <div class="foolter-banner">
                        <Glike></Glike>
                        <Adver></Adver>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Glike from "@/pages/Personal/Glike";
import Adver from "@/pages/Personal/Adver";

export default {
    data() {
        return {
            //初始化参数
            //当前页数
            page: 1,
            // 每页数据个数
            limit: 3,
            //存储我的订单的数据
            myOrder: {},
        };
    },
    components: {
        Glike,
        Adver,
    },
    mounted() {
        //获取我的订单
        this.getData();
    },
    methods: {
        //获取我的订单
        async getData() {
            const { page, limit } = this; //解构数据
            let result = await this.$API.reqMyOrderList(page, limit);
            if (result.code == 200) {
                this.myOrder = result.data;
            }
        },
        //获取点击页码
        getPageNo(page) {
            // 获取点击后对应页码
            this.page = page;
            this.getData();
        },
    },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/_color.scss";
@import "../../../assets/scss/_fonts.scss";

.foolter-banner {
    border-top: 1px solid #00a818;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.order-my {
    margin-top: 30px;
    margin-left: -900px;
    display: block;

    .parti {
        margin-top: 10px;
        width: 100%;
        background-color: $white-color;

        .parti-headr {
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding-top: 20px;
            padding-left: 10px;

            ul {
                display: flex;

                li {
                    margin: 0 50px 0 0;

                    a {
                        width: 60px;
                    }
                }
            }
        }

        //右边
        .order-right {
            float: right;
            width: 100%;

            //订单部分
            .order-content {
                margin: 0 20px;
                color: #666;

                //标题
                .title {
                    margin-bottom: 22px;
                    border: 1px solid #ddd;

                    h3 {
                        padding: 12px 10px;
                        font-size: 15px;
                        background-color: #f1f1f1;
                    }
                }

                //表头
                .chosetype {
                    margin-bottom: 15px;
                    color: #666;

                    table {
                        border: 1px solid #e6e6e6;
                        border-collapse: separate;
                        border-radius: 2px;
                        width: 100%;
                        max-width: 100%;
                        border-spacing: 0;

                        th {
                            padding: 6px 8px;
                            color: #666;
                            font-weight: 700;
                            vertical-align: bottom;
                            background-color: #f4f4f4;
                            line-height: 18px;
                            border-bottom: 1px solid #e6e6e6;
                            font-size: 12px;
                            text-align: left;
                        }
                    }
                }

                // 表单内容
                .orders {
                    font-size: 12px;

                    a {
                        &:hover {
                            color: #4cb9fc;
                        }
                    }

                    table {
                        border: 1px solid #e6e6e6;
                        border-collapse: collapse;
                        border-radius: 2px;
                        width: 100%;
                        margin-bottom: 18px;
                        max-width: 100%;

                        th {
                            padding: 6px 8px;
                            line-height: 18px;
                            text-align: left;
                            vertical-align: bottom;
                            background-color: #f4f4f4;
                            font-size: 12px;
                            color: #666;

                            .pull-right {
                                float: right;
                                cursor: pointer;

                                img {
                                    margin-right: 10px;
                                    vertical-align: middle;
                                }
                            }
                        }

                        td {
                            font-size: 12px;
                            color: #666;
                            padding: 6px 8px;
                            line-height: 18px;
                            text-align: left;
                            vertical-align: middle;
                            border: 1px solid #e6e6e6;

                            &.center {
                                text-align: center;
                            }

                            .typographic {
                                img {
                                    float: left;
                                    margin-right: 10px;
                                }

                                a {
                                    float: left;
                                    min-width: 80px;
                                    max-width: 250px;
                                    color: #e1251b;

                                    &.service {
                                        color: #666;
                                    }
                                }

                                span {
                                    float: left;
                                    min-width: 80px;
                                    max-width: 250px;
                                    text-align: center;
                                }
                            }
                        }
                    }
                }

                // 分页
                .choose-order {
                    .pagination {
                        position: relative;
                        margin: 38px 0;

                        ul {
                            font-size: 0;
                            display: inline-block;

                            li {
                                display: inline-block;
                                padding: 4px 9px;
                                font-size: 14px;
                                border: 1px solid #e0e9ee;

                                &.prev,
                                &.next {
                                    background-color: #fafafa;
                                }

                                &.prev {
                                    border-right-color: #28a3ef;
                                }

                                &.page {
                                    border-color: #28a3ef;
                                    border-left: 0;

                                    &.actived {
                                        background-color: #28a3ef;

                                        a {
                                            color: #fff;
                                        }
                                    }
                                }
                            }
                        }

                        div {
                            display: inline-block;
                            font-size: 14px;
                            color: #333;
                        }
                    }
                }
            }

            // 猜你喜欢
            .like {
                border: 1px solid #ddd;
                margin: 15px 20px;

                .kt {
                    border-bottom: 1px solid #ddd;
                    background: #f1f1f1;
                    color: #666;
                    margin: 0;
                    padding: 12px;
                    font-size: 15px;
                }

                .like-list {
                    padding: 15px 11px;
                    overflow: hidden;

                    .likeItem {
                        width: 25%;
                        float: left;

                        .p-img {
                            text-align: left;

                            img {
                                width: 167px;
                                height: 123px;
                            }
                        }

                        .attr {
                            padding: 0 15px;
                        }

                        .price {
                            padding: 0 15px;
                            font-size: 16px;
                            color: #c81623;
                            margin-bottom: 20px;
                        }

                        .commit {
                            padding: 0 15px;
                        }
                    }
                }
            }
        }
    }
}
</style>
