<template>
  <div class="hello">
    hello world
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Model } from "vue-property-decorator";
import { testService } from "@/service";
@Component
export default class HelloWorld extends Vue {
  @Prop({
    default: ""
  })
  private msg!: string;

  private content: string = "";

  mounted() {}
  async demoCall() {
    try {
      const res = await testService.test("id");
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
