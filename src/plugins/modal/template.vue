<!--  -->
<template>
  <a-locale-provider :locale="locale">
    <div class="modaltemplate" :class="{ noBottom: set_noBottom }">
      <div class="top">
        <slot name="top">我是顶部</slot>
        <a-icon
          type="close-circle"
          class="closeicon"
          @click="closeMe()"
          theme="filled"
        />
      </div>
      <div class="main">
        <slot>我是主体</slot>
      </div>
      <div class="bottom">
        <slot name="bottom">我是底部</slot>
      </div>
    </div>
  </a-locale-provider>
</template>

<script>
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
export default {
  props: {
    hasBottom: {
      type: Boolean,
      default: true
    },
    modalName: {
      type: String
    }
  },
  data() {
    return {
      locale: zhCN
    };
  },
  components: {},
  computed: {
    set_noBottom() {
      return !this.hasBottom;
    }
  },

  mounted() {
    console.log(this);
  },

  methods: {
    closeMe() {
      if (this.modalName) return this.$modal.hide(this.modalName);
      this.$closeModal();
    }
  }
};
</script>
<style lang="less" scoped>
@import "../../../theme/index.less";
@padding-normal: 32px;

.modaltemplate {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

  .top {
    flex: none;
    width: 100%;
    height: 54px;
    padding-left: @padding-normal;
    display: flex;
    align-items: center;
    border-bottom: solid #e6e6e6 1px;
    position: relative;

    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: rgba(34, 34, 34, 1);
    line-height: 21px;
    font-weight: 600;
    .closeicon {
      cursor: pointer;
      position: absolute;
      top: 9px;
      right: 9px;
      font-size: 16px;
      color: #bcbcbc;
      &:hover {
        color: @primary-color;
      }
    }
  }

  .main {
    flex: 1;
    width: 100%;
    display: flex;
    padding: 24px @padding-normal 0 @padding-normal;
    flex-direction: column;
    overflow: auto;
    overflow: overlay;
  }

  .bottom {
    flex: none;
    width: 100%;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: @padding-normal;
  }
}

.modaltemplate.noBottom {
  .main {
    padding: 24px @padding-normal @padding-normal @padding-normal;
  }

  .bottom {
    display: none;
  }
}

* {
  box-sizing: border-box;
}
</style>
