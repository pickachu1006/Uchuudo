(function(e){function t(t){for(var o,c,u=t[0],i=t[1],s=t[2],d=0,l=[];d<u.length;d++)c=u[d],a[c]&&l.push(a[c][0]),a[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);p&&p(t);while(l.length)l.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},c={app:0},a={app:0},r=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2091e95c":"5f453620","chunk-2d20778a":"2c0ee008","chunk-62d8739c":"e660218a","chunk-7e83bd3e":"180f8277","chunk-bbf6de1e":"30aeb9b1","chunk-c0cf934c":"17209d80","chunk-c173c958":"91d1eae6","chunk-db3d3a1e":"02fc7524","chunk-eee6ac4e":"1d88793b"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-62d8739c":1,"chunk-c0cf934c":1,"chunk-c173c958":1,"chunk-db3d3a1e":1,"chunk-eee6ac4e":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise(function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-2091e95c":"31d6cfe0","chunk-2d20778a":"31d6cfe0","chunk-62d8739c":"9ba65d7f","chunk-7e83bd3e":"31d6cfe0","chunk-bbf6de1e":"31d6cfe0","chunk-c0cf934c":"0e433876","chunk-c173c958":"4818a669","chunk-db3d3a1e":"a7ad054e","chunk-eee6ac4e":"7fbf4906"}[e]+".css",a=i.p+o,r=document.getElementsByTagName("link"),u=0;u<r.length;u++){var s=r[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===o||d===a))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],d=s.getAttribute("data-href");if(d===o||d===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var o=t&&t.target&&t.target.src||a,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.request=o,delete c[e],p.parentNode.removeChild(p),n(r)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){c[e]=0}));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var r=new Promise(function(t,n){o=a[e]=[t,n]});t.push(o[2]=r);var s,d=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e),s=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src,r=new Error("Loading chunk "+e+" failed.\n("+o+": "+c+")");r.type=o,r.request=c,n[1](r)}a[e]=void 0}};var p=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,d.appendChild(l)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/Uchuudo/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1fe9":function(e){e.exports={hello123:"你好-簡",bye123:"再会",car:"cn車 | {count}車"}},3146:function(e){e.exports={hello123:"こんにちは",bye123:"さよなら",car:"cn車 | {count}車"}},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),c=n("bc3a"),a=n.n(c),r=n("a7fe"),u=n.n(r),i=(n("4989"),n("9062")),s=n.n(i),d=(n("e40d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)}),l=[],p={name:"App"},f=p,h=(n("5c0b"),n("2877")),m=Object(h["a"])(f,d,l,!1,null,null,null);m.options.__file="App.vue";var g=m.exports,b=n("8c4f");o["a"].use(b["a"]);var v=new b["a"]({routes:[{path:"*",redirect:"/shop"},{path:"/home",name:"Home",component:function(){return n.e("chunk-62d8739c").then(n.bind(null,"bb51"))}},{path:"/shop",name:"Shop",component:function(){return n.e("chunk-eee6ac4e").then(n.bind(null,"0fa5"))}},{path:"/login",name:"Login",component:function(){return n.e("chunk-c173c958").then(n.bind(null,"a55b"))}},{path:"/admin",name:"Dashboard",component:function(){return n.e("chunk-db3d3a1e").then(n.bind(null,"0c7c"))},children:[{path:"products",name:"Products",component:function(){return n.e("chunk-2091e95c").then(n.bind(null,"e6dc"))},meta:{requiresAuth:!0}},{path:"orderlist",name:"Orderlist",component:function(){return n.e("chunk-7e83bd3e").then(n.bind(null,"f55a"))},meta:{requiresAuth:!0}},{path:"coupon",name:"Coupon",component:function(){return n.e("chunk-bbf6de1e").then(n.bind(null,"e5bd"))},meta:{requiresAuth:!0}}]},{path:"/customer_order",name:"CustomerOrder",component:function(){return n.e("chunk-c0cf934c").then(n.bind(null,"eb70"))}},{path:"/customer_checkout/:orderId",name:"CustomerCheckout",component:function(){return n.e("chunk-2d20778a").then(n.bind(null,"a159"))}}]});o["a"].prototype.$bus=new o["a"];n("a481"),n("c5f6");var k=function(e){var t=Number(e);return"¥".concat(t.toFixed(0).replace(/./g,function(e,t,n){var o=t&&"."!==e&&(n.length-t)%3===0?", ".concat(e).replace(/\s/g,""):e;return o}))},O=n("7bb1"),y=n("f9b0"),A=n.n(y),I=n("2f62"),N=n("1157"),C=n.n(N),L=(n("1c4c"),n("ac6a"),n("5df3"),n("4f7f"),{strict:!0,namespaced:!0,state:{products:[],allproducts:[],categories:[],pagination:{}},mutations:{LOADING:function(e,t){e.isLoading=t},ICONLOADING:function(e,t){e.status.loadingItem=t},PRODUCTS:function(e,t){e.products=t},PAGINATION:function(e,t){e.pagination=t},CATEGORIES:function(e,t){var n=new Set;t.forEach(function(e){n.add(e.category)}),e.categories=Array.from(n)},ALLPRODUCTS:function(e,t){e.allproducts=t}},actions:{getProducts:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n="".concat("https://vue-course-api.hexschool.io","/api/").concat("pika","/products?page=").concat(t);e.commit("LOADING",!0,{root:!0}),a.a.get(n).then(function(t){console.log(t.data),e.commit("LOADING",!1,{root:!0}),e.commit("PRODUCTS",t.data.products),e.commit("PAGINATION",t.data.pagination)})},getAllProducts:function(e){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("pika","/products/all");a.a.get(t).then(function(t){e.commit("CATEGORIES",t.data.products),e.commit("ALLPRODUCTS",t.data.products)})}},getters:{products:function(e){return e.products},allproducts:function(e){return e.allproducts},pagination:function(e){return e.pagination},categories:function(e){return e.categories}}});o["a"].use(I["a"]);var w=new I["a"].Store({strict:!0,state:{cart:{},cartlen:0,isLoading:!1,status:{loadingItem:""}},mutations:{LOADING:function(e,t){e.isLoading=t},ICONLOADING:function(e,t){e.status.loadingItem=t},CART:function(e,t){e.cart=t,e.cartlen=t.carts.length}},actions:{iconLoading:function(e,t){e.commit("ICONLOADING",t)},addtoCart:function(e,t){var n=t.id,o=t.qty,c="".concat("https://vue-course-api.hexschool.io","/api/").concat("pika","/cart"),r={product_id:n,qty:o};e.commit("ICONLOADING",n),a.a.post(c,{data:r}).then(function(t){console.log(t),e.dispatch("getCart"),C()("#productModal").modal("hide"),e.commit("ICONLOADING","")})},getCart:function(e){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("pika","/cart");e.commit("LOADING",!0),a.a.get(t).then(function(t){console.log(t),e.commit("CART",t.data.data),e.commit("LOADING",!1)})},removeCartItem:function(e,t){var n="".concat("https://vue-course-api.hexschool.io","/api/").concat("pika","/cart/").concat(t);e.commit("LOADING",!0),a.a.delete(n).then(function(t){e.dispatch("getCart"),console.log(t),e.commit("LOADING",!1)})}},getters:{cart:function(e){return e.cart}},modules:{productsModules:L}}),T=n("a925");n("3146"),n("1fe9");o["a"].use(u.a,a.a),o["a"].use(O["a"]),o["a"].use(T["a"]),O["a"].Validator.localize("ja",A.a),o["a"].config.productionTip=!1,o["a"].component("Loading",s.a),o["a"].filter("currency",k),a.a.defaults.withCredentials=!0;o["a"].config.productionTip=!1,new o["a"]({router:v,store:w,render:function(e){return e(g)}}).$mount("#app"),v.beforeEach(function(e,t,n){if(e.meta.requiresAuth){var o="".concat("https://vue-course-api.hexschool.io","/api/user/check");a.a.post(o).then(function(e){e.data.success?n():n({path:"/login"})})}else n()})},"5c0b":function(e,t,n){"use strict";var o=n("5e27"),c=n.n(o);c.a},"5e27":function(e,t,n){}});
//# sourceMappingURL=app.250d72b2.js.map