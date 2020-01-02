<template>
	<div class="menuBar">
		<transition name="slide-up">
			<div class="bottom-bar" :class="{'hide-shadow': setShow || !menuShow }" v-show="menuShow">
				<div class="icon-wrapper">
					<i class="iconfont">&#xe605;</i>
				</div>
				<div class="icon-wrapper">
					<i class="iconfont">&#xe628;</i>
				</div>
				<div class="icon-wrapper" @click="handleSetShow">
					<i class="iconfont">&#xec85;</i>
				</div>
				<div class="icon-wrapper">
					<i class="iconfont">&#xe624;</i>
				</div>
			</div>
		</transition>
		<settings :setShow="setShow"/>
	</div>
</template>

<script>
import settings from './Settings'
export default {
  name: "BottomBar",
  components: {
    settings
  },
  props: {
    menuShow: {
      type: Boolean,
      default: false
    }
  },
	data() {
    return {
      setShow: false
    }
	},
	methods: {
    handleSetShow() {
      this.setShow = true
    },
    handleSetHide() {
      this.setShow = false
    }
	}
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/global.scss";
.menuBar {
	position: relative;
	.bottom-bar {
		display: flex;
		position: absolute;
		bottom: 0;
		left: 0;
		height: px2rem(50);
		width: 100%;
		background: white;
		z-index: 102;
		box-shadow: 0 px2rem(-5) px2rem(5) rgba(0, 0, 0, .2);
		.icon-wrapper {
			flex: 1;
			@include center;
		}
		&.hide-shadow {
			box-shadow: none;
		}
	}
}
</style>