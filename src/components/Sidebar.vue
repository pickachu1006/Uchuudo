<template>
    <div>
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>後台管理員</span>
              <a class="d-flex align-items-center text-muted" href="#">
                <span data-feather="plus-circle"></span>
              </a>
            </h6>
            <ul class="nav flex-column mb-2">
              <li class="nav-item">
                <router-link class="nav-link" to="/admin/products">
                  <span data-feather="file-text"></span>
                  <i class="fas fa-box-open"></i>產品列表
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/admin/orderlist">
                  <span data-feather="file-text"></span>
                  <i class="far fa-list-alt"></i>訂單列表
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/admin/coupon">
                  <span data-feather="file-text"></span>
                  <i class="fas fa-money-bill-alt"></i>優惠券
                </router-link>
              </li>
              <li class="nav-item">
                <a  class="nav-link" href="#" @click.prevent="signout">
                  <span data-feather="file-text"></span>
                  登出
                </a>
              </li>
            </ul>
            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>前台</span>
              <a class="d-flex align-items-center text-muted" href="#">
                <span data-feather="plus-circle"></span>
              </a>
            </h6>
            <ul class="nav flex-column mb-2">
              <li class="nav-item">
                <router-link class="nav-link" href="#" to="/shop">
                  <span data-feather="file-text"></span>
                  <i class="fas fa-shopping-cart"></i>回商品頁
                </router-link>
              </li>
               
            </ul>
          </div>
        </nav>
    </div>
</template>

<script>
import $ from 'jquery'

export default {
  data(){
      return{
      }
  },
  methods:{
      signout(){
        const vm = this;
        const url =`${process.env.VUE_APP_APIPATH}/logout`;
        this.$http.post(url).then((response)=>{
          console.log(response.data);
          if(response.data.success){
            vm.$router.push('/login')
          }
        })
        
      }
  },
   
}
</script>
