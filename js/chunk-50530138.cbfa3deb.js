(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50530138","chunk-0420cdfe","chunk-0c64fa23"],{1475:function(e,t,i){e.exports=i.p+"img/home_img.96bc2787.png"},1675:function(e,t,i){},"2ffc":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAjCAMAAAA60AOfAAAAsVBMVEUAAAAnpfknpfl6vu0npfl6vu0npfknpfl6vu16vu16vu16vu0npfl6vu0npfknpfknpfl6vu0npfl6vu0npfknpfknpfknpfknpfknpflFrvV6vu16vu16vu0npfl6vu0npfknpfknpfknpfl6vu0npfknpfknpfl6vu16vu16vu0npfl6vu16vu16vu0npfknpfl6vu0npfl6vu0npfl6vu0npfl6vu16vu0npfl6vu0U5gD9AAAAOXRSTlMAGfoMbFHv50D48hTFs1gL2YJa5bmsimUwDwfQl30T7tDBr5OGf3Et08K8Xigd+uDKx5s3Mi7biHaGD3seAAABn0lEQVQ4y62S2VrqQBCEeyZ7BJIYIiSERVCRxV3Psfr9H0wUE3qUkBv/u/qmpr/qhQ5EN5cu3MubiFo597DHO2+zXgOdniLV6wDXLVWhbdpja3xXPru6DYJRcmZaIw+DWgzg5rTDmfIXoWN4bXSE6sD+tDJ3fcvyu8yGuY+eUD30dwFCHu/lmEMZw4MSSsEjSrhb6S5fiVcNEhTQRCP2K+3z7em6AVuVtjg4mdf0hifnYGYYnZ6v2Vvz3jbUMDN5D0V9D+YuWu/MCc0dN9xvfTv3YXU7f8U2Waf3Qbp+37Y5X1Zcs/LpB8rO4l3ef5mtiKyUp6VzZ1lbp5wyl4V0DucaNfMhOclhw+OAnw79FQtA9wfLnPLloK+BhVHoLeWn6quaQT+rQ5pnjZmS5ruUy++3B8RDMhLFeDDML8H+kqIZHidkMnnELCLBf17RjgXiyirMMRZSW1N+I3qFrgIYMTRepS45IZrjgo5xgbmUDq9JQU+OepWGkqPglGxkdJwMtlAFB5Rh0+Dd/KoSY9ngXSImExd5gzeH+7NdMYWWpw/T9zexxpnnVgAAAABJRU5ErkJggg=="},"39ba":function(e,t,i){},4032:function(e,t,i){"use strict";var s=i("39ba"),a=i.n(s);a.a},4577:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.hasData?i("div",{staticClass:"comPosition"},[i("div",{staticClass:"weui-cells mar_top0"},[i("div",{staticClass:"weui-cell ly-cell"},[i("div",{staticClass:"weui-cell__bd weui-cell__primary"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"weui-input",attrs:{id:"usename",type:"text",required:"",name:"username",placeholder:"请输入姓名"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),e._m(0)]),i("div",{staticClass:"weui-cell ly-cell"},[i("div",{staticClass:"weui-cell__bd weui-cell__primary"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],staticClass:"weui-input",attrs:{id:"registe_phone",type:"tel",placeholder:"请输入手机号码"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),e._m(1)]),i("div",{staticClass:"weui-cell weui-cell_vcode"},[i("div",{staticClass:"weui-cell__bd"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.coded,expression:"coded"}],staticClass:"weui-input",attrs:{required:"",type:"number",placeholder:"请输入验证码"},domProps:{value:e.coded},on:{input:function(t){t.target.composing||(e.coded=t.target.value)}}})]),i("div",{staticClass:"weui-cell__ft"},[i("button",{staticClass:"weui-vcode-btn ly_color",attrs:{disabled:e.codeDisable},on:{click:e.getCode}},[e._v("获取验证码")])])])]),i("div",{staticClass:"weui-cells mar_top8"},[i("div",{staticClass:"weui-cell ly-cell weui-cell_access home_message",on:{click:e.getHouse}},[e._m(2),i("span",{staticClass:"weui-cell__ft"})])]),i("div",{staticClass:"weui-btn-area area"},[i("button",{staticClass:"weui-btn ly-btn_defaluts",on:{click:e.revised}},[e._v("修  改")]),i("button",{staticClass:"weui-btn ly-btn_whiter",on:{click:e.reclose}},[e._v("返  回")])])]):e._e()},a=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"weui-cell__ft"},[i("span",{staticClass:"ly-modisy"},[e._v("可修改")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"weui-cell__ft"},[i("span",{staticClass:"ly-modisy"},[e._v("可修改")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"weui-cell__bd weui-cell_primary"},[i("p",[e._v("房屋管理")])])}],n=(i("7f7f"),i("d722")),l=(i("b9ba"),{data:function(){return{updateImg:"",username:this.$store.state.userInfo.username||"",phone:this.$store.state.userInfo.phone||"",coded:"",codeDisable:!1,houseNum:[],hasData:!1}},created:function(){this.init()},mounted:function(){},methods:{init:function(){var e=this;this.$weui.loading(),Object(n["m"])().then(function(t){e.$weui.loading().hide(),0===t.code?(e.houseNum=t.result,e.hasData=!0):e.$weui.alert(t.msg)})},uploadHeader:function(){this.$el.querySelector(".hiddenInput").click()},getCode:function(){var e=this,t=this;Object(n["i"])(this.phone).then(function(i){0===i.code?(console.log(i.msg),e.codeDisable=!0,e.timer=setInterval(function(){t.times--,0!==t.times?t.codeTxt=t.times:(clearInterval(t.timer),t.codeTxt="获取验证码",t.times=60,t.timer=null,t.codeDisable=!1)},1e3)):e.$weui.alert(i.msg)})},canelFile:function(e){var t=this,i=e.target||e.srcElement,s=i.files[0],a=new FileReader;a.onload=function(e){console.log(e);var i=e.target||e.srcElement;t.updateImg=i.result},a.readAsDataURL(s)},reclose:function(){this.$router.go(-1)},revised:function(){var e=this,t={nickname:this.username,telephone:this.phone,verification_code:this.coded};Object(n["h"])(t).then(function(t){0===t.code?(console.log(t),e.$router.push({name:"home",query:{id:2}})):e.$weui.alert(t.msg)})},getHouse:function(){0===this.houseNum.length?this.$router.push({name:"houseReletion",params:{type:"repair"}}):this.$router.push({name:"comHouse",query:{type:"repair"}})}},beforeRouteLeave:function(e,t,i){"comHouse"===e.name&&(e.meta.keepAlive=!0),i()}}),c=l,u=(i("6ec2"),i("2877")),r=Object(u["a"])(c,s,a,!1,null,null,null);t["default"]=r.exports},"52f3":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAApCAMAAABwfJv6AAAAjVBMVEUAAAB6vu16vu16vu16vu16vu0npfl6vu16vu16vu16vu16vu16vu16vu16vu16vu16vu16vu16vu16vu16vu16vu16vu16vu16vu16vu16vu16vu16vu16vu16vu16vu16vu0npfl6vu16vu16vu16vu0npfknpfl6vu0npfl6vu16vu16vu0npfl6vu1XqLnZAAAALXRSTlMA9fnNgQXmQSkkFAjmsZJ5Xlo74tW4rKCacmRJGBDv6+rn0r+XjUpJMeTbxx4/dqswAAABEklEQVQ4y92UWXKCUBAAh00W2VVAEo0al2z0/Y8XkqKiiMT5tj+nuuBNQz05TZoRJie5pPVGzZ7YNDJC0zyUWOQDsenTzcDKHI1obyBMAsUZp/UOjL2vWcZdAJGr2dqrDDio8gQ25nCZW+FSLJ1okape7RI6KjEiEY3oYwQ3v8y1GFOJRlwZeKrfbMlCNKIz40klZsxFJVrUKtHlZaoSI2zRiD7ms0qMKUUjtrHf7l9S25/Yr9Jx3I5578cu9iXe3oBdOpU+GR9yTZCEENpBb/jJUoY4qQVm5Z0neRd7iBsBi79jFdgyhh8bMK9/H/RltrHHWSUz2NitcqCUf3EyC8wyX7ex75EXQBtbgR+v556c+QYjdUb5BSuEnwAAAABJRU5ErkJggg=="},"6ec2":function(e,t,i){"use strict";var s=i("d8c9"),a=i.n(s);a.a},"7f7f":function(e,t,i){var s=i("86cc").f,a=Function.prototype,n=/^\s*function ([^ (]*)/,l="name";l in a||i("9e1e")&&s(a,l,{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(e){return""}}})},"8ff1":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"show",rawName:"v-show",value:e.setHome,expression:"setHome"}],staticClass:"home"},[i("transition",{attrs:{name:"slideRight",appear:""}},[i("keep-alive",[e.$route.meta.keepAlive?i("router-view",{staticStyle:{"animation-duration":"0.4s"}}):e._e()],1)],1),i("div",{staticClass:"weui-cells mar_top0",on:{click:e.getMessage}},[i("div",{staticClass:"weui-cell weui-cell_access home-header_cell pd"},[i("div",{staticClass:"weui-cell__hd home_header__hd"},[i("img",{staticClass:"home_img",attrs:{src:e.headerImg}})]),i("div",{staticClass:"weui-cell__bd"},[i("p",{staticClass:"header_name"},[e._v(e._s(e.name))]),i("p",{staticClass:"header_phone"},[e._v(e._s(e.phone))])]),i("div",{staticClass:"weui-cell__ft"})])]),i("div",{staticClass:"home_link"},[i("div",{staticClass:"weui-panel"},[i("div",{staticClass:"weui-panel__hd"},[i("div",{staticClass:"home_serve"},[i("div",{staticClass:"home_txt"},[e._v(e._s(e.title))]),i("div",{staticClass:"home_examper",on:{click:e.exampertip}},[e._v("说明")])])]),i("div",{staticClass:"weui-panel__bd"},[i("div",{staticClass:"weui-media-box weui-media-box_small-appmsg"},[i("div",{staticClass:"weui-cells"},[i("div",{staticClass:"weui-cell weui-cell_access home_main ly-cell",on:{click:function(t){return e.getRoomMsg("repair")}}},[e._m(0),e._m(1),i("span",{staticClass:"weui-cell__ft"})]),i("div",{staticClass:"weui-cell weui-cell_access home_main ly-cell",on:{click:function(t){return e.getRoomMsg("complaint")}}},[e._m(2),e._m(3),i("span",{staticClass:"weui-cell__ft"})]),i("div",{staticClass:"weui-cell weui-cell_access home_main ly-cell",on:{click:e.getBulletin}},[e._m(4),e._m(5),i("span",{staticClass:"weui-cell__ft"})])])])])]),e.showProperty?i("div",{staticClass:"weui-panel"},[i("div",{staticClass:"weui-panel__hd"},[i("div",{staticClass:"home_serve"},[i("div",{staticClass:"home_txt"},[e._v("某某房地产服务")]),i("div",{staticClass:"home_examper examper_bg",on:{click:e.showManger}},[e._v("管理")])])]),i("div",{staticClass:"weui-panel__bd"},[i("div",{staticClass:"weui-media-box weui-media-box_small-appmsg"},[e.propertyList.length>0?i("div",{staticClass:"weui-cells"},e._l(e.propertyList,function(t,s){return i("div",{key:s,staticClass:"weui-cell weui-cell_access home_main ly-cell",on:{click:function(i){return e.getproId(t.guid,t.name)}}},[e._m(6,!0),i("div",{staticClass:"weui-cell__bd weui-cell_primary"},[i("p",[e._v(e._s(t.name))])]),i("span",{staticClass:"weui-cell__ft"})])}),0):i("div",{staticClass:"weui-cells"},[i("div",{staticClass:"home_tip"},[e._v("请点击右上角“管理”添加服务信息")])])])])]):e._e()])],1)},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"weui-cell__hd"},[s("img",{attrs:{src:i("1475")}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"weui-cell__bd weui-cell_primary"},[i("p",[e._v("房屋报修")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"weui-cell__hd"},[s("img",{attrs:{src:i("2ffc")}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"weui-cell__bd weui-cell_primary"},[i("p",[e._v("咨询投诉")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"weui-cell__hd"},[s("img",{attrs:{src:i("52f3")}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"weui-cell__bd weui-cell_primary"},[i("p",[e._v("信息公告")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"weui-cell__hd"},[s("img",{attrs:{src:i("99e5")}})])}],n=i("4577"),l=i("cbe6"),c=(i("025e"),i("d722")),u=i("b9ba"),r={data:function(){return{headerImg:u,name:"",phone:"",title:"",showProperty:!1,setHome:!1,isBind:!1,propertyList:[]}},components:{HomeMsg:n["default"],ShowManger:l["default"]},created:function(){var e=this;this.init(),Object(c["g"])().then(function(t){0===t.code&&(e.isBind=t.result)})},activated:function(){var e=this;Object(c["g"])().then(function(t){0===t.code&&(e.isBind=t.result)})},methods:{init:function(){var e=this;this.$weui.loading(),Object(c["q"])().then(function(t){if(console.log(t),e.$weui.loading().hide(),0===t.code){e.name=t.result.member_info.nickname;var i=t.result.member_info.telephone;e.changePhone=t.result.member_info.telephone,e.headerImg=t.result.member_info.headimgurl,e.title=t.result.title,e.showProperty=t.result.is_show_property,e.propertyList=t.result.property_list,i=""+i,e.phone=i.substr(0,3)+"****"+i.substr(7),e.setHome=!0;var s={username:t.result.member_info.nickname,phone:t.result.member_info.telephone};e.$store.commit("setUserInfo",s)}})},exampertip:function(){this.$weui.alert("地产公司：负责处理房屋在质保范围内发生的房屋质量问题，及与地产公司有关的咨询投诉。")},getMessage:function(){this.$router.push("/home/message")},getRoomMsg:function(e){"repair"===e?!0===this.isBind?this.$router.push({name:"HouseRepair",query:{type:e}}):this.$router.push({name:"houseReletion",params:{type:e}}):this.$router.push({name:"HouseRepair",query:{type:e}})},getproId:function(e,t){this.$store.commit("setrelationId",e),this.$router.push({name:"Estate",query:{title:t}})},getBulletin:function(){this.$router.push("/home/bulletin")},showManger:function(){this.$router.push("/home/manger")}},watch:{$route:function(e,t){2===this.$route.query.id&&(this.setHome=!1,this.init())}}},o=r,m=(i("bf9c"),i("2877")),d=Object(m["a"])(o,s,a,!1,null,"112fe6d0",null);t["default"]=d.exports},"99e5":function(e,t,i){e.exports=i.p+"img/home_com.572f95eb.png"},b9ba:function(e,t){e.exports="data:image/png;base64,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"},bf9c:function(e,t,i){"use strict";var s=i("1675"),a=i.n(s);a.a},cbe6:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.isData?i("div",{staticClass:"mangers"},[e._m(0),i("div",{staticClass:"checkManger"},e._l(e.mangerData,function(t,s){return i("div",{staticClass:"isManger"},[i("div",{staticClass:"weui-cells__title titles"},[e._v(e._s(t.city))]),i("div",{staticClass:"weui-cells weui-cells_form"},e._l(t.children,function(t,s){return i("div",{staticClass:"weui-cell weui-cell_switch home_main2 ly-cell"},[i("div",{staticClass:"weui-cell__bd"},[i("p",[e._v(e._s(t.name))])]),i("div",{staticClass:"weui-cell__ft"},[i("input",{staticClass:"weui-switch checkSwiper",attrs:{type:"checkbox"},domProps:{checked:t.is_show},on:{change:function(i){return e.checkBtn(t.guid)}}})])])}),0)])}),0),i("div",{staticClass:"weui-btn-area area"},[i("button",{staticClass:"weui-btn ly-btn_defalut",on:{click:e.reClose}},[e._v("确  定")])])]):e._e()},a=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"weui-cells mar_top0"},[i("div",{staticClass:"weui-cell home_main"},[i("p",[e._v("请选择与你相关的物业企业，打开显示按钮即可展示首页物业服务信息栏中，点击获取物业服务。\n                部分物管未入驻，请耐心等候。")])])])}],n=i("d722"),l={data:function(){return{mangerData:[],isData:!1}},created:function(){var e=this;this.$weui.loading(),Object(n["C"])().then(function(t){0===t.code&&(console.log(t),e.mangerData=t.result,e.$weui.loading().hide(),e.isData=!0)})},methods:{reClose:function(){this.$router.push({name:"home",query:{id:2}})},checkBtn:function(e){var t=this,i={relation_guid:e};Object(n["A"])(i).then(function(e){console.log(e),0===e.code||t.$weui.alert(e.msg)})}}},c=l,u=(i("4032"),i("2877")),r=Object(u["a"])(c,s,a,!1,null,"79a8d4a8",null);t["default"]=r.exports},d8c9:function(e,t,i){}}]);