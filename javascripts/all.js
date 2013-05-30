/*
 * Foundation Responsive Library
 * http://foundation.zurb.com
 * Copyright 2013, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
/*jslint unparam: true, browser: true, indent: 2 */
// Accommodate running jQuery or Zepto in noConflict() mode by
// using an anonymous function to redefine the $ shorthand name.
// See http://docs.jquery.com/Using_jQuery_with_Other_Libraries
// and http://zeptojs.com/
var libFuncName=null;if(typeof jQuery=="undefined"&&typeof Zepto=="undefined"&&typeof $=="function")libFuncName=$;else if(typeof jQuery=="function")libFuncName=jQuery;else{if(typeof Zepto!="function")throw new TypeError;libFuncName=Zepto}(function(e){(function(){Array.prototype.filter||(Array.prototype.filter=function(e){"use strict";if(this==null)throw new TypeError;var t=Object(this),n=t.length>>>0;if(typeof e!="function")try{throw new TypeError}catch(r){return}var i=[],s=arguments[1];for(var o=0;o<n;o++)if(o in t){var u=t[o];e&&e.call(s,u,o,t)&&i.push(u)}return i},Function.prototype.bind||(Function.prototype.bind=function(e){if(typeof this!="function")throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var t=Array.prototype.slice.call(arguments,1),n=this,r=function(){},i=function(){return n.apply(this instanceof r&&e?this:e,t.concat(Array.prototype.slice.call(arguments)))};return r.prototype=this.prototype,i.prototype=new r,i})),e.fn.stop=e.fn.stop||function(){return this}})(),function(t,n,r){"use strict";t.Foundation={name:"Foundation",version:"4.0.8",cache:{},init:function(e,t,n,r,i,s){var o,u=[e,n,r,i],a=[],s=s||!1;s&&(this.nc=s),this.scope=e||this.scope;if(t&&typeof t=="string"){if(/off/i.test(t))return this.off();o=t.split(" ");if(o.length>0)for(var f=o.length-1;f>=0;f--)a.push(this.init_lib(o[f],u))}else for(var l in this.libs)a.push(this.init_lib(l,u));return typeof t=="function"&&u.unshift(t),this.response_obj(a,u)},response_obj:function(e,t){for(var n in t)if(typeof t[n]=="function")return t[n]({errors:e.filter(function(e){if(typeof e=="string")return e})});return e},init_lib:function(e,t){return this.trap(function(){if(this.libs.hasOwnProperty(e))return this.patch(this.libs[e]),this.libs[e].init.apply(this.libs[e],t)}.bind(this),e)},trap:function(e,t){if(!this.nc)try{return e()}catch(n){return this.error({name:t,message:"could not be initialized",more:n.name+" "+n.message})}return e()},patch:function(e){this.fix_outer(e)},inherit:function(e,t){var n=t.split(" ");for(var r=n.length-1;r>=0;r--)this.lib_methods.hasOwnProperty(n[r])&&(this.libs[e.name][n[r]]=this.lib_methods[n[r]])},random_str:function(e){var t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split("");e||(e=Math.floor(Math.random()*t.length));var n="";for(var r=0;r<e;r++)n+=t[Math.floor(Math.random()*t.length)];return n},libs:{},lib_methods:{set_data:function(e,t){var n=[this.name,+(new Date),Foundation.random_str(5)].join("-");return Foundation.cache[n]=t,e.attr("data-"+this.name+"-id",n),t},get_data:function(e){return Foundation.cache[e.attr("data-"+this.name+"-id")]},remove_data:function(t){t?(delete Foundation.cache[t.attr("data-"+this.name+"-id")],t.attr("data-"+this.name+"-id","")):e("[data-"+this.name+"-id]").each(function(){delete Foundation.cache[e(this).attr("data-"+this.name+"-id")],e(this).attr("data-"+this.name+"-id","")})},throttle:function(e,t){var n=null;return function(){var r=this,i=arguments;clearTimeout(n),n=setTimeout(function(){e.apply(r,i)},t)}},data_options:function(t){function u(e){return!isNaN(e-0)&&e!==null&&e!==""&&e!==!1&&e!==!0}function a(t){return typeof t=="string"?e.trim(t):t}var n={},r,i,s=(t.attr("data-options")||":").split(";"),o=s.length;for(r=o-1;r>=0;r--)i=s[r].split(":"),/true/i.test(i[1])&&(i[1]=!0),/false/i.test(i[1])&&(i[1]=!1),u(i[1])&&(i[1]=parseInt(i[1],10)),i.length===2&&i[0].length>0&&(n[a(i[0])]=a(i[1]));return n},delay:function(e,t){return setTimeout(e,t)},scrollTo:function(n,r,i){if(i<0)return;var s=r-e(t).scrollTop(),o=s/i*10;this.scrollToTimerCache=setTimeout(function(){isNaN(parseInt(o,10))||(t.scrollTo(0,e(t).scrollTop()+o),this.scrollTo(n,r,i-10))}.bind(this),10)},scrollLeft:function(e){if(!e.length)return;return"scrollLeft"in e[0]?e[0].scrollLeft:e[0].pageXOffset},empty:function(e){if(e.length&&e.length>0)return!1;if(e.length&&e.length===0)return!0;for(var t in e)if(hasOwnProperty.call(e,t))return!1;return!0}},fix_outer:function(e){e.outerHeight=function(e,t){return typeof Zepto=="function"?e.height():typeof t!="undefined"?e.outerHeight(t):e.outerHeight()},e.outerWidth=function(e){return typeof Zepto=="function"?e.width():typeof bool!="undefined"?e.outerWidth(bool):e.outerWidth()}},error:function(e){return e.name+" "+e.message+"; "+e.more},off:function(){return e(this.scope).off(".fndtn"),e(t).off(".fndtn"),!0},zj:function(){try{return Zepto}catch(e){return jQuery}}()},e.fn.foundation=function(){var e=Array.prototype.slice.call(arguments,0);return this.each(function(){return Foundation.init.apply(Foundation,[this].concat(e)),this})}}(this,this.document)})(libFuncName),function(e,t,n,r){"use strict";Foundation.libs.forms={name:"forms",version:"4.0.4",settings:{disable_class:"no-custom"},init:function(t,n,r){return this.scope=t||this.scope,typeof n=="object"&&e.extend(!0,this.settings,n),typeof n!="string"?(this.settings.init||this.events(),this.assemble(),this.settings.init):this[n].call(this,r)},assemble:function(){e('form.custom input[type="radio"]',e(this.scope)).not('[data-customforms="disabled"]').each(this.append_custom_markup),e('form.custom input[type="checkbox"]',e(this.scope)).not('[data-customforms="disabled"]').each(this.append_custom_markup),e("form.custom select",e(this.scope)).not('[data-customforms="disabled"]').each(this.append_custom_select)},events:function(){var t=this;e(this.scope).on("change.fndtn.forms",'form.custom select:not([data-customforms="disabled"])',function(n){t.refresh_custom_select(e(this))}).on("click.fndtn.forms","form.custom label",function(n){var r=e("#"+t.escape(e(this).attr("for"))+':not([data-customforms="disabled"])'),i,s;r.length!==0&&(r.attr("type")==="checkbox"?(n.preventDefault(),i=e(this).find("span.custom.checkbox"),i.length==0&&(i=e(this).next("span.custom.checkbox")),i.length==0&&(i=e(this).prev("span.custom.checkbox")),t.toggle_checkbox(i)):r.attr("type")==="radio"&&(n.preventDefault(),s=e(this).find("span.custom.radio"),s.length==0&&(s=e(this).next("span.custom.radio")),s.length==0&&(s=e(this).prev("span.custom.radio")),t.toggle_radio(s)))}).on("click.fndtn.forms","form.custom div.custom.dropdown a.current, form.custom div.custom.dropdown a.selector",function(n){var r=e(this),i=r.closest("div.custom.dropdown"),s=i.prev();i.hasClass("open")||e(t.scope).trigger("click"),n.preventDefault();if(!1===s.is(":disabled"))return i.toggleClass("open"),i.hasClass("open")?e(t.scope).on("click.fndtn.forms.customdropdown",function(){i.removeClass("open"),e(t.scope).off(".fndtn.forms.customdropdown")}):e(t.scope).on(".fndtn.forms.customdropdown"),!1}).on("click.fndtn.forms touchend.fndtn.forms","form.custom div.custom.dropdown li",function(t){var n=e(this),r=n.closest("div.custom.dropdown"),i=r.prev(),s=0;t.preventDefault(),t.stopPropagation();if(!e(this).hasClass("disabled")){e("div.dropdown").not(r).removeClass("open");var o=n.closest("ul").find("li.selected");o.removeClass("selected"),n.addClass("selected"),r.removeClass("open").find("a.current").html(n.html()),n.closest("ul").find("li").each(function(e){n[0]==this&&(s=e)}),i[0].selectedIndex=s,i.data("prevalue",o.html()),i.trigger("change")}}),this.settings.init=!0},append_custom_markup:function(t,n){var r=e(n).hide(),i=r.attr("type"),s=r.next("span.custom."+i);s.length===0&&(s=e('<span class="custom '+i+'"></span>').insertAfter(r)),s.toggleClass("checked",r.is(":checked")),s.toggleClass("disabled",r.is(":disabled"))},append_custom_select:function(t,n){var r=Foundation.libs.forms,i=e(n),s=i.next("div.custom.dropdown"),o=s.find("ul"),u=s.find(".current"),a=s.find(".selector"),f=i.find("option"),l=f.filter(":selected"),c=i.attr("class")?i.attr("class").split(" "):[],h=0,p="",d,v=!1;if(i.hasClass(r.settings.disable_class))return;if(s.length===0){var m=i.hasClass("small")?"small":i.hasClass("medium")?"medium":i.hasClass("large")?"large":i.hasClass("expand")?"expand":"";s=e('<div class="'+["custom","dropdown",m].concat(c).filter(function(e,t,n){return e==""?!1:n.indexOf(e)==t}).join(" ")+'"><a href="#" class="selector"></a><ul /></div>'),a=s.find(".selector"),o=s.find("ul"),p=f.map(function(){return"<li>"+e(this).html()+"</li>"}).get().join(""),o.append(p),v=s.prepend('<a href="#" class="current">'+l.html()+"</a>").find(".current"),i.after(s).hide()}else p=f.map(function(){return"<li>"+e(this).html()+"</li>"}).get().join(""),o.html("").append(p);s.toggleClass("disabled",i.is(":disabled")),d=o.find("li"),f.each(function(t){this.selected&&(d.eq(t).addClass("selected"),v&&v.html(e(this).html())),e(this).is(":disabled")&&d.eq(t).addClass("disabled")});if(!s.is(".small, .medium, .large, .expand")){s.addClass("open");var r=Foundation.libs.forms;r.hidden_fix.adjust(o),h=r.outerWidth(d)>h?r.outerWidth(d):h,Foundation.libs.forms.hidden_fix.reset(),s.removeClass("open")}},refresh_custom_select:function(t){var n=this,r=0,i=t.next(),s=t.find("option");i.find("ul").html(""),s.each(function(){var t=e("<li>"+e(this).html()+"</li>");i.find("ul").append(t)}),s.each(function(t){this.selected&&(i.find("li").eq(t).addClass("selected"),i.find(".current").html(e(this).html())),e(this).is(":disabled")&&i.find("li").eq(t).addClass("disabled")}),i.removeAttr("style").find("ul").removeAttr("style"),i.find("li").each(function(){i.addClass("open"),n.outerWidth(e(this))>r&&(r=n.outerWidth(e(this))),i.removeClass("open")})},toggle_checkbox:function(e){var t=e.prev(),n=t[0];!1===t.is(":disabled")&&(n.checked=n.checked?!1:!0,e.toggleClass("checked"),t.trigger("change"))},toggle_radio:function(e){var t=e.prev(),n=t.closest("form.custom"),r=t[0];!1===t.is(":disabled")&&(n.find('input[type="radio"][name="'+this.escape(t.attr("name"))+'"]').next().not(e).removeClass("checked"),e.hasClass("checked")||e.toggleClass("checked"),r.checked=e.hasClass("checked"),t.trigger("change"))},escape:function(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},hidden_fix:{tmp:[],hidden:null,adjust:function(t){var n=this;n.hidden=t.parents().andSelf().filter(":hidden"),n.hidden.each(function(){var t=e(this);n.tmp.push(t.attr("style")),t.css({visibility:"hidden",display:"block"})})},reset:function(){var t=this;t.hidden.each(function(n){var i=e(this),s=t.tmp[n];s===r?i.removeAttr("style"):i.attr("style",s)}),t.tmp=[],t.hidden=null}},off:function(){e(this.scope).off(".fndtn.forms")}}}(Foundation.zj,this,this.document),function(e,t,n){function f(e){var t={},r=/^jQuery\d+$/;return n.each(e.attributes,function(e,n){n.specified&&!r.test(n.name)&&(t[n.name]=n.value)}),t}function l(e,r){var i=this,s=n(i);if(i.value==s.attr("placeholder")&&s.hasClass("placeholder"))if(s.data("placeholder-password")){s=s.hide().next().show().attr("id",s.removeAttr("id").data("placeholder-id"));if(e===!0)return s[0].value=r;s.focus()}else i.value="",s.removeClass("placeholder"),i==t.activeElement&&i.select()}function c(){var e,t=this,r=n(t),i=r,s=this.id;if(t.value==""){if(t.type=="password"){if(!r.data("placeholder-textinput")){try{e=r.clone().attr({type:"text"})}catch(o){e=n("<input>").attr(n.extend(f(this),{type:"text"}))}e.removeAttr("name").data({"placeholder-password":!0,"placeholder-id":s}).bind("focus.placeholder",l),r.data({"placeholder-textinput":e,"placeholder-id":s}).before(e)}r=r.removeAttr("id").hide().prev().attr("id",s).show()}r.addClass("placeholder"),r[0].value=r.attr("placeholder")}else r.removeClass("placeholder")}var r="placeholder"in t.createElement("input"),i="placeholder"in t.createElement("textarea"),s=n.fn,o=n.valHooks,u,a;r&&i?(a=s.placeholder=function(){return this},a.input=a.textarea=!0):(a=s.placeholder=function(){var e=this;return e.filter((r?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":l,"blur.placeholder":c}).data("placeholder-enabled",!0).trigger("blur.placeholder"),e},a.input=r,a.textarea=i,u={get:function(e){var t=n(e);return t.data("placeholder-enabled")&&t.hasClass("placeholder")?"":e.value},set:function(e,r){var i=n(e);return i.data("placeholder-enabled")?(r==""?(e.value=r,e!=t.activeElement&&c.call(e)):i.hasClass("placeholder")?l.call(e,!0,r)||(e.value=r):e.value=r,i):e.value=r}},r||(o.input=u),i||(o.textarea=u),n(function(){n(t).delegate("form","submit.placeholder",function(){var e=n(".placeholder",this).each(l);setTimeout(function(){e.each(c)},10)})}),n(e).bind("beforeunload.placeholder",function(){n(".placeholder").each(function(){this.value=""})}))}(this,document,Foundation.zj),function(e,t,n,r){"use strict";Foundation.libs.section={name:"section",version:"4.0.9",settings:{deep_linking:!1,one_up:!0,callback:function(){}},init:function(e,t,n){var r=this;return this.scope=e||this.scope,Foundation.inherit(this,"throttle data_options"),typeof t!="string"?(this.set_active_from_hash(),this.events(),!0):this[t].call(this,n)},events:function(){var r=this;e(this.scope).on("click.fndtn.section","[data-section] .title",function(t){var n=e(this),i=n.closest("[data-section]");r.toggle_active.call(this,t,r)}),e(t).on("resize.fndtn.section",r.throttle(function(){r.resize.call(this)},30)).on("hashchange",function(){r.settings.toggled||(r.set_active_from_hash(),e(this).trigger("resize"))}).trigger("resize"),e(n).on("click.fndtn.section",function(t){e(t.target).closest(".title").length<1&&e('[data-section="vertical-nav"], [data-section="horizontal-nav"]').find("section, .section").removeClass("active").attr("style","")})},toggle_active:function(t,n){var r=e(this),i=r.closest("section, .section"),s=i.find(".content"),o=i.closest("[data-section]"),n=Foundation.libs.section,u=e.extend({},n.settings,n.data_options(o));n.settings.toggled=!0,!u.deep_linking&&s.length>0&&t.preventDefault();if(i.hasClass("active"))(n.small(o)||n.is_vertical(o)||n.is_horizontal(o)||n.is_accordion(o))&&i.removeClass("active").attr("style","");else{var a=null,f=n.outerHeight(i.find(".title"));if(n.small(o)||u.one_up)a=r.closest("[data-section]").find("section.active, .section.active"),n.small(o)?a.attr("style",""):a.attr("style","visibility: hidden; padding-top: "+f+"px;");n.small(o)?i.attr("style",""):i.css("padding-top",f),i.addClass("active"),a!==null&&a.removeClass("active").attr("style","")}setTimeout(function(){n.settings.toggled=!1},300),u.callback()},resize:function(){var t=e("[data-section]"),n=Foundation.libs.section;t.each(function(){var t=e(this),r=t.find("section.active, .section.active"),i=e.extend({},n.settings,n.data_options(t));if(r.length>1)r.not(":first").removeClass("active").attr("style","");else if(r.length<1&&!n.is_vertical(t)&&!n.is_horizontal(t)&&!n.is_accordion(t)){var s=t.find("section, .section").first();s.addClass("active"),n.small(t)?s.attr("style",""):s.css("padding-top",n.outerHeight(s.find(".title")))}n.small(t)?r.attr("style",""):r.css("padding-top",n.outerHeight(r.find(".title"))),n.position_titles(t),n.is_horizontal(t)&&!n.small(t)?n.position_content(t):n.position_content(t,!1)})},is_vertical:function(e){return/vertical-nav/i.test(e.data("section"))},is_horizontal:function(e){return/horizontal-nav/i.test(e.data("section"))},is_accordion:function(e){return/accordion/i.test(e.data("section"))},is_tabs:function(e){return/tabs/i.test(e.data("section"))},set_active_from_hash:function(){var n=t.location.hash.substring(1),r=e("[data-section]"),i=this;r.each(function(){var t=e(this),r=e.extend({},i.settings,i.data_options(t));n.length>0&&r.deep_linking&&(t.find("section, .section").attr("style","").removeClass("active"),t.find('.content[data-slug="'+n+'"]').closest("section, .section").addClass("active"))})},position_titles:function(t,n){var r=t.find(".title"),i=0,s=this;typeof n=="boolean"?r.attr("style",""):r.each(function(){e(this).css("left",i),i+=s.outerWidth(e(this))})},position_content:function(t,n){var r=t.find(".title"),i=t.find(".content"),s=this;typeof n=="boolean"?(i.attr("style",""),t.attr("style","")):(t.find("section, .section").each(function(){var t=e(this).find(".title"),n=e(this).find(".content");n.css({left:t.position().left-1,top:s.outerHeight(t)-2})}),typeof Zepto=="function"?t.height(this.outerHeight(r.first())):t.height(this.outerHeight(r.first())-2))},small:function(t){var n=e.extend({},this.settings,this.data_options(t));return this.is_tabs(t)?!1:t&&this.is_accordion(t)?!0:e("html").hasClass("lt-ie9")?!0:e("html").hasClass("ie8compat")?!0:e(this.scope).width()<768},off:function(){e(this.scope).off(".fndtn.section"),e(t).off(".fndtn.section"),e(n).off(".fndtn.section")}}}(Foundation.zj,this,this.document),function(e,t,n,r){"use strict";Foundation.libs.tooltips={name:"tooltips",version:"4.0.2",settings:{selector:".has-tip",additionalInheritableClasses:[],tooltipClass:".tooltip",tipTemplate:function(e,t){return'<span data-selector="'+e+'" class="'+Foundation.libs.tooltips.settings.tooltipClass.substring(1)+'">'+t+'<span class="nub"></span></span>'}},cache:{},init:function(t,n,r){var i=this;this.scope=t||this.scope,typeof n=="object"&&e.extend(!0,this.settings,n);if(typeof n=="string")return this[n].call(this,r);Modernizr.touch?e(this.scope).on("click.fndtn.tooltip touchstart.fndtn.tooltip touchend.fndtn.tooltip","[data-tooltip]",function(t){t.preventDefault(),e(i.settings.tooltipClass).hide(),i.showOrCreateTip(e(this))}).on("click.fndtn.tooltip touchstart.fndtn.tooltip touchend.fndtn.tooltip",this.settings.tooltipClass,function(t){t.preventDefault(),e(this).fadeOut(150)}):e(this.scope).on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip","[data-tooltip]",function(t){var n=e(this);t.type==="mouseover"||t.type==="mouseenter"?i.showOrCreateTip(n):(t.type==="mouseout"||t.type==="mouseleave")&&i.hide(n)})},showOrCreateTip:function(e){var t=this.getTip(e);return t&&t.length>0?this.show(e):this.create(e)},getTip:function(t){var n=this.selector(t),r=null;return n&&(r=e("span[data-selector="+n+"]"+this.settings.tooltipClass)),typeof r=="object"?r:!1},selector:function(e){var t=e.attr("id"),n=e.attr("data-tooltip")||e.attr("data-selector");return(t&&t.length<1||!t)&&typeof n!="string"&&(n="tooltip"+Math.random().toString(36).substring(7),e.attr("data-selector",n)),t&&t.length>0?t:n},create:function(t){var n=e(this.settings.tipTemplate(this.selector(t),e("<div>").html(t.attr("title")).html())),r=this.inheritable_classes(t);n.addClass(r).appendTo("body"),Modernizr.touch&&n.append('<span class="tap-to-close">tap to close </span>'),t.removeAttr("title").attr("title",""),this.show(t)},reposition:function(n,r,i){var s,o,u,a,f,l;r.css("visibility","hidden").show(),s=n.data("width"),o=r.children(".nub"),u=this.outerHeight(o),a=this.outerHeight(o),l=function(e,t,n,r,i,s){return e.css({top:t?t:"auto",bottom:r?r:"auto",left:i?i:"auto",right:n?n:"auto",width:s?s:"auto"}).end()},l(r,n.offset().top+this.outerHeight(n)+10,"auto","auto",n.offset().left,s),e(t).width()<767?(l(r,n.offset().top+this.outerHeight(n)+10,"auto","auto",12.5,e(this.scope).width()),r.addClass("tip-override"),l(o,-u,"auto","auto",n.offset().left)):(l(r,n.offset().top+this.outerHeight(n)+10,"auto","auto",n.offset().left,s),r.removeClass("tip-override"),i&&i.indexOf("tip-top")>-1?l(r,n.offset().top-this.outerHeight(r),"auto","auto",n.offset().left,s).removeClass("tip-override"):i&&i.indexOf("tip-left")>-1?l(r,n.offset().top+this.outerHeight(n)/2-u*2.5,"auto","auto",n.offset().left-this.outerWidth(r)-u,s).removeClass("tip-override"):i&&i.indexOf("tip-right")>-1&&l(r,n.offset().top+this.outerHeight(n)/2-u*2.5,"auto","auto",n.offset().left+this.outerWidth(n)+u,s).removeClass("tip-override")),r.css("visibility","visible").hide()},inheritable_classes:function(t){var n=["tip-top","tip-left","tip-bottom","tip-right","noradius"].concat(this.settings.additionalInheritableClasses),r=t.attr("class"),i=r?e.map(r.split(" "),function(t,r){if(e.inArray(t,n)!==-1)return t}).join(" "):"";return e.trim(i)},show:function(e){var t=this.getTip(e);this.reposition(e,t,e.attr("class")),t.fadeIn(150)},hide:function(e){var t=this.getTip(e);t.fadeOut(150)},reload:function(){var t=e(this);return t.data("fndtn-tooltips")?t.foundationTooltips("destroy").foundationTooltips("init"):t.foundationTooltips("init")},off:function(){e(this.scope).off(".fndtn.tooltip"),e(this.settings.tooltipClass).each(function(t){e("[data-tooltip]").get(t).attr("title",e(this).text())}).remove()}}}(Foundation.zj,this,this.document),$(document).foundation();