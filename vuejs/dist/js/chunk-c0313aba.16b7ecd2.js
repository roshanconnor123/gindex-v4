(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c0313aba","chunk-2d0babe1"],{1148:function(e,t,n){"use strict";var r=n("a691"),a=n("1d80");e.exports="".repeat||function(e){var t=String(a(this)),n="",o=r(e);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(t+=t))1&o&&(n+=t);return n}},1276:function(e,t,n){"use strict";var r=n("d784"),a=n("44e7"),o=n("825a"),i=n("1d80"),c=n("4840"),s=n("8aa5"),u=n("50c4"),l=n("14c3"),d=n("9263"),f=n("d039"),p=[].push,h=Math.min,g=4294967295,m=!f((function(){return!RegExp(g,"y")}));r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(i(this)),o=void 0===n?g:n>>>0;if(0===o)return[];if(void 0===e)return[r];if(!a(e))return t.call(r,e,o);var c,s,u,l=[],f=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),h=0,m=new RegExp(e.source,f+"g");while(c=d.call(m,r)){if(s=m.lastIndex,s>h&&(l.push(r.slice(h,c.index)),c.length>1&&c.index<r.length&&p.apply(l,c.slice(1)),u=c[0].length,h=s,l.length>=o))break;m.lastIndex===c.index&&m.lastIndex++}return h===r.length?!u&&m.test("")||l.push(""):l.push(r.slice(h)),l.length>o?l.slice(0,o):l}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var a=i(this),o=void 0==t?void 0:t[e];return void 0!==o?o.call(t,a,n):r.call(String(a),t,n)},function(e,a){var i=n(r,e,this,a,r!==t);if(i.done)return i.value;var d=o(e),f=String(this),p=c(d,RegExp),b=d.unicode,v=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(m?"y":"g"),_=new p(m?d:"^(?:"+d.source+")",v),C=void 0===a?g:a>>>0;if(0===C)return[];if(0===f.length)return null===l(_,f)?[f]:[];var y=0,x=0,A=[];while(x<f.length){_.lastIndex=m?x:0;var R,E=l(_,m?f:f.slice(x));if(null===E||(R=h(u(_.lastIndex+(m?0:x)),f.length))===y)x=s(f,x,b);else{if(A.push(f.slice(y,x)),A.length===C)return A;for(var S=1;S<=E.length-1;S++)if(A.push(E[S]),A.length===C)return A;x=y=R}}return A.push(f.slice(y)),A}]}),!m)},"27ae":function(module,exports,__webpack_require__){(function(global){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;(function(e,t){module.exports=t(e)})("undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof global?global:this,(function(global){"use strict";global=global||{};var _Base64=global.Base64,version="2.5.2",buffer;if(module.exports)try{buffer=eval("require('buffer').Buffer")}catch(err){buffer=void 0}var b64chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",b64tab=function(e){for(var t={},n=0,r=e.length;n<r;n++)t[e.charAt(n)]=n;return t}(b64chars),fromCharCode=String.fromCharCode,cb_utob=function(e){if(e.length<2){var t=e.charCodeAt(0);return t<128?e:t<2048?fromCharCode(192|t>>>6)+fromCharCode(128|63&t):fromCharCode(224|t>>>12&15)+fromCharCode(128|t>>>6&63)+fromCharCode(128|63&t)}t=65536+1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320);return fromCharCode(240|t>>>18&7)+fromCharCode(128|t>>>12&63)+fromCharCode(128|t>>>6&63)+fromCharCode(128|63&t)},re_utob=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,utob=function(e){return e.replace(re_utob,cb_utob)},cb_encode=function(e){var t=[0,2,1][e.length%3],n=e.charCodeAt(0)<<16|(e.length>1?e.charCodeAt(1):0)<<8|(e.length>2?e.charCodeAt(2):0),r=[b64chars.charAt(n>>>18),b64chars.charAt(n>>>12&63),t>=2?"=":b64chars.charAt(n>>>6&63),t>=1?"=":b64chars.charAt(63&n)];return r.join("")},btoa=global.btoa?function(e){return global.btoa(e)}:function(e){return e.replace(/[\s\S]{1,3}/g,cb_encode)},_encode=function(e){var t="[object Uint8Array]"===Object.prototype.toString.call(e);return t?e.toString("base64"):btoa(utob(String(e)))},encode=function(e,t){return t?_encode(String(e)).replace(/[+\/]/g,(function(e){return"+"==e?"-":"_"})).replace(/=/g,""):_encode(e)},encodeURI=function(e){return encode(e,!0)},re_btou=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,cb_btou=function(e){switch(e.length){case 4:var t=(7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3),n=t-65536;return fromCharCode(55296+(n>>>10))+fromCharCode(56320+(1023&n));case 3:return fromCharCode((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return fromCharCode((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},btou=function(e){return e.replace(re_btou,cb_btou)},cb_decode=function(e){var t=e.length,n=t%4,r=(t>0?b64tab[e.charAt(0)]<<18:0)|(t>1?b64tab[e.charAt(1)]<<12:0)|(t>2?b64tab[e.charAt(2)]<<6:0)|(t>3?b64tab[e.charAt(3)]:0),a=[fromCharCode(r>>>16),fromCharCode(r>>>8&255),fromCharCode(255&r)];return a.length-=[0,0,2,1][n],a.join("")},_atob=global.atob?function(e){return global.atob(e)}:function(e){return e.replace(/\S{1,4}/g,cb_decode)},atob=function(e){return _atob(String(e).replace(/[^A-Za-z0-9\+\/]/g,""))},_decode=buffer?buffer.from&&Uint8Array&&buffer.from!==Uint8Array.from?function(e){return(e.constructor===buffer.constructor?e:buffer.from(e,"base64")).toString()}:function(e){return(e.constructor===buffer.constructor?e:new buffer(e,"base64")).toString()}:function(e){return btou(_atob(e))},decode=function(e){return _decode(String(e).replace(/[-_]/g,(function(e){return"-"==e?"+":"/"})).replace(/[^A-Za-z0-9\+\/]/g,""))},noConflict=function(){var e=global.Base64;return global.Base64=_Base64,e};if(global.Base64={VERSION:version,atob:atob,btoa:btoa,fromBase64:decode,toBase64:encode,utob:utob,encode:encode,encodeURI:encodeURI,btou:btou,decode:decode,noConflict:noConflict,__buffer__:buffer},"function"===typeof Object.defineProperty){var noEnum=function(e){return{value:e,enumerable:!1,writable:!0,configurable:!0}};global.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",noEnum((function(){return decode(this)}))),Object.defineProperty(String.prototype,"toBase64",noEnum((function(e){return encode(this,e)}))),Object.defineProperty(String.prototype,"toBase64URI",noEnum((function(){return encode(this,!0)})))}}return global["Meteor"]&&(Base64=global.Base64),module.exports?module.exports.Base64=global.Base64:(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_RESULT__=function(){return global.Base64}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)),{Base64:global.Base64}}))}).call(this,__webpack_require__("c8ba"))},3905:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"navigation-buttons"},[n("li",{staticClass:"buttons",on:{click:e.homeRoute}},[n("i",{staticClass:"fas fa-house-damage"})]),e.logged?n("li",{staticClass:"buttons",on:{click:e.settingsRoute}},[n("i",{staticClass:"fas fa-user-cog"})]):e._e(),e.logged?e._e():n("li",{staticClass:"buttons",on:{click:e.otpRegisterRoute}},[e._v("OTP Registration")]),e.logged&&e.admin&&!e.superadmin?n("li",{staticClass:"buttons",on:{click:e.adminRoute}},[e._v("Admin Panel")]):e._e(),e.logged&&e.admin&&e.superadmin?n("li",{staticClass:"buttons",on:{click:e.superAdminRoute}},[e._v("Admin Panel")]):e._e(),e.logged?n("li",{staticClass:"buttons",on:{click:e.contentRoute}},[e._v("View Content")]):e._e(),e.logged?n("li",{staticClass:"buttons",on:{click:e.logoutRoute}},[n("i",{staticClass:"fas fa-sign-out-alt"})]):e._e(),e.logged?e._e():n("li",{staticClass:"buttons",on:{click:e.requestRoute}},[e._v("Request Access")]),e.logged?e._e():n("li",{staticClass:"buttons",on:{click:e.loginRoute}},[e._v("Login")])])])},a=[],o=(n("d3b7"),n("25f0"),{data:function(){return{logged:!1,admin:!1,superadmin:!1}},methods:{homeRoute:function(){this.$router.push("/0:home/")},settingsRoute:function(){this.$router.push({name:"results",params:{id:0,cmd:"result",data:"Super Secure Line on the Way. Please Wait!!",redirectUrl:"/0:settings/"}})},adminRoute:function(){this.$router.push({name:"results",params:{id:0,cmd:"result",data:"Super Secure Line on the Way. Please Wait!!",redirectUrl:"/0:admin/"}})},superAdminRoute:function(){this.$router.push({name:"results",params:{id:0,cmd:"result",data:"Super Secure Line on the Way. Please Wait!!",redirectUrl:"/0:superadmin/"}})},contentRoute:function(){this.$router.push({name:"results",params:{id:0,cmd:"result",data:"Super Secure Line on the Way. Please Wait!!",redirectUrl:"/0:/"}})},logoutRoute:function(){var e=localStorage.getItem("tokendata"),t=localStorage.getItem("userdata");null!=t&&null!=e&&(localStorage.removeItem("tokendata"),localStorage.removeItem("userdata"),this.$router.push({name:"results",params:{id:0,cmd:"result",data:"You are Being Logged Out. Please Wait",redirectUrl:"/0:home/"}}))},requestRoute:function(){this.$router.push("/0:register/request/user")},loginRoute:function(){this.$router.push("/0:login/")},otpRegisterRoute:function(){this.$router.push("/0:register/otp")}},created:function(){var e=this,t=localStorage.getItem("tokendata"),n=localStorage.getItem("userdata");if(null!=n&&null!=t){var r=JSON.parse(this.$hash.AES.decrypt(t,this.$pass).toString(this.$hash.enc.Utf8)),a=JSON.parse(this.$hash.AES.decrypt(n,this.$pass).toString(this.$hash.enc.Utf8));this.axios.post(window.apiRoutes.verifyRoute,{token:r.token}).then((function(t){t.data.auth||t.data.registered||null!=t.data.tokenuser?a.admin&&!a.superadmin?(e.logged=!0,e.admin=!0):a.admin&&a.superadmin?(e.logged=!0,e.admin=!0,e.superadmin=!0):e.logged=!0:e.$router.push({name:"results",params:{id:0,cmd:"results",data:"I think Your Token Has Expired. Please Login to Regerate Another One",redirectUrl:"/0:login/"}})}))}else this.logged=!1}}),i=o,c=n("2877"),s=Object(c["a"])(i,r,a,!1,null,null,null);t["default"]=s.exports},"408a":function(e,t,n){var r=n("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=r(e))throw TypeError("Incorrect invocation");return+e}},"44e7":function(e,t,n){var r=n("861d"),a=n("c6b6"),o=n("b622"),i=o("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==a(e))}},"45d8":function(e,t,n){"use strict";n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return p})),n.d(t,"d",(function(){return g})),n.d(t,"g",(function(){return m})),n.d(t,"f",(function(){return b})),n.d(t,"e",(function(){return v}));n("99af"),n("c975"),n("b680"),n("4d63"),n("ac1f"),n("25f0"),n("5319"),n("1276");var r=n("9bd2"),a=n("27ae").Base64,o=["html","php","css","go","java","js","json","txt","sh","md"],i=["mp3","flac","wav","ogg","m4a"],c=["mp4","webm","mkv","m3u8"],s=["bmp","jpg","jpeg","png","gif"],u=["pdf"],l=function(e){return e.replace(/(.*)/,(function(e,t){return t.replace().replace(/\//g,"%2F").replace(/#/g,"%23")}))},d=function(e,t){return e=l(e),"application/vnd.google-apps.folder"===t.mimeType&&"/"!==e.substr(-1)&&(e+="/"),e},f=function(e){var t=e.split("/").pop(),n=t.split(".").pop().toLowerCase(),r=h(e);return-1!=o.indexOf("".concat(n))&&(e=e.replace(/\/(\d+:)\/.*/,(function(e,t){return"/".concat(t,"text/").concat(r)}))),-1!=u.indexOf("".concat(n))&&(e=e.replace(/\/(\d+:)\/.*/,(function(e,t){return"/".concat(t,"pdf/").concat(r)}))),-1!=i.indexOf("".concat(n))&&(e=e.replace(/\/(\d+:)\/.*/,(function(e,t){return"/".concat(t,"audio/").concat(r)}))),-1!=c.indexOf("".concat(n))&&(e=e.replace(/\/(\d+:)\/.*/,(function(e,t){return"/".concat(t,"video/").concat(r)}))),-1!=s.indexOf("".concat(n))&&(e=e.replace(/\/(\d+:)\/.*/,(function(e,t){return"/".concat(t,"image/").concat(r)}))),e},p=function(e){var t=e.split("/").pop(),n=t.split(".").pop().toLowerCase(),r=o.concat.apply(o,c.concat(s,u,i));return-1!=r.indexOf("".concat(n))},h=function(e){return a.encodeURI(e)},g=function(e){return a.decode(e)};function m(e,t){var n=e.path,a=e.file.modifiedTime,o="file_path_"+n+a,i=localStorage.getItem(o);if(i)return t(i);r["a"].get(n).then((function(e){var n=e.data;localStorage.setItem(o,n),t(n)}))}function b(e){return e>=1e9?e=(e/1e9).toFixed(2)+" GB":e>=1e6?e=(e/1e6).toFixed(2)+" MB":e>=1e3?e=(e/1e3).toFixed(2)+" KB":e>1?e+=" bytes":1==e?e+=" byte":e="",e}function v(e,t){t=t||"YYYY-MM-DD HH:mm:ss","string"===typeof e&&(e=new Date(e)),"number"===typeof e&&(e=new Date(e));var n={"M+":e.getMonth()+1,"D+":e.getDate(),"h+":e.getHours()%12===0?12:e.getHours()%12,"H+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()},r={0:"日",1:"一",2:"二",3:"三",4:"四",5:"五",6:"六"};for(var a in/(Y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),/(E+)/.test(t)&&(t=t.replace(RegExp.$1,(RegExp.$1.length>1?RegExp.$1.length>2?"星期":"周":"")+r[e.getDay()+""])),n)new RegExp("("+a+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?n[a]:("00"+n[a]).substr((""+n[a]).length)));return t}},"4d63":function(e,t,n){var r=n("83ab"),a=n("da84"),o=n("94ca"),i=n("7156"),c=n("9bf2").f,s=n("241c").f,u=n("44e7"),l=n("ad6d"),d=n("9f7f"),f=n("6eeb"),p=n("d039"),h=n("69f3").set,g=n("2626"),m=n("b622"),b=m("match"),v=a.RegExp,_=v.prototype,C=/a/g,y=/a/g,x=new v(C)!==C,A=d.UNSUPPORTED_Y,R=r&&o("RegExp",!x||A||p((function(){return y[b]=!1,v(C)!=C||v(y)==y||"/a/i"!=v(C,"i")})));if(R){var E=function(e,t){var n,r=this instanceof E,a=u(e),o=void 0===t;if(!r&&a&&e.constructor===E&&o)return e;x?a&&!o&&(e=e.source):e instanceof E&&(o&&(t=l.call(e)),e=e.source),A&&(n=!!t&&t.indexOf("y")>-1,n&&(t=t.replace(/y/g,"")));var c=i(x?new v(e,t):v(e,t),r?this:_,E);return A&&n&&h(c,{sticky:n}),c},S=function(e){e in E||c(E,e,{configurable:!0,get:function(){return v[e]},set:function(t){v[e]=t}})},w=s(v),k=0;while(w.length>k)S(w[k++]);_.constructor=E,E.prototype=_,f(a,"RegExp",E)}g("RegExp")},7156:function(e,t,n){var r=n("861d"),a=n("d2bb");e.exports=function(e,t,n){var o,i;return a&&"function"==typeof(o=t.constructor)&&o!==n&&r(i=o.prototype)&&i!==n.prototype&&a(e,i),e}},b680:function(e,t,n){"use strict";var r=n("23e7"),a=n("a691"),o=n("408a"),i=n("1148"),c=n("d039"),s=1..toFixed,u=Math.floor,l=function(e,t,n){return 0===t?n:t%2===1?l(e,t-1,n*e):l(e*e,t/2,n)},d=function(e){var t=0,n=e;while(n>=4096)t+=12,n/=4096;while(n>=2)t+=1,n/=2;return t},f=s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){s.call({})}));r({target:"Number",proto:!0,forced:f},{toFixed:function(e){var t,n,r,c,s=o(this),f=a(e),p=[0,0,0,0,0,0],h="",g="0",m=function(e,t){var n=-1,r=t;while(++n<6)r+=e*p[n],p[n]=r%1e7,r=u(r/1e7)},b=function(e){var t=6,n=0;while(--t>=0)n+=p[t],p[t]=u(n/e),n=n%e*1e7},v=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==p[e]){var n=String(p[e]);t=""===t?n:t+i.call("0",7-n.length)+n}return t};if(f<0||f>20)throw RangeError("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return String(s);if(s<0&&(h="-",s=-s),s>1e-21)if(t=d(s*l(2,69,1))-69,n=t<0?s*l(2,-t,1):s/l(2,t,1),n*=4503599627370496,t=52-t,t>0){m(0,n),r=f;while(r>=7)m(1e7,0),r-=7;m(l(10,r,1),0),r=t-1;while(r>=23)b(1<<23),r-=23;b(1<<r),m(1,1),b(2),g=v()}else m(0,n),m(1<<-t,0),g=v()+i.call("0",f);return f>0?(c=g.length,g=h+(c<=f?"0."+i.call("0",f-c)+g:g.slice(0,c-f)+"."+g.slice(c-f))):g=h+g,g}})},d4d2:function(e,t,n){"use strict";(function(e){n("d3b7"),n("25f0");var r=n("3905"),a=n("45d8");t["a"]={components:{TopLinks:r["default"]},data:function(){return{apiurl:"",audiourl:""}},methods:{render:function(){this.audiourl=window.location.origin+encodeURI(this.url),this.apiurl=this.audiourl}},activated:function(){this.render()},computed:{url:function(){return this.$route.params.path?Object(a["d"])(this.$route.params.path):""},players:function(){return[{name:"IINA",icon:this.$cdnpath("images/player/iina.png"),scheme:"iina://weblink?url="+this.videourl},{name:"PotPlayer",icon:this.$cdnpath("images/player/potplayer.png"),scheme:"potplayer://"+this.videourl},{name:"VLC",icon:this.$cdnpath("images/player/vlc.png"),scheme:"vlc://"+this.videourl},{name:"Thunder",icon:this.$cdnpath("images/player/thunder.png"),scheme:"thunder://"+this.getThunder},{name:"Aria2",icon:this.$cdnpath("images/player/aria2.png"),scheme:'javascript:alert("Not Yet Supported")'},{name:"nPlayer",icon:this.$cdnpath("images/player/nplayer.png"),scheme:"nplayer-"+this.videourl},{name:"MXPlayer(Free)",icon:this.$cdnpath("images/player/mxplayer.png"),scheme:"intent:"+this.videourl+"#Intent;package=com.mxtech.videoplayer.ad;S.title="+this.title+";end"},{name:"MXPlayer(Pro)",icon:this.$cdnpath("images/player/mxplayer.png"),scheme:"intent:"+this.videourl+"#Intent;package=com.mxtech.videoplayer.pro;S.title="+this.title+";end"}]},getThunder:function(){return e.from("AA"+this.audiourl+"ZZ").toString("base64")}}}}).call(this,n("b639").Buffer)},f9b3:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content g2-content"},[n("TopLinks"),n("div",{staticClass:"audio-card"},[n("vue-plyr",[n("audio",{attrs:{controls:"",autoplay:"",preload:"auto",src:e.apiurl}},[e._v("Does Not Support")])])],1),n("div",{staticClass:"card"},[n("header",{staticClass:"card-header"},[n("p",{staticClass:"card-header-title"},[e._m(0),e._v(" "+e._s(e.$t("page.video.play"))+" / "),e._m(1),e._v(" "+e._s(e.$t("page.video.download"))+" ")])]),n("div",{staticClass:"card-content"},[n("div",{staticClass:"content"},[n("div",{staticClass:"field"},[n("label",{staticClass:"label"},[e._v(e._s(e.$t("page.video.link")))]),n("div",{staticClass:"control"},[n("div",{staticClass:"link-text copy-download-link"},[n("input",{staticClass:"input download-link",attrs:{type:"text"},domProps:{value:e.audiourl}})]),n("center",[n("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.audiourl,expression:"audiourl",arg:"copy"}],attrs:{id:"copy-url",type:"button"}},[e._v("Copy Link "),n("i",{staticClass:"fa fa-copy"})]),n("a",{staticClass:"download-button",attrs:{href:e.audiourl,target:"_blank"}},[e._v("Download "),n("i",{staticClass:"fa fa-download"})])])],1)]),n("div",{staticClass:"columns is-mobile is-multiline has-text-centered"},e._l(e.players,(function(t,r){return n("div",{key:r,staticClass:"column audiocolumn"},[n("p",{staticClass:"heading"},[n("a",{attrs:{href:t.scheme}},[n("figure",{staticClass:"image is-48x48",staticStyle:{margin:"0 auto"}},[n("img",{staticClass:"icon",attrs:{src:t.icon}})])])]),n("p",{},[e._v(e._s(t.name))])])})),0)])])])],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"icon",staticStyle:{color:"#ff9595"}},[n("i",{staticClass:"fa fa-play-circle",attrs:{"aria-hidden":"true"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"icon",staticStyle:{color:"#ff9595"}},[n("i",{staticClass:"fa fa-download",attrs:{"aria-hidden":"true"}})])}],o=n("d4d2"),i=o["a"],c=n("2877"),s=Object(c["a"])(i,r,a,!1,null,null,null);t["default"]=s.exports}}]);