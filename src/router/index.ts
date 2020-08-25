import Vue from "vue";
import VueRouter, { RouterOptions, Route } from "vue-router";
import routeConfig from "./routeConfig";
import NProgress from "nprogress";

Vue.use(VueRouter);

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const options: RouterOptions = {
  mode: "hash",
  routes: routeConfig
};

export default class GlobalRouter {
  private static _instance: VueRouter;
  private static readonly _router: GlobalRouter = new GlobalRouter();

  static get instance(): VueRouter {
    if (!this._instance) {
      this.init();
    }
    return this._instance;
  }

  private constructor() {}

  static init(): void {
    if (!this._instance) {
      const instance = new VueRouter(options);
      instance.beforeEach(this._router.handleBeforeEach);
      instance.afterEach(this._router.handleAfterEach);
      this._instance = instance;
    }
  }

  private handleBeforeEach(to: Route, from: Route, next: any): any {
    next();
  }

  private handleAfterEach(to: Route, from: Route): any {}
}

export { routeConfig };
