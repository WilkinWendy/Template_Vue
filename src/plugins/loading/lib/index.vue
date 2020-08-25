<template>
  <div class="yb-loading" v-show="show">
    <div class="yb-loading-target" :style="style" ref="target"></div>
    <svg v-if="!component">
      <use xlink:href="#yb-loading"></use>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      component: null,
      customize: false
    };
  },
  mounted() {
    const { component } = this;
    if (!component) return;
    this.loadingImg = new component();
    this.$refs.target.appendChild(this.loadingImg.$mount().$el);
  },
  computed: {
    style() {
      if (!this.customize) return { animation: "infinite linear 1s loading" };
      return {};
    }
  },
  beforeDestroy() {
    if (this.loadingImg && this.loadingImg.destroy) this.loadingImg.destroy();
  }
};
</script>

<style lang="less">
@keyframes loading {
  to {
    transform: rotate(360deg);
  }
}
@size: 2rem;
.yb-loading {
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.1);
  svg {
    animation: loading infinite linear 1s;

    width: @size;
    height: @size;
  }
}
</style>
