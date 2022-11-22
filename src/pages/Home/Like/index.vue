/* eslint-disable */
<template>
    <!-- 猜你喜欢 -->
    <div class="like">
        <div class="py-container">
            <div class="title">
                <h3 class="fl">猜你喜欢</h3>
                <a href="javascript:;" class="fr tip changeBnt">换一换</a>
            </div>
            <div class="bd">
                <ul class="favourate">
                    <li>
                        <img src="./images/哈密瓜.jpg" alt="" />
                        <div class="like-text">
                            <p>【原产地】 新疆哈密瓜西州蜜25号包邮</p>
                        </div>
                        <div class="price-label">
                            <span>到手价</span>
                            <h3>¥69.00</h3>
                        </div>
                    </li>
                    <li>
                        <img src="./images/干杏.jpg" alt="" />
                        <div class="like-text">
                            <p>【原产地】新疆阿克苏四团树上干杏干杏</p>
                        </div>
                        <div class="price-label">
                            <span>到手价</span>
                            <h3>¥69.00</h3>
                        </div>
                    </li>
                    <li>
                        <img src="./images/纸皮核桃.jpg" alt="" />
                        <div class="like-text">
                            <p>【原产地】新疆阿克苏185纸皮核桃干杏</p>
                        </div>
                        <div class="price-label">
                            <span>到手价</span>
                            <h3>¥69.00</h3>
                        </div>
                    </li>
                    <li>
                        <img src="./images/无核葡萄.jpg" alt="" />
                        <div class="like-text">
                            <p>【原产地】新疆吐鲁番无核葡萄实惠家庭装</p>
                        </div>
                        <div class="price-label">
                            <span>到手价</span>
                            <h3>¥69.00</h3>
                        </div>
                    </li>
                    <li>
                        <img src="./images/东北新鲜大白菜.jpg" alt="" />
                        <div class="like-text">
                            <p>阳光美包新款单肩包女包时尚子母包四件套女</p>
                        </div>
                        <div class="price-label">
                            <span>到手价</span>
                            <h3>¥69.00</h3>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.like {
    margin-top: 15px;

    .py-container {
        width: 1226px;
        margin: 0 auto;
        background: #fff;
        .title {
            overflow: hidden;
            .fl {
                font-family: PingFangSC-Medium;
                font-weight: 500;
                font-size: 18px;
                color: #333;
                line-height: 22px;
                float: left;
                margin-left: 20px;
                line-height: 35px;
            }

            .fr {
                float: right;
                background-image: url(./images/icons.png);
                width: 66px;
                height: 25px;
                background-position: 182px -104px;
                line-height: 30px;
                font-size: 12px;
                font-weight: 400;
                color: #666;
                text-decoration: none;
                margin-right: 20px;
                line-height: 35px;
            }
        }

        .bd {
            .favourate {
                background: #fff;
                border-top: 1px solid rgb(134, 191, 50);
                overflow: hidden;
                padding: 30px 10px;
                box-sizing: border-box;
                display: flex;
                justify-content: space-between;

                li {
                    height: 260px;
                    padding: 15px 0 0 0;
                    margin: 0px -1px;
                    overflow: hidden;
                    background: #fff;
                    position: relative;
                    width: 16.667%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    cursor: pointer;
                    &:hover{
                        box-shadow: 0 0 10px rgb(0 0 0 / 30%);
                    }

                    img {
                        width: 142px;
                        height: 142px;
                        transition: all 400ms;

                        &:hover {
                            opacity: 0.8;
                            transform: scale(1.1);
                        }
                    }
                    .price-label {
                        float: left;
                        display: flex;
                        align-items: stretch;
                        justify-content: center;
                        h3 {
                            color: #df3033;
                            font-size: 20px;
                            line-height: 30px;
                            margin: 9px 0;
                            font-weight: 700;
                        }
                        span {
                            text-align: center;
                            color: #666;
                            font-size: 12px;
                            font-weight: 400;
                            line-height: 48px;
                            margin-right: 8px;
                        }
                    }

                    .like-text {
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        width: 142px;
                        margin: 10px 0;
                        p {
                            margin: 8px 0;
                        }
                    }
                }
            }
        }
    }
}
</style>
