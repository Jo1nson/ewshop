import { createRouter, createWebHistory } from 'vue-router'

const Home = import('../views/home/Home')
const Category = import('../views/category/Category')
const Detail = import('../views/detail/Detail')
const Profile = import('../views/profile/Profile')
const ShopCart = import('../views/shopcart/ShopCart')

const routes = [
  {
    path: '/',
    name: 'DefaultHome',
    component: Home,
    meta: {
      title:'图书兄弟'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title:'图书兄弟'
    }
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
    meta: {
      title:'图书兄弟-商品分类'
    }
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
    meta: {
      title:'图书兄弟-商品详情'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title:'图书兄弟-个人中心'
    }
  },
  {
    path: '/shopcart',
    name: 'ShopCart',
    component: ShopCart,
    meta: {
      title:'图书兄弟-购物车'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next)=>{
  next();
  document.title=to.meta.title;
})

export default router
