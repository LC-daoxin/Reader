<template>
	<transition name="slide-up">
		<div class="settings" v-show="setShow">
			<div class="preview" :style="{fontSize: fontList[0].fontSize + 'px'}">A</div>
			<div class="control">
				<div class="setting-item" v-for="(item, index) of fontList" :key="index" @click="setFontSize(item.fontSize)">
					<div class="line"></div>
					<div class="point-wrapper">
						<div class="point" v-show="$store.state.defaultFont === item.fontSize">
							<div class="small-point"></div>
						</div>
					</div>
					<div class="line"></div>
				</div>
			</div>
			<div class="preview" :style="{fontSize: fontList[fontList.length - 1].fontSize + 'px'}">A</div>
		</div>
	</transition>
</template>

<script>
export default {
  name: "settings",
	props: {
    setShow: {
      type: Boolean,
	    default: false
    }
	},
  data() {
    return {
      fontList: [{fontSize:12}, {fontSize:14}, {fontSize:16}, {fontSize:18}, {fontSize:20}, {fontSize:22}, {fontSize:24}],
      defaultFont: 14
    }
  },
	methods: {
    setFontSize(fontSize) {
      this.$store.commit('setDefaultFont', fontSize)
    }
	}
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/global.scss";
.settings {
	display: flex;
	position: absolute;
	bottom: px2rem(50);
	left: 0;
	height: px2rem(50);
	width: 100%;
	background: white;
	z-index: 101;
	box-shadow: 0 px2rem(-5) px2rem(5) rgba(0, 0, 0, .2);
	.preview {
		flex: 0 0 px2rem(50);
		@include center;
		box-sizing: border-box;
		&:first-of-type {
			padding-left: calc((100% - 100px) / 14);
		}
		&:last-of-type {
			padding-right: calc((100% - 100px) / 14);
		}
	}
	.control {
		display: flex;
		flex: 1;
		.setting-item {
			&:first-child {
				.line {
					&:first-child {
						border-top: none
					}
				}
			}
			&:last-child {
				.line {
					&:last-child {
						border-top: none
					}
				}
			}
			display: flex;
			@include center;
			flex: 1;
			.line {
				height: 0;
				width: 100%;
				border-top: px2rem(1) solid gainsboro;
			}
			.point-wrapper {
				flex: 0 0 0;
				width: 0;
				height: px2rem(7);
				border-left: px2rem(1) solid gainsboro;
				position: relative;
				.point {
					position: absolute;
					left: - px2rem(11);
					top: - px2rem(8);
					width: px2rem(20);
					height: px2rem(20);
					border-radius: 50%;
					background: white;
					border: px2rem(1) solid gainsboro;
					box-shadow: px2rem(1) px2rem(1) px2rem(2) rgba(0, 0, 0, .15);
					@include center;
					.small-point {
						width: px2rem(5);
						height: px2rem(5);
						background: black;
						border-radius: 50%;
					}
				}
			}
		}
	}
}
</style>