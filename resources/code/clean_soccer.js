! function() {
    function p(e, t) {
        return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
    }

    function d(e) {
        return e != null && !isNaN(e)
    }

    function v(e) {
        return {
            left: function(t, n, r, i) {
                arguments.length < 3 && (r = 0), arguments.length < 4 && (i = t.length);
                while (r < i) {
                    var s = r + i >>> 1;
                    e(t[s], n) < 0 ? r = s + 1 : i = s
                }
                return r
            },
            right: function(t, n, r, i) {
                arguments.length < 3 && (r = 0), arguments.length < 4 && (i = t.length);
                while (r < i) {
                    var s = r + i >>> 1;
                    e(t[s], n) > 0 ? i = s : r = s + 1
                }
                return r
            }
        }
    }

    function g(e) {
        return e.length
    }

    function b(e) {
        var t = 1;
        while (e * t % 1) t *= 10;
        return t
    }

    function w(e, t) {
        try {
            for (var n in t) Object.defineProperty(e.prototype, n, {
                value: t[n],
                enumerable: !1
            })
        } catch (r) {
            e.prototype = t
        }
    }

    function E() {}

    function T(e) {
        return S + e in this
    }

    function N(e) {
        return e = S + e, e in this && delete this[e]
    }

    function C() {
        var e = [];
        return this.forEach(function(t) {
            e.push(t)
        }), e
    }

    function k() {
        var e = 0;
        for (var t in this) t.charCodeAt(0) === x && ++e;
        return e
    }

    function L() {
        for (var e in this)
            if (e.charCodeAt(0) === x) return !1;
        return !0
    }

    function A() {}

    function O(e, t, n) {
        return function() {
            var r = n.apply(t, arguments);
            return r === t ? e : r
        }
    }

    function M(e, t) {
        if (t in e) return t;
        t = t.charAt(0).toUpperCase() + t.substring(1);
        for (var n = 0, r = _.length; n < r; ++n) {
            var i = _[n] + t;
            if (i in e) return i
        }
    }

    function D() {}

    function P() {}

    function H(e) {
        function r() {
            var n = t,
                r = -1,
                i = n.length,
                s;
            while (++r < i)(s = n[r].on) && s.apply(this, arguments);
            return e
        }
        var t = [],
            n = new E;
        return r.on = function(r, i) {
            var s = n.get(r),
                o;
            return arguments.length < 2 ? s && s.on : (s && (s.on = null, t = t.slice(0, o = t.indexOf(s)).concat(t.slice(o + 1)), n.remove(r)), i && t.push(n.set(r, {
                on: i
            })), e)
        }, r
    }

    function B() {
        e.event.preventDefault()
    }

    function j() {
        var t = e.event,
            n;
        while (n = t.sourceEvent) t = n;
        return t
    }

    function F(t) {
        var n = new P,
            r = 0,
            i = arguments.length;
        while (++r < i) n[arguments[r]] = H(n);
        return n.of = function(r, i) {
            return function(s) {
                try {
                    var o = s.sourceEvent = e.event;
                    s.target = t, e.event = s, n[s.type].apply(r, i)
                } finally {
                    e.event = o
                }
            }
        }, n
    }

    function R(e) {
        return q(e, V), e
    }

    function $(e) {
        return typeof e == "function" ? e : function() {
            return U(e, this)
        }
    }

    function J(e) {
        return typeof e == "function" ? e : function() {
            return z(e, this)
        }
    }

    function Q(t, n) {
        function r() {
            this.removeAttribute(t)
        }

        function i() {
            this.removeAttributeNS(t.space, t.local)
        }

        function s() {
            this.setAttribute(t, n)
        }

        function o() {
            this.setAttributeNS(t.space, t.local, n)
        }

        function u() {
            var e = n.apply(this, arguments);
            e == null ? this.removeAttribute(t) : this.setAttribute(t, e)
        }

        function a() {
            var e = n.apply(this, arguments);
            e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
        }
        return t = e.ns.qualify(t), n == null ? t.local ? i : r : typeof n == "function" ? t.local ? a : u : t.local ? o : s
    }

    function G(e) {
        return e.trim().replace(/\s+/g, " ")
    }

    function Y(t) {
        return new RegExp("(?:^|\\s+)" + e.requote(t) + "(?:\\s+|$)", "g")
    }

    function Z(e) {
        return e.trim().split(/^|\s+/)
    }

    function et(e, t) {
        function r() {
            var r = -1;
            while (++r < n) e[r](this, t)
        }

        function i() {
            var r = -1,
                i = t.apply(this, arguments);
            while (++r < n) e[r](this, i)
        }
        e = Z(e).map(tt);
        var n = e.length;
        return typeof t == "function" ? i : r
    }

    function tt(e) {
        var t = Y(e);
        return function(n, r) {
            if (i = n.classList) return r ? i.add(e) : i.remove(e);
            var i = n.getAttribute("class") || "";
            r ? (t.lastIndex = 0, t.test(i) || n.setAttribute("class", G(i + " " + e))) : n.setAttribute("class", G(i.replace(t, " ")))
        }
    }

    function nt(e, t, n) {
        function r() {
            this.style.removeProperty(e)
        }

        function i() {
            this.style.setProperty(e, t, n)
        }

        function s() {
            var r = t.apply(this, arguments);
            r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n)
        }
        return t == null ? r : typeof t == "function" ? s : i
    }

    function rt(e, t) {
        function n() {
            delete this[e]
        }

        function r() {
            this[e] = t
        }

        function i() {
            var n = t.apply(this, arguments);
            n == null ? delete this[e] : this[e] = n
        }
        return t == null ? n : typeof t == "function" ? i : r
    }

    function it(t) {
        return typeof t == "function" ? t : (t = e.ns.qualify(t)).local ? function() {
            return this.ownerDocument.createElementNS(t.space, t.local)
        } : function() {
            return this.ownerDocument.createElementNS(this.namespaceURI, t)
        }
    }

    function st(e) {
        return {
            __data__: e
        }
    }

    function ot(e) {
        return function() {
            return X(this, e)
        }
    }

    function ut(e) {
        return arguments.length || (e = p),
            function(t, n) {
                return t && n ? e(t.__data__, n.__data__) : !t - !n
            }
    }

    function at(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            for (var i = e[n], s = 0, o = i.length, u; s < o; s++)(u = i[s]) && t(u, s, n);
        return e
    }

    function ft(e) {
        return q(e, lt), e
    }

    function ct(e) {
        var t, n;
        return function(r, i, s) {
            var o = e[s].update,
                u = o.length,
                a;
            s != n && (n = s, t = 0), i >= t && (t = i + 1);
            while (!(a = o[t]) && ++t < u);
            return a
        }
    }

    function ht() {
        var e = this.__transition__;
        e && ++e.active
    }

    function dt(t, r, i) {
        function f() {
            var e = this[s];
            e && (this.removeEventListener(t, e, e.$), delete this[s])
        }

        function l() {
            var e = u(r, n(arguments));
            f.call(this), this.addEventListener(t, this[s] = e, e.$ = i), e._ = r
        }

        function c() {
            var n = new RegExp("^__on([^.]+)" + e.requote(t) + "$"),
                r;
            for (var i in this)
                if (r = i.match(n)) {
                    var s = this[i];
                    this.removeEventListener(r[1], s, s.$), delete this[i]
                }
        }
        var s = "__on" + t,
            o = t.indexOf("."),
            u = mt;
        o > 0 && (t = t.substring(0, o));
        var a = vt.get(t);
        return a && (t = a, u = gt), o ? r ? l : f : r ? D : c
    }

    function mt(t, n) {
        return function(r) {
            var i = e.event;
            e.event = r, n[0] = this.__data__;
            try {
                t.apply(this, n)
            } finally {
                e.event = i
            }
        }
    }

    function gt(e, t) {
        var n = mt(e, t);
        return function(e) {
            var t = this,
                r = e.relatedTarget;
            (!r || r !== t && !(r.compareDocumentPosition(t) & 8)) && n.call(t, e)
        }
    }

    function wt() {
        var t = ".dragsuppress-" + ++bt,
            n = "click" + t,
            r = e.select(s).on("touchmove" + t, B).on("dragstart" + t, B).on("selectstart" + t, B);
        if (yt) {
            var o = i.style,
                u = o[yt];
            o[yt] = "none"
        }
        return function(e) {
            r.on(t, null), yt && (o[yt] = u);
            if (e) {
                function i() {
                    r.on(n, null)
                }
                r.on(n, function() {
                    B(), i()
                }, !0), setTimeout(i, 0)
            }
        }
    }

    function Et(e, t) {
        t.changedTouches && (t = t.changedTouches[0]);
        var n = e.ownerSVGElement || e;
        if (n.createSVGPoint) {
            var r = n.createSVGPoint();
            return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(e.getScreenCTM().inverse()), [r.x, r.y]
        }
        var i = e.getBoundingClientRect();
        return [t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop]
    }

    function St() {
        return e.event.changedTouches[0].identifier
    }

    function xt() {
        return e.event.target
    }

    function Tt() {
        return s
    }

    function _t(e) {
        return e > 0 ? 1 : e < 0 ? -1 : 0
    }

    function Dt(e, t, n) {
        return (t[0] - e[0]) * (n[1] - e[1]) - (t[1] - e[1]) * (n[0] - e[0])
    }

    function Pt(e) {
        return e > 1 ? 0 : e < -1 ? Nt : Math.acos(e)
    }

    function Ht(e) {
        return e > 1 ? kt : e < -1 ? -kt : Math.asin(e)
    }

    function Bt(e) {
        return ((e = Math.exp(e)) - 1 / e) / 2
    }

    function jt(e) {
        return ((e = Math.exp(e)) + 1 / e) / 2
    }

    function Ft(e) {
        return ((e = Math.exp(2 * e)) - 1) / (e + 1)
    }

    function It(e) {
        return (e = Math.sin(e / 2)) * e
    }

    function Vt() {}

    function $t(e, t, n) {
        return new Jt(e, t, n)
    }

    function Jt(e, t, n) {
        this.h = e, this.s = t, this.l = n
    }

    function Qt(e, t, n) {
        function s(e) {
            return e > 360 ? e -= 360 : e < 0 && (e += 360), e < 60 ? r + (i - r) * e / 60 : e < 180 ? i : e < 240 ? r + (i - r) * (240 - e) / 60 : r
        }

        function o(e) {
            return Math.round(s(e) * 255)
        }
        var r, i;
        return e = isNaN(e) ? 0 : (e %= 360) < 0 ? e + 360 : e, t = isNaN(t) ? 0 : t < 0 ? 0 : t > 1 ? 1 : t, n = n < 0 ? 0 : n > 1 ? 1 : n, i = n <= .5 ? n * (1 + t) : n + t - n * t, r = 2 * n - i, mn(o(e + 120), o(e), o(e - 120))
    }

    function Gt(e, t, n) {
        return new Yt(e, t, n)
    }

    function Yt(e, t, n) {
        this.h = e, this.c = t, this.l = n
    }

    function en(e, t, n) {
        return isNaN(e) && (e = 0), isNaN(t) && (t = 0), tn(n, Math.cos(e *= Ot) * t, Math.sin(e) * t)
    }

    function tn(e, t, n) {
        return new nn(e, t, n)
    }

    function nn(e, t, n) {
        this.l = e, this.a = t, this.b = n
    }

    function fn(e, t, n) {
        var r = (e + 16) / 116,
            i = r + t / 500,
            s = r - n / 200;
        return i = cn(i) * sn, r = cn(r) * on, s = cn(s) * un, mn(pn(3.2404542 * i - 1.5371385 * r - .4985314 * s), pn(-0.969266 * i + 1.8760108 * r + .041556 * s), pn(.0556434 * i - .2040259 * r + 1.0572252 * s))
    }

    function ln(e, t, n) {
        return e > 0 ? Gt(Math.atan2(n, t) * Mt, Math.sqrt(t * t + n * n), e) : Gt(NaN, NaN, e)
    }

    function cn(e) {
        return e > .206893034 ? e * e * e : (e - 4 / 29) / 7.787037
    }

    function hn(e) {
        return e > .008856 ? Math.pow(e, 1 / 3) : 7.787037 * e + 4 / 29
    }

    function pn(e) {
        return Math.round(255 * (e <= .00304 ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - .055))
    }

    function dn(e) {
        return mn(e >> 16, e >> 8 & 255, e & 255)
    }

    function vn(e) {
        return dn(e) + ""
    }

    function mn(e, t, n) {
        return new gn(e, t, n)
    }

    function gn(e, t, n) {
        this.r = e, this.g = t, this.b = n
    }

    function bn(e) {
        return e < 16 ? "0" + Math.max(0, e).toString(16) : Math.min(255, e).toString(16)
    }

    function wn(e, t, n) {
        var r = 0,
            i = 0,
            s = 0,
            o, u, a;
        o = /([a-z]+)\((.*)\)/i.exec(e);
        if (o) {
            u = o[2].split(",");
            switch (o[1]) {
                case "hsl":
                    return n(parseFloat(u[0]), parseFloat(u[1]) / 100, parseFloat(u[2]) / 100);
                case "rgb":
                    return t(Tn(u[0]), Tn(u[1]), Tn(u[2]))
            }
        }
        return (a = Nn.get(e)) ? t(a.r, a.g, a.b) : (e != null && e.charAt(0) === "#" && !isNaN(a = parseInt(e.substring(1), 16)) && (e.length === 4 ? (r = (a & 3840) >> 4, r = r >> 4 | r, i = a & 240, i = i >> 4 | i, s = a & 15, s = s << 4 | s) : e.length === 7 && (r = (a & 16711680) >> 16, i = (a & 65280) >> 8, s = a & 255)), t(r, i, s))
    }

    function En(e, t, n) {
        var r = Math.min(e /= 255, t /= 255, n /= 255),
            i = Math.max(e, t, n),
            s = i - r,
            o, u, a = (i + r) / 2;
        return s ? (u = a < .5 ? s / (i + r) : s / (2 - i - r), e == i ? o = (t - n) / s + (t < n ? 6 : 0) : t == i ? o = (n - e) / s + 2 : o = (e - t) / s + 4, o *= 60) : (o = NaN, u = a > 0 && a < 1 ? 0 : o), $t(o, u, a)
    }

    function Sn(e, t, n) {
        e = xn(e), t = xn(t), n = xn(n);
        var r = hn((.4124564 * e + .3575761 * t + .1804375 * n) / sn),
            i = hn((.2126729 * e + .7151522 * t + .072175 * n) / on),
            s = hn((.0193339 * e + .119192 * t + .9503041 * n) / un);
        return tn(116 * i - 16, 500 * (r - i), 200 * (i - s))
    }

    function xn(e) {
        return (e /= 255) <= .04045 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
    }

    function Tn(e) {
        var t = parseFloat(e);
        return e.charAt(e.length - 1) === "%" ? Math.round(t * 2.55) : t
    }

    function Cn(e) {
        return typeof e == "function" ? e : function() {
            return e
        }
    }

    function kn(e) {
        return e
    }

    function Ln(e) {
        return function(t, n, r) {
            return arguments.length === 2 && typeof n == "function" && (r = n, n = null), An(t, n, e, r)
        }
    }

    function An(t, r, i, o) {
        function h() {
            var e = l.status,
                t;
            if (!e && l.responseText || e >= 200 && e < 300 || e === 304) {
                try {
                    t = i.call(u, l)
                } catch (n) {
                    a.error.call(u, n);
                    return
                }
                a.load.call(u, t)
            } else a.error.call(u, l)
        }
        var u = {},
            a = e.dispatch("beforesend", "progress", "load", "error"),
            f = {},
            l = new XMLHttpRequest,
            c = null;
        return s.XDomainRequest && !("withCredentials" in l) && /^(http(s)?:)?\/\//.test(t) && (l = new XDomainRequest), "onload" in l ? l.onload = l.onerror = h : l.onreadystatechange = function() {
            l.readyState > 3 && h()
        }, l.onprogress = function(t) {
            var n = e.event;
            e.event = t;
            try {
                a.progress.call(u, l)
            } finally {
                e.event = n
            }
        }, u.header = function(e, t) {
            return e = (e + "").toLowerCase(), arguments.length < 2 ? f[e] : (t == null ? delete f[e] : f[e] = t + "", u)
        }, u.mimeType = function(e) {
            return arguments.length ? (r = e == null ? null : e + "", u) : r
        }, u.responseType = function(e) {
            return arguments.length ? (c = e, u) : c
        }, u.response = function(e) {
            return i = e, u
        }, ["get", "post"].forEach(function(e) {
            u[e] = function() {
                return u.send.apply(u, [e].concat(n(arguments)))
            }
        }), u.send = function(e, n, i) {
            arguments.length === 2 && typeof n == "function" && (i = n, n = null), l.open(e, t, !0), r != null && !("accept" in f) && (f.accept = r + ",*/*");
            if (l.setRequestHeader)
                for (var s in f) l.setRequestHeader(s, f[s]);
            return r != null && l.overrideMimeType && l.overrideMimeType(r), c != null && (l.responseType = c), i != null && u.on("error", i).on("load", function(e) {
                i(null, e)
            }), a.beforesend.call(u, l), l.send(n == null ? null : n), u
        }, u.abort = function() {
            return l.abort(), u
        }, e.rebind(u, a, "on"), o == null ? u : u.get(On(o))
    }

    function On(e) {
        return e.length === 1 ? function(t, n) {
            e(t == null ? n : null)
        } : e
    }

    function jn() {
        var e = Fn(),
            t = In() - e;
        t > 24 ? (isFinite(t) && (clearTimeout(Pn), Pn = setTimeout(jn, t)), Dn = 0) : (Dn = 1, Bn(jn))
    }

    function Fn() {
        var e = Date.now();
        Hn = Mn;
        while (Hn) e >= Hn.t && (Hn.f = Hn.c(e - Hn.t)), Hn = Hn.n;
        return e
    }

    function In() {
        var e, t = Mn,
            n = Infinity;
        while (t) t.f ? t = e ? e.n = t.n : Mn = t.n : (t.t < n && (n = t.t), t = (e = t).n);
        return _n = e, n
    }

    function qn(e, t) {
        return t - (e ? Math.ceil(Math.log(e) / Math.LN10) : 1)
    }

    function Un(e, t) {
        var n = Math.pow(10, y(8 - t) * 3);
        return {
            scale: t > 8 ? function(e) {
                return e / n
            } : function(e) {
                return e * n
            },
            symbol: e
        }
    }

    function zn(t) {
        var n = t.decimal,
            r = t.thousands,
            i = t.grouping,
            s = t.currency,
            o = i ? function(e) {
                var t = e.length,
                    n = [],
                    s = 0,
                    o = i[0];
                while (t > 0 && o > 0) n.push(e.substring(t -= o, t + o)), o = i[s = (s + 1) % i.length];
                return n.reverse().join(r)
            } : kn;
        return function(t) {
            var r = Wn.exec(t),
                i = r[1] || " ",
                u = r[2] || ">",
                a = r[3] || "",
                f = r[4] || "",
                l = r[5],
                c = +r[6],
                h = r[7],
                p = r[8],
                d = r[9],
                v = 1,
                m = "",
                g = "",
                y = !1;
            p && (p = +p.substring(1));
            if (l || i === "0" && u === "=") l = i = "0", u = "=", h && (c -= Math.floor((c - 1) / 4));
            switch (d) {
                case "n":
                    h = !0, d = "g";
                    break;
                case "%":
                    v = 100, g = "%", d = "f";
                    break;
                case "p":
                    v = 100, g = "%", d = "r";
                    break;
                case "b":
                case "o":
                case "x":
                case "X":
                    f === "#" && (m = "0" + d.toLowerCase());
                case "c":
                case "d":
                    y = !0, p = 0;
                    break;
                case "s":
                    v = -1, d = "r"
            }
            f === "$" && (m = s[0], g = s[1]), d == "r" && !p && (d = "g");
            if (p != null)
                if (d == "g") p = Math.max(1, Math.min(21, p));
                else if (d == "e" || d == "f") p = Math.max(0, Math.min(20, p));
            d = Xn.get(d) || Vn;
            var b = l && h;
            return function(t) {
                var r = g;
                if (y && t % 1) return "";
                var s = t < 0 || t === 0 && 1 / t < 0 ? (t = -t, "-") : a;
                if (v < 0) {
                    var f = e.formatPrefix(t, p);
                    t = f.scale(t), r = f.symbol + g
                } else t *= v;
                t = d(t, p);
                var w = t.lastIndexOf("."),
                    E = w < 0 ? t : t.substring(0, w),
                    S = w < 0 ? "" : n + t.substring(w + 1);
                !l && h && (E = o(E));
                var x = m.length + E.length + S.length + (b ? 0 : s.length),
                    T = x < c ? (new Array(x = c - x + 1)).join(i) : "";
                return b && (E = o(T + E)), s += m, t = E + S, (u === "<" ? s + t + T : u === ">" ? T + s + t : u === "^" ? T.substring(0, x >>= 1) + s + t + T.substring(x) : s + (b ? t : T + t)) + r
            }
        }
    }

    function Vn(e) {
        return e + ""
    }

    function Kn() {
        this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
    }

    function Gn(e, t, n) {
        function r(t) {
            var n = e(t),
                r = s(n, 1);
            return t - n < r - t ? n : r
        }

        function i(n) {
            return t(n = e(new Jn(n - 1)), 1), n
        }

        function s(e, n) {
            return t(e = new Jn(+e), n), e
        }

        function o(e, r, s) {
            var o = i(e),
                u = [];
            if (s > 1)
                while (o < r) n(o) % s || u.push(new Date(+o)), t(o, 1);
            else
                while (o < r) u.push(new Date(+o)), t(o, 1);
            return u
        }

        function u(e, t, n) {
            try {
                Jn = Kn;
                var r = new Kn;
                return r._ = e, o(r, t, n)
            } finally {
                Jn = Date
            }
        }
        e.floor = e, e.round = r, e.ceil = i, e.offset = s, e.range = o;
        var a = e.utc = Yn(e);
        return a.floor = a, a.round = Yn(r), a.ceil = Yn(i), a.offset = Yn(s), a.range = u, e
    }

    function Yn(e) {
        return function(t, n) {
            try {
                Jn = Kn;
                var r = new Kn;
                return r._ = t, e(r, n)._
            } finally {
                Jn = Date
            }
        }
    }

    function Zn(t) {
        function l(e) {
            function n(n) {
                var r = [],
                    i = -1,
                    s = 0,
                    o, u, a;
                while (++i < t)
                    if (e.charCodeAt(i) === 37) {
                        r.push(e.substring(s, i)), (u = er[o = e.charAt(++i)]) != null && (o = e.charAt(++i));
                        if (a = E[o]) o = a(n, u == null ? o === "e" ? " " : "0" : u);
                        r.push(o), s = i + 1
                    }
                return r.push(e.substring(s, i)), r.join("")
            }
            var t = e.length;
            return n.parse = function(t) {
                var n = {
                        y: 1900,
                        m: 0,
                        d: 1,
                        H: 0,
                        M: 0,
                        S: 0,
                        L: 0,
                        Z: null
                    },
                    r = c(n, e, t, 0);
                if (r != t.length) return null;
                "p" in n && (n.H = n.H % 12 + n.p * 12);
                var i = n.Z != null && Jn !== Kn,
                    s = new(i ? Kn : Jn);
                return "j" in n ? s.setFullYear(n.y, 0, n.j) : "w" in n && ("W" in n || "U" in n) ? (s.setFullYear(n.y, 0, 1), s.setFullYear(n.y, 0, "W" in n ? (n.w + 6) % 7 + n.W * 7 - (s.getDay() + 5) % 7 : n.w + n.U * 7 - (s.getDay() + 6) % 7)) : s.setFullYear(n.y, n.m, n.d), s.setHours(n.H + Math.floor(n.Z / 100), n.M + n.Z % 100, n.S, n.L), i ? s._ : s
            }, n.toString = function() {
                return e
            }, n
        }

        function c(e, t, n, r) {
            var i, s, o, u = 0,
                a = t.length,
                f = n.length;
            while (u < a) {
                if (r >= f) return -1;
                i = t.charCodeAt(u++);
                if (i === 37) {
                    o = t.charAt(u++), s = S[o in er ? t.charAt(u++) : o];
                    if (!s || (r = s(e, n, r)) < 0) return -1
                } else if (i != n.charCodeAt(r++)) return -1
            }
            return r
        }

        function x(e, t, n) {
            v.lastIndex = 0;
            var r = v.exec(t.substring(n));
            return r ? (e.w = m.get(r[0].toLowerCase()), n + r[0].length) : -1
        }

        function T(e, t, n) {
            p.lastIndex = 0;
            var r = p.exec(t.substring(n));
            return r ? (e.w = d.get(r[0].toLowerCase()), n + r[0].length) : -1
        }

        function N(e, t, n) {
            b.lastIndex = 0;
            var r = b.exec(t.substring(n));
            return r ? (e.m = w.get(r[0].toLowerCase()), n + r[0].length) : -1
        }

        function C(e, t, n) {
            g.lastIndex = 0;
            var r = g.exec(t.substring(n));
            return r ? (e.m = y.get(r[0].toLowerCase()), n + r[0].length) : -1
        }

        function k(e, t, n) {
            return c(e, E.c.toString(), t, n)
        }

        function L(e, t, n) {
            return c(e, E.x.toString(), t, n)
        }

        function A(e, t, n) {
            return c(e, E.X.toString(), t, n)
        }

        function O(e, t, n) {
            var r = h.get(t.substring(n, n += 2).toLowerCase());
            return r == null ? -1 : (e.p = r, n)
        }
        var n = t.dateTime,
            r = t.date,
            i = t.time,
            s = t.periods,
            o = t.days,
            u = t.shortDays,
            a = t.months,
            f = t.shortMonths;
        l.utc = function(e) {
            function n(e) {
                try {
                    Jn = Kn;
                    var n = new Jn;
                    return n._ = e, t(n)
                } finally {
                    Jn = Date
                }
            }
            var t = l(e);
            return n.parse = function(e) {
                try {
                    Jn = Kn;
                    var n = t.parse(e);
                    return n && n._
                } finally {
                    Jn = Date
                }
            }, n.toString = t.toString, n
        }, l.multi = l.utc.multi = Sr;
        var h = e.map(),
            p = ir(o),
            d = sr(o),
            v = ir(u),
            m = sr(u),
            g = ir(a),
            y = sr(a),
            b = ir(f),
            w = sr(f);
        s.forEach(function(e, t) {
            h.set(e.toLowerCase(), t)
        });
        var E = {
                a: function(e) {
                    return u[e.getDay()]
                },
                A: function(e) {
                    return o[e.getDay()]
                },
                b: function(e) {
                    return f[e.getMonth()]
                },
                B: function(e) {
                    return a[e.getMonth()]
                },
                c: l(n),
                d: function(e, t) {
                    return rr(e.getDate(), t, 2)
                },
                e: function(e, t) {
                    return rr(e.getDate(), t, 2)
                },
                H: function(e, t) {
                    return rr(e.getHours(), t, 2)
                },
                I: function(e, t) {
                    return rr(e.getHours() % 12 || 12, t, 2)
                },
                j: function(e, t) {
                    return rr(1 + $n.dayOfYear(e), t, 3)
                },
                L: function(e, t) {
                    return rr(e.getMilliseconds(), t, 3)
                },
                m: function(e, t) {
                    return rr(e.getMonth() + 1, t, 2)
                },
                M: function(e, t) {
                    return rr(e.getMinutes(), t, 2)
                },
                p: function(e) {
                    return s[+(e.getHours() >= 12)]
                },
                S: function(e, t) {
                    return rr(e.getSeconds(), t, 2)
                },
                U: function(e, t) {
                    return rr($n.sundayOfYear(e), t, 2)
                },
                w: function(e) {
                    return e.getDay()
                },
                W: function(e, t) {
                    return rr($n.mondayOfYear(e), t, 2)
                },
                x: l(r),
                X: l(i),
                y: function(e, t) {
                    return rr(e.getFullYear() % 100, t, 2)
                },
                Y: function(e, t) {
                    return rr(e.getFullYear() % 1e4, t, 4)
                },
                Z: wr,
                "%": function() {
                    return "%"
                }
            },
            S = {
                a: x,
                A: T,
                b: N,
                B: C,
                c: k,
                d: dr,
                e: dr,
                H: mr,
                I: mr,
                j: vr,
                L: br,
                m: pr,
                M: gr,
                p: O,
                S: yr,
                U: ur,
                w: or,
                W: ar,
                x: L,
                X: A,
                y: lr,
                Y: fr,
                Z: cr,
                "%": Er
            };
        return l
    }

    function rr(e, t, n) {
        var r = e < 0 ? "-" : "",
            i = (r ? -e : e) + "",
            s = i.length;
        return r + (s < n ? (new Array(n - s + 1)).join(t) + i : i)
    }

    function ir(t) {
        return new RegExp("^(?:" + t.map(e.requote).join("|") + ")", "i")
    }

    function sr(e) {
        var t = new E,
            n = -1,
            r = e.length;
        while (++n < r) t.set(e[n].toLowerCase(), n);
        return t
    }

    function or(e, t, n) {
        tr.lastIndex = 0;
        var r = tr.exec(t.substring(n, n + 1));
        return r ? (e.w = +r[0], n + r[0].length) : -1
    }

    function ur(e, t, n) {
        tr.lastIndex = 0;
        var r = tr.exec(t.substring(n));
        return r ? (e.U = +r[0], n + r[0].length) : -1
    }

    function ar(e, t, n) {
        tr.lastIndex = 0;
        var r = tr.exec(t.substring(n));
        return r ? (e.W = +r[0], n + r[0].length) : -1
    }

    function fr(e, t, n) {
        tr.lastIndex = 0;
        var r = tr.exec(t.substring(n, n + 4));
        return r ? (e.y = +r[0], n + r[0].length) : -1
    }

    function lr(e, t, n) {
        tr.lastIndex = 0;
        var r = tr.exec(t.substring(n, n + 2));
        return r ? (e.y = hr(+r[0]), n + r[0].length) : -1
    }

    function cr(e, t, n) {
        return /^[+-]\d{4}$/.test(t = t.substring(n, n + 5)) ? (e.Z = -t, n + 5) : -1
    }

    function hr(e) {
        return e + (e > 68 ? 1900 : 2e3)
    }

    function pr(e, t, n) {
        tr.lastIndex = 0;
        var r = tr.exec(t.substring(n, n + 2));
        return r ? (e.m = r[0] - 1, n + r[0].length) : -1
    }

    function dr(e, t, n) {
        tr.lastIndex = 0;
        var r = tr.exec(t.substring(n, n + 2));
        return r ? (e.d = +r[0], n + r[0].length) : -1
    }

    function vr(e, t, n) {
        tr.lastIndex = 0;
        var r = tr.exec(t.substring(n, n + 3));
        return r ? (e.j = +r[0], n + r[0].length) : -1
    }

    function mr(e, t, n) {
        tr.lastIndex = 0;
        var r = tr.exec(t.substring(n, n + 2));
        return r ? (e.H = +r[0], n + r[0].length) : -1
    }

    function gr(e, t, n) {
        tr.lastIndex = 0;
        var r = tr.exec(t.substring(n, n + 2));
        return r ? (e.M = +r[0], n + r[0].length) : -1
    }

    function yr(e, t, n) {
        tr.lastIndex = 0;
        var r = tr.exec(t.substring(n, n + 2));
        return r ? (e.S = +r[0], n + r[0].length) : -1
    }

    function br(e, t, n) {
        tr.lastIndex = 0;
        var r = tr.exec(t.substring(n, n + 3));
        return r ? (e.L = +r[0], n + r[0].length) : -1
    }

    function wr(e) {
        var t = e.getTimezoneOffset(),
            n = t > 0 ? "-" : "+",
            r = ~~(y(t) / 60),
            i = y(t) % 60;
        return n + rr(r, "0", 2) + rr(i, "0", 2)
    }

    function Er(e, t, n) {
        nr.lastIndex = 0;
        var r = nr.exec(t.substring(n, n + 1));
        return r ? n + r[0].length : -1
    }

    function Sr(e) {
        var t = e.length,
            n = -1;
        while (++n < t) e[n][0] = this(e[n][0]);
        return function(t) {
            var n = 0,
                r = e[n];
            while (!r[1](t)) r = e[++n];
            return r[0](t)
        }
    }

    function Tr() {}

    function Cr(e, t, n) {
        var r = n.s = e + t,
            i = r - e,
            s = r - i;
        n.t = e - s + (t - i)
    }

    function kr(e, t) {
        e && Ar.hasOwnProperty(e.type) && Ar[e.type](e, t)
    }

    function Or(e, t, n) {
        var r = -1,
            i = e.length - n,
            s;
        t.lineStart();
        while (++r < i) s = e[r], t.point(s[0], s[1], s[2]);
        t.lineEnd()
    }

    function Mr(e, t) {
        var n = -1,
            r = e.length;
        t.polygonStart();
        while (++n < r) Or(e[n], t, 1);
        t.polygonEnd()
    }

    function Hr() {
        function s(e, t) {
            e *= Ot, t = t * Ot / 2 + Nt / 4;
            var s = e - n,
                o = s >= 0 ? 1 : -1,
                u = o * s,
                a = Math.cos(t),
                f = Math.sin(t),
                l = i * f,
                c = r * a + l * Math.cos(u),
                h = l * o * Math.sin(u);
            Dr.add(Math.atan2(h, c)), n = e, r = a, i = f
        }
        var e, t, n, r, i;
        Pr.point = function(o, u) {
            Pr.point = s, n = (e = o) * Ot, r = Math.cos(u = (t = u) * Ot / 2 + Nt / 4), i = Math.sin(u)
        }, Pr.lineEnd = function() {
            s(e, t)
        }
    }

    function Br(e) {
        var t = e[0],
            n = e[1],
            r = Math.cos(n);
        return [r * Math.cos(t), r * Math.sin(t), Math.sin(n)]
    }

    function jr(e, t) {
        return e[0] * t[0] + e[1] * t[1] + e[2] * t[2]
    }

    function Fr(e, t) {
        return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]]
    }

    function Ir(e, t) {
        e[0] += t[0], e[1] += t[1], e[2] += t[2]
    }

    function qr(e, t) {
        return [e[0] * t, e[1] * t, e[2] * t]
    }

    function Rr(e) {
        var t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
        e[0] /= t, e[1] /= t, e[2] /= t
    }

    function Ur(e) {
        return [Math.atan2(e[1], e[0]), Ht(e[2])]
    }

    function zr(e, t) {
        return y(e[0] - t[0]) < Lt && y(e[1] - t[1]) < Lt
    }

    function ni(e, t) {
        e *= Ot;
        var n = Math.cos(t *= Ot);
        ri(n * Math.cos(e), n * Math.sin(e), Math.sin(t))
    }

    function ri(e, t, n) {
        ++Wr, Vr += (e - Vr) / Wr, $r += (t - $r) / Wr, Jr += (n - Jr) / Wr
    }

    function ii() {
        function r(r, i) {
            r *= Ot;
            var s = Math.cos(i *= Ot),
                o = s * Math.cos(r),
                u = s * Math.sin(r),
                a = Math.sin(i),
                f = Math.atan2(Math.sqrt((f = t * a - n * u) * f + (f = n * o - e * a) * f + (f = e * u - t * o) * f), e * o + t * u + n * a);
            Xr += f, Kr += f * (e + (e = o)), Qr += f * (t + (t = u)), Gr += f * (n + (n = a)), ri(e, t, n)
        }
        var e, t, n;
        ti.point = function(i, s) {
            i *= Ot;
            var o = Math.cos(s *= Ot);
            e = o * Math.cos(i), t = o * Math.sin(i), n = Math.sin(s), ti.point = r, ri(e, t, n)
        }
    }

    function si() {
        ti.point = ni
    }

    function oi() {
        function s(e, t) {
            e *= Ot;
            var s = Math.cos(t *= Ot),
                o = s * Math.cos(e),
                u = s * Math.sin(e),
                a = Math.sin(t),
                f = r * a - i * u,
                l = i * o - n * a,
                c = n * u - r * o,
                h = Math.sqrt(f * f + l * l + c * c),
                p = n * o + r * u + i * a,
                d = h && -Pt(p) / h,
                v = Math.atan2(h, p);
            Yr += d * f, Zr += d * l, ei += d * c, Xr += v, Kr += v * (n + (n = o)), Qr += v * (r + (r = u)), Gr += v * (i + (i = a)), ri(n, r, i)
        }
        var e, t, n, r, i;
        ti.point = function(o, u) {
            e = o, t = u, ti.point = s, o *= Ot;
            var a = Math.cos(u *= Ot);
            n = a * Math.cos(o), r = a * Math.sin(o), i = Math.sin(u), ri(n, r, i)
        }, ti.lineEnd = function() {
            s(e, t), ti.lineEnd = si, ti.point = ni
        }
    }

    function ui() {
        return !0
    }

    function ai(e, t, n, r, i) {
        var s = [],
            o = [];
        e.forEach(function(e) {
            if ((t = e.length - 1) <= 0) return;
            var t, n = e[0],
                r = e[t];
            if (zr(n, r)) {
                i.lineStart();
                for (var u = 0; u < t; ++u) i.point((n = e[u])[0], n[1]);
                i.lineEnd();
                return
            }
            var a = new li(n, e, null, !0),
                f = new li(n, null, a, !1);
            a.o = f, s.push(a), o.push(f), a = new li(r, e, null, !1), f = new li(r, null, a, !0), a.o = f, s.push(a), o.push(f)
        }), o.sort(t), fi(s), fi(o);
        if (!s.length) return;
        for (var u = 0, a = n, f = o.length; u < f; ++u) o[u].e = a = !a;
        var l = s[0],
            c, h;
        for (;;) {
            var p = l,
                d = !0;
            while (p.v)
                if ((p = p.n) === l) return;
            c = p.z, i.lineStart();
            do {
                p.v = p.o.v = !0;
                if (p.e) {
                    if (d)
                        for (var u = 0, f = c.length; u < f; ++u) i.point((h = c[u])[0], h[1]);
                    else r(p.x, p.n.x, 1, i);
                    p = p.n
                } else {
                    if (d) {
                        c = p.p.z;
                        for (var u = c.length - 1; u >= 0; --u) i.point((h = c[u])[0], h[1])
                    } else r(p.x, p.p.x, -1, i);
                    p = p.p
                }
                p = p.o, c = p.z, d = !d
            } while (!p.v);
            i.lineEnd()
        }
    }

    function fi(e) {
        if (!(t = e.length)) return;
        var t, n = 0,
            r = e[0],
            i;
        while (++n < t) r.n = i = e[n], i.p = r, r = i;
        r.n = i = e[0], i.p = r
    }

    function li(e, t, n, r) {
        this.x = e, this.z = t, this.o = n, this.e = r, this.v = !1, this.n = this.p = null
    }

    function ci(t, n, r, i) {
        return function(s, o) {
            function l(e, n) {
                var r = s(e, n);
                t(e = r[0], n = r[1]) && o.point(e, n)
            }

            function c(e, t) {
                var n = s(e, t);
                u.point(n[0], n[1])
            }

            function h() {
                f.point = c, u.lineStart()
            }

            function p() {
                f.point = l, u.lineEnd()
            }

            function w(e, t) {
                b.push([e, t]);
                var n = s(e, t);
                m.point(n[0], n[1])
            }

            function E() {
                m.lineStart(), b = []
            }

            function S() {
                w(b[0][0], b[0][1]), m.lineEnd();
                var e = m.clean(),
                    t = v.buffer(),
                    n, r = t.length;
                b.pop(), y.push(b), b = null;
                if (!r) return;
                if (e & 1) {
                    n = t[0];
                    var r = n.length - 1,
                        i = -1,
                        s;
                    if (r > 0) {
                        g || (o.polygonStart(), g = !0), o.lineStart();
                        while (++i < r) o.point((s = n[i])[0], s[1]);
                        o.lineEnd()
                    }
                    return
                }
                r > 1 && e & 2 && t.push(t.pop().concat(t.shift())), d.push(t.filter(hi))
            }
            var u = n(o),
                a = s.invert(i[0], i[1]),
                f = {
                    point: l,
                    lineStart: h,
                    lineEnd: p,
                    polygonStart: function() {
                        f.point = w, f.lineStart = E, f.lineEnd = S, d = [], y = []
                    },
                    polygonEnd: function() {
                        f.point = l, f.lineStart = h, f.lineEnd = p, d = e.merge(d);
                        var t = vi(a, y);
                        d.length ? (g || (o.polygonStart(), g = !0), ai(d, di, t, r, o)) : t && (g || (o.polygonStart(), g = !0), o.lineStart(), r(null, null, 1, o), o.lineEnd()), g && (o.polygonEnd(), g = !1), d = y = null
                    },
                    sphere: function() {
                        o.polygonStart(), o.lineStart(), r(null, null, 1, o), o.lineEnd(), o.polygonEnd()
                    }
                },
                d, v = pi(),
                m = n(v),
                g = !1,
                y, b;
            return f
        }
    }

    function hi(e) {
        return e.length > 1
    }

    function pi() {
        var e = [],
            t;
        return {
            lineStart: function() {
                e.push(t = [])
            },
            point: function(e, n) {
                t.push([e, n])
            },
            lineEnd: D,
            buffer: function() {
                var n = e;
                return e = [], t = null, n
            },
            rejoin: function() {
                e.length > 1 && e.push(e.pop().concat(e.shift()))
            }
        }
    }

    function di(e, t) {
        return ((e = e.x)[0] < 0 ? e[1] - kt - Lt : kt - e[1]) - ((t = t.x)[0] < 0 ? t[1] - kt - Lt : kt - t[1])
    }

    function vi(e, t) {
        var n = e[0],
            r = e[1],
            i = [Math.sin(n), -Math.cos(n), 0],
            s = 0,
            o = 0;
        Dr.reset();
        for (var u = 0, a = t.length; u < a; ++u) {
            var f = t[u],
                l = f.length;
            if (!l) continue;
            var c = f[0],
                h = c[0],
                p = c[1] / 2 + Nt / 4,
                d = Math.sin(p),
                v = Math.cos(p),
                m = 1;
            for (;;) {
                m === l && (m = 0), e = f[m];
                var g = e[0],
                    y = e[1] / 2 + Nt / 4,
                    b = Math.sin(y),
                    w = Math.cos(y),
                    E = g - h,
                    S = E >= 0 ? 1 : -1,
                    x = S * E,
                    T = x > Nt,
                    N = d * b;
                Dr.add(Math.atan2(N * S * Math.sin(x), v * w + N * Math.cos(x))), s += T ? E + S * Ct : E;
                if (T ^ h >= n ^ g >= n) {
                    var C = Fr(Br(c), Br(e));
                    Rr(C);
                    var k = Fr(i, C);
                    Rr(k);
                    var L = (T ^ E >= 0 ? -1 : 1) * Ht(k[2]);
                    if (r > L || r === L && (C[0] || C[1])) o += T ^ E >= 0 ? 1 : -1
                }
                if (!(m++)) break;
                h = g, d = b, v = w, c = e
            }
        }
        return (s < -Lt || s < Lt && Dr < 0) ^ o & 1
    }

    function gi(e) {
        var t = NaN,
            n = NaN,
            r = NaN,
            i;
        return {
            lineStart: function() {
                e.lineStart(), i = 1
            },
            point: function(s, o) {
                var u = s > 0 ? Nt : -Nt,
                    a = y(s - t);
                y(a - Nt) < Lt ? (e.point(t, n = (n + o) / 2 > 0 ? kt : -kt), e.point(r, n), e.lineEnd(), e.lineStart(), e.point(u, n), e.point(s, n), i = 0) : r !== u && a >= Nt && (y(t - r) < Lt && (t -= r * Lt), y(s - u) < Lt && (s -= u * Lt), n = yi(t, n, s, o), e.point(r, n), e.lineEnd(), e.lineStart(), e.point(u, n), i = 0), e.point(t = s, n = o), r = u
            },
            lineEnd: function() {
                e.lineEnd(), t = n = NaN
            },
            clean: function() {
                return 2 - i
            }
        }
    }

    function yi(e, t, n, r) {
        var i, s, o = Math.sin(e - n);
        return y(o) > Lt ? Math.atan((Math.sin(t) * (s = Math.cos(r)) * Math.sin(n) - Math.sin(r) * (i = Math.cos(t)) * Math.sin(e)) / (i * s * o)) : (t + r) / 2
    }

    function bi(e, t, n, r) {
        var i;
        if (e == null) i = n * kt, r.point(-Nt, i), r.point(0, i), r.point(Nt, i), r.point(Nt, 0), r.point(Nt, -i), r.point(0, -i), r.point(-Nt, -i), r.point(-Nt, 0), r.point(-Nt, i);
        else if (y(e[0] - t[0]) > Lt) {
            var s = e[0] < t[0] ? Nt : -Nt;
            i = n * s / 2, r.point(-s, i), r.point(0, i), r.point(s, i)
        } else r.point(t[0], t[1])
    }

    function wi(e) {
        function s(e, n) {
            return Math.cos(e) * Math.cos(n) > t
        }

        function o(e) {
            var t, i, o, f, l;
            return {
                lineStart: function() {
                    f = o = !1, l = 1
                },
                point: function(c, h) {
                    var p = [c, h],
                        d, v = s(c, h),
                        m = n ? v ? 0 : a(c, h) : v ? a(c + (c < 0 ? Nt : -Nt), h) : 0;
                    !t && (f = o = v) && e.lineStart();
                    if (v !== o) {
                        d = u(t, p);
                        if (zr(t, d) || zr(p, d)) p[0] += Lt, p[1] += Lt, v = s(p[0], p[1])
                    }
                    if (v !== o) l = 0, v ? (e.lineStart(), d = u(p, t), e.point(d[0], d[1])) : (d = u(t, p), e.point(d[0], d[1]), e.lineEnd()), t = d;
                    else if (r && t && n ^ v) {
                        var g;
                        !(m & i) && (g = u(p, t, !0)) && (l = 0, n ? (e.lineStart(), e.point(g[0][0], g[0][1]), e.point(g[1][0], g[1][1]), e.lineEnd()) : (e.point(g[1][0], g[1][1]), e.lineEnd(), e.lineStart(), e.point(g[0][0], g[0][1])))
                    }
                    v && (!t || !zr(t, p)) && e.point(p[0], p[1]), t = p, o = v, i = m
                },
                lineEnd: function() {
                    o && e.lineEnd(), t = null
                },
                clean: function() {
                    return l | (f && o) << 1
                }
            }
        }

        function u(e, n, r) {
            var i = Br(e),
                s = Br(n),
                o = [1, 0, 0],
                u = Fr(i, s),
                a = jr(u, u),
                f = u[0],
                l = a - f * f;
            if (!l) return !r && e;
            var c = t * a / l,
                h = -t * f / l,
                p = Fr(o, u),
                d = qr(o, c),
                v = qr(u, h);
            Ir(d, v);
            var m = p,
                g = jr(d, m),
                b = jr(m, m),
                w = g * g - b * (jr(d, d) - 1);
            if (w < 0) return;
            var E = Math.sqrt(w),
                S = qr(m, (-g - E) / b);
            Ir(S, d), S = Ur(S);
            if (!r) return S;
            var x = e[0],
                T = n[0],
                N = e[1],
                C = n[1],
                k;
            T < x && (k = x, x = T, T = k);
            var L = T - x,
                A = y(L - Nt) < Lt,
                O = A || L < Lt;
            !A && C < N && (k = N, N = C, C = k);
            if (O ? A ? N + C > 0 ^ S[1] < (y(S[0] - x) < Lt ? N : C) : N <= S[1] && S[1] <= C : L > Nt ^ (x <= S[0] && S[0] <= T)) {
                var M = qr(m, (-g + E) / b);
                return Ir(M, d), [S, Ur(M)]
            }
        }

        function a(t, r) {
            var i = n ? e : Nt - e,
                s = 0;
            return t < -i ? s |= 1 : t > i && (s |= 2), r < -i ? s |= 4 : r > i && (s |= 8), s
        }
        var t = Math.cos(e),
            n = t > 0,
            r = y(t) > Lt,
            i = is(e, 6 * Ot);
        return ci(s, o, i, n ? [0, -e] : [-Nt, e - Nt])
    }

    function Ei(e, t, n, r) {
        return function(i) {
            var s = i.a,
                o = i.b,
                u = s.x,
                a = s.y,
                f = o.x,
                l = o.y,
                c = 0,
                h = 1,
                p = f - u,
                d = l - a,
                v;
            v = e - u;
            if (!p && v > 0) return;
            v /= p;
            if (p < 0) {
                if (v < c) return;
                v < h && (h = v)
            } else if (p > 0) {
                if (v > h) return;
                v > c && (c = v)
            }
            v = n - u;
            if (!p && v < 0) return;
            v /= p;
            if (p < 0) {
                if (v > h) return;
                v > c && (c = v)
            } else if (p > 0) {
                if (v < c) return;
                v < h && (h = v)
            }
            v = t - a;
            if (!d && v > 0) return;
            v /= d;
            if (d < 0) {
                if (v < c) return;
                v < h && (h = v)
            } else if (d > 0) {
                if (v > h) return;
                v > c && (c = v)
            }
            v = r - a;
            if (!d && v < 0) return;
            v /= d;
            if (d < 0) {
                if (v > h) return;
                v > c && (c = v)
            } else if (d > 0) {
                if (v < c) return;
                v < h && (h = v)
            }
            return c > 0 && (i.a = {
                x: u + c * p,
                y: a + c * d
            }), h < 1 && (i.b = {
                x: u + h * p,
                y: a + h * d
            }), i
        }
    }

    function xi(t, n, r, i) {
        function s(e, i) {
            return y(e[0] - t) < Lt ? i > 0 ? 0 : 3 : y(e[0] - r) < Lt ? i > 0 ? 2 : 1 : y(e[1] - n) < Lt ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2
        }

        function o(e, t) {
            return u(e.x, t.x)
        }

        function u(e, t) {
            var n = s(e, 1),
                r = s(t, 1);
            return n !== r ? n - r : n === 0 ? t[1] - e[1] : n === 1 ? e[0] - t[0] : n === 2 ? e[1] - t[1] : t[0] - e[0]
        }
        return function(a) {
            function m(e) {
                var t = 0,
                    n = p.length,
                    r = e[1];
                for (var i = 0; i < n; ++i)
                    for (var s = 1, o = p[i], u = o.length, a = o[0], f; s < u; ++s) f = o[s], a[1] <= r ? f[1] > r && Dt(a, f, e) > 0 && ++t : f[1] <= r && Dt(a, f, e) < 0 && --t, a = f;
                return t !== 0
            }

            function g(e, o, a, f) {
                var l = 0,
                    c = 0;
                if (e == null || (l = s(e, a)) !== (c = s(o, a)) || u(e, o) < 0 ^ a > 0) {
                    do f.point(l === 0 || l === 3 ? t : r, l > 1 ? i : n); while ((l = (l + a + 4) % 4) !== c)
                } else f.point(o[0], o[1])
            }

            function y(e, s) {
                return t <= e && e <= r && n <= s && s <= i
            }

            function b(e, t) {
                y(e, t) && a.point(e, t)
            }

            function L() {
                v.point = O, p && p.push(d = []), C = !0, N = !1, x = T = NaN
            }

            function A() {
                h && (O(w, E), S && N && l.rejoin(), h.push(l.buffer())), v.point = b, N && a.lineEnd()
            }

            function O(e, t) {
                e = Math.max(-Si, Math.min(Si, e)), t = Math.max(-Si, Math.min(Si, t));
                var n = y(e, t);
                p && d.push([e, t]);
                if (C) w = e, E = t, S = n, C = !1, n && (a.lineStart(), a.point(e, t));
                else if (n && N) a.point(e, t);
                else {
                    var r = {
                        a: {
                            x: x,
                            y: T
                        },
                        b: {
                            x: e,
                            y: t
                        }
                    };
                    c(r) ? (N || (a.lineStart(), a.point(r.a.x, r.a.y)), a.point(r.b.x, r.b.y), n || a.lineEnd(), k = !1) : n && (a.lineStart(), a.point(e, t), k = !1)
                }
                x = e, T = t, N = n
            }
            var f = a,
                l = pi(),
                c = Ei(t, n, r, i),
                h, p, d, v = {
                    point: b,
                    lineStart: L,
                    lineEnd: A,
                    polygonStart: function() {
                        a = l, h = [], p = [], k = !0
                    },
                    polygonEnd: function() {
                        a = f, h = e.merge(h);
                        var n = m([t, i]),
                            r = k && n,
                            s = h.length;
                        if (r || s) a.polygonStart(), r && (a.lineStart(), g(null, null, 1, a), a.lineEnd()), s && ai(h, o, n, g, a), a.polygonEnd();
                        h = p = d = null
                    }
                },
                w, E, S, x, T, N, C, k;
            return v
        }
    }

    function Ti(e, t) {
        function n(n, r) {
            return n = e(n, r), t(n[0], n[1])
        }
        return e.invert && t.invert && (n.invert = function(n, r) {
            return n = t.invert(n, r), n && e.invert(n[0], n[1])
        }), n
    }

    function Ni(e) {
        var t = 0,
            n = Nt / 3,
            r = Qi(e),
            i = r(t, n);
        return i.parallels = function(e) {
            return arguments.length ? r(t = e[0] * Nt / 180, n = e[1] * Nt / 180) : [t / Nt * 180, n / Nt * 180]
        }, i
    }

    function Ci(e, t) {
        function o(e, t) {
            var n = Math.sqrt(i - 2 * r * Math.sin(t)) / r;
            return [n * Math.sin(e *= r), s - n * Math.cos(e)]
        }
        var n = Math.sin(e),
            r = (n + Math.sin(t)) / 2,
            i = 1 + n * (2 * r - n),
            s = Math.sqrt(i) / r;
        return o.invert = function(e, t) {
            var n = s - t;
            return [Math.atan2(e, n) / r, Ht((i - (e * e + n * n) * r * r) / (2 * r))]
        }, o
    }

    function Oi() {
        function i(e, t) {
            Li += r * e - n * t, n = e, r = t
        }
        var e, t, n, r;
        Ai.point = function(s, o) {
            Ai.point = i, e = n = s, t = r = o
        }, Ai.lineEnd = function() {
            i(e, t)
        }
    }

    function Bi(e, t) {
        e < Mi && (Mi = e), e > Di && (Di = e), t < _i && (_i = t), t > Pi && (Pi = t)
    }

    function ji() {
        function r(n, r) {
            t.push("M", n, ",", r, e)
        }

        function i(e, r) {
            t.push("M", e, ",", r), n.point = s
        }

        function s(e, n) {
            t.push("L", e, ",", n)
        }

        function o() {
            n.point = r
        }

        function u() {
            t.push("Z")
        }
        var e = Fi(4.5),
            t = [],
            n = {
                point: r,
                lineStart: function() {
                    n.point = i
                },
                lineEnd: o,
                polygonStart: function() {
                    n.lineEnd = u
                },
                polygonEnd: function() {
                    n.lineEnd = o, n.point = r
                },
                pointRadius: function(t) {
                    return e = Fi(t), n
                },
                result: function() {
                    if (t.length) {
                        var e = t.join("");
                        return t = [], e
                    }
                }
            };
        return n
    }

    function Fi(e) {
        return "m0," + e + "a" + e + "," + e + " 0 1,1 0," + -2 * e + "a" + e + "," + e + " 0 1,1 0," + 2 * e + "z"
    }

    function qi(e, t) {
        Vr += e, $r += t, ++Jr
    }

    function Ri() {
        function n(n, r) {
            var i = n - e,
                s = r - t,
                o = Math.sqrt(i * i + s * s);
            Kr += o * (e + n) / 2, Qr += o * (t + r) / 2, Gr += o, qi(e = n, t = r)
        }
        var e, t;
        Ii.point = function(r, i) {
            Ii.point = n, qi(e = r, t = i)
        }
    }

    function Ui() {
        Ii.point = qi
    }

    function zi() {
        function i(e, t) {
            var i = e - n,
                s = t - r,
                o = Math.sqrt(i * i + s * s);
            Kr += o * (n + e) / 2, Qr += o * (r + t) / 2, Gr += o, o = r * e - n * t, Yr += o * (n + e), Zr += o * (r + t), ei += o * 3, qi(n = e, r = t)
        }
        var e, t, n, r;
        Ii.point = function(s, o) {
            Ii.point = i, qi(e = n = s, t = r = o)
        }, Ii.lineEnd = function() {
            i(e, t)
        }
    }

    function Wi(e) {
        function r(n, r) {
            e.moveTo(n, r), e.arc(n, r, t, 0, Ct)
        }

        function i(t, r) {
            e.moveTo(t, r), n.point = s
        }

        function s(t, n) {
            e.lineTo(t, n)
        }

        function o() {
            n.point = r
        }

        function u() {
            e.closePath()
        }
        var t = 4.5,
            n = {
                point: r,
                lineStart: function() {
                    n.point = i
                },
                lineEnd: o,
                polygonStart: function() {
                    n.lineEnd = u
                },
                polygonEnd: function() {
                    n.lineEnd = o, n.point = r
                },
                pointRadius: function(e) {
                    return t = e, n
                },
                result: D
            };
        return n
    }

    function Xi(e) {
        function i(e) {
            return (r ? o : s)(e)
        }

        function s(t) {
            return Ji(t, function(n, r) {
                n = e(n, r), t.point(n[0], n[1])
            })
        }

        function o(t) {
            function y(n, r) {
                n = e(n, r), t.point(n[0], n[1])
            }

            function b() {
                h = NaN, g.point = w, t.lineStart()
            }

            function w(n, i) {
                var s = Br([n, i]),
                    o = e(n, i);
                u(h, p, c, d, v, m, h = o[0], p = o[1], c = n, d = s[0], v = s[1], m = s[2], r, t), t.point(h, p)
            }

            function E() {
                g.point = y, t.lineEnd()
            }

            function S() {
                b(), g.point = x, g.lineEnd = T
            }

            function x(e, t) {
                w(n = e, i = t), s = h, o = p, a = d, f = v, l = m, g.point = w
            }

            function T() {
                u(h, p, c, d, v, m, s, o, n, a, f, l, r, t), g.lineEnd = E, E()
            }
            var n, i, s, o, a, f, l, c, h, p, d, v, m, g = {
                point: y,
                lineStart: b,
                lineEnd: E,
                polygonStart: function() {
                    t.polygonStart(), g.lineStart = S
                },
                polygonEnd: function() {
                    t.polygonEnd(), g.lineStart = b
                }
            };
            return g
        }

        function u(r, i, s, o, a, f, l, c, h, p, d, v, m, g) {
            var b = l - r,
                w = c - i,
                E = b * b + w * w;
            if (E > 4 * t && m--) {
                var S = o + p,
                    x = a + d,
                    T = f + v,
                    N = Math.sqrt(S * S + x * x + T * T),
                    C = Math.asin(T /= N),
                    k = y(y(T) - 1) < Lt || y(s - h) < Lt ? (s + h) / 2 : Math.atan2(x, S),
                    L = e(k, C),
                    A = L[0],
                    O = L[1],
                    M = A - r,
                    _ = O - i,
                    D = w * M - b * _;
                if (D * D / E > t || y((b * M + w * _) / E - .5) > .3 || o * p + a * d + f * v < n) u(r, i, s, o, a, f, A, O, k, S /= N, x /= N, T, m, g), g.point(A, O), u(A, O, k, S, x, T, l, c, h, p, d, v, m, g)
            }
        }
        var t = .5,
            n = Math.cos(30 * Ot),
            r = 16;
        return i.precision = function(e) {
            return arguments.length ? (r = (t = e * e) > 0 && 16, i) : Math.sqrt(t)
        }, i
    }

    function Vi(e) {
        var t = Xi(function(t, n) {
            return e([t * Mt, n * Mt])
        });
        return function(e) {
            return Gi(t(e))
        }
    }

    function $i(e) {
        this.stream = e
    }

    function Ji(e, t) {
        return {
            point: t,
            sphere: function() {
                e.sphere()
            },
            lineStart: function() {
                e.lineStart()
            },
            lineEnd: function() {
                e.lineEnd()
            },
            polygonStart: function() {
                e.polygonStart()
            },
            polygonEnd: function() {
                e.polygonEnd()
            }
        }
    }

    function Ki(e) {
        return Qi(function() {
            return e
        })()
    }

    function Qi(t) {
        function E(e) {
            return e = i(e[0] * Ot, e[1] * Ot), [e[0] * o + d, v - e[1] * o]
        }

        function S(e) {
            return e = i.invert((e[0] - d) / o, (v - e[1]) / o), e && [e[0] * Mt, e[1] * Mt]
        }

        function x() {
            i = Ti(r = es(c, h, p), n);
            var e = n(f, l);
            return d = u - e[0] * o, v = a + e[1] * o, T()
        }

        function T() {
            return w && (w.valid = !1, w = null), E
        }
        var n, r, i, s = Xi(function(e, t) {
                return e = n(e, t), [e[0] * o + d, v - e[1] * o]
            }),
            o = 150,
            u = 480,
            a = 250,
            f = 0,
            l = 0,
            c = 0,
            h = 0,
            p = 0,
            d, v, m = mi,
            g = kn,
            y = null,
            b = null,
            w;
        return E.stream = function(e) {
                return w && (w.valid = !1), w = Gi(m(r, s(g(e)))), w.valid = !0, w
            }, E.clipAngle = function(e) {
                return arguments.length ? (m = e == null ? (y = e, mi) : wi((y = +e) * Ot), T()) : y
            }, E.clipExtent = function(e) {
                return arguments.length ? (b = e, g = e ? xi(e[0][0], e[0][1], e[1][0], e[1][1]) : kn, T()) : b
            }, E.scale = function(e) {
                return arguments.length ? (o = +e, x()) : o
            }, E.translate = function(e) {
                return arguments.length ? (u = +e[0], a = +e[1], x()) : [u, a]
            }, E.center = function(e) {
                return arguments.length ? (f = e[0] % 360 * Ot, l = e[1] % 360 * Ot, x()) : [f * Mt, l * Mt]
            }, E.rotate = function(e) {
                return arguments.length ? (c = e[0] % 360 * Ot, h = e[1] % 360 * Ot, p = e.length > 2 ? e[2] % 360 * Ot : 0, x()) : [c * Mt, h * Mt, p * Mt]
            }, e.rebind(E, s, "precision"),
            function() {
                return n = t.apply(this, arguments), E.invert = n.invert && S, x()
            }
    }

    function Gi(e) {
        return Ji(e, function(t, n) {
            e.point(t * Ot, n * Ot)
        })
    }

    function Yi(e, t) {
        return [e, t]
    }

    function Zi(e, t) {
        return [e > Nt ? e - Ct : e < -Nt ? e + Ct : e, t]
    }

    function es(e, t, n) {
        return e ? t || n ? Ti(ns(e), rs(t, n)) : ns(e) : t || n ? rs(t, n) : Zi
    }

    function ts(e) {
        return function(t, n) {
            return t += e, [t > Nt ? t - Ct : t < -Nt ? t + Ct : t, n]
        }
    }

    function ns(e) {
        var t = ts(e);
        return t.invert = ts(-e), t
    }

    function rs(e, t) {
        function o(e, t) {
            var o = Math.cos(t),
                u = Math.cos(e) * o,
                a = Math.sin(e) * o,
                f = Math.sin(t),
                l = f * n + u * r;
            return [Math.atan2(a * i - l * s, u * n - f * r), Ht(l * i + a * s)]
        }
        var n = Math.cos(e),
            r = Math.sin(e),
            i = Math.cos(t),
            s = Math.sin(t);
        return o.invert = function(e, t) {
            var o = Math.cos(t),
                u = Math.cos(e) * o,
                a = Math.sin(e) * o,
                f = Math.sin(t),
                l = f * i - a * s;
            return [Math.atan2(a * i + f * s, u * n + l * r), Ht(l * n - u * r)]
        }, o
    }

    function is(e, t) {
        var n = Math.cos(e),
            r = Math.sin(e);
        return function(i, s, o, u) {
            var a = o * t;
            if (i != null) {
                i = ss(n, i), s = ss(n, s);
                if (o > 0 ? i < s : i > s) i += o * Ct
            } else i = e + o * Ct, s = e - .5 * a;
            for (var f, l = i; o > 0 ? l > s : l < s; l -= a) u.point((f = Ur([n, -r * Math.cos(l), -r * Math.sin(l)]))[0], f[1])
        }
    }

    function ss(e, t) {
        var n = Br(t);
        n[0] -= e, Rr(n);
        var r = Pt(-n[1]);
        return ((-n[2] < 0 ? -r : r) + 2 * Math.PI - Lt) % (2 * Math.PI)
    }

    function os(t, n, r) {
        var i = e.range(t, n - Lt, r).concat(n);
        return function(e) {
            return i.map(function(t) {
                return [e, t]
            })
        }
    }

    function us(t, n, r) {
        var i = e.range(t, n - Lt, r).concat(n);
        return function(e) {
            return i.map(function(t) {
                return [t, e]
            })
        }
    }

    function as(e) {
        return e.source
    }

    function fs(e) {
        return e.target
    }

    function ls(e, t, n, r) {
        var i = Math.cos(t),
            s = Math.sin(t),
            o = Math.cos(r),
            u = Math.sin(r),
            a = i * Math.cos(e),
            f = i * Math.sin(e),
            l = o * Math.cos(n),
            c = o * Math.sin(n),
            h = 2 * Math.asin(Math.sqrt(It(r - t) + i * o * It(n - e))),
            p = 1 / Math.sin(h),
            d = h ? function(e) {
                var t = Math.sin(e *= h) * p,
                    n = Math.sin(h - e) * p,
                    r = n * a + t * l,
                    i = n * f + t * c,
                    o = n * s + t * u;
                return [Math.atan2(i, r) * Mt, Math.atan2(o, Math.sqrt(r * r + i * i)) * Mt]
            } : function() {
                return [e * Mt, t * Mt]
            };
        return d.distance = h, d
    }

    function ps() {
        function r(r, i) {
            var s = Math.sin(i *= Ot),
                o = Math.cos(i),
                u = y((r *= Ot) - e),
                a = Math.cos(u);
            cs += Math.atan2(Math.sqrt((u = o * Math.sin(u)) * u + (u = n * s - t * o * a) * u), t * s + n * o * a), e = r, t = s, n = o
        }
        var e, t, n;
        hs.point = function(i, s) {
            e = i * Ot, t = Math.sin(s *= Ot), n = Math.cos(s), hs.point = r
        }, hs.lineEnd = function() {
            hs.point = hs.lineEnd = D
        }
    }

    function ds(e, t) {
        function n(t, n) {
            var r = Math.cos(t),
                i = Math.cos(n),
                s = e(r * i);
            return [s * i * Math.sin(t), s * Math.sin(n)]
        }
        return n.invert = function(e, n) {
            var r = Math.sqrt(e * e + n * n),
                i = t(r),
                s = Math.sin(i),
                o = Math.cos(i);
            return [Math.atan2(e * s, r * o), Math.asin(r && n * s / r)]
        }, n
    }

    function gs(e, t) {
        function o(e, t) {
            s > 0 ? t < -kt + Lt && (t = -kt + Lt) : t > kt - Lt && (t = kt - Lt);
            var n = s / Math.pow(r(t), i);
            return [n * Math.sin(i * e), s - n * Math.cos(i * e)]
        }
        var n = Math.cos(e),
            r = function(e) {
                return Math.tan(Nt / 4 + e / 2)
            },
            i = e === t ? Math.sin(e) : Math.log(n / Math.cos(t)) / Math.log(r(t) / r(e)),
            s = n * Math.pow(r(e), i) / i;
        return i ? (o.invert = function(e, t) {
            var n = s - t,
                r = _t(i) * Math.sqrt(e * e + n * n);
            return [Math.atan2(e, n) / i, 2 * Math.atan(Math.pow(s / r, 1 / i)) - kt]
        }, o) : ws
    }

    function ys(e, t) {
        function s(e, t) {
            var n = i - t;
            return [n * Math.sin(r * e), i - n * Math.cos(r * e)]
        }
        var n = Math.cos(e),
            r = e === t ? Math.sin(e) : (n - Math.cos(t)) / (t - e),
            i = n / r + e;
        return y(r) < Lt ? Yi : (s.invert = function(e, t) {
            var n = i - t;
            return [Math.atan2(e, n) / r, i - _t(r) * Math.sqrt(e * e + n * n)]
        }, s)
    }

    function ws(e, t) {
        return [e, Math.log(Math.tan(Nt / 4 + t / 2))]
    }

    function Es(e) {
        var t = Ki(e),
            n = t.scale,
            r = t.translate,
            i = t.clipExtent,
            s;
        return t.scale = function() {
            var e = n.apply(t, arguments);
            return e === t ? s ? t.clipExtent(null) : t : e
        }, t.translate = function() {
            var e = r.apply(t, arguments);
            return e === t ? s ? t.clipExtent(null) : t : e
        }, t.clipExtent = function(e) {
            var o = i.apply(t, arguments);
            if (o === t) {
                if (s = e == null) {
                    var u = Nt * n(),
                        a = r();
                    i([
                        [a[0] - u, a[1] - u],
                        [a[0] + u, a[1] + u]
                    ])
                }
            } else s && (o = null);
            return o
        }, t.clipExtent(null)
    }

    function Ts(e, t) {
        return [Math.log(Math.tan(Nt / 4 + t / 2)), -e]
    }

    function Ns(e) {
        return e[0]
    }

    function Cs(e) {
        return e[1]
    }

    function ks(e) {
        var t = e.length,
            n = [0, 1],
            r = 2;
        for (var i = 2; i < t; i++) {
            while (r > 1 && Dt(e[n[r - 2]], e[n[r - 1]], e[i]) <= 0) --r;
            n[r++] = i
        }
        return n.slice(0, r)
    }

    function Ls(e, t) {
        return e[0] - t[0] || e[1] - t[1]
    }

    function Os(e, t, n) {
        return (n[0] - t[0]) * (e[1] - t[1]) < (n[1] - t[1]) * (e[0] - t[0])
    }

    function Ms(e, t, n, r) {
        var i = e[0],
            s = n[0],
            o = t[0] - i,
            u = r[0] - s,
            a = e[1],
            f = n[1],
            l = t[1] - a,
            c = r[1] - f,
            h = (u * (a - f) - c * (i - s)) / (c * o - u * l);
        return [i + h * o, a + h * l]
    }

    function _s(e) {
        var t = e[0],
            n = e[e.length - 1];
        return !(t[0] - n[0] || t[1] - n[1])
    }

    function qs() {
        uo(this), this.edge = this.site = this.circle = null
    }

    function Rs(e) {
        var t = Bs.pop() || new qs;
        return t.site = e, t
    }

    function Us(e) {
        Ys(e), Hs.remove(e), Bs.push(e), uo(e)
    }

    function zs(e) {
        var t = e.circle,
            n = t.x,
            r = t.cy,
            i = {
                x: n,
                y: r
            },
            s = e.P,
            o = e.N,
            u = [e];
        Us(e);
        var a = s;
        while (a.circle && y(n - a.circle.x) < Lt && y(r - a.circle.cy) < Lt) s = a.P, u.unshift(a), Us(a), a = s;
        u.unshift(a), Ys(a);
        var f = o;
        while (f.circle && y(n - f.circle.x) < Lt && y(r - f.circle.cy) < Lt) o = f.N, u.push(f), Us(f), f = o;
        u.push(f), Ys(f);
        var l = u.length,
            c;
        for (c = 1; c < l; ++c) f = u[c], a = u[c - 1], io(f.edge, a.site, f.site, i);
        a = u[0], f = u[l - 1], f.edge = no(a.site, f.site, null, i), Gs(a), Gs(f)
    }

    function Ws(e) {
        var t = e.x,
            n = e.y,
            r, i, s, o, u = Hs._;
        while (u) {
            s = Xs(u, n) - t;
            if (s > Lt) u = u.L;
            else {
                o = t - Vs(u, n);
                if (!(o > Lt)) {
                    s > -Lt ? (r = u.P, i = u) : o > -Lt ? (r = u, i = u.N) : r = i = u;
                    break
                }
                if (!u.R) {
                    r = u;
                    break
                }
                u = u.R
            }
        }
        var a = Rs(e);
        Hs.insert(r, a);
        if (!r && !i) return;
        if (r === i) {
            Ys(r), i = Rs(r.site), Hs.insert(a, i), a.edge = i.edge = no(r.site, a.site), Gs(r), Gs(i);
            return
        }
        if (!i) {
            a.edge = no(r.site, a.site);
            return
        }
        Ys(r), Ys(i);
        var f = r.site,
            l = f.x,
            c = f.y,
            h = e.x - l,
            p = e.y - c,
            d = i.site,
            v = d.x - l,
            m = d.y - c,
            g = 2 * (h * m - p * v),
            y = h * h + p * p,
            b = v * v + m * m,
            w = {
                x: (m * y - p * b) / g + l,
                y: (h * b - v * y) / g + c
            };
        io(i.edge, f, d, w), a.edge = no(f, e, null, w), i.edge = no(e, d, null, w), Gs(r), Gs(i)
    }

    function Xs(e, t) {
        var n = e.site,
            r = n.x,
            i = n.y,
            s = i - t;
        if (!s) return r;
        var o = e.P;
        if (!o) return -Infinity;
        n = o.site;
        var u = n.x,
            a = n.y,
            f = a - t;
        if (!f) return u;
        var l = u - r,
            c = 1 / s - 1 / f,
            h = l / f;
        return c ? (-h + Math.sqrt(h * h - 2 * c * (l * l / (-2 * f) - a + f / 2 + i - s / 2))) / c + r : (r + u) / 2
    }

    function Vs(e, t) {
        var n = e.N;
        if (n) return Xs(n, t);
        var r = e.site;
        return r.y === t ? r.x : Infinity
    }

    function $s(e) {
        this.site = e, this.edges = []
    }

    function Js(e) {
        var t = e[0][0],
            n = e[1][0],
            r = e[0][1],
            i = e[1][1],
            s, o, u, a, f = Ps,
            l = f.length,
            c, h, p, d, v, m;
        while (l--) {
            c = f[l];
            if (!c || !c.prepare()) continue;
            p = c.edges, d = p.length, h = 0;
            while (h < d) {
                m = p[h].end(), u = m.x, a = m.y, v = p[++h % d].start(), s = v.x, o = v.y;
                if (y(u - s) > Lt || y(a - o) > Lt) p.splice(h, 0, new so(ro(c.site, m, y(u - t) < Lt && i - a > Lt ? {
                    x: t,
                    y: y(s - t) < Lt ? o : i
                } : y(a - i) < Lt && n - u > Lt ? {
                    x: y(o - i) < Lt ? s : n,
                    y: i
                } : y(u - n) < Lt && a - r > Lt ? {
                    x: n,
                    y: y(s - n) < Lt ? o : r
                } : y(a - r) < Lt && u - t > Lt ? {
                    x: y(o - r) < Lt ? s : t,
                    y: r
                } : null), c.site, null)), ++d
            }
        }
    }

    function Ks(e, t) {
        return t.angle - e.angle
    }

    function Qs() {
        uo(this), this.x = this.y = this.arc = this.site = this.cy = null
    }

    function Gs(e) {
        var t = e.P,
            n = e.N;
        if (!t || !n) return;
        var r = t.site,
            i = e.site,
            s = n.site;
        if (r === s) return;
        var o = i.x,
            u = i.y,
            a = r.x - o,
            f = r.y - u,
            l = s.x - o,
            c = s.y - u,
            h = 2 * (a * c - f * l);
        if (h >= -At) return;
        var p = a * a + f * f,
            d = l * l + c * c,
            v = (c * p - f * d) / h,
            m = (a * d - l * p) / h,
            c = m + u,
            g = Is.pop() || new Qs;
        g.arc = e, g.site = i, g.x = v + o, g.y = c + Math.sqrt(v * v + m * m), g.cy = c, e.circle = g;
        var y = null,
            b = Fs._;
        while (b)
            if (g.y < b.y || g.y === b.y && g.x <= b.x) {
                if (!b.L) {
                    y = b.P;
                    break
                }
                b = b.L
            } else {
                if (!b.R) {
                    y = b;
                    break
                }
                b = b.R
            }
        Fs.insert(y, g), y || (js = g)
    }

    function Ys(e) {
        var t = e.circle;
        t && (t.P || (js = t.N), Fs.remove(t), Is.push(t), uo(t), e.circle = null)
    }

    function Zs(e) {
        var t = Ds,
            n = Ei(e[0][0], e[0][1], e[1][0], e[1][1]),
            r = t.length,
            i;
        while (r--) {
            i = t[r];
            if (!eo(i, e) || !n(i) || y(i.a.x - i.b.x) < Lt && y(i.a.y - i.b.y) < Lt) i.a = i.b = null, t.splice(r, 1)
        }
    }

    function eo(e, t) {
        var n = e.b;
        if (n) return !0;
        var r = e.a,
            i = t[0][0],
            s = t[1][0],
            o = t[0][1],
            u = t[1][1],
            a = e.l,
            f = e.r,
            l = a.x,
            c = a.y,
            h = f.x,
            p = f.y,
            d = (l + h) / 2,
            v = (c + p) / 2,
            m, g;
        if (p === c) {
            if (d < i || d >= s) return;
            if (l > h) {
                if (!r) r = {
                    x: d,
                    y: o
                };
                else if (r.y >= u) return;
                n = {
                    x: d,
                    y: u
                }
            } else {
                if (!r) r = {
                    x: d,
                    y: u
                };
                else if (r.y < o) return;
                n = {
                    x: d,
                    y: o
                }
            }
        } else {
            m = (l - h) / (p - c), g = v - m * d;
            if (m < -1 || m > 1)
                if (l > h) {
                    if (!r) r = {
                        x: (o - g) / m,
                        y: o
                    };
                    else if (r.y >= u) return;
                    n = {
                        x: (u - g) / m,
                        y: u
                    }
                } else {
                    if (!r) r = {
                        x: (u - g) / m,
                        y: u
                    };
                    else if (r.y < o) return;
                    n = {
                        x: (o - g) / m,
                        y: o
                    }
                } else if (c < p) {
                if (!r) r = {
                    x: i,
                    y: m * i + g
                };
                else if (r.x >= s) return;
                n = {
                    x: s,
                    y: m * s + g
                }
            } else {
                if (!r) r = {
                    x: s,
                    y: m * s + g
                };
                else if (r.x < i) return;
                n = {
                    x: i,
                    y: m * i + g
                }
            }
        }
        return e.a = r, e.b = n, !0
    }

    function to(e, t) {
        this.l = e, this.r = t, this.a = this.b = null
    }

    function no(e, t, n, r) {
        var i = new to(e, t);
        return Ds.push(i), n && io(i, e, t, n), r && io(i, t, e, r), Ps[e.i].edges.push(new so(i, e, t)), Ps[t.i].edges.push(new so(i, t, e)), i
    }

    function ro(e, t, n) {
        var r = new to(e, null);
        return r.a = t, r.b = n, Ds.push(r), r
    }

    function io(e, t, n, r) {
        !e.a && !e.b ? (e.a = r, e.l = t, e.r = n) : e.l === n ? e.b = r : e.a = r
    }

    function so(e, t, n) {
        var r = e.a,
            i = e.b;
        this.edge = e, this.site = t, this.angle = n ? Math.atan2(n.y - t.y, n.x - t.x) : e.l === t ? Math.atan2(i.x - r.x, r.y - i.y) : Math.atan2(r.x - i.x, i.y - r.y)
    }

    function oo() {
        this._ = null
    }

    function uo(e) {
        e.U = e.C = e.L = e.R = e.P = e.N = null
    }

    function ao(e, t) {
        var n = t,
            r = t.R,
            i = n.U;
        i ? i.L === n ? i.L = r : i.R = r : e._ = r, r.U = i, n.U = r, n.R = r.L, n.R && (n.R.U = n), r.L = n
    }

    function fo(e, t) {
        var n = t,
            r = t.L,
            i = n.U;
        i ? i.L === n ? i.L = r : i.R = r : e._ = r, r.U = i, n.U = r, n.L = r.R, n.L && (n.L.U = n), r.R = n
    }

    function lo(e) {
        while (e.L) e = e.L;
        return e
    }

    function co(e, t) {
        var n = e.sort(ho).pop(),
            r, i, s;
        Ds = [], Ps = new Array(e.length), Hs = new oo, Fs = new oo;
        for (;;) {
            s = js;
            if (n && (!s || n.y < s.y || n.y === s.y && n.x < s.x)) {
                if (n.x !== r || n.y !== i) Ps[n.i] = new $s(n), Ws(n), r = n.x, i = n.y;
                n = e.pop()
            } else {
                if (!s) break;
                zs(s.arc)
            }
        }
        t && (Zs(t), Js(t));
        var o = {
            cells: Ps,
            edges: Ds
        };
        return Hs = Fs = Ds = Ps = null, o
    }

    function ho(e, t) {
        return t.y - e.y || t.x - e.x
    }

    function vo(e, t, n) {
        return (e.x - n.x) * (t.y - e.y) - (e.x - t.x) * (n.y - e.y)
    }

    function mo(e) {
        return e.x
    }

    function go(e) {
        return e.y
    }

    function yo() {
        return {
            leaf: !0,
            nodes: [],
            point: null,
            x: null,
            y: null
        }
    }

    function bo(e, t, n, r, i, s) {
        if (!e(t, n, r, i, s)) {
            var o = (n + i) * .5,
                u = (r + s) * .5,
                a = t.nodes;
            a[0] && bo(e, a[0], n, r, o, u), a[1] && bo(e, a[1], o, r, i, u), a[2] && bo(e, a[2], n, u, o, s), a[3] && bo(e, a[3], o, u, i, s)
        }
    }

    function wo(t, n) {
        t = e.rgb(t), n = e.rgb(n);
        var r = t.r,
            i = t.g,
            s = t.b,
            o = n.r - r,
            u = n.g - i,
            a = n.b - s;
        return function(e) {
            return "#" + bn(Math.round(r + o * e)) + bn(Math.round(i + u * e)) + bn(Math.round(s + a * e))
        }
    }

    function Eo(e, t) {
        var n = {},
            r = {},
            i;
        for (i in e) i in t ? n[i] = Co(e[i], t[i]) : r[i] = e[i];
        for (i in t) i in e || (r[i] = t[i]);
        return function(e) {
            for (i in n) r[i] = n[i](e);
            return r
        }
    }

    function So(e, t) {
        return t -= e = +e,
            function(n) {
                return e + t * n
            }
    }

    function xo(e, t) {
        var n = To.lastIndex = No.lastIndex = 0,
            r, i, s, o = -1,
            u = [],
            a = [];
        e += "", t += "";
        while ((r = To.exec(e)) && (i = No.exec(t)))(s = i.index) > n && (s = t.substring(n, s), u[o] ? u[o] += s : u[++o] = s), (r = r[0]) === (i = i[0]) ? u[o] ? u[o] += i : u[++o] = i : (u[++o] = null, a.push({
            i: o,
            x: So(r, i)
        })), n = No.lastIndex;
        return n < t.length && (s = t.substring(n), u[o] ? u[o] += s : u[++o] = s), u.length < 2 ? a[0] ? (t = a[0].x, function(e) {
            return t(e) + ""
        }) : function() {
            return t
        } : (t = a.length, function(e) {
            for (var n = 0, r; n < t; ++n) u[(r = a[n]).i] = r.x(e);
            return u.join("")
        })
    }

    function Co(t, n) {
        var r = e.interpolators.length,
            i;
        while (--r >= 0 && !(i = e.interpolators[r](t, n)));
        return i
    }

    function ko(e, t) {
        var n = [],
            r = [],
            i = e.length,
            s = t.length,
            o = Math.min(e.length, t.length),
            u;
        for (u = 0; u < o; ++u) n.push(Co(e[u], t[u]));
        for (; u < i; ++u) r[u] = e[u];
        for (; u < s; ++u) r[u] = t[u];
        return function(e) {
            for (u = 0; u < o; ++u) r[u] = n[u](e);
            return r
        }
    }

    function Mo(e) {
        return function(t) {
            return t <= 0 ? 0 : t >= 1 ? 1 : e(t)
        }
    }

    function _o(e) {
        return function(t) {
            return 1 - e(1 - t)
        }
    }

    function Do(e) {
        return function(t) {
            return .5 * (t < .5 ? e(2 * t) : 2 - e(2 - 2 * t))
        }
    }

    function Po(e) {
        return e * e
    }

    function Ho(e) {
        return e * e * e
    }

    function Bo(e) {
        if (e <= 0) return 0;
        if (e >= 1) return 1;
        var t = e * e,
            n = t * e;
        return 4 * (e < .5 ? n : 3 * (e - t) + n - .75)
    }

    function jo(e) {
        return function(t) {
            return Math.pow(t, e)
        }
    }

    function Fo(e) {
        return 1 - Math.cos(e * kt)
    }

    function Io(e) {
        return Math.pow(2, 10 * (e - 1))
    }

    function qo(e) {
        return 1 - Math.sqrt(1 - e * e)
    }

    function Ro(e, t) {
        var n;
        return arguments.length < 2 && (t = .45), arguments.length ? n = t / Ct * Math.asin(1 / e) : (e = 1, n = t / 4),
            function(r) {
                return 1 + e * Math.pow(2, -10 * r) * Math.sin((r - n) * Ct / t)
            }
    }

    function Uo(e) {
        return e || (e = 1.70158),
            function(t) {
                return t * t * ((e + 1) * t - e)
            }
    }

    function zo(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function Wo(t, n) {
        t = e.hcl(t), n = e.hcl(n);
        var r = t.h,
            i = t.c,
            s = t.l,
            o = n.h - r,
            u = n.c - i,
            a = n.l - s;
        return isNaN(u) && (u = 0, i = isNaN(i) ? n.c : i), isNaN(o) ? (o = 0, r = isNaN(r) ? n.h : r) : o > 180 ? o -= 360 : o < -180 && (o += 360),
            function(e) {
                return en(r + o * e, i + u * e, s + a * e) + ""
            }
    }

    function Xo(t, n) {
        t = e.hsl(t), n = e.hsl(n);
        var r = t.h,
            i = t.s,
            s = t.l,
            o = n.h - r,
            u = n.s - i,
            a = n.l - s;
        return isNaN(u) && (u = 0, i = isNaN(i) ? n.s : i), isNaN(o) ? (o = 0, r = isNaN(r) ? n.h : r) : o > 180 ? o -= 360 : o < -180 && (o += 360),
            function(e) {
                return Qt(r + o * e, i + u * e, s + a * e) + ""
            }
    }

    function Vo(t, n) {
        t = e.lab(t), n = e.lab(n);
        var r = t.l,
            i = t.a,
            s = t.b,
            o = n.l - r,
            u = n.a - i,
            a = n.b - s;
        return function(e) {
            return fn(r + o * e, i + u * e, s + a * e) + ""
        }
    }

    function $o(e, t) {
        return t -= e,
            function(n) {
                return Math.round(e + t * n)
            }
    }

    function Jo(e) {
        var t = [e.a, e.b],
            n = [e.c, e.d],
            r = Qo(t),
            i = Ko(t, n),
            s = Qo(Go(n, t, -i)) || 0;
        t[0] * n[1] < n[0] * t[1] && (t[0] *= -1, t[1] *= -1, r *= -1, i *= -1), this.rotate = (r ? Math.atan2(t[1], t[0]) : Math.atan2(-n[0], n[1])) * Mt, this.translate = [e.e, e.f], this.scale = [r, s], this.skew = s ? Math.atan2(i, s) * Mt : 0
    }

    function Ko(e, t) {
        return e[0] * t[0] + e[1] * t[1]
    }

    function Qo(e) {
        var t = Math.sqrt(Ko(e, e));
        return t && (e[0] /= t, e[1] /= t), t
    }

    function Go(e, t, n) {
        return e[0] += n * t[0], e[1] += n * t[1], e
    }

    function Zo(t, n) {
        var r = [],
            i = [],
            s, o = e.transform(t),
            u = e.transform(n),
            a = o.translate,
            f = u.translate,
            l = o.rotate,
            c = u.rotate,
            h = o.skew,
            p = u.skew,
            d = o.scale,
            v = u.scale;
        return a[0] != f[0] || a[1] != f[1] ? (r.push("translate(", null, ",", null, ")"), i.push({
                i: 1,
                x: So(a[0], f[0])
            }, {
                i: 3,
                x: So(a[1], f[1])
            })) : f[0] || f[1] ? r.push("translate(" + f + ")") : r.push(""), l != c ? (l - c > 180 ? c += 360 : c - l > 180 && (l += 360), i.push({
                i: r.push(r.pop() + "rotate(", null, ")") - 2,
                x: So(l, c)
            })) : c && r.push(r.pop() + "rotate(" + c + ")"), h != p ? i.push({
                i: r.push(r.pop() + "skewX(", null, ")") - 2,
                x: So(h, p)
            }) : p && r.push(r.pop() + "skewX(" + p + ")"), d[0] != v[0] || d[1] != v[1] ? (s = r.push(r.pop() + "scale(", null, ",", null, ")"), i.push({
                i: s - 4,
                x: So(d[0], v[0])
            }, {
                i: s - 2,
                x: So(d[1], v[1])
            })) : (v[0] != 1 || v[1] != 1) && r.push(r.pop() + "scale(" + v + ")"), s = i.length,
            function(e) {
                var t = -1,
                    n;
                while (++t < s) r[(n = i[t]).i] = n.x(e);
                return r.join("")
            }
    }

    function eu(e, t) {
        return t = t - (e = +e) ? 1 / (t - e) : 0,
            function(n) {
                return (n - e) * t
            }
    }

    function tu(e, t) {
        return t = t - (e = +e) ? 1 / (t - e) : 0,
            function(n) {
                return Math.max(0, Math.min(1, (n - e) * t))
            }
    }

    function nu(e) {
        var t = e.source,
            n = e.target,
            r = iu(t, n),
            i = [t];
        while (t !== r) t = t.parent, i.push(t);
        var s = i.length;
        while (n !== r) i.splice(s, 0, n), n = n.parent;
        return i
    }

    function ru(e) {
        var t = [],
            n = e.parent;
        while (n != null) t.push(e), e = n, n = n.parent;
        return t.push(e), t
    }

    function iu(e, t) {
        if (e === t) return e;
        var n = ru(e),
            r = ru(t),
            i = n.pop(),
            s = r.pop(),
            o = null;
        while (i === s) o = i, i = n.pop(), s = r.pop();
        return o
    }

    function su(e) {
        e.fixed |= 2
    }

    function ou(e) {
        e.fixed &= -7
    }

    function uu(e) {
        e.fixed |= 4, e.px = e.x, e.py = e.y
    }

    function au(e) {
        e.fixed &= -5
    }

    function fu(e, t, n) {
        var r = 0,
            i = 0;
        e.charge = 0;
        if (!e.leaf) {
            var s = e.nodes,
                o = s.length,
                u = -1,
                a;
            while (++u < o) {
                a = s[u];
                if (a == null) continue;
                fu(a, t, n), e.charge += a.charge, r += a.charge * a.cx, i += a.charge * a.cy
            }
        }
        if (e.point) {
            e.leaf || (e.point.x += Math.random() - .5, e.point.y += Math.random() - .5);
            var f = t * n[e.point.index];
            e.charge += e.pointCharge = f, r += f * e.point.x, i += f * e.point.y
        }
        e.cx = r / e.charge, e.cy = i / e.charge
    }

    function pu(t, n) {
        return e.rebind(t, n, "sort", "children", "value"), t.nodes = t, t.links = bu, t
    }

    function du(e, t) {
        var n = [e];
        while ((e = n.pop()) != null) {
            t(e);
            if ((i = e.children) && (r = i.length)) {
                var r, i;
                while (--r >= 0) n.push(i[r])
            }
        }
    }

    function vu(e, t) {
        var n = [e],
            r = [];
        while ((e = n.pop()) != null) {
            r.push(e);
            if ((o = e.children) && (s = o.length)) {
                var i = -1,
                    s, o;
                while (++i < s) n.push(o[i])
            }
        }
        while ((e = r.pop()) != null) t(e)
    }

    function mu(e) {
        return e.children
    }

    function gu(e) {
        return e.value
    }

    function yu(e, t) {
        return t.value - e.value
    }

    function bu(t) {
        return e.merge(t.map(function(e) {
            return (e.children || []).map(function(t) {
                return {
                    source: e,
                    target: t
                }
            })
        }))
    }

    function Eu(e) {
        return e.x
    }

    function Su(e) {
        return e.y
    }

    function xu(e, t, n) {
        e.y0 = t, e.y = n
    }

    function Cu(t) {
        return e.range(t.length)
    }

    function ku(e) {
        var t = -1,
            n = e[0].length,
            r = [];
        while (++t < n) r[t] = 0;
        return r
    }

    function Lu(e) {
        var t = 1,
            n = 0,
            r = e[0][1],
            i, s = e.length;
        for (; t < s; ++t)(i = e[t][1]) > r && (n = t, r = i);
        return n
    }

    function Au(e) {
        return e.reduce(Ou, 0)
    }

    function Ou(e, t) {
        return e + t[1]
    }

    function Mu(e, t) {
        return _u(e, Math.ceil(Math.log(t.length) / Math.LN2 + 1))
    }

    function _u(e, t) {
        var n = -1,
            r = +e[0],
            i = (e[1] - r) / t,
            s = [];
        while (++n <= t) s[n] = i * n + r;
        return s
    }

    function Du(t) {
        return [e.min(t), e.max(t)]
    }

    function Pu(e, t) {
        return e.value - t.value
    }

    function Hu(e, t) {
        var n = e._pack_next;
        e._pack_next = t, t._pack_prev = e, t._pack_next = n, n._pack_prev = t
    }

    function Bu(e, t) {
        e._pack_next = t, t._pack_prev = e
    }

    function ju(e, t) {
        var n = t.x - e.x,
            r = t.y - e.y,
            i = e.r + t.r;
        return .999 * i * i > n * n + r * r
    }

    function Fu(e) {
        function p(e) {
            n = Math.min(e.x - e.r, n), r = Math.max(e.x + e.r, r), i = Math.min(e.y - e.r, i), s = Math.max(e.y + e.r, s)
        }
        if (!(t = e.children) || !(h = t.length)) return;
        var t, n = Infinity,
            r = -Infinity,
            i = Infinity,
            s = -Infinity,
            o, u, a, f, l, c, h;
        t.forEach(Iu), o = t[0], o.x = -o.r, o.y = 0, p(o);
        if (h > 1) {
            u = t[1], u.x = u.r, u.y = 0, p(u);
            if (h > 2) {
                a = t[2], Uu(o, u, a), p(a), Hu(o, a), o._pack_prev = a, Hu(a, u), u = o._pack_next;
                for (f = 3; f < h; f++) {
                    Uu(o, u, a = t[f]);
                    var d = 0,
                        v = 1,
                        m = 1;
                    for (l = u._pack_next; l !== u; l = l._pack_next, v++)
                        if (ju(l, a)) {
                            d = 1;
                            break
                        }
                    if (d == 1)
                        for (c = o._pack_prev; c !== l._pack_prev; c = c._pack_prev, m++)
                            if (ju(c, a)) break;
                    d ? (v < m || v == m && u.r < o.r ? Bu(o, u = l) : Bu(o = c, u), f--) : (Hu(o, a), u = a, p(a))
                }
            }
        }
        var g = (n + r) / 2,
            y = (i + s) / 2,
            b = 0;
        for (f = 0; f < h; f++) a = t[f], a.x -= g, a.y -= y, b = Math.max(b, a.r + Math.sqrt(a.x * a.x + a.y * a.y));
        e.r = b, t.forEach(qu)
    }

    function Iu(e) {
        e._pack_next = e._pack_prev = e
    }

    function qu(e) {
        delete e._pack_next, delete e._pack_prev
    }

    function Ru(e, t, n, r) {
        var i = e.children;
        e.x = t += r * e.x, e.y = n += r * e.y, e.r *= r;
        if (i) {
            var s = -1,
                o = i.length;
            while (++s < o) Ru(i[s], t, n, r)
        }
    }

    function Uu(e, t, n) {
        var r = e.r + n.r,
            i = t.x - e.x,
            s = t.y - e.y;
        if (r && (i || s)) {
            var o = t.r + n.r,
                u = i * i + s * s;
            o *= o, r *= r;
            var a = .5 + (r - o) / (2 * u),
                f = Math.sqrt(Math.max(0, 2 * o * (r + u) - (r -= u) * r - o * o)) / (2 * u);
            n.x = e.x + a * i + f * s, n.y = e.y + a * s - f * i
        } else n.x = e.x + r, n.y = e.y
    }

    function zu(e, t) {
        return e.parent == t.parent ? 1 : 2
    }

    function Wu(e) {
        var t = e.children;
        return t.length ? t[0] : e.t
    }

    function Xu(e) {
        var t = e.children,
            n;
        return (n = t.length) ? t[n - 1] : e.t
    }

    function Vu(e, t, n) {
        var r = n / (t.i - e.i);
        t.c -= r, t.s += n, e.c += r, t.z += n, t.m += n
    }

    function $u(e) {
        var t = 0,
            n = 0,
            r = e.children,
            i = r.length,
            s;
        while (--i >= 0) s = r[i], s.z += t, s.m += t, t += s.s + (n += s.c)
    }

    function Ju(e, t, n) {
        return e.a.parent === t.parent ? e.a : n
    }

    function Ku(t) {
        return 1 + e.max(t, function(e) {
            return e.y
        })
    }

    function Qu(e) {
        return e.reduce(function(e, t) {
            return e + t.x
        }, 0) / e.length
    }

    function Gu(e) {
        var t = e.children;
        return t && t.length ? Gu(t[0]) : e
    }

    function Yu(e) {
        var t = e.children,
            n;
        return t && (n = t.length) ? Yu(t[n - 1]) : e
    }

    function Zu(e) {
        return {
            x: e.x,
            y: e.y,
            dx: e.dx,
            dy: e.dy
        }
    }

    function ea(e, t) {
        var n = e.x + t[3],
            r = e.y + t[0],
            i = e.dx - t[1] - t[3],
            s = e.dy - t[0] - t[2];
        return i < 0 && (n += i / 2, i = 0), s < 0 && (r += s / 2, s = 0), {
            x: n,
            y: r,
            dx: i,
            dy: s
        }
    }

    function ta(e) {
        var t = e[0],
            n = e[e.length - 1];
        return t < n ? [t, n] : [n, t]
    }

    function na(e) {
        return e.rangeExtent ? e.rangeExtent() : ta(e.range())
    }

    function ra(e, t, n, r) {
        var i = n(e[0], e[1]),
            s = r(t[0], t[1]);
        return function(e) {
            return s(i(e))
        }
    }

    function ia(e, t) {
        var n = 0,
            r = e.length - 1,
            i = e[n],
            s = e[r],
            o;
        return s < i && (o = n, n = r, r = o, o = i, i = s, s = o), e[n] = t.floor(i), e[r] = t.ceil(s), e
    }

    function sa(e) {
        return e ? {
            floor: function(t) {
                return Math.floor(t / e) * e
            },
            ceil: function(t) {
                return Math.ceil(t / e) * e
            }
        } : oa
    }

    function ua(t, n, r, i) {
        var s = [],
            o = [],
            u = 0,
            a = Math.min(t.length, n.length) - 1;
        t[a] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse());
        while (++u <= a) s.push(r(t[u - 1], t[u])), o.push(i(n[u - 1], n[u]));
        return function(n) {
            var r = e.bisect(t, n, 1, a) - 1;
            return o[r](s[r](n))
        }
    }

    function aa(e, t, n, r) {
        function o() {
            var o = Math.min(e.length, t.length) > 2 ? ua : ra,
                a = r ? tu : eu;
            return i = o(e, t, a, n), s = o(t, e, a, Co), u
        }

        function u(e) {
            return i(e)
        }
        var i, s;
        return u.invert = function(e) {
            return s(e)
        }, u.domain = function(t) {
            return arguments.length ? (e = t.map(Number), o()) : e
        }, u.range = function(e) {
            return arguments.length ? (t = e, o()) : t
        }, u.rangeRound = function(e) {
            return u.range(e).interpolate($o)
        }, u.clamp = function(e) {
            return arguments.length ? (r = e, o()) : r
        }, u.interpolate = function(e) {
            return arguments.length ? (n = e, o()) : n
        }, u.ticks = function(t) {
            return ha(e, t)
        }, u.tickFormat = function(t, n) {
            return pa(e, t, n)
        }, u.nice = function(t) {
            return la(e, t), o()
        }, u.copy = function() {
            return aa(e, t, n, r)
        }, o()
    }

    function fa(t, n) {
        return e.rebind(t, n, "range", "rangeRound", "interpolate", "clamp")
    }

    function la(e, t) {
        return ia(e, sa(ca(e, t)[2]))
    }

    function ca(e, t) {
        t == null && (t = 10);
        var n = ta(e),
            r = n[1] - n[0],
            i = Math.pow(10, Math.floor(Math.log(r / t) / Math.LN10)),
            s = t / r * i;
        return s <= .15 ? i *= 10 : s <= .35 ? i *= 5 : s <= .75 && (i *= 2), n[0] = Math.ceil(n[0] / i) * i, n[1] = Math.floor(n[1] / i) * i + i * .5, n[2] = i, n
    }

    function ha(t, n) {
        return e.range.apply(e, ca(t, n))
    }

    function pa(t, n, r) {
        var i = ca(t, n);
        if (r) {
            var s = Wn.exec(r);
            s.shift();
            if (s[8] === "s") {
                var o = e.formatPrefix(Math.max(y(i[0]), y(i[1])));
                return s[7] || (s[7] = "." + va(o.scale(i[2]))), s[8] = "f", r = e.format(s.join("")),
                    function(e) {
                        return r(o.scale(e)) + o.symbol
                    }
            }
            s[7] || (s[7] = "." + ma(s[8], i)), r = s.join("")
        } else r = ",." + va(i[2]) + "f";
        return e.format(r)
    }

    function va(e) {
        return -Math.floor(Math.log(e) / Math.LN10 + .01)
    }

    function ma(e, t) {
        var n = va(t[2]);
        return e in da ? Math.abs(n - va(Math.max(y(t[0]), y(t[1])))) + +(e !== "e") : n - (e === "%") * 2
    }

    function ga(t, n, r, i) {
        function s(e) {
            return (r ? Math.log(e < 0 ? 0 : e) : -Math.log(e > 0 ? 0 : -e)) / Math.log(n)
        }

        function o(e) {
            return r ? Math.pow(n, e) : -Math.pow(n, -e)
        }

        function u(e) {
            return t(s(e))
        }
        return u.invert = function(e) {
            return o(t.invert(e))
        }, u.domain = function(e) {
            return arguments.length ? (r = e[0] >= 0, t.domain((i = e.map(Number)).map(s)), u) : i
        }, u.base = function(e) {
            return arguments.length ? (n = +e, t.domain(i.map(s)), u) : n
        }, u.nice = function() {
            var e = ia(i.map(s), r ? Math : ba);
            return t.domain(e), i = e.map(o), u
        }, u.ticks = function() {
            var e = ta(i),
                t = [],
                u = e[0],
                a = e[1],
                f = Math.floor(s(u)),
                l = Math.ceil(s(a)),
                c = n % 1 ? 2 : n;
            if (isFinite(l - f)) {
                if (r) {
                    for (; f < l; f++)
                        for (var h = 1; h < c; h++) t.push(o(f) * h);
                    t.push(o(f))
                } else {
                    t.push(o(f));
                    for (; f++ < l;)
                        for (var h = c - 1; h > 0; h--) t.push(o(f) * h)
                }
                for (f = 0; t[f] < u; f++);
                for (l = t.length; t[l - 1] > a; l--);
                t = t.slice(f, l)
            }
            return t
        }, u.tickFormat = function(t, n) {
            if (!arguments.length) return ya;
            arguments.length < 2 ? n = ya : typeof n != "function" && (n = e.format(n));
            var i = Math.max(.1, t / u.ticks().length),
                a = r ? (f = 1e-12, Math.ceil) : (f = -1e-12, Math.floor),
                f;
            return function(e) {
                return e / o(a(s(e) + f)) <= i ? n(e) : ""
            }
        }, u.copy = function() {
            return ga(t.copy(), n, r, i)
        }, fa(u, t)
    }

    function wa(e, t, n) {
        function s(t) {
            return e(r(t))
        }
        var r = Ea(t),
            i = Ea(1 / t);
        return s.invert = function(t) {
            return i(e.invert(t))
        }, s.domain = function(t) {
            return arguments.length ? (e.domain((n = t.map(Number)).map(r)), s) : n
        }, s.ticks = function(e) {
            return ha(n, e)
        }, s.tickFormat = function(e, t) {
            return pa(n, e, t)
        }, s.nice = function(e) {
            return s.domain(la(n, e))
        }, s.exponent = function(o) {
            return arguments.length ? (r = Ea(t = o), i = Ea(1 / t), e.domain(n.map(r)), s) : t
        }, s.copy = function() {
            return wa(e.copy(), t, n)
        }, fa(s, e)
    }

    function Ea(e) {
        return function(t) {
            return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e)
        }
    }

    function Sa(t, n) {
        function o(e) {
            return i[((r.get(e) || (n.t === "range" ? r.set(e, t.push(e)) : NaN)) - 1) % i.length]
        }

        function u(n, r) {
            return e.range(t.length).map(function(e) {
                return n + r * e
            })
        }
        var r, i, s;
        return o.domain = function(e) {
            if (!arguments.length) return t;
            t = [], r = new E;
            var i = -1,
                s = e.length,
                u;
            while (++i < s) r.has(u = e[i]) || r.set(u, t.push(u));
            return o[n.t].apply(o, n.a)
        }, o.range = function(e) {
            return arguments.length ? (i = e, s = 0, n = {
                t: "range",
                a: arguments
            }, o) : i
        }, o.rangePoints = function(e, r) {
            arguments.length < 2 && (r = 0);
            var a = e[0],
                f = e[1],
                l = (f - a) / (Math.max(1, t.length - 1) + r);
            return i = u(t.length < 2 ? (a + f) / 2 : a + l * r / 2, l), s = 0, n = {
                t: "rangePoints",
                a: arguments
            }, o
        }, o.rangeBands = function(e, r, a) {
            arguments.length < 2 && (r = 0), arguments.length < 3 && (a = r);
            var f = e[1] < e[0],
                l = e[f - 0],
                c = e[1 - f],
                h = (c - l) / (t.length - r + 2 * a);
            return i = u(l + h * a, h), f && i.reverse(), s = h * (1 - r), n = {
                t: "rangeBands",
                a: arguments
            }, o
        }, o.rangeRoundBands = function(e, r, a) {
            arguments.length < 2 && (r = 0), arguments.length < 3 && (a = r);
            var f = e[1] < e[0],
                l = e[f - 0],
                c = e[1 - f],
                h = Math.floor((c - l) / (t.length - r + 2 * a)),
                p = c - l - (t.length - r) * h;
            return i = u(l + Math.round(p / 2), h), f && i.reverse(), s = Math.round(h * (1 - r)), n = {
                t: "rangeRoundBands",
                a: arguments
            }, o
        }, o.rangeBand = function() {
            return s
        }, o.rangeExtent = function() {
            return ta(n.a[0])
        }, o.copy = function() {
            return Sa(t, n)
        }, o.domain(t)
    }

    function ka(t, n) {
        function i() {
            var i = 0,
                o = n.length;
            r = [];
            while (++i < o) r[i - 1] = e.quantile(t, i / o);
            return s
        }

        function s(t) {
            if (!isNaN(t = +t)) return n[e.bisect(r, t)]
        }
        var r;
        return s.domain = function(e) {
            return arguments.length ? (t = e.filter(d).sort(p), i()) : t
        }, s.range = function(e) {
            return arguments.length ? (n = e, i()) : n
        }, s.quantiles = function() {
            return r
        }, s.invertExtent = function(e) {
            return e = n.indexOf(e), e < 0 ? [NaN, NaN] : [e > 0 ? r[e - 1] : t[0], e < r.length ? r[e] : t[t.length - 1]]
        }, s.copy = function() {
            return ka(t, n)
        }, i()
    }

    function La(e, t, n) {
        function s(t) {
            return n[Math.max(0, Math.min(i, Math.floor(r * (t - e))))]
        }

        function o() {
            return r = n.length / (t - e), i = n.length - 1, s
        }
        var r, i;
        return s.domain = function(n) {
            return arguments.length ? (e = +n[0], t = +n[n.length - 1], o()) : [e, t]
        }, s.range = function(e) {
            return arguments.length ? (n = e, o()) : n
        }, s.invertExtent = function(t) {
            return t = n.indexOf(t), t = t < 0 ? NaN : t / r + e, [t, t + 1 / r]
        }, s.copy = function() {
            return La(e, t, n)
        }, o()
    }

    function Aa(t, n) {
        function r(r) {
            if (r <= r) return n[e.bisect(t, r)]
        }
        return r.domain = function(e) {
            return arguments.length ? (t = e, r) : t
        }, r.range = function(e) {
            return arguments.length ? (n = e, r) : n
        }, r.invertExtent = function(e) {
            return e = n.indexOf(e), [t[e - 1], t[e]]
        }, r.copy = function() {
            return Aa(t, n)
        }, r
    }

    function Oa(e) {
        function t(e) {
            return +e
        }
        return t.invert = t, t.domain = t.range = function(n) {
            return arguments.length ? (e = n.map(t), t) : e
        }, t.ticks = function(t) {
            return ha(e, t)
        }, t.tickFormat = function(t, n) {
            return pa(e, t, n)
        }, t.copy = function() {
            return Oa(e)
        }, t
    }

    function Da(e) {
        return e.innerRadius
    }

    function Pa(e) {
        return e.outerRadius
    }

    function Ha(e) {
        return e.startAngle
    }

    function Ba(e) {
        return e.endAngle
    }

    function ja(e) {
        function u(s) {
            function d() {
                u.push("M", i(e(a), o))
            }
            var u = [],
                a = [],
                f = -1,
                l = s.length,
                c, h = Cn(t),
                p = Cn(n);
            while (++f < l) r.call(this, c = s[f], f) ? a.push([+h.call(this, c, f), +p.call(this, c, f)]) : a.length && (d(), a = []);
            return a.length && d(), u.length ? u.join("") : null
        }
        var t = Ns,
            n = Cs,
            r = ui,
            i = Ia,
            s = i.key,
            o = .7;
        return u.x = function(e) {
            return arguments.length ? (t = e, u) : t
        }, u.y = function(e) {
            return arguments.length ? (n = e, u) : n
        }, u.defined = function(e) {
            return arguments.length ? (r = e, u) : r
        }, u.interpolate = function(e) {
            return arguments.length ? (typeof e == "function" ? s = i = e : s = (i = Fa.get(e) || Ia).key, u) : s
        }, u.tension = function(e) {
            return arguments.length ? (o = e, u) : o
        }, u
    }

    function Ia(e) {
        return e.join("L")
    }

    function qa(e) {
        return Ia(e) + "Z"
    }

    function Ra(e) {
        var t = 0,
            n = e.length,
            r = e[0],
            i = [r[0], ",", r[1]];
        while (++t < n) i.push("H", (r[0] + (r = e[t])[0]) / 2, "V", r[1]);
        return n > 1 && i.push("H", r[0]), i.join("")
    }

    function Ua(e) {
        var t = 0,
            n = e.length,
            r = e[0],
            i = [r[0], ",", r[1]];
        while (++t < n) i.push("V", (r = e[t])[1], "H", r[0]);
        return i.join("")
    }

    function za(e) {
        var t = 0,
            n = e.length,
            r = e[0],
            i = [r[0], ",", r[1]];
        while (++t < n) i.push("H", (r = e[t])[0], "V", r[1]);
        return i.join("")
    }

    function Wa(e, t) {
        return e.length < 4 ? Ia(e) : e[1] + $a(e.slice(1, e.length - 1), Ja(e, t))
    }

    function Xa(e, t) {
        return e.length < 3 ? Ia(e) : e[0] + $a((e.push(e[0]), e), Ja([e[e.length - 2]].concat(e, [e[1]]), t))
    }

    function Va(e, t) {
        return e.length < 3 ? Ia(e) : e[0] + $a(e, Ja(e, t))
    }

    function $a(e, t) {
        if (t.length < 1 || e.length != t.length && e.length != t.length + 2) return Ia(e);
        var n = e.length != t.length,
            r = "",
            i = e[0],
            s = e[1],
            o = t[0],
            u = o,
            a = 1;
        n && (r += "Q" + (s[0] - o[0] * 2 / 3) + "," + (s[1] - o[1] * 2 / 3) + "," + s[0] + "," + s[1], i = e[1], a = 2);
        if (t.length > 1) {
            u = t[1], s = e[a], a++, r += "C" + (i[0] + o[0]) + "," + (i[1] + o[1]) + "," + (s[0] - u[0]) + "," + (s[1] - u[1]) + "," + s[0] + "," + s[1];
            for (var f = 2; f < t.length; f++, a++) s = e[a], u = t[f], r += "S" + (s[0] - u[0]) + "," + (s[1] - u[1]) + "," + s[0] + "," + s[1]
        }
        if (n) {
            var l = e[a];
            r += "Q" + (s[0] + u[0] * 2 / 3) + "," + (s[1] + u[1] * 2 / 3) + "," + l[0] + "," + l[1]
        }
        return r
    }

    function Ja(e, t) {
        var n = [],
            r = (1 - t) / 2,
            i, s = e[0],
            o = e[1],
            u = 1,
            a = e.length;
        while (++u < a) i = s, s = o, o = e[u], n.push([r * (o[0] - i[0]), r * (o[1] - i[1])]);
        return n
    }

    function Ka(e) {
        if (e.length < 3) return Ia(e);
        var t = 1,
            n = e.length,
            r = e[0],
            i = r[0],
            s = r[1],
            o = [i, i, i, (r = e[1])[0]],
            u = [s, s, s, r[1]],
            a = [i, ",", s, "L", Za(nf, o), ",", Za(nf, u)];
        e.push(e[n - 1]);
        while (++t <= n) r = e[t], o.shift(), o.push(r[0]), u.shift(), u.push(r[1]), rf(a, o, u);
        return e.pop(), a.push("L", r), a.join("")
    }

    function Qa(e) {
        if (e.length < 4) return Ia(e);
        var t = [],
            n = -1,
            r = e.length,
            i, s = [0],
            o = [0];
        while (++n < 3) i = e[n], s.push(i[0]), o.push(i[1]);
        t.push(Za(nf, s) + "," + Za(nf, o)), --n;
        while (++n < r) i = e[n], s.shift(), s.push(i[0]), o.shift(), o.push(i[1]), rf(t, s, o);
        return t.join("")
    }

    function Ga(e) {
        var t, n = -1,
            r = e.length,
            i = r + 4,
            s, o = [],
            u = [];
        while (++n < 4) s = e[n % r], o.push(s[0]), u.push(s[1]);
        t = [Za(nf, o), ",", Za(nf, u)], --n;
        while (++n < i) s = e[n % r], o.shift(), o.push(s[0]), u.shift(), u.push(s[1]), rf(t, o, u);
        return t.join("")
    }

    function Ya(e, t) {
        var n = e.length - 1;
        if (n) {
            var r = e[0][0],
                i = e[0][1],
                s = e[n][0] - r,
                o = e[n][1] - i,
                u = -1,
                a, f;
            while (++u <= n) a = e[u], f = u / n, a[0] = t * a[0] + (1 - t) * (r + f * s), a[1] = t * a[1] + (1 - t) * (i + f * o)
        }
        return Ka(e)
    }

    function Za(e, t) {
        return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3]
    }

    function rf(e, t, n) {
        e.push("C", Za(ef, t), ",", Za(ef, n), ",", Za(tf, t), ",", Za(tf, n), ",", Za(nf, t), ",", Za(nf, n))
    }

    function sf(e, t) {
        return (t[1] - e[1]) / (t[0] - e[0])
    }

    function of(e) {
        var t = 0,
            n = e.length - 1,
            r = [],
            i = e[0],
            s = e[1],
            o = r[0] = sf(i, s);
        while (++t < n) r[t] = (o + (o = sf(i = s, s = e[t + 1]))) / 2;
        return r[t] = o, r
    }

    function uf(e) {
        var t = [],
            n, r, i, s, o = of(e),
            u = -1,
            a = e.length - 1;
        while (++u < a) n = sf(e[u], e[u + 1]), y(n) < Lt ? o[u] = o[u + 1] = 0 : (r = o[u] / n, i = o[u + 1] / n, s = r * r + i * i, s > 9 && (s = n * 3 / Math.sqrt(s), o[u] = s * r, o[u + 1] = s * i));
        u = -1;
        while (++u <= a) s = (e[Math.min(a, u + 1)][0] - e[Math.max(0, u - 1)][0]) / (6 * (1 + o[u] * o[u])), t.push([s || 0, o[u] * s || 0]);
        return t
    }

    function af(e) {
        return e.length < 3 ? Ia(e) : e[0] + $a(e, uf(e))
    }

    function ff(e) {
        var t, n = -1,
            r = e.length,
            i, s;
        while (++n < r) t = e[n], i = t[0], s = t[1] + Ma, t[0] = i * Math.cos(s), t[1] = i * Math.sin(s);
        return e
    }

    function lf(e) {
        function c(u) {
            function x() {
                c.push("M", o(e(p), l), f, a(e(h.reverse()), l), "Z")
            }
            var c = [],
                h = [],
                p = [],
                d = -1,
                v = u.length,
                m, g = Cn(t),
                y = Cn(r),
                b = t === n ? function() {
                    return E
                } : Cn(n),
                w = r === i ? function() {
                    return S
                } : Cn(i),
                E, S;
            while (++d < v) s.call(this, m = u[d], d) ? (h.push([E = +g.call(this, m, d), S = +y.call(this, m, d)]), p.push([+b.call(this, m, d), +w.call(this, m, d)])) : h.length && (x(), h = [], p = []);
            return h.length && x(), c.length ? c.join("") : null
        }
        var t = Ns,
            n = Ns,
            r = 0,
            i = Cs,
            s = ui,
            o = Ia,
            u = o.key,
            a = o,
            f = "L",
            l = .7;
        return c.x = function(e) {
            return arguments.length ? (t = n = e, c) : n
        }, c.x0 = function(e) {
            return arguments.length ? (t = e, c) : t
        }, c.x1 = function(e) {
            return arguments.length ? (n = e, c) : n
        }, c.y = function(e) {
            return arguments.length ? (r = i = e, c) : i
        }, c.y0 = function(e) {
            return arguments.length ? (r = e, c) : r
        }, c.y1 = function(e) {
            return arguments.length ? (i = e, c) : i
        }, c.defined = function(e) {
            return arguments.length ? (s = e, c) : s
        }, c.interpolate = function(e) {
            return arguments.length ? (typeof e == "function" ? u = o = e : u = (o = Fa.get(e) || Ia).key, a = o.reverse || o, f = o.closed ? "M" : "L", c) : u
        }, c.tension = function(e) {
            return arguments.length ? (l = e, c) : l
        }, c
    }

    function cf(e) {
        return e.radius
    }

    function hf(e) {
        return [e.x, e.y]
    }

    function pf(e) {
        return function() {
            var t = e.apply(this, arguments),
                n = t[0],
                r = t[1] + Ma;
            return [n * Math.cos(r), n * Math.sin(r)]
        }
    }

    function df() {
        return 64
    }

    function vf() {
        return "circle"
    }

    function mf(e) {
        var t = Math.sqrt(e / Nt);
        return "M0," + t + "A" + t + "," + t + " 0 1,1 0," + -t + "A" + t + "," + t + " 0 1,1 0," + t + "Z"
    }

    function wf(e, t) {
        return q(e, Ef), e.id = t, e
    }

    function Nf(e, t, n, r) {
        var i = e.id;
        return at(e, typeof n == "function" ? function(e, s, o) {
            e.__transition__[i].tween.set(t, r(n.call(e, e.__data__, s, o)))
        } : (n = r(n), function(e) {
            e.__transition__[i].tween.set(t, n)
        }))
    }

    function Cf(e) {
        return e == null && (e = ""),
            function() {
                this.textContent = e
            }
    }

    function kf(t, n, r, i) {
        var s = t.__transition__ || (t.__transition__ = {
                active: 0,
                count: 0
            }),
            o = s[r];
        if (!o) {
            var u = i.time;
            o = s[r] = {
                tween: new E,
                time: u,
                ease: i.ease,
                delay: i.delay,
                duration: i.duration
            }, ++s.count, e.timer(function(i) {
                function d(i) {
                    if (s.active > r) return m();
                    s.active = r, o.event && o.event.start.call(t, a, n), o.tween.forEach(function(e, r) {
                        (r = r.call(t, a, n)) && p.push(r)
                    }), e.timer(function() {
                        return h.c = v(i || 1) ? ui : v, 1
                    }, 0, u)
                }

                function v(e) {
                    if (s.active !== r) return m();
                    var i = e / c,
                        u = f(i),
                        l = p.length;
                    while (l > 0) p[--l].call(t, u);
                    if (i >= 1) return o.event && o.event.end.call(t, a, n), m()
                }

                function m() {
                    return --s.count ? delete s[r] : delete t.__transition__, 1
                }
                var a = t.__data__,
                    f = o.ease,
                    l = o.delay,
                    c = o.duration,
                    h = Hn,
                    p = [];
                h.t = l + u;
                if (l <= i) return d(i - l);
                h.c = d
            }, 0, u)
        }
    }

    function Of(e, t) {
        e.attr("transform", function(e) {
            return "translate(" + t(e) + ",0)"
        })
    }

    function Mf(e, t) {
        e.attr("transform", function(e) {
            return "translate(0," + t(e) + ")"
        })
    }

    function jf(e) {
        return e.toISOString()
    }

    function Ff(t, n, r) {
        function i(e) {
            return t(e)
        }

        function s(t, r) {
            var i = t[1] - t[0],
                s = i / r,
                o = e.bisect(qf, s);
            return o == qf.length ? [n.year, ca(t.map(function(e) {
                return e / 31536e6
            }), r)[2]] : o ? n[s / qf[o - 1] < qf[o] / s ? o - 1 : o] : [zf, ca(t, r)[2]]
        }
        return i.invert = function(e) {
            return If(t.invert(e))
        }, i.domain = function(e) {
            return arguments.length ? (t.domain(e), i) : t.domain().map(If)
        }, i.nice = function(e, t) {
            function u(n) {
                return !isNaN(n) && !e.range(n, If(+n + 1), t).length
            }
            var n = i.domain(),
                r = ta(n),
                o = e == null ? s(r, 10) : typeof e == "number" && s(r, e);
            return o && (e = o[0], t = o[1]), i.domain(ia(n, t > 1 ? {
                floor: function(t) {
                    while (u(t = e.floor(t))) t = If(t - 1);
                    return t
                },
                ceil: function(t) {
                    while (u(t = e.ceil(t))) t = If(+t + 1);
                    return t
                }
            } : e))
        }, i.ticks = function(e, t) {
            var n = ta(i.domain()),
                r = e == null ? s(n, 10) : typeof e == "number" ? s(n, e) : !e.range && [{
                    range: e
                }, t];
            return r && (e = r[0], t = r[1]), e.range(n[0], If(+n[1] + 1), t < 1 ? 1 : t)
        }, i.tickFormat = function() {
            return r
        }, i.copy = function() {
            return Ff(t.copy(), n, r)
        }, fa(i, t)
    }

    function If(e) {
        return new Date(e)
    }

    function Vf(e) {
        return JSON.parse(e.responseText)
    }

    function $f(e) {
        var t = r.createRange();
        return t.selectNode(r.body), t.createContextualFragment(e.responseText)
    }
    var e = {
        version: "3.4.8"
    };
    Date.now || (Date.now = function() {
        return +(new Date)
    });
    var t = [].slice,
        n = function(e) {
            return t.call(e)
        },
        r = document,
        i = r.documentElement,
        s = window;
    try {
        n(i.childNodes)[0].nodeType
    } catch (o) {
        n = function(e) {
            var t = e.length,
                n = new Array(t);
            while (t--) n[t] = e[t];
            return n
        }
    }
    try {
        r.createElement("div").style.setProperty("opacity", 0, "")
    } catch (u) {
        var a = s.Element.prototype,
            f = a.setAttribute,
            l = a.setAttributeNS,
            c = s.CSSStyleDeclaration.prototype,
            h = c.setProperty;
        a.setAttribute = function(e, t) {
            f.call(this, e, t + "")
        }, a.setAttributeNS = function(e, t, n) {
            l.call(this, e, t, n + "")
        }, c.setProperty = function(e, t, n) {
            h.call(this, e, t + "", n)
        }
    }
    e.ascending = p, e.descending = function(e, t) {
        return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
    }, e.min = function(e, t) {
        var n = -1,
            r = e.length,
            i, s;
        if (arguments.length === 1) {
            while (++n < r && !((i = e[n]) != null && i <= i)) i = undefined;
            while (++n < r)(s = e[n]) != null && i > s && (i = s)
        } else {
            while (++n < r && !((i = t.call(e, e[n], n)) != null && i <= i)) i = undefined;
            while (++n < r)(s = t.call(e, e[n], n)) != null && i > s && (i = s)
        }
        return i
    }, e.max = function(e, t) {
        var n = -1,
            r = e.length,
            i, s;
        if (arguments.length === 1) {
            while (++n < r && !((i = e[n]) != null && i <= i)) i = undefined;
            while (++n < r)(s = e[n]) != null && s > i && (i = s)
        } else {
            while (++n < r && !((i = t.call(e, e[n], n)) != null && i <= i)) i = undefined;
            while (++n < r)(s = t.call(e, e[n], n)) != null && s > i && (i = s)
        }
        return i
    }, e.extent = function(e, t) {
        var n = -1,
            r = e.length,
            i, s, o;
        if (arguments.length === 1) {
            while (++n < r && !((i = o = e[n]) != null && i <= i)) i = o = undefined;
            while (++n < r)(s = e[n]) != null && (i > s && (i = s), o < s && (o = s))
        } else {
            while (++n < r && !((i = o = t.call(e, e[n], n)) != null && i <= i)) i = undefined;
            while (++n < r)(s = t.call(e, e[n], n)) != null && (i > s && (i = s), o < s && (o = s))
        }
        return [i, o]
    }, e.sum = function(e, t) {
        var n = 0,
            r = e.length,
            i, s = -1;
        if (arguments.length === 1)
            while (++s < r) isNaN(i = +e[s]) || (n += i);
        else
            while (++s < r) isNaN(i = +t.call(e, e[s], s)) || (n += i);
        return n
    }, e.mean = function(e, t) {
        var n = 0,
            r = e.length,
            i, s = -1,
            o = r;
        if (arguments.length === 1)
            while (++s < r) d(i = e[s]) ? n += i : --o;
        else
            while (++s < r) d(i = t.call(e, e[s], s)) ? n += i : --o;
        return o ? n / o : undefined
    }, e.quantile = function(e, t) {
        var n = (e.length - 1) * t + 1,
            r = Math.floor(n),
            i = +e[r - 1],
            s = n - r;
        return s ? i + s * (e[r] - i) : i
    }, e.median = function(t, n) {
        return arguments.length > 1 && (t = t.map(n)), t = t.filter(d), t.length ? e.quantile(t.sort(p), .5) : undefined
    };
    var m = v(p);
    e.bisectLeft = m.left, e.bisect = e.bisectRight = m.right, e.bisector = function(e) {
        return v(e.length === 1 ? function(t, n) {
            return p(e(t), n)
        } : e)
    }, e.shuffle = function(e) {
        var t = e.length,
            n, r;
        while (t) r = Math.random() * t-- | 0, n = e[t], e[t] = e[r], e[r] = n;
        return e
    }, e.permute = function(e, t) {
        var n = t.length,
            r = new Array(n);
        while (n--) r[n] = e[t[n]];
        return r
    }, e.pairs = function(e) {
        var t = 0,
            n = e.length - 1,
            r, i = e[0],
            s = new Array(n < 0 ? 0 : n);
        while (t < n) s[t] = [r = i, i = e[++t]];
        return s
    }, e.zip = function() {
        if (!(s = arguments.length)) return [];
        for (var t = -1, n = e.min(arguments, g), r = new Array(n); ++t < n;)
            for (var i = -1, s, o = r[t] = new Array(s); ++i < s;) o[i] = arguments[i][t];
        return r
    }, e.transpose = function(t) {
        return e.zip.apply(e, t)
    }, e.keys = function(e) {
        var t = [];
        for (var n in e) t.push(n);
        return t
    }, e.values = function(e) {
        var t = [];
        for (var n in e) t.push(e[n]);
        return t
    }, e.entries = function(e) {
        var t = [];
        for (var n in e) t.push({
            key: n,
            value: e[n]
        });
        return t
    }, e.merge = function(e) {
        var t = e.length,
            n, r = -1,
            i = 0,
            s, o;
        while (++r < t) i += e[r].length;
        s = new Array(i);
        while (--t >= 0) {
            o = e[t], n = o.length;
            while (--n >= 0) s[--i] = o[n]
        }
        return s
    };
    var y = Math.abs;
    e.range = function(e, t, n) {
        arguments.length < 3 && (n = 1, arguments.length < 2 && (t = e, e = 0));
        if ((t - e) / n === Infinity) throw new Error("infinite range");
        var r = [],
            i = b(y(n)),
            s = -1,
            o;
        e *= i, t *= i, n *= i;
        if (n < 0)
            while ((o = e + n * ++s) > t) r.push(o / i);
        else
            while ((o = e + n * ++s) < t) r.push(o / i);
        return r
    }, e.map = function(e) {
        var t = new E;
        if (e instanceof E) e.forEach(function(e, n) {
            t.set(e, n)
        });
        else
            for (var n in e) t.set(n, e[n]);
        return t
    }, w(E, {
        has: T,
        get: function(e) {
            return this[S + e]
        },
        set: function(e, t) {
            return this[S + e] = t
        },
        remove: N,
        keys: C,
        values: function() {
            var e = [];
            return this.forEach(function(t, n) {
                e.push(n)
            }), e
        },
        entries: function() {
            var e = [];
            return this.forEach(function(t, n) {
                e.push({
                    key: t,
                    value: n
                })
            }), e
        },
        size: k,
        empty: L,
        forEach: function(e) {
            for (var t in this) t.charCodeAt(0) === x && e.call(this, t.substring(1), this[t])
        }
    });
    var S = "\0",
        x = S.charCodeAt(0);
    e.nest = function() {
        function o(e, r, u) {
            if (u >= n.length) return s ? s.call(t, r) : i ? r.sort(i) : r;
            var a = -1,
                f = r.length,
                l = n[u++],
                c, h, p, d = new E,
                v;
            while (++a < f)(v = d.get(c = l(h = r[a]))) ? v.push(h) : d.set(c, [h]);
            return e ? (h = e(), p = function(t, n) {
                h.set(t, o(e, n, u))
            }) : (h = {}, p = function(t, n) {
                h[t] = o(e, n, u)
            }), d.forEach(p), h
        }

        function u(e, t) {
            if (t >= n.length) return e;
            var i = [],
                s = r[t++];
            return e.forEach(function(e, n) {
                i.push({
                    key: e,
                    values: u(n, t)
                })
            }), s ? i.sort(function(e, t) {
                return s(e.key, t.key)
            }) : i
        }
        var t = {},
            n = [],
            r = [],
            i, s;
        return t.map = function(e, t) {
            return o(t, e, 0)
        }, t.entries = function(t) {
            return u(o(e.map, t, 0), 0)
        }, t.key = function(e) {
            return n.push(e), t
        }, t.sortKeys = function(e) {
            return r[n.length - 1] = e, t
        }, t.sortValues = function(e) {
            return i = e, t
        }, t.rollup = function(e) {
            return s = e, t
        }, t
    }, e.set = function(e) {
        var t = new A;
        if (e)
            for (var n = 0, r = e.length; n < r; ++n) t.add(e[n]);
        return t
    }, w(A, {
        has: T,
        add: function(e) {
            return this[S + e] = !0, e
        },
        remove: function(e) {
            return e = S + e, e in this && delete this[e]
        },
        values: C,
        size: k,
        empty: L,
        forEach: function(e) {
            for (var t in this) t.charCodeAt(0) === x && e.call(this, t.substring(1))
        }
    }), e.behavior = {}, e.rebind = function(e, t) {
        var n = 1,
            r = arguments.length,
            i;
        while (++n < r) e[i = arguments[n]] = O(e, t, t[i]);
        return e
    };
    var _ = ["webkit", "ms", "moz", "Moz", "o", "O"];
    e.dispatch = function() {
        var e = new P,
            t = -1,
            n = arguments.length;
        while (++t < n) e[arguments[t]] = H(e);
        return e
    }, P.prototype.on = function(e, t) {
        var n = e.indexOf("."),
            r = "";
        n >= 0 && (r = e.substring(n + 1), e = e.substring(0, n));
        if (e) return arguments.length < 2 ? this[e].on(r) : this[e].on(r, t);
        if (arguments.length === 2) {
            if (t == null)
                for (e in this) this.hasOwnProperty(e) && this[e].on(r, null);
            return this
        }
    }, e.event = null, e.requote = function(e) {
        return e.replace(I, "\\$&")
    };
    var I = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,
        q = {}.__proto__ ? function(e, t) {
            e.__proto__ = t
        } : function(e, t) {
            for (var n in t) e[n] = t[n]
        },
        U = function(e, t) {
            return t.querySelector(e)
        },
        z = function(e, t) {
            return t.querySelectorAll(e)
        },
        W = i[M(i, "matchesSelector")],
        X = function(e, t) {
            return W.call(e, t)
        };
    typeof Sizzle == "function" && (U = function(e, t) {
        return Sizzle(e, t)[0] || null
    }, z = Sizzle, X = Sizzle.matchesSelector), e.selection = function() {
        return pt
    };
    var V = e.selection.prototype = [];
    V.select = function(e) {
        var t = [],
            n, r, i, s;
        e = $(e);
        for (var o = -1, u = this.length; ++o < u;) {
            t.push(n = []), n.parentNode = (i = this[o]).parentNode;
            for (var a = -1, f = i.length; ++a < f;)(s = i[a]) ? (n.push(r = e.call(s, s.__data__, a, o)), r && "__data__" in s && (r.__data__ = s.__data__)) : n.push(null)
        }
        return R(t)
    }, V.selectAll = function(e) {
        var t = [],
            r, i;
        e = J(e);
        for (var s = -1, o = this.length; ++s < o;)
            for (var u = this[s], a = -1, f = u.length; ++a < f;)
                if (i = u[a]) t.push(r = n(e.call(i, i.__data__, a, s))), r.parentNode = i;
        return R(t)
    };
    var K = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: "http://www.w3.org/1999/xhtml",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    };
    e.ns = {
        prefix: K,
        qualify: function(e) {
            var t = e.indexOf(":"),
                n = e;
            return t >= 0 && (n = e.substring(0, t), e = e.substring(t + 1)), K.hasOwnProperty(n) ? {
                space: K[n],
                local: e
            } : e
        }
    }, V.attr = function(t, n) {
        if (arguments.length < 2) {
            if (typeof t == "string") {
                var r = this.node();
                return t = e.ns.qualify(t), t.local ? r.getAttributeNS(t.space, t.local) : r.getAttribute(t)
            }
            for (n in t) this.each(Q(n, t[n]));
            return this
        }
        return this.each(Q(t, n))
    }, V.classed = function(e, t) {
        if (arguments.length < 2) {
            if (typeof e == "string") {
                var n = this.node(),
                    r = (e = Z(e)).length,
                    i = -1;
                if (t = n.classList) {
                    while (++i < r)
                        if (!t.contains(e[i])) return !1
                } else {
                    t = n.getAttribute("class");
                    while (++i < r)
                        if (!Y(e[i]).test(t)) return !1
                }
                return !0
            }
            for (t in e) this.each(et(t, e[t]));
            return this
        }
        return this.each(et(e, t))
    }, V.style = function(e, t, n) {
        var r = arguments.length;
        if (r < 3) {
            if (typeof e != "string") {
                r < 2 && (t = "");
                for (n in e) this.each(nt(n, e[n], t));
                return this
            }
            if (r < 2) return s.getComputedStyle(this.node(), null).getPropertyValue(e);
            n = ""
        }
        return this.each(nt(e, t, n))
    }, V.property = function(e, t) {
        if (arguments.length < 2) {
            if (typeof e == "string") return this.node()[e];
            for (t in e) this.each(rt(t, e[t]));
            return this
        }
        return this.each(rt(e, t))
    }, V.text = function(e) {
        return arguments.length ? this.each(typeof e == "function" ? function() {
            var t = e.apply(this, arguments);
            this.textContent = t == null ? "" : t
        } : e == null ? function() {
            this.textContent = ""
        } : function() {
            this.textContent = e
        }) : this.node().textContent
    }, V.html = function(e) {
        return arguments.length ? this.each(typeof e == "function" ? function() {
            var t = e.apply(this, arguments);
            this.innerHTML = t == null ? "" : t
        } : e == null ? function() {
            this.innerHTML = ""
        } : function() {
            this.innerHTML = e
        }) : this.node().innerHTML
    }, V.append = function(e) {
        return e = it(e), this.select(function() {
            return this.appendChild(e.apply(this, arguments))
        })
    }, V.insert = function(e, t) {
        return e = it(e), t = $(t), this.select(function() {
            return this.insertBefore(e.apply(this, arguments), t.apply(this, arguments) || null)
        })
    }, V.remove = function() {
        return this.each(function() {
            var e = this.parentNode;
            e && e.removeChild(this)
        })
    }, V.data = function(e, t) {
        function o(e, n) {
            var r, i = e.length,
                s = n.length,
                o = Math.min(i, s),
                l = new Array(s),
                c = new Array(s),
                h = new Array(i),
                p, d;
            if (t) {
                var v = new E,
                    m = new E,
                    g = [],
                    y;
                for (r = -1; ++r < i;) y = t.call(p = e[r], p.__data__, r), v.has(y) ? h[r] = p : v.set(y, p), g.push(y);
                for (r = -1; ++r < s;) y = t.call(n, d = n[r], r), (p = v.get(y)) ? (l[r] = p, p.__data__ = d) : m.has(y) || (c[r] = st(d)), m.set(y, d), v.remove(y);
                for (r = -1; ++r < i;) v.has(g[r]) && (h[r] = e[r])
            } else {
                for (r = -1; ++r < o;) p = e[r], d = n[r], p ? (p.__data__ = d, l[r] = p) : c[r] = st(d);
                for (; r < s; ++r) c[r] = st(n[r]);
                for (; r < i; ++r) h[r] = e[r]
            }
            c.update = l, c.parentNode = l.parentNode = h.parentNode = e.parentNode, u.push(c), a.push(l), f.push(h)
        }
        var n = -1,
            r = this.length,
            i, s;
        if (!arguments.length) {
            e = new Array(r = (i = this[0]).length);
            while (++n < r)
                if (s = i[n]) e[n] = s.__data__;
            return e
        }
        var u = ft([]),
            a = R([]),
            f = R([]);
        if (typeof e == "function")
            while (++n < r) o(i = this[n], e.call(i, i.parentNode.__data__, n));
        else
            while (++n < r) o(i = this[n], e);
        return a.enter = function() {
            return u
        }, a.exit = function() {
            return f
        }, a
    }, V.datum = function(e) {
        return arguments.length ? this.property("__data__", e) : this.property("__data__")
    }, V.filter = function(e) {
        var t = [],
            n, r, i;
        typeof e != "function" && (e = ot(e));
        for (var s = 0, o = this.length; s < o; s++) {
            t.push(n = []), n.parentNode = (r = this[s]).parentNode;
            for (var u = 0, a = r.length; u < a; u++)(i = r[u]) && e.call(i, i.__data__, u, s) && n.push(i)
        }
        return R(t)
    }, V.order = function() {
        for (var e = -1, t = this.length; ++e < t;)
            for (var n = this[e], r = n.length - 1, i = n[r], s; --r >= 0;)
                if (s = n[r]) i && i !== s.nextSibling && i.parentNode.insertBefore(s, i), i = s;
        return this
    }, V.sort = function(e) {
        e = ut.apply(this, arguments);
        for (var t = -1, n = this.length; ++t < n;) this[t].sort(e);
        return this.order()
    }, V.each = function(e) {
        return at(this, function(t, n, r) {
            e.call(t, t.__data__, n, r)
        })
    }, V.call = function(e) {
        var t = n(arguments);
        return e.apply(t[0] = this, t), this
    }, V.empty = function() {
        return !this.node()
    }, V.node = function() {
        for (var e = 0, t = this.length; e < t; e++)
            for (var n = this[e], r = 0, i = n.length; r < i; r++) {
                var s = n[r];
                if (s) return s
            }
        return null
    }, V.size = function() {
        var e = 0;
        return this.each(function() {
            ++e
        }), e
    };
    var lt = [];
    e.selection.enter = ft, e.selection.enter.prototype = lt, lt.append = V.append, lt.empty = V.empty, lt.node = V.node, lt.call = V.call, lt.size = V.size, lt.select = function(e) {
        var t = [],
            n, r, i, s, o;
        for (var u = -1, a = this.length; ++u < a;) {
            i = (s = this[u]).update, t.push(n = []), n.parentNode = s.parentNode;
            for (var f = -1, l = s.length; ++f < l;)(o = s[f]) ? (n.push(i[f] = r = e.call(s.parentNode, o.__data__, f, u)), r.__data__ = o.__data__) : n.push(null)
        }
        return R(t)
    }, lt.insert = function(e, t) {
        return arguments.length < 2 && (t = ct(this)), V.insert.call(this, e, t)
    }, V.transition = function() {
        var e = xf || ++Sf,
            t = [],
            n, r, i = Tf || {
                time: Date.now(),
                ease: Bo,
                delay: 0,
                duration: 250
            };
        for (var s = -1, o = this.length; ++s < o;) {
            t.push(n = []);
            for (var u = this[s], a = -1, f = u.length; ++a < f;)(r = u[a]) && kf(r, a, e, i), n.push(r)
        }
        return wf(t, e)
    }, V.interrupt = function() {
        return this.each(ht)
    }, e.select = function(e) {
        var t = [typeof e == "string" ? U(e, r) : e];
        return t.parentNode = i, R([t])
    }, e.selectAll = function(e) {
        var t = n(typeof e == "string" ? z(e, r) : e);
        return t.parentNode = i, R([t])
    };
    var pt = e.select(i);
    V.on = function(e, t, n) {
        var r = arguments.length;
        if (r < 3) {
            if (typeof e != "string") {
                r < 2 && (t = !1);
                for (n in e) this.each(dt(n, e[n], t));
                return this
            }
            if (r < 2) return (r = this.node()["__on" + e]) && r._;
            n = !1
        }
        return this.each(dt(e, t, n))
    };
    var vt = e.map({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    });
    vt.forEach(function(e) {
        "on" + e in r && vt.remove(e)
    });
    var yt = "onselectstart" in r ? null : M(i.style, "userSelect"),
        bt = 0;
    e.mouse = function(e) {
        return Et(e, j())
    }, e.touches = function(e, t) {
        return arguments.length < 2 && (t = j().touches), t ? n(t).map(function(t) {
            var n = Et(e, t);
            return n.identifier = t.identifier, n
        }) : []
    }, e.behavior.drag = function() {
        function s() {
            this.on("mousedown.drag", r).on("touchstart.drag", i)
        }

        function o(r, i, s, o, u) {
            return function() {
                function b() {
                    var e = i(l, p),
                        t, n;
                    if (!e) return;
                    t = e[0] - y[0], n = e[1] - y[1], h |= t | n, y = e, c({
                        type: "drag",
                        x: e[0] + v[0],
                        y: e[1] + v[1],
                        dx: t,
                        dy: n
                    })
                }

                function w() {
                    if (!i(l, p)) return;
                    m.on(o + d, null).on(u + d, null), g(h && e.event.target === f), c({
                        type: "dragend"
                    })
                }
                var a = this,
                    f = e.event.target,
                    l = a.parentNode,
                    c = t.of(a, arguments),
                    h = 0,
                    p = r(),
                    d = ".drag" + (p == null ? "" : "-" + p),
                    v, m = e.select(s()).on(o + d, b).on(u + d, w),
                    g = wt(),
                    y = i(l, p);
                n ? (v = n.apply(a, arguments), v = [v.x - y[0], v.y - y[1]]) : v = [0, 0], c({
                    type: "dragstart"
                })
            }
        }
        var t = F(s, "drag", "dragstart", "dragend"),
            n = null,
            r = o(D, e.mouse, Tt, "mousemove", "mouseup"),
            i = o(St, e.touch, xt, "touchmove", "touchend");
        return s.origin = function(e) {
            return arguments.length ? (n = e, s) : n
        }, e.rebind(s, t, "on")
    };
    var Nt = Math.PI,
        Ct = 2 * Nt,
        kt = Nt / 2,
        Lt = 1e-6,
        At = Lt * Lt,
        Ot = Nt / 180,
        Mt = 180 / Nt,
        qt = Math.SQRT2,
        Rt = 2,
        Ut = 4;
    e.interpolateZoom = function(e, t) {
        function y(e) {
            var t = e * g;
            if (m) {
                var s = jt(d),
                    o = i / (Rt * c) * (s * Ft(qt * t + d) - Bt(d));
                return [n + o * a, r + o * f, i * s / jt(qt * t + d)]
            }
            return [n + e * a, r + e * f, i * Math.exp(qt * t)]
        }
        var n = e[0],
            r = e[1],
            i = e[2],
            s = t[0],
            o = t[1],
            u = t[2],
            a = s - n,
            f = o - r,
            l = a * a + f * f,
            c = Math.sqrt(l),
            h = (u * u - i * i + Ut * l) / (2 * i * Rt * c),
            p = (u * u - i * i - Ut * l) / (2 * u * Rt * c),
            d = Math.log(Math.sqrt(h * h + 1) - h),
            v = Math.log(Math.sqrt(p * p + 1) - p),
            m = v - d,
            g = (m || Math.log(u / i)) / qt;
        return y.duration = g * 1e3, y
    }, e.behavior.zoom = function() {
        function y(e) {
            e.on(u, k).on(Xt + ".zoom", A).on(a, O).on("dblclick.zoom", M).on(c, L)
        }

        function b(e) {
            return [(e[0] - t.x) / t.k, (e[1] - t.y) / t.k]
        }

        function w(e) {
            return [e[0] * t.k + t.x, e[1] * t.k + t.y]
        }

        function E(e) {
            t.k = Math.max(o[0], Math.min(o[1], e))
        }

        function S(e, n) {
            n = w(n), t.x += e[0] - n[0], t.y += e[1] - n[1]
        }

        function x() {
            v && v.domain(d.range().map(function(e) {
                return (e - t.x) / t.k
            }).map(d.invert)), g && g.domain(m.range().map(function(e) {
                return (e - t.y) / t.k
            }).map(m.invert))
        }

        function T(e) {
            e({
                type: "zoomstart"
            })
        }

        function N(e) {
            x(), e({
                type: "zoom",
                scale: t.k,
                translate: [t.x, t.y]
            })
        }

        function C(e) {
            e({
                type: "zoomend"
            })
        }

        function k() {
            function c() {
                i = 1, S(e.mouse(t), u), N(r)
            }

            function h() {
                o.on(a, s === t ? O : null).on(f, null), l(i && e.event.target === n), C(r)
            }
            var t = this,
                n = e.event.target,
                r = p.of(t, arguments),
                i = 0,
                o = e.select(s).on(a, c).on(f, h),
                u = b(e.mouse(t)),
                l = wt();
            ht.call(t), T(r)
        }

        function L() {
            function g() {
                var r = e.touches(n);
                return o = t.k, r.forEach(function(e) {
                    e.identifier in i && (i[e.identifier] = b(e))
                }), r
            }

            function y() {
                var n = e.event.target;
                e.select(n).on(f, w).on(l, x), d.push(n);
                var o = e.event.changedTouches;
                for (var u = 0, a = o.length; u < a; ++u) i[o[u].identifier] = null;
                var c = g(),
                    p = Date.now();
                if (c.length === 1) {
                    if (p - h < 500) {
                        var v = c[0],
                            m = i[v.identifier];
                        E(t.k * 2), S(v, m), B(), N(r)
                    }
                    h = p
                } else if (c.length > 1) {
                    var v = c[0],
                        y = c[1],
                        b = v[0] - y[0],
                        T = v[1] - y[1];
                    s = b * b + T * T
                }
            }

            function w() {
                var t = e.touches(n),
                    u, a, f, l;
                for (var c = 0, p = t.length; c < p; ++c, l = null) {
                    f = t[c];
                    if (l = i[f.identifier]) {
                        if (a) break;
                        u = f, a = l
                    }
                }
                if (l) {
                    var d = (d = f[0] - u[0]) * d + (d = f[1] - u[1]) * d,
                        v = s && Math.sqrt(d / s);
                    u = [(u[0] + f[0]) / 2, (u[1] + f[1]) / 2], a = [(a[0] + l[0]) / 2, (a[1] + l[1]) / 2], E(v * o)
                }
                h = null, S(u, a), N(r)
            }

            function x() {
                if (e.event.touches.length) {
                    var t = e.event.changedTouches;
                    for (var n = 0, s = t.length; n < s; ++n) delete i[t[n].identifier];
                    for (var o in i) return void g()
                }
                e.selectAll(d).on(a, null), v.on(u, k).on(c, L), m(), C(r)
            }
            var n = this,
                r = p.of(n, arguments),
                i = {},
                s = 0,
                o, a = ".zoom-" + e.event.changedTouches[0].identifier,
                f = "touchmove" + a,
                l = "touchend" + a,
                d = [],
                v = e.select(n).on(u, null).on(c, y),
                m = wt();
            ht.call(n), y(), T(r)
        }

        function A() {
            var i = p.of(this, arguments);
            l ? clearTimeout(l) : (ht.call(this), T(i)), l = setTimeout(function() {
                l = null, C(i)
            }, 50), B();
            var s = r || e.mouse(this);
            n || (n = b(s)), E(Math.pow(2, Wt() * .002) * t.k), S(s, n), N(i)
        }

        function O() {
            n = null
        }

        function M() {
            var n = p.of(this, arguments),
                r = e.mouse(this),
                i = b(r),
                s = Math.log(t.k) / Math.LN2;
            T(n), E(Math.pow(2, e.event.shiftKey ? Math.ceil(s) - 1 : Math.floor(s) + 1)), S(r, i), N(n), C(n)
        }
        var t = {
                x: 0,
                y: 0,
                k: 1
            },
            n, r, i = [960, 500],
            o = zt,
            u = "mousedown.zoom",
            a = "mousemove.zoom",
            f = "mouseup.zoom",
            l, c = "touchstart.zoom",
            h, p = F(y, "zoomstart", "zoom", "zoomend"),
            d, v, m, g;
        return y.event = function(n) {
            n.each(function() {
                var n = p.of(this, arguments),
                    r = t;
                xf ? e.select(this).transition().each("start.zoom", function() {
                    t = this.__chart__ || {
                        x: 0,
                        y: 0,
                        k: 1
                    }, T(n)
                }).tween("zoom:zoom", function() {
                    var s = i[0],
                        o = i[1],
                        u = s / 2,
                        a = o / 2,
                        f = e.interpolateZoom([(u - t.x) / t.k, (a - t.y) / t.k, s / t.k], [(u - r.x) / r.k, (a - r.y) / r.k, s / r.k]);
                    return function(e) {
                        var r = f(e),
                            i = s / r[2];
                        this.__chart__ = t = {
                            x: u - r[0] * i,
                            y: a - r[1] * i,
                            k: i
                        }, N(n)
                    }
                }).each("end.zoom", function() {
                    C(n)
                }) : (this.__chart__ = t, T(n), N(n), C(n))
            })
        }, y.translate = function(e) {
            return arguments.length ? (t = {
                x: +e[0],
                y: +e[1],
                k: t.k
            }, x(), y) : [t.x, t.y]
        }, y.scale = function(e) {
            return arguments.length ? (t = {
                x: t.x,
                y: t.y,
                k: +e
            }, x(), y) : t.k
        }, y.scaleExtent = function(e) {
            return arguments.length ? (o = e == null ? zt : [+e[0], +e[1]], y) : o
        }, y.center = function(e) {
            return arguments.length ? (r = e && [+e[0], +e[1]], y) : r
        }, y.size = function(e) {
            return arguments.length ? (i = e && [+e[0], +e[1]], y) : i
        }, y.x = function(e) {
            return arguments.length ? (v = e, d = e.copy(), t = {
                x: 0,
                y: 0,
                k: 1
            }, y) : v
        }, y.y = function(e) {
            return arguments.length ? (g = e, m = e.copy(), t = {
                x: 0,
                y: 0,
                k: 1
            }, y) : g
        }, e.rebind(y, p, "on")
    };
    var zt = [0, Infinity],
        Wt, Xt = "onwheel" in r ? (Wt = function() {
            return -e.event.deltaY * (e.event.deltaMode ? 120 : 1)
        }, "wheel") : "onmousewheel" in r ? (Wt = function() {
            return e.event.wheelDelta
        }, "mousewheel") : (Wt = function() {
            return -e.event.detail
        }, "MozMousePixelScroll");
    Vt.prototype.toString = function() {
        return this.rgb() + ""
    }, e.hsl = function(e, t, n) {
        return arguments.length === 1 ? e instanceof Jt ? $t(e.h, e.s, e.l) : wn("" + e, En, $t) : $t(+e, +t, +n)
    };
    var Kt = Jt.prototype = new Vt;
    Kt.brighter = function(e) {
        return e = Math.pow(.7, arguments.length ? e : 1), $t(this.h, this.s, this.l / e)
    }, Kt.darker = function(e) {
        return e = Math.pow(.7, arguments.length ? e : 1), $t(this.h, this.s, e * this.l)
    }, Kt.rgb = function() {
        return Qt(this.h, this.s, this.l)
    }, e.hcl = function(t, n, r) {
        return arguments.length === 1 ? t instanceof Yt ? Gt(t.h, t.c, t.l) : t instanceof nn ? ln(t.l, t.a, t.b) : ln((t = Sn((t = e.rgb(t)).r, t.g, t.b)).l, t.a, t.b) : Gt(+t, +n, +r)
    };
    var Zt = Yt.prototype = new Vt;
    Zt.brighter = function(e) {
        return Gt(this.h, this.c, Math.min(100, this.l + rn * (arguments.length ? e : 1)))
    }, Zt.darker = function(e) {
        return Gt(this.h, this.c, Math.max(0, this.l - rn * (arguments.length ? e : 1)))
    }, Zt.rgb = function() {
        return en(this.h, this.c, this.l).rgb()
    }, e.lab = function(t, n, r) {
        return arguments.length === 1 ? t instanceof nn ? tn(t.l, t.a, t.b) : t instanceof Yt ? en(t.l, t.c, t.h) : Sn((t = e.rgb(t)).r, t.g, t.b) : tn(+t, +n, +r)
    };
    var rn = 18,
        sn = .95047,
        on = 1,
        un = 1.08883,
        an = nn.prototype = new Vt;
    an.brighter = function(e) {
        return tn(Math.min(100, this.l + rn * (arguments.length ? e : 1)), this.a, this.b)
    }, an.darker = function(e) {
        return tn(Math.max(0, this.l - rn * (arguments.length ? e : 1)), this.a, this.b)
    }, an.rgb = function() {
        return fn(this.l, this.a, this.b)
    }, e.rgb = function(e, t, n) {
        return arguments.length === 1 ? e instanceof gn ? mn(e.r, e.g, e.b) : wn("" + e, mn, Qt) : mn(~~e, ~~t, ~~n)
    };
    var yn = gn.prototype = new Vt;
    yn.brighter = function(e) {
        e = Math.pow(.7, arguments.length ? e : 1);
        var t = this.r,
            n = this.g,
            r = this.b,
            i = 30;
        return !t && !n && !r ? mn(i, i, i) : (t && t < i && (t = i), n && n < i && (n = i), r && r < i && (r = i), mn(Math.min(255, ~~(t / e)), Math.min(255, ~~(n / e)), Math.min(255, ~~(r / e))))
    }, yn.darker = function(e) {
        return e = Math.pow(.7, arguments.length ? e : 1), mn(~~(e * this.r), ~~(e * this.g), ~~(e * this.b))
    }, yn.hsl = function() {
        return En(this.r, this.g, this.b)
    }, yn.toString = function() {
        return "#" + bn(this.r) + bn(this.g) + bn(this.b)
    };
    var Nn = e.map({
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    });
    Nn.forEach(function(e, t) {
        Nn.set(e, dn(t))
    }), e.functor = Cn, e.xhr = Ln(kn), e.dsv = function(e, t) {
        function i(e, n, r) {
            arguments.length < 3 && (r = n, n = null);
            var i = An(e, t, n == null ? s : o(n), r);
            return i.row = function(e) {
                return arguments.length ? i.response((n = e) == null ? s : o(e)) : n
            }, i
        }

        function s(e) {
            return i.parse(e.responseText)
        }

        function o(e) {
            return function(t) {
                return i.parse(t.responseText, e)
            }
        }

        function u(t) {
            return t.map(a).join(e)
        }

        function a(e) {
            return n.test(e) ? '"' + e.replace(/\"/g, '""') + '"' : e
        }
        var n = new RegExp('["' + e + "\n]"),
            r = e.charCodeAt(0);
        return i.parse = function(e, t) {
            var n;
            return i.parseRows(e, function(e, r) {
                if (n) return n(e, r - 1);
                var i = new Function("d", "return {" + e.map(function(e, t) {
                    return JSON.stringify(e) + ": d[" + t + "]"
                }).join(",") + "}");
                n = t ? function(e, n) {
                    return t(i(e), n)
                } : i
            })
        }, i.parseRows = function(e, t) {
            function c() {
                if (u >= o) return i;
                if (l) return l = !1, n;
                var t = u;
                if (e.charCodeAt(t) === 34) {
                    var s = t;
                    while (s++ < o)
                        if (e.charCodeAt(s) === 34) {
                            if (e.charCodeAt(s + 1) !== 34) break;
                            ++s
                        }
                    u = s + 2;
                    var a = e.charCodeAt(s + 1);
                    return a === 13 ? (l = !0, e.charCodeAt(s + 2) === 10 && ++u) : a === 10 && (l = !0), e.substring(t + 1, s).replace(/""/g, '"')
                }
                while (u < o) {
                    var a = e.charCodeAt(u++),
                        f = 1;
                    if (a === 10) l = !0;
                    else if (a === 13) l = !0, e.charCodeAt(u) === 10 && (++u, ++f);
                    else if (a !== r) continue;
                    return e.substring(t, u - f)
                }
                return e.substring(t)
            }
            var n = {},
                i = {},
                s = [],
                o = e.length,
                u = 0,
                a = 0,
                f, l;
            while ((f = c()) !== i) {
                var h = [];
                while (f !== n && f !== i) h.push(f), f = c();
                if (t && !(h = t(h, a++))) continue;
                s.push(h)
            }
            return s
        }, i.format = function(t) {
            if (Array.isArray(t[0])) return i.formatRows(t);
            var n = new A,
                r = [];
            return t.forEach(function(e) {
                for (var t in e) n.has(t) || r.push(n.add(t))
            }), [r.map(a).join(e)].concat(t.map(function(t) {
                return r.map(function(e) {
                    return a(t[e])
                }).join(e)
            })).join("\n")
        }, i.formatRows = function(e) {
            return e.map(u).join("\n")
        }, i
    }, e.csv = e.dsv(",", "text/csv"), e.tsv = e.dsv("	", "text/tab-separated-values"), e.touch = function(e, t, n) {
        arguments.length < 3 && (n = t, t = j().changedTouches);
        if (t)
            for (var r = 0, i = t.length, s; r < i; ++r)
                if ((s = t[r]).identifier === n) return Et(e, s)
    };
    var Mn, _n, Dn, Pn, Hn, Bn = s[M(s, "requestAnimationFrame")] || function(e) {
        setTimeout(e, 17)
    };
    e.timer = function(e, t, n) {
        var r = arguments.length;
        r < 2 && (t = 0), r < 3 && (n = Date.now());
        var i = n + t,
            s = {
                c: e,
                t: i,
                f: !1,
                n: null
            };
        _n ? _n.n = s : Mn = s, _n = s, Dn || (Pn = clearTimeout(Pn), Dn = 1, Bn(jn))
    }, e.timer.flush = function() {
        Fn(), In()
    }, e.round = function(e, t) {
        return t ? Math.round(e * (t = Math.pow(10, t))) / t : Math.round(e)
    };
    var Rn = ["y", "z", "a", "f", "p", "n", "Âµ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(Un);
    e.formatPrefix = function(t, n) {
        var r = 0;
        return t && (t < 0 && (t *= -1), n && (t = e.round(t, qn(t, n))), r = 1 + Math.floor(1e-12 + Math.log(t) / Math.LN10), r = Math.max(-24, Math.min(24, Math.floor((r - 1) / 3) * 3))), Rn[8 + r / 3]
    };
    var Wn = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
        Xn = e.map({
            b: function(e) {
                return e.toString(2)
            },
            c: function(e) {
                return String.fromCharCode(e)
            },
            o: function(e) {
                return e.toString(8)
            },
            x: function(e) {
                return e.toString(16)
            },
            X: function(e) {
                return e.toString(16).toUpperCase()
            },
            g: function(e, t) {
                return e.toPrecision(t)
            },
            e: function(e, t) {
                return e.toExponential(t)
            },
            f: function(e, t) {
                return e.toFixed(t)
            },
            r: function(t, n) {
                return (t = e.round(t, qn(t, n))).toFixed(Math.max(0, Math.min(20, qn(t * (1 + 1e-15), n))))
            }
        }),
        $n = e.time = {},
        Jn = Date;
    Kn.prototype = {
        getDate: function() {
            return this._.getUTCDate()
        },
        getDay: function() {
            return this._.getUTCDay()
        },
        getFullYear: function() {
            return this._.getUTCFullYear()
        },
        getHours: function() {
            return this._.getUTCHours()
        },
        getMilliseconds: function() {
            return this._.getUTCMilliseconds()
        },
        getMinutes: function() {
            return this._.getUTCMinutes()
        },
        getMonth: function() {
            return this._.getUTCMonth()
        },
        getSeconds: function() {
            return this._.getUTCSeconds()
        },
        getTime: function() {
            return this._.getTime()
        },
        getTimezoneOffset: function() {
            return 0
        },
        valueOf: function() {
            return this._.valueOf()
        },
        setDate: function() {
            Qn.setUTCDate.apply(this._, arguments)
        },
        setDay: function() {
            Qn.setUTCDay.apply(this._, arguments)
        },
        setFullYear: function() {
            Qn.setUTCFullYear.apply(this._, arguments)
        },
        setHours: function() {
            Qn.setUTCHours.apply(this._, arguments)
        },
        setMilliseconds: function() {
            Qn.setUTCMilliseconds.apply(this._, arguments)
        },
        setMinutes: function() {
            Qn.setUTCMinutes.apply(this._, arguments)
        },
        setMonth: function() {
            Qn.setUTCMonth.apply(this._, arguments)
        },
        setSeconds: function() {
            Qn.setUTCSeconds.apply(this._, arguments)
        },
        setTime: function() {
            Qn.setTime.apply(this._, arguments)
        }
    };
    var Qn = Date.prototype;
    $n.year = Gn(function(e) {
        return e = $n.day(e), e.setMonth(0, 1), e
    }, function(e, t) {
        e.setFullYear(e.getFullYear() + t)
    }, function(e) {
        return e.getFullYear()
    }), $n.years = $n.year.range, $n.years.utc = $n.year.utc.range, $n.day = Gn(function(e) {
        var t = new Jn(2e3, 0);
        return t.setFullYear(e.getFullYear(), e.getMonth(), e.getDate()), t
    }, function(e, t) {
        e.setDate(e.getDate() + t)
    }, function(e) {
        return e.getDate() - 1
    }), $n.days = $n.day.range, $n.days.utc = $n.day.utc.range, $n.dayOfYear = function(e) {
        var t = $n.year(e);
        return Math.floor((e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * 6e4) / 864e5)
    }, ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function(e, t) {
        t = 7 - t;
        var n = $n[e] = Gn(function(e) {
            return (e = $n.day(e)).setDate(e.getDate() - (e.getDay() + t) % 7), e
        }, function(e, t) {
            e.setDate(e.getDate() + Math.floor(t) * 7)
        }, function(e) {
            var n = $n.year(e).getDay();
            return Math.floor(($n.dayOfYear(e) + (n + t) % 7) / 7) - (n !== t)
        });
        $n[e + "s"] = n.range, $n[e + "s"].utc = n.utc.range, $n[e + "OfYear"] = function(e) {
            var n = $n.year(e).getDay();
            return Math.floor(($n.dayOfYear(e) + (n + t) % 7) / 7)
        }
    }), $n.week = $n.sunday, $n.weeks = $n.sunday.range, $n.weeks.utc = $n.sunday.utc.range, $n.weekOfYear = $n.sundayOfYear;
    var er = {
            "-": "",
            _: " ",
            0: "0"
        },
        tr = /^\s*\d+/,
        nr = /^%/;
    e.locale = function(e) {
        return {
            numberFormat: zn(e),
            timeFormat: Zn(e)
        }
    };
    var xr = e.locale({
        decimal: ".",
        thousands: ",",
        grouping: [3],
        currency: ["$", ""],
        dateTime: "%a %b %e %X %Y",
        date: "%m/%d/%Y",
        time: "%H:%M:%S",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
    e.format = xr.numberFormat, e.geo = {}, Tr.prototype = {
        s: 0,
        t: 0,
        add: function(e) {
            Cr(e, this.t, Nr), Cr(Nr.s, this.s, this), this.s ? this.t += Nr.t : this.s = Nr.t
        },
        reset: function() {
            this.s = this.t = 0
        },
        valueOf: function() {
            return this.s
        }
    };
    var Nr = new Tr;
    e.geo.stream = function(e, t) {
        e && Lr.hasOwnProperty(e.type) ? Lr[e.type](e, t) : kr(e, t)
    };
    var Lr = {
            Feature: function(e, t) {
                kr(e.geometry, t)
            },
            FeatureCollection: function(e, t) {
                var n = e.features,
                    r = -1,
                    i = n.length;
                while (++r < i) kr(n[r].geometry, t)
            }
        },
        Ar = {
            Sphere: function(e, t) {
                t.sphere()
            },
            Point: function(e, t) {
                e = e.coordinates, t.point(e[0], e[1], e[2])
            },
            MultiPoint: function(e, t) {
                var n = e.coordinates,
                    r = -1,
                    i = n.length;
                while (++r < i) e = n[r], t.point(e[0], e[1], e[2])
            },
            LineString: function(e, t) {
                Or(e.coordinates, t, 0)
            },
            MultiLineString: function(e, t) {
                var n = e.coordinates,
                    r = -1,
                    i = n.length;
                while (++r < i) Or(n[r], t, 0)
            },
            Polygon: function(e, t) {
                Mr(e.coordinates, t)
            },
            MultiPolygon: function(e, t) {
                var n = e.coordinates,
                    r = -1,
                    i = n.length;
                while (++r < i) Mr(n[r], t)
            },
            GeometryCollection: function(e, t) {
                var n = e.geometries,
                    r = -1,
                    i = n.length;
                while (++r < i) kr(n[r], t)
            }
        };
    e.geo.area = function(t) {
        return _r = 0, e.geo.stream(t, Pr), _r
    };
    var _r, Dr = new Tr,
        Pr = {
            sphere: function() {
                _r += 4 * Nt
            },
            point: D,
            lineStart: D,
            lineEnd: D,
            polygonStart: function() {
                Dr.reset(), Pr.lineStart = Hr
            },
            polygonEnd: function() {
                var e = 2 * Dr;
                _r += e < 0 ? 4 * Nt + e : e, Pr.lineStart = Pr.lineEnd = Pr.point = D
            }
        };
    e.geo.bounds = function() {
        function p(e, s) {
            l.push(c = [t = e, r = e]), s < n && (n = s), s > i && (i = s)
        }

        function d(e, o) {
            var u = Br([e * Ot, o * Ot]);
            if (a) {
                var f = Fr(a, u),
                    l = [f[1], -f[0], 0],
                    c = Fr(l, f);
                Rr(c), c = Ur(c);
                var h = e - s,
                    d = h > 0 ? 1 : -1,
                    v = c[0] * Mt * d,
                    m = y(h) > 180;
                if (m ^ (d * s < v && v < d * e)) {
                    var g = c[1] * Mt;
                    g > i && (i = g)
                } else if (v = (v + 360) % 360 - 180, m ^ (d * s < v && v < d * e)) {
                    var g = -c[1] * Mt;
                    g < n && (n = g)
                } else o < n && (n = o), o > i && (i = o);
                m ? e < s ? E(t, e) > E(t, r) && (r = e) : E(e, r) > E(t, r) && (t = e) : r >= t ? (e < t && (t = e), e > r && (r = e)) : e > s ? E(t, e) > E(t, r) && (r = e) : E(e, r) > E(t, r) && (t = e)
            } else p(e, o);
            a = u, s = e
        }

        function v() {
            h.point = d
        }

        function m() {
            c[0] = t, c[1] = r, h.point = p, a = null
        }

        function g(e, t) {
            if (a) {
                var n = e - s;
                f += y(n) > 180 ? n + (n > 0 ? 360 : -360) : n
            } else o = e, u = t;
            Pr.point(e, t), d(e, t)
        }

        function b() {
            Pr.lineStart()
        }

        function w() {
            g(o, u), Pr.lineEnd(), y(f) > Lt && (t = -(r = 180)), c[0] = t, c[1] = r, a = null
        }

        function E(e, t) {
            return (t -= e) < 0 ? t + 360 : t
        }

        function S(e, t) {
            return e[0] - t[0]
        }

        function x(e, t) {
            return t[0] <= t[1] ? t[0] <= e && e <= t[1] : e < t[0] || t[1] < e
        }
        var t, n, r, i, s, o, u, a, f, l, c, h = {
            point: p,
            lineStart: v,
            lineEnd: m,
            polygonStart: function() {
                h.point = g, h.lineStart = b, h.lineEnd = w, f = 0, Pr.polygonStart()
            },
            polygonEnd: function() {
                Pr.polygonEnd(), h.point = p, h.lineStart = v, h.lineEnd = m, Dr < 0 ? (t = -(r = 180), n = -(i = 90)) : f > Lt ? i = 90 : f < -Lt && (n = -90), c[0] = t, c[1] = r
            }
        };
        return function(s) {
            i = r = -(t = n = Infinity), l = [], e.geo.stream(s, h);
            var o = l.length;
            if (o) {
                l.sort(S);
                for (var u = 1, a = l[0], f, p = [a]; u < o; ++u) f = l[u], x(f[0], a) || x(f[1], a) ? (E(a[0], f[1]) > E(a[0], a[1]) && (a[1] = f[1]), E(f[0], a[1]) > E(a[0], a[1]) && (a[0] = f[0])) : p.push(a = f);
                var d = -Infinity,
                    v;
                for (var o = p.length - 1, u = 0, a = p[o], f; u <= o; a = f, ++u) f = p[u], (v = E(a[1], f[0])) > d && (d = v, t = f[0], r = a[1])
            }
            return l = c = null, t === Infinity || n === Infinity ? [
                [NaN, NaN],
                [NaN, NaN]
            ] : [
                [t, n],
                [r, i]
            ]
        }
    }(), e.geo.centroid = function(t) {
        Wr = Xr = Vr = $r = Jr = Kr = Qr = Gr = Yr = Zr = ei = 0, e.geo.stream(t, ti);
        var n = Yr,
            r = Zr,
            i = ei,
            s = n * n + r * r + i * i;
        if (s < At) {
            n = Kr, r = Qr, i = Gr, Xr < Lt && (n = Vr, r = $r, i = Jr), s = n * n + r * r + i * i;
            if (s < At) return [NaN, NaN]
        }
        return [Math.atan2(r, n) * Mt, Ht(i / Math.sqrt(s)) * Mt]
    };
    var Wr, Xr, Vr, $r, Jr, Kr, Qr, Gr, Yr, Zr, ei, ti = {
            sphere: D,
            point: ni,
            lineStart: ii,
            lineEnd: si,
            polygonStart: function() {
                ti.lineStart = oi
            },
            polygonEnd: function() {
                ti.lineStart = ii
            }
        },
        mi = ci(ui, gi, bi, [-Nt, -Nt / 2]),
        Si = 1e9;
    e.geo.clipExtent = function() {
        var e, t, n, r, i, s, o = {
            stream: function(e) {
                return i && (i.valid = !1), i = s(e), i.valid = !0, i
            },
            extent: function(u) {
                return arguments.length ? (s = xi(e = +u[0][0], t = +u[0][1], n = +u[1][0], r = +u[1][1]), i && (i.valid = !1, i = null), o) : [
                    [e, t],
                    [n, r]
                ]
            }
        };
        return o.extent([
            [0, 0],
            [960, 500]
        ])
    }, (e.geo.conicEqualArea = function() {
        return Ni(Ci)
    }).raw = Ci, e.geo.albers = function() {
        return e.geo.conicEqualArea().rotate([96, 0]).center([-0.6, 38.7]).parallels([29.5, 45.5]).scale(1070)
    }, e.geo.albersUsa = function() {
        function f(e) {
            var t = e[0],
                n = e[1];
            return i = null, (o(t, n), i) || (u(t, n), i) || a(t, n), i
        }
        var t = e.geo.albers(),
            n = e.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
            r = e.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
            i, s = {
                point: function(e, t) {
                    i = [e, t]
                }
            },
            o, u, a;
        return f.invert = function(e) {
            var i = t.scale(),
                s = t.translate(),
                o = (e[0] - s[0]) / i,
                u = (e[1] - s[1]) / i;
            return (u >= .12 && u < .234 && o >= -0.425 && o < -0.214 ? n : u >= .166 && u < .234 && o >= -0.214 && o < -0.115 ? r : t).invert(e)
        }, f.stream = function(e) {
            var i = t.stream(e),
                s = n.stream(e),
                o = r.stream(e);
            return {
                point: function(e, t) {
                    i.point(e, t), s.point(e, t), o.point(e, t)
                },
                sphere: function() {
                    i.sphere(), s.sphere(), o.sphere()
                },
                lineStart: function() {
                    i.lineStart(), s.lineStart(), o.lineStart()
                },
                lineEnd: function() {
                    i.lineEnd(), s.lineEnd(), o.lineEnd()
                },
                polygonStart: function() {
                    i.polygonStart(), s.polygonStart(), o.polygonStart()
                },
                polygonEnd: function() {
                    i.polygonEnd(), s.polygonEnd(), o.polygonEnd()
                }
            }
        }, f.precision = function(e) {
            return arguments.length ? (t.precision(e), n.precision(e), r.precision(e), f) : t.precision()
        }, f.scale = function(e) {
            return arguments.length ? (t.scale(e), n.scale(e * .35), r.scale(e), f.translate(t.translate())) : t.scale()
        }, f.translate = function(e) {
            if (!arguments.length) return t.translate();
            var i = t.scale(),
                l = +e[0],
                c = +e[1];
            return o = t.translate(e).clipExtent([
                [l - .455 * i, c - .238 * i],
                [l + .455 * i, c + .238 * i]
            ]).stream(s).point, u = n.translate([l - .307 * i, c + .201 * i]).clipExtent([
                [l - .425 * i + Lt, c + .12 * i + Lt],
                [l - .214 * i - Lt, c + .234 * i - Lt]
            ]).stream(s).point, a = r.translate([l - .205 * i, c + .212 * i]).clipExtent([
                [l - .214 * i + Lt, c + .166 * i + Lt],
                [l - .115 * i - Lt, c + .234 * i - Lt]
            ]).stream(s).point, f
        }, f.scale(1070)
    };
    var ki, Li, Ai = {
            point: D,
            lineStart: D,
            lineEnd: D,
            polygonStart: function() {
                Li = 0, Ai.lineStart = Oi
            },
            polygonEnd: function() {
                Ai.lineStart = Ai.lineEnd = Ai.point = D, ki += y(Li / 2)
            }
        },
        Mi, _i, Di, Pi, Hi = {
            point: Bi,
            lineStart: D,
            lineEnd: D,
            polygonStart: D,
            polygonEnd: D
        },
        Ii = {
            point: qi,
            lineStart: Ri,
            lineEnd: Ui,
            polygonStart: function() {
                Ii.lineStart = zi
            },
            polygonEnd: function() {
                Ii.point = qi, Ii.lineStart = Ri, Ii.lineEnd = Ui
            }
        };
    e.geo.path = function() {
        function u(n) {
            if (n) {
                typeof t == "function" && s.pointRadius(+t.apply(this, arguments));
                if (!o || !o.valid) o = i(s);
                e.geo.stream(n, o)
            }
            return s.result()
        }

        function a() {
            return o = null, u
        }
        var t = 4.5,
            n, r, i, s, o;
        return u.area = function(t) {
            return ki = 0, e.geo.stream(t, i(Ai)), ki
        }, u.centroid = function(t) {
            return Vr = $r = Jr = Kr = Qr = Gr = Yr = Zr = ei = 0, e.geo.stream(t, i(Ii)), ei ? [Yr / ei, Zr / ei] : Gr ? [Kr / Gr, Qr / Gr] : Jr ? [Vr / Jr, $r / Jr] : [NaN, NaN]
        }, u.bounds = function(t) {
            return Di = Pi = -(Mi = _i = Infinity), e.geo.stream(t, i(Hi)), [
                [Mi, _i],
                [Di, Pi]
            ]
        }, u.projection = function(e) {
            return arguments.length ? (i = (n = e) ? e.stream || Vi(e) : kn, a()) : n
        }, u.context = function(e) {
            return arguments.length ? (s = (r = e) == null ? new ji : new Wi(e), typeof t != "function" && s.pointRadius(t), a()) : r
        }, u.pointRadius = function(e) {
            return arguments.length ? (t = typeof e == "function" ? e : (s.pointRadius(+e), +e), u) : t
        }, u.projection(e.geo.albersUsa()).context(null)
    }, e.geo.transform = function(e) {
        return {
            stream: function(t) {
                var n = new $i(t);
                for (var r in e) n[r] = e[r];
                return n
            }
        }
    }, $i.prototype = {
        point: function(e, t) {
            this.stream.point(e, t)
        },
        sphere: function() {
            this.stream.sphere()
        },
        lineStart: function() {
            this.stream.lineStart()
        },
        lineEnd: function() {
            this.stream.lineEnd()
        },
        polygonStart: function() {
            this.stream.polygonStart()
        },
        polygonEnd: function() {
            this.stream.polygonEnd()
        }
    }, e.geo.projection = Ki, e.geo.projectionMutator = Qi, (e.geo.equirectangular = function() {
        return Ki(Yi)
    }).raw = Yi.invert = Yi, e.geo.rotation = function(e) {
        function t(t) {
            return t = e(t[0] * Ot, t[1] * Ot), t[0] *= Mt, t[1] *= Mt, t
        }
        return e = es(e[0] % 360 * Ot, e[1] * Ot, e.length > 2 ? e[2] * Ot : 0), t.invert = function(t) {
            return t = e.invert(t[0] * Ot, t[1] * Ot), t[0] *= Mt, t[1] *= Mt, t
        }, t
    }, Zi.invert = Yi, e.geo.circle = function() {
        function i() {
            var t = typeof e == "function" ? e.apply(this, arguments) : e,
                n = es(-t[0] * Ot, -t[1] * Ot, 0).invert,
                i = [];
            return r(null, null, 1, {
                point: function(e, t) {
                    i.push(e = n(e, t)), e[0] *= Mt, e[1] *= Mt
                }
            }), {
                type: "Polygon",
                coordinates: [i]
            }
        }
        var e = [0, 0],
            t, n = 6,
            r;
        return i.origin = function(t) {
            return arguments.length ? (e = t, i) : e
        }, i.angle = function(e) {
            return arguments.length ? (r = is((t = +e) * Ot, n * Ot), i) : t
        }, i.precision = function(e) {
            return arguments.length ? (r = is(t * Ot, (n = +e) * Ot), i) : n
        }, i.angle(90)
    }, e.geo.distance = function(e, t) {
        var n = (t[0] - e[0]) * Ot,
            r = e[1] * Ot,
            i = t[1] * Ot,
            s = Math.sin(n),
            o = Math.cos(n),
            u = Math.sin(r),
            a = Math.cos(r),
            f = Math.sin(i),
            l = Math.cos(i),
            c;
        return Math.atan2(Math.sqrt((c = l * s) * c + (c = a * f - u * l * o) * c), u * f + a * l * o)
    }, e.geo.graticule = function() {
        function b() {
            return {
                type: "MultiLineString",
                coordinates: w()
            }
        }

        function w() {
            return e.range(Math.ceil(i / c) * c, r, c).map(v).concat(e.range(Math.ceil(a / h) * h, u, h).map(m)).concat(e.range(Math.ceil(n / f) * f, t, f).filter(function(e) {
                return y(e % c) > Lt
            }).map(p)).concat(e.range(Math.ceil(o / l) * l, s, l).filter(function(e) {
                return y(e % h) > Lt
            }).map(d))
        }
        var t, n, r, i, s, o, u, a, f = 10,
            l = f,
            c = 90,
            h = 360,
            p, d, v, m, g = 2.5;
        return b.lines = function() {
            return w().map(function(e) {
                return {
                    type: "LineString",
                    coordinates: e
                }
            })
        }, b.outline = function() {
            return {
                type: "Polygon",
                coordinates: [v(i).concat(m(u).slice(1), v(r).reverse().slice(1), m(a).reverse().slice(1))]
            }
        }, b.extent = function(e) {
            return arguments.length ? b.majorExtent(e).minorExtent(e) : b.minorExtent()
        }, b.majorExtent = function(e) {
            return arguments.length ? (i = +e[0][0], r = +e[1][0], a = +e[0][1], u = +e[1][1], i > r && (e = i, i = r, r = e), a > u && (e = a, a = u, u = e), b.precision(g)) : [
                [i, a],
                [r, u]
            ]
        }, b.minorExtent = function(e) {
            return arguments.length ? (n = +e[0][0], t = +e[1][0], o = +e[0][1], s = +e[1][1], n > t && (e = n, n = t, t = e), o > s && (e = o, o = s, s = e), b.precision(g)) : [
                [n, o],
                [t, s]
            ]
        }, b.step = function(e) {
            return arguments.length ? b.majorStep(e).minorStep(e) : b.minorStep()
        }, b.majorStep = function(e) {
            return arguments.length ? (c = +e[0], h = +e[1], b) : [c, h]
        }, b.minorStep = function(e) {
            return arguments.length ? (f = +e[0], l = +e[1], b) : [f, l]
        }, b.precision = function(e) {
            return arguments.length ? (g = +e, p = os(o, s, 90), d = us(n, t, g), v = os(a, u, 90), m = us(i, r, g), b) : g
        }, b.majorExtent([
            [-180, -90 + Lt],
            [180, 90 - Lt]
        ]).minorExtent([
            [-180, -80 - Lt],
            [180, 80 + Lt]
        ])
    }, e.geo.greatArc = function() {
        function s() {
            return {
                type: "LineString",
                coordinates: [n || t.apply(this, arguments), i || r.apply(this, arguments)]
            }
        }
        var t = as,
            n, r = fs,
            i;
        return s.distance = function() {
            return e.geo.distance(n || t.apply(this, arguments), i || r.apply(this, arguments))
        }, s.source = function(e) {
            return arguments.length ? (t = e, n = typeof e == "function" ? null : e, s) : t
        }, s.target = function(e) {
            return arguments.length ? (r = e, i = typeof e == "function" ? null : e, s) : r
        }, s.precision = function() {
            return arguments.length ? s : 0
        }, s
    }, e.geo.interpolate = function(e, t) {
        return ls(e[0] * Ot, e[1] * Ot, t[0] * Ot, t[1] * Ot)
    }, e.geo.length = function(t) {
        return cs = 0, e.geo.stream(t, hs), cs
    };
    var cs, hs = {
            sphere: D,
            point: D,
            lineStart: ps,
            lineEnd: D,
            polygonStart: D,
            polygonEnd: D
        },
        vs = ds(function(e) {
            return Math.sqrt(2 / (1 + e))
        }, function(e) {
            return 2 * Math.asin(e / 2)
        });
    (e.geo.azimuthalEqualArea = function() {
        return Ki(vs)
    }).raw = vs;
    var ms = ds(function(e) {
        var t = Math.acos(e);
        return t && t / Math.sin(t)
    }, kn);
    (e.geo.azimuthalEquidistant = function() {
        return Ki(ms)
    }).raw = ms, (e.geo.conicConformal = function() {
        return Ni(gs)
    }).raw = gs, (e.geo.conicEquidistant = function() {
        return Ni(ys)
    }).raw = ys;
    var bs = ds(function(e) {
        return 1 / e
    }, Math.atan);
    (e.geo.gnomonic = function() {
        return Ki(bs)
    }).raw = bs, ws.invert = function(e, t) {
        return [e, 2 * Math.atan(Math.exp(t)) - kt]
    }, (e.geo.mercator = function() {
        return Es(ws)
    }).raw = ws;
    var Ss = ds(function() {
        return 1
    }, Math.asin);
    (e.geo.orthographic = function() {
        return Ki(Ss)
    }).raw = Ss;
    var xs = ds(function(e) {
        return 1 / (1 + e)
    }, function(e) {
        return 2 * Math.atan(e)
    });
    (e.geo.stereographic = function() {
        return Ki(xs)
    }).raw = xs, Ts.invert = function(e, t) {
        return [-t, 2 * Math.atan(Math.exp(e)) - kt]
    }, (e.geo.transverseMercator = function() {
        var e = Es(Ts),
            t = e.center,
            n = e.rotate;
        return e.center = function(e) {
            return e ? t([-e[1], e[0]]) : (e = t(), [-e[1], e[0]])
        }, e.rotate = function(e) {
            return e ? n([e[0], e[1], e.length > 2 ? e[2] + 90 : 90]) : (e = n(), [e[0], e[1], e[2] - 90])
        }, e.rotate([0, 0])
    }).raw = Ts, e.geom = {}, e.geom.hull = function(e) {
        function r(e) {
            if (e.length < 3) return [];
            var r = Cn(t),
                i = Cn(n),
                s, o = e.length,
                u = [],
                a = [];
            for (s = 0; s < o; s++) u.push([+r.call(this, e[s], s), +i.call(this, e[s], s), s]);
            u.sort(Ls);
            for (s = 0; s < o; s++) a.push([u[s][0], -u[s][1]]);
            var f = ks(u),
                l = ks(a),
                c = l[0] === f[0],
                h = l[l.length - 1] === f[f.length - 1],
                p = [];
            for (s = f.length - 1; s >= 0; --s) p.push(e[u[f[s]][2]]);
            for (s = +c; s < l.length - h; ++s) p.push(e[u[l[s]][2]]);
            return p
        }
        var t = Ns,
            n = Cs;
        return arguments.length ? r(e) : (r.x = function(e) {
            return arguments.length ? (t = e, r) : t
        }, r.y = function(e) {
            return arguments.length ? (n = e, r) : n
        }, r)
    }, e.geom.polygon = function(e) {
        return q(e, As), e
    };
    var As = e.geom.polygon.prototype = [];
    As.area = function() {
        var e = -1,
            t = this.length,
            n, r = this[t - 1],
            i = 0;
        while (++e < t) n = r, r = this[e], i += n[1] * r[0] - n[0] * r[1];
        return i * .5
    }, As.centroid = function(e) {
        var t = -1,
            n = this.length,
            r = 0,
            i = 0,
            s, o = this[n - 1],
            u;
        arguments.length || (e = -1 / (6 * this.area()));
        while (++t < n) s = o, o = this[t], u = s[0] * o[1] - o[0] * s[1], r += (s[0] + o[0]) * u, i += (s[1] + o[1]) * u;
        return [r * e, i * e]
    }, As.clip = function(e) {
        var t, n = _s(e),
            r = -1,
            i = this.length - _s(this),
            s, o, u = this[i - 1],
            a, f, l;
        while (++r < i) {
            t = e.slice(), e.length = 0, a = this[r], f = t[(o = t.length - n) - 1], s = -1;
            while (++s < o) l = t[s], Os(l, u, a) ? (Os(f, u, a) || e.push(Ms(f, l, u, a)), e.push(l)) : Os(f, u, a) && e.push(Ms(f, l, u, a)), f = l;
            n && e.push(e[0]), u = a
        }
        return e
    };
    var Ds, Ps, Hs, Bs = [],
        js, Fs, Is = [];
    $s.prototype.prepare = function() {
        var e = this.edges,
            t = e.length,
            n;
        while (t--) n = e[t].edge, (!n.b || !n.a) && e.splice(t, 1);
        return e.sort(Ks), e.length
    }, so.prototype = {
        start: function() {
            return this.edge.l === this.site ? this.edge.a : this.edge.b
        },
        end: function() {
            return this.edge.l === this.site ? this.edge.b : this.edge.a
        }
    }, oo.prototype = {
        insert: function(e, t) {
            var n, r, i;
            if (e) {
                t.P = e, t.N = e.N, e.N && (e.N.P = t), e.N = t;
                if (e.R) {
                    e = e.R;
                    while (e.L) e = e.L;
                    e.L = t
                } else e.R = t;
                n = e
            } else this._ ? (e = lo(this._), t.P = null, t.N = e, e.P = e.L = t, n = e) : (t.P = t.N = null, this._ = t, n = null);
            t.L = t.R = null, t.U = n, t.C = !0, e = t;
            while (n && n.C) r = n.U, n === r.L ? (i = r.R, i && i.C ? (n.C = i.C = !1, r.C = !0, e = r) : (e === n.R && (ao(this, n), e = n, n = e.U), n.C = !1, r.C = !0, fo(this, r))) : (i = r.L, i && i.C ? (n.C = i.C = !1, r.C = !0, e = r) : (e === n.L && (fo(this, n), e = n, n = e.U), n.C = !1, r.C = !0, ao(this, r))), n = e.U;
            this._.C = !1
        },
        remove: function(e) {
            e.N && (e.N.P = e.P), e.P && (e.P.N = e.N), e.N = e.P = null;
            var t = e.U,
                n, r = e.L,
                i = e.R,
                s, o;
            r ? i ? s = lo(i) : s = r : s = i, t ? t.L === e ? t.L = s : t.R = s : this._ = s, r && i ? (o = s.C, s.C = e.C, s.L = r, r.U = s, s !== i ? (t = s.U, s.U = e.U, e = s.R, t.L = e, s.R = i, i.U = s) : (s.U = t, t = s, e = s.R)) : (o = e.C, e = s), e && (e.U = t);
            if (o) return;
            if (e && e.C) {
                e.C = !1;
                return
            }
            do {
                if (e === this._) break;
                if (e === t.L) {
                    n = t.R, n.C && (n.C = !1, t.C = !0, ao(this, t), n = t.R);
                    if (n.L && n.L.C || n.R && n.R.C) {
                        if (!n.R || !n.R.C) n.L.C = !1, n.C = !0, fo(this, n), n = t.R;
                        n.C = t.C, t.C = n.R.C = !1, ao(this, t), e = this._;
                        break
                    }
                } else {
                    n = t.L, n.C && (n.C = !1, t.C = !0, fo(this, t), n = t.L);
                    if (n.L && n.L.C || n.R && n.R.C) {
                        if (!n.L || !n.L.C) n.R.C = !1, n.C = !0, ao(this, n), n = t.L;
                        n.C = t.C, t.C = n.L.C = !1, fo(this, t), e = this._;
                        break
                    }
                }
                n.C = !0, e = t, t = t.U
            } while (!e.C);
            e && (e.C = !1)
        }
    }, e.geom.voronoi = function(e) {
        function o(e) {
            var t = new Array(e.length),
                n = s[0][0],
                r = s[0][1],
                i = s[1][0],
                o = s[1][1];
            return co(u(e), s).cells.forEach(function(s, u) {
                var a = s.edges,
                    f = s.site,
                    l = t[u] = a.length ? a.map(function(e) {
                        var t = e.start();
                        return [t.x, t.y]
                    }) : f.x >= n && f.x <= i && f.y >= r && f.y <= o ? [
                        [n, o],
                        [i, o],
                        [i, r],
                        [n, r]
                    ] : [];
                l.point = e[u]
            }), t
        }

        function u(e) {
            return e.map(function(e, t) {
                return {
                    x: Math.round(r(e, t) / Lt) * Lt,
                    y: Math.round(i(e, t) / Lt) * Lt,
                    i: t
                }
            })
        }
        var t = Ns,
            n = Cs,
            r = t,
            i = n,
            s = po;
        return e ? o(e) : (o.links = function(e) {
            return co(u(e)).edges.filter(function(e) {
                return e.l && e.r
            }).map(function(t) {
                return {
                    source: e[t.l.i],
                    target: e[t.r.i]
                }
            })
        }, o.triangles = function(e) {
            var t = [];
            return co(u(e)).cells.forEach(function(n, r) {
                var i = n.site,
                    s = n.edges.sort(Ks),
                    o = -1,
                    u = s.length,
                    a, f, l = s[u - 1].edge,
                    c = l.l === i ? l.r : l.l;
                while (++o < u) a = l, f = c, l = s[o].edge, c = l.l === i ? l.r : l.l, r < f.i && r < c.i && vo(i, f, c) < 0 && t.push([e[r], e[f.i], e[c.i]])
            }), t
        }, o.x = function(e) {
            return arguments.length ? (r = Cn(t = e), o) : t
        }, o.y = function(e) {
            return arguments.length ? (i = Cn(n = e), o) : n
        }, o.clipExtent = function(e) {
            return arguments.length ? (s = e == null ? po : e, o) : s === po ? null : s
        }, o.size = function(e) {
            return arguments.length ? o.clipExtent(e && [
                [0, 0], e
            ]) : s === po ? null : s && s[1]
        }, o)
    };
    var po = [
        [-1e6, -1e6],
        [1e6, 1e6]
    ];
    e.geom.delaunay = function(t) {
        return e.geom.voronoi().triangles(t)
    }, e.geom.quadtree = function(e, t, n, r, i) {
        function a(e) {
            function T(e, t, n, r, i, s, o, u) {
                if (isNaN(n) || isNaN(r)) return;
                if (e.leaf) {
                    var a = e.x,
                        f = e.y;
                    if (a != null)
                        if (y(a - n) + y(f - r) < .01) N(e, t, n, r, i, s, o, u);
                        else {
                            var l = e.point;
                            e.x = e.y = e.point = null, N(e, l, a, f, i, s, o, u), N(e, t, n, r, i, s, o, u)
                        } else e.x = n, e.y = r, e.point = t
                } else N(e, t, n, r, i, s, o, u)
            }

            function N(e, t, n, r, i, s, o, u) {
                var a = (i + o) * .5,
                    f = (s + u) * .5,
                    l = n >= a,
                    c = r >= f,
                    h = (c << 1) + l;
                e.leaf = !1, e = e.nodes[h] || (e.nodes[h] = yo()), l ? i = a : o = a, c ? s = f : u = f, T(e, t, n, r, i, s, o, u)
            }
            var a, f = Cn(s),
                l = Cn(o),
                c, h, p, d, v, m, g, b;
            if (t != null) v = t, m = n, g = r, b = i;
            else {
                g = b = -(v = m = Infinity), c = [], h = [], d = e.length;
                if (u)
                    for (p = 0; p < d; ++p) a = e[p], a.x < v && (v = a.x), a.y < m && (m = a.y), a.x > g && (g = a.x), a.y > b && (b = a.y), c.push(a.x), h.push(a.y);
                else
                    for (p = 0; p < d; ++p) {
                        var w = +f(a = e[p], p),
                            E = +l(a, p);
                        w < v && (v = w), E < m && (m = E), w > g && (g = w), E > b && (b = E), c.push(w), h.push(E)
                    }
            }
            var S = g - v,
                x = b - m;
            S > x ? b = m + S : g = v + x;
            var C = yo();
            C.add = function(e) {
                T(C, e, +f(e, ++p), +l(e, p), v, m, g, b)
            }, C.visit = function(e) {
                bo(e, C, v, m, g, b)
            }, p = -1;
            if (t == null) {
                while (++p < d) T(C, e[p], c[p], h[p], v, m, g, b);
                --p
            } else e.forEach(C.add);
            return c = h = e = a = null, C
        }
        var s = Ns,
            o = Cs,
            u;
        return (u = arguments.length) ? (s = mo, o = go, u === 3 && (i = n, r = t, n = t = 0), a(e)) : (a.x = function(e) {
            return arguments.length ? (s = e, a) : s
        }, a.y = function(e) {
            return arguments.length ? (o = e, a) : o
        }, a.extent = function(e) {
            return arguments.length ? (e == null ? t = n = r = i = null : (t = +e[0][0], n = +e[0][1], r = +e[1][0], i = +e[1][1]), a) : t == null ? null : [
                [t, n],
                [r, i]
            ]
        }, a.size = function(e) {
            return arguments.length ? (e == null ? t = n = r = i = null : (t = n = 0, r = +e[0], i = +e[1]), a) : t == null ? null : [r - t, i - n]
        }, a)
    }, e.interpolateRgb = wo, e.interpolateObject = Eo, e.interpolateNumber = So, e.interpolateString = xo;
    var To = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        No = new RegExp(To.source, "g");
    e.interpolate = Co, e.interpolators = [function(e, t) {
        var n = typeof t;
        return (n === "string" ? Nn.has(t) || /^(#|rgb\(|hsl\()/.test(t) ? wo : xo : t instanceof Vt ? wo : Array.isArray(t) ? ko : n === "object" && isNaN(t) ? Eo : So)(e, t)
    }], e.interpolateArray = ko;
    var Lo = function() {
            return kn
        },
        Ao = e.map({
            linear: Lo,
            poly: jo,
            quad: function() {
                return Po
            },
            cubic: function() {
                return Ho
            },
            sin: function() {
                return Fo
            },
            exp: function() {
                return Io
            },
            circle: function() {
                return qo
            },
            elastic: Ro,
            back: Uo,
            bounce: function() {
                return zo
            }
        }),
        Oo = e.map({
            "in": kn,
            out: _o,
            "in-out": Do,
            "out-in": function(e) {
                return Do(_o(e))
            }
        });
    e.ease = function(e) {
        var n = e.indexOf("-"),
            r = n >= 0 ? e.substring(0, n) : e,
            i = n >= 0 ? e.substring(n + 1) : "in";
        return r = Ao.get(r) || Lo, i = Oo.get(i) || kn, Mo(i(r.apply(null, t.call(arguments, 1))))
    }, e.interpolateHcl = Wo, e.interpolateHsl = Xo, e.interpolateLab = Vo, e.interpolateRound = $o, e.transform = function(t) {
        var n = r.createElementNS(e.ns.prefix.svg, "g");
        return (e.transform = function(e) {
            if (e != null) {
                n.setAttribute("transform", e);
                var t = n.transform.baseVal.consolidate()
            }
            return new Jo(t ? t.matrix : Yo)
        })(t)
    }, Jo.prototype.toString = function() {
        return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
    };
    var Yo = {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        e: 0,
        f: 0
    };
    e.interpolateTransform = Zo, e.layout = {}, e.layout.bundle = function() {
        return function(e) {
            var t = [],
                n = -1,
                r = e.length;
            while (++n < r) t.push(nu(e[n]));
            return t
        }
    }, e.layout.chord = function() {
        function l() {
            var t = {},
                l = [],
                h = e.range(s),
                p = [],
                d, v, m, g, y;
            n = [], r = [], d = 0, g = -1;
            while (++g < s) {
                v = 0, y = -1;
                while (++y < s) v += i[g][y];
                l.push(v), p.push(e.range(s)), d += v
            }
            u && h.sort(function(e, t) {
                return u(l[e], l[t])
            }), a && p.forEach(function(e, t) {
                e.sort(function(e, n) {
                    return a(i[t][e], i[t][n])
                })
            }), d = (Ct - o * s) / d, v = 0, g = -1;
            while (++g < s) {
                m = v, y = -1;
                while (++y < s) {
                    var b = h[g],
                        w = p[b][y],
                        E = i[b][w],
                        S = v,
                        x = v += E * d;
                    t[b + "-" + w] = {
                        index: b,
                        subindex: w,
                        startAngle: S,
                        endAngle: x,
                        value: E
                    }
                }
                r[b] = {
                    index: b,
                    startAngle: m,
                    endAngle: v,
                    value: (v - m) / d
                }, v += o
            }
            g = -1;
            while (++g < s) {
                y = g - 1;
                while (++y < s) {
                    var T = t[g + "-" + y],
                        N = t[y + "-" + g];
                    (T.value || N.value) && n.push(T.value < N.value ? {
                        source: N,
                        target: T
                    } : {
                        source: T,
                        target: N
                    })
                }
            }
            f && c()
        }

        function c() {
            n.sort(function(e, t) {
                return f((e.source.value + e.target.value) / 2, (t.source.value + t.target.value) / 2)
            })
        }
        var t = {},
            n, r, i, s, o = 0,
            u, a, f;
        return t.matrix = function(e) {
            return arguments.length ? (s = (i = e) && i.length, n = r = null, t) : i
        }, t.padding = function(e) {
            return arguments.length ? (o = e, n = r = null, t) : o
        }, t.sortGroups = function(e) {
            return arguments.length ? (u = e, n = r = null, t) : u
        }, t.sortSubgroups = function(e) {
            return arguments.length ? (a = e, n = null, t) : a
        }, t.sortChords = function(e) {
            return arguments.length ? (f = e, n && c(), t) : f
        }, t.chords = function() {
            return n || l(), n
        }, t.groups = function() {
            return r || l(), r
        }, t
    }, e.layout.force = function() {
        function y(e) {
            return function(t, n, r, i) {
                if (t.point !== e) {
                    var s = t.cx - e.x,
                        o = t.cy - e.y,
                        u = i - n,
                        a = s * s + o * o;
                    if (u * u / h < a) {
                        if (a < l) {
                            var f = t.charge / a;
                            e.px -= s * f, e.py -= o * f
                        }
                        return !0
                    }
                    if (t.point && a && a < l) {
                        var f = t.pointCharge / a;
                        e.px -= s * f, e.py -= o * f
                    }
                }
                return !t.charge
            }
        }

        function b(n) {
            n.px = e.event.x, n.py = e.event.y, t.resume()
        }
        var t = {},
            n = e.dispatch("start", "tick", "end"),
            r = [1, 1],
            i, s, o = .9,
            u = lu,
            a = cu,
            f = -30,
            l = hu,
            c = .1,
            h = .64,
            p = [],
            d = [],
            v, m, g;
        return t.tick = function() {
            if ((s *= .99) < .005) return n.end({
                type: "end",
                alpha: s = 0
            }), !0;
            var t = p.length,
                i = d.length,
                u, a, l, h, b, w, E, S, x;
            for (a = 0; a < i; ++a) {
                l = d[a], h = l.source, b = l.target, S = b.x - h.x, x = b.y - h.y;
                if (w = S * S + x * x) w = s * m[a] * ((w = Math.sqrt(w)) - v[a]) / w, S *= w, x *= w, b.x -= S * (E = h.weight / (b.weight + h.weight)), b.y -= x * E, h.x += S * (E = 1 - E), h.y += x * E
            }
            if (E = s * c) {
                S = r[0] / 2, x = r[1] / 2, a = -1;
                if (E)
                    while (++a < t) l = p[a], l.x += (S - l.x) * E, l.y += (x - l.y) * E
            }
            if (f) {
                fu(u = e.geom.quadtree(p), s, g), a = -1;
                while (++a < t)(l = p[a]).fixed || u.visit(y(l))
            }
            a = -1;
            while (++a < t) l = p[a], l.fixed ? (l.x = l.px, l.y = l.py) : (l.x -= (l.px - (l.px = l.x)) * o, l.y -= (l.py - (l.py = l.y)) * o);
            n.tick({
                type: "tick",
                alpha: s
            })
        }, t.nodes = function(e) {
            return arguments.length ? (p = e, t) : p
        }, t.links = function(e) {
            return arguments.length ? (d = e, t) : d
        }, t.size = function(e) {
            return arguments.length ? (r = e, t) : r
        }, t.linkDistance = function(e) {
            return arguments.length ? (u = typeof e == "function" ? e : +e, t) : u
        }, t.distance = t.linkDistance, t.linkStrength = function(e) {
            return arguments.length ? (a = typeof e == "function" ? e : +e, t) : a
        }, t.friction = function(e) {
            return arguments.length ? (o = +e, t) : o
        }, t.charge = function(e) {
            return arguments.length ? (f = typeof e == "function" ? e : +e, t) : f
        }, t.chargeDistance = function(e) {
            return arguments.length ? (l = e * e, t) : Math.sqrt(l)
        }, t.gravity = function(e) {
            return arguments.length ? (c = +e, t) : c
        }, t.theta = function(e) {
            return arguments.length ? (h = e * e, t) : Math.sqrt(h)
        }, t.alpha = function(r) {
            return arguments.length ? (r = +r, s ? r > 0 ? s = r : s = 0 : r > 0 && (n.start({
                type: "start",
                alpha: s = r
            }), e.timer(t.tick)), t) : s
        }, t.start = function() {
            function h(t, r) {
                if (!l) {
                    l = new Array(n);
                    for (o = 0; o < n; ++o) l[o] = [];
                    for (o = 0; o < u; ++o) {
                        var i = d[o];
                        l[i.source.index].push(i.target), l[i.target.index].push(i.source)
                    }
                }
                var s = l[e],
                    o = -1,
                    u = s.length,
                    a;
                while (++o < u)
                    if (!isNaN(a = s[o][t])) return a;
                return Math.random() * r
            }
            var e, n = p.length,
                i = d.length,
                s = r[0],
                o = r[1],
                l, c;
            for (e = 0; e < n; ++e)(c = p[e]).index = e, c.weight = 0;
            for (e = 0; e < i; ++e) c = d[e], typeof c.source == "number" && (c.source = p[c.source]), typeof c.target == "number" && (c.target = p[c.target]), ++c.source.weight, ++c.target.weight;
            for (e = 0; e < n; ++e) c = p[e], isNaN(c.x) && (c.x = h("x", s)), isNaN(c.y) && (c.y = h("y", o)), isNaN(c.px) && (c.px = c.x), isNaN(c.py) && (c.py = c.y);
            v = [];
            if (typeof u == "function")
                for (e = 0; e < i; ++e) v[e] = +u.call(this, d[e], e);
            else
                for (e = 0; e < i; ++e) v[e] = u;
            m = [];
            if (typeof a == "function")
                for (e = 0; e < i; ++e) m[e] = +a.call(this, d[e], e);
            else
                for (e = 0; e < i; ++e) m[e] = a;
            g = [];
            if (typeof f == "function")
                for (e = 0; e < n; ++e) g[e] = +f.call(this, p[e], e);
            else
                for (e = 0; e < n; ++e) g[e] = f;
            return t.resume()
        }, t.resume = function() {
            return t.alpha(.1)
        }, t.stop = function() {
            return t.alpha(0)
        }, t.drag = function() {
            i || (i = e.behavior.drag().origin(kn).on("dragstart.force", su).on("drag.force", b).on("dragend.force", ou));
            if (!arguments.length) return i;
            this.on("mouseover.force", uu).on("mouseout.force", au).call(i)
        }, e.rebind(t, n, "on")
    };
    var lu = 20,
        cu = 1,
        hu = Infinity;
    e.layout.hierarchy = function() {
        function r(i) {
            var s = [i],
                o = [],
                u;
            i.depth = 0;
            while ((u = s.pop()) != null) {
                o.push(u);
                if ((f = t.call(r, u, u.depth)) && (a = f.length)) {
                    var a, f, l;
                    while (--a >= 0) s.push(l = f[a]), l.parent = u, l.depth = u.depth + 1;
                    n && (u.value = 0), u.children = f
                } else n && (u.value = +n.call(r, u, u.depth) || 0), delete u.children
            }
            return vu(i, function(t) {
                var r, i;
                e && (r = t.children) && r.sort(e), n && (i = t.parent) && (i.value += t.value)
            }), o
        }
        var e = yu,
            t = mu,
            n = gu;
        return r.sort = function(t) {
            return arguments.length ? (e = t, r) : e
        }, r.children = function(e) {
            return arguments.length ? (t = e, r) : t
        }, r.value = function(e) {
            return arguments.length ? (n = e, r) : n
        }, r.revalue = function(e) {
            return n && (du(e, function(e) {
                e.children && (e.value = 0)
            }), vu(e, function(e) {
                var t;
                e.children || (e.value = +n.call(r, e, e.depth) || 0);
                if (t = e.parent) t.value += e.value
            })), e
        }, r
    }, e.layout.partition = function() {
        function r(e, t, n, i) {
            var s = e.children;
            e.x = t, e.y = e.depth * i, e.dx = n, e.dy = i;
            if (s && (u = s.length)) {
                var o = -1,
                    u, a, f;
                n = e.value ? n / e.value : 0;
                while (++o < u) r(a = s[o], t, f = a.value * n, i), t += f
            }
        }

        function i(e) {
            var t = e.children,
                n = 0;
            if (t && (s = t.length)) {
                var r = -1,
                    s;
                while (++r < s) n = Math.max(n, i(t[r]))
            }
            return 1 + n
        }

        function s(e, s) {
            var o = t.call(this, e, s);
            return r(o[0], 0, n[0], n[1] / i(o[0])), o
        }
        var t = e.layout.hierarchy(),
            n = [1, 1];
        return s.size = function(e) {
            return arguments.length ? (n = e, s) : n
        }, pu(s, t)
    }, e.layout.pie = function() {
        function s(o) {
            var u = o.map(function(e, n) {
                    return +t.call(s, e, n)
                }),
                a = +(typeof r == "function" ? r.apply(this, arguments) : r),
                f = ((typeof i == "function" ? i.apply(this, arguments) : i) - a) / e.sum(u),
                l = e.range(o.length);
            n != null && l.sort(n === wu ? function(e, t) {
                return u[t] - u[e]
            } : function(e, t) {
                return n(o[e], o[t])
            });
            var c = [];
            return l.forEach(function(e) {
                var t;
                c[e] = {
                    data: o[e],
                    value: t = u[e],
                    startAngle: a,
                    endAngle: a += t * f
                }
            }), c
        }
        var t = Number,
            n = wu,
            r = 0,
            i = Ct;
        return s.value = function(e) {
            return arguments.length ? (t = e, s) : t
        }, s.sort = function(e) {
            return arguments.length ? (n = e, s) : n
        }, s.startAngle = function(e) {
            return arguments.length ? (r = e, s) : r
        }, s.endAngle = function(e) {
            return arguments.length ? (i = e, s) : i
        }, s
    };
    var wu = {};
    e.layout.stack = function() {
        function u(a, f) {
            var l = a.map(function(e, n) {
                    return t.call(u, e, n)
                }),
                c = l.map(function(e) {
                    return e.map(function(e, t) {
                        return [s.call(u, e, t), o.call(u, e, t)]
                    })
                }),
                h = n.call(u, c, f);
            l = e.permute(l, h), c = e.permute(c, h);
            var p = r.call(u, c, f),
                d = l.length,
                v = l[0].length,
                m, g, y;
            for (g = 0; g < v; ++g) {
                i.call(u, l[0][g], y = p[g], c[0][g][1]);
                for (m = 1; m < d; ++m) i.call(u, l[m][g], y += c[m - 1][g][1], c[m][g][1])
            }
            return a
        }
        var t = kn,
            n = Cu,
            r = ku,
            i = xu,
            s = Eu,
            o = Su;
        return u.values = function(e) {
            return arguments.length ? (t = e, u) : t
        }, u.order = function(e) {
            return arguments.length ? (n = typeof e == "function" ? e : Tu.get(e) || Cu, u) : n
        }, u.offset = function(e) {
            return arguments.length ? (r = typeof e == "function" ? e : Nu.get(e) || ku, u) : r
        }, u.x = function(e) {
            return arguments.length ? (s = e, u) : s
        }, u.y = function(e) {
            return arguments.length ? (o = e, u) : o
        }, u.out = function(e) {
            return arguments.length ? (i = e, u) : i
        }, u
    };
    var Tu = e.map({
            "inside-out": function(t) {
                var n = t.length,
                    r, i, s = t.map(Lu),
                    o = t.map(Au),
                    u = e.range(n).sort(function(e, t) {
                        return s[e] - s[t]
                    }),
                    a = 0,
                    f = 0,
                    l = [],
                    c = [];
                for (r = 0; r < n; ++r) i = u[r], a < f ? (a += o[i], l.push(i)) : (f += o[i], c.push(i));
                return c.reverse().concat(l)
            },
            reverse: function(t) {
                return e.range(t.length).reverse()
            },
            "default": Cu
        }),
        Nu = e.map({
            silhouette: function(e) {
                var t = e.length,
                    n = e[0].length,
                    r = [],
                    i = 0,
                    s, o, u, a = [];
                for (o = 0; o < n; ++o) {
                    for (s = 0, u = 0; s < t; s++) u += e[s][o][1];
                    u > i && (i = u), r.push(u)
                }
                for (o = 0; o < n; ++o) a[o] = (i - r[o]) / 2;
                return a
            },
            wiggle: function(e) {
                var t = e.length,
                    n = e[0],
                    r = n.length,
                    i, s, o, u, a, f, l, c, h, p = [];
                p[0] = c = h = 0;
                for (s = 1; s < r; ++s) {
                    for (i = 0, u = 0; i < t; ++i) u += e[i][s][1];
                    for (i = 0, a = 0, l = n[s][0] - n[s - 1][0]; i < t; ++i) {
                        for (o = 0, f = (e[i][s][1] - e[i][s - 1][1]) / (2 * l); o < i; ++o) f += (e[o][s][1] - e[o][s - 1][1]) / l;
                        a += f * e[i][s][1]
                    }
                    p[s] = c -= u ? a / u * l : 0, c < h && (h = c)
                }
                for (s = 0; s < r; ++s) p[s] -= h;
                return p
            },
            expand: function(e) {
                var t = e.length,
                    n = e[0].length,
                    r = 1 / t,
                    i, s, o, u = [];
                for (s = 0; s < n; ++s) {
                    for (i = 0, o = 0; i < t; i++) o += e[i][s][1];
                    if (o)
                        for (i = 0; i < t; i++) e[i][s][1] /= o;
                    else
                        for (i = 0; i < t; i++) e[i][s][1] = r
                }
                for (s = 0; s < n; ++s) u[s] = 0;
                return u
            },
            zero: ku
        });
    e.layout.histogram = function() {
        function s(s, o) {
            var u = [],
                a = s.map(n, this),
                f = r.call(this, a, o),
                l = i.call(this, f, a, o),
                c, o = -1,
                h = a.length,
                p = l.length - 1,
                d = t ? 1 : 1 / h,
                v;
            while (++o < p) c = u[o] = [], c.dx = l[o + 1] - (c.x = l[o]), c.y = 0;
            if (p > 0) {
                o = -1;
                while (++o < h) v = a[o], v >= f[0] && v <= f[1] && (c = u[e.bisect(l, v, 1, p) - 1], c.y += d, c.push(s[o]))
            }
            return u
        }
        var t = !0,
            n = Number,
            r = Du,
            i = Mu;
        return s.value = function(e) {
            return arguments.length ? (n = e, s) : n
        }, s.range = function(e) {
            return arguments.length ? (r = Cn(e), s) : r
        }, s.bins = function(e) {
            return arguments.length ? (i = typeof e == "number" ? function(t) {
                return _u(t, e)
            } : Cn(e), s) : i
        }, s.frequency = function(e) {
            return arguments.length ? (t = !!e, s) : t
        }, s
    }, e.layout.pack = function() {
        function s(e, s) {
            var o = t.call(this, e, s),
                u = o[0],
                a = r[0],
                f = r[1],
                l = i == null ? Math.sqrt : typeof i == "function" ? i : function() {
                    return i
                };
            u.x = u.y = 0, vu(u, function(e) {
                e.r = +l(e.value)
            }), vu(u, Fu);
            if (n) {
                var c = n * (i ? 1 : Math.max(2 * u.r / a, 2 * u.r / f)) / 2;
                vu(u, function(e) {
                    e.r += c
                }), vu(u, Fu), vu(u, function(e) {
                    e.r -= c
                })
            }
            return Ru(u, a / 2, f / 2, i ? 1 : 1 / Math.max(2 * u.r / a, 2 * u.r / f)), o
        }
        var t = e.layout.hierarchy().sort(Pu),
            n = 0,
            r = [1, 1],
            i;
        return s.size = function(e) {
            return arguments.length ? (r = e, s) : r
        }, s.radius = function(e) {
            return arguments.length ? (i = e == null || typeof e == "function" ? e : +e, s) : i
        }, s.padding = function(e) {
            return arguments.length ? (n = +e, s) : n
        }, pu(s, t)
    }, e.layout.tree = function() {
        function s(e, s) {
            var f = t.call(this, e, s),
                c = f[0],
                h = o(c);
            vu(h, u), h.parent.m = -h.z, du(h, a);
            if (i) du(c, l);
            else {
                var p = c,
                    d = c,
                    v = c;
                du(c, function(e) {
                    e.x < p.x && (p = e), e.x > d.x && (d = e), e.depth > v.depth && (v = e)
                });
                var m = n(p, d) / 2 - p.x,
                    g = r[0] / (d.x + n(d, p) / 2 + m),
                    y = r[1] / (v.depth || 1);
                du(c, function(e) {
                    e.x = (e.x + m) * g, e.y = e.depth * y
                })
            }
            return f
        }

        function o(e) {
            var t = {
                    A: null,
                    children: [e]
                },
                n = [t],
                r;
            while ((r = n.pop()) != null)
                for (var i = r.children, s, o = 0, u = i.length; o < u; ++o) n.push((i[o] = s = {
                    _: i[o],
                    parent: r,
                    children: (s = i[o].children) && s.slice() || [],
                    A: null,
                    a: null,
                    z: 0,
                    m: 0,
                    c: 0,
                    s: 0,
                    t: null,
                    i: o
                }).a = s);
            return t.children[0]
        }

        function u(e) {
            var t = e.children,
                r = e.parent.children,
                i = e.i ? r[e.i - 1] : null;
            if (t.length) {
                $u(e);
                var s = (t[0].z + t[t.length - 1].z) / 2;
                i ? (e.z = i.z + n(e._, i._), e.m = e.z - s) : e.z = s
            } else i && (e.z = i.z + n(e._, i._));
            e.parent.A = f(e, i, e.parent.A || r[0])
        }

        function a(e) {
            e._.x = e.z + e.parent.m, e.m += e.parent.m
        }

        function f(e, t, r) {
            if (t) {
                var i = e,
                    s = e,
                    o = t,
                    u = i.parent.children[0],
                    a = i.m,
                    f = s.m,
                    l = o.m,
                    c = u.m,
                    h;
                while (o = Xu(o), i = Wu(i), o && i) u = Wu(u), s = Xu(s), s.a = e, h = o.z + l - i.z - a + n(o._, i._), h > 0 && (Vu(Ju(o, e, r), e, h), a += h, f += h), l += o.m, a += i.m, c += u.m, f += s.m;
                o && !Xu(s) && (s.t = o, s.m += l - f), i && !Wu(u) && (u.t = i, u.m += a - c, r = e)
            }
            return r
        }

        function l(e) {
            e.x *= r[0], e.y = e.depth * r[1]
        }
        var t = e.layout.hierarchy().sort(null).value(null),
            n = zu,
            r = [1, 1],
            i = null;
        return s.separation = function(e) {
            return arguments.length ? (n = e, s) : n
        }, s.size = function(e) {
            return arguments.length ? (i = (r = e) == null ? l : null, s) : i ? null : r
        }, s.nodeSize = function(e) {
            return arguments.length ? (i = (r = e) == null ? null : l, s) : i ? r : null
        }, pu(s, t)
    }, e.layout.cluster = function() {
        function s(e, s) {
            var o = t.call(this, e, s),
                u = o[0],
                a, f = 0;
            vu(u, function(e) {
                var t = e.children;
                t && t.length ? (e.x = Qu(t), e.y = Ku(t)) : (e.x = a ? f += n(e, a) : 0, e.y = 0, a = e)
            });
            var l = Gu(u),
                c = Yu(u),
                h = l.x - n(l, c) / 2,
                p = c.x + n(c, l) / 2;
            return vu(u, i ? function(e) {
                e.x = (e.x - u.x) * r[0], e.y = (u.y - e.y) * r[1]
            } : function(e) {
                e.x = (e.x - h) / (p - h) * r[0], e.y = (1 - (u.y ? e.y / u.y : 1)) * r[1]
            }), o
        }
        var t = e.layout.hierarchy().sort(null).value(null),
            n = zu,
            r = [1, 1],
            i = !1;
        return s.separation = function(e) {
            return arguments.length ? (n = e, s) : n
        }, s.size = function(e) {
            return arguments.length ? (i = (r = e) == null, s) : i ? null : r
        }, s.nodeSize = function(e) {
            return arguments.length ? (i = (r = e) != null, s) : i ? r : null
        }, pu(s, t)
    }, e.layout.treemap = function() {
        function l(e, t) {
            var n = -1,
                r = e.length,
                i, s;
            while (++n < r) s = (i = e[n]).value * (t < 0 ? 0 : t), i.area = isNaN(s) || s <= 0 ? 0 : s
        }

        function c(e) {
            var t = e.children;
            if (t && t.length) {
                var n = s(e),
                    r = [],
                    i = t.slice(),
                    o, u = Infinity,
                    f, h = a === "slice" ? n.dx : a === "dice" ? n.dy : a === "slice-dice" ? e.depth & 1 ? n.dy : n.dx : Math.min(n.dx, n.dy),
                    v;
                l(i, n.dx * n.dy / e.value), r.area = 0;
                while ((v = i.length) > 0) r.push(o = i[v - 1]), r.area += o.area, a !== "squarify" || (f = p(r, h)) <= u ? (i.pop(), u = f) : (r.area -= r.pop().area, d(r, h, n, !1), h = Math.min(n.dx, n.dy), r.length = r.area = 0, u = Infinity);
                r.length && (d(r, h, n, !0), r.length = r.area = 0), t.forEach(c)
            }
        }

        function h(e) {
            var t = e.children;
            if (t && t.length) {
                var n = s(e),
                    r = t.slice(),
                    i, o = [];
                l(r, n.dx * n.dy / e.value), o.area = 0;
                while (i = r.pop()) o.push(i), o.area += i.area, i.z != null && (d(o, i.z ? n.dx : n.dy, n, !r.length), o.length = o.area = 0);
                t.forEach(h)
            }
        }

        function p(e, t) {
            var n = e.area,
                r, i = 0,
                s = Infinity,
                o = -1,
                u = e.length;
            while (++o < u) {
                if (!(r = e[o].area)) continue;
                r < s && (s = r), r > i && (i = r)
            }
            return n *= n, t *= t, n ? Math.max(t * i * f / n, n / (t * s * f)) : Infinity
        }

        function d(e, t, r, i) {
            var s = -1,
                o = e.length,
                u = r.x,
                a = r.y,
                f = t ? n(e.area / t) : 0,
                l;
            if (t == r.dx) {
                if (i || f > r.dy) f = r.dy;
                while (++s < o) l = e[s], l.x = u, l.y = a, l.dy = f, u += l.dx = Math.min(r.x + r.dx - u, f ? n(l.area / f) : 0);
                l.z = !0, l.dx += r.x + r.dx - u, r.y += f, r.dy -= f
            } else {
                if (i || f > r.dx) f = r.dx;
                while (++s < o) l = e[s], l.x = u, l.y = a, l.dx = f, a += l.dy = Math.min(r.y + r.dy - a, f ? n(l.area / f) : 0);
                l.z = !1, l.dy += r.y + r.dy - a, r.x += f, r.dx -= f
            }
        }

        function v(e) {
            var n = u || t(e),
                i = n[0];
            return i.x = 0, i.y = 0, i.dx = r[0], i.dy = r[1], u && t.revalue(i), l([i], i.dx * i.dy / i.value), (u ? h : c)(i), o && (u = n), n
        }
        var t = e.layout.hierarchy(),
            n = Math.round,
            r = [1, 1],
            i = null,
            s = Zu,
            o = !1,
            u, a = "squarify",
            f = .5 * (1 + Math.sqrt(5));
        return v.size = function(e) {
            return arguments.length ? (r = e, v) : r
        }, v.padding = function(e) {
            function t(t) {
                var n = e.call(v, t, t.depth);
                return n == null ? Zu(t) : ea(t, typeof n == "number" ? [n, n, n, n] : n)
            }

            function n(t) {
                return ea(t, e)
            }
            if (!arguments.length) return i;
            var r;
            return s = (i = e) == null ? Zu : (r = typeof e) === "function" ? t : r === "number" ? (e = [e, e, e, e], n) : n, v
        }, v.round = function(e) {
            return arguments.length ? (n = e ? Math.round : Number, v) : n != Number
        }, v.sticky = function(e) {
            return arguments.length ? (o = e, u = null, v) : o
        }, v.ratio = function(e) {
            return arguments.length ? (f = e, v) : f
        }, v.mode = function(e) {
            return arguments.length ? (a = e + "", v) : a
        }, pu(v, t)
    }, e.random = {
        normal: function(e, t) {
            var n = arguments.length;
            return n < 2 && (t = 1), n < 1 && (e = 0),
                function() {
                    var n, r, i;
                    do n = Math.random() * 2 - 1, r = Math.random() * 2 - 1, i = n * n + r * r; while (!i || i > 1);
                    return e + t * n * Math.sqrt(-2 * Math.log(i) / i)
                }
        },
        logNormal: function() {
            var t = e.random.normal.apply(e, arguments);
            return function() {
                return Math.exp(t())
            }
        },
        bates: function(t) {
            var n = e.random.irwinHall(t);
            return function() {
                return n() / t
            }
        },
        irwinHall: function(e) {
            return function() {
                for (var t = 0, n = 0; n < e; n++) t += Math.random();
                return t
            }
        }
    }, e.scale = {};
    var oa = {
        floor: kn,
        ceil: kn
    };
    e.scale.linear = function() {
        return aa([0, 1], [0, 1], Co, !1)
    };
    var da = {
        s: 1,
        g: 1,
        p: 1,
        r: 1,
        e: 1
    };
    e.scale.log = function() {
        return ga(e.scale.linear().domain([0, 1]), 10, !0, [1, 10])
    };
    var ya = e.format(".0e"),
        ba = {
            floor: function(e) {
                return -Math.ceil(-e)
            },
            ceil: function(e) {
                return -Math.floor(-e)
            }
        };
    e.scale.pow = function() {
        return wa(e.scale.linear(), 1, [0, 1])
    }, e.scale.sqrt = function() {
        return e.scale.pow().exponent(.5)
    }, e.scale.ordinal = function() {
        return Sa([], {
            t: "range",
            a: [
                []
            ]
        })
    }, e.scale.category10 = function() {
        return e.scale.ordinal().range(xa)
    }, e.scale.category20 = function() {
        return e.scale.ordinal().range(Ta)
    }, e.scale.category20b = function() {
        return e.scale.ordinal().range(Na)
    }, e.scale.category20c = function() {
        return e.scale.ordinal().range(Ca)
    };
    var xa = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(vn),
        Ta = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(vn),
        Na = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(vn),
        Ca = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(vn);
    e.scale.quantile = function() {
        return ka([], [])
    }, e.scale.quantize = function() {
        return La(0, 1, [0, 1])
    }, e.scale.threshold = function() {
        return Aa([.5], [0, 1])
    }, e.scale.identity = function() {
        return Oa([0, 1])
    }, e.svg = {}, e.svg.arc = function() {
        function i() {
            var i = e.apply(this, arguments),
                s = t.apply(this, arguments),
                o = n.apply(this, arguments) + Ma,
                u = r.apply(this, arguments) + Ma,
                a = (u < o && (a = o, o = u, u = a), u - o),
                f = a < Nt ? "0" : "1",
                l = Math.cos(o),
                c = Math.sin(o),
                h = Math.cos(u),
                p = Math.sin(u);
            return a >= _a ? i ? "M0," + s + "A" + s + "," + s + " 0 1,1 0," + -s + "A" + s + "," + s + " 0 1,1 0," + s + "M0," + i + "A" + i + "," + i + " 0 1,0 0," + -i + "A" + i + "," + i + " 0 1,0 0," + i + "Z" : "M0," + s + "A" + s + "," + s + " 0 1,1 0," + -s + "A" + s + "," + s + " 0 1,1 0," + s + "Z" : i ? "M" + s * l + "," + s * c + "A" + s + "," + s + " 0 " + f + ",1 " + s * h + "," + s * p + "L" + i * h + "," + i * p + "A" + i + "," + i + " 0 " + f + ",0 " + i * l + "," + i * c + "Z" : "M" + s * l + "," + s * c + "A" + s + "," + s + " 0 " + f + ",1 " + s * h + "," + s * p + "L0,0" + "Z"
        }
        var e = Da,
            t = Pa,
            n = Ha,
            r = Ba;
        return i.innerRadius = function(t) {
            return arguments.length ? (e = Cn(t), i) : e
        }, i.outerRadius = function(e) {
            return arguments.length ? (t = Cn(e), i) : t
        }, i.startAngle = function(e) {
            return arguments.length ? (n = Cn(e), i) : n
        }, i.endAngle = function(e) {
            return arguments.length ? (r = Cn(e), i) : r
        }, i.centroid = function() {
            var i = (e.apply(this, arguments) + t.apply(this, arguments)) / 2,
                s = (n.apply(this, arguments) + r.apply(this, arguments)) / 2 + Ma;
            return [Math.cos(s) * i, Math.sin(s) * i]
        }, i
    };
    var Ma = -kt,
        _a = Ct - Lt;
    e.svg.line = function() {
        return ja(kn)
    };
    var Fa = e.map({
        linear: Ia,
        "linear-closed": qa,
        step: Ra,
        "step-before": Ua,
        "step-after": za,
        basis: Ka,
        "basis-open": Qa,
        "basis-closed": Ga,
        bundle: Ya,
        cardinal: Va,
        "cardinal-open": Wa,
        "cardinal-closed": Xa,
        monotone: af
    });
    Fa.forEach(function(e, t) {
        t.key = e, t.closed = /-closed$/.test(e)
    });
    var ef = [0, 2 / 3, 1 / 3, 0],
        tf = [0, 1 / 3, 2 / 3, 0],
        nf = [0, 1 / 6, 2 / 3, 1 / 6];
    e.svg.line.radial = function() {
        var e = ja(ff);
        return e.radius = e.x, delete e.x, e.angle = e.y, delete e.y, e
    }, Ua.reverse = za, za.reverse = Ua, e.svg.area = function() {
        return lf(kn)
    }, e.svg.area.radial = function() {
        var e = lf(ff);
        return e.radius = e.x, delete e.x, e.innerRadius = e.x0, delete e.x0, e.outerRadius = e.x1, delete e.x1, e.angle = e.y, delete e.y, e.startAngle = e.y0, delete e.y0, e.endAngle = e.y1, delete e.y1, e
    }, e.svg.chord = function() {
        function s(n, r) {
            var i = o(this, e, n, r),
                s = o(this, t, n, r);
            return "M" + i.p0 + a(i.r, i.p1, i.a1 - i.a0) + (u(i, s) ? f(i.r, i.p1, i.r, i.p0) : f(i.r, i.p1, s.r, s.p0) + a(s.r, s.p1, s.a1 - s.a0) + f(s.r, s.p1, i.r, i.p0)) + "Z"
        }

        function o(e, t, s, o) {
            var u = t.call(e, s, o),
                a = n.call(e, u, o),
                f = r.call(e, u, o) + Ma,
                l = i.call(e, u, o) + Ma;
            return {
                r: a,
                a0: f,
                a1: l,
                p0: [a * Math.cos(f), a * Math.sin(f)],
                p1: [a * Math.cos(l), a * Math.sin(l)]
            }
        }

        function u(e, t) {
            return e.a0 == t.a0 && e.a1 == t.a1
        }

        function a(e, t, n) {
            return "A" + e + "," + e + " 0 " + +(n > Nt) + ",1 " + t
        }

        function f(e, t, n, r) {
            return "Q 0,0 " + r
        }
        var e = as,
            t = fs,
            n = cf,
            r = Ha,
            i = Ba;
        return s.radius = function(e) {
            return arguments.length ? (n = Cn(e), s) : n
        }, s.source = function(t) {
            return arguments.length ? (e = Cn(t), s) : e
        }, s.target = function(e) {
            return arguments.length ? (t = Cn(e), s) : t
        }, s.startAngle = function(e) {
            return arguments.length ? (r = Cn(e), s) : r
        }, s.endAngle = function(e) {
            return arguments.length ? (i = Cn(e), s) : i
        }, s
    }, e.svg.diagonal = function() {
        function r(r, i) {
            var s = e.call(this, r, i),
                o = t.call(this, r, i),
                u = (s.y + o.y) / 2,
                a = [s, {
                    x: s.x,
                    y: u
                }, {
                    x: o.x,
                    y: u
                }, o];
            return a = a.map(n), "M" + a[0] + "C" + a[1] + " " + a[2] + " " + a[3]
        }
        var e = as,
            t = fs,
            n = hf;
        return r.source = function(t) {
            return arguments.length ? (e = Cn(t), r) : e
        }, r.target = function(e) {
            return arguments.length ? (t = Cn(e), r) : t
        }, r.projection = function(e) {
            return arguments.length ? (n = e, r) : n
        }, r
    }, e.svg.diagonal.radial = function() {
        var t = e.svg.diagonal(),
            n = hf,
            r = t.projection;
        return t.projection = function(e) {
            return arguments.length ? r(pf(n = e)) : n
        }, t
    }, e.svg.symbol = function() {
        function n(n, r) {
            return (gf.get(e.call(this, n, r)) || mf)(t.call(this, n, r))
        }
        var e = vf,
            t = df;
        return n.type = function(t) {
            return arguments.length ? (e = Cn(t), n) : e
        }, n.size = function(e) {
            return arguments.length ? (t = Cn(e), n) : t
        }, n
    };
    var gf = e.map({
        circle: mf,
        cross: function(e) {
            var t = Math.sqrt(e / 5) / 2;
            return "M" + -3 * t + "," + -t + "H" + -t + "V" + -3 * t + "H" + t + "V" + -t + "H" + 3 * t + "V" + t + "H" + t + "V" + 3 * t + "H" + -t + "V" + t + "H" + -3 * t + "Z"
        },
        diamond: function(e) {
            var t = Math.sqrt(e / (2 * bf)),
                n = t * bf;
            return "M0," + -t + "L" + n + ",0" + " 0," + t + " " + -n + ",0" + "Z"
        },
        square: function(e) {
            var t = Math.sqrt(e) / 2;
            return "M" + -t + "," + -t + "L" + t + "," + -t + " " + t + "," + t + " " + -t + "," + t + "Z"
        },
        "triangle-down": function(e) {
            var t = Math.sqrt(e / yf),
                n = t * yf / 2;
            return "M0," + n + "L" + t + "," + -n + " " + -t + "," + -n + "Z"
        },
        "triangle-up": function(e) {
            var t = Math.sqrt(e / yf),
                n = t * yf / 2;
            return "M0," + -n + "L" + t + "," + n + " " + -t + "," + n + "Z"
        }
    });
    e.svg.symbolTypes = gf.keys();
    var yf = Math.sqrt(3),
        bf = Math.tan(30 * Ot),
        Ef = [],
        Sf = 0,
        xf, Tf;
    Ef.call = V.call, Ef.empty = V.empty, Ef.node = V.node, Ef.size = V.size, e.transition = function(e) {
        return arguments.length ? xf ? e.transition() : e : pt.transition()
    }, e.transition.prototype = Ef, Ef.select = function(e) {
        var t = this.id,
            n = [],
            r, i, s;
        e = $(e);
        for (var o = -1, u = this.length; ++o < u;) {
            n.push(r = []);
            for (var a = this[o], f = -1, l = a.length; ++f < l;)(s = a[f]) && (i = e.call(s, s.__data__, f, o)) ? ("__data__" in s && (i.__data__ = s.__data__), kf(i, f, t, s.__transition__[t]), r.push(i)) : r.push(null)
        }
        return wf(n, t)
    }, Ef.selectAll = function(e) {
        var t = this.id,
            n = [],
            r, i, s, o, u;
        e = J(e);
        for (var a = -1, f = this.length; ++a < f;)
            for (var l = this[a], c = -1, h = l.length; ++c < h;)
                if (s = l[c]) {
                    u = s.__transition__[t], i = e.call(s, s.__data__, c, a), n.push(r = []);
                    for (var p = -1, d = i.length; ++p < d;)(o = i[p]) && kf(o, p, t, u), r.push(o)
                }
        return wf(n, t)
    }, Ef.filter = function(e) {
        var t = [],
            n, r, i;
        typeof e != "function" && (e = ot(e));
        for (var s = 0, o = this.length; s < o; s++) {
            t.push(n = []);
            for (var r = this[s], u = 0, a = r.length; u < a; u++)(i = r[u]) && e.call(i, i.__data__, u, s) && n.push(i)
        }
        return wf(t, this.id)
    }, Ef.tween = function(e, t) {
        var n = this.id;
        return arguments.length < 2 ? this.node().__transition__[n].tween.get(e) : at(this, t == null ? function(t) {
            t.__transition__[n].tween.remove(e)
        } : function(r) {
            r.__transition__[n].tween.set(e, t)
        })
    }, Ef.attr = function(t, n) {
        function s() {
            this.removeAttribute(i)
        }

        function o() {
            this.removeAttributeNS(i.space, i.local)
        }

        function u(e) {
            return e == null ? s : (e += "", function() {
                var t = this.getAttribute(i),
                    n;
                return t !== e && (n = r(t, e), function(e) {
                    this.setAttribute(i, n(e))
                })
            })
        }

        function a(e) {
            return e == null ? o : (e += "", function() {
                var t = this.getAttributeNS(i.space, i.local),
                    n;
                return t !== e && (n = r(t, e), function(e) {
                    this.setAttributeNS(i.space, i.local, n(e))
                })
            })
        }
        if (arguments.length < 2) {
            for (n in t) this.attr(n, t[n]);
            return this
        }
        var r = t == "transform" ? Zo : Co,
            i = e.ns.qualify(t);
        return Nf(this, "attr." + t, n, i.local ? a : u)
    }, Ef.attrTween = function(t, n) {
        function i(e, t) {
            var i = n.call(this, e, t, this.getAttribute(r));
            return i && function(e) {
                this.setAttribute(r, i(e))
            }
        }

        function s(e, t) {
            var i = n.call(this, e, t, this.getAttributeNS(r.space, r.local));
            return i && function(e) {
                this.setAttributeNS(r.space, r.local, i(e))
            }
        }
        var r = e.ns.qualify(t);
        return this.tween("attr." + t, r.local ? s : i)
    }, Ef.style = function(e, t, n) {
        function i() {
            this.style.removeProperty(e)
        }

        function o(t) {
            return t == null ? i : (t += "", function() {
                var r = s.getComputedStyle(this, null).getPropertyValue(e),
                    i;
                return r !== t && (i = Co(r, t), function(t) {
                    this.style.setProperty(e, i(t), n)
                })
            })
        }
        var r = arguments.length;
        if (r < 3) {
            if (typeof e != "string") {
                r < 2 && (t = "");
                for (n in e) this.style(n, e[n], t);
                return this
            }
            n = ""
        }
        return Nf(this, "style." + e, t, o)
    }, Ef.styleTween = function(e, t, n) {
        function r(r, i) {
            var o = t.call(this, r, i, s.getComputedStyle(this, null).getPropertyValue(e));
            return o && function(t) {
                this.style.setProperty(e, o(t), n)
            }
        }
        return arguments.length < 3 && (n = ""), this.tween("style." + e, r)
    }, Ef.text = function(e) {
        return Nf(this, "text", e, Cf)
    }, Ef.remove = function() {
        return this.each("end.transition", function() {
            var e;
            this.__transition__.count < 2 && (e = this.parentNode) && e.removeChild(this)
        })
    }, Ef.ease = function(t) {
        var n = this.id;
        return arguments.length < 1 ? this.node().__transition__[n].ease : (typeof t != "function" && (t = e.ease.apply(e, arguments)), at(this, function(e) {
            e.__transition__[n].ease = t
        }))
    }, Ef.delay = function(e) {
        var t = this.id;
        return arguments.length < 1 ? this.node().__transition__[t].delay : at(this, typeof e == "function" ? function(n, r, i) {
            n.__transition__[t].delay = +e.call(n, n.__data__, r, i)
        } : (e = +e, function(n) {
            n.__transition__[t].delay = e
        }))
    }, Ef.duration = function(e) {
        var t = this.id;
        return arguments.length < 1 ? this.node().__transition__[t].duration : at(this, typeof e == "function" ? function(n, r, i) {
            n.__transition__[t].duration = Math.max(1, e.call(n, n.__data__, r, i))
        } : (e = Math.max(1, e), function(n) {
            n.__transition__[t].duration = e
        }))
    }, Ef.each = function(t, n) {
        var r = this.id;
        if (arguments.length < 2) {
            var i = Tf,
                s = xf;
            xf = r, at(this, function(e, n, i) {
                Tf = e.__transition__[r], t.call(e, e.__data__, n, i)
            }), Tf = i, xf = s
        } else at(this, function(i) {
            var s = i.__transition__[r];
            (s.event || (s.event = e.dispatch("start", "end"))).on(t, n)
        });
        return this
    }, Ef.transition = function() {
        var e = this.id,
            t = ++Sf,
            n = [],
            r, i, s, o;
        for (var u = 0, a = this.length; u < a; u++) {
            n.push(r = []);
            for (var i = this[u], f = 0, l = i.length; f < l; f++) {
                if (s = i[f]) o = Object.create(s.__transition__[e]), o.delay += o.duration, kf(s, f, t, o);
                r.push(s)
            }
        }
        return wf(n, t)
    }, e.svg.axis = function() {
        function f(f) {
            f.each(function() {
                var f = e.select(this),
                    l = this.__chart__ || t,
                    c = this.__chart__ = t.copy(),
                    h = u == null ? c.ticks ? c.ticks.apply(c, o) : c.domain() : u,
                    p = a == null ? c.tickFormat ? c.tickFormat.apply(c, o) : kn : a,
                    d = f.selectAll(".tick").data(h, c),
                    v = d.enter().insert("g", ".domain").attr("class", "tick").style("opacity", Lt),
                    m = e.transition(d.exit()).style("opacity", Lt).remove(),
                    g = e.transition(d.order()).style("opacity", 1),
                    y, b = na(c),
                    w = f.selectAll(".domain").data([0]),
                    E = (w.enter().append("path").attr("class", "domain"), e.transition(w));
                v.append("line"), v.append("text");
                var S = v.select("line"),
                    x = g.select("line"),
                    T = d.select("text").text(p),
                    N = v.select("text"),
                    C = g.select("text");
                switch (n) {
                    case "bottom":
                        y = Of, S.attr("y2", r), N.attr("y", Math.max(r, 0) + s), x.attr("x2", 0).attr("y2", r), C.attr("x", 0).attr("y", Math.max(r, 0) + s), T.attr("dy", ".71em").style("text-anchor", "middle"), E.attr("d", "M" + b[0] + "," + i + "V0H" + b[1] + "V" + i);
                        break;
                    case "top":
                        y = Of, S.attr("y2", -r), N.attr("y", -(Math.max(r, 0) + s)), x.attr("x2", 0).attr("y2", -r), C.attr("x", 0).attr("y", -(Math.max(r, 0) + s)), T.attr("dy", "0em").style("text-anchor", "middle"), E.attr("d", "M" + b[0] + "," + -i + "V0H" + b[1] + "V" + -i);
                        break;
                    case "left":
                        y = Mf, S.attr("x2", -r), N.attr("x", -(Math.max(r, 0) + s)), x.attr("x2", -r).attr("y2", 0), C.attr("x", -(Math.max(r, 0) + s)).attr("y", 0), T.attr("dy", ".32em").style("text-anchor", "end"), E.attr("d", "M" + -i + "," + b[0] + "H0V" + b[1] + "H" + -i);
                        break;
                    case "right":
                        y = Mf, S.attr("x2", r), N.attr("x", Math.max(r, 0) + s), x.attr("x2", r).attr("y2", 0), C.attr("x", Math.max(r, 0) + s).attr("y", 0), T.attr("dy", ".32em").style("text-anchor", "start"), E.attr("d", "M" + i + "," + b[0] + "H0V" + b[1] + "H" + i)
                }
                if (c.rangeBand) {
                    var k = c,
                        L = k.rangeBand() / 2;
                    l = c = function(e) {
                        return k(e) + L
                    }
                } else l.rangeBand ? l = c : m.call(y, c);
                v.call(y, l), g.call(y, c)
            })
        }
        var t = e.scale.linear(),
            n = Lf,
            r = 6,
            i = 6,
            s = 3,
            o = [10],
            u = null,
            a;
        return f.scale = function(e) {
            return arguments.length ? (t = e, f) : t
        }, f.orient = function(e) {
            return arguments.length ? (n = e in Af ? e + "" : Lf, f) : n
        }, f.ticks = function() {
            return arguments.length ? (o = arguments, f) : o
        }, f.tickValues = function(e) {
            return arguments.length ? (u = e, f) : u
        }, f.tickFormat = function(e) {
            return arguments.length ? (a = e, f) : a
        }, f.tickSize = function(e) {
            var t = arguments.length;
            return t ? (r = +e, i = +arguments[t - 1], f) : r
        }, f.innerTickSize = function(e) {
            return arguments.length ? (r = +e, f) : r
        }, f.outerTickSize = function(e) {
            return arguments.length ? (i = +e, f) : i
        }, f.tickPadding = function(e) {
            return arguments.length ? (s = +e, f) : s
        }, f.tickSubdivide = function() {
            return arguments.length && f
        }, f
    };
    var Lf = "bottom",
        Af = {
            top: 1,
            right: 1,
            bottom: 1,
            left: 1
        };
    e.svg.brush = function() {
        function h(t) {
            t.each(function() {
                var t = e.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", m).on("touchstart.brush", m),
                    i = t.selectAll(".background").data([0]);
                i.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), t.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
                var s = t.selectAll(".resize").data(c, kn);
                s.exit().remove(), s.enter().append("g").attr("class", function(e) {
                    return "resize " + e
                }).style("cursor", function(e) {
                    return _f[e]
                }).append("rect").attr("x", function(e) {
                    return /[ew]$/.test(e) ? -3 : null
                }).attr("y", function(e) {
                    return /^[ns]/.test(e) ? -3 : null
                }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), s.style("display", h.empty() ? "none" : null);
                var o = e.transition(t),
                    u = e.transition(i),
                    a;
                n && (a = na(n), u.attr("x", a[0]).attr("width", a[1] - a[0]), d(o)), r && (a = na(r), u.attr("y", a[0]).attr("height", a[1] - a[0]), v(o)), p(o)
            })
        }

        function p(e) {
            e.selectAll(".resize").attr("transform", function(e) {
                return "translate(" + i[+/e$/.test(e)] + "," + o[+/^s/.test(e)] + ")"
            })
        }

        function d(e) {
            e.select(".extent").attr("x", i[0]), e.selectAll(".extent,.n>rect,.s>rect").attr("width", i[1] - i[0])
        }

        function v(e) {
            e.select(".extent").attr("y", o[0]), e.selectAll(".extent,.e>rect,.w>rect").attr("height", o[1] - o[0])
        }

        function m() {
            function O() {
                e.event.keyCode == 32 && (S || (T = null, N[0] -= i[1], N[1] -= o[1], S = 2), B())
            }

            function M() {
                e.event.keyCode == 32 && S == 2 && (N[0] += i[1], N[1] += o[1], S = 0, B())
            }

            function _() {
                var t = e.mouse(c),
                    s = !1;
                C && (t[0] += C[0], t[1] += C[1]), S || (e.event.altKey ? (T || (T = [(i[0] + i[1]) / 2, (o[0] + o[1]) / 2]), N[0] = i[+(t[0] < T[0])], N[1] = o[+(t[1] < T[1])]) : T = null), w && D(t, n, 0) && (d(y), s = !0), E && D(t, r, 1) && (v(y), s = !0), s && (p(y), g({
                    type: "brush",
                    mode: S ? "move" : "resize"
                }))
            }

            function D(e, t, n) {
                var r = na(t),
                    s = r[0],
                    c = r[1],
                    h = N[n],
                    p = n ? o : i,
                    d = p[1] - p[0],
                    v, m;
                S && (s -= h, c -= d + h), v = (n ? l : f) ? Math.max(s, Math.min(c, e[n])) : e[n], S ? m = (v += h) + d : (T && (h = Math.max(s, Math.min(c, 2 * T[n] - v))), h < v ? (m = v, v = h) : m = h);
                if (p[0] != v || p[1] != m) return n ? a = null : u = null, p[0] = v, p[1] = m, !0
            }

            function P() {
                _(), y.style("pointer-events", "all").selectAll(".resize").style("display", h.empty() ? "none" : null), e.select("body").style("cursor", null), k.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), x(), g({
                    type: "brushend"
                })
            }
            var c = this,
                m = e.select(e.event.target),
                g = t.of(c, arguments),
                y = e.select(c),
                b = m.datum(),
                w = !/^(n|s)$/.test(b) && n,
                E = !/^(e|w)$/.test(b) && r,
                S = m.classed("extent"),
                x = wt(),
                T, N = e.mouse(c),
                C, k = e.select(s).on("keydown.brush", O).on("keyup.brush", M);
            e.event.changedTouches ? k.on("touchmove.brush", _).on("touchend.brush", P) : k.on("mousemove.brush", _).on("mouseup.brush", P), y.interrupt().selectAll("*").interrupt();
            if (S) N[0] = i[0] - N[0], N[1] = o[0] - N[1];
            else if (b) {
                var L = +/w$/.test(b),
                    A = +/^n/.test(b);
                C = [i[1 - L] - N[0], o[1 - A] - N[1]], N[0] = i[L], N[1] = o[A]
            } else e.event.altKey && (T = N.slice());
            y.style("pointer-events", "none").selectAll(".resize").style("display", null), e.select("body").style("cursor", m.style("cursor")), g({
                type: "brushstart"
            }), _()
        }
        var t = F(h, "brushstart", "brush", "brushend"),
            n = null,
            r = null,
            i = [0, 0],
            o = [0, 0],
            u, a, f = !0,
            l = !0,
            c = Df[0];
        return h.event = function(n) {
            n.each(function() {
                var n = t.of(this, arguments),
                    r = {
                        x: i,
                        y: o,
                        i: u,
                        j: a
                    },
                    s = this.__chart__ || r;
                this.__chart__ = r, xf ? e.select(this).transition().each("start.brush", function() {
                    u = s.i, a = s.j, i = s.x, o = s.y, n({
                        type: "brushstart"
                    })
                }).tween("brush:brush", function() {
                    var e = ko(i, r.x),
                        t = ko(o, r.y);
                    return u = a = null,
                        function(s) {
                            i = r.x = e(s), o = r.y = t(s), n({
                                type: "brush",
                                mode: "resize"
                            })
                        }
                }).each("end.brush", function() {
                    u = r.i, a = r.j, n({
                        type: "brush",
                        mode: "resize"
                    }), n({
                        type: "brushend"
                    })
                }) : (n({
                    type: "brushstart"
                }), n({
                    type: "brush",
                    mode: "resize"
                }), n({
                    type: "brushend"
                }))
            })
        }, h.x = function(e) {
            return arguments.length ? (n = e, c = Df[!n << 1 | !r], h) : n
        }, h.y = function(e) {
            return arguments.length ? (r = e, c = Df[!n << 1 | !r], h) : r
        }, h.clamp = function(e) {
            return arguments.length ? (n && r ? (f = !!e[0], l = !!e[1]) : n ? f = !!e : r && (l = !!e), h) : n && r ? [f, l] : n ? f : r ? l : null
        }, h.extent = function(e) {
            var t, s, f, l, c;
            if (!arguments.length) return n && (u ? (t = u[0], s = u[1]) : (t = i[0], s = i[1], n.invert && (t = n.invert(t), s = n.invert(s)), s < t && (c = t, t = s, s = c))), r && (a ? (f = a[0], l = a[1]) : (f = o[0], l = o[1], r.invert && (f = r.invert(f), l = r.invert(l)), l < f && (c = f, f = l, l = c))), n && r ? [
                [t, f],
                [s, l]
            ] : n ? [t, s] : r && [f, l];
            if (n) {
                t = e[0], s = e[1], r && (t = t[0], s = s[0]), u = [t, s], n.invert && (t = n(t), s = n(s)), s < t && (c = t, t = s, s = c);
                if (t != i[0] || s != i[1]) i = [t, s]
            }
            if (r) {
                f = e[0], l = e[1], n && (f = f[1], l = l[1]), a = [f, l], r.invert && (f = r(f), l = r(l)), l < f && (c = f, f = l, l = c);
                if (f != o[0] || l != o[1]) o = [f, l]
            }
            return h
        }, h.clear = function() {
            return h.empty() || (i = [0, 0], o = [0, 0], u = a = null), h
        }, h.empty = function() {
            return !!n && i[0] == i[1] || !!r && o[0] == o[1]
        }, e.rebind(h, t, "on")
    };
    var _f = {
            n: "ns-resize",
            e: "ew-resize",
            s: "ns-resize",
            w: "ew-resize",
            nw: "nwse-resize",
            ne: "nesw-resize",
            se: "nwse-resize",
            sw: "nesw-resize"
        },
        Df = [
            ["n", "e", "s", "w", "nw", "ne", "se", "sw"],
            ["e", "w"],
            ["n", "s"],
            []
        ],
        Pf = $n.format = xr.timeFormat,
        Hf = Pf.utc,
        Bf = Hf("%Y-%m-%dT%H:%M:%S.%LZ");
    Pf.iso = Date.prototype.toISOString && +(new Date("2000-01-01T00:00:00.000Z")) ? jf : Bf, jf.parse = function(e) {
        var t = new Date(e);
        return isNaN(t) ? null : t
    }, jf.toString = Bf.toString, $n.second = Gn(function(e) {
        return new Jn(Math.floor(e / 1e3) * 1e3)
    }, function(e, t) {
        e.setTime(e.getTime() + Math.floor(t) * 1e3)
    }, function(e) {
        return e.getSeconds()
    }), $n.seconds = $n.second.range, $n.seconds.utc = $n.second.utc.range, $n.minute = Gn(function(e) {
        return new Jn(Math.floor(e / 6e4) * 6e4)
    }, function(e, t) {
        e.setTime(e.getTime() + Math.floor(t) * 6e4)
    }, function(e) {
        return e.getMinutes()
    }), $n.minutes = $n.minute.range, $n.minutes.utc = $n.minute.utc.range, $n.hour = Gn(function(e) {
        var t = e.getTimezoneOffset() / 60;
        return new Jn((Math.floor(e / 36e5 - t) + t) * 36e5)
    }, function(e, t) {
        e.setTime(e.getTime() + Math.floor(t) * 36e5)
    }, function(e) {
        return e.getHours()
    }), $n.hours = $n.hour.range, $n.hours.utc = $n.hour.utc.range, $n.month = Gn(function(e) {
        return e = $n.day(e), e.setDate(1), e
    }, function(e, t) {
        e.setMonth(e.getMonth() + t)
    }, function(e) {
        return e.getMonth()
    }), $n.months = $n.month.range, $n.months.utc = $n.month.utc.range;
    var qf = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
        Rf = [
            [$n.second, 1],
            [$n.second, 5],
            [$n.second, 15],
            [$n.second, 30],
            [$n.minute, 1],
            [$n.minute, 5],
            [$n.minute, 15],
            [$n.minute, 30],
            [$n.hour, 1],
            [$n.hour, 3],
            [$n.hour, 6],
            [$n.hour, 12],
            [$n.day, 1],
            [$n.day, 2],
            [$n.week, 1],
            [$n.month, 1],
            [$n.month, 3],
            [$n.year, 1]
        ],
        Uf = Pf.multi([
            [".%L", function(e) {
                return e.getMilliseconds()
            }],
            [":%S", function(e) {
                return e.getSeconds()
            }],
            ["%I:%M", function(e) {
                return e.getMinutes()
            }],
            ["%I %p", function(e) {
                return e.getHours()
            }],
            ["%a %d", function(e) {
                return e.getDay() && e.getDate() != 1
            }],
            ["%b %d", function(e) {
                return e.getDate() != 1
            }],
            ["%B", function(e) {
                return e.getMonth()
            }],
            ["%Y", ui]
        ]),
        zf = {
            range: function(t, n, r) {
                return e.range(Math.ceil(t / r) * r, +n, r).map(If)
            },
            floor: kn,
            ceil: kn
        };
    Rf.year = $n.year, $n.scale = function() {
        return Ff(e.scale.linear(), Rf, Uf)
    };
    var Wf = Rf.map(function(e) {
            return [e[0].utc, e[1]]
        }),
        Xf = Hf.multi([
            [".%L", function(e) {
                return e.getUTCMilliseconds()
            }],
            [":%S", function(e) {
                return e.getUTCSeconds()
            }],
            ["%I:%M", function(e) {
                return e.getUTCMinutes()
            }],
            ["%I %p", function(e) {
                return e.getUTCHours()
            }],
            ["%a %d", function(e) {
                return e.getUTCDay() && e.getUTCDate() != 1
            }],
            ["%b %d", function(e) {
                return e.getUTCDate() != 1
            }],
            ["%B", function(e) {
                return e.getUTCMonth()
            }],
            ["%Y", ui]
        ]);
    Wf.year = $n.year.utc, $n.scale.utc = function() {
        return Ff(e.scale.linear(), Wf, Xf)
    }, e.text = Ln(function(e) {
        return e.responseText
    }), e.json = function(e, t) {
        return An(e, "application/json", Vf, t)
    }, e.html = function(e, t) {
        return An(e, "text/html", $f, t)
    }, e.xml = Ln(function(e) {
        return e.responseXML
    }), typeof define == "function" && define.amd ? define("../node_modules/d3/d3", e) : typeof module == "object" && module.exports ? module.exports = e : this.d3 = e
}(), define("data/full.json", [], function() {
    return {
        directed: !1,
        graph: [],
        nodes: [{
            country: "Italy",
            premier: !0,
            rank: 247,
            country_rank: 15,
            team_count: 2,
            type: "club",
            id: "Cagliari Calcio",
            confederation: "UEFA"
        }, {
            name: "Mats HUMMELS",
            short_name: "HUMMELS",
            team: "Germany",
            club: "Borussia Dortmund",
            country: "Germany",
            type: "player",
            id: "Mats HUMMELS"
        }, {
            name: "Yoshito OKUBO",
            short_name: "OKUBO",
            team: "Japan",
            club: "Kawasaki Frontale",
            country: "Japan",
            type: "player",
            id: "Yoshito OKUBO"
        }, {
            name: "Andrey ESHCHENKO",
            short_name: "ESHCHENKO",
            team: "Russia",
            club: "FC Anzhi Makhachkala",
            country: "Russia",
            type: "player",
            id: "Andrey ESHCHENKO"
        }, {
            name: "Godfrey OBOABONA",
            short_name: "OBOABONA",
            team: "Nigeria",
            club: "Caykur Rizespor",
            country: "Nigeria",
            type: "player",
            id: "Godfrey OBOABONA"
        }, {
            name: "Steven GERRARD",
            short_name: "GERRARD",
            team: "England",
            club: "Liverpool FC",
            country: "England",
            type: "player",
            id: "Steven GERRARD"
        }, {
            name: "Jack WILSHERE",
            short_name: "WILSHERE",
            team: "England",
            club: "Arsenal FC",
            country: "England",
            type: "player",
            id: "Jack WILSHERE"
        }, {
            country: "Honduras",
            premier: !1,
            rank: 727,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Real Espana",
            confederation: "CONCACAF"
        }, {
            name: "Michael UMANA",
            short_name: "UMAÃ‘A M.",
            team: "Costa Rica",
            club: "Deportivo Saprissa",
            country: "Costa Rica",
            type: "player",
            id: "Michael UMANA"
        }, {
            name: "Yuya OSAKO",
            short_name: "OSAKO",
            team: "Japan",
            club: "TSV 1860 Muenchen",
            country: "Japan",
            type: "player",
            id: "Yuya OSAKO"
        }, {
            country: "Argentina",
            premier: !1,
            rank: 283,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "Independiente Santa Fe",
            confederation: "CONMEBOL"
        }, {
            name: "Shinji KAGAWA",
            short_name: "KAGAWA",
            team: "Japan",
            club: "Manchester United FC",
            country: "Japan",
            type: "player",
            id: "Shinji KAGAWA"
        }, {
            name: "Andre AYEW",
            short_name: "A. AYEW",
            team: "Ghana",
            club: "Olympique Marseille",
            country: "Ghana",
            type: "player",
            id: "Andre AYEW"
        }, {
            name: "Jackson MARTINEZ",
            short_name: "JACKSON M.",
            team: "Colombia",
            club: "FC Porto",
            country: "Colombia",
            type: "player",
            id: "Jackson MARTINEZ"
        }, {
            name: "JUANFRAN",
            short_name: "JUANFRAN",
            team: "Spain",
            club: "Atletico Madrid",
            country: "Spain",
            type: "player",
            id: "JUANFRAN"
        }, {
            group: "A",
            country: "Cameroon",
            region: "Africa",
            type: "team",
            id: "Cameroon",
            stage: 0
        }, {
            name: "Rafael MARQUEZ",
            short_name: "R MARQUEZ",
            team: "Mexico",
            club: "Club Leon",
            country: "Mexico",
            type: "player",
            id: "Rafael MARQUEZ"
        }, {
            country: "Japan",
            premier: !1,
            rank: 1062,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Jubilo Iwata",
            confederation: "AFC"
        }, {
            country: "Spain",
            premier: !1,
            rank: 238,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "CA Osasuna",
            confederation: "UEFA"
        }, {
            name: "Ricardo RODRIGUEZ",
            short_name: "RODRIGUEZ",
            team: "Switzerland",
            club: "VfL Wolfsburg",
            country: "Switzerland",
            type: "player",
            id: "Ricardo RODRIGUEZ"
        }, {
            country: "South Korea",
            premier: !1,
            rank: 553,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Busan IPark FC",
            confederation: "AFC"
        }, {
            name: "Frickson ERAZO",
            short_name: "ERAZO",
            team: "Ecuador",
            club: "CR Flamengo",
            country: "Ecuador",
            type: "player",
            id: "Frickson ERAZO"
        }, {
            name: "Adam KWARASEY",
            short_name: "KWARASEY",
            team: "Ghana",
            club: "Stromsgodset IF",
            country: "Ghana",
            type: "player",
            id: "Adam KWARASEY"
        }, {
            country: "England",
            premier: !0,
            rank: 14,
            country_rank: 11,
            team_count: 9,
            type: "club",
            id: "Manchester United FC",
            confederation: "UEFA"
        }, {
            name: "Edgar SALLI",
            short_name: "SALLI",
            team: "Cameroon",
            club: "RC Lens",
            country: "Cameroon",
            type: "player",
            id: "Edgar SALLI"
        }, {
            name: "Eliaquim MANGALA",
            short_name: "MANGALA",
            team: "France",
            club: "FC Porto",
            country: "France",
            type: "player",
            id: "Eliaquim MANGALA"
        }, {
            name: "Carlos GRUEZO",
            short_name: "GRUEZO",
            team: "Ecuador",
            club: "VfB Stuttgart",
            country: "Ecuador",
            type: "player",
            id: "Carlos GRUEZO"
        }, {
            name: "Konstantinos MITROGLOU",
            short_name: "MITROGLOU",
            team: "Greece",
            club: "Fulham FC",
            country: "Greece",
            type: "player",
            id: "Konstantinos MITROGLOU"
        }, {
            country: "Israel",
            premier: !1,
            rank: 528,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Hapoel Be'er Sheva FC",
            confederation: "UEFA"
        }, {
            name: "Amirhossein SADEGHI",
            short_name: "AMIRHOSSEIN",
            team: "Iran",
            club: "Esteghlal Tehran FC",
            country: "Iran",
            type: "player",
            id: "Amirhossein SADEGHI"
        }, {
            country: "Japan",
            premier: !1,
            rank: 327,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Kawasaki Frontale",
            confederation: "AFC"
        }, {
            country: "Germany",
            premier: !0,
            rank: 36,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "Borussia Moenchengladbach",
            confederation: "UEFA"
        }, {
            name: "Xabi ALONSO",
            short_name: "ALONSO",
            team: "Spain",
            club: "Real Madrid CF",
            country: "Spain",
            type: "player",
            id: "Xabi ALONSO"
        }, {
            name: "PAULINHO",
            short_name: "PAULINHO",
            team: "Brazil",
            club: "Tottenham Hotspur FC",
            country: "Brazil",
            type: "player",
            id: "PAULINHO"
        }, {
            country: "China PR",
            premier: !1,
            rank: 374,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Beijing Guoan",
            confederation: "AFC"
        }, {
            country: "Brazil",
            premier: !1,
            rank: 101,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Sao Paulo FC",
            confederation: "CONMEBOL"
        }, {
            name: "KOO Jacheol",
            short_name: "J C KOO",
            team: "South Korea",
            club: "FSV Mainz 05",
            country: "South Korea",
            type: "player",
            id: "KOO Jacheol"
        }, {
            name: "Maynor FIGUEROA",
            short_name: "FIGUEROA",
            team: "Honduras",
            club: "Hull City FC",
            country: "Honduras",
            type: "player",
            id: "Maynor FIGUEROA"
        }, {
            name: "Alfredo TALAVERA",
            short_name: "A TALAVERA",
            team: "Mexico",
            club: "Deportivo Toluca FC",
            country: "Mexico",
            type: "player",
            id: "Alfredo TALAVERA"
        }, {
            country: "South Korea",
            premier: !1,
            rank: 214,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Jeonbuk Hyundai Motors FC",
            confederation: "AFC"
        }, {
            name: "Phil JONES",
            short_name: "JONES",
            team: "England",
            club: "Manchester United FC",
            country: "England",
            type: "player",
            id: "Phil JONES"
        }, {
            country: "Netherlands",
            premier: !1,
            rank: 20,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "AFC Ajax",
            confederation: "UEFA"
        }, {
            name: "Alireza HAGHIGHI",
            short_name: "A. HAGHIGHI",
            team: "Iran",
            club: "Sporting Covilha",
            country: "Iran",
            type: "player",
            id: "Alireza HAGHIGHI"
        }, {
            name: "Celso BORGES",
            short_name: "BORGES C.",
            team: "Costa Rica",
            club: "AIK Solna",
            country: "Costa Rica",
            type: "player",
            id: "Celso BORGES"
        }, {
            name: "Maximiliano PEREIRA",
            short_name: "M. PEREIRA",
            team: "Uruguay",
            club: "SL Benfica",
            country: "Uruguay",
            type: "player",
            id: "Maximiliano PEREIRA"
        }, {
            country: "Greece",
            premier: !1,
            rank: 925,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "FC Platanias",
            confederation: "UEFA"
        }, {
            name: "Sime VRSALJKO",
            short_name: "VRSALJKO",
            team: "Croatia",
            club: "Genoa CFC",
            country: "Croatia",
            type: "player",
            id: "Sime VRSALJKO"
        }, {
            country: "Netherlands",
            premier: !1,
            rank: 49,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "FC Twente",
            confederation: "UEFA"
        }, {
            name: "Serge AURIER",
            short_name: "S. AURIER",
            team: "Ivory Coast",
            club: "Toulouse FC",
            country: "Ivory Coast",
            type: "player",
            id: "Serge AURIER"
        }, {
            country: "England",
            premier: !0,
            rank: 9,
            country_rank: 9,
            team_count: 6,
            type: "club",
            id: "Liverpool FC",
            confederation: "UEFA"
        }, {
            name: "Fidel MARTINEZ",
            short_name: "MARTINEZ",
            team: "Ecuador",
            club: "Club Tijuana",
            country: "Ecuador",
            type: "player",
            id: "Fidel MARTINEZ"
        }, {
            name: "Carlos VALDES",
            short_name: "VALDES",
            team: "Colombia",
            club: "CA San Lorenzo de Almagro",
            country: "Colombia",
            type: "player",
            id: "Carlos VALDES"
        }, {
            country: "Switzerland",
            premier: !1,
            rank: 51,
            country_rank: -1,
            team_count: 3,
            type: "club",
            id: "FC Basel",
            confederation: "UEFA"
        }, {
            country: "England",
            premier: !0,
            rank: 25,
            country_rank: 18,
            team_count: 4,
            type: "club",
            id: "Tottenham Hotspur FC",
            confederation: "UEFA"
        }, {
            name: "Javier AQUINO",
            short_name: "J AQUINO",
            team: "Mexico",
            club: "Villarreal CF",
            country: "Mexico",
            type: "player",
            id: "Javier AQUINO"
        }, {
            name: "JULIO CESAR",
            short_name: "JULIO CESAR",
            team: "Brazil",
            club: "Toronto FC",
            country: "Brazil",
            type: "player",
            id: "JULIO CESAR"
        }, {
            name: "Abel AGUILAR",
            short_name: "AGUILAR T.",
            team: "Colombia",
            club: "Toulouse FC",
            country: "Colombia",
            type: "player",
            id: "Abel AGUILAR"
        }, {
            name: "Juan CUADRADO",
            short_name: "CUADRADO",
            team: "Colombia",
            club: "ACF Fiorentina",
            country: "Colombia",
            type: "player",
            id: "Juan CUADRADO"
        }, {
            name: "Giancarlo GONZALEZ",
            short_name: "GONZALEZ G.",
            team: "Costa Rica",
            club: "Columbus Crew",
            country: "Costa Rica",
            type: "player",
            id: "Giancarlo GONZALEZ"
        }, {
            country: "Germany",
            premier: !0,
            rank: 384,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Hamburger SV",
            confederation: "UEFA"
        }, {
            name: "Ron VLAAR",
            short_name: "VLAAR",
            team: "Netherlands",
            club: "Aston Villa FC",
            country: "Netherlands",
            type: "player",
            id: "Ron VLAAR"
        }, {
            name: "JO",
            short_name: "JÃ”",
            team: "Brazil",
            club: "Atletico Mineiro",
            country: "Brazil",
            type: "player",
            id: "JO"
        }, {
            name: "Sayouba MANDE",
            short_name: "M. SAYOUBA",
            team: "Ivory Coast",
            club: "Stabaek IF",
            country: "Ivory Coast",
            type: "player",
            id: "Sayouba MANDE"
        }, {
            name: "Jorge VALDIVIA",
            short_name: "VALDIVIA",
            team: "Chile",
            club: "Palmeiras",
            country: "Chile",
            type: "player",
            id: "Jorge VALDIVIA"
        }, {
            group: "H",
            country: "South Korea",
            region: "Asia",
            type: "team",
            id: "South Korea",
            stage: 0
        }, {
            name: "Roman BUERKI",
            short_name: "BÃœRKI",
            team: "Switzerland",
            club: "Grasshopper Club",
            country: "Switzerland",
            type: "player",
            id: "Roman BUERKI"
        }, {
            name: "Juan MATA",
            short_name: "MATA",
            team: "Spain",
            club: "Manchester United FC",
            country: "Spain",
            type: "player",
            id: "Juan MATA"
        }, {
            name: "Sammy NDJOCK",
            short_name: "NDJOCK",
            team: "Cameroon",
            club: "Fethiyespor",
            country: "Cameroon",
            type: "player",
            id: "Sammy NDJOCK"
        }, {
            name: "Sergio ROMERO",
            short_name: "ROMERO",
            team: "Argentina",
            club: "AS Monaco",
            country: "Argentina",
            type: "player",
            id: "Sergio ROMERO"
        }, {
            name: "Mario GOETZE",
            short_name: "GÃ–TZE",
            team: "Germany",
            club: "FC Bayern Muenchen",
            country: "Germany",
            type: "player",
            id: "Mario GOETZE"
        }, {
            name: "Eugenio MENA",
            short_name: "MENA",
            team: "Chile",
            club: "Santos FC",
            country: "Chile",
            type: "player",
            id: "Eugenio MENA"
        }, {
            name: "Joel CAMPBELL",
            short_name: "CAMPBELL J.",
            team: "Costa Rica",
            club: "Olympiacos Piraeus FC",
            country: "Costa Rica",
            type: "player",
            id: "Joel CAMPBELL"
        }, {
            country: "England",
            premier: !1,
            rank: 0,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Preston North End FC",
            confederation: "UEFA"
        }, {
            name: "RAFA",
            short_name: "RAFA",
            team: "Portugal",
            club: "Sporting Braga",
            country: "Portugal",
            type: "player",
            id: "RAFA"
        }, {
            name: "Ron-Robert ZIELER",
            short_name: "ZIELER",
            team: "Germany",
            club: "Hannover 96",
            country: "Germany",
            type: "player",
            id: "Ron-Robert ZIELER"
        }, {
            name: "Luis LOPEZ",
            short_name: "LOPEZ",
            team: "Honduras",
            club: "Real Espana",
            country: "Honduras",
            type: "player",
            id: "Luis LOPEZ"
        }, {
            name: "Mesut OEZIL",
            short_name: "Ã–ZIL",
            team: "Germany",
            club: "Arsenal FC",
            country: "Germany",
            type: "player",
            id: "Mesut OEZIL"
        }, {
            name: "Andreas SAMARIS",
            short_name: "SAMARIS",
            team: "Greece",
            club: "Olympiacos Piraeus FC",
            country: "Greece",
            type: "player",
            id: "Andreas SAMARIS"
        }, {
            name: "Riyad MAHREZ",
            short_name: "MAHREZ",
            team: "Algeria",
            club: "Leicester City FC",
            country: "Algeria",
            type: "player",
            id: "Riyad MAHREZ"
        }, {
            name: "Tim KRUL",
            short_name: "KRUL",
            team: "Netherlands",
            club: "Newcastle United FC",
            country: "Netherlands",
            type: "player",
            id: "Tim KRUL"
        }, {
            country: "Kuwait",
            premier: !1,
            rank: 1601,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Kuwait SC",
            confederation: "AFC"
        }, {
            country: "Belgium",
            premier: !1,
            rank: 80,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "Club Brugge KV",
            confederation: "UEFA"
        }, {
            country: "France",
            premier: !1,
            rank: 175,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "FC Lorient",
            confederation: "UEFA"
        }, {
            country: "England",
            premier: !0,
            rank: 12,
            country_rank: 1,
            team_count: 5,
            type: "club",
            id: "Arsenal FC",
            confederation: "UEFA"
        }, {
            name: "Carlos PENA",
            short_name: "C PEÃ‘A",
            team: "Mexico",
            club: "Club Leon",
            country: "Mexico",
            type: "player",
            id: "Carlos PENA"
        }, {
            country: "Spain",
            premier: !0,
            rank: 47,
            country_rank: 8,
            team_count: 4,
            type: "club",
            id: "Valencia CF",
            confederation: "UEFA"
        }, {
            country: "Germany",
            premier: !1,
            rank: 0,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "FSV Frankfurt",
            confederation: "UEFA"
        }, {
            name: "Nicolas LODEIRO",
            short_name: "LODEIRO",
            team: "Uruguay",
            club: "Botafogo FR",
            country: "Uruguay",
            type: "player",
            id: "Nicolas LODEIRO"
        }, {
            country: "France",
            premier: !1,
            rank: 308,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "AS Nancy",
            confederation: "UEFA"
        }, {
            name: "PEPE",
            short_name: "PEPE",
            team: "Portugal",
            club: "Real Madrid CF",
            country: "Portugal",
            type: "player",
            id: "PEPE"
        }, {
            name: "Alessio CERCI",
            short_name: "CERCI",
            team: "Italy",
            club: "Torino FC",
            country: "Italy",
            type: "player",
            id: "Alessio CERCI"
        }, {
            country: "Ecuador",
            premier: !1,
            rank: 159,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "CS Emelec",
            confederation: "CONMEBOL"
        }, {
            name: "Hotaru YAMAGUCHI",
            short_name: "YAMAGUCHI",
            team: "Japan",
            club: "Cerezo Osaka",
            country: "Japan",
            type: "player",
            id: "Hotaru YAMAGUCHI"
        }, {
            name: "Panagiotis TACHTSIDIS",
            short_name: "TACHTSIDIS",
            team: "Greece",
            club: "Torino FC",
            country: "Greece",
            type: "player",
            id: "Panagiotis TACHTSIDIS"
        }, {
            name: "Ricardo ALVAREZ",
            short_name: "ALVAREZ",
            team: "Argentina",
            club: "FC Internazionale",
            country: "Argentina",
            type: "player",
            id: "Ricardo ALVAREZ"
        }, {
            name: "John BOYE",
            short_name: "BOYE",
            team: "Ghana",
            club: "Stade Rennais FC",
            country: "Ghana",
            type: "player",
            id: "John BOYE"
        }, {
            name: "Gary MEDEL",
            short_name: "MEDEL",
            team: "Chile",
            club: "Cardiff City FC",
            country: "Chile",
            type: "player",
            id: "Gary MEDEL"
        }, {
            country: "Japan",
            premier: !1,
            rank: 360,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Urawa Red Diamonds",
            confederation: "AFC"
        }, {
            name: "Teofilo GUTIERREZ",
            short_name: "TEO",
            team: "Colombia",
            club: "CA River Plate",
            country: "Colombia",
            type: "player",
            id: "Teofilo GUTIERREZ"
        }, {
            name: "Antoine GRIEZMANN",
            short_name: "GRIEZMANN",
            team: "France",
            club: "Real Sociedad",
            country: "France",
            type: "player",
            id: "Antoine GRIEZMANN"
        }, {
            name: "Jordan HENDERSON",
            short_name: "HENDERSON",
            team: "England",
            club: "Liverpool FC",
            country: "England",
            type: "player",
            id: "Jordan HENDERSON"
        }, {
            name: "Carlos BACCA",
            short_name: "BACCA",
            team: "Colombia",
            club: "Sevilla FC",
            country: "Colombia",
            type: "player",
            id: "Carlos BACCA"
        }, {
            name: "Agustin ORION",
            short_name: "ORION",
            team: "Argentina",
            club: "CA Boca Juniors",
            country: "Argentina",
            type: "player",
            id: "Agustin ORION"
        }, {
            country: "France",
            premier: !1,
            rank: 999,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "FC Sochaux-MontbÃ©liard",
            confederation: "UEFA"
        }, {
            country: "England",
            premier: !1,
            rank: 0,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Charlton Athletic FC",
            confederation: "UEFA"
        }, {
            name: "Jerome BOATENG",
            short_name: "BOATENG",
            team: "Germany",
            club: "FC Bayern Muenchen",
            country: "Germany",
            type: "player",
            id: "Jerome BOATENG"
        }, {
            country: "Turkey",
            premier: !1,
            rank: 599,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Gaziantepspor",
            confederation: "UEFA"
        }, {
            country: "United States",
            premier: !0,
            rank: 1888,
            country_rank: 9,
            team_count: 1,
            type: "club",
            id: "CD Chivas USA",
            confederation: "CONCACAF"
        }, {
            country: "France",
            premier: !0,
            rank: 999,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "RC Lens",
            confederation: "UEFA"
        }, {
            name: "Hashem BEIKZADEH",
            short_name: "BEIKZADEH",
            team: "Iran",
            club: "Esteghlal Tehran FC",
            country: "Iran",
            type: "player",
            id: "Hashem BEIKZADEH"
        }, {
            name: "John BROOKS",
            short_name: "BROOKS",
            team: "USA",
            club: "Hertha BSC",
            country: "USA",
            type: "player",
            id: "John BROOKS"
        }, {
            name: "Gabriel ACHILIER",
            short_name: "ACHILIER",
            team: "Ecuador",
            club: "CS Emelec",
            country: "Ecuador",
            type: "player",
            id: "Gabriel ACHILIER"
        }, {
            name: "KIM Bokyung",
            short_name: "B K KIM",
            team: "South Korea",
            club: "Cardiff City FC",
            country: "South Korea",
            type: "player",
            id: "KIM Bokyung"
        }, {
            name: "Chigozie AGBIM",
            short_name: "AGBIM",
            team: "Nigeria",
            club: "Enugu Rangers FC",
            country: "Nigeria",
            type: "player",
            id: "Chigozie AGBIM"
        }, {
            name: "Leighton BAINES",
            short_name: "BAINES",
            team: "England",
            club: "Everton FC",
            country: "England",
            type: "player",
            id: "Leighton BAINES"
        }, {
            country: "Argentina",
            premier: !1,
            rank: 76,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "CA Boca Juniors",
            confederation: "CONMEBOL"
        }, {
            name: "Diego PEREZ",
            short_name: "D. PEREZ",
            team: "Uruguay",
            club: "Bologna FC",
            country: "Uruguay",
            type: "player",
            id: "Diego PEREZ"
        }, {
            country: "Canada",
            premier: !1,
            rank: 797,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Vancouver Whitecaps FC",
            confederation: "CONCACAF"
        }, {
            name: "EDER",
            short_name: "Ã‰DER",
            team: "Portugal",
            club: "Sporting Braga",
            country: "Portugal",
            type: "player",
            id: "EDER"
        }, {
            name: "Raheem STERLING",
            short_name: "STERLING",
            team: "England",
            club: "Liverpool FC",
            country: "England",
            type: "player",
            id: "Raheem STERLING"
        }, {
            group: "G",
            country: "Portugal",
            region: "Europe",
            type: "team",
            id: "Portugal",
            stage: 0
        }, {
            country: "Qatar",
            premier: !1,
            rank: 458,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Al Gharafa SC",
            confederation: "AFC"
        }, {
            name: "Dmitry KOMBAROV",
            short_name: "KOMBAROV",
            team: "Russia",
            club: "FC Spartak Moscow",
            country: "Russia",
            type: "player",
            id: "Dmitry KOMBAROV"
        }, {
            name: "Memphis DEPAY",
            short_name: "MEMPHIS",
            team: "Netherlands",
            club: "PSV Eindhoven",
            country: "Netherlands",
            type: "player",
            id: "Memphis DEPAY"
        }, {
            name: "Rickie LAMBERT",
            short_name: "LAMBERT",
            team: "England",
            club: "Southampton FC",
            country: "England",
            type: "player",
            id: "Rickie LAMBERT"
        }, {
            name: "Alexis SANCHEZ",
            short_name: "ALEXIS",
            team: "Chile",
            club: "FC Barcelona",
            country: "Chile",
            type: "player",
            id: "Alexis SANCHEZ"
        }, {
            name: "Jose VAZQUEZ",
            short_name: "J VAZQUEZ",
            team: "Mexico",
            club: "Club Leon",
            country: "Mexico",
            type: "player",
            id: "Jose VAZQUEZ"
        }, {
            name: "Mathew LECKIE",
            short_name: "LECKIE",
            team: "Australia",
            club: "FSV Frankfurt",
            country: "Australia",
            type: "player",
            id: "Mathew LECKIE"
        }, {
            country: "Turkey",
            premier: !1,
            rank: 649,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Istanbul BBSK",
            confederation: "UEFA"
        }, {
            name: "Joe HART",
            short_name: "HART",
            team: "England",
            club: "Manchester City FC",
            country: "England",
            type: "player",
            id: "Joe HART"
        }, {
            country: "Ghana",
            premier: !1,
            rank: 678,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Aduana Stars",
            confederation: "CAF"
        }, {
            name: "James RODRIGUEZ",
            short_name: "JAMES",
            team: "Colombia",
            club: "AS Monaco",
            country: "Colombia",
            type: "player",
            id: "James RODRIGUEZ"
        }, {
            country: "Germany",
            premier: !0,
            rank: 26,
            country_rank: -1,
            team_count: 3,
            type: "club",
            id: "Bayer 04 Leverkusen",
            confederation: "UEFA"
        }, {
            country: "Belgium",
            premier: !1,
            rank: 107,
            country_rank: -1,
            team_count: 3,
            type: "club",
            id: "Standard Liege",
            confederation: "UEFA"
        }, {
            name: "Toshihiro AOYAMA",
            short_name: "AOYAMA",
            team: "Japan",
            club: "Sanfrecce Hiroshima",
            country: "Japan",
            type: "player",
            id: "Toshihiro AOYAMA"
        }, {
            name: "Karim ANSARI FARD",
            short_name: "KARIM",
            team: "Iran",
            club: "Tractor Sazi Tabriz FC",
            country: "Iran",
            type: "player",
            id: "Karim ANSARI FARD"
        }, {
            name: "Albert ADOMAH",
            short_name: "ADOMAH",
            team: "Ghana",
            club: "Middlesbrough FC",
            country: "Ghana",
            type: "player",
            id: "Albert ADOMAH"
        }, {
            country: "Mexico",
            premier: !1,
            rank: 111,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "Cruz Azul FC",
            confederation: "CONCACAF"
        }, {
            name: "HERNANES",
            short_name: "HERNANES",
            team: "Brazil",
            club: "FC Internazionale",
            country: "Brazil",
            type: "player",
            id: "HERNANES"
        }, {
            group: "D",
            country: "Costa Rica",
            region: "North America",
            type: "team",
            id: "Costa Rica",
            stage: 2
        }, {
            name: "Anel HADZIC",
            short_name: "HADÅ½IÄ†",
            team: "Bosnia and Herzegovina",
            club: "SK Sturm Graz",
            country: "Bosnia and Herzegovina",
            type: "player",
            id: "Anel HADZIC"
        }, {
            name: "Esseid BELKALEM",
            short_name: "BELKALEM",
            team: "Algeria",
            club: "Watford FC",
            country: "Algeria",
            type: "player",
            id: "Esseid BELKALEM"
        }, {
            country: "Uruguay",
            premier: !1,
            rank: 184,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "CA River Plate",
            confederation: "CONMEBOL"
        }, {
            name: "Didier DROGBA",
            short_name: "DROGBA",
            team: "Ivory Coast",
            club: "Galatasaray SK",
            country: "Ivory Coast",
            type: "player",
            id: "Didier DROGBA"
        }, {
            name: "Cristian RODRIGUEZ",
            short_name: "C. RODRIGUEZ",
            team: "Uruguay",
            club: "Atletico Madrid",
            country: "Uruguay",
            type: "player",
            id: "Cristian RODRIGUEZ"
        }, {
            name: "Ognjen VRANJES",
            short_name: "VRANJEÅ ",
            team: "Bosnia and Herzegovina",
            club: "Elazigspor",
            country: "Bosnia and Herzegovina",
            type: "player",
            id: "Ognjen VRANJES"
        }, {
            group: "F",
            country: "Nigeria",
            region: "Africa",
            type: "team",
            id: "Nigeria",
            stage: 1
        }, {
            name: "Nigel DE JONG",
            short_name: "DE JONG",
            team: "Netherlands",
            club: "AC Milan",
            country: "Netherlands",
            type: "player",
            id: "Nigel DE JONG"
        }, {
            name: "Olivier GIROUD",
            short_name: "GIROUD",
            team: "France",
            club: "Arsenal FC",
            country: "France",
            type: "player",
            id: "Olivier GIROUD"
        }, {
            group: "E",
            country: "Ecuador",
            region: "South America",
            type: "team",
            id: "Ecuador",
            stage: 0
        }, {
            name: "Ante REBIC",
            short_name: "REBIÄ†",
            team: "Croatia",
            club: "ACF Fiorentina",
            country: "Croatia",
            type: "player",
            id: "Ante REBIC"
        }, {
            name: "Yury LODYGIN",
            short_name: "LODYGIN",
            team: "Russia",
            club: "FC Zenit St. Petersburg",
            country: "Russia",
            type: "player",
            id: "Yury LODYGIN"
        }, {
            name: "Matt BESLER",
            short_name: "BESLER",
            team: "USA",
            club: "Sporting Kansas City",
            country: "USA",
            type: "player",
            id: "Matt BESLER"
        }, {
            group: "B",
            country: "Australia",
            region: "Oceania",
            type: "team",
            id: "Australia",
            stage: 0
        }, {
            name: "Bastian SCHWEINSTEIGER",
            short_name: "SCHWEINSTEIGER",
            team: "Germany",
            club: "FC Bayern Muenchen",
            country: "Germany",
            type: "player",
            id: "Bastian SCHWEINSTEIGER"
        }, {
            name: "Divock ORIGI",
            short_name: "ORIGI",
            team: "Belgium",
            club: "Lille OSC",
            country: "Belgium",
            type: "player",
            id: "Divock ORIGI"
        }, {
            name: "Die SEREY",
            short_name: "SEREY DIE",
            team: "Ivory Coast",
            club: "FC Basel",
            country: "Ivory Coast",
            type: "player",
            id: "Die SEREY"
        }, {
            country: "Mexico",
            premier: !1,
            rank: 179,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "CF Monterrey",
            confederation: "CONMEBOL"
        }, {
            name: "Ioannis FETFATZIDIS",
            short_name: "FETFATZIDIS",
            team: "Greece",
            club: "Genoa CFC",
            country: "Greece",
            type: "player",
            id: "Ioannis FETFATZIDIS"
        }, {
            name: "Juwon OSHANIWA",
            short_name: "OSHANIWA",
            team: "Nigeria",
            club: "FC Ashdod",
            country: "Nigeria",
            type: "player",
            id: "Juwon OSHANIWA"
        }, {
            name: "Vladimir GRANAT",
            short_name: "GRANAT",
            team: "Russia",
            club: "FC Dynamo Moscow",
            country: "Russia",
            type: "player",
            id: "Vladimir GRANAT"
        }, {
            country: "Nigeria",
            premier: !1,
            rank: 633,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Sunshine Stars FC",
            confederation: "CAF"
        }, {
            name: "Steve VON BERGEN",
            short_name: "VON BERGEN",
            team: "Switzerland",
            club: "BSC Young Boys",
            country: "Switzerland",
            type: "player",
            id: "Steve VON BERGEN"
        }, {
            name: "Pierre WEBO",
            short_name: "WEBO",
            team: "Cameroon",
            club: "Fenerbahce SK",
            country: "Cameroon",
            type: "player",
            id: "Pierre WEBO"
        }, {
            name: "Juan ZUNIGA",
            short_name: "C. ZUÃ‘IGA",
            team: "Colombia",
            club: "SSC Napoli",
            country: "Colombia",
            type: "player",
            id: "Juan ZUNIGA"
        }, {
            name: "Michael ARROYO",
            short_name: "ARROYO",
            team: "Ecuador",
            club: "Atlante FC",
            country: "Ecuador",
            type: "player",
            id: "Michael ARROYO"
        }, {
            name: "Fatawu DAUDA",
            short_name: "DAUDA",
            team: "Ghana",
            club: "Orlando Pirates",
            country: "Ghana",
            type: "player",
            id: "Fatawu DAUDA"
        }, {
            name: "Steven DEFOUR",
            short_name: "DEFOUR",
            team: "Belgium",
            club: "FC Porto",
            country: "Belgium",
            type: "player",
            id: "Steven DEFOUR"
        }, {
            name: "Sokratis PAPASTATHOPOULOS",
            short_name: "SOKRATIS",
            team: "Greece",
            club: "Borussia Dortmund",
            country: "Greece",
            type: "player",
            id: "Sokratis PAPASTATHOPOULOS"
        }, {
            name: "Didier ZOKORA",
            short_name: "ZOKORA",
            team: "Ivory Coast",
            club: "Trabzonspor",
            country: "Ivory Coast",
            type: "player",
            id: "Didier ZOKORA"
        }, {
            name: "Bakhtiar RAHMANI",
            short_name: "BAKHTIAR",
            team: "Iran",
            club: "Foolad Khuzestan FC",
            country: "Iran",
            type: "player",
            id: "Bakhtiar RAHMANI"
        }, {
            name: "Gianluigi BUFFON",
            short_name: "BUFFON",
            team: "Italy",
            club: "Juventus FC",
            country: "Italy",
            type: "player",
            id: "Gianluigi BUFFON"
        }, {
            name: "Mattia PERIN",
            short_name: "PERIN",
            team: "Italy",
            club: "Genoa CFC",
            country: "Italy",
            type: "player",
            id: "Mattia PERIN"
        }, {
            name: "Tino Sven SUSIC",
            short_name: "SUÅ IÄ†",
            team: "Bosnia and Herzegovina",
            club: "HNK Hajduk Split",
            country: "Bosnia and Herzegovina",
            type: "player",
            id: "Tino Sven SUSIC"
        }, {
            country: "Spain",
            premier: !1,
            rank: 42,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "CD Real Sociedad",
            confederation: "UEFA"
        }, {
            name: "Marvin CHAVEZ",
            short_name: "M. CHAVEZ",
            team: "Honduras",
            club: "CD Chivas USA",
            country: "Honduras",
            type: "player",
            id: "Marvin CHAVEZ"
        }, {
            name: "Andrea BARZAGLI",
            short_name: "BARZAGLI",
            team: "Italy",
            club: "Juventus FC",
            country: "Italy",
            type: "player",
            id: "Andrea BARZAGLI"
        }, {
            country: "Iran",
            premier: !0,
            rank: 999,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Zob Ahan Isfahan FC",
            confederation: "AFC"
        }, {
            name: "SAMMIR",
            short_name: "SAMMIR",
            team: "Croatia",
            club: "Getafe CF",
            country: "Croatia",
            type: "player",
            id: "SAMMIR"
        }, {
            name: "Brayan BECKELES",
            short_name: "BECKELES",
            team: "Honduras",
            club: "CD Olimpia",
            country: "Honduras",
            type: "player",
            id: "Brayan BECKELES"
        }, {
            country: "Belgium",
            premier: !1,
            rank: 978,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "KV Waasland-Beveren",
            confederation: "UEFA"
        }, {
            name: "Edin DZEKO",
            short_name: "DÅ½EKO",
            team: "Bosnia and Herzegovina",
            club: "Manchester City FC",
            country: "Bosnia and Herzegovina",
            type: "player",
            id: "Edin DZEKO"
        }, {
            country: "Iran",
            premier: !0,
            rank: 999,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Tractor Sazi Tabriz FC",
            confederation: "AFC"
        }, {
            country: "Ecuador",
            premier: !1,
            rank: 413,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "LDU Quito",
            confederation: "CONMEBOL"
        }, {
            name: "Hector HERRERA",
            short_name: "H HERRERA",
            team: "Mexico",
            club: "FC Porto",
            country: "Mexico",
            type: "player",
            id: "Hector HERRERA"
        }, {
            country: "Norway",
            premier: !1,
            rank: 560,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Valerenga IF",
            confederation: "UEFA"
        }, {
            name: "Fabian ORELLANA",
            short_name: "ORELLANA",
            team: "Chile",
            club: "Celta Vigo",
            country: "Chile",
            type: "player",
            id: "Fabian ORELLANA"
        }, {
            name: "Vedran CORLUKA",
            short_name: "CORLUKA",
            team: "Croatia",
            club: "FC Lokomotiv Moscow",
            country: "Croatia",
            type: "player",
            id: "Vedran CORLUKA"
        }, {
            name: "Ashkan DEJAGAH",
            short_name: "DEJAGAH",
            team: "Iran",
            club: "Fulham FC",
            country: "Iran",
            type: "player",
            id: "Ashkan DEJAGAH"
        }, {
            name: "Mix DISKERUD",
            short_name: "DISKERUD",
            team: "USA",
            club: "Rosenborg BK",
            country: "USA",
            type: "player",
            id: "Mix DISKERUD"
        }, {
            country: "Ecuador",
            premier: !1,
            rank: 606,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "CD El Nacional",
            confederation: "CONMEBOL"
        }, {
            group: "C",
            country: "Colombia",
            region: "South America",
            type: "team",
            id: "Colombia",
            stage: 2
        }, {
            name: "Xavi HERNANDEZ",
            short_name: "XAVI",
            team: "Spain",
            club: "FC Barcelona",
            country: "Spain",
            type: "player",
            id: "Xavi HERNANDEZ"
        }, {
            name: "Vasileios TOROSIDIS",
            short_name: "TOROSIDIS",
            team: "Greece",
            club: "AS Roma",
            country: "Greece",
            type: "player",
            id: "Vasileios TOROSIDIS"
        }, {
            name: "Ryan McGOWAN",
            short_name: "MCGOWAN",
            team: "Australia",
            club: "Shandong Luneng Taishan FC",
            country: "Australia",
            type: "player",
            id: "Ryan McGOWAN"
        }, {
            name: "Ivan PERISIC",
            short_name: "PERIÅ IÄ†",
            team: "Croatia",
            club: "VfL Wolfsburg",
            country: "Croatia",
            type: "player",
            id: "Ivan PERISIC"
        }, {
            name: "Carlos SANCHEZ",
            short_name: "C. SANCHEZ",
            team: "Colombia",
            club: "Elche CF",
            country: "Colombia",
            type: "player",
            id: "Carlos SANCHEZ"
        }, {
            name: "Stephane MBIA",
            short_name: "MBIA",
            team: "Cameroon",
            club: "Sevilla FC",
            country: "Cameroon",
            type: "player",
            id: "Stephane MBIA"
        }, {
            name: "Andranik TIMOTIAN",
            short_name: "ANDRANIK",
            team: "Iran",
            club: "Esteghlal Tehran FC",
            country: "Iran",
            type: "player",
            id: "Andranik TIMOTIAN"
        }, {
            country: "Austria",
            premier: !1,
            rank: 174,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "FK Austria Wien",
            confederation: "UEFA"
        }, {
            name: "Miroslav KLOSE",
            short_name: "KLOSE",
            team: "Germany",
            club: "SS Lazio",
            country: "Germany",
            type: "player",
            id: "Miroslav KLOSE"
        }, {
            country: "Spain",
            premier: !0,
            rank: 69,
            country_rank: 9,
            team_count: 2,
            type: "club",
            id: "Celta Vigo",
            confederation: "UEFA"
        }, {
            name: "LEE Chungyong",
            short_name: "C Y LEE",
            team: "South Korea",
            club: "Bolton Wanderers FC",
            country: "South Korea",
            type: "player",
            id: "LEE Chungyong"
        }, {
            country: "England",
            premier: !1,
            rank: 98,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Crystal Palace FC",
            confederation: "UEFA"
        }, {
            name: "Andrea PIRLO",
            short_name: "PIRLO",
            team: "Italy",
            club: "Juventus FC",
            country: "Italy",
            type: "player",
            id: "Andrea PIRLO"
        }, {
            name: "Jorge GUAGUA",
            short_name: "GUAGUA",
            team: "Ecuador",
            club: "CS Emelec",
            country: "Ecuador",
            type: "player",
            id: "Jorge GUAGUA"
        }, {
            name: "Adnan JANUZAJ",
            short_name: "JANUZAJ",
            team: "Belgium",
            club: "Manchester United FC",
            country: "Belgium",
            type: "player",
            id: "Adnan JANUZAJ"
        }, {
            country: "Italy",
            premier: !0,
            rank: 72,
            country_rank: 9,
            team_count: 7,
            type: "club",
            id: "SS Lazio",
            confederation: "UEFA"
        }, {
            name: "Cristian ZAPATA",
            short_name: "C. ZAPATA",
            team: "Colombia",
            club: "AC Milan",
            country: "Colombia",
            type: "player",
            id: "Cristian ZAPATA"
        }, {
            name: "Mubarak WAKASO",
            short_name: "WAKASO",
            team: "Ghana",
            club: "FC Rubin Kazan",
            country: "Ghana",
            type: "player",
            id: "Mubarak WAKASO"
        }, {
            name: "Eric CHOUPO MOTING",
            short_name: "CHOUPO",
            team: "Cameroon",
            club: "FSV Mainz 05",
            country: "Cameroon",
            type: "player",
            id: "Eric CHOUPO MOTING"
        }, {
            name: "Sebastian COATES",
            short_name: "COATES",
            team: "Uruguay",
            club: "Club Nacional de Football",
            country: "Uruguay",
            type: "player",
            id: "Sebastian COATES"
        }, {
            name: "NEYMAR",
            short_name: "NEYMAR JR",
            team: "Brazil",
            club: "FC Barcelona",
            country: "Brazil",
            type: "player",
            id: "NEYMAR"
        }, {
            name: "Anthony VANDEN BORRE",
            short_name: "VANDEN BORRE",
            team: "Belgium",
            club: "RSC Anderlecht",
            country: "Belgium",
            type: "player",
            id: "Anthony VANDEN BORRE"
        }, {
            name: "Felipe GUTIERREZ",
            short_name: "GUTIÃ‰RREZ",
            team: "Chile",
            club: "FC Twente",
            country: "Chile",
            type: "player",
            id: "Felipe GUTIERREZ"
        }, {
            name: "Esteban PAREDES",
            short_name: "PAREDES",
            team: "Chile",
            club: "CSD Colo-Colo",
            country: "Chile",
            type: "player",
            id: "Esteban PAREDES"
        }, {
            name: "Jan VERTONGHEN",
            short_name: "VERTONGHEN",
            team: "Belgium",
            club: "Tottenham Hotspur FC",
            country: "Belgium",
            type: "player",
            id: "Jan VERTONGHEN"
        }, {
            country: "Germany",
            premier: !0,
            rank: 124,
            country_rank: -1,
            team_count: 3,
            type: "club",
            id: "SC Freiburg",
            confederation: "UEFA"
        }, {
            name: "Mauricio ISLA",
            short_name: "ISLA",
            team: "Chile",
            club: "Juventus FC",
            country: "Chile",
            type: "player",
            id: "Mauricio ISLA"
        }, {
            name: "Alex IBARRA",
            short_name: "IBARRA",
            team: "Ecuador",
            club: "Vitesse Arnheim",
            country: "Ecuador",
            type: "player",
            id: "Alex IBARRA"
        }, {
            name: "Mario GAVRANOVIC",
            short_name: "GAVRANOVIC",
            team: "Switzerland",
            club: "FC Zuerich",
            country: "Switzerland",
            type: "player",
            id: "Mario GAVRANOVIC"
        }, {
            country: "Spain",
            premier: !0,
            rank: 8,
            country_rank: 1,
            team_count: 3,
            type: "club",
            id: "Atletico Madrid",
            confederation: "UEFA"
        }, {
            country: "Australia",
            premier: !1,
            rank: 1410,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Newcastle United Jets FC",
            confederation: "AFC"
        }, {
            name: "Mamadou SAKHO",
            short_name: "SAKHO",
            team: "France",
            club: "Liverpool FC",
            country: "France",
            type: "player",
            id: "Mamadou SAKHO"
        }, {
            country: "Mexico",
            premier: !1,
            rank: 988,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Atlante FC",
            confederation: "CONCACAF"
        }, {
            country: "Sweden",
            premier: !1,
            rank: 243,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "AIK Solna",
            confederation: "UEFA"
        }, {
            country: "Spain",
            premier: !0,
            rank: 94,
            country_rank: 10,
            team_count: 2,
            type: "club",
            id: "Levante UD",
            confederation: "UEFA"
        }, {
            country: "Colombia",
            premier: !0,
            rank: 999,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Deportivo Cali",
            confederation: "CONMEBOL"
        }, {
            name: "Claudio BRAVO",
            short_name: "C. BRAVO",
            team: "Chile",
            club: "Real Sociedad",
            country: "Chile",
            type: "player",
            id: "Claudio BRAVO"
        }, {
            name: "Haris MEDUNJANIN",
            short_name: "MEDUNJANIN",
            team: "Bosnia and Herzegovina",
            club: "Gaziantepspor",
            country: "Bosnia and Herzegovina",
            type: "player",
            id: "Haris MEDUNJANIN"
        }, {
            name: "Martin DEMICHELIS",
            short_name: "DEMICHELIS",
            team: "Argentina",
            club: "Manchester City FC",
            country: "Argentina",
            type: "player",
            id: "Martin DEMICHELIS"
        }, {
            name: "Diego LUGANO",
            short_name: "LUGANO",
            team: "Uruguay",
            club: "West Bromwich Albion FC",
            country: "Uruguay",
            type: "player",
            id: "Diego LUGANO"
        }, {
            country: "Qatar",
            premier: !1,
            rank: 353,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Lekhwiya SC",
            confederation: "AFC"
        }, {
            name: "PARK Chuyoung",
            short_name: "C Y PARK",
            team: "South Korea",
            club: "Watford FC",
            country: "South Korea",
            type: "player",
            id: "PARK Chuyoung"
        }, {
            name: "Stephen ADAMS",
            short_name: "S. ADAMS",
            team: "Ghana",
            club: "Aduana Stars",
            country: "Ghana",
            type: "player",
            id: "Stephen ADAMS"
        }, {
            country: "Italy",
            premier: !0,
            rank: 13,
            country_rank: 3,
            team_count: 8,
            type: "club",
            id: "SSC Napoli",
            confederation: "UEFA"
        }, {
            name: "Jose CHOLEVAS",
            short_name: "CHOLEVAS",
            team: "Greece",
            club: "Olympiacos Piraeus FC",
            country: "Greece",
            type: "player",
            id: "Jose CHOLEVAS"
        }, {
            name: "Cristian GAMBOA",
            short_name: "GAMBOA C.",
            team: "Costa Rica",
            club: "Rosenborg BK",
            country: "Costa Rica",
            type: "player",
            id: "Cristian GAMBOA"
        }, {
            name: "Xherdan SHAQIRI",
            short_name: "SHAQIRI",
            team: "Switzerland",
            club: "FC Bayern Muenchen",
            country: "Switzerland",
            type: "player",
            id: "Xherdan SHAQIRI"
        }, {
            name: "Danijel SUBASIC",
            short_name: "SUBAÅ IÄ†",
            team: "Croatia",
            club: "AS Monaco",
            country: "Croatia",
            type: "player",
            id: "Danijel SUBASIC"
        }, {
            name: "Ehsan HAJI SAFI",
            short_name: "HAJI SAFI",
            team: "Iran",
            club: "Sepahan FC",
            country: "Iran",
            type: "player",
            id: "Ehsan HAJI SAFI"
        }, {
            country: "Iran",
            premier: !1,
            rank: 341,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Perspolis FC",
            confederation: "AFC"
        }, {
            country: "United States",
            premier: !1,
            rank: 386,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Real Salt Lake",
            confederation: "CONCACAF"
        }, {
            name: "YUN Sukyoung",
            short_name: "S Y YUN",
            team: "South Korea",
            club: "Queens Park Rangers FC",
            country: "South Korea",
            type: "player",
            id: "YUN Sukyoung"
        }, {
            country: "Germany",
            premier: !1,
            rank: 412,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "Fortuna Duesseldorf",
            confederation: "UEFA"
        }, {
            name: "Sulley MUNTARI",
            short_name: "MUNTARI",
            team: "Ghana",
            club: "AC Milan",
            country: "Ghana",
            type: "player",
            id: "Sulley MUNTARI"
        }, {
            group: "A",
            country: "Mexico",
            region: "North America",
            type: "team",
            id: "Mexico",
            stage: 1
        }, {
            name: "Stefan DE VRIJ",
            short_name: "DE VRIJ",
            team: "Netherlands",
            club: "Feyenoord Rotterdam",
            country: "Netherlands",
            type: "player",
            id: "Stefan DE VRIJ"
        }, {
            name: "Cristopher TOSELLI",
            short_name: "TOSELLI",
            team: "Chile",
            club: "CD Universidad Catolica",
            country: "Chile",
            type: "player",
            id: "Cristopher TOSELLI"
        }, {
            name: "Zvjezdan MISIMOVIC",
            short_name: "MISIMOVIÄ†",
            team: "Bosnia and Herzegovina",
            club: "Guizhou Renhe FC",
            country: "Bosnia and Herzegovina",
            type: "player",
            id: "Zvjezdan MISIMOVIC"
        }, {
            country: "Germany",
            premier: !0,
            rank: 191,
            country_rank: -1,
            team_count: 4,
            type: "club",
            id: "VfB Stuttgart",
            confederation: "UEFA"
        }, {
            name: "Per MERTESACKER",
            short_name: "MERTESACKER",
            team: "Germany",
            club: "Arsenal FC",
            country: "Germany",
            type: "player",
            id: "Per MERTESACKER"
        }, {
            name: "Konstantinos KATSOURANIS",
            short_name: "KATSOURANIS",
            team: "Greece",
            club: "PAOK FC",
            country: "Greece",
            type: "player",
            id: "Konstantinos KATSOURANIS"
        }, {
            country: "Costa Rica",
            premier: !1,
            rank: 199,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Deportivo Saprissa",
            confederation: "CONCACAF"
        }, {
            country: "Russia",
            premier: !1,
            rank: 183,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "FC Spartak Moscow",
            confederation: "UEFA"
        }, {
            group: "C",
            country: "Greece",
            region: "Europe",
            type: "team",
            id: "Greece",
            stage: 1
        }, {
            country: "Mexico",
            premier: !0,
            rank: 999,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Club Santos Laguna",
            confederation: "CONCACAF"
        }, {
            name: "Federico FERNANDEZ",
            short_name: "FERNANDEZ F.",
            team: "Argentina",
            club: "SSC Napoli",
            country: "Argentina",
            type: "player",
            id: "Federico FERNANDEZ"
        }, {
            name: "Theofanis GEKAS",
            short_name: "GEKAS",
            team: "Greece",
            club: "Konyaspor",
            country: "Greece",
            type: "player",
            id: "Theofanis GEKAS"
        }, {
            name: "Jose CUBERO",
            short_name: "CUBERO J.",
            team: "Costa Rica",
            club: "CS Herediano",
            country: "Costa Rica",
            type: "player",
            id: "Jose CUBERO"
        }, {
            name: "Alexander MEJIA",
            short_name: "A. MEJIA",
            team: "Colombia",
            club: "Atletico Nacional",
            country: "Colombia",
            type: "player",
            id: "Alexander MEJIA"
        }, {
            country: "United States",
            premier: !0,
            rank: 442,
            country_rank: 3,
            team_count: 1,
            type: "club",
            id: "Sporting Kansas City",
            confederation: "CONCACAF"
        }, {
            country: "Brazil",
            premier: !1,
            rank: 294,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "CR Flamengo",
            confederation: "CONMEBOL"
        }, {
            country: "Italy",
            premier: !1,
            rank: 291,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "US Sassuolo",
            confederation: "UEFA"
        }, {
            name: "Stephan LICHTSTEINER",
            short_name: "LICHTSTEINER",
            team: "Switzerland",
            club: "Juventus FC",
            country: "Switzerland",
            type: "player",
            id: "Stephan LICHTSTEINER"
        }, {
            country: "Norway",
            premier: !1,
            rank: 719,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Aalesunds FK",
            confederation: "UEFA"
        }, {
            name: "Waylon FRANCIS",
            short_name: "FRANCIS W.",
            team: "Costa Rica",
            club: "Columbus Crew",
            country: "Costa Rica",
            type: "player",
            id: "Waylon FRANCIS"
        }, {
            country: "Mexico",
            premier: !1,
            rank: 114,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Club Leon",
            confederation: "CONCACAF"
        }, {
            name: "Hiroshi KIYOTAKE",
            short_name: "KIYOTAKE",
            team: "Japan",
            club: "1. FC Nuernberg",
            country: "Japan",
            type: "player",
            id: "Hiroshi KIYOTAKE"
        }, {
            name: "DaMarcus BEASLEY",
            short_name: "BEASLEY",
            team: "USA",
            club: "Puebla FC",
            country: "USA",
            type: "player",
            id: "DaMarcus BEASLEY"
        }, {
            country: "United Arab Emirates",
            premier: !1,
            rank: 456,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Al Jazira SCC",
            confederation: "AFC"
        }, {
            name: "Mark BRESCIANO",
            short_name: "BRESCIANO",
            team: "Australia",
            club: "Al Gharafa SC",
            country: "Australia",
            type: "player",
            id: "Mark BRESCIANO"
        }, {
            country: "Nigeria",
            premier: !1,
            rank: 696,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Warri Wolves FC",
            confederation: "CAF"
        }, {
            country: "Greece",
            premier: !1,
            rank: 130,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "PAOK FC",
            confederation: "UEFA"
        }, {
            name: "Felipe CAICEDO",
            short_name: "CAICEDO",
            team: "Ecuador",
            club: "Al Jazira SCC",
            country: "Ecuador",
            type: "player",
            id: "Felipe CAICEDO"
        }, {
            country: "Spain",
            premier: !1,
            rank: 177,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Elche CF",
            confederation: "UEFA"
        }, {
            name: "Konstantinos MANOLAS",
            short_name: "MANOLAS",
            team: "Greece",
            club: "Olympiacos Piraeus FC",
            country: "Greece",
            type: "player",
            id: "Konstantinos MANOLAS"
        }, {
            country: "Spain",
            premier: !0,
            rank: 292,
            country_rank: 15,
            team_count: 3,
            type: "club",
            id: "Granada CF",
            confederation: "UEFA"
        }, {
            group: "G",
            country: "Ghana",
            region: "Africa",
            type: "team",
            id: "Ghana",
            stage: 0
        }, {
            name: "Izet HAJROVIC",
            short_name: "HAJROVIÄ†",
            team: "Bosnia and Herzegovina",
            club: "Galatasaray SK",
            country: "Bosnia and Herzegovina",
            type: "player",
            id: "Izet HAJROVIC"
        }, {
            country: "Italy",
            premier: !0,
            rank: 48,
            country_rank: 6,
            team_count: 3,
            type: "club",
            id: "Parma FC",
            confederation: "UEFA"
        }, {
            name: "Johnny ACOSTA",
            short_name: "ACOSTA J.",
            team: "Costa Rica",
            club: "LD Alajuelense",
            country: "Costa Rica",
            type: "player",
            id: "Johnny ACOSTA"
        }, {
            name: "Romelu LUKAKU",
            short_name: "LUKAKU",
            team: "Belgium",
            club: "Everton FC",
            country: "Belgium",
            type: "player",
            id: "Romelu LUKAKU"
        }, {
            name: "Javier MASCHERANO",
            short_name: "MASCHERANO",
            team: "Argentina",
            club: "FC Barcelona",
            country: "Argentina",
            type: "player",
            id: "Javier MASCHERANO"
        }, {
            country: "China PR",
            premier: !1,
            rank: 455,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Shandong Luneng Taishan FC",
            confederation: "AFC"
        }, {
            name: "Lionel MESSI",
            short_name: "MESSI",
            team: "Argentina",
            club: "FC Barcelona",
            country: "Argentina",
            type: "player",
            id: "Lionel MESSI"
        }, {
            country: "Tunisia",
            premier: !1,
            rank: 110,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Esperance Sportive de Tunis",
            confederation: "CAF"
        }, {
            name: "Augusto FERNANDEZ",
            short_name: "FERNANDEZ A.",
            team: "Argentina",
            club: "Celta Vigo",
            country: "Argentina",
            type: "player",
            id: "Augusto FERNANDEZ"
        }, {
            name: "Aleksandr KERZHAKOV",
            short_name: "KERZHAKOV",
            team: "Russia",
            club: "FC Zenit St. Petersburg",
            country: "Russia",
            type: "player",
            id: "Aleksandr KERZHAKOV"
        }, {
            name: "Heiner MORA",
            short_name: "MORA H.",
            team: "Costa Rica",
            club: "Deportivo Saprissa",
            country: "Costa Rica",
            type: "player",
            id: "Heiner MORA"
        }, {
            country: "Austria",
            premier: !1,
            rank: 685,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "SK Sturm Graz",
            confederation: "UEFA"
        }, {
            name: "Geoff CAMERON",
            short_name: "CAMERON",
            team: "USA",
            club: "Stoke City FC",
            country: "USA",
            type: "player",
            id: "Geoff CAMERON"
        }, {
            name: "Sergio BUSQUETS",
            short_name: "SERGIO",
            team: "Spain",
            club: "FC Barcelona",
            country: "Spain",
            type: "player",
            id: "Sergio BUSQUETS"
        }, {
            name: "Roy MILLER",
            short_name: "MILLER R.",
            team: "Costa Rica",
            club: "New York Red Bulls",
            country: "Costa Rica",
            type: "player",
            id: "Roy MILLER"
        }, {
            group: "B",
            country: "Spain",
            region: "Europe",
            type: "team",
            id: "Spain",
            stage: 0
        }, {
            name: "Asmir BEGOVIC",
            short_name: "BEGOVIÄ†",
            team: "Bosnia and Herzegovina",
            club: "Stoke City FC",
            country: "Bosnia and Herzegovina",
            type: "player",
            id: "Asmir BEGOVIC"
        }, {
            country: "Ivory Coast",
            premier: !1,
            rank: 351,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Sewe Sport",
            confederation: "CAF"
        }, {
            name: "David SILVA",
            short_name: "SILVA",
            team: "Spain",
            club: "Manchester City FC",
            country: "Spain",
            type: "player",
            id: "David SILVA"
        }, {
            country: "England",
            premier: !0,
            rank: 4,
            country_rank: 10,
            team_count: 7,
            type: "club",
            id: "Manchester City FC",
            confederation: "UEFA"
        }, {
            name: "Ghasem HADADIFAR",
            short_name: "GHASEM. H",
            team: "Iran",
            club: "Zob Ahan Isfahan FC",
            country: "Iran",
            type: "player",
            id: "Ghasem HADADIFAR"
        }, {
            name: "Gabriel PALETTA",
            short_name: "PALETTA",
            team: "Italy",
            club: "Parma FC",
            country: "Italy",
            type: "player",
            id: "Gabriel PALETTA"
        }, {
            name: "Claudio MARCHISIO",
            short_name: "MARCHISIO",
            team: "Italy",
            club: "Juventus FC",
            country: "Italy",
            type: "player",
            id: "Claudio MARCHISIO"
        }, {
            country: "France",
            premier: !1,
            rank: 716,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "AC Ajaccio",
            confederation: "UEFA"
        }, {
            name: "Mathis BOLLY",
            short_name: "BOLLY",
            team: "Ivory Coast",
            club: "Fortuna Duesseldorf",
            country: "Ivory Coast",
            type: "player",
            id: "Mathis BOLLY"
        }, {
            country: "Japan",
            premier: !1,
            rank: 295,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "Sanfrecce Hiroshima",
            confederation: "AFC"
        }, {
            name: "Gonzalo HIGUAIN",
            short_name: "HIGUAIN",
            team: "Argentina",
            club: "SSC Napoli",
            country: "Argentina",
            type: "player",
            id: "Gonzalo HIGUAIN"
        }, {
            country: "Hungary",
            premier: !1,
            rank: 453,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Ferencvarosi TC",
            confederation: "UEFA"
        }, {
            name: "Johnny HERRERA",
            short_name: "HERRERA",
            team: "Chile",
            club: "Club Universidad de Chile",
            country: "Chile",
            type: "player",
            id: "Johnny HERRERA"
        }, {
            name: "Bailey WRIGHT",
            short_name: "WRIGHT",
            team: "Australia",
            club: "Preston North End FC",
            country: "Australia",
            type: "player",
            id: "Bailey WRIGHT"
        }, {
            name: "KI Sungyueng",
            short_name: "S Y KI",
            team: "South Korea",
            club: "Sunderland AFC",
            country: "South Korea",
            type: "player",
            id: "KI Sungyueng"
        }, {
            country: "Netherlands",
            premier: !1,
            rank: 198,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "AZ Alkmaar",
            confederation: "UEFA"
        }, {
            name: "Kenneth OMERUO",
            short_name: "OMERUO",
            team: "Nigeria",
            club: "Middlesbrough FC",
            country: "Nigeria",
            type: "player",
            id: "Kenneth OMERUO"
        }, {
            country: "France",
            premier: !1,
            rank: 55,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Olympique Lyonnais",
            confederation: "UEFA"
        }, {
            name: "Ahmed MUSA",
            short_name: "MUSA",
            team: "Nigeria",
            club: "CSKA Moscow",
            country: "Nigeria",
            type: "player",
            id: "Ahmed MUSA"
        }, {
            country: "England",
            premier: !0,
            rank: 112,
            country_rank: 17,
            team_count: 2,
            type: "club",
            id: "Swansea City AFC",
            confederation: "UEFA"
        }, {
            name: "Arturo VIDAL",
            short_name: "VIDAL",
            team: "Chile",
            club: "Juventus FC",
            country: "Chile",
            type: "player",
            id: "Arturo VIDAL"
        }, {
            name: "Rui PATRICIO",
            short_name: "RUI PATRICIO",
            team: "Portugal",
            club: "Sporting CP",
            country: "Portugal",
            type: "player",
            id: "Rui PATRICIO"
        }, {
            name: "Lucas DIGNE",
            short_name: "DIGNE",
            team: "France",
            club: "Paris Saint-Germain FC",
            country: "France",
            type: "player",
            id: "Lucas DIGNE"
        }, {
            country: "Costa Rica",
            premier: !1,
            rank: 240,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "LD Alajuelense",
            confederation: "CONCACAF"
        }, {
            name: "Hugo ALMEIDA",
            short_name: "H. ALMEIDA",
            team: "Portugal",
            club: "Besiktas JK",
            country: "Portugal",
            type: "player",
            id: "Hugo ALMEIDA"
        }, {
            country: "United States",
            premier: !0,
            rank: 621,
            country_rank: 8,
            team_count: 2,
            type: "club",
            id: "San Jose Earthquakes",
            confederation: "CONCACAF"
        }, {
            country: "Italy",
            premier: !0,
            rank: 57,
            country_rank: 7,
            team_count: 2,
            type: "club",
            id: "Torino FC",
            confederation: "UEFA"
        }, {
            name: "Jaimen AYOVI",
            short_name: "J. AYOVI",
            team: "Ecuador",
            club: "Club Tijuana",
            country: "Ecuador",
            type: "player",
            id: "Jaimen AYOVI"
        }, {
            name: "Andres INIESTA",
            short_name: "A. INIESTA",
            team: "Spain",
            club: "FC Barcelona",
            country: "Spain",
            type: "player",
            id: "Andres INIESTA"
        }, {
            name: "Enzo PEREZ",
            short_name: "PEREZ",
            team: "Argentina",
            club: "SL Benfica",
            country: "Argentina",
            type: "player",
            id: "Enzo PEREZ"
        }, {
            country: "Costa Rica",
            premier: !1,
            rank: 209,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "CS Herediano",
            confederation: "CONCACAF"
        }, {
            name: "Alex WILKINSON",
            short_name: "WILKINSON",
            team: "Australia",
            club: "Jeonbuk Hyundai Motors FC",
            country: "Australia",
            type: "player",
            id: "Alex WILKINSON"
        }, {
            name: "Stipe PLETIKOSA",
            short_name: "PLETIKOSA",
            team: "Croatia",
            club: "FC Rostov",
            country: "Croatia",
            type: "player",
            id: "Stipe PLETIKOSA"
        }, {
            name: "Denis GLUSHAKOV",
            short_name: "GLUSHAKOV",
            team: "Russia",
            club: "FC Spartak Moscow",
            country: "Russia",
            type: "player",
            id: "Denis GLUSHAKOV"
        }, {
            name: "Yasuhito ENDO",
            short_name: "ENDO",
            team: "Japan",
            club: "Gamba Osaka",
            country: "Japan",
            type: "player",
            id: "Yasuhito ENDO"
        }, {
            name: "Nabil BENTALEB",
            short_name: "BENTALEB",
            team: "Algeria",
            club: "Tottenham Hotspur FC",
            country: "Algeria",
            type: "player",
            id: "Nabil BENTALEB"
        }, {
            country: "Russia",
            premier: !1,
            rank: 131,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "FC Rubin Kazan",
            confederation: "UEFA"
        }, {
            country: "Turkey",
            premier: !1,
            rank: 53,
            country_rank: -1,
            team_count: 4,
            type: "club",
            id: "Fenerbahce SK",
            confederation: "UEFA"
        }, {
            name: "Dirk KUYT",
            short_name: "KUYT",
            team: "Netherlands",
            club: "Fenerbahce SK",
            country: "Netherlands",
            type: "player",
            id: "Dirk KUYT"
        }, {
            country: "Russia",
            premier: !1,
            rank: 61,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "CSKA Moscow",
            confederation: "UEFA"
        }, {
            country: "Honduras",
            premier: !1,
            rank: 795,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "CD Motagua",
            confederation: "CONCACAF"
        }, {
            name: "Clint DEMPSEY",
            short_name: "DEMPSEY",
            team: "USA",
            club: "Seattle Sounders FC",
            country: "USA",
            type: "player",
            id: "Clint DEMPSEY"
        }, {
            country: "Switzerland",
            premier: !1,
            rank: 652,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "FC Sion",
            confederation: "UEFA"
        }, {
            name: "HULK",
            short_name: "HULK",
            team: "Brazil",
            club: "FC Zenit St. Petersburg",
            country: "Brazil",
            type: "player",
            id: "HULK"
        }, {
            name: "Abdelmoumene DJABOU",
            short_name: "DJABOU",
            team: "Algeria",
            club: "Club Africain",
            country: "Algeria",
            type: "player",
            id: "Abdelmoumene DJABOU"
        }, {
            name: "Matt McKAY",
            short_name: "MCKAY",
            team: "Australia",
            club: "Brisbane Roar FC",
            country: "Australia",
            type: "player",
            id: "Matt McKAY"
        }, {
            name: "Asmir AVDUKIC",
            short_name: "AVDUKIÄ†",
            team: "Bosnia and Herzegovina",
            club: "FK Borac Banja Luka",
            country: "Bosnia and Herzegovina",
            type: "player",
            id: "Asmir AVDUKIC"
        }, {
            country: "Italy",
            premier: !1,
            rank: 310,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "US Citta di Palermo",
            confederation: "UEFA"
        }, {
            name: "Julian DRAXLER",
            short_name: "DRAXLER",
            team: "Germany",
            club: "FC Schalke 04",
            country: "Germany",
            type: "player",
            id: "Julian DRAXLER"
        }, {
            country: "Belgium",
            premier: !1,
            rank: 349,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "KSC Lokeren",
            confederation: "UEFA"
        }, {
            name: "Edder DELGADO",
            short_name: "DELGADO",
            team: "Honduras",
            club: "Real Espana",
            country: "Honduras",
            type: "player",
            id: "Edder DELGADO"
        }, {
            name: "Yuto NAGATOMO",
            short_name: "NAGATOMO",
            team: "Japan",
            club: "FC Internazionale",
            country: "Japan",
            type: "player",
            id: "Yuto NAGATOMO"
        }, {
            name: "HA Daesung",
            short_name: "D S HA",
            team: "South Korea",
            club: "Beijing Guoan",
            country: "South Korea",
            type: "player",
            id: "HA Daesung"
        }, {
            name: "Patrice EVRA",
            short_name: "EVRA",
            team: "France",
            club: "Manchester United FC",
            country: "France",
            type: "player",
            id: "Patrice EVRA"
        }, {
            name: "Giorgio CHIELLINI",
            short_name: "CHIELLINI",
            team: "Italy",
            club: "Juventus FC",
            country: "Italy",
            type: "player",
            id: "Giorgio CHIELLINI"
        }, {
            name: "OSCAR",
            short_name: "OSCAR",
            team: "Brazil",
            club: "Chelsea FC",
            country: "Brazil",
            type: "player",
            id: "OSCAR"
        }, {
            country: "Bosnia and Herzegovina",
            premier: !1,
            rank: 655,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "FK Borac Banja Luka",
            confederation: "UEFA"
        }, {
            name: "Georginio WIJNALDUM",
            short_name: "WIJNALDUM",
            team: "Netherlands",
            club: "PSV Eindhoven",
            country: "Netherlands",
            type: "player",
            id: "Georginio WIJNALDUM"
        }, {
            name: "Cesc FABREGAS",
            short_name: "FÃBREGAS",
            team: "Spain",
            club: "FC Barcelona",
            country: "Spain",
            type: "player",
            id: "Cesc FABREGAS"
        }, {
            name: "Ioannis MANIATIS",
            short_name: "MANIATIS",
            team: "Greece",
            club: "Olympiacos Piraeus FC",
            country: "Greece",
            type: "player",
            id: "Ioannis MANIATIS"
        }, {
            name: "Marcelo DIAZ",
            short_name: "DIAZ",
            team: "Chile",
            club: "FC Basel",
            country: "Chile",
            type: "player",
            id: "Marcelo DIAZ"
        }, {
            name: "Rodrigo PALACIO",
            short_name: "PALACIO",
            team: "Argentina",
            club: "FC Internazionale",
            country: "Argentina",
            type: "player",
            id: "Rodrigo PALACIO"
        }, {
            country: "England",
            premier: !1,
            rank: 614,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "Cardiff City FC",
            confederation: "UEFA"
        }, {
            name: "Masoud SHOJAEI",
            short_name: "MASOUD. SH",
            team: "Iran",
            club: "UD Las Palmas",
            country: "Iran",
            type: "player",
            id: "Masoud SHOJAEI"
        }, {
            name: "Charles ITANDJE",
            short_name: "ITANJDE",
            team: "Cameroon",
            club: "Konyaspor",
            country: "Cameroon",
            type: "player",
            id: "Charles ITANDJE"
        }, {
            country: "South Korea",
            premier: !1,
            rank: 0,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Suwon Bluewings FC",
            confederation: "AFC"
        }, {
            name: "Mensur MUJDZA",
            short_name: "MUJDÅ½A",
            team: "Bosnia and Herzegovina",
            club: "SC Freiburg",
            country: "Bosnia and Herzegovina",
            type: "player",
            id: "Mensur MUJDZA"
        }, {
            name: "Klaas Jan HUNTELAAR",
            short_name: "HUNTELAAR",
            team: "Netherlands",
            club: "FC Schalke 04",
            country: "Netherlands",
            type: "player",
            id: "Klaas Jan HUNTELAAR"
        }, {
            country: "Canada",
            premier: !0,
            rank: 1256,
            country_rank: 4,
            team_count: 2,
            type: "club",
            id: "Toronto FC",
            confederation: "CONCACAF"
        }, {
            name: "Michael ESSIEN",
            short_name: "ESSIEN",
            team: "Ghana",
            club: "AC Milan",
            country: "Ghana",
            type: "player",
            id: "Michael ESSIEN"
        }, {
            country: "Turkey",
            premier: !1,
            rank: 545,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "Caykur Rizespor",
            confederation: "UEFA"
        }, {
            name: "Faouzi GHOULAM",
            short_name: "GHOULAM",
            team: "Algeria",
            club: "SSC Napoli",
            country: "Algeria",
            type: "player",
            id: "Faouzi GHOULAM"
        }, {
            name: "Gaston RAMIREZ",
            short_name: "RAMIREZ",
            team: "Uruguay",
            club: "Southampton FC",
            country: "Uruguay",
            type: "player",
            id: "Gaston RAMIREZ"
        }, {
            country: "Japan",
            premier: !0,
            rank: 357,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "Cerezo Osaka",
            confederation: "AFC"
        }, {
            name: "Dejan LOVREN",
            short_name: "LOVREN",
            team: "Croatia",
            club: "Southampton FC",
            country: "Croatia",
            type: "player",
            id: "Dejan LOVREN"
        }, {
            name: "Daniel CAMBRONERO",
            short_name: "CAMBRONERO D.",
            team: "Costa Rica",
            club: "CS Herediano",
            country: "Costa Rica",
            type: "player",
            id: "Daniel CAMBRONERO"
        }, {
            name: "Vasily BEREZUTSKIY",
            short_name: "BEREZUTSKIY V.",
            team: "Russia",
            club: "CSKA Moscow",
            country: "Russia",
            type: "player",
            id: "Vasily BEREZUTSKIY"
        }, {
            name: "Remy CABELLA",
            short_name: "CABELLA",
            team: "France",
            club: "Montpellier HSC",
            country: "France",
            type: "player",
            id: "Remy CABELLA"
        }, {
            country: "Germany",
            premier: !0,
            rank: 381,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "Eintracht Braunschweig",
            confederation: "UEFA"
        }, {
            name: "Georgios KARAGOUNIS",
            short_name: "KARAGOUNIS",
            team: "Greece",
            club: "Fulham FC",
            country: "Greece",
            type: "player",
            id: "Georgios KARAGOUNIS"
        }, {
            name: "Makoto HASEBE",
            short_name: "HASEBE",
            team: "Japan",
            club: "1. FC Nuernberg",
            country: "Japan",
            type: "player",
            id: "Makoto HASEBE"
        }, {
            name: "Frank LAMPARD",
            short_name: "LAMPARD",
            team: "England",
            club: "Chelsea FC",
            country: "England",
            type: "player",
            id: "Frank LAMPARD"
        }, {
            country: "Germany",
            premier: !0,
            rank: 223,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "Hertha BSC",
            confederation: "UEFA"
        }, {
            name: "James MILNER",
            short_name: "MILNER",
            team: "England",
            club: "Manchester City FC",
            country: "England",
            type: "player",
            id: "James MILNER"
        }, {
            name: "Marouane FELLAINI",
            short_name: "FELLAINI",
            team: "Belgium",
            club: "Manchester United FC",
            country: "Belgium",
            type: "player",
            id: "Marouane FELLAINI"
        }, {
            name: "Eder BALANTA",
            short_name: "A. BALANTA",
            team: "Colombia",
            club: "CA River Plate",
            country: "Colombia",
            type: "player",
            id: "Eder BALANTA"
        }, {
            country: "South Korea",
            premier: !1,
            rank: 1741,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Sangju Sangmu FC",
            confederation: "AFC"
        }, {
            name: "Patrick PEMBERTON",
            short_name: "PEMBERTON P.",
            team: "Costa Rica",
            club: "LD Alajuelense",
            country: "Costa Rica",
            type: "player",
            id: "Patrick PEMBERTON"
        }, {
            name: "Ciro IMMOBILE",
            short_name: "IMMOBILE",
            team: "Italy",
            club: "Torino FC",
            country: "Italy",
            type: "player",
            id: "Ciro IMMOBILE"
        }, {
            country: "England",
            premier: !1,
            rank: 0,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "Middlesbrough FC",
            confederation: "UEFA"
        }, {
            country: "England",
            premier: !1,
            rank: 163,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "Sunderland AFC",
            confederation: "UEFA"
        }, {
            country: "Ecuador",
            premier: !1,
            rank: 285,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Barcelona SC",
            confederation: "CONMEBOL"
        }, {
            country: "Algeria",
            premier: !1,
            rank: 290,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "USM Alger",
            confederation: "CAF"
        }, {
            name: "Kevin DE BRUYNE",
            short_name: "DE BRUYNE",
            team: "Belgium",
            club: "VfL Wolfsburg",
            country: "Belgium",
            type: "player",
            id: "Kevin DE BRUYNE"
        }, {
            country: "England",
            premier: !1,
            rank: 249,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "West Bromwich Albion FC",
            confederation: "UEFA"
        }, {
            name: "Ogenyi ONAZI",
            short_name: "ONAZI",
            team: "Nigeria",
            club: "SS Lazio",
            country: "Nigeria",
            type: "player",
            id: "Ogenyi ONAZI"
        }, {
            name: "Giovani DOS SANTOS",
            short_name: "G DOS SANTOS",
            team: "Mexico",
            club: "Villarreal CF",
            country: "Mexico",
            type: "player",
            id: "Giovani DOS SANTOS"
        }, {
            country: "Italy",
            premier: !0,
            rank: 266,
            country_rank: 18,
            team_count: 1,
            type: "club",
            id: "Calcio Catania",
            confederation: "UEFA"
        }, {
            name: "Andres GUARDADO",
            short_name: "A GUARDADO",
            team: "Mexico",
            club: "Bayer 04 Leverkusen",
            country: "Mexico",
            type: "player",
            id: "Andres GUARDADO"
        }, {
            group: "A",
            country: "Brazil",
            region: "South America",
            type: "team",
            id: "Brazil",
            stage: 3
        }, {
            name: "Panagiotis KONE",
            short_name: "KONE",
            team: "Greece",
            club: "Bologna FC",
            country: "Greece",
            type: "player",
            id: "Panagiotis KONE"
        }, {
            country: "France",
            premier: !1,
            rank: 32,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "AS Saint-Etienne",
            confederation: "UEFA"
        }, {
            country: "United States",
            premier: !0,
            rank: 650,
            country_rank: 5,
            team_count: 2,
            type: "club",
            id: "New York Red Bulls",
            confederation: "CONCACAF"
        }, {
            country: "Italy",
            premier: !0,
            rank: 145,
            country_rank: 11,
            team_count: 2,
            type: "club",
            id: "Atalanta Bergamo",
            confederation: "UEFA"
        }, {
            name: "Massimo LUONGO",
            short_name: "LUONGO",
            team: "Australia",
            club: "Swindon Town FC",
            country: "Australia",
            type: "player",
            id: "Massimo LUONGO"
        }, {
            country: "England",
            premier: !1,
            rank: 342,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "Norwich City FC",
            confederation: "UEFA"
        }, {
            country: "Greece",
            premier: !1,
            rank: 22,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "Olympiacos Piraeus FC",
            confederation: "UEFA"
        }, {
            country: "Italy",
            premier: !0,
            rank: 136,
            country_rank: 13,
            team_count: 2,
            type: "club",
            id: "Udinese Calcio",
            confederation: "UEFA"
        }, {
            name: "Bruno MARTINS INDI",
            short_name: "MARTINS INDI",
            team: "Netherlands",
            club: "Feyenoord Rotterdam",
            country: "Netherlands",
            type: "player",
            id: "Bruno MARTINS INDI"
        }, {
            name: "Daley BLIND",
            short_name: "BLIND",
            team: "Netherlands",
            club: "AFC Ajax",
            country: "Netherlands",
            type: "player",
            id: "Daley BLIND"
        }, {
            name: "Medhi LACEN",
            short_name: "LACEN",
            team: "Algeria",
            club: "Getafe CF",
            country: "Algeria",
            type: "player",
            id: "Medhi LACEN"
        }, {
            group: "F",
            country: "Iran",
            region: "Asia",
            type: "team",
            id: "Iran",
            stage: 0
        }, {
            name: "Rashid SUMAILA",
            short_name: "SUMAILA",
            team: "Ghana",
            club: "Mamelodi Sundowns FC",
            country: "Ghana",
            type: "player",
            id: "Rashid SUMAILA"
        }, {
            group: "H",
            country: "Algeria",
            region: "Africa",
            type: "team",
            id: "Algeria",
            stage: 1
        }, {
            name: "Diego BENAGLIO",
            short_name: "BENAGLIO",
            team: "Switzerland",
            club: "VfL Wolfsburg",
            country: "Switzerland",
            type: "player",
            id: "Diego BENAGLIO"
        }, {
            country: "Russia",
            premier: !1,
            rank: 515,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "FC Rostov",
            confederation: "UEFA"
        }, {
            name: "LEE Keunho",
            short_name: "K H LEE",
            team: "South Korea",
            club: "Sangju Sangmu FC",
            country: "South Korea",
            type: "player",
            id: "LEE Keunho"
        }, {
            country: "Germany",
            premier: !0,
            rank: 23,
            country_rank: -1,
            team_count: 5,
            type: "club",
            id: "VfL Wolfsburg",
            confederation: "UEFA"
        }, {
            name: "Noel VALLADARES",
            short_name: "VALLADARES",
            team: "Honduras",
            club: "CD Olimpia",
            country: "Honduras",
            type: "player",
            id: "Noel VALLADARES"
        }, {
            country: "Tunisia",
            premier: !1,
            rank: 428,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Club Africain",
            confederation: "CAF"
        }, {
            name: "Oscar BAGUI",
            short_name: "BAGUI",
            team: "Ecuador",
            club: "CS Emelec",
            country: "Ecuador",
            type: "player",
            id: "Oscar BAGUI"
        }, {
            group: "H",
            country: "Belgium",
            region: "Europe",
            type: "team",
            id: "Belgium",
            stage: 2
        }, {
            name: "Miiko ALBORNOZ",
            short_name: "ALBORNOZ",
            team: "Chile",
            club: "Malmo FF",
            country: "Chile",
            type: "player",
            id: "Miiko ALBORNOZ"
        }, {
            country: "England",
            premier: !0,
            rank: 16,
            country_rank: 6,
            team_count: 3,
            type: "club",
            id: "Everton FC",
            confederation: "UEFA"
        }, {
            name: "Gotoku SAKAI",
            short_name: "G. SAKAI",
            team: "Japan",
            club: "VfB Stuttgart",
            country: "Japan",
            type: "player",
            id: "Gotoku SAKAI"
        }, {
            name: "HENRIQUE",
            short_name: "HENRIQUE",
            team: "Brazil",
            club: "SSC Napoli",
            country: "Brazil",
            type: "player",
            id: "HENRIQUE"
        }, {
            name: "Acquah AFRIYIE",
            short_name: "ACQUAH",
            team: "Ghana",
            club: "Parma FC",
            country: "Ghana",
            type: "player",
            id: "Acquah AFRIYIE"
        }, {
            country: "Mexico",
            premier: !1,
            rank: 263,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Club Tijuana",
            confederation: "CONCACAF"
        }, {
            name: "Yaya TOURE",
            short_name: "TOURE YAYA",
            team: "Ivory Coast",
            club: "Manchester City FC",
            country: "Ivory Coast",
            type: "player",
            id: "Yaya TOURE"
        }, {
            name: "MAICON",
            short_name: "MAICON",
            team: "Brazil",
            club: "AS Roma",
            country: "Brazil",
            type: "player",
            id: "MAICON"
        }, {
            country: "Italy",
            premier: !0,
            rank: 15,
            country_rank: 2,
            team_count: 5,
            type: "club",
            id: "AS Roma",
            confederation: "UEFA"
        }, {
            name: "Alberto AQUILANI",
            short_name: "AQUILANI",
            team: "Italy",
            club: "ACF Fiorentina",
            country: "Italy",
            type: "player",
            id: "Alberto AQUILANI"
        }, {
            name: "Gerard PIQUE",
            short_name: "PIQUÃ‰",
            team: "Spain",
            club: "FC Barcelona",
            country: "Spain",
            type: "player",
            id: "Gerard PIQUE"
        }, {
            name: "LEE Yong",
            short_name: "Y LEE",
            team: "South Korea",
            club: "Ulsan Hyundai FC",
            country: "South Korea",
            type: "player",
            id: "LEE Yong"
        }, {
            name: "Marcos URENA",
            short_name: "UREÃ‘A M.",
            team: "Costa Rica",
            club: "Kuban Krasnodar",
            country: "Costa Rica",
            type: "player",
            id: "Marcos URENA"
        }, {
            name: "Allan NYOM",
            short_name: "NYOM",
            team: "Cameroon",
            club: "Granada CF",
            country: "Cameroon",
            type: "player",
            id: "Allan NYOM"
        }, {
            country: "Germany",
            premier: !1,
            rank: 0,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "VfR Aalen",
            confederation: "UEFA"
        }, {
            name: "Konan YA",
            short_name: "YA KONAN",
            team: "Ivory Coast",
            club: "Hannover 96",
            country: "Ivory Coast",
            type: "player",
            id: "Konan YA"
        }, {
            name: "Diego FORLAN",
            short_name: "FORLAN",
            team: "Uruguay",
            club: "Cerezo Osaka",
            country: "Uruguay",
            type: "player",
            id: "Diego FORLAN"
        }, {
            country: "Turkey",
            premier: !1,
            rank: 751,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Antalyaspor AS",
            confederation: "UEFA"
        }, {
            name: "Martin SILVA",
            short_name: "SILVA",
            team: "Uruguay",
            club: "CR Vasco da Gama",
            country: "Uruguay",
            type: "player",
            id: "Martin SILVA"
        }, {
            name: "Mohamed ZEMMAMOUCHE",
            short_name: "ZEMMAMOUCHE",
            team: "Algeria",
            club: "USM Alger",
            country: "Algeria",
            type: "player",
            id: "Mohamed ZEMMAMOUCHE"
        }, {
            name: "Danijel PRANJIC",
            short_name: "PRANJIÄ†",
            team: "Croatia",
            club: "Panathinaikos FC",
            country: "Croatia",
            type: "player",
            id: "Danijel PRANJIC"
        }, {
            name: "BETO",
            short_name: "BETO",
            team: "Portugal",
            club: "Sevilla FC",
            country: "Portugal",
            type: "player",
            id: "BETO"
        }, {
            country: "Algeria",
            premier: !1,
            rank: 705,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "CS Constantine",
            confederation: "CAF"
        }, {
            name: "Jose Maria BASANTA",
            short_name: "BASANTA",
            team: "Argentina",
            club: "CF Monterrey",
            country: "Argentina",
            type: "player",
            id: "Jose Maria BASANTA"
        }, {
            name: "Vedad IBISEVIC",
            short_name: "IBIÅ EVIÄ†",
            team: "Bosnia and Herzegovina",
            club: "VfB Stuttgart",
            country: "Bosnia and Herzegovina",
            type: "player",
            id: "Vedad IBISEVIC"
        }, {
            name: "Uche NWOFOR",
            short_name: "NWOFOR",
            team: "Nigeria",
            club: "SC Heerenveen",
            country: "Nigeria",
            type: "player",
            id: "Uche NWOFOR"
        }, {
            name: "James TROISI",
            short_name: "TROISI",
            team: "Australia",
            club: "Melbourne Victory FC",
            country: "Australia",
            type: "player",
            id: "James TROISI"
        }, {
            name: "Donis ESCOBER",
            short_name: "ESCOBER",
            team: "Honduras",
            club: "CD Olimpia",
            country: "Honduras",
            type: "player",
            id: "Donis ESCOBER"
        }, {
            name: "Rahman AHMADI",
            short_name: "R. AHMADI",
            team: "Iran",
            club: "Sepahan FC",
            country: "Iran",
            type: "player",
            id: "Rahman AHMADI"
        }, {
            name: "Joao PEREIRA",
            short_name: "J. PEREIRA",
            team: "Portugal",
            club: "Valencia CF",
            country: "Portugal",
            type: "player",
            id: "Joao PEREIRA"
        }, {
            country: "Turkey",
            premier: !1,
            rank: 784,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Elazigspor",
            confederation: "UEFA"
        }, {
            country: "Switzerland",
            premier: !1,
            rank: 380,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "BSC Young Boys",
            confederation: "UEFA"
        }, {
            name: "Manabu SAITO",
            short_name: "SAITO",
            team: "Japan",
            club: "Yokohama F-Marinos",
            country: "Japan",
            type: "player",
            id: "Manabu SAITO"
        }, {
            name: "Jorge CLAROS",
            short_name: "CLAROS",
            team: "Honduras",
            club: "CD Motagua",
            country: "Honduras",
            type: "player",
            id: "Jorge CLAROS"
        }, {
            name: "Vangelis MORAS",
            short_name: "MORAS",
            team: "Greece",
            club: "Hellas Verona FC",
            country: "Greece",
            type: "player",
            id: "Vangelis MORAS"
        }, {
            name: "Ben FOSTER",
            short_name: "FOSTER",
            team: "England",
            club: "West Bromwich Albion FC",
            country: "England",
            type: "player",
            id: "Ben FOSTER"
        }, {
            name: "Oliver ZELENIKA",
            short_name: "ZELENIKA",
            team: "Croatia",
            club: "NK Lokomotiva Zagreb",
            country: "Croatia",
            type: "player",
            id: "Oliver ZELENIKA"
        }, {
            name: "Cedric DJEUGOUE",
            short_name: "DJEUGOUE",
            team: "Cameroon",
            club: "Coton Sport FC",
            country: "Cameroon",
            type: "player",
            id: "Cedric DJEUGOUE"
        }, {
            country: "Portugal",
            premier: !1,
            rank: 999,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Sporting Covilha",
            confederation: "UEFA"
        }, {
            country: "Norway",
            premier: !1,
            rank: 176,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "Rosenborg BK",
            confederation: "UEFA"
        }, {
            name: "Boubacar BARRY",
            short_name: "BARRY COPA",
            team: "Ivory Coast",
            club: "KSC Lokeren",
            country: "Ivory Coast",
            type: "player",
            id: "Boubacar BARRY"
        }, {
            name: "Oscar DUARTE",
            short_name: "DUARTE O.",
            team: "Costa Rica",
            club: "Club Brugge KV",
            country: "Costa Rica",
            type: "player",
            id: "Oscar DUARTE"
        }, {
            name: "Fraser FORSTER",
            short_name: "FORSTER",
            team: "England",
            club: "Celtic FC",
            country: "England",
            type: "player",
            id: "Fraser FORSTER"
        }, {
            country: "England",
            premier: !1,
            rank: 129,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "West Ham United FC",
            confederation: "UEFA"
        }, {
            name: "Saphir TAIDER",
            short_name: "TAIDER",
            team: "Algeria",
            club: "FC Internazionale",
            country: "Algeria",
            type: "player",
            id: "Saphir TAIDER"
        }, {
            country: "Qatar",
            premier: !1,
            rank: 1348,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Umm Salal SC",
            confederation: "AFC"
        }, {
            name: "Hugo LLORIS",
            short_name: "LLORIS",
            team: "France",
            club: "Tottenham Hotspur FC",
            country: "France",
            type: "player",
            id: "Hugo LLORIS"
        }, {
            name: "Santi CAZORLA",
            short_name: "S. CAZORLA",
            team: "Spain",
            club: "Arsenal FC",
            country: "Spain",
            type: "player",
            id: "Santi CAZORLA"
        }, {
            country: "England",
            premier: !0,
            rank: 369,
            country_rank: 7,
            team_count: 2,
            type: "club",
            id: "Hull City FC",
            confederation: "UEFA"
        }, {
            country: "Netherlands",
            premier: !1,
            rank: 34,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Feyenoord Rotterdam",
            confederation: "UEFA"
        }, {
            name: "Jordy CLASIE",
            short_name: "CLASIE",
            team: "Netherlands",
            club: "Feyenoord Rotterdam",
            country: "Netherlands",
            type: "player",
            id: "Jordy CLASIE"
        }, {
            name: "Vincent ABOUBAKAR",
            short_name: "ABOUBAKAR",
            team: "Cameroon",
            club: "FC Lorient",
            country: "Cameroon",
            type: "player",
            id: "Vincent ABOUBAKAR"
        }, {
            name: "Diego CALVO",
            short_name: "CALVO D.",
            team: "Costa Rica",
            club: "Valerenga IF",
            country: "Costa Rica",
            type: "player",
            id: "Diego CALVO"
        }, {
            name: "Mauricio PINILLA",
            short_name: "PINILLA",
            team: "Chile",
            club: "Cagliari Calcio",
            country: "Chile",
            type: "player",
            id: "Mauricio PINILLA"
        }, {
            name: "Brad GUZAN",
            short_name: "GUZAN",
            team: "USA",
            club: "Aston Villa FC",
            country: "USA",
            type: "player",
            id: "Brad GUZAN"
        }, {
            name: "Bacary SAGNA",
            short_name: "SAGNA",
            team: "France",
            club: "Arsenal FC",
            country: "France",
            type: "player",
            id: "Bacary SAGNA"
        }, {
            name: "Arthur BOKA",
            short_name: "BOKA",
            team: "Ivory Coast",
            club: "VfB Stuttgart",
            country: "Ivory Coast",
            type: "player",
            id: "Arthur BOKA"
        }, {
            name: "Senad LULIC",
            short_name: "LULIÄ†",
            team: "Bosnia and Herzegovina",
            club: "SS Lazio",
            country: "Bosnia and Herzegovina",
            type: "player",
            id: "Senad LULIC"
        }, {
            name: "MARCELO",
            short_name: "MARCELO",
            team: "Brazil",
            club: "Real Madrid CF",
            country: "Brazil",
            type: "player",
            id: "MARCELO"
        }, {
            name: "Marco PAROLO",
            short_name: "PAROLO",
            team: "Italy",
            club: "Parma FC",
            country: "Italy",
            type: "player",
            id: "Marco PAROLO"
        }, {
            name: "Jerry PALACIOS",
            short_name: "J. PALACIOS",
            team: "Honduras",
            club: "LD Alajuelense",
            country: "Honduras",
            type: "player",
            id: "Jerry PALACIOS"
        }, {
            name: "Shinji OKAZAKI",
            short_name: "OKAZAKI",
            team: "Japan",
            club: "FSV Mainz 05",
            country: "Japan",
            type: "player",
            id: "Shinji OKAZAKI"
        }, {
            name: "Ricardo COSTA",
            short_name: "R. COSTA",
            team: "Portugal",
            club: "Valencia CF",
            country: "Portugal",
            type: "player",
            id: "Ricardo COSTA"
        }, {
            name: "Dario VIDOSIC",
            short_name: "VIDOSIC",
            team: "Australia",
            club: "FC Sion",
            country: "Australia",
            type: "player",
            id: "Dario VIDOSIC"
        }, {
            name: "Victor BERNARDEZ",
            short_name: "BERNARDEZ",
            team: "Honduras",
            club: "San Jose Earthquakes",
            country: "Honduras",
            type: "player",
            id: "Victor BERNARDEZ"
        }, {
            country: "Australia",
            premier: !1,
            rank: 718,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Adelaide United FC",
            confederation: "AFC"
        }, {
            name: "NANI",
            short_name: "NANI",
            team: "Portugal",
            club: "Manchester United FC",
            country: "Portugal",
            type: "player",
            id: "NANI"
        }, {
            name: "Mohammed RABIU",
            short_name: "RABIU",
            team: "Ghana",
            club: "Kuban Krasnodar",
            country: "Ghana",
            type: "player",
            id: "Mohammed RABIU"
        }, {
            name: "Diego GODIN",
            short_name: "GODIN",
            team: "Uruguay",
            club: "Atletico Madrid",
            country: "Uruguay",
            type: "player",
            id: "Diego GODIN"
        }, {
            name: "Francisco SILVA",
            short_name: "SILVA",
            team: "Chile",
            club: "CA Osasuna",
            country: "Chile",
            type: "player",
            id: "Francisco SILVA"
        }, {
            name: "John Obi MIKEL",
            short_name: "MIKEL",
            team: "Nigeria",
            club: "Chelsea FC",
            country: "Nigeria",
            type: "player",
            id: "John Obi MIKEL"
        }, {
            country: "China PR",
            premier: !1,
            rank: 1249,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Qingdao Jonoon FC",
            confederation: "AFC"
        }, {
            name: "Christoph KRAMER",
            short_name: "KRAMER",
            team: "Germany",
            club: "Borussia Moenchengladbach",
            country: "Germany",
            type: "player",
            id: "Christoph KRAMER"
        }, {
            country: "Israel",
            premier: !1,
            rank: 1063,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "FC Ashdod",
            confederation: "UEFA"
        }, {
            name: "Reto ZIEGLER",
            short_name: "ZIEGLER",
            team: "Switzerland",
            club: "US Sassuolo",
            country: "Switzerland",
            type: "player",
            id: "Reto ZIEGLER"
        }, {
            name: "Ebenezer ODUNLAMI",
            short_name: "ODUNLAMI",
            team: "Nigeria",
            club: "Sunshine Stars FC",
            country: "Nigeria",
            type: "player",
            id: "Ebenezer ODUNLAMI"
        }, {
            name: "Angel DI MARIA",
            short_name: "DI MARIA",
            team: "Argentina",
            club: "Real Madrid CF",
            country: "Argentina",
            type: "player",
            id: "Angel DI MARIA"
        }, {
            group: "G",
            country: "Germany",
            region: "Europe",
            type: "team",
            id: "Germany",
            stage: 3
        }, {
            country: "Turkey",
            premier: !1,
            rank: 151,
            country_rank: -1,
            team_count: 3,
            type: "club",
            id: "Besiktas JK",
            confederation: "UEFA"
        }, {
            name: "Nicolas NKOULOU",
            short_name: "NKOULOU",
            team: "Cameroon",
            club: "Olympique Marseille",
            country: "Cameroon",
            type: "player",
            id: "Nicolas NKOULOU"
        }, {
            name: "Austine EJIDE",
            short_name: "EJIDE",
            team: "Nigeria",
            club: "Hapoel Be'er Sheva FC",
            country: "Nigeria",
            type: "player",
            id: "Austine EJIDE"
        }, {
            name: "Vincent KOMPANY",
            short_name: "KOMPANY",
            team: "Belgium",
            club: "Manchester City FC",
            country: "Belgium",
            type: "player",
            id: "Vincent KOMPANY"
        }, {
            country: "Croatia",
            premier: !0,
            rank: 999,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "HNK Rijeka",
            confederation: "UEFA"
        }, {
            country: "Brazil",
            premier: !1,
            rank: 138,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "Botafogo FR",
            confederation: "CONMEBOL"
        }, {
            name: "Pepe REINA",
            short_name: "REINA",
            team: "Spain",
            club: "SSC Napoli",
            country: "Spain",
            type: "player",
            id: "Pepe REINA"
        }, {
            name: "Granit XHAKA",
            short_name: "XHAKA",
            team: "Switzerland",
            club: "Borussia Moenchengladbach",
            country: "Switzerland",
            type: "player",
            id: "Granit XHAKA"
        }, {
            country: "Australia",
            premier: !1,
            rank: 533,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Brisbane Roar FC",
            confederation: "AFC"
        }, {
            name: "Senijad IBRICIC",
            short_name: "IBRIÄŒIÄ†",
            team: "Bosnia and Herzegovina",
            club: "Kayseri Erciyesspor",
            country: "Bosnia and Herzegovina",
            type: "player",
            id: "Senijad IBRICIC"
        }, {
            country: "Germany",
            premier: !0,
            rank: 64,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "FC Augsburg",
            confederation: "UEFA"
        }, {
            name: "Erik DURM",
            short_name: "DURM",
            team: "Germany",
            club: "Borussia Dortmund",
            country: "Germany",
            type: "player",
            id: "Erik DURM"
        }, {
            name: "Jose ROJAS",
            short_name: "ROJAS",
            team: "Chile",
            club: "Club Universidad de Chile",
            country: "Chile",
            type: "player",
            id: "Jose ROJAS"
        }, {
            name: "Kevin Prince BOATENG",
            short_name: "PRINCE",
            team: "Ghana",
            club: "FC Schalke 04",
            country: "Ghana",
            type: "player",
            id: "Kevin Prince BOATENG"
        }, {
            name: "Fabrice OLINGA",
            short_name: "OLINGA",
            team: "Cameroon",
            club: "SV Zulte Waregem",
            country: "Cameroon",
            type: "player",
            id: "Fabrice OLINGA"
        }, {
            name: "Toby ALDERWEIRELD",
            short_name: "ALDERWEIRELD",
            team: "Belgium",
            club: "Atletico Madrid",
            country: "Belgium",
            type: "player",
            id: "Toby ALDERWEIRELD"
        }, {
            name: "Miguel VELOSO",
            short_name: "MIGUEL",
            team: "Portugal",
            club: "FC Dynamo Kyiv",
            country: "Portugal",
            type: "player",
            id: "Miguel VELOSO"
        }, {
            name: "Aurelien CHEDJOU",
            short_name: "CHEDJOU",
            team: "Cameroon",
            club: "Galatasaray SK",
            country: "Cameroon",
            type: "player",
            id: "Aurelien CHEDJOU"
        }, {
            country: "Norway",
            premier: !1,
            rank: 255,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Stromsgodset IF",
            confederation: "UEFA"
        }, {
            name: "Dany NOUNKEU",
            short_name: "NOUNKEU",
            team: "Cameroon",
            club: "Besiktas JK",
            country: "Cameroon",
            type: "player",
            id: "Dany NOUNKEU"
        }, {
            name: "Michael LANG",
            short_name: "LANG",
            team: "Switzerland",
            club: "Grasshopper Club",
            country: "Switzerland",
            type: "player",
            id: "Michael LANG"
        }, {
            name: "Walter GARGANO",
            short_name: "GARGANO",
            team: "Uruguay",
            club: "Parma FC",
            country: "Uruguay",
            type: "player",
            id: "Walter GARGANO"
        }, {
            name: "Shkodran MUSTAFI",
            short_name: "MUSTAFI",
            team: "Germany",
            club: "UC Sampdoria",
            country: "Germany",
            type: "player",
            id: "Shkodran MUSTAFI"
        }, {
            group: "E",
            country: "Honduras",
            region: "North America",
            type: "team",
            id: "Honduras",
            stage: 0
        }, {
            name: "Victor MOSES",
            short_name: "MOSES",
            team: "Nigeria",
            club: "Liverpool FC",
            country: "Nigeria",
            type: "player",
            id: "Victor MOSES"
        }, {
            name: "KIM Shinwook",
            short_name: "S W KIM",
            team: "South Korea",
            club: "Ulsan Hyundai FC",
            country: "South Korea",
            type: "player",
            id: "KIM Shinwook"
        }, {
            name: "Miguel PONCE",
            short_name: "M PONCE",
            team: "Mexico",
            club: "Deportivo Toluca FC",
            country: "Mexico",
            type: "player",
            id: "Miguel PONCE"
        }, {
            name: "Hassan YEBDA",
            short_name: "YEBDA",
            team: "Algeria",
            club: "Udinese Calcio",
            country: "Algeria",
            type: "player",
            id: "Hassan YEBDA"
        }, {
            name: "Phil JAGIELKA",
            short_name: "JAGIELKA",
            team: "England",
            club: "Everton FC",
            country: "England",
            type: "player",
            id: "Phil JAGIELKA"
        }, {
            name: "Masahiko INOHA",
            short_name: "INOHA",
            team: "Japan",
            club: "Jubilo Iwata",
            country: "Japan",
            type: "player",
            id: "Masahiko INOHA"
        }, {
            name: "Gelson FERNANDES",
            short_name: "FERNANDES",
            team: "Switzerland",
            club: "SC Freiburg",
            country: "Switzerland",
            type: "player",
            id: "Gelson FERNANDES"
        }, {
            name: "Benjamin MOUKANDJO",
            short_name: "MOUKANDJO",
            team: "Cameroon",
            club: "AS Nancy",
            country: "Cameroon",
            type: "player",
            id: "Benjamin MOUKANDJO"
        }, {
            name: "Nabil GHILAS",
            short_name: "GHILAS",
            team: "Algeria",
            club: "FC Porto",
            country: "Algeria",
            type: "player",
            id: "Nabil GHILAS"
        }, {
            name: "Osman CHAVEZ",
            short_name: "O. CHAVEZ",
            team: "Honduras",
            club: "Qingdao Jonoon FC",
            country: "Honduras",
            type: "player",
            id: "Osman CHAVEZ"
        }, {
            name: "Dries MERTENS",
            short_name: "MERTENS",
            team: "Belgium",
            club: "SSC Napoli",
            country: "Belgium",
            type: "player",
            id: "Dries MERTENS"
        }, {
            name: "Faryd MONDRAGON",
            short_name: "MONDRAGON",
            team: "Colombia",
            club: "Deportivo Cali",
            country: "Colombia",
            type: "player",
            id: "Faryd MONDRAGON"
        }, {
            country: "Germany",
            premier: !1,
            rank: 0,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "TSV 1860 Muenchen",
            confederation: "UEFA"
        }, {
            name: "Majeed WARIS",
            short_name: "WARIS",
            team: "Ghana",
            club: "Valenciennes FC",
            country: "Ghana",
            type: "player",
            id: "Majeed WARIS"
        }, {
            name: "Yeltsin TEJEDA",
            short_name: "TEJEDA Y.",
            team: "Costa Rica",
            club: "Deportivo Saprissa",
            country: "Costa Rica",
            type: "player",
            id: "Yeltsin TEJEDA"
        }, {
            country: "Mexico",
            premier: !1,
            rank: 192,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Tigres UANL",
            confederation: "CONCACAF"
        }, {
            name: "Jonathan MENSAH",
            short_name: "JONATHAN",
            team: "Ghana",
            club: "Evian TG FC",
            country: "Ghana",
            type: "player",
            id: "Jonathan MENSAH"
        }, {
            country: "Mexico",
            premier: !1,
            rank: 152,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Club America",
            confederation: "CONCACAF"
        }, {
            name: "Guillermo OCHOA",
            short_name: "G OCHOA",
            team: "Mexico",
            club: "AC Ajaccio",
            country: "Mexico",
            type: "player",
            id: "Guillermo OCHOA"
        }, {
            country: "Brazil",
            premier: !1,
            rank: 83,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Atletico Mineiro",
            confederation: "CONMEBOL"
        }, {
            name: "Alexandre SONG",
            short_name: "SONG. A",
            team: "Cameroon",
            club: "FC Barcelona",
            country: "Cameroon",
            type: "player",
            id: "Alexandre SONG"
        }, {
            country: "Spain",
            premier: !1,
            rank: 241,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "UD Almeria",
            confederation: "UEFA"
        }, {
            name: "Mario YEPES",
            short_name: "YEPES",
            team: "Colombia",
            club: "Atalanta Bergamo",
            country: "Colombia",
            type: "player",
            id: "Mario YEPES"
        }, {
            country: "Italy",
            premier: !0,
            rank: 38,
            country_rank: 5,
            team_count: 6,
            type: "club",
            id: "FC Internazionale",
            confederation: "UEFA"
        }, {
            country: "Netherlands",
            premier: !1,
            rank: 686,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "NEC Nijmegen",
            confederation: "UEFA"
        }, {
            name: "Emmanuel EMENIKE",
            short_name: "EMENIKE",
            team: "Nigeria",
            club: "Fenerbahce SK",
            country: "Nigeria",
            type: "player",
            id: "Emmanuel EMENIKE"
        }, {
            name: "Antonio CASSANO",
            short_name: "CASSANO",
            team: "Italy",
            club: "Parma FC",
            country: "Italy",
            type: "player",
            id: "Antonio CASSANO"
        }, {
            name: "Ezequiel GARAY",
            short_name: "GARAY",
            team: "Argentina",
            club: "SL Benfica",
            country: "Argentina",
            type: "player",
            id: "Ezequiel GARAY"
        }, {
            name: "Liassine CADAMURO",
            short_name: "CADAMURO",
            team: "Algeria",
            club: "RCD Mallorca",
            country: "Algeria",
            type: "player",
            id: "Liassine CADAMURO"
        }, {
            name: "Rio MAVUBA",
            short_name: "MAVUBA",
            team: "France",
            club: "Lille OSC",
            country: "France",
            type: "player",
            id: "Rio MAVUBA"
        }, {
            country: "Spain",
            premier: !0,
            rank: 5,
            country_rank: 2,
            team_count: 5,
            type: "club",
            id: "FC Barcelona",
            confederation: "UEFA"
        }, {
            country: "Japan",
            premier: !1,
            rank: 509,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "FC Tokyo",
            confederation: "AFC"
        }, {
            name: "Max GRADEL",
            short_name: "GRADEL",
            team: "Ivory Coast",
            club: "AS Saint-Etienne",
            country: "Ivory Coast",
            type: "player",
            id: "Max GRADEL"
        }, {
            name: "Joel MATIP",
            short_name: "MATIP",
            team: "Cameroon",
            club: "FC Schalke 04",
            country: "Cameroon",
            type: "player",
            id: "Joel MATIP"
        }, {
            name: "Sylvain GBOHOUO",
            short_name: "GBOHOUO",
            team: "Ivory Coast",
            club: "Sewe Sport",
            country: "Ivory Coast",
            type: "player",
            id: "Sylvain GBOHOUO"
        }, {
            name: "KIM Younggwon",
            short_name: "Y G KIM",
            team: "South Korea",
            club: "Guangzhou Evergrande FC",
            country: "South Korea",
            type: "player",
            id: "KIM Younggwon"
        }, {
            name: "Daryl JANMAAT",
            short_name: "JANMAAT",
            team: "Netherlands",
            club: "Feyenoord Rotterdam",
            country: "Netherlands",
            type: "player",
            id: "Daryl JANMAAT"
        }, {
            name: "Timmy CHANDLER",
            short_name: "CHANDLER",
            team: "USA",
            club: "1. FC Nuernberg",
            country: "USA",
            type: "player",
            id: "Timmy CHANDLER"
        }, {
            group: "F",
            country: "Bosnia and Herzegovina",
            region: "Europe",
            type: "team",
            id: "Bosnia and Herzegovina",
            stage: 0
        }, {
            name: "Georgios SAMARAS",
            short_name: "SAMARAS",
            team: "Greece",
            club: "Celtic FC",
            country: "Greece",
            type: "player",
            id: "Georgios SAMARAS"
        }, {
            name: "Nick RIMANDO",
            short_name: "RIMANDO",
            team: "USA",
            club: "Real Salt Lake",
            country: "USA",
            type: "player",
            id: "Nick RIMANDO"
        }, {
            country: "Spain",
            premier: !1,
            rank: 58,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Villarreal CF",
            confederation: "UEFA"
        }, {
            name: "Reza HAGHIGHI",
            short_name: "R. HAGHIGHI",
            team: "Iran",
            club: "Perspolis FC",
            country: "Iran",
            type: "player",
            id: "Reza HAGHIGHI"
        }, {
            name: "Mark MILLIGAN",
            short_name: "MILLIGAN",
            team: "Australia",
            club: "Melbourne Victory FC",
            country: "Australia",
            type: "player",
            id: "Mark MILLIGAN"
        }, {
            country: "Colombia",
            premier: !1,
            rank: 123,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Atletico Nacional",
            confederation: "CONMEBOL"
        }, {
            group: "B",
            country: "Netherlands",
            region: "Europe",
            type: "team",
            id: "Netherlands",
            stage: 3
        }, {
            name: "Ivan RAKITIC",
            short_name: "RAKITIÄ†",
            team: "Croatia",
            club: "Sevilla FC",
            country: "Croatia",
            type: "player",
            id: "Ivan RAKITIC"
        }, {
            name: "Christian BOLANOS",
            short_name: "BOLAÃ‘OS C.",
            team: "Costa Rica",
            club: "FC Kobenhavn",
            country: "Costa Rica",
            type: "player",
            id: "Christian BOLANOS"
        }, {
            country: "Italy",
            premier: !0,
            rank: 196,
            country_rank: 14,
            team_count: 3,
            type: "club",
            id: "Genoa CFC",
            confederation: "UEFA"
        }, {
            name: "Mehrdad POOLADI",
            short_name: "MEHRDAD",
            team: "Iran",
            club: "Perspolis FC",
            country: "Iran",
            type: "player",
            id: "Mehrdad POOLADI"
        }, {
            country: "Scotland",
            premier: !1,
            rank: 38,
            country_rank: -1,
            team_count: 4,
            type: "club",
            id: "Celtic FC",
            confederation: "UEFA"
        }, {
            name: "DANTE",
            short_name: "DANTE",
            team: "Brazil",
            club: "FC Bayern Muenchen",
            country: "Brazil",
            type: "player",
            id: "DANTE"
        }, {
            name: "Paul VERHAEGH",
            short_name: "VERHAEGH",
            team: "Netherlands",
            club: "FC Augsburg",
            country: "Netherlands",
            type: "player",
            id: "Paul VERHAEGH"
        }, {
            country: "Australia",
            premier: !1,
            rank: 747,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Western Sydney Wanderers FC",
            confederation: "AFC"
        }, {
            name: "Raul JIMENEZ",
            short_name: "R JIMENEZ",
            team: "Mexico",
            club: "Club America",
            country: "Mexico",
            type: "player",
            id: "Raul JIMENEZ"
        }, {
            name: "Landry NGUEMO",
            short_name: "NGUEMO",
            team: "Cameroon",
            club: "FC Girondins Bordeaux",
            country: "Cameroon",
            type: "player",
            id: "Landry NGUEMO"
        }, {
            country: "Germany",
            premier: !0,
            rank: 103,
            country_rank: -1,
            team_count: 3,
            type: "club",
            id: "Hannover 96",
            confederation: "UEFA"
        }, {
            name: "Martin CACERES",
            short_name: "CACERES",
            team: "Uruguay",
            club: "Juventus FC",
            country: "Uruguay",
            type: "player",
            id: "Martin CACERES"
        }, {
            name: "Fabio COENTRAO",
            short_name: "F. COENTRÃƒO",
            team: "Portugal",
            club: "Real Madrid CF",
            country: "Portugal",
            type: "player",
            id: "Fabio COENTRAO"
        }, {
            name: "Camilo VARGAS",
            short_name: "VARGAS",
            team: "Colombia",
            club: "Independiente Santa Fe",
            country: "Colombia",
            type: "player",
            id: "Camilo VARGAS"
        }, {
            country: "Portugal",
            premier: !1,
            rank: 262,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Sporting Braga",
            confederation: "UEFA"
        }, {
            country: "Sweden",
            premier: !1,
            rank: 144,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Malmo FF",
            confederation: "UEFA"
        }, {
            name: "Kolo TOURE",
            short_name: "T. KOLO",
            team: "Ivory Coast",
            club: "Liverpool FC",
            country: "Ivory Coast",
            type: "player",
            id: "Kolo TOURE"
        }, {
            country: "Costa Rica",
            premier: !1,
            rank: 781,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "CSD Cartagines",
            confederation: "CONCACAF"
        }, {
            country: "Spain",
            premier: !0,
            rank: 1,
            country_rank: 3,
            team_count: 7,
            type: "club",
            id: "Real Madrid CF",
            confederation: "UEFA"
        }, {
            country: "Russia",
            premier: !1,
            rank: 322,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "Kuban Krasnodar",
            confederation: "UEFA"
        }, {
            name: "Brad DAVIS",
            short_name: "DAVIS",
            team: "USA",
            club: "Houston Dynamo",
            country: "USA",
            type: "player",
            id: "Brad DAVIS"
        }, {
            name: "Moussa DEMBELE",
            short_name: "DEMBELE",
            team: "Belgium",
            club: "Tottenham Hotspur FC",
            country: "Belgium",
            type: "player",
            id: "Moussa DEMBELE"
        }, {
            name: "Michel VORM",
            short_name: "VORM",
            team: "Netherlands",
            club: "Swansea City AFC",
            country: "Netherlands",
            type: "player",
            id: "Michel VORM"
        }, {
            name: "Atsuto UCHIDA",
            short_name: "UCHIDA",
            team: "Japan",
            club: "FC Schalke 04",
            country: "Japan",
            type: "player",
            id: "Atsuto UCHIDA"
        }, {
            name: "Ben HALLORAN",
            short_name: "HALLORAN",
            team: "Australia",
            club: "Fortuna Duesseldorf",
            country: "Australia",
            type: "player",
            id: "Ben HALLORAN"
        }, {
            name: "Thomas VERMAELEN",
            short_name: "VERMAELEN",
            team: "Belgium",
            club: "Arsenal FC",
            country: "Belgium",
            type: "player",
            id: "Thomas VERMAELEN"
        }, {
            name: "Loic REMY",
            short_name: "REMY",
            team: "France",
            club: "Newcastle United FC",
            country: "France",
            type: "player",
            id: "Loic REMY"
        }, {
            name: "Alexander SAMEDOV",
            short_name: "SAMEDOV",
            team: "Russia",
            club: "FC Lokomotiv Moscow",
            country: "Russia",
            type: "player",
            id: "Alexander SAMEDOV"
        }, {
            name: "Daniel OPARE",
            short_name: "D. OPARE",
            team: "Ghana",
            club: "Standard Liege",
            country: "Ghana",
            type: "player",
            id: "Daniel OPARE"
        }, {
            name: "Kyle BECKERMAN",
            short_name: "BECKERMAN",
            team: "USA",
            club: "Real Salt Lake",
            country: "USA",
            type: "player",
            id: "Kyle BECKERMAN"
        }, {
            name: "Jose GIMENEZ",
            short_name: "J.M. GIMENEZ",
            team: "Uruguay",
            club: "Atletico Madrid",
            country: "Uruguay",
            type: "player",
            id: "Jose GIMENEZ"
        }, {
            country: "United States",
            premier: !1,
            rank: 416,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Seattle Sounders FC",
            confederation: "CONCACAF"
        }, {
            name: "Lorenzo INSIGNE",
            short_name: "INSIGNE",
            team: "Italy",
            club: "SSC Napoli",
            country: "Italy",
            type: "player",
            id: "Lorenzo INSIGNE"
        }, {
            name: "Alexandros TZIOLIS",
            short_name: "TZIOLIS",
            team: "Greece",
            club: "Kayserispor",
            country: "Greece",
            type: "player",
            id: "Alexandros TZIOLIS"
        }, {
            country: "Netherlands",
            premier: !1,
            rank: 318,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "FC Utrecht",
            confederation: "UEFA"
        }, {
            name: "Mehdi MOSTEFA",
            short_name: "MOSTEFA",
            team: "Algeria",
            club: "AC Ajaccio",
            country: "Algeria",
            type: "player",
            id: "Mehdi MOSTEFA"
        }, {
            name: "Victor IBARBO",
            short_name: "IBARBO",
            team: "Colombia",
            club: "Cagliari Calcio",
            country: "Colombia",
            type: "player",
            id: "Victor IBARBO"
        }, {
            name: "Emilio IZAGUIRRE",
            short_name: "EMILIO",
            team: "Honduras",
            club: "Celtic FC",
            country: "Honduras",
            type: "player",
            id: "Emilio IZAGUIRRE"
        }, {
            name: "Julian GREEN",
            short_name: "GREEN",
            team: "USA",
            club: "FC Bayern Muenchen",
            country: "USA",
            type: "player",
            id: "Julian GREEN"
        }, {
            name: "Emmanuel AGYEMANG BADU",
            short_name: "A. BADU",
            team: "Ghana",
            club: "Udinese Calcio",
            country: "Ghana",
            type: "player",
            id: "Emmanuel AGYEMANG BADU"
        }, {
            name: "Matthew SPIRANOVIC",
            short_name: "SPIRANOVIC",
            team: "Australia",
            club: "Western Sydney Wanderers FC",
            country: "Australia",
            type: "player",
            id: "Matthew SPIRANOVIC"
        }, {
            country: "Spain",
            premier: !0,
            rank: 42,
            country_rank: 7,
            team_count: 3,
            type: "club",
            id: "Real Sociedad",
            confederation: "UEFA"
        }, {
            country: "South Africa",
            premier: !1,
            rank: 1104,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Santos FC",
            confederation: "CAF"
        }, {
            country: "France",
            premier: !1,
            rank: 638,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "Valenciennes FC",
            confederation: "UEFA"
        }, {
            country: "England",
            premier: !1,
            rank: 0,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "Watford FC",
            confederation: "UEFA"
        }, {
            group: "E",
            country: "France",
            region: "Europe",
            type: "team",
            id: "France",
            stage: 2
        }, {
            name: "Ignazio ABATE",
            short_name: "ABATE",
            team: "Italy",
            club: "AC Milan",
            country: "Italy",
            type: "player",
            id: "Ignazio ABATE"
        }, {
            country: "Japan",
            premier: !1,
            rank: 399,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Yokohama F-Marinos",
            confederation: "AFC"
        }, {
            name: "Avdija VRSAJEVIC",
            short_name: "VRÅ AJEVIÄ†",
            team: "Bosnia and Herzegovina",
            club: "HNK Hajduk Split",
            country: "Bosnia and Herzegovina",
            type: "player",
            id: "Avdija VRSAJEVIC"
        }, {
            name: "Wilson PALACIOS",
            short_name: "W. PALACIOS",
            team: "Honduras",
            club: "Stoke City FC",
            country: "Honduras",
            type: "player",
            id: "Wilson PALACIOS"
        }, {
            name: "HWANG Seokho",
            short_name: "S H HWANG",
            team: "South Korea",
            club: "Sanfrecce Hiroshima",
            country: "South Korea",
            type: "player",
            id: "HWANG Seokho"
        }, {
            name: "Fernando MUSLERA",
            short_name: "MUSLERA",
            team: "Uruguay",
            club: "Galatasaray SK",
            country: "Uruguay",
            type: "player",
            id: "Fernando MUSLERA"
        }, {
            name: "Adam LALLANA",
            short_name: "LALLANA",
            team: "England",
            club: "Southampton FC",
            country: "England",
            type: "player",
            id: "Adam LALLANA"
        }, {
            country: "Switzerland",
            premier: !1,
            rank: 479,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "FC Zuerich",
            confederation: "UEFA"
        }, {
            name: "Shusaku NISHIKAWA",
            short_name: "NISHIKAWA",
            team: "Japan",
            club: "Urawa Red Diamonds",
            country: "Japan",
            type: "player",
            id: "Shusaku NISHIKAWA"
        }, {
            name: "Toni SUNJIC",
            short_name: "Å UNJIÄ†",
            team: "Bosnia and Herzegovina",
            club: "FC Zorya Lugansk",
            country: "Bosnia and Herzegovina",
            type: "player",
            id: "Toni SUNJIC"
        }, {
            country: "France",
            premier: !1,
            rank: 33,
            country_rank: -1,
            team_count: 4,
            type: "club",
            id: "Lille OSC",
            confederation: "UEFA"
        }, {
            country: "China PR",
            premier: !1,
            rank: 829,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Guangzhou R&amp;F FC",
            confederation: "AFC"
        }, {
            name: "Ezequiel LAVEZZI",
            short_name: "LAVEZZI",
            team: "Argentina",
            club: "Paris Saint-Germain FC",
            country: "Argentina",
            type: "player",
            id: "Ezequiel LAVEZZI"
        }, {
            name: "Edin VISCA",
            short_name: "VIÅ Ä†A",
            team: "Bosnia and Herzegovina",
            club: "Istanbul BBSK",
            country: "Bosnia and Herzegovina",
            type: "player",
            id: "Edin VISCA"
        }, {
            country: "Mexico",
            premier: !1,
            rank: 410,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "CF Pachuca",
            confederation: "CONCACAF"
        }, {
            name: "Valon BEHRAMI",
            short_name: "BEHRAMI",
            team: "Switzerland",
            club: "SSC Napoli",
            country: "Switzerland",
            type: "player",
            id: "Valon BEHRAMI"
        }, {
            name: "HONG Jeongho",
            short_name: "J H HONG",
            team: "South Korea",
            club: "FC Augsburg",
            country: "South Korea",
            type: "player",
            id: "HONG Jeongho"
        }, {
            name: "WILLIAN",
            short_name: "WILLIAN",
            team: "Brazil",
            club: "Chelsea FC",
            country: "Brazil",
            type: "player",
            id: "WILLIAN"
        }, {
            name: "Hiroki SAKAI",
            short_name: "H. SAKAI",
            team: "Japan",
            club: "Hannover 96",
            country: "Japan",
            type: "player",
            id: "Hiroki SAKAI"
        }, {
            name: "Cristhian NOBOA",
            short_name: "NOBOA",
            team: "Ecuador",
            club: "FC Dynamo Moscow",
            country: "Ecuador",
            type: "player",
            id: "Cristhian NOBOA"
        }, {
            country: "Iran",
            premier: !1,
            rank: 162,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Sepahan FC",
            confederation: "AFC"
        }, {
            name: "Ross BARKLEY",
            short_name: "BARKLEY",
            team: "England",
            club: "Everton FC",
            country: "England",
            type: "player",
            id: "Ross BARKLEY"
        }, {
            name: "Khosro HEYDARI",
            short_name: "KH. HEYDARI",
            team: "Iran",
            club: "Esteghlal Tehran FC",
            country: "Iran",
            type: "player",
            id: "Khosro HEYDARI"
        }, {
            name: "Ousmane DIARRASSOUBA",
            short_name: "VIERA",
            team: "Ivory Coast",
            club: "Caykur Rizespor",
            country: "Ivory Coast",
            type: "player",
            id: "Ousmane DIARRASSOUBA"
        }, {
            name: "Antonio CANDREVA",
            short_name: "CANDREVA",
            team: "Italy",
            club: "SS Lazio",
            country: "Italy",
            type: "player",
            id: "Antonio CANDREVA"
        }, {
            name: "Arjen ROBBEN",
            short_name: "ROBBEN",
            team: "Netherlands",
            club: "FC Bayern Muenchen",
            country: "Netherlands",
            type: "player",
            id: "Arjen ROBBEN"
        }, {
            name: "Charles ARANGUIZ",
            short_name: "CH. ARÃNGUIZ",
            team: "Chile",
            club: "SC Internacional",
            country: "Chile",
            type: "player",
            id: "Charles ARANGUIZ"
        }, {
            name: "Maty RYAN",
            short_name: "RYAN",
            team: "Australia",
            club: "Club Brugge KV",
            country: "Australia",
            type: "player",
            id: "Maty RYAN"
        }, {
            name: "Andy NAJAR",
            short_name: "NAJAR",
            team: "Honduras",
            club: "RSC Anderlecht",
            country: "Honduras",
            type: "player",
            id: "Andy NAJAR"
        }, {
            name: "Luis SUAREZ",
            short_name: "SUAREZ",
            team: "Uruguay",
            club: "Liverpool FC",
            country: "Uruguay",
            type: "player",
            id: "Luis SUAREZ"
        }, {
            name: "Terence KONGOLO",
            short_name: "KONGOLO",
            team: "Netherlands",
            club: "Feyenoord Rotterdam",
            country: "Netherlands",
            type: "player",
            id: "Terence KONGOLO"
        }, {
            name: "Mile JEDINAK",
            short_name: "JEDINAK",
            team: "Australia",
            club: "Crystal Palace FC",
            country: "Australia",
            type: "player",
            id: "Mile JEDINAK"
        }, {
            country: "South Africa",
            premier: !1,
            rank: 200,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Mamelodi Sundowns FC",
            confederation: "CAF"
        }, {
            name: "Mateo KOVACIC",
            short_name: "KOVAÄŒIÄ†",
            team: "Croatia",
            club: "FC Internazionale",
            country: "Croatia",
            type: "player",
            id: "Mateo KOVACIC"
        }, {
            name: "BERNARD",
            short_name: "BERNARD",
            team: "Brazil",
            club: "Shakhtar Donetsk",
            country: "Brazil",
            type: "player",
            id: "BERNARD"
        }, {
            country: "Ukraine",
            premier: !1,
            rank: 73,
            country_rank: -1,
            team_count: 3,
            type: "club",
            id: "FC Dynamo Kyiv",
            confederation: "UEFA"
        }, {
            name: "KIM Seunggyu",
            short_name: "S G KIM",
            team: "South Korea",
            club: "Ulsan Hyundai FC",
            country: "South Korea",
            type: "player",
            id: "KIM Seunggyu"
        }, {
            name: "Daniele DE ROSSI",
            short_name: "DE ROSSI",
            team: "Italy",
            club: "AS Roma",
            country: "Italy",
            type: "player",
            id: "Daniele DE ROSSI"
        }, {
            name: "Oleg SHATOV",
            short_name: "SHATOV",
            team: "Russia",
            club: "FC Zenit St. Petersburg",
            country: "Russia",
            type: "player",
            id: "Oleg SHATOV"
        }, {
            name: "VICTOR",
            short_name: "VICTOR",
            team: "Brazil",
            club: "Atletico Mineiro",
            country: "Brazil",
            type: "player",
            id: "VICTOR"
        }, {
            country: "France",
            premier: !1,
            rank: 251,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Montpellier HSC",
            confederation: "UEFA"
        }, {
            country: "France",
            premier: !0,
            rank: 999,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "FC Girondins Bordeaux",
            confederation: "UEFA"
        }, {
            name: "Dimitrios SALPINGIDIS",
            short_name: "SALPINGIDIS",
            team: "Greece",
            club: "PAOK FC",
            country: "Greece",
            type: "player",
            id: "Dimitrios SALPINGIDIS"
        }, {
            name: "Alexander DOMINGUEZ",
            short_name: "DOMINGUEZ",
            team: "Ecuador",
            club: "LDU Quito",
            country: "Ecuador",
            type: "player",
            id: "Alexander DOMINGUEZ"
        }, {
            name: "Lazaros CHRISTODOULOPOULOS",
            short_name: "LAZAROS",
            team: "Greece",
            club: "Bologna FC",
            country: "Greece",
            type: "player",
            id: "Lazaros CHRISTODOULOPOULOS"
        }, {
            name: "Tranquillo BARNETTA",
            short_name: "BARNETTA",
            team: "Switzerland",
            club: "Eintracht Frankfurt",
            country: "Switzerland",
            type: "player",
            id: "Tranquillo BARNETTA"
        }, {
            name: "Yoichiro KAKITANI",
            short_name: "KAKITANI",
            team: "Japan",
            club: "Cerezo Osaka",
            country: "Japan",
            type: "player",
            id: "Yoichiro KAKITANI"
        }, {
            name: "David VILLA",
            short_name: "DAVID VILLA",
            team: "Spain",
            club: "Atletico Madrid",
            country: "Spain",
            type: "player",
            id: "David VILLA"
        }, {
            name: "Marco FABIAN",
            short_name: "M FABIAN",
            team: "Mexico",
            club: "Cruz Azul FC",
            country: "Mexico",
            type: "player",
            id: "Marco FABIAN"
        }, {
            name: "Ruben GABRIEL",
            short_name: "GABRIEL",
            team: "Nigeria",
            club: "KV Waasland-Beveren",
            country: "Nigeria",
            type: "player",
            id: "Ruben GABRIEL"
        }, {
            country: "England",
            premier: !1,
            rank: 999,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Nottingham Forest FC",
            confederation: "UEFA"
        }, {
            country: "France",
            premier: !1,
            rank: 204,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "Toulouse FC",
            confederation: "UEFA"
        }, {
            name: "Tim CAHILL",
            short_name: "CAHILL",
            team: "Australia",
            club: "New York Red Bulls",
            country: "Australia",
            type: "player",
            id: "Tim CAHILL"
        }, {
            name: "Johan DJOUROU",
            short_name: "DJOUROU",
            team: "Switzerland",
            club: "Hamburger SV",
            country: "Switzerland",
            type: "player",
            id: "Johan DJOUROU"
        }, {
            country: "Netherlands",
            premier: !1,
            rank: 137,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "Vitesse Arnheim",
            confederation: "UEFA"
        }, {
            name: "Hugo CAMPAGNARO",
            short_name: "CAMPAGNARO",
            team: "Argentina",
            club: "FC Internazionale",
            country: "Argentina",
            type: "player",
            id: "Hugo CAMPAGNARO"
        }, {
            country: "Portugal",
            premier: !1,
            rank: 489,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Academica Coimbra",
            confederation: "UEFA"
        }, {
            name: "James HOLLAND",
            short_name: "HOLLAND",
            team: "Australia",
            club: "FK Austria Wien",
            country: "Australia",
            type: "player",
            id: "James HOLLAND"
        }, {
            name: "Yacine BRAHIMI",
            short_name: "BRAHIMI",
            team: "Algeria",
            club: "Granada CF",
            country: "Algeria",
            type: "player",
            id: "Yacine BRAHIMI"
        }, {
            country: "Russia",
            premier: !1,
            rank: 30,
            country_rank: -1,
            team_count: 4,
            type: "club",
            id: "FC Zenit St. Petersburg",
            confederation: "UEFA"
        }, {
            name: "GERVINHO",
            short_name: "GERVINHO",
            team: "Ivory Coast",
            club: "AS Roma",
            country: "Ivory Coast",
            type: "player",
            id: "GERVINHO"
        }, {
            name: "Diego COSTA",
            short_name: "DIEGO COSTA",
            team: "Spain",
            club: "Atletico Madrid",
            country: "Spain",
            type: "player",
            id: "Diego COSTA"
        }, {
            name: "Marcos ROJO",
            short_name: "ROJO",
            team: "Argentina",
            club: "Sporting CP",
            country: "Argentina",
            type: "player",
            id: "Marcos ROJO"
        }, {
            country: "France",
            premier: !1,
            rank: 185,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Evian TG FC",
            confederation: "UEFA"
        }, {
            name: "Fredy GUARIN",
            short_name: "GUARIN",
            team: "Colombia",
            club: "FC Internazionale",
            country: "Colombia",
            type: "player",
            id: "Fredy GUARIN"
        }, {
            name: "Mathieu VALBUENA",
            short_name: "VALBUENA",
            team: "France",
            club: "Olympique Marseille",
            country: "France",
            type: "player",
            id: "Mathieu VALBUENA"
        }, {
            country: "France",
            premier: !0,
            rank: 999,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "OGC Nice",
            confederation: "UEFA"
        }, {
            name: "Darijo SRNA",
            short_name: "SRNA",
            team: "Croatia",
            club: "Shakhtar Donetsk",
            country: "Croatia",
            type: "player",
            id: "Darijo SRNA"
        }, {
            country: "Italy",
            premier: !0,
            rank: 31,
            country_rank: 8,
            team_count: 5,
            type: "club",
            id: "AC Milan",
            confederation: "UEFA"
        }, {
            country: "Russia",
            premier: !1,
            rank: 470,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "FC Terek Grozny",
            confederation: "UEFA"
        }, {
            name: "Adam TAGGART",
            short_name: "TAGGART",
            team: "Australia",
            club: "Newcastle United Jets FC",
            country: "Australia",
            type: "player",
            id: "Adam TAGGART"
        }, {
            name: "DeAndre YEDLIN",
            short_name: "YEDLIN",
            team: "USA",
            club: "Seattle Sounders FC",
            country: "USA",
            type: "player",
            id: "DeAndre YEDLIN"
        }, {
            name: "Thiago MOTTA",
            short_name: "THIAGO MOTTA",
            team: "Italy",
            club: "Paris Saint-Germain FC",
            country: "Italy",
            type: "player",
            id: "Thiago MOTTA"
        }, {
            country: "France",
            premier: !1,
            rank: 339,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Stade de Reims",
            confederation: "UEFA"
        }, {
            name: "Azubuike EGWUEKWE",
            short_name: "EGWUEKWE",
            team: "Nigeria",
            club: "Warri Wolves FC",
            country: "Nigeria",
            type: "player",
            id: "Azubuike EGWUEKWE"
        }, {
            name: "Sergey RYZHIKOV",
            short_name: "RYZHIKOV",
            team: "Russia",
            club: "FC Rubin Kazan",
            country: "Russia",
            type: "player",
            id: "Sergey RYZHIKOV"
        }, {
            name: "Marco VERRATTI",
            short_name: "VERRATTI",
            team: "Italy",
            club: "Paris Saint-Germain FC",
            country: "Italy",
            type: "player",
            id: "Marco VERRATTI"
        }, {
            name: "Jasmin FEJZIC",
            short_name: "FEJZIÄ†",
            team: "Bosnia and Herzegovina",
            club: "VfR Aalen",
            country: "Bosnia and Herzegovina",
            type: "player",
            id: "Jasmin FEJZIC"
        }, {
            name: "Rony MARTINEZ",
            short_name: "R. MARTINEZ",
            team: "Honduras",
            club: "CD Real Sociedad",
            country: "Honduras",
            type: "player",
            id: "Rony MARTINEZ"
        }, {
            name: "Valentin STOCKER",
            short_name: "STOCKER",
            team: "Switzerland",
            club: "FC Basel",
            country: "Switzerland",
            type: "player",
            id: "Valentin STOCKER"
        }, {
            name: "Vincent ENYEAMA",
            short_name: "ENYEAMA",
            team: "Nigeria",
            club: "Lille OSC",
            country: "Nigeria",
            type: "player",
            id: "Vincent ENYEAMA"
        }, {
            name: "Carlos CARBONERO",
            short_name: "C. CARBONERO",
            team: "Colombia",
            club: "CA River Plate",
            country: "Colombia",
            type: "player",
            id: "Carlos CARBONERO"
        }, {
            country: "Switzerland",
            premier: !1,
            rank: 364,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Grasshopper Club",
            confederation: "UEFA"
        }, {
            name: "Maximo BANGUERA",
            short_name: "BANGUERA",
            team: "Ecuador",
            club: "Barcelona SC",
            country: "Ecuador",
            type: "player",
            id: "Maximo BANGUERA"
        }, {
            name: "Fabian JOHNSON",
            short_name: "JOHNSON",
            team: "USA",
            club: "TSG 1899 Hoffenheim",
            country: "USA",
            type: "player",
            id: "Fabian JOHNSON"
        }, {
            name: "Igor AKINFEEV",
            short_name: "AKINFEEV",
            team: "Russia",
            club: "CSKA Moscow",
            country: "Russia",
            type: "player",
            id: "Igor AKINFEEV"
        }, {
            name: "Keylor NAVAS",
            short_name: "NAVAS K.",
            team: "Costa Rica",
            club: "Levante UD",
            country: "Costa Rica",
            type: "player",
            id: "Keylor NAVAS"
        }, {
            name: "Maxi RODRIGUEZ",
            short_name: "RODRIGUEZ",
            team: "Argentina",
            club: "CA Newells Old Boys",
            country: "Argentina",
            type: "player",
            id: "Maxi RODRIGUEZ"
        }, {
            country: "Belgium",
            premier: !1,
            rank: 187,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "SV Zulte Waregem",
            confederation: "UEFA"
        }, {
            name: "Sammy BOSSUT",
            short_name: "BOSSUT",
            team: "Belgium",
            club: "SV Zulte Waregem",
            country: "Belgium",
            type: "player",
            id: "Sammy BOSSUT"
        }, {
            name: "Muhamed BESIC",
            short_name: "BEÅ IÄ†",
            team: "Bosnia and Herzegovina",
            club: "Ferencvarosi TC",
            country: "Bosnia and Herzegovina",
            type: "player",
            id: "Muhamed BESIC"
        }, {
            name: "FRED",
            short_name: "FRED",
            team: "Brazil",
            club: "Fluminense FC",
            country: "Brazil",
            type: "player",
            id: "FRED"
        }, {
            country: "United States",
            premier: !1,
            rank: 906,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Columbus Crew",
            confederation: "CONCACAF"
        }, {
            name: "Oribe PERALTA",
            short_name: "O PERALTA",
            team: "Mexico",
            club: "Club Santos Laguna",
            country: "Mexico",
            type: "player",
            id: "Oribe PERALTA"
        }, {
            name: "Jordan AYEW",
            short_name: "J. AYEW",
            team: "Ghana",
            club: "FC Sochaux-MontbÃ©liard",
            country: "Ghana",
            type: "player",
            id: "Jordan AYEW"
        }, {
            name: "DAVID LUIZ",
            short_name: "DAVID LUIZ",
            team: "Brazil",
            club: "Chelsea FC",
            country: "Brazil",
            type: "player",
            id: "DAVID LUIZ"
        }, {
            name: "Juan PAREDES",
            short_name: "PAREDES",
            team: "Ecuador",
            club: "Barcelona SC",
            country: "Ecuador",
            type: "player",
            id: "Juan PAREDES"
        }, {
            country: "Ecuador",
            premier: !1,
            rank: 426,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "CD Universidad Catolica",
            confederation: "CONMEBOL"
        }, {
            name: "Domagoj VIDA",
            short_name: "VIDA",
            team: "Croatia",
            club: "FC Dynamo Kyiv",
            country: "Croatia",
            type: "player",
            id: "Domagoj VIDA"
        }, {
            country: "Italy",
            premier: !0,
            rank: 899,
            country_rank: 20,
            team_count: 1,
            type: "club",
            id: "AS Livorno",
            confederation: "UEFA"
        }, {
            country: "Russia",
            premier: !1,
            rank: 118,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "FC Lokomotiv Moscow",
            confederation: "UEFA"
        }, {
            name: "Oliver BOZANIC",
            short_name: "BOZANIC",
            team: "Australia",
            club: "FC Luzern",
            country: "Australia",
            type: "player",
            id: "Oliver BOZANIC"
        }, {
            name: "Jalal HOSSEINI",
            short_name: "J. HOSSEINI",
            team: "Iran",
            club: "Perspolis FC",
            country: "Iran",
            type: "player",
            id: "Jalal HOSSEINI"
        }, {
            name: "Keisuke HONDA",
            short_name: "HONDA",
            team: "Japan",
            club: "AC Milan",
            country: "Japan",
            type: "player",
            id: "Keisuke HONDA"
        }, {
            name: "Sofiane FEGHOULI",
            short_name: "FEGHOULI",
            team: "Algeria",
            club: "Valencia CF",
            country: "Algeria",
            type: "player",
            id: "Sofiane FEGHOULI"
        }, {
            country: "Turkey",
            premier: !1,
            rank: 165,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Trabzonspor",
            confederation: "UEFA"
        }, {
            name: "Danny WELBECK",
            short_name: "WELBECK",
            team: "England",
            club: "Manchester United FC",
            country: "England",
            type: "player",
            id: "Danny WELBECK"
        }, {
            name: "Yasuyuki KONNO",
            short_name: "KONNO",
            team: "Japan",
            club: "Gamba Osaka",
            country: "Japan",
            type: "player",
            id: "Yasuyuki KONNO"
        }, {
            country: "Turkey",
            premier: !1,
            rank: 43,
            country_rank: -1,
            team_count: 5,
            type: "club",
            id: "Galatasaray SK",
            confederation: "UEFA"
        }, {
            name: "David DE GEA",
            short_name: "DE GEA",
            team: "Spain",
            club: "Manchester United FC",
            country: "Spain",
            type: "player",
            id: "David DE GEA"
        }, {
            country: "Turkey",
            premier: !1,
            rank: 648,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "Konyaspor",
            confederation: "UEFA"
        }, {
            name: "Eugen GALEKOVIC",
            short_name: "GALEKOVIC",
            team: "Australia",
            club: "Adelaide United FC",
            country: "Australia",
            type: "player",
            id: "Eugen GALEKOVIC"
        }, {
            country: "Japan",
            premier: !1,
            rank: 478,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Gamba Osaka",
            confederation: "AFC"
        }, {
            country: "England",
            premier: !0,
            rank: 10,
            country_rank: 4,
            team_count: 7,
            type: "club",
            id: "Chelsea FC",
            confederation: "UEFA"
        }, {
            country: "Iran",
            premier: !1,
            rank: 258,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Foolad Khuzestan FC",
            confederation: "AFC"
        }, {
            name: "Chris SMALLING",
            short_name: "SMALLING",
            team: "England",
            club: "Manchester United FC",
            country: "England",
            type: "player",
            id: "Chris SMALLING"
        }, {
            name: "Maya YOSHIDA",
            short_name: "YOSHIDA",
            team: "Japan",
            club: "Southampton FC",
            country: "Japan",
            type: "player",
            id: "Maya YOSHIDA"
        }, {
            name: "Morgan SCHNEIDERLIN",
            short_name: "SCHNEIDERLIN",
            team: "France",
            club: "Southampton FC",
            country: "France",
            type: "player",
            id: "Morgan SCHNEIDERLIN"
        }, {
            name: "Harrison AFFUL",
            short_name: "HARRISON",
            team: "Ghana",
            club: "Esperance Sportive de Tunis",
            country: "Ghana",
            type: "player",
            id: "Harrison AFFUL"
        }, {
            group: "D",
            country: "Italy",
            region: "Europe",
            type: "team",
            id: "Italy",
            stage: 0
        }, {
            name: "Wayne ROONEY",
            short_name: "ROONEY",
            team: "England",
            club: "Manchester United FC",
            country: "England",
            type: "player",
            id: "Wayne ROONEY"
        }, {
            country: "England",
            premier: !0,
            rank: 303,
            country_rank: 2,
            team_count: 2,
            type: "club",
            id: "Aston Villa FC",
            confederation: "UEFA"
        }, {
            name: "Philipp LAHM",
            short_name: "LAHM",
            team: "Germany",
            club: "FC Bayern Muenchen",
            country: "Germany",
            type: "player",
            id: "Philipp LAHM"
        }, {
            name: "Ivica OLIC",
            short_name: "OLIÄ†",
            team: "Croatia",
            club: "VfL Wolfsburg",
            country: "Croatia",
            type: "player",
            id: "Ivica OLIC"
        }, {
            name: "Manuel NEUER",
            short_name: "NEUER",
            team: "Germany",
            club: "FC Bayern Muenchen",
            country: "Germany",
            type: "player",
            id: "Manuel NEUER"
        }, {
            country: "England",
            premier: !1,
            rank: 0,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Swindon Town FC",
            confederation: "UEFA"
        }, {
            name: "Roger ESPINOZA",
            short_name: "ESPINOZA",
            team: "Honduras",
            club: "Wigan Athletic FC",
            country: "Honduras",
            type: "player",
            id: "Roger ESPINOZA"
        }, {
            name: "Cesar AZPILICUETA",
            short_name: "AZPILICUETA",
            team: "Spain",
            club: "Chelsea FC",
            country: "Spain",
            type: "player",
            id: "Cesar AZPILICUETA"
        }, {
            name: "LEE Bumyoung",
            short_name: "B Y LEE",
            team: "South Korea",
            club: "Busan IPark FC",
            country: "South Korea",
            type: "player",
            id: "LEE Bumyoung"
        }, {
            country: "Italy",
            premier: !0,
            rank: 143,
            country_rank: 10,
            team_count: 1,
            type: "club",
            id: "Hellas Verona FC",
            confederation: "UEFA"
        }, {
            country: "France",
            premier: !1,
            rank: 39,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "Stade Rennais FC",
            confederation: "UEFA"
        }, {
            name: "Eden HAZARD",
            short_name: "E. HAZARD",
            team: "Belgium",
            club: "Chelsea FC",
            country: "Belgium",
            type: "player",
            id: "Eden HAZARD"
        }, {
            name: "Giovanni SIO",
            short_name: "SIO",
            team: "Ivory Coast",
            club: "FC Basel",
            country: "Ivory Coast",
            type: "player",
            id: "Giovanni SIO"
        }, {
            name: "VARELA",
            short_name: "VARELA",
            team: "Portugal",
            club: "FC Porto",
            country: "Portugal",
            type: "player",
            id: "VARELA"
        }, {
            name: "Luis SARITAMA",
            short_name: "SARITAMA",
            team: "Ecuador",
            club: "Barcelona SC",
            country: "Ecuador",
            type: "player",
            id: "Luis SARITAMA"
        }, {
            name: "Junior DIAZ",
            short_name: "DIAZ J.",
            team: "Costa Rica",
            club: "FSV Mainz 05",
            country: "Costa Rica",
            type: "player",
            id: "Junior DIAZ"
        }, {
            country: "Germany",
            premier: !0,
            rank: 475,
            country_rank: -1,
            team_count: 3,
            type: "club",
            id: "1. FC Nuernberg",
            confederation: "UEFA"
        }, {
            name: "Steven BEITASHOUR",
            short_name: "BEITASHOUR",
            team: "Iran",
            club: "Vancouver Whitecaps FC",
            country: "Iran",
            type: "player",
            id: "Steven BEITASHOUR"
        }, {
            name: "Philippe SENDEROS",
            short_name: "SENDEROS",
            team: "Switzerland",
            club: "Valencia CF",
            country: "Switzerland",
            type: "player",
            id: "Philippe SENDEROS"
        }, {
            country: "Germany",
            premier: !0,
            rank: 6,
            country_rank: -1,
            team_count: 3,
            type: "club",
            id: "Borussia Dortmund",
            confederation: "UEFA"
        }, {
            name: "Simon MIGNOLET",
            short_name: "MIGNOLET",
            team: "Belgium",
            club: "Liverpool FC",
            country: "Belgium",
            type: "player",
            id: "Simon MIGNOLET"
        }, {
            country: "Australia",
            premier: !1,
            rank: 811,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Melbourne Victory FC",
            confederation: "AFC"
        }, {
            name: "Antonio VALENCIA",
            short_name: "A. VALENCIA",
            team: "Ecuador",
            club: "Manchester United FC",
            country: "Ecuador",
            type: "player",
            id: "Antonio VALENCIA"
        }, {
            country: "Uruguay",
            premier: !0,
            rank: 999,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Club Nacional de Football",
            confederation: "CONMEBOL"
        }, {
            name: "Sergio RAMOS",
            short_name: "RAMOS",
            team: "Spain",
            club: "Real Madrid CF",
            country: "Spain",
            type: "player",
            id: "Sergio RAMOS"
        }, {
            name: "Yury ZHIRKOV",
            short_name: "ZHIRKOV",
            team: "Russia",
            club: "FC Dynamo Moscow",
            country: "Russia",
            type: "player",
            id: "Yury ZHIRKOV"
        }, {
            name: "Cedric SI MOHAMMED",
            short_name: "SI MOHAMMED",
            team: "Algeria",
            club: "CS Constantine",
            country: "Algeria",
            type: "player",
            id: "Cedric SI MOHAMMED"
        }, {
            name: "Thiago SILVA",
            short_name: "T SILVA",
            team: "Brazil",
            club: "Paris Saint-Germain FC",
            country: "Brazil",
            type: "player",
            id: "Thiago SILVA"
        }, {
            name: "Pedro RODRIGUEZ",
            short_name: "PEDRO",
            team: "Spain",
            club: "FC Barcelona",
            country: "Spain",
            type: "player",
            id: "Pedro RODRIGUEZ"
        }, {
            name: "PARK Jongwoo",
            short_name: "J W PARK",
            team: "South Korea",
            club: "Guangzhou R&amp;F FC",
            country: "South Korea",
            type: "player",
            id: "PARK Jongwoo"
        }, {
            name: "Nicolas LOMBAERTS",
            short_name: "LOMBAERTS",
            team: "Belgium",
            club: "FC Zenit St. Petersburg",
            country: "Belgium",
            type: "player",
            id: "Nicolas LOMBAERTS"
        }, {
            name: "Laurent KOSCIELNY",
            short_name: "KOSCIELNY",
            team: "France",
            club: "Arsenal FC",
            country: "France",
            type: "player",
            id: "Laurent KOSCIELNY"
        }, {
            country: "Croatia",
            premier: !1,
            rank: 656,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "NK Lokomotiva Zagreb",
            confederation: "UEFA"
        }, {
            name: "Benoit ASSOU EKOTTO",
            short_name: "ASSOU EKOTTO",
            team: "Cameroon",
            club: "Queens Park Rangers FC",
            country: "Cameroon",
            type: "player",
            id: "Benoit ASSOU EKOTTO"
        }, {
            country: "Denmark",
            premier: !1,
            rank: 197,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "FC Kobenhavn",
            confederation: "UEFA"
        }, {
            country: "South Korea",
            premier: !1,
            rank: 213,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Ulsan Hyundai FC",
            confederation: "AFC"
        }, {
            country: "Netherlands",
            premier: !1,
            rank: 518,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "SC Heracles Almelo",
            confederation: "UEFA"
        }, {
            country: "Mexico",
            premier: !0,
            rank: 999,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Deportivo Toluca FC",
            confederation: "CONCACAF"
        }, {
            name: "Jermaine JONES",
            short_name: "JONES",
            team: "USA",
            club: "Besiktas JK",
            country: "USA",
            type: "player",
            id: "Jermaine JONES"
        }, {
            country: "Germany",
            premier: !0,
            rank: 82,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "TSG 1899 Hoffenheim",
            confederation: "UEFA"
        }, {
            name: "Aleksei KOZLOV",
            short_name: "KOZLOV",
            team: "Russia",
            club: "FC Dynamo Moscow",
            country: "Russia",
            type: "player",
            id: "Aleksei KOZLOV"
        }, {
            name: "Diego REYES",
            short_name: "D REYES",
            team: "Mexico",
            club: "FC Porto",
            country: "Mexico",
            type: "player",
            id: "Diego REYES"
        }, {
            name: "Pejman MONTAZERI",
            short_name: "MONTAZERI",
            team: "Iran",
            club: "Umm Salal SC",
            country: "Iran",
            type: "player",
            id: "Pejman MONTAZERI"
        }, {
            country: "South Africa",
            premier: !1,
            rank: 348,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Orlando Pirates",
            confederation: "CAF"
        }, {
            name: "Samuel INKOOM",
            short_name: "INKOOM",
            team: "Ghana",
            club: "FC Platanias",
            country: "Ghana",
            type: "player",
            id: "Samuel INKOOM"
        }, {
            name: "Edison MENDEZ",
            short_name: "MENDEZ",
            team: "Ecuador",
            club: "Independiente Santa Fe",
            country: "Ecuador",
            type: "player",
            id: "Edison MENDEZ"
        }, {
            name: "Leonardo BONUCCI",
            short_name: "BONUCCI",
            team: "Italy",
            club: "Juventus FC",
            country: "Italy",
            type: "player",
            id: "Leonardo BONUCCI"
        }, {
            name: "Graham ZUSI",
            short_name: "ZUSI",
            team: "USA",
            club: "Sporting Kansas City",
            country: "USA",
            type: "player",
            id: "Graham ZUSI"
        }, {
            name: "Shuichi GONDA",
            short_name: "GONDA",
            team: "Japan",
            club: "FC Tokyo",
            country: "Japan",
            type: "player",
            id: "Shuichi GONDA"
        }, {
            country: "England",
            premier: !0,
            rank: 486,
            country_rank: 13,
            team_count: 2,
            type: "club",
            id: "Queens Park Rangers FC",
            confederation: "UEFA"
        }, {
            country: "Belgium",
            premier: !1,
            rank: 1553,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Cercle Brugge",
            confederation: "UEFA"
        }, {
            name: "Kevin GROSSKREUTZ",
            short_name: "GROÃŸKREUTZ",
            team: "Germany",
            club: "Borussia Dortmund",
            country: "Germany",
            type: "player",
            id: "Kevin GROSSKREUTZ"
        }, {
            name: "Mattia DE SCIGLIO",
            short_name: "DE SCIGLIO",
            team: "Italy",
            club: "AC Milan",
            country: "Italy",
            type: "player",
            id: "Mattia DE SCIGLIO"
        }, {
            name: "Miralem PJANIC",
            short_name: "PJANIÄ†",
            team: "Bosnia and Herzegovina",
            club: "AS Roma",
            country: "Bosnia and Herzegovina",
            type: "player",
            id: "Miralem PJANIC"
        }, {
            name: "Loukas VYNTRA",
            short_name: "VYNTRA",
            team: "Greece",
            club: "Levante UD",
            country: "Greece",
            type: "player",
            id: "Loukas VYNTRA"
        }, {
            name: "Rafik HALLICHE",
            short_name: "HALLICHE",
            team: "Algeria",
            club: "Academica Coimbra",
            country: "Algeria",
            type: "player",
            id: "Rafik HALLICHE"
        }, {
            name: "Jasper CILLESSEN",
            short_name: "CILLESSEN",
            team: "Netherlands",
            club: "AFC Ajax",
            country: "Netherlands",
            type: "player",
            id: "Jasper CILLESSEN"
        }, {
            name: "Michael BARRANTES",
            short_name: "BARRANTES M.",
            team: "Costa Rica",
            club: "Aalesunds FK",
            country: "Costa Rica",
            type: "player",
            id: "Michael BARRANTES"
        }, {
            country: "England",
            premier: !1,
            rank: 203,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "Wigan Athletic FC",
            confederation: "UEFA"
        }, {
            name: "Asamoah GYAN",
            short_name: "A. GYAN",
            team: "Ghana",
            club: "Al Ain FC",
            country: "Ghana",
            type: "player",
            id: "Asamoah GYAN"
        }, {
            country: "Iran",
            premier: !1,
            rank: 409,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Naft Tehran FC",
            confederation: "AFC"
        }, {
            name: "Edinson CAVANI",
            short_name: "CAVANI",
            team: "Uruguay",
            club: "Paris Saint-Germain FC",
            country: "Uruguay",
            type: "player",
            id: "Edinson CAVANI"
        }, {
            name: "HAN Kookyoung",
            short_name: "K Y HAN",
            team: "South Korea",
            club: "Kashiwa Reysol",
            country: "South Korea",
            type: "player",
            id: "HAN Kookyoung"
        }, {
            name: "Orestis KARNEZIS",
            short_name: "KARNEZIS",
            team: "Greece",
            club: "Granada CF",
            country: "Greece",
            type: "player",
            id: "Orestis KARNEZIS"
        }, {
            name: "KWAK Taehwi",
            short_name: "T H KWAK",
            team: "South Korea",
            club: "Al Hilal FC",
            country: "South Korea",
            type: "player",
            id: "KWAK Taehwi"
        }, {
            country: "England",
            premier: !0,
            rank: 46,
            country_rank: 14,
            team_count: 5,
            type: "club",
            id: "Southampton FC",
            confederation: "UEFA"
        }, {
            country: "Netherlands",
            premier: !0,
            rank: 999,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "SC Heerenveen",
            confederation: "UEFA"
        }, {
            name: "Shola AMEOBI",
            short_name: "AMEOBI",
            team: "Nigeria",
            club: "Newcastle United FC",
            country: "Nigeria",
            type: "player",
            id: "Shola AMEOBI"
        }, {
            name: "Pablo ARMERO",
            short_name: "P. ARMERO",
            team: "Colombia",
            club: "West Ham United FC",
            country: "Colombia",
            type: "player",
            id: "Pablo ARMERO"
        }, {
            name: "Salomon KALOU",
            short_name: "KALOU",
            team: "Ivory Coast",
            club: "Lille OSC",
            country: "Ivory Coast",
            type: "player",
            id: "Salomon KALOU"
        }, {
            country: "England",
            premier: !1,
            rank: 319,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Bolton Wanderers FC",
            confederation: "UEFA"
        }, {
            name: "Alex OXLADE CHAMBERLAIN",
            short_name: "CHAMBERLAIN",
            team: "England",
            club: "Arsenal FC",
            country: "England",
            type: "player",
            id: "Alex OXLADE CHAMBERLAIN"
        }, {
            country: "Russia",
            premier: !1,
            rank: 411,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "FC Anzhi Makhachkala",
            confederation: "UEFA"
        }, {
            name: "Panagiotis GLYKOS",
            short_name: "GLYKOS",
            team: "Greece",
            club: "PAOK FC",
            country: "Greece",
            type: "player",
            id: "Panagiotis GLYKOS"
        }, {
            name: "Boniek GARCIA",
            short_name: "BONIEK",
            team: "Honduras",
            club: "Houston Dynamo",
            country: "Honduras",
            type: "player",
            id: "Boniek GARCIA"
        }, {
            name: "Sergey IGNASHEVICH",
            short_name: "IGNASHEVICH",
            team: "Russia",
            club: "CSKA Moscow",
            country: "Russia",
            type: "player",
            id: "Sergey IGNASHEVICH"
        }, {
            country: "Saudi Arabia",
            premier: !1,
            rank: 50,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "Al Hilal FC",
            confederation: "AFC"
        }, {
            name: "Samuel ETOO",
            short_name: "ETO'O",
            team: "Cameroon",
            club: "Chelsea FC",
            country: "Cameroon",
            type: "player",
            id: "Samuel ETOO"
        }, {
            name: "Alvaro PEREIRA",
            short_name: "A. PEREIRA",
            team: "Uruguay",
            club: "Sao Paulo FC",
            country: "Uruguay",
            type: "player",
            id: "Alvaro PEREIRA"
        }, {
            name: "Matthias GINTER",
            short_name: "GINTER",
            team: "Germany",
            club: "SC Freiburg",
            country: "Germany",
            type: "player",
            id: "Matthias GINTER"
        }, {
            name: "Georgios TZAVELAS",
            short_name: "TZAVELLAS",
            team: "Greece",
            club: "PAOK FC",
            country: "Greece",
            type: "player",
            id: "Georgios TZAVELAS"
        }, {
            name: "Carlos CARMONA",
            short_name: "CARMONA",
            team: "Chile",
            club: "Atalanta Bergamo",
            country: "Chile",
            type: "player",
            id: "Carlos CARMONA"
        }, {
            country: "Paraguay",
            premier: !1,
            rank: 105,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Club Libertad",
            confederation: "CONMEBOL"
        }, {
            group: "F",
            country: "Argentina",
            region: "South America",
            type: "team",
            id: "Argentina",
            stage: 3
        }, {
            name: "Walter AYOVI",
            short_name: "W. AYOVI",
            team: "Ecuador",
            club: "CF Pachuca",
            country: "Ecuador",
            type: "player",
            id: "Walter AYOVI"
        }, {
            name: "David OSPINA",
            short_name: "OSPINA",
            team: "Colombia",
            club: "OGC Nice",
            country: "Colombia",
            type: "player",
            id: "David OSPINA"
        }, {
            country: "Iran",
            premier: !1,
            rank: 172,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Esteghlal Tehran FC",
            confederation: "AFC"
        }, {
            name: "Laurent CIMAN",
            short_name: "CIMAN",
            team: "Belgium",
            club: "Standard Liege",
            country: "Belgium",
            type: "player",
            id: "Laurent CIMAN"
        }, {
            name: "Alvaro GONZALEZ",
            short_name: "A. GONZALEZ",
            team: "Uruguay",
            club: "SS Lazio",
            country: "Uruguay",
            type: "player",
            id: "Alvaro GONZALEZ"
        }, {
            name: "Nikica JELAVIC",
            short_name: "JELAVIÄ†",
            team: "Croatia",
            club: "Hull City FC",
            country: "Croatia",
            type: "player",
            id: "Nikica JELAVIC"
        }, {
            name: "MAXWELL",
            short_name: "MAXWELL",
            team: "Brazil",
            club: "Paris Saint-Germain FC",
            country: "Brazil",
            type: "player",
            id: "MAXWELL"
        }, {
            name: "Gonzalo JARA",
            short_name: "JARA",
            team: "Chile",
            club: "Nottingham Forest FC",
            country: "Chile",
            type: "player",
            id: "Gonzalo JARA"
        }, {
            name: "Chris WONDOLOWSKI",
            short_name: "WONDOLOWSKI",
            team: "USA",
            club: "San Jose Earthquakes",
            country: "USA",
            type: "player",
            id: "Chris WONDOLOWSKI"
        }, {
            country: "Italy",
            premier: !0,
            rank: 233,
            country_rank: 12,
            team_count: 1,
            type: "club",
            id: "UC Sampdoria",
            confederation: "UEFA"
        }, {
            name: "Wilfried BONY",
            short_name: "B. WILFRIED",
            team: "Ivory Coast",
            club: "Swansea City AFC",
            country: "Ivory Coast",
            type: "player",
            id: "Wilfried BONY"
        }, {
            country: "Germany",
            premier: !0,
            rank: 140,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "Eintracht Frankfurt",
            confederation: "UEFA"
        }, {
            name: "Paul POGBA",
            short_name: "POGBA",
            team: "France",
            club: "Juventus FC",
            country: "France",
            type: "player",
            id: "Paul POGBA"
        }, {
            name: "Ruben AMORIM",
            short_name: "R. AMORIM",
            team: "Portugal",
            club: "SL Benfica",
            country: "Portugal",
            type: "player",
            id: "Ruben AMORIM"
        }, {
            name: "Jose CORONA",
            short_name: "J CORONA",
            team: "Mexico",
            club: "Cruz Azul FC",
            country: "Mexico",
            type: "player",
            id: "Jose CORONA"
        }, {
            name: "Bryan RUIZ",
            short_name: "RUIZ B.",
            team: "Costa Rica",
            club: "PSV Eindhoven",
            country: "Costa Rica",
            type: "player",
            id: "Bryan RUIZ"
        }, {
            name: "Haris SEFEROVIC",
            short_name: "SEFEROVIC",
            team: "Switzerland",
            club: "Real Sociedad",
            country: "Switzerland",
            type: "player",
            id: "Haris SEFEROVIC"
        }, {
            country: "Spain",
            premier: !1,
            rank: 999,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "RCD Mallorca",
            confederation: "UEFA"
        }, {
            country: "Portugal",
            premier: !1,
            rank: 21,
            country_rank: -1,
            team_count: 7,
            type: "club",
            id: "FC Porto",
            confederation: "UEFA"
        }, {
            country: "United States",
            premier: !0,
            rank: 849,
            country_rank: 7,
            team_count: 2,
            type: "club",
            id: "Houston Dynamo",
            confederation: "CONCACAF"
        }, {
            country: "Germany",
            premier: !0,
            rank: 2,
            country_rank: -1,
            team_count: 8,
            type: "club",
            id: "FC Bayern Muenchen",
            confederation: "UEFA"
        }, {
            name: "Igor DENISOV",
            short_name: "DENISOV",
            team: "Russia",
            club: "FC Dynamo Moscow",
            country: "Russia",
            type: "player",
            id: "Igor DENISOV"
        }, {
            country: "Italy",
            premier: !0,
            rank: 459,
            country_rank: 19,
            team_count: 2,
            type: "club",
            id: "Bologna FC",
            confederation: "UEFA"
        }, {
            name: "Fernando TORRES",
            short_name: "TORRES",
            team: "Spain",
            club: "Chelsea FC",
            country: "Spain",
            type: "player",
            id: "Fernando TORRES"
        }, {
            name: "Wesley SNEIJDER",
            short_name: "SNEIJDER",
            team: "Netherlands",
            club: "Galatasaray SK",
            country: "Netherlands",
            type: "player",
            id: "Wesley SNEIJDER"
        }, {
            name: "RAMIRES",
            short_name: "RAMIRES",
            team: "Brazil",
            club: "Chelsea FC",
            country: "Brazil",
            type: "player",
            id: "RAMIRES"
        }, {
            name: "Georgy SHCHENNIKOV",
            short_name: "SHCHENNIKOV",
            team: "Russia",
            club: "CSKA Moscow",
            country: "Russia",
            type: "player",
            id: "Georgy SHCHENNIKOV"
        }, {
            name: "Jordi ALBA",
            short_name: "JORDI ALBA",
            team: "Spain",
            club: "FC Barcelona",
            country: "Spain",
            type: "player",
            id: "Jordi ALBA"
        }, {
            name: "Fernando GAGO",
            short_name: "GAGO",
            team: "Argentina",
            club: "CA Boca Juniors",
            country: "Argentina",
            type: "player",
            id: "Fernando GAGO"
        }, {
            name: "Sead KOLASINAC",
            short_name: "KOLAÅ INAC",
            team: "Bosnia and Herzegovina",
            club: "FC Schalke 04",
            country: "Bosnia and Herzegovina",
            type: "player",
            id: "Sead KOLASINAC"
        }, {
            name: "Carlo COSTLY",
            short_name: "COSTLY",
            team: "Honduras",
            club: "Real Espana",
            country: "Honduras",
            type: "player",
            id: "Carlo COSTLY"
        }, {
            country: "Russia",
            premier: !1,
            rank: 221,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "FC Dynamo Moscow",
            confederation: "UEFA"
        }, {
            name: "Ismael TIOTE",
            short_name: "TIOTE",
            team: "Ivory Coast",
            club: "Newcastle United FC",
            country: "Ivory Coast",
            type: "player",
            id: "Ismael TIOTE"
        }, {
            country: "Cameroon",
            premier: !1,
            rank: 154,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Coton Sport FC",
            confederation: "CAF"
        }, {
            name: "Alireza JAHAN BAKHSH",
            short_name: "ALIREZA",
            team: "Iran",
            club: "NEC Nijmegen",
            country: "Iran",
            type: "player",
            id: "Alireza JAHAN BAKHSH"
        }, {
            name: "Islam SLIMANI",
            short_name: "SLIMANI",
            team: "Algeria",
            club: "Sporting CP",
            country: "Algeria",
            type: "player",
            id: "Islam SLIMANI"
        }, {
            country: "England",
            premier: !0,
            rank: 0,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Leicester City FC",
            confederation: "UEFA"
        }, {
            name: "Nacer CHADLI",
            short_name: "CHADLI",
            team: "Belgium",
            club: "Tottenham Hotspur FC",
            country: "Belgium",
            type: "player",
            id: "Nacer CHADLI"
        }, {
            name: "Rais MBOLHI",
            short_name: "RAIS",
            team: "Algeria",
            club: "CSKA Sofia",
            country: "Algeria",
            type: "player",
            id: "Rais MBOLHI"
        }, {
            name: "Santiago ARIAS",
            short_name: "ARIAS",
            team: "Colombia",
            club: "PSV Eindhoven",
            country: "Colombia",
            type: "player",
            id: "Santiago ARIAS"
        }, {
            country: "France",
            premier: !1,
            rank: 79,
            country_rank: -1,
            team_count: 3,
            type: "club",
            id: "Olympique Marseille",
            confederation: "UEFA"
        }, {
            name: "CRISTIANO RONALDO",
            short_name: "RONALDO",
            team: "Portugal",
            club: "Real Madrid CF",
            country: "Portugal",
            type: "player",
            id: "CRISTIANO RONALDO"
        }, {
            name: "Blaise MATUIDI",
            short_name: "MATUIDI",
            team: "France",
            club: "Paris Saint-Germain FC",
            country: "France",
            type: "player",
            id: "Blaise MATUIDI"
        }, {
            country: "United States",
            premier: !1,
            rank: 883,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "New England Revolution",
            confederation: "CONCACAF"
        }, {
            name: "Marcelo BROZOVIC",
            short_name: "BROZOVIÄ†",
            team: "Croatia",
            club: "GNK Dinamo Zagreb",
            country: "Croatia",
            type: "player",
            id: "Marcelo BROZOVIC"
        }, {
            name: "Enner VALENCIA",
            short_name: "E. VALENCIA",
            team: "Ecuador",
            club: "CF Pachuca",
            country: "Ecuador",
            type: "player",
            id: "Enner VALENCIA"
        }, {
            group: "D",
            country: "England",
            region: "Europe",
            type: "team",
            id: "England",
            stage: 0
        }, {
            name: "Daniel STURRIDGE",
            short_name: "STURRIDGE",
            team: "England",
            club: "Liverpool FC",
            country: "England",
            type: "player",
            id: "Daniel STURRIDGE"
        }, {
            name: "EDUARDO",
            short_name: "EDUARDO",
            team: "Portugal",
            club: "Sporting Braga",
            country: "Portugal",
            type: "player",
            id: "EDUARDO"
        }, {
            name: "Andre SCHUERRLE",
            short_name: "SCHÃœRRLE",
            team: "Germany",
            club: "Chelsea FC",
            country: "Germany",
            type: "player",
            id: "Andre SCHUERRLE"
        }, {
            country: "Netherlands",
            premier: !1,
            rank: 86,
            country_rank: -1,
            team_count: 3,
            type: "club",
            id: "PSV Eindhoven",
            confederation: "UEFA"
        }, {
            country: "Germany",
            premier: !0,
            rank: 18,
            country_rank: -1,
            team_count: 6,
            type: "club",
            id: "FC Schalke 04",
            confederation: "UEFA"
        }, {
            name: "Javi MARTINEZ",
            short_name: "JAVI MARTÃNEZ",
            team: "Spain",
            club: "FC Bayern Muenchen",
            country: "Spain",
            type: "player",
            id: "Javi MARTINEZ"
        }, {
            name: "Lucas BIGLIA",
            short_name: "BIGLIA",
            team: "Argentina",
            club: "SS Lazio",
            country: "Argentina",
            type: "player",
            id: "Lucas BIGLIA"
        }, {
            name: "Enoh EYONG",
            short_name: "ENOH",
            team: "Cameroon",
            club: "Antalyaspor AS",
            country: "Cameroon",
            type: "player",
            id: "Enoh EYONG"
        }, {
            name: "Cristhian STUANI",
            short_name: "STUANI",
            team: "Uruguay",
            club: "RCD Espanyol",
            country: "Uruguay",
            type: "player",
            id: "Cristhian STUANI"
        }, {
            name: "Paul AGUILAR",
            short_name: "P AGUILAR",
            team: "Mexico",
            club: "Club America",
            country: "Mexico",
            type: "player",
            id: "Paul AGUILAR"
        }, {
            country: "Chile",
            premier: !1,
            rank: 268,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Club Universidad de Chile",
            confederation: "CONMEBOL"
        }, {
            name: "Miguel LAYUN",
            short_name: "M LAYUN",
            team: "Mexico",
            club: "Club America",
            country: "Mexico",
            type: "player",
            id: "Miguel LAYUN"
        }, {
            country: "Portugal",
            premier: !1,
            rank: 11,
            country_rank: -1,
            team_count: 3,
            type: "club",
            id: "SL Benfica",
            confederation: "UEFA"
        }, {
            country: "Colombia",
            premier: !1,
            rank: 405,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "CD Olimpia",
            confederation: "CONMEBOL"
        }, {
            name: "Tommy OAR",
            short_name: "OAR",
            team: "Australia",
            club: "FC Utrecht",
            country: "Australia",
            type: "player",
            id: "Tommy OAR"
        }, {
            name: "Iker CASILLAS",
            short_name: "I. CASILLAS",
            team: "Spain",
            club: "Real Madrid CF",
            country: "Spain",
            type: "player",
            id: "Iker CASILLAS"
        }, {
            name: "Egidio AREVALO",
            short_name: "AREVALO RIOS",
            team: "Uruguay",
            club: "CA Monarcas Morelia",
            country: "Uruguay",
            type: "player",
            id: "Egidio AREVALO"
        }, {
            name: "Ejike UZOENYI",
            short_name: "UZOENYI",
            team: "Nigeria",
            club: "Enugu Rangers FC",
            country: "Nigeria",
            type: "player",
            id: "Ejike UZOENYI"
        }, {
            country: "Argentina",
            premier: !1,
            rank: 113,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "CA Newells Old Boys",
            confederation: "CONMEBOL"
        }, {
            country: "Brazil",
            premier: !1,
            rank: 334,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Palmeiras",
            confederation: "CONMEBOL"
        }, {
            country: "Croatia",
            premier: !1,
            rank: 359,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "HNK Hajduk Split",
            confederation: "UEFA"
        }, {
            name: "Adrian BONE",
            short_name: "BONE",
            team: "Ecuador",
            club: "CD El Nacional",
            country: "Ecuador",
            type: "player",
            id: "Adrian BONE"
        }, {
            name: "Raul MEIRELES",
            short_name: "R. MEIRELES",
            team: "Portugal",
            club: "Fenerbahce SK",
            country: "Portugal",
            type: "player",
            id: "Raul MEIRELES"
        }, {
            name: "Abel HERNANDEZ",
            short_name: "HERNANDEZ",
            team: "Uruguay",
            club: "US Citta di Palermo",
            country: "Uruguay",
            type: "player",
            id: "Abel HERNANDEZ"
        }, {
            name: "Ahmad ALNAMEH",
            short_name: "AHMAD",
            team: "Iran",
            club: "Naft Tehran FC",
            country: "Iran",
            type: "player",
            id: "Ahmad ALNAMEH"
        }, {
            name: "Admir MEHMEDI",
            short_name: "MEHMEDI",
            team: "Switzerland",
            club: "SC Freiburg",
            country: "Switzerland",
            type: "player",
            id: "Admir MEHMEDI"
        }, {
            name: "Leroy FER",
            short_name: "FER",
            team: "Netherlands",
            club: "Norwich City FC",
            country: "Netherlands",
            type: "player",
            id: "Leroy FER"
        }, {
            name: "Victor FAYZULIN",
            short_name: "FAYZULIN",
            team: "Russia",
            club: "FC Zenit St. Petersburg",
            country: "Russia",
            type: "player",
            id: "Victor FAYZULIN"
        }, {
            name: "Okechukwu UCHEBO",
            short_name: "UCHEBO",
            team: "Nigeria",
            club: "Cercle Brugge",
            country: "Nigeria",
            type: "player",
            id: "Okechukwu UCHEBO"
        }, {
            name: "Reza GHOOCHANNEJAD",
            short_name: "REZA",
            team: "Iran",
            club: "Charlton Athletic FC",
            country: "Iran",
            type: "player",
            id: "Reza GHOOCHANNEJAD"
        }, {
            country: "Norway",
            premier: !1,
            rank: 1328,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Stabaek IF",
            confederation: "UEFA"
        }, {
            name: "Mitch LANGERAK",
            short_name: "LANGERAK",
            team: "Australia",
            club: "Borussia Dortmund",
            country: "Australia",
            type: "player",
            id: "Mitch LANGERAK"
        }, {
            name: "Robin VAN PERSIE",
            short_name: "V. PERSIE",
            team: "Netherlands",
            club: "Manchester United FC",
            country: "Netherlands",
            type: "player",
            id: "Robin VAN PERSIE"
        }, {
            name: "Thibaut COURTOIS",
            short_name: "COURTOIS",
            team: "Belgium",
            club: "Atletico Madrid",
            country: "Belgium",
            type: "player",
            id: "Thibaut COURTOIS"
        }, {
            name: "El Arabi SOUDANI",
            short_name: "SOUDANI",
            team: "Algeria",
            club: "GNK Dinamo Zagreb",
            country: "Algeria",
            type: "player",
            id: "El Arabi SOUDANI"
        }, {
            name: "Ognjen VUKOJEVIC",
            short_name: "VUKOJEVIÄ†",
            team: "Croatia",
            club: "FC Dynamo Kyiv",
            country: "Croatia",
            type: "player",
            id: "Ognjen VUKOJEVIC"
        }, {
            country: "Mexico",
            premier: !1,
            rank: 615,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Puebla FC",
            confederation: "CONCACAF"
        }, {
            name: "Juan QUINTERO",
            short_name: "QUINTERO",
            team: "Colombia",
            club: "FC Porto",
            country: "Colombia",
            type: "player",
            id: "Juan QUINTERO"
        }, {
            name: "Pavel MOGILEVETC",
            short_name: "MOGILEVETC",
            team: "Russia",
            club: "FC Rubin Kazan",
            country: "Russia",
            type: "player",
            id: "Pavel MOGILEVETC"
        }, {
            country: "Belgium",
            premier: !1,
            rank: 81,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "RSC Anderlecht",
            confederation: "UEFA"
        }, {
            name: "Michael BABATUNDE",
            short_name: "BABATUNDE",
            team: "Nigeria",
            club: "FC Volyn Lutsk",
            country: "Nigeria",
            type: "player",
            id: "Michael BABATUNDE"
        }, {
            name: "Gordon SCHILDENFELD",
            short_name: "SCHILDENFELD",
            team: "Croatia",
            club: "Panathinaikos FC",
            country: "Croatia",
            type: "player",
            id: "Gordon SCHILDENFELD"
        }, {
            name: "Souleymane BAMBA",
            short_name: "BAMBA",
            team: "Ivory Coast",
            club: "Trabzonspor",
            country: "Ivory Coast",
            type: "player",
            id: "Souleymane BAMBA"
        }, {
            name: "Masato MORISHIGE",
            short_name: "MORISHIGE",
            team: "Japan",
            club: "FC Tokyo",
            country: "Japan",
            type: "player",
            id: "Masato MORISHIGE"
        }, {
            country: "Brazil",
            premier: !1,
            rank: 117,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Fluminense FC",
            confederation: "CONMEBOL"
        }, {
            country: "Ukraine",
            premier: !1,
            rank: 1299,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "FC Volyn Lutsk",
            confederation: "UEFA"
        }, {
            country: "France",
            premier: !1,
            rank: 250,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "FC Nantes",
            confederation: "UEFA"
        }, {
            name: "Thomas MUELLER",
            short_name: "MÃœLLER",
            team: "Germany",
            club: "FC Bayern Muenchen",
            country: "Germany",
            type: "player",
            id: "Thomas MUELLER"
        }, {
            name: "Maksim KANUNNIKOV",
            short_name: "KANUNNIKOV",
            team: "Russia",
            club: "FK Amkar Perm",
            country: "Russia",
            type: "player",
            id: "Maksim KANUNNIKOV"
        }, {
            name: "Lukas PODOLSKI",
            short_name: "PODOLSKI",
            team: "Germany",
            club: "Arsenal FC",
            country: "Germany",
            type: "player",
            id: "Lukas PODOLSKI"
        }, {
            name: "Ivan MOCINIC",
            short_name: "MOÄŒINIÄ†",
            team: "Croatia",
            club: "HNK Rijeka",
            country: "Croatia",
            type: "player",
            id: "Ivan MOCINIC"
        }, {
            name: "Mario BALOTELLI",
            short_name: "BALOTELLI",
            team: "Italy",
            club: "AC Milan",
            country: "Italy",
            type: "player",
            id: "Mario BALOTELLI"
        }, {
            name: "Blerim DZEMAILI",
            short_name: "DZEMAILI",
            team: "Switzerland",
            club: "SSC Napoli",
            country: "Switzerland",
            type: "player",
            id: "Blerim DZEMAILI"
        }, {
            name: "Carlos SALCIDO",
            short_name: "C SALCIDO",
            team: "Mexico",
            club: "Tigres UANL",
            country: "Mexico",
            type: "player",
            id: "Carlos SALCIDO"
        }, {
            name: "Stefanos KAPINO",
            short_name: "KAPINO",
            team: "Greece",
            club: "Panathinaikos FC",
            country: "Greece",
            type: "player",
            id: "Stefanos KAPINO"
        }, {
            name: "Madjid BOUGUERRA",
            short_name: "BOUGUERRA",
            team: "Algeria",
            club: "Lekhwiya SC",
            country: "Algeria",
            type: "player",
            id: "Madjid BOUGUERRA"
        }, {
            name: "Francisco RODRIGUEZ",
            short_name: "F RODRIGUEZ",
            team: "Mexico",
            club: "Club America",
            country: "Mexico",
            type: "player",
            id: "Francisco RODRIGUEZ"
        }, {
            country: "Ukraine",
            premier: !1,
            rank: 17,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "Shakhtar Donetsk",
            confederation: "UEFA"
        }, {
            group: "H",
            country: "Russia",
            region: "Europe",
            type: "team",
            id: "Russia",
            stage: 0
        }, {
            name: "Jose FUENZALIDA",
            short_name: "FUENZALIDA",
            team: "Chile",
            club: "CSD Colo-Colo",
            country: "Chile",
            type: "player",
            id: "Jose FUENZALIDA"
        }, {
            name: "Karim BENZEMA",
            short_name: "BENZEMA",
            team: "France",
            club: "Real Madrid CF",
            country: "France",
            type: "player",
            id: "Karim BENZEMA"
        }, {
            country: "China PR",
            premier: !1,
            rank: 66,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Guangzhou Evergrande FC",
            confederation: "AFC"
        }, {
            name: "Adrian RAMOS",
            short_name: "RAMOS",
            team: "Colombia",
            club: "Hertha BSC",
            country: "Colombia",
            type: "player",
            id: "Adrian RAMOS"
        }, {
            name: "PARK Jooho",
            short_name: "J H PARK",
            team: "South Korea",
            club: "FSV Mainz 05",
            country: "South Korea",
            type: "player",
            id: "PARK Jooho"
        }, {
            name: "Jason DAVIDSON",
            short_name: "DAVIDSON",
            team: "Australia",
            club: "SC Heracles Almelo",
            country: "Australia",
            type: "player",
            id: "Jason DAVIDSON"
        }, {
            country: "Italy",
            premier: !0,
            rank: 3,
            country_rank: 1,
            team_count: 6,
            type: "club",
            id: "Juventus FC",
            confederation: "UEFA"
        }, {
            name: "Tim HOWARD",
            short_name: "HOWARD",
            team: "USA",
            club: "Everton FC",
            country: "USA",
            type: "player",
            id: "Tim HOWARD"
        }, {
            group: "C",
            country: "Japan",
            region: "Asia",
            type: "team",
            id: "Japan",
            stage: 0
        }, {
            name: "Joao MOUTINHO",
            short_name: "J. MOUTINHO",
            team: "Portugal",
            club: "AS Monaco",
            country: "Portugal",
            type: "player",
            id: "Joao MOUTINHO"
        }, {
            country: "Switzerland",
            premier: !1,
            rank: 591,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "FC Luzern",
            confederation: "UEFA"
        }, {
            country: "China PR",
            premier: !1,
            rank: 794,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Guizhou Renhe FC",
            confederation: "AFC"
        }, {
            name: "Alexey IONOV",
            short_name: "IONOV",
            team: "Russia",
            club: "FC Dynamo Moscow",
            country: "Russia",
            type: "player",
            id: "Alexey IONOV"
        }, {
            name: "Stephane RUFFIER",
            short_name: "RUFFIER",
            team: "France",
            club: "AS Saint-Etienne",
            country: "France",
            type: "player",
            id: "Stephane RUFFIER"
        }, {
            name: "SON Heungmin",
            short_name: "H M SON",
            team: "South Korea",
            club: "Bayer 04 Leverkusen",
            country: "South Korea",
            type: "player",
            id: "SON Heungmin"
        }, {
            name: "Segundo CASTILLO",
            short_name: "CASTILLO",
            team: "Ecuador",
            club: "Al Hilal FC",
            country: "Ecuador",
            type: "player",
            id: "Segundo CASTILLO"
        }, {
            name: "Eiji KAWASHIMA",
            short_name: "KAWASHIMA",
            team: "Japan",
            club: "Standard Liege",
            country: "Japan",
            type: "player",
            id: "Eiji KAWASHIMA"
        }, {
            name: "Joel VELTMAN",
            short_name: "VELTMAN",
            team: "Netherlands",
            club: "AFC Ajax",
            country: "Netherlands",
            type: "player",
            id: "Joel VELTMAN"
        }, {
            name: "Andrey SEMENOV",
            short_name: "SEMENOV",
            team: "Russia",
            club: "FC Terek Grozny",
            country: "Russia",
            type: "player",
            id: "Andrey SEMENOV"
        }, {
            name: "KOKE",
            short_name: "KOKE",
            team: "Spain",
            club: "Atletico Madrid",
            country: "Spain",
            type: "player",
            id: "KOKE"
        }, {
            country: "Spain",
            premier: !0,
            rank: 132,
            country_rank: 13,
            team_count: 2,
            type: "club",
            id: "Getafe CF",
            confederation: "UEFA"
        }, {
            name: "Joao ROJAS",
            short_name: "ROJAS",
            team: "Ecuador",
            club: "Cruz Azul FC",
            country: "Ecuador",
            type: "player",
            id: "Joao ROJAS"
        }, {
            name: "JEFFERSON",
            short_name: "JEFFERSON",
            team: "Brazil",
            club: "Botafogo FR",
            country: "Brazil",
            type: "player",
            id: "JEFFERSON"
        }, {
            name: "Oscar GRANADOS",
            short_name: "GRANADOS O.",
            team: "Costa Rica",
            club: "CS Herediano",
            country: "Costa Rica",
            type: "player",
            id: "Oscar GRANADOS"
        }, {
            group: "C",
            country: "Ivory Coast",
            region: "Africa",
            type: "team",
            id: "Ivory Coast",
            stage: 0
        }, {
            country: "Brazil",
            premier: !1,
            rank: 158,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "SC Internacional",
            confederation: "CONMEBOL"
        }, {
            name: "Sergio AGUERO",
            short_name: "AGUERO",
            team: "Argentina",
            club: "Manchester City FC",
            country: "Argentina",
            type: "player",
            id: "Sergio AGUERO"
        }, {
            name: "Djamel MESBAH",
            short_name: "MESBAH",
            team: "Algeria",
            club: "AS Livorno",
            country: "Algeria",
            type: "player",
            id: "Djamel MESBAH"
        }, {
            name: "Juan Carlos GARCIA",
            short_name: "J.C. GARCIA",
            team: "Honduras",
            club: "Wigan Athletic FC",
            country: "Honduras",
            type: "player",
            id: "Juan Carlos GARCIA"
        }, {
            country: "Ukraine",
            premier: !1,
            rank: 476,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "FC Zorya Lugansk",
            confederation: "UEFA"
        }, {
            country: "Argentina",
            premier: !1,
            rank: 88,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "CA San Lorenzo de Almagro",
            confederation: "CONMEBOL"
        }, {
            name: "Ismael DIOMANDE",
            short_name: "DIOMANDE",
            team: "Ivory Coast",
            club: "AS Saint-Etienne",
            country: "Ivory Coast",
            type: "player",
            id: "Ismael DIOMANDE"
        }, {
            name: "JUNG Sungryong",
            short_name: "S R JUNG",
            team: "South Korea",
            club: "Suwon Bluewings FC",
            country: "South Korea",
            type: "player",
            id: "JUNG Sungryong"
        }, {
            name: "KIM Changsoo",
            short_name: "C S KIM",
            team: "South Korea",
            club: "Kashiwa Reysol",
            country: "South Korea",
            type: "player",
            id: "KIM Changsoo"
        }, {
            name: "Loic FEUDJOU",
            short_name: "FEUDJOU",
            team: "Cameroon",
            club: "Coton Sport FC",
            country: "Cameroon",
            type: "player",
            id: "Loic FEUDJOU"
        }, {
            name: "Ivan FRANJIC",
            short_name: "FRANJIC",
            team: "Australia",
            club: "Brisbane Roar FC",
            country: "Australia",
            type: "player",
            id: "Ivan FRANJIC"
        }, {
            country: "Turkey",
            premier: !0,
            rank: 999,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Fethiyespor",
            confederation: "UEFA"
        }, {
            name: "Henri BEDIMO",
            short_name: "BEDIMO",
            team: "Cameroon",
            club: "Olympique Lyonnais",
            country: "Cameroon",
            type: "player",
            id: "Henri BEDIMO"
        }, {
            country: "Nigeria",
            premier: !0,
            rank: 999,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Enugu Rangers FC",
            confederation: "CAF"
        }, {
            name: "Aron JOHANNSSON",
            short_name: "JOHANNSSON",
            team: "USA",
            club: "AZ Alkmaar",
            country: "USA",
            type: "player",
            id: "Aron JOHANNSSON"
        }, {
            country: "Mexico",
            premier: !1,
            rank: 276,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "CA Monarcas Morelia",
            confederation: "CONCACAF"
        }, {
            name: "FERNANDINHO",
            short_name: "FERNANDINHO",
            team: "Brazil",
            club: "Manchester City FC",
            country: "Brazil",
            type: "player",
            id: "FERNANDINHO"
        }, {
            name: "Alexander KOKORIN",
            short_name: "KOKORIN",
            team: "Russia",
            club: "FC Dynamo Moscow",
            country: "Russia",
            type: "player",
            id: "Alexander KOKORIN"
        }, {
            name: "Jefferson MONTERO",
            short_name: "MONTERO",
            team: "Ecuador",
            club: "CA Monarcas Morelia",
            country: "Ecuador",
            type: "player",
            id: "Jefferson MONTERO"
        }, {
            group: "B",
            country: "Chile",
            region: "South America",
            type: "team",
            id: "Chile",
            stage: 1
        }, {
            name: "Kwadwo ASAMOAH",
            short_name: "K. ASAMOAH",
            team: "Ghana",
            club: "Juventus FC",
            country: "Ghana",
            type: "player",
            id: "Kwadwo ASAMOAH"
        }, {
            name: "Bruno ALVES",
            short_name: "B. ALVES",
            team: "Portugal",
            club: "Fenerbahce SK",
            country: "Portugal",
            type: "player",
            id: "Bruno ALVES"
        }, {
            name: "Christian ATSU",
            short_name: "ATSU",
            team: "Ghana",
            club: "Vitesse Arnheim",
            country: "Ghana",
            type: "player",
            id: "Christian ATSU"
        }, {
            name: "Mathieu DEBUCHY",
            short_name: "DEBUCHY",
            team: "France",
            club: "Newcastle United FC",
            country: "France",
            type: "player",
            id: "Mathieu DEBUCHY"
        }, {
            name: "Omar GONZALEZ",
            short_name: "GONZALEZ",
            team: "USA",
            club: "Los Angeles Galaxy",
            country: "USA",
            type: "player",
            id: "Omar GONZALEZ"
        }, {
            name: "Yohan CABAYE",
            short_name: "CABAYE",
            team: "France",
            club: "Paris Saint-Germain FC",
            country: "France",
            type: "player",
            id: "Yohan CABAYE"
        }, {
            name: "Pablo ZABALETA",
            short_name: "ZABALETA",
            team: "Argentina",
            club: "Manchester City FC",
            country: "Argentina",
            type: "player",
            id: "Pablo ZABALETA"
        }, {
            name: "Luke SHAW",
            short_name: "SHAW",
            team: "England",
            club: "Southampton FC",
            country: "England",
            type: "player",
            id: "Luke SHAW"
        }, {
            country: "Turkey",
            premier: !1,
            rank: 713,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Kayserispor",
            confederation: "UEFA"
        }, {
            name: "Javad NEKOUNAM",
            short_name: "J. NEKOUNAM",
            team: "Iran",
            club: "Kuwait SC",
            country: "Iran",
            type: "player",
            id: "Javad NEKOUNAM"
        }, {
            name: "Andre ALMEIDA",
            short_name: "A. ALMEIDA",
            team: "Portugal",
            club: "SL Benfica",
            country: "Portugal",
            type: "player",
            id: "Andre ALMEIDA"
        }, {
            name: "Helder POSTIGA",
            short_name: "H. POSTIGA",
            team: "Portugal",
            club: "SS Lazio",
            country: "Portugal",
            type: "player",
            id: "Helder POSTIGA"
        }, {
            name: "Eduardo VARGAS",
            short_name: "VARGAS",
            team: "Chile",
            club: "Valencia CF",
            country: "Chile",
            type: "player",
            id: "Eduardo VARGAS"
        }, {
            country: "Italy",
            premier: !0,
            rank: 29,
            country_rank: 4,
            team_count: 3,
            type: "club",
            id: "ACF Fiorentina",
            confederation: "UEFA"
        }, {
            group: "A",
            country: "Croatia",
            region: "Europe",
            type: "team",
            id: "Croatia",
            stage: 0
        }, {
            name: "Alan PULIDO",
            short_name: "A PULIDO",
            team: "Mexico",
            club: "Tigres UANL",
            country: "Mexico",
            type: "player",
            id: "Alan PULIDO"
        }, {
            group: "E",
            country: "Switzerland",
            region: "Europe",
            type: "team",
            id: "Switzerland",
            stage: 1
        }, {
            country: "United Arab Emirates",
            premier: !1,
            rank: 215,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Al Ain FC",
            confederation: "AFC"
        }, {
            country: "Spain",
            premier: !0,
            rank: 212,
            country_rank: 14,
            team_count: 2,
            type: "club",
            id: "RCD Espanyol",
            confederation: "UEFA"
        }, {
            name: "Constant DJAKPA",
            short_name: "DJAKPA",
            team: "Ivory Coast",
            club: "Eintracht Frankfurt",
            country: "Ivory Coast",
            type: "player",
            id: "Constant DJAKPA"
        }, {
            name: "Jean BEAUSEJOUR",
            short_name: "BEAUSEJOUR",
            team: "Chile",
            club: "Wigan Athletic FC",
            country: "Chile",
            type: "player",
            id: "Jean BEAUSEJOUR"
        }, {
            country: "Brazil",
            premier: !1,
            rank: 1277,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "CR Vasco da Gama",
            confederation: "CONMEBOL"
        }, {
            name: "Hossein MAHINI",
            short_name: "H. MAHINI",
            team: "Iran",
            club: "Perspolis FC",
            country: "Iran",
            type: "player",
            id: "Hossein MAHINI"
        }, {
            name: "Joseph YOBO",
            short_name: "YOBO",
            team: "Nigeria",
            club: "Norwich City FC",
            country: "Nigeria",
            type: "player",
            id: "Joseph YOBO"
        }, {
            group: "D",
            country: "Uruguay",
            region: "South America",
            type: "team",
            id: "Uruguay",
            stage: 1
        }, {
            country: "Portugal",
            premier: !1,
            rank: 45,
            country_rank: -1,
            team_count: 3,
            type: "club",
            id: "Sporting CP",
            confederation: "UEFA"
        }, {
            name: "Luis NETO",
            short_name: "NETO",
            team: "Portugal",
            club: "FC Zenit St. Petersburg",
            country: "Portugal",
            type: "player",
            id: "Luis NETO"
        }, {
            name: "WILLIAM",
            short_name: "WILLIAM",
            team: "Portugal",
            club: "Sporting CP",
            country: "Portugal",
            type: "player",
            id: "WILLIAM"
        }, {
            name: "Dani ALVES",
            short_name: "DANI ALVES",
            team: "Brazil",
            club: "FC Barcelona",
            country: "Brazil",
            type: "player",
            id: "Dani ALVES"
        }, {
            name: "Ermin BICAKCIC",
            short_name: "BIÄŒAKÄŒIÄ†",
            team: "Bosnia and Herzegovina",
            club: "Eintracht Braunschweig",
            country: "Bosnia and Herzegovina",
            type: "player",
            id: "Ermin BICAKCIC"
        }, {
            name: "Fabian SCHAER",
            short_name: "SCHÃ„R",
            team: "Switzerland",
            club: "FC Basel",
            country: "Switzerland",
            type: "player",
            id: "Fabian SCHAER"
        }, {
            name: "Glen JOHNSON",
            short_name: "JOHNSON",
            team: "England",
            club: "Liverpool FC",
            country: "England",
            type: "player",
            id: "Glen JOHNSON"
        }, {
            country: "England",
            premier: !1,
            rank: 424,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "Fulham FC",
            confederation: "UEFA"
        }, {
            name: "Roman WEIDENFELLER",
            short_name: "WEIDENFELLER",
            team: "Germany",
            club: "Borussia Dortmund",
            country: "Germany",
            type: "player",
            id: "Roman WEIDENFELLER"
        }, {
            name: "Randall BRENES",
            short_name: "BRENES R.",
            team: "Costa Rica",
            club: "CSD Cartagines",
            country: "Costa Rica",
            type: "player",
            id: "Randall BRENES"
        }, {
            name: "LUIZ GUSTAVO",
            short_name: "L GUSTAVO",
            team: "Brazil",
            club: "VfL Wolfsburg",
            country: "Brazil",
            type: "player",
            id: "LUIZ GUSTAVO"
        }, {
            country: "Croatia",
            premier: !1,
            rank: 121,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "GNK Dinamo Zagreb",
            confederation: "UEFA"
        }, {
            name: "Isaac BRIZUELA",
            short_name: "I BRIZUELA",
            team: "Mexico",
            club: "Deportivo Toluca FC",
            country: "Mexico",
            type: "player",
            id: "Isaac BRIZUELA"
        }, {
            group: "G",
            country: "USA",
            region: "North America",
            type: "team",
            id: "USA",
            stage: 1
        }, {
            name: "Juan MONTES",
            short_name: "MONTES",
            team: "Honduras",
            club: "CD Motagua",
            country: "Honduras",
            type: "player",
            id: "Juan MONTES"
        }, {
            name: "Matteo DARMIAN",
            short_name: "DARMIAN",
            team: "Italy",
            club: "Torino FC",
            country: "Italy",
            type: "player",
            id: "Matteo DARMIAN"
        }, {
            country: "Japan",
            premier: !1,
            rank: 398,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Kashiwa Reysol",
            confederation: "AFC"
        }, {
            name: "Javier HERNANDEZ",
            short_name: "J HERNANDEZ",
            team: "Mexico",
            club: "Manchester United FC",
            country: "Mexico",
            type: "player",
            id: "Javier HERNANDEZ"
        }, {
            name: "Efe AMBROSE",
            short_name: "AMBROSE",
            team: "Nigeria",
            club: "Celtic FC",
            country: "Nigeria",
            type: "player",
            id: "Efe AMBROSE"
        }, {
            country: "Bulgaria",
            premier: !1,
            rank: 91,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "CSKA Sofia",
            confederation: "UEFA"
        }, {
            name: "Aissa MANDI",
            short_name: "MANDI",
            team: "Algeria",
            club: "Stade de Reims",
            country: "Algeria",
            type: "player",
            id: "Aissa MANDI"
        }, {
            name: "Kevin MIRALLAS",
            short_name: "MIRALLAS",
            team: "Belgium",
            club: "Everton FC",
            country: "Belgium",
            type: "player",
            id: "Kevin MIRALLAS"
        }, {
            country: "Germany",
            premier: !0,
            rank: 63,
            country_rank: -1,
            team_count: 4,
            type: "club",
            id: "FSV Mainz 05",
            confederation: "UEFA"
        }, {
            name: "Carl MEDJANI",
            short_name: "MEDJANI",
            team: "Algeria",
            club: "Valenciennes FC",
            country: "Algeria",
            type: "player",
            id: "Carl MEDJANI"
        }, {
            country: "France",
            premier: !1,
            rank: 7,
            country_rank: -1,
            team_count: 5,
            type: "club",
            id: "Paris Saint-Germain FC",
            confederation: "UEFA"
        }, {
            name: "Daniel VAN BUYTEN",
            short_name: "VAN BUYTEN",
            team: "Belgium",
            club: "FC Bayern Muenchen",
            country: "Belgium",
            type: "player",
            id: "Daniel VAN BUYTEN"
        }, {
            country: "France",
            premier: !1,
            rank: 282,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "SC Bastia",
            confederation: "UEFA"
        }, {
            name: "Mickael LANDREAU",
            short_name: "LANDREAU",
            team: "France",
            club: "SC Bastia",
            country: "France",
            type: "player",
            id: "Mickael LANDREAU"
        }, {
            name: "JI Dongwon",
            short_name: "D W JI",
            team: "South Korea",
            club: "FC Augsburg",
            country: "South Korea",
            type: "player",
            id: "JI Dongwon"
        }, {
            name: "Sejad SALIHOVIC",
            short_name: "SALIHOVIÄ†",
            team: "Bosnia and Herzegovina",
            club: "TSG 1899 Hoffenheim",
            country: "Bosnia and Herzegovina",
            type: "player",
            id: "Sejad SALIHOVIC"
        }, {
            name: "Benedikt HOEWEDES",
            short_name: "HÃ–WEDES",
            team: "Germany",
            club: "FC Schalke 04",
            country: "Germany",
            type: "player",
            id: "Benedikt HOEWEDES"
        }, {
            country: "France",
            premier: !1,
            rank: 28,
            country_rank: -1,
            team_count: 4,
            type: "club",
            id: "AS Monaco",
            confederation: "UEFA"
        }, {
            name: "Josip DRMIC",
            short_name: "DRMIC",
            team: "Switzerland",
            club: "1. FC Nuernberg",
            country: "Switzerland",
            type: "player",
            id: "Josip DRMIC"
        }, {
            name: "Emir SPAHIC",
            short_name: "SPAHIÄ†",
            team: "Bosnia and Herzegovina",
            club: "Bayer 04 Leverkusen",
            country: "Bosnia and Herzegovina",
            type: "player",
            id: "Emir SPAHIC"
        }, {
            name: "Yann SOMMER",
            short_name: "SOMMER",
            team: "Switzerland",
            club: "FC Basel",
            country: "Switzerland",
            type: "player",
            id: "Yann SOMMER"
        }, {
            name: "Moussa SISSOKO",
            short_name: "SISSOKO",
            team: "France",
            club: "Newcastle United FC",
            country: "France",
            type: "player",
            id: "Moussa SISSOKO"
        }, {
            name: "Sami KHEDIRA",
            short_name: "KHEDIRA",
            team: "Germany",
            club: "Real Madrid CF",
            country: "Germany",
            type: "player",
            id: "Sami KHEDIRA"
        }, {
            name: "Luis GARRIDO",
            short_name: "GARRIDO",
            team: "Honduras",
            club: "CD Olimpia",
            country: "Honduras",
            type: "player",
            id: "Luis GARRIDO"
        }, {
            country: "Russia",
            premier: !0,
            rank: 999,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "FK Amkar Perm",
            confederation: "UEFA"
        }, {
            country: "United States",
            premier: !1,
            rank: 390,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Los Angeles Galaxy",
            confederation: "CONCACAF"
        }, {
            name: "Raul ALBIOL",
            short_name: "R. ALBIOL",
            team: "Spain",
            club: "SSC Napoli",
            country: "Spain",
            type: "player",
            id: "Raul ALBIOL"
        }, {
            name: "Jean Daniel AKPA",
            short_name: "AKPA JD",
            team: "Ivory Coast",
            club: "Toulouse FC",
            country: "Ivory Coast",
            type: "player",
            id: "Jean Daniel AKPA"
        }, {
            name: "Alan DZAGOEV",
            short_name: "DZAGOEV",
            team: "Russia",
            club: "CSKA Moscow",
            country: "Russia",
            type: "player",
            id: "Alan DZAGOEV"
        }, {
            name: "Gary CAHILL",
            short_name: "CAHILL",
            team: "England",
            club: "Chelsea FC",
            country: "England",
            type: "player",
            id: "Gary CAHILL"
        }, {
            name: "Jean MAKOUN",
            short_name: "MAKOUN",
            team: "Cameroon",
            club: "Stade Rennais FC",
            country: "Cameroon",
            type: "player",
            id: "Jean MAKOUN"
        }, {
            name: "Jozy ALTIDORE",
            short_name: "ALTIDORE",
            team: "USA",
            club: "Sunderland AFC",
            country: "USA",
            type: "player",
            id: "Jozy ALTIDORE"
        }, {
            name: "Mariano ANDUJAR",
            short_name: "ANDUJAR",
            team: "Argentina",
            club: "Calcio Catania",
            country: "Argentina",
            type: "player",
            id: "Mariano ANDUJAR"
        }, {
            name: "Raphael VARANE",
            short_name: "VARANE",
            team: "France",
            club: "Real Madrid CF",
            country: "France",
            type: "player",
            id: "Raphael VARANE"
        }, {
            name: "Gokhan INLER",
            short_name: "INLER",
            team: "Switzerland",
            club: "SSC Napoli",
            country: "Switzerland",
            type: "player",
            id: "Gokhan INLER"
        }, {
            country: "Spain",
            premier: !0,
            rank: 27,
            country_rank: 5,
            team_count: 4,
            type: "club",
            id: "Sevilla FC",
            confederation: "UEFA"
        }, {
            name: "Jeremain LENS",
            short_name: "LENS",
            team: "Netherlands",
            club: "FC Dynamo Kyiv",
            country: "Netherlands",
            type: "player",
            id: "Jeremain LENS"
        }, {
            name: "Daniel DAVARI",
            short_name: "DAVARI",
            team: "Iran",
            club: "Eintracht Braunschweig",
            country: "Iran",
            type: "player",
            id: "Daniel DAVARI"
        }, {
            name: "Ramon AZEEZ",
            short_name: "AZEEZ",
            team: "Nigeria",
            club: "UD Almeria",
            country: "Nigeria",
            type: "player",
            id: "Ramon AZEEZ"
        }, {
            name: "Mario MANDZUKIC",
            short_name: "MANDÅ½UKIÄ†",
            team: "Croatia",
            club: "FC Bayern Muenchen",
            country: "Croatia",
            type: "player",
            id: "Mario MANDZUKIC"
        }, {
            name: "Peter ODEMWINGIE",
            short_name: "ODEMWINGIE",
            team: "Nigeria",
            club: "Stoke City FC",
            country: "Nigeria",
            type: "player",
            id: "Peter ODEMWINGIE"
        }, {
            name: "Michael BRADLEY",
            short_name: "BRADLEY",
            team: "USA",
            club: "Toronto FC",
            country: "USA",
            type: "player",
            id: "Michael BRADLEY"
        }, {
            country: "Greece",
            premier: !1,
            rank: 148,
            country_rank: -1,
            team_count: 2,
            type: "club",
            id: "Panathinaikos FC",
            confederation: "UEFA"
        }, {
            name: "Alejandro BEDOYA",
            short_name: "BEDOYA",
            team: "USA",
            club: "FC Nantes",
            country: "USA",
            type: "player",
            id: "Alejandro BEDOYA"
        }, {
            name: "Luka MODRIC",
            short_name: "MODRIÄ†",
            team: "Croatia",
            club: "Real Madrid CF",
            country: "Croatia",
            type: "player",
            id: "Luka MODRIC"
        }, {
            country: "England",
            premier: !0,
            rank: 68,
            country_rank: 15,
            team_count: 4,
            type: "club",
            id: "Stoke City FC",
            confederation: "UEFA"
        }, {
            country: "Spain",
            premier: !1,
            rank: 0,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "UD Las Palmas",
            confederation: "UEFA"
        }, {
            name: "Hector MORENO",
            short_name: "H MORENO",
            team: "Mexico",
            club: "RCD Espanyol",
            country: "Mexico",
            type: "player",
            id: "Hector MORENO"
        }, {
            name: "Jonathan DE GUZMAN",
            short_name: "DE GUZMAN",
            team: "Netherlands",
            club: "Swansea City AFC",
            country: "Netherlands",
            type: "player",
            id: "Jonathan DE GUZMAN"
        }, {
            name: "Jorge FUCILE",
            short_name: "FUCILE",
            team: "Uruguay",
            club: "FC Porto",
            country: "Uruguay",
            type: "player",
            id: "Jorge FUCILE"
        }, {
            name: "Jerry BENGTSON",
            short_name: "BENGTSON",
            team: "Honduras",
            club: "New England Revolution",
            country: "Honduras",
            type: "player",
            id: "Jerry BENGTSON"
        }, {
            name: "Salvatore SIRIGU",
            short_name: "SIRIGU",
            team: "Italy",
            club: "Paris Saint-Germain FC",
            country: "Italy",
            type: "player",
            id: "Salvatore SIRIGU"
        }, {
            name: "Axel WITSEL",
            short_name: "WITSEL",
            team: "Belgium",
            club: "FC Zenit St. Petersburg",
            country: "Belgium",
            type: "player",
            id: "Axel WITSEL"
        }, {
            name: "VIEIRINHA",
            short_name: "VIEIRINHA",
            team: "Portugal",
            club: "VfL Wolfsburg",
            country: "Portugal",
            type: "player",
            id: "VIEIRINHA"
        }, {
            country: "Turkey",
            premier: !1,
            rank: 713,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "Kayseri Erciyesspor",
            confederation: "UEFA"
        }, {
            country: "England",
            premier: !0,
            rank: 194,
            country_rank: 12,
            team_count: 4,
            type: "club",
            id: "Newcastle United FC",
            confederation: "UEFA"
        }, {
            country: "Chile",
            premier: !1,
            rank: 133,
            country_rank: -1,
            team_count: 1,
            type: "club",
            id: "CSD Colo-Colo",
            confederation: "CONMEBOL"
        }, {
            name: "Rodrigo MUNOZ",
            short_name: "MUÃ‘OZ",
            team: "Uruguay",
            club: "Club Libertad",
            country: "Uruguay",
            type: "player",
            id: "Rodrigo MUNOZ"
        }, {
            name: "Toni KROOS",
            short_name: "KROOS",
            team: "Germany",
            club: "FC Bayern Muenchen",
            country: "Germany",
            type: "player",
            id: "Toni KROOS"
        }, {
            name: "Mario MARTINEZ",
            short_name: "M. MARTINEZ",
            team: "Honduras",
            club: "Real Espana",
            country: "Honduras",
            type: "player",
            id: "Mario MARTINEZ"
        }],
        links: [{
            source: 0,
            target: 470
        }, {
            source: 0,
            target: 601
        }, {
            source: 1,
            target: 750
        }, {
            source: 1,
            target: 494
        }, {
            source: 2,
            target: 929
        }, {
            source: 2,
            target: 30
        }, {
            source: 3,
            target: 920
        }, {
            source: 3,
            target: 803
        }, {
            source: 4,
            target: 146
        }, {
            source: 4,
            target: 365
        }, {
            source: 5,
            target: 49
        }, {
            source: 5,
            target: 861
        }, {
            source: 6,
            target: 861
        }, {
            source: 6,
            target: 83
        }, {
            source: 7,
            target: 1064
        }, {
            source: 7,
            target: 75
        }, {
            source: 7,
            target: 345
        }, {
            source: 7,
            target: 845
        }, {
            source: 8,
            target: 253
        }, {
            source: 8,
            target: 139
        }, {
            source: 9,
            target: 929
        }, {
            source: 9,
            target: 531
        }, {
            source: 10,
            target: 776
        }, {
            source: 10,
            target: 578
        }, {
            source: 11,
            target: 23
        }, {
            source: 11,
            target: 929
        }, {
            source: 12,
            target: 278
        }, {
            source: 12,
            target: 855
        }, {
            source: 13,
            target: 833
        }, {
            source: 13,
            target: 191
        }, {
            source: 14,
            target: 221
        }, {
            source: 14,
            target: 294
        }, {
            source: 15,
            target: 67
        }, {
            source: 15,
            target: 197
        }, {
            source: 15,
            target: 468
        }, {
            source: 15,
            target: 539
        }, {
            source: 15,
            target: 574
        }, {
            source: 15,
            target: 430
        }, {
            source: 15,
            target: 210
        }, {
            source: 15,
            target: 526
        }, {
            source: 15,
            target: 955
        }, {
            source: 15,
            target: 958
        }, {
            source: 15,
            target: 552
        }, {
            source: 15,
            target: 24
        }, {
            source: 15,
            target: 359
        }, {
            source: 15,
            target: 496
        }, {
            source: 15,
            target: 454
        }, {
            source: 15,
            target: 163
        }, {
            source: 15,
            target: 764
        }, {
            source: 15,
            target: 1035
        }, {
            source: 15,
            target: 808
        }, {
            source: 15,
            target: 509
        }, {
            source: 15,
            target: 512
        }, {
            source: 15,
            target: 514
        }, {
            source: 15,
            target: 869
        }, {
            source: 16,
            target: 267
        }, {
            source: 16,
            target: 246
        }, {
            source: 17,
            target: 524
        }, {
            source: 18,
            target: 486
        }, {
            source: 19,
            target: 982
        }, {
            source: 19,
            target: 412
        }, {
            source: 20,
            target: 739
        }, {
            source: 21,
            target: 262
        }, {
            source: 21,
            target: 149
        }, {
            source: 22,
            target: 278
        }, {
            source: 22,
            target: 513
        }, {
            source: 23,
            target: 483
        }, {
            source: 23,
            target: 348
        }, {
            source: 23,
            target: 894
        }, {
            source: 23,
            target: 753
        }, {
            source: 23,
            target: 717
        }, {
            source: 23,
            target: 40
        }, {
            source: 23,
            target: 1008
        }, {
            source: 23,
            target: 379
        }, {
            source: 23,
            target: 720
        }, {
            source: 23,
            target: 206
        }, {
            source: 23,
            target: 731
        }, {
            source: 23,
            target: 726
        }, {
            source: 23,
            target: 66
        }, {
            source: 24,
            target: 108
        }, {
            source: 25,
            target: 833
        }, {
            source: 25,
            target: 610
        }, {
            source: 26,
            target: 149
        }, {
            source: 26,
            target: 250
        }, {
            source: 27,
            target: 998
        }, {
            source: 27,
            target: 255
        }, {
            source: 28,
            target: 497
        }, {
            source: 29,
            target: 406
        }, {
            source: 29,
            target: 817
        }, {
            source: 31,
            target: 489
        }, {
            source: 31,
            target: 502
        }, {
            source: 32,
            target: 583
        }, {
            source: 32,
            target: 294
        }, {
            source: 33,
            target: 394
        }, {
            source: 33,
            target: 53
        }, {
            source: 34,
            target: 347
        }, {
            source: 35,
            target: 809
        }, {
            source: 36,
            target: 64
        }, {
            source: 36,
            target: 1013
        }, {
            source: 37,
            target: 518
        }, {
            source: 37,
            target: 465
        }, {
            source: 38,
            target: 768
        }, {
            source: 38,
            target: 246
        }, {
            source: 39,
            target: 326
        }, {
            source: 40,
            target: 861
        }, {
            source: 41,
            target: 787
        }, {
            source: 41,
            target: 938
        }, {
            source: 41,
            target: 404
        }, {
            source: 42,
            target: 455
        }, {
            source: 42,
            target: 406
        }, {
            source: 43,
            target: 139
        }, {
            source: 43,
            target: 225
        }, {
            source: 44,
            target: 874
        }, {
            source: 44,
            target: 990
        }, {
            source: 45,
            target: 775
        }, {
            source: 46,
            target: 567
        }, {
            source: 46,
            target: 980
        }, {
            source: 47,
            target: 214
        }, {
            source: 48,
            target: 662
        }, {
            source: 48,
            target: 945
        }, {
            source: 49,
            target: 119
        }, {
            source: 49,
            target: 100
        }, {
            source: 49,
            target: 519
        }, {
            source: 49,
            target: 751
        }, {
            source: 49,
            target: 862
        }, {
            source: 49,
            target: 223
        }, {
            source: 49,
            target: 640
        }, {
            source: 49,
            target: 997
        }, {
            source: 49,
            target: 581
        }, {
            source: 50,
            target: 422
        }, {
            source: 50,
            target: 149
        }, {
            source: 51,
            target: 951
        }, {
            source: 51,
            target: 191
        }, {
            source: 52,
            target: 156
        }, {
            source: 52,
            target: 690
        }, {
            source: 52,
            target: 1025
        }, {
            source: 52,
            target: 743
        }, {
            source: 52,
            target: 996
        }, {
            source: 52,
            target: 355
        }, {
            source: 53,
            target: 330
        }, {
            source: 53,
            target: 586
        }, {
            source: 53,
            target: 216
        }, {
            source: 53,
            target: 852
        }, {
            source: 53,
            target: 463
        }, {
            source: 54,
            target: 560
        }, {
            source: 54,
            target: 246
        }, {
            source: 55,
            target: 394
        }, {
            source: 55,
            target: 363
        }, {
            source: 56,
            target: 662
        }, {
            source: 56,
            target: 191
        }, {
            source: 57,
            target: 979
        }, {
            source: 57,
            target: 191
        }, {
            source: 58,
            target: 703
        }, {
            source: 58,
            target: 139
        }, {
            source: 59,
            target: 664
        }, {
            source: 60,
            target: 564
        }, {
            source: 60,
            target: 732
        }, {
            source: 61,
            target: 394
        }, {
            source: 61,
            target: 538
        }, {
            source: 62,
            target: 892
        }, {
            source: 62,
            target: 945
        }, {
            source: 63,
            target: 881
        }, {
            source: 63,
            target: 965
        }, {
            source: 64,
            target: 739
        }, {
            source: 64,
            target: 935
        }, {
            source: 64,
            target: 202
        }, {
            source: 64,
            target: 647
        }, {
            source: 64,
            target: 795
        }, {
            source: 64,
            target: 615
        }, {
            source: 64,
            target: 953
        }, {
            source: 64,
            target: 1019
        }, {
            source: 64,
            target: 347
        }, {
            source: 64,
            target: 954
        }, {
            source: 64,
            target: 793
        }, {
            source: 64,
            target: 554
        }, {
            source: 64,
            target: 411
        }, {
            source: 64,
            target: 760
        }, {
            source: 64,
            target: 428
        }, {
            source: 64,
            target: 233
        }, {
            source: 64,
            target: 112
        }, {
            source: 64,
            target: 520
        }, {
            source: 64,
            target: 309
        }, {
            source: 64,
            target: 243
        }, {
            source: 64,
            target: 925
        }, {
            source: 64,
            target: 627
        }, {
            source: 65,
            target: 982
        }, {
            source: 65,
            target: 693
        }, {
            source: 66,
            target: 294
        }, {
            source: 67,
            target: 957
        }, {
            source: 68,
            target: 1022
        }, {
            source: 68,
            target: 814
        }, {
            source: 69,
            target: 494
        }, {
            source: 69,
            target: 835
        }, {
            source: 70,
            target: 607
        }, {
            source: 70,
            target: 965
        }, {
            source: 71,
            target: 401
        }, {
            source: 71,
            target: 139
        }, {
            source: 72,
            target: 308
        }, {
            source: 73,
            target: 579
        }, {
            source: 73,
            target: 120
        }, {
            source: 74,
            target: 575
        }, {
            source: 74,
            target: 494
        }, {
            source: 75,
            target: 518
        }, {
            source: 76,
            target: 494
        }, {
            source: 76,
            target: 83
        }, {
            source: 77,
            target: 401
        }, {
            source: 77,
            target: 255
        }, {
            source: 78,
            target: 851
        }, {
            source: 78,
            target: 408
        }, {
            source: 79,
            target: 564
        }, {
            source: 79,
            target: 1060
        }, {
            source: 80,
            target: 975
        }, {
            source: 81,
            target: 638
        }, {
            source: 81,
            target: 458
        }, {
            source: 82,
            target: 468
        }, {
            source: 83,
            target: 802
        }, {
            source: 83,
            target: 590
        }, {
            source: 83,
            target: 911
        }, {
            source: 83,
            target: 472
        }, {
            source: 83,
            target: 251
        }, {
            source: 83,
            target: 762
        }, {
            source: 83,
            target: 148
        }, {
            source: 83,
            target: 464
        }, {
            source: 84,
            target: 267
        }, {
            source: 84,
            target: 246
        }, {
            source: 85,
            target: 715
        }, {
            source: 85,
            target: 479
        }, {
            source: 85,
            target: 978
        }, {
            source: 85,
            target: 446
        }, {
            source: 85,
            target: 749
        }, {
            source: 86,
            target: 127
        }, {
            source: 87,
            target: 500
        }, {
            source: 87,
            target: 990
        }, {
            source: 88,
            target: 526
        }, {
            source: 89,
            target: 583
        }, {
            source: 89,
            target: 120
        }, {
            source: 90,
            target: 321
        }, {
            source: 90,
            target: 730
        }, {
            source: 91,
            target: 205
        }, {
            source: 91,
            target: 111
        }, {
            source: 91,
            target: 415
        }, {
            source: 92,
            target: 929
        }, {
            source: 92,
            target: 368
        }, {
            source: 93,
            target: 321
        }, {
            source: 93,
            target: 255
        }, {
            source: 94,
            target: 542
        }, {
            source: 94,
            target: 814
        }, {
            source: 95,
            target: 278
        }, {
            source: 95,
            target: 741
        }, {
            source: 96,
            target: 357
        }, {
            source: 96,
            target: 965
        }, {
            source: 97,
            target: 619
        }, {
            source: 98,
            target: 142
        }, {
            source: 98,
            target: 191
        }, {
            source: 99,
            target: 606
        }, {
            source: 99,
            target: 610
        }, {
            source: 100,
            target: 861
        }, {
            source: 101,
            target: 191
        }, {
            source: 101,
            target: 1040
        }, {
            source: 102,
            target: 115
        }, {
            source: 102,
            target: 814
        }, {
            source: 103,
            target: 705
        }, {
            source: 104,
            target: 891
        }, {
            source: 105,
            target: 494
        }, {
            source: 105,
            target: 835
        }, {
            source: 106,
            target: 229
        }, {
            source: 107,
            target: 175
        }, {
            source: 109,
            target: 406
        }, {
            source: 109,
            target: 817
        }, {
            source: 110,
            target: 377
        }, {
            source: 110,
            target: 1004
        }, {
            source: 111,
            target: 149
        }, {
            source: 112,
            target: 357
        }, {
            source: 113,
            target: 146
        }, {
            source: 113,
            target: 959
        }, {
            source: 114,
            target: 418
        }, {
            source: 114,
            target: 861
        }, {
            source: 115,
            target: 843
        }, {
            source: 116,
            target: 837
        }, {
            source: 116,
            target: 990
        }, {
            source: 117,
            target: 748
        }, {
            source: 118,
            target: 579
        }, {
            source: 118,
            target: 120
        }, {
            source: 119,
            target: 861
        }, {
            source: 120,
            target: 976
        }, {
            source: 120,
            target: 744
        }, {
            source: 120,
            target: 483
        }, {
            source: 120,
            target: 993
        }, {
            source: 120,
            target: 479
        }, {
            source: 120,
            target: 967
        }, {
            source: 120,
            target: 446
        }, {
            source: 120,
            target: 977
        }, {
            source: 120,
            target: 577
        }, {
            source: 120,
            target: 884
        }, {
            source: 120,
            target: 511
        }, {
            source: 120,
            target: 438
        }, {
            source: 120,
            target: 856
        }, {
            source: 120,
            target: 316
        }, {
            source: 120,
            target: 863
        }, {
            source: 120,
            target: 992
        }, {
            source: 120,
            target: 319
        }, {
            source: 120,
            target: 1058
        }, {
            source: 120,
            target: 828
        }, {
            source: 120,
            target: 930
        }, {
            source: 121,
            target: 271
        }, {
            source: 122,
            target: 920
        }, {
            source: 122,
            target: 254
        }, {
            source: 123,
            target: 564
        }, {
            source: 123,
            target: 865
        }, {
            source: 124,
            target: 796
        }, {
            source: 124,
            target: 861
        }, {
            source: 125,
            target: 549
        }, {
            source: 125,
            target: 965
        }, {
            source: 126,
            target: 267
        }, {
            source: 126,
            target: 246
        }, {
            source: 127,
            target: 153
        }, {
            source: 128,
            target: 624
        }, {
            source: 129,
            target: 861
        }, {
            source: 129,
            target: 298
        }, {
            source: 130,
            target: 234
        }, {
            source: 131,
            target: 1022
        }, {
            source: 131,
            target: 191
        }, {
            source: 132,
            target: 393
        }, {
            source: 132,
            target: 1024
        }, {
            source: 132,
            target: 935
        }, {
            source: 133,
            target: 593
        }, {
            source: 133,
            target: 818
        }, {
            source: 133,
            target: 937
        }, {
            source: 134,
            target: 929
        }, {
            source: 134,
            target: 304
        }, {
            source: 135,
            target: 182
        }, {
            source: 135,
            target: 406
        }, {
            source: 136,
            target: 278
        }, {
            source: 136,
            target: 384
        }, {
            source: 137,
            target: 829
        }, {
            source: 137,
            target: 942
        }, {
            source: 137,
            target: 659
        }, {
            source: 138,
            target: 394
        }, {
            source: 138,
            target: 542
        }, {
            source: 139,
            target: 1e3
        }, {
            source: 139,
            target: 266
        }, {
            source: 139,
            target: 237
        }, {
            source: 139,
            target: 944
        }, {
            source: 139,
            target: 469
        }, {
            source: 139,
            target: 746
        }, {
            source: 139,
            target: 281
        }, {
            source: 139,
            target: 259
        }, {
            source: 139,
            target: 289
        }, {
            source: 139,
            target: 830
        }, {
            source: 139,
            target: 293
        }, {
            source: 139,
            target: 697
        }, {
            source: 139,
            target: 566
        }, {
            source: 139,
            target: 429
        }, {
            source: 139,
            target: 370
        }, {
            source: 139,
            target: 382
        }, {
            source: 139,
            target: 788
        }, {
            source: 139,
            target: 458
        }, {
            source: 139,
            target: 533
        }, {
            source: 140,
            target: 557
        }, {
            source: 140,
            target: 290
        }, {
            source: 141,
            target: 609
        }, {
            source: 141,
            target: 408
        }, {
            source: 142,
            target: 692
        }, {
            source: 142,
            target: 380
        }, {
            source: 143,
            target: 719
        }, {
            source: 143,
            target: 945
        }, {
            source: 144,
            target: 221
        }, {
            source: 144,
            target: 990
        }, {
            source: 145,
            target: 557
        }, {
            source: 145,
            target: 447
        }, {
            source: 146,
            target: 879
        }, {
            source: 146,
            target: 311
        }, {
            source: 146,
            target: 544
        }, {
            source: 146,
            target: 890
        }, {
            source: 146,
            target: 519
        }, {
            source: 146,
            target: 685
        }, {
            source: 146,
            target: 492
        }, {
            source: 146,
            target: 691
        }, {
            source: 146,
            target: 902
        }, {
            source: 146,
            target: 497
        }, {
            source: 146,
            target: 1043
        }, {
            source: 146,
            target: 1045
        }, {
            source: 146,
            target: 159
        }, {
            source: 146,
            target: 313
        }, {
            source: 146,
            target: 442
        }, {
            source: 146,
            target: 1009
        }, {
            source: 146,
            target: 989
        }, {
            source: 146,
            target: 487
        }, {
            source: 146,
            target: 660
        }, {
            source: 146,
            target: 390
        }, {
            source: 146,
            target: 798
        }, {
            source: 147,
            target: 564
        }, {
            source: 147,
            target: 679
        }, {
            source: 148,
            target: 610
        }, {
            source: 149,
            target: 936
        }, {
            source: 149,
            target: 205
        }, {
            source: 149,
            target: 942
        }, {
            source: 149,
            target: 745
        }, {
            source: 149,
            target: 630
        }, {
            source: 149,
            target: 707
        }, {
            source: 149,
            target: 753
        }, {
            source: 149,
            target: 964
        }, {
            source: 149,
            target: 415
        }, {
            source: 149,
            target: 694
        }, {
            source: 149,
            target: 322
        }, {
            source: 149,
            target: 165
        }, {
            source: 149,
            target: 219
        }, {
            source: 149,
            target: 815
        }, {
            source: 149,
            target: 776
        }, {
            source: 149,
            target: 860
        }, {
            source: 149,
            target: 654
        }, {
            source: 149,
            target: 883
        }, {
            source: 149,
            target: 274
        }, {
            source: 150,
            target: 979
        }, {
            source: 150,
            target: 980
        }, {
            source: 151,
            target: 670
        }, {
            source: 151,
            target: 920
        }, {
            source: 152,
            target: 261
        }, {
            source: 152,
            target: 1004
        }, {
            source: 153,
            target: 876
        }, {
            source: 153,
            target: 605
        }, {
            source: 153,
            target: 668
        }, {
            source: 153,
            target: 399
        }, {
            source: 153,
            target: 271
        }, {
            source: 153,
            target: 480
        }, {
            source: 153,
            target: 681
        }, {
            source: 153,
            target: 893
        }, {
            source: 153,
            target: 663
        }, {
            source: 153,
            target: 956
        }, {
            source: 153,
            target: 308
        }, {
            source: 153,
            target: 562
        }, {
            source: 153,
            target: 443
        }, {
            source: 153,
            target: 712
        }, {
            source: 153,
            target: 340
        }, {
            source: 153,
            target: 589
        }, {
            source: 153,
            target: 926
        }, {
            source: 153,
            target: 722
        }, {
            source: 153,
            target: 642
        }, {
            source: 153,
            target: 638
        }, {
            source: 153,
            target: 326
        }, {
            source: 153,
            target: 194
        }, {
            source: 154,
            target: 494
        }, {
            source: 154,
            target: 835
        }, {
            source: 155,
            target: 416
        }, {
            source: 155,
            target: 621
        }, {
            source: 156,
            target: 945
        }, {
            source: 157,
            target: 440
        }, {
            source: 158,
            target: 567
        }, {
            source: 158,
            target: 255
        }, {
            source: 159,
            target: 490
        }, {
            source: 160,
            target: 920
        }, {
            source: 160,
            target: 846
        }, {
            source: 161,
            target: 492
        }, {
            source: 162,
            target: 982
        }, {
            source: 162,
            target: 448
        }, {
            source: 163,
            target: 332
        }, {
            source: 164,
            target: 235
        }, {
            source: 164,
            target: 191
        }, {
            source: 165,
            target: 224
        }, {
            source: 166,
            target: 278
        }, {
            source: 166,
            target: 774
        }, {
            source: 167,
            target: 416
        }, {
            source: 167,
            target: 833
        }, {
            source: 168,
            target: 750
        }, {
            source: 168,
            target: 255
        }, {
            source: 169,
            target: 716
        }, {
            source: 169,
            target: 945
        }, {
            source: 170,
            target: 725
        }, {
            source: 170,
            target: 406
        }, {
            source: 171,
            target: 927
        }, {
            source: 171,
            target: 730
        }, {
            source: 172,
            target: 567
        }, {
            source: 172,
            target: 730
        }, {
            source: 173,
            target: 882
        }, {
            source: 173,
            target: 557
        }, {
            source: 174,
            target: 689
        }, {
            source: 175,
            target: 518
        }, {
            source: 176,
            target: 927
        }, {
            source: 176,
            target: 730
        }, {
            source: 177,
            target: 299
        }, {
            source: 178,
            target: 941
        }, {
            source: 178,
            target: 980
        }, {
            source: 179,
            target: 875
        }, {
            source: 179,
            target: 518
        }, {
            source: 180,
            target: 660
        }, {
            source: 181,
            target: 557
        }, {
            source: 181,
            target: 298
        }, {
            source: 183,
            target: 654
        }, {
            source: 184,
            target: 833
        }, {
            source: 184,
            target: 246
        }, {
            source: 185,
            target: 469
        }, {
            source: 186,
            target: 201
        }, {
            source: 186,
            target: 965
        }, {
            source: 187,
            target: 711
        }, {
            source: 187,
            target: 980
        }, {
            source: 188,
            target: 998
        }, {
            source: 188,
            target: 406
        }, {
            source: 189,
            target: 456
        }, {
            source: 189,
            target: 1004
        }, {
            source: 190,
            target: 883
        }, {
            source: 191,
            target: 799
        }, {
            source: 191,
            target: 675
        }, {
            source: 191,
            target: 541
        }, {
            source: 191,
            target: 208
        }, {
            source: 191,
            target: 816
        }, {
            source: 191,
            target: 899
        }, {
            source: 191,
            target: 692
        }, {
            source: 191,
            target: 196
        }, {
            source: 191,
            target: 380
        }, {
            source: 191,
            target: 530
        }, {
            source: 191,
            target: 578
        }, {
            source: 191,
            target: 854
        }, {
            source: 191,
            target: 601
        }, {
            source: 191,
            target: 924
        }, {
            source: 191,
            target: 260
        }, {
            source: 192,
            target: 549
        }, {
            source: 192,
            target: 294
        }, {
            source: 193,
            target: 425
        }, {
            source: 193,
            target: 255
        }, {
            source: 194,
            target: 284
        }, {
            source: 195,
            target: 412
        }, {
            source: 195,
            target: 980
        }, {
            source: 196,
            target: 275
        }, {
            source: 197,
            target: 1040
        }, {
            source: 198,
            target: 406
        }, {
            source: 198,
            target: 817
        }, {
            source: 199,
            target: 668
        }, {
            source: 200,
            target: 494
        }, {
            source: 200,
            target: 207
        }, {
            source: 201,
            target: 287
        }, {
            source: 202,
            target: 801
        }, {
            source: 203,
            target: 642
        }, {
            source: 204,
            target: 927
        }, {
            source: 204,
            target: 730
        }, {
            source: 206,
            target: 416
        }, {
            source: 207,
            target: 635
        }, {
            source: 207,
            target: 819
        }, {
            source: 207,
            target: 474
        }, {
            source: 207,
            target: 868
        }, {
            source: 207,
            target: 977
        }, {
            source: 207,
            target: 390
        }, {
            source: 208,
            target: 679
        }, {
            source: 209,
            target: 278
        }, {
            source: 209,
            target: 331
        }, {
            source: 210,
            target: 1013
        }, {
            source: 211,
            target: 754
        }, {
            source: 211,
            target: 990
        }, {
            source: 212,
            target: 394
        }, {
            source: 212,
            target: 549
        }, {
            source: 213,
            target: 416
        }, {
            source: 213,
            target: 901
        }, {
            source: 214,
            target: 965
        }, {
            source: 215,
            target: 1061
        }, {
            source: 215,
            target: 965
        }, {
            source: 216,
            target: 416
        }, {
            source: 217,
            target: 810
        }, {
            source: 217,
            target: 361
        }, {
            source: 217,
            target: 525
        }, {
            source: 217,
            target: 887
        }, {
            source: 218,
            target: 927
        }, {
            source: 218,
            target: 965
        }, {
            source: 219,
            target: 665
        }, {
            source: 220,
            target: 982
        }, {
            source: 220,
            target: 618
        }, {
            source: 221,
            target: 940
        }, {
            source: 221,
            target: 895
        }, {
            source: 221,
            target: 485
        }, {
            source: 221,
            target: 658
        }, {
            source: 221,
            target: 672
        }, {
            source: 221,
            target: 510
        }, {
            source: 221,
            target: 595
        }, {
            source: 222,
            target: 681
        }, {
            source: 223,
            target: 610
        }, {
            source: 226,
            target: 697
        }, {
            source: 226,
            target: 785
        }, {
            source: 227,
            target: 530
        }, {
            source: 228,
            target: 965
        }, {
            source: 228,
            target: 606
        }, {
            source: 229,
            target: 557
        }, {
            source: 230,
            target: 814
        }, {
            source: 230,
            target: 298
        }, {
            source: 231,
            target: 389
        }, {
            source: 231,
            target: 990
        }, {
            source: 232,
            target: 917
        }, {
            source: 233,
            target: 609
        }, {
            source: 234,
            target: 278
        }, {
            source: 235,
            target: 914
        }, {
            source: 235,
            target: 366
        }, {
            source: 235,
            target: 501
        }, {
            source: 235,
            target: 1039
        }, {
            source: 235,
            target: 1031
        }, {
            source: 235,
            target: 305
        }, {
            source: 235,
            target: 597
        }, {
            source: 235,
            target: 257
        }, {
            source: 235,
            target: 626
        }, {
            source: 235,
            target: 420
        }, {
            source: 235,
            target: 529
        }, {
            source: 236,
            target: 401
        }, {
            source: 236,
            target: 255
        }, {
            source: 237,
            target: 456
        }, {
            source: 238,
            target: 982
        }, {
            source: 238,
            target: 835
        }, {
            source: 239,
            target: 1022
        }, {
            source: 239,
            target: 980
        }, {
            source: 240,
            target: 406
        }, {
            source: 240,
            target: 631
        }, {
            source: 241,
            target: 561
        }, {
            source: 241,
            target: 568
        }, {
            source: 241,
            target: 988
        }, {
            source: 241,
            target: 713
        }, {
            source: 242,
            target: 594
        }, {
            source: 242,
            target: 559
        }, {
            source: 243,
            target: 780
        }, {
            source: 244,
            target: 589
        }, {
            source: 244,
            target: 303
        }, {
            source: 245,
            target: 278
        }, {
            source: 245,
            target: 679
        }, {
            source: 246,
            target: 1003
        }, {
            source: 246,
            target: 981
        }, {
            source: 246,
            target: 918
        }, {
            source: 246,
            target: 537
        }, {
            source: 246,
            target: 829
        }, {
            source: 246,
            target: 1008
        }, {
            source: 246,
            target: 573
        }, {
            source: 246,
            target: 915
        }, {
            source: 246,
            target: 1052
        }, {
            source: 246,
            target: 393
        }, {
            source: 246,
            target: 871
        }, {
            source: 246,
            target: 873
        }, {
            source: 246,
            target: 704
        }, {
            source: 246,
            target: 659
        }, {
            source: 246,
            target: 391
        }, {
            source: 246,
            target: 772
        }, {
            source: 246,
            target: 521
        }, {
            source: 247,
            target: 466
        }, {
            source: 247,
            target: 564
        }, {
            source: 248,
            target: 708
        }, {
            source: 248,
            target: 965
        }, {
            source: 249,
            target: 932
        }, {
            source: 249,
            target: 557
        }, {
            source: 250,
            target: 441
        }, {
            source: 250,
            target: 419
        }, {
            source: 250,
            target: 473
        }, {
            source: 251,
            target: 494
        }, {
            source: 252,
            target: 273
        }, {
            source: 252,
            target: 255
        }, {
            source: 253,
            target: 289
        }, {
            source: 253,
            target: 533
        }, {
            source: 254,
            target: 328
        }, {
            source: 255,
            target: 395
        }, {
            source: 255,
            target: 804
        }, {
            source: 255,
            target: 811
        }, {
            source: 255,
            target: 276
        }, {
            source: 255,
            target: 785
        }, {
            source: 255,
            target: 354
        }, {
            source: 255,
            target: 558
        }, {
            source: 255,
            target: 258
        }, {
            source: 255,
            target: 916
        }, {
            source: 255,
            target: 374
        }, {
            source: 255,
            target: 451
        }, {
            source: 255,
            target: 653
        }, {
            source: 255,
            target: 655
        }, {
            source: 255,
            target: 794
        }, {
            source: 255,
            target: 598
        }, {
            source: 256,
            target: 704
        }, {
            source: 257,
            target: 814
        }, {
            source: 258,
            target: 721
        }, {
            source: 259,
            target: 325
        }, {
            source: 260,
            target: 563
        }, {
            source: 261,
            target: 778
        }, {
            source: 263,
            target: 491
        }, {
            source: 264,
            target: 982
        }, {
            source: 264,
            target: 927
        }, {
            source: 265,
            target: 788
        }, {
            source: 266,
            target: 703
        }, {
            source: 268,
            target: 929
        }, {
            source: 268,
            target: 747
        }, {
            source: 269,
            target: 1004
        }, {
            source: 269,
            target: 898
        }, {
            source: 270,
            target: 274
        }, {
            source: 272,
            target: 685
        }, {
            source: 273,
            target: 811
        }, {
            source: 273,
            target: 653
        }, {
            source: 273,
            target: 804
        }, {
            source: 276,
            target: 401
        }, {
            source: 277,
            target: 794
        }, {
            source: 277,
            target: 430
        }, {
            source: 277,
            target: 669
        }, {
            source: 278,
            target: 729
        }, {
            source: 278,
            target: 604
        }, {
            source: 278,
            target: 535
        }, {
            source: 278,
            target: 484
        }, {
            source: 278,
            target: 407
        }, {
            source: 278,
            target: 966
        }, {
            source: 278,
            target: 968
        }, {
            source: 278,
            target: 421
        }, {
            source: 278,
            target: 364
        }, {
            source: 278,
            target: 775
        }, {
            source: 278,
            target: 508
        }, {
            source: 278,
            target: 705
        }, {
            source: 278,
            target: 593
        }, {
            source: 278,
            target: 790
        }, {
            source: 278,
            target: 532
        }, {
            source: 279,
            target: 719
        }, {
            source: 279,
            target: 557
        }, {
            source: 280,
            target: 300
        }, {
            source: 280,
            target: 476
        }, {
            source: 280,
            target: 516
        }, {
            source: 280,
            target: 421
        }, {
            source: 280,
            target: 545
        }, {
            source: 281,
            target: 318
        }, {
            source: 282,
            target: 416
        }, {
            source: 282,
            target: 418
        }, {
            source: 283,
            target: 814
        }, {
            source: 283,
            target: 549
        }, {
            source: 285,
            target: 814
        }, {
            source: 285,
            target: 549
        }, {
            source: 286,
            target: 729
        }, {
            source: 287,
            target: 814
        }, {
            source: 288,
            target: 670
        }, {
            source: 288,
            target: 920
        }, {
            source: 291,
            target: 1050
        }, {
            source: 291,
            target: 1004
        }, {
            source: 292,
            target: 549
        }, {
            source: 292,
            target: 294
        }, {
            source: 293,
            target: 397
        }, {
            source: 294,
            target: 877
        }, {
            source: 294,
            target: 672
        }, {
            source: 294,
            target: 838
        }, {
            source: 294,
            target: 297
        }, {
            source: 294,
            target: 658
        }, {
            source: 294,
            target: 842
        }, {
            source: 294,
            target: 738
        }, {
            source: 294,
            target: 755
        }, {
            source: 294,
            target: 759
        }, {
            source: 294,
            target: 940
        }, {
            source: 294,
            target: 427
        }, {
            source: 294,
            target: 867
        }, {
            source: 294,
            target: 353
        }, {
            source: 294,
            target: 501
        }, {
            source: 294,
            target: 1031
        }, {
            source: 294,
            target: 720
        }, {
            source: 294,
            target: 323
        }, {
            source: 294,
            target: 464
        }, {
            source: 295,
            target: 1050
        }, {
            source: 295,
            target: 557
        }, {
            source: 296,
            target: 553
        }, {
            source: 297,
            target: 298
        }, {
            source: 298,
            target: 423
        }, {
            source: 298,
            target: 972
        }, {
            source: 298,
            target: 962
        }, {
            source: 298,
            target: 378
        }, {
            source: 298,
            target: 947
        }, {
            source: 298,
            target: 498
        }, {
            source: 299,
            target: 406
        }, {
            source: 300,
            target: 730
        }, {
            source: 301,
            target: 927
        }, {
            source: 301,
            target: 730
        }, {
            source: 302,
            target: 537
        }, {
            source: 302,
            target: 600
        }, {
            source: 303,
            target: 945
        }, {
            source: 304,
            target: 615
        }, {
            source: 305,
            target: 814
        }, {
            source: 306,
            target: 701
        }, {
            source: 307,
            target: 872
        }, {
            source: 307,
            target: 965
        }, {
            source: 309,
            target: 385
        }, {
            source: 310,
            target: 960
        }, {
            source: 311,
            target: 384
        }, {
            source: 312,
            target: 958
        }, {
            source: 313,
            target: 334
        }, {
            source: 314,
            target: 825
        }, {
            source: 314,
            target: 1053
        }, {
            source: 314,
            target: 587
        }, {
            source: 315,
            target: 927
        }, {
            source: 315,
            target: 965
        }, {
            source: 316,
            target: 991
        }, {
            source: 317,
            target: 1015
        }, {
            source: 317,
            target: 610
        }, {
            source: 318,
            target: 477
        }, {
            source: 318,
            target: 382
        }, {
            source: 319,
            target: 495
        }, {
            source: 320,
            target: 481
        }, {
            source: 320,
            target: 823
        }, {
            source: 321,
            target: 1006
        }, {
            source: 321,
            target: 383
        }, {
            source: 322,
            target: 422
        }, {
            source: 323,
            target: 549
        }, {
            source: 324,
            target: 814
        }, {
            source: 324,
            target: 874
        }, {
            source: 325,
            target: 370
        }, {
            source: 325,
            target: 944
        }, {
            source: 327,
            target: 410
        }, {
            source: 327,
            target: 980
        }, {
            source: 328,
            target: 920
        }, {
            source: 329,
            target: 929
        }, {
            source: 329,
            target: 723
        }, {
            source: 330,
            target: 408
        }, {
            source: 331,
            target: 686
        }, {
            source: 331,
            target: 900
        }, {
            source: 332,
            target: 884
        }, {
            source: 332,
            target: 967
        }, {
            source: 332,
            target: 544
        }, {
            source: 332,
            target: 333
        }, {
            source: 333,
            target: 564
        }, {
            source: 334,
            target: 841
        }, {
            source: 334,
            target: 806
        }, {
            source: 334,
            target: 371
        }, {
            source: 334,
            target: 696
        }, {
            source: 334,
            target: 1033
        }, {
            source: 335,
            target: 450
        }, {
            source: 335,
            target: 1005
        }, {
            source: 336,
            target: 1004
        }, {
            source: 336,
            target: 596
        }, {
            source: 337,
            target: 480
        }, {
            source: 338,
            target: 394
        }, {
            source: 338,
            target: 670
        }, {
            source: 339,
            target: 414
        }, {
            source: 339,
            target: 408
        }, {
            source: 340,
            target: 503
        }, {
            source: 341,
            target: 351
        }, {
            source: 341,
            target: 557
        }, {
            source: 342,
            target: 885
        }, {
            source: 343,
            target: 494
        }, {
            source: 343,
            target: 866
        }, {
            source: 344,
            target: 457
        }, {
            source: 345,
            target: 518
        }, {
            source: 346,
            target: 929
        }, {
            source: 346,
            target: 542
        }, {
            source: 348,
            target: 610
        }, {
            source: 349,
            target: 927
        }, {
            source: 349,
            target: 730
        }, {
            source: 350,
            target: 394
        }, {
            source: 350,
            target: 724
        }, {
            source: 352,
            target: 564
        }, {
            source: 352,
            target: 865
        }, {
            source: 353,
            target: 549
        }, {
            source: 354,
            target: 401
        }, {
            source: 355,
            target: 965
        }, {
            source: 356,
            target: 542
        }, {
            source: 356,
            target: 814
        }, {
            source: 358,
            target: 1051
        }, {
            source: 358,
            target: 406
        }, {
            source: 359,
            target: 721
        }, {
            source: 360,
            target: 953
        }, {
            source: 361,
            target: 557
        }, {
            source: 362,
            target: 564
        }, {
            source: 362,
            target: 866
        }, {
            source: 363,
            target: 1046
        }, {
            source: 364,
            target: 679
        }, {
            source: 365,
            target: 634
        }, {
            source: 366,
            target: 408
        }, {
            source: 367,
            target: 796
        }, {
            source: 367,
            target: 990
        }, {
            source: 368,
            target: 657
        }, {
            source: 368,
            target: 433
        }, {
            source: 369,
            target: 796
        }, {
            source: 369,
            target: 980
        }, {
            source: 371,
            target: 920
        }, {
            source: 372,
            target: 651
        }, {
            source: 372,
            target: 610
        }, {
            source: 373,
            target: 995
        }, {
            source: 373,
            target: 1042
        }, {
            source: 374,
            target: 998
        }, {
            source: 375,
            target: 929
        }, {
            source: 375,
            target: 747
        }, {
            source: 376,
            target: 861
        }, {
            source: 376,
            target: 724
        }, {
            source: 377,
            target: 924
        }, {
            source: 378,
            target: 861
        }, {
            source: 379,
            target: 416
        }, {
            source: 381,
            target: 411
        }, {
            source: 383,
            target: 730
        }, {
            source: 385,
            target: 1036
        }, {
            source: 386,
            target: 707
        }, {
            source: 386,
            target: 745
        }, {
            source: 386,
            target: 694
        }, {
            source: 387,
            target: 436
        }, {
            source: 388,
            target: 416
        }, {
            source: 388,
            target: 412
        }, {
            source: 389,
            target: 452
        }, {
            source: 391,
            target: 560
        }, {
            source: 392,
            target: 1037
        }, {
            source: 394,
            target: 1001
        }, {
            source: 394,
            target: 475
        }, {
            source: 394,
            target: 943
        }, {
            source: 394,
            target: 821
        }, {
            source: 394,
            target: 758
        }, {
            source: 394,
            target: 994
        }, {
            source: 394,
            target: 420
        }, {
            source: 394,
            target: 424
        }, {
            source: 394,
            target: 840
        }, {
            source: 394,
            target: 570
        }, {
            source: 394,
            target: 702
        }, {
            source: 394,
            target: 645
        }, {
            source: 394,
            target: 706
        }, {
            source: 394,
            target: 650
        }, {
            source: 394,
            target: 628
        }, {
            source: 394,
            target: 962
        }, {
            source: 395,
            target: 837
        }, {
            source: 396,
            target: 934
        }, {
            source: 396,
            target: 551
        }, {
            source: 396,
            target: 952
        }, {
            source: 397,
            target: 663
        }, {
            source: 398,
            target: 812
        }, {
            source: 398,
            target: 541
        }, {
            source: 399,
            target: 736
        }, {
            source: 400,
            target: 989
        }, {
            source: 400,
            target: 888
        }, {
            source: 402,
            target: 522
        }, {
            source: 402,
            target: 604
        }, {
            source: 403,
            target: 466
        }, {
            source: 403,
            target: 564
        }, {
            source: 404,
            target: 564
        }, {
            source: 405,
            target: 941
        }, {
            source: 405,
            target: 408
        }, {
            source: 406,
            target: 886
        }, {
            source: 406,
            target: 445
        }, {
            source: 406,
            target: 748
        }, {
            source: 406,
            target: 891
        }, {
            source: 406,
            target: 561
        }, {
            source: 406,
            target: 633
        }, {
            source: 406,
            target: 773
        }, {
            source: 406,
            target: 568
        }, {
            source: 406,
            target: 975
        }, {
            source: 406,
            target: 1042
        }, {
            source: 406,
            target: 849
        }, {
            source: 406,
            target: 988
        }, {
            source: 406,
            target: 713
        }, {
            source: 407,
            target: 643
        }, {
            source: 408,
            target: 669
        }, {
            source: 408,
            target: 1014
        }, {
            source: 408,
            target: 547
        }, {
            source: 408,
            target: 948
        }, {
            source: 408,
            target: 917
        }, {
            source: 408,
            target: 896
        }, {
            source: 408,
            target: 757
        }, {
            source: 408,
            target: 1011
        }, {
            source: 408,
            target: 850
        }, {
            source: 408,
            target: 853
        }, {
            source: 408,
            target: 436
        }, {
            source: 408,
            target: 786
        }, {
            source: 408,
            target: 715
        }, {
            source: 408,
            target: 522
        }, {
            source: 408,
            target: 527
        }, {
            source: 408,
            target: 461
        }, {
            source: 408,
            target: 600
        }, {
            source: 409,
            target: 982
        }, {
            source: 409,
            target: 412
        }, {
            source: 412,
            target: 1001
        }, {
            source: 412,
            target: 734
        }, {
            source: 412,
            target: 1058
        }, {
            source: 413,
            target: 875
        }, {
            source: 413,
            target: 518
        }, {
            source: 416,
            target: 742
        }, {
            source: 416,
            target: 1012
        }, {
            source: 416,
            target: 1016
        }, {
            source: 416,
            target: 818
        }, {
            source: 416,
            target: 751
        }, {
            source: 416,
            target: 761
        }, {
            source: 416,
            target: 498
        }, {
            source: 416,
            target: 700
        }, {
            source: 416,
            target: 1057
        }, {
            source: 416,
            target: 852
        }, {
            source: 416,
            target: 510
        }, {
            source: 416,
            target: 895
        }, {
            source: 416,
            target: 586
        }, {
            source: 416,
            target: 590
        }, {
            source: 416,
            target: 529
        }, {
            source: 417,
            target: 580
        }, {
            source: 417,
            target: 965
        }, {
            source: 418,
            target: 523
        }, {
            source: 418,
            target: 928
        }, {
            source: 418,
            target: 1012
        }, {
            source: 418,
            target: 632
        }, {
            source: 419,
            target: 929
        }, {
            source: 423,
            target: 945
        }, {
            source: 424,
            target: 425
        }, {
            source: 425,
            target: 671
        }, {
            source: 425,
            target: 784
        }, {
            source: 425,
            target: 648
        }, {
            source: 426,
            target: 979
        }, {
            source: 426,
            target: 730
        }, {
            source: 427,
            target: 549
        }, {
            source: 428,
            target: 766
        }, {
            source: 429,
            target: 584
        }, {
            source: 431,
            target: 688
        }, {
            source: 432,
            target: 575
        }, {
            source: 432,
            target: 945
        }, {
            source: 433,
            target: 990
        }, {
            source: 434,
            target: 869
        }, {
            source: 435,
            target: 987
        }, {
            source: 435,
            target: 990
        }, {
            source: 437,
            target: 1047
        }, {
            source: 437,
            target: 980
        }, {
            source: 438,
            target: 1040
        }, {
            source: 439,
            target: 757
        }, {
            source: 440,
            target: 814
        }, {
            source: 441,
            target: 557
        }, {
            source: 442,
            target: 797
        }, {
            source: 443,
            target: 752
        }, {
            source: 444,
            target: 875
        }, {
            source: 444,
            target: 518
        }, {
            source: 445,
            target: 631
        }, {
            source: 449,
            target: 929
        }, {
            source: 449,
            target: 612
        }, {
            source: 450,
            target: 518
        }, {
            source: 451,
            target: 740
        }, {
            source: 452,
            target: 861
        }, {
            source: 453,
            target: 980
        }, {
            source: 453,
            target: 763
        }, {
            source: 454,
            target: 848
        }, {
            source: 457,
            target: 945
        }, {
            source: 459,
            target: 569
        }, {
            source: 459,
            target: 861
        }, {
            source: 460,
            target: 799
        }, {
            source: 461,
            target: 542
        }, {
            source: 462,
            target: 773
        }, {
            source: 463,
            target: 610
        }, {
            source: 465,
            target: 820
        }, {
            source: 466,
            target: 467
        }, {
            source: 466,
            target: 641
        }, {
            source: 466,
            target: 555
        }, {
            source: 467,
            target: 564
        }, {
            source: 470,
            target: 965
        }, {
            source: 471,
            target: 732
        }, {
            source: 471,
            target: 1004
        }, {
            source: 472,
            target: 610
        }, {
            source: 473,
            target: 945
        }, {
            source: 474,
            target: 557
        }, {
            source: 475,
            target: 583
        }, {
            source: 476,
            target: 730
        }, {
            source: 477,
            target: 518
        }, {
            source: 478,
            target: 929
        }, {
            source: 478,
            target: 1013
        }, {
            source: 481,
            target: 518
        }, {
            source: 482,
            target: 722
        }, {
            source: 484,
            target: 584
        }, {
            source: 485,
            target: 990
        }, {
            source: 486,
            target: 965
        }, {
            source: 487,
            target: 724
        }, {
            source: 488,
            target: 528
        }, {
            source: 489,
            target: 494
        }, {
            source: 491,
            target: 982
        }, {
            source: 493,
            target: 583
        }, {
            source: 493,
            target: 814
        }, {
            source: 494,
            target: 733
        }, {
            source: 494,
            target: 810
        }, {
            source: 494,
            target: 1027
        }, {
            source: 494,
            target: 909
        }, {
            source: 494,
            target: 911
        }, {
            source: 494,
            target: 782
        }, {
            source: 494,
            target: 735
        }, {
            source: 494,
            target: 517
        }, {
            source: 494,
            target: 1021
        }, {
            source: 494,
            target: 864
        }, {
            source: 494,
            target: 506
        }, {
            source: 494,
            target: 1063
        }, {
            source: 494,
            target: 999
        }, {
            source: 495,
            target: 769
        }, {
            source: 495,
            target: 514
        }, {
            source: 496,
            target: 855
        }, {
            source: 499,
            target: 912
        }, {
            source: 500,
            target: 943
        }, {
            source: 502,
            target: 982
        }, {
            source: 503,
            target: 956
        }, {
            source: 504,
            target: 557
        }, {
            source: 504,
            target: 1059
        }, {
            source: 505,
            target: 571
        }, {
            source: 505,
            target: 627
        }, {
            source: 505,
            target: 1019
        }, {
            source: 506,
            target: 750
        }, {
            source: 507,
            target: 872
        }, {
            source: 507,
            target: 965
        }, {
            source: 508,
            target: 866
        }, {
            source: 509,
            target: 699
        }, {
            source: 511,
            target: 646
        }, {
            source: 512,
            target: 719
        }, {
            source: 515,
            target: 982
        }, {
            source: 515,
            target: 693
        }, {
            source: 516,
            target: 990
        }, {
            source: 517,
            target: 824
        }, {
            source: 518,
            target: 602
        }, {
            source: 518,
            target: 1005
        }, {
            source: 518,
            target: 805
        }, {
            source: 518,
            target: 737
        }, {
            source: 518,
            target: 949
        }, {
            source: 518,
            target: 1055
        }, {
            source: 518,
            target: 1064
        }, {
            source: 518,
            target: 1028
        }, {
            source: 518,
            target: 614
        }, {
            source: 518,
            target: 639
        }, {
            source: 518,
            target: 845
        }, {
            source: 518,
            target: 689
        }, {
            source: 518,
            target: 528
        }, {
            source: 520,
            target: 766
        }, {
            source: 521,
            target: 768
        }, {
            source: 523,
            target: 861
        }, {
            source: 524,
            target: 929
        }, {
            source: 525,
            target: 982
        }, {
            source: 527,
            target: 833
        }, {
            source: 532,
            target: 608
        }, {
            source: 534,
            target: 915
        }, {
            source: 534,
            target: 981
        }, {
            source: 535,
            target: 674
        }, {
            source: 536,
            target: 573
        }, {
            source: 536,
            target: 871
        }, {
            source: 536,
            target: 873
        }, {
            source: 536,
            target: 918
        }, {
            source: 538,
            target: 650
        }, {
            source: 539,
            target: 549
        }, {
            source: 540,
            target: 1043
        }, {
            source: 542,
            target: 675
        }, {
            source: 542,
            target: 666
        }, {
            source: 542,
            target: 644
        }, {
            source: 543,
            target: 849
        }, {
            source: 545,
            target: 730
        }, {
            source: 546,
            target: 814
        }, {
            source: 546,
            target: 874
        }, {
            source: 547,
            target: 832
        }, {
            source: 548,
            target: 621
        }, {
            source: 548,
            target: 610
        }, {
            source: 549,
            target: 842
        }, {
            source: 549,
            target: 994
        }, {
            source: 549,
            target: 759
        }, {
            source: 550,
            target: 905
        }, {
            source: 550,
            target: 779
        }, {
            source: 551,
            target: 945
        }, {
            source: 552,
            target: 866
        }, {
            source: 553,
            target: 945
        }, {
            source: 554,
            target: 923
        }, {
            source: 555,
            target: 564
        }, {
            source: 556,
            target: 1004
        }, {
            source: 556,
            target: 747
        }, {
            source: 557,
            target: 620
        }, {
            source: 557,
            target: 613
        }, {
            source: 557,
            target: 1020
        }, {
            source: 557,
            target: 624
        }, {
            source: 557,
            target: 1024
        }, {
            source: 557,
            target: 688
        }, {
            source: 557,
            target: 995
        }, {
            source: 557,
            target: 844
        }, {
            source: 557,
            target: 701
        }, {
            source: 557,
            target: 784
        }, {
            source: 558,
            target: 569
        }, {
            source: 559,
            target: 1004
        }, {
            source: 562,
            target: 752
        }, {
            source: 564,
            target: 587
        }, {
            source: 564,
            target: 938
        }, {
            source: 564,
            target: 636
        }, {
            source: 564,
            target: 894
        }, {
            source: 564,
            target: 839
        }, {
            source: 564,
            target: 641
        }, {
            source: 564,
            target: 1041
        }, {
            source: 564,
            target: 787
        }, {
            source: 564,
            target: 571
        }, {
            source: 564,
            target: 1053
        }, {
            source: 564,
            target: 888
        }, {
            source: 565,
            target: 980
        }, {
            source: 565,
            target: 1040
        }, {
            source: 566,
            target: 765
        }, {
            source: 569,
            target: 1009
        }, {
            source: 569,
            target: 602
        }, {
            source: 570,
            target: 835
        }, {
            source: 572,
            target: 605
        }, {
            source: 574,
            target: 652
        }, {
            source: 575,
            target: 629
        }, {
            source: 576,
            target: 927
        }, {
            source: 576,
            target: 990
        }, {
            source: 577,
            target: 583
        }, {
            source: 579,
            target: 863
        }, {
            source: 581,
            target: 945
        }, {
            source: 582,
            target: 1e3
        }, {
            source: 583,
            target: 877
        }, {
            source: 583,
            target: 922
        }, {
            source: 583,
            target: 1038
        }, {
            source: 583,
            target: 755
        }, {
            source: 583,
            target: 1049
        }, {
            source: 583,
            target: 1027
        }, {
            source: 583,
            target: 856
        }, {
            source: 585,
            target: 834
        }, {
            source: 585,
            target: 1004
        }, {
            source: 588,
            target: 929
        }, {
            source: 588,
            target: 866
        }, {
            source: 591,
            target: 1060
        }, {
            source: 591,
            target: 610
        }, {
            source: 592,
            target: 711
        }, {
            source: 592,
            target: 920
        }, {
            source: 594,
            target: 1004
        }, {
            source: 595,
            target: 990
        }, {
            source: 596,
            target: 682
        }, {
            source: 597,
            target: 730
        }, {
            source: 598,
            target: 974
        }, {
            source: 599,
            target: 876
        }, {
            source: 603,
            target: 1004
        }, {
            source: 603,
            target: 835
        }, {
            source: 606,
            target: 831
        }, {
            source: 608,
            target: 1014
        }, {
            source: 610,
            target: 934
        }, {
            source: 610,
            target: 969
        }, {
            source: 610,
            target: 676
        }, {
            source: 610,
            target: 1018
        }, {
            source: 610,
            target: 827
        }, {
            source: 610,
            target: 762
        }, {
            source: 610,
            target: 1026
        }, {
            source: 610,
            target: 971
        }, {
            source: 610,
            target: 1038
        }, {
            source: 610,
            target: 857
        }, {
            source: 610,
            target: 922
        }, {
            source: 610,
            target: 728
        }, {
            source: 611,
            target: 730
        }, {
            source: 611,
            target: 679
        }, {
            source: 613,
            target: 882
        }, {
            source: 614,
            target: 1050
        }, {
            source: 616,
            target: 719
        }, {
            source: 616,
            target: 990
        }, {
            source: 617,
            target: 796
        }, {
            source: 617,
            target: 861
        }, {
            source: 619,
            target: 929
        }, {
            source: 620,
            target: 950
        }, {
            source: 621,
            target: 691
        }, {
            source: 621,
            target: 800
        }, {
            source: 622,
            target: 760
        }, {
            source: 623,
            target: 814
        }, {
            source: 623,
            target: 1015
        }, {
            source: 625,
            target: 815
        }, {
            source: 625,
            target: 860
        }, {
            source: 626,
            target: 982
        }, {
            source: 628,
            target: 724
        }, {
            source: 629,
            target: 929
        }, {
            source: 630,
            target: 846
        }, {
            source: 632,
            target: 861
        }, {
            source: 633,
            target: 817
        }, {
            source: 634,
            target: 945
        }, {
            source: 635,
            target: 730
        }, {
            source: 636,
            target: 835
        }, {
            source: 637,
            target: 965
        }, {
            source: 637,
            target: 946
        }, {
            source: 639,
            target: 901
        }, {
            source: 640,
            target: 990
        }, {
            source: 644,
            target: 980
        }, {
            source: 645,
            target: 919
        }, {
            source: 646,
            target: 709
        }, {
            source: 646,
            target: 1041
        }, {
            source: 646,
            target: 897
        }, {
            source: 647,
            target: 766
        }, {
            source: 648,
            target: 730
        }, {
            source: 649,
            target: 670
        }, {
            source: 649,
            target: 920
        }, {
            source: 655,
            target: 837
        }, {
            source: 656,
            target: 982
        }, {
            source: 656,
            target: 826
        }, {
            source: 657,
            target: 929
        }, {
            source: 661,
            target: 822
        }, {
            source: 662,
            target: 1032
        }, {
            source: 664,
            target: 982
        }, {
            source: 665,
            target: 968
        }, {
            source: 666,
            target: 814
        }, {
            source: 667,
            target: 786
        }, {
            source: 670,
            target: 1057
        }, {
            source: 670,
            target: 992
        }, {
            source: 670,
            target: 761
        }, {
            source: 670,
            target: 889
        }, {
            source: 671,
            target: 945
        }, {
            source: 673,
            target: 991
        }, {
            source: 673,
            target: 814
        }, {
            source: 676,
            target: 855
        }, {
            source: 677,
            target: 816
        }, {
            source: 678,
            target: 919
        }, {
            source: 678,
            target: 980
        }, {
            source: 679,
            target: 913
        }, {
            source: 679,
            target: 714
        }, {
            source: 679,
            target: 783
        }, {
            source: 680,
            target: 939
        }, {
            source: 682,
            target: 1004
        }, {
            source: 683,
            target: 1015
        }, {
            source: 683,
            target: 730
        }, {
            source: 684,
            target: 1011
        }, {
            source: 686,
            target: 920
        }, {
            source: 687,
            target: 1015
        }, {
            source: 687,
            target: 730
        }, {
            source: 690,
            target: 982
        }, {
            source: 695,
            target: 1004
        }, {
            source: 695,
            target: 770
        }, {
            source: 696,
            target: 920
        }, {
            source: 698,
            target: 814
        }, {
            source: 698,
            target: 880
        }, {
            source: 699,
            target: 700
        }, {
            source: 702,
            target: 906
        }, {
            source: 706,
            target: 724
        }, {
            source: 709,
            target: 980
        }, {
            source: 710,
            target: 948
        }, {
            source: 712,
            target: 931
        }, {
            source: 714,
            target: 929
        }, {
            source: 716,
            target: 904
        }, {
            source: 717,
            target: 861
        }, {
            source: 718,
            target: 929
        }, {
            source: 718,
            target: 723
        }, {
            source: 719,
            target: 839
        }, {
            source: 724,
            target: 1034
        }, {
            source: 724,
            target: 840
        }, {
            source: 724,
            target: 838
        }, {
            source: 724,
            target: 808
        }, {
            source: 724,
            target: 742
        }, {
            source: 724,
            target: 864
        }, {
            source: 724,
            target: 738
        }, {
            source: 726,
            target: 861
        }, {
            source: 727,
            target: 929
        }, {
            source: 727,
            target: 796
        }, {
            source: 728,
            target: 796
        }, {
            source: 730,
            target: 1006
        }, {
            source: 730,
            target: 913
        }, {
            source: 730,
            target: 777
        }, {
            source: 730,
            target: 783
        }, {
            source: 730,
            target: 1056
        }, {
            source: 731,
            target: 861
        }, {
            source: 733,
            target: 835
        }, {
            source: 734,
            target: 980
        }, {
            source: 735,
            target: 835
        }, {
            source: 737,
            target: 789
        }, {
            source: 741,
            target: 1035
        }, {
            source: 743,
            target: 945
        }, {
            source: 744,
            target: 833
        }, {
            source: 746,
            target: 1013
        }, {
            source: 747,
            target: 1023
        }, {
            source: 749,
            target: 982
        }, {
            source: 750,
            target: 893
        }, {
            source: 750,
            target: 782
        }, {
            source: 750,
            target: 999
        }, {
            source: 756,
            target: 920
        }, {
            source: 756,
            target: 846
        }, {
            source: 758,
            target: 1015
        }, {
            source: 764,
            target: 780
        }, {
            source: 767,
            target: 926
        }, {
            source: 768,
            target: 1003
        }, {
            source: 769,
            target: 1004
        }, {
            source: 770,
            target: 1020
        }, {
            source: 771,
            target: 920
        }, {
            source: 771,
            target: 846
        }, {
            source: 772,
            target: 833
        }, {
            source: 777,
            target: 927
        }, {
            source: 778,
            target: 1004
        }, {
            source: 779,
            target: 929
        }, {
            source: 781,
            target: 890
        }, {
            source: 789,
            target: 986
        }, {
            source: 789,
            target: 949
        }, {
            source: 790,
            target: 983
        }, {
            source: 791,
            target: 886
        }, {
            source: 792,
            target: 1015
        }, {
            source: 792,
            target: 990
        }, {
            source: 793,
            target: 1007
        }, {
            source: 795,
            target: 807
        }, {
            source: 796,
            target: 973
        }, {
            source: 798,
            target: 1060
        }, {
            source: 800,
            target: 945
        }, {
            source: 802,
            target: 861
        }, {
            source: 805,
            target: 834
        }, {
            source: 806,
            target: 920
        }, {
            source: 807,
            target: 936
        }, {
            source: 809,
            target: 990
        }, {
            source: 812,
            target: 965
        }, {
            source: 813,
            target: 1062
        }, {
            source: 814,
            target: 843
        }, {
            source: 814,
            target: 1037
        }, {
            source: 814,
            target: 947
        }, {
            source: 814,
            target: 972
        }, {
            source: 814,
            target: 868
        }, {
            source: 819,
            target: 990
        }, {
            source: 820,
            target: 980
        }, {
            source: 821,
            target: 1015
        }, {
            source: 822,
            target: 965
        }, {
            source: 823,
            target: 1004
        }, {
            source: 825,
            target: 945
        }, {
            source: 826,
            target: 985
        }, {
            source: 827,
            target: 927
        }, {
            source: 828,
            target: 874
        }, {
            source: 830,
            target: 865
        }, {
            source: 831,
            target: 982
        }, {
            source: 833,
            target: 899
        }, {
            source: 833,
            target: 1054
        }, {
            source: 835,
            target: 909
        }, {
            source: 835,
            target: 1044
        }, {
            source: 835,
            target: 1063
        }, {
            source: 835,
            target: 867
        }, {
            source: 835,
            target: 1016
        }, {
            source: 836,
            target: 920
        }, {
            source: 836,
            target: 846
        }, {
            source: 841,
            target: 920
        }, {
            source: 844,
            target: 866
        }, {
            source: 846,
            target: 963
        }, {
            source: 846,
            target: 933
        }, {
            source: 847,
            target: 945
        }, {
            source: 847,
            target: 1060
        }, {
            source: 848,
            target: 955
        }, {
            source: 850,
            target: 991
        }, {
            source: 853,
            target: 1010
        }, {
            source: 854,
            target: 865
        }, {
            source: 857,
            target: 1015
        }, {
            source: 858,
            target: 1055
        }, {
            source: 859,
            target: 1002
        }, {
            source: 859,
            target: 980
        }, {
            source: 861,
            target: 1034
        }, {
            source: 861,
            target: 973
        }, {
            source: 861,
            target: 862
        }, {
            source: 861,
            target: 997
        }, {
            source: 863,
            target: 919
        }, {
            source: 863,
            target: 980
        }, {
            source: 866,
            target: 1021
        }, {
            source: 870,
            target: 984
        }, {
            source: 870,
            target: 990
        }, {
            source: 874,
            target: 976
        }, {
            source: 875,
            target: 1028
        }, {
            source: 878,
            target: 961
        }, {
            source: 878,
            target: 990
        }, {
            source: 879,
            target: 959
        }, {
            source: 885,
            target: 990
        }, {
            source: 887,
            target: 982
        }, {
            source: 889,
            target: 920
        }, {
            source: 896,
            target: 1002
        }, {
            source: 897,
            target: 980
        }, {
            source: 900,
            target: 920
        }, {
            source: 902,
            target: 907
        }, {
            source: 903,
            target: 1047
        }, {
            source: 903,
            target: 980
        }, {
            source: 904,
            target: 945
        }, {
            source: 905,
            target: 929
        }, {
            source: 908,
            target: 1048
        }, {
            source: 910,
            target: 1029
        }, {
            source: 910,
            target: 920
        }, {
            source: 912,
            target: 980
        }, {
            source: 914,
            target: 982
        }, {
            source: 916,
            target: 1047
        }, {
            source: 920,
            target: 939
        }, {
            source: 920,
            target: 963
        }, {
            source: 920,
            target: 1033
        }, {
            source: 920,
            target: 933
        }, {
            source: 921,
            target: 1061
        }, {
            source: 921,
            target: 965
        }, {
            source: 925,
            target: 1013
        }, {
            source: 927,
            target: 966
        }, {
            source: 928,
            target: 1004
        }, {
            source: 929,
            target: 937
        }, {
            source: 930,
            target: 1022
        }, {
            source: 945,
            target: 985
        }, {
            source: 945,
            target: 952
        }, {
            source: 945,
            target: 1032
        }, {
            source: 954,
            target: 1007
        }, {
            source: 960,
            target: 1004
        }, {
            source: 961,
            target: 964
        }, {
            source: 965,
            target: 986
        }, {
            source: 965,
            target: 978
        }, {
            source: 969,
            target: 1060
        }, {
            source: 970,
            target: 1030
        }, {
            source: 970,
            target: 1004
        }, {
            source: 971,
            target: 1015
        }, {
            source: 980,
            target: 1044
        }, {
            source: 980,
            target: 1049
        }, {
            source: 982,
            target: 1023
        }, {
            source: 982,
            target: 1025
        }, {
            source: 982,
            target: 1039
        }, {
            source: 982,
            target: 996
        }, {
            source: 984,
            target: 1052
        }, {
            source: 990,
            target: 1062
        }, {
            source: 990,
            target: 1054
        }, {
            source: 991,
            target: 993
        }, {
            source: 1004,
            target: 1036
        }, {
            source: 1004,
            target: 1046
        }, {
            source: 1004,
            target: 1048
        }, {
            source: 1015,
            target: 1056
        }, {
            source: 1017,
            target: 1018
        }, {
            source: 1026,
            target: 1060
        }, {
            source: 1045,
            target: 1050
        }],
        multigraph: !1
    }
}), define("data/precomputed.json", [], function() {
    return {
        0: {
            "club:Cagliari Calcio": [.5391, .8097],
            "player:Mats HUMMELS": [.1874, .6492],
            "player:Godfrey OBOABONA": [.483, .1024],
            "player:Steven GERRARD": [.2744, .7572],
            "player:Jack WILSHERE": [.2603, .7686],
            "club:Independiente Santa Fe": [.4214, .8073],
            "player:Shinji KAGAWA": [.3318, .2317],
            "player:Andre AYEW": [.1782, .6047],
            "player:Jackson MARTINEZ": [.5107, .8347],
            "player:JUANFRAN": [.7635, .2414],
            "team:Cameroon": [.6497, .917],
            "player:Ricardo RODRIGUEZ": [.766, .3273],
            "club:Manchester United FC": [.4536, .5191],
            "player:Eliaquim MANGALA": [.2678, .6882],
            "player:Carlos GRUEZO": [.3188, .7785],
            "player:Konstantinos MITROGLOU": [.1475, .4921],
            "club:Borussia Moenchengladbach": [.4859, .4688],
            "player:Xabi ALONSO": [.7119, .2522],
            "player:PAULINHO": [.6946, .8157],
            "player:KOO Jacheol": [.6744, .2127],
            "player:Maynor FIGUEROA": [.1676, .4539],
            "player:Phil JONES": [.2853, .7408],
            "player:Maximiliano PEREIRA": [.8288, .406],
            "player:Sime VRSALJKO": [.3448, .8322],
            "player:Serge AURIER": [.2578, .2421],
            "club:Liverpool FC": [.4217, .6089],
            "club:FC Basel": [.5645, .3736],
            "club:Tottenham Hotspur FC": [.6621, .6828],
            "player:JULIO CESAR": [.7099, .8031],
            "player:Abel AGUILAR": [.4743, .8426],
            "player:Juan CUADRADO": [.4781, .8764],
            "player:Ron VLAAR": [.4563, .116],
            "team:South Korea": [.7173, .1247],
            "player:Juan MATA": [.695, .2676],
            "player:Sergio ROMERO": [.7999, .5851],
            "player:Mario GOETZE": [.213, .6392],
            "player:Joel CAMPBELL": [.3931, .8451],
            "player:Ron-Robert ZIELER": [.1804, .6124],
            "player:Mesut OEZIL": [.2031, .6634],
            "player:Andreas SAMARIS": [.1523, .5192],
            "player:Tim KRUL": [.4073, .1581],
            "club:Club Brugge KV": [.6111, .7278],
            "club:Arsenal FC": [.3415, .6489],
            "club:Valencia CF": [.6485, .3944],
            "player:Nicolas LODEIRO": [.839, .4468],
            "player:PEPE": [.5617, .1603],
            "player:Alessio CERCI": [.204, .2795],
            "player:Hotaru YAMAGUCHI": [.3324, .1703],
            "player:Panagiotis TACHTSIDIS": [.1537, .4723],
            "player:Ricardo ALVAREZ": [.8183, .5937],
            "player:John BOYE": [.1828, .5989],
            "player:Gary MEDEL": [.5781, .8546],
            "player:Antoine GRIEZMANN": [.248, .7151],
            "player:Jordan HENDERSON": [.2795, .7625],
            "player:Carlos BACCA": [.502, .8689],
            "player:Jerome BOATENG": [.2154, .6466],
            "player:John BROOKS": [.8038, .3737],
            "player:KIM Bokyung": [.6869, .2102],
            "player:Leighton BAINES": [.2961, .7796],
            "player:Diego PEREZ": [.7851, .426],
            "player:Raheem STERLING": [.2805, .7547],
            "team:Portugal": [.5763, .0574],
            "player:Memphis DEPAY": [.434, .156],
            "player:Rickie LAMBERT": [.267, .7679],
            "player:Alexis SANCHEZ": [.615, .7873],
            "player:Joe HART": [.326, .7512],
            "player:James RODRIGUEZ": [.5107, .8601],
            "club:Bayer 04 Leverkusen": [.5913, .3791],
            "club:Standard Liege": [.4265, .4957],
            "player:Toshihiro AOYAMA": [.3298, .1605],
            "player:Albert ADOMAH": [.1729, .5478],
            "club:Cruz Azul FC": [.3692, .3866],
            "player:HERNANES": [.693, .8006],
            "team:Costa Rica": [.4237, .9426],
            "player:Esseid BELKALEM": [.8436, .4779],
            "player:Didier DROGBA": [.3046, .2542],
            "player:Cristian RODRIGUEZ": [.8361, .4079],
            "team:Nigeria": [.5, .0487],
            "player:Nigel DE JONG": [.3979, .1568],
            "player:Olivier GIROUD": [.2243, .7164],
            "team:Ecuador": [.2827, .8753],
            "player:Ante REBIC": [.363, .851],
            "player:Yury LODYGIN": [.6441, .1581],
            "team:Australia": [.8614, .6727],
            "player:Bastian SCHWEINSTEIGER": [.2498, .6261],
            "player:Divock ORIGI": [.7411, .6826],
            "player:Die SEREY": [.3027, .2328],
            "player:Ioannis FETFATZIDIS": [.1593, .5057],
            "player:Vladimir GRANAT": [.6256, .1353],
            "player:Pierre WEBO": [.6207, .7666],
            "player:Juan ZUNIGA": [.5437, .8261],
            "player:Steven DEFOUR": [.7504, .6864],
            "player:Sokratis PAPASTATHOPOULOS": [.1695, .5221],
            "player:Gianluigi BUFFON": [.2376, .3021],
            "player:Mattia PERIN": [.1986, .3097],
            "player:Andrea BARZAGLI": [.2401, .3094],
            "player:SAMMIR": [.3962, .8594],
            "player:Edin DZEKO": [.7275, .7482],
            "player:Hector HERRERA": [.403, .2003],
            "player:Fabian ORELLANA": [.5882, .8783],
            "player:Vedran CORLUKA": [.3782, .8342],
            "player:Ashkan DEJAGAH": [.1862, .3741],
            "player:Mix DISKERUD": [.8002, .3804],
            "team:Colombia": [.5, .9513],
            "player:Xavi HERNANDEZ": [.7458, .2661],
            "player:Vasileios TOROSIDIS": [.1886, .5047],
            "player:Ivan PERISIC": [.4072, .8256],
            "player:Stephane MBIA": [.6151, .8442],
            "player:Miroslav KLOSE": [.2425, .6061],
            "club:Celta Vigo": [.6788, .7041],
            "player:Andrea PIRLO": [.2306, .3011],
            "player:Adnan JANUZAJ": [.7323, .6898],
            "club:SS Lazio": [.5459, .4064],
            "player:Cristian ZAPATA": [.4557, .8089],
            "player:Mubarak WAKASO": [.1994, .5342],
            "player:Eric CHOUPO MOTING": [.6224, .8072],
            "player:NEYMAR": [.7089, .7419],
            "player:Anthony VANDEN BORRE": [.7566, .7084],
            "player:Jan VERTONGHEN": [.7775, .7247],
            "club:SC Freiburg": [.609, .5001],
            "player:Mauricio ISLA": [.5259, .818],
            "player:Alex IBARRA": [.2977, .8154],
            "club:Atletico Madrid": [.7591, .39],
            "player:Mamadou SAKHO": [.2437, .7084],
            "club:Levante UD": [.3191, .6694],
            "player:Claudio BRAVO": [.5609, .8568],
            "player:Martin DEMICHELIS": [.8112, .5812],
            "player:Diego LUGANO": [.8114, .4409],
            "player:PARK Chuyoung": [.7061, .1859],
            "club:SSC Napoli": [.6905, .4691],
            "player:Jose CHOLEVAS": [.1626, .5125],
            "player:Cristian GAMBOA": [.4571, .8634],
            "player:Xherdan SHAQIRI": [.7133, .3372],
            "player:Danijel SUBASIC": [.3955, .8368],
            "player:YUN Sukyoung": [.6937, .2094],
            "club:Fortuna Duesseldorf": [.5055, .4224],
            "player:Sulley MUNTARI": [.1759, .5396],
            "team:Mexico": [.3503, .083],
            "club:VfB Stuttgart": [.4023, .4983],
            "player:Per MERTESACKER": [.1988, .6574],
            "team:Greece": [.1089, .5],
            "player:Federico FERNANDEZ": [.8242, .552],
            "player:Theofanis GEKAS": [.1769, .5242],
            "player:Stephan LICHTSTEINER": [.7057, .3099],
            "player:Hiroshi KIYOTAKE": [.3462, .1674],
            "player:Konstantinos MANOLAS": [.1591, .5193],
            "club:Granada CF": [.5384, .6115],
            "team:Ghana": [.1164, .588],
            "player:Izet HAJROVIC": [.7264, .7343],
            "club:Parma FC": [.3439, .3837],
            "player:Johnny ACOSTA": [.4198, .8747],
            "player:Romelu LUKAKU": [.7517, .7248],
            "player:Javier MASCHERANO": [.8231, .5674],
            "player:Lionel MESSI": [.806, .5578],
            "player:Augusto FERNANDEZ": [.8301, .6005],
            "player:Aleksandr KERZHAKOV": [.6463, .1862],
            "player:Geoff CAMERON": [.7867, .3576],
            "player:Sergio BUSQUETS": [.751, .2613],
            "player:Roy MILLER": [.4545, .8835],
            "team:Spain": [.7766, .1809],
            "player:Asmir BEGOVIC": [.7231, .7276],
            "player:David SILVA": [.723, .3186],
            "club:Manchester City FC": [.6273, .581],
            "player:Gabriel PALETTA": [.2214, .2881],
            "player:Claudio MARCHISIO": [.2354, .3152],
            "club:AC Ajaccio": [.5926, .3415],
            "player:Mathis BOLLY": [.2795, .2339],
            "club:Sanfrecce Hiroshima": [.5002, .2126],
            "player:Gonzalo HIGUAIN": [.8246, .5598],
            "player:KI Sungyueng": [.7036, .175],
            "player:Kenneth OMERUO": [.4763, .1224],
            "player:Ahmed MUSA": [.5217, .1021],
            "club:Swansea City AFC": [.3881, .1916],
            "player:Arturo VIDAL": [.524, .8106],
            "player:Rui PATRICIO": [.5941, .139],
            "player:Lucas DIGNE": [.2486, .7008],
            "club:LD Alajuelense": [.3703, .7032],
            "player:Hugo ALMEIDA": [.5855, .1527],
            "club:San Jose Earthquakes": [.4891, .4104],
            "club:Torino FC": [.2318, .3553],
            "player:Andres INIESTA": [.7475, .273],
            "player:Enzo PEREZ": [.8272, .5422],
            "player:Nabil BENTALEB": [.8207, .54],
            "club:FC Rubin Kazan": [.4753, .3062],
            "club:Fenerbahce SK": [.5386, .2903],
            "player:Dirk KUYT": [.4505, .1275],
            "club:CSKA Moscow": [.5995, .1699],
            "player:HULK": [.6923, .7519],
            "player:Julian DRAXLER": [.2064, .6375],
            "player:Yuto NAGATOMO": [.3736, .2493],
            "player:Patrice EVRA": [.2523, .6865],
            "player:Giorgio CHIELLINI": [.2335, .3078],
            "player:OSCAR": [.6756, .804],
            "player:Georginio WIJNALDUM": [.4368, .1632],
            "player:Cesc FABREGAS": [.7429, .279],
            "player:Ioannis MANIATIS": [.1557, .5125],
            "player:Marcelo DIAZ": [.5702, .8012],
            "player:Rodrigo PALACIO": [.8165, .586],
            "club:Cardiff City FC": [.6153, .5258],
            "player:Charles ITANDJE": [.6034, .8508],
            "player:Mensur MUJDZA": [.73, .741],
            "player:Klaas Jan HUNTELAAR": [.4182, .1806],
            "club:Toronto FC": [.7444, .5355],
            "player:Michael ESSIEN": [.1795, .5461],
            "club:Caykur Rizespor": [.3953, .2152],
            "player:Faouzi GHOULAM": [.8252, .493],
            "player:Gaston RAMIREZ": [.7623, .4596],
            "club:Cerezo Osaka": [.4922, .2822],
            "player:Dejan LOVREN": [.3627, .8357],
            "player:Vasily BEREZUTSKIY": [.6379, .1258],
            "club:Eintracht Braunschweig": [.4811, .5754],
            "player:Georgios KARAGOUNIS": [.1541, .4938],
            "player:Makoto HASEBE": [.3462, .1753],
            "player:Frank LAMPARD": [.3155, .7634],
            "club:Hertha BSC": [.6243, .6138],
            "player:James MILNER": [.3199, .7546],
            "player:Marouane FELLAINI": [.7258, .6875],
            "player:Patrick PEMBERTON": [.4173, .8674],
            "player:Ciro IMMOBILE": [.2019, .2869],
            "club:Middlesbrough FC": [.3503, .3573],
            "club:Sunderland AFC": [.7219, .2805],
            "player:Kevin DE BRUYNE": [.7613, .6955],
            "club:West Bromwich Albion FC": [.5364, .5869],
            "player:Ogenyi ONAZI": [.5094, .154],
            "player:Andres GUARDADO": [.4025, .1635],
            "team:Brazil": [.7173, .8753],
            "player:Panagiotis KONE": [.18, .4926],
            "club:AS Saint-Etienne": [.2648, .4026],
            "club:New York Red Bulls": [.596, .7418],
            "club:Atalanta Bergamo": [.5268, .8352],
            "club:Norwich City FC": [.4734, .1701],
            "club:Olympiacos Piraeus FC": [.2411, .5757],
            "club:Udinese Calcio": [.4926, .5366],
            "player:Medhi LACEN": [.8271, .525],
            "team:Iran": [.1386, .3273],
            "team:Algeria": [.8911, .5],
            "player:Diego BENAGLIO": [.76, .3238],
            "club:VfL Wolfsburg": [.6028, .5519],
            "team:Belgium": [.8252, .7507],
            "club:Everton FC": [.5291, .6805],
            "player:Gotoku SAKAI": [.3163, .2156],
            "player:HENRIQUE": [.7006, .7668],
            "player:Acquah AFRIYIE": [.1845, .5408],
            "player:Yaya TOURE": [.3222, .2804],
            "player:MAICON": [.6463, .7836],
            "club:AS Roma": [.4179, .5232],
            "player:Alberto AQUILANI": [.2266, .3347],
            "player:Gerard PIQUE": [.7409, .2716],
            "player:Marcos URENA": [.4131, .876],
            "player:Allan NYOM": [.6215, .8399],
            "player:Konan YA": [.2487, .232],
            "player:Diego FORLAN": [.7976, .3948],
            "player:Danijel PRANJIC": [.3543, .8615],
            "player:BETO": [.5624, .185],
            "player:Vedad IBISEVIC": [.6902, .7445],
            "player:Joao PEREIRA": [.5821, .1459],
            "player:Ben FOSTER": [.2842, .7682],
            "club:Rosenborg BK": [.6068, .6041],
            "player:Oscar DUARTE": [.4597, .8785],
            "player:Fraser FORSTER": [.2514, .7362],
            "player:Saphir TAIDER": [.8142, .5271],
            "player:Hugo LLORIS": [.2862, .7254],
            "player:Santi CAZORLA": [.6719, .2962],
            "club:Hull City FC": [.2919, .634],
            "player:Mauricio PINILLA": [.567, .89],
            "player:Brad GUZAN": [.8013, .3275],
            "player:Bacary SAGNA": [.2307, .719],
            "player:Arthur BOKA": [.2711, .2561],
            "player:Senad LULIC": [.7128, .7138],
            "player:MARCELO": [.6633, .76],
            "player:Marco PAROLO": [.2275, .2917],
            "player:Jerry PALACIOS": [.1834, .4699],
            "player:Shinji OKAZAKI": [.3497, .2139],
            "player:Ricardo COSTA": [.5878, .1417],
            "player:Victor BERNARDEZ": [.196, .4182],
            "player:NANI": [.5461, .1793],
            "player:Mohammed RABIU": [.1732, .5995],
            "player:Diego GODIN": [.8377, .4156],
            "player:John Obi MIKEL": [.5145, .2072],
            "player:Christoph KRAMER": [.2044, .6299],
            "player:Angel DI MARIA": [.7868, .5519],
            "team:Germany": [.1386, .6727],
            "club:Besiktas JK": [.6529, .4513],
            "player:Nicolas NKOULOU": [.5873, .8548],
            "player:Vincent KOMPANY": [.7657, .7014],
            "club:Botafogo FR": [.7305, .6108],
            "player:Pepe REINA": [.7447, .2584],
            "player:Granit XHAKA": [.7588, .2987],
            "club:FC Augsburg": [.5892, .1981],
            "player:Erik DURM": [.1934, .6453],
            "player:Kevin Prince BOATENG": [.1967, .5693],
            "player:Fabrice OLINGA": [.6441, .8626],
            "player:Toby ALDERWEIRELD": [.7967, .661],
            "player:Miguel VELOSO": [.5464, .1575],
            "player:Aurelien CHEDJOU": [.6291, .8062],
            "player:Dany NOUNKEU": [.6414, .8098],
            "player:Walter GARGANO": [.7629, .4165],
            "team:Honduras": [.1164, .412],
            "player:Victor MOSES": [.4824, .1941],
            "player:Hassan YEBDA": [.8061, .5055],
            "player:Phil JAGIELKA": [.297, .7718],
            "player:Gelson FERNANDES": [.7691, .3062],
            "player:Nabil GHILAS": [.7933, .5016],
            "player:Dries MERTENS": [.7777, .6752],
            "player:Majeed WARIS": [.2011, .5752],
            "player:Guillermo OCHOA": [.4018, .1505],
            "player:Alexandre SONG": [.6563, .8032],
            "player:Mario YEPES": [.5037, .904],
            "club:FC Internazionale": [.651, .6177],
            "player:Emmanuel EMENIKE": [.508, .1235],
            "player:Antonio CASSANO": [.2272, .2839],
            "player:Ezequiel GARAY": [.8316, .5362],
            "player:Rio MAVUBA": [.2416, .6829],
            "club:FC Barcelona": [.7094, .5122],
            "player:Max GRADEL": [.2439, .2376],
            "player:Joel MATIP": [.5845, .8146],
            "player:Timmy CHANDLER": [.7812, .3236],
            "team:Bosnia and Herzegovina": [.7766, .8191],
            "player:Georgios SAMARAS": [.1668, .4917],
            "team:Netherlands": [.4237, .0574],
            "player:Ivan RAKITIC": [.3864, .8437],
            "club:Genoa CFC": [.2713, .5419],
            "club:Celtic FC": [.294, .4549],
            "player:DANTE": [.6361, .7848],
            "player:Paul VERHAEGH": [.4579, .1084],
            "club:Hannover 96": [.2748, .3677],
            "player:Martin CACERES": [.754, .4296],
            "player:Fabio COENTRAO": [.5624, .1681],
            "player:Camilo VARGAS": [.4877, .8985],
            "player:Kolo TOURE": [.2796, .2886],
            "club:Real Madrid CF": [.5289, .444],
            "club:Kuban Krasnodar": [.3269, .6961],
            "player:Brad DAVIS": [.7867, .3449],
            "player:Moussa DEMBELE": [.7736, .7182],
            "player:Michel VORM": [.4207, .1063],
            "player:Atsuto UCHIDA": [.316, .232],
            "player:Ben HALLORAN": [.7698, .6153],
            "player:Thomas VERMAELEN": [.7064, .7163],
            "player:Loic REMY": [.221, .6783],
            "player:Alexander SAMEDOV": [.6196, .1659],
            "player:Daniel OPARE": [.1908, .5655],
            "player:Jose GIMENEZ": [.8312, .4134],
            "player:Lorenzo INSIGNE": [.3001, .3083],
            "player:Mehdi MOSTEFA": [.8216, .4738],
            "player:Victor IBARBO": [.5069, .8971],
            "player:Emilio IZAGUIRRE": [.1752, .4261],
            "player:Julian GREEN": [.7359, .3908],
            "player:Emmanuel AGYEMANG BADU": [.1945, .5768],
            "club:Real Sociedad": [.5157, .6125],
            "club:Valenciennes FC": [.5119, .5339],
            "club:Watford FC": [.7316, .3576],
            "team:France": [.1748, .7507],
            "player:Ignazio ABATE": [.2219, .2958],
            "player:Wilson PALACIOS": [.2277, .4228],
            "player:HWANG Seokho": [.6691, .1617],
            "player:Fernando MUSLERA": [.804, .4312],
            "player:Adam LALLANA": [.2732, .7651],
            "club:Lille OSC": [.4496, .4451],
            "player:Ezequiel LAVEZZI": [.7687, .5795],
            "player:Valon BEHRAMI": [.7791, .3083],
            "player:HONG Jeongho": [.6791, .1658],
            "player:WILLIAN": [.6665, .7954],
            "player:Hiroki SAKAI": [.2947, .1907],
            "player:Cristhian NOBOA": [.3595, .7177],
            "player:Ross BARKLEY": [.3024, .7765],
            "player:Ousmane DIARRASSOUBA": [.2659, .2072],
            "player:Antonio CANDREVA": [.2654, .2932],
            "player:Arjen ROBBEN": [.4237, .1969],
            "player:Maty RYAN": [.7891, .6692],
            "player:Andy NAJAR": [.1989, .4405],
            "player:Luis SUAREZ": [.7283, .4733],
            "player:Mateo KOVACIC": [.4207, .8341],
            "player:BERNARD": [.6741, .838],
            "club:FC Dynamo Kyiv": [.4395, .4723],
            "player:Daniele DE ROSSI": [.2421, .3169],
            "player:Oleg SHATOV": [.6411, .1652],
            "player:Lazaros CHRISTODOULOPOULOS": [.1855, .4971],
            "player:Tranquillo BARNETTA": [.7615, .2704],
            "player:Yoichiro KAKITANI": [.3323, .1781],
            "player:David VILLA": [.7525, .2449],
            "player:Marco FABIAN": [.3648, .1682],
            "club:Toulouse FC": [.3493, .4486],
            "player:Tim CAHILL": [.785, .6753],
            "club:Vitesse Arnheim": [.2803, .6785],
            "player:Hugo CAMPAGNARO": [.8118, .5916],
            "player:Yacine BRAHIMI": [.8091, .5197],
            "club:FC Zenit St. Petersburg": [.6602, .361],
            "player:GERVINHO": [.2755, .2641],
            "player:Diego COSTA": [.757, .239],
            "player:Marcos ROJO": [.8251, .5341],
            "player:Fredy GUARIN": [.5339, .854],
            "player:Mathieu VALBUENA": [.2247, .7265],
            "player:Darijo SRNA": [.3862, .8729],
            "club:AC Milan": [.2933, .4025],
            "player:Thiago MOTTA": [.2514, .3265],
            "player:Sergey RYZHIKOV": [.6123, .1411],
            "player:Marco VERRATTI": [.2467, .3321],
            "player:Valentin STOCKER": [.7557, .2837],
            "player:Vincent ENYEAMA": [.4903, .1502],
            "player:Fabian JOHNSON": [.8204, .3669],
            "player:Igor AKINFEEV": [.6254, .1198],
            "player:Keylor NAVAS": [.4106, .8687],
            "club:SV Zulte Waregem": [.6776, .755],
            "player:Sammy BOSSUT": [.781, .735],
            "player:DAVID LUIZ": [.6732, .7967],
            "player:Domagoj VIDA": [.3702, .8109],
            "club:FC Lokomotiv Moscow": [.4905, .4987],
            "player:Keisuke HONDA": [.2978, .2063],
            "player:Sofiane FEGHOULI": [.8205, .4816],
            "player:Danny WELBECK": [.2872, .7332],
            "club:Galatasaray SK": [.58, .4854],
            "player:David DE GEA": [.6914, .2742],
            "club:Konyaspor": [.4068, .6584],
            "club:Chelsea FC": [.5648, .6327],
            "player:Chris SMALLING": [.2919, .7388],
            "player:Maya YOSHIDA": [.3139, .2528],
            "player:Morgan SCHNEIDERLIN": [.2362, .7098],
            "team:Italy": [.1748, .2493],
            "player:Wayne ROONEY": [.3033, .7114],
            "club:Aston Villa FC": [.6085, .2635],
            "player:Philipp LAHM": [.2175, .6333],
            "player:Ivica OLIC": [.4103, .8186],
            "player:Manuel NEUER": [.2242, .6348],
            "player:Roger ESPINOZA": [.1753, .4459],
            "player:Cesar AZPILICUETA": [.7123, .2968],
            "club:Stade Rennais FC": [.4096, .6953],
            "player:Eden HAZARD": [.7502, .7117],
            "player:Giovanni SIO": [.3081, .2376],
            "player:VARELA": [.5661, .1755],
            "player:Junior DIAZ": [.4552, .8216],
            "club:1. FC Nuernberg": [.5498, .2621],
            "player:Philippe SENDEROS": [.7721, .2922],
            "club:Borussia Dortmund": [.3059, .6104],
            "player:Simon MIGNOLET": [.7235, .7087],
            "player:Antonio VALENCIA": [.3362, .7688],
            "player:Sergio RAMOS": [.7086, .2591],
            "player:Yury ZHIRKOV": [.6292, .1503],
            "player:Thiago SILVA": [.6455, .7915],
            "player:Pedro RODRIGUEZ": [.7494, .2807],
            "player:Nicolas LOMBAERTS": [.7745, .6584],
            "player:Laurent KOSCIELNY": [.2295, .7113],
            "player:Benoit ASSOU EKOTTO": [.6392, .8303],
            "player:Jermaine JONES": [.803, .3591],
            "club:TSG 1899 Hoffenheim": [.7413, .5577],
            "player:Aleksei KOZLOV": [.6226, .1486],
            "player:Diego REYES": [.4079, .2058],
            "player:Edison MENDEZ": [.3209, .8367],
            "player:Leonardo BONUCCI": [.2375, .3226],
            "club:Queens Park Rangers FC": [.6408, .5184],
            "player:Kevin GROSSKREUTZ": [.1931, .6532],
            "player:Mattia DE SCIGLIO": [.2151, .2949],
            "player:Miralem PJANIC": [.6881, .737],
            "player:Loukas VYNTRA": [.1635, .5258],
            "club:Wigan Athletic FC": [.3218, .5734],
            "player:Edinson CAVANI": [.7711, .4502],
            "player:Orestis KARNEZIS": [.2047, .5195],
            "player:KWAK Taehwi": [.673, .2046],
            "club:Southampton FC": [.3724, .6295],
            "player:Shola AMEOBI": [.4626, .1582],
            "player:Salomon KALOU": [.2806, .2471],
            "player:Alex OXLADE CHAMBERLAIN": [.2615, .7609],
            "player:Boniek GARCIA": [.2009, .4129],
            "player:Sergey IGNASHEVICH": [.6262, .1276],
            "club:Al Hilal FC": [.51, .499],
            "player:Samuel ETOO": [.6213, .8278],
            "player:Matthias GINTER": [.2339, .6379],
            "player:Carlos CARMONA": [.5621, .8954],
            "team:Argentina": [.8836, .588],
            "player:Laurent CIMAN": [.7422, .6958],
            "player:Alvaro GONZALEZ": [.7925, .4148],
            "player:Nikica JELAVIC": [.3507, .8492],
            "player:MAXWELL": [.6517, .7883],
            "player:Chris WONDOLOWSKI": [.7828, .3513],
            "player:Wilfried BONY": [.2708, .2019],
            "club:Eintracht Frankfurt": [.517, .279],
            "player:Paul POGBA": [.2455, .6617],
            "player:Ruben AMORIM": [.598, .1465],
            "player:Jose CORONA": [.3614, .1615],
            "player:Bryan RUIZ": [.4357, .8265],
            "player:Haris SEFEROVIC": [.7532, .324],
            "club:FC Porto": [.5499, .505],
            "club:Houston Dynamo": [.4953, .3892],
            "club:FC Bayern Muenchen": [.4099, .5638],
            "player:Igor DENISOV": [.6207, .1409],
            "club:Bologna FC": [.4044, .4706],
            "player:Fernando TORRES": [.7191, .2974],
            "player:Wesley SNEIJDER": [.4586, .1676],
            "player:RAMIRES": [.6689, .8028],
            "player:Georgy SHCHENNIKOV": [.6325, .1306],
            "player:Jordi ALBA": [.7541, .275],
            "player:Sead KOLASINAC": [.6745, .7381],
            "club:FC Dynamo Moscow": [.5786, .2589],
            "player:Ismael TIOTE": [.2594, .253],
            "player:Islam SLIMANI": [.8288, .4687],
            "player:Nacer CHADLI": [.7707, .7252],
            "player:Santiago ARIAS": [.4932, .8354],
            "club:Olympique Marseille": [.3477, .7004],
            "player:CRISTIANO RONALDO": [.5565, .2056],
            "player:Blaise MATUIDI": [.2523, .6942],
            "player:Marcelo BROZOVIC": [.3925, .8529],
            "team:England": [.2234, .8191],
            "player:Daniel STURRIDGE": [.2859, .7597],
            "player:Andre SCHUERRLE": [.2597, .6474],
            "club:PSV Eindhoven": [.464, .4808],
            "club:FC Schalke 04": [.3829, .5327],
            "player:Javi MARTINEZ": [.6804, .2835],
            "player:Lucas BIGLIA": [.7914, .5442],
            "player:Cristhian STUANI": [.8148, .4098],
            "club:SL Benfica": [.7092, .3682],
            "player:Iker CASILLAS": [.7051, .2525],
            "player:Egidio AREVALO": [.816, .4466],
            "player:Raul MEIRELES": [.5645, .1327],
            "player:Admir MEHMEDI": [.7654, .3128],
            "player:Leroy FER": [.4362, .1059],
            "player:Victor FAYZULIN": [.6479, .1646],
            "player:Mitch LANGERAK": [.7033, .647],
            "player:Robin VAN PERSIE": [.4363, .2237],
            "player:Thibaut COURTOIS": [.79, .661],
            "player:El Arabi SOUDANI": [.8204, .5242],
            "player:Ognjen VUKOJEVIC": [.3769, .8124],
            "player:Juan QUINTERO": [.5114, .827],
            "player:Pavel MOGILEVETC": [.6104, .1486],
            "club:RSC Anderlecht": [.4783, .5532],
            "player:Gordon SCHILDENFELD": [.3569, .8543],
            "player:Thomas MUELLER": [.2195, .6405],
            "player:Lukas PODOLSKI": [.2055, .656],
            "player:Mario BALOTELLI": [.2163, .3166],
            "player:Blerim DZEMAILI": [.7792, .3161],
            "player:Stefanos KAPINO": [.1692, .5389],
            "club:Shakhtar Donetsk": [.5257, .7934],
            "team:Russia": [.6497, .083],
            "player:Karim BENZEMA": [.269, .667],
            "player:Adrian RAMOS": [.5191, .8704],
            "player:PARK Jooho": [.671, .2195],
            "club:Juventus FC": [.3726, .4737],
            "player:Tim HOWARD": [.7755, .4094],
            "team:Japan": [.2827, .1247],
            "player:Joao MOUTINHO": [.5693, .1824],
            "player:Alexey IONOV": [.6271, .1427],
            "player:Stephane RUFFIER": [.2081, .6781],
            "player:SON Heungmin": [.6821, .1923],
            "player:Segundo CASTILLO": [.3326, .7919],
            "player:Eiji KAWASHIMA": [.3217, .2108],
            "player:KOKE": [.759, .2472],
            "club:Getafe CF": [.6025, .6627],
            "player:Joao ROJAS": [.3095, .767],
            "player:JEFFERSON": [.7069, .8117],
            "team:Ivory Coast": [.2234, .1809],
            "player:Sergio AGUERO": [.8065, .5869],
            "player:Juan Carlos GARCIA": [.181, .45],
            "player:Ismael DIOMANDE": [.2503, .2403],
            "club:CA Monarcas Morelia": [.5794, .6022],
            "player:FERNANDINHO": [.6873, .7907],
            "player:Alexander KOKORIN": [.6337, .1443],
            "player:Jefferson MONTERO": [.3453, .8063],
            "team:Chile": [.5763, .9426],
            "player:Kwadwo ASAMOAH": [.1958, .5569],
            "player:Bruno ALVES": [.5653, .1249],
            "player:Christian ATSU": [.1668, .5969],
            "player:Mathieu DEBUCHY": [.2194, .6706],
            "player:Yohan CABAYE": [.2554, .7011],
            "player:Pablo ZABALETA": [.8045, .5794],
            "player:Luke SHAW": [.268, .7601],
            "player:Andre ALMEIDA": [.6009, .1394],
            "player:Helder POSTIGA": [.5658, .1541],
            "player:Eduardo VARGAS": [.5865, .8072],
            "club:ACF Fiorentina": [.374, .6613],
            "team:Croatia": [.3503, .917],
            "team:Switzerland": [.8252, .2493],
            "club:RCD Espanyol": [.588, .3095],
            "player:Constant DJAKPA": [.284, .2151],
            "player:Jean BEAUSEJOUR": [.5273, .8525],
            "player:Joseph YOBO": [.4955, .0988],
            "team:Uruguay": [.8836, .412],
            "club:Sporting CP": [.6861, .3389],
            "player:Luis NETO": [.5912, .1485],
            "player:WILLIAM": [.5924, .1314],
            "player:Dani ALVES": [.7045, .7732],
            "player:Ermin BICAKCIC": [.7148, .7625],
            "player:Fabian SCHAER": [.75, .2884],
            "player:Glen JOHNSON": [.2869, .752],
            "club:Fulham FC": [.2114, .4592],
            "player:Roman WEIDENFELLER": [.1991, .6495],
            "player:LUIZ GUSTAVO": [.6813, .787],
            "club:GNK Dinamo Zagreb": [.5832, .6603],
            "team:USA": [.8614, .3273],
            "player:Matteo DARMIAN": [.2085, .2853],
            "player:Javier HERNANDEZ": [.3813, .2091],
            "player:Efe AMBROSE": [.4594, .1513],
            "player:Kevin MIRALLAS": [.7451, .7235],
            "club:FSV Mainz 05": [.556, .4687],
            "player:Carl MEDJANI": [.8129, .5054],
            "club:Paris Saint-Germain FC": [.4507, .5662],
            "player:Daniel VAN BUYTEN": [.7156, .6967],
            "player:JI Dongwon": [.68, .1581],
            "player:Sejad SALIHOVIC": [.7532, .7563],
            "player:Benedikt HOEWEDES": [.2109, .6316],
            "club:AS Monaco": [.5578, .5949],
            "player:Josip DRMIC": [.7553, .2673],
            "player:Emir SPAHIC": [.7285, .7229],
            "player:Yann SOMMER": [.7561, .2915],
            "player:Moussa SISSOKO": [.2259, .6729],
            "player:Sami KHEDIRA": [.2368, .6104],
            "player:Raul ALBIOL": [.7394, .2635],
            "player:Jean Daniel AKPA": [.2633, .2467],
            "player:Alan DZAGOEV": [.6317, .1228],
            "player:Gary CAHILL": [.3097, .7592],
            "player:Jean MAKOUN": [.603, .8586],
            "player:Jozy ALTIDORE": [.8147, .3314],
            "player:Raphael VARANE": [.2658, .6738],
            "player:Gokhan INLER": [.7732, .3124],
            "club:Sevilla FC": [.5123, .6547],
            "player:Jeremain LENS": [.43, .1624],
            "player:Daniel DAVARI": [.2421, .3953],
            "player:Mario MANDZUKIC": [.3724, .8183],
            "player:Peter ODEMWINGIE": [.5125, .1471],
            "player:Michael BRADLEY": [.8178, .3883],
            "club:Panathinaikos FC": [.331, .7201],
            "player:Luka MODRIC": [.3969, .7922],
            "club:Stoke City FC": [.5614, .4347],
            "player:Hector MORENO": [.3977, .1443],
            "player:Jonathan DE GUZMAN": [.4237, .1133],
            "player:Jorge FUCILE": [.791, .4367],
            "player:Salvatore SIRIGU": [.2533, .334],
            "player:Axel WITSEL": [.7714, .6515],
            "player:VIEIRINHA": [.5777, .1842],
            "club:Newcastle United FC": [.3211, .4392],
            "player:Toni KROOS": [.2261, .6424]
        },
        1: {
            "player:Ricardo ALVAREZ": [.7168, .4992],
            "player:HERNANES": [.3307, .489],
            "player:NEYMAR": [.314, .4271],
            "player:Martin DEMICHELIS": [.6941, .3758],
            "club:SSC Napoli": [.5, .5756],
            "player:Federico FERNANDEZ": [.7213, .5302],
            "player:Javier MASCHERANO": [.7094, .4291],
            "player:Lionel MESSI": [.6721, .4439],
            "club:Manchester City FC": [.5, .2511],
            "player:Gonzalo HIGUAIN": [.6902, .5293],
            "player:Rodrigo PALACIO": [.685, .4987],
            "team:Brazil": [.1423, .5],
            "player:HENRIQUE": [.3221, .5305],
            "player:MARCELO": [.2738, .5732],
            "player:Angel DI MARIA": [.7283, .575],
            "club:FC Internazionale": [.5, .475],
            "club:FC Barcelona": [.5, .3492],
            "club:Real Madrid CF": [.5, .767],
            "player:Ezequiel LAVEZZI": [.6926, .5701],
            "player:Hugo CAMPAGNARO": [.7005, .4717],
            "player:Thiago SILVA": [.3361, .5844],
            "team:Argentina": [.8577, .5],
            "player:MAXWELL": [.3142, .5623],
            "player:Sergio AGUERO": [.6857, .4065],
            "player:FERNANDINHO": [.336, .3935],
            "player:Pablo ZABALETA": [.7159, .3987],
            "player:Dani ALVES": [.3502, .4437],
            "club:Paris Saint-Germain FC": [.5, .6772]
        },
        2: {
            "club:Cagliari Calcio": [.5404, .8398],
            "player:Mats HUMMELS": [.1888, .6526],
            "player:Andrey ESHCHENKO": [.6267, .1168],
            "player:Godfrey OBOABONA": [.4834, .1008],
            "player:Steven GERRARD": [.2752, .7629],
            "player:Jack WILSHERE": [.2635, .7684],
            "player:Yuya OSAKO": [.3047, .1628],
            "player:Shinji KAGAWA": [.3326, .2358],
            "player:Andre AYEW": [.178, .6044],
            "player:Jackson MARTINEZ": [.5062, .8337],
            "player:JUANFRAN": [.7657, .2409],
            "team:Cameroon": [.6497, .9169],
            "club:CA Osasuna": [.5701, .8387],
            "player:Ricardo RODRIGUEZ": [.7667, .3209],
            "player:Adam KWARASEY": [.1515, .5773],
            "club:Manchester United FC": [.4542, .5316],
            "player:Edgar SALLI": [.6303, .8688],
            "player:Eliaquim MANGALA": [.2662, .6884],
            "player:Carlos GRUEZO": [.3239, .7645],
            "player:Konstantinos MITROGLOU": [.147, .4882],
            "club:Hapoel Be'er Sheva FC": [.496, .1712],
            "club:Borussia Moenchengladbach": [.4881, .466],
            "player:Xabi ALONSO": [.715, .2523],
            "player:PAULINHO": [.6945, .8149],
            "player:KOO Jacheol": [.6658, .2072],
            "player:Maynor FIGUEROA": [.1694, .4548],
            "player:Phil JONES": [.2849, .7429],
            "club:AFC Ajax": [.4082, .1725],
            "player:Alireza HAGHIGHI": [.1761, .3483],
            "player:Celso BORGES": [.434, .9007],
            "player:Maximiliano PEREIRA": [.8277, .4084],
            "club:FC Platanias": [.2255, .5736],
            "player:Sime VRSALJKO": [.3447, .8337],
            "club:FC Twente": [.5902, .8237],
            "player:Serge AURIER": [.2574, .2426],
            "club:Liverpool FC": [.4058, .5957],
            "club:FC Basel": [.5652, .3735],
            "club:Tottenham Hotspur FC": [.6624, .6796],
            "player:Javier AQUINO": [.3698, .1263],
            "player:Abel AGUILAR": [.4747, .845],
            "player:Juan CUADRADO": [.4783, .8771],
            "club:Hamburger SV": [.7241, .3479],
            "player:Ron VLAAR": [.4547, .114],
            "player:Sayouba MANDE": [.2464, .2105],
            "team:South Korea": [.7173, .1248],
            "player:Roman BUERKI": [.7886, .2699],
            "player:Juan MATA": [.6949, .2697],
            "player:Sammy NDJOCK": [.6303, .8824],
            "player:Sergio ROMERO": [.809, .5851],
            "player:Mario GOETZE": [.2209, .6487],
            "player:Joel CAMPBELL": [.3948, .8461],
            "club:Preston North End FC": [.7465, .6185],
            "player:RAFA": [.5634, .1235],
            "player:Ron-Robert ZIELER": [.1805, .6126],
            "player:Mesut OEZIL": [.205, .662],
            "player:Andreas SAMARIS": [.1574, .5201],
            "player:Riyad MAHREZ": [.8575, .4957],
            "player:Tim KRUL": [.4056, .1537],
            "club:Club Brugge KV": [.609, .7347],
            "club:FC Lorient": [.6109, .8221],
            "club:Arsenal FC": [.3409, .6476],
            "club:Valencia CF": [.6497, .3949],
            "club:FSV Frankfurt": [.7611, .6224],
            "club:AS Nancy": [.5822, .7842],
            "player:PEPE": [.5682, .161],
            "player:Alessio CERCI": [.2043, .2795],
            "player:Panagiotis TACHTSIDIS": [.1533, .473],
            "player:Ricardo ALVAREZ": [.8156, .5963],
            "player:John BOYE": [.1827, .5987],
            "player:Gary MEDEL": [.5774, .8564],
            "player:Antoine GRIEZMANN": [.2479, .7155],
            "player:Jordan HENDERSON": [.2801, .7577],
            "player:Carlos BACCA": [.5019, .8707],
            "club:FC Sochaux-MontbÃ©liard": [.2388, .5516],
            "club:Charlton Athletic FC": [.2573, .3677],
            "player:Jerome BOATENG": [.2253, .6551],
            "club:Gaziantepspor": [.7146, .7405],
            "club:RC Lens": [.5952, .7755],
            "player:John BROOKS": [.8087, .3778],
            "player:KIM Bokyung": [.6865, .2098],
            "player:Leighton BAINES": [.2956, .7787],
            "player:Diego PEREZ": [.7807, .4301],
            "player:EDER": [.5575, .1276],
            "player:Raheem STERLING": [.2737, .7552],
            "team:Portugal": [.5763, .0574],
            "player:Dmitry KOMBAROV": [.6381, .1138],
            "player:Memphis DEPAY": [.4272, .1531],
            "player:Rickie LAMBERT": [.2701, .7706],
            "player:Alexis SANCHEZ": [.6198, .7881],
            "player:Mathew LECKIE": [.8317, .6576],
            "club:Istanbul BBSK": [.7173, .7238],
            "player:Joe HART": [.3244, .753],
            "player:James RODRIGUEZ": [.5113, .8613],
            "club:Bayer 04 Leverkusen": [.5953, .3773],
            "club:Standard Liege": [.4395, .497],
            "player:Albert ADOMAH": [.1728, .5493],
            "player:HERNANES": [.6892, .802],
            "team:Costa Rica": [.4237, .9426],
            "player:Anel HADZIC": [.7432, .8018],
            "player:Esseid BELKALEM": [.8449, .4796],
            "player:Didier DROGBA": [.3018, .2521],
            "player:Cristian RODRIGUEZ": [.8408, .4118],
            "player:Ognjen VRANJES": [.7586, .7802],
            "team:Nigeria": [.5, .0487],
            "player:Nigel DE JONG": [.3967, .1553],
            "player:Olivier GIROUD": [.2237, .7163],
            "team:Ecuador": [.2827, .8752],
            "player:Ante REBIC": [.3632, .8515],
            "player:Yury LODYGIN": [.6437, .1567],
            "team:Australia": [.8613, .6727],
            "player:Bastian SCHWEINSTEIGER": [.2523, .6283],
            "player:Divock ORIGI": [.7402, .6826],
            "player:Die SEREY": [.3014, .2325],
            "player:Ioannis FETFATZIDIS": [.1603, .505],
            "player:Juwon OSHANIWA": [.5075, .0967],
            "player:Vladimir GRANAT": [.6236, .1349],
            "player:Steve VON BERGEN": [.7946, .2662],
            "player:Pierre WEBO": [.6213, .7666],
            "player:Juan ZUNIGA": [.5407, .8225],
            "player:Steven DEFOUR": [.7502, .6862],
            "player:Sokratis PAPASTATHOPOULOS": [.1688, .5226],
            "player:Didier ZOKORA": [.2493, .2175],
            "player:Gianluigi BUFFON": [.2378, .298],
            "player:Mattia PERIN": [.2007, .311],
            "player:Tino Sven SUSIC": [.7541, .7926],
            "club:CD Real Sociedad": [.2369, .4405],
            "player:Andrea BARZAGLI": [.2414, .3046],
            "player:SAMMIR": [.3959, .86],
            "club:KV Waasland-Beveren": [.5046, .1854],
            "player:Edin DZEKO": [.7307, .7525],
            "player:Hector HERRERA": [.402, .2015],
            "club:Valerenga IF": [.445, .7993],
            "player:Fabian ORELLANA": [.5871, .8785],
            "player:Vedran CORLUKA": [.3798, .8352],
            "player:Ashkan DEJAGAH": [.1759, .3641],
            "player:Mix DISKERUD": [.8026, .3812],
            "team:Colombia": [.5, .9513],
            "player:Xavi HERNANDEZ": [.7491, .2644],
            "player:Vasileios TOROSIDIS": [.1861, .5048],
            "player:Ivan PERISIC": [.4078, .826],
            "player:Carlos SANCHEZ": [.4961, .9034],
            "player:Stephane MBIA": [.6157, .847],
            "club:FK Austria Wien": [.7714, .6097],
            "player:Miroslav KLOSE": [.238, .6124],
            "club:Celta Vigo": [.6728, .7056],
            "player:LEE Chungyong": [.6944, .1644],
            "club:Crystal Palace FC": [.7508, .6351],
            "player:Andrea PIRLO": [.2308, .2984],
            "player:Adnan JANUZAJ": [.7305, .6872],
            "club:SS Lazio": [.5396, .4126],
            "player:Cristian ZAPATA": [.4532, .8106],
            "player:Mubarak WAKASO": [.1979, .5356],
            "player:Eric CHOUPO MOTING": [.6174, .8097],
            "player:NEYMAR": [.6927, .7256],
            "player:Anthony VANDEN BORRE": [.758, .7094],
            "player:Felipe GUTIERREZ": [.5668, .897],
            "player:Jan VERTONGHEN": [.7772, .7248],
            "club:SC Freiburg": [.6105, .4944],
            "player:Mauricio ISLA": [.5333, .8141],
            "player:Alex IBARRA": [.3011, .8077],
            "player:Mario GAVRANOVIC": [.8, .2783],
            "club:Atletico Madrid": [.7676, .3891],
            "player:Mamadou SAKHO": [.2404, .7052],
            "club:AIK Solna": [.4583, .8241],
            "club:Levante UD": [.3183, .6679],
            "player:Claudio BRAVO": [.5617, .8597],
            "player:Haris MEDUNJANIN": [.7478, .7894],
            "player:Martin DEMICHELIS": [.8035, .5896],
            "player:Diego LUGANO": [.8121, .4423],
            "player:PARK Chuyoung": [.7062, .1874],
            "club:SSC Napoli": [.6859, .4706],
            "player:Jose CHOLEVAS": [.1516, .516],
            "player:Cristian GAMBOA": [.4568, .8662],
            "player:Xherdan SHAQIRI": [.7268, .3336],
            "player:Danijel SUBASIC": [.396, .8379],
            "player:YUN Sukyoung": [.6933, .2106],
            "club:Fortuna Duesseldorf": [.5249, .4663],
            "player:Sulley MUNTARI": [.1729, .5415],
            "team:Mexico": [.3503, .0831],
            "player:Stefan DE VRIJ": [.427, .095],
            "club:VfB Stuttgart": [.4056, .4913],
            "player:Per MERTESACKER": [.1983, .6607],
            "player:Konstantinos KATSOURANIS": [.1476, .5017],
            "club:FC Spartak Moscow": [.6077, .1332],
            "team:Greece": [.1089, .5],
            "player:Federico FERNANDEZ": [.8192, .5598],
            "player:Theofanis GEKAS": [.1753, .5247],
            "club:US Sassuolo": [.7436, .3019],
            "player:Stephan LICHTSTEINER": [.7123, .3031],
            "club:Aalesunds FK": [.4627, .8007],
            "player:Hiroshi KIYOTAKE": [.3452, .169],
            "club:PAOK FC": [.2021, .4952],
            "club:Elche CF": [.4921, .8132],
            "player:Konstantinos MANOLAS": [.1632, .5159],
            "club:Granada CF": [.5408, .6106],
            "team:Ghana": [.1164, .588],
            "player:Izet HAJROVIC": [.7274, .7408],
            "club:Parma FC": [.3468, .383],
            "player:Romelu LUKAKU": [.7512, .7254],
            "player:Javier MASCHERANO": [.8236, .5658],
            "player:Lionel MESSI": [.8065, .5424],
            "player:Augusto FERNANDEZ": [.8295, .6008],
            "player:Aleksandr KERZHAKOV": [.6459, .1848],
            "club:SK Sturm Graz": [.6787, .7572],
            "player:Geoff CAMERON": [.7867, .354],
            "player:Sergio BUSQUETS": [.7543, .2693],
            "team:Spain": [.7766, .1809],
            "player:Asmir BEGOVIC": [.7273, .733],
            "player:David SILVA": [.7097, .3246],
            "club:Manchester City FC": [.6189, .5888],
            "player:Gabriel PALETTA": [.2282, .284],
            "player:Claudio MARCHISIO": [.2374, .3116],
            "club:AC Ajaccio": [.5961, .3402],
            "player:Mathis BOLLY": [.2817, .2389],
            "player:Gonzalo HIGUAIN": [.8232, .5536],
            "club:Ferencvarosi TC": [.7041, .753],
            "player:Bailey WRIGHT": [.8201, .6495],
            "player:KI Sungyueng": [.7033, .1753],
            "club:AZ Alkmaar": [.7495, .3683],
            "player:Kenneth OMERUO": [.4774, .1199],
            "club:Olympique Lyonnais": [.5951, .7927],
            "player:Ahmed MUSA": [.5225, .101],
            "club:Swansea City AFC": [.3872, .1919],
            "player:Arturo VIDAL": [.5272, .8107],
            "player:Rui PATRICIO": [.5905, .1373],
            "player:Lucas DIGNE": [.2416, .6975],
            "player:Hugo ALMEIDA": [.5845, .1529],
            "club:Torino FC": [.233, .3557],
            "player:Andres INIESTA": [.7471, .2801],
            "player:Enzo PEREZ": [.8314, .5379],
            "player:Stipe PLETIKOSA": [.3676, .8776],
            "player:Denis GLUSHAKOV": [.6317, .1115],
            "player:Nabil BENTALEB": [.8279, .531],
            "club:FC Rubin Kazan": [.4759, .3084],
            "club:Fenerbahce SK": [.5389, .2888],
            "player:Dirk KUYT": [.4499, .1243],
            "club:CSKA Moscow": [.6063, .1732],
            "club:FC Sion": [.7568, .6058],
            "player:HULK": [.6869, .7465],
            "player:Asmir AVDUKIC": [.7594, .7879],
            "club:US Citta di Palermo": [.7637, .4348],
            "player:Julian DRAXLER": [.2082, .6393],
            "club:KSC Lokeren": [.3087, .2645],
            "player:Yuto NAGATOMO": [.3713, .253],
            "player:Patrice EVRA": [.2519, .6899],
            "player:Giorgio CHIELLINI": [.2347, .3045],
            "player:OSCAR": [.6734, .8051],
            "club:FK Borac Banja Luka": [.7408, .7335],
            "player:Georginio WIJNALDUM": [.4248, .1604],
            "player:Cesc FABREGAS": [.7418, .2753],
            "player:Ioannis MANIATIS": [.1573, .5121],
            "player:Marcelo DIAZ": [.5703, .8059],
            "player:Rodrigo PALACIO": [.8152, .5883],
            "club:Cardiff City FC": [.6121, .5203],
            "player:Masoud SHOJAEI": [.177, .3405],
            "player:Charles ITANDJE": [.6048, .8529],
            "player:Mensur MUJDZA": [.7333, .7455],
            "player:Klaas Jan HUNTELAAR": [.4238, .1797],
            "player:Michael ESSIEN": [.1787, .5454],
            "club:Caykur Rizespor": [.3939, .2174],
            "player:Faouzi GHOULAM": [.8261, .4935],
            "player:Gaston RAMIREZ": [.7614, .4604],
            "player:Dejan LOVREN": [.3627, .8371],
            "player:Vasily BEREZUTSKIY": [.6346, .1265],
            "player:Remy CABELLA": [.2078, .7274],
            "club:Eintracht Braunschweig": [.4696, .5634],
            "player:Georgios KARAGOUNIS": [.1541, .4882],
            "player:Makoto HASEBE": [.3493, .1752],
            "player:Frank LAMPARD": [.316, .7635],
            "club:Hertha BSC": [.6468, .5961],
            "player:James MILNER": [.3181, .7561],
            "player:Marouane FELLAINI": [.7285, .6946],
            "player:Ciro IMMOBILE": [.202, .2869],
            "club:Middlesbrough FC": [.3521, .3563],
            "club:Sunderland AFC": [.7213, .2809],
            "player:Kevin DE BRUYNE": [.7634, .6954],
            "club:West Bromwich Albion FC": [.54, .5863],
            "player:Ogenyi ONAZI": [.5084, .1501],
            "player:Giovani DOS SANTOS": [.3733, .133],
            "club:Calcio Catania": [.7657, .5604],
            "player:Andres GUARDADO": [.4123, .1541],
            "team:Brazil": [.7173, .8752],
            "player:Panagiotis KONE": [.1744, .4971],
            "club:AS Saint-Etienne": [.2643, .4054],
            "club:Atalanta Bergamo": [.5241, .8276],
            "player:Massimo LUONGO": [.8142, .6535],
            "club:Norwich City FC": [.4714, .1691],
            "club:Olympiacos Piraeus FC": [.247, .5747],
            "club:Udinese Calcio": [.4937, .5357],
            "player:Bruno MARTINS INDI": [.4338, .0944],
            "player:Daley BLIND": [.4243, .1021],
            "player:Medhi LACEN": [.829, .5234],
            "team:Iran": [.1387, .3273],
            "team:Algeria": [.8911, .5],
            "player:Diego BENAGLIO": [.7626, .3271],
            "club:FC Rostov": [.3903, .7829],
            "club:VfL Wolfsburg": [.6093, .5499],
            "team:Belgium": [.8252, .7507],
            "player:Miiko ALBORNOZ": [.565, .9044],
            "club:Everton FC": [.5301, .6804],
            "player:Gotoku SAKAI": [.3176, .2155],
            "player:HENRIQUE": [.7063, .7675],
            "player:Acquah AFRIYIE": [.1844, .5413],
            "player:Yaya TOURE": [.3191, .281],
            "player:MAICON": [.6483, .7834],
            "club:AS Roma": [.4206, .5165],
            "player:Alberto AQUILANI": [.2262, .3362],
            "player:Gerard PIQUE": [.7534, .2769],
            "player:Marcos URENA": [.4129, .8765],
            "player:Allan NYOM": [.6227, .8417],
            "club:VfR Aalen": [.7186, .7572],
            "player:Konan YA": [.2485, .2316],
            "club:Antalyaspor AS": [.6065, .764],
            "player:Danijel PRANJIC": [.3554, .8611],
            "player:BETO": [.5596, .186],
            "player:Vedad IBISEVIC": [.6939, .7464],
            "player:Uche NWOFOR": [.5026, .1021],
            "player:Joao PEREIRA": [.5886, .1446],
            "club:Elazigspor": [.7278, .7113],
            "club:BSC Young Boys": [.7295, .3075],
            "player:Vangelis MORAS": [.1449, .5088],
            "player:Ben FOSTER": [.2848, .7679],
            "player:Oliver ZELENIKA": [.3617, .8739],
            "club:Sporting Covilha": [.2576, .385],
            "club:Rosenborg BK": [.6059, .6182],
            "player:Boubacar BARRY": [.2529, .2083],
            "player:Oscar DUARTE": [.4574, .8818],
            "player:Fraser FORSTER": [.2515, .736],
            "club:West Ham United FC": [.5149, .8445],
            "player:Saphir TAIDER": [.8157, .5243],
            "player:Hugo LLORIS": [.2853, .7249],
            "player:Santi CAZORLA": [.6717, .296],
            "club:Hull City FC": [.2923, .633],
            "club:Feyenoord Rotterdam": [.4454, .1458],
            "player:Jordy CLASIE": [.4307, .1012],
            "player:Vincent ABOUBAKAR": [.6371, .8824],
            "player:Diego CALVO": [.4275, .8984],
            "player:Mauricio PINILLA": [.5688, .8895],
            "player:Brad GUZAN": [.8008, .3276],
            "player:Bacary SAGNA": [.2302, .7188],
            "player:Arthur BOKA": [.271, .254],
            "player:Senad LULIC": [.7141, .7098],
            "player:MARCELO": [.6668, .7624],
            "player:Marco PAROLO": [.2219, .287],
            "player:Shinji OKAZAKI": [.3434, .2097],
            "player:Ricardo COSTA": [.5819, .1442],
            "player:Dario VIDOSIC": [.8259, .6535],
            "player:NANI": [.5465, .1811],
            "player:Mohammed RABIU": [.1721, .6001],
            "player:Diego GODIN": [.8354, .4166],
            "player:Francisco SILVA": [.5852, .9001],
            "player:John Obi MIKEL": [.516, .2011],
            "player:Christoph KRAMER": [.2062, .6317],
            "club:FC Ashdod": [.511, .1696],
            "player:Reto ZIEGLER": [.7944, .274],
            "player:Angel DI MARIA": [.791, .5555],
            "team:Germany": [.1387, .6727],
            "club:Besiktas JK": [.6527, .4518],
            "player:Nicolas NKOULOU": [.5904, .8568],
            "player:Austine EJIDE": [.4993, .087],
            "player:Vincent KOMPANY": [.7631, .7032],
            "club:HNK Rijeka": [.4052, .7804],
            "player:Pepe REINA": [.7376, .2629],
            "player:Granit XHAKA": [.7603, .2951],
            "player:Senijad IBRICIC": [.7469, .7818],
            "club:FC Augsburg": [.5915, .1988],
            "player:Erik DURM": [.1929, .6463],
            "player:Kevin Prince BOATENG": [.1937, .5716],
            "player:Fabrice OLINGA": [.6424, .863],
            "player:Toby ALDERWEIRELD": [.7985, .6619],
            "player:Miguel VELOSO": [.5494, .1577],
            "player:Aurelien CHEDJOU": [.6266, .8097],
            "club:Stromsgodset IF": [.2243, .5563],
            "player:Dany NOUNKEU": [.6417, .8133],
            "player:Michael LANG": [.7883, .2777],
            "player:Walter GARGANO": [.7607, .415],
            "player:Shkodran MUSTAFI": [.1758, .6519],
            "team:Honduras": [.1164, .412],
            "player:Victor MOSES": [.4771, .1851],
            "player:Hassan YEBDA": [.8089, .5041],
            "player:Phil JAGIELKA": [.2972, .771],
            "player:Gelson FERNANDES": [.7708, .3043],
            "player:Benjamin MOUKANDJO": [.6269, .8756],
            "player:Nabil GHILAS": [.796, .5015],
            "player:Dries MERTENS": [.7764, .6753],
            "club:TSV 1860 Muenchen": [.3483, .2379],
            "player:Majeed WARIS": [.1998, .5748],
            "player:Jonathan MENSAH": [.1565, .5908],
            "player:Guillermo OCHOA": [.4004, .1488],
            "player:Alexandre SONG": [.6566, .8053],
            "club:UD Almeria": [.5195, .1839],
            "player:Mario YEPES": [.5028, .9041],
            "club:FC Internazionale": [.6377, .6252],
            "club:NEC Nijmegen": [.2447, .394],
            "player:Emmanuel EMENIKE": [.5078, .1204],
            "player:Antonio CASSANO": [.2273, .2917],
            "player:Ezequiel GARAY": [.8279, .5446],
            "player:Liassine CADAMURO": [.8508, .4942],
            "player:Rio MAVUBA": [.2404, .6836],
            "club:FC Barcelona": [.7103, .5099],
            "player:Max GRADEL": [.2437, .2372],
            "player:Joel MATIP": [.5832, .811],
            "player:Daryl JANMAAT": [.4344, .1078],
            "player:Timmy CHANDLER": [.7807, .3237],
            "team:Bosnia and Herzegovina": [.7766, .8191],
            "player:Georgios SAMARAS": [.1658, .4916],
            "club:Villarreal CF": [.4161, .1949],
            "team:Netherlands": [.4237, .0574],
            "player:Ivan RAKITIC": [.388, .8462],
            "player:Christian BOLANOS": [.4299, .8911],
            "club:Genoa CFC": [.271, .5444],
            "club:Celtic FC": [.2947, .454],
            "player:DANTE": [.6451, .7902],
            "player:Paul VERHAEGH": [.458, .1072],
            "player:Landry NGUEMO": [.6405, .8755],
            "club:Hannover 96": [.2762, .3683],
            "player:Martin CACERES": [.7542, .425],
            "player:Fabio COENTRAO": [.5675, .1686],
            "club:Sporting Braga": [.5145, .3341],
            "club:Malmo FF": [.5437, .8056],
            "player:Kolo TOURE": [.2758, .2845],
            "club:Real Madrid CF": [.5527, .4524],
            "club:Kuban Krasnodar": [.3246, .6952],
            "player:Moussa DEMBELE": [.7742, .7177],
            "player:Michel VORM": [.4193, .1076],
            "player:Atsuto UCHIDA": [.318, .2347],
            "player:Ben HALLORAN": [.7879, .6308],
            "player:Thomas VERMAELEN": [.7085, .7134],
            "player:Loic REMY": [.2203, .6782],
            "player:Alexander SAMEDOV": [.6245, .1631],
            "player:Daniel OPARE": [.1925, .5639],
            "player:Jose GIMENEZ": [.8345, .4088],
            "player:Lorenzo INSIGNE": [.2992, .3085],
            "player:Alexandros TZIOLIS": [.1516, .508],
            "club:FC Utrecht": [.7319, .6145],
            "player:Mehdi MOSTEFA": [.8248, .4745],
            "player:Victor IBARBO": [.5092, .9018],
            "player:Emilio IZAGUIRRE": [.1766, .4262],
            "player:Julian GREEN": [.7455, .398],
            "player:Emmanuel AGYEMANG BADU": [.1943, .5793],
            "club:Real Sociedad": [.5182, .614],
            "club:Valenciennes FC": [.5131, .5344],
            "club:Watford FC": [.7325, .3652],
            "team:France": [.1748, .7507],
            "player:Ignazio ABATE": [.2212, .2947],
            "player:Avdija VRSAJEVIC": [.7416, .7863],
            "player:Wilson PALACIOS": [.2316, .419],
            "player:Fernando MUSLERA": [.8023, .4306],
            "player:Adam LALLANA": [.2684, .7631],
            "club:FC Zuerich": [.7379, .341],
            "player:Toni SUNJIC": [.7523, .7771],
            "club:Lille OSC": [.4456, .4441],
            "player:Ezequiel LAVEZZI": [.7622, .576],
            "player:Edin VISCA": [.7532, .7848],
            "player:Valon BEHRAMI": [.7794, .3074],
            "player:HONG Jeongho": [.6791, .1664],
            "player:WILLIAN": [.6691, .7925],
            "player:Hiroki SAKAI": [.2952, .192],
            "player:Cristhian NOBOA": [.3708, .696],
            "player:Ross BARKLEY": [.3022, .7763],
            "player:Ousmane DIARRASSOUBA": [.2655, .2073],
            "player:Antonio CANDREVA": [.2645, .2953],
            "player:Arjen ROBBEN": [.4322, .198],
            "player:Maty RYAN": [.7998, .6717],
            "player:Andy NAJAR": [.2021, .441],
            "player:Luis SUAREZ": [.7238, .4682],
            "player:Terence KONGOLO": [.4375, .1008],
            "player:Mile JEDINAK": [.8198, .6651],
            "player:Mateo KOVACIC": [.4169, .8362],
            "player:BERNARD": [.6663, .8091],
            "club:FC Dynamo Kyiv": [.4515, .4726],
            "player:Daniele DE ROSSI": [.2407, .3184],
            "player:Oleg SHATOV": [.6407, .1638],
            "club:Montpellier HSC": [.2788, .6908],
            "club:FC Girondins Bordeaux": [.6021, .808],
            "player:Dimitrios SALPINGIDIS": [.1545, .501],
            "player:Lazaros CHRISTODOULOPOULOS": [.1807, .5001],
            "player:Tranquillo BARNETTA": [.761, .269],
            "player:David VILLA": [.7549, .2458],
            "player:Ruben GABRIEL": [.501, .0945],
            "club:Nottingham Forest FC": [.5572, .8131],
            "club:Toulouse FC": [.3492, .4548],
            "player:Johan DJOUROU": [.794, .2819],
            "club:Vitesse Arnheim": [.2908, .6765],
            "player:Hugo CAMPAGNARO": [.8096, .5928],
            "club:Academica Coimbra": [.7641, .5079],
            "player:James HOLLAND": [.8318, .6498],
            "player:Yacine BRAHIMI": [.8118, .518],
            "club:FC Zenit St. Petersburg": [.6585, .3604],
            "player:GERVINHO": [.2756, .2615],
            "player:Diego COSTA": [.7591, .2395],
            "player:Marcos ROJO": [.8246, .5378],
            "club:Evian TG FC": [.2393, .6524],
            "player:Fredy GUARIN": [.5317, .8584],
            "player:Mathieu VALBUENA": [.2258, .7271],
            "club:OGC Nice": [.5061, .8069],
            "player:Darijo SRNA": [.3813, .8453],
            "club:AC Milan": [.2927, .402],
            "club:FC Terek Grozny": [.6103, .2008],
            "player:Thiago MOTTA": [.2457, .3238],
            "club:Stade de Reims": [.7769, .517],
            "player:Sergey RYZHIKOV": [.6164, .1477],
            "player:Marco VERRATTI": [.24, .3281],
            "player:Jasmin FEJZIC": [.7486, .7973],
            "player:Rony MARTINEZ": [.1607, .4226],
            "player:Valentin STOCKER": [.7593, .2873],
            "player:Vincent ENYEAMA": [.4897, .1461],
            "club:Grasshopper Club": [.7416, .3216],
            "player:Fabian JOHNSON": [.8201, .3749],
            "player:Igor AKINFEEV": [.6396, .1213],
            "player:Keylor NAVAS": [.4107, .8691],
            "club:SV Zulte Waregem": [.6661, .7435],
            "player:Sammy BOSSUT": [.7793, .7337],
            "player:Muhamed BESIC": [.7424, .794],
            "player:Jordan AYEW": [.1581, .5755],
            "player:DAVID LUIZ": [.6681, .8003],
            "player:Domagoj VIDA": [.3748, .8176],
            "club:AS Livorno": [.8105, .5704],
            "club:FC Lokomotiv Moscow": [.502, .4988],
            "player:Oliver BOZANIC": [.82, .6573],
            "player:Keisuke HONDA": [.2975, .2074],
            "player:Sofiane FEGHOULI": [.8223, .4818],
            "club:Trabzonspor": [.2911, .2675],
            "player:Danny WELBECK": [.2877, .7356],
            "club:Galatasaray SK": [.5748, .483],
            "player:David DE GEA": [.6917, .2765],
            "club:Konyaspor": [.4065, .6613],
            "club:Chelsea FC": [.567, .6316],
            "player:Chris SMALLING": [.2917, .7419],
            "player:Maya YOSHIDA": [.3167, .2533],
            "player:Morgan SCHNEIDERLIN": [.2357, .7107],
            "team:Italy": [.1748, .2493],
            "player:Wayne ROONEY": [.3037, .7153],
            "club:Aston Villa FC": [.6084, .2631],
            "player:Philipp LAHM": [.2208, .641],
            "player:Ivica OLIC": [.4117, .8197],
            "player:Manuel NEUER": [.2276, .6408],
            "club:Swindon Town FC": [.7422, .6018],
            "player:Roger ESPINOZA": [.1763, .4491],
            "player:Cesar AZPILICUETA": [.7193, .2986],
            "club:Hellas Verona FC": [.2209, .5038],
            "club:Stade Rennais FC": [.4097, .6958],
            "player:Eden HAZARD": [.7508, .7116],
            "player:Giovanni SIO": [.3071, .2367],
            "player:VARELA": [.5666, .1764],
            "player:Junior DIAZ": [.4471, .8168],
            "club:1. FC Nuernberg": [.5513, .2614],
            "player:Philippe SENDEROS": [.7733, .2913],
            "club:Borussia Dortmund": [.3098, .6126],
            "player:Simon MIGNOLET": [.7171, .703],
            "player:Antonio VALENCIA": [.3427, .7581],
            "player:Sergio RAMOS": [.7099, .2575],
            "player:Yury ZHIRKOV": [.6309, .1484],
            "player:Thiago SILVA": [.6419, .7811],
            "player:Pedro RODRIGUEZ": [.7428, .2675],
            "player:Nicolas LOMBAERTS": [.7753, .6574],
            "player:Laurent KOSCIELNY": [.2289, .7111],
            "club:NK Lokomotiva Zagreb": [.39, .8003],
            "player:Benoit ASSOU EKOTTO": [.6396, .833],
            "club:FC Kobenhavn": [.4349, .8122],
            "club:SC Heracles Almelo": [.7654, .6391],
            "player:Jermaine JONES": [.8027, .3595],
            "club:TSG 1899 Hoffenheim": [.7444, .5575],
            "player:Aleksei KOZLOV": [.6242, .1486],
            "player:Diego REYES": [.4063, .208],
            "player:Samuel INKOOM": [.1562, .583],
            "player:Leonardo BONUCCI": [.2442, .3117],
            "club:Queens Park Rangers FC": [.6412, .5195],
            "club:Cercle Brugge": [.4896, .1868],
            "player:Kevin GROSSKREUTZ": [.1954, .6536],
            "player:Mattia DE SCIGLIO": [.2144, .2952],
            "player:Miralem PJANIC": [.6907, .7531],
            "player:Loukas VYNTRA": [.1624, .5253],
            "player:Rafik HALLICHE": [.8532, .5015],
            "player:Jasper CILLESSEN": [.4277, .1087],
            "player:Michael BARRANTES": [.4364, .8934],
            "club:Wigan Athletic FC": [.3233, .5736],
            "player:Edinson CAVANI": [.7633, .4495],
            "player:Orestis KARNEZIS": [.2038, .5193],
            "club:Southampton FC": [.3725, .6301],
            "club:SC Heerenveen": [.5033, .2027],
            "player:Shola AMEOBI": [.4632, .1546],
            "player:Pablo ARMERO": [.5035, .9118],
            "player:Salomon KALOU": [.279, .2461],
            "club:Bolton Wanderers FC": [.6507, .2399],
            "player:Alex OXLADE CHAMBERLAIN": [.2619, .7608],
            "club:FC Anzhi Makhachkala": [.5841, .1785],
            "player:Panagiotis GLYKOS": [.1438, .4952],
            "player:Sergey IGNASHEVICH": [.628, .1242],
            "player:Samuel ETOO": [.6229, .8302],
            "player:Matthias GINTER": [.2351, .6196],
            "player:Georgios TZAVELAS": [.1506, .4947],
            "player:Carlos CARMONA": [.5621, .8912],
            "team:Argentina": [.8836, .588],
            "player:David OSPINA": [.5001, .8969],
            "player:Laurent CIMAN": [.7434, .6964],
            "player:Alvaro GONZALEZ": [.7906, .4171],
            "player:Nikica JELAVIC": [.3507, .8497],
            "player:MAXWELL": [.6386, .7879],
            "player:Gonzalo JARA": [.5602, .8989],
            "club:UC Sampdoria": [.2385, .5975],
            "player:Wilfried BONY": [.2698, .2013],
            "club:Eintracht Frankfurt": [.5165, .2795],
            "player:Paul POGBA": [.2705, .656],
            "player:Ruben AMORIM": [.5998, .1486],
            "player:Bryan RUIZ": [.4283, .8264],
            "player:Haris SEFEROVIC": [.7568, .3229],
            "club:RCD Mallorca": [.7773, .4996],
            "club:FC Porto": [.5492, .5054],
            "club:FC Bayern Muenchen": [.4465, .5884],
            "player:Igor DENISOV": [.6206, .1418],
            "club:Bologna FC": [.3816, .4922],
            "player:Fernando TORRES": [.7132, .2953],
            "player:Wesley SNEIJDER": [.4569, .1637],
            "player:RAMIRES": [.6744, .7974],
            "player:Georgy SHCHENNIKOV": [.6297, .1318],
            "player:Jordi ALBA": [.748, .2722],
            "player:Sead KOLASINAC": [.681, .7427],
            "club:FC Dynamo Moscow": [.5798, .2556],
            "player:Ismael TIOTE": [.2584, .2519],
            "player:Alireza JAHAN BAKHSH": [.1816, .353],
            "player:Islam SLIMANI": [.8301, .4696],
            "club:Leicester City FC": [.7777, .4823],
            "player:Nacer CHADLI": [.7704, .7241],
            "player:Rais MBOLHI": [.8464, .5003],
            "player:Santiago ARIAS": [.486, .8357],
            "club:Olympique Marseille": [.3547, .7008],
            "player:CRISTIANO RONALDO": [.5638, .2071],
            "player:Blaise MATUIDI": [.2484, .6967],
            "player:Marcelo BROZOVIC": [.3923, .8534],
            "team:England": [.2234, .8191],
            "player:Daniel STURRIDGE": [.2834, .7509],
            "player:EDUARDO": [.4753, .4936],
            "player:Andre SCHUERRLE": [.2518, .6539],
            "club:PSV Eindhoven": [.426, .4736],
            "club:FC Schalke 04": [.3861, .5378],
            "player:Javi MARTINEZ": [.6886, .2891],
            "player:Lucas BIGLIA": [.7883, .5483],
            "player:Enoh EYONG": [.6371, .8687],
            "player:Cristhian STUANI": [.815, .4019],
            "club:SL Benfica": [.709, .3707],
            "player:Tommy OAR": [.8261, .6457],
            "player:Iker CASILLAS": [.7163, .26],
            "club:HNK Hajduk Split": [.6915, .7703],
            "player:Raul MEIRELES": [.5692, .1276],
            "player:Abel HERNANDEZ": [.8411, .4211],
            "player:Admir MEHMEDI": [.7662, .31],
            "player:Leroy FER": [.4411, .1074],
            "player:Victor FAYZULIN": [.6475, .1632],
            "player:Okechukwu UCHEBO": [.4945, .0922],
            "player:Reza GHOOCHANNEJAD": [.1824, .3452],
            "club:Stabaek IF": [.3044, .2811],
            "player:Mitch LANGERAK": [.728, .6516],
            "player:Robin VAN PERSIE": [.4364, .2231],
            "player:Thibaut COURTOIS": [.792, .6597],
            "player:El Arabi SOUDANI": [.8224, .5252],
            "player:Ognjen VUKOJEVIC": [.3775, .8104],
            "player:Juan QUINTERO": [.5092, .8267],
            "player:Pavel MOGILEVETC": [.61, .1502],
            "club:RSC Anderlecht": [.489, .5626],
            "player:Michael BABATUNDE": [.4961, .0999],
            "player:Gordon SCHILDENFELD": [.3566, .8534],
            "player:Souleymane BAMBA": [.2558, .2153],
            "club:FC Volyn Lutsk": [.4883, .2041],
            "club:FC Nantes": [.7425, .3837],
            "player:Thomas MUELLER": [.2278, .6478],
            "player:Maksim KANUNNIKOV": [.6412, .1288],
            "player:Lukas PODOLSKI": [.2026, .6546],
            "player:Ivan MOCINIC": [.3674, .8698],
            "player:Mario BALOTELLI": [.2188, .3162],
            "player:Blerim DZEMAILI": [.7794, .3153],
            "player:Stefanos KAPINO": [.1678, .5364],
            "club:Shakhtar Donetsk": [.4987, .6275],
            "team:Russia": [.6497, .0831],
            "player:Karim BENZEMA": [.2761, .6767],
            "player:Adrian RAMOS": [.5226, .8687],
            "player:PARK Jooho": [.6631, .2143],
            "player:Jason DAVIDSON": [.8257, .6613],
            "club:Juventus FC": [.3811, .4554],
            "player:Tim HOWARD": [.7758, .4143],
            "team:Japan": [.2827, .1248],
            "player:Joao MOUTINHO": [.5695, .1834],
            "club:FC Luzern": [.7361, .6311],
            "player:Alexey IONOV": [.6271, .1415],
            "player:Stephane RUFFIER": [.208, .6789],
            "player:SON Heungmin": [.6824, .1928],
            "player:Eiji KAWASHIMA": [.324, .2128],
            "player:Joel VELTMAN": [.4178, .1],
            "player:Andrey SEMENOV": [.6331, .119],
            "player:KOKE": [.7615, .247],
            "club:Getafe CF": [.6042, .6663],
            "team:Ivory Coast": [.2234, .1809],
            "player:Sergio AGUERO": [.8029, .5818],
            "player:Djamel MESBAH": [.8556, .5088],
            "player:Juan Carlos GARCIA": [.1831, .4487],
            "club:FC Zorya Lugansk": [.7036, .6997],
            "player:Ismael DIOMANDE": [.25, .2399],
            "club:Fethiyespor": [.575, .8223],
            "player:Henri BEDIMO": [.6337, .8755],
            "player:Aron JOHANNSSON": [.8226, .3421],
            "player:FERNANDINHO": [.6827, .7928],
            "player:Alexander KOKORIN": [.6338, .1413],
            "team:Chile": [.5763, .9426],
            "player:Kwadwo ASAMOAH": [.1962, .5534],
            "player:Bruno ALVES": [.5634, .1315],
            "player:Christian ATSU": [.1664, .596],
            "player:Mathieu DEBUCHY": [.219, .6705],
            "player:Yohan CABAYE": [.2445, .6903],
            "player:Pablo ZABALETA": [.7973, .5862],
            "player:Luke SHAW": [.2669, .7554],
            "club:Kayserispor": [.2358, .5063],
            "player:Andre ALMEIDA": [.5952, .1429],
            "player:Helder POSTIGA": [.5647, .1543],
            "player:Eduardo VARGAS": [.5896, .8086],
            "club:ACF Fiorentina": [.3739, .6619],
            "team:Croatia": [.3503, .9169],
            "team:Switzerland": [.8252, .2493],
            "club:RCD Espanyol": [.589, .3061],
            "player:Constant DJAKPA": [.2832, .2147],
            "player:Jean BEAUSEJOUR": [.5277, .852],
            "player:Joseph YOBO": [.4896, .0977],
            "team:Uruguay": [.8836, .412],
            "club:Sporting CP": [.6829, .3405],
            "player:Luis NETO": [.5913, .1518],
            "player:WILLIAM": [.5932, .1301],
            "player:Dani ALVES": [.7058, .7754],
            "player:Ermin BICAKCIC": [.715, .7713],
            "player:Fabian SCHAER": [.754, .2923],
            "player:Glen JOHNSON": [.277, .7484],
            "club:Fulham FC": [.2099, .458],
            "player:Roman WEIDENFELLER": [.1997, .6475],
            "player:LUIZ GUSTAVO": [.6842, .7852],
            "club:GNK Dinamo Zagreb": [.586, .6587],
            "team:USA": [.8613, .3273],
            "player:Matteo DARMIAN": [.2087, .2855],
            "player:Javier HERNANDEZ": [.38, .2112],
            "player:Efe AMBROSE": [.4648, .147],
            "club:CSKA Sofia": [.7644, .4905],
            "player:Aissa MANDI": [.8489, .5076],
            "player:Kevin MIRALLAS": [.7462, .7201],
            "club:FSV Mainz 05": [.5201, .4393],
            "player:Carl MEDJANI": [.8153, .5066],
            "club:Paris Saint-Germain FC": [.4182, .5544],
            "player:Daniel VAN BUYTEN": [.7224, .698],
            "club:SC Bastia": [.2239, .6267],
            "player:Mickael LANDREAU": [.2033, .7191],
            "player:JI Dongwon": [.6805, .1588],
            "player:Sejad SALIHOVIC": [.7553, .7596],
            "player:Benedikt HOEWEDES": [.2128, .6335],
            "club:AS Monaco": [.5616, .5937],
            "player:Josip DRMIC": [.7574, .2624],
            "player:Emir SPAHIC": [.7299, .7258],
            "player:Yann SOMMER": [.7529, .2846],
            "player:Moussa SISSOKO": [.2254, .673],
            "player:Sami KHEDIRA": [.2475, .6073],
            "club:FK Amkar Perm": [.6092, .2181],
            "player:Raul ALBIOL": [.7437, .2597],
            "player:Jean Daniel AKPA": [.2633, .2465],
            "player:Alan DZAGOEV": [.6362, .134],
            "player:Gary CAHILL": [.3099, .7602],
            "player:Jean MAKOUN": [.6042, .8606],
            "player:Jozy ALTIDORE": [.8144, .3317],
            "player:Mariano ANDUJAR": [.8432, .5786],
            "player:Raphael VARANE": [.2694, .678],
            "player:Gokhan INLER": [.7735, .3114],
            "club:Sevilla FC": [.5105, .6575],
            "player:Jeremain LENS": [.4316, .1611],
            "player:Daniel DAVARI": [.2159, .3775],
            "player:Ramon AZEEZ": [.5059, .0891],
            "player:Mario MANDZUKIC": [.381, .8207],
            "player:Peter ODEMWINGIE": [.5127, .1422],
            "club:Panathinaikos FC": [.3323, .718],
            "player:Alejandro BEDOYA": [.8205, .3496],
            "player:Luka MODRIC": [.4018, .7947],
            "club:Stoke City FC": [.5682, .4184],
            "club:UD Las Palmas": [.2443, .3766],
            "player:Hector MORENO": [.3978, .1416],
            "player:Jonathan DE GUZMAN": [.4229, .1142],
            "player:Jorge FUCILE": [.79, .4368],
            "player:Salvatore SIRIGU": [.246, .3316],
            "player:Axel WITSEL": [.7698, .653],
            "player:VIEIRINHA": [.5759, .1898],
            "club:Kayseri Erciyesspor": [.6886, .6974],
            "club:Newcastle United FC": [.3203, .4372],
            "player:Toni KROOS": [.234, .6385]
        },
        3: {
            "player:Yoshito OKUBO": [.2979, .1591],
            "club:Real Espana": [.188, .4364],
            "player:Michael UMANA": [.4338, .8944],
            "club:Independiente Santa Fe": [.416, .8035],
            "team:Cameroon": [.6497, .917],
            "player:Rafael MARQUEZ": [.3572, .1169],
            "club:Jubilo Iwata": [.3457, .2343],
            "club:Busan IPark FC": [.6453, .2396],
            "player:Frickson ERAZO": [.3142, .8334],
            "player:Amirhossein SADEGHI": [.1816, .3563],
            "club:Kawasaki Frontale": [.3364, .2206],
            "club:Beijing Guoan": [.6405, .2561],
            "club:Sao Paulo FC": [.7675, .4278],
            "player:Alfredo TALAVERA": [.3611, .1233],
            "club:Jeonbuk Hyundai Motors FC": [.7423, .6374],
            "player:Fidel MARTINEZ": [.3209, .8585],
            "player:Carlos VALDES": [.499, .9107],
            "player:JULIO CESAR": [.7077, .7906],
            "player:Giancarlo GONZALEZ": [.4224, .8978],
            "player:JO": [.6951, .8332],
            "player:Jorge VALDIVIA": [.5761, .8941],
            "team:South Korea": [.7173, .1247],
            "player:Eugenio MENA": [.5728, .901],
            "player:Luis LOPEZ": [.1499, .428],
            "club:Kuwait SC": [.2565, .3903],
            "player:Carlos PENA": [.364, .1162],
            "player:Nicolas LODEIRO": [.8334, .4503],
            "club:CS Emelec": [.3325, .7779],
            "player:Hotaru YAMAGUCHI": [.3352, .172],
            "club:Urawa Red Diamonds": [.3471, .2516],
            "player:Teofilo GUTIERREZ": [.5005, .8971],
            "player:Agustin ORION": [.84, .5789],
            "club:CD Chivas USA": [.23, .4303],
            "player:Hashem BEIKZADEH": [.18, .3429],
            "player:Gabriel ACHILIER": [.2924, .8435],
            "player:Chigozie AGBIM": [.4945, .1062],
            "club:CA Boca Juniors": [.7788, .5641],
            "club:Vancouver Whitecaps FC": [.2465, .3761],
            "team:Portugal": [.5763, .0573],
            "club:Al Gharafa SC": [.7381, .6207],
            "player:Jose VAZQUEZ": [.3542, .124],
            "club:Aduana Stars": [.23, .5504],
            "player:Toshihiro AOYAMA": [.3307, .1608],
            "player:Karim ANSARI FARD": [.1733, .344],
            "club:Cruz Azul FC": [.3631, .3843],
            "team:Costa Rica": [.4237, .9427],
            "club:CA River Plate": [.4976, .8411],
            "team:Nigeria": [.5, .0486],
            "team:Ecuador": [.2827, .8753],
            "player:Matt BESLER": [.8208, .3366],
            "team:Australia": [.8614, .6727],
            "club:CF Monterrey": [.7626, .5512],
            "club:Sunshine Stars FC": [.4934, .1918],
            "player:Michael ARROYO": [.2981, .8239],
            "player:Fatawu DAUDA": [.1604, .5861],
            "player:Bakhtiar RAHMANI": [.1716, .3306],
            "player:Marvin CHAVEZ": [.1511, .4145],
            "club:Zob Ahan Isfahan FC": [.2678, .358],
            "player:Brayan BECKELES": [.1539, .4217],
            "club:Tractor Sazi Tabriz FC": [.2529, .36],
            "club:LDU Quito": [.3575, .7464],
            "club:CD El Nacional": [.3328, .756],
            "team:Colombia": [.5, .9514],
            "player:Ryan McGOWAN": [.8226, .6508],
            "player:Andranik TIMOTIAN": [.1775, .3502],
            "player:Jorge GUAGUA": [.3033, .8384],
            "player:Sebastian COATES": [.8389, .4159],
            "player:Esteban PAREDES": [.5694, .8943],
            "club:Newcastle United Jets FC": [.7436, .6045],
            "club:Atlante FC": [.3427, .743],
            "club:Deportivo Cali": [.5108, .8142],
            "club:Lekhwiya SC": [.7597, .4948],
            "player:Stephen ADAMS": [.1567, .5711],
            "player:Ehsan HAJI SAFI": [.1842, .3491],
            "club:Perspolis FC": [.207, .3829],
            "club:Real Salt Lake": [.7801, .3678],
            "team:Mexico": [.3503, .083],
            "player:Cristopher TOSELLI": [.566, .9011],
            "player:Zvjezdan MISIMOVIC": [.7224, .7568],
            "club:Deportivo Saprissa": [.4504, .8216],
            "team:Greece": [.1088, .5],
            "club:Club Santos Laguna": [.4007, .2124],
            "player:Jose CUBERO": [.4404, .8966],
            "player:Alexander MEJIA": [.5031, .9045],
            "club:Sporting Kansas City": [.761, .3636],
            "club:CR Flamengo": [.3623, .7628],
            "player:Waylon FRANCIS": [.4272, .8922],
            "club:Club Leon": [.367, .1772],
            "player:DaMarcus BEASLEY": [.8197, .3501],
            "club:Al Jazira SCC": [.3475, .7594],
            "player:Mark BRESCIANO": [.8179, .6566],
            "club:Warri Wolves FC": [.5085, .1908],
            "player:Felipe CAICEDO": [.3049, .825],
            "team:Ghana": [.1163, .5881],
            "player:Johnny ACOSTA": [.4138, .8769],
            "club:Shandong Luneng Taishan FC": [.753, .6182],
            "club:Esperance Sportive de Tunis": [.2441, .5442],
            "player:Heiner MORA": [.4387, .889],
            "player:Roy MILLER": [.4578, .8837],
            "team:Spain": [.7766, .1808],
            "club:Sewe Sport": [.3278, .3025],
            "player:Ghasem HADADIFAR": [.1759, .3367],
            "club:Sanfrecce Hiroshima": [.5006, .2118],
            "player:Johnny HERRERA": [.5626, .8943],
            "club:LD Alajuelense": [.3567, .7055],
            "club:San Jose Earthquakes": [.4902, .388],
            "player:Jaimen AYOVI": [.3019, .852],
            "club:CS Herediano": [.454, .8476],
            "player:Alex WILKINSON": [.8199, .6641],
            "player:Yasuhito ENDO": [.306, .1719],
            "club:CD Motagua": [.2168, .4175],
            "player:Clint DEMPSEY": [.8227, .3571],
            "player:Abdelmoumene DJABOU": [.8468, .5018],
            "player:Matt McKAY": [.8206, .6434],
            "player:Edder DELGADO": [.1432, .4272],
            "player:HA Daesung": [.6934, .1716],
            "club:Suwon Bluewings FC": [.6406, .2231],
            "club:Toronto FC": [.7407, .5341],
            "club:Cerezo Osaka": [.4888, .2807],
            "player:Daniel CAMBRONERO": [.4355, .902],
            "player:Eder BALANTA": [.4937, .8963],
            "club:Sangju Sangmu FC": [.6686, .2446],
            "player:Patrick PEMBERTON": [.4177, .8705],
            "club:Barcelona SC": [.313, .7916],
            "club:USM Alger": [.7589, .5121],
            "team:Brazil": [.7173, .8753],
            "club:New York Red Bulls": [.61, .7365],
            "team:Iran": [.1386, .3273],
            "player:Rashid SUMAILA": [.1652, .5806],
            "team:Algeria": [.8912, .5],
            "player:LEE Keunho": [.7049, .1684],
            "player:Noel VALLADARES": [.1579, .4154],
            "club:Club Africain": [.7727, .5053],
            "player:Oscar BAGUI": [.3075, .8322],
            "team:Belgium": [.8253, .7508],
            "club:Club Tijuana": [.3425, .8034],
            "player:LEE Yong": [.6984, .1663],
            "player:Diego FORLAN": [.7883, .3925],
            "player:Martin SILVA": [.8472, .4356],
            "player:Mohamed ZEMMAMOUCHE": [.841, .5059],
            "club:CS Constantine": [.7735, .4879],
            "player:Jose Maria BASANTA": [.8391, .5711],
            "player:James TROISI": [.8265, .6658],
            "player:Donis ESCOBER": [.1635, .4296],
            "player:Rahman AHMADI": [.1868, .3418],
            "player:Manabu SAITO": [.3114, .1575],
            "player:Jorge CLAROS": [.162, .4092],
            "player:Cedric DJEUGOUE": [.624, .8524],
            "club:Umm Salal SC": [.2618, .374],
            "player:Jerry PALACIOS": [.1778, .4669],
            "player:Victor BERNARDEZ": [.1915, .4115],
            "club:Adelaide United FC": [.7676, .6224],
            "club:Qingdao Jonoon FC": [.245, .4323],
            "player:Ebenezer ODUNLAMI": [.499, .1003],
            "team:Germany": [.1386, .6727],
            "club:Botafogo FR": [.7264, .6061],
            "club:Brisbane Roar FC": [.7659, .6026],
            "player:Jose ROJAS": [.5658, .8874],
            "team:Honduras": [.1163, .4119],
            "player:KIM Shinwook": [.6919, .164],
            "player:Miguel PONCE": [.3581, .1304],
            "player:Masahiko INOHA": [.3047, .1582],
            "player:Osman CHAVEZ": [.1647, .4163],
            "player:Faryd MONDRAGON": [.5073, .8984],
            "player:Yeltsin TEJEDA": [.4321, .8868],
            "club:Tigres UANL": [.4046, .1848],
            "club:Club America": [.3845, .1964],
            "club:Atletico Mineiro": [.6614, .7739],
            "club:FC Tokyo": [.3533, .2164],
            "player:Sylvain GBOHOUO": [.2774, .2433],
            "player:KIM Younggwon": [.6999, .1739],
            "team:Bosnia and Herzegovina": [.7766, .8192],
            "player:Nick RIMANDO": [.8276, .3373],
            "player:Reza HAGHIGHI": [.1682, .3587],
            "player:Mark MILLIGAN": [.8245, .6583],
            "club:Atletico Nacional": [.4997, .8024],
            "team:Netherlands": [.4237, .0573],
            "player:Mehrdad POOLADI": [.164, .3524],
            "club:Western Sydney Wanderers FC": [.7572, .6349],
            "player:Raul JIMENEZ": [.3618, .1369],
            "player:Camilo VARGAS": [.4858, .8964],
            "club:CSD Cartagines": [.4372, .8374],
            "player:Brad DAVIS": [.7853, .3515],
            "player:Kyle BECKERMAN": [.8305, .3443],
            "club:Seattle Sounders FC": [.7675, .3847],
            "player:Matthew SPIRANOVIC": [.8311, .66],
            "club:Santos FC": [.5699, .8129],
            "team:France": [.1747, .7508],
            "club:Yokohama F-Marinos": [.3608, .2344],
            "player:HWANG Seokho": [.6701, .1604],
            "player:Shusaku NISHIKAWA": [.3019, .1654],
            "club:Guangzhou R&amp;F FC": [.6586, .2315],
            "club:CF Pachuca": [.3528, .7844],
            "club:Sepahan FC": [.2293, .3789],
            "player:Khosro HEYDARI": [.1749, .3575],
            "player:Charles ARANGUIZ": [.5592, .9011],
            "club:Mamelodi Sundowns FC": [.2283, .5677],
            "player:KIM Seunggyu": [.6968, .1586],
            "player:VICTOR": [.6923, .826],
            "player:Alexander DOMINGUEZ": [.3117, .8261],
            "player:Yoichiro KAKITANI": [.3294, .1761],
            "player:Marco FABIAN": [.3581, .1609],
            "player:Tim CAHILL": [.7999, .673],
            "player:Adam TAGGART": [.816, .6491],
            "player:DeAndre YEDLIN": [.8266, .3507],
            "player:Azubuike EGWUEKWE": [.5057, .102],
            "player:Carlos CARBONERO": [.4964, .9035],
            "player:Maximo BANGUERA": [.3007, .8311],
            "player:Maxi RODRIGUEZ": [.8344, .5835],
            "player:FRED": [.6884, .8324],
            "club:Columbus Crew": [.4293, .8198],
            "player:Oribe PERALTA": [.3716, .1291],
            "player:Juan PAREDES": [.2965, .8373],
            "club:CD Universidad Catolica": [.5456, .799],
            "player:Jalal HOSSEINI": [.1708, .3513],
            "player:Yasuyuki KONNO": [.2993, .1727],
            "player:Eugen GALEKOVIC": [.8293, .6525],
            "club:Gamba Osaka": [.3288, .2384],
            "club:Foolad Khuzestan FC": [.2416, .3928],
            "player:Harrison AFFUL": [.1634, .573],
            "team:Italy": [.1747, .2492],
            "player:LEE Bumyoung": [.7033, .1608],
            "player:Luis SARITAMA": [.2991, .8446],
            "player:Steven BEITASHOUR": [.1624, .339],
            "club:Melbourne Victory FC": [.7736, .641],
            "club:Club Nacional de Football": [.766, .4451],
            "player:Cedric SI MOHAMMED": [.8464, .494],
            "player:PARK Jongwoo": [.6854, .1616],
            "club:Ulsan Hyundai FC": [.6748, .2202],
            "club:Deportivo Toluca FC": [.3886, .1689],
            "player:Pejman MONTAZERI": [.1826, .3357],
            "club:Orlando Pirates": [.24, .5786],
            "player:Edison MENDEZ": [.3205, .8363],
            "player:Graham ZUSI": [.8236, .3437],
            "player:Shuichi GONDA": [.3154, .164],
            "player:Asamoah GYAN": [.1586, .5786],
            "club:Naft Tehran FC": [.2379, .3617],
            "player:HAN Kookyoung": [.6869, .1692],
            "player:KWAK Taehwi": [.6718, .2013],
            "player:Boniek GARCIA": [.1958, .4176],
            "club:Al Hilal FC": [.4993, .5015],
            "player:Alvaro PEREIRA": [.8455, .414],
            "club:Club Libertad": [.7532, .4359],
            "team:Argentina": [.8837, .5881],
            "player:Walter AYOVI": [.3058, .8456],
            "club:Esteghlal Tehran FC": [.2181, .3562],
            "player:Chris WONDOLOWSKI": [.7829, .3442],
            "player:Jose CORONA": [.363, .1554],
            "club:Houston Dynamo": [.4898, .4104],
            "player:Fernando GAGO": [.8336, .5757],
            "player:Carlo COSTLY": [.1471, .4208],
            "club:Coton Sport FC": [.6044, .7953],
            "club:New England Revolution": [.236, .4462],
            "player:Enner VALENCIA": [.3102, .8397],
            "team:England": [.2234, .8192],
            "player:Paul AGUILAR": [.3686, .1363],
            "club:Club Universidad de Chile": [.5582, .8386],
            "player:Miguel LAYUN": [.3753, .1357],
            "club:CD Olimpia": [.2129, .443],
            "player:Egidio AREVALO": [.8073, .4503],
            "player:Ejike UZOENYI": [.5011, .1078],
            "club:CA Newells Old Boys": [.7587, .568],
            "club:Palmeiras": [.5607, .7992],
            "player:Adrian BONE": [.2939, .8302],
            "player:Ahmad ALNAMEH": [.1691, .3379],
            "club:Puebla FC": [.75, .3884],
            "player:Masato MORISHIGE": [.3086, .1646],
            "club:Fluminense FC": [.6459, .7573],
            "player:Carlos SALCIDO": [.3749, .1222],
            "player:Madjid BOUGUERRA": [.8407, .4981],
            "player:Francisco RODRIGUEZ": [.3649, .1298],
            "team:Russia": [.6497, .083],
            "player:Jose FUENZALIDA": [.5726, .8874],
            "club:Guangzhou Evergrande FC": [.6552, .2527],
            "team:Japan": [.2827, .1247],
            "club:Guizhou Renhe FC": [.6713, .6984],
            "player:Segundo CASTILLO": [.3278, .8006],
            "player:Joao ROJAS": [.307, .7737],
            "player:JEFFERSON": [.7047, .8016],
            "player:Oscar GRANADOS": [.4289, .8998],
            "team:Ivory Coast": [.2234, .1808],
            "club:SC Internacional": [.5362, .8127],
            "club:CA San Lorenzo de Almagro": [.4964, .8193],
            "player:JUNG Sungryong": [.6953, .151],
            "player:KIM Changsoo": [.6903, .1563],
            "player:Loic FEUDJOU": [.6296, .8568],
            "player:Ivan FRANJIC": [.8272, .6451],
            "club:Enugu Rangers FC": [.4989, .1729],
            "club:CA Monarcas Morelia": [.5592, .6152],
            "player:Jefferson MONTERO": [.3349, .8183],
            "team:Chile": [.5763, .9427],
            "player:Omar GONZALEZ": [.8169, .343],
            "player:Javad NEKOUNAM": [.1784, .3295],
            "team:Croatia": [.3503, .917],
            "player:Alan PULIDO": [.371, .1158],
            "team:Switzerland": [.8253, .2492],
            "club:Al Ain FC": [.2424, .5614],
            "club:CR Vasco da Gama": [.792, .4457],
            "player:Hossein MAHINI": [.1666, .3452],
            "team:Uruguay": [.8837, .4119],
            "player:Randall BRENES": [.4305, .9074],
            "player:Isaac BRIZUELA": [.3678, .1227],
            "team:USA": [.8614, .3273],
            "player:Juan MONTES": [.1552, .4082],
            "club:Kashiwa Reysol": [.6549, .2121],
            "player:Luis GARRIDO": [.1567, .4288],
            "club:Los Angeles Galaxy": [.7421, .3736],
            "player:Michael BRADLEY": [.8138, .3843],
            "player:Jerry BENGTSON": [.1607, .4225],
            "club:CSD Colo-Colo": [.553, .817],
            "player:Rodrigo MUNOZ": [.8335, .4206],
            "player:Mario MARTINEZ": [.1527, .4352]
        },
        4: {
            "club:Cagliari Calcio": [.5462, .8565],
            "player:Yoshito OKUBO": [.3019, .1513],
            "player:Godfrey OBOABONA": [.4858, .1032],
            "club:Real Espana": [.1845, .4312],
            "player:Michael UMANA": [.4333, .9023],
            "player:Yuya OSAKO": [.3052, .1577],
            "club:Independiente Santa Fe": [.4164, .809],
            "player:Shinji KAGAWA": [.3046, .1901],
            "player:Andre AYEW": [.179, .5962],
            "player:Jackson MARTINEZ": [.513, .8416],
            "team:Cameroon": [.6497, .9169],
            "player:Rafael MARQUEZ": [.3567, .1204],
            "club:Jubilo Iwata": [.3641, .2271],
            "club:CA Osasuna": [.584, .8345],
            "club:Busan IPark FC": [.6383, .2406],
            "player:Frickson ERAZO": [.3126, .8336],
            "player:Adam KWARASEY": [.1463, .5864],
            "club:Manchester United FC": [.3445, .395],
            "player:Edgar SALLI": [.6356, .8717],
            "player:Carlos GRUEZO": [.2969, .7796],
            "club:Hapoel Be'er Sheva FC": [.4849, .1698],
            "player:Amirhossein SADEGHI": [.1765, .3592],
            "club:Kawasaki Frontale": [.3371, .2149],
            "player:PAULINHO": [.7042, .8216],
            "club:Beijing Guoan": [.6441, .2567],
            "club:Sao Paulo FC": [.7755, .4379],
            "player:KOO Jacheol": [.6778, .2052],
            "player:Maynor FIGUEROA": [.1463, .4338],
            "player:Alfredo TALAVERA": [.3632, .1189],
            "club:Jeonbuk Hyundai Motors FC": [.7254, .624],
            "player:Alireza HAGHIGHI": [.1765, .3517],
            "player:Celso BORGES": [.4294, .8959],
            "player:Maximiliano PEREIRA": [.8386, .4361],
            "club:FC Platanias": [.2496, .5784],
            "club:FC Twente": [.5685, .8084],
            "player:Serge AURIER": [.2566, .2453],
            "club:Liverpool FC": [.569, .2932],
            "player:Fidel MARTINEZ": [.3187, .8617],
            "player:Carlos VALDES": [.498, .9156],
            "club:FC Basel": [.3766, .4551],
            "club:Tottenham Hotspur FC": [.7414, .664],
            "player:Javier AQUINO": [.3747, .1225],
            "player:JULIO CESAR": [.7062, .813],
            "player:Abel AGUILAR": [.4751, .8417],
            "player:Juan CUADRADO": [.4913, .9144],
            "player:Giancarlo GONZALEZ": [.4239, .9101],
            "player:JO": [.6927, .8435],
            "player:Sayouba MANDE": [.2415, .2176],
            "player:Jorge VALDIVIA": [.5747, .8955],
            "team:South Korea": [.7173, .1248],
            "player:Sammy NDJOCK": [.632, .8846],
            "player:Sergio ROMERO": [.8306, .606],
            "player:Eugenio MENA": [.5635, .9112],
            "player:Joel CAMPBELL": [.42, .9038],
            "club:Preston North End FC": [.7398, .628],
            "player:Luis LOPEZ": [.1446, .4263],
            "player:Riyad MAHREZ": [.8581, .4902],
            "club:Kuwait SC": [.257, .3906],
            "club:Club Brugge KV": [.6003, .7377],
            "club:FC Lorient": [.588, .8124],
            "player:Carlos PENA": [.359, .1131],
            "club:Valencia CF": [.679, .6705],
            "club:FSV Frankfurt": [.7356, .6113],
            "player:Nicolas LODEIRO": [.838, .4456],
            "club:AS Nancy": [.5899, .7812],
            "club:CS Emelec": [.3277, .7753],
            "player:Hotaru YAMAGUCHI": [.3273, .1759],
            "player:Ricardo ALVAREZ": [.8251, .5839],
            "player:John BOYE": [.1816, .6034],
            "player:Gary MEDEL": [.5778, .8598],
            "club:Urawa Red Diamonds": [.3491, .2251],
            "player:Teofilo GUTIERREZ": [.5064, .9038],
            "player:Carlos BACCA": [.5041, .8964],
            "player:Agustin ORION": [.8464, .5881],
            "club:FC Sochaux-MontbÃ©liard": [.2522, .5613],
            "club:Charlton Athletic FC": [.2462, .3787],
            "club:CD Chivas USA": [.2257, .4295],
            "club:RC Lens": [.6048, .7812],
            "player:Hashem BEIKZADEH": [.1755, .3366],
            "player:John BROOKS": [.807, .3725],
            "player:Gabriel ACHILIER": [.2892, .8405],
            "player:KIM Bokyung": [.6886, .2056],
            "player:Chigozie AGBIM": [.4938, .1],
            "club:CA Boca Juniors": [.7872, .5692],
            "player:Diego PEREZ": [.8414, .4291],
            "club:Vancouver Whitecaps FC": [.2434, .3978],
            "team:Portugal": [.5763, .0574],
            "club:Al Gharafa SC": [.7441, .6445],
            "player:Alexis SANCHEZ": [.6147, .856],
            "player:Jose VAZQUEZ": [.355, .1279],
            "player:Mathew LECKIE": [.8327, .6571],
            "club:Aduana Stars": [.2151, .5449],
            "player:James RODRIGUEZ": [.5224, .8906],
            "club:Bayer 04 Leverkusen": [.5169, .2026],
            "club:Standard Liege": [.2727, .4053],
            "player:Toshihiro AOYAMA": [.3279, .1594],
            "player:Karim ANSARI FARD": [.1759, .344],
            "player:Albert ADOMAH": [.1722, .549],
            "club:Cruz Azul FC": [.3643, .382],
            "player:HERNANES": [.6974, .7974],
            "team:Costa Rica": [.4237, .9426],
            "player:Esseid BELKALEM": [.8449, .4777],
            "club:CA River Plate": [.4981, .8494],
            "player:Didier DROGBA": [.2916, .2491],
            "player:Cristian RODRIGUEZ": [.8529, .4127],
            "team:Nigeria": [.5, .0487],
            "team:Ecuador": [.2827, .8752],
            "player:Matt BESLER": [.8266, .332],
            "team:Australia": [.8613, .6727],
            "player:Die SEREY": [.2629, .2481],
            "club:CF Monterrey": [.7588, .5578],
            "player:Juwon OSHANIWA": [.5115, .0887],
            "club:Sunshine Stars FC": [.4907, .204],
            "player:Pierre WEBO": [.6261, .8317],
            "player:Juan ZUNIGA": [.5406, .8759],
            "player:Michael ARROYO": [.3008, .8258],
            "player:Fatawu DAUDA": [.1597, .5884],
            "player:Didier ZOKORA": [.2464, .2125],
            "player:Bakhtiar RAHMANI": [.1644, .329],
            "club:CD Real Sociedad": [.2544, .4332],
            "player:Marvin CHAVEZ": [.1476, .4133],
            "club:Zob Ahan Isfahan FC": [.2641, .3568],
            "player:Brayan BECKELES": [.1558, .4229],
            "club:KV Waasland-Beveren": [.4991, .1754],
            "club:Tractor Sazi Tabriz FC": [.253, .3449],
            "club:LDU Quito": [.3593, .7383],
            "player:Hector HERRERA": [.4019, .1855],
            "club:Valerenga IF": [.4486, .8099],
            "player:Fabian ORELLANA": [.5848, .8813],
            "player:Ashkan DEJAGAH": [.1708, .3555],
            "player:Mix DISKERUD": [.8062, .3802],
            "club:CD El Nacional": [.3329, .7543],
            "team:Colombia": [.5, .9513],
            "player:Ryan McGOWAN": [.8299, .6504],
            "player:Carlos SANCHEZ": [.4889, .9071],
            "player:Stephane MBIA": [.624, .8746],
            "player:Andranik TIMOTIAN": [.1701, .3404],
            "club:FK Austria Wien": [.7793, .6238],
            "club:Celta Vigo": [.6736, .7001],
            "player:LEE Chungyong": [.701, .162],
            "club:Crystal Palace FC": [.7585, .6488],
            "player:Jorge GUAGUA": [.3008, .841],
            "club:SS Lazio": [.6985, .3786],
            "player:Cristian ZAPATA": [.4637, .8571],
            "player:Mubarak WAKASO": [.1503, .5801],
            "player:Eric CHOUPO MOTING": [.6268, .8074],
            "player:Sebastian COATES": [.852, .4202],
            "player:NEYMAR": [.7233, .8229],
            "player:Felipe GUTIERREZ": [.5751, .9107],
            "player:Esteban PAREDES": [.5689, .9072],
            "player:Mauricio ISLA": [.5673, .8707],
            "player:Alex IBARRA": [.2939, .8214],
            "club:Atletico Madrid": [.7952, .4209],
            "club:Newcastle United Jets FC": [.7607, .6029],
            "club:Atlante FC": [.3452, .7443],
            "club:AIK Solna": [.4587, .7971],
            "club:Levante UD": [.429, .7927],
            "club:Deportivo Cali": [.5139, .8013],
            "player:Claudio BRAVO": [.5686, .8841],
            "player:Martin DEMICHELIS": [.8125, .5742],
            "player:Diego LUGANO": [.8405, .4182],
            "club:Lekhwiya SC": [.7688, .5257],
            "player:PARK Chuyoung": [.7062, .1824],
            "player:Stephen ADAMS": [.1479, .5729],
            "club:SSC Napoli": [.7127, .6754],
            "player:Cristian GAMBOA": [.4558, .8687],
            "player:Ehsan HAJI SAFI": [.1819, .3478],
            "club:Perspolis FC": [.1991, .3809],
            "club:Real Salt Lake": [.7822, .3589],
            "player:YUN Sukyoung": [.6952, .2043],
            "club:Fortuna Duesseldorf": [.5289, .4438],
            "player:Sulley MUNTARI": [.1701, .5753],
            "team:Mexico": [.3503, .0831],
            "player:Cristopher TOSELLI": [.5744, .9031],
            "club:VfB Stuttgart": [.3117, .4199],
            "club:Deportivo Saprissa": [.4534, .8421],
            "team:Greece": [.1089, .5],
            "club:Club Santos Laguna": [.4012, .2248],
            "player:Federico FERNANDEZ": [.8314, .5981],
            "player:Jose CUBERO": [.4357, .8952],
            "player:Alexander MEJIA": [.5022, .9096],
            "club:Sporting Kansas City": [.7633, .3536],
            "club:CR Flamengo": [.3606, .7555],
            "club:Aalesunds FK": [.4441, .7933],
            "player:Waylon FRANCIS": [.4226, .8969],
            "club:Club Leon": [.3643, .1762],
            "player:Hiroshi KIYOTAKE": [.3273, .168],
            "player:DaMarcus BEASLEY": [.8259, .3554],
            "club:Al Jazira SCC": [.3465, .7617],
            "player:Mark BRESCIANO": [.8158, .6627],
            "club:Warri Wolves FC": [.5275, .1868],
            "player:Felipe CAICEDO": [.3067, .8222],
            "club:Elche CF": [.4799, .8251],
            "club:Granada CF": [.7018, .651],
            "team:Ghana": [.1164, .588],
            "club:Parma FC": [.5004, .512],
            "player:Johnny ACOSTA": [.4187, .8791],
            "player:Javier MASCHERANO": [.823, .6102],
            "club:Shandong Luneng Taishan FC": [.771, .5903],
            "player:Lionel MESSI": [.8058, .6288],
            "club:Esperance Sportive de Tunis": [.2292, .5389],
            "player:Augusto FERNANDEZ": [.826, .5936],
            "player:Heiner MORA": [.4426, .8945],
            "player:Geoff CAMERON": [.7821, .334],
            "player:Roy MILLER": [.4595, .8863],
            "team:Spain": [.7766, .1809],
            "club:Sewe Sport": [.3257, .282],
            "club:Manchester City FC": [.6693, .5463],
            "player:Ghasem HADADIFAR": [.1699, .3327],
            "club:AC Ajaccio": [.5934, .3394],
            "player:Mathis BOLLY": [.282, .2357],
            "club:Sanfrecce Hiroshima": [.5028, .2181],
            "player:Gonzalo HIGUAIN": [.8252, .6013],
            "player:Johnny HERRERA": [.5572, .8997],
            "player:Bailey WRIGHT": [.8232, .6496],
            "player:KI Sungyueng": [.705, .1747],
            "club:AZ Alkmaar": [.7549, .3708],
            "player:Kenneth OMERUO": [.4775, .1196],
            "club:Olympique Lyonnais": [.5974, .7962],
            "player:Ahmed MUSA": [.5113, .0965],
            "club:Swansea City AFC": [.3127, .2572],
            "player:Arturo VIDAL": [.5605, .8698],
            "club:LD Alajuelense": [.3564, .7067],
            "club:San Jose Earthquakes": [.5015, .3983],
            "player:Jaimen AYOVI": [.3013, .849],
            "player:Enzo PEREZ": [.85, .5669],
            "club:CS Herediano": [.4323, .852],
            "player:Alex WILKINSON": [.8188, .6696],
            "player:Yasuhito ENDO": [.3019, .1646],
            "player:Nabil BENTALEB": [.8472, .5252],
            "club:FC Rubin Kazan": [.2239, .5731],
            "club:Fenerbahce SK": [.5505, .4853],
            "club:CSKA Moscow": [.5133, .1811],
            "club:CD Motagua": [.2119, .4176],
            "player:Clint DEMPSEY": [.8318, .3515],
            "club:FC Sion": [.7564, .5862],
            "player:HULK": [.6995, .8435],
            "player:Abdelmoumene DJABOU": [.8613, .5053],
            "player:Matt McKAY": [.827, .6435],
            "club:US Citta di Palermo": [.7696, .3718],
            "club:KSC Lokeren": [.2981, .2615],
            "player:Edder DELGADO": [.1429, .4187],
            "player:Yuto NAGATOMO": [.3735, .237],
            "player:HA Daesung": [.6932, .172],
            "player:OSCAR": [.6936, .8194],
            "player:Marcelo DIAZ": [.5384, .8417],
            "player:Rodrigo PALACIO": [.8184, .5823],
            "club:Cardiff City FC": [.6139, .5261],
            "player:Masoud SHOJAEI": [.1755, .3286],
            "player:Charles ITANDJE": [.6256, .8822],
            "club:Suwon Bluewings FC": [.6472, .2266],
            "club:Toronto FC": [.7473, .543],
            "player:Michael ESSIEN": [.1765, .5778],
            "club:Caykur Rizespor": [.3842, .221],
            "player:Faouzi GHOULAM": [.8365, .5341],
            "player:Gaston RAMIREZ": [.8186, .4076],
            "club:Cerezo Osaka": [.4929, .2825],
            "player:Daniel CAMBRONERO": [.4395, .901],
            "club:Eintracht Braunschweig": [.275, .3687],
            "player:Makoto HASEBE": [.3332, .1642],
            "club:Hertha BSC": [.6387, .6059],
            "player:Eder BALANTA": [.4955, .9083],
            "club:Sangju Sangmu FC": [.6682, .2449],
            "player:Patrick PEMBERTON": [.4142, .8732],
            "club:Middlesbrough FC": [.351, .3584],
            "club:Sunderland AFC": [.7187, .292],
            "club:Barcelona SC": [.3121, .7944],
            "club:USM Alger": [.7718, .4798],
            "club:West Bromwich Albion FC": [.7639, .4268],
            "player:Ogenyi ONAZI": [.5342, .1304],
            "player:Giovani DOS SANTOS": [.3729, .1297],
            "club:Calcio Catania": [.7739, .5566],
            "player:Andres GUARDADO": [.3843, .1258],
            "team:Brazil": [.7173, .8752],
            "club:AS Saint-Etienne": [.3091, .2767],
            "club:New York Red Bulls": [.6197, .7369],
            "club:Atalanta Bergamo": [.5212, .819],
            "player:Massimo LUONGO": [.8128, .6557],
            "club:Norwich City FC": [.4736, .1813],
            "club:Olympiacos Piraeus FC": [.4632, .8137],
            "club:Udinese Calcio": [.4934, .5329],
            "player:Medhi LACEN": [.8499, .5087],
            "team:Iran": [.1387, .3273],
            "player:Rashid SUMAILA": [.1544, .5741],
            "team:Algeria": [.8911, .5],
            "player:LEE Keunho": [.706, .1671],
            "club:VfL Wolfsburg": [.6647, .7619],
            "player:Noel VALLADARES": [.1539, .4154],
            "club:Club Africain": [.7891, .5145],
            "player:Oscar BAGUI": [.3068, .8294],
            "team:Belgium": [.8252, .7507],
            "player:Miiko ALBORNOZ": [.5575, .9075],
            "club:Everton FC": [.7408, .3646],
            "player:Gotoku SAKAI": [.2995, .1952],
            "player:HENRIQUE": [.6999, .8158],
            "player:Acquah AFRIYIE": [.1948, .5698],
            "club:Club Tijuana": [.3424, .8048],
            "player:Yaya TOURE": [.3222, .2669],
            "player:MAICON": [.6702, .802],
            "club:AS Roma": [.4768, .5206],
            "player:LEE Yong": [.6998, .1694],
            "player:Marcos URENA": [.4121, .8807],
            "player:Allan NYOM": [.649, .8527],
            "player:Konan YA": [.2477, .2202],
            "player:Diego FORLAN": [.8059, .3987],
            "club:Antalyaspor AS": [.6274, .7845],
            "player:Martin SILVA": [.857, .4412],
            "player:Mohamed ZEMMAMOUCHE": [.8549, .5032],
            "club:CS Constantine": [.7658, .4958],
            "player:Jose Maria BASANTA": [.8393, .5863],
            "player:Uche NWOFOR": [.4996, .0965],
            "player:James TROISI": [.8358, .6639],
            "player:Donis ESCOBER": [.1576, .4305],
            "player:Rahman AHMADI": [.1877, .3439],
            "player:Manabu SAITO": [.3085, .1644],
            "player:Jorge CLAROS": [.1588, .41],
            "player:Cedric DJEUGOUE": [.6292, .8695],
            "club:Sporting Covilha": [.2715, .3855],
            "club:Rosenborg BK": [.6103, .6066],
            "player:Boubacar BARRY": [.2452, .2048],
            "player:Oscar DUARTE": [.4527, .886],
            "club:West Ham United FC": [.5254, .8384],
            "player:Saphir TAIDER": [.8241, .5179],
            "club:Umm Salal SC": [.2606, .3737],
            "club:Hull City FC": [.2279, .4466],
            "player:Vincent ABOUBAKAR": [.6385, .8869],
            "player:Diego CALVO": [.4439, .9072],
            "player:Mauricio PINILLA": [.5689, .8994],
            "player:Brad GUZAN": [.8149, .3398],
            "player:Arthur BOKA": [.2532, .2385],
            "player:MARCELO": [.7053, .8294],
            "player:Jerry PALACIOS": [.1761, .4657],
            "player:Shinji OKAZAKI": [.3477, .2067],
            "player:Dario VIDOSIC": [.8338, .6441],
            "player:Victor BERNARDEZ": [.1894, .4112],
            "club:Adelaide United FC": [.7649, .6193],
            "player:Mohammed RABIU": [.1701, .6009],
            "player:Diego GODIN": [.8465, .4155],
            "player:Francisco SILVA": [.5932, .9009],
            "player:John Obi MIKEL": [.5317, .2006],
            "club:Qingdao Jonoon FC": [.2405, .4264],
            "club:FC Ashdod": [.5105, .1642],
            "player:Ebenezer ODUNLAMI": [.4995, .104],
            "player:Angel DI MARIA": [.8381, .595],
            "team:Germany": [.1387, .6727],
            "club:Besiktas JK": [.6985, .5912],
            "player:Nicolas NKOULOU": [.5961, .8601],
            "player:Austine EJIDE": [.4946, .0843],
            "club:Botafogo FR": [.7176, .6064],
            "club:Brisbane Roar FC": [.783, .6044],
            "club:FC Augsburg": [.6375, .2101],
            "player:Jose ROJAS": [.5687, .8916],
            "player:Kevin Prince BOATENG": [.184, .5741],
            "player:Fabrice OLINGA": [.6407, .8664],
            "player:Aurelien CHEDJOU": [.6286, .8244],
            "club:Stromsgodset IF": [.2124, .562],
            "player:Dany NOUNKEU": [.6482, .8429],
            "player:Walter GARGANO": [.8074, .4342],
            "team:Honduras": [.1164, .412],
            "player:Victor MOSES": [.5116, .1146],
            "player:KIM Shinwook": [.6948, .1646],
            "player:Miguel PONCE": [.3614, .1259],
            "player:Hassan YEBDA": [.8107, .5035],
            "player:Masahiko INOHA": [.312, .1577],
            "player:Benjamin MOUKANDJO": [.6306, .877],
            "player:Nabil GHILAS": [.8077, .4966],
            "player:Osman CHAVEZ": [.1652, .4119],
            "player:Faryd MONDRAGON": [.5108, .8978],
            "club:TSV 1860 Muenchen": [.3551, .2409],
            "player:Majeed WARIS": [.1982, .5766],
            "player:Yeltsin TEJEDA": [.4388, .8881],
            "club:Tigres UANL": [.4002, .1681],
            "player:Jonathan MENSAH": [.1529, .5874],
            "club:Club America": [.3672, .204],
            "player:Guillermo OCHOA": [.3947, .1458],
            "club:Atletico Mineiro": [.663, .784],
            "player:Alexandre SONG": [.653, .859],
            "club:UD Almeria": [.5246, .1697],
            "player:Mario YEPES": [.5046, .9169],
            "club:FC Internazionale": [.6733, .5841],
            "club:NEC Nijmegen": [.2325, .386],
            "player:Emmanuel EMENIKE": [.5074, .1372],
            "player:Ezequiel GARAY": [.8433, .5665],
            "player:Liassine CADAMURO": [.8533, .4957],
            "club:FC Barcelona": [.701, .7428],
            "club:FC Tokyo": [.3379, .2401],
            "player:Max GRADEL": [.2543, .2226],
            "player:Joel MATIP": [.5967, .8308],
            "player:Sylvain GBOHOUO": [.2528, .2151],
            "player:KIM Younggwon": [.6985, .1771],
            "player:Timmy CHANDLER": [.7783, .3239],
            "team:Bosnia and Herzegovina": [.7766, .8191],
            "player:Nick RIMANDO": [.8323, .336],
            "club:Villarreal CF": [.4161, .1972],
            "player:Reza HAGHIGHI": [.1707, .363],
            "player:Mark MILLIGAN": [.8254, .6702],
            "club:Atletico Nacional": [.5044, .8147],
            "team:Netherlands": [.4237, .0574],
            "player:Christian BOLANOS": [.4254, .8896],
            "player:Mehrdad POOLADI": [.1587, .3489],
            "club:Celtic FC": [.3509, .2925],
            "player:DANTE": [.7081, .7996],
            "club:Western Sydney Wanderers FC": [.7542, .6321],
            "player:Raul JIMENEZ": [.3532, .1357],
            "player:Landry NGUEMO": [.6435, .8816],
            "club:Hannover 96": [.3068, .2385],
            "player:Martin CACERES": [.8024, .4654],
            "player:Camilo VARGAS": [.4864, .8998],
            "club:Malmo FF": [.5366, .8272],
            "player:Kolo TOURE": [.2952, .2158],
            "club:CSD Cartagines": [.4409, .8249],
            "club:Real Madrid CF": [.7349, .6852],
            "club:Kuban Krasnodar": [.3223, .7041],
            "player:Brad DAVIS": [.7864, .3425],
            "player:Atsuto UCHIDA": [.3114, .2148],
            "player:Ben HALLORAN": [.7882, .634],
            "player:Daniel OPARE": [.1629, .5558],
            "player:Kyle BECKERMAN": [.8322, .3438],
            "player:Jose GIMENEZ": [.8475, .4078],
            "club:Seattle Sounders FC": [.7617, .3894],
            "club:FC Utrecht": [.7502, .6155],
            "player:Mehdi MOSTEFA": [.8252, .4769],
            "player:Victor IBARBO": [.5132, .905],
            "player:Emilio IZAGUIRRE": [.1737, .3987],
            "player:Julian GREEN": [.8134, .3726],
            "player:Emmanuel AGYEMANG BADU": [.1914, .5766],
            "player:Matthew SPIRANOVIC": [.8293, .6636],
            "club:Real Sociedad": [.5556, .7813],
            "club:Santos FC": [.5675, .8255],
            "club:Valenciennes FC": [.5124, .5373],
            "club:Watford FC": [.7284, .3508],
            "team:France": [.1748, .7507],
            "club:Yokohama F-Marinos": [.3479, .2562],
            "player:Wilson PALACIOS": [.2016, .4015],
            "player:HWANG Seokho": [.6709, .1618],
            "player:Fernando MUSLERA": [.8123, .4289],
            "player:Shusaku NISHIKAWA": [.2984, .158],
            "club:Lille OSC": [.398, .2053],
            "club:Guangzhou R&amp;F FC": [.6621, .2289],
            "player:Ezequiel LAVEZZI": [.8369, .6027],
            "club:CF Pachuca": [.3476, .7832],
            "player:HONG Jeongho": [.6834, .1612],
            "player:WILLIAN": [.691, .8122],
            "player:Hiroki SAKAI": [.2951, .1649],
            "player:Cristhian NOBOA": [.3127, .841],
            "club:Sepahan FC": [.2329, .3661],
            "player:Khosro HEYDARI": [.1705, .3476],
            "player:Ousmane DIARRASSOUBA": [.2643, .2078],
            "player:Charles ARANGUIZ": [.5627, .8879],
            "player:Maty RYAN": [.7999, .6716],
            "player:Andy NAJAR": [.1529, .4359],
            "player:Luis SUAREZ": [.789, .3892],
            "player:Mile JEDINAK": [.8225, .6633],
            "club:Mamelodi Sundowns FC": [.2265, .556],
            "player:BERNARD": [.6929, .8299],
            "player:KIM Seunggyu": [.7024, .1541],
            "player:VICTOR": [.6961, .8368],
            "club:FC Girondins Bordeaux": [.6174, .8173],
            "player:Alexander DOMINGUEZ": [.3127, .8259],
            "player:Yoichiro KAKITANI": [.3331, .172],
            "player:Marco FABIAN": [.3637, .1572],
            "player:Ruben GABRIEL": [.4999, .0884],
            "club:Nottingham Forest FC": [.555, .8158],
            "club:Toulouse FC": [.354, .4527],
            "player:Tim CAHILL": [.8064, .6737],
            "club:Vitesse Arnheim": [.2704, .6766],
            "player:Hugo CAMPAGNARO": [.8202, .5895],
            "club:Academica Coimbra": [.7747, .5097],
            "player:James HOLLAND": [.8366, .6506],
            "player:Yacine BRAHIMI": [.8414, .5212],
            "club:FC Zenit St. Petersburg": [.6512, .7695],
            "player:GERVINHO": [.275, .2465],
            "player:Marcos ROJO": [.8483, .5745],
            "club:Evian TG FC": [.2354, .5843],
            "player:Fredy GUARIN": [.532, .851],
            "club:OGC Nice": [.4991, .7984],
            "club:AC Milan": [.3052, .5511],
            "player:Adam TAGGART": [.8204, .6427],
            "player:DeAndre YEDLIN": [.8204, .3434],
            "club:Stade de Reims": [.7951, .4986],
            "player:Azubuike EGWUEKWE": [.5055, .0923],
            "player:Rony MARTINEZ": [.167, .4194],
            "player:Vincent ENYEAMA": [.4795, .1002],
            "player:Carlos CARBONERO": [.4998, .9024],
            "player:Maximo BANGUERA": [.3008, .8333],
            "player:Fabian JOHNSON": [.8316, .3592],
            "player:Keylor NAVAS": [.4187, .8905],
            "player:Maxi RODRIGUEZ": [.8441, .5809],
            "club:SV Zulte Waregem": [.6174, .7716],
            "player:FRED": [.6893, .8367],
            "club:Columbus Crew": [.4241, .8295],
            "player:Oribe PERALTA": [.3709, .1372],
            "player:Jordan AYEW": [.1569, .5812],
            "player:DAVID LUIZ": [.6842, .8128],
            "player:Juan PAREDES": [.2952, .837],
            "club:CD Universidad Catolica": [.5546, .7985],
            "club:AS Livorno": [.8279, .5612],
            "player:Oliver BOZANIC": [.8165, .6492],
            "player:Jalal HOSSEINI": [.1646, .3597],
            "player:Keisuke HONDA": [.299, .2223],
            "player:Sofiane FEGHOULI": [.8363, .5263],
            "club:Trabzonspor": [.2809, .2624],
            "player:Yasuyuki KONNO": [.2986, .1715],
            "club:Galatasaray SK": [.5622, .5137],
            "club:Konyaspor": [.5824, .7964],
            "player:Eugen GALEKOVIC": [.8395, .6575],
            "club:Gamba Osaka": [.3228, .226],
            "club:Chelsea FC": [.6358, .6894],
            "club:Foolad Khuzestan FC": [.2192, .378],
            "player:Maya YOSHIDA": [.3384, .1769],
            "player:Harrison AFFUL": [.1522, .5667],
            "team:Italy": [.1748, .2493],
            "club:Aston Villa FC": [.7307, .3774],
            "club:Swindon Town FC": [.7461, .5988],
            "player:Roger ESPINOZA": [.1697, .4432],
            "player:LEE Bumyoung": [.7073, .1594],
            "club:Stade Rennais FC": [.4102, .7078],
            "player:Giovanni SIO": [.2682, .2432],
            "player:Luis SARITAMA": [.295, .8448],
            "player:Junior DIAZ": [.4536, .8232],
            "club:1. FC Nuernberg": [.4854, .2557],
            "player:Steven BEITASHOUR": [.1644, .3444],
            "club:Borussia Dortmund": [.8301, .6226],
            "club:Melbourne Victory FC": [.7816, .6495],
            "player:Antonio VALENCIA": [.3031, .7769],
            "club:Club Nacional de Football": [.7627, .4471],
            "player:Cedric SI MOHAMMED": [.8515, .4881],
            "player:Thiago SILVA": [.7106, .8069],
            "player:PARK Jongwoo": [.6898, .1591],
            "player:Benoit ASSOU EKOTTO": [.6403, .8337],
            "club:FC Kobenhavn": [.4335, .8092],
            "club:Ulsan Hyundai FC": [.6806, .2241],
            "club:SC Heracles Almelo": [.7688, .6361],
            "club:Deportivo Toluca FC": [.3855, .1859],
            "player:Jermaine JONES": [.8191, .3683],
            "club:TSG 1899 Hoffenheim": [.7604, .4092],
            "player:Diego REYES": [.4082, .1825],
            "player:Pejman MONTAZERI": [.1875, .336],
            "club:Orlando Pirates": [.2407, .5501],
            "player:Samuel INKOOM": [.1637, .5821],
            "player:Edison MENDEZ": [.3193, .8398],
            "player:Graham ZUSI": [.8264, .3398],
            "player:Shuichi GONDA": [.3121, .1711],
            "club:Queens Park Rangers FC": [.6431, .5172],
            "club:Cercle Brugge": [.4878, .1868],
            "player:Rafik HALLICHE": [.8597, .4978],
            "player:Michael BARRANTES": [.432, .8887],
            "club:Wigan Athletic FC": [.3193, .574],
            "player:Asamoah GYAN": [.1612, .5749],
            "club:Naft Tehran FC": [.2381, .3472],
            "player:Edinson CAVANI": [.8334, .4599],
            "player:HAN Kookyoung": [.6882, .1667],
            "player:KWAK Taehwi": [.6736, .1984],
            "club:Southampton FC": [.5652, .323],
            "club:SC Heerenveen": [.502, .1926],
            "player:Shola AMEOBI": [.4819, .0929],
            "player:Pablo ARMERO": [.509, .9109],
            "player:Salomon KALOU": [.2697, .2032],
            "club:Bolton Wanderers FC": [.6532, .2428],
            "player:Boniek GARCIA": [.1955, .4147],
            "club:Al Hilal FC": [.4992, .4896],
            "player:Samuel ETOO": [.6386, .8471],
            "player:Alvaro PEREIRA": [.8458, .4232],
            "player:Carlos CARMONA": [.5629, .8955],
            "club:Club Libertad": [.7511, .436],
            "team:Argentina": [.8836, .588],
            "player:Walter AYOVI": [.3068, .845],
            "player:David OSPINA": [.4974, .895],
            "club:Esteghlal Tehran FC": [.2124, .3556],
            "player:Alvaro GONZALEZ": [.8296, .4114],
            "player:MAXWELL": [.7039, .8057],
            "player:Gonzalo JARA": [.563, .9034],
            "player:Chris WONDOLOWSKI": [.7922, .3464],
            "player:Wilfried BONY": [.2565, .2021],
            "club:Eintracht Frankfurt": [.2919, .2776],
            "player:Jose CORONA": [.3587, .1519],
            "player:Bryan RUIZ": [.4373, .9087],
            "club:RCD Mallorca": [.7806, .4938],
            "club:FC Porto": [.5754, .4872],
            "club:Houston Dynamo": [.4823, .395],
            "club:FC Bayern Muenchen": [.7217, .573],
            "club:Bologna FC": [.776, .4553],
            "player:RAMIRES": [.6868, .8199],
            "player:Fernando GAGO": [.8412, .5739],
            "player:Carlo COSTLY": [.1492, .4208],
            "club:FC Dynamo Moscow": [.3622, .7727],
            "player:Ismael TIOTE": [.2655, .197],
            "club:Coton Sport FC": [.6145, .7975],
            "player:Alireza JAHAN BAKHSH": [.1818, .3405],
            "player:Islam SLIMANI": [.8419, .499],
            "club:Leicester City FC": [.7872, .4782],
            "player:Rais MBOLHI": [.8468, .4936],
            "player:Santiago ARIAS": [.4931, .901],
            "club:Olympique Marseille": [.4017, .6877],
            "club:New England Revolution": [.2427, .4441],
            "player:Enner VALENCIA": [.3066, .8372],
            "team:England": [.2234, .8191],
            "club:PSV Eindhoven": [.4786, .8586],
            "club:FC Schalke 04": [.3828, .5348],
            "player:Lucas BIGLIA": [.8305, .547],
            "player:Enoh EYONG": [.6421, .874],
            "player:Cristhian STUANI": [.8131, .403],
            "player:Paul AGUILAR": [.3643, .1392],
            "club:Club Universidad de Chile": [.5696, .8454],
            "player:Miguel LAYUN": [.3596, .1335],
            "club:SL Benfica": [.7853, .5361],
            "club:CD Olimpia": [.2078, .4432],
            "player:Tommy OAR": [.8262, .6567],
            "player:Egidio AREVALO": [.8154, .4459],
            "player:Ejike UZOENYI": [.5053, .1001],
            "club:CA Newells Old Boys": [.7673, .5722],
            "club:Palmeiras": [.5681, .791],
            "player:Adrian BONE": [.2948, .8292],
            "player:Abel HERNANDEZ": [.8412, .4106],
            "player:Ahmad ALNAMEH": [.164, .3367],
            "player:Okechukwu UCHEBO": [.4886, .0879],
            "player:Reza GHOOCHANNEJAD": [.1814, .3329],
            "club:Stabaek IF": [.2991, .2929],
            "player:Mitch LANGERAK": [.8323, .6706],
            "player:El Arabi SOUDANI": [.8435, .5066],
            "club:Puebla FC": [.7473, .4006],
            "player:Juan QUINTERO": [.5132, .8338],
            "club:RSC Anderlecht": [.2343, .4623],
            "player:Michael BABATUNDE": [.494, .0921],
            "player:Souleymane BAMBA": [.2514, .2074],
            "player:Masato MORISHIGE": [.3053, .1714],
            "club:Fluminense FC": [.6522, .7522],
            "club:FC Volyn Lutsk": [.4765, .1983],
            "club:FC Nantes": [.7448, .3835],
            "player:Carlos SALCIDO": [.3681, .1244],
            "player:Madjid BOUGUERRA": [.8484, .5011],
            "player:Francisco RODRIGUEZ": [.3662, .1316],
            "club:Shakhtar Donetsk": [.6387, .7597],
            "team:Russia": [.6497, .0831],
            "player:Jose FUENZALIDA": [.5747, .8877],
            "club:Guangzhou Evergrande FC": [.6591, .2588],
            "player:Adrian RAMOS": [.521, .8732],
            "player:PARK Jooho": [.6716, .208],
            "player:Jason DAVIDSON": [.8194, .6562],
            "club:Juventus FC": [.5296, .6741],
            "player:Tim HOWARD": [.8261, .3473],
            "team:Japan": [.2827, .1248],
            "club:FC Luzern": [.7315, .5946],
            "player:SON Heungmin": [.6754, .1561],
            "player:Segundo CASTILLO": [.3282, .7992],
            "player:Eiji KAWASHIMA": [.2945, .1893],
            "club:Getafe CF": [.7568, .4819],
            "player:Joao ROJAS": [.3096, .7745],
            "player:JEFFERSON": [.6976, .8085],
            "player:Oscar GRANADOS": [.4265, .9032],
            "team:Ivory Coast": [.2234, .1809],
            "club:SC Internacional": [.5419, .7881],
            "player:Sergio AGUERO": [.8165, .5677],
            "player:Djamel MESBAH": [.8629, .513],
            "player:Juan Carlos GARCIA": [.1746, .4486],
            "club:CA San Lorenzo de Almagro": [.4947, .828],
            "player:Ismael DIOMANDE": [.2593, .2174],
            "player:JUNG Sungryong": [.6916, .1513],
            "player:KIM Changsoo": [.6959, .1568],
            "player:Loic FEUDJOU": [.6342, .8642],
            "player:Ivan FRANJIC": [.831, .637],
            "club:Fethiyespor": [.603, .8123],
            "player:Henri BEDIMO": [.6371, .8792],
            "club:Enugu Rangers FC": [.4955, .1542],
            "player:Aron JOHANNSSON": [.8207, .3357],
            "club:CA Monarcas Morelia": [.5624, .6136],
            "player:FERNANDINHO": [.6967, .7897],
            "player:Jefferson MONTERO": [.3343, .8192],
            "team:Chile": [.5763, .9426],
            "player:Kwadwo ASAMOAH": [.2121, .5996],
            "player:Christian ATSU": [.1636, .5967],
            "player:Omar GONZALEZ": [.8146, .3475],
            "player:Pablo ZABALETA": [.8195, .5745],
            "player:Javad NEKOUNAM": [.1816, .3251],
            "player:Eduardo VARGAS": [.5877, .8743],
            "club:ACF Fiorentina": [.4895, .8117],
            "team:Croatia": [.3503, .9169],
            "player:Alan PULIDO": [.3762, .1148],
            "team:Switzerland": [.8252, .2493],
            "club:Al Ain FC": [.238, .5672],
            "club:RCD Espanyol": [.5877, .3046],
            "player:Constant DJAKPA": [.2578, .2098],
            "player:Jean BEAUSEJOUR": [.5297, .8584],
            "club:CR Vasco da Gama": [.7968, .4521],
            "player:Hossein MAHINI": [.1647, .3519],
            "player:Joseph YOBO": [.488, .0959],
            "team:Uruguay": [.8837, .4118],
            "club:Sporting CP": [.8039, .5247],
            "player:Dani ALVES": [.699, .8266],
            "club:Fulham FC": [.2557, .4079],
            "player:Randall BRENES": [.4306, .9095],
            "player:LUIZ GUSTAVO": [.7028, .8366],
            "club:GNK Dinamo Zagreb": [.7508, .4979],
            "player:Isaac BRIZUELA": [.3697, .1168],
            "team:USA": [.8613, .3273],
            "player:Juan MONTES": [.1523, .4078],
            "club:Kashiwa Reysol": [.6567, .21],
            "player:Javier HERNANDEZ": [.3566, .1593],
            "player:Efe AMBROSE": [.4773, .1118],
            "club:CSKA Sofia": [.7597, .5118],
            "player:Aissa MANDI": [.8564, .5108],
            "club:FSV Mainz 05": [.5496, .4572],
            "player:Carl MEDJANI": [.8163, .5078],
            "club:Paris Saint-Germain FC": [.724, .6473],
            "player:JI Dongwon": [.685, .1535],
            "club:AS Monaco": [.6507, .7125],
            "player:Luis GARRIDO": [.1623, .425],
            "club:Los Angeles Galaxy": [.7332, .3946],
            "player:Jean Daniel AKPA": [.2619, .2403],
            "player:Jean MAKOUN": [.5987, .8673],
            "player:Jozy ALTIDORE": [.8152, .3311],
            "player:Mariano ANDUJAR": [.8508, .5818],
            "club:Sevilla FC": [.5393, .8076],
            "player:Daniel DAVARI": [.1824, .3555],
            "player:Ramon AZEEZ": [.5058, .0845],
            "player:Peter ODEMWINGIE": [.4988, .1199],
            "player:Michael BRADLEY": [.8268, .3881],
            "player:Alejandro BEDOYA": [.8201, .3514],
            "club:Stoke City FC": [.4936, .3137],
            "club:UD Las Palmas": [.2496, .3618],
            "player:Hector MORENO": [.3947, .138],
            "player:Jorge FUCILE": [.8018, .4386],
            "player:Jerry BENGTSON": [.1604, .4175],
            "club:Newcastle United FC": [.3815, .162],
            "club:CSD Colo-Colo": [.5523, .8353],
            "player:Rodrigo MUNOZ": [.8361, .4242],
            "player:Mario MARTINEZ": [.1511, .4283]
        },
        5: {
            "club:Cagliari Calcio": [.537, .8303],
            "player:Mats HUMMELS": [.1843, .6518],
            "player:Steven GERRARD": [.2809, .7644],
            "player:Jack WILSHERE": [.2607, .7672],
            "player:Shinji KAGAWA": [.3331, .2319],
            "player:JUANFRAN": [.7653, .2411],
            "team:Cameroon": [.6497, .917],
            "player:Ricardo RODRIGUEZ": [.7651, .3229],
            "club:Manchester United FC": [.4524, .504],
            "player:Carlos GRUEZO": [.3362, .7419],
            "club:Borussia Moenchengladbach": [.4848, .4715],
            "player:Xabi ALONSO": [.7115, .2503],
            "player:PAULINHO": [.6941, .8144],
            "player:KOO Jacheol": [.6687, .2192],
            "player:Maynor FIGUEROA": [.19, .4689],
            "player:Phil JONES": [.2857, .7381],
            "player:Sime VRSALJKO": [.3443, .8284],
            "club:Liverpool FC": [.4131, .6051],
            "club:Tottenham Hotspur FC": [.6622, .6828],
            "player:Juan CUADRADO": [.4766, .8721],
            "club:Hamburger SV": [.732, .3412],
            "player:Ron VLAAR": [.4581, .1181],
            "team:South Korea": [.7173, .1247],
            "player:Juan MATA": [.6943, .264],
            "player:Mario GOETZE": [.2169, .6449],
            "player:Ron-Robert ZIELER": [.1804, .6127],
            "player:Mesut OEZIL": [.2028, .6626],
            "player:Riyad MAHREZ": [.8523, .498],
            "player:Tim KRUL": [.4049, .1645],
            "club:Arsenal FC": [.3419, .6469],
            "club:Valencia CF": [.6505, .3907],
            "player:PEPE": [.5608, .1664],
            "player:Alessio CERCI": [.2038, .2797],
            "player:Panagiotis TACHTSIDIS": [.156, .4707],
            "player:Ricardo ALVAREZ": [.817, .5913],
            "player:Antoine GRIEZMANN": [.2505, .7143],
            "player:Jordan HENDERSON": [.2769, .7581],
            "player:Carlos BACCA": [.5025, .8651],
            "player:Jerome BOATENG": [.2206, .6384],
            "player:John BROOKS": [.8015, .385],
            "player:Leighton BAINES": [.2953, .7791],
            "player:Diego PEREZ": [.7788, .4275],
            "player:Raheem STERLING": [.273, .7517],
            "team:Portugal": [.5763, .0573],
            "player:Rickie LAMBERT": [.2674, .7663],
            "player:Alexis SANCHEZ": [.617, .7766],
            "player:Joe HART": [.3257, .7521],
            "club:Bayer 04 Leverkusen": [.5946, .3859],
            "player:HERNANES": [.6915, .7981],
            "team:Costa Rica": [.4237, .9427],
            "player:Cristian RODRIGUEZ": [.8368, .4091],
            "team:Nigeria": [.5, .0486],
            "player:Nigel DE JONG": [.3972, .1591],
            "player:Olivier GIROUD": [.2256, .7153],
            "team:Ecuador": [.2827, .8753],
            "player:Ante REBIC": [.3628, .8476],
            "team:Australia": [.8614, .6727],
            "player:Bastian SCHWEINSTEIGER": [.2547, .6258],
            "player:Ioannis FETFATZIDIS": [.1619, .508],
            "player:Juan ZUNIGA": [.5433, .8146],
            "player:Sokratis PAPASTATHOPOULOS": [.1711, .5239],
            "player:Gianluigi BUFFON": [.2405, .3062],
            "player:Mattia PERIN": [.1985, .3104],
            "player:Andrea BARZAGLI": [.2337, .3072],
            "player:SAMMIR": [.396, .8537],
            "player:Edin DZEKO": [.7265, .7484],
            "player:Fabian ORELLANA": [.5888, .8761],
            "team:Colombia": [.5, .9514],
            "player:Xavi HERNANDEZ": [.745, .2653],
            "player:Vasileios TOROSIDIS": [.194, .504],
            "player:Ivan PERISIC": [.4108, .8198],
            "player:Stephane MBIA": [.6127, .8389],
            "player:Miroslav KLOSE": [.238, .6155],
            "club:Celta Vigo": [.6792, .7037],
            "player:Andrea PIRLO": [.2364, .3],
            "player:Adnan JANUZAJ": [.73, .6846],
            "club:SS Lazio": [.5627, .4364],
            "player:Cristian ZAPATA": [.4524, .7997],
            "player:Eric CHOUPO MOTING": [.6197, .7981],
            "player:NEYMAR": [.7091, .7399],
            "player:Jan VERTONGHEN": [.777, .724],
            "club:SC Freiburg": [.6089, .4988],
            "player:Mauricio ISLA": [.5239, .8104],
            "club:Atletico Madrid": [.7651, .3908],
            "player:Mamadou SAKHO": [.2437, .7062],
            "club:Levante UD": [.3146, .657],
            "player:Claudio BRAVO": [.5608, .854],
            "player:Martin DEMICHELIS": [.8005, .5824],
            "club:SSC Napoli": [.6832, .4734],
            "player:Xherdan SHAQIRI": [.7175, .3376],
            "player:YUN Sukyoung": [.6904, .2156],
            "player:Sulley MUNTARI": [.1781, .5377],
            "team:Mexico": [.3503, .083],
            "club:VfB Stuttgart": [.4203, .4884],
            "player:Per MERTESACKER": [.1979, .6571],
            "team:Greece": [.1088, .5],
            "player:Federico FERNANDEZ": [.8218, .5516],
            "player:Stephan LICHTSTEINER": [.7024, .3085],
            "player:Hiroshi KIYOTAKE": [.3472, .1698],
            "club:Granada CF": [.54, .6064],
            "team:Ghana": [.1163, .5881],
            "club:Parma FC": [.3474, .3799],
            "player:Romelu LUKAKU": [.7486, .7265],
            "player:Javier MASCHERANO": [.8231, .5669],
            "player:Lionel MESSI": [.8049, .5613],
            "player:Augusto FERNANDEZ": [.8292, .6008],
            "player:Geoff CAMERON": [.7784, .353],
            "player:Sergio BUSQUETS": [.7516, .267],
            "team:Spain": [.7766, .1808],
            "player:Asmir BEGOVIC": [.7209, .7229],
            "player:David SILVA": [.72, .3161],
            "club:Manchester City FC": [.6223, .586],
            "player:Gabriel PALETTA": [.228, .2842],
            "player:Claudio MARCHISIO": [.2353, .3148],
            "player:Gonzalo HIGUAIN": [.8236, .5591],
            "club:Swansea City AFC": [.3888, .1935],
            "player:Arturo VIDAL": [.523, .8027],
            "club:Torino FC": [.2316, .3553],
            "player:Andres INIESTA": [.7489, .2803],
            "player:Nabil BENTALEB": [.8212, .5394],
            "player:Julian DRAXLER": [.2102, .6309],
            "player:Yuto NAGATOMO": [.3757, .2523],
            "player:Patrice EVRA": [.2538, .6825],
            "player:Giorgio CHIELLINI": [.2297, .3009],
            "player:OSCAR": [.6755, .8012],
            "player:Cesc FABREGAS": [.7423, .2785],
            "player:Rodrigo PALACIO": [.8103, .5908],
            "player:Mensur MUJDZA": [.729, .7398],
            "player:Klaas Jan HUNTELAAR": [.4196, .1883],
            "player:Michael ESSIEN": [.1846, .5353],
            "player:Faouzi GHOULAM": [.8209, .4939],
            "player:Gaston RAMIREZ": [.7557, .4624],
            "player:Dejan LOVREN": [.3634, .8321],
            "club:Eintracht Braunschweig": [.4966, .5756],
            "player:Makoto HASEBE": [.3494, .1772],
            "player:Frank LAMPARD": [.3164, .7621],
            "club:Hertha BSC": [.6239, .619],
            "player:James MILNER": [.3194, .7551],
            "player:Marouane FELLAINI": [.7233, .6832],
            "player:Ciro IMMOBILE": [.2019, .2872],
            "player:Kevin DE BRUYNE": [.762, .6941],
            "player:Ogenyi ONAZI": [.5155, .1718],
            "club:Calcio Catania": [.765, .561],
            "player:Andres GUARDADO": [.4157, .1804],
            "team:Brazil": [.7173, .8753],
            "player:Panagiotis KONE": [.1835, .4928],
            "club:Atalanta Bergamo": [.5176, .8305],
            "club:Udinese Calcio": [.5041, .5347],
            "player:Medhi LACEN": [.8209, .5256],
            "team:Iran": [.1386, .3273],
            "team:Algeria": [.8912, .5],
            "player:Diego BENAGLIO": [.7606, .3288],
            "club:VfL Wolfsburg": [.6084, .5488],
            "team:Belgium": [.8253, .7508],
            "club:Everton FC": [.5265, .6823],
            "player:Gotoku SAKAI": [.3218, .2161],
            "player:HENRIQUE": [.6987, .7653],
            "player:Acquah AFRIYIE": [.1913, .5357],
            "player:Yaya TOURE": [.329, .2899],
            "player:MAICON": [.6463, .7835],
            "club:AS Roma": [.4188, .5193],
            "player:Alberto AQUILANI": [.2268, .3347],
            "player:Gerard PIQUE": [.7535, .2746],
            "player:Allan NYOM": [.6196, .8322],
            "player:Konan YA": [.2501, .236],
            "player:BETO": [.5637, .1949],
            "player:Vedad IBISEVIC": [.6905, .7431],
            "player:Joao PEREIRA": [.5853, .154],
            "player:Vangelis MORAS": [.1517, .5001],
            "player:Saphir TAIDER": [.8131, .5262],
            "player:Hugo LLORIS": [.2896, .7238],
            "player:Santi CAZORLA": [.6719, .2956],
            "club:Hull City FC": [.3064, .6338],
            "player:Mauricio PINILLA": [.5665, .8923],
            "player:Brad GUZAN": [.7967, .3277],
            "player:Bacary SAGNA": [.2321, .7175],
            "player:Arthur BOKA": [.2781, .2601],
            "player:Senad LULIC": [.7149, .7192],
            "player:MARCELO": [.6631, .7557],
            "player:Marco PAROLO": [.222, .2878],
            "player:Shinji OKAZAKI": [.3499, .2163],
            "player:Ricardo COSTA": [.5897, .1481],
            "player:NANI": [.5432, .1851],
            "player:Diego GODIN": [.8352, .4167],
            "player:John Obi MIKEL": [.5173, .2249],
            "player:Christoph KRAMER": [.2057, .6368],
            "player:Angel DI MARIA": [.7841, .5493],
            "team:Germany": [.1386, .6727],
            "player:Vincent KOMPANY": [.7629, .7019],
            "player:Pepe REINA": [.7384, .2635],
            "player:Granit XHAKA": [.7564, .2964],
            "club:FC Augsburg": [.5942, .1934],
            "player:Erik DURM": [.1959, .6496],
            "player:Kevin Prince BOATENG": [.2038, .5684],
            "player:Toby ALDERWEIRELD": [.7978, .6596],
            "player:Walter GARGANO": [.7541, .4146],
            "player:Shkodran MUSTAFI": [.1765, .6523],
            "team:Honduras": [.1163, .4119],
            "player:Victor MOSES": [.4782, .2117],
            "player:Hassan YEBDA": [.8069, .5056],
            "player:Phil JAGIELKA": [.2968, .7714],
            "player:Gelson FERNANDES": [.7678, .3134],
            "player:Dries MERTENS": [.775, .6748],
            "player:Alexandre SONG": [.6565, .7937],
            "player:Mario YEPES": [.5012, .9003],
            "club:FC Internazionale": [.6502, .6127],
            "player:Antonio CASSANO": [.2277, .292],
            "club:FC Barcelona": [.7075, .5127],
            "player:Joel MATIP": [.5811, .8061],
            "player:Timmy CHANDLER": [.7755, .3249],
            "team:Bosnia and Herzegovina": [.7766, .8192],
            "team:Netherlands": [.4237, .0573],
            "player:Ivan RAKITIC": [.3908, .8416],
            "club:Genoa CFC": [.271, .543],
            "player:DANTE": [.6382, .7817],
            "player:Paul VERHAEGH": [.4601, .1107],
            "club:Hannover 96": [.2756, .3696],
            "player:Martin CACERES": [.7457, .4287],
            "player:Fabio COENTRAO": [.5604, .1742],
            "player:Kolo TOURE": [.2822, .2965],
            "club:Real Madrid CF": [.5258, .4352],
            "player:Moussa DEMBELE": [.7724, .7182],
            "player:Michel VORM": [.4207, .1086],
            "player:Atsuto UCHIDA": [.3184, .2373],
            "player:Thomas VERMAELEN": [.7039, .7152],
            "player:Loic REMY": [.2216, .6768],
            "player:Jose GIMENEZ": [.8303, .4113],
            "player:Lorenzo INSIGNE": [.2998, .3098],
            "player:Victor IBARBO": [.5079, .8991],
            "player:Julian GREEN": [.7328, .3945],
            "player:Emmanuel AGYEMANG BADU": [.2064, .5756],
            "club:Real Sociedad": [.5182, .614],
            "team:France": [.1747, .7508],
            "player:Ignazio ABATE": [.2217, .2956],
            "player:Wilson PALACIOS": [.2643, .4172],
            "player:Adam LALLANA": [.2741, .7653],
            "player:Valon BEHRAMI": [.7796, .3134],
            "player:HONG Jeongho": [.6773, .1677],
            "player:WILLIAN": [.673, .7939],
            "player:Hiroki SAKAI": [.2953, .1934],
            "player:Ross BARKLEY": [.3018, .7767],
            "player:Antonio CANDREVA": [.2697, .3002],
            "player:Arjen ROBBEN": [.4278, .2026],
            "player:Luis SUAREZ": [.721, .471],
            "player:Mateo KOVACIC": [.4235, .8288],
            "player:Daniele DE ROSSI": [.2394, .321],
            "player:Lazaros CHRISTODOULOPOULOS": [.1888, .4976],
            "player:Tranquillo BARNETTA": [.7598, .2717],
            "player:David VILLA": [.7542, .2455],
            "player:Johan DJOUROU": [.7919, .2773],
            "player:Hugo CAMPAGNARO": [.814, .5842],
            "player:Yacine BRAHIMI": [.8055, .5195],
            "player:GERVINHO": [.28, .2701],
            "player:Diego COSTA": [.7586, .2396],
            "player:Fredy GUARIN": [.5352, .8477],
            "club:AC Milan": [.2914, .3989],
            "player:Fabian JOHNSON": [.8167, .3779],
            "player:Keylor NAVAS": [.4059, .8408],
            "player:DAVID LUIZ": [.6663, .7928],
            "club:AS Livorno": [.7652, .5061],
            "player:Keisuke HONDA": [.2974, .2083],
            "player:Sofiane FEGHOULI": [.8187, .4777],
            "player:Danny WELBECK": [.2857, .7302],
            "player:David DE GEA": [.6908, .2707],
            "club:Chelsea FC": [.5667, .6265],
            "player:Chris SMALLING": [.2916, .7341],
            "player:Maya YOSHIDA": [.315, .2572],
            "player:Morgan SCHNEIDERLIN": [.2374, .709],
            "team:Italy": [.1747, .2492],
            "player:Wayne ROONEY": [.3077, .7063],
            "club:Aston Villa FC": [.6082, .2647],
            "player:Philipp LAHM": [.2176, .6314],
            "player:Ivica OLIC": [.4154, .814],
            "player:Manuel NEUER": [.2244, .6318],
            "player:Cesar AZPILICUETA": [.7136, .2957],
            "club:Hellas Verona FC": [.2301, .5001],
            "player:Eden HAZARD": [.7494, .7098],
            "player:Junior DIAZ": [.4646, .7745],
            "club:1. FC Nuernberg": [.551, .2651],
            "player:Philippe SENDEROS": [.7719, .2918],
            "club:Borussia Dortmund": [.2887, .6131],
            "player:Simon MIGNOLET": [.7195, .7067],
            "player:Antonio VALENCIA": [.3527, .7287],
            "player:Sergio RAMOS": [.7081, .2571],
            "player:Pedro RODRIGUEZ": [.7403, .271],
            "player:Laurent KOSCIELNY": [.2306, .7099],
            "player:Benoit ASSOU EKOTTO": [.6385, .8227],
            "club:TSG 1899 Hoffenheim": [.7422, .5573],
            "player:Leonardo BONUCCI": [.2421, .3138],
            "club:Queens Park Rangers FC": [.6402, .5169],
            "player:Kevin GROSSKREUTZ": [.1906, .6545],
            "player:Mattia DE SCIGLIO": [.215, .2948],
            "player:Miralem PJANIC": [.6864, .7369],
            "player:Loukas VYNTRA": [.1645, .526],
            "player:Orestis KARNEZIS": [.2108, .5196],
            "club:Southampton FC": [.3731, .6284],
            "player:Shola AMEOBI": [.4572, .1712],
            "player:Alex OXLADE CHAMBERLAIN": [.2634, .7599],
            "player:Samuel ETOO": [.6203, .8196],
            "player:Matthias GINTER": [.2373, .6346],
            "player:Carlos CARMONA": [.5597, .8927],
            "team:Argentina": [.8837, .5881],
            "player:Alvaro GONZALEZ": [.7914, .4223],
            "player:Nikica JELAVIC": [.3531, .846],
            "club:UC Sampdoria": [.25, .5977],
            "player:Wilfried BONY": [.2729, .2046],
            "club:Eintracht Frankfurt": [.5212, .2825],
            "player:Paul POGBA": [.2438, .6595],
            "player:Haris SEFEROVIC": [.7546, .3253],
            "club:FC Bayern Muenchen": [.4254, .5601],
            "club:Bologna FC": [.3996, .4741],
            "player:Fernando TORRES": [.7202, .2943],
            "player:RAMIRES": [.6688, .8001],
            "player:Jordi ALBA": [.7469, .2727],
            "player:Sead KOLASINAC": [.676, .7394],
            "player:Ismael TIOTE": [.2617, .2584],
            "club:Leicester City FC": [.776, .4941],
            "player:Nacer CHADLI": [.7703, .7256],
            "player:CRISTIANO RONALDO": [.5524, .2123],
            "team:England": [.2234, .8192],
            "player:Daniel STURRIDGE": [.2837, .7573],
            "player:Andre SCHUERRLE": [.2594, .6473],
            "club:FC Schalke 04": [.3888, .5396],
            "player:Javi MARTINEZ": [.6843, .2824],
            "player:Lucas BIGLIA": [.7906, .5472],
            "player:Cristhian STUANI": [.8126, .4021],
            "player:Iker CASILLAS": [.7046, .2504],
            "player:Admir MEHMEDI": [.7639, .307],
            "player:Mitch LANGERAK": [.6163, .6357],
            "player:Robin VAN PERSIE": [.4364, .2271],
            "player:Thibaut COURTOIS": [.7911, .6591],
            "player:Thomas MUELLER": [.2238, .6453],
            "player:Lukas PODOLSKI": [.2044, .6549],
            "player:Mario BALOTELLI": [.2165, .3165],
            "player:Blerim DZEMAILI": [.7737, .3173],
            "team:Russia": [.6497, .083],
            "player:Karim BENZEMA": [.2735, .6659],
            "player:Adrian RAMOS": [.5206, .8671],
            "player:PARK Jooho": [.6652, .2259],
            "club:Juventus FC": [.3685, .4657],
            "player:Tim HOWARD": [.7671, .4176],
            "team:Japan": [.2827, .1247],
            "player:SON Heungmin": [.6798, .1992],
            "player:KOKE": [.7608, .247],
            "club:Getafe CF": [.5927, .6606],
            "team:Ivory Coast": [.2234, .1808],
            "player:Sergio AGUERO": [.8074, .5828],
            "player:Djamel MESBAH": [.8467, .5024],
            "player:FERNANDINHO": [.6847, .791],
            "team:Chile": [.5763, .9427],
            "player:Kwadwo ASAMOAH": [.2021, .5517],
            "player:Mathieu DEBUCHY": [.2202, .6691],
            "player:Pablo ZABALETA": [.8036, .5893],
            "player:Luke SHAW": [.2701, .7589],
            "player:Helder POSTIGA": [.5693, .1671],
            "player:Eduardo VARGAS": [.5873, .8027],
            "club:ACF Fiorentina": [.3733, .6602],
            "team:Croatia": [.3503, .917],
            "team:Switzerland": [.8253, .2492],
            "club:RCD Espanyol": [.5936, .3131],
            "player:Constant DJAKPA": [.2895, .2184],
            "team:Uruguay": [.8837, .4119],
            "player:Dani ALVES": [.7043, .771],
            "player:Ermin BICAKCIC": [.7163, .7612],
            "player:Glen JOHNSON": [.2797, .751],
            "player:Roman WEIDENFELLER": [.1895, .6468],
            "player:LUIZ GUSTAVO": [.6825, .7837],
            "team:USA": [.8614, .3273],
            "player:Matteo DARMIAN": [.2085, .2853],
            "player:Javier HERNANDEZ": [.3888, .2301],
            "player:Kevin MIRALLAS": [.7438, .721],
            "club:FSV Mainz 05": [.5474, .4664],
            "player:Daniel VAN BUYTEN": [.717, .6946],
            "player:JI Dongwon": [.6787, .1601],
            "player:Sejad SALIHOVIC": [.7536, .7558],
            "player:Benedikt HOEWEDES": [.2123, .6383],
            "player:Josip DRMIC": [.7579, .2642],
            "player:Emir SPAHIC": [.7284, .7236],
            "player:Moussa SISSOKO": [.2267, .6715],
            "player:Sami KHEDIRA": [.2422, .6094],
            "player:Raul ALBIOL": [.7431, .2577],
            "player:Gary CAHILL": [.3101, .7593],
            "player:Mariano ANDUJAR": [.843, .5788],
            "player:Raphael VARANE": [.267, .6682],
            "player:Gokhan INLER": [.7737, .3095],
            "club:Sevilla FC": [.5128, .6542],
            "player:Daniel DAVARI": [.2752, .4168],
            "player:Mario MANDZUKIC": [.376, .8109],
            "player:Peter ODEMWINGIE": [.5113, .1548],
            "player:Luka MODRIC": [.3986, .7847],
            "club:Stoke City FC": [.5524, .4051],
            "player:Hector MORENO": [.4102, .1596],
            "player:Jonathan DE GUZMAN": [.4232, .1158],
            "player:VIEIRINHA": [.5775, .1933],
            "club:Newcastle United FC": [.3202, .4416],
            "player:Toni KROOS": [.2275, .6388]
        },
        6: {
            "club:Cagliari Calcio": [.543, .8382],
            "player:Mats HUMMELS": [.1887, .6528],
            "player:Godfrey OBOABONA": [.4797, .1012],
            "player:Steven GERRARD": [.278, .7656],
            "player:Jack WILSHERE": [.2603, .7672],
            "club:Independiente Santa Fe": [.4214, .8067],
            "player:Shinji KAGAWA": [.3325, .2314],
            "player:Andre AYEW": [.1798, .6035],
            "player:Jackson MARTINEZ": [.5098, .8346],
            "player:JUANFRAN": [.7636, .2409],
            "team:Cameroon": [.6497, .9169],
            "player:Ricardo RODRIGUEZ": [.7644, .3227],
            "club:Manchester United FC": [.4576, .5189],
            "player:Eliaquim MANGALA": [.2677, .6884],
            "player:Carlos GRUEZO": [.3215, .7735],
            "player:Konstantinos MITROGLOU": [.1475, .4924],
            "club:Borussia Moenchengladbach": [.4856, .4688],
            "player:Xabi ALONSO": [.7112, .2493],
            "player:PAULINHO": [.6946, .8157],
            "player:KOO Jacheol": [.6716, .2122],
            "player:Maynor FIGUEROA": [.1678, .4536],
            "player:Phil JONES": [.2858, .7404],
            "player:Maximiliano PEREIRA": [.8289, .4067],
            "player:Sime VRSALJKO": [.3446, .8326],
            "player:Serge AURIER": [.2585, .2421],
            "club:Liverpool FC": [.4234, .6101],
            "club:FC Basel": [.5659, .3707],
            "club:Tottenham Hotspur FC": [.6623, .6826],
            "player:JULIO CESAR": [.7096, .8032],
            "player:Abel AGUILAR": [.4748, .8425],
            "player:Juan CUADRADO": [.478, .8761],
            "player:Ron VLAAR": [.4569, .116],
            "team:South Korea": [.7173, .1248],
            "player:Juan MATA": [.6956, .2672],
            "player:Sergio ROMERO": [.8076, .5867],
            "player:Mario GOETZE": [.2127, .6451],
            "player:Joel CAMPBELL": [.3932, .8452],
            "player:Ron-Robert ZIELER": [.1806, .6124],
            "player:Mesut OEZIL": [.205, .6615],
            "player:Andreas SAMARIS": [.1551, .5123],
            "player:Tim KRUL": [.4066, .1576],
            "club:Club Brugge KV": [.595, .7293],
            "club:Arsenal FC": [.3408, .6478],
            "club:Valencia CF": [.6495, .3952],
            "player:Nicolas LODEIRO": [.8391, .4468],
            "player:PEPE": [.5625, .1659],
            "player:Alessio CERCI": [.204, .2796],
            "player:Hotaru YAMAGUCHI": [.3323, .1703],
            "player:Panagiotis TACHTSIDIS": [.1536, .4725],
            "player:Ricardo ALVAREZ": [.8185, .592],
            "player:John BOYE": [.1847, .5981],
            "player:Gary MEDEL": [.5778, .8544],
            "player:Antoine GRIEZMANN": [.2482, .7155],
            "player:Jordan HENDERSON": [.2827, .7602],
            "player:Carlos BACCA": [.5021, .8694],
            "player:Jerome BOATENG": [.2152, .6379],
            "player:John BROOKS": [.8043, .3742],
            "player:KIM Bokyung": [.6868, .2102],
            "player:Leighton BAINES": [.2955, .7787],
            "player:Diego PEREZ": [.7837, .4243],
            "player:Raheem STERLING": [.2762, .7579],
            "team:Portugal": [.5763, .0574],
            "player:Memphis DEPAY": [.4386, .1619],
            "player:Rickie LAMBERT": [.2669, .7691],
            "player:Alexis SANCHEZ": [.6151, .7863],
            "player:Joe HART": [.326, .7516],
            "player:James RODRIGUEZ": [.511, .8604],
            "club:Bayer 04 Leverkusen": [.5915, .3793],
            "club:Standard Liege": [.4207, .5011],
            "player:Toshihiro AOYAMA": [.3298, .1605],
            "player:Albert ADOMAH": [.1741, .5512],
            "club:Cruz Azul FC": [.3687, .3862],
            "player:HERNANES": [.6921, .8002],
            "team:Costa Rica": [.4237, .9426],
            "player:Esseid BELKALEM": [.8437, .4777],
            "player:Didier DROGBA": [.3032, .2528],
            "player:Cristian RODRIGUEZ": [.836, .4083],
            "team:Nigeria": [.5, .0488],
            "player:Nigel DE JONG": [.3998, .1569],
            "player:Olivier GIROUD": [.2243, .7162],
            "team:Ecuador": [.2827, .8752],
            "player:Ante REBIC": [.3628, .8506],
            "player:Yury LODYGIN": [.6478, .1644],
            "team:Australia": [.8613, .6727],
            "player:Bastian SCHWEINSTEIGER": [.2483, .6267],
            "player:Divock ORIGI": [.7403, .6834],
            "player:Die SEREY": [.3032, .2321],
            "player:Ioannis FETFATZIDIS": [.1583, .5054],
            "player:Vladimir GRANAT": [.6331, .1403],
            "player:Pierre WEBO": [.6208, .7656],
            "player:Juan ZUNIGA": [.542, .8209],
            "player:Steven DEFOUR": [.7505, .6862],
            "player:Sokratis PAPASTATHOPOULOS": [.1694, .5223],
            "player:Gianluigi BUFFON": [.2402, .3083],
            "player:Mattia PERIN": [.199, .3078],
            "player:Andrea BARZAGLI": [.2334, .3094],
            "player:SAMMIR": [.3966, .8593],
            "player:Edin DZEKO": [.7276, .748],
            "player:Hector HERRERA": [.4035, .2003],
            "player:Fabian ORELLANA": [.5881, .8783],
            "player:Vedran CORLUKA": [.3786, .8337],
            "player:Ashkan DEJAGAH": [.1861, .3743],
            "player:Mix DISKERUD": [.8008, .3809],
            "team:Colombia": [.5, .9512],
            "player:Xavi HERNANDEZ": [.7493, .2653],
            "player:Vasileios TOROSIDIS": [.1897, .5057],
            "player:Ivan PERISIC": [.4073, .8255],
            "player:Stephane MBIA": [.6151, .8448],
            "player:Miroslav KLOSE": [.2446, .6054],
            "club:Celta Vigo": [.6785, .7044],
            "player:Andrea PIRLO": [.2361, .3022],
            "player:Adnan JANUZAJ": [.7332, .6898],
            "club:SS Lazio": [.5542, .4038],
            "player:Cristian ZAPATA": [.4555, .8084],
            "player:Mubarak WAKASO": [.1996, .5341],
            "player:Eric CHOUPO MOTING": [.6205, .8071],
            "player:NEYMAR": [.7091, .7439],
            "player:Anthony VANDEN BORRE": [.7567, .7083],
            "player:Jan VERTONGHEN": [.7774, .7243],
            "club:SC Freiburg": [.6084, .499],
            "player:Mauricio ISLA": [.5287, .8148],
            "player:Alex IBARRA": [.2974, .8147],
            "club:Atletico Madrid": [.7591, .3901],
            "player:Mamadou SAKHO": [.2439, .7084],
            "club:Levante UD": [.3182, .668],
            "player:Claudio BRAVO": [.5611, .8571],
            "player:Martin DEMICHELIS": [.8008, .5871],
            "player:Diego LUGANO": [.8116, .4406],
            "player:PARK Chuyoung": [.7061, .1861],
            "club:SSC Napoli": [.6906, .4696],
            "player:Jose CHOLEVAS": [.1535, .52],
            "player:Cristian GAMBOA": [.4571, .8634],
            "player:Xherdan SHAQIRI": [.7125, .3377],
            "player:Danijel SUBASIC": [.3961, .8371],
            "player:YUN Sukyoung": [.6936, .2095],
            "club:Fortuna Duesseldorf": [.5203, .4638],
            "player:Sulley MUNTARI": [.1753, .5436],
            "team:Mexico": [.3503, .0831],
            "club:VfB Stuttgart": [.4161, .4738],
            "player:Per MERTESACKER": [.1983, .6602],
            "team:Greece": [.1089, .5],
            "player:Federico FERNANDEZ": [.8241, .552],
            "player:Theofanis GEKAS": [.1772, .5247],
            "player:Stephan LICHTSTEINER": [.7049, .3117],
            "player:Hiroshi KIYOTAKE": [.3462, .1675],
            "player:Konstantinos MANOLAS": [.1619, .5118],
            "club:Granada CF": [.5391, .6108],
            "team:Ghana": [.1164, .588],
            "player:Izet HAJROVIC": [.7254, .7333],
            "club:Parma FC": [.3434, .3836],
            "player:Johnny ACOSTA": [.4178, .8749],
            "player:Romelu LUKAKU": [.7495, .7271],
            "player:Javier MASCHERANO": [.8234, .5674],
            "player:Lionel MESSI": [.8061, .5585],
            "player:Augusto FERNANDEZ": [.8299, .6006],
            "player:Aleksandr KERZHAKOV": [.647, .1862],
            "player:Geoff CAMERON": [.7856, .3577],
            "player:Sergio BUSQUETS": [.7541, .2705],
            "player:Roy MILLER": [.4602, .8825],
            "team:Spain": [.7765, .1809],
            "player:Asmir BEGOVIC": [.7211, .7272],
            "player:David SILVA": [.7225, .3194],
            "club:Manchester City FC": [.6268, .5826],
            "player:Gabriel PALETTA": [.226, .2842],
            "player:Claudio MARCHISIO": [.2345, .317],
            "club:AC Ajaccio": [.593, .3398],
            "player:Mathis BOLLY": [.2819, .2394],
            "club:Sanfrecce Hiroshima": [.4999, .2121],
            "player:Gonzalo HIGUAIN": [.8248, .5598],
            "player:KI Sungyueng": [.7028, .1754],
            "player:Kenneth OMERUO": [.4765, .123],
            "player:Ahmed MUSA": [.5149, .0975],
            "club:Swansea City AFC": [.3894, .19],
            "player:Arturo VIDAL": [.5219, .8144],
            "player:Rui PATRICIO": [.5962, .1385],
            "player:Lucas DIGNE": [.2486, .7007],
            "club:LD Alajuelense": [.3478, .7102],
            "player:Hugo ALMEIDA": [.5876, .1545],
            "club:San Jose Earthquakes": [.4892, .4104],
            "club:Torino FC": [.231, .3557],
            "player:Andres INIESTA": [.7462, .2807],
            "player:Enzo PEREZ": [.8316, .5372],
            "player:Nabil BENTALEB": [.8252, .5345],
            "club:FC Rubin Kazan": [.4752, .306],
            "club:Fenerbahce SK": [.538, .288],
            "player:Dirk KUYT": [.4503, .127],
            "club:CSKA Moscow": [.5694, .1431],
            "player:HULK": [.691, .75],
            "player:Julian DRAXLER": [.2085, .6384],
            "player:Yuto NAGATOMO": [.3731, .2492],
            "player:Patrice EVRA": [.2535, .6863],
            "player:Giorgio CHIELLINI": [.2296, .3029],
            "player:OSCAR": [.6756, .8038],
            "player:Georginio WIJNALDUM": [.4325, .1583],
            "player:Cesc FABREGAS": [.7412, .2754],
            "player:Ioannis MANIATIS": [.1602, .5194],
            "player:Marcelo DIAZ": [.5702, .8008],
            "player:Rodrigo PALACIO": [.8118, .5929],
            "club:Cardiff City FC": [.6141, .5241],
            "player:Charles ITANDJE": [.6036, .8507],
            "player:Mensur MUJDZA": [.7291, .7404],
            "player:Klaas Jan HUNTELAAR": [.4184, .1815],
            "club:Toronto FC": [.7443, .5363],
            "player:Michael ESSIEN": [.1792, .5372],
            "club:Caykur Rizespor": [.3744, .2073],
            "player:Faouzi GHOULAM": [.8252, .4932],
            "player:Gaston RAMIREZ": [.7624, .4599],
            "club:Cerezo Osaka": [.4912, .2815],
            "player:Dejan LOVREN": [.3628, .8359],
            "player:Vasily BEREZUTSKIY": [.6278, .1165],
            "club:Eintracht Braunschweig": [.483, .5766],
            "player:Georgios KARAGOUNIS": [.1542, .494],
            "player:Makoto HASEBE": [.3471, .1753],
            "player:Frank LAMPARD": [.3158, .7635],
            "club:Hertha BSC": [.6236, .6154],
            "player:James MILNER": [.3199, .7549],
            "player:Marouane FELLAINI": [.7268, .6871],
            "player:Patrick PEMBERTON": [.415, .8678],
            "player:Ciro IMMOBILE": [.2016, .287],
            "club:Middlesbrough FC": [.3523, .3582],
            "club:Sunderland AFC": [.7177, .2808],
            "player:Kevin DE BRUYNE": [.7616, .6953],
            "club:West Bromwich Albion FC": [.5378, .5865],
            "player:Ogenyi ONAZI": [.5121, .1547],
            "player:Andres GUARDADO": [.403, .1642],
            "team:Brazil": [.7173, .8752],
            "player:Panagiotis KONE": [.1785, .4912],
            "club:AS Saint-Etienne": [.2647, .4029],
            "club:New York Red Bulls": [.612, .7402],
            "club:Atalanta Bergamo": [.5245, .8314],
            "club:Norwich City FC": [.4727, .1706],
            "club:Olympiacos Piraeus FC": [.2411, .5755],
            "club:Udinese Calcio": [.4976, .5436],
            "player:Medhi LACEN": [.827, .5254],
            "team:Iran": [.1387, .3273],
            "team:Algeria": [.8911, .5],
            "player:Diego BENAGLIO": [.7604, .3291],
            "club:VfL Wolfsburg": [.6041, .5517],
            "team:Belgium": [.8252, .7507],
            "club:Everton FC": [.5294, .6807],
            "player:Gotoku SAKAI": [.3213, .2081],
            "player:HENRIQUE": [.7005, .7666],
            "player:Acquah AFRIYIE": [.1846, .5418],
            "player:Yaya TOURE": [.322, .2809],
            "player:MAICON": [.6507, .7843],
            "club:AS Roma": [.423, .5299],
            "player:Alberto AQUILANI": [.2274, .3345],
            "player:Gerard PIQUE": [.7527, .278],
            "player:Marcos URENA": [.411, .8758],
            "player:Allan NYOM": [.6217, .8396],
            "player:Konan YA": [.249, .2321],
            "player:Diego FORLAN": [.7973, .3948],
            "player:Danijel PRANJIC": [.3542, .8619],
            "player:BETO": [.5658, .1875],
            "player:Vedad IBISEVIC": [.692, .7349],
            "player:Joao PEREIRA": [.5895, .147],
            "player:Ben FOSTER": [.2847, .7678],
            "club:Rosenborg BK": [.6061, .6056],
            "player:Oscar DUARTE": [.4542, .8789],
            "player:Fraser FORSTER": [.2514, .7363],
            "player:Saphir TAIDER": [.8136, .526],
            "player:Hugo LLORIS": [.2858, .7252],
            "player:Santi CAZORLA": [.6716, .2962],
            "club:Hull City FC": [.2924, .6343],
            "player:Mauricio PINILLA": [.568, .8947],
            "player:Brad GUZAN": [.8014, .328],
            "player:Bacary SAGNA": [.2308, .7185],
            "player:Arthur BOKA": [.2737, .2517],
            "player:Senad LULIC": [.7145, .7139],
            "player:MARCELO": [.6641, .7569],
            "player:Marco PAROLO": [.2208, .2894],
            "player:Jerry PALACIOS": [.1794, .4709],
            "player:Shinji OKAZAKI": [.3474, .2132],
            "player:Ricardo COSTA": [.5896, .1392],
            "player:Victor BERNARDEZ": [.1959, .4181],
            "player:NANI": [.5469, .1794],
            "player:Mohammed RABIU": [.1734, .6002],
            "player:Diego GODIN": [.8378, .4159],
            "player:John Obi MIKEL": [.5146, .2079],
            "player:Christoph KRAMER": [.2048, .6317],
            "player:Angel DI MARIA": [.786, .5489],
            "team:Germany": [.1387, .6727],
            "club:Besiktas JK": [.6531, .4507],
            "player:Nicolas NKOULOU": [.5901, .853],
            "player:Vincent KOMPANY": [.7651, .702],
            "club:Botafogo FR": [.7312, .6106],
            "player:Pepe REINA": [.7446, .2596],
            "player:Granit XHAKA": [.7587, .2965],
            "club:FC Augsburg": [.5929, .1921],
            "player:Erik DURM": [.1954, .6531],
            "player:Kevin Prince BOATENG": [.1951, .5707],
            "player:Fabrice OLINGA": [.6441, .8584],
            "player:Toby ALDERWEIRELD": [.7965, .6607],
            "player:Miguel VELOSO": [.5471, .1611],
            "player:Aurelien CHEDJOU": [.6268, .8042],
            "player:Dany NOUNKEU": [.6413, .8091],
            "player:Walter GARGANO": [.763, .4167],
            "team:Honduras": [.1164, .412],
            "player:Victor MOSES": [.4828, .194],
            "player:Hassan YEBDA": [.809, .5092],
            "player:Phil JAGIELKA": [.297, .771],
            "player:Gelson FERNANDES": [.769, .3064],
            "player:Nabil GHILAS": [.7931, .5015],
            "player:Dries MERTENS": [.7773, .6751],
            "player:Majeed WARIS": [.2017, .5728],
            "player:Guillermo OCHOA": [.3965, .1501],
            "player:Alexandre SONG": [.6567, .8027],
            "player:Mario YEPES": [.5019, .902],
            "club:FC Internazionale": [.6504, .6157],
            "player:Emmanuel EMENIKE": [.5079, .123],
            "player:Antonio CASSANO": [.2272, .292],
            "player:Ezequiel GARAY": [.8265, .5423],
            "player:Rio MAVUBA": [.241, .6835],
            "club:FC Barcelona": [.7104, .5122],
            "player:Max GRADEL": [.2442, .2378],
            "player:Joel MATIP": [.5845, .8146],
            "player:Timmy CHANDLER": [.7813, .3238],
            "team:Bosnia and Herzegovina": [.7765, .8191],
            "player:Georgios SAMARAS": [.1669, .4919],
            "team:Netherlands": [.4237, .0574],
            "player:Ivan RAKITIC": [.3865, .8442],
            "club:Genoa CFC": [.2705, .5429],
            "club:Celtic FC": [.2934, .4554],
            "player:DANTE": [.6355, .7848],
            "player:Paul VERHAEGH": [.4583, .1083],
            "club:Hannover 96": [.2754, .3678],
            "player:Martin CACERES": [.753, .4306],
            "player:Fabio COENTRAO": [.5565, .1623],
            "player:Camilo VARGAS": [.4878, .898],
            "player:Kolo TOURE": [.28, .2886],
            "club:Real Madrid CF": [.525, .4294],
            "club:Kuban Krasnodar": [.3294, .6982],
            "player:Brad DAVIS": [.7866, .345],
            "player:Moussa DEMBELE": [.7732, .718],
            "player:Michel VORM": [.4211, .1064],
            "player:Atsuto UCHIDA": [.316, .2327],
            "player:Ben HALLORAN": [.7727, .6228],
            "player:Thomas VERMAELEN": [.7063, .7156],
            "player:Loic REMY": [.2206, .678],
            "player:Alexander SAMEDOV": [.6186, .1659],
            "player:Daniel OPARE": [.1899, .5658],
            "player:Jose GIMENEZ": [.8312, .414],
            "player:Lorenzo INSIGNE": [.3, .3084],
            "player:Mehdi MOSTEFA": [.8216, .4737],
            "player:Victor IBARBO": [.5087, .9016],
            "player:Emilio IZAGUIRRE": [.1752, .4264],
            "player:Julian GREEN": [.7359, .3917],
            "player:Emmanuel AGYEMANG BADU": [.1968, .5782],
            "club:Real Sociedad": [.5166, .615],
            "club:Valenciennes FC": [.5087, .5251],
            "club:Watford FC": [.7324, .3568],
            "team:France": [.1748, .7507],
            "player:Ignazio ABATE": [.2221, .2971],
            "player:Wilson PALACIOS": [.2266, .4226],
            "player:HWANG Seokho": [.6689, .1618],
            "player:Fernando MUSLERA": [.8025, .4297],
            "player:Adam LALLANA": [.2716, .7634],
            "club:Lille OSC": [.4459, .4482],
            "player:Ezequiel LAVEZZI": [.7677, .5783],
            "player:Valon BEHRAMI": [.7791, .3085],
            "player:HONG Jeongho": [.6796, .1653],
            "player:WILLIAN": [.6732, .7965],
            "player:Hiroki SAKAI": [.2951, .1909],
            "player:Cristhian NOBOA": [.363, .7181],
            "player:Ross BARKLEY": [.302, .7763],
            "player:Ousmane DIARRASSOUBA": [.2642, .2057],
            "player:Antonio CANDREVA": [.2672, .2935],
            "player:Arjen ROBBEN": [.4235, .1977],
            "player:Maty RYAN": [.7844, .6696],
            "player:Andy NAJAR": [.1994, .4409],
            "player:Luis SUAREZ": [.7285, .4729],
            "player:Mateo KOVACIC": [.4201, .8334],
            "player:BERNARD": [.6737, .8383],
            "club:FC Dynamo Kyiv": [.4399, .4841],
            "player:Daniele DE ROSSI": [.2387, .3232],
            "player:Oleg SHATOV": [.6434, .1583],
            "player:Lazaros CHRISTODOULOPOULOS": [.1844, .4952],
            "player:Tranquillo BARNETTA": [.7606, .2686],
            "player:Yoichiro KAKITANI": [.3322, .1781],
            "player:David VILLA": [.7528, .2456],
            "player:Marco FABIAN": [.3649, .1683],
            "club:Toulouse FC": [.3512, .4475],
            "player:Tim CAHILL": [.7895, .6748],
            "club:Vitesse Arnheim": [.2789, .677],
            "player:Hugo CAMPAGNARO": [.8144, .5858],
            "player:Yacine BRAHIMI": [.809, .5194],
            "club:FC Zenit St. Petersburg": [.6601, .3613],
            "player:GERVINHO": [.2767, .2651],
            "player:Diego COSTA": [.757, .2394],
            "player:Marcos ROJO": [.8201, .5396],
            "player:Fredy GUARIN": [.5335, .8533],
            "player:Mathieu VALBUENA": [.2274, .7253],
            "player:Darijo SRNA": [.3862, .8733],
            "club:AC Milan": [.2932, .4021],
            "player:Thiago MOTTA": [.2511, .3257],
            "player:Sergey RYZHIKOV": [.6112, .141],
            "player:Marco VERRATTI": [.2463, .3314],
            "player:Valentin STOCKER": [.7578, .2882],
            "player:Vincent ENYEAMA": [.4893, .1513],
            "player:Fabian JOHNSON": [.8195, .367],
            "player:Igor AKINFEEV": [.6215, .1133],
            "player:Keylor NAVAS": [.4083, .8687],
            "club:SV Zulte Waregem": [.6785, .7274],
            "player:Sammy BOSSUT": [.781, .7309],
            "player:DAVID LUIZ": [.6665, .7953],
            "player:Domagoj VIDA": [.3757, .8198],
            "club:FC Lokomotiv Moscow": [.491, .496],
            "player:Keisuke HONDA": [.2977, .2063],
            "player:Sofiane FEGHOULI": [.8205, .4814],
            "player:Danny WELBECK": [.2881, .7329],
            "club:Galatasaray SK": [.5732, .479],
            "player:David DE GEA": [.6921, .2739],
            "club:Konyaspor": [.407, .6604],
            "club:Chelsea FC": [.5644, .6332],
            "player:Chris SMALLING": [.2925, .7389],
            "player:Maya YOSHIDA": [.3142, .2534],
            "player:Morgan SCHNEIDERLIN": [.2361, .7098],
            "team:Italy": [.1748, .2493],
            "player:Wayne ROONEY": [.304, .7094],
            "club:Aston Villa FC": [.6095, .2653],
            "player:Philipp LAHM": [.2182, .6306],
            "player:Ivica OLIC": [.411, .819],
            "player:Manuel NEUER": [.222, .6367],
            "player:Roger ESPINOZA": [.1783, .444],
            "player:Cesar AZPILICUETA": [.7195, .2979],
            "club:Stade Rennais FC": [.4101, .6947],
            "player:Eden HAZARD": [.75, .7118],
            "player:Giovanni SIO": [.3079, .2378],
            "player:VARELA": [.567, .1754],
            "player:Junior DIAZ": [.4525, .8202],
            "club:1. FC Nuernberg": [.551, .2609],
            "player:Philippe SENDEROS": [.772, .2924],
            "club:Borussia Dortmund": [.3059, .6102],
            "player:Simon MIGNOLET": [.7238, .7085],
            "player:Antonio VALENCIA": [.3368, .7681],
            "player:Sergio RAMOS": [.7078, .2561],
            "player:Yury ZHIRKOV": [.6277, .1446],
            "player:Thiago SILVA": [.644, .7858],
            "player:Pedro RODRIGUEZ": [.7428, .2677],
            "player:Nicolas LOMBAERTS": [.7745, .658],
            "player:Laurent KOSCIELNY": [.2293, .7108],
            "player:Benoit ASSOU EKOTTO": [.6394, .8298],
            "player:Jermaine JONES": [.8028, .3591],
            "club:TSG 1899 Hoffenheim": [.7429, .5586],
            "player:Aleksei KOZLOV": [.6222, .1494],
            "player:Diego REYES": [.4066, .2073],
            "player:Edison MENDEZ": [.3212, .8362],
            "player:Leonardo BONUCCI": [.2413, .3159],
            "club:Queens Park Rangers FC": [.6419, .5176],
            "player:Kevin GROSSKREUTZ": [.1922, .6461],
            "player:Mattia DE SCIGLIO": [.2154, .2958],
            "player:Miralem PJANIC": [.6897, .7423],
            "player:Loukas VYNTRA": [.1635, .5262],
            "club:Wigan Athletic FC": [.3221, .573],
            "player:Edinson CAVANI": [.7703, .449],
            "player:Orestis KARNEZIS": [.2052, .5195],
            "player:KWAK Taehwi": [.6726, .2045],
            "club:Southampton FC": [.372, .6292],
            "player:Shola AMEOBI": [.462, .1585],
            "player:Salomon KALOU": [.2799, .2481],
            "player:Alex OXLADE CHAMBERLAIN": [.2649, .7615],
            "player:Boniek GARCIA": [.2011, .413],
            "player:Sergey IGNASHEVICH": [.622, .1208],
            "club:Al Hilal FC": [.5097, .5021],
            "player:Samuel ETOO": [.6215, .8277],
            "player:Matthias GINTER": [.233, .6394],
            "player:Carlos CARMONA": [.5613, .8932],
            "team:Argentina": [.8836, .588],
            "player:Laurent CIMAN": [.741, .6966],
            "player:Alvaro GONZALEZ": [.794, .4152],
            "player:Nikica JELAVIC": [.351, .8489],
            "player:MAXWELL": [.6484, .7917],
            "player:Chris WONDOLOWSKI": [.7823, .351],
            "player:Wilfried BONY": [.2704, .2028],
            "club:Eintracht Frankfurt": [.5157, .2786],
            "player:Paul POGBA": [.2461, .6626],
            "player:Ruben AMORIM": [.5988, .1469],
            "player:Jose CORONA": [.3615, .1615],
            "player:Bryan RUIZ": [.4358, .8263],
            "player:Haris SEFEROVIC": [.7549, .3246],
            "club:FC Porto": [.5505, .5052],
            "club:Houston Dynamo": [.4949, .3891],
            "club:FC Bayern Muenchen": [.4067, .5671],
            "player:Igor DENISOV": [.6213, .1416],
            "club:Bologna FC": [.3952, .4598],
            "player:Fernando TORRES": [.7127, .2973],
            "player:Wesley SNEIJDER": [.4576, .1667],
            "player:RAMIRES": [.6689, .8026],
            "player:Georgy SHCHENNIKOV": [.6228, .1287],
            "player:Jordi ALBA": [.7476, .2729],
            "player:Sead KOLASINAC": [.6732, .7435],
            "club:FC Dynamo Moscow": [.58, .2605],
            "player:Ismael TIOTE": [.2595, .253],
            "player:Islam SLIMANI": [.8282, .4692],
            "player:Nacer CHADLI": [.7707, .7253],
            "player:Santiago ARIAS": [.4933, .835],
            "club:Olympique Marseille": [.3627, .6904],
            "player:CRISTIANO RONALDO": [.5515, .2014],
            "player:Blaise MATUIDI": [.2556, .6979],
            "player:Marcelo BROZOVIC": [.3927, .853],
            "team:England": [.2235, .8191],
            "player:Daniel STURRIDGE": [.2874, .7546],
            "player:Andre SCHUERRLE": [.2586, .6463],
            "club:PSV Eindhoven": [.4652, .4798],
            "club:FC Schalke 04": [.3819, .5337],
            "player:Javi MARTINEZ": [.6798, .2844],
            "player:Lucas BIGLIA": [.7929, .5431],
            "player:Cristhian STUANI": [.8144, .4098],
            "club:SL Benfica": [.71, .3693],
            "player:Iker CASILLAS": [.7044, .2493],
            "player:Egidio AREVALO": [.8156, .4469],
            "player:Raul MEIRELES": [.565, .1211],
            "player:Admir MEHMEDI": [.7649, .3126],
            "player:Leroy FER": [.4362, .1064],
            "player:Victor FAYZULIN": [.641, .1656],
            "player:Mitch LANGERAK": [.703, .6474],
            "player:Robin VAN PERSIE": [.4377, .224],
            "player:Thibaut COURTOIS": [.7898, .661],
            "player:El Arabi SOUDANI": [.8203, .5246],
            "player:Ognjen VUKOJEVIC": [.3756, .812],
            "player:Juan QUINTERO": [.5101, .8267],
            "player:Pavel MOGILEVETC": [.6115, .1488],
            "club:RSC Anderlecht": [.4797, .5545],
            "player:Gordon SCHILDENFELD": [.3572, .8549],
            "player:Thomas MUELLER": [.2192, .644],
            "player:Lukas PODOLSKI": [.2026, .6541],
            "player:Mario BALOTELLI": [.2156, .3175],
            "player:Blerim DZEMAILI": [.7791, .3164],
            "player:Stefanos KAPINO": [.1694, .5398],
            "club:Shakhtar Donetsk": [.5258, .7977],
            "team:Russia": [.6497, .0831],
            "player:Karim BENZEMA": [.265, .6705],
            "player:Adrian RAMOS": [.5194, .8699],
            "player:PARK Jooho": [.668, .2188],
            "club:Juventus FC": [.3679, .4788],
            "player:Tim HOWARD": [.7753, .4098],
            "team:Japan": [.2827, .1248],
            "player:Joao MOUTINHO": [.5706, .182],
            "player:Alexey IONOV": [.6285, .1522],
            "player:Stephane RUFFIER": [.2084, .6781],
            "player:SON Heungmin": [.6821, .1925],
            "player:Segundo CASTILLO": [.3324, .7923],
            "player:Eiji KAWASHIMA": [.3183, .215],
            "player:KOKE": [.7595, .2471],
            "club:Getafe CF": [.6036, .6656],
            "player:Joao ROJAS": [.3097, .7669],
            "player:JEFFERSON": [.7069, .8115],
            "team:Ivory Coast": [.2235, .1809],
            "player:Sergio AGUERO": [.8104, .5795],
            "player:Juan Carlos GARCIA": [.1787, .4518],
            "player:Ismael DIOMANDE": [.2506, .2405],
            "club:CA Monarcas Morelia": [.5803, .6036],
            "player:FERNANDINHO": [.687, .7911],
            "player:Alexander KOKORIN": [.6268, .1369],
            "player:Jefferson MONTERO": [.3454, .806],
            "team:Chile": [.5763, .9426],
            "player:Kwadwo ASAMOAH": [.195, .5579],
            "player:Bruno ALVES": [.5587, .1239],
            "player:Christian ATSU": [.1668, .5967],
            "player:Mathieu DEBUCHY": [.2195, .6701],
            "player:Yohan CABAYE": [.2502, .6932],
            "player:Pablo ZABALETA": [.8036, .58],
            "player:Luke SHAW": [.2697, .7559],
            "player:Andre ALMEIDA": [.6028, .1405],
            "player:Helder POSTIGA": [.5694, .1666],
            "player:Eduardo VARGAS": [.5867, .8072],
            "club:ACF Fiorentina": [.3739, .661],
            "team:Croatia": [.3503, .9169],
            "team:Switzerland": [.8252, .2493],
            "club:RCD Espanyol": [.591, .3098],
            "player:Constant DJAKPA": [.2842, .2153],
            "player:Jean BEAUSEJOUR": [.5271, .8508],
            "player:Joseph YOBO": [.4954, .0992],
            "team:Uruguay": [.8836, .412],
            "club:Sporting CP": [.6846, .3414],
            "player:Luis NETO": [.5943, .1526],
            "player:WILLIAM": [.5923, .1321],
            "player:Dani ALVES": [.7048, .7726],
            "player:Ermin BICAKCIC": [.7153, .7643],
            "player:Fabian SCHAER": [.7526, .2933],
            "player:Glen JOHNSON": [.281, .7523],
            "club:Fulham FC": [.2108, .4597],
            "player:Roman WEIDENFELLER": [.199, .6464],
            "player:LUIZ GUSTAVO": [.6815, .7867],
            "club:GNK Dinamo Zagreb": [.5852, .6585],
            "team:USA": [.8613, .3273],
            "player:Matteo DARMIAN": [.2083, .2857],
            "player:Javier HERNANDEZ": [.3892, .2103],
            "player:Efe AMBROSE": [.4591, .1515],
            "player:Kevin MIRALLAS": [.7465, .7201],
            "club:FSV Mainz 05": [.544, .4637],
            "player:Carl MEDJANI": [.8097, .5015],
            "club:Paris Saint-Germain FC": [.4476, .5647],
            "player:Daniel VAN BUYTEN": [.7149, .697],
            "player:JI Dongwon": [.6806, .1576],
            "player:Sejad SALIHOVIC": [.7535, .7558],
            "player:Benedikt HOEWEDES": [.2115, .6314],
            "club:AS Monaco": [.559, .5951],
            "player:Josip DRMIC": [.7558, .263],
            "player:Emir SPAHIC": [.728, .7231],
            "player:Yann SOMMER": [.7514, .2856],
            "player:Moussa SISSOKO": [.2258, .6729],
            "player:Sami KHEDIRA": [.2383, .6083],
            "player:Raul ALBIOL": [.7382, .262],
            "player:Jean Daniel AKPA": [.2638, .247],
            "player:Alan DZAGOEV": [.6283, .1243],
            "player:Gary CAHILL": [.3102, .7591],
            "player:Jean MAKOUN": [.6025, .8584],
            "player:Jozy ALTIDORE": [.8138, .3319],
            "player:Raphael VARANE": [.2688, .6641],
            "player:Gokhan INLER": [.7732, .3125],
            "club:Sevilla FC": [.5116, .6558],
            "player:Jeremain LENS": [.4305, .1658],
            "player:Daniel DAVARI": [.2432, .3963],
            "player:Mario MANDZUKIC": [.3697, .816],
            "player:Peter ODEMWINGIE": [.5104, .1471],
            "player:Michael BRADLEY": [.8184, .3886],
            "club:Panathinaikos FC": [.3291, .7253],
            "player:Luka MODRIC": [.3964, .7891],
            "club:Stoke City FC": [.5576, .437],
            "player:Hector MORENO": [.4019, .1454],
            "player:Jonathan DE GUZMAN": [.4237, .1136],
            "player:Jorge FUCILE": [.7909, .4367],
            "player:Salvatore SIRIGU": [.2529, .3333],
            "player:Axel WITSEL": [.7706, .6517],
            "player:VIEIRINHA": [.5775, .1848],
            "club:Newcastle United FC": [.3203, .4386],
            "player:Toni KROOS": [.226, .6431]
        }
    }
}), define("format/shortTeamName", [], function() {
    return function(e) {
        return e == "South Korea" ? "S. Korea" : e == "Netherlands" ? "Nether-\nlands" : e == "Switzerland" ? "Switzer-\nland" : e == "Ivory Coast" ? "Ivory\nCoast" : e == "Bosnia and Herzegovina" ? "Bosnia/\nHerz." : e == "Costa Rica" ? "Costa\nRica" : e.length > 10 ? codes[e] : e
    }
}), define("format/shortClubName", [], function() {
    return function(e) {
        var t = {
            FC: !0,
            SS: !0,
            CF: !0,
            SSC: !0,
            AC: !0,
            SK: !0,
            CA: !0,
            CD: !0
        };
        return e = e.split(" ").filter(function(e) {
            return !t[e]
        }).join(" "), e == "Internazionale" ? "Inter\nMilan" : e == "Bayern Muenchen" ? "Bayern\nMunich" : e.length > 9 ? e.replace(/([^ ]{3}[^ ]+) /g, "$1\n") : e
    }
}), define("format/shortPlayerName", [], function() {
    return function(e) {
        return e.short_name == "V. PERSIE" ? "Van Persie" : e.short_name == "NEYMAR JR" ? "Neymar" : e.short_name.split(" ").map(function(e) {
            return e.slice(0, 1) + e.slice(1).toLowerCase()
        }).join(" ")
    }
}), define("data/playerMugs.json", [], function() {
    return {
        "NEYMAR JR": "neymar.png",
        SILVA: "david-silva.jpg",
        SCHWEINSTEIGER: "schweinsteiger.jpg",
        MESSI: "MESSI.png",
        "V. PERSIE": "persie.jpg",
        ROONEY: "rooney.jpg",
        RONALDO: "ronaldo.jpg",
        MARTINEZ: "martinez.jpg",
        ALEXIS: "sanchez.jpg",
        SUAREZ: "suarez.jpg",
        BALOTELLI: "balotelli.jpg",
        POGBA: "pogba.jpg",
        BRADLEY: "bradley.jpg",
        EDUARDO: "eduardo-da-silva.jpg",
        KERZHAKOV: "kerzhakov.jpg",
        HENRIQUE: "henrique.png",
        MARCELO: "marcelo.png",
        FERNANDINHO: "fernandinho.png",
        DEMICHELIS: "DEMICHELIS.png",
        AGUERO: "AGUERO.png",
        LAVEZZI: "LAVEZZI.png",
        ALVAREZ: "ALVAREZ.png"
    }
}), define("graph", ["../node_modules/d3/d3", "underscore/1.5", "format/shortTeamName", "format/shortClubName", "format/shortPlayerName", "data/playerMugs.json"], function(e, t, n, r, i, s) {
    function c(c, h) {
        function N(c, p, N, C, L, A) {
            function X(t) {
                function n() {
                    var n = P.filter(t.filter),
                        r = e.set(n.map(function(e) {
                            return e.key
                        })),
                        i = D.filter(function(e) {
                            return r.has("club:" + e.club)
                        });
                    x.classed({
                        fade: function(e) {
                            return e.faded = !0, e.type == "club" ? e.faded = !r.has(e.key) : e.type == "player" ? e.faded = !r.has("club:" + e.club) : (e.type == "team" && (e.faded = !0, i.forEach(function(t) {
                                t.team == e.id && (e.faded = !1)
                            })), e.faded)
                        },
                        focus: function(e) {
                            return n.length > 1 && e.type == "player" ? !1 : !e.faded
                        }
                    }), S.classed({
                        fade: function(e) {
                            return e.source.faded || e.target.faded
                        },
                        focus: function(e) {
                            return !e.source.faded && !e.target.faded
                        }
                    })
                }

                function r() {
                    var n = H.filter(t.filter),
                        r = e.set(n.map(function(e) {
                            return e.key
                        })),
                        i = D.filter(function(e) {
                            return r.has("team:" + e.team)
                        }),
                        s = e.set(i.map(function(e) {
                            return "club:" + e.club
                        })).values().map(M),
                        o = e.set(s.map(function(e) {
                            return e.id
                        })),
                        u = D.filter(function(e) {
                            return o.has(e.club)
                        }),
                        a = e.set();
                    u.forEach(function(e) {
                        a.add(e.team)
                    }), x.classed({
                        fade: function(e) {
                            return e.faded = !0, e.type == "team" ? e.faded = !a.has(e.country) : e.type == "player" ? e.faded = !o.has(e.club) : e.type == "club" ? e.faded = !o.has(e.id) : e.faded
                        },
                        focus: function(e) {
                            return e.type == "player" && !e.faded ? i.length < 5 : e.type == "club" && !e.faded ? e.team_count > 1 : !e.faded
                        }
                    }), S.classed({
                        fade: function(e) {
                            return e.source.faded || e.target.faded
                        },
                        focus: function(e) {
                            return !e.source.faded && !e.target.faded
                        }
                    })
                }

                function i() {
                    var n = D.filter(t.filter),
                        r = e.set(n.map(function(e) {
                            return e.key
                        })),
                        i = D.filter(function(e) {
                            return r.has("team:" + e.team)
                        }),
                        s = e.set(i.map(function(e) {
                            return "club:" + e.club
                        })).values().map(M),
                        o = e.set(s.map(function(e) {
                            return e.id
                        })),
                        u = e.set();
                    n = D.filter(function(e) {
                        return o.has(e.club)
                    }), n.forEach(function(e) {
                        u.add(e.team)
                    }), x.classed({
                        fade: function(e) {
                            return e.faded = !0, e.type == "team" ? e.faded = !u.has(e.country) : e.type == "player" ? e.faded = !o.has(e.club) : e.type == "club" ? e.faded = !o.has(e.id) : e.faded
                        },
                        focus: function(e) {
                            return e.type == "player" && !e.faded ? i.length < 5 : e.type == "club" && !e.faded ? e.team_count > 1 : !e.faded
                        }
                    }), S.classed({
                        fade: function(e) {
                            return e.source.faded || e.target.faded
                        },
                        focus: function(e) {
                            return !e.source.faded && !e.target.faded
                        }
                    })
                }
                if (!t) {
                    E.selectAll(".node.focus").each(function(e) {
                        e.old_x && (e.x = e.old_x, e.y = e.old_y, e.old_x = null, e.old_y = null)
                    }), x.classed({
                        fade: !1,
                        focus: !1
                    }), S.classed({
                        fade: !1,
                        focus: !1
                    }), ut(!0);
                    return
                }
                t.type == "club" ? n() : t.type == "player" ? i() : r(), E.selectAll(".node.focus").each(function() {
                    this.parentNode.appendChild(this)
                }), st(E.selectAll(".node." + (t.type == "club" ? "player" : "club") + ".focus"), t.type == "club" ? 9 : 3)
            }

            function V() {
                X(j && j.type != "player" ? {
                    type: j.type,
                    filter: function(e) {
                        return e == j
                    }
                } : null)
            }

            function $(e) {
                var t = e.source,
                    n = e.target;
                return t.type == "club" ? J(t) : n.type == "club" ? J(n) : "#bbb"
            }

            function J(e) {
                return e.type == "player" ? e.topPlayer ? "url(#mug-" + e.topPlayer.replace(".", "-") + ")" : "#aaa" : e.type == "club" ? L(e) : "#aaa"
            }

            function K(e) {
                return e.type == "team" && !e.neighbors.values().length && P.length ? .3 : 1
            }

            function Q(e) {
                return "node " + e.type + (O.has(e.id) ? " top-club" : "") + (e.topPlayer ? " top-player" : "")
            }

            function G(e) {
                return function(t) {
                    return t.type == e
                }
            }

            function Y() {
                o.nodes.forEach(function(t) {
                    t.neighbors = e.set()
                }), o.links.forEach(function(e) {
                    var t = o.nodes[e.source],
                        n = o.nodes[e.target];
                    t.neighbors.add(n.key), n.neighbors.add(t.key)
                })
            }

            function Z(e, t) {
                e.order = t, e.rank_radius = 3 + Math.pow((e.rank - 1200) / 840, 2) * 30, e.centrality_radius = 5 + Math.pow((e.centrality - .0255) / .67, 1) * 28, e.num_player_radius = Math.sqrt(e.neighbors.values().length) * 7 * A;
                if (H.length == 2) e.fixed = !0;
                else {
                    var n = Math.random();
                    e.phi = t / P.length * Math.PI * 2, e.x = m + Math.cos(e.phi) * (y * .2 + y * n * .6), e.y = g + Math.sin(e.phi) * (y * .2 + y * n * .6)
                }
            }

            function et(e) {
                var t = H.filter(function(t) {
                        return t.country == e.country
                    })[0],
                    n = Math.random() * Math.PI * 2,
                    r = 20 + Math.random() * 30;
                e.x = t.x + Math.cos(n) * r, e.y = t.y + Math.sin(n) * r, C.indexOf(e.short_name) > -1 && s[e.short_name] && (e.topPlayer = s[e.short_name])
            }

            function tt(e, t) {
                e.order = t, e.fixed = !0, e.phi = t / H.length * Math.PI * 2, e.x = m + Math.cos(e.phi) * (y - 30), e.y = g + Math.sin(e.phi) * (y - 30)
            }

            function nt(e) {
                var t = 0;
                return o.nodes.forEach(function(e) {
                    e.radius = e.type == "team" ? 28 : e.type == "club" ? e.num_player_radius : e.topPlayer ? 20 / A : H.length < 5 ? 8 : 4, t += Math.PI * e.radius * e.radius
                }), o.nodes.length > 100 && (t = 2e5), Math.min(1, Math.sqrt(Math.PI * y * y * (1 - e) / t))
            }

            function rt(e) {
                x.each(at(.05 * e.alpha));
                if (e.alpha < .06 || T) {
                    var t = ot(H.length > 2 ? 1 * b : 3 * b, .5);
                    x.each(function(e) {
                        t(e)
                    })
                }
                ut(), e.alpha < .035 && (T = !0, w.stop(), it()), h || w.stop()
            }

            function it() {
                function r() {
                    var e = ot(H.length > 2 ? 1 * b : 3 * b, .5);
                    return t.each(function(t) {
                        e(t)
                    }), ut(), !(n--)
                }
                var t = E.selectAll(".node"),
                    n = 15;
                e.timer(r)
            }

            function st(t, n) {
                var r = [];
                if (!T) return;
                w.stop(), t.each(function(e) {
                    r.push(e), e.old_x || (e.old_x = e.x, e.old_y = e.y)
                }), e.range(50).forEach(function(e) {
                    var i = ot(n, (50 - e) / 70, r, !0);
                    t.each(function(e) {
                        i(e)
                    })
                }), ut(!0)
            }

            function ot(t, n, r, i) {
                r = r || o.nodes;
                var s = e.geom.quadtree(r);
                return function(e) {
                    var r = e.radius + q + t,
                        o = e.x - r,
                        u = e.x + r,
                        a = e.y - r,
                        f = e.y + r;
                    s.visit(function(r, s, l, c, h) {
                        if (r.point && r.point !== e) {
                            var p = e.x - r.point.x,
                                d = e.y - r.point.y,
                                v = i ? Math.abs(d) : Math.sqrt(p * p + d * d),
                                m = e.radius + r.point.radius + t * (e.type == "club" ? 6 : 1);
                            v < m && (v = (v - m) / v * n, i || (e.x -= p *= v), e.y -= d *= v, i || (r.point.x += p), r.point.y += d)
                        }
                        return s > u || c < o || l > f || h < a
                    })
                }
            }

            function ut(e) {
                var t = e ? x.transition(200) : x,
                    n = e ? S.transition(200) : S;
                n.attr("x1", function(e) {
                    return e.source.x
                }).attr("y1", function(e) {
                    return e.source.y
                }).attr("x2", function(e) {
                    return e.target.x
                }).attr("y2", function(e) {
                    return e.target.y
                }), t.attr("transform", function(e) {
                    return "translate(" + e.x + "," + e.y + ")"
                })
            }

            function at(e) {
                return function(t) {
                    t.y += (g - t.y) * e * (H.length == 2 && t.type == "club" ? -10 : 1), t.x += (m - t.x) * e
                }
            }

            function ft() {
                o.nodes.forEach(function(e) {
                    u[e.key] = {
                        x: e.x,
                        y: e.y,
                        r: e.radius
                    }
                })
            }

            function lt() {
                o.nodes.forEach(function(e) {
                    e.type != "team" && p && p[e.key] ? (e.x = d * p[e.key][0], e.y = v * p[e.key][1]) : e.type != "team" && u[e.key] && (e.x = u[e.key].x, e.y = u[e.key].y)
                })
            }

            function ct() {
                this.parentNode.appendChild(this)
            }
            o && ft(), p && (T = !0);
            var O = e.set(N || f);
            C = C ? l.slice().concat(C) : l.slice(), o = c;
            var M = k(o.nodes);
            Y();
            var D = o.nodes.filter(G("player")),
                P = o.nodes.filter(G("club")),
                H = o.nodes.filter(G("team")),
                B = y;
            H.length < 6 && (y *= .8), H.length < 2 && (y = 0);
            var j = null,
                F = "id";
            H.sort(function(e, t) {
                return e[F] > t[F] ? 1 : e[F] < t[F] ? -1 : 0
            }), H.forEach(tt), P.forEach(Z), D.forEach(et), y = B, lt(), b = nt(.8) * A;
            var I = 40 * b;
            E.selectAll("defs pattern").attr("width", I).attr("height", I).attr("x", -I * .5).attr("y", -I * .5).append("image").attr("xlink:href", function(e) {
                return NYTG_ASSETS + "mugs/" + e
            }).attr("width", I).attr("height", I);
            var q = 0;
            o.nodes.forEach(function(e) {
                q = Math.max(q, e.radius *= b)
            }), w.gravity(0).charge(H.length > 3 ? -30 : 200).linkDistance(H.length > 3 ? 10 : 35).linkStrength(function(e) {
                return H.length < 4 ? 1 : e.source.type == "club" || e.target.type == "club" ? e.source.topPlayer || e.target.topPlayer ? .5 : .3 : 1
            }).nodes(o.nodes).links(o.links).on("tick", rt).start(), S = E.selectAll(".link"), x = E.selectAll(".node"), S = S.data(o.links, function(e) {
                return e.source.key + "--" + e.target.key
            }).style("stroke", $), S.exit().remove(), S.enter().insert("line").attr("class", "link").style("stroke", $).style("stroke-width", function() {
                return .3
            }), x = x.data(o.nodes, function(e) {
                return e.key
            }).attr("class", Q), x.select("circle").transition(0).attr("fill", J).attr("r", function(e) {
                return e.radius
            }), x.select("text").transition(0).style("opacity", 1), x.transition(500).style("opacity", K), x.each(ct);
            var R = x.exit();
            R.transition(0).delay(500).remove(), R.selectAll("text").style("opacity", 0), R.selectAll("circle").transition(500).attr("r", 0);
            var U = x.enter().append("g").attr("class", Q);
            E.selectAll(".node.club").call(w.drag), U.append("circle").attr("fill", J).attr("r", 0).transition(500).attr("r", function(e) {
                return e.radius
            }), U.style("opacity", K), U.each(function(t) {
                var s = (t.type == "team" ? n(t.country) : t.type == "player" ? i(t) : r(t.id)).split("\n");
                e.select(this).append("text").attr("y", t.topPlayer ? 20 : 13 * s.length * -0.5).selectAll("tspan").data(s).enter().append("tspan").text(function(e) {
                    return e
                }).attr("x", 0).attr("dy", 12)
            }), E.selectAll(".node.top-player").each(ct), E.selectAll(".node.top-club").each(ct);
            var z = t.throttle(V, 600, {
                leading: !1
            });
            x.on("mouseenter", function(e) {
                j = e, this.parent.appendChild(this), V()
            });
            var W = t.throttle(it, 1e3, {
                leading: !1
            });
            x.on("mouseleave", function() {
                j = null, z(), W()
            }), h || ut(), a.filter = X
        }

        function C() {
            var t = e.values(s),
                n = 40 * b;
            E.append("defs").selectAll("pattern").data(t).enter().append("pattern").attr("id", function(e) {
                return "mug-" + e.replace(".", "-")
            }).attr("patternUnits", "userSpaceOnUse").attr("width", n).attr("height", n).attr("x", -n * .5).attr("y", -n * .5).append("image").attr("xlink:href", function(e) {
                return NYTG_ASSETS + "mugs/" + e
            }).attr("width", n).attr("height", n)
        }

        function k(e) {
            var t = {};
            return e.forEach(function(e) {
                    e.key = e.type + ":" + e.id, t[e.key] = e
                }),
                function(e) {
                    return t[e]
                }
        }
        var p = c.append("div").attr("class", "graph-container"),
            d = p.node().clientWidth,
            v = Math.min(d * 1, Math.max(580, window.innerHeight - 120)),
            m = d * .5,
            g = v * .5,
            y = Math.min(d, v) * .49,
            b = 1,
            w = e.layout.force().charge(-30).chargeDistance(0).gravity(0).linkDistance(10).linkStrength(function(e) {
                return e.source.type == "club" || e.target.type == "club" ? e.source.topPlayer || e.target.topPlayer ? .5 : .3 : 1
            }).size([d, v]),
            E = p.append("svg").attr("width", d).attr("height", v);
        C();
        var S = E.selectAll(".link"),
            x = E.selectAll(".node"),
            T = !1;
        a.update = N, a.resize = function() {
            d = p.node().clientWidth, v = Math.min(d * 1, Math.max(580, window.innerHeight - 120)), m = d * .5, g = v * .5, y = Math.min(d, v) * .49, w.size([d, v]), E.attr("width", d).attr("height", v)
        };
        return
    }
    var o, u = {},
        a = {
            init: function(e, t) {
                c(e, t)
            }
        },
        f = ["Real Madrid CF", "FC Bayern Muenchen", "Juventus FC", "Manchester United FC", "FC Barcelona", "Chelsea FC", "Arsenal FC", "FC Dynamo Moskow", "AC Milan"],
        l = ["NEYMAR JR", "SILVA", "SCHWEINSTEIGER", "MESSI", "V. PERSIE", "ROONEY", "RONALDO", "MARTINEZ", "ALEXIS", "SUAREZ", "BALOTELLI", "POGBA", "BRADLEY", "EDUARDO", "KERZHAKOV"];
    return a
}), define("graph/filter", [], function() {
    return function(e, t, n) {
        function i(e) {
            return e.source > -1 && e.target > -1
        }

        function s(t) {
            t.source = e.nodes[t.source], t.target = e.nodes[t.target]
        }

        function o(t) {
            t.source = e.nodes.indexOf(t.source), t.target = e.nodes.indexOf(t.target)
        }

        function u(e) {
            var t = {};
            return e.forEach(function(e) {
                e.key = e.type + ":" + e.id, t[e.key] = e
            }), t
        }
        e = JSON.parse(JSON.stringify(e)), e.links.forEach(s), e.nodes = e.nodes.filter(t), e.links.forEach(o), e.links = e.links.filter(i);
        if (n) {
            e.links.forEach(s);
            var r = u(e.nodes);
            e.links.forEach(function(e) {
                e.target.type == "club" && (e.source = r["team:" + e.source.team])
            }), e.nodes = e.nodes.filter(function(e) {
                return e.type != "player"
            }), e.links.forEach(o), e.links = e.links.filter(i)
        }
        return e
    }
}), define("admanager", ["jquery/nyt", "underscore/1.5"], function(e, t) {
    var n = function(t) {
        this.o = e.extend(!0, {
            page: undefined,
            positions: "",
            autoconfirm: 0,
            impression: !0,
            v: "3",
            url: "http://www.nytimes.com/adx/bin/adxrun.html",
            dataType: "jsonp"
        }, t), this.o.autoconfirm = this.o.autoconfirm ? 1 : 0, this.dataLoaded = undefined, this.loadData(), this.o.impression && this.makeImpression()
    };
    return n.prototype = {
        loadData: function() {
            var t = decodeURIComponent(e.param({
                page: this.o.page,
                positions: this.o.positions,
                autoconfirm: this.o.autoconfirm,
                v: this.o.v,
                attributes: "nyt5",
                jsonp: this.o.dataType === "jsonp" ? "adloaded" : undefined
            }));
            this.dataLoaded = e.ajax({
                url: this.o.url,
                type: "GET",
                data: t,
                processData: !1,
                dataType: this.o.dataType,
                jsonpCallback: "adloaded",
                error: function(e) {}
            })
        },
        makeImpression: function() {
            var t = e("<div></div>").css({
                position: "absolute",
                overflow: "hidden",
                height: "0",
                width: "0"
            }).appendTo("body");
            this.place(t, "ADX_CLIENTSIDE", !1)
        },
        place: function(t, n, r) {
            this.dataLoaded.done(function(i, s) {
                var o = i.ads[n].creative;
                if (!o) {
                    if (n === "ADX_CLIENTSIDE") return;
                    throw new Error("AdManager Error: Position", n, " not found in ad data definition. Did you remember to specify the correct positons in the initial call?")
                }
                e(t).each(function() {
                    var t = e(this).empty();
                    if (r) {
                        var n, i = document.createElement("iframe"),
                            s = e(i);
                        s.attr({
                            frameBorder: 0,
                            border: 0,
                            scrolling: "no"
                        }).appendTo(t).css({
                            width: "100%",
                            height: t.height()
                        }), n = i.contentDocument || i.contentWindow.document, n.open(), n.write(o), n.close()
                    } else t.html(o)
                })
            })
        }
    }, n
}), require(["jquery/nyt", "underscore/1.5", "foundation/views/page-manager", "../node_modules/d3/d3", "data/full.json", "data/precomputed.json", "graph", "graph/filter", "admanager"], function(e, t, n, r, i, s, o, u, a) {
    function h() {
        e(window).on("resize", function() {
            e("html").removeClass("g-tablet-landscape").removeClass("g-tablet-portrait").addClass(document.body.clientWidth < 780 ? "g-tablet-portrait" : "g-tablet-landscape")
        })
    }

    function p() {
        var t = e('<div class="g-kicker-brazil">Brazil 2014</div>'),
            n = e("#main").find(".kicker-container");
        t.appendTo(n)
    }

    function y(e) {
        return g(e.confederation)
    }

    function w(e) {
        if (e == "CAF") return "Africa";
        if (e == "AFC") return "Asia";
        if (e == "CONMEBOL") return "South America";
        if (e == "CONCACAF") return "North America";
        if (e == "UEFA") return "Europe"
    }

    function S(e) {
        return e == "England" ? "English Premier League" : e == "Spain" ? "Spanish La Liga" : e == "Germany" ? "German Bundesliga" : e == "Italy" ? "Italian Serie A" : e
    }

    function C() {
        N.each(function(e, t) {
            m[t].offset = this.offsetTop - 300
        })
    }

    function M() {
        function s() {
            var e = r.val().trim().toLowerCase();
            d.selectAll(".node.player").classed("highlighted", function(t) {
                return e && t.name.toLowerCase().indexOf(e) > -1
            })
        }

        function a(e, t, n) {
            var r;
            n == "all" ? r = I() : e == "team" ? r = D(function(e) {
                return t == "stage" ? e[t] >= n : e[t] == n
            }, !0) : r = B(function(e) {
                return t != "rank" ? e[t] == n : n == "Top 10" ? e.rank > 0 && e.rank <= 10 : n == "Top 50" ? e.rank <= 50 : n == "Top 100" ? e.rank <= 100 : e.rank > 100 || e.rank === 0
            }), O = u(i, r, Modernizr.touch), o.update(O, {}, null, null, y, 1)
        }
        var t = e("#g-slides .slide.explore"),
            n = e("select", t),
            r = e(".player-search", t);
        n.on("change", function(t) {
            var r = e(t.target),
                i = r.val();
            i != "all" ? (n.val("all"), r.val(i), a(r.data("type"), r.data("for"), i)) : a(null, null, "all")
        }), r.change(s).keyup(s)
    }

    function _(e) {
        L = m[k], v.html(L.caption), O = u(i, L.filter, Modernizr.touch), d.select("#g-graph svg").attr("class", L.id), o.update(O, e || !A || L.fixed ? s[k] : {}, L.highlightClubs, L.players, L.clubColors, L.zoom || 1)
    }

    function D(e, t) {
        var n = F(i.nodes);
        return function(r) {
            if (r.type == "team") return t || e(r);
            if (r.type == "player") return e(n["team:" + r.country]);
            if (r.type == "club") {
                var s = !1;
                return i.nodes.forEach(function(t) {
                    t.type == "player" && t.club == r.id && (s = s || e(n["team:" + t.country]))
                }), s
            }
        }
    }

    function P(t) {
        if (x != "scroll") return;
        var n = e(window).scrollTop();
        d.classed({
            fixed: n > 88,
            "fixed-bottom": n - document.body.clientHeight + window.innerHeight > -490
        });
        var r = -1;
        m.forEach(function(e, t) {
            n > e.offset && (r = t)
        }), r != k && (r < 0 && (r = 0), k = r, N.classed("faded", function(e, t) {
            return t != k
        }), _(t == "first"))
    }

    function H(e) {
        var t = {};
        e.forEach(function(e) {
            t[e] = !0
        });
        var n = {};
        return i.nodes.forEach(function(e) {
                e.type == "player" && t[e.team] && (n[e.club] || (n[e.club] = r.set()), n[e.club].add(e.team))
            }), r.keys(n).forEach(function(e) {
                n[e] = n[e].values().length
            }),
            function(r) {
                if (r.type == "team") return t[r.id];
                if (r.type == "player") return t[r.team] && (n[r.club] > 1 || e.length == 1);
                if (r.type == "club") return n[r.id] > 1 || e.length == 1
            }
    }

    function B(e, n) {
        t.isString(e) && (e = [e]);
        if (t.isArray(e)) {
            var r = e;
            e = function(e) {
                return r.indexOf(e.id) > -1
            }
        }
        var s = F(i.nodes),
            o = {};
        return n && i.nodes.forEach(function(t) {
                t.type == "player" && e(s["club:" + t.club]) && (o[t.team] = !0)
            }),
            function(t) {
                return t.type == "club" ? e(t) : t.type == "player" ? e(s["club:" + t.club]) : n && t.type == "team" ? o[t.country] : !0
            }
    }

    function j(e, n) {
        return t.isString(e) && (e = [e]), B(function(t) {
            return e.indexOf(t.confederation) > -1
        }, n)
    }

    function F(e) {
        var t = {};
        return e.forEach(function(e) {
            e.key = e.type + ":" + e.id, t[e.key] = e
        }), t
    }

    function I() {
        return B(function(e) {
            return e.team_count >= 2
        })
    }

    function q() {
        var e = {},
            t = {},
            n = [];
        i.nodes.forEach(function(n) {
            n.type == "player" && (e[n.club] || (e[n.club] = 0), e[n.club] ++, t[n.club] || (t[n.club] = r.set()), t[n.club].add(n.team))
        }), r.keys(t).forEach(function(r) {
            n.push({
                name: r,
                players: e[r],
                teams: t[r].values().length
            })
        }), n.sort(function(e, t) {
            return t.players - e.players
        }), n.sort(function(e, t) {
            return t.teams - e.teams
        })
    }

    function R(t, n) {
        var r = e("<div />");
        return n.forEach(function(i, s) {
            var o = e('<div class="item" />').appendTo(r);
            e('<div class="color" />').css("background", n[s]).appendTo(o), e('<div class="label" />').html(t[s]).appendTo(o)
        }), '<div class="legend">' + r.html() + "</div>"
    }

    function U(e) {
        return e >= 10051 ? 1300 : e >= 10030 ? 1050 : e >= 1030 ? 945 : e >= 1010 ? 720 : e >= 120 ? 600 : e >= 110 ? 480 : 300
    }
    var f = U(n.getCurrentBreakpoint());
    try {
        var l = new a({
            page: "www.nytimes.com/interactive/yr/mo/day/sports/worldcup",
            positions: "Sponsor1",
            autoconfirm: !0
        });
        l.place("#g-sponsor", "Sponsor1")
    } catch (c) {
        console.warn(c)
    }
    Modernizr.touch && window.screen.availWidth == 320 ? e("html").addClass("g-mobile-portrait") : document.body.clientWidth < 945 ? (e("html").addClass("g-tablet-portrait"), h()) : Modernizr.touch && document.body.clientWidth < 1100 && (e("html").addClass("g-tablet-landscape"), h()), n.on("nyt:page-breakpoint", function(t) {
        U(t) != f && (f = U(t), C(), f < 945 ? (x = "tablet", e("html").addClass("g-tablet-portrait")) : (x = "scroll", e("html").removeClass("g-tablet-portrait")), P(), o.resize(), _(!0))
    }), p();
    var d = r.select("#g-graph"),
        v = d.select("#g-caption"),
        m = [];
    q();
    var g = r.scale.ordinal().domain(["UEFA", "CAF", "AFC", "CONMEBOL", "CONCACAF"]).range(["#AAD348", "#E69980", "#c09ec6", "#FDC130", "#88bbdb"]),
        b = R(g.domain().map(w), g.range());
    m.push({
        id: "intro",
        title: "",
        text: "The best national teams come together every four years, but the global tournament is mostly a remix of the professional leagues that are in season most of the time. Three out of every four World Cup players play in Europe, and the top clubs like Barcelona, Bayern Munich and Manchester United have players from one end of the globe to the other.</p>" + b + "",
        caption: "Soccer clubs with players on at least two national teams",
        filter: I(),
        clubColors: y
    }), m.push({
        id: "brazil-vs-argentina",
        title: "Brazil vs. Argentina",
        text: "Even archrivals Brazil and Argentina overlap. Neymar, Brazilâ€™s star forward, plays alongside Lionel Messi, the Argentine captain, on powerhouse Barcelona. In all, eight Brazilians and 12 Argentines play together on European club teams.",
        caption: "Soccer club connections between the national teams of Argentina and Brazil",
        clubColors: y,
        zoom: 1.3,
        fixed: !0,
        players: ["NEYMAR JR", "MESSI", "MARCELO", "HENRIQUE", "AGUERO", "DEMICHELIS", "FERNANDINHO", "LAVEZZI", "ALVAREZ"],
        highlightClubs: ["Real Madrid CF", "FC Bayern Muenchen", "Juventus FC", "Manchester City FC", "FC Barcelona", "SSC Napoli", "Arsenal FC", "Paris Saint-Germain FC", "FC Internazionale"],
        filter: H(["Brazil", "Argentina"])
    });
    var E = r.scale.ordinal().domain(["England", "Spain", "Germany", "Italy", "Other Leagues"]).range(["#9ab7d6", "#e5afa4", "#c8e1a3", "#e5d8a3", "#ccc"]);
    m.push({
        id: "uefa",
        title: "The European Connection",
        text: "Three out of every four World Cup players play on a European professional team. Bayern Munich and Manchester United top the list, each with 14 players on World Cup teams. More than half of the European club players in the World Cup play in one of the four strongest primary leagues (in England, Spain, Germany and Italy). </p><p>" + R(E.domain().map(S), E.range()),
        caption: "European clubs with players on at least one national team",
        filter: j("UEFA", !1),
        clubColors: function(e) {
            var t = e.country;
            return E.domain().indexOf(t) < 0 && (t = "Other Leagues"), E(t)
        }
    }), m.push({
        id: "all-but-uefa",
        title: "The Rest of the World",
        text: "Meanwhile, leagues outside Europe account for only 24 percent of the World Cup players, and only a handful of those teams supply players for more than one World Cup team. M.L.S. teams account for only 3 percent of the World Cup players.<p>" + R(g.domain().map(w).slice(1), g.range().slice(1)),
        caption: "Non-European clubs with players on at least one national team",
        filter: j(["CONCACAF", "AFC", "CONMEBOL", "CAF"], !1),
        clubColors: y,
        highlightClubs: ["Toronto FC", "New York Red Bulls", "Tigres", "Houston Dynamo", "Cruz Azul FC", "CD Chivas USA", "Melbourne Victory FC", "Sanfrecce Hiroshima", "CA Monarcas Morelia", "Al Hilal"]
    }), m.push({
        id: "explore",
        title: "Find a Team",
        filter: I(),
        clubColors: y,
        text: "Why not look around for yourself?</p>" + e(".g-filter-template").html() + b,
        caption: ""
    });
    var x = Modernizr.touch && window.window.screen.availWidth < 686 ? "mobile" : Modernizr.touch || document.body.clientWidth < 975 ? "tablet" : "scroll",
        T = r.select("#g-slides"),
        N = T.selectAll(".slide").data(m).enter().append("div").attr("class", function(e) {
            return "slide " + e.id
        });
    N.append("div").attr("class", "anchor").attr("id", function(e) {
        return e.id
    }), N.append("h2").append("a").attr("href", function(e) {
        return "#" + e.id
    }).html(function(e) {
        return e.title
    }), x == "mobile" && (N.append("a").attr("class", "img-link").attr("href", function(e, t) {
        return NYTG_ASSETS + "images/slide-" + (t + 1) + ".png"
    }).append("img").attr("class", "static").attr("src", function(e, t) {
        return NYTG_ASSETS + "images/slide-" + (t + 1) + ".png"
    }), N.append("div").attr("class", "img-caption").text(function(e, t) {
        return e.caption + (t < 1 && window.screen.availWidth < 400 ? ". Click image to open larger version." : "")
    })), N.append("p").html(function(e) {
        return e.text
    }), x != "mobile" && (N.append("div").attr("class", "img-caption").text(function(e) {
        return e.caption
    }), N.append("img").attr("class", "static").attr("src", function(e, t) {
        return NYTG_ASSETS + "images/slide-" + (t + 1) + ".png"
    }), e("#g-slides .slide").each(function() {
        var t = e(this);
        e(".legend", t).appendTo(t)
    })), C(), M();
    var k = -2,
        L, A = !Modernizr.touch && (/Chrome/.test(navigator.appVersion) || navigator.mozContacts),
        O;
    o.init(d, A), window.store = function() {
        s[k] = {};
        var t = r.select("#g-graph svg"),
            n = +t.attr("width"),
            i = +t.attr("height");
        O.nodes.forEach(function(e) {
            s[k][e.key] = [+(e.x / n).toFixed(4), +(e.y / i).toFixed(4)]
        }), e.ajax({
            method: "put",
            url: "/precomputed.json",
            data: JSON.stringify(s)
        })
    }, x == "scroll" && (P("first"), window.onscroll = P)
}), define("script", function() {});