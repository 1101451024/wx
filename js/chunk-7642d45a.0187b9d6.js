(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7642d45a"],{"3e7b":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"regiest"},[i("div",{staticClass:"weui-cells weui-cells_form mar_top0"},[i("div",{staticClass:"weui-cell ly-cell"},[e._m(0),i("div",{staticClass:"weui-cell__bd weui-cell__primary"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"weui-input",attrs:{id:"usename",type:"text",required:"",name:"username",placeholder:"请输入"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})])]),i("div",{staticClass:"weui-cell ly-cell"},[e._m(1),i("div",{staticClass:"weui-cell__bd weui-cell__primary"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],staticClass:"weui-input",attrs:{id:"registe_phone",type:"tel",placeholder:"请输入"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})])]),i("div",{staticClass:"weui-cell ly-cell2 weui-cell_vcode"},[e._m(2),i("div",{staticClass:"weui-cell__bd"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.coded,expression:"coded"}],staticClass:"weui-input",attrs:{required:"",type:"number"},domProps:{value:e.coded},on:{input:function(t){t.target.composing||(e.coded=t.target.value)}}})]),i("div",{staticClass:"weui-cell__ft"},[i("button",{staticClass:"weui-vcode-btn ly_color",attrs:{disabled:e.codeDisable},on:{click:e.getCode}},[e._v(e._s(e.codeTxt)+"\n                ")])])])]),i("div",{staticClass:"weui-btn-area area"},[i("button",{staticClass:"weui-btn ly-btn_defalut",on:{click:e.regiested}},[e._v("登  录")])])])},l=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"weui-cell__hd"},[i("label",{staticClass:"weui-label ly-label",attrs:{for:"usename"}},[e._v("姓名")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"weui-cell__hd"},[i("label",{staticClass:"weui-label ly-label",attrs:{for:"registe_phone"}},[e._v("手机")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"weui-cell__hd"},[i("label",{staticClass:"weui-label ly-label"},[e._v("验证码")])])}],a=i("025e"),n=i("d722"),c=(i("4d41"),/^1[3|4|5|6|7|8|9][0-9]{9}$/),o={data:function(){return{username:"",phone:"",coded:"",ansyCode:"",codeTxt:"获取验证码",times:60,codeDisable:!1,timer:null}},mounted:function(){a["a"].pushHistory(null,"#/regiest"),window.addEventListener("popstate",function(e){WeixinJSBridge.call("closeWindow")},!1)},methods:{getCode:function(){var e=this,t={telephone:this.phone};c.test(this.phone)?(this.codeDisable=!0,Object(n["B"])(t).then(function(e){console.log(e),e.code}),this.timer=setInterval(function(){e.times--,0!==e.times?e.codeTxt=e.times:(clearInterval(e.timer),e.codeTxt="获取验证码",e.times=60,e.timer=null,e.codeDisable=!1)},1e3)):this.$weui.alert("手机号码格式不正确")},regiested:function(){var e=this,t=this,i={nickname:this.username,telephone:this.phone,verification_code:this.coded};Object(n["v"])(i).then(function(i){if(0===i.code){var s=e.$weui.loading("登录成功");setTimeout(function(){s.hide(),t.$router.push("/home")},600)}else 401===code?(e.$weui.loading("验证已过期"),setTimeout(function(){e.$weui.loading().hide()},800)):e.$weui.alert(i.msg)})}}},u=o,r=(i("d81a"),i("2877")),d=Object(r["a"])(u,s,l,!1,null,"07c0f498",null);t["default"]=d.exports},d81a:function(e,t,i){"use strict";var s=i("e700"),l=i.n(s);l.a},e700:function(e,t,i){}}]);