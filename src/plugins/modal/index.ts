import VModal from "vue-js-modal";
import Vue, { VueConstructor, PluginObject } from "vue";
import modaltemplate from "./template.vue";
export default class ModalPlugin implements PluginObject<any> {
  install(vueInstance: VueConstructor<Vue>) {
    vueInstance.use(VModal, {
      dynamic: true,
      injectModalsContainer: true,
      dynamicDefaults: {
        draggable: ".top",
        clickToClose: true,
        pivotY: 0.25,
        height: "auto",
        width: 780
      }
    });

    vueInstance.mixin({
      methods: {
        $closeModal(val) {
          let cur = this.$parent;
          // eslint-disable-next-line
          while (!cur.name || !cur.name.includes("_dynamic_modal")) {
            cur = cur.$parent;
          }
          cur.$emit("closed", val);
        }
      }
    });

    vueInstance.component("modaltemplate", modaltemplate);
  }
}
