! function (t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var o = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = t, n.c = e, n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) n.d(r, o, function (e) {
                return t[e]
            }.bind(null, o));
        return r
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 0)
}([function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), n(1);
    const r = n(6),
        o = ".todo__text",
        i = ".todo__savebtn",
        a = ".todo__task",
        s = ".todo__task-label",
        c = "#todoTask",
        u = "#todoContainer",
        f = ".todo__task-delete",
        l = v("#todo-app");

    function d() {
        const t = v(o);
        t.value && (l.appendChild(function (t) {
            const e = p(c),
                n = v(a, e);
            v(s, e).innerHTML = t.value;
            const o = r();
            return n.setAttribute("key", o), v(f, e).addEventListener("click", function (t) {
                return () => {
                    const e = l.querySelectorAll(a);
                    e.forEach(e => {
                        e.getAttribute("key") === t && e.parentElement.removeChild(e)
                    })
                }
            }(o)), e
        }(t)), function (t) {
            t.value = ""
        }(t))
    }

    function p(t) {
        return v(t).content.cloneNode(!0)
    }

    function v(t, e) {
        const n = (e || document).querySelector(t);
        if (!n) throw function (t) {
            throw new Error(`Element with selector ${t} not present in the DOM.`)
        }(t);
        return n
    }! function () {
        const t = p(u);
        l.appendChild(t), v(i).addEventListener("click", d)
    }()
}, function (t, e, n) {
    var r = n(2);
    "string" == typeof r && (r = [
        [t.i, r, ""]
    ]);
    var o = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(4)(r, o);
    r.locals && (t.exports = r.locals)
}, function (t, e, n) {
    (t.exports = n(3)(!1)).push([t.i, "\r\n#todo-app {\r\n    padding: 1.5rem;\r\n}\r\n\r\n.todo__input {\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.todo__text {\r\n    margin-right: 1rem;\r\n}\r\n\r\n.todo__task-check:checked + .todo__task-label {\r\n    text-decoration: line-through;\r\n}\r\n\r\n.todo__task-delete {\r\n    color: blue;\r\n    cursor: pointer;\r\n}", ""])
}, function (t, e, n) {
    "use strict";
    t.exports = function (t) {
        var e = [];
        return e.toString = function () {
            return this.map(function (e) {
                var n = function (t, e) {
                    var n = t[1] || "",
                        r = t[3];
                    if (!r) return n;
                    if (e && "function" == typeof btoa) {
                        var o = (a = r, s = btoa(unescape(encodeURIComponent(JSON.stringify(a)))), c = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s), "/*# ".concat(c, " */")),
                            i = r.sources.map(function (t) {
                                return "/*# sourceURL=".concat(r.sourceRoot).concat(t, " */")
                            });
                        return [n].concat(i).concat([o]).join("\n")
                    }
                    var a, s, c;
                    return [n].join("\n")
                }(e, t);
                return e[2] ? "@media ".concat(e[2], "{").concat(n, "}") : n
            }).join("")
        }, e.i = function (t, n) {
            "string" == typeof t && (t = [
                [null, t, ""]
            ]);
            for (var r = {}, o = 0; o < this.length; o++) {
                var i = this[o][0];
                null != i && (r[i] = !0)
            }
            for (var a = 0; a < t.length; a++) {
                var s = t[a];
                null != s[0] && r[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(".concat(s[2], ") and (").concat(n, ")")), e.push(s))
            }
        }, e
    }
}, function (t, e, n) {
    var r, o, i = {},
        a = (r = function () {
            return window && document && document.all && !window.atob
        }, function () {
            return void 0 === o && (o = r.apply(this, arguments)), o
        }),
        s = function (t) {
            var e = {};
            return function (t, n) {
                if ("function" == typeof t) return t();
                if (void 0 === e[t]) {
                    var r = function (t, e) {
                        return e ? e.querySelector(t) : document.querySelector(t)
                    }.call(this, t, n);
                    if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
                        r = r.contentDocument.head
                    } catch (t) {
                        r = null
                    }
                    e[t] = r
                }
                return e[t]
            }
        }(),
        c = null,
        u = 0,
        f = [],
        l = n(5);

    function d(t, e) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n],
                o = i[r.id];
            if (o) {
                o.refs++;
                for (var a = 0; a < o.parts.length; a++) o.parts[a](r.parts[a]);
                for (; a < r.parts.length; a++) o.parts.push(m(r.parts[a], e))
            } else {
                var s = [];
                for (a = 0; a < r.parts.length; a++) s.push(m(r.parts[a], e));
                i[r.id] = {
                    id: r.id,
                    refs: 1,
                    parts: s
                }
            }
        }
    }

    function p(t, e) {
        for (var n = [], r = {}, o = 0; o < t.length; o++) {
            var i = t[o],
                a = e.base ? i[0] + e.base : i[0],
                s = {
                    css: i[1],
                    media: i[2],
                    sourceMap: i[3]
                };
            r[a] ? r[a].parts.push(s) : n.push(r[a] = {
                id: a,
                parts: [s]
            })
        }
        return n
    }

    function v(t, e) {
        var n = s(t.insertInto);
        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var r = f[f.length - 1];
        if ("top" === t.insertAt) r ? r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), f.push(e);
        else if ("bottom" === t.insertAt) n.appendChild(e);
        else {
            if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var o = s(t.insertAt.before, n);
            n.insertBefore(e, o)
        }
    }

    function h(t) {
        if (null === t.parentNode) return !1;
        t.parentNode.removeChild(t);
        var e = f.indexOf(t);
        e >= 0 && f.splice(e, 1)
    }

    function y(t) {
        var e = document.createElement("style");
        if (void 0 === t.attrs.type && (t.attrs.type = "text/css"), void 0 === t.attrs.nonce) {
            var r = function () {
                0;
                return n.nc
            }();
            r && (t.attrs.nonce = r)
        }
        return b(e, t.attrs), v(t, e), e
    }

    function b(t, e) {
        Object.keys(e).forEach(function (n) {
            t.setAttribute(n, e[n])
        })
    }

    function m(t, e) {
        var n, r, o, i;
        if (e.transform && t.css) {
            if (!(i = "function" == typeof e.transform ? e.transform(t.css) : e.transform.default(t.css))) return function () {};
            t.css = i
        }
        if (e.singleton) {
            var a = u++;
            n = c || (c = y(e)), r = x.bind(null, n, a, !1), o = x.bind(null, n, a, !0)
        } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (t) {
            var e = document.createElement("link");
            return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", b(e, t.attrs), v(t, e), e
        }(e), r = function (t, e, n) {
            var r = n.css,
                o = n.sourceMap,
                i = void 0 === e.convertToAbsoluteUrls && o;
            (e.convertToAbsoluteUrls || i) && (r = l(r));
            o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
            var a = new Blob([r], {
                    type: "text/css"
                }),
                s = t.href;
            t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
        }.bind(null, n, e), o = function () {
            h(n), n.href && URL.revokeObjectURL(n.href)
        }) : (n = y(e), r = function (t, e) {
            var n = e.css,
                r = e.media;
            r && t.setAttribute("media", r);
            if (t.styleSheet) t.styleSheet.cssText = n;
            else {
                for (; t.firstChild;) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(n))
            }
        }.bind(null, n), o = function () {
            h(n)
        });
        return r(t),
            function (e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                    r(t = e)
                } else o()
            }
    }
    t.exports = function (t, e) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
        var n = p(t, e);
        return d(n, e),
            function (t) {
                for (var r = [], o = 0; o < n.length; o++) {
                    var a = n[o];
                    (s = i[a.id]).refs--, r.push(s)
                }
                t && d(p(t, e), e);
                for (o = 0; o < r.length; o++) {
                    var s;
                    if (0 === (s = r[o]).refs) {
                        for (var c = 0; c < s.parts.length; c++) s.parts[c]();
                        delete i[s.id]
                    }
                }
            }
    };
    var g, w = (g = [], function (t, e) {
        return g[t] = e, g.filter(Boolean).join("\n")
    });

    function x(t, e, n, r) {
        var o = n ? "" : r.css;
        if (t.styleSheet) t.styleSheet.cssText = w(e, o);
        else {
            var i = document.createTextNode(o),
                a = t.childNodes;
            a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i)
        }
    }
}, function (t, e) {
    t.exports = function (t) {
        var e = "undefined" != typeof window && window.location;
        if (!e) throw new Error("fixUrls requires window.location");
        if (!t || "string" != typeof t) return t;
        var n = e.protocol + "//" + e.host,
            r = n + e.pathname.replace(/\/[^\/]*$/, "/");
        return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
            var o, i = e.trim().replace(/^"(.*)"$/, function (t, e) {
                return e
            }).replace(/^'(.*)'$/, function (t, e) {
                return e
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? t : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")")
        })
    }
}, function (t, e, n) {
    var r = n(7),
        o = n(8);
    t.exports = function (t, e, n) {
        var i = e && n || 0;
        "string" == typeof t && (e = "binary" === t ? new Array(16) : null, t = null);
        var a = (t = t || {}).random || (t.rng || r)();
        if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, e)
            for (var s = 0; s < 16; ++s) e[i + s] = a[s];
        return e || o(a)
    }
}, function (t, e) {
    var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
    if (n) {
        var r = new Uint8Array(16);
        t.exports = function () {
            return n(r), r
        }
    } else {
        var o = new Array(16);
        t.exports = function () {
            for (var t, e = 0; e < 16; e++) 0 == (3 & e) && (t = 4294967296 * Math.random()), o[e] = t >>> ((3 & e) << 3) & 255;
            return o
        }
    }
}, function (t, e) {
    for (var n = [], r = 0; r < 256; ++r) n[r] = (r + 256).toString(16).substr(1);
    t.exports = function (t, e) {
        var r = e || 0,
            o = n;
        return [o[t[r++]], o[t[r++]], o[t[r++]], o[t[r++]], "-", o[t[r++]], o[t[r++]], "-", o[t[r++]], o[t[r++]], "-", o[t[r++]], o[t[r++]], "-", o[t[r++]], o[t[r++]], o[t[r++]], o[t[r++]], o[t[r++]], o[t[r++]]].join("")
    }
}]);