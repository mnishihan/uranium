(function(){function e(a,b){var c;if(typeof a==p){var j=a,u=b.firstChild===null?{UL:"LI",DL:"DT",TR:"TD"}[b.tagName]||b.tagName:b.firstChild.tagName;c={};var f=/^<([A-Z][A-Z0-9]*)([^>]*)>([\s\S]*)<\/\1>/i,d,g;g=0;var m;if(f.test(j)){f=f.exec(j);u=f[1];if(f[2]!=="")for(j=f[2].split(/([A-Z]*\s*=\s*['|"][A-Z0-9:;#\s]*['|"])/i);g<j.length;g++)m=j[g].replace(/^\s*|\s*$/g,""),m!==""&&m!==" "&&(m=m.split("="),c[m[0]]=m[1].replace(/(["']?)/g,""));j=f[3]}u=n.createElement(u);for(d in c)g=n.createAttribute(d),
g.nodeValue=c[d],u.setAttributeNode(g);u.innerHTML=j;c=u}else c=a;return c}function l(a){var b=/\S/;a.each(function(a){for(var j=a.firstChild,u=-1,f;j;)f=j.nextSibling,j.nodeType==3&&!b.test(j.nodeValue)?a.removeChild(j):j.nodeIndex=++u,j=f})}function d(a){if(a._xuiEventID)return a._xuiEventID;return a._xuiEventID=++d.id}function f(a,b){var c=s[a]=s[a]||{};return c[b]=c[b]||[]}function k(a,b,c){var j=d(a),b=f(j,b),j=function(b){c.call(a,b)===!1&&(b.preventDefault(),b.stopPropagation())};j.guid=c.guid=
c.guid||++d.id;j.handler=c;b.push(j);return j}var g,h=this,p=new String("string"),n=h.document,t=/^#?([\w-]+)$/,v=/^#/,E=/<([\w:]+)/,o=function(a){return[].slice.call(a,0)};try{o(n.documentElement.childNodes)}catch(r){o=function(a){for(var b=[],c=0;a[c];c++)b.push(a[c]);return b}}h.x$=h.xui=g=function(a,b){return new g.fn.find(a,b)};if(![].forEach)Array.prototype.forEach=function(a,b){var c=this.length||0,j=0;if(typeof a=="function")for(;j<c;j++)a.call(b,this[j],j,this)};g.fn=g.prototype={extend:function(a){for(var b in a)g.fn[b]=
a[b]},find:function(a,b){var c=[],j;if(a)if(b==void 0&&this.length)c=this.each(function(b){c=c.concat(o(g(a,b)))}).reduce(c);else if(b=b||n,typeof a==p)t.test(a)&&b.getElementById&&b.getElementsByTagName?(c=v.test(a)?[b.getElementById(a.substr(1))]:b.getElementsByTagName(a),c[0]==null&&(c=[])):E.test(a)?(j=n.createElement("i"),j.innerHTML=a,o(j.childNodes).forEach(function(a){c.push(a)})):c=h.Sizzle!==void 0?Sizzle(a,b):b.querySelectorAll(a),c=o(c);else if(a instanceof Array)c=a;else if(a.toString()==
"[object NodeList]")c=o(a);else{if(a.nodeName||a===h)c=[a]}else return this;return this.set(c)},set:function(a){var b=g();b.cache=o(this.length?this:[]);b.length=0;[].push.apply(b,a);return b},reduce:function(a,b){var c=[],a=a||o(this);a.forEach(function(a){c.indexOf(a,0,b)<0&&c.push(a)});return c},has:function(a){var b=g(a);return this.filter(function(){var a=this,j=null;b.each(function(b){j=j||b==a});return j})},filter:function(a){var b=[];return this.each(function(c,j){a.call(c,j)&&b.push(c)}).set(b)},
not:function(a){var b=o(this);return this.filter(function(c){var j;g(a).each(function(a){return j=b[c]!=a});return j})},each:function(a){for(var b=0,c=this.length;b<c;++b)if(a.call(this[b],this[b],b,this)===!1)break;return this}};g.fn.find.prototype=g.fn;g.extend=g.fn.extend;g.extend({html:function(a,b){l(this);if(arguments.length==0)return this[0].innerHTML;arguments.length==1&&arguments[0]!="remove"&&(b=a,a="inner");if(a!="remove"&&b&&b.each!==void 0){if(a=="inner"){var c=n.createElement("p");b.each(function(a){c.appendChild(a)});
this.each(function(a){a.innerHTML=c.innerHTML})}else{var j=this;b.each(function(b){j.html(a,b)})}return this}return this.each(function(c){var j,f=0;if(a=="inner")if(typeof b==p||typeof b=="number"){c.innerHTML=b;c=c.getElementsByTagName("SCRIPT");for(j=c.length;f<j;f++)eval(c[f].text)}else c.innerHTML="",c.appendChild(b);else a=="outer"?c.parentNode.replaceChild(e(b,c),c):a=="top"?c.insertBefore(e(b,c),c.firstChild):a=="bottom"?c.insertBefore(e(b,c),null):a=="remove"?c.parentNode.removeChild(c):a==
"before"?c.parentNode.insertBefore(e(b,c.parentNode),c):a=="after"&&c.parentNode.insertBefore(e(b,c.parentNode),c.nextSibling)})},attr:function(a,b){if(arguments.length==2)return this.each(function(c){a=="checked"&&(b==""||b==!1||typeof b=="undefined")?c.removeAttribute(a):c.setAttribute(a,b)});else{var c=[];this.each(function(b){b=b.getAttribute(a);b!=null&&c.push(b)});return c}}});"inner outer top bottom remove before after".split(" ").forEach(function(a){g.fn[a]=function(a){return function(c){return this.html(a,
c)}}(a)});g.events={};var s={};g.extend({on:function(a,b,c){return this.each(function(j){if(g.events[a]){var e=d(j),e=f(e,a);c=c||{};c.handler=function(b,c){g.fn.fire.call(g(this),a,c)};e.length||g.events[a].call(j,c)}j.addEventListener(a,k(j,a,b),!1)})},un:function(a,b){return this.each(function(c){for(var j=d(c),g=f(j,a),e=g.length;e--;)if(b===void 0||b.guid===g[e].guid){c.removeEventListener(a,g[e],!1);var h=s[j][a],x=e,m=h.slice(2);h.length=x<0?h.length+x:x;h.push.apply(h,m)}s[j][a].length===
0&&delete s[j][a];for(var k in s[j])return;delete s[j]})},fire:function(a,b){return this.each(function(c){if(c==n&&!c.dispatchEvent)c=n.documentElement;var f=n.createEvent("HTMLEvents");f.initEvent(a,!0,!0);f.data=b||{};f.eventName=a;c.dispatchEvent(f)})}});"click load submit touchstart touchmove touchend touchcancel gesturestart gesturechange gestureend orientationchange".split(" ").forEach(function(a){g.fn[a]=function(a){return function(c){return c?this.on(a,c):this.fire(a)}}(a)});g(h).on("load",
function(){"onorientationchange"in n.body||function(a,b){g(h).on("resize",function(){var c=h.innerWidth<a&&h.innerHeight>b&&h.innerWidth<h.innerHeight,f=h.innerWidth>a&&h.innerHeight<b&&h.innerWidth>h.innerHeight;if(c||f)h.orientation=c?0:90,g("body").fire("orientationchange"),a=h.innerWidth,b=h.innerHeight})}(h.innerWidth,h.innerHeight)});var y;try{y=!!n.createEvent("TouchEvent").initTouchEvent}catch(G){y=!1}g.touch=y;d.id=1;g.extend({tween:function(a,b){a instanceof Array&&a.forEach(function(){});
var c=function(){var c={};"duration after easing".split(" ").forEach(function(b){a[b]&&(c[b]=a[b],delete a[b])});return c}(a),f=function(a){var b=[],c;if(typeof a!=p){for(c in a)b.push(c+":"+a[c]);b=b.join(";")}else b=a;return b}(a);return this.each(function(a){emile(a,f,c,b)})}});var A=/^(\s|\u00A0)+|(\s|\u00A0)+$/g;g.extend({setStyle:function(a,b){a=a.replace(/\-[a-z]/g,function(a){return a[1].toUpperCase()});return this.each(function(c){c.style[a]=b})},getStyle:function(a,b){var c=function(a,b){return n.defaultView.getComputedStyle(a,
"").getPropertyValue(b.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()}))};if(b===void 0){var f=[];this.each(function(b){f.push(c(b,a))});return f}else this.each(function(f){b(c(f,a))})},addClass:function(a){return this.each(function(b){if(z(a).test(b.className)===!1)b.className=(b.className+" "+a||"").replace(A,"")})},hasClass:function(a,b){var c=this;return this.length&&function(){var f=!1;c.each(function(c){z(a).test(c.className)&&(f=!0,b&&b(c))});return f}()},removeClass:function(a){if(a===
void 0)this.each(function(a){a.className=""});else{var b=z(a);this.each(function(a){var f;f=(a.className.replace(b,"$1")||"").replace(A,"");a.className=f})}return this},css:function(a){for(var b in a)this.setStyle(b,a[b]);return this}});var B={},z=function(a){var b=B[a];b||(b=RegExp("(^|\\s+)"+a+"(?:\\s+|$)"),B[a]=b);return b};g.extend({xhr:function(a,b,c){function f(){e.readyState==4&&(delete d.xmlHttpRequest,(e.status===0||e.status==200)&&e.handleResp(),/^[45]/.test(e.status)&&e.handleError())}
/^(inner|outer|top|bottom|before|after)$/.test(a)||(c=b,b=a,a="inner");var g=c?c:{};if(typeof c=="function")g={},g.callback=c;var d=this,e=new XMLHttpRequest,c=g.method||"get",h=g.async||!1,m=g.data||null,k=0;e.queryString=m;e.open(c,b,h);if(g.headers)for(;k<g.headers.length;k++)e.setRequestHeader(g.headers[k].name,g.headers[k].value);e.handleResp=g.callback!=null?g.callback:function(){d.html(a,this.responseText)};e.handleError=g.error&&typeof g.error=="function"?g.error:function(){};if(h)e.onreadystatechange=
f,this.xmlHttpRequest=e;e.send(m);h||f();return this}});(function(a,b){function c(a,b,c){return(a+(b-a)*c).toFixed(3)}function f(a,b,c){for(var g=2,e,d,h=[],j=[];e=3,d=arguments[g-1],g--;)if(d.substr(0,1)=="r")for(d=d.match(/\d+/g);e--;)h.push(~~d[e]);else for(d.length==4&&(d="#"+d.substr(1,1)+d.substr(1,1)+d.substr(2,1)+d.substr(2,1)+d.substr(3,1)+d.substr(3,1));e--;)h.push(parseInt(d.substr(1+e*2,2),16));for(;e--;)g=~~(h[e+3]+(h[e]-h[e+3])*c),j.push(g<0?0:g>255?255:g);return"rgb("+j.join(",")+")"}
function g(a){var b=parseFloat(a),a=a.replace(/^[\-\d\.]+/,"");return isNaN(b)?{v:a,f:f,u:""}:{v:b,f:c,u:a}}function e(a){var b={},c=h.length,f;d.innerHTML='<div style="'+a+'"></div>';for(a=d.childNodes[0].style;c--;)if(f=a[h[c]])b[h[c]]=g(f);return b}var d=n.createElement("div"),h="backgroundColor borderBottomColor borderBottomWidth borderLeftColor borderLeftWidth borderRightColor borderRightWidth borderSpacing borderTopColor borderTopWidth bottom color fontSize fontWeight height left letterSpacing lineHeight marginBottom marginLeft marginRight marginTop maxHeight maxWidth minHeight minWidth opacity outlineColor outlineOffset outlineWidth paddingBottom paddingLeft paddingRight paddingTop right textIndent top width wordSpacing zIndex".split(" ");
b[a]=function(a,b,c,f){var a=typeof a=="string"?n.getElementById(a):a,c=c||{},d=e(b),b=a.currentStyle?a.currentStyle:getComputedStyle(a,null),h,j={},k=+new Date,i=c.duration||200,C=k+i,D,F=c.easing||function(i){return-Math.cos(i*Math.PI)/2+0.5};for(h in d)j[h]=g(b[h]);D=setInterval(function(){var b=+new Date,g=b>C?1:(b-k)/i;for(h in d)a.style[h]=d[h].f(j[h].v,d[h].v,F(g))+d[h].u;b>C&&(clearInterval(D),c.after&&c.after(),f&&setTimeout(f,1))},10)}})("emile",this);(function(){function a(i,a,b,c,f,d){for(var f=
0,g=c.length;f<g;f++){var e=c[f];if(e){for(var e=e[i],k=!1;e;){if(e.sizcache===b){k=c[e.sizset];break}if(e.nodeType===1&&!d)e.sizcache=b,e.sizset=f;if(e.nodeName.toLowerCase()===a){k=e;break}e=e[i]}c[f]=k}}}function b(i,a,b,c,f,d){for(var f=0,g=c.length;f<g;f++){var e=c[f];if(e){for(var e=e[i],h=!1;e;){if(e.sizcache===b){h=c[e.sizset];break}if(e.nodeType===1){if(!d)e.sizcache=b,e.sizset=f;if(typeof a!=="string"){if(e===a){h=!0;break}}else if(k.filter(a,[e]).length>0){h=e;break}}e=e[i]}c[f]=h}}}var c=
/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,f=0,g=Object.prototype.toString,d=!1,e=!0;[0,0].sort(function(){e=!1;return 0});var k=function(i,a,b,f){var b=b||[],e=a=a||n;if(a.nodeType!==1&&a.nodeType!==9)return[];if(!i||typeof i!=="string")return b;var d=[],h,j,q,o,p=!0,r=k.isXML(a),v=i,w;do if(c.exec(""),h=c.exec(v))if(v=h[3],d.push(h[1]),h[2]){o=h[3];break}while(h);if(d.length>1&&l.exec(i))if(d.length===2&&
m.relative[d[0]])j=s(d[0]+d[1],a);else for(j=m.relative[d[0]]?[a]:k(d.shift(),a);d.length;)i=d.shift(),m.relative[i]&&(i+=d.shift()),j=s(i,j);else if(!f&&d.length>1&&a.nodeType===9&&!r&&m.match.ID.test(d[0])&&!m.match.ID.test(d[d.length-1])&&(h=k.find(d.shift(),a,r),a=h.expr?k.filter(h.expr,h.set)[0]:h.set[0]),a){h=f?{expr:d.pop(),set:t(f)}:k.find(d.pop(),d.length===1&&(d[0]==="~"||d[0]==="+")&&a.parentNode?a.parentNode:a,r);j=h.expr?k.filter(h.expr,h.set):h.set;for(d.length>0?q=t(j):p=!1;d.length;)h=
w=d.pop(),m.relative[w]?h=d.pop():w="",h==null&&(h=a),m.relative[w](q,h,r)}else q=[];q||(q=j);q||k.error(w||i);if(g.call(q)==="[object Array]")if(p)if(a&&a.nodeType===1)for(i=0;q[i]!=null;i++)q[i]&&(q[i]===!0||q[i].nodeType===1&&k.contains(a,q[i]))&&b.push(j[i]);else for(i=0;q[i]!=null;i++)q[i]&&q[i].nodeType===1&&b.push(j[i]);else b.push.apply(b,q);else t(q,b);o&&(k(o,e,b,f),k.uniqueSort(b));return b};k.uniqueSort=function(i){if(r&&(d=e,i.sort(r),d))for(var a=1;a<i.length;a++)i[a]===i[a-1]&&i.splice(a--,
1);return i};k.matches=function(i,a){return k(i,null,null,a)};k.find=function(i,a,b){var c;if(!i)return[];for(var f=0,d=m.order.length;f<d;f++){var e=m.order[f],g;if(g=m.leftMatch[e].exec(i)){var h=g[1];g.splice(1,1);if(h.substr(h.length-1)!=="\\"&&(g[1]=(g[1]||"").replace(/\\/g,""),c=m.find[e](g,a,b),c!=null)){i=i.replace(m.match[e],"");break}}}c||(c=a.getElementsByTagName("*"));return{set:c,expr:i}};k.filter=function(i,a,b,c){for(var f=i,d=[],e=a,g,h,j=a&&a[0]&&k.isXML(a[0]);i&&a.length;){for(var l in m.filter)if((g=
m.leftMatch[l].exec(i))!=null&&g[2]){var n=m.filter[l],o,p;p=g[1];h=!1;g.splice(1,1);if(p.substr(p.length-1)!=="\\"){e===d&&(d=[]);if(m.preFilter[l])if(g=m.preFilter[l](g,e,b,d,c,j)){if(g===!0)continue}else h=o=!0;if(g)for(var r=0;(p=e[r])!=null;r++)if(p){o=n(p,g,r,e);var t=c^!!o;b&&o!=null?t?h=!0:e[r]=!1:t&&(d.push(p),h=!0)}if(o!==void 0){b||(e=d);i=i.replace(m.match[l],"");if(!h)return[];break}}}if(i===f)if(h==null)k.error(i);else break;f=i}return e};k.error=function(i){throw"Syntax error, unrecognized expression: "+
i;};var m=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},
leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(i){return i.getAttribute("href")}},relative:{"+":function(i,a){var b=typeof a==="string",c=b&&!/\W/.test(a),b=b&&!c;c&&(a=a.toLowerCase());for(var c=0,f=i.length,d;c<f;c++)if(d=i[c]){for(;(d=d.previousSibling)&&d.nodeType!==1;);i[c]=b||d&&d.nodeName.toLowerCase()===a?d||!1:d===a}b&&k.filter(a,i,!0)},">":function(i,a){var b=typeof a==="string",c,d=0,f=i.length;if(b&&!/\W/.test(a))for(a=a.toLowerCase();d<f;d++){if(c=
i[d])b=c.parentNode,i[d]=b.nodeName.toLowerCase()===a?b:!1}else{for(;d<f;d++)(c=i[d])&&(i[d]=b?c.parentNode:c.parentNode===a);b&&k.filter(a,i,!0)}},"":function(i,c,d){var e=f++,g=b,h;typeof c==="string"&&!/\W/.test(c)&&(h=c=c.toLowerCase(),g=a);g("parentNode",c,e,i,h,d)},"~":function(i,c,d){var e=f++,g=b,h;typeof c==="string"&&!/\W/.test(c)&&(h=c=c.toLowerCase(),g=a);g("previousSibling",c,e,i,h,d)}},find:{ID:function(i,a,b){if(typeof a.getElementById!=="undefined"&&!b)return(i=a.getElementById(i[1]))?
[i]:[]},NAME:function(i,a){if(typeof a.getElementsByName!=="undefined"){for(var b=[],c=a.getElementsByName(i[1]),d=0,f=c.length;d<f;d++)c[d].getAttribute("name")===i[1]&&b.push(c[d]);return b.length===0?null:b}},TAG:function(i,a){return a.getElementsByTagName(i[1])}},preFilter:{CLASS:function(i,a,b,c,d,f){i=" "+i[1].replace(/\\/g,"")+" ";if(f)return i;for(var f=0,e;(e=a[f])!=null;f++)e&&(d^(e.className&&(" "+e.className+" ").replace(/[\t\n]/g," ").indexOf(i)>=0)?b||c.push(e):b&&(a[f]=!1));return!1},
ID:function(i){return i[1].replace(/\\/g,"")},TAG:function(i){return i[1].toLowerCase()},CHILD:function(i){if(i[1]==="nth"){var a=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(i[2]==="even"&&"2n"||i[2]==="odd"&&"2n+1"||!/\D/.test(i[2])&&"0n+"+i[2]||i[2]);i[2]=a[1]+(a[2]||1)-0;i[3]=a[3]-0}i[0]=f++;return i},ATTR:function(i,a,b,c,d,f){a=i[1].replace(/\\/g,"");!f&&m.attrMap[a]&&(i[1]=m.attrMap[a]);i[2]==="~="&&(i[4]=" "+i[4]+" ");return i},PSEUDO:function(a,b,d,f,e){if(a[1]==="not")if((c.exec(a[3])||"").length>1||
/^\w/.test(a[3]))a[3]=k(a[3],null,null,b);else return a=k.filter(a[3],b,d,1^e),d||f.push.apply(f,a),!1;else if(m.match.POS.test(a[0])||m.match.CHILD.test(a[0]))return!0;return a},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},
has:function(a,b,c){return!!k(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){return"text"===a.type},radio:function(a){return"radio"===a.type},checkbox:function(a){return"checkbox"===a.type},file:function(a){return"file"===a.type},password:function(a){return"password"===a.type},submit:function(a){return"submit"===a.type},image:function(a){return"image"===a.type},reset:function(a){return"reset"===a.type},button:function(a){return"button"===a.type||a.nodeName.toLowerCase()===
"button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var f=b[1],e=m.filters[f];if(e)return e(a,c,b,d);else if(f==="contains")return(a.textContent||
a.innerText||k.getText([a])||"").indexOf(b[3])>=0;else if(f==="not"){b=b[3];c=0;for(d=b.length;c<d;c++)if(b[c]===a)return!1;return!0}else k.error("Syntax error, unrecognized expression: "+f)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case "only":case "first":for(;d=d.previousSibling;)if(d.nodeType===1)return!1;if(c==="first")return!0;d=a;case "last":for(;d=d.nextSibling;)if(d.nodeType===1)return!1;return!0;case "nth":var c=b[2],f=b[3];if(c===1&&f===0)return!0;var e=b[0],g=a.parentNode;if(g&&(g.sizcache!==
e||!a.nodeIndex)){for(var h=0,d=g.firstChild;d;d=d.nextSibling)if(d.nodeType===1)d.nodeIndex=++h;g.sizcache=e}d=a.nodeIndex-f;return c===0?d===0:d%c===0&&d/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],c=m.attrHandle[c]?m.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),d=
c+"",f=b[2],e=b[4];return c==null?f==="!=":f==="="?d===e:f==="*="?d.indexOf(e)>=0:f==="~="?(" "+d+" ").indexOf(e)>=0:!e?d&&c!==!1:f==="!="?d!==e:f==="^="?d.indexOf(e)===0:f==="$="?d.substr(d.length-e.length)===e:f==="|="?d===e||d.substr(0,e.length+1)===e+"-":!1},POS:function(a,b,c,d){var f=m.setFilters[b[2]];if(f)return f(a,c,b,d)}}},l=m.match.POS,p=function(a,b){return"\\"+(b-0+1)},o;for(o in m.match)m.match[o]=RegExp(m.match[o].source+/(?![^\[]*\])(?![^\(]*\))/.source),m.leftMatch[o]=RegExp(/(^(?:.|\r|\n)*?)/.source+
m.match[o].source.replace(/\\(\d+)/g,p));var t=function(a,b){a=Array.prototype.slice.call(a,0);if(b)return b.push.apply(b,a),b;return a};try{Array.prototype.slice.call(n.documentElement.childNodes,0)}catch(v){t=function(a,b){var c=b||[],d=0;if(g.call(a)==="[object Array]")Array.prototype.push.apply(c,a);else if(typeof a.length==="number")for(var f=a.length;d<f;d++)c.push(a[d]);else for(;a[d];d++)c.push(a[d]);return c}}var r;n.documentElement.compareDocumentPosition?r=function(a,b){if(!a.compareDocumentPosition||
!b.compareDocumentPosition)return a==b&&(d=!0),a.compareDocumentPosition?-1:1;var c=a.compareDocumentPosition(b)&4?-1:a===b?0:1;c===0&&(d=!0);return c}:"sourceIndex"in n.documentElement?r=function(a,b){if(!a.sourceIndex||!b.sourceIndex)return a==b&&(d=!0),a.sourceIndex?-1:1;var c=a.sourceIndex-b.sourceIndex;c===0&&(d=!0);return c}:n.createRange&&(r=function(a,b){if(!a.ownerDocument||!b.ownerDocument)return a==b&&(d=!0),a.ownerDocument?-1:1;var c=a.ownerDocument.createRange(),f=b.ownerDocument.createRange();
c.setStart(a,0);c.setEnd(a,0);f.setStart(b,0);f.setEnd(b,0);c=c.compareBoundaryPoints(Range.START_TO_END,f);c===0&&(d=!0);return c});k.getText=function(a){for(var b="",c,d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=k.getText(c.childNodes));return b};(function(){var a=n.createElement("div"),b="script"+(new Date).getTime();a.innerHTML="<a name='"+b+"'/>";var c=n.documentElement;c.insertBefore(a,c.firstChild);if(n.getElementById(b))m.find.ID=function(a,b,c){if(typeof b.getElementById!==
"undefined"&&!c)return(b=b.getElementById(a[1]))?b.id===a[1]||typeof b.getAttributeNode!=="undefined"&&b.getAttributeNode("id").nodeValue===a[1]?[b]:void 0:[]},m.filter.ID=function(a,b){var c=typeof a.getAttributeNode!=="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b};c.removeChild(a);c=a=null})();(function(){var a=n.createElement("div");a.appendChild(n.createComment(""));if(a.getElementsByTagName("*").length>0)m.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);
if(a[1]==="*"){for(var d=[],f=0;c[f];f++)c[f].nodeType===1&&d.push(c[f]);c=d}return c};a.innerHTML="<a href='#'></a>";if(a.firstChild&&typeof a.firstChild.getAttribute!=="undefined"&&a.firstChild.getAttribute("href")!=="#")m.attrHandle.href=function(a){return a.getAttribute("href",2)};a=null})();n.querySelectorAll&&function(){var a=k,b=n.createElement("div");b.innerHTML="<p class='TEST'></p>";if(!(b.querySelectorAll&&b.querySelectorAll(".TEST").length===0)){k=function(b,c,d,f){c=c||n;if(!f&&c.nodeType===
9&&!k.isXML(c))try{return t(c.querySelectorAll(b),d)}catch(e){}return a(b,c,d,f)};for(var c in a)k[c]=a[c];b=null}}();(function(){var a=n.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(a.getElementsByClassName&&a.getElementsByClassName("e").length!==0&&(a.lastChild.className="e",a.getElementsByClassName("e").length!==1))m.order.splice(1,0,"CLASS"),m.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!=="undefined"&&!c)return b.getElementsByClassName(a[1])},
a=null})();k.contains=n.compareDocumentPosition?function(a,b){return!!(a.compareDocumentPosition(b)&16)}:function(a,b){return a!==b&&(a.contains?a.contains(b):!0)};k.isXML=function(a){return(a=(a?a.ownerDocument||a:0).documentElement)?a.nodeName!=="HTML":!1};var s=function(a,b){for(var c=[],d="",f,e=b.nodeType?[b]:b;f=m.match.PSEUDO.exec(a);)d+=f[0],a=a.replace(m.match.PSEUDO,"");a=m.relative[a]?a+"*":a;f=0;for(var g=e.length;f<g;f++)k(a,e[f],c);return k.filter(d,c)};h.Sizzle=k})()})();typeof Ur=="undefined"&&(Ur={QuickLoaders:{},WindowLoaders:{},Widgets:{},onLoadCallbacks:[],setup:function(e){Ur.initialize({type:"DOMContentLoaded"},e);Ur.loaded?Ur.initialize({type:"load"},e):window.addEventListener("load",function(l){Ur.initialize(l,e)},!1)},initialize:function(e,l){var d=e.type=="DOMContentLoaded"?Ur.QuickLoaders:Ur.WindowLoaders;if(l===void 0)l=document.body;for(var f in d)(new d[f]).initialize(l);if(e.type=="load")Ur.loaded=!0,Ur._onLoad()},_onLoad:function(){x$().iterate(Ur.onLoadCallbacks,
function(e){e()})},loaded:!1});window.addEventListener("load",Ur.initialize,!1);window.addEventListener("DOMContentLoaded",Ur.initialize,!1);
var mixins={iterate:function(e,l){if(e!==void 0){var d=e.length||0,f=0;if(typeof l=="function")for(;f<d;f++)l.call(l,e[f],f,e)}},offset:function(e){typeof(e=="undefined")&&(e=this[0]);for(cumulative_left=cumulative_top=0;e.offsetParent;)cumulative_top+=e.offsetTop,cumulative_left+=e.offsetLeft,e=e.offsetParent;return{left:cumulative_left,top:cumulative_top}},find_next_ancestor:function(e,l){return e.parentNode!=window.document?x$().find_set_ancestor(e.parentNode,l):null},find_set_ancestor:function(e,
l){var d=x$(e).attr("data-ur-set")[0];return d!==void 0?l==void 0?e:d==l?e:x$().find_next_ancestor(e,l):x$().find_next_ancestor(e,l)},get_unique_uranium_id:function(){var e=0;return function(){e+=1;return e}}(),find_elements:function(e,l){var d={};this.each(function(d,e,g){return function(){x$().helper_find(this,d,e,g)}}(e,l,d));return d},helper_find:function(e,l,d,f){x$(e).find("*[data-ur-"+l+"-component]").each(function(){var e=!0,g=x$(this).attr("data-ur-id")[0];if(g!==void 0)f[g]===void 0&&(f[g]=
{});else{var h=x$().find_set_ancestor(this,l);if(x$(h).attr("data-ur-state")[0]==="disabled"&&Ur.loaded==!1)return;h!==null?(g=x$(h).attr("data-ur-id")[0],g===void 0&&(g=x$().get_unique_uranium_id(),x$(h).attr("data-ur-id",g)),f[g]===void 0&&(f[g]={}),f[g].set=h):(console.log("Uranium Error: Couldn't find associated ur-set for component:",this),e=!1)}h=x$(this).attr("data-ur-"+l+"-component");h===void 0&&(e=!1);if(e)if(d!==void 0&&d[h]!==void 0)d[h](f[g],this,h);else f[g][h]=this});return f}};xui.extend(mixins);Ur.QuickLoaders.toggler=function(){function e(d,f){d.content===void 0&&(d.content=[]);d.content.push(f)}function l(){this.component_constructors={content:e}}l.prototype.find=function(d){var d=x$(d).find_elements("toggler",this.component_constructors),f;for(f in d){var e=d[f];if(e.button===void 0)console.log("Uranium Declaration Error: No button found for toggler with id="+f);else{var g=x$(e.button).attr("data-ur-state")[0];g===void 0&&(x$(e.button).attr("data-ur-state","disabled"),g="disabled");e.content===
void 0?console.log("Uranium Declaration Error: No content found for toggler with id="+f):x$().iterate(e.content,function(d){x$(d).attr("data-ur-state")[0]===void 0&&x$(d).attr("data-ur-state",g)})}}return d};l.prototype.construct_button_callback=function(d,f){return function(e){var e=e.currentTarget,g=x$(e).attr("data-ur-state")[0]==="enabled"?"disabled":"enabled";x$(e).attr("data-ur-state",g);x$(f).attr("data-ur-state",g);x$().iterate(d,function(d){var f=x$(d).attr("data-ur-state")[0]==="enabled"?
"disabled":"enabled";x$(d).attr("data-ur-state",f)})}};l.prototype.initialize=function(d){var d=this.find(d),f;for(f in d){var e=d[f];x$(e.button).click(this.construct_button_callback(e.content,e.set));x$(e.set).attr("data-ur-state","enabled")}};return l}();Ur.QuickLoaders.tabs=function(){function e(d){this.elements=d;this.setup_callbacks()}function l(){}e.prototype.setup_callbacks=function(){var d=null,e;for(e in this.elements.buttons){var g=this.elements.buttons[e],h=this.elements.contents[e];d===null&&(d=e);if(h===void 0){console.log("Ur error -- no matching tab content for tab button");break}h=x$(g).attr("data-ur-state")[0];h!==void 0&&h=="enabled"&&(d=-1);var l=x$(this.elements.set).attr("data-ur-closeable")[0],l=l!==void 0&&l=="true"?!0:!1;console.log("closeable? "+
l);var n=this;x$(g).on("click",function(d){var d=x$(d.target).attr("data-ur-tab-id")[0],f;for(f in n.elements.buttons){var e=n.elements.buttons[f],g=n.elements.contents[f];if(f!==d)x$(e).attr("data-ur-state","disabled"),x$(g).attr("data-ur-state","disabled");else{var h="enabled";l&&(h=x$(e).attr("data-ur-state")[0],h=h===void 0?"disabled":h,h=h=="enabled"?"disabled":"enabled");x$(e).attr("data-ur-state",h);x$(g).attr("data-ur-state",h)}}})}};var d={button:function(d,e){d.buttons===void 0&&(d.buttons=
{});var g=x$(e).attr("data-ur-tab-id")[0];g===void 0?console.log("Uranium declaration error -- Tab defined without a tab-id"):d.buttons[g]=e},content:function(d,e){d.contents===void 0&&(d.contents={});var g=x$(e).attr("data-ur-tab-id")[0];g===void 0?console.log("Uranium declaration error -- Tab defined without a tab-id"):d.contents[g]=e}};l.prototype.initialize=function(f){f=x$(f).find_elements("tabs",d);Ur.Widgets.tabs={};for(var k in f)Ur.Widgets.tabs[k]=new e(f[k])};return l}();Ur.QuickLoaders["select-list"]=function(){function e(d,e){this.select=d;this.list=e;this.initialize()}function l(){this.SelectLists={}}e.prototype.initialize=function(){x$(this.list).click(function(d){return function(e){d.trigger_option(e)}}(this))};e.prototype.trigger_option=function(d){var e=d.target,k="";x$().iterate(this.list.children,function(d){d==e?(x$(d).attr("data-ur-state","enabled"),k=x$(d).attr("value")):x$(d).attr("data-ur-state","disabled")});this.select.value=k;return!0};l.prototype.initialize=
function(d){var d=x$(d).find_elements("select-list"),f;for(f in d){var k=d[f];this.SelectLists[f]=new e(d[f].select,d[f].content);x$(k.set).attr("data-ur-state","enabled")}};return l}();Ur.QuickLoaders["select-buttons"]=function(){function e(d){this.select=d.select;this.increment=d.increment;this.decrement=d.decrement;this.initialize()}function l(){}e.prototype.initialize=function(){x$(this.increment).click(function(d){return function(e){d.trigger_option(e,1)}}(this));x$(this.decrement).click(function(d){return function(e){d.trigger_option(e,-1)}}(this))};e.prototype.trigger_option=function(d,e){if(x$(d.currentTarget).attr("data-ur-state")[0]==="disabled")return!1;var k={},g=this.select.value,
h={prev:null,next:null};x$().iterate(this.select.children,function(d,e){x$(d).attr("value")[0]==g&&(k={element:d,index:e});typeof k.index=="undefined"&&(h.prev=x$(d).attr("value")[0]);e==k.index+1&&(h.next=x$(d).attr("value")[0])});var l=this.select.children.length,n=k.index+e;n==0?x$(this.decrement).attr("data-ur-state","disabled"):x$(this.decrement).attr("data-ur-state","enabled");n==l-1?x$(this.increment).attr("data-ur-state","disabled"):x$(this.increment).attr("data-ur-state","enabled");if(n<
0||n==l)return!1;this.select.value=h[e==1?"next":"prev"];return!0};l.prototype.initialize=function(d){var d=x$(d).find_elements("select-buttons"),f;for(f in d)new e(d[f]),x$(d[f].set).attr("data-ur-state","enabled")};return l}();
