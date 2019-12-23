<template>
  <div class="ebook">
    <div id="read"></div>
    <div class="mask" @touchstart="touchStart" @touchend="touchEnd">
      <div class="left" @click="prevPage"></div>
      <div class="center"></div>
      <div class="right" @click="nextPage"></div>
    </div>
  </div>
</template>

<script>
import Epub from "epubjs";
const BOOK_URL = "1.epub";
export default {
  name: "ebook",
  data () {
    return {
      startX: '',
      startY: '',
      moveEndX: '',
      moveEndY: ''
    }
  },
  methods: {
    // 电子书的解析和渲染
    showEpub() {
      this.book = new Epub(BOOK_URL);
      console.log(this.book);
      this.renditon = this.book.renderTo("read", {
        width: window.innnerWidth,
        height: window.innerHeight
      });
      this.renditon.display();
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
      this.startX = ev.targetTouches[0].clientX
      this.startY = ev.targetTouches[0].clientY
    },
    touchEnd(ev) {
      ev = ev || event;
      this.moveEndX = ev.changedTouches[0].clientX
      this.moveEndY = ev.changedTouches[0].clientY
      let X = this.moveEndX - this.startX
      let Y = this.moveEndY - this.startY;
      if ( Math.abs(X) > Math.abs(Y) && X > 0 ) {
        this.prevPage()
      } else if ( Math.abs(X) > Math.abs(Y) && X < 0 ) {
        this.nextPage()
      }
    }
  },
  mounted() {
    this.showEpub();
  }
};
</script>

<style lang="scss" scoped>
@import "assets/styles/global";
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
