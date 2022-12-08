<template>
   <div class="content">
        <div class="carcont">
            <div class="hear">
            <span>专家问答</span>
            <h3>按分类找专家</h3>
        </div>  
        <div class="big box" >
        <div class="index-question">
              <div class="question">
                <img src="../image/问.png">我家里的肉鸡不吃东西脸肿关肿不咳嗽毛松及知是什么病
              </div>
              <div class="answer">
                <img src="../image/答.png">可能是得了支原体关节炎，可以试试喂服噬菌-滑清 特异性免疫口服疫苗。
              </div>
              <div class="list">
          <div class="qb">
            <a class="xx">全部一条信息 </a>
            <a class="gx">更新于2022-12-01</a>
            
          </div>
        </div>
        </div>
        <div class="index-question">
              <div class="question">
                <img src="../image/问.png">养了60天的鸡全部瘫痪了，鸡爪子里无骨髓
              </div>
              <div class="answer">
                <img src="../image/答.png">这种情况常见于鸡传染性病毒性关节炎，传染性支原体关节炎 这几种病一般是接种疫苗预防。
              </div>
              <div class="list">
          <div class="qb">
            <a class="xx">全部一条信息 </a>
            <a class="gx">更新于2022-12-01</a>
            
          </div>
        </div>
        </div>
        <div class="index-question">
              <div class="question">
                <img src="../image/问.png">老师我家羊下巴下长了个疙瘩   是怎么回事
              </div>
              <div class="answer">
                <img src="../image/答.png">可能是水肿患者是脓肿、有可能是寄生虫引起的水肿。
              </div>
              <div class="list">
          <div class="qb">
            <a class="xx">全部一条信息 </a>
            <a class="gx">更新于2022-12-01</a>
            
          </div>
        </div>
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
            height: 20px;
        }
        h3{
            font-size: 13px;
            color: rgb(210, 210, 210);
            margin-top: 11px;
            padding-right: 5px;
          height: 20px;
        }
    }
  }
}
    .index-question{
      // padding: 2px 10px 10px;
      background: #f5f5f5;
      font-size: 14px;
      width: 380px;
      height: 135px;
      margin-left: 8px;
      margin-top: 35px;
    // justify-content: space-evenly;
      // /box-sizing: border-box;
    //  display: -webkit-box;
      // color:#222;
    }
    .question{
      line-height: 3;
      margin-top: 8px;
    }
    .answer {
      font-size: 14px;
      margin-top: 8px;
    }
    .list{
            font-size: 13px;
            color: rgb(210, 210, 210);
            margin-top: 20px;
            height: 20px;
            margin-top: 20px;
            // color:#909090;
            // display: flex;
            // justify-content: space-between;
    }
    .gx{
      float: right;
      margin-right: 18px;
      color:#909090;
    }
    .xx{
      margin-left: 12px;
      color:#909090;
    }
    .question img{
      height: 20px;
      width: 20px;
      flex:none;
      padding-right: 5px;
    }
  .answer img{
    height: 20px;
      width: 20px;
      flex:none;
      padding-right: 5px;
  }
  .big{
  width: 100%;
  display: flex;
  }
  </style>
  