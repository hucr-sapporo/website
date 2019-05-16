<template>
  <div id="home">
    <div class="top_image"></div>
    <div class="gradient_blur"></div>
    <section class="top_contents">
      <div class="animation_texts">
        <div ref="source_text" class="source_text">
          Consider the subtleness of the sea; how its most dreaded creatures glide under water, unapparent for the most part, and treacherously hidden beneath the loveliest tints of azure.
        </div>
        <div ref="translated_text" class="translated_text">
          「海の巧妙さを考えてみよ。その最も恐ろしい生き物は、水の中を滑り動き，大部分ははっきりと見ることが出来ず、紺青の明媚な色合いの下に裏切り者のように潜んでいる。」
        </div>
        <div ref="reference" class="reference">
          Herman Melville (1851) 『白鯨』
        </div>
      </div>
      <div ref="navbtns" class="navbtns">
        <nav-btn to="/activity" color="#fb3">活動内容を見る</nav-btn>
        <nav-btn to="/schedule" color="#fff" highlighted-color="#444">活動日程カレンダー</nav-btn>
      </div>
    </section>
  </div>
</template>

<script>
import '/css/fontello.css';
import 'gsap/CSSPlugin';
import {TweenLite, Power0, Power1, Power2, Power3} from 'gsap/TweenLite';
import NavBtn from './NavBtn.vue';

function animate(el, duration, props1, props2 = null) {
  if (props2 === null) {
    return new Promise((resolve) => {
      props1.onComplete = resolve;
      TweenLite.to(el, duration, props1);
    });
  } else {
    return new Promise((resolve) => {
      props2.onComplete = resolve;
      TweenLite.fromTo(el, duration, props1, props2);
    });
  }
}

var animation_started = false;

export default {
  name: 'home',
  components: {
    NavBtn
  },
  data() {
    return {
      msg: 'Hello, world!'
    }
  },
  mounted() {
    if (!animation_started) {
      animation_started = true;
      this.start_animation();
    } else {
      this.$refs.source_text.style.opacity = 1.0;
      this.$refs.translated_text.style.opacity = 1.0;
      this.$refs.reference.style.opacity = 1.0;
      this.$refs.reference.style.transform = 'rotate(0deg)';
    }
  },
  methods: {
    async start_animation() {
      /* await animate(this.$refs.source_text, 0, {
        opacity: 1.0,
      }); */

      await this.translation_animation({ delay: 0.5 });

      await animate(this.$refs.reference, 0.5, {
        opacity: 1.0,
        rotation: 0,
        delay: 0.5
      });

      /* animate(this.$refs.navbtns, 0.3, {
        y: 50,
        opacity: 0.0
      }, {
        y: 0,
        opacity: 1.0,
        delay: 1.0
      }); */
    },
    translation_animation({ delay }) {
      return new Promise((resolve) => {
        const el = this.$refs.translated_text;
        const spaned_text = '<span>' + Array.from(el.innerText).join('</span><span>') + '</span>';
        el.innerHTML = spaned_text;
        const span_tags = el.children;
        let i = 1;
        for (let span_tag of span_tags) {
          span_tag.style.opacity = 0.0;

          if (i == span_tags.length) {
            TweenLite.to(span_tag, 0.5, {
              opacity: 1.0,
              delay,
              ease: Power0.easeNone,
              onComplete: resolve
            });
          } else {
            TweenLite.to(span_tag, 0.2, {
              opacity: 1.0,
              ease: Power0.easeNone,
              delay
            });
          }
          delay += 0.06;
          ++i;
        }
        el.style.opacity = 1.0;
      });
    }
  }
}
</script>

<style lang="scss" scoped>
#home {
  a {
    text-decoration: none;
  }
}

.gradient_blur {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 70px;
  /* doiuse-disable */
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  /* doiuse-enable */
}

.top_image {
  position: fixed;
  background-image: url('/assets/IMG_0831_k3.jpg');
  background-position: left bottom;
  background-size: cover;
  background-repeat: no-repeat;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  @media (max-width: 480px) {
    background-position: left -200px bottom;
  }
}

.top_contents {
  position: absolute;
  overflow: hidden;

  @media (max-width: 1180px) {
    width: 80%;
    left: 10%;
    top: 10%;
  }
  @media (min-width: 1181px) {
    width: calc(450px + 25%);
    right: calc(20% - 150px);
    top: 20%;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    width: 90%;
    left: 5%;
  }
  @media (min-width: 481px) {
    font-size: 25px;
  }


  .animation_texts {
    color: #fff;
    font-family: new roman, century, serif, sans-serif;
    font-weight: 600;
    text-shadow: 2px 2px 5px #222;

    div {
      margin: 1.5em 0;
      opacity: 0;
    }

    .source_text {
      font-style: italic;
      color: #99ffd3;
      opacity: 1.0;
    }

    .translated_text {
      & > span {
        opacity: 0;
      }
    }

    .reference {
      text-align: right;
      transform: rotate(-10deg);
      transform-origin: right center;
    }
  }
}

.navbtns {
  position: relative;
  width: 100%;
  text-align: center;
  margin-top: 1.5em;
}
</style>
