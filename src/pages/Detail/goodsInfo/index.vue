<template>
    <div class="tab-content">
        <div id="one" class="tab-pane active">
            <ul class="goods-intro">
                <li>分辨率：1920*1080(FHD)</li>
                <li>后置摄像头：1200万像素</li>
                <li>前置摄像头：500万像素</li>
                <li>核 数：其他</li>
                <li>频 率：以官网信息为准</li>
                <li>品牌： Apple</li>
                <li>商品名称：APPLEiPhone 6s Plus</li>
                <li>商品编号：1861098</li>
                <li>商品毛重：0.51kg</li>
                <li>商品产地：中国大陆</li>
                <li>热点：指纹识别，Apple Pay，金属机身，拍照神器</li>
                <li>系统：苹果（IOS）</li>
                <li>像素：1000-1600万</li>
                <li>机身内存：64GB</li>
            </ul>
            <div class="intro-detail">
                <img src="./images/intro01.png" />
                <img src="./images/intro02.png" />
                <img src="./images/intro03.png" />
            </div>
        </div>
        <div id="two" class="tab-pane">
            <p>规格与包装</p>
        </div>
        <div id="three" class="tab-pane">
            <p>售后保障</p>
        </div>
        <div id="four" class="tab-pane">
            <p>商品评价</p>
        </div>
        <div id="five" class="tab-pane">
            <p>手机社区</p>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.tab-content {
    .tab-pane {
        display: none;

        &.active {
            display: block;
        }

        &:nth-child(1) {
            .goods-intro {
                padding-left: 10px;

                li {
                    margin: 10px 0;
                }
            }

            .intro-detail {
                img {
                    width: 100%;
                }
            }
        }
    }
}
</style>
