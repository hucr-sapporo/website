<template>
  <header id="top_bar" :class="{'color_bar': !transparent}">
    <router-link to="/">
      <div class="left_items">
        <img class="logo" src="/assets/logo_32x32.png"/>
        <h1>北大鯨類研究会札幌支部</h1>
      </div>
    </router-link>
    <div class="right_items">
      <nav class="nav_on_top">
        <a>活動内容</a>
        <a>今後の活動日程</a>
        <a href="http://hucrsapporo.wp.xdomain.jp" class="external">ブログ</a>
        <a>お問い合わせ</a>
        <a href="/secure.php">会員限定ページ</a>
      </nav>
      <a href="https://twitter.com/cetorogyclubsap"><i class="icon-twitter"></i></a>
      <a href="https://github.com/hucr-sapporo"><i class="icon-github-circled"></i></a>
      <i class="sidebar_togglebtn icon-menu"></i>
    </div>
  </header>
</template>

<script>
import 'gsap/CSSPlugin';
import {TweenLite, Power0, Power1, Power2, Power3} from 'gsap/TweenLite';

export default {
  name: 'top-bar',
  props: {
    transparent: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="scss">
#top_bar {
  position: relative;
  top: 0;
  height: 50px;
  color: #fff;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  a {
    color: #fff;
    text-decoration: none;
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
    margin: 0;
    padding: 0;
    font-size: 20px;
    line-height: 50px;
    font-weight: normal;

    @media (max-width: 480px) {
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

  @media (max-width: 1080px) {
    padding: 0 2%;

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
    padding: 0 5%;

    nav > a {
      margin: 0 10px;
    }

    i {
      display: none;
    }
  }
}

.color_bar {
  background-color: #000;
}
</style>
