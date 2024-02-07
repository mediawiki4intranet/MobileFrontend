(self.webpackChunkmfModules=self.webpackChunkmfModules||[]).push([[243],{"./src/mobile.init/editor.js":function(e,t,i){var o=i("./src/mobile.startup/moduleLoaderSingleton.js"),n=i("./src/mobile.startup/util.js"),r=i("./src/mobile.init/editorLoadingOverlay.js"),a=i("./src/mobile.startup/OverlayManager.js"),s=$("#ca-edit, #ca-editsource, #ca-viewsource, #ca-ve-edit, #ca-ve-create, #ca-createsource"),l=s.length>1,c=null,d=".mw-editsection a, .edit-link",u=mw.user,m=i("./src/mobile.startup/CtaDrawer.js"),g=mw.config.get("wgVisualEditorConfig"),f=/^\/editor\/(\d+|T-\d+|all)$/;function w(e,t,i){var o;o=0===$(d).length?"all":mw.util.getParamValue("section",e.href)||"all",mw.config.get("wgPageName")===mw.util.getParamValue("title",e.href)&&(l&&("ca-ve-edit"===e.id||"ca-ve-create"===e.id?c="VisualEditor":"ca-editsource"!==e.id&&"ca-createsource"!==e.id||(c="SourceEditor")),i.navigate("#/editor/"+o),t.preventDefault())}function p(){if(c)return c;var e=mw.user.options.get("mobile-editor")||mw.storage.get("preferredEditor");if(e)return e;switch(mw.config.get("wgMFDefaultEditor")){case"source":return"SourceEditor";case"visual":return"VisualEditor";case"preference":return mw.user.options.get("visualeditor-hidebetawelcome")||mw.user.options.get("visualeditor-hideusered")?"visualeditor"===mw.user.options.get("visualeditor-editor")?"VisualEditor":"SourceEditor":"visual"===mw.config.get("wgMFFallbackEditor")?"VisualEditor":"SourceEditor"}return"SourceEditor"}function v(e,t){s.on("click",(function(t){mw.notify(e),t.preventDefault()})),mw.hook("wikipage.content").add((function(t){t.find(d).on("click",(function(t){mw.notify(e),t.preventDefault()}))})),t.route(f,(function(){mw.notify(e)})),t.checkRoute()}e.exports=function(e,t,i){var l=require("mediawiki.router");e.inNamespace("file")&&0===e.id?v(mw.msg("mobile-frontend-editor-uploadenable"),l):function(e,t,i,l){var b,h;if(!(b=mw.config.get("wgMinervaReadOnly"))&&mw.config.get("wgIsProbablyEditable"))!function(e,t,i,l){var m=a.getSingleton(),v=0===e.id;if(s.add(".edit-link").on("click.mfeditlink",(function(e){w(this,e,m.router)})),mw.hook("wikipage.content").add((function(e){e.find(d).off("click.mfeditlink").on("click.mfeditlink",(function(e){w(this,e,m.router)}))})),m.add(f,(function(a){var s,l,d,f,w=window.pageYOffset,b=$("#mw-content-text"),h=new URL(location.href),y={overlayManager:m,currentPageHTMLParser:i,fakeScroll:0,api:new mw.Api,licenseMsg:t.getLicenseMsg(),title:e.title,titleObj:e.titleObj,isAnon:u.isAnon(),isNewPage:v,oldId:mw.util.getParamValue("oldid"),contentLang:b.attr("lang"),contentDir:b.attr("dir"),preload:h.searchParams.get("preload"),preloadparams:mw.util.getArrayParam("preloadparams",h.searchParams),editintro:h.searchParams.get("editintro")},k=$.Deferred(),E=mw.util.getParamValue("redlink")?"new":"click";function P(e){mw.track("editAttemptStep",{action:"init",type:"section",mechanism:E,integration:"page",editor_interface:e})}function S(){var t=p();return e.isVESourceAvailable()||e.isVEVisualAvailable()&&"VisualEditor"===t}function j(){return P("wikitext"),mw.hook("mobileFrontend.editorOpening").fire(),mw.loader.using("mobile.editor.overlay").then((function(){return new(o.require("mobile.editor.overlay/SourceEditorOverlay"))(y)}))}return"all"!==a&&(y.sectionId=e.isWikiText()?a:void 0),s=n.Deferred(),d=r((function(){var e,t,i,o,n;$(document.body).addClass("ve-loading"),e=$("#mw-mf-page-center"),t=$("#content"),"0"===a||"all"===a?i=$("#bodyContent"):(i=$('a[href$="section='+a+'"],a[href*="section='+a+'&"]').closest("h1, h2, h3, h4, h5, h6")).length||(i=$("#bodyContent")),e.prop("scrollTop",w),o=i[0].getBoundingClientRect().top,o-=48,S()?(n=!0===g.enableVisualSectionEditing||"mobile"===g.enableVisualSectionEditing,("0"===a||"all"===a||n)&&(o-=16)):"0"!==a&&"all"!==a||(o-=16),t.css({transform:"translate( 0, "+-o+"px )","padding-bottom":"+="+o,"margin-bottom":"-="+o}),y.fakeScroll=o,setTimeout(s.resolve,500)}),(function(){l&&l.abort&&l.abort(),$("#content").css({transform:"","padding-bottom":"","margin-bottom":""}),$(document.body).removeClass("ve-loading")}),S()?function(){E="tooslow",k.reject(),l&&l.abort&&l.abort()}:null),f=S()?function(){P("visualeditor"),mw.hook("mobileFrontend.editorOpening").fire(),y.mode=mw.config.get("wgMFEnableVEWikitextEditor")&&"SourceEditor"===p()?"source":"visual",y.dataPromise=mw.loader.using("ext.visualEditor.targetLoader").then((function(){return l=mw.libs.ve.targetLoader.requestPageData(y.mode,y.titleObj.getPrefixedDb(),{sessionStore:!0,section:void 0===y.sectionId?null:y.sectionId,oldId:y.oldId||void 0,preload:y.preload,preloadparams:y.preloadparams,editintro:y.editintro,targetName:"mobile"})}));var e=mw.loader.using("ext.visualEditor.targetLoader").then((function(){return mw.loader.using("mobile.editor.overlay").then((function(){return mw.libs.ve.targetLoader.addPlugin("ext.visualEditor.mobileArticleTarget"),mw.config.get("wgMFEnableVEWikitextEditor")&&mw.libs.ve.targetLoader.addPlugin("ext.visualEditor.mwwikitext"),mw.libs.ve.targetLoader.loadModules(y.mode)}))})),t=$.Deferred();return e.then(t.resolve,t.reject),k.then(t.reject,t.reject),t.then((function(){var e=o.require("mobile.editor.overlay/VisualEditorOverlay"),t=o.require("mobile.editor.overlay/SourceEditorOverlay");return y.SourceEditorOverlay=t,new e(y)}),(function(){return j()}))}():j(),n.Promise.all([f,s]).then((function(e){e.getLoadingPromise().catch((function(t){return"rejected"===k.state()?j().then((function(t){return(e=t).getLoadingPromise()})):$.Deferred().reject(t).promise()})).then((function(){var t=m.stack[0];t&&t.overlay===d&&m.replaceCurrent(e)}),(function(e,t){m.router.back(),e.show?(document.body.appendChild(e.$el[0]),e.show()):t?mw.notify(y.api.getErrorMessage(t)):mw.notify(mw.msg("mobile-frontend-editor-error-loading"))}))})),c=null,d})),$("#ca-edit a, a#ca-edit, #ca-editsource a, a#ca-editsource").prop("href",(function(e,t){var i=new URL(t,location.href);return i.searchParams.set("section","0"),i.toString()})),!l.getPath()&&(mw.util.getParamValue("veaction")||"edit"===mw.config.get("wgAction"))){"edit"===mw.util.getParamValue("veaction")?c="VisualEditor":"editsource"===mw.util.getParamValue("veaction")&&(c="SourceEditor");var b="#/editor/"+(mw.util.getParamValue("section")||("edit"===mw.config.get("wgAction")?"all":"0"));if(window.history&&history.pushState){var h=new URL(location.href);h.searchParams.delete("action"),h.searchParams.delete("veaction"),h.searchParams.delete("section"),history.replaceState(null,document.title,h)}n.docReady((function(){l.navigate(b)}))}}(e,i,t,l);else if(function(e){e.$el.find(".mw-editsection").hide()}(t),h=mw.config.get("wgRestrictionEdit"),mw.user.isAnon()&&Array.isArray(h)&&!h.length)!function(e){var t;function i(){t||(t=new m({content:mw.msg("mobile-frontend-editor-disabled-anon"),signupQueryParams:{warning:"mobile-frontend-watchlist-signup-action"}}),document.body.appendChild(t.$el[0])),t.show()}s.on("click",(function(e){i(),e.preventDefault()})),mw.hook("wikipage.content").add((function(e){e.find(d).on("click",(function(e){i(),e.preventDefault()}))})),e.route(f,(function(){i()})),e.checkRoute()}(l);else{var y=$("<a>").attr("href",mw.util.getUrl(mw.config.get("wgPageName"),{action:"edit"}));v(b?mw.msg("apierror-readonly"):mw.message("mobile-frontend-editor-disabled",y).parseDom(),l)}}(e,t,i,l)}},"./src/mobile.init/editorLoadingOverlay.js":function(e,t,i){var o=i("./src/mobile.init/fakeToolbar.js"),n=i("./src/mobile.startup/IconButton.js"),r=i("./src/mobile.startup/Overlay.js");e.exports=function(e,t,i){var a,s=o(),l=$("<div>").addClass("ve-loadbasiceditor"),c=new n({label:mw.msg("mobile-frontend-editor-loadbasiceditor"),action:"progressive",weight:"normal",size:"medium",isIconOnly:!1,icon:null}),d=new r({className:"overlay overlay-loading",noHeader:!0,isBorderBox:!1,onBeforeExit:function(e){e(),t(),a&&clearTimeout(a)}}),u=function(e,t){mw.track("visualEditorFeatureUse",{feature:e,action:t,editor_interface:"visualeditor"})};return d.show=function(){r.prototype.show.call(this),e()},d.$el.find(".overlay-content").append(s),i&&(d.$el.find(".overlay-content").append(l.append($("<p>").text(mw.msg("mobile-frontend-editor-loadingtooslow")),c.$el)),a=setTimeout((function(){l.addClass("ve-loadbasiceditor-shown"),u("mobileVisualFallback","context-show")}),3e3),c.$el.on("click",(function(){l.removeClass("ve-loadbasiceditor-shown"),u("mobileVisualFallback","fallback-confirm"),i()}))),s.addClass("toolbar-hidden"),setTimeout((function(){s.addClass("toolbar-shown"),setTimeout((function(){s.addClass("toolbar-shown-done")}),250)})),d}},"./src/mobile.init/lazyLoadedImages.js":function(e,t,i){var o=i("./src/mobile.startup/lazyImages/lazyImageLoader.js");function n(e){var t=o.queryPlaceholders(e[0]);if(window.addEventListener("beforeprint",(function(){o.loadImages(t)})),mw.config.get("wgMFLazyLoadImages"))if("IntersectionObserver"in window){var i=new IntersectionObserver((function(e){e.forEach((function(e){var t=e.target;e.isIntersecting&&(o.loadImage(t),i.unobserve(t))}))}),{rootMargin:"0px 0px 50% 0px",threshold:0});t.forEach((function(e){i.observe(e)}))}else $(t).addClass("".concat(o.placeholderClass,"--tap")),document.addEventListener("click",(function(e){t.indexOf(e.target)>-1&&o.loadImage(e.target)}))}e.exports=function(){mw.hook("wikipage.content").add(n)}},"./src/mobile.init/mobile.init.js":function(e,t,i){var o,n,r,a=i("./src/mobile.init/toggling.js"),s="mf-font-size",l="mf-expand-sections",c=mw.storage,d=new mw.Api,u=i("./src/mobile.init/lazyLoadedImages.js"),m=i("./src/mobile.init/editor.js"),g=i("./src/mobile.startup/currentPage.js")(),f=i("./src/mobile.startup/currentPageHTMLParser.js")(),w=i("./src/mobile.startup/util.js").getWindow(),p=i("./src/mobile.startup/Skin.js"),v=i("./src/mobile.startup/eventBusSingleton.js");function b(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}o=p.getSingleton(),w.on("resize",b(mw.util.debounce((function(){v.emit("resize")}),100),mw.util.throttle((function(){v.emit("resize:throttled")}),200))).on("scroll",b(mw.util.debounce((function(){v.emit("scroll")}),100),mw.util.throttle((function(){v.emit("scroll:throttled")}),200))),window.history&&history.pushState&&((n=new URL(window.location.href)).searchParams.has("venotify")||n.searchParams.has("mfnotify"))&&(n.searchParams.delete("venotify"),n.searchParams.delete("mfnotify"),window.history.replaceState(null,document.title,n.toString())),window.console&&window.console.log&&window.console.log.apply&&mw.config.get("wgMFEnableJSConsoleRecruitment")&&console.log(mw.msg("mobile-frontend-console-recruit")),mw.config.get("wgMFIsSupportedEditRequest")&&m(g,f,o),mw.storage.get("expandSections")&&(mw.user.isAnon()?mw.user.clientPrefs.set(l,"1"):d.saveOption(l,"1"),c.remove("expandSections")),(r=c.get("userFontSize"))&&(r=r.replace("-",""),mw.user.isAnon()?mw.user.clientPrefs.set(s,r):d.saveOption(s,r),c.remove("userFontSize")),a(),u()},"./src/mobile.init/toggling.js":function(e,t,i){e.exports=function(){var e=i("./src/mobile.startup/currentPage.js")(),t=i("./src/mobile.startup/Toggler.js"),o=i("./src/mobile.startup/eventBusSingleton.js");e.inNamespace("special")||"view"!==mw.config.get("wgAction")&&"edit"!==mw.config.get("wgAction")||mw.hook("wikipage.content").add((function(i){var n=i.find(".mw-parser-output");0===n.length&&(n=i),function(e,i,n){e.find(".section-heading").removeAttr("onclick"),void 0!==window.mfTempOpenSection&&delete window.mfTempOpenSection,new t({$container:e,prefix:"content-",page:n,eventBus:o})}(n,0,e)}))}}},function(e){e.O(0,[569],(function(){return"./src/mobile.init/mobile.init.js",e(e.s="./src/mobile.init/mobile.init.js")}));var t=e.O();(this.mfModules=this.mfModules||{})["mobile.init"]=t}]);
//# sourceMappingURL=mobile.init.js.map.json