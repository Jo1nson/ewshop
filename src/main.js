import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css'; // 类似 element ui 框架

import {Grid, GridItem ,Popup,AddressEdit,AddressList,SubmitBar,Stepper,Checkbox, CheckboxGroup,SwipeCell,Field,Form,Tag,Button,Image as VanImage,Card,Tab, Tabs,Swipe, SwipeItem, Lazyload, Badge,Sidebar, SidebarItem,Collapse, CollapseItem} from 'vant';

createApp(App)
  .use(SubmitBar)
  .use(Stepper)
  .use(CheckboxGroup).use(Checkbox)
  .use(Field)
  .use(Form)
  .use(Button)
  .use(Tag)
  .use(VanImage)
  .use(Card)
  .use(Tab).use(Tabs)
  .use(Swipe).use(SwipeItem).use(SwipeCell)
  .use(Lazyload, {
  loading: require('./assets/images/logo.png') // 设置先加载默认图片，请求的图片过来覆盖默认图片
})
  .use(Badge)
  .use(Sidebar).use(SidebarItem)
  .use(Collapse).use(CollapseItem)
  .use(Grid).use(GridItem)
  .use(AddressList)
  .use(AddressEdit)
  .use(Popup)
  .use(store).use(router).mount('#app')



