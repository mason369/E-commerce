<template>
    <div class="glike">
        <div class="mt">
            <h3>猜你喜欢</h3>
            <div class="mc-list">
                <a href="">1</a>
                <a href="">2</a>
                <a href="">3</a>
            </div>
        </div>
        <div class="mc">
            <div class="mc-card">
                <img src="../Glike/image/东北新鲜大白菜.jpg" alt="">
                <div class="card-text">
                    <a href="">东北新鲜大白菜</a>
                    <h3>￥25</h3>
                    <a href="">(已有0人评价)</a>
                </div>
            </div>
            <div class="mc-card">
                <img src="../Glike/image/东北新鲜大白菜.jpg" alt="">
                <div class="card-text">
                    <a href="">东北新鲜大白菜</a>
                    <h3>￥25</h3>
                    <a href="">(已有0人评价)</a>
                </div>
            </div>
            <div class="mc-card">
                <img src="../Glike/image/东北新鲜大白菜.jpg" alt="">
                <div class="card-text">
                    <a href="">东北新鲜大白菜</a>
                    <h3>￥25</h3>
                    <a href="">(已有0人评价)</a>
                </div>
            </div>
            <div class="mc-card">
                <img src="../Glike/image/东北新鲜大白菜.jpg" alt="">
                <div class="card-text">
                    <a href="">东北新鲜大白菜</a>
                    <h3>￥25</h3>
                    <a href="">(已有0人评价)</a>
                </div>
            </div>
            <div class="mc-card">
                <img src="../Glike/image/东北新鲜大白菜.jpg" alt="">
                <div class="card-text">
                    <a href="">东北新鲜大白菜</a>
                    <h3>￥25</h3>
                    <a href="">(已有0人评价)</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
	components: {},
	mounted(){
	}
};
</script>
<style lang="scss" scoped>
@import "../../../assets/scss/_color.scss";
@import "../../../assets/scss/_fonts.scss";
    .glike{
      display:block;
        margin-top: 20px;
        background-color: $white-color;
        .mt{
            display: flex;
            justify-content: space-between;
            h3{
                margin: 20px;
            }
            .mc-list{
                margin: 20px;
                a{
                    margin: 0 5px;
                    border: 1px solid rgb(180, 180, 180);
                    border-radius: 50px;
                    padding: 2px 7px;
                }:nth-child(1){
                    border: 1px solid red;
                    background-color: red;
                    color: aliceblue;
                }
            }
        }
        .mc{
            display: flex;
            justify-content: space-around;
            .mc-card{
                width: 150px;
                padding-bottom: 10px;
                img{
                    width: 150px;
                    height: 150px;
                }
                .card-text{
                   h3{
                    margin: 8px 0;
                   }
                }
            }
        }
    }
</style>
