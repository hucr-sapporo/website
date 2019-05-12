<template>
  <main id="app">
    <router-view/>
  </main>
</template>

<script>
import 'normalize.css';

export default {
  name: 'App', // for devtool
}
</script>

<style>
#app {
  font-family:'Lato', 'Noto Sans JP', '游ゴシック Medium', '游ゴシック体', 'Yu Gothic Medium', YuGothic, 'ヒラギノ角ゴ ProN', 'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
  text-align: center;
}
</style>
