// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/less/index.less';
import * as filters from './components/config/filters';
Object.keys(filters).forEach(key => {Vue.filter(key, filters[key])});
Vue.config.productionTip = false;

import {
    Pagination,
    Dialog,
    // Autocomplete,
    // Dropdown,
    // DropdownMenu,
    // DropdownItem,
    // Menu,
    // Submenu,
    // MenuItem,
    // MenuItemGroup,
    Input,
    // InputNumber,
    Radio,
    RadioGroup,
    // RadioButton,
    Checkbox,
    // CheckboxButton,
    CheckboxGroup,
    // Switch,
    Select,
    Option,
    // OptionGroup,
    Button,
    // ButtonGroup,
    Table,
    TableColumn,
    DatePicker,
    // TimeSelect,
    // TimePicker,
    Popover,
    // Tooltip,
    Breadcrumb,
    BreadcrumbItem,
    Form,
    FormItem,
    Tabs,
    TabPane,
    // Tag,
    // Tree,
    Alert,
    Slider,
    Icon,
    Row,
    Col,
    Upload,
    // Progress,
    // Badge,
    // Card,
    // Rate,
    Steps,
    Step,
    Carousel,
    CarouselItem,
    // Collapse,
    // CollapseItem,
    Cascader,
    // ColorPicker,
    Transfer,
    // Container,
    // Header,
    // Aside,
    // Main,
    // Footer,
    // Loading,
    MessageBox,
    Message,
    Notification
  } from 'element-ui';
  
  Vue.use(Pagination);
  Vue.use(Dialog);
//   Vue.use(Autocomplete);
//   Vue.use(Dropdown);
//   Vue.use(DropdownMenu);
//   Vue.use(DropdownItem);
//   Vue.use(Menu);
//   Vue.use(Submenu);
//   Vue.use(MenuItem);
//   Vue.use(MenuItemGroup);
  Vue.use(Input);//输入框
//   Vue.use(InputNumber)
  Vue.use(Radio);//单选按钮

  Vue.use(RadioGroup);//单选按钮组
//   Vue.use(RadioButton);
  Vue.use(Checkbox);//复选框
//   Vue.use(CheckboxButton);
  Vue.use(CheckboxGroup);//复选框组
//   Vue.use(Switch);
  Vue.use(Select);//下拉框
  Vue.use(Option);//下拉菜单
//   Vue.use(OptionGroup);
  Vue.use(Button);//按钮
//   Vue.use(ButtonGroup);
  Vue.use(Table);//表格
  Vue.use(TableColumn);//列表
  Vue.use(DatePicker);//日期选择器
//   Vue.use(TimeSelect);
//   Vue.use(TimePicker);
  Vue.use(Popover);//触摸弹出框
//   Vue.use(Tooltip);
  Vue.use(Breadcrumb);//面包屑导航
  Vue.use(BreadcrumbItem);//面包屑组件
  Vue.use(Form);//form表单
  Vue.use(FormItem);//form表单组件
  Vue.use(Tabs);//标签页
  Vue.use(TabPane);//标签页组件
//   Vue.use(Tag);//tag标签
//   Vue.use(Tree);//树形控件 
  Vue.use(Alert);
  Vue.use(Slider);
  Vue.use(Icon);
  Vue.use(Row);
  Vue.use(Col);
  Vue.use(Upload);//上传控件
//   Vue.use(Progress);//进度条
//   Vue.use(Badge);//标记
//   Vue.use(Card);//卡片
//   Vue.use(Rate);//评分
  Vue.use(Steps);//步骤条
  Vue.use(Step);//步骤条组件
  Vue.use(Carousel);//轮播图
  Vue.use(CarouselItem);//轮播图组件
//   Vue.use(Collapse);//折叠面板
//   Vue.use(CollapseItem);//折叠面板组件
  Vue.use(Cascader);//联级选择器
//   Vue.use(ColorPicker);//颜色选择器
//   Vue.use(Container);//布局容器
//   Vue.use(Header);//容器头部
//   Vue.use(Aside);//容器侧边
//   Vue.use(Main);//容器主体
//   Vue.use(Footer);//容器底部
//   Vue.use(Loading.directive);//指令加载
//   Vue.prototype.$loading = Loading.service;//服务加载    
  Vue.prototype.$msgbox = MessageBox;
  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;
  Vue.prototype.$notify = Notification;
  Vue.prototype.$message = Message;


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})