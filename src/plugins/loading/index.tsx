import Vue, { VueConstructor, PluginObject } from "vue";
import YbLoading from "./lib/YbLoading";

export default class LoadingPlugin implements PluginObject<any> {
  install(vueInstance: VueConstructor<Vue>) {
    vueInstance.use(YbLoading, {
      component: {
        render(h: Function) {
          return (
            <a-icon
              type="loading"
              spin={false}
              style={{ color: "#477CD4" }}
            ></a-icon>
          );
        }
      },
      customize: true
    });
  }
}
