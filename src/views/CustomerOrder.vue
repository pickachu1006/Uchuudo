<template>
  <div>
    <div class="container py-5">
      <div class="row">
        <!-- 購物清單 -->
        <div class="col-md-6">
          <h3>{{$t("CustomerOrder.cart")}}</h3>
          <table class="table" v-if="cartlen!==0">
            <thead>
              <th></th>
              <th>{{$t("CustomerOrder.products")}}</th>
              <th width=60>{{$t("Shop.number")}}</th>
              <th>{{$t("CustomerOrder.price")}}</th>
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
                  <div class="text-success" v-if="item.coupon">{{$t("CustomerOrder.coupon")}}</div>
                </td>
                <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                <td class="align-middle text-right">{{ Math.round(item.final_total) | currency }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" class="text-right">小計</td>
                <td class="text-right">{{ Math.round(cart.total) | currency }}</td>
              </tr>
              <tr v-if="cart.final_total!==cart.total">
                <td colspan="3" class="text-right text-success">{{$t("CustomerOrder.finalprice")}}</td>
                <td class="text-right text-success">{{ Math.round(cart.final_total) | currency }}</td>
              </tr>
            </tfoot>
          </table>
          <div class="input-group mb-3 input-group-sm" v-if="cartlen!==0">
            <input type="text" class="form-control"  v-model="coupon_code" :placeholder="$t('CustomerOrder.inputcode')">
            <div class="input-group-append">
              <button
                class="btn btn-outline-secondary"
                type="button"
                @click.prevent="addCouponCode"
              >{{$t("CustomerOrder.usecoupon")}}</button>
            </div>
          </div>
          <div class="text-right">
          <router-link  to="/shop">
            <button class="btn btn-outline-primary">{{$t("CustomerOrder.continueshopping")}}</button>
          </router-link>
          </div>
        </div>
        <!-- 訂單 個人資料-->
        <div class="col-md-6">
          <div class="row justify-content-center">
            <form class="col-md-10" @submit.prevent="creatOrder">
              <h3>{{$t("CustomerOrder.receiver")}}</h3>
              <div class="form-group">
                <label for="useremail">Email</label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  id="useremail"
                  v-validate="'required|email'"
                  :class="{'is-invalid': errors.has('email')}"
                  v-model="form.user.email"
                  :placeholder="$t('CustomerOrder.emailplaceholder')"
                >
                <span class="text-danger" v-if="errors.has('email')">{{errors.first('email')}}</span>
              </div>

              <div class="form-group">
                <label for="username">{{$t("CustomerOrder.name")}}</label>
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  id="username"
                  :class="{'is-invalid': errors.has('name')}"
                  v-model="form.user.name"
                  v-validate="'required'"
                  :placeholder="$t('CustomerOrder.nameplaceholder')"
                >
                <span class="text-danger" v-if="errors.has('name')">{{$t("CustomerOrder.pleaseentername")}}</span>
              </div>

              <div class="form-group">
                <label for="usertel">{{$t("CustomerOrder.phone")}}</label>
                <input
                  type="tel"
                  class="form-control"
                  name="usertel"
                  id="usertel"
                  :class="{'is-invalid': errors.has('usertel')}"
                  v-validate="'required'"
                  v-model="form.user.tel"
                  :placeholder="$t('CustomerOrder.phoneplaceholder')"
                >
                <span class="text-danger" v-if="errors.has('usertel')">{{$t("CustomerOrder.pleaseenterphone")}}</span>
              </div>

              <div class="form-group">
                <label for="useraddress">{{$t("CustomerOrder.address")}}</label>
                <input
                  type="address"
                  class="form-control"
                  name="address"
                  id="useraddress"
                  :class="{'is-invalid': errors.has('address')}"
                  v-validate="'required'"
                  v-model="form.user.address"
                  :placeholder="$t('CustomerOrder.addressplaceholder')"
                >
                <span class="text-danger" v-if="errors.has('address')">{{$t("CustomerOrder.pleaseenteraddress")}}</span>
              </div>

              <div class="form-group">
                <label for="useraddress">{{$t("CustomerOrder.message")}}</label>
                <textarea name id class="form-control" cols="30" rows="5" v-model="form.message"></textarea>
              </div>
              <div class="text-right">
                <button class="btn btn-warning">{{$t("CustomerOrder.confirm")}}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import { mapActions } from "vuex";

export default {
  components: {},
  data() {
    return {
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
    ...mapActions(["getCart"]),
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
      this.$http.post(url, { data: coupon }).then(response => {
        console.log(response);
        vm.getCart();
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

  

</style>