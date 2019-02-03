<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-primary py-0">
      <router-link class="nav-link logo-router" to="/home">
        <h1>
          <a class="logo" href="#">宇宙堂</a>
        </h1>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/home#realshop" class="nav-link" active-class="routeract">
              <a class="menutext" href="#realshop">店舗情報</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/home#newsArea" class="nav-link" active-class="routeract">
              <a class="menutext" href="#newsArea">お知らせ</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/home#aboutAs" class="nav-link" active-class="routeract">
              <a class="menutext" href="#aboutAs">企業情報</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/shop" class="nav-link" active-class="routeract">
              <a class="menutext" href="#">オンラインショップ</a>
            </router-link>
          </li>
          <li class="nav-item d-md-none">
            <router-link to="/customer_order">
              <a class="nav-link" href="#">
                <i class="fa fa-cart-plus" aria-hidden="true"></i> カートを見る
              </a>
            </router-link>
          </li>
        </ul>
        <!-- 使用者 -->
        <router-link to="/login">
          <button
            class="btn btn-primary user"
            type="button"
            id="UserDropdown"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="fas fa-user text-white fa-2x" aria-hidden="true"></i>
          </button>
        </router-link>
        <!-- <div class="dropdown">
          <button
            class="btn btn-primary user"
            type="button"
            id="UserDropdown"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="fas fa-user text-white fa-2x" aria-hidden="true"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-right p-3" aria-labelledby="UserDropdown">
            <router-link to="/login">
              <a href="#" class="dropdown-item">ログイン</a>
            </router-link>
            <a class="dropdown-item" href="#">新規会員登録</a>
          </div>
        </div>-->
        <!-- 購物車下拉選單 -->
        <div class="dropdown">
          <button
            class="btn btn-primary cart"
            type="button"
            id="CartDropdown"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="fa fa-shopping-cart text-white fa-2x" aria-hidden="true"></i>
            <span class="badge badge-pill badge-danger">{{cartlen}}</span>
          </button>
          <!-- 購物車下拉選單 -->
          <div
            class="dropdown-menu dropdown-menu-right p-3"
            aria-labelledby="CartDropdown"
            style="min-width: 500px;overflow:scroll;height:400px;"
            data-offset="400"
          >
            <h6>カートに追加しました</h6>
            <table class="table table-sm">
              <tbody v-if="cartlen">
                <tr v-for="item in cart.carts" :key="item.id">
                  <td class="align-middle">
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm"
                      @click.prevent="removeCartItem(item.id)"
                    >
                      <i class="far fa-trash-alt"></i>
                    </button>
                  </td>
                  <td class="align-middle">{{ item.product.title }}</td>
                  <td class="align-middle" width="70">{{ item.qty }}{{item.product.unit}}</td>
                  <td class="align-middle text-right" width="70">¥ {{item.total}}</td>
                </tr>
              </tbody>
            </table>
            <router-link to="/customer_order">
              <button class="btn btn-warning btn-block">
                <i class="fa fa-cart-plus" aria-hidden="true"></i> カートを見る
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import $ from "jquery";
import { mapActions } from "vuex";

export default {
  name: "Navbar",
  data() {
    return {};
  },
  methods: {
    ...mapActions(["getCart"]),
    removeCartItem(id) {
      this.$store.dispatch("removeCartItem", id);
    }
  },
  created(){
    this.getCart();
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
    cart() {
      return this.$store.state.cart;
    },
    cartlen() {
      return this.$store.state.cartlen;
    }
  }
};
</script>

<style lang="sass" scope>
@import "src/assets/helpers/grid.sass"

.navbar
    position: fixed
    z-index: 100
    width: 100%
    
.navbar a
  text-decoration: none
h1
  margin: 0px
.logo
  width: 200px
  // height: 54px
  background-image: url(../assets/img/company-logo.png)
  background-size: 90%
  display: block
  text-indent: 101%
  overflow: hidden
  white-space: nowrap
  background-repeat: no-repeat
.logo-router
  padding: 16px 1rem
.navbar-nav .nav-item .nav-link
  color: white
  font-size: 1rem
  padding: 28px 1.5rem
.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus
  background-color: #F49889
.menutext
  color: white
.menutext:hover , .menutext:focus
  background-color: #F49889
  color: white
.routeract
  background-color: #F49889
  color: white
.cart
  position: relative
.btn .badge
  position: absolute
  right: 0.5rem
  top: -0.1rem
+iphone6plus-1
  .navbar
    padding-left: 0px
    padding-right: 0px
  .navbar-toggler
    margin-right: 1rem
  .user
    display: none 
  .cart
    display: none
+pad
  .navbar-nav .dropdown-menu
    position: absolute
    width: 100%
</style>