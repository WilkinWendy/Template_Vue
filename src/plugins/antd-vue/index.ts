import Vue, { PluginObject } from "vue";
import {
  LocaleProvider,
  Layout,
  Input,
  InputNumber,
  Button,
  Switch,
  Radio,
  Checkbox,
  Select,
  Card,
  Form,
  Row,
  Col,
  Modal,
  Table,
  Tabs,
  Icon,
  Badge,
  Popover,
  Dropdown,
  List,
  Avatar,
  Breadcrumb,
  Steps,
  Spin,
  Menu,
  Drawer,
  Tooltip,
  Alert,
  Tag,
  Divider,
  DatePicker,
  TimePicker,
  Upload,
  Progress,
  Skeleton,
  Popconfirm,
  message,
  notification,
  Pagination,
  Empty
} from "ant-design-vue";
import { VueConstructor } from "vue/types/umd";
import "./antd.less";
export default class AntdVuePlugin implements PluginObject<any> {
  install(vueInstance: VueConstructor<Vue>): void {
    vueInstance.use(LocaleProvider);
    vueInstance.use(Layout);
    vueInstance.use(Input);
    vueInstance.use(InputNumber);
    vueInstance.use(Button);
    vueInstance.use(Switch);
    vueInstance.use(Radio);
    vueInstance.use(Checkbox);
    vueInstance.use(Select);
    vueInstance.use(Card);
    vueInstance.use(Form);
    vueInstance.use(Row);
    vueInstance.use(Col);
    vueInstance.use(Modal);
    vueInstance.use(Table);
    vueInstance.use(Tabs);
    vueInstance.use(Icon);
    vueInstance.use(Badge);
    vueInstance.use(Popover);
    vueInstance.use(Dropdown);
    vueInstance.use(List);
    vueInstance.use(Avatar);
    vueInstance.use(Breadcrumb);
    vueInstance.use(Steps);
    vueInstance.use(Spin);
    vueInstance.use(Menu);
    vueInstance.use(Drawer);
    vueInstance.use(Tooltip);
    vueInstance.use(Alert);
    vueInstance.use(Tag);
    vueInstance.use(Divider);
    vueInstance.use(DatePicker);
    vueInstance.use(TimePicker);
    vueInstance.use(Upload);
    vueInstance.use(Progress);
    vueInstance.use(Skeleton);
    vueInstance.use(Popconfirm);
    vueInstance.use(Pagination);
    vueInstance.use(Empty);

    vueInstance.prototype.$confirm = Modal.confirm;
    vueInstance.prototype.$message = message;
    vueInstance.prototype.$notification = notification;
    vueInstance.prototype.$info = Modal.info;
    vueInstance.prototype.$success = Modal.success;
    vueInstance.prototype.$error = Modal.error;
    vueInstance.prototype.$warning = Modal.warning;
  }
}
