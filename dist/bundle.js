(()=>{"use strict";var e,t,r,n,o,a,i,c,s,u,l,f,p,d,v={740:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,"h1{\r\n    text-align: center;\r\n}\r\nh2{\r\n    text-align: center;\r\n    color: red;\r\n}\r\n",""]);const a=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);n&&o[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),t.push(s))}},t}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],u=n.base?s[0]+n.base:s[0],l=a[u]||0,f="".concat(u," ").concat(l);a[u]=l+1;var p=r(f),d={css:s[1],media:s[2],sourceMap:s[3]};-1!==p?(t[p].references++,t[p].updater(d)):t.push({identifier:f,updater:o(d,n),references:1}),i.push(f)}return i}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=r(a[i]);t[c].references--}for(var s=n(e,o),u=0;u<a.length;u++){var l=r(a[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n=r.css,o=r.media,a=r.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},h={};function m(e){var t=h[e];if(void 0!==t)return t.exports;var r=h[e]={id:e,exports:{}};return v[e](r,r.exports,m),r.exports}m.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return m.d(t,{a:t}),t},m.d=(e,t)=>{for(var r in t)m.o(t,r)&&!m.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},m.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),m.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;m.g.importScripts&&(e=m.g.location+"");var t=m.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),m.p=e})(),e=m(379),t=m.n(e),r=m(795),n=m.n(r),o=m(569),a=m.n(o),i=m(565),c=m.n(i),s=m(216),u=m.n(s),l=m(589),f=m.n(l),p=m(740),(d={}).styleTagTransform=f(),d.setAttributes=c(),d.insert=a().bind(null,"head"),d.domAPI=n(),d.insertStyleElement=u(),t()(p.Z,d),p.Z&&p.Z.locals&&p.Z.locals,m.p})();