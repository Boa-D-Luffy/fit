(function(t){function e(e){for(var n,l,s=e[0],r=e[1],c=e[2],u=0,p=[];u<s.length;u++)l=s[u],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&p.push(o[l][0]),o[l]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,l=1;l<a.length;l++){var r=a[l];0!==o[r]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},o={app:0},i=[];function l(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"16c61696"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=o[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=n);var i,r=document.createElement("script");r.charset="utf-8",r.timeout=120,s.nc&&r.setAttribute("nonce",s.nc),r.src=l(t);var c=new Error;i=function(e){r.onerror=r.onload=null,clearTimeout(u);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",c.name="ChunkLoadError",c.type=n,c.request=i,a[1](c)}o[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:r})}),12e4);r.onerror=r.onload=i,document.head.appendChild(r)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e3ea"),a("450d");var n=a("7bc3"),o=a.n(n),i=(a("672e"),a("101e")),l=a.n(i),s=(a("0c67"),a("299c")),r=a.n(s),c=(a("1951"),a("eedf")),u=a.n(c),d=(a("5e32"),a("6721")),p=a.n(d),m=(a("5466"),a("ecdf")),f=a.n(m),v=(a("38a0"),a("ad41")),b=a.n(v),h=(a("34db"),a("3803")),C=a.n(h),k=(a("8bd8"),a("4cb2")),x=a.n(k),g=(a("ce18"),a("f58e")),w=a.n(g),y=(a("4ca3"),a("443e")),_=a.n(y),z=(a("f4f9"),a("c2cc")),j=a.n(z),O=(a("7a0f"),a("0f6c")),P=a.n(O),E=(a("b84d"),a("c216")),S=a.n(E),N=(a("8f24"),a("76b9")),T=a.n(N),M=(a("bdc7"),a("aa2f")),$=a.n(M),A=(a("de31"),a("c69e")),D=a.n(A),H=(a("a769"),a("5cc3")),L=a.n(H),J=(a("a673"),a("7b31")),q=a.n(J),B=(a("adec"),a("3d2d")),I=a.n(B),R=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("159b"),a("2b0e")),V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("el-container",{staticStyle:{height:"100Vh"}},[a("el-aside",{attrs:{width:"auto"}},[a("el-menu",{staticClass:"el-menu-vertical",attrs:{"background-color":"#3c4253","text-color":"#e7e9ee","active-text-color":"#5fa7f7","default-active":"1",collapse:t.isCollapse}},[a("el-tooltip",{attrs:{effect:"dark",content:"黑龙江省党政机关办公用房管理平台",placement:"right"}},[a("el-menu-item",{staticClass:"logo",attrs:{index:"0"},on:{click:function(e){return t.to("")}}},[a("span",[t._v("办公用房管理平台")])])],1),a("el-menu-item",{attrs:{index:"1"},on:{click:function(e){return t.to("")}}},[a("i",{staticClass:"el-icon-s-home"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("首页")])]),a("el-submenu",{attrs:{index:"2"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-s-operation"}),a("span",[t._v("组织机构")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isCollapse,expression:"isCollapse"}],staticClass:"nav-pop-name"},[t._v("组织机构")]),a("el-menu-item",{staticClass:"pop-nav-icon",attrs:{index:"2-1"},on:{click:function(e){return t.to("about")}}},[a("i",{staticClass:"el-icon-notebook-1"}),t._v(" 区域管理 ")]),a("el-menu-item",{staticClass:"pop-nav-icon",attrs:{index:"2-2"},on:{click:function(e){return t.to("")}}},[a("i",{staticClass:"el-icon-notebook-1"}),t._v(" 单位管理 ")]),a("el-menu-item",{staticClass:"pop-nav-icon",attrs:{index:"2-3"},on:{click:function(e){return t.to("")}}},[a("i",{staticClass:"el-icon-notebook-1"}),t._v(" 账户管理 ")])],2),a("el-submenu",{attrs:{index:"3"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-s-help"}),a("span",[t._v("项目管理")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isCollapse,expression:"isCollapse"}],staticClass:"nav-pop-name"},[t._v("项目管理")]),a("el-menu-item",{staticClass:"pop-nav-icon",attrs:{index:"2-1"},on:{click:function(e){return t.to("")}}},[a("i",{staticClass:"el-icon-notebook-1"}),t._v(" 项目申报 ")]),a("el-menu-item",{staticClass:"pop-nav-icon",attrs:{index:"2-2"},on:{click:function(e){return t.to("")}}},[a("i",{staticClass:"el-icon-notebook-1"}),t._v(" 项目审核 ")]),a("el-menu-item",{staticClass:"pop-nav-icon",attrs:{index:"2-3"},on:{click:function(e){return t.to("")}}},[a("i",{staticClass:"el-icon-notebook-1"}),t._v(" 项目进度 ")])],2),a("el-menu-item",{attrs:{index:"4"},on:{click:function(e){return t.to("")}}},[a("i",{staticClass:"el-icon-s-data"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("数据查询")])]),a("el-menu-item",{attrs:{index:"5"},on:{click:function(e){return t.to("")}}},[a("i",{staticClass:"el-icon-s-grid"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("报表汇总")])]),a("el-menu-item",{attrs:{index:"6"},on:{click:function(e){return t.to("")}}},[a("i",{staticClass:"el-icon-s-cooperation"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("办公区")])]),a("el-menu-item",{attrs:{index:"7"},on:{click:function(e){return t.to("")}}},[a("i",{staticClass:"el-icon-location"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("地图浏览")])]),a("el-menu-item",{attrs:{index:"8"},on:{click:function(e){return t.to("")}}},[a("i",{staticClass:"el-icon-s-marketing"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("图纸管理")])]),a("el-menu-item",{attrs:{index:"9"},on:{click:function(e){return t.to("")}}},[a("i",{staticClass:"el-icon-s-check"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("使用管理")])]),a("el-menu-item",{attrs:{index:"10"},on:{click:function(e){return t.to("")}}},[a("i",{staticClass:"el-icon-s-comment"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("信息发布")])]),a("el-menu-item",{attrs:{index:"11"},on:{click:function(e){return t.to("")}}},[a("i",{staticClass:"el-icon-s-order"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("日志管理")])])],1)],1),a("el-container",[a("el-header",{attrs:{height:"56px"}},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),a("el-breadcrumb-item",[t._v("组织机构")]),a("el-breadcrumb-item",[t._v("区域管理")])],1),a("ul",{staticClass:"tool-bar"},[a("el-tooltip",{attrs:{effect:"dark",content:"CAD图纸控件下载",placement:"bottom"}},[a("li",[a("i",{staticClass:"el-icon-download"})])]),a("el-tooltip",{attrs:{effect:"dark",content:"修改密码",placement:"bottom"}},[a("li",[a("i",{staticClass:"el-icon-lock"})])]),a("el-tooltip",{attrs:{effect:"dark",content:"登出",placement:"bottom"}},[a("li",[a("i",{staticClass:"el-icon-circle-close"})])])],1)],1),a("el-main",[a("div",{staticClass:"nav-collapse-btn",on:{click:function(e){t.isCollapse=!t.isCollapse}}},[a("i",{directives:[{name:"show",rawName:"v-show",value:!t.isCollapse,expression:"!isCollapse"}],staticClass:"el-icon-arrow-left"}),a("i",{directives:[{name:"show",rawName:"v-show",value:t.isCollapse,expression:"isCollapse"}],staticClass:"el-icon-arrow-right"})]),a("router-view")],1),a("el-footer",{staticStyle:{"text-align":"right","font-size":"10px",color:"#747274"},attrs:{height:"20px"}},[t._v("CopyRight 2021 版权所有")])],1)],1)],1)},F=[],G=(a("ac1f"),a("5319"),{name:"Home",data:function(){return{isCollapse:!0}},methods:{to:function(t){this.$router.replace("/"+t)},goBack:function(){console.log("go back")}}}),K=G,Q=a("2877"),U=Object(Q["a"])(K,V,F,!1,null,null,null),W=U.exports,X=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-content"},[a("div",{staticClass:"tree-con"},[a("el-tree",{attrs:{data:t.data,props:t.defaultProps},on:{"node-click":t.handleNodeClick}})],1),a("div",{staticClass:"table-con"},[a("el-divider",{attrs:{"content-position":"left"}},[t._v("省委政法委.直属单位")]),a("el-table",{attrs:{data:t.tableData,stripe:!0}},[a("el-table-column",{attrs:{fixed:"",type:"index",width:"50"}}),a("el-table-column",{attrs:{fixed:"",prop:"name",label:"姓名",width:"100"}}),a("el-table-column",{attrs:{prop:"date",label:"日期",width:"120"}}),a("el-table-column",{attrs:{prop:"province",label:"省份",width:"80"}}),a("el-table-column",{attrs:{prop:"city",label:"市区",width:"100"}}),a("el-table-column",{attrs:{prop:"address",label:"地址"}}),a("el-table-column",{attrs:{prop:"zip",label:"邮编",width:"100"}})],1),a("el-pagination",{attrs:{"page-sizes":[10,20,30,40],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:9}})],1)])},Z=[],tt={name:"Home",data:function(){return{tableData:[{date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-08",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-06",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-07",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333}],data:[{label:"一级 1",children:[{label:"二级 1-1",children:[{label:"三级 1-1-1"}]}]},{label:"一级 2",children:[{label:"二级 2-1",children:[{label:"三级 2-1-1"}]},{label:"二级 2-2",children:[{label:"三级 2-2-1"}]}]},{label:"一级 3",children:[{label:"二级 3-1",children:[{label:"三级 3-1-1"}]},{label:"二级 3-2",children:[{label:"三级 3-2-1"}]}]}],defaultProps:{children:"children",label:"label"}}},methods:{handleNodeClick:function(t){console.log(t)}}},et=tt,at=Object(Q["a"])(et,Y,Z,!1,null,null,null),nt=at.exports;R["default"].use(X["a"]);var ot=[{path:"/",name:"Home",component:nt},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],it=new X["a"]({routes:ot}),lt=it,st=a("2f62");R["default"].use(st["a"]);var rt=new st["a"].Store({state:{},mutations:{},actions:{},modules:{}});a("a9e5");R["default"].prototype.$ELEMENT={size:"small",zIndex:3e3};var ct=[I.a,q.a,L.a,D.a,$.a,T.a,S.a,P.a,j.a,_.a,w.a,x.a,C.a,b.a,f.a,p.a,u.a,r.a,l.a,o.a];ct.forEach((function(t){R["default"].use(t)})),R["default"].config.productionTip=!1,new R["default"]({router:lt,store:rt,render:function(t){return t(W)}}).$mount("#app")},a9e5:function(t,e,a){}});
//# sourceMappingURL=app.0f27879e.js.map