<template>
  <footer id="footer">
    <div class="footer_inner">
      <p>&copy; 2019-&nbsp; Hokkaido University Cetacean Research Sapporo.</p>
      <p>All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'footer-container',
}
</script>

<style lang="scss">
#footer {
  margin-top: 30px;
  position: relative;
  width: 100%;
  padding: 0px;
  border-top: solid 1px #ddd;
  line-height: 1.2em;
  color: #888;
  text-align: center;
  font-size: 0.9rem;

  .footer_inner {
    position: relative;
    padding: 0.5em 0;
    width: calc(100% - 20px);
    max-width: 1200px;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  p {
    display: inline-block;
    margin: 0.4em 0;
  }
}
</style>
