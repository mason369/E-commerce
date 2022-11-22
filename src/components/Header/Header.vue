<template>
    <!-- /*---------------- head部分---------------- */ -->
    <div class="head" id="translation">
        <div class="header-top header">
            <div class="header-box contain">
                <div class="header-top">
                    <ul class="header-left">
                        <li>欢迎来到脱贫地区农副产品网络销售平台！</li>
                        <span>|</span>
                        <li>
                            <a href="../www/mobile_index.html">
                                <font-awesome-icon
                                    icon="fa-solid
                                fa-mobile"
                                />
                                手机版</a
                            >
                        </li>
                        <span>|</span>
                        <li>
                            <a href="javascript:;">
                                <font-awesome-icon icon="fa-solid fa-users" />
                                商家后台</a
                            >
                        </li>
                    </ul>
                    <ul class="header-right">
                        <li>
                            <a class="loc-an-box" href="javascript:;">
                                <div class="loc-mc-box">
                                    <p class="loc-mc-box__text">
                                        <font-awesome-icon icon="fa-solid fa-comments" />
                                        一条未读
                                    </p>
                                    <p class="loc-mc-box__text">
                                        <font-awesome-icon icon="fa-solid fa-bell" />
                                        我的消息
                                    </p>
                                    <p class="loc-mc-box__text">
                                        <font-awesome-icon icon="fa-solid fa-comments" />
                                        一条未读
                                    </p>
                                </div>
                            </a>
                        </li>
                        <span>|</span>
                        <li>
                            <router-link to="/shopcart">
                                <a>
                                    <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                                    购物车</a
                                ></router-link
                            >
                        </li>
                        <span>|</span>
                        <li>
                            <div
                                v-wave="{
                                    color: 'red',
                                }"
                            >
                                <router-link to="/personal">
                                  <font-awesome-icon icon="fa-brands fa-wpforms" />
                                    我的订单
                                </router-link>
                            </div>
                        </li>
                        <span>|</span>
                        <li class="user-sever-box">
                            <a href="javascript:;">
                                <font-awesome-icon icon="fa-solid fa-comment-dots" />
                                客户服务</a
                            >
                            <div class="user-sever">
                                <ul>
                                    <li><i class="fa fa-clock"></i> (08:30-22:00)</li>
                                    <li><i class="fa fa-envelope"></i>kefu@yiwugo.com</li>
                                    <li>
                                        <a>帮助中心</a>
                                        <a>意见反馈</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <span>|</span>
                        <li class="daohang-box">
                            <a href="javascript:;">
                                <font-awesome-icon icon="fa-solid fa-globe" />
                                网站导航
                                <font-awesome-icon icon="fa-solid fa-chevron-down" />
                            </a>
                            <div class="wdzhc show_z">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>新手入门</th>
                                            <td>
                                                <a href="javascript:;">义乌购介绍</a>
                                                <a href="javascript:;">注册</a>
                                                <a href="javascript:;">帮助中心</a>
                                                <a href="javascript:;">意见反馈</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>义乌购产品</th>
                                            <td>
                                                <a href="javascript:;">用户中心</a>
                                                <a href="javascript:;">市场地图</a>
                                                <a href="javascript:;">经侦平台</a>
                                                <a href="javascript:;">转租转让</a>
                                                <a href="javascript:;">限时秒杀</a>
                                                <a href="javascript:;">尾货清仓</a>
                                                <a href="javascript:;">WAP版</a>
                                                <a href="javascript:;">论坛</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>买家服务</th>
                                            <td>
                                                <a href="javascript:;">我的订单</a>
                                                <a href="javascript:;">发布求购</a>
                                                <a href="javascript:;">找供应商</a>
                                                <a href="javascript:;">找商品</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>卖家服务</th>
                                            <td>
                                                <a href="javascript:;">发布商品</a>
                                                <a href="javascript:;">管理订单</a>
                                                <a href="javascript:;">视频</a>
                                                <a href="javascript:;">发布库存</a>
                                                <a href="javascript:;">商铺代运营</a>
                                                <a href="javascript:;">义乌购营业执照</a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>热门行业</th>
                                            <td>
                                                <a href="javascript:;">玩具</a>
                                                <a href="javascript:;">仿真花</a>
                                                <a href="javascript:;">头饰</a>
                                                <a href="javascript:;">珠宝首饰</a>
                                                <a href="javascript:;">箱包</a>
                                                <a href="javascript:;">日用百货</a>
                                                <a href="javascript:;">装饰工艺</a>
                                                <a href="javascript:;">饰品配件</a>
                                                <a href="javascript:;">袜类</a>
                                                <a href="javascript:;">办公学习用品</a>
                                                <a href="javascript:;">文胸内衣</a>
                                                <a href="javascript:;">五金工具/配件</a>
                                                <a href="javascript:;">文化体育用品</a>
                                                <a href="javascript:;">五金厨卫</a>
                                                <a href="javascript:;">女装</a>
                                                <a href="javascript:;">床上用品</a>
                                                <a href="javascript:;">小家电</a>
                                                <a href="javascript:;">汽车用品</a>
                                                <a href="javascript:;">伞具</a>
                                                <a href="javascript:;">陶瓷水晶</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </li>
                        <span>|</span>
                        <li>
                            <span id="theme-toggler" class="nav-item nav-link"></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="header-nav header">
            <div class="header-box contain">
                <div class="header-body">
                    <router-link to="/home"><img class="logo" src="./images/logo.png" alt="" /></router-link>
                    <div class="search" v-show="searchHide">
                        <input
                            class="search search-input"
                            type="text"
                            placeholder="请输入内容"
                            v-model="keyword"
                            @keyup.enter="getSearch"
                        />
                        <button class="search-btn" @click="getSearch">搜索</button>
                        <ul id="ul">
                            <span style="float: left; margin-right: 4px">热门搜索：</span>
                            <span class="hot_search_box"
                                ><a style="color: #f40000" href="javascript:;">北京仓优选</a
                                ><a style="" href="javascript:;">工会优选</a><a style="" href="javascript:;">832溯源</a
                                ><a style="" href="javascript:;">832福蛋</a><a style="" href="javascript:;">832福米</a
                                ><a style="" href="javascript:;">832福油</a></span
                            >
                        </ul>
                    </div>
