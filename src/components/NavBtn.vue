<template>
  <router-link :to="to" @mouseover.native="mouseOver" @mouseleave.native="mouseLeave">
    <span class="inner_text"><i class="icon-right-open"></i><slot></slot></span>
    <div ref="bgbar" class="bgbar"></div>
  </router-link>
</template>

<script>
export default {
  name: 'nav-btn',
  props: {
    to: {
      type: String,
      require: true
    },
    color: {
      type: String,
      require: true
    },
    highlightedColor: {
      type: String,
      require: false,
      default: '#444'
    }
  },
  mounted() {
    const style = this.$el.style;
    style.color = this.color;
    style.borderColor = this.color;
    this.$refs.bgbar.style.backgroundColor = this.color;
  },
  methods: {
    mouseOver() {
      console.log('mouseover');
      this.$el.style.color = this.highlightedColor;
    },
    mouseLeave() {
      this.$el.style.color = this.color;
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  margin: 0.5em 0.8em;
  padding: 0.5em 1em;
  position: relative;
  display: inline-block;
  text-decoration: none;
  border-radius: 6px;
  font-weight: bold;
  border: solid 3px #fff;
  color: #fff;
  overflow: hidden;
  z-index: 1;
  transition: color .25s linear;

  @media (max-height: 600px) {
    margin: 0.2em 0.8em;
  }
}

.bgbar {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  background-color: #fff;
  z-index: -1;
  transition: width .2s ease-out;
}

a:hover .bgbar {
  width: 105%;
}
</style>
