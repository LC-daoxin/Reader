<template>
	<transition name="slide-down">
		<div class="title" v-show="menuShow">
			<div class="left">
				<i class="iconfont">&#xe611;</i>
			</div>
			<div class="right">
				<div class="icon-wrapper">
					<i class="iconfont">&#xe61f;</i>
				</div>
				<div class="icon-wrapper">
					<i class="iconfont">&#xe617;</i>
				</div>
				<div class="icon-wrapper">
					<i class="iconfont">&#xe64c;</i>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
  name: "TitleBar",
	props: {
    menuShow: {
      type: Boolean,
	    default: false
    }
	}
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/global.scss";
.title {
	display: flex;
	position: absolute;
	top: 0;
	left: 0;
	height: px2rem(50);
	width: 100%;
	background: white;
	z-index: 101;
	box-shadow: 0 px2rem(5) px2rem(5) rgba(0, 0, 0, .2);
	.left {
		flex: 0 0 px2rem(60);
		@include center;
	}
	.right {
		flex: 1;
		display: flex;
		justify-content: flex-end;
		.icon-wrapper {
			flex: 0 0 px2rem(40);
			@include center;
		}
	}
}
</style>