(self.webpackChunkmfModules=self.webpackChunkmfModules||[]).push([[380],{"./src/mobile.startup/LanguageInfo.js":function(e,t,r){var n=r("./src/mobile.startup/util.js"),a=r("./src/mobile.startup/actionParams.js");function s(e){this.api=e}s.prototype={getLanguages:function(){return this.api.get(a({meta:"languageinfo",liprop:"code|autonym|name|bcp47"})).then((function(e){var t=[];return Object.keys(e.query.languageinfo).forEach((function(r){var n=e.query.languageinfo[r];n.code.toLowerCase()===n.bcp47.toLowerCase()&&n.autonym&&t.push(n)})),t}),(function(){return n.Deferred().reject()})).then((function(e){return{languages:e.map((function(e){return e.url="#",e.lang=e.code,e.langname=e.name,e.title=e.name,e}))}}),(function(){return n.Deferred().reject()}))}},e.exports=s},"./src/mobile.startup/languageOverlay/getDeviceLanguage.js":function(e){e.exports=function(e){var t=e.languages?e.languages[0]:e.language||e.userLanguage||e.browserLanguage||e.systemLanguage;return t?t.toLowerCase():void 0}},"./src/mobile.startup/languageOverlay/languageInfoOverlay.js":function(e,t,r){var n=r("./src/mobile.startup/moduleLoaderSingleton.js"),a=r("./src/mobile.startup/languageOverlay/getDeviceLanguage.js"),s=r("./src/mobile.startup/Overlay.js"),o=r("./src/mobile.startup/promisedView.js");function i(e,t){return mw.loader.using("mobile.languages.structured").then((function(){return e.getLanguages()})).then((function(e){return new(n.require("mobile.languages.structured/LanguageSearcher"))({languages:e.languages,variants:e.variants,showSuggestedLanguages:t,deviceLanguage:a(navigator)})}))}function c(e,t){return s.make({heading:mw.msg("mobile-frontend-language-heading"),className:"overlay language-info-overlay"},o(i(e,t)))}c.test={loadLanguageInfoSearcher:i},e.exports=c},"./src/mobile.startup/languageOverlay/languageOverlay.js":function(e,t,r){var n=r("./src/mobile.startup/moduleLoaderSingleton.js"),a=r("./src/mobile.startup/languageOverlay/getDeviceLanguage.js"),s=r("./src/mobile.startup/Overlay.js"),o=r("./src/mobile.startup/MessageBox.js"),i=r("./src/mobile.startup/currentPageHTMLParser.js")(),c=r("./src/mobile.startup/promisedView.js");function u(){return mw.loader.using("mobile.languages.structured").then((function(){return i.getLanguages(mw.config.get("wgTitle"))})).then((function(e){return new(n.require("mobile.languages.structured/LanguageSearcher"))({languages:e.languages,variants:e.variants,showSuggestedLanguages:!0,deviceLanguage:a(navigator),onOpen:function(e){return mw.hook("mobileFrontend.languageSearcher.onOpen").fire(e)}})}),(function(){return new o({type:"error",className:"content",msg:mw.msg("mobile-frontend-languages-structured-overlay-error")})}))}function l(){return s.make({heading:mw.msg("mobile-frontend-language-heading"),className:"overlay language-overlay"},c(u()))}l.test={loadLanguageSearcher:u},e.exports=l},"./src/mobile.startup/mediaViewer/overlay.js":function(e,t,r){var n=r("./src/mobile.startup/moduleLoaderSingleton.js"),a=r("./src/mobile.startup/promisedView.js"),s=r("./src/mobile.startup/util.js"),o=r("./src/mobile.startup/headers.js").header,i=r("./src/mobile.startup/icons.js"),c=r("./src/mobile.startup/Overlay.js");e.exports=function(e){return c.make({headers:[o("",[],i.cancel("gray"))],className:"overlay media-viewer"},a(s.Promise.all([mw.loader.using("mobile.mediaViewer")]).then((function(){return new(0,n.require("mobile.mediaViewer").ImageCarousel)(e)}))))}},"./src/mobile.startup/mobile.startup.js":function(e,t,r){var n=r("./src/mobile.startup/currentPageHTMLParser.js"),a=r("./src/mobile.startup/time.js"),s=r("./src/mobile.startup/LanguageInfo.js"),o=r("./src/mobile.startup/currentPage.js"),i=r("./src/mobile.startup/Drawer.js"),c=r("./src/mobile.startup/CtaDrawer.js"),u=r("./src/mobile.startup/lazyImages/lazyImageLoader.js"),l=r("./src/mobile.startup/icons.js"),p=r("./src/mobile.startup/PageHTMLParser.js"),f=r("./src/mobile.startup/showOnPageReload.js"),m=r("./src/mobile.startup/OverlayManager.js"),h=r("./src/mobile.startup/View.js"),d=r("./src/mobile.startup/Overlay.js"),g=r("./src/mobile.startup/references/references.js"),b={SearchOverlay:r("./src/mobile.startup/search/SearchOverlay.js"),SearchGateway:r("./src/mobile.startup/search/SearchGateway.js")},y=r("./src/mobile.startup/promisedView.js"),v=r("./src/mobile.startup/headers.js"),w=r("./src/mobile.startup/Skin.js"),j={overlay:r("./src/mobile.startup/mediaViewer/overlay.js")},S=r("./src/mobile.startup/languageOverlay/languageInfoOverlay.js"),O=r("./src/mobile.startup/languageOverlay/languageOverlay.js"),R=r("./src/mobile.startup/amcOutreach/amcOutreach.js");mw._mobileFrontend={amcOutreach:R,overlayHeader:v.header,Drawer:i,CtaDrawer:c,View:h,Overlay:d,currentPageHTMLParser:n,getOverlayManager:function(){return m.getSingleton()},currentPage:o,PageHTMLParser:p,spinner:l.spinner,mediaViewer:j,references:g,search:b,time:a,promisedView:y,loadAllImagesInPage:function(){return u.loadImages(u.queryPlaceholders(document.getElementById("content")))},notifyOnPageReload:function(e){return f(e)},license:function(){return w.getSingleton().getLicenseMsg()},languages:{languageOverlay:O,languageInfoOverlay:function(e,t){S(new s(e),t)}}}},"./src/mobile.startup/promisedView.js":function(e,t,r){var n=r("./src/mobile.startup/icons.js"),a=r("./src/mobile.startup/View.js");e.exports=function(e){var t=new a({className:"promised-view"});return t.$el.append(n.spinner().$el),e.then((function(e){t.$el.replaceWith(e.$el),t.$el=e.$el}),(function(e){e&&e.$el&&(t.$el.replaceWith(e.$el),t.$el=e.$el)})),t}},"./src/mobile.startup/references/ReferencesGateway.js":function(e){function t(e){this.api=e}t.prototype.getReference=null,t.ERROR_NOT_EXIST="NOT_EXIST_ERROR",t.ERROR_OTHER="OTHER_ERROR",e.exports=t},"./src/mobile.startup/references/ReferencesHtmlScraperGateway.js":function(e,t,r){var n=r("./src/mobile.startup/references/ReferencesGateway.js"),a=r("./src/mobile.startup/mfExtend.js"),s=r("./src/mobile.startup/util.js");function o(){n.apply(this,arguments)}a(o,n,{EXTERNAL_LINK_CLASS:"external--reference",getReferenceFromContainer:function(e,t){var r,a,o,i=s.Deferred();return(r=t.find("#"+s.escapeSelector(e))).length?((a=r.closest("ol")).hasClass("mw-extended-references")&&(o=a.parent()),(o||r).find(".external").addClass(this.EXTERNAL_LINK_CLASS),i.resolve({text:this.getReferenceHtml(r),parentText:this.getReferenceHtml(o)})):i.reject(n.ERROR_NOT_EXIST),i.promise()},getReferenceHtml:function(e){return e?e.find(".mw-reference-text, .reference-text").first().html():""},getReference:function(e,t,r){var n=mw.util.percentDecodeFragment(e.slice(1));return this.getReferenceFromContainer(n,r.$el.find("ol.references"))}}),e.exports=o},"./src/mobile.startup/references/references.js":function(e,t,r){var n,a=r("./src/mobile.startup/Drawer.js"),s=r("./src/mobile.startup/util.js"),o=r("./src/mobile.startup/icons.js"),i=r("./src/mobile.startup/references/ReferencesGateway.js"),c=r("./src/mobile.startup/Icon.js"),u=r("./src/mobile.startup/references/ReferencesHtmlScraperGateway.js"),l=r("./src/mobile.startup/IconButton.js");function p(e){return function(t){var r=t.currentTarget.querySelector("a");if(r)return e(r.getAttribute("href"),r.textContent),!1}}function f(e){var t=e.error?new l({name:"error",isSmall:!0}).$el:null;return new a(s.extend({showCollapseIcon:!1,className:"drawer position-fixed text references-drawer",events:{"click sup a":function(e){e.preventDefault()},"click sup":e.onNestedReferenceClick&&p(e.onNestedReferenceClick)},children:[s.parseHTML("<div>").addClass("references-drawer__header").append([new c({icon:"reference",isSmall:!0}).$el,s.parseHTML("<span>").addClass("references-drawer__title").text(mw.msg("mobile-frontend-references-citation")),o.cancel("gray",{isSmall:!0,additionalClassNames:"mf-button-flush-right"}).$el]),s.parseHTML("<div>").addClass("mw-parser-output").append([t,e.parentText?s.parseHTML("<div>").html(e.parentText):"",s.parseHTML("<sup>").text(e.title),e.text?s.parseHTML("<span>").html(" "+e.text):o.spinner().$el])]},e))}n={test:{makeOnNestedReferenceClickHandler:p},ReferencesHtmlScraperGateway:u,referenceDrawer:f,showReference:function(e,t,r,a,o,c,u){return o.getReference(e,t,a).then((function(e){var i=f(s.extend({title:r,text:e.text,parentText:e.parentText,onNestedReferenceClick:function(e,r){n.showReference(e,t,r,a,o).then((function(e){c.onShowNestedReference?u(i,e):(mw.log.warn("Please provide onShowNestedReferences parameter."),document.body.appendChild(e.$el[0]),i.hide(),e.show())}))}},c));return i}),(function(e){if(e!==i.ERROR_NOT_EXIST)return f({error:!0,title:r,text:mw.msg("mobile-frontend-references-citation-error")})}))}},e.exports=n},"./src/mobile.startup/search/SearchGateway.js":function(e,t,r){var n=r("./src/mobile.startup/page/pageJSONParser.js"),a=r("./src/mobile.startup/util.js"),s=r("./src/mobile.startup/extendSearchParams.js");function o(e){this.api=e,this.searchCache={},this.generator=mw.config.get("wgMFSearchGenerator")}o.prototype={searchNamespace:0,getApiData:function(e){var t=this.generator.prefix,r=s("search",{generator:this.generator.name});return r.redirects="",r["g"+t+"search"]=e,r["g"+t+"namespace"]=this.searchNamespace,r["g"+t+"limit"]=15,r.pilimit&&(r.pilimit=15,r.pithumbsize=mw.config.get("wgMFThumbnailSizes").tiny),r},_createSearchRegEx:function(e){return e=e.replace(/[-\[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),new RegExp("^("+e+")","ig")},_highlightSearchTerm:function(e,t){return e=a.parseHTML("<span>").text(e).html(),t=t.trim(),t=a.parseHTML("<span>").text(t).html(),e.replace(this._createSearchRegEx(t),"<strong>$1</strong>")},_getPage:function(e,t){var r=n.parse(t);return r.displayTitle=this._highlightSearchTerm(t.displaytext?t.displaytext:r.title,e),r.index=t.index,r},_processData:function(e,t){var r=this,n=[];return t.query&&(n=t.query.pages||{},(n=Object.keys(n).map((function(t){return r._getPage(e,n[t])}))).sort((function(e,t){return e.index-t.index}))),n},search:function(e){var t,r,n=mw.config.get("wgMFScriptPath"),a=this;return this.isCached(e)||(r=(t=this.api.get(this.getApiData(e),n?{url:n}:void 0)).then((function(t,r){return{query:e,results:a._processData(e,t),searchId:r&&r.getResponseHeader("x-search-id")}}),(function(){a.searchCache[e]=void 0})),this.searchCache[e]=r.promise({abort:function(){t.abort()}})),this.searchCache[e]},isCached:function(e){return Boolean(this.searchCache[e])}},e.exports=o},"./src/mobile.startup/search/SearchHeaderView.js":function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,s(n.key),n)}}function s(e){var t=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,"string");if("object"!=n(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==n(t)?t:String(t)}function o(e,t,r){return t=c(t),function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,i()?Reflect.construct(t,r||[],c(e).constructor):t.apply(e,r))}function i(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(i=function(){return!!e})()}function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}function u(e,t){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},u(e,t)}var l=r("./src/mobile.startup/util.js"),p=r("./src/mobile.startup/View.js"),f=r("./src/mobile.startup/IconButton.js"),m=function(e){"use strict";function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o(this,t,[l.extend({autocapitalize:"sentences"},e,{events:{"input input":"onInput"}})])}var r,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(t,e),r=t,(n=[{key:"onInput",value:function(e){var t=e.target.value;this.options.onInput(t),t?this.clearIcon.$el.show():this.clearIcon.$el.hide()}},{key:"isTemplateMode",get:function(){return!0}},{key:"template",get:function(){return l.template('<div class="overlay-title search-header-view">\n\t\t<form method="get" action="{{action}}" class="search-box">\n\t\t<input class="search mf-icon-search" type="search" name="search"\n\t\t\tautocapitalize="{{autocapitalize}}"\n\t\t\tautocomplete="off" placeholder="{{placeholderMsg}}" aria-label="{{placeholderMsg}}" value="{{searchTerm}}">\n\t\t<input type="hidden" name="title" value="{{defaultSearchPage}}">\n\t\t</form>\n</div>')}},{key:"postRender",value:function(){var e=new f({tagName:"button",icon:"clear",size:"medium",isSmall:!0,label:mw.msg("mobile-frontend-clear-search"),additionalClassNames:"clear",events:{click:function(){return this.$el.find("input").val("").trigger("focus"),this.options.onInput(""),e.$el.hide(),!1}.bind(this)}});this.clearIcon=e,e.$el.hide(),e.$el.attr("aria-hidden","true"),this.$el.find("form").append(e.$el)}}])&&a(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}(p);e.exports=m},"./src/mobile.startup/search/SearchOverlay.js":function(e,t,r){var n=r("./src/mobile.startup/mfExtend.js"),a=r("./src/mobile.startup/Overlay.js"),s=r("./src/mobile.startup/util.js"),o=r("./src/mobile.startup/search/searchHeader.js"),i=r("./src/mobile.startup/search/SearchResultsView.js"),c=r("./src/mobile.startup/watchstar/WatchstarPageList.js");function u(e){var t=this,r=o(e.placeholderMsg,e.action||mw.config.get("wgScript"),(function(e){return t.performSearch(e)}),e.defaultSearchPage||"",e.autocapitalize),n=s.extend(!0,{headerChrome:!0,isBorderBox:!1,className:"overlay search-overlay",headers:[r],events:{"click .search-content":"onClickSearchContent","click .overlay-content":"onClickOverlayContent","click .overlay-content > div":function(e){e.stopPropagation()},"touchstart .results":"hideKeyboardOnScroll","mousedown .results":"hideKeyboardOnScroll","click .results a":"onClickResult"}},e);this.header=r,a.call(this,n),this.api=n.api,this.gateway=n.gateway||new n.gatewayClass(this.api),this.router=n.router,this.currentSearchId=null}n(u,a,{onClickSearchContent:function(){var e=this.$el.find("form"),t=e[0].parentNode;this.parseHTML("<input>").attr({type:"hidden",name:"fulltext",value:"search"}).appendTo(e),setTimeout((function(){e[0].parentNode||e.appendTo(t),e.trigger("submit")}),0)},onClickOverlayContent:function(){this.$el.find(".cancel").trigger("click")},hideKeyboardOnScroll:function(){this.$input.trigger("blur")},onClickResult:function(e){var t=this,r=this.$el.find(e.currentTarget);e.preventDefault(),this.router.back().then((function(){if(this.currentSearchId){var e=new URL(location.href);e.searchParams.set("searchToken",this.currentSearchId),t.router.navigateTo(document.title,{path:e.toString(),useReplaceState:!0}),this.currentSearchId=null}window.location.href=r.attr("href")}))},postRender:function(){var e,t=this,r=this,n=new i({searchContentLabel:mw.msg("mobile-frontend-search-content"),noResultsMsg:mw.msg("mobile-frontend-search-no-results"),searchContentNoResultsMsg:mw.message("mobile-frontend-search-content-no-results").parse()});function s(){r.$spinner.hide(),clearTimeout(e)}this.$el.find(".overlay-content").append(n.$el),a.prototype.postRender.call(this),this.$input=this.$el.find(this.header).find("input"),this.$searchContent=n.$el.hide(),this.$resultContainer=n.$el.find(".results-list-container"),this.$resultContainer[0].addEventListener("touchstart",(function(e){document.activeElement===t.$input[0]&&e.stopPropagation()})),this.$spinner=n.$el.find(".spinner-container"),this.on("search-start",(function(t){e&&s(),e=setTimeout((function(){return r.$spinner.show()}),2e3-t.delay)})),this.on("search-results",s)},showKeyboard:function(){var e=this.$input.val().length;this.$input.trigger("focus"),this.$input[0].setSelectionRange&&this.$input[0].setSelectionRange(e,e)},show:function(){a.prototype.show.apply(this,arguments),this.showKeyboard()},performSearch:function(e){var t=this,r=this.api,n=this.gateway.isCached(e)?0:300;e!==this.lastQuery&&(t._pendingQuery&&t._pendingQuery.abort(),clearTimeout(this.timer),e.length?this.timer=setTimeout((function(){var n;n=t.gateway.search(e),t._pendingQuery=n.then((function(e){this.currentSearchId=e.searchId,e&&e.query===t.$input.val()&&(t.$el.toggleClass("no-results",0===e.results.length),t.$searchContent.show().find("p").hide().filter(e.results.length?".with-results":".without-results").show(),new c({api:r,funnel:"search",pages:e.results,el:t.$resultContainer}),t.$results=t.$resultContainer.find("li"))})).promise({abort:function(){n.abort()}})}),n):t.resetSearch(),this.lastQuery=e)},resetSearch:function(){this.$el.find(".overlay-content").children().hide()}}),e.exports=u},"./src/mobile.startup/search/SearchResultsView.js":function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,s(n.key),n)}}function s(e){var t=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,"string");if("object"!=n(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==n(t)?t:String(t)}function o(e,t,r){return t=u(t),function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,i()?Reflect.construct(t,r||[],u(e).constructor):t.apply(e,r))}function i(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(i=function(){return!!e})()}function c(){return c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}(e,t);if(n){var a=Object.getOwnPropertyDescriptor(n,t);return a.get?a.get.call(arguments.length<3?e:r):a.value}},c.apply(this,arguments)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function l(e,t){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},l(e,t)}var p=r("./src/mobile.startup/View.js"),f=r("./src/mobile.startup/Icon.js"),m=r("./src/mobile.startup/Anchor.js"),h=r("./src/mobile.startup/icons.js").spinner().$el,d=r("./src/mobile.startup/util.js"),g=function(e){"use strict";function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o(this,t,arguments)}var r,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(t,e),r=t,(n=[{key:"isTemplateMode",get:function(){return!0}},{key:"template",get:function(){return d.template('\n<div class="search-results-view">\n\t<div class="search-content">\n\t\t<div class="caption">\n\t\t\t<p class="with-results">{{searchContentLabel}}</p>\n\t\t\t<p class="without-results">{{noResultsMsg}}</p>\n\t\t\t<p class="without-results">{{{searchContentNoResultsMsg}}}</p>\n\t\t</div>\n\t</div>\n\t<div class="spinner-container position-fixed"></div>\n\t<div class="results">\n\t\t<div class="results-list-container"></div>\n\t\t{{#feedback}}\n\t\t\t<div class="search-feedback">\n\t\t\t\t{{prompt}}\n\t\t\t</div>\n\t\t{{/feedback}}\n\t</div>\n</div>')}},{key:"preRender",value:function(){mw.config.get("wgCirrusSearchFeedbackLink")&&(this.options.feedback={prompt:mw.msg("mobile-frontend-search-feedback-prompt")})}},{key:"postRender",value:function(e){var r=mw.config.get("wgCirrusSearchFeedbackLink");c(u(t.prototype),"postRender",this).call(this,e),this.$el.find(".search-content").prepend(new f({icon:"articlesSearch"}).$el),this.$el.find(".spinner-container").append(h),r&&this.$el.find(".search-feedback").append(new m({label:mw.msg("mobile-frontend-search-feedback-link-text"),href:r}).$el)}}])&&a(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}(p);e.exports=g},"./src/mobile.startup/search/searchHeader.js":function(e,t,r){var n=r("./src/mobile.startup/headers.js").formHeader,a=r("./src/mobile.startup/search/SearchHeaderView.js"),s=r("./src/mobile.startup/icons.js");e.exports=function(e,t,r,o,i){return n(new a({placeholderMsg:e,autocapitalize:i,action:t,onInput:r,defaultSearchPage:o}),[s.cancel()],!1)}},"./src/mobile.startup/time.js":function(e,t,r){var n=["seconds","minutes","hours","days","months","years"],a=r("./src/mobile.startup/util.js"),s=[1,60,3600,86400,2592e3,31536e3];function o(e){for(var t=0;t<s.length&&e>s[t+1];)++t;return{value:Math.round(e/s[t]),unit:n[t]}}function i(e){return o(Math.round(Date.now()/1e3)-e)}function c(e){return"seconds"===e.unit&&e.value<10}e.exports={getLastModifiedMessage:function(e,t,r,n){var s,o,u,l=void 0===n,p=[];return r=r||"unknown",c(s=i(e))?p.push("mobile-frontend-last-modified-with-user-just-now",r,t):p.push({seconds:"mobile-frontend-last-modified-with-user-seconds",minutes:"mobile-frontend-last-modified-with-user-minutes",hours:"mobile-frontend-last-modified-with-user-hours",days:"mobile-frontend-last-modified-with-user-days",months:"mobile-frontend-last-modified-with-user-months",years:"mobile-frontend-last-modified-with-user-years"}[s.unit],r,t,mw.language.convertNumber(s.value)),o=l?a.parseHTML("<strong>").attr("class","last-modified-text-accent"):a.parseHTML("<a>").attr("href",n||"#"),u=l?a.parseHTML("<span>").attr("class","last-modified-text-accent"):a.parseHTML("<a>").attr("href",mw.util.getUrl("User:"+t)),p.push(o,mw.language.convertNumber(t?1:0),t?u:""),mw.message.apply(this,p).parse()},getRegistrationMessage:function(e,t){var r,n=[];return t=t||"unknown",c(r=i(parseInt(e,10)))?n.push("mobile-frontend-joined-just-now",t):n.push({seconds:"mobile-frontend-joined-seconds",minutes:"mobile-frontend-joined-minutes",hours:"mobile-frontend-joined-hours",days:"mobile-frontend-joined-days",months:"mobile-frontend-joined-months",years:"mobile-frontend-joined-years"}[r.unit],t,mw.language.convertNumber(r.value)),mw.message.apply(this,n).parse()},timeAgo:o,getTimeAgoDelta:i,isNow:c,isRecent:function(e){return["seconds","minutes","hours"].indexOf(e.unit)>-1}}}},function(e){e.O(0,[569],(function(){return"./src/mobile.startup/mobile.startup.js",e(e.s="./src/mobile.startup/mobile.startup.js")}));var t=e.O();(this.mfModules=this.mfModules||{})["mobile.startup"]=t}]);
//# sourceMappingURL=mobile.startup.js.map.json