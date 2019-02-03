<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <table class="table mt-4">
      <thead>
        <th width="120">購買時間</th>
        <th width="100">Email</th>
        <th>購買款項</th>
        <th width="100">應付金額</th>
        <th width="120">是否付款</th>
      </thead>
      <tbody>
        <tr v-for="(item) in orders" :key="item.id">
          <td>
            {{`${new Date(item.create_at*1000).getFullYear()}-
            ${new Date(item.create_at*1000).getMonth()+1}-
            ${new Date(item.create_at*1000).getDate()}
            `}}
          </td>
          <td>{{item.user.email}}</td>
          <td>
            <tr v-for="i in item.products" :key="i.id" class="table-borderless">
              <td>{{ i.product.title }}</td>
              <td width="100">{{ i.qty }}/{{ i.product.unit }}</td>
            </tr>
          </td>
          <td class="text-right">{{item.total | currency }}</td>
          <td>
            <span v-if="item.is_paid" class="text-success">已付款</span>
            <span v-else>未付款</span>
          </td>
        </tr>
      </tbody>
    </table>
    <pagination :pageData="pagination" @getPageOut="getorders"></pagination>
  </div>
</template>

<script>
import $ from "jquery";
import pagination from "@/components/Pagination";

export default {
  components: {
    pagination
  },
  data() {
    return {
      orders: [], //全部資料
      tempOrder: {}, //暫時存取編輯、刪除所選的資料
      isLoading: false, //控制全畫面loading效果
      pagination: {}
    };
  },
  methods: {
    //取得遠端資料
    getorders(page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/admin/orders?page=${page}`;
      const vm = this;
      vm.isLoading = true; //開啟全畫面loading效果
      this.$http.get(api).then(response => {
        console.log(response.data);
        vm.isLoading = false; //關閉全畫面loading效果
        vm.orders = response.data.orders;
        vm.pagination = response.data.pagination;
      });
    }
  },
  created() {
    this.getorders();
  }
};
</script>
