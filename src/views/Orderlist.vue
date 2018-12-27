<template>
    <div>
      <loading :active.sync="isLoading"></loading>
        <table class="table mt-4">
            <thead>
                <th width="120">購買時間</th>
                <th width="100">Email</th>
                <th >購買款項</th>
                <th width="100">應付金額</th>
                <th width="120">是否付款</th>
                
            </thead>
            <tbody>
                <tr v-for="(item) in orders" :key="item.id">
                    <td>{{`${new Date(item.create_at*1000).getFullYear()}-
                          ${new Date(item.create_at*1000).getMonth()+1}-
                          ${new Date(item.create_at*1000).getDate()}
                          `}}
                 </td>
                    <td>{{item.user.email}}</td>
                    <td>
                        <tr v-for="i in item.products" :key="i.id" class="table-borderless">
                            <td >{{ i.product.title }}</td>
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
import $ from 'jquery'
import pagination from '@/components/Pagination'

export default {
  components:{
            pagination
        },
  data(){
      return{
          orders:[], //全部資料
          tempOrder:{}, //暫時存取編輯、刪除所選的資料
          isLoading: false, //控制全畫面loading效果
          pagination:{},
      }
  },
  methods:{
      //取得遠端資料
      getorders(page = 1){
        const api =`${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders?page=${page}`;
        const vm = this;
        vm.isLoading = true; //開啟全畫面loading效果
        this.$http.get(api).then((response)=>{
            console.log(response.data)
            vm.isLoading = false; //關閉全畫面loading效果
            vm.orders=response.data.orders
            vm.pagination=response.data.pagination
        })
      }, 
    //   //打開Modal
    //   openModal(item){ 
        
    //         // 將該商品傳入tempOrder，但為避免傳參考，使用ES6物件方法
    //           this.tempOrder = Object.assign({},item);
    //       $('#orderModal').modal('show')
    //   },
    //   //確認鍵
    //   updateOrder(){
    //     const vm = this;
    //     const api =`${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/order/${vm.tempOrder.id}`;
    //     this.$http.put(api,{data:vm.tempOrder}).then((response)=>{
    //             if(response.data.success){
    //                 $('#orderModal').modal('hide');
    //                 vm.getorders();
    //             }else{
    //                 $('#orderModal').modal('hide');
    //                 vm.getorders();
    //                 console.log(response)
    //             }
    //         })
    //   },
      //打開刪除Modal
      // deletModal(item){
      //     this.tempOrder = Object.assign({},item);
      //     $('#delorderModal').modal('show')
      // },
      //確認刪除
      // deletOK(){
      //     const vm = this
      //     let api =`${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders/${vm.tempOrder.id}`;
      //     this.$http.delete(api,{data:vm.tempOrder}).then((response)=>{
      //           if(response.data.success){
      //               $('#delorderModal').modal('hide');
      //               vm.getorders();
      //           }else{
      //               $('#delorderModal').modal('hide');
      //               vm.getorders();
      //               console.log('刪除失敗')
      //           }
      //       })
      // },
      // uploadFile(){
      //   const vm = this;
      //   const uploadedFile = this.$refs.files.files[0];
      //   const formData = new FormData();
      //   vm.status.fileUploading =true;  //開啟loading icon
      //   formData.append('file-to-upload',uploadedFile)
      //   const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`;
      //   this.$http.post(url,formData,{
      //     header:{
      //       'Content-Type':'multipart/form-data'
      //     }
      //   }).then((response)=>{
      //     console.log(response.data)
      //     vm.status.fileUploading =false; //關閉loading icon
      //     if(response.data.success){
      //       // vm.tempOrder.imageUrl = response.data.imageUrl
      //       vm.$set(vm.tempOrder,'imageUrl',response.data.imageUrl)
      //     }else{
      //       this.$bus.$emit('message:push',response.data.message,'danger');
      //     }
      //   })
      // }
  },
  created(){
          this.getorders()
          
      }   
}
</script>
