<template>
    <div>
        <div class="link_nav" style="margin-bottom: 18px;">
            <div class="link_list">
                <a href="/list_article.shtml?nid=1030">
                    <img
                        src="https://res.fupin832.com/icon/gys.png"
                        alt=""
                        onerror="javascript:this.src='/webpage/gxs/images/wutu.png'"
                    />
                    <span>如何成为供应商</span>
                </a>
            </div>
            <div class="link_list">
                <a href="/list_article.shtml?nid=1060">
                    <img
                        src="https://res.fupin832.com/icon/fbsp.png"
                        alt=""
                        onerror="javascript:this.src='/webpage/gxs/images/wutu.png'"
                    />
                    <span>如何发布商品</span>
                </a>
            </div>
            <div class="link_list">
                <a href="/list_article.shtml?nid=1031">
                    <img
                        src="https://res.fupin832.com/icon/cgr.png"
                        alt=""
                        onerror="javascript:this.src='/webpage/gxs/images/wutu.png'"
                    />
                    <span>如何成为采购人</span>
                </a>
            </div>
            <div class="link_list">
                <a href="/list_article.shtml?nid=1061">
                    <img
                        src="https://res.fupin832.com/icon/gmcart.png"
                        alt=""
                        onerror="javascript:this.src='/webpage/gxs/images/wutu.png'"
                    />
                    <span>如何购买</span>
                </a>
            </div>
            <div class="link_list">
                <a href="/list_article.shtml?nid=1062">
                    <img
                        src="https://res.fupin832.com/icon/js.png"
                        alt=""
                        onerror="javascript:this.src='/webpage/gxs/images/wutu.png'"
                    />
                    <span>如何结算</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "How",
};
</script>

<style lang="scss" scoped>
.link_nav {
    text-align: center;
    width: 1226px;
    margin: 12px auto;
    background-color: #fff;
}

.link_list {
    width: 235px;
    display: inline-block;
    height: 60px;
    line-height: 60px;
    text-align: center;
}

* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.link_list a {
    font-size: 18px;
    color: #333333;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
}
.link_list img {
    margin-right: 4px;
    position: relative;
    top: -1px;
}
</style>
