<template>
    <div>
        <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item" :class="{'disabled': !pageData.has_pre}">
            <a class="page-link" href="#" aria-label="Previous"
            @click.prevent="getPage(pageData.current_page-1)">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
            </a>
            </li>
            <li class="page-item" v-for="page in pageData.total_pages" :key="page" 
                :class="{'active': pageData.current_page===page}">
                <a class="page-link" href="#" @click.prevent="getPage(page)" >{{page}}</a>
                </li>
            <li class="page-item" :class="{'disabled': !pageData.has_next}">
            <a class="page-link" href="#" aria-label="Next"
            @click.prevent="getPage(pageData.current_page+1)">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
            </a>
            </li>
        </ul>
        </nav>
    </div>
    
</template>

<script>
import $ from 'jquery'
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'Pagination',
  props:{
      pageData:{
        type:Object,
        default:{}
      }
  },
  data(){
      return{
        
      }
  },
  methods:{
      getPage(page){
          this.$emit('getPageOut',page)
      }
  },

}
</script>
