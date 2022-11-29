<template>
    <!-- 商品分类导航 -->
    <div class="type-nav">
        <div class="container">
            <div @mouseleave="leaveShow" @mouseenter="enterShow">
                <div class="mask"></div>
                <transition name="sort">
                    <div class="sort" v-show="show">
                        <div class="all-sort-list2" @click="goSearch">
                            <div class="item" v-for="(c1, index) in categoryList.slice(0, 16)" :key="c1.categoryId">
                                <h3>
                                    <a>{{ c1.categoryName }}</a>
                                </h3>
                                <div class="item-list clearfix">
                                    <div class="subitem" v-for="(c2, index) in c1.categoryChild" :key="c2.categoryId">
                                        <dl class="fore">
                                            <dt>
                                                <a
                                                    :data-categoryName="c2.categoryName"
                                                    :data-category2Id="c2.categoryId"
                                                    >{{ c2.categoryName }}</a
                                                >
                                            </dt>
                                            <dd>
                                                <em v-for="(c3, index) in c2.categoryChild" :key="c3.categoryId">
                                                    <a
                                                        :data-categoryName="c3.categoryName"
                                                        :data-category3Id="c3.categoryId"
                                                        >{{ c3.categoryName }}</a
                                                    >
                                                </em>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
        <Nav></Nav>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "TypeNav",
    data() {
        return {
            show: true,
        };
    },
    mounted() {
        //如果不是home组件，将typenav组件隐藏
        if (this.$route.path != "/home") {
            this.show = false;
        }
    },
    computed: {
        ...mapState({
            categoryList: (state) => state.home.categoryList,
        }),
    },
    methods: {
        enterShow() {
            this.show = true;
        },
        leaveShow() {
            //判断如果是Search路由组件的时候才会执行
            if (this.$route.path != "/home") {
                this.show = false;
            }
        },
        goSearch(event) {
            //event.target:获取到的是出发事件的元素(div、h3、a、em、dt、dl)
            let node = event.target;
            //给a标签添加自定义属性data-categoryName,全部的字标签当中只有a标签带有自定义属性，别的标签名字----dataset纯属扯淡
            let { categoryname, category1id, category2id, category3id } = node.dataset;
            //第二个问题解决了：点击的到底是不是a标签（只要这个标签身上带有categoryname）一定是a标签
            //当前这个if语句：一定是a标签才会进入
            if (categoryname) {
                //准备路由跳转的参数对象
                let loction = { name: "search" };
                let query = { categoryName: categoryname };
                //一定是a标签：一级目录
                if (category1id) {
                    query.category1Id = category1id;
                    //一定是a标签：二级目录
                } else if (category2id) {
                    query.category2Id = category2id;
                    //一定是a标签：三级目录
                } else {
                    query.category3Id = category3id;
                }
                //判断：如果路由跳转的时候，带有params参数，捎带脚传递过去
                if (this.$route.params) {
                    loction.params = this.$route.params;
                    //动态给location配置对象添加query属性
                    loction.query = query;
                    //路由跳转
                    this.$router.push(loction);
                }
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.mask {
    width: 200px;
    height: 45px;
    position: absolute;
}

.type-nav {
    .container {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        position: relative;

        .sort {
            position: absolute;
            left: 0;
            top: 47px;
            width: 180px;
            height: 478px;
            position: absolute;
            background: #fafafa;
            z-index: 999;

            .all-sort-list2 {
                .item {
                    h3 {
                        &:hover {
                            background: #ccc;
                        }

                        line-height: 30px;
                        font-size: 14px;
                        font-weight: 400;
                        overflow: hidden;
                        padding: 0 20px;
                        margin: 0;

                        a {
                            cursor: pointer;

                            &:hover {
                                color: #000;
                            }

                            color: #333;
                        }
                    }

                    .item-list {
                        display: none;
                        position: absolute;
                        width: 734px;
                        min-height: 478px;
                        background: #f7f7f7;
                        left: 172px;
                        border: 1px solid #ddd;
                        top: 0;
                        z-index: 99999 !important;

                        .subitem {
                            float: left;
                            width: 650px;
                            padding: 0 4px 0 8px;

                            dl {
                                border-top: 1px solid #eee;
                                padding: 6px 0;
                                overflow: hidden;
                                zoom: 1;

                                &.fore {
                                    border-top: 0;
                                }

                                dt {
                                    float: left;
                                    text-align: center;
                                    width: 65px;
                                    font-size: 14px;
                                    line-height: 22px;
                                    text-align: right;
                                    padding: 3px 6px 0 0;
                                    font-weight: 700;

                                    a {
                                        cursor: pointer;
                                        color: rgb(97, 97, 97);
                                    }
                                }

                                dd {
                                    float: left;
                                    width: 565px;
                                    padding: 3px 0 0;
                                    overflow: hidden;

                                    em {
                                        a {
                                            cursor: pointer;
                                            font-size: 12px;
                                        }

                                        float: left;
                                        height: 16px;
                                        line-height: 14px;
                                        padding: 0 8px;
                                        margin-top: 5px;
                                        border-left: 1px solid #ccc;
                                    }
                                }
                            }
                        }
                    }

                    &:hover {
                        .item-list {
                            display: block;
                        }
                    }
                }
            }
        }

        //过渡动画样式
        //开始阶段
        .sort-enter {
            overflow: hidden;
            height: 0;
        }

        //结束阶段（进入）
        .sort-enter-to {
            overflow: hidden;
            height: 461px;
        }

        //定义动画时间速率
        .sort-enter-active {
            overflow: hidden;
            transition: all 0.5s linear;
        }
    }
}
</style>
