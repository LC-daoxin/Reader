<template>
  <div class="ebook">
    <title-bar :menuShow="menuShow"/>
    <div id="read"></div>
    <div class="mask" @touchstart="touchStart" @touchend="touchEnd">
      <div class="left" @click="prevPage"></div>
      <div class="center" @click="handlemenuShow"></div>
      <div class="right" @click="nextPage"></div>
    </div>
    <bottom-bar :menuShow="menuShow" ref="bottomBar"/>
  </div>
</template>

<script>
import Epub from "epubjs";
import TitleBar from "@/components/TitleBar";
import BottomBar from "@/components/BottomBar";
const BOOK_URL = "1.epub";
export default {
  name: "ebook",
  components: {
    TitleBar,
    BottomBar
  },
  data() {
    return {
      startX: null,
      startY: null,
      moveEndX: null,
      moveEndY: null,
      menuShow: false
    };
  },
  methods: {
    // 电子书的解析和渲染
    showEpub() {
      this.book = new Epub(BOOK_URL);
      this.renditon = this.book.renderTo("read", {
        width: window.innnerWidth,
        height: window.innerHeight
      });
      this.renditon.display();
      // 获取Theme对象
      this.themes = this.renditon.themes
      // 设置默认字体
      this.setDefaultFont(this.$store.state.defaultFont)
    },
    // 设置默认字体
    setDefaultFont(fontSize) {
      if (this.themes) {
        this.themes.fontSize(fontSize + 'px')
      }
    },
    prevPage() {
      if (this.renditon) {
        this.renditon.prev();
      }
    },
    nextPage() {
      if (this.renditon) {
        this.renditon.next();
      }
    },
    touchStart(ev) {
      ev = ev || event;
      this.startX = ev.targetTouches[0].clientX;
      this.startY = ev.targetTouches[0].clientY;
    },
    touchEnd(ev) {
      ev = ev || event;
      this.moveEndX = ev.changedTouches[0].clientX;
      this.moveEndY = ev.changedTouches[0].clientY;
      let X = this.moveEndX - this.startX;
      let Y = this.moveEndY - this.startY;
      if (Math.abs(X) > Math.abs(Y) && X > 0 && Math.abs(X) > 10) {
        this.prevPage();
      } else if (Math.abs(X) > Math.abs(Y) && X < 0 && Math.abs(X) > 10) {
        this.nextPage();
      }
    },
    handlemenuShow() {
      this.menuShow = !this.menuShow
      if (!this.menuShow) {
        this.$refs.bottomBar.handleSetHide()
      }
    }
  },
  mounted() {
    this.showEpub();
  },
  computed: {
    Font() {
      return this.$store.state.defaultFont
    }
  },
  watch: {
    Font(curVal) {
      //这里的curVal就是需要监听的值
      this.setDefaultFont(curVal)
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";
.ebook {
  position: relative;
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    width: 100%;
    height: 100%;
    .left {
      flex: 0 0 px2rem(100);
    }
    .center {
      flex: 1;
    }
    .right {
      flex: 0 0 px2rem(100);
    }
  }
}
</style>
