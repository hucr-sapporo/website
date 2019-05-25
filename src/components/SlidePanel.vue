<template>
  <v-touch class="slide_panel" @swiperight="opened = false">
    <div class="close_button">
      <i class="icon-cancel" @click="opened = false"></i>
    </div>
    <nav @click="opened = false">
      <router-link to="/activity"><i class="icon-info"></i>活動内容</router-link>
      <router-link to="/schedule"><i class="icon-calendar"></i>活動日程</router-link>
      <a href="http://hucrsapporo.wp.xdomain.jp/"><i class="icon-pencil"></i>ブログ</a>
      <router-link to="/contact"><i class="icon-mail"></i>お問い合わせ</router-link>
      <a href="/secure.php"><i class="icon-user"></i>会員限定ページ</a>
    </nav>
  </v-touch>
</template>

<script>
import '/css/fontello.css';
import 'gsap/CSSPlugin';
import {TweenLite, Power0, Power1, Power2, Power3} from 'gsap/TweenLite';

export default {
  name: 'slide-panel',
  data() {
    return {
      opened: false
    }
  },
  methods: {
    disableScroll(event) {
      event.preventDefault();
    }
  },
  watch: {
    opened(to, from) {
      if (to) {
        // disable scroll
        document.addEventListener('wheel', this.disableScroll, { passive: false });
        document.addEventListener('touchmove', this.disableScroll, { passive: false });

        TweenLite.to(this.$el, 0.3, {
          y: "0%",
          ease: Power2.easeOut
        });
      } else {
        document.removeEventListener('wheel', this.disableScroll, { passive: false });
        document.removeEventListener('touchmove', this.disableScroll, { passive: false });

        TweenLite.to(this.$el, 0.3, {
          y: "-100%",
          ease: Power2.easeOut,
          onComplete: () => {
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.slide_panel {
  position: fixed;
  margin: 0;
  padding: 0;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  transform: translateY(-100%);
  background-color: rgba(32, 32, 32, 0.9);
  color: white;
  z-index: 5;
}

.close_button {
  text-align: right;

  .icon-cancel {
    cursor: pointer;
  }
}

nav {
  width: 100%;

  a {
    padding: 0 5%;
    display: block;
    width: 100%;
    color: white;
    text-decoration: none;
    border-bottom: solid 1px #fff;
    transition: color 0.2s linear;

    &:nth-child(5) {
      // border-top: solid 1px #fff;
      border-bottom: none;
    }

    &.router-link-active {
      color: #888;
    }

    &:not(.router-link-active):hover {
      color: lightgreen;
    }
  }
}

@media (max-height: 540px) {
  .slide_panel {
    font-size: 25px;
  }

  .close_button {
    padding: 2%;
    margin-bottom: 20px;
  }

  nav {
    a {
      line-height: 60px;
    }
  }
}
@media (min-height: 541px) {
  .slide_panel {
    font-size: 30px;
  }

  .close_button {
    padding: 5%;
    margin-bottom: 30px;
  }

  nav {
    a {
      line-height: 80px;
    }
  }
}

</style>
