<template>
    <div class="Rank">
        <div class="louceng-title">
            <img
                src="https://res.fupin832.com/icon/title-left.png"
                alt=""
                class="t-left"
                onerror="javascript:this.src='/webpage/gxs/images/wutu.png'"
            />
            <h3>热门供应</h3>
            <img
                src="https://res.fupin832.com/icon/title-right.png"
                alt=""
                class="t-right"
                onerror="javascript:this.src='/webpage/gxs/images/wutu.png'"
            />
        </div>
        <div class="Rank-body">
            <div class="lou_top">
                <div class="db_prod_line">
                    <a><img class="fl" src="https://res.fupin832.com/1657959333147.jpg@80x80" alt="" /></a>
                    <div class="shop_info">
                        <span class="fl w_ell"><a>恩施鑫硒电子商务有限公司</a></span>
                        <a class="dizhi">湖北省恩施土家族苗族自治州恩施市</a>
                    </div>
                </div>
                <div class="db_prod_line">
                    <a><img class="fl" src="https://res.fupin832.com/1615964996904.jpg@80x80" alt="" /></a>
                    <div class="shop_info">
                        <span class="fl w_ell"><a>宁夏生龙肉制品有限公司</a></span>

                        <a class="dizhi">宁夏回族自治区固原市原州区</a>
                    </div>
                </div>
            </div>

            <div class="goods-tuijain">
                <ul class="rank-banner">
                    <li style="margin-left: 39px;">
                        <a>内蒙古特色产品</a>
                    </li>
                    <li>
                        <a>湖北特色产品</a>
                    </li>
                    <li>
                        <a>广西、贵州特色产品</a>
                    </li>
                    <li>
                        <a>云南特色产品</a>
                    </li>
                    <li>
                        <a>四川、重庆特色产品</a>
                    </li>
                </ul>
                <div class="product_inline_b fl" v-for="goods in goodsHot.slice(0, 8)" :key="goods.length">
                    <a>
                        <img class="rec_pic" src="https://res.fupin832.com/1658289245674.jpg@240x240" />
                    </a>

                    <a class="goods-info">{{ goods.snameInfo }}</a>
                    <div class="left-price">
                        <div class="icons-father">
                            <div class="imgrenzheng">
                                <span class="tips tips-yj">
                                    <img
                                        width="16px"
                                        height="16px"
                                        src="https://www.fupin832.com/webpage/gxs/images/jcbg-icon.png"
                                    /> </span
                                ><span class="tips">
                                    <img
                                        width="16px"
                                        height="16px"
                                        src="https://www.fupin832.com/webpage/gxs/images/bzj-icon.png"
                                    />
                                </span>
                            </div>
                            <span class="stime">上架时间:{{ goods.stime.replace("T",' ').substring(0,18) }}</span>
                        </div>
                        <p class="product_price tf">
                            ￥<span class="price_num">{{ goods.sprice }}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "Rank",
    mounted() {
        this.$store.dispatch("getGoodsHot");
    },
    methods: {},
    computed: {
        ...mapState({
            goodsHot: (state) => state.home.goodsHot,
        }),
    },
};
</script>

<style lang="scss" scoped>
.goods-tuijain {
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    height: 680px;
    .rec_pic {
        width: 144px;
        height: 144px;
        padding: 0;
    }
    .product_inline_b {
        background-color: #e9e9e9;
        margin: 5px 15px;
        position: relative;
        &:hover {
            box-shadow: 0 0 10px rgb(0 0 0 / 30%);
        }
        .goods-info {
            width: 200px;
            height: 45px;
            overflow: hidden;
            padding: 6px 0;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            word-break: break-all;
            text-overflow: ellipsis;
            -webkit-line-clamp: 2;
            font-size: 12px;
            color: #333333;
        }
        .left-price {
            position: absolute;
            top: 235px;
            left: 0px;

            display: flex;
            flex-direction: column;
            .tips {
                margin: 0 5px;
            }
            .icons-father {
                display: flex;
                width: 220px;
                align-items: center;
                flex-direction: column;
                justify-content: space-between;
                padding: 3px 0;
                border: 1px solid #fff;
                border-left: none;
                border-right: none;
                .stime {
                    font-size: 12px;
                    width: 200px;
                    color: #e9903c;
                    float: right;
                }
                .imgrenzheng{
                    margin: 2px 0;
                    float: left;
                    width: 200px;
                }
            }

            .price_num,
            .product_price {
                margin: 5px 0 0 5px;
                color: #ff0000;
            }
        }
        height: 305px;
        width: 220px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    float: left;
    width: 1018px;
    .rank-banner {
        display: flex;
    }
}
.Rank {
    width: 1200px;
    margin: 0 auto;
    .Rank-body {
        display: flex;
        justify-content: space-between;
        position: relative;
        .lou_top {
            display: flex;
            flex-direction: column;

            .db_prod_line {
                &:nth-child(1) {
                    position: absolute;
                    top: 500px;
                    left: 13.5px;
                }
                &:nth-child(2) {
                    position: absolute;
                    top: 580px;
                    left: 13.5px;
                }

                img {
                    width: 52px;
                    height: 52px;
                }
                .shop_info {
                    position: relative;
                    .w_ell {
                        a {
                            color: #fff;
                        }
                        font-size: 12px;
                        font-weight: 600;
                        width: 100px;
                        position: absolute;
                        top: 0px;
                        left: 6px;
                    }
                    .dizhi {
                        position: absolute;
                        top: 30px;
                        font-size: 10px;
                        color: #fff;
                        width: 100px;
                        left: 6px;
                    }
                }
                display: flex;
                width: 150px;
            }
            width: 180px;
            height: 700px;
            background-image: url(https://res.fupin832.com/ghyx-bg.jpg);
            background-size: 180px 680px;
            background-repeat: no-repeat;
        }
    }
}
.louceng-title {
    h3 {
        font-size: 25px;
        font-weight: 600;
        margin: 0 25px;
        color: #f8523c;
    }
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.rank-banner {
    li {
        &:hover {
            background: #e9903c;
            a {
                color: #ffffff !important;
            }
        }
        a {
            color: #e9903c !important;
        }
        text-align: center;
        border-radius: 35px;
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        width: 150px;
        height: 29px;
        line-height: 26px;
        margin-left: 20px;
        margin-top: 10px;
        background: #fff0d1;
    }
}
</style>
