<template>
  <a-locale-provider :locale="locale">
    <div id="app">
      <router-view></router-view>
    </div>
  </a-locale-provider>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";

@Component
export default class App extends Vue {
  locale: any = zhCN;
}
</script>

<style lang="less">
#app {
  height: 100%;
  width: 100%;
  position: relative;
}
</style>
