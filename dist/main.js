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
    const r = n(1),
        o = ".todo__text",
        u = ".todo__savebtn",
        i = ".todo__task",
        a = ".todo__task-label",
        c = "#todoTask",
        f = "#todoContainer",
        l = ".todo__task-delete",
        d = y("#todo-app");

    function s() {
        const t = y(o);
        t.value && (d.appendChild(function (t) {
            const e = p(c),
                n = y(i, e);
            y(a, e).innerHTML = t.value;
            const o = r();
            return n.setAttribute("key", o), y(l, e).addEventListener("click", function (t) {
                return () => {
                    const e = d.querySelectorAll(i);
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
        return y(t).content.cloneNode(!0)
    }

    function y(t, e) {
        const n = (e || document).querySelector(t);
        if (!n) throw function (t) {
            throw new Error(`Element with selector ${t} not present in the DOM.`)
        }(t);
        return n
    }! function () {
        const t = p(f);
        d.appendChild(t), y(u).addEventListener("click", s)
    }()
}, function (t, e, n) {
    var r = n(2),
        o = n(3);
    t.exports = function (t, e, n) {
        var u = e && n || 0;
        "string" == typeof t && (e = "binary" === t ? new Array(16) : null, t = null);
        var i = (t = t || {}).random || (t.rng || r)();
        if (i[6] = 15 & i[6] | 64, i[8] = 63 & i[8] | 128, e)
            for (var a = 0; a < 16; ++a) e[u + a] = i[a];
        return e || o(i)
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