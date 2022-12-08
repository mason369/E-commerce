<template>
  <div>
      <!-- 三级联动全局组件 -->
      <ListNav></ListNav>
      <Sitecont></Sitecont>
  </div>
</template>

<script>
import ListNav from "@/pages/Site/ListNav";
import Sitecont from "@/pages/Site/Sitecont";
export default {
	components: {
		ListNav,
		Sitecont
	}
}
</script>
<style lang="scss" scoped>
    div{
          margin: 0 auto;
          width: 1230px;
          display: flex;
        }
</style>
