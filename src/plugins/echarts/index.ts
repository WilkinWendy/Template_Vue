import Vue, { VueConstructor, PluginObject } from "vue";
import VEcharts from "vue-echarts";
import "echarts";

export default class EchartsPlugin implements PluginObject<any> {
  install(vueInstance: VueConstructor<Vue>) {
    vueInstance.component("v-chart", VEcharts);
  }
}