<!--                  <div class="header-body-right" >-->
                    <div class="header-body-right" v-show="loginHide">
                        <div class="login-dis" v-if="!userName">
                            <router-link to="/login" id="login-regster-btn">登录</router-link>
                            <router-link to="/register" id="login-regster-btn">注册</router-link>
                        </div>
                        <div class="login-dis" v-else>
                            <a>你好！{{ userName }}</a>
                            <a @click="logOut">退出登录</a>
                        </div>

                        <span>|</span>
                        <a href="javascript:;">
                          <font-awesome-icon icon="fa-solid fa-user" />
                            排行榜</a
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            keyword: "",
        };
    },
    methods: {
        //搜索按钮回调
        getSearch() {
            //代表的是如果有query参数也带过去
            if (this.$route.query) {
                let loction = {
                    name: "search",
                    params: { keyword: this.keyword || undefined },
                };
                loction.query = this.$route.query;
                this.$router.push(loction);
            }
        },
        //退出登录
        logOut() {
            try {
              //退出成功
              this.$store.dispatch("userLogOut");
              this.$router.push('/home')
              //回到首页
            }catch (error) {
              alert(error.message);
            }
        },
    },
    computed: {
        //搜索框显示与隐藏
        searchHide() {
            return !(this.$route.path == "/register") && !(this.$route.path == "/login");
        },
        //登录按钮显示与隐藏
        loginHide() {
            return (
                !(this.$route.path == "/register") &&
                !(this.$route.path == "/login")
            );
        },
        //用户名信息
        userName() {
            return this.$store.state.user.userInfo.name;
        },
    },
    mounted() {
        //通过全局事件总线清除关健字
        this.$bus.$on("clear", () => {
            this.keyword = "";
        });
    },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_color.scss";
@import "../../assets/scss/_fonts.scss";

#login-regster-btn {
    &:active {
        background-color: #78aa37;
        color: #fff;
    }

    &:first-child {
        margin-right: 15px;
        background-color: #8dc742;
        color: #fff;
    }

    &:hover {
        color: #fff;
        background-color: #8dc742;
    }
}

svg {
    margin: 0 4px;
}

.login-dis {
    #login-regster-btn {
        border: 1px solid #06c152;
        line-height: 25px;
        width: 60px;
        text-align: center;
    }

    width: 120px;
    display: flex;
    justify-content: space-between;
}

