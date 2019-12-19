<template>
  <div id="read"></div>
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
    }
  },
  mounted() {
    this.showEpub();
  }
};
</script>

<style lang="scss" scoped>
@import "assets/styles/global";
</style>
