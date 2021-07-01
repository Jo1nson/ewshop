import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css';

import {SubmitBar, Stepper , SwipeCell, Checkbox, CheckboxGroup, Field, Form, Tag,Button, Swipe, SwipeItem, Lazyload, Badge, Sidebar, SidebarItem, Collapse, CollapseItem, Tab, Tabs, Card, Image as VanImage} from 'vant'

createApp(App)
  .use(Swipe).use(SwipeItem)
  .use(Lazyload,{
    loading:require('./assets/images/logo.png')
  } )
  .use(Badge)
  .use(Sidebar).use(SidebarItem)
  .use(Collapse).use(CollapseItem)
  .use(Tab).use(Tabs)
  .use(Card)
  .use(VanImage)
  .use(Tag)
  .use(Button)
  .use(Form).use(Field)
  .use(Checkbox).use(CheckboxGroup)
  .use(SwipeCell)
  .use(Stepper)
  .use(SubmitBar)
  .use(store).use(router).mount('#app')



