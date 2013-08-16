!function(t,e){t.rails!==e&&t.error("jquery-ujs has already been loaded!");var i,n=t(document);t.rails=i={linkClickSelector:"a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",buttonClickSelector:"button[data-remote]",inputChangeSelector:"select[data-remote], input[data-remote], textarea[data-remote]",formSubmitSelector:"form",formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",disableSelector:"input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",enableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",requiredInputSelector:"input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",fileInputSelector:"input[type=file]",linkDisableSelector:"a[data-disable-with]",CSRFProtection:function(e){var i=t('meta[name="csrf-token"]').attr("content");i&&e.setRequestHeader("X-CSRF-Token",i)},fire:function(e,i,n){var a=t.Event(i);return e.trigger(a,n),a.result!==!1},confirm:function(t){return confirm(t)},ajax:function(e){return t.ajax(e)},href:function(t){return t.attr("href")},handleRemote:function(n){var a,r,o,s,l,c,d,u;if(i.fire(n,"ajax:before")){if(s=n.data("cross-domain"),l=s===e?null:s,c=n.data("with-credentials")||null,d=n.data("type")||t.ajaxSettings&&t.ajaxSettings.dataType,n.is("form")){a=n.attr("method"),r=n.attr("action"),o=n.serializeArray();var f=n.data("ujs:submit-button");f&&(o.push(f),n.data("ujs:submit-button",null))}else n.is(i.inputChangeSelector)?(a=n.data("method"),r=n.data("url"),o=n.serialize(),n.data("params")&&(o=o+"&"+n.data("params"))):n.is(i.buttonClickSelector)?(a=n.data("method")||"get",r=n.data("url"),o=n.serialize(),n.data("params")&&(o=o+"&"+n.data("params"))):(a=n.data("method"),r=i.href(n),o=n.data("params")||null);u={type:a||"GET",data:o,dataType:d,beforeSend:function(t,a){return a.dataType===e&&t.setRequestHeader("accept","*/*;q=0.5, "+a.accepts.script),i.fire(n,"ajax:beforeSend",[t,a])},success:function(t,e,i){n.trigger("ajax:success",[t,e,i])},complete:function(t,e){n.trigger("ajax:complete",[t,e])},error:function(t,e,i){n.trigger("ajax:error",[t,e,i])},crossDomain:l},c&&(u.xhrFields={withCredentials:c}),r&&(u.url=r);var h=i.ajax(u);return n.trigger("ajax:send",h),h}return!1},handleMethod:function(n){var a=i.href(n),r=n.data("method"),o=n.attr("target"),s=t("meta[name=csrf-token]").attr("content"),l=t("meta[name=csrf-param]").attr("content"),c=t('<form method="post" action="'+a+'"></form>'),d='<input name="_method" value="'+r+'" type="hidden" />';l!==e&&s!==e&&(d+='<input name="'+l+'" value="'+s+'" type="hidden" />'),o&&c.attr("target",o),c.hide().append(d).appendTo("body"),c.submit()},disableFormElements:function(e){e.find(i.disableSelector).each(function(){var e=t(this),i=e.is("button")?"html":"val";e.data("ujs:enable-with",e[i]()),e[i](e.data("disable-with")),e.prop("disabled",!0)})},enableFormElements:function(e){e.find(i.enableSelector).each(function(){var e=t(this),i=e.is("button")?"html":"val";e.data("ujs:enable-with")&&e[i](e.data("ujs:enable-with")),e.prop("disabled",!1)})},allowAction:function(t){var e,n=t.data("confirm"),a=!1;return n?(i.fire(t,"confirm")&&(a=i.confirm(n),e=i.fire(t,"confirm:complete",[a])),a&&e):!0},blankInputs:function(e,i,n){var a,r,o=t(),s=i||"input,textarea",l=e.find(s);return l.each(function(){if(a=t(this),r=a.is("input[type=checkbox],input[type=radio]")?a.is(":checked"):a.val(),!r==!n){if(a.is("input[type=radio]")&&l.filter('input[type=radio]:checked[name="'+a.attr("name")+'"]').length)return!0;o=o.add(a)}}),o.length?o:!1},nonBlankInputs:function(t,e){return i.blankInputs(t,e,!0)},stopEverything:function(e){return t(e.target).trigger("ujs:everythingStopped"),e.stopImmediatePropagation(),!1},disableElement:function(t){t.data("ujs:enable-with",t.html()),t.html(t.data("disable-with")),t.bind("click.railsDisable",function(t){return i.stopEverything(t)})},enableElement:function(t){t.data("ujs:enable-with")!==e&&(t.html(t.data("ujs:enable-with")),t.removeData("ujs:enable-with")),t.unbind("click.railsDisable")}},i.fire(n,"rails:attachBindings")&&(t.ajaxPrefilter(function(t,e,n){t.crossDomain||i.CSRFProtection(n)}),n.delegate(i.linkDisableSelector,"ajax:complete",function(){i.enableElement(t(this))}),n.delegate(i.linkClickSelector,"click.rails",function(n){var a=t(this),r=a.data("method"),o=a.data("params");if(!i.allowAction(a))return i.stopEverything(n);if(a.is(i.linkDisableSelector)&&i.disableElement(a),a.data("remote")!==e){if(!(!n.metaKey&&!n.ctrlKey||r&&"GET"!==r||o))return!0;var s=i.handleRemote(a);return s===!1?i.enableElement(a):s.error(function(){i.enableElement(a)}),!1}return a.data("method")?(i.handleMethod(a),!1):void 0}),n.delegate(i.buttonClickSelector,"click.rails",function(e){var n=t(this);return i.allowAction(n)?(i.handleRemote(n),!1):i.stopEverything(e)}),n.delegate(i.inputChangeSelector,"change.rails",function(e){var n=t(this);return i.allowAction(n)?(i.handleRemote(n),!1):i.stopEverything(e)}),n.delegate(i.formSubmitSelector,"submit.rails",function(n){var a=t(this),r=a.data("remote")!==e,o=i.blankInputs(a,i.requiredInputSelector),s=i.nonBlankInputs(a,i.fileInputSelector);if(!i.allowAction(a))return i.stopEverything(n);if(o&&a.attr("novalidate")==e&&i.fire(a,"ajax:aborted:required",[o]))return i.stopEverything(n);if(r){if(s){setTimeout(function(){i.disableFormElements(a)},13);var l=i.fire(a,"ajax:aborted:file",[s]);return l||setTimeout(function(){i.enableFormElements(a)},13),l}return i.handleRemote(a),!1}setTimeout(function(){i.disableFormElements(a)},13)}),n.delegate(i.formInputClickSelector,"click.rails",function(e){var n=t(this);if(!i.allowAction(n))return i.stopEverything(e);var a=n.attr("name"),r=a?{name:a,value:n.val()}:null;n.closest("form").data("ujs:submit-button",r)}),n.delegate(i.formSubmitSelector,"ajax:beforeSend.rails",function(e){this==e.target&&i.disableFormElements(t(this))}),n.delegate(i.formSubmitSelector,"ajax:complete.rails",function(e){this==e.target&&i.enableFormElements(t(this))}),t(function(){var e=t("meta[name=csrf-token]").attr("content"),i=t("meta[name=csrf-param]").attr("content");t('form input[name="'+i+'"]').val(e)}))}(jQuery),function(t,e){"use strict";var i,n=t.document;i=function(){var i,a,r,o,s,l,c,d,u,f,h,p,m={},b={},y=!1,g={ENTER:13,ESC:27,SPACE:32},v=[];return b={buttons:{holder:'<nav class="alertify-buttons">{{buttons}}</nav>',submit:'<button type="submit" class="alertify-button alertify-button-ok" id="alertify-ok">{{ok}}</button>',ok:'<a href="#" class="alertify-button alertify-button-ok" id="alertify-ok">{{ok}}</a>',cancel:'<a href="#" class="alertify-button alertify-button-cancel" id="alertify-cancel">{{cancel}}</a>'},input:'<div class="alertify-text-wrapper"><input type="text" class="alertify-text" id="alertify-text"></div>',message:'<p class="alertify-message">{{message}}</p>',log:'<article class="alertify-log{{class}}">{{message}}</article>'},p=function(){var t,i,a=!1,r=n.createElement("fakeelement"),o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"};for(t in o)if(r.style[t]!==e){i=o[t],a=!0;break}return{type:i,supported:a}},i=function(t){return n.getElementById(t)},m={labels:{ok:"OK",cancel:"Cancel"},delay:5e3,buttonReverse:!1,buttonFocus:"ok",transition:e,addListeners:function(t){var e,i,s,l,c,d="undefined"!=typeof r,u="undefined"!=typeof a,p="undefined"!=typeof h,m="",b=this;e=function(e){return"undefined"!=typeof e.preventDefault&&e.preventDefault(),s(e),"undefined"!=typeof h&&(m=h.value),"function"==typeof t&&("undefined"!=typeof h?t(!0,m):t(!0)),!1},i=function(e){return"undefined"!=typeof e.preventDefault&&e.preventDefault(),s(e),"function"==typeof t&&t(!1),!1},s=function(){b.hide(),b.unbind(n.body,"keyup",l),b.unbind(o,"focus",c),p&&b.unbind(f,"submit",e),d&&b.unbind(r,"click",e),u&&b.unbind(a,"click",i)},l=function(t){var n=t.keyCode;n!==g.SPACE||p||e(t),n===g.ESC&&u&&i(t)},c=function(){p?h.focus():!u||b.buttonReverse?r.focus():a.focus()},this.bind(o,"focus",c),d&&this.bind(r,"click",e),u&&this.bind(a,"click",i),this.bind(n.body,"keyup",l),p&&this.bind(f,"submit",e),this.transition.supported||this.setFocus()},bind:function(t,e,i){"function"==typeof t.addEventListener?t.addEventListener(e,i,!1):t.attachEvent&&t.attachEvent("on"+e,i)},handleErrors:function(){if("undefined"!=typeof t.onerror){var e=this;return t.onerror=function(t,i,n){e.error("["+t+" on line "+n+" of "+i+"]",0)},!0}return!1},appendButtons:function(t,e){return this.buttonReverse?e+t:t+e},build:function(t){var e="",i=t.type,n=t.message,a=t.cssClass||"";switch(e+='<div class="alertify-dialog">',"none"===m.buttonFocus&&(e+='<a href="#" id="alertify-noneFocus" class="alertify-hidden"></a>'),"prompt"===i&&(e+='<form id="alertify-form">'),e+='<article class="alertify-inner">',e+=b.message.replace("{{message}}",n),"prompt"===i&&(e+=b.input),e+=b.buttons.holder,e+="</article>","prompt"===i&&(e+="</form>"),e+='<a id="alertify-resetFocus" class="alertify-resetFocus" href="#">Reset Focus</a>',e+="</div>",i){case"confirm":e=e.replace("{{buttons}}",this.appendButtons(b.buttons.cancel,b.buttons.ok)),e=e.replace("{{ok}}",this.labels.ok).replace("{{cancel}}",this.labels.cancel);break;case"prompt":e=e.replace("{{buttons}}",this.appendButtons(b.buttons.cancel,b.buttons.submit)),e=e.replace("{{ok}}",this.labels.ok).replace("{{cancel}}",this.labels.cancel);break;case"alert":e=e.replace("{{buttons}}",b.buttons.ok),e=e.replace("{{ok}}",this.labels.ok)}return d.className="alertify alertify-"+i+" "+a,c.className="alertify-cover",e},close:function(t,e){var i,n,a=e&&!isNaN(e)?+e:this.delay,r=this;this.bind(t,"click",function(){i(t)}),n=function(t){t.stopPropagation(),r.unbind(this,r.transition.type,n),u.removeChild(this),u.hasChildNodes()||(u.className+=" alertify-logs-hidden")},i=function(t){"undefined"!=typeof t&&t.parentNode===u&&(r.transition.supported?(r.bind(t,r.transition.type,n),t.className+=" alertify-log-hide"):(u.removeChild(t),u.hasChildNodes()||(u.className+=" alertify-logs-hidden")))},0!==e&&setTimeout(function(){i(t)},a)},dialog:function(t,e,i,a,r){l=n.activeElement;var o=function(){u&&null!==u.scrollTop&&c&&null!==c.scrollTop||o()};if("string"!=typeof t)throw new Error("message must be a string");if("string"!=typeof e)throw new Error("type must be a string");if("undefined"!=typeof i&&"function"!=typeof i)throw new Error("fn must be a function");return"function"==typeof this.init&&(this.init(),o()),v.push({type:e,message:t,callback:i,placeholder:a,cssClass:r}),y||this.setup(),this},extend:function(t){if("string"!=typeof t)throw new Error("extend method must have exactly one paramter");return function(e,i){return this.log(e,t,i),this}},hide:function(){var t,e=this;v.splice(0,1),v.length>0?this.setup(!0):(y=!1,t=function(i){i.stopPropagation(),d.className+=" alertify-isHidden",e.unbind(d,e.transition.type,t)},this.transition.supported?(this.bind(d,this.transition.type,t),d.className="alertify alertify-hide alertify-hidden"):d.className="alertify alertify-hide alertify-hidden alertify-isHidden",c.className="alertify-cover alertify-cover-hidden",l.focus())},init:function(){n.createElement("nav"),n.createElement("article"),n.createElement("section"),c=n.createElement("div"),c.setAttribute("id","alertify-cover"),c.className="alertify-cover alertify-cover-hidden",n.body.appendChild(c),d=n.createElement("section"),d.setAttribute("id","alertify"),d.className="alertify alertify-hidden",n.body.appendChild(d),u=n.createElement("section"),u.setAttribute("id","alertify-logs"),u.className="alertify-logs alertify-logs-hidden",n.body.appendChild(u),n.body.setAttribute("tabindex","0"),this.transition=p(),delete this.init},log:function(t,e,i){var n=function(){u&&null!==u.scrollTop||n()};return"function"==typeof this.init&&(this.init(),n()),u.className="alertify-logs",this.notify(t,e,i),this},notify:function(t,e,i){var a=n.createElement("article");a.className="alertify-log"+("string"==typeof e&&""!==e?" alertify-log-"+e:""),a.innerHTML=t,u.appendChild(a),setTimeout(function(){a.className=a.className+" alertify-log-show"},50),this.close(a,i)},set:function(t){var e;if("object"!=typeof t&&t instanceof Array)throw new Error("args must be an object");for(e in t)t.hasOwnProperty(e)&&(this[e]=t[e])},setFocus:function(){h?(h.focus(),h.select()):s.focus()},setup:function(t){var n,l=v[0],c=this;y=!0,n=function(t){t.stopPropagation(),c.setFocus(),c.unbind(d,c.transition.type,n)},this.transition.supported&&!t&&this.bind(d,this.transition.type,n),d.innerHTML=this.build(l),o=i("alertify-resetFocus"),r=i("alertify-ok")||e,a=i("alertify-cancel")||e,s="cancel"===m.buttonFocus?a:"none"===m.buttonFocus?i("alertify-noneFocus"):r,h=i("alertify-text")||e,f=i("alertify-form")||e,"string"==typeof l.placeholder&&""!==l.placeholder&&(h.value=l.placeholder),t&&this.setFocus(),this.addListeners(l.callback)},unbind:function(t,e,i){"function"==typeof t.removeEventListener?t.removeEventListener(e,i,!1):t.detachEvent&&t.detachEvent("on"+e,i)}},{alert:function(t,e,i){return m.dialog(t,"alert",e,"",i),this},confirm:function(t,e,i){return m.dialog(t,"confirm",e,"",i),this},extend:m.extend,init:m.init,log:function(t,e,i){return m.log(t,e,i),this},prompt:function(t,e,i,n){return m.dialog(t,"prompt",e,i,n),this},success:function(t,e){return m.log(t,"success",e),this},error:function(t,e){return m.log(t,"error",e),this},set:function(t){m.set(t)},labels:m.labels,debug:m.handleErrors}},"function"==typeof define?define([],function(){return new i}):"undefined"==typeof t.alertify&&(t.alertify=new i)}(this),/*! Backstretch - v2.0.3 - 2012-11-30
* http://srobbin.com/jquery-plugins/backstretch/
* Copyright (c) 2012 Scott Robbin; Licensed MIT */
function(t,e,i){"use strict";t.fn.backstretch=function(n,r){return(n===i||0===n.length)&&t.error("No images were supplied for Backstretch"),0===t(e).scrollTop()&&e.scrollTo(0,0),this.each(function(){var e=t(this),i=e.data("backstretch");i&&(r=t.extend(i.options,r),i.destroy(!0)),i=new a(this,n,r),e.data("backstretch",i)})},t.backstretch=function(e,i){return t("body").backstretch(e,i).data("backstretch")},t.expr[":"].backstretch=function(e){return t(e).data("backstretch")!==i},t.fn.backstretch.defaults={centeredX:!0,centeredY:!0,duration:5e3,fade:0};var n={wrap:{left:0,top:0,overflow:"hidden",margin:0,padding:0,height:"100%",width:"100%",zIndex:-999999},img:{position:"absolute",display:"none",margin:0,padding:0,border:"none",width:"auto",height:"auto",maxWidth:"none",zIndex:-999999}},a=function(i,a,o){if(this.options=t.extend({},t.fn.backstretch.defaults,o||{}),this.images=t.isArray(a)?a:[a],t.each(this.images,function(){t("<img />")[0].src=this}),this.isBody=i===document.body,this.$container=t(i),this.$wrap=t('<div class="backstretch"></div>').css(n.wrap).appendTo(this.$container),this.$root=this.isBody?r?t(e):t(document):this.$container,!this.isBody){var s=this.$container.css("position"),l=this.$container.css("zIndex");this.$container.css({position:"static"===s?"relative":s,zIndex:"auto"===l?0:l,background:"none"}),this.$wrap.css({zIndex:-999998})}this.$wrap.css({position:this.isBody&&r?"fixed":"absolute"}),this.index=0,this.show(this.index),t(e).on("resize.backstretch",t.proxy(this.resize,this)).on("orientationchange.backstretch",t.proxy(function(){this.isBody&&0===e.pageYOffset&&(e.scrollTo(0,1),this.resize())},this))};a.prototype={resize:function(){try{var t,i={left:0,top:0},n=this.isBody?this.$root.width():this.$root.innerWidth(),a=n,r=this.isBody?e.innerHeight?e.innerHeight:this.$root.height():this.$root.innerHeight(),o=a/this.$img.data("ratio");o>=r?(t=(o-r)/2,this.options.centeredY&&(i.top="-"+t+"px")):(o=r,a=o*this.$img.data("ratio"),t=(a-n)/2,this.options.centeredX&&(i.left="-"+t+"px")),this.$wrap.css({width:n,height:r}).find("img:not(.deleteable)").css({width:a,height:o}).css(i)}catch(s){}return this},show:function(e){if(!(Math.abs(e)>this.images.length-1)){this.index=e;var i=this,a=i.$wrap.find("img").addClass("deleteable"),r=t.Event("backstretch.show",{relatedTarget:i.$container[0]});return clearInterval(i.interval),i.$img=t("<img />").css(n.img).bind("load",function(e){var n=this.width||t(e.target).width(),o=this.height||t(e.target).height();t(this).data("ratio",n/o),t(this).fadeIn(i.options.speed||i.options.fade,function(){a.remove(),i.paused||i.cycle(),i.$container.trigger(r,i)}),i.resize()}).appendTo(i.$wrap),i.$img.attr("src",i.images[e]),i}},next:function(){return this.show(this.index<this.images.length-1?this.index+1:0)},prev:function(){return this.show(0===this.index?this.images.length-1:this.index-1)},pause:function(){return this.paused=!0,this},resume:function(){return this.paused=!1,this.next(),this},cycle:function(){return this.images.length>1&&(clearInterval(this.interval),this.interval=setInterval(t.proxy(function(){this.paused||this.next()},this),this.options.duration)),this},destroy:function(i){t(e).off("resize.backstretch orientationchange.backstretch"),clearInterval(this.interval),i||this.$wrap.remove(),this.$container.removeData("backstretch")}};var r=function(){var t=navigator.userAgent,i=navigator.platform,n=t.match(/AppleWebKit\/([0-9]+)/),a=!!n&&n[1],r=t.match(/Fennec\/([0-9]+)/),o=!!r&&r[1],s=t.match(/Opera Mobi\/([0-9]+)/),l=!!s&&s[1],c=t.match(/MSIE ([0-9]+)/),d=!!c&&c[1];return!((i.indexOf("iPhone")>-1||i.indexOf("iPad")>-1||i.indexOf("iPod")>-1)&&a&&534>a||e.operamini&&"[object OperaMini]"==={}.toString.call(e.operamini)||s&&7458>l||t.indexOf("Android")>-1&&a&&533>a||o&&6>o||"palmGetResource"in e&&a&&534>a||t.indexOf("MeeGo")>-1&&t.indexOf("NokiaBrowser/8.5.0")>-1||d&&6>=d)}()}(jQuery,window),function(){}.call(this),function(){$(".stuff").backstretch("/assets/backstretch.jpg",{fade:1500,centeredY:!0})}.call(this),function(){}.call(this),function(){}.call(this);