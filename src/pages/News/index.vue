<template>
    <div>
        <Nav></Nav>
        <div class="contion">
            <Left />
            <Right />
        </div>
    </div>
</template>

<script>
import Right from "./Right/Right";
import Left from "./Left/Left";
import Nav from "@/components/Nav";

export default {
	name      : "news",
	components: {
		Right,
		Left,
		Nav
	}
};
</script>
<style lang="scss" scoped>
.contion {
    display: flex;
    justify-content: space-around;
    width: 1226px;
    margin: 0 auto;
}
</style>
