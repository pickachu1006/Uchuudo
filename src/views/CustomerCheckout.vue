<template>
  <div>
    <!-- -LUZiqVmBB1peglnfQe9 -->
    <div class="my-5 row justify-content-center">
      <form class="col-md-6" @submit.prevent="payOrder">
        <table class="table">
          <thead>
            <th>品物</th>
            <th>数量</th>
            <th>価格</th>
          </thead>
          <tbody>
            <tr v-for="item in order.products" :key="item.id">
              <td class="align-middle">{{ item.product.title }}</td>
              <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
              <td class="align-middle text-right">{{ item.final_total }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2" class="text-right">小計</td>
              <td class="text-right">{{ order.total }}</td>
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
              <th>氏名</th>
              <td>{{ order.user.name }}</td>
            </tr>
            <tr>
              <th>電話番号</th>
              <td>{{ order.user.tel }}</td>
            </tr>
            <tr>
              <th>住所</th>
              <td>{{ order.user.address }}</td>
            </tr>
            <tr>
              <th>決済結果</th>
              <td>
                <span v-if="!order.is_paid">未決済</span>
                <span v-else class="text-success">決済済み</span>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="text-right">
          <router-link to="/shop">
            <button class="btn btn-outline-primary mr-3">ショッピングを続ける</button>
          </router-link>
          <button class="btn btn-danger" v-if="order.is_paid === false">支払いへ進む</button>
        </div>
      </form>
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
      // https://vue-course-api.hexschool.io/api/pika/order/-LRzpiO9jOaF7zx7M7a8
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