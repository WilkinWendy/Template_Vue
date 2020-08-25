import { RouteConfig } from "vue-router";
import HelloWorld from "../views/HelloWorld.vue";

const routes: RouteConfig[] = [
  {
    path: "/",
    name: "HelloWorld",
    component: HelloWorld
  }
];

export default routes;

export interface RouteMeta {
  title: string;
}
