<template>
    <div class="left">
        <div class="news">
            <div class="photo">
                <img src="../images/新闻.jpeg" alt="" />
            </div>
            <div class="na-detail">
                <div class="news-title">
                    <h3>用新闻的力量 最大的努力，帮助更多农民脱贫致富奔小康”</h3>
                </div>
                <div class="new-tag">
                    <div class="keywords">
                        <a herf="font">北京</a>
                        <a herf="font">朝阳区</a>
                        <a herf="font">背景</a>
                    </div>
                    <span class="time">5天前</span>
                </div>
            </div>
        </div>
        <div class="news">
            <div class="photo">
                <img src="../images/news2.jpeg" alt="" />
            </div>
            <div class="na-detail">
                <div class="news-title">
                    <h3>记者上网销售农产品，新闻志愿行动助农脱贫”</h3>
                </div>
                <div class="new-tag">
                    <div class="keywords">
                        <a herf="font">温州</a>
                        <a herf="font">文成</a>
                        <a herf="font">泰顺</a>
                    </div>
                    <span class="time">4天前</span>
                </div>
            </div>
        </div>
        <div class="news">
            <div class="photo">
                <img src="../images/news3.png" alt="" />
            </div>
            <div class="na-detail">
                <div class="news-title">
                    <h3>人人可做“咖啡西施”助农兴农 90后大学生阿萨返乡种咖啡带全村致富</h3>
                </div>
                <div class="new-tag">
                    <div class="keywords">
                        <a herf="font">云南</a>
                        <a herf="font">保山潞</a>
                        <a herf="font">江坝</a>
                    </div>
                    <span class="time">3天前</span>
                </div>
            </div>
        </div>
        <div class="news">
            <div class="photo">
                <img src="../images/news4.jpeg" alt="" />
            </div>
            <div class="na-detail">
                <div class="news-title">
                    <h3>滴滴旗下橙心优选发布橙心助农计划建立，助力乡村振兴和农民增收</h3>
                </div>
                <div class="new-tag">
                    <div class="keywords">
                        <a herf="font">北京</a>
                        <a herf="font">上海</a>
                        <a herf="font">广州</a>
                    </div>
                    <span class="time">5天前</span>
                </div>
            </div>
        </div>
        <div class="news">
            <div class="photo">
                <img src="../images/news5.jpeg" alt="" />
            </div>
            <div class="na-detail">
                <div class="news-title">
                    <h3>湖南红星村种植大户曹红旗一边驾驶插秧机，一边与农民朋友聊起现代农业科技福利</h3>
                </div>
                <div class="new-tag">
                    <div class="keywords">
                        <a herf="font">湖南</a>
                        <a herf="font">黄冈</a>
                        <a herf="font">武冈</a>
                    </div>
                    <span class="time">7天前</span>
                </div>
            </div>
        </div>
        <div class="news">
            <div class="photo">
                <img src="../images/news6.jpeg" alt="" />
            </div>
            <div class="na-detail">
                <div class="news-title">
                    <h3>北海市统计局开展春季农业生产情况调研</h3>
                </div>
                <div class="new-tag">
                    <div class="keywords">
                        <a herf="font">北海</a>
                        <a herf="font">北海</a>
                        <a herf="font">北海</a>
                    </div>
                    <span class="time">8天前</span>
                </div>
            </div>
        </div>
        <div class="news">
            <div class="photo">
                <img src="../images/news7.jpeg" alt="" />
            </div>
            <div class="na-detail">
                <div class="news-title">
                    <h3>果实饱满、色泽鲜艳、营养成分极高的贵州刺梨，从久藏深山到享誉全国</h3>
                </div>
                <div class="new-tag">
                    <div class="keywords">
                        <a herf="font">贵州</a>
                        <a herf="font">云南</a>
                        <a herf="font">四川</a>
                    </div>
                    <span class="time">5天前</span>
                </div>
            </div>
        </div>      
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.left {
    width: 650px;
}
.news {
    border-bottom: 1px solid #eee;
    padding: 15px 0;
    display: flex;
    width: 650px;
    height: 90px;
}
.news-title h3 {
    width: 550px;
    height: 40px;
    padding-bottom: 7px;
    font: normal 19px/27px "Microsoft Yahei";
    min-height: 35px;
    margin-top: 4px;
}

.new-tag {
    margin-top: 18px;
    font-size: 10px;
    color: #888;
    width: 230px;
    display: flex;

    .keywords {
        border-right: 1.5px solid #bbb;

        a {
            margin: 5px;
        }
    }

    span {
        color: #888;
        margin-right: 10px;
        text-decoration: none;
        margin-left: 4px;
    }

    .font {
        word-spacing: 6px;
    }
}
// .news-scond{
//     display: flex;
//     border-bottom: 1px solid #eee;
//     padding: 15px 0;
// }
.photo img {
    width: 140px;
    height: 88px;
}
.na-detail {
    width: 445px;
    margin-left: 15px;
    float: left;
}
</style>
