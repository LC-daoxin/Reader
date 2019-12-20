<template>
  <div class="ebook">
    <div id="read"></div>
    <div
      class="mask"
      @touchstart='touchStart'
    >
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
        this.renditon.prev()
      }
    },
    nextPage() {
      if (this.renditon) {
        this.renditon.next()
      }
    },
    touchStart(timestamp, ev) {
      ev = ev || event;
      console.log(ev)
      console.log(timestamp)
    }
  },
  mounted() {
    this.showEpub();
  }
};
</script>

<style lang="scss" scoped>
@import "assets/styles/global";
.ebook{
  position: relative;
  .mask{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    width: 100%;
    height: 100%;
    .left{
      flex: 0 0 px2rem(100);
    }
    .center{
      flex: 1;
    }
    .right{
      flex: 0 0 px2rem(100);
    }
  }
}
</style>
