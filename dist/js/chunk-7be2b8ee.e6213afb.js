(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7be2b8ee"],{"33f1":function(e,t,s){},a0b8:function(e,t,s){"use strict";var a=s("33f1"),n=s.n(a);n.a},a55b:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("form",{staticClass:"form-signin",on:{submit:function(t){return t.preventDefault(),e.signin(t)}}},[s("h1",{staticClass:"h3 mb-3 font-weight-normal text-center"},[e._v("請登入")]),s("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[e._v("Email address")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"Email address",required:"",autofocus:""},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}}),s("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[e._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password",required:""},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),e._m(0),s("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[e._v("Sign in")]),s("p",{staticClass:"mt-5 mb-3 text-muted"},[e._v("© 2017-2018")])])])},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"checkbox mb-3"},[s("label",[s("input",{attrs:{type:"checkbox",value:"remember-me"}}),e._v(" Remember me\n      ")])])}],r={data:function(){return{user:{username:"",password:""}}},methods:{signin:function(){var e="".concat("https://vue-course-api.hexschool.io","/admin/signin"),t=this;this.$http.post(e,t.user).then(function(e){console.log(e),e.data.success&&t.$router.push("/admin/products")})}},created:function(){console.log("".concat("https://vue-course-api.hexschool.io","/admin/signin"))}},o=r,i=(s("a0b8"),s("2877")),u=Object(i["a"])(o,a,n,!1,null,"69c42273",null);u.options.__file="Login.vue";t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-7be2b8ee.e6213afb.js.map