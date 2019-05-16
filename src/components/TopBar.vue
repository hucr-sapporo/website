<template>
  <header id="top_bar">
    <div id="top_bar_background"></div>
    <div id="top_bar_foreground">
      <div class="left_items">
        <router-link to="/">
          <img class="logo" src="/assets/logo_32x32.png"/>
          <h1>北大鯨類研究会札幌支部</h1>
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
        <i class="sidebar_togglebtn icon-menu"></i>
      </div>
    </div>
  </header>
</template>

<script>
import 'gsap/CSSPlugin';
import {TweenLite, Power0, Power1, Power2, Power3} from 'gsap/TweenLite';

export default {
  name: 'top-bar'
}
</script>

<style lang="scss">
#top_bar_foreground {
  position: relative;
  top: 0;
  height: 50px;
  color: #fff;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  z-index: 3;

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

#top_bar_background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #000;
  z-index: -1;
}
</style>
