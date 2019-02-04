<template>
  <div>
    <div class="container py-5">
      <div class="row justify-content-center">
        <form class="col-md-6" @submit.prevent="payOrder">
          <h3>{{$t("CustomerCheckout.orderlist")}}</h3>
          <table class="table">
            <thead>
              <th>{{$t("CustomerOrder.products")}}</th>
              <th width=60>{{$t("Shop.number")}}</th>
              <th>{{$t("CustomerOrder.price")}}</th>
            </thead>
            <tbody>
              <tr v-for="item in order.products" :key="item.id">
                <td class="align-middle">{{ item.product.title }}</td>
                <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                <td class="align-middle text-right">{{ item.final_total | currency}}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2" class="text-right">小計</td>
                <td class="text-right">{{ order.total | currency}}</td>
              </tr>
            </tfoot>
          </table>

          <table class="table">
            <tbody>
              <tr>
                <th width="100">Email</th>
                <td>{{ order.user.email }}</td>
              </tr>
              <tr>
                <th>{{$t("CustomerOrder.name")}}</th>
                <td>{{ order.user.name }}</td>
              </tr>
              <tr>
                <th>{{$t("CustomerOrder.phone")}}</th>
                <td>{{ order.user.tel }}</td>
              </tr>
              <tr>
                <th>{{$t("CustomerOrder.address")}}</th>
                <td>{{ order.user.address }}</td>
              </tr>
              <tr>
                <th>{{$t("CustomerCheckout.paystatus")}}</th>
                <td>
                  <span v-if="!order.is_paid">{{$t("CustomerCheckout.nopay")}}</span>
                  <span v-else class="text-success">{{$t("CustomerCheckout.paid")}}</span>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="text-right">
            <router-link to="/shop">
              <button class="btn btn-outline-primary mr-3">{{$t("CustomerOrder.continueshopping")}}</button>
            </router-link>
            <button class="btn btn-danger" v-if="order.is_paid === false">{{$t("CustomerCheckout.gotopay")}}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      orderId: "",
      order: {
        user: {}
      }
    };
  },
  methods: {
    getOrder() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/order/${vm.orderId}`;
      console.log(url);
      vm.isLoading = true;
      this.$http.get(url).then(response => {
        console.log(response);
        vm.order = response.data.order;
        vm.isLoading = false;
      });
    },
    payOrder() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/pay/${vm.orderId}`;
      vm.isLoading = true;
      this.$http.post(url).then(response => {
        if (response.data.success) {
          vm.getOrder();
        }
        console.log(response);
        vm.isLoading = false;
      });
    }
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  }
};
</script>

