(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ff27040"],{"13d5":function(t,e,a){"use strict";var r=a("23e7"),n=a("d58f").left,s=a("a640"),i=a("2d00"),l=a("605d"),u=!l&&i>79&&i<83,o=u||!s("reduce");r({target:"Array",proto:!0,forced:o},{reduce:function(t){var e=arguments.length;return n(this,t,e,e>1?arguments[1]:void 0)}})},"1e04":function(t,e,a){},"742b":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-card",{staticStyle:{margin:"20px 0px"}},[a("CategorySelect",{attrs:{show:0!=t.scene},on:{getCategoryId:t.getCategoryId}})],1),a("el-card",[a("div",{directives:[{name:"show",rawName:"v-show",value:0==t.scene,expression:"scene == 0"}]},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus",disabled:!t.category3Id},on:{click:t.addSpu}},[t._v("添加SPU")]),a("el-table",{staticStyle:{width:"100%"},attrs:{border:"",data:t.records}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"80",align:"center"}}),a("el-table-column",{attrs:{prop:"spuName",label:"SPU名称",width:"width"}}),a("el-table-column",{attrs:{prop:"description",label:"SPU描述",width:"width"}}),a("el-table-column",{attrs:{prop:"prop",label:"操作",width:"width"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;e.$index;return[a("hint-button",{attrs:{type:"success",icon:"el-icon-plus",size:"mini",title:"添加sku"},on:{click:function(e){return t.addSku(r)}}}),a("hint-button",{attrs:{type:"warning",icon:"el-icon-edit",size:"mini",title:"修改spu"},on:{click:function(e){return t.updateSpu(r)}}}),a("hint-button",{attrs:{type:"info",icon:"el-icon-info",size:"mini",title:"查看当前spu全部sku列表"},on:{click:function(e){return t.handler(r)}}}),a("el-popconfirm",{attrs:{title:"这是一段内容确定删除吗？"},on:{onConfirm:function(e){return t.deleteSpu(r)}}},[a("hint-button",{attrs:{slot:"reference",type:"danger",icon:"el-icon-delete",size:"mini",title:"删除spu"},slot:"reference"})],1)]}}])})],1),a("el-pagination",{staticStyle:{"text-align":"center"},attrs:{"current-page":t.page,"page-sizes":[3,5,10],"page-size":t.limit,layout:"prev, pager, next, jumper,->, sizes,total",total:t.total},on:{"current-change":t.getSpuList,"size-change":t.handleSizeChange}})],1),a("SpuForm",{directives:[{name:"show",rawName:"v-show",value:1==t.scene,expression:"scene == 1"}],ref:"spu",on:{changeScene:t.changeScene}}),a("SkuForm",{directives:[{name:"show",rawName:"v-show",value:2==t.scene,expression:"scene == 2"}],ref:"sku",on:{changeScenes:t.changeScenes}})],1),a("el-dialog",{attrs:{title:t.spu.spuName+"的sku列表",visible:t.dialogTableVisible,"before-close":t.close},on:{"update:visible":function(e){t.dialogTableVisible=e}}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.skuList,border:""}},[a("el-table-column",{attrs:{prop:"skuName",label:"名称",width:"width"}}),a("el-table-column",{attrs:{prop:"price",label:"价格",width:"width"}}),a("el-table-column",{attrs:{prop:"weight",label:"重量",width:"width"}}),a("el-table-column",{attrs:{label:"默认图片",width:"width"},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.row;t.$index;return[a("img",{staticStyle:{width:"100px",height:"100px"},attrs:{src:e.skuDefaultImg,alt:""}})]}}])})],1)],1)],1)},n=[],s=a("c7eb"),i=a("1da1"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-form",{ref:"form",attrs:{"label-width":"80px",model:t.spu}},[a("el-form-item",{attrs:{label:"SPU名称"}},[a("el-input",{attrs:{placeholder:"SPU名称"},model:{value:t.spu.spuName,callback:function(e){t.$set(t.spu,"spuName",e)},expression:"spu.spuName"}})],1),a("el-form-item",{attrs:{label:"品牌"}},[a("el-select",{attrs:{placeholder:"请选择品牌"},model:{value:t.spu.tmId,callback:function(e){t.$set(t.spu,"tmId",e)},expression:"spu.tmId"}},t._l(t.tradeMarkList,(function(t,e){return a("el-option",{key:t.id,attrs:{label:t.tmName,value:t.id}})})),1)],1),a("el-form-item",{attrs:{label:"SPU描述"}},[a("el-input",{attrs:{type:"textarea",rows:"4",placeholder:"描述"},model:{value:t.spu.description,callback:function(e){t.$set(t.spu,"description",e)},expression:"spu.description"}})],1),a("el-form-item",{attrs:{label:"SPU图片"}},[a("el-upload",{attrs:{action:"/dev-api/admin/product/fileUpload","list-type":"picture-card","on-preview":t.handlePictureCardPreview,"on-remove":t.handleRemove,"on-success":t.handlerSuccess,"file-list":t.spuImageList}},[a("i",{staticClass:"el-icon-plus"})]),a("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],1),a("el-form-item",{attrs:{label:"销售属性"}},[a("el-select",{attrs:{placeholder:"还有"+t.unSelectSaleAttr.length+"未选择"},model:{value:t.attrIdAndAttrName,callback:function(e){t.attrIdAndAttrName=e},expression:"attrIdAndAttrName"}},t._l(t.unSelectSaleAttr,(function(t,e){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id+":"+t.name}})})),1),a("el-button",{attrs:{type:"primary",icon:"el-icon-plus",disabled:!t.attrIdAndAttrName},on:{click:t.addSaleAttr}},[t._v("添加销售属性")]),a("el-table",{staticStyle:{width:"100%"},attrs:{border:"",data:t.spu.spuSaleAttrList}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"80px",align:"center"}}),a("el-table-column",{attrs:{prop:"saleAttrName",label:"属性名",width:"width"}}),a("el-table-column",{attrs:{prop:"prop",label:"属性值名称列表",width:"width"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;e.$index;return[t._l(r.spuSaleAttrValueList,(function(e,n){return a("el-tag",{key:e.id,attrs:{closable:"","disable-transitions":!1},on:{close:function(t){return r.spuSaleAttrValueList.splice(n,1)}}},[t._v(t._s(e.saleAttrValueName))])})),r.inputVisible?a("el-input",{ref:"saveTagInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:function(e){return t.handleInputConfirm(r)}},model:{value:r.inputValue,callback:function(e){t.$set(r,"inputValue",e)},expression:"row.inputValue"}}):a("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:function(e){return t.addSaleAttrValue(r)}}},[t._v("添加")])]}}])}),a("el-table-column",{attrs:{prop:"prop",label:"操作",width:"width"},scopedSlots:t._u([{key:"default",fn:function(e){e.row;var r=e.$index;return[a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(e){return t.spu.spuSaleAttrList.splice(r,1)}}})]}}])})],1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.addOrUpdateSpu}},[t._v("保存")]),a("el-button",{on:{click:t.cancel}},[t._v("取消")])],1)],1)],1)},u=[];function o(t){if(Array.isArray(t))return t}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("14d9");function c(t,e){var a=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=a){var r,n,s,i,l=[],u=!0,o=!1;try{if(s=(a=a.call(t)).next,0===e){if(Object(a)!==a)return;u=!1}else for(;!(u=(r=s.call(a)).done)&&(l.push(r.value),l.length!==e);u=!0);}catch(c){o=!0,n=c}finally{try{if(!u&&null!=a["return"]&&(i=a["return"](),Object(i)!==i))return}finally{if(o)throw n}}return l}}a("fb6a"),a("b0c0"),a("a630"),a("ac1f"),a("00b4");function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}function p(t,e){if(t){if("string"===typeof t)return d(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?d(t,e):void 0}}a("d9e2");function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(t,e){return o(t)||c(t,e)||p(t,e)||f()}a("4de4"),a("159b"),a("498a"),a("d81d");var h={name:"",data:function(){return{dialogImageUrl:"",dialogVisible:!1,spu:{category3Id:0,description:"",spuName:"",tmId:"",spuImageList:[],spuSaleAttrList:[]},tradeMarkList:[],spuImageList:[],saleAttrList:[],attrIdAndAttrName:""}},computed:{unSelectSaleAttr:function(){var t=this,e=this.saleAttrList.filter((function(e){return t.spu.spuSaleAttrList.every((function(t){return e.name!=t.saleAttrName}))}));return e}},methods:{handleRemove:function(t,e){this.spuImageList=e},handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},initSpuData:function(t){var e=this;return Object(i["a"])(Object(s["a"])().mark((function a(){var r,n,i,l,u;return Object(s["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$API.spu.reqSpu(t.id);case 2:return r=a.sent,200==r.code&&(e.spu=r.data),a.next=6,e.$API.spu.reqTradeMarkList();case 6:return n=a.sent,200==n.code&&(e.tradeMarkList=n.data),a.next=10,e.$API.spu.reqSpuImageList(t.id);case 10:return i=a.sent,200==i.code&&(l=i.data,l.forEach((function(t){t.name=t.imgName,t.url=t.imgUrl})),e.spuImageList=l),a.next=14,e.$API.spu.reqBaseSaleAttrList();case 14:u=a.sent,200==u.code&&(e.saleAttrList=u.data);case 16:case"end":return a.stop()}}),a)})))()},handlerSuccess:function(t,e,a){this.spuImageList=a},addSaleAttr:function(){var t=this.attrIdAndAttrName.split(":"),e=m(t,2),a=e[0],r=e[1],n={baseSaleAttrId:a,saleAttrName:r,spuSaleAttrValueList:[]};this.spu.spuSaleAttrList.push(n),this.attrIdAndAttrName=""},addSaleAttrValue:function(t){this.$set(t,"inputVisible",!0),this.$set(t,"inputValue","")},handleInputConfirm:function(t){var e=t.baseSaleAttrId,a=t.inputValue;if(""!=a.trim()){var r=t.spuSaleAttrValueList.every((function(t){return t.saleAttrValueName!=a}));if(r){var n={baseSaleAttrId:e,saleAttrValueName:a};t.spuSaleAttrValueList.push(n),t.inputVisible=!1}}else this.$message("属性值不能为空")},addOrUpdateSpu:function(){var t=this;return Object(i["a"])(Object(s["a"])().mark((function e(){var a;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.spu.spuImageList=t.spuImageList.map((function(t){return{imageName:t.name,imageUrl:t.response&&t.response.data||t.url}})),e.next=3,t.$API.spu.reqAddOrUpdateSpu(t.spu);case 3:a=e.sent,200==a.code&&(t.$message({type:"success",message:"保存成功"}),t.$emit("changeScene",{scene:0,flag:t.spu.id?"修改":"添加"})),Object.assign(t._data,t.$options.data());case 6:case"end":return e.stop()}}),e)})))()},addSpuData:function(t){var e=this;return Object(i["a"])(Object(s["a"])().mark((function a(){var r,n;return Object(s["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.spu.category3Id=t,a.next=3,e.$API.spu.reqTradeMarkList();case 3:return r=a.sent,200==r.code&&(e.tradeMarkList=r.data),a.next=7,e.$API.spu.reqBaseSaleAttrList();case 7:n=a.sent,200==n.code&&(e.saleAttrList=n.data);case 9:case"end":return a.stop()}}),a)})))()},cancel:function(){this.$emit("changeScene",{scene:0,flag:""}),Object.assign(this._data,this.$options.data())}}},b=h,g=(a("9922"),a("2877")),I=Object(g["a"])(b,l,u,!1,null,null,null),v=I.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-form",{ref:"form",attrs:{"label-width":"80px"}},[a("el-form-item",{attrs:{label:"SPU名称"}},[t._v(t._s(t.spu.spuName))]),a("el-form-item",{attrs:{label:"SKU名称"}},[a("el-input",{attrs:{placeholder:"sku名称"},model:{value:t.skuInfo.skuName,callback:function(e){t.$set(t.skuInfo,"skuName",e)},expression:"skuInfo.skuName"}})],1),a("el-form-item",{attrs:{label:"价格(元)"}},[a("el-input",{attrs:{placeholder:"价格(元素)",type:"number"},model:{value:t.skuInfo.price,callback:function(e){t.$set(t.skuInfo,"price",e)},expression:"skuInfo.price"}})],1),a("el-form-item",{attrs:{label:"重量(千克)"}},[a("el-input",{attrs:{placeholder:"重量(千克)"},model:{value:t.skuInfo.weight,callback:function(e){t.$set(t.skuInfo,"weight",e)},expression:"skuInfo.weight"}})],1),a("el-form-item",{attrs:{label:"规格描述"}},[a("el-input",{attrs:{type:"textarea",rows:"4"},model:{value:t.skuInfo.skuDesc,callback:function(e){t.$set(t.skuInfo,"skuDesc",e)},expression:"skuInfo.skuDesc"}})],1),a("el-form-item",{attrs:{label:"平台属性"}},[a("el-form",{ref:"form",attrs:{inline:!0,"label-width":"80px"}},t._l(t.attrInfoList,(function(e,r){return a("el-form-item",{key:e.id,attrs:{label:e.attrName}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.attrIdAndValueId,callback:function(a){t.$set(e,"attrIdAndValueId",a)},expression:"attr.attrIdAndValueId"}},t._l(e.attrValueList,(function(t,r){return a("el-option",{key:t.id,attrs:{label:t.valueName,value:e.id+":"+t.id}})})),1)],1)})),1)],1),a("el-form-item",{attrs:{label:"销售属性"}},[a("el-form",{ref:"form",attrs:{inline:!0,"label-width":"80px"}},t._l(t.spuSaleAttrList,(function(e,r){return a("el-form-item",{key:e.id,attrs:{label:e.saleAttrName}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.attrIdAndValueId,callback:function(a){t.$set(e,"attrIdAndValueId",a)},expression:"saleAttr.attrIdAndValueId"}},t._l(e.spuSaleAttrValueList,(function(t,r){return a("el-option",{key:t.id,attrs:{label:t.saleAttrValueName,value:e.id+":"+t.id}})})),1)],1)})),1)],1),a("el-form-item",{attrs:{label:"图片列表"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{border:"",data:t.spuImageList},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",prop:"prop",width:"80"}}),a("el-table-column",{attrs:{prop:"prop",label:"图片",width:"width"},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.row;t.$index;return[a("img",{staticStyle:{width:"100px",height:"100px"},attrs:{src:e.imgUrl}})]}}])}),a("el-table-column",{attrs:{prop:"imgName",label:"名称",width:"width"}}),a("el-table-column",{attrs:{prop:"prop",label:"操作",width:"width"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;e.$index;return[0==r.isDefault?a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.changeDefault(r)}}},[t._v("设置默认")]):a("el-button",[t._v("默认")])]}}])})],1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.save}},[t._v("保存")]),a("el-button",{on:{click:t.cancel}},[t._v("取消")])],1)],1)],1)},w=[],k=(a("13d5"),{name:"",data:function(){return{spuImageList:[],spuSaleAttrList:[],attrInfoList:[],skuInfo:{category3Id:0,spuId:0,tmId:0,skuName:"",price:0,weight:"",skuDesc:"",skuDefaultImg:"",skuImageList:[],skuAttrValueList:[],skuSaleAttrValueList:[]},spu:{},imageList:[]}},methods:{getData:function(t,e,a){var r=this;return Object(i["a"])(Object(s["a"])().mark((function n(){var i,l,u,o;return Object(s["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r.skuInfo.category3Id=a.category3Id,r.skuInfo.spuId=a.id,r.skuInfo.tmId=a.tmId,r.spu=a,n.next=6,r.$API.spu.reqSpuImageLIst(a.id);case 6:return i=n.sent,200==i.code&&(l=i.data,l.forEach((function(t){t.isDefault=0})),r.spuImageList=l),n.next=10,r.$API.spu.reqSpuSaleAttrList(a.id);case 10:return u=n.sent,200==u.code&&(r.spuSaleAttrList=u.data),n.next=14,r.$API.spu.reqAttrInfoList(t,e,a.category3Id);case 14:o=n.sent,200==o.code&&(r.attrInfoList=o.data);case 16:case"end":return n.stop()}}),n)})))()},handleSelectionChange:function(t){this.imageList=t},changeDefault:function(t){this.spuImageList.forEach((function(t){t.isDefault=0})),t.isDefault=1,this.skuInfo.skuDefaultImg=t.imgUrl},cancel:function(){this.$emit("changeScenes",0),Object.assign(this._data,this.$options.data())},save:function(){var t=this;return Object(i["a"])(Object(s["a"])().mark((function e(){var a,r,n,i,l;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.attrInfoList,r=t.skuInfo,n=t.spuSaleAttrList,i=t.imageList,r.skuAttrValueList=a.reduce((function(t,e){if(e.attrIdAndValueId){var a=e.attrIdAndValueId.split(":"),r=m(a,2),n=r[0],s=r[1];t.push({attrId:n,valueId:s})}return t}),[]),r.skuSaleAttrValueList=n.reduce((function(t,e){if(e.attrIdAndValueId){var a=e.attrIdAndValueId.split(":"),r=m(a,2),n=r[0],s=r[1];t.push({saleAttrId:n,saleAttrValueId:s})}return t}),[]),r.skuImageList=i.map((function(t){return{imgName:t.imgName,imgUrl:t.imgUrl,isDefault:t.isDefault,spuImgId:t.id}})),e.next=6,t.$API.spu.reqAddSku(r);case 6:l=e.sent,200==l.code&&(t.$message({type:"success",message:"添加SKU成功"}),t.$emit("changeScenes",0));case 8:case"end":return e.stop()}}),e)})))()}}}),y=k,A=Object(g["a"])(y,S,w,!1,null,"0bf8ea75",null),L=A.exports,x={name:"Spu",components:{SpuForm:v,SkuForm:L},data:function(){return{category1Id:"",category2Id:"",category3Id:"",page:1,limit:3,records:[],total:0,scene:0,dialogTableVisible:!1,spu:{},skuList:[],loading:!0}},methods:{getCategoryId:function(t){var e=t.categoryId,a=t.level;1==a?(this.category1Id=e,this.category2Id="",this.category3Id=""):2==a?(this.category2Id=e,this.category3Id=""):(this.category3Id=e,this.getSpuList())},getSpuList:function(){var t=arguments,e=this;return Object(i["a"])(Object(s["a"])().mark((function a(){var r,n,i,l,u;return Object(s["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t.length>0&&void 0!==t[0]?t[0]:1,e.page=r,n=e.page,i=e.limit,l=e.category3Id,a.next=5,e.$API.spu.reqSpuList(n,i,l);case 5:u=a.sent,200==u.code&&(e.total=u.data.total,e.records=u.data.records);case 7:case"end":return a.stop()}}),a)})))()},handleSizeChange:function(t){this.limit=t,this.getSpuList()},addSpu:function(){this.scene=1,this.$refs.spu.addSpuData(this.category3Id)},updateSpu:function(t){this.scene=1,this.$refs.spu.initSpuData(t)},changeScene:function(t){var e=t.scene,a=t.flag;this.scene=e,"修改"==a?this.getSpuList(this.page):this.getSpuList()},deleteSpu:function(t){var e=this;return Object(i["a"])(Object(s["a"])().mark((function a(){var r;return Object(s["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$API.spu.reqDeleteSpu(t.id);case 2:r=a.sent,200==r.code&&(e.$message({type:"success",message:"删除成功"}),e.getSpuList(e.records.length>1?e.page:e.page-1));case 4:case"end":return a.stop()}}),a)})))()},addSku:function(t){this.scene=2,this.$refs.sku.getData(this.category1Id,this.category2Id,t)},changeScenes:function(t){this.scene=t},handler:function(t){var e=this;return Object(i["a"])(Object(s["a"])().mark((function a(){var r;return Object(s["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.dialogTableVisible=!0,e.spu=t,a.next=4,e.$API.spu.reqSkuList(t.id);case 4:r=a.sent,200==r.code&&(e.skuList=r.data,e.loading=!1);case 6:case"end":return a.stop()}}),a)})))()},close:function(t){this.loading=!0,this.skuList=[],t()}}},$=x,V=Object(g["a"])($,r,n,!1,null,"f4d93812",null);e["default"]=V.exports},9922:function(t,e,a){"use strict";a("1e04")},d58f:function(t,e,a){var r=a("59ed"),n=a("7b0b"),s=a("44ad"),i=a("07fa"),l=TypeError,u=function(t){return function(e,a,u,o){r(a);var c=n(e),d=s(c),p=i(c),f=t?p-1:0,m=t?-1:1;if(u<2)while(1){if(f in d){o=d[f],f+=m;break}if(f+=m,t?f<0:p<=f)throw l("Reduce of empty array with no initial value")}for(;t?f>=0:p>f;f+=m)f in d&&(o=a(o,d[f],f,c));return o}};t.exports={left:u(!1),right:u(!0)}}}]);