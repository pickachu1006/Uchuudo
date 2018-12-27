(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2091e95c"],{1799:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item",class:{disabled:!t.pageData.has_pre}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){a.preventDefault(),t.getPage(t.pageData.current_page-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")]),e("span",{staticClass:"sr-only"},[t._v("Previous")])])]),t._l(t.pageData.total_pages,function(a){return e("li",{key:a,staticClass:"page-item",class:{active:t.pageData.current_page===a}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.getPage(a)}}},[t._v(t._s(a))])])}),e("li",{staticClass:"page-item",class:{disabled:!t.pageData.has_next}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){a.preventDefault(),t.getPage(t.pageData.current_page+1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")]),e("span",{staticClass:"sr-only"},[t._v("Next")])])])],2)])])},i=[],o=(e("1157"),e("2f62"),{name:"Pagination",props:{pageData:{type:Object,default:{}}},data:function(){return{}},methods:{getPage:function(t){this.$emit("getPageOut",t)}}}),r=o,c=e("2877"),l=Object(c["a"])(r,s,i,!1,null,null,null);l.options.__file="Pagination.vue";a["a"]=l.exports},2621:function(t,a){a.f=Object.getOwnPropertySymbols},7333:function(t,a,e){"use strict";var s=e("0d58"),i=e("2621"),o=e("52a7"),r=e("4bf8"),c=e("626a"),l=Object.assign;t.exports=!l||e("79e5")(function(){var t={},a={},e=Symbol(),s="abcdefghijklmnopqrst";return t[e]=7,s.split("").forEach(function(t){a[t]=t}),7!=l({},t)[e]||Object.keys(l({},a)).join("")!=s})?function(t,a){var e=r(t),l=arguments.length,n=1,d=i.f,u=o.f;while(l>n){var p,m=c(arguments[n++]),g=d?s(m).concat(d(m)):s(m),v=g.length,f=0;while(v>f)u.call(m,p=g[f++])&&(e[p]=m[p])}return e}:l},e6dc:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("div",{staticClass:"text-right"},[e("button",{staticClass:"btn btn-primary",on:{click:function(a){t.openModal(t.isNew=!0)}}},[t._v("建立新的產品")])]),e("table",{staticClass:"table mt-4"},[t._m(0),e("tbody",t._l(t.products,function(a){return e("tr",{key:a.id},[e("td",[t._v(t._s(a.category))]),e("td",[t._v(t._s(a.title))]),e("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(a.origin_price)))]),e("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(a.price)))]),e("td",[a.is_enabled?e("span",{staticClass:"text-success"},[t._v("啟用")]):e("span",[t._v("未啟用")])]),e("td",[e("div",{staticClass:"btn-group"},[e("button",{staticClass:"btn btn-outline-dark btn-sm",on:{click:function(e){t.openModal(t.isNew=!1,a)}}},[t._v("編輯")]),e("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(e){t.deletModal(a)}}},[t._v("刪除")])])])])}))]),e("pagination",{attrs:{pageData:t.pagination},on:{getPageOut:t.getProducts}}),e("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(1),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"image"}},[t._v("輸入圖片網址")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.imageUrl,expression:"tempProduct.imageUrl"}],staticClass:"form-control",attrs:{type:"text",id:"image",placeholder:"請輸入圖片連結"},domProps:{value:t.tempProduct.imageUrl},on:{input:function(a){a.target.composing||t.$set(t.tempProduct,"imageUrl",a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"customFile"}},[t._v("或 上傳圖片\n                "),t.status.fileUploading?e("i",{staticClass:"fas fa-spinner fa-spin"}):t._e()]),e("input",{ref:"files",staticClass:"form-control",attrs:{type:"file",id:"customFile"},on:{change:t.uploadFile}})]),e("img",{staticClass:"img-fluid",attrs:{img:"https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80",src:t.tempProduct.imageUrl,alt:""}})]),e("div",{staticClass:"col-sm-8"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"title"}},[t._v("標題")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.title,expression:"tempProduct.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入標題"},domProps:{value:t.tempProduct.title},on:{input:function(a){a.target.composing||t.$set(t.tempProduct,"title",a.target.value)}}})]),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"category"}},[t._v("分類")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.category,expression:"tempProduct.category"}],staticClass:"form-control",attrs:{type:"text",id:"category",placeholder:"請輸入分類"},domProps:{value:t.tempProduct.category},on:{input:function(a){a.target.composing||t.$set(t.tempProduct,"category",a.target.value)}}})]),e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"price"}},[t._v("單位")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.unit,expression:"tempProduct.unit"}],staticClass:"form-control",attrs:{type:"unit",id:"unit",placeholder:"請輸入單位"},domProps:{value:t.tempProduct.unit},on:{input:function(a){a.target.composing||t.$set(t.tempProduct,"unit",a.target.value)}}})])]),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"origin_price"}},[t._v("原價")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.origin_price,expression:"tempProduct.origin_price"}],staticClass:"form-control",attrs:{type:"number",id:"origin_price",placeholder:"請輸入原價"},domProps:{value:t.tempProduct.origin_price},on:{input:function(a){a.target.composing||t.$set(t.tempProduct,"origin_price",a.target.value)}}})]),e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"price"}},[t._v("售價")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.price,expression:"tempProduct.price"}],staticClass:"form-control",attrs:{type:"number",id:"price",placeholder:"請輸入售價"},domProps:{value:t.tempProduct.price},on:{input:function(a){a.target.composing||t.$set(t.tempProduct,"price",a.target.value)}}})])]),e("hr"),t._m(2),t._m(3),e("div",{staticClass:"form-group"},[e("div",{staticClass:"form-check"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.is_enabled,expression:"tempProduct.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"is_enabled","true-valu":1,"false-value":0},domProps:{checked:Array.isArray(t.tempProduct.is_enabled)?t._i(t.tempProduct.is_enabled,null)>-1:t.tempProduct.is_enabled},on:{change:function(a){var e=t.tempProduct.is_enabled,s=a.target,i=!!s.checked||0;if(Array.isArray(e)){var o=null,r=t._i(e,o);s.checked?r<0&&t.$set(t.tempProduct,"is_enabled",e.concat([o])):r>-1&&t.$set(t.tempProduct,"is_enabled",e.slice(0,r).concat(e.slice(r+1)))}else t.$set(t.tempProduct,"is_enabled",i)}}}),e("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("\n                  是否啟用\n                ")])])])])])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateProduct}},[t._v("確認")])])])])]),e("div",{staticClass:"modal fade",attrs:{id:"delProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content border-0"},[t._m(4),e("div",{staticClass:"modal-body"},[t._v("\n        是否刪除 "),e("strong",{staticClass:"text-danger"},[t._v(t._s(t.tempProduct.title))]),t._v(" 商品(刪除後將無法恢復)。\n      ")]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.deletOK}},[t._v("確認刪除")])])])])])],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("th",{attrs:{width:"120"}},[t._v("分類")]),e("th",[t._v("產品名稱")]),e("th",{attrs:{width:"100"}},[t._v("原價")]),e("th",{attrs:{width:"100"}},[t._v("售價")]),e("th",{attrs:{width:"120"}},[t._v("是否啟用")]),e("th",{attrs:{width:"120"}},[t._v("編輯")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e("span",[t._v("新增產品")])]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"description"}},[t._v("產品描述")]),e("textarea",{staticClass:"form-control",attrs:{type:"text",id:"description",placeholder:"請輸入產品描述"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"content"}},[t._v("說明內容")]),e("textarea",{staticClass:"form-control",attrs:{type:"text",id:"content",placeholder:"請輸入產品說明內容"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header bg-danger text-white"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e("span",[t._v("刪除產品")])]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],o=(e("f751"),e("cadf"),e("551c"),e("097d"),e("1157")),r=e.n(o),c=e("1799"),l={components:{pagination:c["a"]},data:function(){return{products:[],tempProduct:{},isNew:!0,isLoading:!1,status:{fileUploading:!1},pagination:{}}},methods:{getProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("pika","/admin/products?page=").concat(t),e=this;e.isLoading=!0,this.$http.get(a).then(function(t){console.log(t.data),e.isLoading=!1,e.products=t.data.products,e.pagination=t.data.pagination})},openModal:function(t,a){t?(this.tempProduct={},t=!0):(this.tempProduct=Object.assign({},a),t=!1),r()("#productModal").modal("show")},updateProduct:function(){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("pika","/admin/product"),a="post",e=this;e.isNew||(t="".concat("https://vue-course-api.hexschool.io","/api/").concat("pika","/admin/product/").concat(e.tempProduct.id),a="put"),this.$http[a](t,{data:e.tempProduct}).then(function(t){t.data.success?(r()("#productModal").modal("hide"),e.getProducts()):(r()("#productModal").modal("hide"),e.getProducts(),console.log("新增失敗"))})},deletModal:function(t){this.tempProduct=Object.assign({},t),r()("#delProductModal").modal("show")},deletOK:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("pika","/admin/product/").concat(t.tempProduct.id);this.$http.delete(a,{data:t.tempProduct}).then(function(a){a.data.success?(r()("#delProductModal").modal("hide"),t.getProducts()):(r()("#delProductModal").modal("hide"),t.getProducts(),console.log("刪除失敗"))})},uploadFile:function(){var t=this,a=this,e=this.$refs.files.files[0],s=new FormData;a.status.fileUploading=!0,s.append("file-to-upload",e);var i="".concat("https://vue-course-api.hexschool.io","/api/").concat("pika","/admin/upload");this.$http.post(i,s,{header:{"Content-Type":"multipart/form-data"}}).then(function(e){console.log(e.data),a.status.fileUploading=!1,e.data.success?a.$set(a.tempProduct,"imageUrl",e.data.imageUrl):t.$bus.$emit("message:push",e.data.message,"danger")})}},created:function(){this.getProducts()}},n=l,d=e("2877"),u=Object(d["a"])(n,s,i,!1,null,null,null);u.options.__file="Products.vue";a["default"]=u.exports},f751:function(t,a,e){var s=e("5ca1");s(s.S+s.F,"Object",{assign:e("7333")})}}]);
//# sourceMappingURL=chunk-2091e95c.9459cb18.js.map