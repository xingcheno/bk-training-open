(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{241:function(t,e,a){"use strict";var r=a(98);var i=a.n(r);var s=i.a},246:function(t,e,a){"use strict";var r=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"body"},[a("div",{staticClass:"container"},[a("div",{staticClass:"left_container"},[a("bk-select",{staticStyle:{width:"190px",display:"inline-block"},attrs:{"ext-cls":"select-custom","ext-popover-cls":"select-popover-custom",searchable:""},on:{change:function(e){t.changeGroup(t.curGroupId)}},model:{value:t.curGroupId,callback:function(e){t.curGroupId=e},expression:"curGroupId"}},t._l(t.groupsData,function(t){return a("bk-option",{key:t.id,attrs:{id:t.id,name:t.name}})}),1),t._v(" "),a("div",{staticStyle:{"margin-top":"18px"}},[a("div",{staticClass:"users_list"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isLeftContentWork,expression:"isLeftContentWork"}]},t._l(t.groupUsers,function(e){return a("bk-button",{key:e.id,staticClass:"mr10",attrs:{theme:e.id===t.curUserId?"primary":"default","ext-cls":"user-btn",title:e.name},on:{click:function(a){t.changeDateOrUser(e.id,"")}}},[t._v("\n                            "+t._s(e.name)+"\n                        ")])}),1)])]),t._v(" "),a("div",{staticStyle:{clear:"both"}})],1),t._v(" "),a("div",{staticClass:"right_container"},[!t.myTodayReport?a("div",{staticStyle:{"margin-bottom":"10px"}},[a("bk-alert",{attrs:{type:"warning",title:"警告的提示文字"}},[a("bk-link",{attrs:{slot:"title",theme:"warning",href:t.link},slot:"title"},[t._v("您当天未提交日报，可点击链接前往补签")])],1)],1):t._e(),t._v(" "),a("div",{staticClass:"report-tabs"},t._l(t.tabTitleList,function(e,r){return a("div",{key:r,class:{"header-tabs":true,"tabs-active":e===t.activeTabTitle},on:{click:function(a){t.changeTabs(e)}}},[t._v("\n                    "+t._s(e)+"\n                ")])}),0),t._v(" "),t.activeTabTitle===t.tabTitleList[0]?a("div",{staticClass:"all-report-wapper report-wapper"},[a("div",{staticClass:"right-top-bar"},[a("bk-date-picker",{attrs:{behavior:"simplicity",format:"yyyy-MM-dd","ext-cls":"all-date-picker",options:t.customOption,placeholder:"选择日期"},on:{change:function(e){t.changeDateOrUser("",t.changeDate)}},model:{value:t.changeDate,callback:function(e){t.changeDate=e},expression:"changeDate"}})],1),t._v(" "),t.defaultPaging.count===0?a("div",{staticClass:"all-empty"},[t._v("\n                    没有日报内容哟~\n                ")]):a("div",{staticClass:"all-report-body"},t._l(t.dailysData.dailys,function(e,r){return a("bk-card",{key:r,staticClass:"all-report-card card",attrs:{title:e.create_by+"("+e.create_name+")"}},[a("div",{staticClass:"card-header",attrs:{slot:"header",title:e.create_by+"("+e.create_name+")"},slot:"header"},[t._v("\n                            "+t._s(e.create_by+"("+e.create_name+")")+"\n                        ")]),t._v(" "),t._l(e.content,function(r,i){return a("div",{key:i},[a("h5",{staticClass:"sub-title"},[t._v(t._s(r.title))]),t._v(" "),r.type==="table"?a("div",{staticStyle:{"font-size":"14px"}},t._l(r.content,function(r,i){return a("div",{key:i},[a("pre",{staticClass:"card-pre"},[t._v("                                        "),a("div",{staticClass:"content-wapper"},[t._v("\n                                            "),a("span",{staticClass:"time-wapper"},[t._v("\n                                                "),a("bk-tag",{directives:[{name:"show",rawName:"v-show",value:(t.curUserName===e.create_by||!r.isPrivate)&&t.judgeFloatString(r.cost),expression:"(curUserName === daily.create_by || !row.isPrivate) && judgeFloatString(row.cost)"}],attrs:{theme:"info"}},[t._v("\n                                                    "+t._s(typeof r.cost==="string"?r.cost:r.cost.toFixed(1)+"小时")+"\n                                                ")]),t._v("\n                                                "),a("bk-tag",{directives:[{name:"show",rawName:"v-show",value:!(t.curUserName===e.create_by||!r.isPrivate)||!t.judgeFloatString(r.cost),expression:"!(curUserName === daily.create_by || !row.isPrivate) || !judgeFloatString(row.cost)"}],attrs:{theme:"info"}},[t._v("\n                                                    - -\n                                                ")]),t._v("\n                                            ")],1),t._v("\n                                            "+t._s(r.text)+"\n                                        ")]),t._v("\n                                    ")])])}),0):a("div",{staticStyle:{"font-size":"14px","line-height":"22px"}},[t._v("\n                                "+t._s(r.text)+"\n                            ")])])})],2)}),1),t._v(" "),a("bk-pagination",{attrs:{"ext-cls":"bottom-paging","show-total-count":"true",current:t.defaultPaging.current,count:t.defaultPaging.count,limit:t.defaultPaging.limit,"limit-list":t.defaultPaging.limitList},on:{change:t.changePage,"limit-change":t.changeLimit,"update:current":function(e){t.$set(t.defaultPaging,"current",e)},"update:count":function(e){t.$set(t.defaultPaging,"count",e)}}})],1):a("div",{staticClass:"perfect-report-wapper report-wapper"},[a("div",{staticClass:"right-top-bar"},[a("div",{staticClass:"select-bar"},[a("bk-select",{staticStyle:{width:"150px"},attrs:{disabled:false,"ext-cls":"select-type",behavior:"simplicity",placeholder:"请选择查看类型","ext-popover-cls":"select-popover-perfect",placement:"bottom-end"},on:{change:t.changeShowType},model:{value:t.perfectShowType,callback:function(e){t.perfectShowType=e},expression:"perfectShowType"}},t._l(t.pecfectTypeList,function(t){return a("bk-option",{key:t.id,attrs:{id:t.id,name:t.name}})}),1)],1),t._v(" "),a("bk-date-picker",{attrs:{disabled:t.perfectSetting.perfectShowType===1,behavior:"simplicity",type:t.perfectSetting.DateSelectType,format:t.perfectSetting.DateType,"ext-cls":"perfect-date-picker",placeholder:"选择日期"},on:{change:t.perfectDateChange},model:{value:t.perfectDate,callback:function(e){t.perfectDate=e},expression:"perfectDate"}})],1),t._v(" "),a("div",{staticClass:"perfect-body"},[t.perfectPaging.count===0?a("div",{staticClass:"perfect-empty"},[t._v("\n                        没有日报内容哟~\n                    ")]):a("div",{staticClass:"perfect-cards"},t._l(t.perfectDailysData.daily_list,function(e,r){return a("bk-card",{key:r,staticClass:"perfect-report-card card"},[a("div",{staticClass:"card-header perfect-card-header",attrs:{slot:"header",title:e.create_by+"("+e.create_name+")     "+e.date},slot:"header"},[a("div",{staticClass:"perfect-card-header-text"},[t._v("\n                                    "+t._s(e.create_by+"("+e.create_name+")")+"\n                                ")]),t._v(" "),a("div",{staticClass:"perfect-card-header-text"},[t._v("\n                                    "+t._s(e.date)+"\n                                ")])]),t._v(" "),t._l(e.content,function(r,i){return a("div",{key:i},[a("h5",{staticClass:"sub-title"},[t._v(t._s(r.title))]),t._v(" "),r.type==="table"?a("div",{staticStyle:{"font-size":"14px"}},t._l(r.content,function(r,i){return a("div",{key:i},[a("pre",{staticClass:"card-pre"},[t._v("                                            "),a("div",{staticClass:"content-wapper"},[t._v("\n                                                "),a("span",{staticClass:"time-wapper"},[t._v("\n                                                    "),(t.curUserName===e.create_by||!r.isPrivate)&&t.judgeFloatString(r.cost)?a("bk-tag",{attrs:{theme:"info"}},[t._v("\n                                                        "+t._s(typeof r.cost==="string"?r.cost:r.cost.toFixed(1)+"小时")+"\n                                                    ")]):t._e(),t._v("\n                                                    "),a("bk-tag",{directives:[{name:"show",rawName:"v-show",value:!(t.curUserName===e.create_by||!r.isPrivate)||!t.judgeFloatString(r.cost),expression:"!(curUserName === pdaily.create_by || !row.isPrivate) || !judgeFloatString(row.cost)"}],attrs:{theme:"info"}},[t._v("\n                                                        - -\n                                                    ")]),t._v("\n                                                ")],1),t._v("\n                                                "+t._s(r.text)+"\n                                            ")]),t._v("\n                                        ")])])}),0):a("div",{staticStyle:{"font-size":"14px","line-height":"22px"}},[t._v("\n                                    "+t._s(r.text)+"\n                                ")])])})],2)}),1)]),t._v(" "),a("bk-pagination",{attrs:{"ext-cls":"bottom-paging","show-total-count":"true",current:t.perfectPaging.current,count:t.perfectPaging.count,limit:t.perfectPaging.limit,"limit-list":t.perfectPaging.limitList},on:{change:t.changePerfectPage,"limit-change":t.changePerfectLimit,"update:current":function(e){t.$set(t.perfectPaging,"current",e)},"update:count":function(e){t.$set(t.perfectPaging,"count",e)}}})],1),t._v(" "),a("div",{staticStyle:{clear:"both"}})]),t._v(" "),a("div",{staticStyle:{clear:"both"}})])])};var i=[];a.d(e,"a",function(){return r});a.d(e,"b",function(){return i})},84:function(t,e,a){"use strict";a.r(e);var r=a(246);var i=a(96);for(var s in i)if(s!=="default")(function(t){a.d(e,t,function(){return i[t]})})(s);var n=a(241);var c=a(3);var o=Object(c["a"])(i["default"],r["a"],r["b"],false,null,"46f01197",null);e["default"]=o.exports},96:function(t,e,a){"use strict";a.r(e);var r=a(97);var i=a.n(r);for(var s in r)if(s!=="default")(function(t){a.d(e,t,function(){return r[t]})})(s);e["default"]=i.a},97:function(t,e,a){"use strict";var r=a(0);Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;a(29);a(85);var i=r(a(108));var s=r(a(236));var n=r(a(237));var c=r(a(86));var o=r(a(92));var u={components:{bkPagination:c.default,bkSelect:n.default,bkOption:s.default,bkDatePicker:i.default},data:function t(){return{myTodayReport:true,defaultPaging:{current:1,limit:8,count:0,limitList:[8,16,32,64]},groupsData:[],curGroupId:null,curGroup:{id:"",name:"",admin:[],create_by:"",create_name:"",create_time:""},customOption:{disabledDate:function t(e){if(e>new Date){return true}}},isUser:false,curDate:(0,o.default)(new Date).format("YYYY-MM-DD"),dailysData:{count:100,dailys:[]},groupUsers:[],curUserId:null,curUserName:this.$store.state.user.username,tabTitleList:["所有日报","优秀日报"],activeTabTitle:"所有日报",pecfectTypeList:[{id:1,name:"全部"},{id:2,name:"按月"}],perfectDate:new Date,perfectSetting:{perfectShowType:1,DateType:"yyyy-MM",DateSelectType:"month"},perfectPaging:{current:1,limit:8,count:0,limitList:[8,16,32,64]},perfectDailysData:{daily_list:[]},isLeftContentWork:true,changeDate:(0,o.default)(new Date).format("YYYY-MM-DD")}},computed:{link:function t(){return window.PROJECT_CONFIG.SITE_URL+"home?date="+this.curDate}},created:function t(){var e=this.$route.query.group;if(e!==undefined){this.curGroupId=parseInt(e)}},activated:function t(){if(!this.groupsData.length){this.init()}else{this.getDailys();this.getPerfectReport()}},methods:{judgeFloatString:function t(e){if(e==="0.0"||e==="0"||!e){return false}else if(typeof e==="string"&&e[0]==="0"){return false}else{return true}},changeLimit:function t(e){this.defaultPaging.limit=e;if(this.curUserId===""&&this.curDate===""){this.curDate=(0,o.default)(new Date).format("YYYY-MM-DD")}this.getDailys()},changePage:function t(e){this.defaultPaging.current=e;if(this.curUserId===""&&this.curDate===""){this.curDate=(0,o.default)(new Date).format("YYYY-MM-DD")}this.getDailys()},changeType:function t(){this.myTodayReport=true;this.isUser=!this.isUser;if(!this.isUser){this.changeGroup(this.curGroupId)}},getGroupUsers:function t(e){var a=this;this.$http.get("/get_group_users/"+e+"/").then(function(t){if(t.result){a.groupUsers=[];if(t.data.length!==0&&t.data.length!==null){t.data.map(function(t,e){if(t.username!=="admin"){a.groupUsers.push(t)}})}}else{a.$bkMessage({offsetY:80,delay:2e3,theme:"error",message:t.message})}})},changeDateOrUser:function t(e,a){this.curDate=a===""?"":(0,o.default)(a).format("YYYY-MM-DD");this.curUserId=e;if(this.curUserId===""&&this.curDate===""){this.curDate=(0,o.default)(new Date).format("YYYY-MM-DD")}if(e!==""&&a===""){this.changeDate=""}this.getDailys()},getDailys:function t(){var e=this;if(!this.curGroupId){return}this.$http.get("/report_filter/"+this.curGroupId+"/?date="+this.curDate+"&member_id="+this.curUserId+"&size="+this.defaultPaging.limit+"&page="+this.defaultPaging.current).then(function(t){if(t.result){e.defaultPaging.count=t.data.total_report_num;e.dailysData.dailys=t.data.reports;if(t.data.my_today_report!==undefined){e.myTodayReport=t.data.my_today_report}else{e.myTodayReport=true}if(e.isUser){e.myTodayReport=true}}else{var a={message:t.message,offsetY:80,theme:"error"};e.$bkMessage(a)}})},init:function t(){var e=this;this.$http.get("/get_user_groups/").then(function(t){e.groupsData=t.data;if(!e.groupsData||e.groupsData.length===0){e.$router.push({name:"MyGroup"})}if(e.groupsData.length!==0&&e.groupsData.length!==undefined){if(e.curGroupId!==null){var a=e;e.groupsData.forEach(function(t){if(t.id===a.curGroupId){a.curGroup=t;a.getGroupUsers(a.curGroupId);a.changeDateOrUser("",a.curDate)}})}else{e.curGroupId=e.groupsData[0].id;e.curGroup=e.groupsData[0]}}})},changeGroup:function t(e){if(e===null||e===""){this.curGroup={id:"",name:"",admin:[],create_by:"",create_name:"",create_time:""};this.groupUsers=[];this.curUserId=null;this.dailysData.dailys=[]}else{var a=this;this.groupsData.forEach(function(t){if(t.id===e){a.curGroup=t}});this.getGroupUsers(e);this.isUser=false;this.changeDateOrUser("",new Date);this.getPerfectReport()}},changeShowType:function t(e,a){this.perfectSetting.perfectShowType=e;if(this.pecfectTypeList[e-1].name==="按月"){this.perfectSetting.DateType="yyyy-MM";this.perfectSetting.DateSelectType="month"}else if(this.pecfectTypeList[e-1].name==="全部"){this.getPerfectReport()}},getPerfectReport:function t(){var e=this;var a=this.perfectSetting.perfectShowType===1?"all":"month";this.$http.get("/get_prefect_dailys/"+this.curGroupId+"/?select_type="+a+"&page="+this.perfectPaging.current+"&size="+this.perfectPaging.limit+"&year="+(0,o.default)(this.perfectDate).format("YYYY")+"&month="+(0,o.default)(this.perfectDate).format("MM")).then(function(t){if(t.result){e.perfectDailysData=t.data;e.perfectPaging.count=t.data.total_num}else{e.$bkMessage({offsetY:80,delay:2e3,theme:"warning",message:t.message})}})},perfectDateChange:function t(e,a){this.getPerfectReport()},changePerfectLimit:function t(e){this.perfectPaging.limit=e;this.getPerfectReport()},changePerfectPage:function t(e){this.perfectPaging.current=e;this.getPerfectReport()},changeTabs:function t(e){this.activeTabTitle=e;this.isLeftContentWork=e!=="优秀日报"}}};e.default=u},98:function(t,e,a){}}]);