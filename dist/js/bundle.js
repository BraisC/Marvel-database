!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t,n){"use strict";var r=n(3),i=n(10),o=Object.prototype.toString;function a(e){return"[object Array]"===o.call(e)}function s(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===o.call(e)}function l(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),a(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}e.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:i,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:c,isStream:function(e){return s(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:l,merge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,i=arguments.length;r<i;r++)l(arguments[r],n);return t},extend:function(e,t,n){return l(t,function(t,i){e[i]=n&&"function"==typeof t?r(t,n):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t,n){e.exports=n(9)},function(e,t,n){"use strict";(function(t){var r=n(0),i=n(13),o={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,c={adapter:("undefined"!=typeof XMLHttpRequest?s=n(4):void 0!==t&&(s=n(4)),s),transformRequest:[function(e,t){return i(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(e){c.headers[e]={}}),r.forEach(["post","put","patch"],function(e){c.headers[e]=r.merge(o)}),e.exports=c}).call(this,n(12))},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";var r=n(0),i=n(14),o=n(16),a=n(17),s=n(18),c=n(5);e.exports=function(e){return new Promise(function(t,l){var u=e.data,f=e.headers;r.isFormData(u)&&delete f["Content-Type"];var d=new XMLHttpRequest;if(e.auth){var p=e.auth.username||"",m=e.auth.password||"";f.Authorization="Basic "+btoa(p+":"+m)}if(d.open(e.method.toUpperCase(),o(e.url,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?a(d.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:n,config:e,request:d};i(t,l,r),d=null}},d.onerror=function(){l(c("Network Error",e,null,d)),d=null},d.ontimeout=function(){l(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var h=n(19),g=(e.withCredentials||s(e.url))&&e.xsrfCookieName?h.read(e.xsrfCookieName):void 0;g&&(f[e.xsrfHeaderName]=g)}if("setRequestHeader"in d&&r.forEach(f,function(e,t){void 0===u&&"content-type"===t.toLowerCase()?delete f[t]:d.setRequestHeader(t,e)}),e.withCredentials&&(d.withCredentials=!0),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){d&&(d.abort(),l(e),d=null)}),void 0===u&&(u=null),d.send(u)})}},function(e,t,n){"use strict";var r=n(15);e.exports=function(e,t,n,i,o){var a=new Error(e);return r(a,t,n,i,o)}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,n){n(32),e.exports=n(27)},function(e,t,n){"use strict";var r=n(0),i=n(3),o=n(11),a=n(2);function s(e){var t=new o(e),n=i(o.prototype.request,t);return r.extend(n,o.prototype,t),r.extend(n,t),n}var c=s(a);c.Axios=o,c.create=function(e){return s(r.merge(a,e))},c.Cancel=n(7),c.CancelToken=n(25),c.isCancel=n(6),c.all=function(e){return Promise.all(e)},c.spread=n(26),e.exports=c,e.exports.default=c},function(e,t){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},function(e,t,n){"use strict";var r=n(2),i=n(0),o=n(20),a=n(21);function s(e){this.defaults=e,this.interceptors={request:new o,response:new o}}s.prototype.request=function(e){"string"==typeof e&&(e=i.merge({url:arguments[0]},arguments[1])),(e=i.merge(r,{method:"get"},this.defaults,e)).method=e.method.toLowerCase();var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},i.forEach(["delete","get","head","options"],function(e){s.prototype[e]=function(t,n){return this.request(i.merge(n||{},{method:e,url:t}))}}),i.forEach(["post","put","patch"],function(e){s.prototype[e]=function(t,n,r){return this.request(i.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=s},function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,l=[],u=!1,f=-1;function d(){u&&c&&(u=!1,c.length?l=c.concat(l):f=-1,l.length&&p())}function p(){if(!u){var e=s(d);u=!0;for(var t=l.length;t;){for(c=l,l=[];++f<t;)c&&c[f].run();f=-1,t=l.length}c=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new m(e,t)),1!==l.length||u||s(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=h,i.addListener=h,i.once=h,i.off=h,i.removeListener=h,i.removeAllListeners=h,i.emit=h,i.prependListener=h,i.prependOnceListener=h,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},function(e,t,n){"use strict";var r=n(5);e.exports=function(e,t,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,i){return e.config=t,n&&(e.code=n),e.request=r,e.response=i,e}},function(e,t,n){"use strict";var r=n(0);function i(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var o;if(n)o=n(t);else if(r.isURLSearchParams(t))o=t.toString();else{var a=[];r.forEach(t,function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(i(t)+"="+i(e))}))}),o=a.join("&")}return o&&(e+=(-1===e.indexOf("?")?"?":"&")+o),e}},function(e,t,n){"use strict";var r=n(0),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,o,a={};return e?(r.forEach(e.split("\n"),function(e){if(o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t){if(a[t]&&i.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}}),a):a}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=i(window.location.href),function(t){var n=r.isString(t)?i(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,i,o,a){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(i)&&s.push("path="+i),r.isString(o)&&s.push("domain="+o),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";var r=n(0);function i(){this.handlers=[]}i.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},i.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},i.prototype.forEach=function(e){r.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=i},function(e,t,n){"use strict";var r=n(0),i=n(22),o=n(6),a=n(2),s=n(23),c=n(24);function l(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return l(e),e.baseURL&&!s(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||a.adapter)(e).then(function(t){return l(e),t.data=i(t.data,t.headers,e.transformResponse),t},function(t){return o(t)||(l(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var r=n(7);function i(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new r(e),t(n.reason))})}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.source=function(){var e;return{token:new i(function(t){e=t}),cancel:e}},e.exports=i},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){var r=n(28);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(30)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(29)(!1)).push([e.i,"@charset \"UTF-8\";\n/*\r\n0-600px:        Phone\r\n600-900px:      Tablet portrait\r\n900-1200px:     Tablet landscape\r\n[1200-1800px]:  Normal styles\r\n1800px +:       Big dekstop\r\n\r\n$breakpoint argument choices:\r\n- phone\r\n- tab-port\r\n- tab-land\r\n- big-desktop\r\n\r\nORDER: Base + Typography > general layout + grid > page layout > components\r\n\r\n1em=16px\r\n */\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit; }\n\nhtml {\n  font-size: 62.5%;\n  /* 10px/16px esto se hace para que el usuario pueda cambiar el tamaño de fuente en el navegador */ }\n  @media (max-width: 75em) {\n    html {\n      font-size: 56.25%; } }\n  @media (max-width: 56.25em) {\n    html {\n      font-size: 50%; } }\n  @media (max-width: 37.5em) {\n    html {\n      font-size: 50%; } }\n  @media (min-width: 112.5em) {\n    html {\n      font-size: 75%; } }\n\nbody {\n  box-sizing: border-box;\n  font-family: 'Montserrat'; }\n\ntextarea:focus,\ninput:focus {\n  outline: none; }\n\n.loader {\n  max-width: 7rem;\n  position: absolute;\n  top: 55%;\n  transform: translateY(-100%);\n  perspective: 40rem; }\n  .loader img {\n    width: 100%;\n    animation: rotate 1.5s infinite linear; }\n\n@keyframes rotate {\n  0% {\n    transform: rotateY(0); }\n  100% {\n    transform: rotateY(360deg); } }\n\n.searchbar {\n  width: 80%;\n  margin-top: 3rem;\n  margin-bottom: 3rem;\n  display: flex;\n  border-bottom: 4px solid #fe0000;\n  padding-bottom: 0.6rem;\n  padding-left: 1rem;\n  z-index: 9999; }\n  .searchbar__button {\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    transition: transform .3s ease; }\n    .searchbar__button:hover {\n      transform: scale(1.2); }\n  .searchbar__input {\n    width: 100%;\n    border: none;\n    font-size: 2rem;\n    margin-left: 1.5rem;\n    text-transform: uppercase;\n    font-weight: 600;\n    font-family: 'Montserrat'; }\n    .searchbar__input::placeholder {\n      text-transform: uppercase;\n      font-weight: 600;\n      font-family: 'Montserrat';\n      color: #fe000091; }\n\n.button {\n  max-width: 4rem;\n  max-height: 4rem;\n  background-color: #fe0000;\n  border-radius: 30px;\n  padding: 1rem;\n  transition: all .2s ease;\n  cursor: pointer;\n  border: none; }\n  .button__icon {\n    width: 100%;\n    height: 100%;\n    fill: #fff; }\n  .button:hover {\n    transform: translateY(-3px) scale(1.1);\n    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2); }\n  .button:active {\n    transform: translateY(-1px) scale(1.05);\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2); }\n\n.main {\n  max-width: 114rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 auto;\n  min-height: calc(100vh - 10rem);\n  padding: 0 2rem;\n  position: relative; }\n\n.content {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  padding-bottom: 100px; }\n\n.header {\n  width: 100%;\n  height: 10rem;\n  background-color: #fe0000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative; }\n  .header__main {\n    display: flex;\n    flex-direction: column;\n    align-items: center; }\n  .header__logo {\n    width: 16rem; }\n  .header__subtitle {\n    font-size: 2rem;\n    text-transform: uppercase;\n    color: white;\n    font-weight: 700;\n    position: relative;\n    top: -10px; }\n  .header__likes {\n    position: absolute;\n    right: 0;\n    cursor: pointer;\n    height: 100%; }\n\n.likes__field {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  padding: 0 3rem; }\n\n.likes__icon {\n  fill: #ffffff;\n  height: 3.75rem;\n  width: 3.75rem; }\n\n.likes__panel {\n  position: absolute;\n  border-radius: 0 0 5px 5px;\n  max-height: 75vh;\n  overflow-y: auto;\n  right: 0;\n  z-index: 999999;\n  padding: 0rem;\n  width: 30rem;\n  background-color: #fe0000;\n  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.2s;\n  cursor: pointer; }\n\n.likes__panel:hover,\n.likes__field:hover + .likes__panel {\n  visibility: visible;\n  opacity: 1; }\n\n.likes__panel.activo,\n.likes__field.activo + .likes__panel {\n  visibility: visible;\n  opacity: 1; }\n\n.likes__link {\n  width: 100%;\n  display: flex;\n  padding: 3rem;\n  color: #ffffff;\n  align-items: center;\n  transition: 0.2s all ease; }\n  .likes__link:hover {\n    background-color: #bb0000; }\n\n.likes__fig {\n  width: 33%;\n  margin-right: 2rem; }\n  .likes__fig img {\n    display: block;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    transition: all 0.3s; }\n\n.detail {\n  margin-top: 40px;\n  display: flex; }\n  @media (max-width: 56.25em) {\n    .detail {\n      flex-direction: column;\n      align-items: center; } }\n  .detail__back {\n    position: absolute;\n    top: 10rem;\n    cursor: pointer;\n    border-radius: 20px;\n    padding-right: 2rem;\n    padding-left: 2rem;\n    background-color: #fe0000;\n    border: none;\n    color: white;\n    height: 3rem;\n    font-size: 1.5rem;\n    transition: all .2s ease; }\n    .detail__back__icon {\n      margin-right: 0.8rem; }\n    .detail__back:hover {\n      transform: translateY(-3px) scale(1.1);\n      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2); }\n    .detail__back:active {\n      transform: translateY(-1px) scale(1.05);\n      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2); }\n  .detail__cover {\n    width: 44rem;\n    margin-right: 10rem;\n    display: flex;\n    align-items: center; }\n    @media (max-width: 56.25em) {\n      .detail__cover {\n        margin-right: 0;\n        margin-bottom: 30px;\n        max-width: 40rem; } }\n    @media (max-width: 37.5em) {\n      .detail__cover {\n        max-width: 25rem; } }\n  .detail__image {\n    width: 100%; }\n  .detail__info {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    flex-basis: 50%; }\n    @media (max-width: 37.5em) {\n      .detail__info {\n        margin-left: 30px;\n        margin-right: 30px; } }\n  .detail__title {\n    color: #fe0000;\n    font-size: 2.6rem;\n    margin-bottom: 40px; }\n    @media (max-width: 37.5em) {\n      .detail__title {\n        font-size: 2rem; } }\n  .detail__data {\n    display: flex;\n    flex-wrap: wrap; }\n  .detail__text {\n    font-size: 1.8rem;\n    margin-bottom: 40px; }\n    @media (max-width: 56.25em) {\n      .detail__text {\n        margin-bottom: 30px; } }\n    @media (max-width: 37.5em) {\n      .detail__text {\n        font-size: 1.6rem; } }\n  .detail__buttons {\n    display: flex; }\n    .detail__buttons .button {\n      margin: 1rem; }\n\n.published {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 40px; }\n  .published__title {\n    margin-right: 30px; }\n\n.writer,\n.artists,\n.cover {\n  width: 50%;\n  text-align: center;\n  margin-bottom: 40px; }\n\n.cover {\n  align-self: flex-start; }\n\n.title {\n  font-size: 2.2rem;\n  text-transform: uppercase; }\n  @media (max-width: 37.5em) {\n    .title {\n      font-size: 1.8rem; } }\n\n.text {\n  font-size: 2rem; }\n\n.home {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center; }\n  .home__image {\n    width: 100%; }\n  .home__text {\n    text-align: center;\n    font-weight: 800;\n    text-transform: uppercase;\n    color: #fe0000;\n    font-size: 3rem; }\n\n.results {\n  display: flex;\n  flex-wrap: wrap;\n  align-content: flex-start;\n  margin-top: 30px; }\n  .results__item {\n    width: calc(25% - 60px);\n    margin-right: 30px;\n    margin-left: 30px;\n    margin-bottom: 60px;\n    position: relative;\n    overflow: hidden; }\n    @media (max-width: 56.25em) {\n      .results__item {\n        width: calc(33% - 60px);\n        margin-right: 30px;\n        margin-left: 30px;\n        margin-bottom: 40px; } }\n    @media (max-width: 37.5em) {\n      .results__item {\n        width: calc(50% - 60px);\n        margin-right: 30px;\n        margin-left: 30px;\n        margin-bottom: 40px; } }\n    .results__item:hover {\n      cursor: pointer; }\n  .results__image {\n    display: block;\n    width: 100%; }\n  .results__layer {\n    width: 100%;\n    background-color: #fe00007a;\n    position: absolute;\n    top: 0;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    transition: all .3s ease;\n    transform: translateY(100%); }\n  .results__title {\n    text-align: center;\n    font-size: 2.5rem;\n    margin: 0 1rem;\n    font-weight: 700;\n    color: white; }\n  .results__item:hover .results__layer {\n    transition: all .3s ease;\n    transform: translateY(0); }\n\n.pagination {\n  display: flex;\n  width: 100%;\n  margin-top: -30px; }\n  .pagination__side {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    cursor: pointer;\n    border-radius: 20px;\n    transition: all .3s ease; }\n    .pagination__side:hover {\n      background-color: #fe0000;\n      color: white; }\n      .pagination__side:hover .pagination__icon {\n        fill: white; }\n    .pagination__side--next {\n      flex-direction: row-reverse;\n      margin-left: auto;\n      padding-left: 2rem;\n      padding-right: 1rem; }\n    .pagination__side--prev {\n      padding-right: 2rem;\n      padding-left: 1rem; }\n  .pagination__text {\n    font-size: 1.3rem; }\n  .pagination__icon {\n    width: 3rem;\n    height: 3rem;\n    fill: #fe0000; }\n",""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(o).concat([i]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(i=0;i<e.length;i++){var a=e[i];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r,i,o={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),s=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),c=null,l=0,u=[],f=n(31);function d(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=o[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(b(r.parts[a],t))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(b(r.parts[a],t));o[r.id]={id:r.id,refs:1,parts:s}}}}function p(e,t){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],a=t.base?o[0]+t.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function m(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),u.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=s(e.insertAt.before,n);n.insertBefore(t,i)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function g(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return v(t,e.attrs),m(e,t),t}function v(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function b(e,t){var n,r,i,o;if(t.transform&&e.css){if(!(o="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=o}if(t.singleton){var a=l++;n=c||(c=g(t)),r=x.bind(null,n,a,!1),i=x.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",v(t,e.attrs),m(e,t),t}(t),r=function(e,t,n){var r=n.css,i=n.sourceMap,o=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||o)&&(r=f(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),i=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){h(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return d(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var a=n[i];(s=o[a.id]).refs--,r.push(s)}e&&d(p(e,t),t);for(i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete o[s.id]}}}};var _,y=(_=[],function(e,t){return _[e]=t,_.filter(Boolean).join("\n")});function x(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var i,o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r);class o{constructor(e){this.query=e}async getResults(e=1,t=8){const n=e*t-t;try{const r=await i()(`https://gateway.marvel.com/v1/public/comics?titleStartsWith=${this.query}&orderBy=onsaleDate&limit=${t}&offset=${n}&apikey=c2dd28e92525d9396598487f252a88af`);this.results=r.data.data.results,this.numResults=r.data.data.total,this.page=e}catch(e){alert(e)}}}class a{constructor(e){this.id=e}async getComic(){try{const e=await i()(`https://gateway.marvel.com/v1/public/comics/${this.id}?apikey=c2dd28e92525d9396598487f252a88af`);console.log(e),this.title=e.data.data.results[0].title,this.issue=e.data.data.results[0].issueNumber,this.description=e.data.data.results[0].description,this.url=e.data.data.results[0].urls[0].url,this.cover=e.data.data.results[0].thumbnail.path+"."+e.data.data.results[0].thumbnail.extension,this.creators=e.data.data.results[0].creators.items,this.date=e.data.data.results[0].dates[0].date}catch(e){alert(e)}}formatDate(){let e=new Date(this.date);e=e.toLocaleDateString("en-US",{month:"long",day:"2-digit",year:"numeric"}),this.date=e}setCreators(){this.creators=this.creators.reduce((e,t)=>(e.find(e=>e.role===t.role)?(e.find(e=>e.role===t.role).name+="|"+t.name,e.find(e=>e.role===t.role).resourceURI+="|"+t.resourceURI):e.push(t),e),[])}}class s{constructor(){this.likes=[]}addLike(e){const t={id:e.id,title:e.title,cover:e.cover};return this.likes.push(t),this.saveToLocal(),t}deleteLike(e){const t=this.likes.findIndex(t=>t.id===e);this.likes.splice(t,1),this.saveToLocal()}isLiked(e){return-1!=this.likes.findIndex(t=>t.id===e)}getNumberLikes(){return this.likes.length}saveToLocal(){localStorage.setItem("likesMarvelDatabase",JSON.stringify(this.likes))}readFromLocal(){const e=JSON.parse(localStorage.getItem("likesMarvelDatabase"));e&&(this.likes=e)}}const c={searchBar:document.querySelector(".searchbar"),searchInput:document.querySelector(".searchbar__input"),mainContent:document.querySelector(".content"),likesList:document.querySelector(".likes__list"),likesMenu:document.querySelector(".likes__field")},l=e=>{e.insertAdjacentHTML("afterbegin",'\n      <div class="loader">\n          <img src="./images/logo-rojo-peq.png" alt=""/>\n      </div>\n  ')},u=()=>{const e=document.querySelector(".loader");e&&e.parentElement.removeChild(e)},f=()=>{c.mainContent.innerHTML=""},d=()=>{c.mainContent.innerHTML=""},p=e=>{const t=document.querySelector(".results"),n=`\n      <div class="results__item animated fadeIn" data-id="${e.id}">\n        <img src="${e.thumbnail.path}/portrait_incredible.jpg" \n        alt="${e.title}" class="results__image" />\n        <div class="results__layer">\n          <p class="results__title">${e.title.toUpperCase()}</p>\n        </div>\n      </div>\n  `;t.insertAdjacentHTML("beforeend",n)},m=(e,t)=>{return`\n  <div class="pagination__side pagination__side--${t}" data-goto=${"prev"===t?e-1:e+1}>\n    <svg class="pagination__icon">\n      <use href="images/icons.svg#icon-triangle-${"prev"===t?"left":"right"}"></use>\n    </svg>\n    <span class="pagination__text">Go to page ${"prev"===t?e-1:e+1}</span>\n  </div>\n  `},h=(e,t,n=1,r=8)=>{const i=document.createElement("section");i.classList.add("results"),c.mainContent.appendChild(i),e.forEach(p);const o=document.createElement("div");o.classList.add("pagination"),i.appendChild(o),((e,t,n)=>{let r;const i=Math.ceil(t/n);t>8&&(1===e&&i>1?r=m(e,"next"):e===i&&i>1?r=m(e,"prev"):e<i&&(r=`\n        ${m(e,"prev")}\n        ${m(e,"next")}\n      `)),document.querySelector(".pagination").insertAdjacentHTML("afterbegin",r)})(n,t,r)},g=e=>{const t=e?"icon-heart":"icon-heart-outlined";console.log("hola"),document.querySelector(".button--like use").setAttribute("href",`images/icons.svg#${t}`)},v=e=>{c.likesMenu.style.visibility=e>0?"visible":"hidden"},b=e=>{const t=`\n        <li>\n            <div class="likes__link" data-id="${e.id}">\n                <figure class="likes__fig">\n                    <img src="${e.cover}" alt="${e.title}">\n                </figure>\n                <div class="likes__data">\n                    <h4 class="likes__name">${e.title}</h4>\n                </div>\n            </div>\n        </li>\n    `;c.likesList.insertAdjacentHTML("beforeend",t)},_={},y=async(e=1)=>{const t=(()=>c.searchInput.value)();(t||_.search)&&(t&&(_.search=new o(t)),c.searchInput.value="",d(),l(c.mainContent),await _.search.getResults(e),u(),_.search.results.length>0?h(_.search.results,_.search.numResults,e):c.mainContent.innerHTML='\n    <section class="home">\n      <img src="./images/balanced.jpg" alt="Not Found" class="home__image" />\n    </section>')};c.searchBar.addEventListener("submit",e=>{e.preventDefault(),y()}),c.mainContent.addEventListener("click",e=>{const t=e.target.closest(".pagination__side");if(t){const e=parseInt(t.dataset.goto);y(e)}});const x=async e=>{const t=e;console.log(t),t&&(d(),l(c.mainContent),_.comic=new a(t),await _.comic.getComic(),_.comic.formatDate(),_.comic.setCreators(),((e,t,n)=>{const r=`\n      <section class="detail">\n        <button class="detail__back"><i class="fas fa-angle-left detail__back__icon"></i>Go Back</button>\n        <div class="detail__cover animated fadeIn">\n          <img src="${e.cover}" alt="${e.title}" class="detail__image" />\n        </div>\n        <div class="detail__info animated fadeInRight">\n          <h2 class="detail__title">${e.title.toUpperCase()}</h2>\n          <div class="detail__data">\n            <div class="published">\n              <h3 class="title published__title">published:</h3>\n              <span class="text published__text">${e.date}</span>\n            </div>\n            ${e.creators.map(e=>((e,t)=>`\n  <div class="artists">\n    <h3 class="title writer__title">${e}</h3>\n    <span class="text writer__text">${t.split("|").join("<br>")}</span>\n  </div>\n  `)(e.role,e.name)).join("")}\n          </div>\n          <p class="detail__text">\n            ${e.description||"There is no description for this comic"}\n          </p>\n          <div class="detail__buttons">\n            <a href="${e.url}" target="_blank" class="button button--buy" title="Buy this comic">\n              <svg class="button__icon">\n                <use href="images/icons.svg#icon-shopping-cart"></use>\n              </svg>\n            </a>\n            <button class="button button--like" title="Add to favorites">\n              <svg class="button__icon">\n                <use href="images/icons.svg#icon-heart${t?"":"-outlined"}"></use>\n              </svg>\n            </button>\n          </div>\n        </div>\n      </section>\n      `;c.mainContent.insertAdjacentHTML("afterbegin",r)})(_.comic,_.likes.isLiked(t)),u(),console.log(_.comic))},w=()=>{if(_.likes||(_.likes=new s),_.likes.isLiked(_.comic.id))_.likes.deleteLike(_.comic.id),g(!1),(e=>{const t=document.querySelector(`.likes__link[data-id="${e}"]`).parentElement;t&&t.parentElement.removeChild(t)})(_.comic.id);else{const e=_.likes.addLike(_.comic);g(!0),b(e)}v(_.likes.getNumberLikes())};window.addEventListener("load",()=>{_.likes||(_.likes=new s),_.likes.readFromLocal(),v(_.likes.getNumberLikes()),_.likes.likes.forEach(e=>{b(e)})}),c.mainContent.addEventListener("click",e=>{const t=e.target.closest(".results__item"),n=e.target.closest(".detail__back"),r=e.target.closest(".button--like");t&&x(t.dataset.id),n&&(_.search?y(_.search.page):(f(),c.mainContent.insertAdjacentHTML("afterbegin",'\n    <section class="home">\n      <img src="./images/gauntlet.png" alt="" class="home__image" />\n      <p class="home__text">snap!</p>\n    </section>\n  '))),r&&w()}),c.likesMenu.addEventListener("click",e=>{const t=e.target.closest(".likes__field");t&&(t.classList.contains("activo")?t.classList.remove("activo"):t.classList.add("activo"))}),c.likesList.addEventListener("click",e=>{const t=e.target.closest(".likes__link");t&&x(t.dataset.id)}),document.querySelector(".main").addEventListener("click",()=>{document.querySelector(".activo").classList.remove("activo")})}]);