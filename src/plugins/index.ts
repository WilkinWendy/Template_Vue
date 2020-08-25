import Vue, { VueConstructor, PluginObject } from "vue";
import AntdVuePlugin from "./antd-vue/index";
import EchartsPlugin from "./echarts/index";
import LoadingPlugin from "./loading";
import ModalPlugin from "./modal/index";
export class pluginCenter implements PluginObject<any> {
  install(vueInstance: VueConstructor<Vue>) {
    vueInstance.use(new AntdVuePlugin());
    vueInstance.use(new EchartsPlugin());
    vueInstance.use(new LoadingPlugin());
    vueInstance.use(new ModalPlugin());
  }
}
