(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/xunwuqishi/add-or-update"],{"0a3a":function(i,n,e){"use strict";(function(i){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=r(e("a34a"));function r(i){return i&&i.__esModule?i:{default:i}}function u(i,n,e,t,r,u,a){try{var s=i[u](a),o=s.value}catch(c){return void e(c)}s.done?n(o):Promise.resolve(o).then(t,r)}function a(i){return function(){var n=this,e=arguments;return new Promise((function(t,r){var a=i.apply(n,e);function s(i){u(a,t,r,s,o,"next",i)}function o(i){u(a,t,r,s,o,"throw",i)}s(void 0)}))}}var s=function(){Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(function(){return resolve(e("460f"))}.bind(null,e)).catch(e.oe)},o={data:function(){return{ruleForm:{wupinmingcheng:"",tupian:"",wupinleibie:"",diushididian:"",diushishijian:"",yonghuming:"",shizhuxingming:"",lianxifangshi:"",xiangximiaoshu:"",userid:""},user:{},ro:{wupinmingcheng:!1,tupian:!1,wupinleibie:!1,diushididian:!1,diushishijian:!1,yonghuming:!1,shizhuxingming:!1,lianxifangshi:!1,xiangximiaoshu:!1,userid:!1}}},components:{wPicker:s},computed:{},onLoad:function(){var n=a(t.default.mark((function n(e){var r,u,a,s;return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=i.getStorageSync("nowTable"),n.next=3,this.$api.session(r);case 3:if(u=n.sent,this.user=u.data,this.ruleForm.yonghuming=this.user.yonghuming,this.ruleForm.shizhuxingming=this.user.shizhuxingming,this.ruleForm.lianxifangshi=this.user.lianxifangshi,this.ruleForm.userid=i.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=i.getStorageSync("nickname")),!e.id){n.next=16;break}return this.ruleForm.id=e.id,n.next=14,this.$api.info("xunwuqishi",this.ruleForm.id);case 14:u=n.sent,this.ruleForm=u.data;case 16:if(!e.cross){n.next=63;break}a=i.getStorageSync("crossObj"),n.t0=t.default.keys(a);case 19:if((n.t1=n.t0()).done){n.next=63;break}if(s=n.t1.value,"wupinmingcheng"!=s){n.next=25;break}return this.ruleForm.wupinmingcheng=a[s],this.ro.wupinmingcheng=!0,n.abrupt("continue",19);case 25:if("tupian"!=s){n.next=29;break}return this.ruleForm.tupian=a[s],this.ro.tupian=!0,n.abrupt("continue",19);case 29:if("wupinleibie"!=s){n.next=33;break}return this.ruleForm.wupinleibie=a[s],this.ro.wupinleibie=!0,n.abrupt("continue",19);case 33:if("diushididian"!=s){n.next=37;break}return this.ruleForm.diushididian=a[s],this.ro.diushididian=!0,n.abrupt("continue",19);case 37:if("diushishijian"!=s){n.next=41;break}return this.ruleForm.diushishijian=a[s],this.ro.diushishijian=!0,n.abrupt("continue",19);case 41:if("yonghuming"!=s){n.next=45;break}return this.ruleForm.yonghuming=a[s],this.ro.yonghuming=!0,n.abrupt("continue",19);case 45:if("shizhuxingming"!=s){n.next=49;break}return this.ruleForm.shizhuxingming=a[s],this.ro.shizhuxingming=!0,n.abrupt("continue",19);case 49:if("lianxifangshi"!=s){n.next=53;break}return this.ruleForm.lianxifangshi=a[s],this.ro.lianxifangshi=!0,n.abrupt("continue",19);case 53:if("xiangximiaoshu"!=s){n.next=57;break}return this.ruleForm.xiangximiaoshu=a[s],this.ro.xiangximiaoshu=!0,n.abrupt("continue",19);case 57:if("userid"!=s){n.next=61;break}return this.ruleForm.userid=a[s],this.ro.userid=!0,n.abrupt("continue",19);case 61:n.next=19;break;case 63:this.styleChange();case 64:case"end":return n.stop()}}),n,this)})));function e(i){return n.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},diushishijianConfirm:function(i){console.log(i),this.ruleForm.diushishijian=i.result,this.$forceUpdate()},tupianTap:function(){var i=this;this.$api.upload((function(n){i.ruleForm.tupian=i.$base.url+"upload/"+n.file,i.$forceUpdate(),i.$nextTick((function(){i.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var i=a(t.default.mark((function i(){return t.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(this.ruleForm.wupinmingcheng){i.next=3;break}return this.$utils.msg("物品名称不能为空"),i.abrupt("return");case 3:if(this.ruleForm.tupian){i.next=6;break}return this.$utils.msg("图片不能为空"),i.abrupt("return");case 6:if(this.ruleForm.wupinleibie){i.next=9;break}return this.$utils.msg("物品类别不能为空"),i.abrupt("return");case 9:if(this.ruleForm.diushididian){i.next=12;break}return this.$utils.msg("丢失地点不能为空"),i.abrupt("return");case 12:if(this.ruleForm.diushishijian){i.next=15;break}return this.$utils.msg("丢失时间不能为空"),i.abrupt("return");case 15:if(!this.ruleForm.id){i.next=20;break}return i.next=18,this.$api.update("xunwuqishi",this.ruleForm);case 18:i.next=22;break;case 20:return i.next=22,this.$api.add("xunwuqishi",this.ruleForm);case 22:this.$utils.msgBack("提交成功");case 23:case"end":return i.stop()}}),i,this)})));function n(){return i.apply(this,arguments)}return n}(),optionsChange:function(i){this.index=i.target.value},bindDateChange:function(i){this.date=i.target.value},getDate:function(i){var n=new Date,e=n.getFullYear(),t=n.getMonth()+1,r=n.getDate();return"start"===i?e-=60:"end"===i&&(e+=2),t=t>9?t:"0"+t,r=r>9?r:"0"+r,"".concat(e,"-").concat(t,"-").concat(r)},toggleTab:function(i){this.$refs[i].show()}}};n.default=o}).call(this,e("543d")["default"])},"2af8":function(i,n,e){"use strict";var t=e("9456"),r=e.n(t);r.a},"5ba0":function(i,n,e){"use strict";e.r(n);var t=e("0a3a"),r=e.n(t);for(var u in t)"default"!==u&&function(i){e.d(n,i,(function(){return t[i]}))}(u);n["default"]=r.a},6263:function(i,n,e){"use strict";e.r(n);var t=e("dd0a"),r=e("5ba0");for(var u in r)"default"!==u&&function(i){e.d(n,i,(function(){return r[i]}))}(u);e("2af8");var a,s=e("f0c5"),o=Object(s["a"])(r["default"],t["b"],t["c"],!1,null,"eff3b1cc",null,!1,t["a"],a);n["default"]=o.exports},7673:function(i,n,e){"use strict";(function(i){e("4bde"),e("921b");t(e("66fd"));var n=t(e("6263"));function t(i){return i&&i.__esModule?i:{default:i}}i(n.default)}).call(this,e("543d")["createPage"])},9456:function(i,n,e){},dd0a:function(i,n,e){"use strict";var t={"w-picker":function(){return Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(e.bind(null,"460f"))}},r=function(){var i=this,n=i.$createElement;i._self._c},u=[];e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return t}))}},[["7673","common/runtime","common/vendor"]]]);