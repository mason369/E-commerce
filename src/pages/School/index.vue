<template>
    <div>
        <Nav></Nav>
        <!-- 三级联动全局组件 -->
        <div class="content">
            <Hall></Hall>
            <Experts></Experts>
            <Answers></Answers>
            <Articles></Articles>
        </div>
    </div>
  </template>
  
<script>
import Hall from "@/pages/School/Hall";
import Experts from "@/pages/School/Experts";
import Answers from "@/pages/School/Answers";
import Articles from "@/pages/School/Articles";
import Nav from "@/components/Nav";
export default {
	components: {
		Hall,
		Nav,
		Experts,
		Answers,
		Articles
	}
}
</script>
  <style lang="scss" scoped>
      .content{
            margin: 0 auto;
            width: 1230px;
          }
  </style>
  