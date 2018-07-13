window.BIBLESEARCH = window.BIBLESEARCH || {};
BIBLESEARCH.jQuire = BIBLESEARCH.jQuire || function(b) {
    function l(c, d) {
        typeof c === "function" && c.call(window, d)
    }

    function q(c) {
        var d = false;
        if (a.rejectIf) d = a.rejectIf.call({}, c);
        return !d
    }

    function r(c, d, e) {
        function f(s, t) {
            for (var i = s.split("."), j = t.split("."), g = 0; g < i.length; ++g) {
                var m = parseInt(i[g], 10),
                    n = parseInt(j[g], 10);
                if (j.length == g) return -1;
                if (m != n) return m > n ? 1 : -1
            }
            if (i.length != j.length) return 1;
            return 0
        }
        var o = false;
        if (typeof e === "function" && e.fn) {
            e = e.fn.jquery;
            c = [c, e, d];
            o = c.join("|") === c.sort(f).join("|")
        }
        return o
    }

    function u(c, d) {
        var e = false,
            f = document.createElement("script");
        f.src = c;
        f.onload = f.onreadystatechange = function() {
            if (!e && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
                e = true;
                d.call();
                f.onload = f.onreadystatechange = null
            }
        };
        document.getElementsByTagName("head")[0].appendChild(f)
    }
    var a = {
            loadFrom: "//ajax.googleapis.com/ajax/libs/jquery/#{v}/jquery.min.js",
            onLoad: null,
            atLeast: null,
            atMost: "1",
            rejectIf: null,
            test: null
        },
        h = [window.jQuery, BIBLESEARCH.jQuery],
        p = false;
    if (typeof b === "function") a.onLoad =
        b;
    else
        for (var k in b)
            if (b.hasOwnProperty(k)) a[k] = b[k];
    a.loadFrom = a.loadFrom.replace("#{v}", a.atMost);
    a.test && h.push(a.test);
    for (b = 0; b < h.length; b++)
        if (q(h[b]) && r(a.atLeast, a.atMost, h[b])) {
            l(a.onLoad, h[b]);
            p = true;
            break
        }
    p || u(a.loadFrom, function() {
        BIBLESEARCH.jQuery = BIBLESEARCH.$ = window.jQuery.noConflict(true);
        l(a.onLoad, BIBLESEARCH.$)
    })
};
var BIBLESEARCH = BIBLESEARCH || {};
BIBLESEARCH.defineFancybox = BIBLESEARCH.defineFancybox || function(O) {
    O.fn.fancybox || function(A, J, f, B) {
        var P = f("html"),
            n = f(A),
            o = f(J),
            b = f.fancybox = function() {
                b.open.apply(this, arguments)
            },
            L = navigator.userAgent.match(/msie/i),
            G = null,
            r = J.createTouch !== B,
            D = function(a) {
                return a && a.hasOwnProperty && a instanceof f
            },
            u = function(a) {
                return a && f.type(a) === "string"
            },
            C = function(a) {
                return u(a) && a.indexOf("%") > 0
            },
            l = function(a, d) {
                var e = parseInt(a, 10) || 0;
                if (d && C(a)) e = b.getViewport()[d] / 100 * e;
                return Math.ceil(e)
            },
            s = function(a,
                d) {
                return l(a, d) + "px"
            };
        f.extend(b, {
            version: "2.1.5",
            defaults: {
                padding: 15,
                margin: 20,
                width: 800,
                height: 600,
                minWidth: 100,
                minHeight: 100,
                maxWidth: 9999,
                maxHeight: 9999,
                pixelRatio: 1,
                autoSize: true,
                autoHeight: false,
                autoWidth: false,
                autoResize: true,
                autoCenter: !r,
                fitToView: true,
                aspectRatio: false,
                topRatio: 0.5,
                leftRatio: 0.5,
                scrolling: "auto",
                wrapCSS: "",
                arrows: true,
                closeBtn: true,
                closeClick: false,
                nextClick: false,
                mouseWheel: true,
                autoPlay: false,
                playSpeed: 3E3,
                preload: 3,
                modal: false,
                loop: true,
                ajax: {
                    dataType: "html",
                    headers: {
                        "X-fancyBox": true
                    }
                },
                iframe: {
                    scrolling: "auto",
                    preload: true
                },
                swf: {
                    wmode: "transparent",
                    allowfullscreen: "true",
                    allowscriptaccess: "always"
                },
                keys: {
                    next: {
                        13: "left",
                        34: "up",
                        39: "left",
                        40: "up"
                    },
                    prev: {
                        8: "right",
                        33: "down",
                        37: "right",
                        38: "down"
                    },
                    close: [27],
                    play: [32],
                    toggle: [70]
                },
                direction: {
                    next: "left",
                    prev: "right"
                },
                scrollOutside: true,
                index: 0,
                type: null,
                href: null,
                content: null,
                title: null,
                tpl: {
                    wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                    image: '<img class="fancybox-image" src="{href}" alt="" />',
                    iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (L ? ' allowtransparency="true"' : "") + "></iframe>",
                    error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                    closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                    next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                    prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
                },
                openEffect: "fade",
                openSpeed: 250,
                openEasing: "swing",
                openOpacity: true,
                openMethod: "zoomIn",
                closeEffect: "fade",
                closeSpeed: 250,
                closeEasing: "swing",
                closeOpacity: true,
                closeMethod: "zoomOut",
                nextEffect: "elastic",
                nextSpeed: 250,
                nextEasing: "swing",
                nextMethod: "changeIn",
                prevEffect: "elastic",
                prevSpeed: 250,
                prevEasing: "swing",
                prevMethod: "changeOut",
                helpers: {
                    overlay: true,
                    title: true
                },
                onCancel: f.noop,
                beforeLoad: f.noop,
                afterLoad: f.noop,
                beforeShow: f.noop,
                afterShow: f.noop,
                beforeChange: f.noop,
                beforeClose: f.noop,
                afterClose: f.noop
            },
            group: {},
            opts: {},
            previous: null,
            coming: null,
            current: null,
            isActive: false,
            isOpen: false,
            isOpened: false,
            wrap: null,
            skin: null,
            outer: null,
            inner: null,
            player: {
                timer: null,
                isActive: false
            },
            ajaxLoad: null,
            imgPreload: null,
            transitions: {},
            helpers: {},
            open: function(a, d) {
                if (a) {
                    f.isPlainObject(d) || (d = {});
                    if (false !== b.close(true)) {
                        f.isArray(a) || (a = D(a) ? f(a).get() : [a]);
                        f.each(a, function(e, c) {
                            var g = {},
                                h, i, j, k, m;
                            if (f.type(c) ===
                                "object") {
                                if (c.nodeType) c = f(c);
                                if (D(c)) {
                                    g = {
                                        href: c.data("fancybox-href") || c.attr("href"),
                                        title: c.data("fancybox-title") || c.attr("title"),
                                        isDom: true,
                                        element: c
                                    };
                                    f.metadata && f.extend(true, g, c.metadata())
                                } else g = c
                            }
                            h = d.href || g.href || (u(c) ? c : null);
                            i = d.title !== B ? d.title : g.title || "";
                            k = (j = d.content || g.content) ? "html" : d.type || g.type;
                            if (!k && g.isDom) {
                                k = c.data("fancybox-type");
                                if (!k) k = (k = c.prop("class").match(/fancybox\.(\w+)/)) ? k[1] : null
                            }
                            if (u(h)) {
                                if (!k)
                                    if (b.isImage(h)) k = "image";
                                    else if (b.isSWF(h)) k = "swf";
                                else if (h.charAt(0) ===
                                    "#") k = "inline";
                                else if (u(c)) {
                                    k = "html";
                                    j = c
                                }
                                if (k === "ajax") {
                                    m = h.split(/\s+/, 2);
                                    h = m.shift();
                                    m = m.shift()
                                }
                            }
                            if (!j)
                                if (k === "inline")
                                    if (h) j = f(u(h) ? h.replace(/.*(?=#[^\s]+$)/, "") : h);
                                    else {
                                        if (g.isDom) j = c
                                    }
                            else if (k === "html") j = h;
                            else if (!k && !h && g.isDom) {
                                k = "inline";
                                j = c
                            }
                            f.extend(g, {
                                href: h,
                                type: k,
                                content: j,
                                title: i,
                                selector: m
                            });
                            a[e] = g
                        });
                        b.opts = f.extend(true, {}, b.defaults, d);
                        if (d.keys !== B) b.opts.keys = d.keys ? f.extend({}, b.defaults.keys, d.keys) : false;
                        b.group = a;
                        return b._start(b.opts.index)
                    }
                }
            },
            cancel: function() {
                var a = b.coming;
                if (!(!a || false === b.trigger("onCancel"))) {
                    b.hideLoading();
                    b.ajaxLoad && b.ajaxLoad.abort();
                    b.ajaxLoad = null;
                    if (b.imgPreload) b.imgPreload.onload = b.imgPreload.onerror = null;
                    a.wrap && a.wrap.stop(true, true).trigger("onReset").remove();
                    b.coming = null;
                    b.current || b._afterZoomOut(a)
                }
            },
            close: function(a) {
                b.cancel();
                if (false !== b.trigger("beforeClose")) {
                    b.unbindEvents();
                    if (b.isActive)
                        if (!b.isOpen || a === true) {
                            f(".fancybox-wrap").stop(true).trigger("onReset").remove();
                            b._afterZoomOut()
                        } else {
                            b.isOpen = b.isOpened = false;
                            b.isClosing =
                                true;
                            f(".fancybox-item, .fancybox-nav").remove();
                            b.wrap.stop(true, true).removeClass("fancybox-opened");
                            b.transitions[b.current.closeMethod]()
                        }
                }
            },
            play: function(a) {
                var d = function() {
                        clearTimeout(b.player.timer)
                    },
                    e = function() {
                        d();
                        if (b.current && b.player.isActive) b.player.timer = setTimeout(b.next, b.current.playSpeed)
                    },
                    c = function() {
                        d();
                        o.unbind(".player");
                        b.player.isActive = false;
                        b.trigger("onPlayEnd")
                    };
                if (a === true || !b.player.isActive && a !== false) {
                    if (b.current && (b.current.loop || b.current.index < b.group.length -
                            1)) {
                        b.player.isActive = true;
                        o.bind({
                            "onCancel.player beforeClose.player": c,
                            "onUpdate.player": e,
                            "beforeLoad.player": d
                        });
                        e();
                        b.trigger("onPlayStart")
                    }
                } else c()
            },
            next: function(a) {
                var d = b.current;
                if (d) {
                    if (!u(a)) a = d.direction.next;
                    b.jumpto(d.index + 1, a, "next")
                }
            },
            prev: function(a) {
                var d = b.current;
                if (d) {
                    if (!u(a)) a = d.direction.prev;
                    b.jumpto(d.index - 1, a, "prev")
                }
            },
            jumpto: function(a, d, e) {
                var c = b.current;
                if (c) {
                    a = l(a);
                    b.direction = d || c.direction[a >= c.index ? "next" : "prev"];
                    b.router = e || "jumpto";
                    if (c.loop) {
                        if (a < 0) a = c.group.length +
                            a % c.group.length;
                        a %= c.group.length
                    }
                    if (c.group[a] !== B) {
                        b.cancel();
                        b._start(a)
                    }
                }
            },
            reposition: function(a, d) {
                var e = b.current,
                    c = e ? e.wrap : null,
                    g;
                if (c) {
                    g = b._getPosition(d);
                    if (a && a.type === "scroll") {
                        delete g.position;
                        c.stop(true, true).animate(g, 200)
                    } else {
                        c.css(g);
                        e.pos = f.extend({}, e.dim, g)
                    }
                }
            },
            update: function(a) {
                var d = a && a.type,
                    e = !d || d === "orientationchange";
                if (e) {
                    clearTimeout(G);
                    G = null
                }!b.isOpen || G || (G = setTimeout(function() {
                    var c = b.current;
                    if (!(!c || b.isClosing)) {
                        b.wrap.removeClass("fancybox-tmp");
                        if (e || d ===
                            "load" || d === "resize" && c.autoResize) b._setDimension();
                        d === "scroll" && c.canShrink || b.reposition(a);
                        b.trigger("onUpdate");
                        G = null
                    }
                }, e && !r ? 0 : 300))
            },
            toggle: function(a) {
                if (b.isOpen) {
                    b.current.fitToView = f.type(a) === "boolean" ? a : !b.current.fitToView;
                    if (r) {
                        b.wrap.removeAttr("style").addClass("fancybox-tmp");
                        b.trigger("onUpdate")
                    }
                    b.update()
                }
            },
            hideLoading: function() {
                o.unbind(".loading");
                f("#fancybox-loading").remove()
            },
            showLoading: function() {
                var a, d;
                b.hideLoading();
                a = f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");
                o.bind("keydown.loading", function(e) {
                    if ((e.which || e.keyCode) === 27) {
                        e.preventDefault();
                        b.cancel()
                    }
                });
                if (!b.defaults.fixed) {
                    d = b.getViewport();
                    a.css({
                        position: "absolute",
                        top: d.h * 0.5 + d.y,
                        left: d.w * 0.5 + d.x
                    })
                }
            },
            getViewport: function() {
                var a = b.current && b.current.locked || false,
                    d = {
                        x: n.scrollLeft(),
                        y: n.scrollTop()
                    };
                if (a) {
                    d.w = a[0].clientWidth;
                    d.h = a[0].clientHeight
                } else {
                    d.w = r && A.innerWidth ? A.innerWidth : n.width();
                    d.h = r && A.innerHeight ? A.innerHeight : n.height()
                }
                return d
            },
            unbindEvents: function() {
                b.wrap && D(b.wrap) &&
                    b.wrap.unbind(".fb");
                o.unbind(".fb");
                n.unbind(".fb")
            },
            bindEvents: function() {
                var a = b.current,
                    d;
                if (a) {
                    n.bind("orientationchange.fb" + (r ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update);
                    (d = a.keys) && o.bind("keydown.fb", function(e) {
                        var c = e.which || e.keyCode,
                            g = e.target || e.srcElement;
                        if (c === 27 && b.coming) return false;
                        if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(g && (g.type || f(g).is("[contenteditable]")))) f.each(d, function(h, i) {
                            if (a.group.length > 1 && i[c] !== B) {
                                b[h](i[c]);
                                e.preventDefault();
                                return false
                            }
                            if (f.inArray(c, i) > -1) {
                                b[h]();
                                e.preventDefault();
                                return false
                            }
                        })
                    });
                    f.fn.mousewheel && a.mouseWheel && b.wrap.bind("mousewheel.fb", function(e, c, g, h) {
                        for (var i = f(e.target || null), j = false; i.length;) {
                            if (j || i.is(".fancybox-skin") || i.is(".fancybox-wrap")) break;
                            j = i[0] && !(i[0].style.overflow && i[0].style.overflow === "hidden") && (i[0].clientWidth && i[0].scrollWidth > i[0].clientWidth || i[0].clientHeight && i[0].scrollHeight > i[0].clientHeight);
                            i = f(i).parent()
                        }
                        if (c !== 0 && !j)
                            if (b.group.length > 1 && !a.canShrink) {
                                if (h >
                                    0 || g > 0) b.prev(h > 0 ? "down" : "left");
                                else if (h < 0 || g < 0) b.next(h < 0 ? "up" : "right");
                                e.preventDefault()
                            }
                    })
                }
            },
            trigger: function(a, d) {
                var e, c = d || b.coming || b.current;
                if (c) {
                    if (f.isFunction(c[a])) e = c[a].apply(c, Array.prototype.slice.call(arguments, 1));
                    if (e === false) return false;
                    c.helpers && f.each(c.helpers, function(g, h) {
                        h && b.helpers[g] && f.isFunction(b.helpers[g][a]) && b.helpers[g][a](f.extend(true, {}, b.helpers[g].defaults, h), c)
                    });
                    o.trigger(a)
                }
            },
            isImage: function(a) {
                return u(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
            },
            isSWF: function(a) {
                return u(a) && a.match(/\.(swf)((\?|#).*)?$/i)
            },
            _start: function(a) {
                var d = {},
                    e, c;
                a = l(a);
                e = b.group[a] || null;
                if (!e) return false;
                d = f.extend(true, {}, b.opts, e);
                e = d.margin;
                c = d.padding;
                if (f.type(e) === "number") d.margin = [e, e, e, e];
                if (f.type(c) === "number") d.padding = [c, c, c, c];
                d.modal && f.extend(true, d, {
                    closeBtn: false,
                    closeClick: false,
                    nextClick: false,
                    arrows: false,
                    mouseWheel: false,
                    keys: null,
                    helpers: {
                        overlay: {
                            closeClick: false
                        }
                    }
                });
                if (d.autoSize) d.autoWidth = d.autoHeight = true;
                if (d.width === "auto") d.autoWidth =
                    true;
                if (d.height === "auto") d.autoHeight = true;
                d.group = b.group;
                d.index = a;
                b.coming = d;
                if (false === b.trigger("beforeLoad")) b.coming = null;
                else {
                    c = d.type;
                    e = d.href;
                    if (!c) {
                        b.coming = null;
                        if (b.current && b.router && b.router !== "jumpto") {
                            b.current.index = a;
                            return b[b.router](b.direction)
                        }
                        return false
                    }
                    b.isActive = true;
                    if (c === "image" || c === "swf") {
                        d.autoHeight = d.autoWidth = false;
                        d.scrolling = "visible"
                    }
                    if (c === "image") d.aspectRatio = true;
                    if (c === "iframe" && r) d.scrolling = "scroll";
                    d.wrap = f(d.tpl.wrap).addClass("fancybox-" + (r ? "mobile" :
                        "desktop") + " fancybox-type-" + c + " fancybox-tmp " + d.wrapCSS).appendTo(d.parent || "body");
                    f.extend(d, {
                        skin: f(".fancybox-skin", d.wrap),
                        outer: f(".fancybox-outer", d.wrap),
                        inner: f(".fancybox-inner", d.wrap)
                    });
                    f.each(["Top", "Right", "Bottom", "Left"], function(g, h) {
                        d.skin.css("padding" + h, s(d.padding[g]))
                    });
                    b.trigger("onReady");
                    if (c === "inline" || c === "html") {
                        if (!d.content || !d.content.length) return b._error("content")
                    } else if (!e) return b._error("href");
                    if (c === "image") b._loadImage();
                    else if (c === "ajax") b._loadAjax();
                    else c === "iframe" ? b._loadIframe() : b._afterLoad()
                }
            },
            _error: function(a) {
                f.extend(b.coming, {
                    type: "html",
                    autoWidth: true,
                    autoHeight: true,
                    minWidth: 0,
                    minHeight: 0,
                    scrolling: "no",
                    hasError: a,
                    content: b.coming.tpl.error
                });
                b._afterLoad()
            },
            _loadImage: function() {
                var a = b.imgPreload = new Image;
                a.onload = function() {
                    this.onload = this.onerror = null;
                    b.coming.width = this.width / b.opts.pixelRatio;
                    b.coming.height = this.height / b.opts.pixelRatio;
                    b._afterLoad()
                };
                a.onerror = function() {
                    this.onload = this.onerror = null;
                    b._error("image")
                };
                a.src = b.coming.href;
                a.complete !== true && b.showLoading()
            },
            _loadAjax: function() {
                var a = b.coming;
                b.showLoading();
                b.ajaxLoad = f.ajax(f.extend({}, a.ajax, {
                    url: a.href,
                    error: function(d, e) {
                        b.coming && e !== "abort" ? b._error("ajax", d) : b.hideLoading()
                    },
                    success: function(d, e) {
                        if (e === "success") {
                            a.content = d;
                            b._afterLoad()
                        }
                    }
                }))
            },
            _loadIframe: function() {
                var a = b.coming,
                    d = f(a.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", r ? "auto" : a.iframe.scrolling).attr("src", a.href);
                f(a.wrap).bind("onReset", function() {
                    try {
                        f(this).find("iframe").hide().attr("src",
                            "//about:blank").end().empty()
                    } catch (e) {}
                });
                if (a.iframe.preload) {
                    b.showLoading();
                    d.one("load", function() {
                        f(this).data("ready", 1);
                        r || f(this).bind("load.fb", b.update);
                        f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
                        b._afterLoad()
                    })
                }
                a.content = d.appendTo(a.inner);
                a.iframe.preload || b._afterLoad()
            },
            _preloadImages: function() {
                var a = b.group,
                    d = b.current,
                    e = a.length,
                    c = d.preload ? Math.min(d.preload, e - 1) : 0,
                    g, h;
                for (h = 1; h <= c; h += 1) {
                    g = a[(d.index + h) % e];
                    if (g.type === "image" && g.href)(new Image).src =
                        g.href
                }
            },
            _afterLoad: function() {
                var a = b.coming,
                    d = b.current,
                    e, c, g, h, i;
                b.hideLoading();
                if (!(!a || b.isActive === false))
                    if (false === b.trigger("afterLoad", a, d)) {
                        a.wrap.stop(true).trigger("onReset").remove();
                        b.coming = null
                    } else {
                        if (d) {
                            b.trigger("beforeChange", d);
                            d.wrap.stop(true).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()
                        }
                        b.unbindEvents();
                        e = a.content;
                        c = a.type;
                        g = a.scrolling;
                        f.extend(b, {
                            wrap: a.wrap,
                            skin: a.skin,
                            outer: a.outer,
                            inner: a.inner,
                            current: a,
                            previous: d
                        });
                        h = a.href;
                        switch (c) {
                            case "inline":
                            case "ajax":
                            case "html":
                                if (a.selector) e =
                                    f("<div>").html(e).find(a.selector);
                                else if (D(e)) {
                                    e.data("fancybox-placeholder") || e.data("fancybox-placeholder", f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide());
                                    e = e.show().detach();
                                    a.wrap.bind("onReset", function() {
                                        f(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", false)
                                    })
                                }
                                break;
                            case "image":
                                e = a.tpl.image.replace("{href}", h);
                                break;
                            case "swf":
                                e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' +
                                    h + '"></param>';
                                i = "";
                                f.each(a.swf, function(j, k) {
                                    e += '<param name="' + j + '" value="' + k + '"></param>';
                                    i += " " + j + '="' + k + '"'
                                });
                                e += '<embed src="' + h + '" type="application/x-shockwave-flash" width="100%" height="100%"' + i + "></embed></object>"
                        }
                        D(e) && e.parent().is(a.inner) || a.inner.append(e);
                        b.trigger("beforeShow");
                        a.inner.css("overflow", g === "yes" ? "scroll" : g === "no" ? "hidden" : g);
                        b._setDimension();
                        b.reposition();
                        b.isOpen = false;
                        b.coming = null;
                        b.bindEvents();
                        if (b.isOpened) d.prevMethod && b.transitions[d.prevMethod]();
                        else f(".fancybox-wrap").not(a.wrap).stop(true).trigger("onReset").remove();
                        b.transitions[b.isOpened ? a.nextMethod : a.openMethod]();
                        b._preloadImages()
                    }
            },
            _setDimension: function() {
                var a = b.getViewport(),
                    d = 0,
                    e = false,
                    c = false;
                e = b.wrap;
                var g = b.skin,
                    h = b.inner,
                    i = b.current;
                c = i.width;
                var j = i.height,
                    k = i.minWidth,
                    m = i.minHeight,
                    p = i.maxWidth,
                    q = i.maxHeight,
                    Q = i.scrolling,
                    K = i.scrollOutside ? i.scrollbarWidth : 0,
                    t = i.margin,
                    v = l(t[1] + t[3]),
                    E = l(t[0] + t[2]),
                    M, w, H, y, x, F, N, z, I;
                e.add(g).add(h).width("auto").height("auto").removeClass("fancybox-tmp");
                t = l(g.outerWidth(true) - g.width());
                M = l(g.outerHeight(true) -
                    g.height());
                w = v + t;
                H = E + M;
                y = C(c) ? (a.w - w) * l(c) / 100 : c;
                x = C(j) ? (a.h - H) * l(j) / 100 : j;
                if (i.type === "iframe") {
                    I = i.content;
                    if (i.autoHeight && I.data("ready") === 1) try {
                        if (I[0].contentWindow.document.location) {
                            h.width(y).height(9999);
                            F = I.contents().find("body");
                            K && F.css("overflow-x", "hidden");
                            x = F.outerHeight(true)
                        }
                    } catch (R) {}
                } else if (i.autoWidth || i.autoHeight) {
                    h.addClass("fancybox-tmp");
                    i.autoWidth || h.width(y);
                    i.autoHeight || h.height(x);
                    if (i.autoWidth) y = h.width();
                    if (i.autoHeight) x = h.height();
                    h.removeClass("fancybox-tmp")
                }
                c =
                    l(y);
                j = l(x);
                z = y / x;
                k = l(C(k) ? l(k, "w") - w : k);
                p = l(C(p) ? l(p, "w") - w : p);
                m = l(C(m) ? l(m, "h") - H : m);
                q = l(C(q) ? l(q, "h") - H : q);
                F = p;
                N = q;
                if (i.fitToView) {
                    p = Math.min(a.w - w, p);
                    q = Math.min(a.h - H, q)
                }
                w = a.w - v;
                E = a.h - E;
                if (i.aspectRatio) {
                    if (c > p) {
                        c = p;
                        j = l(c / z)
                    }
                    if (j > q) {
                        j = q;
                        c = l(j * z)
                    }
                    if (c < k) {
                        c = k;
                        j = l(c / z)
                    }
                    if (j < m) {
                        j = m;
                        c = l(j * z)
                    }
                } else {
                    c = Math.max(k, Math.min(c, p));
                    if (i.autoHeight && i.type !== "iframe") {
                        h.width(c);
                        j = h.height()
                    }
                    j = Math.max(m, Math.min(j, q))
                }
                if (i.fitToView) {
                    h.width(c).height(j);
                    e.width(c + t);
                    a = e.width();
                    v = e.height();
                    if (i.aspectRatio)
                        for (;
                            (a >
                                w || v > E) && c > k && j > m;) {
                            if (d++ > 19) break;
                            j = Math.max(m, Math.min(q, j - 10));
                            c = l(j * z);
                            if (c < k) {
                                c = k;
                                j = l(c / z)
                            }
                            if (c > p) {
                                c = p;
                                j = l(c / z)
                            }
                            h.width(c).height(j);
                            e.width(c + t);
                            a = e.width();
                            v = e.height()
                        } else {
                            c = Math.max(k, Math.min(c, c - (a - w)));
                            j = Math.max(m, Math.min(j, j - (v - E)))
                        }
                }
                if (K && Q === "auto" && j < x && c + t + K < w) c += K;
                h.width(c).height(j);
                e.width(c + t);
                a = e.width();
                v = e.height();
                e = (a > w || v > E) && c > k && j > m;
                c = i.aspectRatio ? c < F && j < N && c < y && j < x : (c < F || j < N) && (c < y || j < x);
                f.extend(i, {
                    dim: {
                        width: s(a),
                        height: s(v)
                    },
                    origWidth: y,
                    origHeight: x,
                    canShrink: e,
                    canExpand: c,
                    wPadding: t,
                    hPadding: M,
                    wrapSpace: v - g.outerHeight(true),
                    skinSpace: g.height() - j
                });
                !I && i.autoHeight && j > m && j < q && !c && h.height("auto")
            },
            _getPosition: function(a) {
                var d = b.current,
                    e = b.getViewport(),
                    c = d.margin,
                    g = b.wrap.width() + c[1] + c[3],
                    h = b.wrap.height() + c[0] + c[2];
                c = {
                    position: "absolute",
                    top: c[0],
                    left: c[3]
                };
                if (d.autoCenter && d.fixed && !a && h <= e.h && g <= e.w) c.position = "fixed";
                else if (!d.locked) {
                    c.top += e.y;
                    c.left += e.x
                }
                c.top = s(Math.max(c.top, c.top + (e.h - h) * d.topRatio));
                c.left = s(Math.max(c.left, c.left + (e.w -
                    g) * d.leftRatio));
                return c
            },
            _afterZoomIn: function() {
                var a = b.current;
                if (a) {
                    b.isOpen = b.isOpened = true;
                    b.wrap.css("overflow", "visible").addClass("fancybox-opened");
                    b.update();
                    if (a.closeClick || a.nextClick && b.group.length > 1) b.inner.css("cursor", "pointer").bind("click.fb", function(d) {
                        if (!f(d.target).is("a") && !f(d.target).parent().is("a")) {
                            d.preventDefault();
                            b[a.closeClick ? "close" : "next"]()
                        }
                    });
                    a.closeBtn && f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb", function(d) {
                        d.preventDefault();
                        b.close()
                    });
                    if (a.arrows &&
                        b.group.length > 1) {
                        if (a.loop || a.index > 0) f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev);
                        if (a.loop || a.index < b.group.length - 1) f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)
                    }
                    b.trigger("afterShow");
                    if (!a.loop && a.index === a.group.length - 1) b.play(false);
                    else if (b.opts.autoPlay && !b.player.isActive) {
                        b.opts.autoPlay = false;
                        b.play()
                    }
                }
            },
            _afterZoomOut: function(a) {
                a = a || b.current;
                f(".fancybox-wrap").trigger("onReset").remove();
                f.extend(b, {
                    group: {},
                    opts: {},
                    router: false,
                    current: null,
                    isActive: false,
                    isOpened: false,
                    isOpen: false,
                    isClosing: false,
                    wrap: null,
                    skin: null,
                    outer: null,
                    inner: null
                });
                b.trigger("afterClose", a)
            }
        });
        b.transitions = {
            getOrigPosition: function() {
                var a = b.current,
                    d = a.element,
                    e = a.orig,
                    c = {},
                    g = 50,
                    h = 50,
                    i = a.hPadding,
                    j = a.wPadding,
                    k = b.getViewport();
                if (!e && a.isDom && d.is(":visible")) {
                    e = d.find("img:first");
                    e.length || (e = d)
                }
                if (D(e)) {
                    c = e.offset();
                    if (e.is("img")) {
                        g = e.outerWidth();
                        h = e.outerHeight()
                    }
                } else {
                    c.top = k.y + (k.h - h) * a.topRatio;
                    c.left = k.x + (k.w - g) * a.leftRatio
                }
                if (b.wrap.css("position") === "fixed" ||
                    a.locked) {
                    c.top -= k.y;
                    c.left -= k.x
                }
                return c = {
                    top: s(c.top - i * a.topRatio),
                    left: s(c.left - j * a.leftRatio),
                    width: s(g + j),
                    height: s(h + i)
                }
            },
            step: function(a, d) {
                var e, c, g = d.prop;
                c = b.current;
                var h = c.wrapSpace,
                    i = c.skinSpace;
                if (g === "width" || g === "height") {
                    e = d.end === d.start ? 1 : (a - d.start) / (d.end - d.start);
                    if (b.isClosing) e = 1 - e;
                    c = g === "width" ? c.wPadding : c.hPadding;
                    c = a - c;
                    b.skin[g](l(g === "width" ? c : c - h * e));
                    b.inner[g](l(g === "width" ? c : c - h * e - i * e))
                }
            },
            zoomIn: function() {
                var a = b.current,
                    d = a.pos,
                    e = a.openEffect,
                    c = e === "elastic",
                    g = f.extend({
                            opacity: 1
                        },
                        d);
                delete g.position;
                if (c) {
                    d = this.getOrigPosition();
                    if (a.openOpacity) d.opacity = 0.1
                } else if (e === "fade") d.opacity = 0.1;
                b.wrap.css(d).animate(g, {
                    duration: e === "none" ? 0 : a.openSpeed,
                    easing: a.openEasing,
                    step: c ? this.step : null,
                    complete: b._afterZoomIn
                })
            },
            zoomOut: function() {
                var a = b.current,
                    d = a.closeEffect,
                    e = d === "elastic",
                    c = {
                        opacity: 0.1
                    };
                if (e) {
                    c = this.getOrigPosition();
                    if (a.closeOpacity) c.opacity = 0.1
                }
                b.wrap.animate(c, {
                    duration: d === "none" ? 0 : a.closeSpeed,
                    easing: a.closeEasing,
                    step: e ? this.step : null,
                    complete: b._afterZoomOut
                })
            },
            changeIn: function() {
                var a = b.current,
                    d = a.nextEffect,
                    e = a.pos,
                    c = {
                        opacity: 1
                    },
                    g = b.direction,
                    h;
                e.opacity = 0.1;
                if (d === "elastic") {
                    h = g === "down" || g === "up" ? "top" : "left";
                    if (g === "down" || g === "right") {
                        e[h] = s(l(e[h]) - 200);
                        c[h] = "+=200px"
                    } else {
                        e[h] = s(l(e[h]) + 200);
                        c[h] = "-=200px"
                    }
                }
                d === "none" ? b._afterZoomIn() : b.wrap.css(e).animate(c, {
                    duration: a.nextSpeed,
                    easing: a.nextEasing,
                    complete: b._afterZoomIn
                })
            },
            changeOut: function() {
                var a = b.previous,
                    d = a.prevEffect,
                    e = {
                        opacity: 0.1
                    },
                    c = b.direction;
                if (d === "elastic") e[c === "down" || c === "up" ?
                    "top" : "left"] = (c === "up" || c === "left" ? "-" : "+") + "=200px";
                a.wrap.animate(e, {
                    duration: d === "none" ? 0 : a.prevSpeed,
                    easing: a.prevEasing,
                    complete: function() {
                        f(this).trigger("onReset").remove()
                    }
                })
            }
        };
        b.helpers.overlay = {
            defaults: {
                closeClick: true,
                speedOut: 200,
                showEarly: true,
                css: {},
                locked: !r,
                fixed: true
            },
            overlay: null,
            fixed: false,
            el: f("html"),
            create: function(a) {
                a = f.extend({}, this.defaults, a);
                this.overlay && this.close();
                this.overlay = f('<div class="fancybox-overlay"></div>').appendTo(b.coming ? b.coming.parent : a.parent);
                this.fixed = false;
                if (a.fixed && b.defaults.fixed) {
                    this.overlay.addClass("fancybox-overlay-fixed");
                    this.fixed = true
                }
            },
            open: function(a) {
                var d = this;
                a = f.extend({}, this.defaults, a);
                this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a);
                if (!this.fixed) {
                    n.bind("resize.overlay", f.proxy(this.update, this));
                    this.update()
                }
                a.closeClick && this.overlay.bind("click.overlay", function(e) {
                    if (f(e.target).hasClass("fancybox-overlay")) {
                        b.isActive ? b.close() : d.close();
                        return false
                    }
                });
                this.overlay.css(a.css).show()
            },
            close: function() {
                var a, d;
                n.unbind("resize.overlay");
                if (this.el.hasClass("fancybox-lock")) {
                    f(".fancybox-margin").removeClass("fancybox-margin");
                    a = n.scrollTop();
                    d = n.scrollLeft();
                    this.el.removeClass("fancybox-lock");
                    n.scrollTop(a).scrollLeft(d)
                }
                f(".fancybox-overlay").remove().hide();
                f.extend(this, {
                    overlay: null,
                    fixed: false
                })
            },
            update: function() {
                var a = "100%",
                    d;
                this.overlay.width(a).height("100%");
                if (L) {
                    d = Math.max(J.documentElement.offsetWidth, J.body.offsetWidth);
                    if (o.width() > d) a = o.width()
                } else if (o.width() >
                    n.width()) a = o.width();
                this.overlay.width(a).height(o.height())
            },
            onReady: function(a, d) {
                var e = this.overlay;
                f(".fancybox-overlay").stop(true, true);
                e || this.create(a);
                if (a.locked && this.fixed && d.fixed) {
                    if (!e) this.margin = o.height() > n.height() ? f("html").css("margin-right").replace("px", "") : false;
                    d.locked = this.overlay.append(d.wrap);
                    d.fixed = false
                }
                a.showEarly === true && this.beforeShow.apply(this, arguments)
            },
            beforeShow: function(a, d) {
                var e, c;
                if (d.locked) {
                    if (this.margin !== false) {
                        f("*").filter(function() {
                            return f(this).css("position") ===
                                "fixed" && !f(this).hasClass("fancybox-overlay") && !f(this).hasClass("fancybox-wrap")
                        }).addClass("fancybox-margin");
                        this.el.addClass("fancybox-margin")
                    }
                    e = n.scrollTop();
                    c = n.scrollLeft();
                    this.el.addClass("fancybox-lock");
                    n.scrollTop(e).scrollLeft(c)
                }
                this.open(a)
            },
            onUpdate: function() {
                this.fixed || this.update()
            },
            afterClose: function(a) {
                this.overlay && !b.coming && this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this))
            }
        };
        b.helpers.title = {
            defaults: {
                type: "float",
                position: "bottom"
            },
            beforeShow: function(a) {
                var d =
                    b.current,
                    e = d.title,
                    c = a.type;
                if (f.isFunction(e)) e = e.call(d.element, d);
                if (!(!u(e) || f.trim(e) === "")) {
                    d = f('<div class="fancybox-title fancybox-title-' + c + '-wrap">' + e + "</div>");
                    switch (c) {
                        case "inside":
                            c = b.skin;
                            break;
                        case "outside":
                            c = b.wrap;
                            break;
                        case "over":
                            c = b.inner;
                            break;
                        default:
                            c = b.skin;
                            d.appendTo("body");
                            L && d.width(d.width());
                            d.wrapInner('<span class="child"></span>');
                            b.current.margin[2] += Math.abs(l(d.css("margin-bottom")))
                    }
                    d[a.position === "top" ? "prependTo" : "appendTo"](c)
                }
            }
        };
        f.fn.fancybox = function(a) {
            var d,
                e = f(this),
                c = this.selector || "",
                g = function(h) {
                    var i = f(this).blur(),
                        j = d,
                        k, m;
                    if (!(h.ctrlKey || h.altKey || h.shiftKey || h.metaKey) && !i.is(".fancybox-wrap")) {
                        k = a.groupAttr || "data-fancybox-group";
                        m = i.attr(k);
                        if (!m) {
                            k = "rel";
                            m = i.get(0)[k]
                        }
                        if (m && m !== "" && m !== "nofollow") {
                            i = c.length ? f(c) : e;
                            i = i.filter("[" + k + '="' + m + '"]');
                            j = i.index(this)
                        }
                        a.index = j;
                        b.open(i, a) !== false && h.preventDefault()
                    }
                };
            a = a || {};
            d = a.index || 0;
            !c || a.live === false ? e.unbind("click.fb-start").bind("click.fb-start", g) : o.undelegate(c, "click.fb-start").delegate(c +
                ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", g);
            this.filter("[data-fancybox-start=1]").trigger("click");
            return this
        };
        o.ready(function() {
            var a, d;
            if (f.scrollbarWidth === B) f.scrollbarWidth = function() {
                var e = f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                    c = e.children();
                c = c.innerWidth() - c.height(99).innerWidth();
                e.remove();
                return c
            };
            if (f.support.fixedPosition === B) f.support.fixedPosition = function() {
                var e = f('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
                    c = e[0].offsetTop === 20 || e[0].offsetTop === 15;
                e.remove();
                return c
            }();
            f.extend(b.defaults, {
                scrollbarWidth: f.scrollbarWidth(),
                fixed: f.support.fixedPosition,
                parent: f("body")
            });
            a = f(A).width();
            P.addClass("fancybox-lock-test");
            d = f(A).width();
            P.removeClass("fancybox-lock-test");
            f("<style type='text/css'>.fancybox-margin{margin-right:" + (d - a) + "px;}</style>").appendTo("head")
        })
    }(window, document, O)
};
window.BIBLESEARCH = window.BIBLESEARCH || {};
window.BIBLESEARCH.highlighterVersions = {
    "gil-KNVB": "",
    "nod-NODLN": "",
    "kwf-KWF": "",
    "tam-TAM": "",
    "aai-AAINT": "AAINT",
    "aak-AAK": "AAK",
    "lam-LMB": "AAL59",
    "aau-AAUNT": "AAUNT",
    "aaz-AAZDBL": "AAZDBL",
    "afr-ABA": "ABA",
    "gla-ABG1992": "ABG1992",
    "gla-ABIG": "ABIG",
    "cor-ABK": "ABK",
    "gle-ABN": "ABN",
    "abt-ABTNT": "ABTNT",
    "abt-ABTWNT": "ABTWNT",
    "abx-ABXNT": "ABXNT",
    "aby-ABYNT": "ABYNT",
    "aca-ACAPOR": "ACAPOR",
    "acd-ACD": "ACD",
    "acf-ACFNT": "ACFNT",
    "ach-B85": "ACO85",
    "acr-ACRNNT": "ACRNNT",
    "acr-ACRNT": "ACRNT",
    "acr-ACRTNT": "ACRTNT",
    "acu-ACUNT": "ACUNT",
    "adj-ADJ": "ADJ",
    "adz-ADZGEN": "ADZ",
    "aer-AER": "AER",
    "aeu-AEU": "AEU",
    "aey-AEYNTPO": "AEYNTPO",
    "afr-AFR53": "AFR53",
    "afr-AFR83": "AFR83",
    "agd-AGDNT": "AGDNT",
    "agg-AGGNT": "AGGNT",
    "agm-AGMNT": "AGMNT",
    "agn-AGNNT": "AGNNT",
    "agr-AGRNT": "AGRNT",
    "agt-AGTNT": "AGTNT",
    "agu-AGUBI": "AGUBI",
    "agu-AGUNT": "AGUNT",
    "ahk-AHK": "AHK",
    "aia-AIA": "AIA",
    "aii-AII": "AII",
    "ain-AINU": "AINU",
    "msy-ARUNT": "AKAR AGHUIM",
    "ake-AKENT": "AKENT",
    "spm-AKGPOR10": "AKGPOR10",
    "akh-AKHNT": "AKHNT",
    "dyu-JULDC08": "AKKDC08",
    "akp-AKP": "AKP",
    "msc-GHBS": "AKS",
    "als-AL1827": "AL1827",
    "als-AL1884": "AL1884",
    "aln-ALGKK72": "ALGKK72",
    "alq-ALGNT": "ALGNT",
    "alb-ALNT": "ALNT",
    "alp-ALP": "ALP",
    "alp-ALPNT": "ALPNT",
    "ame-AMENT": "AMENT",
    "amk-AMKNT": "AMKNT",
    "amm-AMMNT": "AMMNT",
    "amn-AMNNT": "AMNNT",
    "eng-AMP": "AMP",
    "amp-AMPNT": "AMPNT",
    "amr-AMRNT": "AMRNT",
    "amu-AMUNT": "AMUNT",
    "njo-ANB10": "ANB10",
    "aji-ANT": "ANT",
    "anv-ANVNT": "ANVNT",
    "any-ANYNT": "ANYNT",
    "aoj-AOJFNT": "AOJFNT",
    "aoj-AOJMNT": "AOJMNT",
    "aom-AOM": "AOM",
    "aom-AOMNT": "AOMNT",
    "ape-APEA": "APEA",
    "ape-APEANT": "APEANT",
    "ape-APEB": "APEB",
    "ape-APEBNT": "APEBNT",
    "apn-APNNT": "APNNT",
    "apr-APR": "APR",
    "apu-APUNT": "APUNT",
    "apw-APWNT": "APWNT",
    "apy-APYB": "APYB",
    "apy-APYNT": "APYNT",
    "apz-APZ": "APZ",
    "apz-APZNT": "APZNT",
    "por-ARA": "ARA",
    "por-ARC": "ARC",
    "por-ARC09": "ARC09",
    "rmn-ARL1912": "ARL1912",
    "arl-ARLNT": "ARLNT",
    "arn-ARNNT": "ARNNT",
    "rup-AROM1889": "AROM",
    "arp-ARP": "ARP",
    "rup-ARUM": "ARUM",
    "msy-ARUNT04": "ARUNT04",
    "asg-ASG": "ASG",
    "asm-ASM": "ASM",
    "aso-ASONT": "ASONT",
    "eng-ASV": "ASV",
    "aeb-AT": "AT",
    "ata-ATA": "ATA",
    "ata-ATANTPO": "ATANTPO",
    "atb-ATBNT": "ATBNT",
    "atd-ATDNT": "ATDNT",
    "teo-B61": "Ate61",
    "gla-ATN2017": "ATN2017",
    "att-ATT": "ATT",
    "auc-AUCNT": "AUCNT",
    "aui-AUI": "AUI",
    "auy-AUYNT": "AUYNT",
    "arb-AVD": "AVD",
    "arb-AVDDV": "AVDDV",
    "avt-AVTNT": "AVTNT",
    "avu-AVU": "AVU",
    "awb-AWBNT": "AWBNT",
    "awx-AWX": "AWX",
    "ayr-AYOP": "AYOP",
    "azg-AZGNT": "AZGNT",
    "azz-AZZNT": "AZZNT",
    "swe-B2000": "B2000",
    "swe-B2000SE": "B2000SE",
    "mpg-AB": "BA",
    "ksf-BAFNT": "BAFNT",
    "ban-BAN": "BAN",
    "bao-BAONT": "BAONT",
    "bba-BAR": "BAR",
    "bav-BAV": "BAV",
    "leh-LEN03": "BB03",
    "bbb-BBBNTPO": "BBBNTPO",
    "bbc-BBC": "BBC",
    "bis-BBR": "BBR",
    "bbr-BBRNT": "BBRNT",
    "bch-BCHNTPO": "BCHNTPO",
    "cat-BCI": "BCI",
    "mya-BCL": "BCL",
    "bgr-BCLBV": "BCLBV",
    "cym-BCND": "BCND",
    "bco-BCO": "BCO",
    "bcw-BCW": "BCW",
    "bdd-BDDNT": "BDDNT",
    "bdh-BDH": "BDH",
    "dtp-TDVR": "BDK",
    "bea-BEA1886": "BEA1886",
    "gle-BEDELL": "BEDELL",
    "bef-BEFNT": "BEFNT",
    "giz-BEGDC": "BEGDC",
    "ben-BEN2017": "BEN2017",
    "bex-BEX": "BEX",
    "bgs-BGSNTPO": "BGSNTPO",
    "bgt-BGT": "BGT",
    "bhl-BHL": "BHL",
    "bhl-BHLNT": "BHLNT",
    "swh-BHN": "BHN",
    "spa-BHTI": "BHTI",
    "bib-BIB": "BIB",
    "glv-BIB1819": "BIB1819",
    "big-BIGNT": "BIGNT",
    "kdi-KBT": "BILK",
    "bim-BIM": "BIM",
    "ind-BIMK": "BIMK",
    "ron-BINT2010": "BINT2010",
    "kin-BIRD": "BIRD",
    "mya-BJB": "BJB",
    "bjp-BJP": "BJP",
    "bjr-BJRNT": "BJRNT",
    "bjv-BJV": "BJV",
    "bjv-BJVNT": "BJVNT",
    "iba-TDIR": "BK",
    "kia-KB": "BK",
    "bqc-BKB": "BKB",
    "bkd-BKD": "BKD",
    "bkd-BKDNT": "BKDNT",
    "bkq-BKQNT": "BKQNT",
    "nya-NYCB92": "BL92",
    "bla-BLA": "BLA",
    "spa-BLP": "BLP",
    "spa-BLPH": "BLPH",
    "blw-BLWNT": "BLWNT",
    "blz-BLZNT": "BLZNT",
    "yor-YCE": "BM",
    "myb-MB80": "BM80",
    "msa-TMVRD": "BMDC",
    "bmh-BMHNT": "BMHNT",
    "bmk-BMK": "BMK",
    "mqy-BMNT": "BMNT",
    "bmr-BMRNT": "BMRNT",
    "mse-MSE": "BMS",
    "bmu-BMUNTPO": "BMUNTPO",
    "sba-NB89": "BN89",
    "cym-BNET": "BNET",
    "bnp-BNPNTPO": "BNPNTPO",
    "boa-BOANT": "BOANT",
    "boj-BOJ": "BOJ",
    "boj-BOJNT": "BOJNT",
    "bon-BONNT": "BONNT",
    "rme-BOS": "BOS",
    "bov-BOV": "BOV",
    "box-BOXNT": "BOXNT",
    "pap-PBDC13": "BPKD13",
    "bpr-BPRNT": "BPRNT",
    "bps-BPSNT": "BPSNT",
    "por-BPT09": "BPT09",
    "bcl-BPV": "BPV",
    "bqj-BQJ": "BQJ",
    "bru-BRU": "BRU",
    "bsc-BSC": "BSC",
    "mwm-SBDC": "BSDC",
    "crs-BSK": "BSK",
    "bsn-BSNNT": "BSNNT",
    "bss-BSSNT": "BSSNT",
    "spa-BTI": "BTI",
    "bts-BTS": "BTS",
    "vie-VB1925": "BTT",
    "btx-BTX": "BTX",
    "buk-BUKNT": "BUKNT",
    "bum-BULDCB": "BUM09",
    "bvd-BVD": "BVD",
    "bvr-BVR": "BVR",
    "bwd-BWD": "BWD",
    "cym-BWM": "BWM",
    "loz-LOZI09": "BYK09",
    "byr-BYRNTPO": "BYRNTPO",
    "kin-BYSB": "BYSB",
    "byx-BYX": "BYX",
    "byx-BYXNTPO": "BYXNTPO",
    "bzd-BZDNT": "BZDNT",
    "bzd-BZDNTPO": "BZDNTPO",
    "bzh-BZHNT": "BZHNT",
    "bzi-BZI": "BZI",
    "bzj-BZJNT": "BZJNT",
    "caa-CAANT": "CAANT",
    "cab-CABNT": "CABNT",
    "caf-CAFNT": "CAFNT",
    "cak-CAKCNT": "CAKCNT",
    "cak-CAKENT": "CAKENT",
    "cak-CAKSMNT": "CAKSMNT",
    "cak-CAKSNT": "CAKSNT",
    "cak-CAKNT": "CAKSSNT",
    "cak-CAKWNT": "CAKWNT",
    "cak-CAK": "CAKX",
    "cak-CAKYNT": "CAKYNT",
    "rmq-CALO1837": "CALO1837",
    "rmq-CALO1872": "CALO1872",
    "cao-CAONT": "CAONT",
    "cap-CAPNT": "CAPNT",
    "car-CARNT": "CARNT",
    "rus-CASS": "CASS",
    "cav-CAVNT": "CAVNT",
    "cax-CAXNT": "CAXNT",
    "cbc-CBCNT": "CBCNT",
    "cbi-CBINTPO": "CBINTPO",
    "cbk-CBKNT": "CBKNT",
    "cbr-CBRNT": "CBRNT",
    "cbs-CBSNT": "CBSNT",
    "cbt-CBTNTPO": "CBTNT",
    "cbu-CBUNT": "CBUNT",
    "cbv-CBVNT": "CBVNT",
    "ilb-INT2015": "CC2015",
    "ilb-NTI": "CCI",
    "cco-CCONT": "CCONT",
    "cek-CEK": "CEK",
    "eng-CEV": "CEV",
    "eng-CEVD": "CEVD",
    "eng-CEVUK": "CEVUK",
    "cgc-CGCNT": "CGCNT",
    "chd-CHDNT": "CHDNT",
    "chf-CHFNT": "CHFNT",
    "cap-CHIPBO": "CHIPBO",
    "cax-CHIQB": "CHIQB",
    "chq-CHQNT": "CHQNT",
    "slv-CHR": "CHR",
    "crt-CHRNT": "CHRNT",
    "cho-CHTW": "CHTW",
    "chz-CHZNTPS": "CHZNTPS",
    "rar-CIMRNT": "CIMRNT",
    "cjo-CJONT": "CJONT",
    "cjv-CJVNT": "CJVNT",
    "cle-CLENT": "CLENT",
    "clu-CLUNT": "CLUNT",
    "cme-CMENT": "CMENT",
    "cmo-CMOK": "CMOK",
    "cmo-CMOL": "CMOL",
    "cni-CNINT": "CNINT",
    "cnl-CNLNT": "CNLNT",
    "cnt-CNTNT": "CNTNT",
    "coe-COE": "COE",
    "cof-COFNT": "COFNT",
    "cok-COK": "COK",
    "glv-CON1810": "CON1810",
    "con-CONNTPO": "CONNTPO",
    "cot-COTNT": "COTNT",
    "cpa-CPANT": "CPANT",
    "cpb-CPBNT": "CPBNT",
    "cpc-CPCNT": "CPCNT",
    "cpu-CPUNT": "CPUNT",
    "cpy-CPY": "cpyB",
    "quy-QAB12": "CQ12",
    "crn-CRNNT": "CRNANT",
    "crx-CRXNTPO": "CRXNTPO",
    "csk-CSK": "CSK",
    "cac-CSM": "CSM",
    "cso-CSONT": "CSONT",
    "cac-CSS": "CSS",
    "cta-CTANT": "CTANT",
    "ctp-CTPNT": "CTPNT",
    "ctu-CTU": "CTU",
    "spa-CTU": "CTU",
    "ctu-CTUBI": "CTUBI",
    "ctu-CTUNT": "CTUNT",
    "cub-CUBNT": "CUBNT",
    "cuc-CUCNT": "CUCNT",
    "cui-CUI": "CUI",
    "cui-CUINT": "CUINT",
    "cuk-CUK": "CUKB",
    "cuk-CUKNT": "CUKNT",
    "cul-CULNT": "CULNT",
    "cmn-CUNP": "CUNP",
    "zho-CUNP": "CUNP",
    "zho-CUNPSS": "CUNPSS",
    "cut-CUTNT": "CUTNT",
    "cux-CUXNT": "CUXNT",
    "cya-CYANT": "CYANT",
    "daa-DAANT": "DAANT",
    "dad-DADNT": "DADNT",
    "dah-DAHNT": "DAHNT",
    "eng-DARBY": "DARBY",
    "dhm-DBNT": "DBNT",
    "ded-DED": "DED",
    "des-DES": "DES",
    "dgc-DGCNT": "DGCNT",
    "dgz-DGZNT": "DGZNT",
    "dhg-DHG": "dhgW",
    "spa-DHH": "DHH",
    "spa-DHHE": "DHH",
    "did-DIDNTPO": "DIDNTPO",
    "plt-DIEM": "DIEM",
    "dik-DIK": "DIK",
    "dik-DIKNT": "DIKNT",
    "dis-DIMA": "DIMA",
    "djk-DJKNT": "DJKNT",
    "djr-DJNT": "DJNT",
    "gud-DNT": "DNT",
    "dga-DNTTP": "DNTTP",
    "ita-DO885": "DO885",
    "dob-DOBNT": "DOBNT",
    "dgr-DOGNT": "DOGNT",
    "eng-DRC1752": "DRC1752",
    "due-DUE": "DUE",
    "duo-DUO": "DUONT",
    "dwr-DWNT": "DWNT",
    "dww-DWW": "DWW",
    "dww-DWWNT": "DWWNT",
    "dyi-DYI": "DYI",
    "dyu-DYU": "DYU",
    "eus-EAB": "EAB",
    "ike-EAIB": "EAIB",
    "glv-EAN1936": "EAN1936",
    "ebk-EBKNT": "EBKNT",
    "eka-EKANT": "EKANT",
    "slv-EKU": "EKU",
    "mwl-MG14": "EM14",
    "emi-EMI": "EMI",
    "emi-EMIPOR": "EMIPOR",
    "emp-EMPNTPO": "EMPNTPO",
    "leg-ENHL": "ENHL",
    "eri-ERI": "ERI",
    "ese-ESENT": "ESENT",
    "esk-ESKNT": "ESKNT",
    "epo-ESP": "ESP",
    "eng-ESV": "ESV",
    "eng-ESVUK16": "ESVUK16",
    "etr-ETR": "ETR",
    "etu-ETUNT": "ETUNT",
    "eza-EZAB": "EZAB",
    "faa-FAANT": "FAANT",
    "fad-FAD": "FAD",
    "fai-FAI": "FAI",
    "fai-FAINT": "FAINT",
    "far-FAR": "FAR",
    "fao-FB": "FB",
    "fub-FBDC": "FBDC",
    "fuh-FBFNT": "FBFNT",
    "eng-FBV": "FBV",
    "cfm-FCL": "FCL",
    "ffm-FFMNT": "FFMNT",
    "fij-FNV": "FNV",
    "fij-FNVDC": "FNVDC",
    "fon-FON": "FON",
    "for-FORNT": "FORNT",
    "fij-FOV": "FOV",
    "fra-FRC97": "FRC97",
    "fuq-FUQ": "FUQ",
    "fuv-FUVNT": "FUVNT",
    "grt-GAB": "GAB",
    "gah-GAHNT": "GAHNT",
    "gam-GAMWBT": "GAM",
    "gnb-GANG": "GANG",
    "gaw-GAWNT": "GAWNT",
    "gya-GB11": "GB11",
    "gug-GDC2006": "GDC2006",
    "gde-GDE": "GDE",
    "gdg-GDG": "GDG",
    "gdn-GDNNT": "GDNNT",
    "gdr-GDRNT": "GDRNT",
    "gfk-GFK": "GFK",
    "gfk-GFKNT": "GFKNT",
    "glk-GLK": "GHB",
    "ghs-GHSNT": "GHSNT",
    "gla-GLD": "GLD",
    "nse-GMN": "GMN",
    "gng-GNGNT": "GNGNT",
    "bbj-GNT": "GNT",
    "eng-GNTD": "GNTD",
    "eng-GNTUK": "GNTUK",
    "gnw-GNWBL": "GNWBL",
    "gnw-GNWNT": "GNWNT",
    "gqr-GQRNT": "GQRNT",
    "gug-GRN1913": "GRN1913",
    "tod-GS": "GS",
    "gui-GUABD": "GUABD",
    "gub-GUBBI": "GUBBI",
    "guc-GUC": "GUC",
    "nrf-GUE1863": "GUE1863",
    "guh-GUHNT": "GUHNT",
    "gui-GUINT": "GUINT",
    "guj-GUJ": "GUJ",
    "gvl-GUL": "GUL",
    "gul-GUL": "GUL",
    "gum-GUM": "GUM",
    "gun-GUNNT": "GUNNT",
    "guo-GUONT": "GUONT",
    "gur-GUR": "GUR",
    "rmn-GURB1936": "GURB1936",
    "gvc-GVCNT": "GVCNT",
    "gvf-GVFNT": "GVFNT",
    "ell-GVNT": "GVNT",
    "eng-GWC": "GWC",
    "gwi-GWINT": "GWINT",
    "gym-GYMNT": "GYMNT",
    "gyr-GYOB": "GYOB",
    "gyr-GYRNT": "GYRNT",
    "hag-HAG": "HAG",
    "hau-HAU": "HAU",
    "hnj-HBB": "HBB",
    "hch-HCHNT": "HCHNT",
    "cnh-HCL": "HCL",
    "kdh-KDH": "HDH",
    "heg-HEGNTPO": "HEGNTPO",
    "hix-HIXNT": "HIXNT",
    "hla-HLA": "HLA",
    "hla-HLANT": "HLANT",
    "hnj-HMOBSV": "HMOBSV",
    "mww-HMOWSV": "HMOWSV",
    "hns-HNSNT": "HNSNT",
    "jra-JRAB": "HOAP",
    "hop-HOPNT": "HOPNT",
    "hot-HOT": "HOT",
    "bcc-HPKB": "HPKB",
    "bcc-BCC": "HPKB_A",
    "hra-HRAN": "HRAN",
    "heb-HRNT": "HRNT",
    "hrv-HRS07": "HRS07",
    "hto-HTONT": "HTONT",
    "hub-HUBNT": "HUBNT",
    "hun-HUNB": "HUNB",
    "hun-HUNK": "HUNK",
    "hus-HUSNT": "HUSNT",
    "huu-HUUNT": "HUUNT",
    "huv-HUVNT": "HUVNT",
    "mww-HWB": "HWB",
    "hwc-HWCNT": "HWCNT",
    "ian-IANNT": "IANNT",
    "toi-TONGA63": "IBBAIB63",
    "ita-ICL00": "ICL00",
    "ifa-IFA": "IFA",
    "ife-IFE": "IFE",
    "ifu-IFU": "IFU",
    "ify-IFY": "IFY",
    "ign-IGB": "IGB",
    "ibo-IGBOB": "IGBOB",
    "ign-IGNNT": "IGNNT",
    "ikk-IKKNT": "IKKNT",
    "ikw-IKWNT": "IKWNT",
    "bem-RBB14": "ILL14",
    "bem-RBB15": "ILL15",
    "imo-IMONT": "IMONT",
    "ptu-INABAM": "INABAM",
    "inb-INB": "INB",
    "ino-INONT": "INONT",
    "sus-SNT": "INYILA",
    "iou-IOUNTPO": "IOUNTPO",
    "ipi-IPINT": "IPINT",
    "iqw-IQW": "IQW",
    "isd-ISD": "ISD",
    "ium-IUMILAO": "IUMILAO",
    "ium-IUMINOR": "IUMINOR",
    "ium-IUMINR": "IuMiNR",
    "ium-IUMITH": "IuMiTH",
    "ivb-IVB": "IVBPOTNT",
    "ivv-IVV": "IVV",
    "iws-IWSNT": "IWSNT",
    "ixl-IXL": "IXL",
    "ixl-IXLCNT": "IXLCNT",
    "ixl-IXLNNT": "IXLNNT",
    "izz-IZZB": "IZZB",
    "jaa-JAA": "JAA",
    "jac-JACNT": "JACNT",
    "jav-JAV": "JAV",
    "kac-JCLB": "JCLB",
    "bre-JEN1897": "JEN1897",
    "jic-JICNT": "JICNT",
    "jiv-JIVNT": "JIVNT",
    "jam-JNT": "JNT",
    "jra-JNT": "JNT",
    "slv-SJV": "JUB",
    "jvn-JVNNT": "JVNNT",
    "kbp-KABI": "KABI",
    "rad-RADB": "KADB",
    "kaj-KAJNT": "KAJNT",
    "kqf-KAKABAI": "KAKABAI",
    "rmy-KALD77": "KALD77",
    "rmy-KALDRUT": "KALDRUT",
    "kan-KAN": "KAN",
    "kjb-KANJ": "KANJ",
    "kaq-KAQNT": "KAQNT",
    "mjw-KARB": "KARB",
    "ria-KAUB": "KAUB",
    "nnb-KB80": "KB80",
    "kbc-KBCNT": "KBCNT",
    "kbh-KBHNT": "KBHNT",
    "kbm-KBMNT": "KBMNT",
    "kql-KBNT": "KBNT",
    "kin-KBNT": "KBNT",
    "kss-KBQ": "KBQ",
    "kbq-KBQNTPO": "KBQNTPO",
    "agw-KCB": "KCB",
    "kde-KDENT": "KDENT",
    "kdl-KDLNT": "KDLNT",
    "zlm-KEAS": "KEAS",
    "kek-KEKNT": "KEKNT",
    "ken-KENNT": "KENNT",
    "kew-KEWNTPO": "KEWNTPO",
    "kgf-KGF": "KGF",
    "kgk-KGKNT": "KGKNT",
    "kgp-KGPNT": "KGPNT",
    "kix-KHIA": "KHIA",
    "nky-KHIA": "KHIA",
    "khs-KHS": "KHS",
    "khz-KHZ": "KHZ",
    "fin-FB38": "KINB38",
    "geb-KIRNT": "KIRNT",
    "som-YALB": "KITABUNA",
    "yal-YALB": "KITABUNA",
    "kje-KJENT": "KJENT",
    "kjs-KJSNT": "KJSNT",
    "eng-KJV": "KJV",
    "eng-KJVA": "KJVA",
    "kkc-KKC": "KKC",
    "naq-KKG": "KKG",
    "kkj-KKJ": "KKJ",
    "bsp-BAGA": "KKK",
    "rme-KLAVS": "KLAVS",
    "klt-KLT": "KLT",
    "klv-KLV": "KLV",
    "tgk-KM92": "KM92",
    "kmh-KMHMNT": "KMHMNT",
    "kmh-KMHNT": "KMHNT",
    "kmk-KMKNT": "KMKNT",
    "kmo-KMONT": "KMONT",
    "kms-KMS": "KMS",
    "kmu-KMUNT": "KMUNT",
    "kmy-KMY": "KMY",
    "kne-KNE": "KNE",
    "knf-KNFNTPO": "KNFNTPO",
    "knj-KNJNT": "KNJNT",
    "whk-KNT": "KNT",
    "knh-KNT": "KNT",
    "knv-KNVANT": "KNVANT",
    "knv-KNVF": "KNVF",
    "kog-KOG": "KOG",
    "kpf-KPFNT": "KPFNT",
    "kpg-KPG": "KPG",
    "kpj-KPJNT": "KPJNT",
    "kpr-KPRB": "KPRB",
    "kpr-KPRNT": "KPRNT",
    "kpw-KPW": "KPW",
    "kpx-KPXNT": "KPXNT",
    "kqc-KQC": "KQC",
    "cak-KQC": "KQC",
    "kqe-KQE": "KQEE",
    "kqp-KQP": "KQP",
    "kqw-KQW": "KQW",
    "fin-FIN92": "KR92",
    "krj-KRJ": "KRJ",
    "ksc-KSC": "KSC",
    "ksj-KSJ": "KSJ",
    "ksp-KSP": "KSP",
    "ktj-KTJ": "KTJNT",
    "ktm-KTM": "KTM",
    "kto-KTONT": "KTONT",
    "kud-KUDNT": "KUDNT",
    "kue-KUE": "KUE",
    "kup-KUPNT": "KUPNT",
    "kmr-KURNT": "KURNT",
    "kmr-KURPRO": "KURPRO",
    "kdc-KUTU": "KUTU",
    "kvn-KVNNT": "KVNNT",
    "kwd-KWD": "KWAU",
    "gkp-KWB": "KWB",
    "cwe-KWERE": "KWERE",
    "kwi-KWINT": "KWINT",
    "kwj-KWJNT": "KWJNT",
    "kxw-KXW": "KXW",
    "kyf-KYFNT": "KYFNT",
    "kyg-KYG": "KYG",
    "kyq-KYQ": "KYQNT",
    "kyu-KYU": "KYU",
    "kyz-KYZNT": "KYZNT",
    "kze-KZENT": "KZENT",
    "laj-B79": "La79",
    "lac-LACNT": "LACNT",
    "lbb-LBB": "LBB",
    "lit-LBD": "LBD",
    "lbk-LBKNT": "LBKNT",
    "lug-LBR": "LBR",
    "ruf-LBV": "LBV",
    "lsi-LCL": "LCL",
    "lcm-LCMNTPO": "LCMNTPO",
    "lee-LEE": "LEE",
    "lbj-LBJ": "LEH",
    "dks-LEKJOT": "LEKJOT",
    "lem-LEM": "LEM",
    "rml-LET1933": "LET1993",
    "leu-LEU": "LEU",
    "lgl-LGL": "LGL",
    "lhu-LHBR": "LHBR",
    "mhx-LHCL": "LHCL",
    "lhi-LHI": "LHI",
    "ike-LIB": "LIB",
    "lid-LID": "LID",
    "lid-LIDNTPO": "LIDNTPO",
    "lif-LIFNT": "LIFDNT",
    "lip-LIP": "LIP",
    "lex-LEX": "LNG",
    "lmp-LNT": "LNT",
    "log-LOG": "LOG",
    "loq-LOQ": "LOQ",
    "rmy-LOV1930": "LOV1930",
    "rmy-LOV1984": "LOV1984",
    "fra-LSG": "LSG",
    "lug-LUG68": "LUG68",
    "lwo-LWO": "LWO",
    "lww-LWW": "LWW",
    "maa-MAANT": "MAANT",
    "gla-MACETN": "MACETN",
    "gla-MACGAP": "MACGAP",
    "mai-MAII": "MAII",
    "maj-MAJNT": "MAJNT",
    "mal-MAL": "MAL",
    "mam-MAMO": "MAMO",
    "mam-MAMNT": "MAMTNT",
    "maq-MAQNT": "MAQNT",
    "mar-MAR": "MAR",
    "mcn-MASSANA": "MASSANA",
    "mau-MAUNT": "MAUNT",
    "mav-MAVNT": "MAVNT",
    "maw-MAW": "MAW",
    "yua-MAYABI": "MAYABI",
    "maz-MAZNT": "MAZNT",
    "mdy-MB": "MB",
    "mck-MBB": "MBB",
    "tgl-MBB05": "MBB05",
    "mbb-MBBNT": "MBBNT",
    "mbb-MBBOT": "MBBOT",
    "plt-MCB": "MBC",
    "ben-MBCL": "MBCL",
    "mbc-MBCNT": "MBCNT",
    "mbd-MBD": "MBDNT",
    "mbi-MBI": "MBI",
    "mbj-MBJNT": "MBJNT",
    "gai-MBKAMNT": "MBKAMNT",
    "mbl-MBLNT": "MBLNT",
    "plt-MPB": "MBP",
    "mbs-MBSNT": "MBSNT",
    "mbt-MBTNT": "MBTNT",
    "mca-MCA": "MCA",
    "mcb-MCBNT": "MCBNT",
    "mcd-MCD": "MCD",
    "mcd-MCDNT": "MCDNT",
    "mcf-MCFNT": "MCFNT",
    "crm-MCNT": "MCNT",
    "mco-MCONT": "MCONT",
    "mcp-MCPNT": "MCPNT",
    "mcq-MCQNT": "MCQNT",
    "moc-MCV": "MCV",
    "med-MED": "MED",
    "mee-MEE": "MEE",
    "meq-MEQ": "MEQ",
    "meq-MEQNT": "MEQNT",
    "mfi-MFINT": "MFINT",
    "mfy-MFY": "MFY",
    "mbh-MHB": "MHBNT",
    "mhl-MHL": "MHL",
    "mib-MIBNT": "MIBNT",
    "mie-MIENT": "MIENT",
    "mif-MIF": "MIF",
    "mig-MIGNT": "MIGNT",
    "mih-MIHNT": "MIHNT",
    "mil-MILNT": "MILNT",
    "spa-MILNT": "MILNT",
    "mio-MIONT": "MIONT",
    "mic-MIQNT": "MIQNT",
    "mir-MIRNT": "MIRNT",
    "mrg-MISH": "MISH",
    "mit-MITNT": "MITNT",
    "mzl-MIXE": "MIXE",
    "miy-MIY": "MIY",
    "lus-MIZ": "MIZ",
    "miz-MIZNT": "MIZNT",
    "lus-MIZO": "MIZO",
    "mjc-MJCNT": "MJCNT",
    "mkd-MK2006": "MK2006",
    "mkd-MK2006D": "MK2006D",
    "mkd-MK2008": "MK2008",
    "mgc-MKD": "MKD",
    "mkn-MKN": "MKN",
    "mks-MKSNT": "MKSNT",
    "mlh-MLH": "MLH",
    "mlp-MLPNT": "MLPNT",
    "ilb-GLI": "MMJL",
    "mmn-MMN": "MMN",
    "mmo-MMONT": "MMONT",
    "mmx-MMXNTPS": "MMXNTPS",
    "mkl-MNKNT": "MNKNT",
    "mdy-MNT": "MNT",
    "mgh-MNT15": "MNT15",
    "moa-MOANT": "MOANT",
    "mfk-MOF": "MOF",
    "moh-MOH1814": "MOH1814",
    "mop-MOPNT": "MOPNT",
    "rmc-MOR1936": "MOR1936",
    "mox-MOX": "MOX",
    "mox-MOXNT": "MOXNT",
    "nmo-MOYO": "MOYO",
    "eng-MP1650": "MP1650",
    "mpm-MPMNT": "MPMNT",
    "mpp-MPP": "MPP",
    "mpp-MPPPOR": "MPPPOR",
    "mps-MPSBI": "MPSBI",
    "mpt-MPTNT": "MPTNT",
    "mwp-MPW": "MPW",
    "mqb-MQBNT": "MQBNT",
    "mqj-MQJNT": "MQJNT",
    "mri-MRI1952": "MRI1952",
    "mri-MRI2012": "MRI2012",
    "mri-MRNT": "MRNT",
    "plt-MRV": "MRV",
    "msb-MSB": "MSB",
    "eng-MSG": "MSG",
    "msk-MSKNT": "MSKNT",
    "miq-MSKTU": "MSKTU",
    "msm-MSMNT": "MSMNT",
    "ary-MSTD": "MSTD",
    "mti-MTINT": "MTINT",
    "mto-MTONT": "MTONT",
    "mua-MUA": "MUAR",
    "muh-MUHNTPO": "MUHNTPO",
    "mux-MUXNT": "MUXNT",
    "muy-MUYNT": "MUYNT",
    "mva-MVANT": "MVANT",
    "mvn-MVN": "MVN",
    "mwc-MWC": "MWC",
    "mxb-MXBNT": "MXBNT",
    "mxp-MXPNT": "MXPNT",
    "mxq-MXQNT": "MXQNT",
    "mxt-MXTNT": "MXTNT",
    "mxv-MXV": "MXV",
    "myk-MYKNTPO": "MYKNTPO",
    "myu-MYUNT": "MYUNT",
    "myw-MYW": "MYW",
    "myy-MYYNT": "MYYNT",
    "mza-MZA": "MZA",
    "mzz-MZZ": "MZZ",
    "nob-N11BM": "N11BM",
    "nno-N11NN": "N11NN",
    "nob-N78BM": "N78BM",
    "nno-N78NN": "N78NN",
    "por-NA17": "NA17",
    "por-NAA": "NAA",
    "nab-NABNT": "NABNT",
    "eng-NABRE": "NABRE",
    "naf-NAF": "NAF",
    "naf-NAFNT": "NAFNT",
    "lmk-NAG1": "NAG1",
    "nma-NAG2": "NAG2",
    "njm-NAGA": "NAGA",
    "nbc-NAGC": "NAGC",
    "nbe-NAGE": "NAGE",
    "nph-NAGP": "NAGP",
    "nsa-NAGS": "NAGS",
    "nnp-NAGW": "NAGW",
    "yim-NAGY": "NAGY",
    "nzm-NAGZ": "NAGZ",
    "nak-NAK": "NAK",
    "nak-NAKNT": "NAKNT",
    "eng-NASB": "NASB",
    "tih-MTNT": "NB",
    "nld-NBG51": "NBG51",
    "nnh-NGBM": "NBGM",
    "caq-NBRE": "NBRE",
    "fra-NBS": "NBS",
    "nca-NCANT": "NCANT",
    "nch-NCHBI": "NCHBI",
    "ncj-NCJNT": "NCJNT",
    "ncl-NCLNT": "NCLNT",
    "ncu-NCUNT": "NCUNT",
    "ndj-NDBV": "NDBV",
    "ndz-NDZNT": "NDZNT",
    "nwx-NEW": "NEW",
    "nfa-NFA": "NFA",
    "ngp-NGBV": "NGBV",
    "acn-NGCL": "NGCL",
    "ngu-NGU": "NGU",
    "ngu-NGUNT": "NGUNT",
    "nhe-NHEBI": "NHEBI",
    "nhe-NHENT": "NHENT",
    "nhg-NHGNT": "NHGNT",
    "nhi-NHINT": "NHINT",
    "nhu-NHUNT": "NHUNT",
    "nhw-NHWBI": "NHWBI",
    "nhx-NHX": "NHXT",
    "nhy-NHYNT": "NHYNT",
    "nia-NIA": "NIA",
    "nif-NIF": "NIF",
    "nii-NII": "NII",
    "nii-NIINT": "NIINT",
    "eng-NIV": "NIV",
    "cag-NIVA": "NIVA",
    "niy-NIYNT": "NIYNT",
    "nko-NKONT": "NKONT",
    "nlg-NLG": "NLG",
    "eng-NLT": "NLT",
    "kck-KBTP": "NMN",
    "nmw-NMW": "NMW",
    "nhr-NNT": "NNT",
    "nnq-NNT2015": "NNT2015",
    "nnw-NNWNT": "NNWNT",
    "noa-NOAANT": "NOAANT",
    "noa-NOANT": "NOANT",
    "nod-NOD": "NOD",
    "nod-NODTH": "NODTH",
    "njb-NOKT": "NOKT",
    "nop-NOP": "NOP",
    "nop-NOPNTPO": "NOPNTPO",
    "not-NOTNT": "NOTNT",
    "nou-NOUNT": "NOUNT",
    "pww-NPKTH": "NPKTH",
    "npl-NPLNT": "NPLNT",
    "eng-NRSV": "NRSV",
    "nsn-NSNNT": "NSNNT",
    "nso-NSO00": "NSO00",
    "nso-NSO51": "NSO51",
    "nss-NSS": "NSS",
    "nsu-NSU": "NSU",
    "beq-NTB": "NTB",
    "bmb-NTB": "NTB",
    "bod-NTB": "NTB",
    "dow-NTD": "NTD",
    "mfe-MKNT": "NTKM",
    "por-NTLH": "NTLH",
    "maf-MAFNT": "NTMOF",
    "ntp-NTPNT": "NTPNT",
    "grc-NTPT": "NTPT",
    "ntr-NTRNT": "NTRNT",
    "ntu-NTU": "NTU",
    "ell-NTV": "NTV",
    "vut-VNT": "NTV",
    "nuy-NUY": "NUY",
    "nav-NVJOB": "NVJOB",
    "nvm-NVMNT": "NVMNT",
    "nwi-NWINT": "NWINT",
    "rmc-ESR": "NZR",
    "obo-OBONT": "OBONT",
    "gle-OC1970": "OC1970",
    "okv-OKV": "OKV",
    "okv-OKVNT": "OKVNT",
    "kua-OKYB": "OKYB",
    "omw-OMWNT": "OMWNT",
    "ndo-ONDB": "ONDB",
    "ong-ONG": "ONG",
    "ong-ONGNT": "ONGNT",
    "ons-ONS": "ONS",
    "ood-OODNT": "OODNT",
    "opm-OPM": "OPM",
    "opm-OPMNT": "OPMNT",
    "ory-ORY": "ORY",
    "ote-OTENT": "OTENT",
    "otm-OTMNT": "OTMNT",
    "otn-OTNNT": "OTNNT",
    "otq-OTQNT": "OTQNT",
    "ots-OTSNT": "OTSNT",
    "oym-OYM": "OYM",
    "pab-PABNT": "PABNT",
    "pad-PADNT": "PADNT",
    "pah-PAHNT": "PAHNT",
    "pan-PAN": "PAN",
    "pao-PAONT": "PAONT",
    "pdt-PB": "PB",
    "pbb-PBBN": "PBBN",
    "pbb-PBBNT": "PBBNT",
    "poy-PBV": "PBV",
    "crk-PCSBR": "PCSBR",
    "pdc-PDC": "PDC",
    "fra-PDV": "PDV",
    "fra-PDV2017": "PDV2017",
    "pib-PIBNT": "PIBNT",
    "pio-PIONT": "PIONT",
    "pir-PIRNT": "PIRNT",
    "pjt-PJT": "PITJ",
    "pjt-PITJ": "PITJ",
    "plg-PLGNT": "PLGNT",
    "pls-PLS": "PLS",
    "pls-PLSDBL": "PLSDBL",
    "pls-PLSNT": "PLSNT",
    "plu-PLU": "PLU",
    "plu-PLUNT": "PLUNT",
    "pam-PMPV": "PMPV",
    "pag-PNPV": "PNPV",
    "tsz-PNT": "PNT",
    "pfe-PNT": "PNT",
    "ckb-SNTPS": "PNTZS",
    "poe-POE": "POE",
    "poe-POENT": "POENT",
    "poh-POHNT": "POHNT",
    "poi-POINT": "POINT",
    "poh-POK": "POK",
    "pmx-POU": "POU",
    "ppo-PPONT": "PPONT",
    "pps-PPS": "PPS",
    "slv-PREK28": "PREK28",
    "prf-PRFNT": "PRFNT",
    "pri-PRINT": "PRINT",
    "glv-PS1761": "PS1761",
    "aln-ALPSTO18": "PSTOKK1872",
    "ptp-PTP": "PTP",
    "ptp-PTPNT": "PTPNT",
    "pwg-PWGNT": "PWGNT",
    "ayr-AYOP97": "QA97",
    "qxr-QCA04": "QCA04",
    "qug-QCHI04": "QCHI04",
    "quh-QNBNT": "QNBNT",
    "kek-QQC": "QQC",
    "qub-QUBNT": "QUBNT",
    "quc-QUCNNT": "QUCNNT",
    "quc-QUCTNT": "QUCTNT",
    "quf-QUFNT": "QUFNT",
    "quh-QUHNT": "QUHNT",
    "quc-QUICH1": "QUICH1",
    "qvi-QUII": "QUII",
    "qul-QULNT": "QULNT",
    "qup-QUPNT": "QUPNT",
    "qva-QVA": "QVA",
    "qva-QVADBL": "QVADBL",
    "qvc-QVCNT": "QVCNT",
    "qve-QVENT": "QVENT",
    "qvh-QVHNT": "QVHNT",
    "qvm-QVMNT": "QVMNT",
    "qvn-QVNNT": "QVNNT",
    "qvs-QVSNT": "QVSNT",
    "qvw-QVWNT": "QVWNT",
    "qvz-QVZNT": "QVZNT",
    "qwh-QWHNT": "QWHNT",
    "qxh-QXHNT": "QXHNT",
    "qxl-QXL": "QXL",
    "qxl-QXLU": "QXLU",
    "qxn-QXNNT": "QXNNT",
    "qxo-QXONT": "QXONT",
    "rai-RAI": "RAI",
    "rai-RAINT": "RAINT",
    "por-RC1969": "RC1969",
    "por-RC69": "RC69",
    "ceb-RCPV": "RCPV",
    "zho-RCUVSS": "RCUVSS",
    "zho-RCUVTS": "RCUVTS",
    "ita-RDV24": "RDV24",
    "ilo-RIPV": "RIPV",
    "pne-PNT": "RJ",
    "rkb-RKBNT": "RKBNT",
    "rmo-RMOSNG": "RMOSNG",
    "kor-RNKSV": "RNKSV",
    "rim-RNT": "RNT",
    "rmy-ROM07": "ROM07",
    "roo-ROO": "ROO",
    "roo-ROONT": "ROONT",
    "rop-ROP": "ROP",
    "ben-ROVU": "ROVU",
    "nyn-B64": "RR64",
    "rro-RRO": "RRO",
    "smo-RSCB": "RSCB",
    "eng-RSV": "RSV",
    "lav-RLB": "RT65",
    "rub-RUB": "RUB",
    "hun-HRNT": "R\u00daF",
    "rug-RUG": "RUG",
    "eng-RV1885": "RV1885",
    "eng-RV1895": "RV1895",
    "spa-RVC": "RVC",
    "spa-RVR1960": "RVR1960",
    "spa-RVR95": "RVR95",
    "spa-RVR95EE": "RVR95EE",
    "vie-RVV11": "RVV11",
    "rwo-RWO": "RWOK",
    "rwo-RWOKNT": "RWOKNT",
    "rwo-RWORNT": "RWORNT",
    "ton-TONRWV": "RWV",
    "sab-SABNT": "SABNT",
    "ben-SBCL": "SBCL",
    "sbe-SBE": "SBE",
    "sbl-SBL": "SBL",
    "grc-SBLGNT": "SBLGNT",
    "cym-SBY1850": "SBY1850",
    "cym-SC": "SC",
    "sat-SCLNT": "SCLNT",
    "snd-SCLNT": "SCLNT",
    "cym-SCN": "SCN",
    "smo-SCNT": "SCNT",
    "gla-SD1826": "SD1826",
    "gla-SD1992": "SD1992",
    "sda-SDA": "SDA",
    "slk-SEB": "SEB",
    "seh-SEH": "SEH",
    "ses-SES": "SES",
    "sey-SEYNT": "SEYNT",
    "sgb-SGB": "SGB",
    "rme-SGM1985": "SGM1985",
    "rme-SGM1995": "SGM1995",
    "sgz-SGZNT": "SGZNT",
    "shn-SHNCL": "SHNCL",
    "shp-SHPNTPO": "SHPNTPO",
    "shu-SHUARAB": "SHUARAB",
    "shu-SHULATN": "SHULATN",
    "pis-SIDC": "SIDC",
    "sig-SIGNT": "SIGNT",
    "sim-SIM": "SIM",
    "rmo-SINT1912": "SINT1912",
    "sja-SJA": "SJAB",
    "sja-SJANT": "SJANT",
    "sll-SLL": "SLL",
    "sll-SLLNT": "SLLNT",
    "smk-SMKNT": "SMKNT",
    "snc-SNC": "SNC",
    "nbl-SND12": "SND12",
    "snf-SNF": "SNF",
    "snn-SNNNT": "SNNNT",
    "snp-SNPKNT": "SNPKNT",
    "snp-SNPLNT": "SNPLNT",
    "soy-SNT": "SNT",
    "snw-SNWNT": "SNWNT",
    "sny-SNY": "SNY",
    "sny-SNYNT": "SNYNT",
    "urw-SOBP15": "SOBP15",
    "xog-LSB": "SOG",
    "soq-SOQNT": "SOQNT",
    "sus-SUSU": "SOSO",
    "sus-SUA": "SOSO",
    "spl-SPLNT": "SPLNT",
    "spp-SPPNT": "SPPNT",
    "sps-SPS": "SPS",
    "sps-SPSNTPO": "SPSNTPO",
    "spy-SPYNT": "SPYNT",
    "srm-SRMNT": "SRMNT",
    "srn-SRNNT": "SRNNT",
    "rmn-SROM": "SROM",
    "srq-SRQNT": "SRQNT",
    "mos-MOODC98": "SSDC98",
    "ssd-SSDNT": "SSDNT",
    "ssg-SSGNT": "SSGNT",
    "sot-SSO61SO": "SSO61SO",
    "sot-SSO89SO": "SSO89SO",
    "slv-SSP": "SSP",
    "stp-STPNT": "STPNT",
    "sua-SUANT": "SUANT",
    "sna-SUB1949": "SUB1949",
    "sna-SUB1949D": "SUB1949D",
    "suc-SUC": "SUC",
    "sue-SUE": "SUE",
    "sue-SUENT": "SUENT",
    "yan-SUMU": "SUMU",
    "swh-SUV": "SUV",
    "suz-SUZBI": "SUZBI",
    "sxb-SXBNT": "SXBNT",
    "csy-SYB": "SYB",
    "syb-SYB": "SYBNT",
    "rus-SYNOD": "SYNOD",
    "eng-T4T": "T4T",
    "tac-TACNT": "TACNT",
    "taj-TAJNT": "TAJNT",
    "nho-NHO": "TAKUU",
    "tav-TAVNT": "TAVNT",
    "taw-TAYNT": "TAYNT",
    "por-TB10": "TB",
    "ind-TB": "TB",
    "por-TB": "TB",
    "tbc-TBC": "TBC",
    "tbg-TBGNTPO": "TBGNTPO",
    "tbk-TBKNT": "TBKNT",
    "tbl-TBLNT": "TBLNT",
    "tbo-TBONT": "TBONT",
    "bth-TBV": "TBV",
    "tbw-TBW": "TBW",
    "tca-TCANT": "TCANT",
    "tur-TCL02": "TCL02",
    "ton-TCNT": "TCNT",
    "tcs-TCS": "TCS",
    "ctd-TDB": "TDB",
    "prs-TDV08": "TDV08",
    "ted-TEDNT": "TEDNT",
    "tee-TEENT": "TEENT",
    "tel-TEL": "TEL",
    "ter-TERNT": "TERNT",
    "tet-TET": "TET",
    "tew-TEWNT": "TEWNT",
    "tgo-TGO": "TGO",
    "tgp-TGPNT": "TGPNT",
    "ell-TGVD": "TGVD",
    "tha-TH1971": "TH1971",
    "tha-TH71D": "TH71D",
    "tha-THAKJV": "THAKJV",
    "tha-THSV11": "THSV11",
    "tha-THSVD": "THSVD",
    "tif-TIF": "TIF",
    "tim-TIMNT": "TIMNT",
    "tiy-TIYNT": "TIYNT",
    "tke-TKE": "TKE",
    "tuk-TKMIR": "TKMIR",
    "tku-TKUNT": "TKUNT",
    "spa-TLA": "TLA",
    "tlf-TLFNT": "TLFNT",
    "tlj-TLJNT": "TLJNT",
    "tmd-TMD": "TMD",
    "tpm-TMPNT": "TMPNT",
    "tna-TNANT": "TNANT",
    "tnc-TNCPOR": "TNCPOR",
    "tnk-TNK": "TNK",
    "tnn-TNNNT": "TNNNT",
    "tnp-TNPNT": "TNPNT",
    "toc-TOCNT": "TOCNT",
    "toj-TOJNT": "TOJNT",
    "toi-TONGA": "TONGA",
    "too-TOONT": "TOONT",
    "top-TOPNT": "TOPNT",
    "tos-TOSDBL": "TOSDBL",
    "tos-TOSNT": "TOSNT",
    "tpa-TPA": "TPA",
    "tpp-TPP": "TPP",
    "tpt-TPTNT": "TPTNT",
    "tpz-TPZNT": "TPZNT",
    "trc-TRCNT": "TRCNT",
    "tob-TSB": "TSB",
    "tsg-TSG": "TSGNT",
    "ind-TSI": "TSI",
    "plg-TSN": "TSN",
    "tso-TSO29NO": "TSO29NO",
    "tso-TSO89": "TSO89",
    "tsn-TSW08NO": "TSW08NO",
    "tsn-TSW70": "TSW70",
    "tsw-TSWNT": "TSWNT",
    "ttc-TTCNT": "TTCNT",
    "tte-TTENT": "TTENT",
    "ttq-TTQ": "TTQ",
    "tuc-TUCONT": "TUCONT",
    "tuc-TUCNT": "TUCTNT",
    "tuc-TUC": "TUCTUAM",
    "tue-TUENT": "TUENT",
    "tuf-TUFNT": "TUFNT",
    "tuk-TUK": "TUK",
    "tuo-TUONT": "TUONT",
    "tui-TUPB": "TUPB",
    "tvk-TVK": "TVK",
    "txq-TXQ": "TXQ",
    "txu-TXUNT": "TXUNT",
    "tzo-TZC00": "TZC00",
    "tzo-TZET": "TZE97",
    "tzh-TZH": "TZH",
    "tzj-TZJNT": "TZJNT",
    "tzo-TZONT": "TZONT",
    "tzh-TZOXCH": "TZOXCH",
    "tzo-TZOZNT": "TZOZNT",
    "ubr-UBRNTPO": "UBRNTPO",
    "ubu-UBUNNT": "UBUNNT",
    "ubu-UBUNT": "UBUNT",
    "udu-UDK": "UDK",
    "upv-UNT": "UNT",
    "ura-URANT": "URANT",
    "urb-URBNT": "URBNT",
    "urd-URD": "URD",
    "urd-URDR55": "URDR55",
    "uri-URI": "URIK",
    "urt-URT": "URTY",
    "usa-USANT": "USANT",
    "sco-USNT": "USNT",
    "usp-USPNT": "USPNT",
    "uvh-UVH": "UVH",
    "uvl-UVLNT": "UVLNT",
    "vap-VAIP": "VAIP",
    "var-VAR": "VAR",
    "spa-VBL": "VBL",
    "ron-VDC": "VDC",
    "ven-VEN98": "VEN98",
    "vid-VIDUNDA": "VIDUNDA",
    "viv-VIVNT": "VIVNT",
    "vmy-VMYNT": "VMYNT",
    "fuf-PFJV": "VPFJ",
    "waj-WAJNT": "WAJNT",
    "hye-WANT17": "WANT17",
    "wap-WAPNT": "WAPNT",
    "mzh-WCHB": "WCHB",
    "wbm-WCL": "WCL",
    "eng-WEB": "WEB",
    "eng-WEBBE": "WEBBE",
    "wed-WEDT": "WEDT",
    "wed-WEDW": "WEDW",
    "wer-WER": "WER",
    "mtp-WHYK": "WHYK",
    "wib-WIB": "WIB",
    "wim-WIM": "WIM",
    "wiu-WIUNT": "wiu",
    "heb-WLC": "WLC",
    "eng-WMB": "WMB",
    "eng-WMBBE": "WMBBE",
    "wmw-WMW": "WMW",
    "wmw-WMWNT": "WMWNT",
    "wnc-WNC": "WNC",
    "wnu-WNU": "WNU",
    "wob-WOBNT": "WOBNT",
    "wrk-WRK": "WRK",
    "wrs-WRS": "WRS",
    "wuv-WUVNT": "WUVNT",
    "xav-XAVNT": "XAVNT",
    "xbi-XBIW": "XBIW",
    "xbi-XBIY": "XBIY",
    "xed-XEDNT": "XEDNT",
    "xho-XHO75": "XHO75",
    "xho-XHO96": "XHO96",
    "xla-XLA": "XLA",
    "xnn-XNNNT": "XNNNT",
    "xon-XON": "XON",
    "xon-XONB": "XONB",
    "xrb-XRBNT": "XRBNT",
    "xsb-XSB": "XSB",
    "xsi-XSI": "XSI",
    "xsm-XSM": "XSMBF",
    "xsr-XSR": "XSR",
    "xtd-XTDNT": "XTDNT",
    "xtm-XTMNTPP": "XTMNTPP",
    "xtn-XTN": "XTN",
    "xuo-XUONT": "XUONT",
    "yaa-YAANT": "YAANT",
    "yad-YADNT": "YADNT",
    "yam-YAM": "YAM",
    "yam-YAMNT": "YAMNT",
    "yap-YAP": "YAP",
    "yaq-YAQNT": "YAQNT",
    "yby-YBY": "YBY",
    "ycn-YCN": "YCNNT",
    "yka-YKA": "YKA",
    "yle-YLE": "YLE",
    "eng-YLT98": "YLT98",
    "yml-YML": "YML",
    "glv-YNAP": "YNAP",
    "glv-YNAPBR": "YNAPBR",
    "yon-YON": "YON",
    "esu-YPK": "YPK",
    "yrb-YRB": "YRB",
    "yre-YRE": "YRENT",
    "yss-YSSYAWU": "YSSW",
    "yuj-YUJNT": "YUJNT",
    "yut-YUTNT": "YUTNT",
    "yva-YVANT": "YVANT",
    "zaa-ZAANT": "ZAANT",
    "zab-ZABNT": "ZABNT",
    "zac-ZACNT": "ZACNT",
    "zad-ZADNT": "ZADNT",
    "zae-ZAE": "ZAE",
    "zai-ZAINT": "ZAINT",
    "zam-ZAMNT": "ZAMNT",
    "zao-ZAONT": "ZAONT",
    "zar-ZARNT": "ZARNT",
    "zas-ZASNT": "ZASNT",
    "zat-ZATNTPS": "ZATNTPS",
    "zav-ZAVNT": "ZAVNT",
    "zaw-ZAWNT": "ZAWNT",
    "zca-ZCANT": "ZCANT",
    "zia-ZIANT": "ZIANT",
    "ziw-ZIBT": "ZIBT",
    "slv-ZJ": "\u017dJ",
    "zom-ZOMI": "ZOMI",
    "zos-ZOSNT": "ZOSNT",
    "zpc-ZPCNT": "ZPCNT",
    "zpg-ZPGNT": "ZPGNT",
    "zpi-ZPINT": "ZPINT",
    "zpl-ZPLNT": "ZPLNT",
    "zpm-ZPMNT": "ZPMNT",
    "zpo-ZPONT": "ZPONT",
    "zpq-ZPQNT": "ZPQNT",
    "zpt-ZPT": "ZPT",
    "zpu-ZPUNT": "ZPUNT",
    "zpv-ZPVNT": "ZPVNT",
    "zpz-ZPZNTPP": "ZPZNTPP",
    "zsr-ZSRNT": "ZSRNT",
    "ztq-ZTQNT": "ZTQNT",
    "zty-ZTYNTPS": "ZTYNTPS",
    "zul-ZUL59": "ZUL59",
    "zul-ZUL86": "ZUL86",
    "zyp-ZYPNT": "ZYPNT",
    "grc-BYZ1904": "\u0392\u03a5\u03961904",
    "khk-MAB2004": "\u0410\u04112004",
    "bel-NTPRV": "\u041d\u0417\u041f\u0420\u041f",
    "bul-CBT": "\u041d\u041f",
    "bul-BGPB2015": "\u0420\u0418 \u0411\u0411\u0414",
    "bul-BOB": "\u0421\u0418",
    "ukr-UTT": "\u0423\u0422\u0422",
    "arb-GNA93": "\u0627\u0644\u0645\u0634\u062a\u0631\u0643\u0629",
    "pes-TPV": "\u0645\u0698\u062f\u0647",
    "hin-HIN2017": "\u0928\u092f\u093e \u0928\u093f\u092f\u092e",
    "tam-TBOV": "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd",
    "kat-GBDC": "\u10e5\u10d1\u10e1\u10d5",
    "kor-NKRV": "\uac1c\uc5ed\uac1c\uc815"
};
window.BIBLESEARCH = window.BIBLESEARCH || {};
window.BIBLESEARCH.highlighterBooks = {
    "Gen": "gen,genesis,gn",
    "Exod": "exo,exod,exodus,ex",
    "Lev": "lev,leviticus,lv",
    "Num": "num,numbers,nu",
    "Deut": "deut,deuteronomy,deu,dt",
    "Josh": "josh,joshua,jos,js",
    "Judg": "judg,judges,jg,jdg",
    "Ruth": "rut,ruth,ru",
    "1Sam": "1sam,isam,1sa,isa,1 samuel,i samuel,1 s,i s",
    "2Sam": "2sam,iisam,2sa,iisa,2 samuel,ii samuel,2 s,ii s",
    "1Kgs": "1kgs,ikgs,1ki,iki,1 kings,i kings,1 k,i k",
    "2Kgs": "2kgs,iikgs,2ki,iiki,2 kings,ii kings,2 k,ii k",
    "1Chr": "1chr,ichr,1ch,ich,1 chronicles,i chronicles,1 ch,i ch",
    "2Chr": "2chr,iichr,2ch,iich,2 chronicles,ii chronicles,2 ch,ii ch",
    "Ezra": "ezra,ezr",
    "Neh": "neh,nehemiah,ne",
    "Esth": "est,esth,esther,es",
    "Job": "job",
    "Ps": "ps,psa,psalm,psalms",
    "Prov": "pro,prov,proverbs,pr",
    "Eccl": "eccl,ecc,ecclesiastes,ec",
    "Song": "song,sng,sgs,song of songs,song of solomon",
    "Isa": "isa,isaiah,is",
    "Jer": "jer,jeremiah,jr",
    "Lam": "lam,lamentations,lm",
    "Ezek": "ezek,ezk,ezekiel,ez",
    "Dan": "dan,daniel,dn",
    "Hos": "hos,hosea,ho",
    "Joel": "joel,jol,jl",
    "Amos": "amos,am,amo",
    "Obad": "obad,obadiah,ob,oba",
    "Jonah": "jonah,jon",
    "Mic": "mic,micah",
    "Nah": "nah,nahum,nam,nh",
    "Hab": "hab,habakkuk,hb",
    "Zeph": "zeph,zep,zephaniah",
    "Hag": "hag,haggai,hg",
    "Zech": "zech,zechariah,zec",
    "Mal": "mal,malachi,ml",
    "Matt": "matt,matthew,mat,mt",
    "Mark": "mark,mrk,mk",
    "Luke": "luke,luk,lk",
    "John": "john,jhn,jn",
    "Acts": "acts,act,ac",
    "Rom": "romans,rom,ro",
    "1Cor": "1cor,icor,1co,ico,1 corinthians,i corinthians,1 co,i co",
    "2Cor": "2cor,iicor,2co,iico,2 corinthians,ii corinthians,2 co,ii co",
    "Gal": "gal,galatians,ga",
    "Eph": "eph,ephesians",
    "Phil": "philippians,php,phil",
    "Col": "col,colossians",
    "1Thess": "1thess,ithess,1th,ith,1 thessalonians,i thessalonians,1 th,i th",
    "2Thess": "2thess,iithess,2th,iith,2 thessalonians,ii thessalonians,2 th,ii th",
    "1Tim": "1tim,itim,1ti,iti,1 timothy,i timothy,1 ti,i ti",
    "2Tim": "2tim,iitim,2ti,iiti,2 timothy,ii timothy,2 ti,ii ti",
    "Titus": "tit,titus",
    "Phlm": "phlm,philemon,phm",
    "Heb": "heb,hebrews,he",
    "Jas": "jas,james",
    "1Pet": "1pet,ipet,1pe,ipe,1 peter,i peter,1 p,i p",
    "2Pet": "2pet,iipet,2pe,iipe,2 peter,ii peter,2 p,ii p",
    "1John": "1john,ijohn,1jn,ijn,1 john,i john,1 jn,i jn",
    "2John": "2john,iijohn,2jn,iijn,2 john,ii john,2 jn,ii jn",
    "3John": "3john,iiijohn,3jn,iiijn,3 john,iii john,3 jn,iii jn",
    "Jude": "jude,jud,jd",
    "Rev": "rev,revelation",
    "Bar": "bar,baruch,ba",
    "Bel": "bel,bel and the dragon",
    "Sus": "sus,su,susanna",
    "1Esd": "1esd,iesd,1es,ies,1 esdras,i esdras,1 esd,i esd",
    "2Esd": "2esd,iiesd,2es,iies,2 esdras,ii esdras,2 esd,ii esd",
    "AddEsth": "addesth,esg,esther (greek version),esther,gk est",
    "EpJer": "epjer,lje,letter of jeremiah,let jer",
    "Jdt": "jdt,judith",
    "1Macc": "1macc,imacc,1ma,ima,1 maccabees,i maccabees,1 macc,i macc",
    "2Macc": "2macc,iimacc,2ma,iima,2 maccabees,ii maccabees,2 macc,ii macc",
    "3Macc": "3macc,iiimacc,3ma,iiima,3 maccabees,iii maccabees,3 macc,iii macc",
    "4Macc": "4macc,ivmacc,4ma,ivma,4 maccabees,iv maccabees,4 macc,iv macc",
    "PrMan": "prman,man,prayer of manasseh",
    "Sir": "sir,sirach,si",
    "Tob": "tob,tobit,tb",
    "Wis": "wis,ws,wisdom of solomon"
};
(function(p, n, B) {
    function C() {
        var a = null;
        h.iframe && D(h);
        if (h.autoparse) a = setTimeout(function() {
            q(n.getElementsByTagName("body")[0])
        }, 0);
        q.push = function() {
            clearTimeout(a);
            q.apply({}, arguments)
        };
        if (p._bhparse && p._bhparse.length) {
            clearTimeout(a);
            q.apply({}, p._bhparse)
        }
        p._bhparse = q
    }

    function D(a) {
        function d() {
            j("iframe").filter(function() {
                return this.src.match(/youtube\.com/) && !this.src.match(/wmode=opaque/)
            }).each(function() {
                var g = this.src;
                this.src = g + (g.match(/\?/) ? "&" : "?") + "wmode=opaque"
            })
        }
        var b = {
                __linker__: "1",
                "disp[]": "1"
            },
            e = [p.location.protocol, "//", a.host, "/linker/fancybox2/jquery.fancybox.css"].join(""),
            c = {
                type: "iframe",
                aspectRatio: false,
                width: "90%",
                height: "90%",
                maxWidth: 900,
                maxHeight: 900,
                autoSize: false,
                padding: 0,
                margin: 0,
                scrolling: "no",
                openEffect: "none",
                closeEffect: "none",
                iframe: {
                    scrolling: "yes"
                },
                helpers: {
                    title: null,
                    overlay: {
                        css: {
                            background: "rgba(0,0,0,0.5)"
                        }
                    }
                }
            };
        j.each(["languages", "versions"], function(g, f) {
            if ("string" === j.type(a[f]) && a[f].match(/^[a-z0-9\-,]+$/i)) b["disp[" + f + "]"] = a[f]
        });
        b["disp[versionChooser]"] =
            a.versionChooser ? 1 : 0;
        a.fixYoutube && d();
        BIBLESEARCH.defineFancybox(j);
        j("<link>").attr({
            rel: "stylesheet",
            media: "screen",
            href: e
        }).appendTo("head");
        j("body").delegate("a." + a.linkClass, "click", function(g) {
            g.preventDefault();
            g = j(this);
            var f = g.attr("href"),
                k;
            if ("undefined" === typeof g.data("fancybox-href")) {
                k = f.split("#");
                f = k[0] + (k[0].match(/\?/) ? "&" : "?") + j.param(b);
                if (k[1]) f += "#" + k[1];
                g.data("fancybox-href", f)
            }
            j.fancybox(j.extend({}, c, {
                href: g.data("fancybox-href")
            }))
        })
    }

    function q() {
        var a = Array.prototype.slice.call(arguments),
            d, b;
        if (a.length)
            for (b = 0; b < a.length; b++) {
                d = a[b];
                if (u(d)) d = n.getElementById(d.replace("#", ""));
                w(d)
            }
    }

    function w(a, d) {
        var b;
        b = null;
        var e, c;
        if (a && a.nodeType) {
            e = (a.tagName || "").toLowerCase();
            c = a.className || "";
            d = d || 0;
            if (d > h.maxdepth + 1) return b;
            else if (3 === a.nodeType) b = x(a.nodeValue, a);
            else if (h.ignoreClassMatch.exec(c)) return b;
            else if (("cite" === e || "span" === e) && /bibleref/.exec(c.toLowerCase())) {
                if (e = a.title.match(h.matchFirst)) {
                    b = y(z(e)[0], a.innerHTML);
                    a.innerHTML = "";
                    a.appendChild(b);
                    b = 0
                }
            } else if ("a" ===
                e) {
                if (h.existingLinkMatch.exec(a.href) && !h.linkClassMatch.exec(c)) a.className = A(c + " " + h.linkClass);
                b = 0
            }
            if (null === b) {
                b = a.childNodes;
                for (e = 0; e < b.length;) e += w(b[e], d + 1) + 1;
                b = 0
            }
            return b
        }
    }

    function x(a, d, b, e) {
        var c, g, f, k, l;
        b = b || [];
        if (!c && e && (c = h.matchNext.exec(a))) {
            b.push(c[1]);
            k = c[2];
            l = RegExp.rightContext;
            if (e.verse && !c[4]) {
                f = e.chapter;
                g = c[6] ? c[3] + "-" + c[6] : c[3]
            } else if (e.verse && c[4]) {
                f = c[3];
                g = c[6] ? c[4] + "-" + c[6] : c[4]
            } else if (!e.verse && !c[4]) {
                f = c[3];
                if (c[5]) {
                    k = c[3];
                    l = c[5] + c[6]
                }
                g = B
            } else if (!e.verse && c[4]) {
                f =
                    c[3];
                g = c[4]
            }
            b.push({
                book: e.book,
                chapter: f,
                verse: g,
                text: k,
                version: c[8]
            })
        }
        if (!c && (c = h.matchFirst.exec(a))) {
            e = z(c);
            b.push(RegExp.leftContext);
            b.push(e[0]);
            l = e[1] + RegExp.rightContext
        }
        if (c) return x(l, d, b, b[b.length - 1]);
        else if (!c && b.length > 0) {
            b.push(a);
            a = b;
            var i;
            for (c = a.length - 1; c >= 0; c--)
                if (a[c] === Object(a[c])) {
                    if (a[c].version) i = a[c].version;
                    if (i && !a[c].version) a[c].version = i
                }
            for (c = 0; c < a.length; c++)
                if (a[c] === Object(a[c])) {
                    i = d;
                    e = y(a[c]);
                    i.parentNode.insertBefore(e, i)
                } else {
                    i = d;
                    e = n.createTextNode(a[c]);
                    i.parentNode.insertBefore(e,
                        i)
                }
            d.parentNode.removeChild(d);
            return b.length - 1
        } else return 0
    }

    function z(a) {
        var d = a[0],
            b = "";
        if (a[1] && a[5]) {
            b = a[5];
            d = d.replace(a[5], "")
        }
        return [{
            book: a[2],
            chapter: a[3],
            verse: a[4],
            text: d,
            version: a[1] || a[6] || null
        }, b]
    }

    function y(a, d) {
        var b = n.createElement("a");
        b.href = [h.protocol, "//", h.host, "/", h.version2url[(a.version || h.version).toLowerCase()], "/", h.book2url[a.book.toLowerCase()], "/", a.chapter, "/", a.verse].join("");
        b.className = h.linkClass;
        b.title = h.linkTitle.replace("%s", [a.book, " ", a.chapter, a.verse ?
            ":" + a.verse : "", " (", h.version2url[(a.version || h.version).toLowerCase()], ")"
        ].join(""));
        b.innerHTML = d || a.text;
        return b
    }

    function u(a) {
        return {}.toString.call(a) === "[object String]"
    }

    function r(a) {
        return a.replace(/([.?*+\^$\[\]\\(){}|\-])/g, "\\$1")
    }
    var o = {
            host: "bibles.org",
            confID: "bw-highlighter-config",
            srcID: "bw-highlighter-src",
            linkClass: "biblesearch-linker"
        },
        E = {
            fixYoutube: true,
            versionChooser: true,
            maxdepth: 10,
            version: "eng-GNTD",
            iframe: true,
            autoparse: true,
            linkTitle: "Look up %s on Bible Search",
            ignore: "highlighter-skip",
            ssl: "match"
        },
        h = {},
        j, A;
    BIBLESEARCH.jQuire({
        atLeast: "1.7.0",
        atMost: "1.8.3",
        rejectIf: function(a) {
            return a !== BIBLESEARCH.jQuery && typeof a.fn.fancybox !== "undefined"
        },
        onLoad: function(a) {
            j = a;
            var d = p.ABS_LINKER,
                b = {},
                e = BIBLESEARCH.highlighterBooks || {},
                c = BIBLESEARCH.highlighterVersions || {},
                g = [],
                f = [],
                k = [],
                l, i = {
                    book2url: {},
                    version2url: {}
                },
                v = {},
                m, s, t;
            for (s in e)
                if (e.hasOwnProperty(s)) {
                    l = r(e[s]).split(",");
                    g.push.apply(g, l);
                    for (t = 0; t < l.length; t++) i.book2url[l[t].toLowerCase()] = s
                }
            for (m in c)
                if (c.hasOwnProperty(m)) {
                    v[m] =
                        true;
                    f.push(r(m));
                    k.push(m);
                    i.version2url[m.toLowerCase()] = m;
                    e = c[m];
                    if (typeof v[e] === "undefined") {
                        v[e] = true;
                        f.push(r(e));
                        i.version2url[e.toLowerCase()] = m
                    }
                }
            f = f.join("|");
            c = "(\\s*[\\[(]?\\b(" + f + ")\\b[\\])]?)?";
            i.matchFirst = RegExp(["(?:(" + f + "):)?", "\\b(" + g.join("|") + ")\\b", "(?:\\s+|\\.)\\s*(\\d+)(?:\\s*[:,\\.]\\s*(\\d+(?:-\\d+)?))?", c].join(""), "i");
            i.matchNext = RegExp(["^(\\s*[\\.;,\\-]\\s*)((\\d+)(?::(\\d+))?(?:(\\s*-\\s*)(\\d+))?", c, ")"].join(""), "i");
            i.allOsisIDs = k;
            f = n.getElementById(o.srcID);
            g = n.getElementById(o.confID);
            if (f)
                if ((f = f.src.match(/^(?:https?:)?\/\/([^\/]+)/)) && f[1]) o.host = f[1];
            if (g) b = j(g).data();
            else if (d && d === Object(d)) b = d;
            b.version && !i.version2url[b.version.toLowerCase()] && delete b.version;
            if (b.hasOwnProperty("maxdepth")) {
                b.maxdepth = parseInt(b.maxdepth, 10);
                b.maxdepth <= 0 && delete b.maxdepth
            }
            if (b.hasOwnProperty("ignore"))
                if (u(b.ignore)) b.ignore = b.ignore.replace(/^\./, "");
                else delete b.ignore;
            if (b.hasOwnProperty("ssl"))
                if (u(b.ssl) && b.ssl.match(/^(?:on|off|match)$/i)) b.ssl = b.ssl.toLowerCase();
                else delete b.ssl;
            o.linkClassMatch = RegExp("\\b" + r(o.linkClass) + "\\b", "i");
            o.existingLinkMatch = RegExp("^https?://" + o.host + "/(?:" + i.allOsisIDs.join("|") + ")/", "i");
            d = j.extend(E || {}, b, o, i);
            d.ignoreClassMatch = RegExp("\\b" + r(d.ignore) + "\\b", "i");
            d.protocol = d.ssl === "match" && n.location.protocol.match(/^http/) ? n.location.protocol : ["http", d.ssl === "on" ? "s" : "", ":"].join("");
            h = d;
            a(C)
        }
    });
    A = function() {
        return "".trim ? function(a) {
            return a.trim()
        } : function(a) {
            return a.replace(/^\s+/, "").replace(/\s+$/, "")
        }
    }()
})(window, document);