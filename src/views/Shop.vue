<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <Navbar/>
    <div class="container">
      <Carousel/>
      <div class="row mt-4">
        <div class="col-md-3">
          <!-- 行動版選單 -->
          <select class="custom-select w-100 d-md-none mb-3" id="inputGroupSelect01" v-model="searchText">
            <option  value="" selected>すべて</option>
            <option  
              v-for="item in categories"
              :key="item" :value="item">{{item}}</option>
          </select>
          <!-- 左側選單 -->
          <div class="list-group sticky">
            <a
              href="#"
              class="list-group-item list-group-item-action"
              @click.prevent="searchText = ''"
              :class="{ 'active': searchText === ''}"
            >すべて</a>
            <a
              class="list-group-item list-group-item-action"
              href="#"
              @click.prevent="searchText = item"
              :class="{ 'active': item === searchText}"
              v-for="item in categories"
              :key="item"
            >{{ item }}</a>
          </div>
        </div>
        <div class="col-md-9 mb-4">
          <div class="row">
            <div class="col-md-4 mb-4" v-for="item in filterData" :key="item.id">
              <div class="card border-0 shadow-sm">
                <div class="imgWrap text-center">
                  <img
                    class="productsImg"
                    :src="item.imageUrl"
                    alt
                    style="height:180px"
                    @click.prevent="getProduct(item.id)"
                  >
                </div>
                <div class="card-body">
                  <span class="badge badge-secondary float-right ml-2">{{item.category}}</span>
                  <h5 class="card-title">
                    <a
                      href="#"
                      class="text-dark"
                      @click.prevent="getProduct(item.id)"
                    >{{item.title}}</a>
                  </h5>
                  <p class="card-text">価格</p>
                  <div class="d-flex justify-content-between align-items-baseline">
                    <div class="h5 my-0" v-if="!item.price">{{item.origin_price | currency}}</div>
                    <div
                      class="h6 my-0"
                      v-if="item.price"
                      style="text-decoration: line-through"
                    >{{item.origin_price | currency}}</div>
                    <div class="h5 my-0 text-danger" v-if="item.price">{{item.price | currency}}</div>
                  </div>
                  <small
                    class="d-flex justify-content-end text-danger"
                    v-if="item.price"
                  >OFF: {{item.origin_price - item.price | currency }} ({{ Math.round(((item.origin_price - item.price)/item.origin_price)*100)}}%)</small>
                </div>
                <div class="card-footer d-flex">
                  <button
                    type="button"
                    class="btn btn-outline-secondary btn-sm"
                    @click.prevent="getProduct(item.id)"
                  >
                    <i class="fas fa-spinner fa-spin" v-if="status.loadingItem===item.id"></i>
                    商品を見る
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm ml-auto"
                    @click="addtoCart(item.id)"
                  >
                    <i class="fas fa-spinner fa-spin" v-if="status.loadingItem===item.id"></i>
                    カートに入れる
                  </button>
                </div>
              </div>
            </div>
          </div>
          <pagination :pageData="pagination" @getPageOut="getProducts" v-if="searchText==''"></pagination>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-md" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>{{product.title}}</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img
              img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
              :src="product.imageUrl"
              class="img-fluid"
              alt
            >
            <div class="d-flex justify-content-between align-items-baseline mt-4">
              <div class="h5" v-if="!product.price">{{product.origin_price | currency}}</div>
              <div class="h6" v-if="product.price">参考価格:
                <span style="text-decoration: line-through">{{product.origin_price | currency}}</span>
              </div>
              <div class="h5 text-danger" v-if="product.price">価格: {{product.price | currency}}</div>
            </div>
            <small
              class="d-flex justify-content-end text-danger"
              v-if="product.price"
            >OFF: {{product.origin_price - product.price | currency}} ({{ Math.round(((product.origin_price - product.price)/product.origin_price)*100)}}%)</small>
            <select class="custom-select" id="number"  v-model="counts">
              <option selected value=0>数量</option>
              <option :value="number" v-for="number in 10" :key="number">{{number}} {{product.unit}}</option>
            </select>
          </div>
          <div class="modal-footer">
            <div class="text-muted text-nowrap mr-3"  v-if="counts>=1">
              計
              <strong>{{counts*product.price | currency}}</strong>
            </div>
            <button
              type="button"
              class="btn btn-primary ml-4"
              @click="addtoCart(product.id,counts)"
            >
              <i class="fas fa-spinner fa-spin" v-if="status.loadingItem===product.id"></i>
              カートに入れる
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Alert from "@/components/AlertMessage";
import Carousel from "@/components/Carousel";
import $ from "jquery";
import pagination from "@/components/Pagination";
import { mapGetters, mapActions } from "vuex";
import Footer from "@/components/Footer";

export default {
  components: {
    Navbar,
    Alert,
    pagination,
    Carousel,
    Footer
  },
  data() {
    return {
      coupon_code: "",
      product: {}, //單一筆資料
      counts:0,
      form: {
        user: {
          name: "",
          email: "",
          address: ""
        }
      },
      searchText: ""
    };
  },
  methods: {
    ...mapActions("productsModules", ["getProducts", "getAllProducts"]),

    //開啟單一筆商品資料Modal
    getProduct(id) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/product/${id}`;
      const vm = this;
      vm.$store.dispatch("iconLoading", id);
      // vm.status.loadingItem=id; //開啟icon loading效果
      this.$http.get(url).then(response => {
        console.log(response);
        $("#productModal").modal("show"); //打開Modal
        // vm.status.loadingItem = ''; //關閉icon loading效果
        vm.$store.dispatch("iconLoading", "");
        vm.product = response.data.product;
      });
    },

    //加入購物車
    addtoCart(id, qty = 1) {
      if(this.counts<1){
        alert("数量を選んでください")
        return
      }
      this.$store.dispatch("addtoCart", { id, qty });
    },
    getCart() {
      this.$store.dispatch("getCart");
    },
    removeCartItem(id) {
      this.$store.dispatch("removeCartItem", id);
    },
    addCouponCode() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/coupon`;
      const coupon = {
        code: vm.coupon_code
      };
      //   vm.isLoading=true;
      this.$http.post(url, { data: coupon }).then(response => {
        console.log(response);
        vm.getCart();
        // vm.isLoading=false;
      });
    },
    creatOrder() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/order`;
      const order = vm.form;
      this.$validator.validate().then(result => {
        if (result) {
          this.$http.post(url, { data: order }).then(response => {
            if (response.data.success) {
              console.log("訂單已建立", response);
              vm.$router.push(`/customer_checkout/${response.data.orderId}`);
            }
          });
        } else {
          console.log("欄位不完整");
        }
      });
    }
  },
  created() {
    this.getProducts();
    //   this.$store.productsModules.dispatch('getProducts');
    this.getAllProducts();
    this.getCart();
    //   this.$store.dispatch('getCart');
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
    },
    status() {
      return this.$store.state.status;
    },
    filterData() {
      const vm = this;
      if (vm.searchText) {
        return vm.allproducts.filter(item => {
          const data = item.category
            .toLowerCase()
            .includes(vm.searchText.toLowerCase());
          return data;
        });
      }
      return vm.products;
    },
    ...mapGetters("productsModules", [
      "products",
      "allproducts",
      "categories",
      "pagination"
    ])
  }
};
</script>

<style lang="sass" scope>
@import "src/assets/helpers/grid.sass"

.productsImg:hover
  opacity: 0.7
  cursor: pointer
.card-body a
  text-decoration: none
.card-body:hover
  opacity: 0.7
+iphone6plus-1
  .list-group
    display: none

</style>