body {
    $width: 1226px;
    $width-contain: 1400px;
    overflow-x: hidden;

    font: 14px/1.5 Helvetica Neue, Helvetica, Arial, Microsoft Yahei, Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei,
        sans-serif;
    color: #333;

    /* 高度塌陷修复 */
    .clearfix::before,
    .clearfix::after {
        content: "";
        display: table;
        clear: both;
    }

    i {
        padding: 0 4px;
    }

    a {
        color: #999;
        text-decoration: none;

        &:hover {
            color: rgb(131, 131, 131);
        }
    }

    .header-top {
        svg {
            color: #06c152;
        }
    }

    /*---------------- head部分---------------- */
    .contain {
        /* 固定容器的宽度 */
        width: 1226px;
        /* 设置容器居中 */
        margin: 0 auto;
        box-sizing: border-box; //IE盒模型
    }

    .header-nav {
        border-bottom: 1px solid rgb(220, 220, 220);
        background-color: #fff;
    }

    .head {
        background-color: #f5f5f5;
    }

    .header-box {
        color: #f3f3f3;

        .header-top {
            height: 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            font-size: 14px;
            color: #f3f3f3;

            .header-left {
                svg {
                    color: #999;
                }

                color: #999;
                width: 450px;
                height: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .header-right {
                color: #999;

                li:nth-child(9) {
                    position: relative;

                    .show_z {
                        display: none;
                        position: absolute;
                        top: 19px;
                        right: -140px;
                        width: 500px;
                        z-index: 99999;

                        tbody {
                            display: flex;
                            justify-content: flex-start;
                            flex-direction: column;
                            font-size: 12px;

                            th {
                                padding-left: 5px;
                                width: 75px;
                                vertical-align: top;
                                font-weight: bold;
                                color: $words-color;
                            }

                            tr {
                                height: 30px;
                            }

                            padding: 16px;
                            top: 40px;
                            width: 470px;
                            border: 1px solid #ddd;
                            background: $green-color;
                            z-index: 999;
                            height: 180px;
                            right: -53px;
                            box-shadow: 0px 0px 6px 0px rgb(0 0 0 / 20%);
                            line-height: 24px;
                        }
                    }
                }

                li:nth-child(7) {
                    position: relative;

                    a {
                        padding: 5px 0;
                    }

                    .user-sever {
                        display: none;
                        position: absolute;
                        top: 19px;
                        background-color: $green-color;
                        padding: 8px 6px;
                        width: 155px;
                        right: -43px;
                        box-shadow: 0px 0px 6px 0px rgb(0 0 0 / 20%);

                        ul {
                            li {
                                i {
                                    margin-right: 6px;
                                }

                                height: 20px;

                                &:last-child {
                                    display: flex;
                                    justify-content: space-between;
                                    align-items: center;
                                }

                                a {
                                    cursor: pointer;
                                }

                                &:last-child {
                                    padding: 5px;
                                    margin-top: 10px;
                                    border-top: 1px solid $grey-color;
                                }
                            }
                        }
                    }
                }

                a {
                    &:not(.loc-an-box):hover {
                        color: rgb(117, 117, 117);
                    }
                }

                .loc-an-box {
                    height: 64px;
                    line-height: 64px;
                    cursor: pointer;
                }

                .loc-an-box {
                    svg {
                        color: #e6560e;
                    }

                    position: relative;
                    top: 0;
                    left: 0;
                    width: 100px;
                    height: 22px;
                    overflow: hidden;
                    display: block;
                    color: #e6560e;
                }

                .loc-mc-box {
                    .fa {
                        color: #e6560e;
                    }

                    width: 100px;
                    height: 160px;
                    overflow: hidden;
                    position: relative;
                    animation: locmoveclipslider 6s infinite ease-out;
                    animation-delay: 1s;

                    .loc-mc-box__text {
                        &:nth-child(1) {
                            position: absolute;
                            top: -6px;
                            left: 5px;
                            width: 100%;
                            line-height: 36px;
                            text-align: center;
                        }

                        &:nth-child(2) {
                            position: absolute;
                            top: 50px;
                            left: 5px;
                            width: 100%;
                            line-height: 36px;
                            text-align: center;
                        }

                        &:nth-child(3) {
                            position: absolute;
                            top: 103px;
                            left: 5px;
                            width: 100%;
                            line-height: 36px;
                            text-align: center;
                        }
                    }
                }

                @keyframes locmoveclipslider {
                    0% {
                        transform: translateY(0);
                    }

                    5% {
                        transform: translateY(-57px);
                    }

                    50% {
                        transform: translateY(-57px);
                    }

                    55% {
                        transform: translateY(-110px);
                    }

                    to {
                        transform: translateY(-110px);
                    }
                }
                height: 100%;
                width: 560px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        }

        .header-body {
            height: 125px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .logo {
                height: 95px;
            }

            .header-body-right {
                &:last-child {
                    display: flex;
                    align-items: center;
                }

                span {
                    color: #06c152;
                }

                width: 270px;
                display: flex;
                justify-content: space-between;

                a {
                    &:hover {
                        color: $bule-color;
                    }

                    color: #06c152;
                }
            }

            .search {
                ul {
                    span {
                        color: #999;
                    }

                    font-size: 12px;
                    position: absolute;
                    top: 55px;

                    span {
                        a {
                            margin: 0 6px;
                        }
                    }
                }

                z-index: 9999;
                position: relative;

                .search {
                    box-sizing: border-box;
                    width: 540px;
                    float: left;
                    padding: 0 10px;
                    height: 44px;
                    font-size: 16px;
                    border: 5px solid #8dc742;
                    outline: none;
                    color: rgb(195, 195, 195);
                    border-right-color: rgb(134, 191, 50);
                    border: 3px solid #8dc742;
                }

                .search-btn {
                    cursor: pointer;
                    height: 44px;
                    width: 80px;
                    padding: 0;
                    border: none;
                    background-color: rgb(134, 191, 50);
                    color: #f3f3f3;
                    font-size: 16px;
                    border: 1px solid rgb(224, 224, 224);
                    border-left: none;

                    &:hover {
                        background-color: #78aa37;
                    }
                }

                .camera {
                    color: rgb(200, 200, 200);
                    position: absolute;
                    top: 14px;
                    right: 55px;
                }
            }
        }
    }
}
</style>
