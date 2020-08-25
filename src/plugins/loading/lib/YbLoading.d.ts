import Vue, { VueConstructor, PluginObject, ComponentOptions } from "vue";
interface Opt {
  name?: string;
  component: ComponentOptions<Vue>;
  customize: boolean;
}
declare const install: (vue: VueConstructor<Vue>, options: Opt[] | Opt) => {};
