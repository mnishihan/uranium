(function(){function f(a,c){var b;if(typeof a==m){var h=a,p=c.firstChild===null?{UL:"LI",DL:"DT",TR:"TD"}[c.tagName]||c.tagName:c.firstChild.tagName;b={};var d=/^<([A-Z][A-Z0-9]*)([^>]*)>([\s\S]*)<\/\1>/i,g,f;f=0;var e;if(d.test(h)){d=d.exec(h);p=d[1];if(d[2]!=="")for(h=d[2].split(/([A-Z]*\s*=\s*['|"][A-Z0-9:;#\s]*['|"])/i);f<h.length;f++)e=h[f].replace(/^\s*|\s*$/g,""),e!==""&&e!==" "&&(e=e.split("="),b[e[0]]=e[1].replace(/(["']?)/g,""));h=d[3]}p=j.createElement(p);for(g in b)f=j.createAttribute(g),
f.nodeValue=b[g],p.setAttributeNode(f);p.innerHTML=h;b=p}else b=a;return b}function e(a){var c=/\S/;a.each(function(a){for(var k=a.firstChild,b=-1,d;k;)d=k.nextSibling,k.nodeType==3&&!c.test(k.nodeValue)?a.removeChild(k):k.nodeIndex=++b,k=d})}function d(a){if(a._xuiEventID)return a._xuiEventID;return a._xuiEventID=++d.id}function b(a,c){var b=n[a]=n[a]||{};return b[c]=b[c]||[]}function a(a,c,i){var h=d(a),c=b(h,c),h=function(c){i.call(a,c)===!1&&(c.preventDefault(),c.stopPropagation())};h.guid=i.guid=
i.guid||++d.id;h.handler=i;c.push(h);return h}var c,g=this,m=new String("string"),j=g.document,o=/^#?([\w-]+)$/,x=/^#/,y=/<([\w:]+)/,l=function(a){return[].slice.call(a,0)};try{l(j.documentElement.childNodes)}catch(z){l=function(a){for(var c=[],b=0;a[b];b++)c.push(a[b]);return c}}g.x$=g.xui=c=function(a,b){return new c.fn.find(a,b)};if(![].forEach)Array.prototype.forEach=function(a,c){var b=this.length||0,h=0;if(typeof a=="function")for(;h<b;h++)a.call(c,this[h],h,this)};c.fn=c.prototype={extend:function(a){for(var b in a)c.fn[b]=
a[b]},find:function(a,b){var i=[],h;if(a)if(b==void 0&&this.length)i=this.each(function(b){i=i.concat(l(c(a,b)))}).reduce(i);else if(b=b||j,typeof a==m)o.test(a)&&b.getElementById&&b.getElementsByTagName?(i=x.test(a)?[b.getElementById(a.substr(1))]:b.getElementsByTagName(a),i[0]==null&&(i=[])):y.test(a)?(h=j.createElement("i"),h.innerHTML=a,l(h.childNodes).forEach(function(a){i.push(a)})):i=g.Sizzle!==void 0?Sizzle(a,b):b.querySelectorAll(a),i=l(i);else if(a instanceof Array)i=a;else if(a.toString()==
"[object NodeList]")i=l(a);else{if(a.nodeName||a===g)i=[a]}else return this;return this.set(i)},set:function(a){var b=c();b.cache=l(this.length?this:[]);b.length=0;[].push.apply(b,a);return b},reduce:function(a,b){var c=[],a=a||l(this);a.forEach(function(a){c.indexOf(a,0,b)<0&&c.push(a)});return c},has:function(a){var b=c(a);return this.filter(function(){var a=this,c=null;b.each(function(b){c=c||b==a});return c})},filter:function(a){var b=[];return this.each(function(c,h){a.call(c,h)&&b.push(c)}).set(b)},
not:function(a){var b=l(this);return this.filter(function(i){var h;c(a).each(function(a){return h=b[i]!=a});return h})},each:function(a){for(var b=0,c=this.length;b<c;++b)if(a.call(this[b],this[b],b,this)===!1)break;return this}};c.fn.find.prototype=c.fn;c.extend=c.fn.extend;c.extend({html:function(a,b){e(this);if(arguments.length==0)return this[0].innerHTML;arguments.length==1&&arguments[0]!="remove"&&(b=a,a="inner");if(a!="remove"&&b&&b.each!==void 0){if(a=="inner"){var c=j.createElement("p");b.each(function(a){c.appendChild(a)});
this.each(function(a){a.innerHTML=c.innerHTML})}else{var h=this;b.each(function(b){h.html(a,b)})}return this}return this.each(function(c){var h,i=0;if(a=="inner")if(typeof b==m||typeof b=="number"){c.innerHTML=b;c=c.getElementsByTagName("SCRIPT");for(h=c.length;i<h;i++)eval(c[i].text)}else c.innerHTML="",c.appendChild(b);else a=="outer"?c.parentNode.replaceChild(f(b,c),c):a=="top"?c.insertBefore(f(b,c),c.firstChild):a=="bottom"?c.insertBefore(f(b,c),null):a=="remove"?c.parentNode.removeChild(c):a==
"before"?c.parentNode.insertBefore(f(b,c.parentNode),c):a=="after"&&c.parentNode.insertBefore(f(b,c.parentNode),c.nextSibling)})},attr:function(a,c){if(arguments.length==2)return this.each(function(b){a=="checked"&&(c==""||c==!1||typeof c=="undefined")?b.removeAttribute(a):b.setAttribute(a,c)});else{var b=[];this.each(function(c){c=c.getAttribute(a);c!=null&&b.push(c)});return b}}});"inner outer top bottom remove before after".split(" ").forEach(function(a){c.fn[a]=function(a){return function(c){return this.html(a,
c)}}(a)});c.events={};var n={};c.extend({on:function(k,f,i){return this.each(function(h){if(c.events[k]){var g=d(h),g=b(g,k);i=i||{};i.handler=function(a,b){c.fn.fire.call(c(this),k,b)};g.length||c.events[k].call(h,i)}h.addEventListener(k,a(h,k,f),!1)})},un:function(a,c){return this.each(function(i){for(var g=d(i),f=b(g,a),e=f.length;e--;)if(c===void 0||c.guid===f[e].guid){i.removeEventListener(a,f[e],!1);var q=n[g][a],j=e,s=q.slice(2);q.length=j<0?q.length+j:j;q.push.apply(q,s)}n[g][a].length===
0&&delete n[g][a];for(var r in n[g])return;delete n[g]})},fire:function(a,c){return this.each(function(b){if(b==j&&!b.dispatchEvent)b=j.documentElement;var g=j.createEvent("HTMLEvents");g.initEvent(a,!0,!0);g.data=c||{};g.eventName=a;b.dispatchEvent(g)})}});"click load submit touchstart touchmove touchend touchcancel gesturestart gesturechange gestureend orientationchange".split(" ").forEach(function(a){c.fn[a]=function(a){return function(c){return c?this.on(a,c):this.fire(a)}}(a)});c(g).on("load",
function(){"onorientationchange"in j.body||function(a,b){c(g).on("resize",function(){var d=g.innerWidth<a&&g.innerHeight>b&&g.innerWidth<g.innerHeight,f=g.innerWidth>a&&g.innerHeight<b&&g.innerWidth>g.innerHeight;if(d||f)g.orientation=d?0:90,c("body").fire("orientationchange"),a=g.innerWidth,b=g.innerHeight})}(g.innerWidth,g.innerHeight)});var t;try{t=!!j.createEvent("TouchEvent").initTouchEvent}catch(A){t=!1}c.touch=t;d.id=1;c.extend({tween:function(a,c){a instanceof Array&&a.forEach(function(){});
var b=function(){var c={};"duration after easing".split(" ").forEach(function(b){a[b]&&(c[b]=a[b],delete a[b])});return c}(a),g=function(a){var c=[],b;if(typeof a!=m){for(b in a)c.push(b+":"+a[b]);c=c.join(";")}else c=a;return c}(a);return this.each(function(a){emile(a,g,b,c)})}});var v=/^(\s|\u00A0)+|(\s|\u00A0)+$/g;c.extend({setStyle:function(a,c){a=a.replace(/\-[a-z]/g,function(a){return a[1].toUpperCase()});return this.each(function(b){b.style[a]=c})},getStyle:function(a,c){var b=function(a,c){return j.defaultView.getComputedStyle(a,
"").getPropertyValue(c.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()}))};if(c===void 0){var g=[];this.each(function(c){g.push(b(c,a))});return g}else this.each(function(g){c(b(g,a))})},addClass:function(a){return this.each(function(c){if(u(a).test(c.className)===!1)c.className=(c.className+" "+a||"").replace(v,"")})},hasClass:function(a,c){var b=this;return this.length&&function(){var g=!1;b.each(function(b){u(a).test(b.className)&&(g=!0,c&&c(b))});return g}()},removeClass:function(a){if(a===
void 0)this.each(function(a){a.className=""});else{var c=u(a);this.each(function(a){var b;b=(a.className.replace(c,"$1")||"").replace(v,"");a.className=b})}return this},css:function(a){for(var c in a)this.setStyle(c,a[c]);return this}});var w={},u=function(a){var c=w[a];c||(c=RegExp("(^|\\s+)"+a+"(?:\\s+|$)"),w[a]=c);return c};c.extend({xhr:function(a,c,b){function g(){e.readyState==4&&(delete f.xmlHttpRequest,(e.status===0||e.status==200)&&e.handleResp(),/^[45]/.test(e.status)&&e.handleError())}
/^(inner|outer|top|bottom|before|after)$/.test(a)||(b=c,c=a,a="inner");var d=b?b:{};if(typeof b=="function")d={},d.callback=b;var f=this,e=new XMLHttpRequest,b=d.method||"get",j=d.async||!1,s=d.data||null,r=0;e.queryString=s;e.open(b,c,j);if(d.headers)for(;r<d.headers.length;r++)e.setRequestHeader(d.headers[r].name,d.headers[r].value);e.handleResp=d.callback!=null?d.callback:function(){f.html(a,this.responseText)};e.handleError=d.error&&typeof d.error=="function"?d.error:function(){};if(j)e.onreadystatechange=
g,this.xmlHttpRequest=e;e.send(s);j||g();return this}});(function(a,c){function b(a,c,g){return(a+(c-a)*g).toFixed(3)}function g(a,c,b){for(var d=2,f,e,h=[],i=[];f=3,e=arguments[d-1],d--;)if(e.substr(0,1)=="r")for(e=e.match(/\d+/g);f--;)h.push(~~e[f]);else for(e.length==4&&(e="#"+e.substr(1,1)+e.substr(1,1)+e.substr(2,1)+e.substr(2,1)+e.substr(3,1)+e.substr(3,1));f--;)h.push(parseInt(e.substr(1+f*2,2),16));for(;f--;)d=~~(h[f+3]+(h[f]-h[f+3])*b),i.push(d<0?0:d>255?255:d);return"rgb("+i.join(",")+")"}
function d(a){var c=parseFloat(a),a=a.replace(/^[\-\d\.]+/,"");return isNaN(c)?{v:a,f:g,u:""}:{v:c,f:b,u:a}}function f(a){var c={},b=m.length,g;e.innerHTML='<div style="'+a+'"></div>';for(a=e.childNodes[0].style;b--;)if(g=a[m[b]])c[m[b]]=d(g);return c}var e=j.createElement("div"),m="backgroundColor borderBottomColor borderBottomWidth borderLeftColor borderLeftWidth borderRightColor borderRightWidth borderSpacing borderTopColor borderTopWidth bottom color fontSize fontWeight height left letterSpacing lineHeight marginBottom marginLeft marginRight marginTop maxHeight maxWidth minHeight minWidth opacity outlineColor outlineOffset outlineWidth paddingBottom paddingLeft paddingRight paddingTop right textIndent top width wordSpacing zIndex".split(" ");
c[a]=function(a,c,b,g){var a=typeof a=="string"?j.getElementById(a):a,b=b||{},e=f(c),c=a.currentStyle?a.currentStyle:getComputedStyle(a,null),h,i={},m=+new Date,k=b.duration||200,o=m+k,l,n=b.easing||function(a){return-Math.cos(a*Math.PI)/2+0.5};for(h in e)i[h]=d(c[h]);l=setInterval(function(){var c=+new Date,d=c>o?1:(c-m)/k;for(h in e)a.style[h]=e[h].f(i[h].v,e[h].v,n(d))+e[h].u;c>o&&(clearInterval(l),b.after&&b.after(),g&&setTimeout(g,1))},10)}})("emile",this)})();var mixins={iterate:function(f,e){if(f!==void 0){var d=f.length||0,b=0;if(typeof e=="function")for(;b<d;b++)e.call(e,f[b],b,f)}},offset:function(f){typeof(f=="undefined")&&(f=this[0]);for(cumulative_left=cumulative_top=0;f.offsetParent;)cumulative_top+=f.offsetTop,cumulative_left+=f.offsetLeft,f=f.offsetParent;return{left:cumulative_left,top:cumulative_top}},find_next_ancestor:function(f,e){return f.parentNode!=window.document?x$().find_set_ancestor(f.parentNode,e):null},find_set_ancestor:function(f,
e){var d=x$(f).attr("data-ur-set")[0];return d!==void 0?e==void 0?f:d==e?f:x$().find_next_ancestor(f,e):x$().find_next_ancestor(f,e)},get_unique_uranium_id:function(){var f=0;return function(){f+=1;return f}}(),find_elements:function(f,e){var d={};x$("*[data-ur-"+f+"-component]").each(function(){var b=!0,a=x$(this).attr("data-ur-id");if(a.length!=0)d[a]===void 0&&(d[a]={});else{var c=x$().find_set_ancestor(this);c!==null?(a=x$(c).attr("data-ur-id")[0],a===void 0&&(a=x$().get_unique_uranium_id(),x$(c).attr("data-ur-id",
a)),d[a]===void 0&&(d[a]={})):(console.log("Uranium Error: Couldn't find associated ur-set for component:",this),b=!1)}c=x$(this).attr("data-ur-"+f+"-component");c===void 0&&(b=!1);if(b)if(e!==void 0&&e[c]!==void 0)e[c](d[a],this,c);else d[a][c]=this});return d}};xui.extend(mixins);(function(){function f(d,b){d.content===void 0&&(d.content=[]);d.content.push(b)}function e(){this.component_constructors={content:f}}e.prototype.find=function(){var d=x$().find_elements("toggler",this.component_constructors);for(toggler_id in d){var b=d[toggler_id];if(b.button===void 0)console.log("Uranium Declaration Error: No button found for toggler with id="+toggler_id);else{var a=x$(b.button).attr("data-ur-state")[0];a===void 0&&x$(b.button).attr("data-ur-state","disabled");b.content===void 0?
console.log("Uranium Declaration Error: No content found for toggler with id="+toggler_id):x$().iterate(b.content,function(c){x$(c).attr("data-ur-state")[0]===void 0&&x$(c).attr("data-ur-state",a)})}}return d};e.prototype.construct_button_callback=function(d){return function(b){var b=b.currentTarget,a=x$(b).attr("data-ur-state")[0]==="enabled"?"disabled":"enabled";x$(b).attr("data-ur-state",a);x$().iterate(d,function(a){var b=x$(a).attr("data-ur-state")[0]==="enabled"?"disabled":"enabled";x$(a).attr("data-ur-state",
b)})}};e.prototype.initialize=function(){var d=this.find();this.togglers=d;for(name in d){var b=d[name];x$(b.button).click(this.construct_button_callback(b.content))}};window.TL=new e;window.addEventListener("load",function(){TL.initialize()},!1)})();(function(){function f(d,b){this.select=d;this.list=b;this.initialize()}function e(){this.SelectLists={}}f.prototype.initialize=function(){x$(this.list).click(function(d){return function(b){d.trigger_option(b)}}(this))};f.prototype.trigger_option=function(d){var b=d.target,a="";x$().iterate(this.list.children,function(c){c==b?(x$(c).attr("data-ur-state","enabled"),a=x$(c).attr("value")):x$(c).attr("data-ur-state","disabled")});this.select.value=a;return!0};e.prototype.initialize=function(){var d=
x$().find_elements("select-list");for(name in d)this.SelectLists[name]=new f(d[name].select,d[name].content)};SLL=new e;window.addEventListener("load",function(){SLL.initialize()},!1)})();(function(){function f(d){this.select=d.select;this.increment=d.increment;this.decrement=d.decrement;this.initialize()}function e(){}f.prototype.initialize=function(){x$(this.increment).click(function(d){return function(b){d.trigger_option(b,1)}}(this));x$(this.decrement).click(function(d){return function(b){d.trigger_option(b,-1)}}(this))};f.prototype.trigger_option=function(d,b){if(x$(d.currentTarget).attr("data-ur-state")[0]==="disabled")return!1;var a={},c=this.select.value,g={prev:null,next:null};
x$().iterate(this.select.children,function(b,d){x$(b).attr("value")[0]==c&&(a={element:b,index:d});typeof a.index=="undefined"&&(g.prev=x$(b).attr("value")[0]);d==a.index+1&&(g.next=x$(b).attr("value")[0])});var f=this.select.children.length,e=a.index+b;e==0?x$(this.decrement).attr("data-ur-state","disabled"):x$(this.decrement).attr("data-ur-state","enabled");e==f-1?x$(this.increment).attr("data-ur-state","disabled"):x$(this.increment).attr("data-ur-state","enabled");if(e<0||e==f)return!1;this.select.value=
g[b==1?"next":"prev"];return!0};e.prototype.initialize=function(){var d=x$().find_elements("select-buttons");this.SelectButtons={};for(name in d)new f(d[name])};SBL=new e;window.addEventListener("load",function(){SBL.initialize()},!1)})();(function(){function f(b){this.elements=b.elements;this.modifier={};if(b.modifier!==null)this.modifier=b.modifier;this.dimensions={};this.zoom=!1;this.update();this.events={start:"touchstart",move:"touchmove",end:"touchend"};this.touch=xui.touch;if(!this.touch)this.events={move:"mousemove",end:"mouseout"};this.initialize();console.log("Zoom Preview Loaded")}function e(){}f.prototype.rewrite_images=function(b,a,c){if(typeof b=="undefined")return!1;if(a===void 0&&c===void 0)a=this.modifier.zoom_image.match,
c=this.modifier.zoom_image.replace;this.elements.zoom_image.src=b.replace(a,c);a=c=null;if(this.modifier.button)a=this.modifier.button.match,c=this.modifier.button.replace;this.elements.button.src=a&&c?this.elements.zoom_image.src.replace(a,c):this.elements.zoom_image.src;var d=this;this.elements.zoom_image.style.visibility="hidden";x$(this.elements.zoom_image).on("load",function(){d.update()});x$(this.elements.button).on("load",function(){x$(d.elements.button).addClass("loaded")})};f.prototype.update=
function(){var b=this;x$().iterate(["button","zoom_image","container"],function(a){b.dimensions[a]=[b.elements[a].offsetWidth,b.elements[a].offsetHeight]});var a=x$(this.elements.button).offset(),a=[a.left,a.top];this.button_center=[this.dimensions.button[0]/2+a[0],this.dimensions.button[1]/2+a[1]];this.image_origin=[-0.5*this.dimensions.zoom_image[0],-0.5*this.dimensions.zoom_image[1]]};f.prototype.get_event_coordinates=function(b){if(this.touch){if(b.touches.length==1)return[b.touches[0].pageX,
b.touches[0].pageY]}else return[b.pageX,b.pageY]};f.prototype.initialize=function(){x$(this.elements.button).on(this.events.move,function(b){return function(a){b.scroll_zoom(a)}}(this));x$(this.elements.button).on(this.events.end,function(b){return function(a){b.scroll_end(a)}}(this));if(this.events.start)x$(this.elements.button).on("touchstart",function(){return function(b){b.preventDefault()}}(this));x$(this.elements.thumbnails).click(function(b){return function(a){if(a.target.tagName!="IMG")return!1;
b.rewrite_images(a.target.src)}}(this));this.normal_image_changed()};f.prototype.normal_image_changed=function(){img=x$(this.elements.normal_image);this.rewrite_images(img.attr("src")[0],this.modifier.normal_image.match,this.modifier.normal_image.replace)};f.prototype.scroll_end=function(){this.elements.zoom_image.style.visibility="hidden"};f.prototype.scroll_zoom=function(b){this.elements.zoom_image.style.visibility="visible";b=this.get_event_coordinates(b);if(b===null)return!1;b=[(b[0]-this.button_center[0])/
this.dimensions.button[0],(b[1]-this.button_center[1])/this.dimensions.button[1]];b=[this.dimensions.zoom_image[0]*b[0],this.dimensions.zoom_image[1]*b[1]];b=[this.image_origin[0]-b[0],this.image_origin[1]-b[1]];b=this.check_bounds(b);this.elements.zoom_image.style.webkitTransform="translate3d("+b[0]+"px,"+b[1]+"px,0px)"};f.prototype.check_bounds=function(b){var a=[this.dimensions.container[0]-this.dimensions.zoom_image[0],this.dimensions.container[1]-this.dimensions.zoom_image[1]];x$().iterate([0,
1],function(c){b[c]>=0&&(b[c]=0);b[c]<=a[c]&&(b[c]=a[c])});return b};var d={_modifiers:function(b,a,c,d){b.modifier===void 0&&(b.modifier={});var e=d===void 0?"src":"zoom";console.log("searching for modifier:",e,a);d=x$(a).attr("data-ur-"+e+"-modifier-match")[0];a=x$(a).attr("data-ur-"+e+"-modifier-replace")[0];typeof d!="undefined"&&typeof a!="undefined"&&(console.log("found modifiers:",d,a),b.modifier[c]={match:RegExp(d),replace:a})},_construct:function(b,a,c,d){b.elements===void 0&&(b.elements=
{});b.elements[c]=a;this._modifiers(b,a,c,d)},normal_image:function(b,a,c){this._construct(b,a,c,"zoom")},zoom_image:function(b,a,c){this._construct(b,a,c)},button:function(b,a,c){this._construct(b,a,c)},container:function(b,a,c){this._construct(b,a,c)},thumbnails:function(b,a,c){this._construct(b,a,c)}};typeof Uranium==="undefined"&&(Uranium={widgets:{}});e.prototype.initialize=function(){this.zoom_previews=x$().find_elements("zoom-preview",d);for(name in this.zoom_previews)Uranium.widgets["zoom-preview"]=
{},Uranium.widgets["zoom-preview"][name]=new f(this.zoom_previews[name])};ZPL=new e;window.addEventListener("load",function(){ZPL.initialize()},!1)})();(function(){function f(a){this.container=a.view_container;this.items=a.scroll_container;this.button=a.button===void 0?{}:a.button;this.count=a.count;this.initialize()}function e(a,c){a.style.webkitTransform="translate3d("+c+"px, 0px, 0px)"}function d(){}f.prototype={initialize:function(){var a=x$(this.container).attr("data-ur-touch")[0];console.log("this touch:"+a);a=a===void 0?!0:a=="enabled"?!0:!1;x$(this.container).attr("data-ur-touch",a?"enabled":"disabled");if(a)xui.touch?(this.touch=!0,x$(this.items).on("touchstart",
function(a){return function(b){a.start_swipe(b)}}(this)),x$(this.items).on("touchmove",function(a){return function(b){a.continue_swipe(b)}}(this)),x$(this.items).on("touchend",function(a){return function(b){a.finish_swipe(b)}}(this))):(this.touch=!1,x$(this.items).on("mousedown",function(a){return function(b){a.start_swipe(b)}}(this)),x$(this.items).on("mousemove",function(a){return function(b){a.continue_swipe(b)}}(this)),x$(this.items).on("mouseup",function(a){return function(b){a.finish_swipe(b)}}(this)));
x$(this.button.prev).on("click",function(a){return function(){a.move_to(1)}}(this));x$(this.button.next).on("click",function(a){return function(){a.move_to(-1)}}(this));this.item_index=0;this.adjust_spacing();this.item_index=-1;this.update_index();window.setInterval(function(a){return function(){a.resize()}}(this),1E3)},get_transform:function(a){a=window.getComputedStyle(a).webkitTransform;return a!="none"?(a=new WebKitCSSMatrix(a),a.m41):(console.log("no webkit transform"),0)},resize:function(){this.snap_width!=
this.container.offsetWidth&&this.adjust_spacing()},adjust_spacing:function(){var a=this.container.offsetWidth,b=0,d=x$(this.items).find("[data-ur-carousel-component='item']");this.item_count=d.length;this.snap_width=a;b-=this.snap_width*this.item_index;e(this.items,b);x$().iterate(d,function(f,j){var o=b;j!=0&&(o+=a-d[j-1].offsetWidth);e(f,o);b=o})},get_event_coordinates:function(a){if(this.touch){if(a.touches.length==1)return{x:a.touches[0].clientX,y:a.touches[0].clientY}}else return{x:a.clientX,
y:a.clientY};return null},update_buttons:function(){this.item_index==0?(x$(this.button.prev).attr("data-ur-state","disabled"),x$(this.button.next).attr("data-ur-state","enabled")):(this.item_index==this.item_count-1?x$(this.button.next).attr("data-ur-state","disabled"):x$(this.button.next).attr("data-ur-state","enabled"),x$(this.button.prev).attr("data-ur-state","enabled"))},update_index:function(a){this.item_index-=a>=0?1:-1;if(this.item_index<0)this.item_index=0;else if(this.item_index>=this.item_count)this.item_index=
this.item_count-1;if(this.count!==void 0)this.count.innerHTML=this.item_index+1+" of "+this.item_count;this.update_buttons()},start_swipe:function(a){if(this.increment_flag)return!1;this.touch_in_progress=!0;a=this.get_event_coordinates(a);if(a!==null)this.start_pos=a,this.starting_offset=this.get_transform(this.items);this.click=!0},continue_swipe:function(a){a.preventDefault();a.stopPropagation();if(this.touch_in_progress){a=this.get_event_coordinates(a);if(a!==null)this.end_pos=a,a=this.swipe_dist()+
this.starting_offset,e(this.items,a);this.click=!1}},finish_swipe:function(a){this.click||(a.preventDefault(),a.stopPropagation());this.touch_in_progress=!1;if(!this.touch||a.touches.length==0)a=this.swipe_dist(),this.snap_to((a/this.snap_width<=0?Math.floor(a/this.snap_width):Math.ceil(a/this.snap_width))*this.snap_width)},snap_to:function(a){this.update_index(a);this.destination_offset=a+this.starting_offset;if(this.destination_offset<-1*(this.item_count-1)*this.snap_width||this.destination_offset>
0)this.destination_offset=this.starting_offset;this.momentum()},move_to:function(a){this.starting_offset=this.get_transform(this.items);this.snap_to((a/this.snap_width<=0?Math.floor(a/this.snap_width):Math.ceil(a/this.snap_width))*this.snap_width)},momentum:function(){if(!this.touch_in_progress){this.increment_flag=!1;var a=this.get_transform(this.items),b=this.destination_offset-a;b-=b/1.1>=0?Math.floor(b/1.1):Math.ceil(b/1.1);e(this.items,b+a);if(b!=0)this.increment_flag=!0;this.increment_flag&&
setTimeout(function(a){return function(){a.momentum()}}(this),16)}},swipe_dist:function(){if(this.end_pos===void 0)return 0;return this.end_pos.x-this.start_pos.x}};var b={button:function(a,b,d){a.button===void 0&&(a.button={});d=x$(b).attr("data-ur-carousel-button-type")[0];d===void 0&&console.log("Uranium declaration error: Malformed carousel button type on:"+b.outerHTML);a.button[d]=b;d=="prev"?x$(b).attr("data-ur-state","disabled"):x$(b).attr("data-ur-state","enabled")}};d.prototype.initialize=
function(){var a=x$().find_elements("carousel",b);this.carousels={};for(name in a)this.carousels[name]=new f(a[name])};CL=new d;window.addEventListener("load",function(){CL.initialize()},!1)})();