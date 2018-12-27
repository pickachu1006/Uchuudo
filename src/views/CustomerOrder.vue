<template>
  <div>
    <div class="container py-5">
      <div class="row">
        <!-- 購物清單 -->
        <div class="col-md-6">
          <h3 >ショッピングカート</h3>
          <table class="table" v-if="cartlen!==0">
            <thead>
              <th></th>
              <th>品物</th>
              <th>数量</th>
              <th>価格</th>
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
                  <div class="text-success" v-if="item.coupon">クーポン適用濟</div>
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
                <td colspan="3" class="text-right text-success">割引価格</td>
                <td class="text-right text-success">{{ Math.round(cart.final_total) | currency }}</td>
              </tr>
            </tfoot>
          </table>
          <div class="input-group mb-3 input-group-sm" v-if="cartlen!==0">
            <input type="text" class="form-control" placeholder="コードを入力" v-model="coupon_code">
            <div class="input-group-append">
              <button
                class="btn btn-outline-secondary"
                type="button"
                @click.prevent="addCouponCode"
              >クーポン適用</button>
            </div>
          </div>
        </div>
        <!-- 訂單 個人資料-->
        <div class="col-md-6">
          <div class="row justify-content-center">
            <form class="col-md-10" @submit.prevent="creatOrder">
              <h3>配送先</h3>
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
                  placeholder="Emailを入力してください"
                >
                <span class="text-danger" v-if="errors.has('email')">{{errors.first('email')}}</span>
              </div>

              <div class="form-group">
                <label for="username">氏名</label>
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  id="username"
                  :class="{'is-invalid': errors.has('name')}"
                  v-model="form.user.name"
                  v-validate="'required'"
                  placeholder="氏名を入力してください"
                >
                <span class="text-danger" v-if="errors.has('name')">氏名は必須項目です</span>
              </div>

              <div class="form-group">
                <label for="usertel">電話番号</label>
                <input
                  type="tel"
                  class="form-control"
                  name="usertel"
                  id="usertel"
                  :class="{'is-invalid': errors.has('usertel')}"
                  v-validate="'required'"
                  v-model="form.user.tel"
                  placeholder="電話番号を入力してください"
                >
                <span class="text-danger" v-if="errors.has('usertel')">電話番号は必須項目です</span>
              </div>

              <div class="form-group">
                <label for="useraddress">住所</label>
                <input
                  type="address"
                  class="form-control"
                  name="address"
                  id="useraddress"
                  :class="{'is-invalid': errors.has('address')}"
                  v-validate="'required'"
                  v-model="form.user.address"
                  placeholder="住所を入力してください"
                >
                <span class="text-danger" v-if="errors.has('address')">住所は必須項目です</span>
              </div>

              <div class="form-group">
                <label for="useraddress">メッセージ</label>
                <textarea name id class="form-control" cols="30" rows="5" v-model="form.message"></textarea>
              </div>
              <div class="text-right">
                <router-link to="/shop">
                  <button class="btn btn-outline-primary mr-3">ショッピングを続ける</button>
                </router-link>
                <button class="btn btn-warning">注文を確定する</button>
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
import { mapGetters, mapActions } from "vuex";

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
    }
  }
};
</script>
<style lang="sass" scope>

  

</style>