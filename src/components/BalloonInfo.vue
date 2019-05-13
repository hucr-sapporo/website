<template>
  <div class="balloon" :class="{'balloon_open': isActive}" @click="isActive = !isActive">
    <div v-if="!isActive" class="close_text">
      ?
    </div>
    <div v-if="isActive" class="open_text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
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
    }
  },
  data() {
    return {
      isActive: false,
      displayText: false
    }
  },
  mounted() {
    const styles = this.$el.style;
    styles.top = (this.top - 60) + 'px';
    styles.left = (this.left + 10) + 'px';
    styles.display = 'block';
  }
}
</script>

<style lang="scss" scoped>
.balloon {
  display: none;
  position: absolute;
  padding: 0px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 22px;
  text-align: center;
  color: #ffffff;
  font-size: 25px;
  background-color: #555;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    display: block;
    left: -15px;
    bottom: -8px;
    width: 0;
    height: 0;
    border-right: 30px solid #555;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    transform: rotate(-45deg);
  }
}

.balloon_open {
  text-align: left;
  font-size: 15px;
  width: 300px;
  height: 200px;
}
</style>
