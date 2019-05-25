<template>
  <div id="activity">
    <article>
      <div class="breadcrumb">
        <router-link to="/">トップ</router-link> &gt; 活動内容
      </div>
    </article>
    <footer-container></footer-container>
  </div>
</template>

<script>
import FooterContainer from '/components/FooterContainer.vue';

export default {
  name: 'activity',
  components: {
    FooterContainer
  }
}
</script>

<style lang="scss">
#activity > article {
  position: relative;
  width: 80%;
  max-width: 1200px;
  top: 0;
  left: 0;
  right: 0;
  margin: 80px auto 0;
  line-height: 2.5;
}
</style>
