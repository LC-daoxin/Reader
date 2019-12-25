<template>
	<transition name="slide-up">
		<div class="bottom-bar" v-show="menuShow">
			<div class="icon-wrapper">
				<i class="iconfont">&#xe605;</i>
			</div>
			<div class="icon-wrapper">
				<i class="iconfont">&#xe628;</i>
			</div>
			<div class="icon-wrapper">
				<i class="iconfont">&#xec85;</i>
			</div>
			<div class="icon-wrapper">
				<i class="iconfont">&#xe624;</i>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
  name: "BottomBar",
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
.bottom-bar {
	display: flex;
	position: absolute;
	bottom: 0;
	left: 0;
	height: px2rem(50);
	width: 100%;
	background: white;
	z-index: 101;
	box-shadow: 0 px2rem(-5) px2rem(5) rgba(0, 0, 0, .2);
	.icon-wrapper {
		flex: 1;
		@include center;
	}
}
</style>