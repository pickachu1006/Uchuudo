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
    // import Navbar from './Navbar'
    // import Carousel from './Carousel'
    import Alert from './AlertMessage'
    // import pagination from './Pagination'

    export default{
        components:{
            Sidebar,
            // Navbar,
            Alert,
            // Carousel
            // pagination
        }
    }
</script>