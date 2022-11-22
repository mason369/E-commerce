<template>
    <div>
        <div class="floor contain">
            <div class="column-list">
                <div class="column-title">
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
                </div>
                <div class="list-box">
                    <div class="list-five">
                        <div class="list-pic">
                            <ul class="list-box">
                                <img src="./images/消费1.png" />
                            </ul>
                            <ul class="list-box">
                                <img src="./images/消费2.png" />
                            </ul>
                            <ul class="list-box">
                                <img src="./images/消费3.png" />
                            </ul>
                            <ul class="list-box">
                                <img src="./images/消费4.png" />
                            </ul>
                        </div>
                    </div>
                </div>
                <ul class="list-plc">
                    <img src="./images/消费5.png" />
                </ul>
            </div>
            <div class="shouji w navigation">
                <div class="box-hd">
                    <h3>地方特产</h3>
                    <div class="tab-list">
                        <ul>
                            <li><a href="#" class="style-red">热门</a>|</li>
                            <li><a href="#">脐橙</a>|</li>
                            <li><a href="#">土豆</a>|</li>
                            <li><a href="#">蜜饯</a>|</li>
                            <li><a href="#">香蕉</a>|</li>
                            <li><a href="#">雪莲果</a>|</li>
                            <li><a href="#">哈密瓜</a>|</li>
                            <li><a href="#">新奇特</a>|</li>
                            <li><a href="#">高端蔬菜</a></li>
                        </ul>
                    </div>
                </div>
                <div class="box-bd">
                    <ul class="tab-con">
                        <li class="w209">
                            <ul class="tab-con-list">
                                <li>
                                    <a href="#">节能补贴</a>
                                </li>
                                <li>
                                    <a href="#">4K电视</a>
                                </li>
                                <li>
                                    <a href="#">空气净化器</a>
                                </li>
                                <li>
                                    <a href="#">IH电饭煲</a>
                                </li>
                                <li>
                                    <a href="#">滚筒洗衣机</a>
                                </li>
                                <li>
                                    <a href="#">电热水器</a>
                                </li>
                            </ul>
                            <div class="img1-activity-box">
                                <span>福建蜜薯</span>
                                <p>抽奖送好礼</p>
                                <img src="./images/福建蜜薯.jpg" alt="" />
                            </div>
                        </li>
                        <li class="w329">
                            <el-carousel :interval="2000" trigger="click" height="340px">
                                <el-carousel-item v-for="item in floorBannerList" :key="item.id">
                                    <img :src="item.imgUrl" />
                                    <span>{{ item.name }}</span>
                                    <p>{{ item.activity }}</p>
                                </el-carousel-item>
                            </el-carousel>
                        </li>
                        <li class="w219">
                            <div class="tab-con-item">
                                <a href="#">
                                    <span>满299减299！</span>
                                    <p>美食节一分钱抢购！</p>
                                    <img src="./images/湖南有机黄瓜.jpg" alt="" />
                                </a>
                            </div>
                            <div class="tab-con-item">
                                <a href="#">
                                    <span>满299减299！</span>
                                    <p>美食节一分钱抢购！</p>
                                    <img src="./images/新疆哈密瓜.jpg" alt="" />
                                </a>
                            </div>
                        </li>
                        <li class="w220">
                            <div class="tab-con-item">
                                <a href="#">
                                    <span>满299减299！</span>
                                    <p>云南雪莲果</p>
                                    <img class="yunnanxuelianguo" src="./images/云南雪莲果.jpg" alt="" />
                                </a>
                            </div>
                        </li>
                        <li class="w220">
                            <div class="tab-con-item">
                                <a href="#">
                                    <span>满299减299！</span>
                                    <p>云南雪莲果</p>
                                    <img src="./images/四川韭菜.jpg" alt="" />
                                </a>
                            </div>
                            <div class="tab-con-item">
                                <a href="#">
                                    <span>满299减299！</span>
                                    <p>云南雪莲果</p>
                                    <img src="./images/新鲜脐橙.jpg" alt="" />
                                </a>
                            </div>
                        </li>
                    </ul>
                    <!-- <ul class="tab-con">
							<li>1</li>
							<li>2</li>
							<li>3</li>
							<li>4</li>
							<li>5</li>
						</ul> -->
                </div>
            </div>
            <div class="diannao w navigation">
                <div class="box-hd">
                    <h3>新鲜海货</h3>
                    <div class="tab-list">
                        <ul>
                            <li><a href="#" class="style-red">热门</a>|</li>
                            <li><a href="#">脐橙</a>|</li>
                            <li><a href="#">土豆</a>|</li>
                            <li><a href="#">蜜饯</a>|</li>
                            <li><a href="#">香蕉</a>|</li>
                            <li><a href="#">雪莲果</a>|</li>
                            <li><a href="#">哈密瓜</a>|</li>
                            <li><a href="#">新奇特</a>|</li>
                            <li><a href="#">高端蔬菜</a></li>
                        </ul>
                    </div>
                </div>
                <div class="box-bd">
                    <ul class="tab-con">
                        <li class="w209">
                            <ul class="tab-con-list">
                                <li>
                                    <a href="#">节能补贴</a>
                                </li>
                                <li>
                                    <a href="#">4K电视</a>
                                </li>
                                <li>
                                    <a href="#">空气净化器</a>
                                </li>
                                <li>
                                    <a href="#">IH电饭煲</a>
                                </li>
                                <li>
                                    <a href="#">滚筒洗衣机</a>
                                </li>
                                <li>
                                    <a href="#">电热水器</a>
                                </li>
                            </ul>
                            <div class="img1-activity-box">
                                <span>福建蜜薯</span>
                                <p>抽奖送好礼</p>
                                <img src="./images/福建蜜薯.jpg" alt="" />
                            </div>
                        </li>
                        <li class="w329">
                            <el-carousel trigger="click" height="340px">
                                <el-carousel-item v-for="item in floorBannerList" :key="item.id">
                                    <img :src="item.imgUrl" />
                                    <span>{{ item.name }}</span>
                                    <p>{{ item.activity }}</p>
                                </el-carousel-item>
                            </el-carousel>
                        </li>
                        <li class="w219">
                            <div class="tab-con-item">
                                <a href="#">
                                    <span>满299减299！</span>
                                    <p>美食节一分钱抢购！</p>
                                    <img src="./images/湖南有机黄瓜.jpg" alt="" />
                                </a>
                            </div>
                            <div class="tab-con-item">
                                <a href="#">
                                    <span>满299减299！</span>
                                    <p>美食节一分钱抢购！</p>
                                    <img src="./images/新疆哈密瓜.jpg" alt="" />
                                </a>
                            </div>
                        </li>
                        <li class="w220">
                            <div class="tab-con-item">
                                <a href="#">
                                    <span>满299减299！</span>
                                    <p>云南雪莲果</p>
                                    <img class="yunnanxuelianguo" src="./images/云南雪莲果.jpg" alt="" />
                                </a>
                            </div>
                        </li>
                        <li class="w220">
                            <div class="tab-con-item">
                                <a href="#">
                                    <span>满299减299！</span>
                                    <p>云南雪莲果</p>
                                    <img src="./images/四川韭菜.jpg" alt="" />
                                </a>
                            </div>
                            <div class="tab-con-item">
                                <a href="#">
                                    <span>满299减299！</span>
                                    <p>云南雪莲果</p>
                                    <img src="./images/新鲜脐橙.jpg" alt="" />
                                </a>
                            </div>
                        </li>
                    </ul>
                    <!-- <ul class="tab-con">
							<li>1</li>
							<li>2</li>
							<li>3</li>
							<li>4</li>
							<li>5</li>
						</ul> -->
                </div>
            </div>
            <div class="jiaju w navigation">
                <div class="box-hd">
                    <h3>新鲜蔬菜</h3>
                    <div class="tab-list">
                        <ul>
                            <li><a href="#" class="style-red">热门</a>|</li>
                            <li><a href="#">脐橙</a>|</li>
                            <li><a href="#">土豆</a>|</li>
                            <li><a href="#">蜜饯</a>|</li>
                            <li><a href="#">香蕉</a>|</li>
                            <li><a href="#">雪莲果</a>|</li>
                            <li><a href="#">哈密瓜</a>|</li>
                            <li><a href="#">新奇特</a>|</li>
                            <li><a href="#">高端蔬菜</a></li>
                        </ul>
                    </div>
                </div>
                <div class="box-bd">
                    <ul class="tab-con">
                        <li class="w209">
                            <ul class="tab-con-list">
                                <li>
                                    <a href="#">节能补贴</a>
                                </li>
                                <li>
                                    <a href="#">4K电视</a>
                                </li>
                                <li>
                                    <a href="#">空气净化器</a>
                                </li>
                                <li>
                                    <a href="#">IH电饭煲</a>
                                </li>
                                <li>
                                    <a href="#">滚筒洗衣机</a>
                                </li>
                                <li>
                                    <a href="#">电热水器</a>
                                </li>
                            </ul>
                            <div class="img1-activity-box">
                                <span>福建蜜薯</span>
                                <p>抽奖送好礼</p>
                                <img src="./images/福建蜜薯.jpg" alt="" />
                            </div>
                        </li>
                        <li class="w329">
                            <el-carousel trigger="click" :interval="1500" height="340px">
                                <el-carousel-item v-for="item in floorBannerList" :key="item.id">
                                    <img :src="item.imgUrl" />
                                    <span>{{ item.name }}</span>
                                    <p>{{ item.activity }}</p>
                                </el-carousel-item>
                            </el-carousel>
                        </li>
                        <li class="w219">
                            <div class="tab-con-item">
                                <a href="#">
                                    <span>满299减299！</span>
                                    <p>美食节一分钱抢购！</p>
                                    <img src="./images/湖南有机黄瓜.jpg" alt="" />
                                </a>
                            </div>
                            <div class="tab-con-item">
                                <a href="#">
                                    <span>满299减299！</span>
                                    <p>美食节一分钱抢购！</p>
                                    <img src="./images/新疆哈密瓜.jpg" alt="" />
                                </a>
                            </div>
                        </li>
                        <li class="w220">
                            <div class="tab-con-item">
                                <a href="#">
                                    <span>满299减299！</span>
                                    <p>云南雪莲果</p>
                                    <img class="yunnanxuelianguo" src="./images/云南雪莲果.jpg" alt="" />
                                </a>
                            </div>
                        </li>
                        <li class="w220">
                            <div class="tab-con-item">
                                <a href="#">
                                    <span>满299减299！</span>
                                    <p>云南雪莲果</p>
                                    <img src="./images/四川韭菜.jpg" alt="" />
                                </a>
                            </div>
                            <div class="tab-con-item">
                                <a href="#">
                                    <span>满299减299！</span>
                                    <p>云南雪莲果</p>
                                    <img src="./images/新鲜脐橙.jpg" alt="" />
                                </a>
                            </div>
                        </li>
                    </ul>
                    <!-- <ul class="tab-con">
							<li>1</li>
							<li>2</li>
							<li>3</li>
							<li>4</li>
							<li>5</li>
						</ul> -->
                </div>
            </div>
            <How></How>
            <div class="zn-new-box">
                <div class="new-list-box">
                    <div class="new-list-title">
                        <span>资讯</span>
                        <span class="gd"><a>更多>></a></span>
                        <img src="./images/助农.jpeg" />
                    </div>
                    <div class="zn-newss">
                        <ul class="zn-news-lits">
                            <li>
                                <a href=""
                                    ><span>直播助农“金扁担” 担起致富小康梦</span>
                                    <span class="date">2022-11-10</span>
                                </a>
                            </li>
                            <li>
                                <a href=""
                                    ><span
                                        >湖南省隆回县大力开展“扶贫助耕”活动，抽调部门专家、科技干部成立“科技助农服务队”</span
                                    >
                                    <span class="date">2022-11-10</span>
                                </a>
                            </li>
                            <li>
                                <a href=""
                                    ><span>科技培训下沉田间地头，为农业发展插上“科技”翅膀，为乡村振兴提供科技支撑</span>
                                    <span class="date">2022-11-10</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="new-list-box">
                    <div class="new-list-title">
                        <span>资讯</span>
                        <span class="gd"><a>更多>></a></span>
                        <img src="./images/助农2.jpeg" />
                    </div>
                    <div class="zn-newss">
                        <ul class="zn-news-lits">
                            <li>
                                <a href=""
                                    ><span>授人以渔，以科技培训增强“造血能力</span>
                                    <span class="date">2022-10-15</span>
                                </a>
                            </li>
                            <li>
                                <a href=""
                                    ><span
                                        >新时代更要深入实施科技特派员制度，紧紧围绕创新驱动发展、乡村振兴和脱贫攻坚，把创新的动能扩散到田间地头</span
                                    >
                                    <span class="date">2022-10-25</span>
                                </a>
                            </li>
                            <li>
                                <a href=""
                                    ><span
                                        >近年来，江西省赣州市兴国县积极推进农业供给侧结构性改革，调整优化产业结构和布局，促进蔬菜产业提质增效，夯实乡村振兴基础。目前，该县已建成蔬菜基地70余个，种植面积达16.2万余亩，年产蔬菜约30.5万吨，使蔬菜产业成为富民产业。</span
                                    >
                                    <span class="date">2022-11-10</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="new-list-box">
                    <div class="new-list-title">
                        <span>资讯</span>
                        <span class="gd"><a>更多>></a></span>
                        <img src="./images/助农3.jpeg" />
                    </div>
                    <div class="zn-newss">
                        <ul class="zn-news-lits">
                            <li>
                                <a href=""
                                    ><span
                                        >在湖北省，1.75万名第一书记、1.26万支驻村工作队、4.04万名驻村干部投入乡村振兴战场，助农兴农办实事;</span
                                    >
                                    <span class="date">2022-10-22</span>
                                </a>
                            </li>
                            <li>
                                <a href=""
                                    ><span
                                        >党的十九届六中全会强调，全党必须永远保持同人民群众的血肉联系，践行以人民为中心的发展思想，不断实现好、维护好、发展好最广大人民根本利益，团结带领全国各族人民不断为美好生活而奋斗。</span
                                    >
                                    <span class="date">2022-10-20</span>
                                </a>
                            </li>
                            <li>
                                <a href=""
                                    ><span>【在希望的田野上】国家科技强力助农 秋粮生产有序推进</span>
                                    <span class="date">2022-10-10</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="new-list-box">
                    <div class="new-list-title gzh">
                        <span>了解我们</span>
                        <div class="weixin">
                            <img src="./images/weixin.png" />
                            <span>关注官方公众号：助农平台</span>
                        </div>
                        <div class="weixin-link">
                            <img src="./images/微信.jpg" />
                            <p>打开微信“扫一扫”</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import How from "@/pages/Home/How"
