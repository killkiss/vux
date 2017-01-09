/*! Vux 定制常用组件 */
!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("window.Vue")):"function"==typeof define&&define.amd?define(["window.Vue"],n):"object"==typeof exports?exports.vux=n(require("window.Vue")):t.vux=n(t["window.Vue"])}(this,function(t){return function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var e={};return n.m=t,n.c=e,n.p="./",n(0)}([function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var o=e(78),i=(r(o),e(37)),u=r(i),f=e(77),c=r(f),s=e(76),a=r(s),p={Toast:u["default"],Loading:c["default"],ToastPlugin:a["default"]};window.vuxDingzhi=p},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(50),o=e(15);t.exports=function(t){return r(o(t))}},function(t,n,e){t.exports=!e(9)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(6),o=e(12);t.exports=e(4)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(8),o=e(30),i=e(24),u=Object.defineProperty;n.f=e(4)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(f){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(22)("wks"),o=e(13),i=e(1).Symbol,u="function"==typeof i,f=t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))};f.store=r},function(t,n,e){var r=e(10);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(35),o=e(16);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){var e=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){t.exports={}},function(t,n){t.exports=!0},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){var r=e(6).f,o=e(2),i=e(7)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(22)("keys"),o=e(13);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(1),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(10);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(1),o=e(14),i=e(18),u=e(26),f=e(6).f;t.exports=function(t){var n=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||f(n,t,{value:u.f(t)})}},function(t,n,e){n.f=e(7)},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(10),o=e(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(1),o=e(14),i=e(47),u=e(5),f="prototype",c=function(t,n,e){var s,a,p,l=t&c.F,d=t&c.G,v=t&c.S,y=t&c.P,h=t&c.B,x=t&c.W,w=d?o:o[n]||(o[n]={}),m=w[f],b=d?r:v?r[n]:(r[n]||{})[f];d&&(e=n);for(s in e)a=!l&&b&&void 0!==b[s],a&&s in w||(p=a?b[s]:e[s],w[s]=d&&"function"!=typeof b[s]?e[s]:h&&a?i(p,r):x&&b[s]==p?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n[f]=t[f],n}(p):y&&"function"==typeof p?i(Function.call,p):p,y&&((w.virtual||(w.virtual={}))[s]=p,t&c.R&&m&&!m[s]&&u(m,s,p)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n,e){t.exports=!e(4)&&!e(9)(function(){return 7!=Object.defineProperty(e(28)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){"use strict";var r=e(18),o=e(29),i=e(36),u=e(5),f=e(2),c=e(17),s=e(52),a=e(20),p=e(59),l=e(7)("iterator"),d=!([].keys&&"next"in[].keys()),v="@@iterator",y="keys",h="values",x=function(){return this};t.exports=function(t,n,e,w,m,b,_){s(e,n,w);var g,O,S,j=function(t){if(!d&&t in k)return k[t];switch(t){case y:return function(){return new e(this,t)};case h:return function(){return new e(this,t)}}return function(){return new e(this,t)}},P=n+" Iterator",E=m==h,M=!1,k=t.prototype,T=k[l]||k[v]||m&&k[m],A=T||j(m),F=m?E?j("entries"):A:void 0,N="Array"==n?k.entries||T:T;if(N&&(S=p(N.call(new t)),S!==Object.prototype&&(a(S,P,!0),r||f(S,l)||u(S,l,x))),E&&T&&T.name!==h&&(M=!0,A=function(){return T.call(this)}),r&&!_||!d&&!M&&k[l]||u(k,l,A),c[n]=A,c[P]=x,m)if(g={values:E?A:j(h),keys:b?A:j(y),entries:F},_)for(O in g)O in k||i(k,O,g[O]);else o(o.P+o.F*(d||M),n,g);return g}},function(t,n,e){var r=e(8),o=e(56),i=e(16),u=e(21)("IE_PROTO"),f=function(){},c="prototype",s=function(){var t,n=e(28)("iframe"),r=i.length,o="<",u=">";for(n.style.display="none",e(49).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write(o+"script"+u+"document.F=Object"+o+"/script"+u),t.close(),s=t.F;r--;)delete s[c][i[r]];return s()};t.exports=Object.create||function(t,n){var e;return null!==t?(f[c]=r(t),e=new f,f[c]=null,e[u]=t):e=s(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(35),o=e(16).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(2),o=e(3),i=e(46)(!1),u=e(21)("IE_PROTO");t.exports=function(t,n){var e,f=o(t),c=0,s=[];for(e in f)e!=u&&r(f,e)&&s.push(e);for(;n.length>c;)r(f,e=n[c++])&&(~i(s,e)||s.push(e));return s}},function(t,n,e){t.exports=e(5)},function(t,n,e){var r,o,i={};e(39),r=e(75),o=e(41),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var u="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;o&&(u.template=o),u.computed||(u.computed={}),Object.keys(i).forEach(function(t){var n=i[t];u.computed[t]=function(){return n}})},function(t,n){},function(t,n){},function(t,n){t.exports=' <div class=weui_loading_toast v-show=show> <div class=weui_mask_transparent></div> <div class=weui_toast :style="{position: position}"> <div class=weui_loading> <div class=weui_loading_leaf v-for="i in 12" :class="[\'weui_loading_leaf_\' + i]"></div> </div> <p class=weui_toast_content>{{text}}<slot></slot></p> </div> </div> '},function(t,n){t.exports=' <div class=vux-toast> <div class=weui_mask_transparent v-show=show></div> <div class=weui_toast :style="{width: width}" :class=toastClass v-show=show :transition=transition> <i class=weui_icon_toast v-show="type !== \'text\'"></i> <p class=weui_toast_content v-if=text v-html=text></p> <p class=weui_toast_content v-else><slot></slot></p> </div> </div> '},function(t,n,e){e(67),e(65),e(68),e(69),t.exports=e(14).Symbol},function(t,n,e){e(66),e(70),t.exports=e(26).f("iterator")},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){t.exports=function(){}},function(t,n,e){var r=e(3),o=e(62),i=e(61);t.exports=function(t){return function(n,e,u){var f,c=r(n),s=o(c.length),a=i(u,s);if(t&&e!=e){for(;s>a;)if(f=c[a++],f!=f)return!0}else for(;s>a;a++)if((t||a in c)&&c[a]===e)return t||a||0;return!t&&-1}}},function(t,n,e){var r=e(44);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(11),o=e(34),i=e(19);t.exports=function(t){var n=r(t),e=o.f;if(e)for(var u,f=e(t),c=i.f,s=0;f.length>s;)c.call(t,u=f[s++])&&n.push(u);return n}},function(t,n,e){t.exports=e(1).document&&document.documentElement},function(t,n,e){var r=e(27);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(27);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){"use strict";var r=e(32),o=e(12),i=e(20),u={};e(5)(u,e(7)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){var r=e(11),o=e(3);t.exports=function(t,n){for(var e,i=o(t),u=r(i),f=u.length,c=0;f>c;)if(i[e=u[c++]]===n)return e}},function(t,n,e){var r=e(13)("meta"),o=e(10),i=e(2),u=e(6).f,f=0,c=Object.isExtensible||function(){return!0},s=!e(9)(function(){return c(Object.preventExtensions({}))}),a=function(t){u(t,r,{value:{i:"O"+ ++f,w:{}}})},p=function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!c(t))return"F";if(!n)return"E";a(t)}return t[r].i},l=function(t,n){if(!i(t,r)){if(!c(t))return!0;if(!n)return!1;a(t)}return t[r].w},d=function(t){return s&&v.NEED&&c(t)&&!i(t,r)&&a(t),t},v=t.exports={KEY:r,NEED:!1,fastKey:p,getWeak:l,onFreeze:d}},function(t,n,e){var r=e(6),o=e(8),i=e(11);t.exports=e(4)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),f=u.length,c=0;f>c;)r.f(t,e=u[c++],n[e]);return t}},function(t,n,e){var r=e(19),o=e(12),i=e(3),u=e(24),f=e(2),c=e(30),s=Object.getOwnPropertyDescriptor;n.f=e(4)?s:function(t,n){if(t=i(t),n=u(n,!0),c)try{return s(t,n)}catch(e){}if(f(t,n))return o(!r.f.call(t,n),t[n])}},function(t,n,e){var r=e(3),o=e(33).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],f=function(t){try{return o(t)}catch(n){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?f(t):o(r(t))}},function(t,n,e){var r=e(2),o=e(63),i=e(21)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){var r=e(23),o=e(15);t.exports=function(t){return function(n,e){var i,u,f=String(o(n)),c=r(e),s=f.length;return c<0||c>=s?t?"":void 0:(i=f.charCodeAt(c),i<55296||i>56319||c+1===s||(u=f.charCodeAt(c+1))<56320||u>57343?t?f.charAt(c):i:t?f.slice(c,c+2):(i-55296<<10)+(u-56320)+65536)}}},function(t,n,e){var r=e(23),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(23),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(15);t.exports=function(t){return Object(r(t))}},function(t,n,e){"use strict";var r=e(45),o=e(53),i=e(17),u=e(3);t.exports=e(31)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):"keys"==n?o(0,e):"values"==n?o(0,t[e]):o(0,[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n){},function(t,n,e){"use strict";var r=e(60)(!0);e(31)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){"use strict";var r=e(1),o=e(2),i=e(4),u=e(29),f=e(36),c=e(55).KEY,s=e(9),a=e(22),p=e(20),l=e(13),d=e(7),v=e(26),y=e(25),h=e(54),x=e(48),w=e(51),m=e(8),b=e(3),_=e(24),g=e(12),O=e(32),S=e(58),j=e(57),P=e(6),E=e(11),M=j.f,k=P.f,T=S.f,A=r.Symbol,F=r.JSON,N=F&&F.stringify,I="prototype",C=d("_hidden"),L=d("toPrimitive"),$={}.propertyIsEnumerable,D=a("symbol-registry"),R=a("symbols"),W=a("op-symbols"),B=Object[I],J="function"==typeof A,V=r.QObject,z=!V||!V[I]||!V[I].findChild,G=i&&s(function(){return 7!=O(k({},"a",{get:function(){return k(this,"a",{value:7}).a}})).a})?function(t,n,e){var r=M(B,n);r&&delete B[n],k(t,n,e),r&&t!==B&&k(B,n,r)}:k,H=function(t){var n=R[t]=O(A[I]);return n._k=t,n},K=J&&"symbol"==typeof A.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof A},q=function(t,n,e){return t===B&&q(W,n,e),m(t),n=_(n,!0),m(e),o(R,n)?(e.enumerable?(o(t,C)&&t[C][n]&&(t[C][n]=!1),e=O(e,{enumerable:g(0,!1)})):(o(t,C)||k(t,C,g(1,{})),t[C][n]=!0),G(t,n,e)):k(t,n,e)},Y=function(t,n){m(t);for(var e,r=x(n=b(n)),o=0,i=r.length;i>o;)q(t,e=r[o++],n[e]);return t},Q=function(t,n){return void 0===n?O(t):Y(O(t),n)},U=function(t){var n=$.call(this,t=_(t,!0));return!(this===B&&o(R,t)&&!o(W,t))&&(!(n||!o(this,t)||!o(R,t)||o(this,C)&&this[C][t])||n)},X=function(t,n){if(t=b(t),n=_(n,!0),t!==B||!o(R,n)||o(W,n)){var e=M(t,n);return!e||!o(R,n)||o(t,C)&&t[C][n]||(e.enumerable=!0),e}},Z=function(t){for(var n,e=T(b(t)),r=[],i=0;e.length>i;)o(R,n=e[i++])||n==C||n==c||r.push(n);return r},tt=function(t){for(var n,e=t===B,r=T(e?W:b(t)),i=[],u=0;r.length>u;)!o(R,n=r[u++])||e&&!o(B,n)||i.push(R[n]);return i};J||(A=function(){if(this instanceof A)throw TypeError("Symbol is not a constructor!");var t=l(arguments.length>0?arguments[0]:void 0),n=function(e){this===B&&n.call(W,e),o(this,C)&&o(this[C],t)&&(this[C][t]=!1),G(this,t,g(1,e))};return i&&z&&G(B,t,{configurable:!0,set:n}),H(t)},f(A[I],"toString",function(){return this._k}),j.f=X,P.f=q,e(33).f=S.f=Z,e(19).f=U,e(34).f=tt,i&&!e(18)&&f(B,"propertyIsEnumerable",U,!0),v.f=function(t){return H(d(t))}),u(u.G+u.W+u.F*!J,{Symbol:A});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;nt.length>et;)d(nt[et++]);for(var nt=E(d.store),et=0;nt.length>et;)y(nt[et++]);u(u.S+u.F*!J,"Symbol",{"for":function(t){return o(D,t+="")?D[t]:D[t]=A(t)},keyFor:function(t){if(K(t))return h(D,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){z=!0},useSimple:function(){z=!1}}),u(u.S+u.F*!J,"Object",{create:Q,defineProperty:q,defineProperties:Y,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),F&&u(u.S+u.F*(!J||s(function(){var t=A();return"[null]"!=N([t])||"{}"!=N({a:t})||"{}"!=N(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!K(t)){for(var n,e,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return n=r[1],"function"==typeof n&&(e=n),!e&&w(n)||(n=function(t,n){if(e&&(n=e.call(this,t,n)),!K(n))return n}),r[1]=n,N.apply(F,r)}}}),A[I][L]||e(5)(A[I],L,A[I].valueOf),p(A,"Symbol"),p(Math,"Math",!0),p(r.JSON,"JSON",!0)},function(t,n,e){e(25)("asyncIterator")},function(t,n,e){e(25)("observable")},function(t,n,e){e(64);for(var r=e(1),o=e(5),i=e(17),u=e(7)("toStringTag"),f=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],c=0;c<5;c++){var s=f[c],a=r[s],p=a&&a.prototype;p&&!p[u]&&o(p,u,s),i[s]=i.Array}},function(t,n,e){t.exports={"default":e(42),__esModule:!0}},function(t,n,e){t.exports={"default":e(43),__esModule:!0}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}n.__esModule=!0;var o=e(72),i=r(o),u=e(71),f=r(u),c="function"==typeof f["default"]&&"symbol"==typeof i["default"]?function(t){return typeof t}:function(t){return t&&"function"==typeof f["default"]&&t.constructor===f["default"]?"symbol":typeof t};n["default"]="function"==typeof f["default"]&&"symbol"===c(i["default"])?function(t){return"undefined"==typeof t?"undefined":c(t)}:function(t){return t&&"function"==typeof f["default"]&&t.constructor===f["default"]?"symbol":"undefined"==typeof t?"undefined":c(t)}},function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]={props:{show:Boolean,text:{type:String,"default":"Loading"},position:String}}},function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]={props:{show:{type:Boolean,"default":!1},time:{type:Number,"default":2e3},type:{type:String,"default":"success"},transition:{type:String,"default":"vux-fade"},width:{type:String,"default":"7.6em"},text:String},computed:{toastClass:function(){return{weui_toast_forbidden:"warn"===this.type,weui_toast_cancel:"cancel"===this.type,weui_toast_success:"success"===this.type,weui_toast_text:"text"===this.type}}},watch:{show:function(t){var n=this;t&&(clearTimeout(this.timeout),this.timeout=setTimeout(function(){n.show=!1,n.$emit("on-hide")},this.time))}}}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(n,"__esModule",{value:!0});var o=e(73),i=r(o),u=e(37),f=r(u),c=void 0,s=void 0;n["default"]={install:function(t,n){var e=t.extend(f["default"]);c||(c=new e({el:document.createElement("div")}),document.body.appendChild(c.$el));var r={show:function(t){if(s&&s(),"string"==typeof t)c.text=t;else if("object"===("undefined"==typeof t?"undefined":(0,i["default"])(t)))for(var n in t)c[n]=t[n];("object"===("undefined"==typeof t?"undefined":(0,i["default"])(t))&&t.onShow||t.onHide)&&(s=c.$watch("show",function(n){n&&t.onShow&&t.onShow(c),n===!1&&t.onHide&&t.onHide(c)})),c.show=!0},hide:function(){c.show=!1}};t.$vux?t.$vux.toast=r:t.$vux={toast:r},t.mixin({created:function(){this.$vux=t.$vux}})}}},function(t,n,e){var r,o,i={};e(38),r=e(74),o=e(40),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]);var u="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;o&&(u.template=o),u.computed||(u.computed={}),Object.keys(i).forEach(function(t){var n=i[t];u.computed[t]=function(){return n}})},function(n,e){n.exports=t}])});