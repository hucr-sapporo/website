<template>
  <div id="activity">
    <div class="breadcrumb">
      <router-link to="/">トップ</router-link> &gt; 活動内容
    </div>
  </div>
</template>

<script>
export default {
  name: 'activity',
}
</script>

<style lang="scss">
#activity {
  position: relative;
  width: 80%;
  max-width: 1200px;
  top: 0;
  left: 0;
  right: 0;
  margin: 30px auto 0;
}
</style>