import { mapState } from "vuex";
export default {
    mounted() {
        //派发action:通过vuex发起ajax请求，将数据仓储在仓库当中
        this.$store.dispatch("getFloorBannerList");
    },
    computed: {
        ...mapState({
            floorBannerList: (state) => state.home.floorBannerList,
        }),
    },
    components:{
        How
    }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/_color.scss";

.column-title {
    .louceng-title {
        h3 {
            margin: 0 25px;
            color: #f8523c;
        }
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
//轮播图
.el-carousel__container {
    .el-carousel__item {
        img {
            width: 252px;
        }
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        span {
            margin: 10px;
            font-size: 24px;
            font-family: "myfont";
            color: #d1343e;
        }
        p {
            font-size: 12px;
            color: #d1343e;
        }
    }
}
.contain {
    width: 1226px;
    margin: 0 auto;
}
.box-hd {
    padding-right: 26.5px;
    background-color: #fff;
    h3 {
        padding-left: 18px;
    }
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1200px;
    border-bottom: 4px solid $green-1;
    border-right: none;
    border-left: none;
    border-top: none;
    margin-top: 25px;
}
.tab-list li a,
.tab-con li a {
    color: #5c5251;
}
.box-hd h3 {
    float: left;
    font-size: 18px;
    color: #c81623;
}

.tab-list {
    float: right;
    line-height: 30px;
}

.tab-list li {
    float: left;
}

.tab-list li a {
    margin: 0 15px;
}

.box-bd {
    height: 360px;
    background-color: #fff;
}

.w209 {
    width: 208px;
    background-color: #f9f9f9;
}

.w329 {
    border-right: 1px solid #ccc;
    width: 320px;
}

.w219 {
    width: 218px;
    border-right: 1px solid #ccc;
}

.w220 {
    padding-right: 12.5px;
    width: 219px;
    border-right: 1px solid #ccc;
    &:last-child {
        border-right: none;
    }
}

.tab-con li {
    float: left;
    height: 360px;
}

.tab-con-item {
    border-bottom: 1px solid #ccc;
}

.tab-con-list {
    overflow: hidden;
    padding-bottom: 15px;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
}

.tab-con-list li {
    width: 86px;
    height: 32px;
    line-height: 32px;
    border-bottom: 1px solid #ccc;
    margin-left: 10px;
    text-align: center;
}

.box-bd li {
    overflow: hidden;
}

.box-bd img {
    /*过渡写到本身上， 谁做动画，给谁加*/
    transition: all 0.2s;
}

/*我们鼠标经过图片 往右走 8px*/

.box-bd img:hover {
    margin-left: 8px;
}

/*电梯导航*/

.fixedtool {
    position: fixed;
    top: 100px;
    right: 0;
    margin-left: -676px;
    width: 66px;
    background-color: #fff;
    display: none;
}

.fixedtool li {
    height: 32px;
    line-height: 32px;
    text-align: center;
    font-size: 12px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
}

.fixedtool .current {
    background-color: rgb(134, 191, 50);
    color: #fff;
}
.floor {
    .shouji,
    .diannao,
    .jiaju {
        margin: 10px 0;
        .box-bd {
            .tab-con {
                .w209 {
                    border-right: 1px solid $grey-color;
                    .img1-activity-box {
                        padding: 20px 0;
                        background-color: #fff;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        span,
                        p {
                            color: #d1343e;
                        }
                        p {
                            font-size: 12px;
                        }
                        img {
                            height: 80%;
                            width: 90%;
                        }
                        span {
                            font-size: 24px;
                            font-family: "myfont";
                        }
                    }
                }

                .w219 {
                    .tab-con-item {
                        a {
                            height: 180px;
                            img {
                                width: 50%;
                                height: 50%;
                            }
                            background-color: #fff;
                            display: flex;
                            justify-content: center;
                            flex-direction: column;
                            align-items: center;
                            span {
                                color: #d1343e;
                                font-size: 19px;
                            }
                            p {
                                color: #d1343e;
                                font-size: 12px;
                            }
                        }
                    }
                }
                .w220 {
                    .tab-con-item {
                        padding: 2px 50px;
                        img {
                            width: 145px;
                        }
                        a {
                            .yunnanxuelianguo {
                                width: 240px;
                                position: relative;
                                top: 10px;
                            }
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            flex-direction: column;
                        }
                    }
                    background-color: #fff;
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    align-items: center;
                    span {
                        color: #d1343e;
                        font-size: 19px;
                    }
                    p {
                        color: #d1343e;
                        font-size: 12px;
                    }
                }
            }
        }
    }
}

.zn-new-box {
    display: flex;
    justify-content: space-between;
}
.new-list-box {
    height: 290px;
    width: 250px;
    background-color: #fff;
    padding: 0px 26px;
    line-height: 25px;
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.zn-news-lits span {
    font-size: 16px;
    color: #666;
    display: inline-block;
    width: 158px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.date {
    font-size: 16px;
    color: #666;
    display: inline-block;
    width: 158px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.zn-news-lits a {
    width: 290px;
    display: flex;
    float: right;
    float: left;
    span {
        right: 0;
        float: right;
    }
}
.new-list-title a {
    float: right;
    color: #c81623;
    font-size: 14px;
}
.new-list-title {
    height: 160px;
    font-size: 18px;
    font-weight: 600;
}
.new-list-title img :not(.weixin){
    padding-top: 10px;
}
.zn-news-lits {
    display: flex;
    flex-direction: column;
}
.weixin-link img {
    width: 150px;
    height: 150px;
}
.weixin img {
    width: 24px;
}
.weixin{
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.gzh {
    margin-top: -100px;
}
.column-title {
    text-align: center;
    font-weight: bolder;
    color: #bd676c;
    font-size: 35px;
}
.list-pic {
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    height: 300px;
    ul {
        margin: 0 15px 0 0;
    }
}
.list-plc img {
    margin: 0 auto;
    width: 1210px;
    margin-top: 10px;
}
.weixin-link {
    text-align: center;
}
</style>
