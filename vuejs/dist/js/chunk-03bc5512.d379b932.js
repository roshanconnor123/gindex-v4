(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03bc5512"],{"2ad4":function(s,t,e){"use strict";e.r(t);var a=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{class:s.ismobile?"content mx-1 mt-2 px-0":"content ml-5 mt-2 mr-5 pl-5 pr-5"},[e("div",{staticClass:"loading"},[e("loading",{attrs:{active:s.loading,"can-cancel":!1,"is-full-page":s.fullpage},on:{"update:active":function(t){s.loading=t}}})],1),e("div",{staticClass:"columns is-vcentered is-centered is-multiline"},[e("div",{staticClass:"column is-half"},[e("div",{staticClass:"columns is-desktop is-multiline is-centered"},[s._m(0),e("div",{staticClass:"column is-full"},[e("div",{staticClass:"box has-background-warning"},[e("p",{staticClass:"title has-text-weight-bold has-text-centered"},[s._v(" Users List ")]),e("p",{staticClass:"subtitle has-text-weight-bold has-text-centered"},[s._v(" Press the Button to get the List ")]),e("div",{staticClass:"columns is-multiline is-mobile is-centered"},[s.admin&&!s.superadmin?e("div",{staticClass:"column is-two-thirds"},[e("p",{staticClass:"subtitle has-text-weight-semibold"},[s._v(" Get Users List ")])]):s._e(),s.admin&&!s.superadmin?e("div",{staticClass:"column is-one-third"},[e("button",{staticClass:"button is-success",on:{click:function(t){s.modal=!0,s.listname="List of all Users",s.getUser(s.getUsers)}}},[s._m(1),e("span",[s._v("Users")])])]):s._e(),s.admin&&s.superadmin?e("div",{staticClass:"column is-two-thirds"},[e("p",{staticClass:"subtitle has-text-weight-semibold"},[s._v(" Get All Users ")])]):s._e(),s.admin&&s.superadmin?e("div",{staticClass:"column is-one-third"},[e("button",{staticClass:"button is-success",on:{click:function(t){s.modal=!0,s.listname="List of all Users",s.getUser(s.getAll)}}},[s._m(2),e("span",[s._v("Users")])])]):s._e()])])])])]),e("div",{class:s.modal?"modal is-active":"modal"},[e("div",{staticClass:"modal-background"}),e("div",{staticClass:"modal-card"},[e("header",{staticClass:"modal-card-head"},[e("p",{staticClass:"modal-card-title has-text-centered"},[s._v(s._s(s.listname))]),e("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(t){s.modal=!1,s.userList=[]}}})]),e("section",{staticClass:"modal-card-body"},[0==s.userList.length?e("div",{staticClass:"columns is-centered is-mobile"},[s._m(3)]):s._l(s.userList,(function(t){return e("div",{key:t.name,staticClass:"columns is-centered is-mobile"},[e("div",{staticClass:"column is-two-thirds"},[e("p",{staticClass:"subtitle has-text-black"},[s._v(s._s(t.email)+" ("+s._s(t.role)+")")])]),e("div",{staticClass:"column is-one-third"},[e("button",{staticClass:"button is-danger is-rounded",on:{click:function(e){s.handleTransport(t),s.modal=!1}}},[s._m(4,!0),e("span",[s._v("Delete")])])])])}))],2)])]),e("div",{staticClass:"column has-text-centered is-half"},[e("article",{class:s.errorMessage?"message is-danger":"message is-hidden is-danger"},[e("div",{staticClass:"message-header"},[e("p",[s._v("Error Proccessing")]),e("button",{staticClass:"delete",attrs:{"aria-label":"delete"},on:{click:function(t){s.errorMessage=!1}}})]),e("div",{staticClass:"message-body"},[s._v(" "+s._s(s.resultmessage)+" ")])]),e("article",{class:s.successMessage?"message is-success":"message is-hidden is-success"},[e("div",{staticClass:"message-header"},[e("p",[s._v("Success !")]),e("button",{staticClass:"delete",attrs:{"aria-label":"delete"},on:{click:function(t){s.successMessage=!1}}})]),e("div",{staticClass:"message-body"},[s._v(" "+s._s(s.resultmessage)+" ")])]),e("h2",{staticClass:"title has-text-weight-bold has-text-white"},[s._v("Delete Users")]),e("p",{staticClass:"is-small has-text-white has-text-weight-bold"},[s._v("Select Users with the Side Buttons")]),e("form",{on:{submit:function(t){return t.preventDefault(),s.handleSubmit(t)}}},[e("div",{staticClass:"field"},[e("div",{staticClass:"control has-icons-left has-icons-right"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.email,expression:"email"}],staticClass:"input is-rounded is-focused",attrs:{disabled:"",placeholder:"Recipient's Email (AutoFilled)",id:"email",type:"email",required:""},domProps:{value:s.email},on:{input:function(t){t.target.composing||(s.email=t.target.value)}}}),s._m(5),s._m(6),e("p",{staticClass:"help is-warning"},[s._v("Email of Recipient(Auto Filled)")])])]),e("label",{staticClass:"subtitle has-text-white"},[s._v(" User's Role(Auto Filled)")]),e("div",{staticClass:"control mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.role,expression:"role"}],staticClass:"is-checkradio is-small is-warning",attrs:{id:"userradio",type:"radio",name:"role",checked:"",value:"user",disabled:s.disabled},domProps:{checked:s._q(s.role,"user")},on:{change:function(t){s.role="user"}}}),e("label",{staticClass:"subtitle has-text-white",attrs:{for:"userradio"}},[s._v("User")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.role,expression:"role"}],staticClass:"is-checkradio is-small is-warning",attrs:{id:"adminradio",type:"radio",name:"role",value:"admin",disabled:s.disabled},domProps:{checked:s._q(s.role,"admin")},on:{change:function(t){s.role="admin"}}}),e("label",{staticClass:"subtitle has-text-white",attrs:{for:"adminradio"}},[s._v(" Admin")])]),e("div",{staticClass:"field"},[e("p",{staticClass:"control has-icons-left"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],staticClass:"input is-rounded",attrs:{id:"password",type:"password",placeholder:"Your Admin Password",required:""},domProps:{value:s.password},on:{input:function(t){t.target.composing||(s.password=t.target.value)}}}),s._m(7)])]),e("button",{class:s.loading?"button is-loading is-rounded is-danger":"button is-danger is-rounded",attrs:{type:"submit",disabled:s.buttondisabled}},[s._m(8),e("span",[s._v("Delete User")])])])])])])},i=[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"column is-full"},[e("div",{staticClass:"box has-background-danger"},[e("p",{staticClass:"title has-text-weight-bold has-text-white has-text-centered"},[s._v(" Danger ")]),e("p",{staticClass:"subtitle has-text-weight-bold has-text-white has-text-centered"},[s._v(" Please Use this Feature Wisely ")])])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fas fa-user-shield"})])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fas fa-user-shield"})])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"column has-text-centered is-full"},[e("p",{staticClass:"subtitle has-text-black"},[s._v("No Users")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fas fa-user-minus"})])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"fas fa-envelope"})])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("span",{staticClass:"icon is-small is-right"},[e("i",{staticClass:"fas fa-check"})])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"fas fa-lock"})])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-user-minus"})])}],l=(e("d81d"),e("d3b7"),e("25f0"),e("9062")),n=e.n(l),r=(e("e40d"),{components:{Loading:n.a},props:["nextUrl"],data:function(){return{user:{},admin:!1,superadmin:!1,email:"",password:"",resultmessage:"",listname:"",successMessage:!1,errorMessage:!1,userList:[],gds:[],currgd:{},modal:!1,pendingMessage:"",getUsers:window.apiRoutes.getUsers,getAll:window.apiRoutes.getAll,role:"",apiurl:"",disabled:"",buttondisabled:"",loading:!1,fullpage:!0}},methods:{handleSubmit:function(s){var t=this;this.loading=!0,s.preventDefault(),this.password&&this.password.length>0?this.$http.post(this.apiurl,{email:this.email,adminpass:this.password,adminuseremail:this.user.email}).then((function(s){s&&(s.data.auth&&s.data.registered?(t.successMessage=!0,t.errorMessage=!1,t.resultmessage=s.data.message,t.loading=!1):(t.successMessage=!1,t.errorMessage=!0,t.resultmessage=s.data.message,t.loading=!1))})).catch((function(s){console.error(s)})):(this.successMessage=!1,this.errorMessage=!0,this.resultmessage="Passwords Do Not Match",this.password="",this.loading=!1)},getUser:function(s){var t=this;this.modal=!0,this.loading=!0,this.$http.post(s,{email:this.user.email}).then((function(s){s&&(s.data.auth&&s.data.registered?(t.loading=!1,t.userList=s.data.users):(t.loading=!1,t.pendingMessage=s.data.message))}))},handleTransport:function(s){this.loading=!0,this.email=s.email,"User"==s.role?(this.role="user",this.loading=!1):"Admin"==s.role&&(this.role="admin",this.loading=!1)},validateData:function(){this.role.length>0&&this.email.length>0&&this.password.length>0?this.buttondisabled=!1:this.buttondisabled=!0}},computed:{ismobile:function(){var s=window.innerWidth>0?window.innerWidth:screen.width;return!(s>966)}},beforeMount:function(){this.loading=!0;var s=localStorage.getItem("userdata"),t=localStorage.getItem("tokendata");if(s&&t){var e=JSON.parse(this.$hash.AES.decrypt(s,this.$pass).toString(this.$hash.enc.Utf8));this.loading=!1,this.user=e}else this.loading=!1,this.user=null},mounted:function(){this.loading=!0,this.user.admin&&this.user.superadmin?(this.admin=!0,this.superadmin=!0,this.role="user",this.disabled=!1,this.loading=!1):this.user.admin&&!this.user.superadmin?(this.admin=!0,this.superadmin=!1,this.role="user",this.disabled=!0,this.loading=!1):(this.loading=!1,this.$router.push({name:"results",params:{id:0,cmd:"result",success:!1,data:"Authorized Area. Not Allowed",redirectUrl:"/0:home/"}}))},created:function(){if(window.gds&&window.gds.length>0){this.gds=window.gds.map((function(s,t){return{name:s,id:t}}));var s=this.$route.params.id;this.gds&&this.gds.length>=s&&(this.currgd=this.gds[s])}},watch:{role:function(){"user"==this.role?(this.apiurl=window.apiRoutes.deleteUser,this.validateData()):"admin"==this.role&&(this.apiurl=window.apiRoutes.deleteAdmin,this.validateData())},email:"validateData",password:"validateData"}}),d=r,o=e("2877"),c=Object(o["a"])(d,a,i,!1,null,null,null);t["default"]=c.exports},e40d:function(s,t,e){}}]);