(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-412b39f4"],{"0f1b":function(t,e,i){"use strict";var s=i("e505"),n=i.n(s);n.a},2052:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isAdd?s("div",{staticClass:"comPosition"},[s("div",{staticClass:"weui-cells mar_top0"},[t._l(t.houseNum,function(e,n){return s("div",{key:n,staticClass:"weui-cell weui-cell_swiped swiper-item",attrs:{"data-type":t.activeSwipe==n?1:0}},[s("div",{staticClass:"weui-cell__bd"},[s("div",{staticClass:"weui-cell home_main ly-cell"},[s("div",{staticClass:"weui-cell__hd"},[s("div",{attrs:{"data-index":n},on:{click:function(i){return t.deleteItem(e,i)}}},[s("img",{attrs:{src:i("e2cf"),alt:""}})])]),s("div",{staticClass:"weui-cell__bd",on:{click:function(i){return t.checked(e)}}},[s("p",[t._v(t._s(e.content))])]),s("div",{staticClass:"weui-cell__ft"})])])])}),t._m(0),s("div",{staticClass:"weui-cell cleatTop"},[s("div",{staticClass:"weui-cell__bd textAreas"},[s("com-textarea",{ref:"childText",on:{"edit-handler":t.onEditHandler}})],1)])],2),s("div",{staticClass:"weui-btn-area"},[s("button",{staticClass:"weui-btn ly-btn_defalut",on:{click:t.requery}},[t._v("确认")])])]):t._e()},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-cell ly-cell"},[i("div",{staticClass:"tip"},[t._v("可点击按钮删除常用语，如需新填常用语，请在下方录入：")])])}],a=i("4dac"),c=i("6860"),l={data:function(){return{houseNum:[],startX:0,endX:0,activeSwipe:-1,index:0,hasData:!1,type:"",textVal:"",placetxt:"录入你要新增的常用语...",paths:"",isAdd:!1,addNum:0}},components:{ComTextarea:a["a"]},created:function(){this.$parent.isShow=!0;var t=this.$weui.loading();this.init(t),console.log(this.houseNum)},mounted:function(){var t=this;window.addEventListener("popstate",function(e){t.$parent.isShow=!1})},methods:{close:function(){this.$router.go(-1)},init:function(t){var e=this;"wuye"===this.$store.state.staffType?Object(c["J"])().then(function(i){t.hide(),0===i.code?(0===e.addNum?e.houseNum=i.result:e.houseNum.push(i.result[i.result.length-1]),e.isAdd=!0):e.$weui.alert(i.msg)}):Object(c["s"])().then(function(i){t.hide(),0===i.code?(0===e.addNum?e.houseNum=i.result:e.houseNum.push(i.result[i.result.length-1]),e.isAdd=!0):e.$weui.alert(i.msg)})},onEditHandler:function(t){this.textVal=t,console.log(t)},deleteItem:function(t,e){var i=this,s=e.currentTarget.dataset.index;console.log(s),this.$weui.dialog({title:"提示",content:"确认要删除该麽",className:"custom-classname",buttons:[{label:"取消",type:"default",onClick:function(){}},{label:"确定",type:"primary",onClick:function(){var e={common_language_id:t.id},n=i.$weui.loading();"wuye"===i.$store.state.staffType?Object(c["G"])(e).then(function(t){0===t.code&&(n.hide(),i.houseNum.splice(s,1))}):Object(c["q"])(e).then(function(t){0===t.code&&(n.hide(),i.houseNum.splice(s,1))})}}]})},checked:function(t){console.log(t.content),this.$emit("checkText",t),this.close(),this.$parent.isShow=!1},requery:function(){var t=this;this.textVal;if(this.textVal){var e=this.$weui.loading(),i={content:this.textVal};"wuye"===this.$store.state.staffType?Object(c["c"])(i).then(function(i){0===i.code&&(t.addNum++,t.init(e))}):Object(c["k"])(i).then(function(i){0===i.code&&(t.addNum++,t.init(e))})}}}},o=l,u=(i("0f1b"),i("2877")),r=Object(u["a"])(o,s,n,!1,null,"6b0eeba6",null);e["default"]=r.exports},"4dac":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"describe_item"},[i("span",{directives:[{name:"show",rawName:"v-show",value:!t.isDescribe,expression:"!isDescribe"}],staticClass:"describe_placeholder"},[t._v(t._s(t.placeText))]),i("div",{staticClass:"describe_edit",attrs:{contenteditable:"plaintext-only"},domProps:{innerHTML:t._s(t.innerText)},on:{input:t.changeText}})])},n=[],a={data:function(){return{isDescribe:"",innerText:"",placeText:this.$parent.placetxt}},props:["placetxt"],mounted:function(){""!==this.$parent.textVal2&&(this.innerText=this.$parent.textVal2)},methods:{changeText:function(){this.isDescribe=this.$el.lastChild.innerHTML,this.$emit("edit-handler",this.$el.lastChild.innerHTML)}},watch:{value:function(t){this.innerText||(this.innerText=t)}}},c=a,l=(i("b4a6"),i("2877")),o=Object(l["a"])(c,s,n,!1,null,"0116c24e",null);e["a"]=o.exports},"50a2":function(t,e,i){},b4a6:function(t,e,i){"use strict";var s=i("50a2"),n=i.n(s);n.a},e2cf:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAAY1BMVEUAAAD5TF/5TF/5TF/5TF/5TF/5TF/5TF/5TF/5TF/5TF/5TF/5TF/5TF/5TF/5TF/5TF/5TF/5TF/5TF/5TF/5TF/5TF/5TF/5TF/5TF/5TF/5TF/5TF/5TF/5TF/5TF/5TF/QmvqqAAAAIHRSTlMAuyL2Gevk0cmhdm9fPQ3Y0sKzqZGMhX9XTUUwKhQGAYA2k7QAAACeSURBVCjPddFHEoMwEETRxhJREjnHuf8pXcaIIoze9levGtaceIEQgZfMuBsjOkXjJaQx3cSpLTKkh1Aem5xe8v+uIkb1KwOxBmAL+RRuMORg0LhSg8iVIvi+x/J90ATWRBDqw1ICATkEKF2phHIlBelKEoj5EgOQgitif0xzSWPXvkuLQ/IsCU4mu4bM4GLVhQ2FXvGw9F1dd/0C6wusZDf5wYjy/gAAAABJRU5ErkJggg=="},e505:function(t,e,i){}}]);