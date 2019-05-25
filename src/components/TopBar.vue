<template>
  <header id="top_bar" :class="{transparent}">
    <div id="top_bar_inner">
      <div class="left_items">
        <router-link to="/">
          <img class="logo" src="/assets/logo_32x32.png" alt=" "/>
          <h1>北大鯨類研究会<br>札幌支部</h1>
        </router-link>
      </div>
      <div class="right_items">
        <nav class="nav_on_top">
          <router-link to="/activity">活動内容</router-link>
          <router-link to="/schedule">活動日程</router-link>
          <a href="http://hucrsapporo.wp.xdomain.jp" class="external">ブログ</a>
          <router-link to="/contact">お問い合わせ</router-link>
          <a href="/secure.php">会員限定ページ</a>
        </nav>
        <a href="https://twitter.com/cetorogyclubsap"><i class="icon-twitter"></i></a>
        <a href="https://github.com/hucr-sapporo"><i class="icon-github-circled"></i></a>
        <i class="sidebar_togglebtn icon-menu" @click="panelOpen"></i>
      </div>
    </div>
    <slide-panel ref="panel"></slide-panel>
  </header>
</template>

<script>
import SlidePanel from '/components/SlidePanel.vue';

export default {
  name: 'top-bar',
  components: {
    SlidePanel
  },
  props: {
    transparent: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  methods: {
    panelOpen() {
      console.log(this);
      this.$refs.panel.$data.opened = true;
    }
  }
}
</script>

<style lang="scss">
#top_bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #000;
  z-index: 3;

  &.transparent {
    background-color: transparent;
  }
}

#top_bar_inner {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 50px;
  padding: 0 10px;
  color: #fff;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  z-index: 3;

  a {
    color: #fff;
    text-decoration: none;
    /* doiuse-disable */
    outline: 0;
    border: none;
    -moz-outline-style: none;
    /* doiuse-enable */
  }

  div {
    display: inline-block;
    height: 50px;
  }

  img.logo {
    float: left;
    display: inline;
    padding: 9px;
    height: 32px;
  }

  h1 {
    margin-top: 10px;
    padding: 0;
    font-size: 13px;
    line-height: 15px;

    @media (max-width: 320px) {
      display: none;
    }
  }

  .left_items {
    float: left;
    line-height: 50px;
  }

  .right_items {
    float: right;
    line-height: 50px;
  }

  i {
    transition: color 0.2s linear, transform 0.2s ease;
  }

  .icon-twitter:hover {
    color: #00aced;
  }

  .icon-github-circled:hover {
    color: #333;
  }

  .icon-menu:hover {
    transform: rotate(360deg);
  }

  @media (max-width: 1080px) {
    width: 96%;

    nav {
      display: none;
    }

    i {
      display: inline-block;
      margin: 0;
      font-size: 30px;
      cursor: pointer;
    }
  }

  @media (min-width: 1081px) {
    width: calc(60% + 300px);

    nav > a {
      margin: 0 10px;
    }

    i {
      display: none;
    }
  }
}
</style>
