<template>
    <div>
     <Alert/>
    <div class="container-fluid">
      <div class="row">
        <Sidebar/>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <router-view></router-view>
          <!-- <pagination/> -->
        </main>
      </div>
    </div>
    </div>
</template>
<script>
    import Sidebar from './Sidebar'
    import Alert from './AlertMessage'

    export default{
        components:{
            Sidebar,
            Alert,
        }
    }
</script>