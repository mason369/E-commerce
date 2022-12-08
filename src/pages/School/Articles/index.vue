<template>
    <div>
      <div class="content">
        <div class="carcont">
            <div class="hear">
            <span>最新文章</span>
            <h3>看文章长知识</h3>
        </div>
        <div class="frame">
                <div class="text">
                    <div class="car">

                        <img src="../image/樱桃.png" alt="">
                        <span class="sis">十二月份樱桃管理要点</span>
                    <a href="" class="six">脱贫地区 --------------------------934人阅读</a>
                   
                    </div>
                    

                </div>
                <div class="text">
                    <div class="car">

                        <img src="../image/草莓.jpg" alt="">
                        <span class="sis">十二月份草莓管理要点</span>

                    <a href="" class="six">脱贫地区--------------------------113人阅读</a>
                    </div>
                </div>
                <div class="text">
                    <div class="car">

                        <img src="../image/月见草.jpg" alt="">
                        <span class="sis">十二月份月见草管理要点</span>

                    <a href="" class="six">脱贫地区--------------------------753人阅读</a>
                    </div>
                </div>
                
            </div>
            <div class="frame">
                <div class="text">
                    <div class="car">
                        <img src="../image/猕猴桃.jpg" alt="">
                        <span class="sis">十二月份猕猴桃管理要点</span>
                    <a href="" class="six">脱贫地区--------------------------139人阅读</a>
                    
                    </div>
                    

                </div>
                <div class="text">
                    <div class="car">
                        <img src="../image/西蓝花.jpg" alt="">
                        <span class="sis">十二月份西蓝花管理要点</span>
                    <a href="" class="six">脱贫地区--------------------------582人阅读</a>
                    </div>
                </div>
                <div class="text">
                    <div class="car">
                        <img src="../image/黑番茄.png" alt="">
                        <span class="sis">十二月份黑番茄管理要点</span>
                    <a href="" class="six">脱贫地区--------------------------1114人阅读</a>
                    </div>
                </div>
                
            </div>
        </div>   
    </div>
    </div>
  </template>
  
  <script>

    export default {
   
    }
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
          height: 270px;
           padding: 10px;
           background-color: rgb(234, 234, 234);
           .car{
               display: flex;
               flex-direction: column;

               img{
                   width: 350px;
                   height: 180px;
                  //  border-radius: 50%;
               
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
               padding: 30px 0;
               display: flex;
               flex-direction: column;
               
           }
          //  .six{
          //      display: block;
          //      text-align: center;
          //      width: 120px;
          //      border: 1px green solid;
          //      color: green;
          //      border-radius: 25px;
          //      padding: 4px;
          //      margin: 0 auto;
          //  }
       }:hover{
       background-color: white;
       .six{
           background: green;
           flex-direction: column;
         

       }
   }
   }

   }
  }
 </style>
 