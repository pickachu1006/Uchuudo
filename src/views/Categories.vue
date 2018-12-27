<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <Navbar/>
    <div class="container">
      <Carousel/>
      <div class="row mt-4">
        <div class="col-md-3">
          
        </div>
        <div class="col-md-9 mb-4">
          <div class="row">
            <div class="col-md-4" v-for="item in products" :key="item.id">
              <div class="card border-0 shadow-sm">
                <div class="imgWrap text-center">
                  <img class="productImg" :src="item.imageUrl" alt style="height:180px">
                </div>
                <!-- <div style="height: 150px; background-size: cover; background-position: top"
                :style="{backgroundImage:`url(${item.imageUrl})`}">-->
                <!-- </div> -->
                <div class="card-body">
                  <span class="badge badge-secondary float-right ml-2">{{item.category}}</span>
                  <h5 class="card-title">
                    <a href="#" class="text-dark">{{item.title}}</a>
                  </h5>
                  <p class="card-text">內容</p>
                  <div class="d-flex justify-content-between align-items-baseline">
                    <div class="h5" v-if="!item.price">{{item.origin_price}}</div>
                    <div class="h5" v-if="item.price">原價 ¥{{item.origin_price}}</div>
                    <div class="h5" v-if="item.price">現在只要 ¥{{item.price}}</div>
                    <!-- <del class="h6">原價 {{item.origin_price}} 元</del>
                    <div class="h5">現在只要 {{item.price}} 元</div>-->
                  </div>
                </div>
                <div class="card-footer d-flex">
                  <button
                    type="button"
                    class="btn btn-outline-secondary btn-sm"
                    @click.prevent="getProduct(item.id)"
                  >
                    <i class="fas fa-spinner fa-spin" v-if="status.loadingItem===item.id"></i>
                    查看更多
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm ml-auto"
                    @click="addtoCart(item.id)"
                  >
                    <i class="fas fa-spinner fa-spin" v-if="status.loadingItem===item.id"></i>
                    加到購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <pagination :pageData="pagination" @getPageOut="getProducts"></pagination>
    </div>
    <table class="table" v-if="cartlen!==0">
      <thead>
        <th></th>
        <th>品名</th>
        <th>數量</th>
        <th>單價</th>
      </thead>
      <tbody>
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
          <td class="align-middle">
            {{ item.product.title }}
            <div class="text-success" v-if="item.coupon">已套用優惠券</div>
          </td>
          <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
          <td class="align-middle text-right">{{ Math.round(item.final_total) }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3" class="text-right">總計</td>
          <td class="text-right">{{ Math.round(cart.total) }}</td>
        </tr>
        <tr v-if="cart.final_total!==cart.total">
          <td colspan="3" class="text-right text-success">折扣價</td>
          <td class="text-right text-success">{{ Math.round(cart.final_total) }}</td>
        </tr>
      </tfoot>
    </table>
    <div class="input-group mb-3 input-group-sm" v-if="cartlen!==0">
      <input type="text" class="form-control" placeholder="請輸入優惠碼" v-model="coupon_code">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" @click.prevent="addCouponCode">套用優惠碼</button>
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
              <div class="h5" v-if="!product.price">{{product.origin_price}}</div>
              <div class="h5" v-if="product.price">原價 ¥{{product.origin_price}}</div>
              <div class="h5" v-if="product.price">現在只要 ¥{{product.price}}</div>
            </div>
            <select class="custom-select" id="number" v-model="product.num">
              <option selected>請選購</option>
              <option :value="num" v-for="num in 10" :key="num">選購 {{num}} {{product.unit}}</option>
            </select>
          </div>
          <div class="modal-footer">
            <div class="text-muted text-nowrap mr-3" v-if="product.num>=1">
              小計
              <strong>{{product.num*product.price}}</strong>
            </div>
            <button
              type="button"
              class="btn btn-primary ml-4"
              @click="addtoCart(product.id,product.num)"
            >
              <i class="fas fa-spinner fa-spin" v-if="status.loadingItem===product.id"></i>
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Navbar from "@/components/Navbar";
import Alert from "@/components/AlertMessage";
import Carousel from "@/components/Carousel";
import $ from "jquery";
import pagination from "@/components/Pagination";
export default {
  components: {
    
    Navbar,
    Alert,
    pagination,
    Carousel
  },
  data() {
    return {
      products: [], //全部資料
      product: {}, //單一筆資料
      isLoading: false, //控制全畫面loading效果
      status: {
        loadingItem: "" //控制loading icon
      },
      pagination: {},
      cart: {},
      cartlen: 0,
      coupon_code: "",
      form: {
        user: {
          name: "",
          email: "",
          address: ""
        }
      }
    };
  },
  methods: {
    //取得遠端資料
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/products?page=${page}`;
      const vm = this;
      vm.isLoading = true; //開啟全畫面loading效果
      this.$http.get(api).then(response => {
        console.log(response.data);
        vm.isLoading = false; //關閉全畫面loading效果
        vm.products = response.data.products;
        vm.pagination = response.data.pagination;
      });
    },
    //開啟單一筆商品資料Modal
    getProduct(id) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/product/${id}`;
      const vm = this;
      vm.status.loadingItem = id; //開啟icon loading效果
      this.$http.get(url).then(response => {
        console.log(response);
        $("#productModal").modal("show"); //打開Modal
        vm.status.loadingItem = ""; //關閉icon loading效果
        vm.product = response.data.product;
      });
    },
    //加入購物車
    addtoCart(id, qty = 1) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/cart`;
      const vm = this;
      const cart = {
        product_id: id,
        qty
      };
      vm.status.loadingItem = id; //開啟icon loading效果
      this.$http.post(url, { data: cart }).then(response => {
        console.log(response);
        vm.getCart();
        $("#productModal").modal("hide"); //關閉Modal
        vm.status.loadingItem = ""; //關閉icon loading效果
      });
    },
    getCart() {
      const url = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/cart`;
      const vm = this;
      vm.isLoading = true; //開啟全畫面loading效果
      this.$http.get(url).then(response => {
        console.log(response);
        vm.cart = response.data.data;
        vm.cartlen = response.data.data.carts.length;
        vm.isLoading = false; //關閉全畫面loading效果
      });
    },
    removeCartItem(id) {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/cart/${id}`;
      vm.isLoading = true;
      this.$http.delete(url).then(response => {
        vm.getCart();
        console.log(response);
        vm.isLoading = false;
      });
    },
    addCouponCode() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/coupon`;
      const coupon = {
        code: vm.coupon_code
      };
      vm.isLoading = true;
      this.$http.post(url, { data: coupon }).then(response => {
        console.log(response);
        vm.getCart();
        vm.isLoading = false;
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
    this.getCart();
  }
};
</script>

<style lang="scss">
.productImg:hover {
  opacity: 0.7;
}
</style>