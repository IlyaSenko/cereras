
/*
 * jQuery mmenu v5.7.8
 * @requires jQuery 1.7.0 or later
 *
 * mmenu.frebsite.nl
 *	
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * License: CC-BY-NC-4.0
 * http://creativecommons.org/licenses/by-nc/4.0/
 */
!function(e){function t(){e[n].glbl||(r={$wndw:e(window),$docu:e(document),$html:e("html"),$body:e("body")},i={},a={},o={},e.each([i,a,o],function(e,t){t.add=function(e){e=e.split(" ");for(var n=0,s=e.length;n<s;n++)t[e[n]]=t.mm(e[n])}}),i.mm=function(e){return"mm-"+e},i.add("wrapper menu panels panel nopanel current highest opened subopened navbar hasnavbar title btn prev next listview nolistview inset vertical selected divider spacer hidden fullsubopen"),i.umm=function(e){return"mm-"==e.slice(0,3)&&(e=e.slice(3)),e},a.mm=function(e){return"mm-"+e},a.add("parent child"),o.mm=function(e){return e+".mm"},o.add("transitionend webkitTransitionEnd click scroll keydown mousedown mouseup touchstart touchmove touchend orientationchange"),e[n]._c=i,e[n]._d=a,e[n]._e=o,e[n].glbl=r)}var n="mmenu",s="5.7.8";if(!(e[n]&&e[n].version>s)){e[n]=function(e,t,n){this.$menu=e,this._api=["bind","getInstance","update","initPanels","openPanel","closePanel","closeAllPanels","setSelected"],this.opts=t,this.conf=n,this.vars={},this.cbck={},"function"==typeof this.___deprecated&&this.___deprecated(),this._initMenu(),this._initAnchors();var s=this.$pnls.children();return this._initAddons(),this.initPanels(s),"function"==typeof this.___debug&&this.___debug(),this},e[n].version=s,e[n].addons={},e[n].uniqueId=0,e[n].defaults={extensions:[],initMenu:function(){},initPanels:function(){},navbar:{add:!0,title:"Menu",titleLink:"panel"},onClick:{setSelected:!0},slidingSubmenus:!0},e[n].configuration={classNames:{divider:"Divider",inset:"Inset",panel:"Panel",selected:"Selected",spacer:"Spacer",vertical:"Vertical"},clone:!1,openingInterval:25,panelNodetype:"ul, ol, div",transitionDuration:400},e[n].prototype={init:function(e){this.initPanels(e)},getInstance:function(){return this},update:function(){this.trigger("update")},initPanels:function(e){e=e.not("."+i.nopanel),e=this._initPanels(e),this.opts.initPanels.call(this,e),this.trigger("initPanels",e),this.trigger("update")},openPanel:function(t){var s=t.parent(),a=this;if(s.hasClass(i.vertical)){var o=s.parents("."+i.subopened);if(o.length)return void this.openPanel(o.first());s.addClass(i.opened),this.trigger("openPanel",t),this.trigger("openingPanel",t),this.trigger("openedPanel",t)}else{if(t.hasClass(i.current))return;var r=this.$pnls.children("."+i.panel),l=r.filter("."+i.current);r.removeClass(i.highest).removeClass(i.current).not(t).not(l).not("."+i.vertical).addClass(i.hidden),e[n].support.csstransitions||l.addClass(i.hidden),t.hasClass(i.opened)?t.nextAll("."+i.opened).addClass(i.highest).removeClass(i.opened).removeClass(i.subopened):(t.addClass(i.highest),l.addClass(i.subopened)),t.removeClass(i.hidden).addClass(i.current),a.trigger("openPanel",t),setTimeout(function(){t.removeClass(i.subopened).addClass(i.opened),a.trigger("openingPanel",t),a.__transitionend(t,function(){a.trigger("openedPanel",t)},a.conf.transitionDuration)},this.conf.openingInterval)}},closePanel:function(e){var t=e.parent();t.hasClass(i.vertical)&&(t.removeClass(i.opened),this.trigger("closePanel",e),this.trigger("closingPanel",e),this.trigger("closedPanel",e))},closeAllPanels:function(){this.$menu.find("."+i.listview).children().removeClass(i.selected).filter("."+i.vertical).removeClass(i.opened);var e=this.$pnls.children("."+i.panel),t=e.first();this.$pnls.children("."+i.panel).not(t).removeClass(i.subopened).removeClass(i.opened).removeClass(i.current).removeClass(i.highest).addClass(i.hidden),this.openPanel(t)},togglePanel:function(e){var t=e.parent();t.hasClass(i.vertical)&&this[t.hasClass(i.opened)?"closePanel":"openPanel"](e)},setSelected:function(e){this.$menu.find("."+i.listview).children("."+i.selected).removeClass(i.selected),e.addClass(i.selected),this.trigger("setSelected",e)},bind:function(e,t){e="init"==e?"initPanels":e,this.cbck[e]=this.cbck[e]||[],this.cbck[e].push(t)},trigger:function(){var e=this,t=Array.prototype.slice.call(arguments),n=t.shift();if(n="init"==n?"initPanels":n,this.cbck[n])for(var s=0,i=this.cbck[n].length;s<i;s++)this.cbck[n][s].apply(e,t)},_initMenu:function(){this.conf.clone&&(this.$orig=this.$menu,this.$menu=this.$orig.clone(!0),this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function(){e(this).attr("id",i.mm(e(this).attr("id")))})),this.opts.initMenu.call(this,this.$menu,this.$orig),this.$menu.attr("id",this.$menu.attr("id")||this.__getUniqueId()),this.$pnls=e('<div class="'+i.panels+'" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu),this.$menu.parent().addClass(i.wrapper);var t=[i.menu];this.opts.slidingSubmenus||t.push(i.vertical),this.opts.extensions=this.opts.extensions.length?"mm-"+this.opts.extensions.join(" mm-"):"",this.opts.extensions&&t.push(this.opts.extensions),this.$menu.addClass(t.join(" ")),this.trigger("_initMenu")},_initPanels:function(t){var s=this,o=this.__findAddBack(t,"ul, ol");this.__refactorClass(o,this.conf.classNames.inset,"inset").addClass(i.nolistview+" "+i.nopanel),o.not("."+i.nolistview).addClass(i.listview);var r=this.__findAddBack(t,"."+i.listview).children();this.__refactorClass(r,this.conf.classNames.selected,"selected"),this.__refactorClass(r,this.conf.classNames.divider,"divider"),this.__refactorClass(r,this.conf.classNames.spacer,"spacer"),this.__refactorClass(this.__findAddBack(t,"."+this.conf.classNames.panel),this.conf.classNames.panel,"panel");var l=e(),d=t.add(t.find("."+i.panel)).add(this.__findAddBack(t,"."+i.listview).children().children(this.conf.panelNodetype)).not("."+i.nopanel);this.__refactorClass(d,this.conf.classNames.vertical,"vertical"),this.opts.slidingSubmenus||d.addClass(i.vertical),d.each(function(){var t=e(this),n=t;t.is("ul, ol")?(t.wrap('<div class="'+i.panel+'" />'),n=t.parent()):n.addClass(i.panel);var a=t.attr("id");t.removeAttr("id"),n.attr("id",a||s.__getUniqueId()),t.hasClass(i.vertical)&&(t.removeClass(s.conf.classNames.vertical),n.add(n.parent()).addClass(i.vertical)),l=l.add(n)});var c=e("."+i.panel,this.$menu);l.each(function(t){var o,r,l=e(this),d=l.parent(),c=d.children("a, span").first();if(d.is("."+i.panels)||(d.data(a.child,l),l.data(a.parent,d)),d.children("."+i.next).length||d.parent().is("."+i.listview)&&(o=l.attr("id"),r=e('<a class="'+i.next+'" href="#'+o+'" data-target="#'+o+'" />').insertBefore(c),c.is("span")&&r.addClass(i.fullsubopen)),!l.children("."+i.navbar).length&&!d.hasClass(i.vertical)){d.parent().is("."+i.listview)?d=d.closest("."+i.panel):(c=d.closest("."+i.panel).find('a[href="#'+l.attr("id")+'"]').first(),d=c.closest("."+i.panel));var p=!1,u=e('<div class="'+i.navbar+'" />');if(s.opts.navbar.add&&l.addClass(i.hasnavbar),d.length){switch(o=d.attr("id"),s.opts.navbar.titleLink){case"anchor":p=c.attr("href");break;case"panel":case"parent":p="#"+o;break;default:p=!1}u.append('<a class="'+i.btn+" "+i.prev+'" href="#'+o+'" data-target="#'+o+'" />').append(e('<a class="'+i.title+'"'+(p?' href="'+p+'"':"")+" />").text(c.text())).prependTo(l)}else s.opts.navbar.title&&u.append('<a class="'+i.title+'">'+e[n].i18n(s.opts.navbar.title)+"</a>").prependTo(l)}});var p=this.__findAddBack(t,"."+i.listview).children("."+i.selected).removeClass(i.selected).last().addClass(i.selected);p.add(p.parentsUntil("."+i.menu,"li")).filter("."+i.vertical).addClass(i.opened).end().each(function(){e(this).parentsUntil("."+i.menu,"."+i.panel).not("."+i.vertical).first().addClass(i.opened).parentsUntil("."+i.menu,"."+i.panel).not("."+i.vertical).first().addClass(i.opened).addClass(i.subopened)}),p.children("."+i.panel).not("."+i.vertical).addClass(i.opened).parentsUntil("."+i.menu,"."+i.panel).not("."+i.vertical).first().addClass(i.opened).addClass(i.subopened);var u=c.filter("."+i.opened);return u.length||(u=l.first()),u.addClass(i.opened).last().addClass(i.current),l.not("."+i.vertical).not(u.last()).addClass(i.hidden).end().filter(function(){return!e(this).parent().hasClass(i.panels)}).appendTo(this.$pnls),this.trigger("_initPanels",l),l},_initAnchors:function(){var t=this;r.$body.on(o.click+"-oncanvas","a[href]",function(s){var a=e(this),o=!1,r=t.$menu.find(a).length;for(var l in e[n].addons)if(e[n].addons[l].clickAnchor.call(t,a,r)){o=!0;break}var d=a.attr("href");if(!o&&r&&d.length>1&&"#"==d.slice(0,1))try{var c=e(d,t.$menu);c.is("."+i.panel)&&(o=!0,t[a.parent().hasClass(i.vertical)?"togglePanel":"openPanel"](c))}catch(p){}if(o&&s.preventDefault(),!o&&r&&a.is("."+i.listview+" > li > a")&&!a.is('[rel="external"]')&&!a.is('[target="_blank"]')){t.__valueOrFn(t.opts.onClick.setSelected,a)&&t.setSelected(e(s.target).parent());var u=t.__valueOrFn(t.opts.onClick.preventDefault,a,"#"==d.slice(0,1));u&&s.preventDefault(),t.__valueOrFn(t.opts.onClick.close,a,u)&&t.close()}}),this.trigger("_initAnchors")},_initAddons:function(){var t;for(t in e[n].addons)e[n].addons[t].add.call(this),e[n].addons[t].add=function(){};for(t in e[n].addons)e[n].addons[t].setup.call(this);this.trigger("_initAddons")},_getOriginalMenuId:function(){var e=this.$menu.attr("id");return e&&e.length&&this.conf.clone&&(e=i.umm(e)),e},__api:function(){var t=this,n={};return e.each(this._api,function(e){var s=this;n[s]=function(){var e=t[s].apply(t,arguments);return"undefined"==typeof e?n:e}}),n},__valueOrFn:function(e,t,n){return"function"==typeof e?e.call(t[0]):"undefined"==typeof e&&"undefined"!=typeof n?n:e},__refactorClass:function(e,t,n){return e.filter("."+t).removeClass(t).addClass(i[n])},__findAddBack:function(e,t){return e.find(t).add(e.filter(t))},__filterListItems:function(e){return e.not("."+i.divider).not("."+i.hidden)},__transitionend:function(t,n,s){var i=!1,a=function(s){if("undefined"!=typeof s){if(!e(s.target).is(t))return!1;t.unbind(o.transitionend),t.unbind(o.webkitTransitionEnd)}i||n.call(t[0]),i=!0};t.on(o.transitionend,a),t.on(o.webkitTransitionEnd,a),setTimeout(a,1.1*s)},__getUniqueId:function(){return i.mm(e[n].uniqueId++)}},e.fn[n]=function(s,i){t(),s=e.extend(!0,{},e[n].defaults,s),i=e.extend(!0,{},e[n].configuration,i);var a=e();return this.each(function(){var t=e(this);if(!t.data(n)){var o=new e[n](t,s,i);o.$menu.data(n,o.__api()),a=a.add(o.$menu)}}),a},e[n].i18n=function(){var t={};return function(n){switch(typeof n){case"object":return e.extend(t,n),t;case"string":return t[n]||n;case"undefined":default:return t}}}(),e[n].support={touch:"ontouchstart"in window||navigator.msMaxTouchPoints||!1,csstransitions:function(){if("undefined"!=typeof Modernizr&&"undefined"!=typeof Modernizr.csstransitions)return Modernizr.csstransitions;var e=document.body||document.documentElement,t=e.style,n="transition";if("string"==typeof t[n])return!0;var s=["Moz","webkit","Webkit","Khtml","O","ms"];n=n.charAt(0).toUpperCase()+n.substr(1);for(var i=0;i<s.length;i++)if("string"==typeof t[s[i]+n])return!0;return!1}(),csstransforms:function(){return"undefined"==typeof Modernizr||"undefined"==typeof Modernizr.csstransforms||Modernizr.csstransforms}(),csstransforms3d:function(){return"undefined"==typeof Modernizr||"undefined"==typeof Modernizr.csstransforms3d||Modernizr.csstransforms3d}()};var i,a,o,r}}(jQuery),/*	
 * jQuery mmenu offCanvas add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="offCanvas";e[t].addons[n]={setup:function(){if(this.opts[n]){var i=this.opts[n],a=this.conf[n];o=e[t].glbl,this._api=e.merge(this._api,["open","close","setPage"]),"top"!=i.position&&"bottom"!=i.position||(i.zposition="front"),"string"!=typeof a.pageSelector&&(a.pageSelector="> "+a.pageNodetype),o.$allMenus=(o.$allMenus||e()).add(this.$menu),this.vars.opened=!1;var r=[s.offcanvas];"left"!=i.position&&r.push(s.mm(i.position)),"back"!=i.zposition&&r.push(s.mm(i.zposition)),this.$menu.addClass(r.join(" ")).parent().removeClass(s.wrapper),e[t].support.csstransforms||this.$menu.addClass(s["no-csstransforms"]),e[t].support.csstransforms3d||this.$menu.addClass(s["no-csstransforms3d"]),this.setPage(o.$page),this._initBlocker(),this["_initWindow_"+n](),this.$menu[a.menuInjectMethod+"To"](a.menuWrapperSelector);var l=window.location.hash;if(l){var d=this._getOriginalMenuId();d&&d==l.slice(1)&&this.open()}}},add:function(){s=e[t]._c,i=e[t]._d,a=e[t]._e,s.add("offcanvas slideout blocking modal background opening blocker page no-csstransforms3d"),i.add("style"),a.add("resize")},clickAnchor:function(e,t){var i=this;if(this.opts[n]){var a=this._getOriginalMenuId();if(a&&e.is('[href="#'+a+'"]')){if(t)return!0;var r=e.closest("."+s.menu);if(r.length){var l=r.data("mmenu");if(l&&l.close)return l.close(),i.__transitionend(r,function(){i.open()},i.conf.transitionDuration),!0}return this.open(),!0}if(o.$page)return a=o.$page.first().attr("id"),a&&e.is('[href="#'+a+'"]')?(this.close(),!0):void 0}}},e[t].defaults[n]={position:"left",zposition:"back",blockUI:!0,moveBackground:!0},e[t].configuration[n]={pageNodetype:"div",pageSelector:null,noPageSelector:[],wrapPageIfNeeded:!0,menuWrapperSelector:"body",menuInjectMethod:"prepend"},e[t].prototype.open=function(){if(!this.vars.opened){var e=this;this._openSetup(),setTimeout(function(){e._openFinish()},this.conf.openingInterval),this.trigger("open")}},e[t].prototype._openSetup=function(){var t=this,r=this.opts[n];this.closeAllOthers(),o.$page.each(function(){e(this).data(i.style,e(this).attr("style")||"")}),o.$wndw.trigger(a.resize+"-"+n,[!0]);var l=[s.opened];r.blockUI&&l.push(s.blocking),"modal"==r.blockUI&&l.push(s.modal),r.moveBackground&&l.push(s.background),"left"!=r.position&&l.push(s.mm(this.opts[n].position)),"back"!=r.zposition&&l.push(s.mm(this.opts[n].zposition)),this.opts.extensions&&l.push(this.opts.extensions),o.$html.addClass(l.join(" ")),setTimeout(function(){t.vars.opened=!0},this.conf.openingInterval),this.$menu.addClass(s.current+" "+s.opened)},e[t].prototype._openFinish=function(){var e=this;this.__transitionend(o.$page.first(),function(){e.trigger("opened")},this.conf.transitionDuration),o.$html.addClass(s.opening),this.trigger("opening")},e[t].prototype.close=function(){if(this.vars.opened){var t=this;this.__transitionend(o.$page.first(),function(){t.$menu.removeClass(s.current+" "+s.opened);var a=[s.opened,s.blocking,s.modal,s.background,s.mm(t.opts[n].position),s.mm(t.opts[n].zposition)];t.opts.extensions&&a.push(t.opts.extensions),o.$html.removeClass(a.join(" ")),o.$page.each(function(){e(this).attr("style",e(this).data(i.style))}),t.vars.opened=!1,t.trigger("closed")},this.conf.transitionDuration),o.$html.removeClass(s.opening),this.trigger("close"),this.trigger("closing")}},e[t].prototype.closeAllOthers=function(){o.$allMenus.not(this.$menu).each(function(){var n=e(this).data(t);n&&n.close&&n.close()})},e[t].prototype.setPage=function(t){var i=this,a=this.conf[n];t&&t.length||(t=o.$body.find(a.pageSelector),a.noPageSelector.length&&(t=t.not(a.noPageSelector.join(", "))),t.length>1&&a.wrapPageIfNeeded&&(t=t.wrapAll("<"+this.conf[n].pageNodetype+" />").parent())),t.each(function(){e(this).attr("id",e(this).attr("id")||i.__getUniqueId())}),t.addClass(s.page+" "+s.slideout),o.$page=t,this.trigger("setPage",t)},e[t].prototype["_initWindow_"+n]=function(){o.$wndw.off(a.keydown+"-"+n).on(a.keydown+"-"+n,function(e){if(o.$html.hasClass(s.opened)&&9==e.keyCode)return e.preventDefault(),!1});var e=0;o.$wndw.off(a.resize+"-"+n).on(a.resize+"-"+n,function(t,n){if(1==o.$page.length&&(n||o.$html.hasClass(s.opened))){var i=o.$wndw.height();(n||i!=e)&&(e=i,o.$page.css("minHeight",i))}})},e[t].prototype._initBlocker=function(){var t=this;this.opts[n].blockUI&&(o.$blck||(o.$blck=e('<div id="'+s.blocker+'" class="'+s.slideout+'" />')),o.$blck.appendTo(o.$body).off(a.touchstart+"-"+n+" "+a.touchmove+"-"+n).on(a.touchstart+"-"+n+" "+a.touchmove+"-"+n,function(e){e.preventDefault(),e.stopPropagation(),o.$blck.trigger(a.mousedown+"-"+n)}).off(a.mousedown+"-"+n).on(a.mousedown+"-"+n,function(e){e.preventDefault(),o.$html.hasClass(s.modal)||(t.closeAllOthers(),t.close())}))};var s,i,a,o}(jQuery),/*	
 * jQuery mmenu scrollBugFix add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var t="mmenu",n="scrollBugFix";e[t].addons[n]={setup:function(){var i=this,r=this.opts[n];this.conf[n];if(o=e[t].glbl,e[t].support.touch&&this.opts.offCanvas&&this.opts.offCanvas.blockUI&&("boolean"==typeof r&&(r={fix:r}),"object"!=typeof r&&(r={}),r=this.opts[n]=e.extend(!0,{},e[t].defaults[n],r),r.fix)){var l=this.$menu.attr("id"),d=!1;this.bind("opening",function(){this.$pnls.children("."+s.current).scrollTop(0)}),o.$docu.on(a.touchmove,function(e){i.vars.opened&&e.preventDefault()}),o.$body.on(a.touchstart,"#"+l+"> ."+s.panels+"> ."+s.current,function(e){i.vars.opened&&(d||(d=!0,0===e.currentTarget.scrollTop?e.currentTarget.scrollTop=1:e.currentTarget.scrollHeight===e.currentTarget.scrollTop+e.currentTarget.offsetHeight&&(e.currentTarget.scrollTop-=1),d=!1))}).on(a.touchmove,"#"+l+"> ."+s.panels+"> ."+s.current,function(t){i.vars.opened&&e(this)[0].scrollHeight>e(this).innerHeight()&&t.stopPropagation()}),o.$wndw.on(a.orientationchange,function(){i.$pnls.children("."+s.current).scrollTop(0).css({"-webkit-overflow-scrolling":"auto"}).css({"-webkit-overflow-scrolling":"touch"})})}},add:function(){s=e[t]._c,i=e[t]._d,a=e[t]._e},clickAnchor:function(e,t){}},e[t].defaults[n]={fix:!0};var s,i,a,o}(jQuery);
/**
 * sifter.js
 * Copyright (c) 2013 Brian Reavis & contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@thirdroute.com>
 */

(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('sifter', factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.Sifter = factory();
    }
}(this, function() {

    /**
     * Textually searches arrays and hashes of objects
     * by property (or multiple properties). Designed
     * specifically for autocomplete.
     *
     * @constructor
     * @param {array|object} items
     * @param {object} items
     */
    var Sifter = function(items, settings) {
        this.items = items;
        this.settings = settings || {diacritics: true};
    };

    /**
     * Splits a search string into an array of individual
     * regexps to be used to match results.
     *
     * @param {string} query
     * @returns {array}
     */
    Sifter.prototype.tokenize = function(query) {
        query = trim(String(query || '').toLowerCase());
        if (!query || !query.length) return [];

        var i, n, regex, letter;
        var tokens = [];
        var words = query.split(/ +/);

        for (i = 0, n = words.length; i < n; i++) {
            regex = escape_regex(words[i]);
            if (this.settings.diacritics) {
                for (letter in DIACRITICS) {
                    if (DIACRITICS.hasOwnProperty(letter)) {
                        regex = regex.replace(new RegExp(letter, 'g'), DIACRITICS[letter]);
                    }
                }
            }
            tokens.push({
                string : words[i],
                regex  : new RegExp(regex, 'i')
            });
        }

        return tokens;
    };

    /**
     * Iterates over arrays and hashes.
     *
     * ```
     * this.iterator(this.items, function(item, id) {
	 *    // invoked for each item
	 * });
     * ```
     *
     * @param {array|object} object
     */
    Sifter.prototype.iterator = function(object, callback) {
        var iterator;
        if (is_array(object)) {
            iterator = Array.prototype.forEach || function(callback) {
                    for (var i = 0, n = this.length; i < n; i++) {
                        callback(this[i], i, this);
                    }
                };
        } else {
            iterator = function(callback) {
                for (var key in this) {
                    if (this.hasOwnProperty(key)) {
                        callback(this[key], key, this);
                    }
                }
            };
        }

        iterator.apply(object, [callback]);
    };

    /**
     * Returns a function to be used to score individual results.
     *
     * Good matches will have a higher score than poor matches.
     * If an item is not a match, 0 will be returned by the function.
     *
     * @param {object|string} search
     * @param {object} options (optional)
     * @returns {function}
     */
    Sifter.prototype.getScoreFunction = function(search, options) {
        var self, fields, tokens, token_count, nesting;

        self        = this;
        search      = self.prepareSearch(search, options);
        tokens      = search.tokens;
        fields      = search.options.fields;
        token_count = tokens.length;
        nesting     = search.options.nesting;

        /**
         * Calculates how close of a match the
         * given value is against a search token.
         *
         * @param {mixed} value
         * @param {object} token
         * @return {number}
         */
        var scoreValue = function(value, token) {
            var score, pos;

            if (!value) return 0;
            value = String(value || '');
            pos = value.search(token.regex);
            if (pos === -1) return 0;
            score = token.string.length / value.length;
            if (pos === 0) score += 0.5;
            return score;
        };

        /**
         * Calculates the score of an object
         * against the search query.
         *
         * @param {object} token
         * @param {object} data
         * @return {number}
         */
        var scoreObject = (function() {
            var field_count = fields.length;
            if (!field_count) {
                return function() { return 0; };
            }
            if (field_count === 1) {
                return function(token, data) {
                    return scoreValue(getattr(data, fields[0], nesting), token);
                };
            }
            return function(token, data) {
                for (var i = 0, sum = 0; i < field_count; i++) {
                    sum += scoreValue(getattr(data, fields[i], nesting), token);
                }
                return sum / field_count;
            };
        })();

        if (!token_count) {
            return function() { return 0; };
        }
        if (token_count === 1) {
            return function(data) {
                return scoreObject(tokens[0], data);
            };
        }

        if (search.options.conjunction === 'and') {
            return function(data) {
                var score;
                for (var i = 0, sum = 0; i < token_count; i++) {
                    score = scoreObject(tokens[i], data);
                    if (score <= 0) return 0;
                    sum += score;
                }
                return sum / token_count;
            };
        } else {
            return function(data) {
                for (var i = 0, sum = 0; i < token_count; i++) {
                    sum += scoreObject(tokens[i], data);
                }
                return sum / token_count;
            };
        }
    };

    /**
     * Returns a function that can be used to compare two
     * results, for sorting purposes. If no sorting should
     * be performed, `null` will be returned.
     *
     * @param {string|object} search
     * @param {object} options
     * @return function(a,b)
     */
    Sifter.prototype.getSortFunction = function(search, options) {
        var i, n, self, field, fields, fields_count, multiplier, multipliers, get_field, implicit_score, sort;

        self   = this;
        search = self.prepareSearch(search, options);
        sort   = (!search.query && options.sort_empty) || options.sort;

        /**
         * Fetches the specified sort field value
         * from a search result item.
         *
         * @param  {string} name
         * @param  {object} result
         * @return {mixed}
         */
        get_field = function(name, result) {
            if (name === '$score') return result.score;
            return getattr(self.items[result.id], name, options.nesting);
        };

        // parse options
        fields = [];
        if (sort) {
            for (i = 0, n = sort.length; i < n; i++) {
                if (search.query || sort[i].field !== '$score') {
                    fields.push(sort[i]);
                }
            }
        }

        // the "$score" field is implied to be the primary
        // sort field, unless it's manually specified
        if (search.query) {
            implicit_score = true;
            for (i = 0, n = fields.length; i < n; i++) {
                if (fields[i].field === '$score') {
                    implicit_score = false;
                    break;
                }
            }
            if (implicit_score) {
                fields.unshift({field: '$score', direction: 'desc'});
            }
        } else {
            for (i = 0, n = fields.length; i < n; i++) {
                if (fields[i].field === '$score') {
                    fields.splice(i, 1);
                    break;
                }
            }
        }

        multipliers = [];
        for (i = 0, n = fields.length; i < n; i++) {
            multipliers.push(fields[i].direction === 'desc' ? -1 : 1);
        }

        // build function
        fields_count = fields.length;
        if (!fields_count) {
            return null;
        } else if (fields_count === 1) {
            field = fields[0].field;
            multiplier = multipliers[0];
            return function(a, b) {
                return multiplier * cmp(
                        get_field(field, a),
                        get_field(field, b)
                    );
            };
        } else {
            return function(a, b) {
                var i, result, a_value, b_value, field;
                for (i = 0; i < fields_count; i++) {
                    field = fields[i].field;
                    result = multipliers[i] * cmp(
                            get_field(field, a),
                            get_field(field, b)
                        );
                    if (result) return result;
                }
                return 0;
            };
        }
    };

    /**
     * Parses a search query and returns an object
     * with tokens and fields ready to be populated
     * with results.
     *
     * @param {string} query
     * @param {object} options
     * @returns {object}
     */
    Sifter.prototype.prepareSearch = function(query, options) {
        if (typeof query === 'object') return query;

        options = extend({}, options);

        var option_fields     = options.fields;
        var option_sort       = options.sort;
        var option_sort_empty = options.sort_empty;

        if (option_fields && !is_array(option_fields)) options.fields = [option_fields];
        if (option_sort && !is_array(option_sort)) options.sort = [option_sort];
        if (option_sort_empty && !is_array(option_sort_empty)) options.sort_empty = [option_sort_empty];

        return {
            options : options,
            query   : String(query || '').toLowerCase(),
            tokens  : this.tokenize(query),
            total   : 0,
            items   : []
        };
    };

    /**
     * Searches through all items and returns a sorted array of matches.
     *
     * The `options` parameter can contain:
     *
     *   - fields {string|array}
     *   - sort {array}
     *   - score {function}
     *   - filter {bool}
     *   - limit {integer}
     *
     * Returns an object containing:
     *
     *   - options {object}
     *   - query {string}
     *   - tokens {array}
     *   - total {int}
     *   - items {array}
     *
     * @param {string} query
     * @param {object} options
     * @returns {object}
     */
    Sifter.prototype.search = function(query, options) {
        var self = this, value, score, search, calculateScore;
        var fn_sort;
        var fn_score;

        search  = this.prepareSearch(query, options);
        options = search.options;
        query   = search.query;

        // generate result scoring function
        fn_score = options.score || self.getScoreFunction(search);

        // perform search and sort
        if (query.length) {
            self.iterator(self.items, function(item, id) {
                score = fn_score(item);
                if (options.filter === false || score > 0) {
                    search.items.push({'score': score, 'id': id});
                }
            });
        } else {
            self.iterator(self.items, function(item, id) {
                search.items.push({'score': 1, 'id': id});
            });
        }

        fn_sort = self.getSortFunction(search, options);
        if (fn_sort) search.items.sort(fn_sort);

        // apply limits
        search.total = search.items.length;
        if (typeof options.limit === 'number') {
            search.items = search.items.slice(0, options.limit);
        }

        return search;
    };

    // utilities
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    var cmp = function(a, b) {
        if (typeof a === 'number' && typeof b === 'number') {
            return a > b ? 1 : (a < b ? -1 : 0);
        }
        a = asciifold(String(a || ''));
        b = asciifold(String(b || ''));
        if (a > b) return 1;
        if (b > a) return -1;
        return 0;
    };

    var extend = function(a, b) {
        var i, n, k, object;
        for (i = 1, n = arguments.length; i < n; i++) {
            object = arguments[i];
            if (!object) continue;
            for (k in object) {
                if (object.hasOwnProperty(k)) {
                    a[k] = object[k];
                }
            }
        }
        return a;
    };

    /**
     * A property getter resolving dot-notation
     * @param  {Object}  obj     The root object to fetch property on
     * @param  {String}  name    The optionally dotted property name to fetch
     * @param  {Boolean} nesting Handle nesting or not
     * @return {Object}          The resolved property value
     */
    var getattr = function(obj, name, nesting) {
        if (!obj || !name) return;
        if (!nesting) return obj[name];
        var names = name.split(".");
        while(names.length && (obj = obj[names.shift()]));
        return obj;
    };

    var trim = function(str) {
        return (str + '').replace(/^\s+|\s+$|/g, '');
    };

    var escape_regex = function(str) {
        return (str + '').replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    };

    var is_array = Array.isArray || (typeof $ !== 'undefined' && $.isArray) || function(object) {
            return Object.prototype.toString.call(object) === '[object Array]';
        };

    var DIACRITICS = {
        'a': '[aḀḁĂăÂâǍǎȺⱥȦȧẠạÄäÀàÁáĀāÃãÅåąĄÃąĄ]',
        'b': '[b␢βΒB฿𐌁ᛒ]',
        'c': '[cĆćĈĉČčĊċC̄c̄ÇçḈḉȻȼƇƈɕᴄＣｃ]',
        'd': '[dĎďḊḋḐḑḌḍḒḓḎḏĐđD̦d̦ƉɖƊɗƋƌᵭᶁᶑȡᴅＤｄð]',
        'e': '[eÉéÈèÊêḘḙĚěĔĕẼẽḚḛẺẻĖėËëĒēȨȩĘęᶒɆɇȄȅẾếỀềỄễỂểḜḝḖḗḔḕȆȇẸẹỆệⱸᴇＥｅɘǝƏƐε]',
        'f': '[fƑƒḞḟ]',
        'g': '[gɢ₲ǤǥĜĝĞğĢģƓɠĠġ]',
        'h': '[hĤĥĦħḨḩẖẖḤḥḢḣɦʰǶƕ]',
        'i': '[iÍíÌìĬĭÎîǏǐÏïḮḯĨĩĮįĪīỈỉȈȉȊȋỊịḬḭƗɨɨ̆ᵻᶖİiIıɪＩｉ]',
        'j': '[jȷĴĵɈɉʝɟʲ]',
        'k': '[kƘƙꝀꝁḰḱǨǩḲḳḴḵκϰ₭]',
        'l': '[lŁłĽľĻļĹĺḶḷḸḹḼḽḺḻĿŀȽƚⱠⱡⱢɫɬᶅɭȴʟＬｌ]',
        'n': '[nŃńǸǹŇňÑñṄṅŅņṆṇṊṋṈṉN̈n̈ƝɲȠƞᵰᶇɳȵɴＮｎŊŋ]',
        'o': '[oØøÖöÓóÒòÔôǑǒŐőŎŏȮȯỌọƟɵƠơỎỏŌōÕõǪǫȌȍՕօ]',
        'p': '[pṔṕṖṗⱣᵽƤƥᵱ]',
        'q': '[qꝖꝗʠɊɋꝘꝙq̃]',
        'r': '[rŔŕɌɍŘřŖŗṘṙȐȑȒȓṚṛⱤɽ]',
        's': '[sŚśṠṡṢṣꞨꞩŜŝŠšŞşȘșS̈s̈]',
        't': '[tŤťṪṫŢţṬṭƮʈȚțṰṱṮṯƬƭ]',
        'u': '[uŬŭɄʉỤụÜüÚúÙùÛûǓǔŰűŬŭƯưỦủŪūŨũŲųȔȕ∪]',
        'v': '[vṼṽṾṿƲʋꝞꝟⱱʋ]',
        'w': '[wẂẃẀẁŴŵẄẅẆẇẈẉ]',
        'x': '[xẌẍẊẋχ]',
        'y': '[yÝýỲỳŶŷŸÿỸỹẎẏỴỵɎɏƳƴ]',
        'z': '[zŹźẐẑŽžŻżẒẓẔẕƵƶ]'
    };

    var asciifold = (function() {
        var i, n, k, chunk;
        var foreignletters = '';
        var lookup = {};
        for (k in DIACRITICS) {
            if (DIACRITICS.hasOwnProperty(k)) {
                chunk = DIACRITICS[k].substring(2, DIACRITICS[k].length - 1);
                foreignletters += chunk;
                for (i = 0, n = chunk.length; i < n; i++) {
                    lookup[chunk.charAt(i)] = k;
                }
            }
        }
        var regexp = new RegExp('[' +  foreignletters + ']', 'g');
        return function(str) {
            return str.replace(regexp, function(foreignletter) {
                return lookup[foreignletter];
            }).toLowerCase();
        };
    })();


    // export
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    return Sifter;
}));



/**
 * microplugin.js
 * Copyright (c) 2013 Brian Reavis & contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@thirdroute.com>
 */

(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('microplugin', factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.MicroPlugin = factory();
    }
}(this, function() {
    var MicroPlugin = {};

    MicroPlugin.mixin = function(Interface) {
        Interface.plugins = {};

        /**
         * Initializes the listed plugins (with options).
         * Acceptable formats:
         *
         * List (without options):
         *   ['a', 'b', 'c']
         *
         * List (with options):
         *   [{'name': 'a', options: {}}, {'name': 'b', options: {}}]
         *
         * Hash (with options):
         *   {'a': { ... }, 'b': { ... }, 'c': { ... }}
         *
         * @param {mixed} plugins
         */
        Interface.prototype.initializePlugins = function(plugins) {
            var i, n, key;
            var self  = this;
            var queue = [];

            self.plugins = {
                names     : [],
                settings  : {},
                requested : {},
                loaded    : {}
            };

            if (utils.isArray(plugins)) {
                for (i = 0, n = plugins.length; i < n; i++) {
                    if (typeof plugins[i] === 'string') {
                        queue.push(plugins[i]);
                    } else {
                        self.plugins.settings[plugins[i].name] = plugins[i].options;
                        queue.push(plugins[i].name);
                    }
                }
            } else if (plugins) {
                for (key in plugins) {
                    if (plugins.hasOwnProperty(key)) {
                        self.plugins.settings[key] = plugins[key];
                        queue.push(key);
                    }
                }
            }

            while (queue.length) {
                self.require(queue.shift());
            }
        };

        Interface.prototype.loadPlugin = function(name) {
            var self    = this;
            var plugins = self.plugins;
            var plugin  = Interface.plugins[name];

            if (!Interface.plugins.hasOwnProperty(name)) {
                throw new Error('Unable to find "' +  name + '" plugin');
            }

            plugins.requested[name] = true;
            plugins.loaded[name] = plugin.fn.apply(self, [self.plugins.settings[name] || {}]);
            plugins.names.push(name);
        };

        /**
         * Initializes a plugin.
         *
         * @param {string} name
         */
        Interface.prototype.require = function(name) {
            var self = this;
            var plugins = self.plugins;

            if (!self.plugins.loaded.hasOwnProperty(name)) {
                if (plugins.requested[name]) {
                    throw new Error('Plugin has circular dependency ("' + name + '")');
                }
                self.loadPlugin(name);
            }

            return plugins.loaded[name];
        };

        /**
         * Registers a plugin.
         *
         * @param {string} name
         * @param {function} fn
         */
        Interface.define = function(name, fn) {
            Interface.plugins[name] = {
                'name' : name,
                'fn'   : fn
            };
        };
    };

    var utils = {
        isArray: Array.isArray || function(vArg) {
            return Object.prototype.toString.call(vArg) === '[object Array]';
        }
    };

    return MicroPlugin;
}));

/**
 * selectize.js (v0.12.3)
 * Copyright (c) 2013–2015 Brian Reavis & contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@thirdroute.com>
 */

/*jshint curly:false */
/*jshint browser:true */

(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('selectize', ['jquery','sifter','microplugin'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jquery'), require('sifter'), require('microplugin'));
    } else {
        root.Selectize = factory(root.jQuery, root.Sifter, root.MicroPlugin);
    }
}(this, function($, Sifter, MicroPlugin) {
    'use strict';

    var highlight = function($element, pattern) {
        if (typeof pattern === 'string' && !pattern.length) return;
        var regex = (typeof pattern === 'string') ? new RegExp(pattern, 'i') : pattern;

        var highlight = function(node) {
            var skip = 0;
            if (node.nodeType === 3) {
                var pos = node.data.search(regex);
                if (pos >= 0 && node.data.length > 0) {
                    var match = node.data.match(regex);
                    var spannode = document.createElement('span');
                    spannode.className = 'highlight';
                    var middlebit = node.splitText(pos);
                    var endbit = middlebit.splitText(match[0].length);
                    var middleclone = middlebit.cloneNode(true);
                    spannode.appendChild(middleclone);
                    middlebit.parentNode.replaceChild(spannode, middlebit);
                    skip = 1;
                }
            } else if (node.nodeType === 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
                for (var i = 0; i < node.childNodes.length; ++i) {
                    i += highlight(node.childNodes[i]);
                }
            }
            return skip;
        };

        return $element.each(function() {
            highlight(this);
        });
    };

    /**
     * removeHighlight fn copied from highlight v5 and
     * edited to remove with() and pass js strict mode
     */
    jQuery.fn.removeHighlight = function() {
        return this.find("span.highlight").each(function() {
            this.parentNode.firstChild.nodeName;
            var parent = this.parentNode;
            parent.replaceChild(this.firstChild, this);
            parent.normalize();
        }).end();
    };


    var MicroEvent = function() {};
    MicroEvent.prototype = {
        on: function(event, fct){
            this._events = this._events || {};
            this._events[event] = this._events[event] || [];
            this._events[event].push(fct);
        },
        off: function(event, fct){
            var n = arguments.length;
            if (n === 0) return delete this._events;
            if (n === 1) return delete this._events[event];

            this._events = this._events || {};
            if (event in this._events === false) return;
            this._events[event].splice(this._events[event].indexOf(fct), 1);
        },
        trigger: function(event /* , args... */){
            this._events = this._events || {};
            if (event in this._events === false) return;
            for (var i = 0; i < this._events[event].length; i++){
                this._events[event][i].apply(this, Array.prototype.slice.call(arguments, 1));
            }
        }
    };

    /**
     * Mixin will delegate all MicroEvent.js function in the destination object.
     *
     * - MicroEvent.mixin(Foobar) will make Foobar able to use MicroEvent
     *
     * @param {object} the object which will support MicroEvent
     */
    MicroEvent.mixin = function(destObject){
        var props = ['on', 'off', 'trigger'];
        for (var i = 0; i < props.length; i++){
            destObject.prototype[props[i]] = MicroEvent.prototype[props[i]];
        }
    };

    var IS_MAC        = /Mac/.test(navigator.userAgent);

    var KEY_A         = 65;
    var KEY_COMMA     = 188;
    var KEY_RETURN    = 13;
    var KEY_ESC       = 27;
    var KEY_LEFT      = 37;
    var KEY_UP        = 38;
    var KEY_P         = 80;
    var KEY_RIGHT     = 39;
    var KEY_DOWN      = 40;
    var KEY_N         = 78;
    var KEY_BACKSPACE = 8;
    var KEY_DELETE    = 46;
    var KEY_SHIFT     = 16;
    var KEY_CMD       = IS_MAC ? 91 : 17;
    var KEY_CTRL      = IS_MAC ? 18 : 17;
    var KEY_TAB       = 9;

    var TAG_SELECT    = 1;
    var TAG_INPUT     = 2;

    // for now, android support in general is too spotty to support validity
    var SUPPORTS_VALIDITY_API = !/android/i.test(window.navigator.userAgent) && !!document.createElement('input').validity;


    var isset = function(object) {
        return typeof object !== 'undefined';
    };

    /**
     * Converts a scalar to its best string representation
     * for hash keys and HTML attribute values.
     *
     * Transformations:
     *   'str'     -> 'str'
     *   null      -> ''
     *   undefined -> ''
     *   true      -> '1'
     *   false     -> '0'
     *   0         -> '0'
     *   1         -> '1'
     *
     * @param {string} value
     * @returns {string|null}
     */
    var hash_key = function(value) {
        if (typeof value === 'undefined' || value === null) return null;
        if (typeof value === 'boolean') return value ? '1' : '0';
        return value + '';
    };

    /**
     * Escapes a string for use within HTML.
     *
     * @param {string} str
     * @returns {string}
     */
    var escape_html = function(str) {
        return (str + '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    };

    /**
     * Escapes "$" characters in replacement strings.
     *
     * @param {string} str
     * @returns {string}
     */
    var escape_replace = function(str) {
        return (str + '').replace(/\$/g, '$$$$');
    };

    var hook = {};

    /**
     * Wraps `method` on `self` so that `fn`
     * is invoked before the original method.
     *
     * @param {object} self
     * @param {string} method
     * @param {function} fn
     */
    hook.before = function(self, method, fn) {
        var original = self[method];
        self[method] = function() {
            fn.apply(self, arguments);
            return original.apply(self, arguments);
        };
    };

    /**
     * Wraps `method` on `self` so that `fn`
     * is invoked after the original method.
     *
     * @param {object} self
     * @param {string} method
     * @param {function} fn
     */
    hook.after = function(self, method, fn) {
        var original = self[method];
        self[method] = function() {
            var result = original.apply(self, arguments);
            fn.apply(self, arguments);
            return result;
        };
    };

    /**
     * Wraps `fn` so that it can only be invoked once.
     *
     * @param {function} fn
     * @returns {function}
     */
    var once = function(fn) {
        var called = false;
        return function() {
            if (called) return;
            called = true;
            fn.apply(this, arguments);
        };
    };

    /**
     * Wraps `fn` so that it can only be called once
     * every `delay` milliseconds (invoked on the falling edge).
     *
     * @param {function} fn
     * @param {int} delay
     * @returns {function}
     */
    var debounce = function(fn, delay) {
        var timeout;
        return function() {
            var self = this;
            var args = arguments;
            window.clearTimeout(timeout);
            timeout = window.setTimeout(function() {
                fn.apply(self, args);
            }, delay);
        };
    };

    /**
     * Debounce all fired events types listed in `types`
     * while executing the provided `fn`.
     *
     * @param {object} self
     * @param {array} types
     * @param {function} fn
     */
    var debounce_events = function(self, types, fn) {
        var type;
        var trigger = self.trigger;
        var event_args = {};

        // override trigger method
        self.trigger = function() {
            var type = arguments[0];
            if (types.indexOf(type) !== -1) {
                event_args[type] = arguments;
            } else {
                return trigger.apply(self, arguments);
            }
        };

        // invoke provided function
        fn.apply(self, []);
        self.trigger = trigger;

        // trigger queued events
        for (type in event_args) {
            if (event_args.hasOwnProperty(type)) {
                trigger.apply(self, event_args[type]);
            }
        }
    };

    /**
     * A workaround for http://bugs.jquery.com/ticket/6696
     *
     * @param {object} $parent - Parent element to listen on.
     * @param {string} event - Event name.
     * @param {string} selector - Descendant selector to filter by.
     * @param {function} fn - Event handler.
     */
    var watchChildEvent = function($parent, event, selector, fn) {
        $parent.on(event, selector, function(e) {
            var child = e.target;
            while (child && child.parentNode !== $parent[0]) {
                child = child.parentNode;
            }
            e.currentTarget = child;
            return fn.apply(this, [e]);
        });
    };

    /**
     * Determines the current selection within a text input control.
     * Returns an object containing:
     *   - start
     *   - length
     *
     * @param {object} input
     * @returns {object}
     */
    var getSelection = function(input) {
        var result = {};
        if ('selectionStart' in input) {
            result.start = input.selectionStart;
            result.length = input.selectionEnd - result.start;
        } else if (document.selection) {
            input.focus();
            var sel = document.selection.createRange();
            var selLen = document.selection.createRange().text.length;
            sel.moveStart('character', -input.value.length);
            result.start = sel.text.length - selLen;
            result.length = selLen;
        }
        return result;
    };

    /**
     * Copies CSS properties from one element to another.
     *
     * @param {object} $from
     * @param {object} $to
     * @param {array} properties
     */
    var transferStyles = function($from, $to, properties) {
        var i, n, styles = {};
        if (properties) {
            for (i = 0, n = properties.length; i < n; i++) {
                styles[properties[i]] = $from.css(properties[i]);
            }
        } else {
            styles = $from.css();
        }
        $to.css(styles);
    };

    /**
     * Measures the width of a string within a
     * parent element (in pixels).
     *
     * @param {string} str
     * @param {object} $parent
     * @returns {int}
     */
    var measureString = function(str, $parent) {
        if (!str) {
            return 0;
        }

        var $test = $('<test>').css({
            position: 'absolute',
            top: -99999,
            left: -99999,
            width: 'auto',
            padding: 0,
            whiteSpace: 'pre'
        }).text(str).appendTo('body');

        transferStyles($parent, $test, [
            'letterSpacing',
            'fontSize',
            'fontFamily',
            'fontWeight',
            'textTransform'
        ]);

        var width = $test.width();
        $test.remove();

        return width;
    };

    /**
     * Sets up an input to grow horizontally as the user
     * types. If the value is changed manually, you can
     * trigger the "update" handler to resize:
     *
     * $input.trigger('update');
     *
     * @param {object} $input
     */
    var autoGrow = function($input) {
        var currentWidth = null;

        var update = function(e, options) {
            var value, keyCode, printable, placeholder, width;
            var shift, character, selection;
            e = e || window.event || {};
            options = options || {};

            if (e.metaKey || e.altKey) return;
            if (!options.force && $input.data('grow') === false) return;

            value = $input.val();
            if (e.type && e.type.toLowerCase() === 'keydown') {
                keyCode = e.keyCode;
                printable = (
                    (keyCode >= 97 && keyCode <= 122) || // a-z
                    (keyCode >= 65 && keyCode <= 90)  || // A-Z
                    (keyCode >= 48 && keyCode <= 57)  || // 0-9
                    keyCode === 32 // space
                );

                if (keyCode === KEY_DELETE || keyCode === KEY_BACKSPACE) {
                    selection = getSelection($input[0]);
                    if (selection.length) {
                        value = value.substring(0, selection.start) + value.substring(selection.start + selection.length);
                    } else if (keyCode === KEY_BACKSPACE && selection.start) {
                        value = value.substring(0, selection.start - 1) + value.substring(selection.start + 1);
                    } else if (keyCode === KEY_DELETE && typeof selection.start !== 'undefined') {
                        value = value.substring(0, selection.start) + value.substring(selection.start + 1);
                    }
                } else if (printable) {
                    shift = e.shiftKey;
                    character = String.fromCharCode(e.keyCode);
                    if (shift) character = character.toUpperCase();
                    else character = character.toLowerCase();
                    value += character;
                }
            }

            placeholder = $input.attr('placeholder');
            if (!value && placeholder) {
                value = placeholder;
            }

            width = measureString(value, $input) + 4;
            if (width !== currentWidth) {
                currentWidth = width;
                $input.width(width);
                $input.triggerHandler('resize');
            }
        };

        $input.on('keydown keyup update blur', update);
        update();
    };

    var domToString = function(d) {
        var tmp = document.createElement('div');

        tmp.appendChild(d.cloneNode(true));

        return tmp.innerHTML;
    };

    var logError = function(message, options){
        if(!options) options = {};
        var component = "Selectize";

        console.error(component + ": " + message)

        if(options.explanation){
            // console.group is undefined in <IE11
            if(console.group) console.group();
            console.error(options.explanation);
            if(console.group) console.groupEnd();
        }
    }


    var Selectize = function($input, settings) {
        var key, i, n, dir, input, self = this;
        input = $input[0];
        input.selectize = self;

        // detect rtl environment
        var computedStyle = window.getComputedStyle && window.getComputedStyle(input, null);
        dir = computedStyle ? computedStyle.getPropertyValue('direction') : input.currentStyle && input.currentStyle.direction;
        dir = dir || $input.parents('[dir]:first').attr('dir') || '';

        // setup default state
        $.extend(self, {
            order            : 0,
            settings         : settings,
            $input           : $input,
            tabIndex         : $input.attr('tabindex') || '',
            tagType          : input.tagName.toLowerCase() === 'select' ? TAG_SELECT : TAG_INPUT,
            rtl              : /rtl/i.test(dir),

            eventNS          : '.selectize' + (++Selectize.count),
            highlightedValue : null,
            isOpen           : false,
            isDisabled       : false,
            isRequired       : $input.is('[required]'),
            isInvalid        : false,
            isLocked         : false,
            isFocused        : false,
            isInputHidden    : false,
            isSetup          : false,
            isShiftDown      : false,
            isCmdDown        : false,
            isCtrlDown       : false,
            ignoreFocus      : false,
            ignoreBlur       : false,
            ignoreHover      : false,
            hasOptions       : false,
            currentResults   : null,
            lastValue        : '',
            caretPos         : 0,
            loading          : 0,
            loadedSearches   : {},

            $activeOption    : null,
            $activeItems     : [],

            optgroups        : {},
            options          : {},
            userOptions      : {},
            items            : [],
            renderCache      : {},
            onSearchChange   : settings.loadThrottle === null ? self.onSearchChange : debounce(self.onSearchChange, settings.loadThrottle)
        });

        // search system
        self.sifter = new Sifter(this.options, {diacritics: settings.diacritics});

        // build options table
        if (self.settings.options) {
            for (i = 0, n = self.settings.options.length; i < n; i++) {
                self.registerOption(self.settings.options[i]);
            }
            delete self.settings.options;
        }

        // build optgroup table
        if (self.settings.optgroups) {
            for (i = 0, n = self.settings.optgroups.length; i < n; i++) {
                self.registerOptionGroup(self.settings.optgroups[i]);
            }
            delete self.settings.optgroups;
        }

        // option-dependent defaults
        self.settings.mode = self.settings.mode || (self.settings.maxItems === 1 ? 'single' : 'multi');
        if (typeof self.settings.hideSelected !== 'boolean') {
            self.settings.hideSelected = self.settings.mode === 'multi';
        }

        self.initializePlugins(self.settings.plugins);
        self.setupCallbacks();
        self.setupTemplates();
        self.setup();
    };

    // mixins
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    MicroEvent.mixin(Selectize);

    if(typeof MicroPlugin !== "undefined"){
        MicroPlugin.mixin(Selectize);
    }else{
        logError("Dependency MicroPlugin is missing",
            {explanation:
            "Make sure you either: (1) are using the \"standalone\" "+
            "version of Selectize, or (2) require MicroPlugin before you "+
            "load Selectize."}
        );
    }


    // methods
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    $.extend(Selectize.prototype, {

        /**
         * Creates all elements and sets up event bindings.
         */
        setup: function() {
            var self      = this;
            var settings  = self.settings;
            var eventNS   = self.eventNS;
            var $window   = $(window);
            var $document = $(document);
            var $input    = self.$input;

            var $wrapper;
            var $control;
            var $control_input;
            var $dropdown;
            var $dropdown_content;
            var $dropdown_parent;
            var inputMode;
            var timeout_blur;
            var timeout_focus;
            var classes;
            var classes_plugins;
            var inputId;

            inputMode         = self.settings.mode;
            classes           = $input.attr('class') || '';

            $wrapper          = $('<div>').addClass(settings.wrapperClass).addClass(classes).addClass(inputMode);
            $control          = $('<div>').addClass(settings.inputClass).addClass('items').appendTo($wrapper);
            $control_input    = $('<input type="text" autocomplete="off" />').appendTo($control).attr('tabindex', $input.is(':disabled') ? '-1' : self.tabIndex);
            $dropdown_parent  = $(settings.dropdownParent || $wrapper);
            $dropdown         = $('<div>').addClass(settings.dropdownClass).addClass(inputMode).hide().appendTo($dropdown_parent);
            $dropdown_content = $('<div>').addClass(settings.dropdownContentClass).appendTo($dropdown);

            if(inputId = $input.attr('id')) {
                $control_input.attr('id', inputId + '-selectized');
                $("label[for='"+inputId+"']").attr('for', inputId + '-selectized');
            }

            if(self.settings.copyClassesToDropdown) {
                $dropdown.addClass(classes);
            }

            $wrapper.css({
                width: $input[0].style.width
            });

            if (self.plugins.names.length) {
                classes_plugins = 'plugin-' + self.plugins.names.join(' plugin-');
                $wrapper.addClass(classes_plugins);
                $dropdown.addClass(classes_plugins);
            }

            if ((settings.maxItems === null || settings.maxItems > 1) && self.tagType === TAG_SELECT) {
                $input.attr('multiple', 'multiple');
            }

            if (self.settings.placeholder) {
                $control_input.attr('placeholder', settings.placeholder);
            }

            // if splitOn was not passed in, construct it from the delimiter to allow pasting universally
            if (!self.settings.splitOn && self.settings.delimiter) {
                var delimiterEscaped = self.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                self.settings.splitOn = new RegExp('\\s*' + delimiterEscaped + '+\\s*');
            }

            if ($input.attr('autocorrect')) {
                $control_input.attr('autocorrect', $input.attr('autocorrect'));
            }

            if ($input.attr('autocapitalize')) {
                $control_input.attr('autocapitalize', $input.attr('autocapitalize'));
            }

            self.$wrapper          = $wrapper;
            self.$control          = $control;
            self.$control_input    = $control_input;
            self.$dropdown         = $dropdown;
            self.$dropdown_content = $dropdown_content;

            $dropdown.on('mouseenter', '[data-selectable]', function() { return self.onOptionHover.apply(self, arguments); });
            $dropdown.on('mousedown click', '[data-selectable]', function() { return self.onOptionSelect.apply(self, arguments); });
            watchChildEvent($control, 'mousedown', '*:not(input)', function() { return self.onItemSelect.apply(self, arguments); });
            autoGrow($control_input);

            $control.on({
                mousedown : function() { return self.onMouseDown.apply(self, arguments); },
                click     : function() { return self.onClick.apply(self, arguments); }
            });

            $control_input.on({
                mousedown : function(e) { e.stopPropagation(); },
                keydown   : function() { return self.onKeyDown.apply(self, arguments); },
                keyup     : function() { return self.onKeyUp.apply(self, arguments); },
                keypress  : function() { return self.onKeyPress.apply(self, arguments); },
                resize    : function() { self.positionDropdown.apply(self, []); },
                blur      : function() { return self.onBlur.apply(self, arguments); },
                focus     : function() { self.ignoreBlur = false; return self.onFocus.apply(self, arguments); },
                paste     : function() { return self.onPaste.apply(self, arguments); }
            });

            $document.on('keydown' + eventNS, function(e) {
                self.isCmdDown = e[IS_MAC ? 'metaKey' : 'ctrlKey'];
                self.isCtrlDown = e[IS_MAC ? 'altKey' : 'ctrlKey'];
                self.isShiftDown = e.shiftKey;
            });

            $document.on('keyup' + eventNS, function(e) {
                if (e.keyCode === KEY_CTRL) self.isCtrlDown = false;
                if (e.keyCode === KEY_SHIFT) self.isShiftDown = false;
                if (e.keyCode === KEY_CMD) self.isCmdDown = false;
            });

            $document.on('mousedown' + eventNS, function(e) {
                if (self.isFocused) {
                    // prevent events on the dropdown scrollbar from causing the control to blur
                    if (e.target === self.$dropdown[0] || e.target.parentNode === self.$dropdown[0]) {
                        return false;
                    }
                    // blur on click outside
                    if (!self.$control.has(e.target).length && e.target !== self.$control[0]) {
                        self.blur(e.target);
                    }
                }
            });

            $window.on(['scroll' + eventNS, 'resize' + eventNS].join(' '), function() {
                if (self.isOpen) {
                    self.positionDropdown.apply(self, arguments);
                }
            });
            $window.on('mousemove' + eventNS, function() {
                self.ignoreHover = false;
            });

            // store original children and tab index so that they can be
            // restored when the destroy() method is called.
            this.revertSettings = {
                $children : $input.children().detach(),
                tabindex  : $input.attr('tabindex')
            };

            $input.attr('tabindex', -1).hide().after(self.$wrapper);

            if ($.isArray(settings.items)) {
                self.setValue(settings.items);
                delete settings.items;
            }

            // feature detect for the validation API
            if (SUPPORTS_VALIDITY_API) {
                $input.on('invalid' + eventNS, function(e) {
                    e.preventDefault();
                    self.isInvalid = true;
                    self.refreshState();
                });
            }

            self.updateOriginalInput();
            self.refreshItems();
            self.refreshState();
            self.updatePlaceholder();
            self.isSetup = true;

            if ($input.is(':disabled')) {
                self.disable();
            }

            self.on('change', this.onChange);

            $input.data('selectize', self);
            $input.addClass('selectized');
            self.trigger('initialize');

            // preload options
            if (settings.preload === true) {
                self.onSearchChange('');
            }

        },

        /**
         * Sets up default rendering functions.
         */
        setupTemplates: function() {
            var self = this;
            var field_label = self.settings.labelField;
            var field_optgroup = self.settings.optgroupLabelField;

            var templates = {
                'optgroup': function(data) {
                    return '<div class="optgroup">' + data.html + '</div>';
                },
                'optgroup_header': function(data, escape) {
                    return '<div class="optgroup-header">' + escape(data[field_optgroup]) + '</div>';
                },
                'option': function(data, escape) {
                    return '<div class="option">' + escape(data[field_label]) + '</div>';
                },
                'item': function(data, escape) {
                    return '<div class="item">' + escape(data[field_label]) + '</div>';
                },
                'option_create': function(data, escape) {
                    return '<div class="create">Add <strong>' + escape(data.input) + '</strong>&hellip;</div>';
                }
            };

            self.settings.render = $.extend({}, templates, self.settings.render);
        },

        /**
         * Maps fired events to callbacks provided
         * in the settings used when creating the control.
         */
        setupCallbacks: function() {
            var key, fn, callbacks = {
                'initialize'      : 'onInitialize',
                'change'          : 'onChange',
                'item_add'        : 'onItemAdd',
                'item_remove'     : 'onItemRemove',
                'clear'           : 'onClear',
                'option_add'      : 'onOptionAdd',
                'option_remove'   : 'onOptionRemove',
                'option_clear'    : 'onOptionClear',
                'optgroup_add'    : 'onOptionGroupAdd',
                'optgroup_remove' : 'onOptionGroupRemove',
                'optgroup_clear'  : 'onOptionGroupClear',
                'dropdown_open'   : 'onDropdownOpen',
                'dropdown_close'  : 'onDropdownClose',
                'type'            : 'onType',
                'load'            : 'onLoad',
                'focus'           : 'onFocus',
                'blur'            : 'onBlur'
            };

            for (key in callbacks) {
                if (callbacks.hasOwnProperty(key)) {
                    fn = this.settings[callbacks[key]];
                    if (fn) this.on(key, fn);
                }
            }
        },

        /**
         * Triggered when the main control element
         * has a click event.
         *
         * @param {object} e
         * @return {boolean}
         */
        onClick: function(e) {
            var self = this;

            // necessary for mobile webkit devices (manual focus triggering
            // is ignored unless invoked within a click event)
            if (!self.isFocused) {
                self.focus();
                e.preventDefault();
            }
        },

        /**
         * Triggered when the main control element
         * has a mouse down event.
         *
         * @param {object} e
         * @return {boolean}
         */
        onMouseDown: function(e) {
            var self = this;
            var defaultPrevented = e.isDefaultPrevented();
            var $target = $(e.target);

            if (self.isFocused) {
                // retain focus by preventing native handling. if the
                // event target is the input it should not be modified.
                // otherwise, text selection within the input won't work.
                if (e.target !== self.$control_input[0]) {
                    if (self.settings.mode === 'single') {
                        // toggle dropdown
                        self.isOpen ? self.close() : self.open();
                    } else if (!defaultPrevented) {
                        self.setActiveItem(null);
                    }
                    return false;
                }
            } else {
                // give control focus
                if (!defaultPrevented) {
                    window.setTimeout(function() {
                        self.focus();
                    }, 0);
                }
            }
        },

        /**
         * Triggered when the value of the control has been changed.
         * This should propagate the event to the original DOM
         * input / select element.
         */
        onChange: function() {
            this.$input.trigger('change');
        },

        /**
         * Triggered on <input> paste.
         *
         * @param {object} e
         * @returns {boolean}
         */
        onPaste: function(e) {
            var self = this;

            if (self.isFull() || self.isInputHidden || self.isLocked) {
                e.preventDefault();
                return;
            }

            // If a regex or string is included, this will split the pasted
            // input and create Items for each separate value
            if (self.settings.splitOn) {

                // Wait for pasted text to be recognized in value
                setTimeout(function() {
                    var pastedText = self.$control_input.val();
                    if(!pastedText.match(self.settings.splitOn)){ return }

                    var splitInput = $.trim(pastedText).split(self.settings.splitOn);
                    for (var i = 0, n = splitInput.length; i < n; i++) {
                        self.createItem(splitInput[i]);
                    }
                }, 0);
            }
        },

        /**
         * Triggered on <input> keypress.
         *
         * @param {object} e
         * @returns {boolean}
         */
        onKeyPress: function(e) {
            if (this.isLocked) return e && e.preventDefault();
            var character = String.fromCharCode(e.keyCode || e.which);
            if (this.settings.create && this.settings.mode === 'multi' && character === this.settings.delimiter) {
                this.createItem();
                e.preventDefault();
                return false;
            }
        },

        /**
         * Triggered on <input> keydown.
         *
         * @param {object} e
         * @returns {boolean}
         */
        onKeyDown: function(e) {
            var isInput = e.target === this.$control_input[0];
            var self = this;

            if (self.isLocked) {
                if (e.keyCode !== KEY_TAB) {
                    e.preventDefault();
                }
                return;
            }

            switch (e.keyCode) {
                case KEY_A:
                    if (self.isCmdDown) {
                        self.selectAll();
                        return;
                    }
                    break;
                case KEY_ESC:
                    if (self.isOpen) {
                        e.preventDefault();
                        e.stopPropagation();
                        self.close();
                    }
                    return;
                case KEY_N:
                    if (!e.ctrlKey || e.altKey) break;
                case KEY_DOWN:
                    if (!self.isOpen && self.hasOptions) {
                        self.open();
                    } else if (self.$activeOption) {
                        self.ignoreHover = true;
                        var $next = self.getAdjacentOption(self.$activeOption, 1);
                        if ($next.length) self.setActiveOption($next, true, true);
                    }
                    e.preventDefault();
                    return;
                case KEY_P:
                    if (!e.ctrlKey || e.altKey) break;
                case KEY_UP:
                    if (self.$activeOption) {
                        self.ignoreHover = true;
                        var $prev = self.getAdjacentOption(self.$activeOption, -1);
                        if ($prev.length) self.setActiveOption($prev, true, true);
                    }
                    e.preventDefault();
                    return;
                case KEY_RETURN:
                    if (self.isOpen && self.$activeOption) {
                        self.onOptionSelect({currentTarget: self.$activeOption});
                        e.preventDefault();
                    }
                    return;
                case KEY_LEFT:
                    self.advanceSelection(-1, e);
                    return;
                case KEY_RIGHT:
                    self.advanceSelection(1, e);
                    return;
                case KEY_TAB:
                    if (self.settings.selectOnTab && self.isOpen && self.$activeOption) {
                        self.onOptionSelect({currentTarget: self.$activeOption});

                        // Default behaviour is to jump to the next field, we only want this
                        // if the current field doesn't accept any more entries
                        if (!self.isFull()) {
                            e.preventDefault();
                        }
                    }
                    if (self.settings.create && self.createItem()) {
                        e.preventDefault();
                    }
                    return;
                case KEY_BACKSPACE:
                case KEY_DELETE:
                    self.deleteSelection(e);
                    return;
            }

            if ((self.isFull() || self.isInputHidden) && !(IS_MAC ? e.metaKey : e.ctrlKey)) {
                e.preventDefault();
                return;
            }
        },

        /**
         * Triggered on <input> keyup.
         *
         * @param {object} e
         * @returns {boolean}
         */
        onKeyUp: function(e) {
            var self = this;

            if (self.isLocked) return e && e.preventDefault();
            var value = self.$control_input.val() || '';
            if (self.lastValue !== value) {
                self.lastValue = value;
                self.onSearchChange(value);
                self.refreshOptions();
                self.trigger('type', value);
            }
        },

        /**
         * Invokes the user-provide option provider / loader.
         *
         * Note: this function is debounced in the Selectize
         * constructor (by `settings.loadThrottle` milliseconds)
         *
         * @param {string} value
         */
        onSearchChange: function(value) {
            var self = this;
            var fn = self.settings.load;
            if (!fn) return;
            if (self.loadedSearches.hasOwnProperty(value)) return;
            self.loadedSearches[value] = true;
            self.load(function(callback) {
                fn.apply(self, [value, callback]);
            });
        },

        /**
         * Triggered on <input> focus.
         *
         * @param {object} e (optional)
         * @returns {boolean}
         */
        onFocus: function(e) {
            var self = this;
            var wasFocused = self.isFocused;

            if (self.isDisabled) {
                self.blur();
                e && e.preventDefault();
                return false;
            }

            if (self.ignoreFocus) return;
            self.isFocused = true;
            if (self.settings.preload === 'focus') self.onSearchChange('');

            if (!wasFocused) self.trigger('focus');

            if (!self.$activeItems.length) {
                self.showInput();
                self.setActiveItem(null);
                self.refreshOptions(!!self.settings.openOnFocus);
            }

            self.refreshState();
        },

        /**
         * Triggered on <input> blur.
         *
         * @param {object} e
         * @param {Element} dest
         */
        onBlur: function(e, dest) {
            var self = this;
            if (!self.isFocused) return;
            self.isFocused = false;

            if (self.ignoreFocus) {
                return;
            } else if (!self.ignoreBlur && document.activeElement === self.$dropdown_content[0]) {
                // necessary to prevent IE closing the dropdown when the scrollbar is clicked
                self.ignoreBlur = true;
                self.onFocus(e);
                return;
            }

            var deactivate = function() {
                self.close();
                self.setTextboxValue('');
                self.setActiveItem(null);
                self.setActiveOption(null);
                self.setCaret(self.items.length);
                self.refreshState();

                // IE11 bug: element still marked as active
                dest && dest.focus();

                self.ignoreFocus = false;
                self.trigger('blur');
            };

            self.ignoreFocus = true;
            if (self.settings.create && self.settings.createOnBlur) {
                self.createItem(null, false, deactivate);
            } else {
                deactivate();
            }
        },

        /**
         * Triggered when the user rolls over
         * an option in the autocomplete dropdown menu.
         *
         * @param {object} e
         * @returns {boolean}
         */
        onOptionHover: function(e) {
            if (this.ignoreHover) return;
            this.setActiveOption(e.currentTarget, false);
        },

        /**
         * Triggered when the user clicks on an option
         * in the autocomplete dropdown menu.
         *
         * @param {object} e
         * @returns {boolean}
         */
        onOptionSelect: function(e) {
            var value, $target, $option, self = this;

            if (e.preventDefault) {
                e.preventDefault();
                e.stopPropagation();
            }

            $target = $(e.currentTarget);
            if ($target.hasClass('create')) {
                self.createItem(null, function() {
                    if (self.settings.closeAfterSelect) {
                        self.close();
                    }
                });
            } else {
                value = $target.attr('data-value');
                if (typeof value !== 'undefined') {
                    self.lastQuery = null;
                    self.setTextboxValue('');
                    self.addItem(value);
                    if (self.settings.closeAfterSelect) {
                        self.close();
                    } else if (!self.settings.hideSelected && e.type && /mouse/.test(e.type)) {
                        self.setActiveOption(self.getOption(value));
                    }
                }
            }
        },

        /**
         * Triggered when the user clicks on an item
         * that has been selected.
         *
         * @param {object} e
         * @returns {boolean}
         */
        onItemSelect: function(e) {
            var self = this;

            if (self.isLocked) return;
            if (self.settings.mode === 'multi') {
                e.preventDefault();
                self.setActiveItem(e.currentTarget, e);
            }
        },

        /**
         * Invokes the provided method that provides
         * results to a callback---which are then added
         * as options to the control.
         *
         * @param {function} fn
         */
        load: function(fn) {
            var self = this;
            var $wrapper = self.$wrapper.addClass(self.settings.loadingClass);

            self.loading++;
            fn.apply(self, [function(results) {
                self.loading = Math.max(self.loading - 1, 0);
                if (results && results.length) {
                    self.addOption(results);
                    self.refreshOptions(self.isFocused && !self.isInputHidden);
                }
                if (!self.loading) {
                    $wrapper.removeClass(self.settings.loadingClass);
                }
                self.trigger('load', results);
            }]);
        },

        /**
         * Sets the input field of the control to the specified value.
         *
         * @param {string} value
         */
        setTextboxValue: function(value) {
            var $input = this.$control_input;
            var changed = $input.val() !== value;
            if (changed) {
                $input.val(value).triggerHandler('update');
                this.lastValue = value;
            }
        },

        /**
         * Returns the value of the control. If multiple items
         * can be selected (e.g. <select multiple>), this returns
         * an array. If only one item can be selected, this
         * returns a string.
         *
         * @returns {mixed}
         */
        getValue: function() {
            if (this.tagType === TAG_SELECT && this.$input.attr('multiple')) {
                return this.items;
            } else {
                return this.items.join(this.settings.delimiter);
            }
        },

        /**
         * Resets the selected items to the given value.
         *
         * @param {mixed} value
         */
        setValue: function(value, silent) {
            var events = silent ? [] : ['change'];

            debounce_events(this, events, function() {
                this.clear(silent);
                this.addItems(value, silent);
            });
        },

        /**
         * Sets the selected item.
         *
         * @param {object} $item
         * @param {object} e (optional)
         */
        setActiveItem: function($item, e) {
            var self = this;
            var eventName;
            var i, idx, begin, end, item, swap;
            var $last;

            if (self.settings.mode === 'single') return;
            $item = $($item);

            // clear the active selection
            if (!$item.length) {
                $(self.$activeItems).removeClass('active');
                self.$activeItems = [];
                if (self.isFocused) {
                    self.showInput();
                }
                return;
            }

            // modify selection
            eventName = e && e.type.toLowerCase();

            if (eventName === 'mousedown' && self.isShiftDown && self.$activeItems.length) {
                $last = self.$control.children('.active:last');
                begin = Array.prototype.indexOf.apply(self.$control[0].childNodes, [$last[0]]);
                end   = Array.prototype.indexOf.apply(self.$control[0].childNodes, [$item[0]]);
                if (begin > end) {
                    swap  = begin;
                    begin = end;
                    end   = swap;
                }
                for (i = begin; i <= end; i++) {
                    item = self.$control[0].childNodes[i];
                    if (self.$activeItems.indexOf(item) === -1) {
                        $(item).addClass('active');
                        self.$activeItems.push(item);
                    }
                }
                e.preventDefault();
            } else if ((eventName === 'mousedown' && self.isCtrlDown) || (eventName === 'keydown' && this.isShiftDown)) {
                if ($item.hasClass('active')) {
                    idx = self.$activeItems.indexOf($item[0]);
                    self.$activeItems.splice(idx, 1);
                    $item.removeClass('active');
                } else {
                    self.$activeItems.push($item.addClass('active')[0]);
                }
            } else {
                $(self.$activeItems).removeClass('active');
                self.$activeItems = [$item.addClass('active')[0]];
            }

            // ensure control has focus
            self.hideInput();
            if (!this.isFocused) {
                self.focus();
            }
        },

        /**
         * Sets the selected item in the dropdown menu
         * of available options.
         *
         * @param {object} $object
         * @param {boolean} scroll
         * @param {boolean} animate
         */
        setActiveOption: function($option, scroll, animate) {
            var height_menu, height_item, y;
            var scroll_top, scroll_bottom;
            var self = this;

            if (self.$activeOption) self.$activeOption.removeClass('active');
            self.$activeOption = null;

            $option = $($option);
            if (!$option.length) return;

            self.$activeOption = $option.addClass('active');

            if (scroll || !isset(scroll)) {

                height_menu   = self.$dropdown_content.height();
                height_item   = self.$activeOption.outerHeight(true);
                scroll        = self.$dropdown_content.scrollTop() || 0;
                y             = self.$activeOption.offset().top - self.$dropdown_content.offset().top + scroll;
                scroll_top    = y;
                scroll_bottom = y - height_menu + height_item;

                if (y + height_item > height_menu + scroll) {
                    self.$dropdown_content.stop().animate({scrollTop: scroll_bottom}, animate ? self.settings.scrollDuration : 0);
                } else if (y < scroll) {
                    self.$dropdown_content.stop().animate({scrollTop: scroll_top}, animate ? self.settings.scrollDuration : 0);
                }

            }
        },

        /**
         * Selects all items (CTRL + A).
         */
        selectAll: function() {
            var self = this;
            if (self.settings.mode === 'single') return;

            self.$activeItems = Array.prototype.slice.apply(self.$control.children(':not(input)').addClass('active'));
            if (self.$activeItems.length) {
                self.hideInput();
                self.close();
            }
            self.focus();
        },

        /**
         * Hides the input element out of view, while
         * retaining its focus.
         */
        hideInput: function() {
            var self = this;

            self.setTextboxValue('');
            self.$control_input.css({opacity: 0, position: 'absolute', left: self.rtl ? 10000 : -10000});
            self.isInputHidden = true;
        },

        /**
         * Restores input visibility.
         */
        showInput: function() {
            this.$control_input.css({opacity: 1, position: 'relative', left: 0});
            this.isInputHidden = false;
        },

        /**
         * Gives the control focus.
         */
        focus: function() {
            var self = this;
            if (self.isDisabled) return;

            self.ignoreFocus = true;
            self.$control_input[0].focus();
            window.setTimeout(function() {
                self.ignoreFocus = false;
                self.onFocus();
            }, 0);
        },

        /**
         * Forces the control out of focus.
         *
         * @param {Element} dest
         */
        blur: function(dest) {
            this.$control_input[0].blur();
            this.onBlur(null, dest);
        },

        /**
         * Returns a function that scores an object
         * to show how good of a match it is to the
         * provided query.
         *
         * @param {string} query
         * @param {object} options
         * @return {function}
         */
        getScoreFunction: function(query) {
            return this.sifter.getScoreFunction(query, this.getSearchOptions());
        },

        /**
         * Returns search options for sifter (the system
         * for scoring and sorting results).
         *
         * @see https://github.com/brianreavis/sifter.js
         * @return {object}
         */
        getSearchOptions: function() {
            var settings = this.settings;
            var sort = settings.sortField;
            if (typeof sort === 'string') {
                sort = [{field: sort}];
            }

            return {
                fields      : settings.searchField,
                conjunction : settings.searchConjunction,
                sort        : sort
            };
        },

        /**
         * Searches through available options and returns
         * a sorted array of matches.
         *
         * Returns an object containing:
         *
         *   - query {string}
         *   - tokens {array}
         *   - total {int}
         *   - items {array}
         *
         * @param {string} query
         * @returns {object}
         */
        search: function(query) {
            var i, value, score, result, calculateScore;
            var self     = this;
            var settings = self.settings;
            var options  = this.getSearchOptions();

            // validate user-provided result scoring function
            if (settings.score) {
                calculateScore = self.settings.score.apply(this, [query]);
                if (typeof calculateScore !== 'function') {
                    throw new Error('Selectize "score" setting must be a function that returns a function');
                }
            }

            // perform search
            if (query !== self.lastQuery) {
                self.lastQuery = query;
                result = self.sifter.search(query, $.extend(options, {score: calculateScore}));
                self.currentResults = result;
            } else {
                result = $.extend(true, {}, self.currentResults);
            }

            // filter out selected items
            if (settings.hideSelected) {
                for (i = result.items.length - 1; i >= 0; i--) {
                    if (self.items.indexOf(hash_key(result.items[i].id)) !== -1) {
                        result.items.splice(i, 1);
                    }
                }
            }

            return result;
        },

        /**
         * Refreshes the list of available options shown
         * in the autocomplete dropdown menu.
         *
         * @param {boolean} triggerDropdown
         */
        refreshOptions: function(triggerDropdown) {
            var i, j, k, n, groups, groups_order, option, option_html, optgroup, optgroups, html, html_children, has_create_option;
            var $active, $active_before, $create;

            if (typeof triggerDropdown === 'undefined') {
                triggerDropdown = true;
            }

            var self              = this;
            var query             = $.trim(self.$control_input.val());
            var results           = self.search(query);
            var $dropdown_content = self.$dropdown_content;
            var active_before     = self.$activeOption && hash_key(self.$activeOption.attr('data-value'));

            // build markup
            n = results.items.length;
            if (typeof self.settings.maxOptions === 'number') {
                n = Math.min(n, self.settings.maxOptions);
            }

            // render and group available options individually
            groups = {};
            groups_order = [];

            for (i = 0; i < n; i++) {
                option      = self.options[results.items[i].id];
                option_html = self.render('option', option);
                optgroup    = option[self.settings.optgroupField] || '';
                optgroups   = $.isArray(optgroup) ? optgroup : [optgroup];

                for (j = 0, k = optgroups && optgroups.length; j < k; j++) {
                    optgroup = optgroups[j];
                    if (!self.optgroups.hasOwnProperty(optgroup)) {
                        optgroup = '';
                    }
                    if (!groups.hasOwnProperty(optgroup)) {
                        groups[optgroup] = document.createDocumentFragment();
                        groups_order.push(optgroup);
                    }
                    groups[optgroup].appendChild(option_html);
                }
            }

            // sort optgroups
            if (this.settings.lockOptgroupOrder) {
                groups_order.sort(function(a, b) {
                    var a_order = self.optgroups[a].$order || 0;
                    var b_order = self.optgroups[b].$order || 0;
                    return a_order - b_order;
                });
            }

            // render optgroup headers & join groups
            html = document.createDocumentFragment();
            for (i = 0, n = groups_order.length; i < n; i++) {
                optgroup = groups_order[i];
                if (self.optgroups.hasOwnProperty(optgroup) && groups[optgroup].childNodes.length) {
                    // render the optgroup header and options within it,
                    // then pass it to the wrapper template
                    html_children = document.createDocumentFragment();
                    html_children.appendChild(self.render('optgroup_header', self.optgroups[optgroup]));
                    html_children.appendChild(groups[optgroup]);

                    html.appendChild(self.render('optgroup', $.extend({}, self.optgroups[optgroup], {
                        html: domToString(html_children),
                        dom:  html_children
                    })));
                } else {
                    html.appendChild(groups[optgroup]);
                }
            }

            $dropdown_content.html(html);

            // highlight matching terms inline
            if (self.settings.highlight && results.query.length && results.tokens.length) {
                $dropdown_content.removeHighlight();
                for (i = 0, n = results.tokens.length; i < n; i++) {
                    highlight($dropdown_content, results.tokens[i].regex);
                }
            }

            // add "selected" class to selected options
            if (!self.settings.hideSelected) {
                for (i = 0, n = self.items.length; i < n; i++) {
                    self.getOption(self.items[i]).addClass('selected');
                }
            }

            // add create option
            has_create_option = self.canCreate(query);
            if (has_create_option) {
                $dropdown_content.prepend(self.render('option_create', {input: query}));
                $create = $($dropdown_content[0].childNodes[0]);
            }

            // activate
            self.hasOptions = results.items.length > 0 || has_create_option;
            if (self.hasOptions) {
                if (results.items.length > 0) {
                    $active_before = active_before && self.getOption(active_before);
                    if ($active_before && $active_before.length) {
                        $active = $active_before;
                    } else if (self.settings.mode === 'single' && self.items.length) {
                        $active = self.getOption(self.items[0]);
                    }
                    if (!$active || !$active.length) {
                        if ($create && !self.settings.addPrecedence) {
                            $active = self.getAdjacentOption($create, 1);
                        } else {
                            $active = $dropdown_content.find('[data-selectable]:first');
                        }
                    }
                } else {
                    $active = $create;
                }
                self.setActiveOption($active);
                if (triggerDropdown && !self.isOpen) { self.open(); }
            } else {
                self.setActiveOption(null);
                if (triggerDropdown && self.isOpen) { self.close(); }
            }
        },

        /**
         * Adds an available option. If it already exists,
         * nothing will happen. Note: this does not refresh
         * the options list dropdown (use `refreshOptions`
         * for that).
         *
         * Usage:
         *
         *   this.addOption(data)
         *
         * @param {object|array} data
         */
        addOption: function(data) {
            var i, n, value, self = this;

            if ($.isArray(data)) {
                for (i = 0, n = data.length; i < n; i++) {
                    self.addOption(data[i]);
                }
                return;
            }

            if (value = self.registerOption(data)) {
                self.userOptions[value] = true;
                self.lastQuery = null;
                self.trigger('option_add', value, data);
            }
        },

        /**
         * Registers an option to the pool of options.
         *
         * @param {object} data
         * @return {boolean|string}
         */
        registerOption: function(data) {
            var key = hash_key(data[this.settings.valueField]);
            if (typeof key === 'undefined' || key === null || this.options.hasOwnProperty(key)) return false;
            data.$order = data.$order || ++this.order;
            this.options[key] = data;
            return key;
        },

        /**
         * Registers an option group to the pool of option groups.
         *
         * @param {object} data
         * @return {boolean|string}
         */
        registerOptionGroup: function(data) {
            var key = hash_key(data[this.settings.optgroupValueField]);
            if (!key) return false;

            data.$order = data.$order || ++this.order;
            this.optgroups[key] = data;
            return key;
        },

        /**
         * Registers a new optgroup for options
         * to be bucketed into.
         *
         * @param {string} id
         * @param {object} data
         */
        addOptionGroup: function(id, data) {
            data[this.settings.optgroupValueField] = id;
            if (id = this.registerOptionGroup(data)) {
                this.trigger('optgroup_add', id, data);
            }
        },

        /**
         * Removes an existing option group.
         *
         * @param {string} id
         */
        removeOptionGroup: function(id) {
            if (this.optgroups.hasOwnProperty(id)) {
                delete this.optgroups[id];
                this.renderCache = {};
                this.trigger('optgroup_remove', id);
            }
        },

        /**
         * Clears all existing option groups.
         */
        clearOptionGroups: function() {
            this.optgroups = {};
            this.renderCache = {};
            this.trigger('optgroup_clear');
        },

        /**
         * Updates an option available for selection. If
         * it is visible in the selected items or options
         * dropdown, it will be re-rendered automatically.
         *
         * @param {string} value
         * @param {object} data
         */
        updateOption: function(value, data) {
            var self = this;
            var $item, $item_new;
            var value_new, index_item, cache_items, cache_options, order_old;

            value     = hash_key(value);
            value_new = hash_key(data[self.settings.valueField]);

            // sanity checks
            if (value === null) return;
            if (!self.options.hasOwnProperty(value)) return;
            if (typeof value_new !== 'string') throw new Error('Value must be set in option data');

            order_old = self.options[value].$order;

            // update references
            if (value_new !== value) {
                delete self.options[value];
                index_item = self.items.indexOf(value);
                if (index_item !== -1) {
                    self.items.splice(index_item, 1, value_new);
                }
            }
            data.$order = data.$order || order_old;
            self.options[value_new] = data;

            // invalidate render cache
            cache_items = self.renderCache['item'];
            cache_options = self.renderCache['option'];

            if (cache_items) {
                delete cache_items[value];
                delete cache_items[value_new];
            }
            if (cache_options) {
                delete cache_options[value];
                delete cache_options[value_new];
            }

            // update the item if it's selected
            if (self.items.indexOf(value_new) !== -1) {
                $item = self.getItem(value);
                $item_new = $(self.render('item', data));
                if ($item.hasClass('active')) $item_new.addClass('active');
                $item.replaceWith($item_new);
            }

            // invalidate last query because we might have updated the sortField
            self.lastQuery = null;

            // update dropdown contents
            if (self.isOpen) {
                self.refreshOptions(false);
            }
        },

        /**
         * Removes a single option.
         *
         * @param {string} value
         * @param {boolean} silent
         */
        removeOption: function(value, silent) {
            var self = this;
            value = hash_key(value);

            var cache_items = self.renderCache['item'];
            var cache_options = self.renderCache['option'];
            if (cache_items) delete cache_items[value];
            if (cache_options) delete cache_options[value];

            delete self.userOptions[value];
            delete self.options[value];
            self.lastQuery = null;
            self.trigger('option_remove', value);
            self.removeItem(value, silent);
        },

        /**
         * Clears all options.
         */
        clearOptions: function() {
            var self = this;

            self.loadedSearches = {};
            self.userOptions = {};
            self.renderCache = {};
            self.options = self.sifter.items = {};
            self.lastQuery = null;
            self.trigger('option_clear');
            self.clear();
        },

        /**
         * Returns the jQuery element of the option
         * matching the given value.
         *
         * @param {string} value
         * @returns {object}
         */
        getOption: function(value) {
            return this.getElementWithValue(value, this.$dropdown_content.find('[data-selectable]'));
        },

        /**
         * Returns the jQuery element of the next or
         * previous selectable option.
         *
         * @param {object} $option
         * @param {int} direction  can be 1 for next or -1 for previous
         * @return {object}
         */
        getAdjacentOption: function($option, direction) {
            var $options = this.$dropdown.find('[data-selectable]');
            var index    = $options.index($option) + direction;

            return index >= 0 && index < $options.length ? $options.eq(index) : $();
        },

        /**
         * Finds the first element with a "data-value" attribute
         * that matches the given value.
         *
         * @param {mixed} value
         * @param {object} $els
         * @return {object}
         */
        getElementWithValue: function(value, $els) {
            value = hash_key(value);

            if (typeof value !== 'undefined' && value !== null) {
                for (var i = 0, n = $els.length; i < n; i++) {
                    if ($els[i].getAttribute('data-value') === value) {
                        return $($els[i]);
                    }
                }
            }

            return $();
        },

        /**
         * Returns the jQuery element of the item
         * matching the given value.
         *
         * @param {string} value
         * @returns {object}
         */
        getItem: function(value) {
            return this.getElementWithValue(value, this.$control.children());
        },

        /**
         * "Selects" multiple items at once. Adds them to the list
         * at the current caret position.
         *
         * @param {string} value
         * @param {boolean} silent
         */
        addItems: function(values, silent) {
            var items = $.isArray(values) ? values : [values];
            for (var i = 0, n = items.length; i < n; i++) {
                this.isPending = (i < n - 1);
                this.addItem(items[i], silent);
            }
        },

        /**
         * "Selects" an item. Adds it to the list
         * at the current caret position.
         *
         * @param {string} value
         * @param {boolean} silent
         */
        addItem: function(value, silent) {
            var events = silent ? [] : ['change'];

            debounce_events(this, events, function() {
                var $item, $option, $options;
                var self = this;
                var inputMode = self.settings.mode;
                var i, active, value_next, wasFull;
                value = hash_key(value);

                if (self.items.indexOf(value) !== -1) {
                    if (inputMode === 'single') self.close();
                    return;
                }

                if (!self.options.hasOwnProperty(value)) return;
                if (inputMode === 'single') self.clear(silent);
                if (inputMode === 'multi' && self.isFull()) return;

                $item = $(self.render('item', self.options[value]));
                wasFull = self.isFull();
                self.items.splice(self.caretPos, 0, value);
                self.insertAtCaret($item);
                if (!self.isPending || (!wasFull && self.isFull())) {
                    self.refreshState();
                }

                if (self.isSetup) {
                    $options = self.$dropdown_content.find('[data-selectable]');

                    // update menu / remove the option (if this is not one item being added as part of series)
                    if (!self.isPending) {
                        $option = self.getOption(value);
                        value_next = self.getAdjacentOption($option, 1).attr('data-value');
                        self.refreshOptions(self.isFocused && inputMode !== 'single');
                        if (value_next) {
                            self.setActiveOption(self.getOption(value_next));
                        }
                    }

                    // hide the menu if the maximum number of items have been selected or no options are left
                    if (!$options.length || self.isFull()) {
                        self.close();
                    } else {
                        self.positionDropdown();
                    }

                    self.updatePlaceholder();
                    self.trigger('item_add', value, $item);
                    self.updateOriginalInput({silent: silent});
                }
            });
        },

        /**
         * Removes the selected item matching
         * the provided value.
         *
         * @param {string} value
         */
        removeItem: function(value, silent) {
            var self = this;
            var $item, i, idx;

            $item = (value instanceof $) ? value : self.getItem(value);
            value = hash_key($item.attr('data-value'));
            i = self.items.indexOf(value);

            if (i !== -1) {
                $item.remove();
                if ($item.hasClass('active')) {
                    idx = self.$activeItems.indexOf($item[0]);
                    self.$activeItems.splice(idx, 1);
                }

                self.items.splice(i, 1);
                self.lastQuery = null;
                if (!self.settings.persist && self.userOptions.hasOwnProperty(value)) {
                    self.removeOption(value, silent);
                }

                if (i < self.caretPos) {
                    self.setCaret(self.caretPos - 1);
                }

                self.refreshState();
                self.updatePlaceholder();
                self.updateOriginalInput({silent: silent});
                self.positionDropdown();
                self.trigger('item_remove', value, $item);
            }
        },

        /**
         * Invokes the `create` method provided in the
         * selectize options that should provide the data
         * for the new item, given the user input.
         *
         * Once this completes, it will be added
         * to the item list.
         *
         * @param {string} value
         * @param {boolean} [triggerDropdown]
         * @param {function} [callback]
         * @return {boolean}
         */
        createItem: function(input, triggerDropdown) {
            var self  = this;
            var caret = self.caretPos;
            input = input || $.trim(self.$control_input.val() || '');

            var callback = arguments[arguments.length - 1];
            if (typeof callback !== 'function') callback = function() {};

            if (typeof triggerDropdown !== 'boolean') {
                triggerDropdown = true;
            }

            if (!self.canCreate(input)) {
                callback();
                return false;
            }

            self.lock();

            var setup = (typeof self.settings.create === 'function') ? this.settings.create : function(input) {
                var data = {};
                data[self.settings.labelField] = input;
                data[self.settings.valueField] = input;
                return data;
            };

            var create = once(function(data) {
                self.unlock();

                if (!data || typeof data !== 'object') return callback();
                var value = hash_key(data[self.settings.valueField]);
                if (typeof value !== 'string') return callback();

                self.setTextboxValue('');
                self.addOption(data);
                self.setCaret(caret);
                self.addItem(value);
                self.refreshOptions(triggerDropdown && self.settings.mode !== 'single');
                callback(data);
            });

            var output = setup.apply(this, [input, create]);
            if (typeof output !== 'undefined') {
                create(output);
            }

            return true;
        },

        /**
         * Re-renders the selected item lists.
         */
        refreshItems: function() {
            this.lastQuery = null;

            if (this.isSetup) {
                this.addItem(this.items);
            }

            this.refreshState();
            this.updateOriginalInput();
        },

        /**
         * Updates all state-dependent attributes
         * and CSS classes.
         */
        refreshState: function() {
            this.refreshValidityState();
            this.refreshClasses();
        },

        /**
         * Update the `required` attribute of both input and control input.
         *
         * The `required` property needs to be activated on the control input
         * for the error to be displayed at the right place. `required` also
         * needs to be temporarily deactivated on the input since the input is
         * hidden and can't show errors.
         */
        refreshValidityState: function() {
            if (!this.isRequired) return false;

            var invalid = !this.items.length;

            this.isInvalid = invalid;
            this.$control_input.prop('required', invalid);
            this.$input.prop('required', !invalid);
        },

        /**
         * Updates all state-dependent CSS classes.
         */
        refreshClasses: function() {
            var self     = this;
            var isFull   = self.isFull();
            var isLocked = self.isLocked;

            self.$wrapper
                .toggleClass('rtl', self.rtl);

            self.$control
                .toggleClass('focus', self.isFocused)
                .toggleClass('disabled', self.isDisabled)
                .toggleClass('required', self.isRequired)
                .toggleClass('invalid', self.isInvalid)
                .toggleClass('locked', isLocked)
                .toggleClass('full', isFull).toggleClass('not-full', !isFull)
                .toggleClass('input-active', self.isFocused && !self.isInputHidden)
                .toggleClass('dropdown-active', self.isOpen)
                .toggleClass('has-options', !$.isEmptyObject(self.options))
                .toggleClass('has-items', self.items.length > 0);

            self.$control_input.data('grow', !isFull && !isLocked);
        },

        /**
         * Determines whether or not more items can be added
         * to the control without exceeding the user-defined maximum.
         *
         * @returns {boolean}
         */
        isFull: function() {
            return this.settings.maxItems !== null && this.items.length >= this.settings.maxItems;
        },

        /**
         * Refreshes the original <select> or <input>
         * element to reflect the current state.
         */
        updateOriginalInput: function(opts) {
            var i, n, options, label, self = this;
            opts = opts || {};

            if (self.tagType === TAG_SELECT) {
                options = [];
                for (i = 0, n = self.items.length; i < n; i++) {
                    label = self.options[self.items[i]][self.settings.labelField] || '';
                    options.push('<option value="' + escape_html(self.items[i]) + '" selected="selected">' + escape_html(label) + '</option>');
                }
                if (!options.length && !this.$input.attr('multiple')) {
                    options.push('<option value="" selected="selected"></option>');
                }
                self.$input.html(options.join(''));
            } else {
                self.$input.val(self.getValue());
                self.$input.attr('value',self.$input.val());
            }

            if (self.isSetup) {
                if (!opts.silent) {
                    self.trigger('change', self.$input.val());
                }
            }
        },

        /**
         * Shows/hide the input placeholder depending
         * on if there items in the list already.
         */
        updatePlaceholder: function() {
            if (!this.settings.placeholder) return;
            var $input = this.$control_input;

            if (this.items.length) {
                $input.removeAttr('placeholder');
            } else {
                $input.attr('placeholder', this.settings.placeholder);
            }
            $input.triggerHandler('update', {force: true});
        },

        /**
         * Shows the autocomplete dropdown containing
         * the available options.
         */
        open: function() {
            var self = this;

            if (self.isLocked || self.isOpen || (self.settings.mode === 'multi' && self.isFull())) return;
            self.focus();
            self.isOpen = true;
            self.refreshState();
            self.$dropdown.css({visibility: 'hidden', display: 'block'});
            self.positionDropdown();
            self.$dropdown.css({visibility: 'visible'});
            self.trigger('dropdown_open', self.$dropdown);
        },

        /**
         * Closes the autocomplete dropdown menu.
         */
        close: function() {
            var self = this;
            var trigger = self.isOpen;

            if (self.settings.mode === 'single' && self.items.length) {
                self.hideInput();
                self.$control_input.blur(); // close keyboard on iOS
            }

            self.isOpen = false;
            self.$dropdown.hide();
            self.setActiveOption(null);
            self.refreshState();

            if (trigger) self.trigger('dropdown_close', self.$dropdown);
        },

        /**
         * Calculates and applies the appropriate
         * position of the dropdown.
         */
        positionDropdown: function() {
            var $control = this.$control;
            var offset = this.settings.dropdownParent === 'body' ? $control.offset() : $control.position();
            offset.top += $control.outerHeight(true);

            this.$dropdown.css({
                width : $control.outerWidth(),
                top   : offset.top,
                left  : offset.left
            });
        },

        /**
         * Resets / clears all selected items
         * from the control.
         *
         * @param {boolean} silent
         */
        clear: function(silent) {
            var self = this;

            if (!self.items.length) return;
            self.$control.children(':not(input)').remove();
            self.items = [];
            self.lastQuery = null;
            self.setCaret(0);
            self.setActiveItem(null);
            self.updatePlaceholder();
            self.updateOriginalInput({silent: silent});
            self.refreshState();
            self.showInput();
            self.trigger('clear');
        },

        /**
         * A helper method for inserting an element
         * at the current caret position.
         *
         * @param {object} $el
         */
        insertAtCaret: function($el) {
            var caret = Math.min(this.caretPos, this.items.length);
            if (caret === 0) {
                this.$control.prepend($el);
            } else {
                $(this.$control[0].childNodes[caret]).before($el);
            }
            this.setCaret(caret + 1);
        },

        /**
         * Removes the current selected item(s).
         *
         * @param {object} e (optional)
         * @returns {boolean}
         */
        deleteSelection: function(e) {
            var i, n, direction, selection, values, caret, option_select, $option_select, $tail;
            var self = this;

            direction = (e && e.keyCode === KEY_BACKSPACE) ? -1 : 1;
            selection = getSelection(self.$control_input[0]);

            if (self.$activeOption && !self.settings.hideSelected) {
                option_select = self.getAdjacentOption(self.$activeOption, -1).attr('data-value');
            }

            // determine items that will be removed
            values = [];

            if (self.$activeItems.length) {
                $tail = self.$control.children('.active:' + (direction > 0 ? 'last' : 'first'));
                caret = self.$control.children(':not(input)').index($tail);
                if (direction > 0) { caret++; }

                for (i = 0, n = self.$activeItems.length; i < n; i++) {
                    values.push($(self.$activeItems[i]).attr('data-value'));
                }
                if (e) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            } else if ((self.isFocused || self.settings.mode === 'single') && self.items.length) {
                if (direction < 0 && selection.start === 0 && selection.length === 0) {
                    values.push(self.items[self.caretPos - 1]);
                } else if (direction > 0 && selection.start === self.$control_input.val().length) {
                    values.push(self.items[self.caretPos]);
                }
            }

            // allow the callback to abort
            if (!values.length || (typeof self.settings.onDelete === 'function' && self.settings.onDelete.apply(self, [values]) === false)) {
                return false;
            }

            // perform removal
            if (typeof caret !== 'undefined') {
                self.setCaret(caret);
            }
            while (values.length) {
                self.removeItem(values.pop());
            }

            self.showInput();
            self.positionDropdown();
            self.refreshOptions(true);

            // select previous option
            if (option_select) {
                $option_select = self.getOption(option_select);
                if ($option_select.length) {
                    self.setActiveOption($option_select);
                }
            }

            return true;
        },

        /**
         * Selects the previous / next item (depending
         * on the `direction` argument).
         *
         * > 0 - right
         * < 0 - left
         *
         * @param {int} direction
         * @param {object} e (optional)
         */
        advanceSelection: function(direction, e) {
            var tail, selection, idx, valueLength, cursorAtEdge, $tail;
            var self = this;

            if (direction === 0) return;
            if (self.rtl) direction *= -1;

            tail = direction > 0 ? 'last' : 'first';
            selection = getSelection(self.$control_input[0]);

            if (self.isFocused && !self.isInputHidden) {
                valueLength = self.$control_input.val().length;
                cursorAtEdge = direction < 0
                    ? selection.start === 0 && selection.length === 0
                    : selection.start === valueLength;

                if (cursorAtEdge && !valueLength) {
                    self.advanceCaret(direction, e);
                }
            } else {
                $tail = self.$control.children('.active:' + tail);
                if ($tail.length) {
                    idx = self.$control.children(':not(input)').index($tail);
                    self.setActiveItem(null);
                    self.setCaret(direction > 0 ? idx + 1 : idx);
                }
            }
        },

        /**
         * Moves the caret left / right.
         *
         * @param {int} direction
         * @param {object} e (optional)
         */
        advanceCaret: function(direction, e) {
            var self = this, fn, $adj;

            if (direction === 0) return;

            fn = direction > 0 ? 'next' : 'prev';
            if (self.isShiftDown) {
                $adj = self.$control_input[fn]();
                if ($adj.length) {
                    self.hideInput();
                    self.setActiveItem($adj);
                    e && e.preventDefault();
                }
            } else {
                self.setCaret(self.caretPos + direction);
            }
        },

        /**
         * Moves the caret to the specified index.
         *
         * @param {int} i
         */
        setCaret: function(i) {
            var self = this;

            if (self.settings.mode === 'single') {
                i = self.items.length;
            } else {
                i = Math.max(0, Math.min(self.items.length, i));
            }

            if(!self.isPending) {
                // the input must be moved by leaving it in place and moving the
                // siblings, due to the fact that focus cannot be restored once lost
                // on mobile webkit devices
                var j, n, fn, $children, $child;
                $children = self.$control.children(':not(input)');
                for (j = 0, n = $children.length; j < n; j++) {
                    $child = $($children[j]).detach();
                    if (j <  i) {
                        self.$control_input.before($child);
                    } else {
                        self.$control.append($child);
                    }
                }
            }

            self.caretPos = i;
        },

        /**
         * Disables user input on the control. Used while
         * items are being asynchronously created.
         */
        lock: function() {
            this.close();
            this.isLocked = true;
            this.refreshState();
        },

        /**
         * Re-enables user input on the control.
         */
        unlock: function() {
            this.isLocked = false;
            this.refreshState();
        },

        /**
         * Disables user input on the control completely.
         * While disabled, it cannot receive focus.
         */
        disable: function() {
            var self = this;
            self.$input.prop('disabled', true);
            self.$control_input.prop('disabled', true).prop('tabindex', -1);
            self.isDisabled = true;
            self.lock();
        },

        /**
         * Enables the control so that it can respond
         * to focus and user input.
         */
        enable: function() {
            var self = this;
            self.$input.prop('disabled', false);
            self.$control_input.prop('disabled', false).prop('tabindex', self.tabIndex);
            self.isDisabled = false;
            self.unlock();
        },

        /**
         * Completely destroys the control and
         * unbinds all event listeners so that it can
         * be garbage collected.
         */
        destroy: function() {
            var self = this;
            var eventNS = self.eventNS;
            var revertSettings = self.revertSettings;

            self.trigger('destroy');
            self.off();
            self.$wrapper.remove();
            self.$dropdown.remove();

            self.$input
                .html('')
                .append(revertSettings.$children)
                .removeAttr('tabindex')
                .removeClass('selectized')
                .attr({tabindex: revertSettings.tabindex})
                .show();

            self.$control_input.removeData('grow');
            self.$input.removeData('selectize');

            $(window).off(eventNS);
            $(document).off(eventNS);
            $(document.body).off(eventNS);

            delete self.$input[0].selectize;
        },

        /**
         * A helper method for rendering "item" and
         * "option" templates, given the data.
         *
         * @param {string} templateName
         * @param {object} data
         * @returns {string}
         */
        render: function(templateName, data) {
            var value, id, label;
            var html = '';
            var cache = false;
            var self = this;
            var regex_tag = /^[\t \r\n]*<([a-z][a-z0-9\-_]*(?:\:[a-z][a-z0-9\-_]*)?)/i;

            if (templateName === 'option' || templateName === 'item') {
                value = hash_key(data[self.settings.valueField]);
                cache = !!value;
            }

            // pull markup from cache if it exists
            if (cache) {
                if (!isset(self.renderCache[templateName])) {
                    self.renderCache[templateName] = {};
                }
                if (self.renderCache[templateName].hasOwnProperty(value)) {
                    return self.renderCache[templateName][value];
                }
            }

            // render markup
            html = $(self.settings.render[templateName].apply(this, [data, escape_html]));

            // add mandatory attributes
            if (templateName === 'option' || templateName === 'option_create') {
                html.attr('data-selectable', '');
            }
            else if (templateName === 'optgroup') {
                id = data[self.settings.optgroupValueField] || '';
                html.attr('data-group', id);
            }
            if (templateName === 'option' || templateName === 'item') {
                html.attr('data-value', value || '');
            }

            // update cache
            if (cache) {
                self.renderCache[templateName][value] = html[0];
            }

            return html[0];
        },

        /**
         * Clears the render cache for a template. If
         * no template is given, clears all render
         * caches.
         *
         * @param {string} templateName
         */
        clearCache: function(templateName) {
            var self = this;
            if (typeof templateName === 'undefined') {
                self.renderCache = {};
            } else {
                delete self.renderCache[templateName];
            }
        },

        /**
         * Determines whether or not to display the
         * create item prompt, given a user input.
         *
         * @param {string} input
         * @return {boolean}
         */
        canCreate: function(input) {
            var self = this;
            if (!self.settings.create) return false;
            var filter = self.settings.createFilter;
            return input.length
                && (typeof filter !== 'function' || filter.apply(self, [input]))
                && (typeof filter !== 'string' || new RegExp(filter).test(input))
                && (!(filter instanceof RegExp) || filter.test(input));
        }

    });


    Selectize.count = 0;
    Selectize.defaults = {
        options: [],
        optgroups: [],

        plugins: [],
        delimiter: ',',
        splitOn: null, // regexp or string for splitting up values from a paste command
        persist: true,
        diacritics: true,
        create: false,
        createOnBlur: false,
        createFilter: null,
        highlight: true,
        openOnFocus: true,
        maxOptions: 1000,
        maxItems: null,
        hideSelected: null,
        addPrecedence: false,
        selectOnTab: false,
        preload: false,
        allowEmptyOption: false,
        closeAfterSelect: false,

        scrollDuration: 60,
        loadThrottle: 300,
        loadingClass: 'loading',

        dataAttr: 'data-data',
        optgroupField: 'optgroup',
        valueField: 'value',
        labelField: 'text',
        optgroupLabelField: 'label',
        optgroupValueField: 'value',
        lockOptgroupOrder: false,

        sortField: '$order',
        searchField: ['text'],
        searchConjunction: 'and',

        mode: null,
        wrapperClass: 'selectize-control',
        inputClass: 'selectize-input',
        dropdownClass: 'selectize-dropdown',
        dropdownContentClass: 'selectize-dropdown-content',

        dropdownParent: null,

        copyClassesToDropdown: true,

        /*
         load                 : null, // function(query, callback) { ... }
         score                : null, // function(search) { ... }
         onInitialize         : null, // function() { ... }
         onChange             : null, // function(value) { ... }
         onItemAdd            : null, // function(value, $item) { ... }
         onItemRemove         : null, // function(value) { ... }
         onClear              : null, // function() { ... }
         onOptionAdd          : null, // function(value, data) { ... }
         onOptionRemove       : null, // function(value) { ... }
         onOptionClear        : null, // function() { ... }
         onOptionGroupAdd     : null, // function(id, data) { ... }
         onOptionGroupRemove  : null, // function(id) { ... }
         onOptionGroupClear   : null, // function() { ... }
         onDropdownOpen       : null, // function($dropdown) { ... }
         onDropdownClose      : null, // function($dropdown) { ... }
         onType               : null, // function(str) { ... }
         onDelete             : null, // function(values) { ... }
         */

        render: {
            /*
             item: null,
             optgroup: null,
             optgroup_header: null,
             option: null,
             option_create: null
             */
        }
    };


    $.fn.selectize = function(settings_user) {
        var defaults             = $.fn.selectize.defaults;
        var settings             = $.extend({}, defaults, settings_user);
        var attr_data            = settings.dataAttr;
        var field_label          = settings.labelField;
        var field_value          = settings.valueField;
        var field_optgroup       = settings.optgroupField;
        var field_optgroup_label = settings.optgroupLabelField;
        var field_optgroup_value = settings.optgroupValueField;

        /**
         * Initializes selectize from a <input type="text"> element.
         *
         * @param {object} $input
         * @param {object} settings_element
         */
        var init_textbox = function($input, settings_element) {
            var i, n, values, option;

            var data_raw = $input.attr(attr_data);

            if (!data_raw) {
                var value = $.trim($input.val() || '');
                if (!settings.allowEmptyOption && !value.length) return;
                values = value.split(settings.delimiter);
                for (i = 0, n = values.length; i < n; i++) {
                    option = {};
                    option[field_label] = values[i];
                    option[field_value] = values[i];
                    settings_element.options.push(option);
                }
                settings_element.items = values;
            } else {
                settings_element.options = JSON.parse(data_raw);
                for (i = 0, n = settings_element.options.length; i < n; i++) {
                    settings_element.items.push(settings_element.options[i][field_value]);
                }
            }
        };

        /**
         * Initializes selectize from a <select> element.
         *
         * @param {object} $input
         * @param {object} settings_element
         */
        var init_select = function($input, settings_element) {
            var i, n, tagName, $children, order = 0;
            var options = settings_element.options;
            var optionsMap = {};

            var readData = function($el) {
                var data = attr_data && $el.attr(attr_data);
                if (typeof data === 'string' && data.length) {
                    return JSON.parse(data);
                }
                return null;
            };

            var addOption = function($option, group) {
                $option = $($option);

                var value = hash_key($option.val());
                if (!value && !settings.allowEmptyOption) return;

                // if the option already exists, it's probably been
                // duplicated in another optgroup. in this case, push
                // the current group to the "optgroup" property on the
                // existing option so that it's rendered in both places.
                if (optionsMap.hasOwnProperty(value)) {
                    if (group) {
                        var arr = optionsMap[value][field_optgroup];
                        if (!arr) {
                            optionsMap[value][field_optgroup] = group;
                        } else if (!$.isArray(arr)) {
                            optionsMap[value][field_optgroup] = [arr, group];
                        } else {
                            arr.push(group);
                        }
                    }
                    return;
                }

                var option             = readData($option) || {};
                option[field_label]    = option[field_label] || $option.text();
                option[field_value]    = option[field_value] || value;
                option[field_optgroup] = option[field_optgroup] || group;

                optionsMap[value] = option;
                options.push(option);

                if ($option.is(':selected')) {
                    settings_element.items.push(value);
                }
            };

            var addGroup = function($optgroup) {
                var i, n, id, optgroup, $options;

                $optgroup = $($optgroup);
                id = $optgroup.attr('label');

                if (id) {
                    optgroup = readData($optgroup) || {};
                    optgroup[field_optgroup_label] = id;
                    optgroup[field_optgroup_value] = id;
                    settings_element.optgroups.push(optgroup);
                }

                $options = $('option', $optgroup);
                for (i = 0, n = $options.length; i < n; i++) {
                    addOption($options[i], id);
                }
            };

            settings_element.maxItems = $input.attr('multiple') ? null : 1;

            $children = $input.children();
            for (i = 0, n = $children.length; i < n; i++) {
                tagName = $children[i].tagName.toLowerCase();
                if (tagName === 'optgroup') {
                    addGroup($children[i]);
                } else if (tagName === 'option') {
                    addOption($children[i]);
                }
            }
        };

        return this.each(function() {
            if (this.selectize) return;

            var instance;
            var $input = $(this);
            var tag_name = this.tagName.toLowerCase();
            var placeholder = $input.attr('placeholder') || $input.attr('data-placeholder');
            if (!placeholder && !settings.allowEmptyOption) {
                placeholder = $input.children('option[value=""]').text();
            }

            var settings_element = {
                'placeholder' : placeholder,
                'options'     : [],
                'optgroups'   : [],
                'items'       : []
            };

            if (tag_name === 'select') {
                init_select($input, settings_element);
            } else {
                init_textbox($input, settings_element);
            }

            instance = new Selectize($input, $.extend(true, {}, defaults, settings_element, settings_user));
        });
    };

    $.fn.selectize.defaults = Selectize.defaults;
    $.fn.selectize.support = {
        validity: SUPPORTS_VALIDITY_API
    };


    Selectize.define('drag_drop', function(options) {
        if (!$.fn.sortable) throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');
        if (this.settings.mode !== 'multi') return;
        var self = this;

        self.lock = (function() {
            var original = self.lock;
            return function() {
                var sortable = self.$control.data('sortable');
                if (sortable) sortable.disable();
                return original.apply(self, arguments);
            };
        })();

        self.unlock = (function() {
            var original = self.unlock;
            return function() {
                var sortable = self.$control.data('sortable');
                if (sortable) sortable.enable();
                return original.apply(self, arguments);
            };
        })();

        self.setup = (function() {
            var original = self.setup;
            return function() {
                original.apply(this, arguments);

                var $control = self.$control.sortable({
                    items: '[data-value]',
                    forcePlaceholderSize: true,
                    disabled: self.isLocked,
                    start: function(e, ui) {
                        ui.placeholder.css('width', ui.helper.css('width'));
                        $control.css({overflow: 'visible'});
                    },
                    stop: function() {
                        $control.css({overflow: 'hidden'});
                        var active = self.$activeItems ? self.$activeItems.slice() : null;
                        var values = [];
                        $control.children('[data-value]').each(function() {
                            values.push($(this).attr('data-value'));
                        });
                        self.setValue(values);
                        self.setActiveItem(active);
                    }
                });
            };
        })();

    });

    Selectize.define('dropdown_header', function(options) {
        var self = this;

        options = $.extend({
            title         : 'Untitled',
            headerClass   : 'selectize-dropdown-header',
            titleRowClass : 'selectize-dropdown-header-title',
            labelClass    : 'selectize-dropdown-header-label',
            closeClass    : 'selectize-dropdown-header-close',

            html: function(data) {
                return (
                    '<div class="' + data.headerClass + '">' +
                    '<div class="' + data.titleRowClass + '">' +
                    '<span class="' + data.labelClass + '">' + data.title + '</span>' +
                    '<a href="javascript:void(0)" class="' + data.closeClass + '">&times;</a>' +
                    '</div>' +
                    '</div>'
                );
            }
        }, options);

        self.setup = (function() {
            var original = self.setup;
            return function() {
                original.apply(self, arguments);
                self.$dropdown_header = $(options.html(options));
                self.$dropdown.prepend(self.$dropdown_header);
            };
        })();

    });

    Selectize.define('optgroup_columns', function(options) {
        var self = this;

        options = $.extend({
            equalizeWidth  : true,
            equalizeHeight : true
        }, options);

        this.getAdjacentOption = function($option, direction) {
            var $options = $option.closest('[data-group]').find('[data-selectable]');
            var index    = $options.index($option) + direction;

            return index >= 0 && index < $options.length ? $options.eq(index) : $();
        };

        this.onKeyDown = (function() {
            var original = self.onKeyDown;
            return function(e) {
                var index, $option, $options, $optgroup;

                if (this.isOpen && (e.keyCode === KEY_LEFT || e.keyCode === KEY_RIGHT)) {
                    self.ignoreHover = true;
                    $optgroup = this.$activeOption.closest('[data-group]');
                    index = $optgroup.find('[data-selectable]').index(this.$activeOption);

                    if(e.keyCode === KEY_LEFT) {
                        $optgroup = $optgroup.prev('[data-group]');
                    } else {
                        $optgroup = $optgroup.next('[data-group]');
                    }

                    $options = $optgroup.find('[data-selectable]');
                    $option  = $options.eq(Math.min($options.length - 1, index));
                    if ($option.length) {
                        this.setActiveOption($option);
                    }
                    return;
                }

                return original.apply(this, arguments);
            };
        })();

        var getScrollbarWidth = function() {
            var div;
            var width = getScrollbarWidth.width;
            var doc = document;

            if (typeof width === 'undefined') {
                div = doc.createElement('div');
                div.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>';
                div = div.firstChild;
                doc.body.appendChild(div);
                width = getScrollbarWidth.width = div.offsetWidth - div.clientWidth;
                doc.body.removeChild(div);
            }
            return width;
        };

        var equalizeSizes = function() {
            var i, n, height_max, width, width_last, width_parent, $optgroups;

            $optgroups = $('[data-group]', self.$dropdown_content);
            n = $optgroups.length;
            if (!n || !self.$dropdown_content.width()) return;

            if (options.equalizeHeight) {
                height_max = 0;
                for (i = 0; i < n; i++) {
                    height_max = Math.max(height_max, $optgroups.eq(i).height());
                }
                $optgroups.css({height: height_max});
            }

            if (options.equalizeWidth) {
                width_parent = self.$dropdown_content.innerWidth() - getScrollbarWidth();
                width = Math.round(width_parent / n);
                $optgroups.css({width: width});
                if (n > 1) {
                    width_last = width_parent - width * (n - 1);
                    $optgroups.eq(n - 1).css({width: width_last});
                }
            }
        };

        if (options.equalizeHeight || options.equalizeWidth) {
            hook.after(this, 'positionDropdown', equalizeSizes);
            hook.after(this, 'refreshOptions', equalizeSizes);
        }


    });

    Selectize.define('remove_button', function(options) {
        options = $.extend({
            label     : '&times;',
            title     : 'Remove',
            className : 'remove',
            append    : true
        }, options);

        var singleClose = function(thisRef, options) {

            options.className = 'remove-single';

            var self = thisRef;
            var html = '<a href="javascript:void(0)" class="' + options.className + '" tabindex="-1" title="' + escape_html(options.title) + '">' + options.label + '</a>';

            /**
             * Appends an element as a child (with raw HTML).
             *
             * @param {string} html_container
             * @param {string} html_element
             * @return {string}
             */
            var append = function(html_container, html_element) {
                return html_container + html_element;
            };

            thisRef.setup = (function() {
                var original = self.setup;
                return function() {
                    // override the item rendering method to add the button to each
                    if (options.append) {
                        var id = $(self.$input.context).attr('id');
                        var selectizer = $('#'+id);

                        var render_item = self.settings.render.item;
                        self.settings.render.item = function(data) {
                            return append(render_item.apply(thisRef, arguments), html);
                        };
                    }

                    original.apply(thisRef, arguments);

                    // add event listener
                    thisRef.$control.on('click', '.' + options.className, function(e) {
                        e.preventDefault();
                        if (self.isLocked) return;

                        self.clear();
                    });

                };
            })();
        };

        var multiClose = function(thisRef, options) {

            var self = thisRef;
            var html = '<a href="javascript:void(0)" class="' + options.className + '" tabindex="-1" title="' + escape_html(options.title) + '">' + options.label + '</a>';

            /**
             * Appends an element as a child (with raw HTML).
             *
             * @param {string} html_container
             * @param {string} html_element
             * @return {string}
             */
            var append = function(html_container, html_element) {
                var pos = html_container.search(/(<\/[^>]+>\s*)$/);
                return html_container.substring(0, pos) + html_element + html_container.substring(pos);
            };

            thisRef.setup = (function() {
                var original = self.setup;
                return function() {
                    // override the item rendering method to add the button to each
                    if (options.append) {
                        var render_item = self.settings.render.item;
                        self.settings.render.item = function(data) {
                            return append(render_item.apply(thisRef, arguments), html);
                        };
                    }

                    original.apply(thisRef, arguments);

                    // add event listener
                    thisRef.$control.on('click', '.' + options.className, function(e) {
                        e.preventDefault();
                        if (self.isLocked) return;

                        var $item = $(e.currentTarget).parent();
                        self.setActiveItem($item);
                        if (self.deleteSelection()) {
                            self.setCaret(self.items.length);
                        }
                    });

                };
            })();
        };

        if (this.settings.mode === 'single') {
            singleClose(this, options);
            return;
        } else {
            multiClose(this, options);
        }
    });


    Selectize.define('restore_on_backspace', function(options) {
        var self = this;

        options.text = options.text || function(option) {
                return option[this.settings.labelField];
            };

        this.onKeyDown = (function() {
            var original = self.onKeyDown;
            return function(e) {
                var index, option;
                if (e.keyCode === KEY_BACKSPACE && this.$control_input.val() === '' && !this.$activeItems.length) {
                    index = this.caretPos - 1;
                    if (index >= 0 && index < this.items.length) {
                        option = this.options[this.items[index]];
                        if (this.deleteSelection(e)) {
                            this.setTextboxValue(options.text.apply(this, [option]));
                            this.refreshOptions(true);
                        }
                        e.preventDefault();
                        return;
                    }
                }
                return original.apply(this, arguments);
            };
        })();
    });


    return Selectize;
}));
/**
 * Featherlight - ultra slim jQuery lightbox
 * Version 1.5.0 - http://noelboss.github.io/featherlight/
 *
 * Copyright 2016, Noël Raoul Bossart (http://www.noelboss.com)
 * MIT Licensed.
**/
!function(a){"use strict";function b(a,c){if(!(this instanceof b)){var d=new b(a,c);return d.open(),d}this.id=b.id++,this.setup(a,c),this.chainCallbacks(b._callbackChain)}if("undefined"==typeof a)return void("console"in window&&window.console.info("Too much lightness, Featherlight needs jQuery."));var c=[],d=function(b){return c=a.grep(c,function(a){return a!==b&&a.$instance.closest("body").length>0})},e=function(a,b){var c={},d=new RegExp("^"+b+"([A-Z])(.*)");for(var e in a){var f=e.match(d);if(f){var g=(f[1]+f[2].replace(/([A-Z])/g,"-$1")).toLowerCase();c[g]=a[e]}}return c},f={keyup:"onKeyUp",resize:"onResize"},g=function(c){a.each(b.opened().reverse(),function(){return c.isDefaultPrevented()||!1!==this[f[c.type]](c)?void 0:(c.preventDefault(),c.stopPropagation(),!1)})},h=function(c){if(c!==b._globalHandlerInstalled){b._globalHandlerInstalled=c;var d=a.map(f,function(a,c){return c+"."+b.prototype.namespace}).join(" ");a(window)[c?"on":"off"](d,g)}};b.prototype={constructor:b,namespace:"featherlight",targetAttr:"data-featherlight",variant:null,resetCss:!1,background:null,openTrigger:"click",closeTrigger:"click",filter:null,root:"body",openSpeed:250,closeSpeed:250,closeOnClick:"background",closeOnEsc:!0,closeIcon:"&#10005;",loading:"",persist:!1,otherClose:null,beforeOpen:a.noop,beforeContent:a.noop,beforeClose:a.noop,afterOpen:a.noop,afterContent:a.noop,afterClose:a.noop,onKeyUp:a.noop,onResize:a.noop,type:null,contentFilters:["jquery","image","html","ajax","iframe","text"],setup:function(b,c){"object"!=typeof b||b instanceof a!=!1||c||(c=b,b=void 0);var d=a.extend(this,c,{target:b}),e=d.resetCss?d.namespace+"-reset":d.namespace,f=a(d.background||['<div class="'+e+"-loading "+e+'">','<div class="'+e+'-content">','<span class="'+e+"-close-icon "+d.namespace+'-close">',d.closeIcon,"</span>",'<div class="'+d.namespace+'-inner">'+d.loading+"</div>","</div>","</div>"].join("")),g="."+d.namespace+"-close"+(d.otherClose?","+d.otherClose:"");return d.$instance=f.clone().addClass(d.variant),d.$instance.on(d.closeTrigger+"."+d.namespace,function(b){var c=a(b.target);("background"===d.closeOnClick&&c.is("."+d.namespace)||"anywhere"===d.closeOnClick||c.closest(g).length)&&(d.close(b),b.preventDefault())}),this},getContent:function(){if(this.persist!==!1&&this.$content)return this.$content;var b=this,c=this.constructor.contentFilters,d=function(a){return b.$currentTarget&&b.$currentTarget.attr(a)},e=d(b.targetAttr),f=b.target||e||"",g=c[b.type];if(!g&&f in c&&(g=c[f],f=b.target&&e),f=f||d("href")||"",!g)for(var h in c)b[h]&&(g=c[h],f=b[h]);if(!g){var i=f;if(f=null,a.each(b.contentFilters,function(){return g=c[this],g.test&&(f=g.test(i)),!f&&g.regex&&i.match&&i.match(g.regex)&&(f=i),!f}),!f)return"console"in window&&window.console.error("Featherlight: no content filter found "+(i?' for "'+i+'"':" (no target specified)")),!1}return g.process.call(b,f)},setContent:function(b){var c=this;return(b.is("iframe")||a("iframe",b).length>0)&&c.$instance.addClass(c.namespace+"-iframe"),c.$instance.removeClass(c.namespace+"-loading"),c.$instance.find("."+c.namespace+"-inner").not(b).slice(1).remove().end().replaceWith(a.contains(c.$instance[0],b[0])?"":b),c.$content=b.addClass(c.namespace+"-inner"),c},open:function(b){var d=this;if(d.$instance.hide().appendTo(d.root),!(b&&b.isDefaultPrevented()||d.beforeOpen(b)===!1)){b&&b.preventDefault();var e=d.getContent();if(e)return c.push(d),h(!0),d.$instance.fadeIn(d.openSpeed),d.beforeContent(b),a.when(e).always(function(a){d.setContent(a),d.afterContent(b)}).then(d.$instance.promise()).done(function(){d.afterOpen(b)})}return d.$instance.detach(),a.Deferred().reject().promise()},close:function(b){var c=this,e=a.Deferred();return c.beforeClose(b)===!1?e.reject():(0===d(c).length&&h(!1),c.$instance.fadeOut(c.closeSpeed,function(){c.$instance.detach(),c.afterClose(b),e.resolve()})),e.promise()},resize:function(a,b){if(a&&b){this.$content.css("width","").css("height","");var c=Math.max(a/(parseInt(this.$content.parent().css("width"),10)-1),b/(parseInt(this.$content.parent().css("height"),10)-1));c>1&&(c=b/Math.floor(b/c),this.$content.css("width",""+a/c+"px").css("height",""+b/c+"px"))}},chainCallbacks:function(b){for(var c in b)this[c]=a.proxy(b[c],this,a.proxy(this[c],this))}},a.extend(b,{id:0,autoBind:"[data-featherlight]",defaults:b.prototype,contentFilters:{jquery:{regex:/^[#.]\w/,test:function(b){return b instanceof a&&b},process:function(b){return this.persist!==!1?a(b):a(b).clone(!0)}},image:{regex:/\.(png|jpg|jpeg|gif|tiff|bmp|svg)(\?\S*)?$/i,process:function(b){var c=this,d=a.Deferred(),e=new Image,f=a('<img src="'+b+'" alt="" class="'+c.namespace+'-image" />');return e.onload=function(){f.naturalWidth=e.width,f.naturalHeight=e.height,d.resolve(f)},e.onerror=function(){d.reject(f)},e.src=b,d.promise()}},html:{regex:/^\s*<[\w!][^<]*>/,process:function(b){return a(b)}},ajax:{regex:/./,process:function(b){var c=a.Deferred(),d=a("<div></div>").load(b,function(a,b){"error"!==b&&c.resolve(d.contents()),c.fail()});return c.promise()}},iframe:{process:function(b){var c=new a.Deferred,d=a("<iframe/>").hide().attr("src",b).css(e(this,"iframe")).on("load",function(){c.resolve(d.show())}).appendTo(this.$instance.find("."+this.namespace+"-content"));return c.promise()}},text:{process:function(b){return a("<div>",{text:b})}}},functionAttributes:["beforeOpen","afterOpen","beforeContent","afterContent","beforeClose","afterClose"],readElementConfig:function(b,c){var d=this,e=new RegExp("^data-"+c+"-(.*)"),f={};return b&&b.attributes&&a.each(b.attributes,function(){var b=this.name.match(e);if(b){var c=this.value,g=a.camelCase(b[1]);if(a.inArray(g,d.functionAttributes)>=0)c=new Function(c);else try{c=a.parseJSON(c)}catch(h){}f[g]=c}}),f},extend:function(b,c){var d=function(){this.constructor=b};return d.prototype=this.prototype,b.prototype=new d,b.__super__=this.prototype,a.extend(b,this,c),b.defaults=b.prototype,b},attach:function(b,c,d){var e=this;"object"!=typeof c||c instanceof a!=!1||d||(d=c,c=void 0),d=a.extend({},d);var f,g=d.namespace||e.defaults.namespace,h=a.extend({},e.defaults,e.readElementConfig(b[0],g),d);return b.on(h.openTrigger+"."+h.namespace,h.filter,function(g){var i=a.extend({$source:b,$currentTarget:a(this)},e.readElementConfig(b[0],h.namespace),e.readElementConfig(this,h.namespace),d),j=f||a(this).data("featherlight-persisted")||new e(c,i);"shared"===j.persist?f=j:j.persist!==!1&&a(this).data("featherlight-persisted",j),i.$currentTarget.blur(),j.open(g)}),b},current:function(){var a=this.opened();return a[a.length-1]||null},opened:function(){var b=this;return d(),a.grep(c,function(a){return a instanceof b})},close:function(a){var b=this.current();return b?b.close(a):void 0},_onReady:function(){var b=this;b.autoBind&&(a(b.autoBind).each(function(){b.attach(a(this))}),a(document).on("click",b.autoBind,function(c){c.isDefaultPrevented()||"featherlight"===c.namespace||(c.preventDefault(),b.attach(a(c.currentTarget)),a(c.target).trigger("click.featherlight"))}))},_callbackChain:{onKeyUp:function(b,c){return 27===c.keyCode?(this.closeOnEsc&&a.featherlight.close(c),!1):b(c)},onResize:function(a,b){return this.resize(this.$content.naturalWidth,this.$content.naturalHeight),a(b)},afterContent:function(a,b){var c=a(b);return this.onResize(b),c}}}),a.featherlight=b,a.fn.featherlight=function(a,c){return b.attach(this,a,c)},a(document).ready(function(){b._onReady()})}(jQuery);
/**
 * Featherlight Gallery – an extension for the ultra slim jQuery lightbox
 * Version 1.7.0 - http://noelboss.github.io/featherlight/
 *
 * Copyright 2016, Noël Raoul Bossart (http://www.noelboss.com)
 * MIT Licensed.
**/
(function($) {
	"use strict";

	var warn = function(m) {
		if(window.console && window.console.warn) {
			window.console.warn('FeatherlightGallery: ' + m);
		}
	};

	if('undefined' === typeof $) {
		return warn('Too much lightness, Featherlight needs jQuery.');
	} else if(!$.featherlight) {
		return warn('Load the featherlight plugin before the gallery plugin');
	}

	var isTouchAware = ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch,
		jQueryConstructor = $.event && $.event.special.swipeleft && $,
		hammerConstructor = window.Hammer && function($el){
			var mc = new window.Hammer.Manager($el[0]);
			mc.add(new window.Hammer.Swipe());
			return mc;
		},
		swipeAwareConstructor = isTouchAware && (jQueryConstructor || hammerConstructor);
	if(isTouchAware && !swipeAwareConstructor) {
		warn('No compatible swipe library detected; one must be included before featherlightGallery for swipe motions to navigate the galleries.');
	}

	var callbackChain = {
			afterClose: function(_super, event) {
					var self = this;
					self.$instance.off('next.'+self.namespace+' previous.'+self.namespace);
					if (self._swiper) {
						self._swiper
							.off('swipeleft', self._swipeleft) /* See http://stackoverflow.com/questions/17367198/hammer-js-cant-remove-event-listener */
							.off('swiperight', self._swiperight);
						self._swiper = null;
					}
					return _super(event);
			},
			beforeOpen: function(_super, event){
					var self = this;

					self.$instance.on('next.'+self.namespace+' previous.'+self.namespace, function(event){
						var offset = event.type === 'next' ? +1 : -1;
						self.navigateTo(self.currentNavigation() + offset);
					});

					if (swipeAwareConstructor) {
						self._swiper = swipeAwareConstructor(self.$instance)
							.on('swipeleft', self._swipeleft = function()  { self.$instance.trigger('next'); })
							.on('swiperight', self._swiperight = function() { self.$instance.trigger('previous'); });

						self.$instance
							.addClass(this.namespace+'-swipe-aware', swipeAwareConstructor);
					}

					self.$instance.find('.'+self.namespace+'-content')
						.append(self.createNavigation('previous'))
						.append(self.createNavigation('next'));

					return _super(event);
			},
			beforeContent: function(_super, event) {
				var index = this.currentNavigation();
				var len = this.slides().length;
				this.$instance
					.toggleClass(this.namespace+'-first-slide', index === 0)
					.toggleClass(this.namespace+'-last-slide', index === len - 1);
				return _super(event);
			},
			onKeyUp: function(_super, event){
				var dir = {
					37: 'previous', /* Left arrow */
					39: 'next'			/* Rigth arrow */
				}[event.keyCode];
				if(dir) {
					this.$instance.trigger(dir);
					return false;
				} else {
					return _super(event);
				}
			}
		};

	function FeatherlightGallery($source, config) {
		if(this instanceof FeatherlightGallery) {  /* called with new */
			$.featherlight.apply(this, arguments);
			this.chainCallbacks(callbackChain);
		} else {
			var flg = new FeatherlightGallery($.extend({$source: $source, $currentTarget: $source.first()}, config));
			flg.open();
			return flg;
		}
	}

	$.featherlight.extend(FeatherlightGallery, {
		autoBind: '[data-featherlight-gallery]'
	});

	$.extend(FeatherlightGallery.prototype, {
		/** Additional settings for Gallery **/
		previousIcon: '&#9664;',     /* Code that is used as previous icon */
		nextIcon: '&#9654;',         /* Code that is used as next icon */
		galleryFadeIn: 100,          /* fadeIn speed when image is loaded */
		galleryFadeOut: 300,         /* fadeOut speed before image is loaded */

		slides: function() {
			if (this.filter) {
				return this.$source.find(this.filter);
			}
			return this.$source;
		},

		images: function() {
			warn('images is deprecated, please use slides instead');
			return this.slides();
		},

		currentNavigation: function() {
			return this.slides().index(this.$currentTarget);
		},

		navigateTo: function(index) {
			var self = this,
				source = self.slides(),
				len = source.length,
				$inner = self.$instance.find('.' + self.namespace + '-inner');
			index = ((index % len) + len) % len; /* pin index to [0, len[ */


			self.$currentTarget = source.eq(index);
			console.log(self.$currentTarget);

			self.beforeContent();
			return $.when(
				self.getContent(),
				$inner.fadeTo(self.galleryFadeOut,0.2)
			).always(function($newContent) {
					self.setContent($newContent);
					self.afterContent();
					$($newContent).fadeTo(self.galleryFadeIn,1);
			});
		},

		createNavigation: function(target) {
			var self = this;
			return $('<span title="'+target+'" class="'+this.namespace+'-'+target+'">'+this[target+'Icon']+'</span>').click(function(){
				$(this).trigger(target+'.'+self.namespace);
			});
		}
	});

	$.featherlightGallery = FeatherlightGallery;

	/* extend jQuery with selector featherlight method $(elm).featherlight(config, elm); */
	$.fn.featherlightGallery = function(config) {
		FeatherlightGallery.attach(this, config);
		return this;
	};

	/* bind featherlight on ready if config autoBind is set */
	$(document).ready(function(){ FeatherlightGallery._onReady(); });

}(jQuery));

/*
 *  Hyphenator_Loader 5.2.0(devel) - client side hyphenation for webbrowsers
 *  Copyright (C) 2015  Mathias Nater, Zürich (mathiasnater at gmail dot com)
 *  https://github.com/mnater/Hyphenator
 *
 *  Released under the MIT license
 *  http://mnater.github.io/Hyphenator/LICENSE.txt
 */

var Hyphenator_Loader=(function(window){'use strict';var languages,config,path,createElem=function(tagname){var r;if(window.document.createElementNS){r=window.document.createElementNS('http://www.w3.org/1999/xhtml',tagname);}else if(window.document.createElement){r=window.document.createElement(tagname);}return r;},loadNrunHyphenator=function(config){var head,script,done=false;head=window.document.getElementsByTagName('head').item(0);script=createElem('script');script.src=path;script.type='text/javascript';script.onreadystatechange=function(){if(!done&&(!script.readyState||script.readyState==="loaded"||script.readyState==="complete")){done=true;Hyphenator.config(config);Hyphenator.run();script.onreadystatechange=null;script.onload=null;if(head&&script.parentNode){head.removeChild(script);}}};script.onload=script.onreadystatechange;head.appendChild(script);},checkLangSupport=function(){var shadowContainer,shadow,lang,fakeBdy=createElem('body');shadowContainer=createElem('div');shadowContainer.style.visibility='hidden';fakeBdy.appendChild(shadowContainer);window.document.documentElement.appendChild(fakeBdy);for(lang in languages){if(languages.hasOwnProperty(lang)){shadow=createElem('div');shadow.style.MozHyphens='auto';shadow.style['-webkit-hyphens']='auto';shadow.style['-ms-hyphens']='auto';shadow.style.hyphens='auto';shadow.style.width='5em';shadow.style.lineHeight='12px';shadow.style.border='none';shadow.style.padding='0';shadow.style.wordWrap='normal';shadow.style['-webkit-locale']="'"+lang+"'";shadow.lang=lang;shadow.appendChild(window.document.createTextNode(languages[lang]));shadowContainer.appendChild(shadow);if(shadow.offsetHeight===12){loadNrunHyphenator(config);break;}}}fakeBdy.parentNode.removeChild(fakeBdy);};return{init:function(langs,p,configs){languages=langs;path=p;config=configs||{};checkLangSupport();}};}(window));Hyphenator_Loader.init({"de":"Donaudampschiff"},themeResourcesPath + "/Javascript/Polyfills/hyphenator/Hyphenator.js",{useCSS3hyphenation:true});