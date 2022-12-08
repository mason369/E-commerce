<template>
    <div class="content">
        <div class="carcont">
            <div class="hear">
            <span>农技专家</span>
            <h3>按分类找专家</h3>
        </div>
            <div class="frame">
                <div class="text">
                    <div class="car">
                        <img src="../image/thank.gif" alt="">
                        <div class="texr">
                            <span>绫某某·高级兽医师</span>
                            <span>|</span>
                            <span><a href="">详情</a></span>
                            <h3>四川省成都市龙泉驿区动物疫病预防控制中心</h3>
                        </div>
                    </div>
                    <div class="tex">
                        <h3><span>14444</span>咨询量</h3>
                        <h3><span>14444</span>回复量</h3>
                        <h3><span>100%</span>回复率</h3>
                    </div>
                    <span class="sis">擅长：猪，牛，羊，鸡，鸭，鹅等疾病防控技术</span>
                    <a href="" class="six">限时免费提问</a>
                </div>
                <div class="text">
                    <div class="car">
                        <img src="../image/thank.gif" alt="">
                        <div class="texr">
                            <span>陈某某·高级兽医师</span>
                            <span>|</span>
                            <span><a href="">详情</a></span>
                            <h3>四川省成都市龙泉驿区动物疫病预防控制中心</h3>
                        </div>
                    </div>
                    <div class="tex">
                        <h3><span>14444</span>咨询量</h3>
                        <h3><span>14444</span>回复量</h3>
                        <h3><span>100%</span>回复率</h3>
                    </div>
                    <span class="sis">擅长：猪，牛，羊，鸡，鸭，鹅等疾病防控技术</span>
                    <a href="" class="six">限时免费提问</a>
                </div>
                <div class="text">
                    <div class="car">
                        <img src="../image/thank.gif" alt="">
                        <div class="texr">
                            <span>陈某某·高级兽医师</span>
                            <span>|</span>
                            <span><a href="">详情</a></span>
                            <h3>四川省成都市龙泉驿区动物疫病预防控制中心</h3>
                        </div>
                    </div>
                    <div class="tex">
                        <h3><span>14444</span>咨询量</h3>
                        <h3><span>14444</span>回复量</h3>
                        <h3><span>100%</span>回复率</h3>
                    </div>
                    <span class="sis">擅长：猪，牛，羊，鸡，鸭，鹅等疾病防控技术</span>
                    <a href="" class="six">限时免费提问</a>
                </div>
            </div>
        </div>   
    </div>
</template>
  
<script>
export default {}
</script>
  <style lang="scss" scoped>
   .content{
    background-color: white;
    .carcont{
        padding: 30px;
        .hear{
        display: flex;
        span{
            font-size: 24px;
        }
        h3{
            font-size: 13px;
            color: rgb(210, 210, 210);
            margin-top: 11px;
            padding-right: 5px;
        }
    }
    .frame{     
        margin-top: 40px;
        display: flex;
        justify-content: space-evenly;
        
        .text{
            width: 340px;
            padding: 10px;
            background-color: rgb(234, 234, 234);
            .car{
                display: flex;
                img{
                    width: 70px;
                    height: 70px;
                    border-radius: 50%;
                }
                .texr{
                    margin-left: 15px;
                    span{
                        padding: 0 2px;
                    }
                    a{
                        color: green;
                    }
                    h3{
                        width: 150px;
                        padding-top: 18px;
                        font-size: 14px;
                        color: rgb(179, 179, 179);
                    }
                }
            }
            .tex{
                display: flex;
                justify-content: space-around;
                padding-top: 10px;
                span{
                    color: orange;
                    font-size: 21px;
                }
            }
            .sis{
                display: block;
                color: rgb(106, 106, 106);
                padding: 15px 0;
            }
            .six{
                display: block;
                text-align: center;
                width: 120px;
                border: 1px green solid;
                color: green;
                border-radius: 25px;
                padding: 4px;
                margin: 0 auto;
            }
        }:hover{
        background-color: white;
        .six{
            background: green;
            color: aliceblue;
        }
    }
    }

    }
   }
  </style>
  