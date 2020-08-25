import YbLoading from "./index.vue";

export default class {
  static install = (Vue, options) => {
    if (!options || typeof options !== "object") options = [];
    if (!(options instanceof Array)) options = [options];
    options.unshift({});
    options.forEach(({ component, name = "loading", customize } = {}) => {
      Vue.directive(name, {
        bind(el, binding) {
          const { position } = getComputedStyle(el);
          if (position === "" || position === "static")
            el.style.position = "relative";
          const Loading = Vue.extend(YbLoading);
          const instance = new Loading({
            data: {
              show: binding.value,
              component: component ? Vue.extend(component) : null,
              customize
            }
          });
          el.appendChild(instance.$mount().$el);
          el.$instance = instance;
        },
        update(el, binding) {
          el.$instance.show = binding.value;
        },
        unbind(el) {
          if (!el) return;
          el.$instance.$destroy();
          if (el.parentElement) el.parentElement.removeChild(el);
        }
      });
    });
  };
}
