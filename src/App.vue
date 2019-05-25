<template>
  <main id="app">
    <top-bar ref="topBar" :transparent="$route.name === 'home'"></top-bar>
    <transition name="page" mode="out-in">
      <router-view></router-view>
    </transition>
  </main>
</template>

<script>
import 'normalize.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css'
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
  color: #2b5;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &.external:after {
    font-family: "fontello";
    content: '\f08e';
    margin-left: 5px;
  }
}

#app {
  color: #444;
  font-family:'Lato', 'Noto Sans JP', '游ゴシック Medium', '游ゴシック体', 'Yu Gothic Medium', YuGothic, 'ヒラギノ角ゴ ProN', 'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
  box-sizing: border-box;
  line-height: 1.5;
  font-size: 16px;

  article {
    min-height: 80vh;
  }

  .breadcrumb {
    margin-bottom: 50px;
    padding: 0.75em 1em;
    background-color: #e9ecef;
    border-radius: 0.25rem;
    z-index: 0;
  }
}

.page-enter-active, .page-leave-active {
  transition: opacity 0.3s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
