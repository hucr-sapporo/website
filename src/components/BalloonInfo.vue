<template>
  <div class="balloon" :class="{'balloon_open': displayText}" @click="balloonClick">
    <div v-if="displayIcon" class="close_text">
      ?
    </div>
    <div v-if="displayText" class="open_text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import 'gsap/CSSPlugin';
import {TweenLite, Power0, Power1, Power2, Power3} from 'gsap/TweenLite';

export default {
  name: 'balloon-info',
  props: {
    top: {
      type: Number,
      require: false,
      default: 0
    },
    left: {
      type: Number,
      require: false,
      default: 0
    },
    width: {
      type: Number,
      require: false,
      default: 300
    },
    height: {
      type: Number,
      require: false,
      default: 200
    }
  },
  data() {
    return {
      displayIcon: true,
      displayText: false
    }
  },
  mounted() {
    const styles = this.$el.style;
    styles.top = (this.top - 60) + 'px';
    styles.left = (this.left + 10) + 'px';
    styles.display = 'block';
  },
  methods: {
    balloonClick() {
      if (this.displayIcon) {
        this.displayIcon = false;
        TweenLite.to(this.$el, 0.3, {
          width: this.width,
          height: this.height,
          y: 30 - this.height,
          ease: Power2.easeInOut,
          onComplete: () => {
            this.displayText = true;
          }
        });
      } else if (this.displayText) {
        this.displayText = false;
        TweenLite.to(this.$el, 0.3, {
          width: 30,
          height: 30,
          y: 0,
          ease: Power2.easeInOut,
          onComplete: () => {
            this.displayIcon = true;
          }
        });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.balloon {
  display: none;
  position: absolute;
  padding: 10px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  border-radius: 22px;
  text-align: center;
  color: #ffffff;
  font-size: 25px;
  background-color: #444;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    display: block;
    left: -15px;
    bottom: -8px;
    width: 0;
    height: 0;
    border-right: 30px solid #444;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    transform: rotate(-45deg);
  }
}

.balloon_open {
  font-size: 15px;
  text-align: left;
}
</style>
