<template>
  <div id="home">
    <div class="gradient_blur"></div>
    <div class="background_orca">
    <section>
      <div class="top_contents">
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
    console.log(this);
    if (!animation_started) {
      animation_started = true;
      this.start_animation();
    } else {
      this.$refs.source_text.style.opacity = 1.0;
      this.$refs.translated_text.style.opacity = 1.0;
      this.$refs.reference.style.opacity = 1.0;
      this.$refs.reference.style.transform = 'rotate(0deg)';
      this.$refs.navbtns.style.opacity = 1.0;
    }
  },
  methods: {
    async start_animation() {
      /* await animate(this.$refs.source_text, 0, {
        opacity: 1.0,
      }); */

      await this.translation_animation(this.$refs.translated_text, { delay: 1.0 });

      await this.translation_animation(this.$refs.reference, { delay: 0.5 });

      animate(this.$refs.navbtns, 0.3, {
        y: 50,
        opacity: 0.0
      }, {
        y: 0,
        opacity: 1.0,
        ease: Power1.easeOut,
        delay: 1.0
      });
    },
    translation_animation(el, { delay }) {
      return new Promise((resolve) => {
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
  z-index: 2;
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

section, .background_orca {
  width: 100%;
  margin: 0;
  padding: 0;
}

section {
  position: relative;
  min-height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}

.background_orca {
  z-index: 2;
  position: fixed;
  height: 100vh;
  background-image: url('/assets/IMG_0831_k3.jpg');
  background-position: left bottom;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  @media (max-width: 480px) {
    background-position: left -200px bottom;
  }
}

.top_contents {
  position: absolute;
  margin: auto;
  padding: 0;
  line-height: 1.2;

  @media (max-width: 1080px) {
    width: 80%;
    left: 10%;
    top: 10%;
  }
  @media (min-width: 1081px) {
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

  @media (max-height: 540px) {
    font-size: 17px;
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
    }
  }
}

.navbtns {
  position: relative;
  width: 100%;
  text-align: center;
  margin-top: 1em;
  opacity: 0;
}
</style>
