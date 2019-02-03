import Vue from 'vue'
import Router from 'vue-router'
import $ from "jquery";

Vue.use(Router)

export default new Router({
  // linkActiveClass: 'routeract',
  routes: [
    {
      path:'*',
      redirect:'/shop'
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/shop',
      name: 'Shop',
      component: () => import('./views/Shop.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: () => import('./components/Dashboard.vue'),
      children:[
        {
          path: 'products',
          name: 'Products',
          component: () => import('./views/Products.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'orderlist',
          name: 'Orderlist',
          component: () => import('./views/Orderlist.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: 'coupon',
          name: 'Coupon',
          component: () => import('./views/Coupon.vue'),
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: '/customer_order',
      name: 'CustomerOrder',
      component: () => import('./views/CustomerOrder.vue')
    },
    {
      path: '/customer_checkout/:orderId',
      name: 'CustomerCheckout',
      component: () => import('./views/CustomerCheckout.vue')
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    // 如果按瀏覽器的回上頁鍵，則會回到上次瀏覽的捲軸位置
    if (savedPosition) {
      return savedPosition
    //如果是有#的頁面，捲到到指定id位置
    } else if(to.hash){
      const position = {}
      position.selector = to.hash
        if (document.querySelector(to.hash)) {
          position.offset = { y: 79 }
          return position
        }
        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
        return false
    }else{
      //沒有#的頁面，從最頂端開始
      return { x: 0, y: 0 }
    }
    
  }
})

