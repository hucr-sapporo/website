<template>
  <main id="app">
    <top-bar ref="topBar"></top-bar>
    <transition name="page" mode="out-in">
      <router-view/>
    </transition>
  </main>
</template>

<script>
import 'normalize.css';
import TopBar from './components/TopBar.vue';

export default {
  name: 'App', // for devtool
  components: {
    TopBar
  },
  mounted() {
    console.log(this);
  }
}
</script>

<style lang="scss">
a {
  color: green;

  &.external:after {
    font-family: "fontello";
    content: '\f08e';
    margin-left: 5px;
  }
}

#app {
  font-family:'Lato', 'Noto Sans JP', '游ゴシック Medium', '游ゴシック体', 'Yu Gothic Medium', YuGothic, 'ヒラギノ角ゴ ProN', 'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
}

.page-enter-active, .page-leave-active {
  transition: opacity 0.5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
