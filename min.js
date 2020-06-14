/*! (c) Andrea Giammarchi - ISC */
var lighterhtml=function(e,t){"use strict";function n(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a={};try{a.WeakMap=WeakMap}catch(e){a.WeakMap=function(e,t){var n=t.defineProperty,r=t.hasOwnProperty,a=i.prototype;return a.delete=function(e){return this.has(e)&&delete e[this._]},a.get=function(e){return this.has(e)?e[this._]:void 0},a.has=function(e){return r.call(e,this._)},a.set=function(e,t){return n(e,this._,{configurable:!0,value:t}),this},i;function i(t){n(this,"_",{value:"_@ungap/weakmap"+e++}),t&&t.forEach(o,this)}function o(e){this.set(e[0],e[1])}}(Math.random(),Object)}var i=a.WeakMap,o={};try{o.WeakMap=WeakMap}catch(e){o.WeakMap=function(e,t){var n=t.defineProperty,r=t.hasOwnProperty,a=i.prototype;return a.delete=function(e){return this.has(e)&&delete e[this._]},a.get=function(e){return this.has(e)?e[this._]:void 0},a.has=function(e){return r.call(e,this._)},a.set=function(e,t){return n(e,this._,{configurable:!0,value:t}),this},i;function i(t){n(this,"_",{value:"_@ungap/weakmap"+e++}),t&&t.forEach(o,this)}function o(e){this.set(e[0],e[1])}}(Math.random(),Object)}var u=o.WeakMap,c=!1,l=function(t){var n,r=(n=(e.defaultView.navigator||{}).userAgent,/(Firefox|Safari)\/(\d+)/.test(n)&&!/(Chrom[eium]+|Android)\/(\d+)/.test(n)),a=!("raw"in t)||t.propertyIsEnumerable("raw")||!Object.isFrozen(t.raw);if(r||a){var i={},o=function(e){for(var t=".",n=0;n<e.length;n++)t+=e[n].length+"."+e[n];return i[t]||(i[t]=e)};if(a)l=o;else{var f=new u;l=function(e){return f.get(e)||function(e,t){return f.set(e,t),t}(e,o(e))}}}else c=!0;return s(t)};function s(e){return c?e:l(e)}var f,h="-"+Math.random().toFixed(6)+"%",p=!1;try{"content"in(f=e.createElement("template"))&&(f.innerHTML='<p tabindex="'+h+'"></p>',f.content.childNodes[0].getAttribute("tabindex")==h)||(h="_dt: "+h.slice(1,-1)+";",p=!0)}catch(e){}var v="\x3c!--"+h+"--\x3e",d=8,g=1,m=3,y=/^(?:style|textarea)$/i,b=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;function w(e){return e.join(v).replace(M,T).replace(E,O)}var x=" \\f\\n\\r\\t",N="[^"+x+"\\/>\"'=]+",k="["+x+"]+"+N,A="<([A-Za-z]+[A-Za-z0-9:._-]*)((?:",C="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+N.replace("\\/","")+"))?)",E=new RegExp(A+k+C+"+)(["+x+"]*/?>)","g"),M=new RegExp(A+k+C+"*)(["+x+"]*/>)","g"),S=new RegExp("("+k+"\\s*=\\s*)(['\"]?)"+v+"\\2","gi");function O(e,t,n,r){return"<"+t+n.replace(S,j)+r}function j(e,t,n){return t+(n||'"')+h+(n||'"')}function T(e,t,n){return b.test(t)?e:"<"+t+n+"></"+t+">"}var _=Array.isArray,L=[],W=L.indexOf,$=L.slice,H=function(e){return{get:function(t){return e.get(t)},set:function(t,n){return e.set(t,n),n}}},I=function(t,n){return 111===t.nodeType?1/n<0?n?(a=(r=t).firstChild,i=r.lastChild,(o=e.createRange()).setStartAfter(a),o.setEndAfter(i),o.deleteContents(),a):t.lastChild:n?t.valueOf():t.firstChild:t;var r,a,i,o},P=function(e){var t="fragment",n="content"in a("template")?function(e){var t=a("template");return t.innerHTML=e,t.content}:function(e){var n=a(t),i=a("template"),o=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var u=RegExp.$1;i.innerHTML="<table>"+e+"</table>",o=i.querySelectorAll(u)}else i.innerHTML=e,o=i.childNodes;return r(n,o),n};return function(e,i){return("svg"===i?function(e){var n=a(t),i=a("div");return i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",r(n,i.firstChild.childNodes),n}:n)(e)};function r(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function a(n){return n===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",n)}}(e),R=function(e,t,n,r,a,i){for(var o=("selectedIndex"in t),u=o;r<a;){var c=e(n[r],1);if(t.insertBefore(c,i),o&&u&&c.selected){u=!u;var l=t.selectedIndex;t.selectedIndex=l<0?r:W.call(t.querySelectorAll("option"),c)}r++}},D=function(e,t){return e==t},F=function(e){return e},z=function(e,t,n,r,a,i,o){var u=i-a;if(u<1)return-1;for(;n-t>=u;){for(var c=t,l=a;c<n&&l<i&&o(e[c],r[l]);)c++,l++;if(l===i)return t;t=c+1}return-1},Z=function(e,t,n,r,a){return n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:a},q=function(e,t,n,r){for(;n<r;)B(e(t[n++],-1))},V=function(e,t,n){for(var r=1,a=t;r<a;){var i=(r+a)/2>>>0;n<e[i]?a=i:r=i+1}return r},G=function(e,t,n,r,a,i,o,u,c,l,s,f,h){!function(e,t,n,r,a,i,o,u,c){for(var l=[],s=e.length,f=o,h=0;h<s;)switch(e[h++]){case 0:a++,f++;break;case 1:l.push(r[a]),R(t,n,r,a++,a,f<u?t(i[f],0):c);break;case-1:f++}for(h=0;h<s;)switch(e[h++]){case 0:o++;break;case-1:-1<l.indexOf(i[o])?o++:q(t,i,o++,o)}}(function(e,t,n,r,a,i,o){var u,c,l,s,f,h,p,v=n+i,d=[];e:for(u=0;u<=v;u++){if(u>50)return null;for(p=u-1,f=u?d[u-1]:[0,0],h=d[u]=[],c=-u;c<=u;c+=2){for(l=(s=c===-u||c!==u&&f[p+c-1]<f[p+c+1]?f[p+c+1]:f[p+c-1]+1)-c;s<i&&l<n&&o(r[a+s],e[t+l]);)s++,l++;if(s===i&&l===n)break e;h[u+c]=s}}var g=Array(u/2+v/2),m=g.length-1;for(u=d.length-1;u>=0;u--){for(;s>0&&l>0&&o(r[a+s-1],e[t+l-1]);)g[m--]=0,s--,l--;if(!u)break;p=u-1,f=u?d[u-1]:[0,0],(c=s-l)==-u||c!==u&&f[p+c-1]<f[p+c+1]?(l--,g[m--]=1):(s--,g[m--]=-1)}return g}(n,r,i,o,u,l,f)||function(e,t,n,r,a,i,o,u){var c=0,l=r<u?r:u,s=Array(l++),f=Array(l);f[0]=-1;for(var h=1;h<l;h++)f[h]=o;for(var p=a.slice(i,o),v=t;v<n;v++){var d=p.indexOf(e[v]);if(-1<d){var g=d+i;-1<(c=V(f,l,g))&&(f[c]=g,s[c]={newi:v,oldi:g,prev:s[c-1]})}}for(c=--l,--o;f[c]>o;)--c;l=u+r-c;var m=Array(l),y=s[c];for(--n;y;){for(var b=y,w=b.newi,x=b.oldi;n>w;)m[--l]=1,--n;for(;o>x;)m[--l]=-1,--o;m[--l]=0,--n,--o,y=y.prev}for(;n>=t;)m[--l]=1,--n;for(;o>=i;)m[--l]=-1,--o;return m}(n,r,a,i,o,u,c,l),e,t,n,r,o,u,s,h)},B=function(e){return(e.remove||function(){var e=this.parentNode;e&&e.removeChild(this)}).call(e)};var U=function(e,t,n,r){r||(r={});for(var a=r.compare||D,i=r.node||F,o=null==r.before?null:i(r.before,0),u=t.length,c=u,l=0,s=n.length,f=0;l<c&&f<s&&a(t[l],n[f]);)l++,f++;for(;l<c&&f<s&&a(t[c-1],n[s-1]);)c--,s--;var h=l===c,p=f===s;if(h&&p)return n;if(h&&f<s)return R(i,e,n,f,s,Z(i,t,l,u,o)),n;if(p&&l<c)return q(i,t,l,c),n;var v=c-l,d=s-f,g=-1;if(v<d){if(-1<(g=z(n,f,s,t,l,c,a)))return R(i,e,n,f,g,i(t[l],0)),R(i,e,n,g+v,s,Z(i,t,c,u,o)),n}else if(d<v&&-1<(g=z(t,l,c,n,f,s,a)))return q(i,t,l,g),q(i,t,g+d,c),n;return v<2||d<2?(R(i,e,n,f,s,i(t[l],0)),q(i,t,l,c),n):v===d&&function(e,t,n,r,a,i){for(;r<a&&i(n[r],e[t-1]);)r++,t--;return 0===t}(n,s,t,l,c,a)?(R(i,e,n,f,s,Z(i,t,c,u,o)),n):(G(i,e,n,f,s,d,t,l,c,v,u,a,o),n)},J={};try{J.WeakMap=WeakMap}catch(e){J.WeakMap=function(e,t){var n=t.defineProperty,r=t.hasOwnProperty,a=i.prototype;return a.delete=function(e){return this.has(e)&&delete e[this._]},a.get=function(e){return this.has(e)?e[this._]:void 0},a.has=function(e){return r.call(e,this._)},a.set=function(e,t){return n(e,this._,{configurable:!0,value:t}),this},i;function i(t){n(this,"_",{value:"_@ungap/weakmap"+e++}),t&&t.forEach(o,this)}function o(e){this.set(e[0],e[1])}}(Math.random(),Object)}var K=J.WeakMap,Q=function(e){var t="fragment",n="content"in a("template")?function(e){var t=a("template");return t.innerHTML=e,t.content}:function(e){var n=a(t),i=a("template"),o=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var u=RegExp.$1;i.innerHTML="<table>"+e+"</table>",o=i.querySelectorAll(u)}else i.innerHTML=e,o=i.childNodes;return r(n,o),n};return function(e,i){return("svg"===i?function(e){var n=a(t),i=a("div");return i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",r(n,i.firstChild.childNodes),n}:n)(e)};function r(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function a(n){return n===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",n)}}(e),X=function(e,t,n,r,a){var i="importNode"in e,o=e.createDocumentFragment();return o.appendChild(e.createTextNode("g")),o.appendChild(e.createTextNode("")),(i?e.importNode(o,!0):o.cloneNode(!0)).childNodes.length<2?function e(t,n){for(var r=t.cloneNode(),a=t.childNodes||[],i=a.length,o=0;n&&o<i;o++)r.appendChild(e(a[o],n));return r}:i?e.importNode:function(e,t){return e.cloneNode(!!t)}}(e),Y="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")},ee=p?function(e,t){var n=t.join(" ");return t.slice.call(e,0).sort(function(e,t){return n.indexOf(e.name)<=n.indexOf(t.name)?-1:1})}:function(e,t){return t.slice.call(e,0)};function te(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function ne(t,n,r,a){for(var i=t.attributes,o=[],u=[],c=ee(i,r),l=c.length,s=0;s<l;){var f,d=c[s++],g=d.value===h;if(g||1<(f=d.value.split(v)).length){var m=d.name;if(o.indexOf(m)<0){o.push(m);var y=r.shift().replace(g?/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/:new RegExp("^(?:|[\\S\\s]*?\\s)("+m+")\\s*=\\s*('|\")[\\S\\s]*","i"),"$1"),b=i[y]||i[y.toLowerCase()];if(g)n.push(ae(b,a,y,null));else{for(var w=f.length-2;w--;)r.shift();n.push(ae(b,a,y,f))}}u.push(d)}}s=0;for(var x=(0<(l=u.length)&&p&&!("ownerSVGElement"in t));s<l;){var N=u[s++];x&&(N.value=""),t.removeAttribute(N.name)}var k=t.nodeName;if(/^script$/i.test(k)){var A=e.createElement(k);for(l=i.length,s=0;s<l;)A.setAttributeNode(i[s++].cloneNode(!0));A.textContent=t.textContent,t.parentNode.replaceChild(A,t)}}function re(e,t){return{type:"any",node:e,path:t}}function ae(e,t,n,r){return{type:"attr",node:e,path:t,name:n,sparse:r}}function ie(e,t){return{type:"text",node:e,path:t}}var oe=H(new K);function ue(e,t){var n=(e.convert||w)(t),r=e.transform;r&&(n=r(n));var a=Q(n,e.type);se(a);var i=[];return function e(t,n,r,a){for(var i=t.childNodes,o=i.length,u=0;u<o;){var c=i[u];switch(c.nodeType){case g:var l=a.concat(u);ne(c,n,r,l),e(c,n,r,l);break;case d:var s=c.textContent;if(s===h)r.shift(),n.push(y.test(t.nodeName)?ie(t,a):re(c,a.concat(u)));else switch(s.slice(0,2)){case"/*":if("*/"!==s.slice(-2))break;case"👻":t.removeChild(c),u--,o--}break;case m:y.test(t.nodeName)&&Y.call(c.textContent)===v&&(r.shift(),n.push(ie(t,a)))}u++}}(a,i,t.slice(0),[]),{content:a,updates:function(n){for(var r=[],a=i.length,o=0,u=0;o<a;){var c=i[o++],l=te(n,c.path);switch(c.type){case"any":r.push({fn:e.any(l,[]),sparse:!1});break;case"attr":var s=c.sparse,f=e.attribute(l,c.name,c.node);null===s?r.push({fn:f,sparse:!1}):(u+=s.length-2,r.push({fn:f,sparse:!0,values:s}));break;case"text":r.push({fn:e.text(l),sparse:!1}),l.textContent=""}}return a+=u,function(){var e=arguments.length;if(a!==e-1)throw new Error(e-1+" values instead of "+a+"\n"+t.join("${value}"));for(var i=1,o=1;i<e;){var u=r[i-o];if(u.sparse){var c=u.values,l=c[0],s=1,f=c.length;for(o+=f-2;s<f;)l+=arguments[i++]+c[s++];u.fn(l)}else u.fn(arguments[i++])}return n}}}}var ce=[];function le(t){var n=ce,r=se;return function(a){return n!==a&&(r=function(t,n){var r=oe.get(n)||oe.set(n,ue(t,n));return r.updates(X.call(e,r.content,!0))}(t,n=a)),r.apply(null,arguments)}}function se(e){for(var t=e.childNodes,n=t.length;n--;){var r=t[n];1!==r.nodeType&&0===Y.call(r.textContent).length&&e.removeChild(r)}}var fe=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,a){var i,o;return function(u){var c,l,s,f;switch(typeof u){case"object":if(u){if("object"===i){if(!a&&o!==u)for(l in o)l in u||(r[l]="")}else a?r.value="":r.cssText="";for(l in c=a?{}:r,u)s="number"!=typeof(f=u[l])||e.test(l)?f:f+"px",!a&&/^--/.test(l)?c.setProperty(l,s):c[l]=s;i="object",a?r.value=function(e){var r,a=[];for(r in e)a.push(r.replace(t,n),":",e[r],";");return a.join("")}(o=c):o=u;break}default:o!=u&&(i="string",o=u,a?r.value=u||"":r.cssText=u||"")}}}}(),he=function(t,n){var r,a=!0,i=e.createAttributeNS(null,n);return function(e){r!==e&&(null==(r=e)?a||(t.removeAttributeNode(i),a=!0):(i.value=e,a&&(t.setAttributeNodeNS(i),a=!1)))}},pe=function(e,t){return function(n){e[t]=n}},ve=/^(?:form|list)$/i;function de(e){return this.type=e,le(this)}function ge(e){return e(this)}de.prototype={attribute:function(e,t,n){var r,a="svg"===this.type;switch(t){case"class":if(a)return he(e,t);t="className";case"props":return pe(e,t);case"aria":return function(e){return function(t){for(var n in t)e.setAttribute("role"===n?n:"aria-".concat(n),t[n])}}(e);case"style":return fe(e,n,a);case"ref":return function(e){return function(t){"function"==typeof t?t(e):t.current=e}}(e);case"data":if(!(t in e))return r=e.dataset,function(e){for(var t in e)r[t]=e[t]};default:return"."===t.slice(0,1)?pe(e,t.slice(1)):"on"===t.slice(0,2)?function(e,t){var n,r=t.slice(2);return!(t in e)&&t.toLowerCase()in e&&(r=r.toLowerCase()),function(t){var a=_(t)?t:[t,!1];n!==a[0]&&(n&&e.removeEventListener(r,n,a[1]),(n=a[0])&&e.addEventListener(r,n,a[1]))}}(e,t):t in e&&!a&&!ve.test(t)?function(e,t){var n;return function(r){n!==r&&(n=r,e[t]!==r&&(null==r?(e[t]="",e.removeAttribute(t)):e[t]=r))}}(e,t):he(e,t)}},any:function(e,t){var n,r={node:I,before:e},a=this.type,i=!1;return function o(u){switch(typeof u){case"string":case"number":case"boolean":i?n!==u&&(n=u,t[0].textContent=u):(i=!0,n=u,t=U(e.parentNode,t,[function(e,t){return e.ownerDocument.createTextNode(t)}(e,u)],r));break;case"function":o(u(e));break;case"object":case"undefined":if(null==u){i=!1,t=U(e.parentNode,t,[],r);break}default:if(i=!1,n=u,_(u))if(0===u.length)t.length&&(t=U(e.parentNode,t,[],r));else switch(typeof u[0]){case"string":case"number":case"boolean":o(String(u));break;case"function":o(u.map(ge,e));break;case"object":_(u[0])&&(u=u.concat.apply([],u));default:t=U(e.parentNode,t,u,r)}else"ELEMENT_NODE"in u?t=U(e.parentNode,t,11===u.nodeType?$.call(u.childNodes):[u],r):"text"in u?o(String(u.text)):"any"in u?o(u.any):"html"in u?t=U(e.parentNode,t,$.call(P([].concat(u.html).join(""),a).childNodes),r):"length"in u&&o($.call(u))}}},text:function(e){var t;return function n(r){if(t!==r){t=r;var a=typeof r;"object"===a&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n($.call(r).join("")):"function"===a?n(r(e)):e.textContent=null==r?"":r}}}};var me=Object.create,ye=Object.freeze,be=Object.keys,we=de.prototype,xe=H(new i),Ne=function(e){return{html:Ae("html",e),svg:Ae("svg",e),render:function(t,n){var r="function"==typeof n?n():n,a=xe.get(t)||xe.set(t,ke()),i=r instanceof Me?Ce(e,a,r):r;return i!==a.wire&&(a.wire=i,t.textContent="",t.appendChild(i.valueOf())),t}}},ke=function(){return{stack:[],entry:null,wire:null}},Ae=function(e,t){var n=H(new i);return r.for=function(e,a){var i,o=n.get(e)||n.set(e,me(null));return o[a]||(o[a]=(i=ke(),function(){return Ce(t,i,r.apply(null,arguments))}))},r.node=function(){return Ce(t,ke(),r.apply(null,arguments)).valueOf()},r;function r(){return new Me(e,function(e){for(var t=arguments.length,n=[s(e)],r=1;r<t;)n.push(arguments[r++]);return n}.apply(null,arguments))}},Ce=function(e,t,r){var a,i=r.type,o=r.template,u=r.values,c=u.length;Ee(e,t,u,c);var l=t.entry;if(l&&l.template===o&&l.type===i)(a=l).tag.apply(a,[o].concat(n(u)));else{var s=new e(i);t.entry=l={type:i,template:o,tag:s,wire:function(e){var t=e.childNodes,n=t.length;if(n<2)return t[0];var r=$.call(t,0);return{ELEMENT_NODE:1,nodeType:111,firstChild:r[0],lastChild:r[n-1],valueOf:function(){if(t.length!==n)for(var a=0;a<n;)e.appendChild(r[a++]);return e}}}(s.apply(void 0,[o].concat(n(u))))}}return l.wire},Ee=function e(t,n,r,a){for(var i=n.stack,o=0;o<a;o++){var u=r[o];u instanceof Se?r[o]=Ce(t,i[o]||(i[o]=ke()),u):_(u)?e(t,i[o]||(i[o]=ke()),u,u.length):i[o]=null}a<i.length&&i.splice(a)};function Me(e,t){this.type=e,this.template=t.shift(),this.values=t}ye(Me);var Se=Me,Oe=Ne(de),je=Oe.render,Te=Oe.html,_e=Oe.svg;return t.Hole=Se,t.custom=function(e){var t=me(we);return be(e).forEach(function(n){t[n]=e[n](t[n]||("convert"===n?w:String))}),n.prototype=t,Ne(n);function n(){return de.apply(this,arguments)}},t.html=Te,t.render=je,t.svg=_e,t}(document,{});
