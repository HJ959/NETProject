/*! For license information please see main.js.LICENSE.txt */
(() => {
  var t = {
    718: t => {
      "use strict";

      var e = Object.prototype.hasOwnProperty,
          r = "~";

      function i() {}

      function n(t, e, r) {
        this.fn = t, this.context = e, this.once = r || !1;
      }

      function o(t, e, i, o, s) {
        if ("function" != typeof i) throw new TypeError("The listener must be a function");
        var a = new n(i, o || t, s),
            h = r ? r + e : e;
        return t._events[h] ? t._events[h].fn ? t._events[h] = [t._events[h], a] : t._events[h].push(a) : (t._events[h] = a, t._eventsCount++), t;
      }

      function s(t, e) {
        0 == --t._eventsCount ? t._events = new i() : delete t._events[e];
      }

      function a() {
        this._events = new i(), this._eventsCount = 0;
      }

      Object.create && (i.prototype = Object.create(null), new i().__proto__ || (r = !1)), a.prototype.eventNames = function () {
        var t,
            i,
            n = [];
        if (0 === this._eventsCount) return n;

        for (i in t = this._events) e.call(t, i) && n.push(r ? i.slice(1) : i);

        return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(t)) : n;
      }, a.prototype.listeners = function (t) {
        var e = r ? r + t : t,
            i = this._events[e];
        if (!i) return [];
        if (i.fn) return [i.fn];

        for (var n = 0, o = i.length, s = new Array(o); n < o; n++) s[n] = i[n].fn;

        return s;
      }, a.prototype.listenerCount = function (t) {
        var e = r ? r + t : t,
            i = this._events[e];
        return i ? i.fn ? 1 : i.length : 0;
      }, a.prototype.emit = function (t, e, i, n, o, s) {
        var a = r ? r + t : t;
        if (!this._events[a]) return !1;
        var h,
            u,
            l = this._events[a],
            c = arguments.length;

        if (l.fn) {
          switch (l.once && this.removeListener(t, l.fn, void 0, !0), c) {
            case 1:
              return l.fn.call(l.context), !0;

            case 2:
              return l.fn.call(l.context, e), !0;

            case 3:
              return l.fn.call(l.context, e, i), !0;

            case 4:
              return l.fn.call(l.context, e, i, n), !0;

            case 5:
              return l.fn.call(l.context, e, i, n, o), !0;

            case 6:
              return l.fn.call(l.context, e, i, n, o, s), !0;
          }

          for (u = 1, h = new Array(c - 1); u < c; u++) h[u - 1] = arguments[u];

          l.fn.apply(l.context, h);
        } else {
          var d,
              f = l.length;

          for (u = 0; u < f; u++) switch (l[u].once && this.removeListener(t, l[u].fn, void 0, !0), c) {
            case 1:
              l[u].fn.call(l[u].context);
              break;

            case 2:
              l[u].fn.call(l[u].context, e);
              break;

            case 3:
              l[u].fn.call(l[u].context, e, i);
              break;

            case 4:
              l[u].fn.call(l[u].context, e, i, n);
              break;

            default:
              if (!h) for (d = 1, h = new Array(c - 1); d < c; d++) h[d - 1] = arguments[d];
              l[u].fn.apply(l[u].context, h);
          }
        }

        return !0;
      }, a.prototype.on = function (t, e, r) {
        return o(this, t, e, r, !1);
      }, a.prototype.once = function (t, e, r) {
        return o(this, t, e, r, !0);
      }, a.prototype.removeListener = function (t, e, i, n) {
        var o = r ? r + t : t;
        if (!this._events[o]) return this;
        if (!e) return s(this, o), this;
        var a = this._events[o];
        if (a.fn) a.fn !== e || n && !a.once || i && a.context !== i || s(this, o);else {
          for (var h = 0, u = [], l = a.length; h < l; h++) (a[h].fn !== e || n && !a[h].once || i && a[h].context !== i) && u.push(a[h]);

          u.length ? this._events[o] = 1 === u.length ? u[0] : u : s(this, o);
        }
        return this;
      }, a.prototype.removeAllListeners = function (t) {
        var e;
        return t ? (e = r ? r + t : t, this._events[e] && s(this, e)) : (this._events = new i(), this._eventsCount = 0), this;
      }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = r, a.EventEmitter = a, t.exports = a;
    },
    556: (t, e, r) => {
      "use strict";

      r.d(e, {
        Z: () => a
      });
      var i = r(81),
          n = r.n(i),
          o = r(645),
          s = r.n(o)()(n());
      s.push([t.id, "html, body {\r\n    margin: 0 !important;\r\n    padding: 0 !important;\r\n    overflow: hidden;\r\n}", ""]);
      const a = s;
    },
    924: (t, e, r) => {
      "use strict";

      r.d(e, {
        Z: () => a
      });
      var i = r(81),
          n = r.n(i),
          o = r(645),
          s = r.n(o)()(n());
      s.push([t.id, "/****** Elad Shechter's RESET *******/\r\n/*** box sizing border-box for all elements ***/\r\n*,\r\n*::before,\r\n*::after{box-sizing:border-box;}\r\na{text-decoration:none; color:inherit; cursor:pointer;}\r\nbutton{background-color:transparent; color:inherit; border-width:0; padding:0; cursor:pointer;}\r\nfigure{margin:0;}\r\ninput::-moz-focus-inner {border:0; padding:0; margin:0;}\r\nul, ol, dd{margin:0; padding:0; list-style:none;}\r\nh1, h2, h3, h4, h5, h6{margin:0; font-size:inherit; font-weight:inherit;}\r\np{margin:0;}\r\ncite {font-style:normal;}\r\nfieldset{border-width:0; padding:0; margin:0;}\r\n", ""]);
      const a = s;
    },
    645: t => {
      "use strict";

      t.exports = function (t) {
        var e = [];
        return e.toString = function () {
          return this.map(function (e) {
            var r = "",
                i = void 0 !== e[5];
            return e[4] && (r += "@supports (".concat(e[4], ") {")), e[2] && (r += "@media ".concat(e[2], " {")), i && (r += "@layer".concat(e[5].length > 0 ? " ".concat(e[5]) : "", " {")), r += t(e), i && (r += "}"), e[2] && (r += "}"), e[4] && (r += "}"), r;
          }).join("");
        }, e.i = function (t, r, i, n, o) {
          "string" == typeof t && (t = [[null, t, void 0]]);
          var s = {};
          if (i) for (var a = 0; a < this.length; a++) {
            var h = this[a][0];
            null != h && (s[h] = !0);
          }

          for (var u = 0; u < t.length; u++) {
            var l = [].concat(t[u]);
            i && s[l[0]] || (void 0 !== o && (void 0 === l[5] || (l[1] = "@layer".concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {").concat(l[1], "}")), l[5] = o), r && (l[2] ? (l[1] = "@media ".concat(l[2], " {").concat(l[1], "}"), l[2] = r) : l[2] = r), n && (l[4] ? (l[1] = "@supports (".concat(l[4], ") {").concat(l[1], "}"), l[4] = n) : l[4] = "".concat(n)), e.push(l));
          }
        }, e;
      };
    },
    81: t => {
      "use strict";

      t.exports = function (t) {
        return t[1];
      };
    },
    187: t => {
      "use strict";

      function e(t, e, o) {
        o = o || 2;

        var s,
            a,
            h,
            c,
            d,
            p,
            _,
            v = e && e.length,
            m = v ? e[0] * o : t.length,
            g = r(t, 0, m, o, !0),
            y = [];

        if (!g || g.next === g.prev) return y;

        if (v && (g = function (t, e, n, o) {
          var s,
              a,
              h,
              c = [];

          for (s = 0, a = e.length; s < a; s++) (h = r(t, e[s] * o, s < a - 1 ? e[s + 1] * o : t.length, o, !1)) === h.next && (h.steiner = !0), c.push(f(h));

          for (c.sort(u), s = 0; s < c.length; s++) n = i(n = l(c[s], n), n.next);

          return n;
        }(t, e, g, o)), t.length > 80 * o) {
          s = h = t[0], a = c = t[1];

          for (var E = o; E < m; E += o) (d = t[E]) < s && (s = d), (p = t[E + 1]) < a && (a = p), d > h && (h = d), p > c && (c = p);

          _ = 0 !== (_ = Math.max(h - s, c - a)) ? 1 / _ : 0;
        }

        return n(g, y, o, s, a, _), y;
      }

      function r(t, e, r, i, n) {
        var o, s;
        if (n === O(t, e, r, i) > 0) for (o = e; o < r; o += i) s = x(o, t[o], t[o + 1], s);else for (o = r - i; o >= e; o -= i) s = x(o, t[o], t[o + 1], s);
        return s && m(s, s.next) && (R(s), s = s.next), s;
      }

      function i(t, e) {
        if (!t) return t;
        e || (e = t);
        var r,
            i = t;

        do {
          if (r = !1, i.steiner || !m(i, i.next) && 0 !== v(i.prev, i, i.next)) i = i.next;else {
            if (R(i), (i = e = i.prev) === i.next) break;
            r = !0;
          }
        } while (r || i !== e);

        return e;
      }

      function n(t, e, r, u, l, c, f) {
        if (t) {
          !f && c && function (t, e, r, i) {
            var n = t;

            do {
              null === n.z && (n.z = d(n.x, n.y, e, r, i)), n.prevZ = n.prev, n.nextZ = n.next, n = n.next;
            } while (n !== t);

            n.prevZ.nextZ = null, n.prevZ = null, function (t) {
              var e,
                  r,
                  i,
                  n,
                  o,
                  s,
                  a,
                  h,
                  u = 1;

              do {
                for (r = t, t = null, o = null, s = 0; r;) {
                  for (s++, i = r, a = 0, e = 0; e < u && (a++, i = i.nextZ); e++);

                  for (h = u; a > 0 || h > 0 && i;) 0 !== a && (0 === h || !i || r.z <= i.z) ? (n = r, r = r.nextZ, a--) : (n = i, i = i.nextZ, h--), o ? o.nextZ = n : t = n, n.prevZ = o, o = n;

                  r = i;
                }

                o.nextZ = null, u *= 2;
              } while (s > 1);
            }(n);
          }(t, u, l, c);

          for (var p, _, v = t; t.prev !== t.next;) if (p = t.prev, _ = t.next, c ? s(t, u, l, c) : o(t)) e.push(p.i / r), e.push(t.i / r), e.push(_.i / r), R(t), t = _.next, v = _.next;else if ((t = _) === v) {
            f ? 1 === f ? n(t = a(i(t), e, r), e, r, u, l, c, 2) : 2 === f && h(t, e, r, u, l, c) : n(i(t), e, r, u, l, c, 1);
            break;
          }
        }
      }

      function o(t) {
        var e = t.prev,
            r = t,
            i = t.next;
        if (v(e, r, i) >= 0) return !1;

        for (var n = t.next.next; n !== t.prev;) {
          if (p(e.x, e.y, r.x, r.y, i.x, i.y, n.x, n.y) && v(n.prev, n, n.next) >= 0) return !1;
          n = n.next;
        }

        return !0;
      }

      function s(t, e, r, i) {
        var n = t.prev,
            o = t,
            s = t.next;
        if (v(n, o, s) >= 0) return !1;

        for (var a = n.x < o.x ? n.x < s.x ? n.x : s.x : o.x < s.x ? o.x : s.x, h = n.y < o.y ? n.y < s.y ? n.y : s.y : o.y < s.y ? o.y : s.y, u = n.x > o.x ? n.x > s.x ? n.x : s.x : o.x > s.x ? o.x : s.x, l = n.y > o.y ? n.y > s.y ? n.y : s.y : o.y > s.y ? o.y : s.y, c = d(a, h, e, r, i), f = d(u, l, e, r, i), _ = t.prevZ, m = t.nextZ; _ && _.z >= c && m && m.z <= f;) {
          if (_ !== t.prev && _ !== t.next && p(n.x, n.y, o.x, o.y, s.x, s.y, _.x, _.y) && v(_.prev, _, _.next) >= 0) return !1;
          if (_ = _.prevZ, m !== t.prev && m !== t.next && p(n.x, n.y, o.x, o.y, s.x, s.y, m.x, m.y) && v(m.prev, m, m.next) >= 0) return !1;
          m = m.nextZ;
        }

        for (; _ && _.z >= c;) {
          if (_ !== t.prev && _ !== t.next && p(n.x, n.y, o.x, o.y, s.x, s.y, _.x, _.y) && v(_.prev, _, _.next) >= 0) return !1;
          _ = _.prevZ;
        }

        for (; m && m.z <= f;) {
          if (m !== t.prev && m !== t.next && p(n.x, n.y, o.x, o.y, s.x, s.y, m.x, m.y) && v(m.prev, m, m.next) >= 0) return !1;
          m = m.nextZ;
        }

        return !0;
      }

      function a(t, e, r) {
        var n = t;

        do {
          var o = n.prev,
              s = n.next.next;
          !m(o, s) && g(o, n, n.next, s) && T(o, s) && T(s, o) && (e.push(o.i / r), e.push(n.i / r), e.push(s.i / r), R(n), R(n.next), n = t = s), n = n.next;
        } while (n !== t);

        return i(n);
      }

      function h(t, e, r, o, s, a) {
        var h = t;

        do {
          for (var u = h.next.next; u !== h.prev;) {
            if (h.i !== u.i && _(h, u)) {
              var l = b(h, u);
              return h = i(h, h.next), l = i(l, l.next), n(h, e, r, o, s, a), void n(l, e, r, o, s, a);
            }

            u = u.next;
          }

          h = h.next;
        } while (h !== t);
      }

      function u(t, e) {
        return t.x - e.x;
      }

      function l(t, e) {
        var r = function (t, e) {
          var r,
              i = e,
              n = t.x,
              o = t.y,
              s = -1 / 0;

          do {
            if (o <= i.y && o >= i.next.y && i.next.y !== i.y) {
              var a = i.x + (o - i.y) * (i.next.x - i.x) / (i.next.y - i.y);

              if (a <= n && a > s) {
                if (s = a, a === n) {
                  if (o === i.y) return i;
                  if (o === i.next.y) return i.next;
                }

                r = i.x < i.next.x ? i : i.next;
              }
            }

            i = i.next;
          } while (i !== e);

          if (!r) return null;
          if (n === s) return r;
          var h,
              u = r,
              l = r.x,
              d = r.y,
              f = 1 / 0;
          i = r;

          do {
            n >= i.x && i.x >= l && n !== i.x && p(o < d ? n : s, o, l, d, o < d ? s : n, o, i.x, i.y) && (h = Math.abs(o - i.y) / (n - i.x), T(i, t) && (h < f || h === f && (i.x > r.x || i.x === r.x && c(r, i))) && (r = i, f = h)), i = i.next;
          } while (i !== u);

          return r;
        }(t, e);

        if (!r) return e;
        var n = b(r, t),
            o = i(r, r.next);
        return i(n, n.next), e === r ? o : e;
      }

      function c(t, e) {
        return v(t.prev, t, e.prev) < 0 && v(e.next, t, t.next) < 0;
      }

      function d(t, e, r, i, n) {
        return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - r) * n) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - i) * n) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1;
      }

      function f(t) {
        var e = t,
            r = t;

        do {
          (e.x < r.x || e.x === r.x && e.y < r.y) && (r = e), e = e.next;
        } while (e !== t);

        return r;
      }

      function p(t, e, r, i, n, o, s, a) {
        return (n - s) * (e - a) - (t - s) * (o - a) >= 0 && (t - s) * (i - a) - (r - s) * (e - a) >= 0 && (r - s) * (o - a) - (n - s) * (i - a) >= 0;
      }

      function _(t, e) {
        return t.next.i !== e.i && t.prev.i !== e.i && !function (t, e) {
          var r = t;

          do {
            if (r.i !== t.i && r.next.i !== t.i && r.i !== e.i && r.next.i !== e.i && g(r, r.next, t, e)) return !0;
            r = r.next;
          } while (r !== t);

          return !1;
        }(t, e) && (T(t, e) && T(e, t) && function (t, e) {
          var r = t,
              i = !1,
              n = (t.x + e.x) / 2,
              o = (t.y + e.y) / 2;

          do {
            r.y > o != r.next.y > o && r.next.y !== r.y && n < (r.next.x - r.x) * (o - r.y) / (r.next.y - r.y) + r.x && (i = !i), r = r.next;
          } while (r !== t);

          return i;
        }(t, e) && (v(t.prev, t, e.prev) || v(t, e.prev, e)) || m(t, e) && v(t.prev, t, t.next) > 0 && v(e.prev, e, e.next) > 0);
      }

      function v(t, e, r) {
        return (e.y - t.y) * (r.x - e.x) - (e.x - t.x) * (r.y - e.y);
      }

      function m(t, e) {
        return t.x === e.x && t.y === e.y;
      }

      function g(t, e, r, i) {
        var n = E(v(t, e, r)),
            o = E(v(t, e, i)),
            s = E(v(r, i, t)),
            a = E(v(r, i, e));
        return n !== o && s !== a || !(0 !== n || !y(t, r, e)) || !(0 !== o || !y(t, i, e)) || !(0 !== s || !y(r, t, i)) || !(0 !== a || !y(r, e, i));
      }

      function y(t, e, r) {
        return e.x <= Math.max(t.x, r.x) && e.x >= Math.min(t.x, r.x) && e.y <= Math.max(t.y, r.y) && e.y >= Math.min(t.y, r.y);
      }

      function E(t) {
        return t > 0 ? 1 : t < 0 ? -1 : 0;
      }

      function T(t, e) {
        return v(t.prev, t, t.next) < 0 ? v(t, e, t.next) >= 0 && v(t, t.prev, e) >= 0 : v(t, e, t.prev) < 0 || v(t, t.next, e) < 0;
      }

      function b(t, e) {
        var r = new A(t.i, t.x, t.y),
            i = new A(e.i, e.x, e.y),
            n = t.next,
            o = e.prev;
        return t.next = e, e.prev = t, r.next = n, n.prev = r, i.next = r, r.prev = i, o.next = i, i.prev = o, i;
      }

      function x(t, e, r, i) {
        var n = new A(t, e, r);
        return i ? (n.next = i.next, n.prev = i, i.next.prev = n, i.next = n) : (n.prev = n, n.next = n), n;
      }

      function R(t) {
        t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ);
      }

      function A(t, e, r) {
        this.i = t, this.x = e, this.y = r, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1;
      }

      function O(t, e, r, i) {
        for (var n = 0, o = e, s = r - i; o < r; o += i) n += (t[s] - t[o]) * (t[o + 1] + t[s + 1]), s = o;

        return n;
      }

      t.exports = e, t.exports.default = e, e.deviation = function (t, e, r, i) {
        var n = e && e.length,
            o = n ? e[0] * r : t.length,
            s = Math.abs(O(t, 0, o, r));
        if (n) for (var a = 0, h = e.length; a < h; a++) {
          var u = e[a] * r,
              l = a < h - 1 ? e[a + 1] * r : t.length;
          s -= Math.abs(O(t, u, l, r));
        }
        var c = 0;

        for (a = 0; a < i.length; a += 3) {
          var d = i[a] * r,
              f = i[a + 1] * r,
              p = i[a + 2] * r;
          c += Math.abs((t[d] - t[p]) * (t[f + 1] - t[d + 1]) - (t[d] - t[f]) * (t[p + 1] - t[d + 1]));
        }

        return 0 === s && 0 === c ? 0 : Math.abs((c - s) / s);
      }, e.flatten = function (t) {
        for (var e = t[0][0].length, r = {
          vertices: [],
          holes: [],
          dimensions: e
        }, i = 0, n = 0; n < t.length; n++) {
          for (var o = 0; o < t[n].length; o++) for (var s = 0; s < e; s++) r.vertices.push(t[n][o][s]);

          n > 0 && (i += t[n - 1].length, r.holes.push(i));
        }

        return r;
      };
    },
    418: t => {
      "use strict";

      var e = Object.getOwnPropertySymbols,
          r = Object.prototype.hasOwnProperty,
          i = Object.prototype.propertyIsEnumerable;

      function n(t) {
        if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(t);
      }

      t.exports = function () {
        try {
          if (!Object.assign) return !1;
          var t = new String("abc");
          if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;

          for (var e = {}, r = 0; r < 10; r++) e["_" + String.fromCharCode(r)] = r;

          if ("0123456789" !== Object.getOwnPropertyNames(e).map(function (t) {
            return e[t];
          }).join("")) return !1;
          var i = {};
          return "abcdefghijklmnopqrst".split("").forEach(function (t) {
            i[t] = t;
          }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, i)).join("");
        } catch (t) {
          return !1;
        }
      }() ? Object.assign : function (t, o) {
        for (var s, a, h = n(t), u = 1; u < arguments.length; u++) {
          for (var l in s = Object(arguments[u])) r.call(s, l) && (h[l] = s[l]);

          if (e) {
            a = e(s);

            for (var c = 0; c < a.length; c++) i.call(s, a[c]) && (h[a[c]] = s[a[c]]);
          }
        }

        return h;
      };
    },
    587: t => {
      "use strict";

      function e(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }

      t.exports = function (t, r, i, n) {
        r = r || "&", i = i || "=";
        var o = {};
        if ("string" != typeof t || 0 === t.length) return o;
        var s = /\+/g;
        t = t.split(r);
        var a = 1e3;
        n && "number" == typeof n.maxKeys && (a = n.maxKeys);
        var h = t.length;
        a > 0 && h > a && (h = a);

        for (var u = 0; u < h; ++u) {
          var l,
              c,
              d,
              f,
              p = t[u].replace(s, "%20"),
              _ = p.indexOf(i);

          _ >= 0 ? (l = p.substr(0, _), c = p.substr(_ + 1)) : (l = p, c = ""), d = decodeURIComponent(l), f = decodeURIComponent(c), e(o, d) ? Array.isArray(o[d]) ? o[d].push(f) : o[d] = [o[d], f] : o[d] = f;
        }

        return o;
      };
    },
    361: t => {
      "use strict";

      var e = function (t) {
        switch (typeof t) {
          case "string":
            return t;

          case "boolean":
            return t ? "true" : "false";

          case "number":
            return isFinite(t) ? t : "";

          default:
            return "";
        }
      };

      t.exports = function (t, r, i, n) {
        return r = r || "&", i = i || "=", null === t && (t = void 0), "object" == typeof t ? Object.keys(t).map(function (n) {
          var o = encodeURIComponent(e(n)) + i;
          return Array.isArray(t[n]) ? t[n].map(function (t) {
            return o + encodeURIComponent(e(t));
          }).join(r) : o + encodeURIComponent(e(t[n]));
        }).join(r) : n ? encodeURIComponent(e(n)) + i + encodeURIComponent(e(t)) : "";
      };
    },
    673: (t, e, r) => {
      "use strict";

      e.decode = e.parse = r(587), e.encode = e.stringify = r(361);
    },
    379: t => {
      "use strict";

      var e = [];

      function r(t) {
        for (var r = -1, i = 0; i < e.length; i++) if (e[i].identifier === t) {
          r = i;
          break;
        }

        return r;
      }

      function i(t, i) {
        for (var o = {}, s = [], a = 0; a < t.length; a++) {
          var h = t[a],
              u = i.base ? h[0] + i.base : h[0],
              l = o[u] || 0,
              c = "".concat(u, " ").concat(l);
          o[u] = l + 1;
          var d = r(c),
              f = {
            css: h[1],
            media: h[2],
            sourceMap: h[3],
            supports: h[4],
            layer: h[5]
          };
          if (-1 !== d) e[d].references++, e[d].updater(f);else {
            var p = n(f, i);
            i.byIndex = a, e.splice(a, 0, {
              identifier: c,
              updater: p,
              references: 1
            });
          }
          s.push(c);
        }

        return s;
      }

      function n(t, e) {
        var r = e.domAPI(e);
        return r.update(t), function (e) {
          if (e) {
            if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap && e.supports === t.supports && e.layer === t.layer) return;
            r.update(t = e);
          } else r.remove();
        };
      }

      t.exports = function (t, n) {
        var o = i(t = t || [], n = n || {});
        return function (t) {
          t = t || [];

          for (var s = 0; s < o.length; s++) {
            var a = r(o[s]);
            e[a].references--;
          }

          for (var h = i(t, n), u = 0; u < o.length; u++) {
            var l = r(o[u]);
            0 === e[l].references && (e[l].updater(), e.splice(l, 1));
          }

          o = h;
        };
      };
    },
    569: t => {
      "use strict";

      var e = {};

      t.exports = function (t, r) {
        var i = function (t) {
          if (void 0 === e[t]) {
            var r = document.querySelector(t);
            if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
              r = r.contentDocument.head;
            } catch (t) {
              r = null;
            }
            e[t] = r;
          }

          return e[t];
        }(t);

        if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        i.appendChild(r);
      };
    },
    216: t => {
      "use strict";

      t.exports = function (t) {
        var e = document.createElement("style");
        return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
      };
    },
    565: (t, e, r) => {
      "use strict";

      t.exports = function (t) {
        var e = r.nc;
        e && t.setAttribute("nonce", e);
      };
    },
    795: t => {
      "use strict";

      t.exports = function (t) {
        var e = t.insertStyleElement(t);
        return {
          update: function (r) {
            !function (t, e, r) {
              var i = "";
              r.supports && (i += "@supports (".concat(r.supports, ") {")), r.media && (i += "@media ".concat(r.media, " {"));
              var n = void 0 !== r.layer;
              n && (i += "@layer".concat(r.layer.length > 0 ? " ".concat(r.layer) : "", " {")), i += r.css, n && (i += "}"), r.media && (i += "}"), r.supports && (i += "}");
              var o = r.sourceMap;
              o && "undefined" != typeof btoa && (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")), e.styleTagTransform(i, t, e.options);
            }(e, t, r);
          },
          remove: function () {
            !function (t) {
              if (null === t.parentNode) return !1;
              t.parentNode.removeChild(t);
            }(e);
          }
        };
      };
    },
    589: t => {
      "use strict";

      t.exports = function (t, e) {
        if (e.styleSheet) e.styleSheet.cssText = t;else {
          for (; e.firstChild;) e.removeChild(e.firstChild);

          e.appendChild(document.createTextNode(t));
        }
      };
    },
    511: function (t, e, r) {
      var i;
      t = r.nmd(t), function (n) {
        e && e.nodeType, t && t.nodeType;
        var o = "object" == typeof r.g && r.g;
        o.global !== o && o.window !== o && o.self;
        var s,
            a = 2147483647,
            h = 36,
            u = /^xn--/,
            l = /[^\x20-\x7E]/,
            c = /[\x2E\u3002\uFF0E\uFF61]/g,
            d = {
          overflow: "Overflow: input needs wider integers to process",
          "not-basic": "Illegal input >= 0x80 (not a basic code point)",
          "invalid-input": "Invalid input"
        },
            f = Math.floor,
            p = String.fromCharCode;

        function _(t) {
          throw RangeError(d[t]);
        }

        function v(t, e) {
          for (var r = t.length, i = []; r--;) i[r] = e(t[r]);

          return i;
        }

        function m(t, e) {
          var r = t.split("@"),
              i = "";
          return r.length > 1 && (i = r[0] + "@", t = r[1]), i + v((t = t.replace(c, ".")).split("."), e).join(".");
        }

        function g(t) {
          for (var e, r, i = [], n = 0, o = t.length; n < o;) (e = t.charCodeAt(n++)) >= 55296 && e <= 56319 && n < o ? 56320 == (64512 & (r = t.charCodeAt(n++))) ? i.push(((1023 & e) << 10) + (1023 & r) + 65536) : (i.push(e), n--) : i.push(e);

          return i;
        }

        function y(t) {
          return v(t, function (t) {
            var e = "";
            return t > 65535 && (e += p((t -= 65536) >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e + p(t);
          }).join("");
        }

        function E(t, e) {
          return t + 22 + 75 * (t < 26) - ((0 != e) << 5);
        }

        function T(t, e, r) {
          var i = 0;

          for (t = r ? f(t / 700) : t >> 1, t += f(t / e); t > 455; i += h) t = f(t / 35);

          return f(i + 36 * t / (t + 38));
        }

        function b(t) {
          var e,
              r,
              i,
              n,
              o,
              s,
              u,
              l,
              c,
              d,
              p,
              v = [],
              m = t.length,
              g = 0,
              E = 128,
              b = 72;

          for ((r = t.lastIndexOf("-")) < 0 && (r = 0), i = 0; i < r; ++i) t.charCodeAt(i) >= 128 && _("not-basic"), v.push(t.charCodeAt(i));

          for (n = r > 0 ? r + 1 : 0; n < m;) {
            for (o = g, s = 1, u = h; n >= m && _("invalid-input"), ((l = (p = t.charCodeAt(n++)) - 48 < 10 ? p - 22 : p - 65 < 26 ? p - 65 : p - 97 < 26 ? p - 97 : h) >= h || l > f((a - g) / s)) && _("overflow"), g += l * s, !(l < (c = u <= b ? 1 : u >= b + 26 ? 26 : u - b)); u += h) s > f(a / (d = h - c)) && _("overflow"), s *= d;

            b = T(g - o, e = v.length + 1, 0 == o), f(g / e) > a - E && _("overflow"), E += f(g / e), g %= e, v.splice(g++, 0, E);
          }

          return y(v);
        }

        function x(t) {
          var e,
              r,
              i,
              n,
              o,
              s,
              u,
              l,
              c,
              d,
              v,
              m,
              y,
              b,
              x,
              R = [];

          for (m = (t = g(t)).length, e = 128, r = 0, o = 72, s = 0; s < m; ++s) (v = t[s]) < 128 && R.push(p(v));

          for (i = n = R.length, n && R.push("-"); i < m;) {
            for (u = a, s = 0; s < m; ++s) (v = t[s]) >= e && v < u && (u = v);

            for (u - e > f((a - r) / (y = i + 1)) && _("overflow"), r += (u - e) * y, e = u, s = 0; s < m; ++s) if ((v = t[s]) < e && ++r > a && _("overflow"), v == e) {
              for (l = r, c = h; !(l < (d = c <= o ? 1 : c >= o + 26 ? 26 : c - o)); c += h) x = l - d, b = h - d, R.push(p(E(d + x % b, 0))), l = f(x / b);

              R.push(p(E(l, 0))), o = T(r, y, i == n), r = 0, ++i;
            }

            ++r, ++e;
          }

          return R.join("");
        }

        s = {
          version: "1.3.2",
          ucs2: {
            decode: g,
            encode: y
          },
          decode: b,
          encode: x,
          toASCII: function (t) {
            return m(t, function (t) {
              return l.test(t) ? "xn--" + x(t) : t;
            });
          },
          toUnicode: function (t) {
            return m(t, function (t) {
              return u.test(t) ? b(t.slice(4).toLowerCase()) : t;
            });
          }
        }, void 0 === (i = function () {
          return s;
        }.call(e, r, e, t)) || (t.exports = i);
      }();
    },
    575: (t, e, r) => {
      "use strict";

      var i = r(511),
          n = r(502);

      function o() {
        this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
      }

      e.Qc = y, e.DB = function (t, e) {
        return y(t, !1, !0).resolve(e);
      }, e.WU = function (t) {
        return n.isString(t) && (t = y(t)), t instanceof o ? t.format() : o.prototype.format.call(t);
      };
      var s = /^([a-z0-9.+-]+:)/i,
          a = /:[0-9]*$/,
          h = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
          u = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
          l = ["'"].concat(u),
          c = ["%", "/", "?", ";", "#"].concat(l),
          d = ["/", "?", "#"],
          f = /^[+a-z0-9A-Z_-]{0,63}$/,
          p = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
          _ = {
        javascript: !0,
        "javascript:": !0
      },
          v = {
        javascript: !0,
        "javascript:": !0
      },
          m = {
        http: !0,
        https: !0,
        ftp: !0,
        gopher: !0,
        file: !0,
        "http:": !0,
        "https:": !0,
        "ftp:": !0,
        "gopher:": !0,
        "file:": !0
      },
          g = r(673);

      function y(t, e, r) {
        if (t && n.isObject(t) && t instanceof o) return t;
        var i = new o();
        return i.parse(t, e, r), i;
      }

      o.prototype.parse = function (t, e, r) {
        if (!n.isString(t)) throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
        var o = t.indexOf("?"),
            a = -1 !== o && o < t.indexOf("#") ? "?" : "#",
            u = t.split(a);
        u[0] = u[0].replace(/\\/g, "/");
        var y = t = u.join(a);

        if (y = y.trim(), !r && 1 === t.split("#").length) {
          var E = h.exec(y);
          if (E) return this.path = y, this.href = y, this.pathname = E[1], E[2] ? (this.search = E[2], this.query = e ? g.parse(this.search.substr(1)) : this.search.substr(1)) : e && (this.search = "", this.query = {}), this;
        }

        var T = s.exec(y);

        if (T) {
          var b = (T = T[0]).toLowerCase();
          this.protocol = b, y = y.substr(T.length);
        }

        if (r || T || y.match(/^\/\/[^@\/]+@[^@\/]+/)) {
          var x = "//" === y.substr(0, 2);
          !x || T && v[T] || (y = y.substr(2), this.slashes = !0);
        }

        if (!v[T] && (x || T && !m[T])) {
          for (var R, A, O = -1, S = 0; S < d.length; S++) -1 !== (I = y.indexOf(d[S])) && (-1 === O || I < O) && (O = I);

          for (-1 !== (A = -1 === O ? y.lastIndexOf("@") : y.lastIndexOf("@", O)) && (R = y.slice(0, A), y = y.slice(A + 1), this.auth = decodeURIComponent(R)), O = -1, S = 0; S < c.length; S++) {
            var I;
            -1 !== (I = y.indexOf(c[S])) && (-1 === O || I < O) && (O = I);
          }

          -1 === O && (O = y.length), this.host = y.slice(0, O), y = y.slice(O), this.parseHost(), this.hostname = this.hostname || "";
          var P = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
          if (!P) for (var N = this.hostname.split(/\./), M = (S = 0, N.length); S < M; S++) {
            var D = N[S];

            if (D && !D.match(f)) {
              for (var w = "", C = 0, L = D.length; C < L; C++) D.charCodeAt(C) > 127 ? w += "x" : w += D[C];

              if (!w.match(f)) {
                var F = N.slice(0, S),
                    U = N.slice(S + 1),
                    G = D.match(p);
                G && (F.push(G[1]), U.unshift(G[2])), U.length && (y = "/" + U.join(".") + y), this.hostname = F.join(".");
                break;
              }
            }
          }
          this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), P || (this.hostname = i.toASCII(this.hostname));
          var B = this.port ? ":" + this.port : "",
              X = this.hostname || "";
          this.host = X + B, this.href += this.host, P && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== y[0] && (y = "/" + y));
        }

        if (!_[b]) for (S = 0, M = l.length; S < M; S++) {
          var k = l[S];

          if (-1 !== y.indexOf(k)) {
            var H = encodeURIComponent(k);
            H === k && (H = escape(k)), y = y.split(k).join(H);
          }
        }
        var j = y.indexOf("#");
        -1 !== j && (this.hash = y.substr(j), y = y.slice(0, j));
        var Y = y.indexOf("?");

        if (-1 !== Y ? (this.search = y.substr(Y), this.query = y.substr(Y + 1), e && (this.query = g.parse(this.query)), y = y.slice(0, Y)) : e && (this.search = "", this.query = {}), y && (this.pathname = y), m[b] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
          B = this.pathname || "";
          var V = this.search || "";
          this.path = B + V;
        }

        return this.href = this.format(), this;
      }, o.prototype.format = function () {
        var t = this.auth || "";
        t && (t = (t = encodeURIComponent(t)).replace(/%3A/i, ":"), t += "@");
        var e = this.protocol || "",
            r = this.pathname || "",
            i = this.hash || "",
            o = !1,
            s = "";
        this.host ? o = t + this.host : this.hostname && (o = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (o += ":" + this.port)), this.query && n.isObject(this.query) && Object.keys(this.query).length && (s = g.stringify(this.query));
        var a = this.search || s && "?" + s || "";
        return e && ":" !== e.substr(-1) && (e += ":"), this.slashes || (!e || m[e]) && !1 !== o ? (o = "//" + (o || ""), r && "/" !== r.charAt(0) && (r = "/" + r)) : o || (o = ""), i && "#" !== i.charAt(0) && (i = "#" + i), a && "?" !== a.charAt(0) && (a = "?" + a), e + o + (r = r.replace(/[?#]/g, function (t) {
          return encodeURIComponent(t);
        })) + (a = a.replace("#", "%23")) + i;
      }, o.prototype.resolve = function (t) {
        return this.resolveObject(y(t, !1, !0)).format();
      }, o.prototype.resolveObject = function (t) {
        if (n.isString(t)) {
          var e = new o();
          e.parse(t, !1, !0), t = e;
        }

        for (var r = new o(), i = Object.keys(this), s = 0; s < i.length; s++) {
          var a = i[s];
          r[a] = this[a];
        }

        if (r.hash = t.hash, "" === t.href) return r.href = r.format(), r;

        if (t.slashes && !t.protocol) {
          for (var h = Object.keys(t), u = 0; u < h.length; u++) {
            var l = h[u];
            "protocol" !== l && (r[l] = t[l]);
          }

          return m[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r;
        }

        if (t.protocol && t.protocol !== r.protocol) {
          if (!m[t.protocol]) {
            for (var c = Object.keys(t), d = 0; d < c.length; d++) {
              var f = c[d];
              r[f] = t[f];
            }

            return r.href = r.format(), r;
          }

          if (r.protocol = t.protocol, t.host || v[t.protocol]) r.pathname = t.pathname;else {
            for (var p = (t.pathname || "").split("/"); p.length && !(t.host = p.shift()););

            t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== p[0] && p.unshift(""), p.length < 2 && p.unshift(""), r.pathname = p.join("/");
          }

          if (r.search = t.search, r.query = t.query, r.host = t.host || "", r.auth = t.auth, r.hostname = t.hostname || t.host, r.port = t.port, r.pathname || r.search) {
            var _ = r.pathname || "",
                g = r.search || "";

            r.path = _ + g;
          }

          return r.slashes = r.slashes || t.slashes, r.href = r.format(), r;
        }

        var y = r.pathname && "/" === r.pathname.charAt(0),
            E = t.host || t.pathname && "/" === t.pathname.charAt(0),
            T = E || y || r.host && t.pathname,
            b = T,
            x = r.pathname && r.pathname.split("/") || [],
            R = (p = t.pathname && t.pathname.split("/") || [], r.protocol && !m[r.protocol]);
        if (R && (r.hostname = "", r.port = null, r.host && ("" === x[0] ? x[0] = r.host : x.unshift(r.host)), r.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === p[0] ? p[0] = t.host : p.unshift(t.host)), t.host = null), T = T && ("" === p[0] || "" === x[0])), E) r.host = t.host || "" === t.host ? t.host : r.host, r.hostname = t.hostname || "" === t.hostname ? t.hostname : r.hostname, r.search = t.search, r.query = t.query, x = p;else if (p.length) x || (x = []), x.pop(), x = x.concat(p), r.search = t.search, r.query = t.query;else if (!n.isNullOrUndefined(t.search)) return R && (r.hostname = r.host = x.shift(), (P = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = P.shift(), r.host = r.hostname = P.shift())), r.search = t.search, r.query = t.query, n.isNull(r.pathname) && n.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r;
        if (!x.length) return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r;

        for (var A = x.slice(-1)[0], O = (r.host || t.host || x.length > 1) && ("." === A || ".." === A) || "" === A, S = 0, I = x.length; I >= 0; I--) "." === (A = x[I]) ? x.splice(I, 1) : ".." === A ? (x.splice(I, 1), S++) : S && (x.splice(I, 1), S--);

        if (!T && !b) for (; S--; S) x.unshift("..");
        !T || "" === x[0] || x[0] && "/" === x[0].charAt(0) || x.unshift(""), O && "/" !== x.join("/").substr(-1) && x.push("");
        var P,
            N = "" === x[0] || x[0] && "/" === x[0].charAt(0);
        return R && (r.hostname = r.host = N ? "" : x.length ? x.shift() : "", (P = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = P.shift(), r.host = r.hostname = P.shift())), (T = T || r.host && x.length) && !N && x.unshift(""), x.length ? r.pathname = x.join("/") : (r.pathname = null, r.path = null), n.isNull(r.pathname) && n.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = t.auth || r.auth, r.slashes = r.slashes || t.slashes, r.href = r.format(), r;
      }, o.prototype.parseHost = function () {
        var t = this.host,
            e = a.exec(t);
        e && (":" !== (e = e[0]) && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t);
      };
    },
    502: t => {
      "use strict";

      t.exports = {
        isString: function (t) {
          return "string" == typeof t;
        },
        isObject: function (t) {
          return "object" == typeof t && null !== t;
        },
        isNull: function (t) {
          return null === t;
        },
        isNullOrUndefined: function (t) {
          return null == t;
        }
      };
    }
  },
      e = {};

  function r(i) {
    var n = e[i];
    if (void 0 !== n) return n.exports;
    var o = e[i] = {
      id: i,
      loaded: !1,
      exports: {}
    };
    return t[i].call(o.exports, o, o.exports, r), o.loaded = !0, o.exports;
  }

  r.n = t => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return r.d(e, {
      a: e
    }), e;
  }, r.d = (t, e) => {
    for (var i in e) r.o(e, i) && !r.o(t, i) && Object.defineProperty(t, i, {
      enumerable: !0,
      get: e[i]
    });
  }, r.g = function () {
    if ("object" == typeof globalThis) return globalThis;

    try {
      return this || new Function("return this")();
    } catch (t) {
      if ("object" == typeof window) return window;
    }
  }(), r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), r.nmd = t => (t.paths = [], t.children || (t.children = []), t), (() => {
    "use strict";

    var t = setTimeout;

    function e(t) {
      return Boolean(t && void 0 !== t.length);
    }

    function i() {}

    function n(t) {
      if (!(this instanceof n)) throw new TypeError("Promises must be constructed via new");
      if ("function" != typeof t) throw new TypeError("not a function");
      this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], l(t, this);
    }

    function o(t, e) {
      for (; 3 === t._state;) t = t._value;

      0 !== t._state ? (t._handled = !0, n._immediateFn(function () {
        var r = 1 === t._state ? e.onFulfilled : e.onRejected;

        if (null !== r) {
          var i;

          try {
            i = r(t._value);
          } catch (t) {
            return void a(e.promise, t);
          }

          s(e.promise, i);
        } else (1 === t._state ? s : a)(e.promise, t._value);
      })) : t._deferreds.push(e);
    }

    function s(t, e) {
      try {
        if (e === t) throw new TypeError("A promise cannot be resolved with itself.");

        if (e && ("object" == typeof e || "function" == typeof e)) {
          var r = e.then;
          if (e instanceof n) return t._state = 3, t._value = e, void h(t);
          if ("function" == typeof r) return void l((i = r, o = e, function () {
            i.apply(o, arguments);
          }), t);
        }

        t._state = 1, t._value = e, h(t);
      } catch (e) {
        a(t, e);
      }

      var i, o;
    }

    function a(t, e) {
      t._state = 2, t._value = e, h(t);
    }

    function h(t) {
      2 === t._state && 0 === t._deferreds.length && n._immediateFn(function () {
        t._handled || n._unhandledRejectionFn(t._value);
      });

      for (var e = 0, r = t._deferreds.length; e < r; e++) o(t, t._deferreds[e]);

      t._deferreds = null;
    }

    function u(t, e, r) {
      this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = r;
    }

    function l(t, e) {
      var r = !1;

      try {
        t(function (t) {
          r || (r = !0, s(e, t));
        }, function (t) {
          r || (r = !0, a(e, t));
        });
      } catch (t) {
        if (r) return;
        r = !0, a(e, t);
      }
    }

    n.prototype.catch = function (t) {
      return this.then(null, t);
    }, n.prototype.then = function (t, e) {
      var r = new this.constructor(i);
      return o(this, new u(t, e, r)), r;
    }, n.prototype.finally = function (t) {
      var e = this.constructor;
      return this.then(function (r) {
        return e.resolve(t()).then(function () {
          return r;
        });
      }, function (r) {
        return e.resolve(t()).then(function () {
          return e.reject(r);
        });
      });
    }, n.all = function (t) {
      return new n(function (r, i) {
        if (!e(t)) return i(new TypeError("Promise.all accepts an array"));
        var n = Array.prototype.slice.call(t);
        if (0 === n.length) return r([]);
        var o = n.length;

        function s(t, e) {
          try {
            if (e && ("object" == typeof e || "function" == typeof e)) {
              var a = e.then;
              if ("function" == typeof a) return void a.call(e, function (e) {
                s(t, e);
              }, i);
            }

            n[t] = e, 0 == --o && r(n);
          } catch (t) {
            i(t);
          }
        }

        for (var a = 0; a < n.length; a++) s(a, n[a]);
      });
    }, n.allSettled = function (t) {
      return new this(function (e, r) {
        if (!t || void 0 === t.length) return r(new TypeError(typeof t + " " + t + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
        var i = Array.prototype.slice.call(t);
        if (0 === i.length) return e([]);
        var n = i.length;

        function o(t, r) {
          if (r && ("object" == typeof r || "function" == typeof r)) {
            var s = r.then;
            if ("function" == typeof s) return void s.call(r, function (e) {
              o(t, e);
            }, function (r) {
              i[t] = {
                status: "rejected",
                reason: r
              }, 0 == --n && e(i);
            });
          }

          i[t] = {
            status: "fulfilled",
            value: r
          }, 0 == --n && e(i);
        }

        for (var s = 0; s < i.length; s++) o(s, i[s]);
      });
    }, n.resolve = function (t) {
      return t && "object" == typeof t && t.constructor === n ? t : new n(function (e) {
        e(t);
      });
    }, n.reject = function (t) {
      return new n(function (e, r) {
        r(t);
      });
    }, n.race = function (t) {
      return new n(function (r, i) {
        if (!e(t)) return i(new TypeError("Promise.race accepts an array"));

        for (var o = 0, s = t.length; o < s; o++) n.resolve(t[o]).then(r, i);
      });
    }, n._immediateFn = "function" == typeof setImmediate && function (t) {
      setImmediate(t);
    } || function (e) {
      t(e, 0);
    }, n._unhandledRejectionFn = function (t) {
      "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t);
    };
    const c = n;
    var d = r(418),
        f = r.n(d);

    if ("undefined" == typeof globalThis && ("undefined" != typeof self ? self.globalThis = self : void 0 !== r.g && (r.g.globalThis = r.g)), globalThis.Promise || (globalThis.Promise = c), Object.assign || (Object.assign = f()), Date.now && Date.prototype.getTime || (Date.now = function () {
      return new Date().getTime();
    }), !globalThis.performance || !globalThis.performance.now) {
      var p = Date.now();
      globalThis.performance || (globalThis.performance = {}), globalThis.performance.now = function () {
        return Date.now() - p;
      };
    }

    for (var _ = Date.now(), v = ["ms", "moz", "webkit", "o"], m = 0; m < v.length && !globalThis.requestAnimationFrame; ++m) {
      var g = v[m];
      globalThis.requestAnimationFrame = globalThis[g + "RequestAnimationFrame"], globalThis.cancelAnimationFrame = globalThis[g + "CancelAnimationFrame"] || globalThis[g + "CancelRequestAnimationFrame"];
    }

    globalThis.requestAnimationFrame || (globalThis.requestAnimationFrame = function (t) {
      if ("function" != typeof t) throw new TypeError(t + "is not a function");
      var e = Date.now(),
          r = 16 + _ - e;
      return r < 0 && (r = 0), _ = e, globalThis.self.setTimeout(function () {
        _ = Date.now(), t(performance.now());
      }, r);
    }), globalThis.cancelAnimationFrame || (globalThis.cancelAnimationFrame = function (t) {
      return clearTimeout(t);
    }), Math.sign || (Math.sign = function (t) {
      return 0 === (t = Number(t)) || isNaN(t) ? t : t > 0 ? 1 : -1;
    }), Number.isInteger || (Number.isInteger = function (t) {
      return "number" == typeof t && isFinite(t) && Math.floor(t) === t;
    }), globalThis.ArrayBuffer || (globalThis.ArrayBuffer = Array), globalThis.Float32Array || (globalThis.Float32Array = Array), globalThis.Uint32Array || (globalThis.Uint32Array = Array), globalThis.Uint16Array || (globalThis.Uint16Array = Array), globalThis.Uint8Array || (globalThis.Uint8Array = Array), globalThis.Int32Array || (globalThis.Int32Array = Array);

    var y,
        E,
        T,
        b,
        x,
        R,
        A,
        O,
        S,
        I,
        P,
        N,
        M,
        D,
        w,
        C,
        L,
        F,
        U,
        G = /iPhone/i,
        B = /iPod/i,
        X = /iPad/i,
        k = /\biOS-universal(?:.+)Mac\b/i,
        H = /\bAndroid(?:.+)Mobile\b/i,
        j = /Android/i,
        Y = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,
        V = /Silk/i,
        W = /Windows Phone/i,
        z = /\bWindows(?:.+)ARM\b/i,
        q = /BlackBerry/i,
        K = /BB10/i,
        Z = /Opera Mini/i,
        J = /\b(CriOS|Chrome)(?:.+)Mobile/i,
        Q = /Mobile(?:.+)Firefox\b/i,
        $ = function (t) {
      return void 0 !== t && "MacIntel" === t.platform && "number" == typeof t.maxTouchPoints && t.maxTouchPoints > 1 && "undefined" == typeof MSStream;
    },
        tt = function (t) {
      var e = {
        userAgent: "",
        platform: "",
        maxTouchPoints: 0
      };
      t || "undefined" == typeof navigator ? "string" == typeof t ? e.userAgent = t : t && t.userAgent && (e = {
        userAgent: t.userAgent,
        platform: t.platform,
        maxTouchPoints: t.maxTouchPoints || 0
      }) : e = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        maxTouchPoints: navigator.maxTouchPoints || 0
      };
      var r = e.userAgent,
          i = r.split("[FBAN");
      void 0 !== i[1] && (r = i[0]), void 0 !== (i = r.split("Twitter"))[1] && (r = i[0]);

      var n = function (t) {
        return function (e) {
          return e.test(t);
        };
      }(r),
          o = {
        apple: {
          phone: n(G) && !n(W),
          ipod: n(B),
          tablet: !n(G) && (n(X) || $(e)) && !n(W),
          universal: n(k),
          device: (n(G) || n(B) || n(X) || n(k) || $(e)) && !n(W)
        },
        amazon: {
          phone: n(Y),
          tablet: !n(Y) && n(V),
          device: n(Y) || n(V)
        },
        android: {
          phone: !n(W) && n(Y) || !n(W) && n(H),
          tablet: !n(W) && !n(Y) && !n(H) && (n(V) || n(j)),
          device: !n(W) && (n(Y) || n(V) || n(H) || n(j)) || n(/\bokhttp\b/i)
        },
        windows: {
          phone: n(W),
          tablet: n(z),
          device: n(W) || n(z)
        },
        other: {
          blackberry: n(q),
          blackberry10: n(K),
          opera: n(Z),
          firefox: n(Q),
          chrome: n(J),
          device: n(q) || n(K) || n(Z) || n(Q) || n(J)
        },
        any: !1,
        phone: !1,
        tablet: !1
      };

      return o.any = o.apple.device || o.android.device || o.windows.device || o.other.device, o.phone = o.apple.phone || o.android.phone || o.windows.phone, o.tablet = o.apple.tablet || o.android.tablet || o.windows.tablet, o;
    }(globalThis.navigator);

    !function (t) {
      t[t.WEBGL_LEGACY = 0] = "WEBGL_LEGACY", t[t.WEBGL = 1] = "WEBGL", t[t.WEBGL2 = 2] = "WEBGL2";
    }(y || (y = {})), function (t) {
      t[t.UNKNOWN = 0] = "UNKNOWN", t[t.WEBGL = 1] = "WEBGL", t[t.CANVAS = 2] = "CANVAS";
    }(E || (E = {})), function (t) {
      t[t.COLOR = 16384] = "COLOR", t[t.DEPTH = 256] = "DEPTH", t[t.STENCIL = 1024] = "STENCIL";
    }(T || (T = {})), function (t) {
      t[t.NORMAL = 0] = "NORMAL", t[t.ADD = 1] = "ADD", t[t.MULTIPLY = 2] = "MULTIPLY", t[t.SCREEN = 3] = "SCREEN", t[t.OVERLAY = 4] = "OVERLAY", t[t.DARKEN = 5] = "DARKEN", t[t.LIGHTEN = 6] = "LIGHTEN", t[t.COLOR_DODGE = 7] = "COLOR_DODGE", t[t.COLOR_BURN = 8] = "COLOR_BURN", t[t.HARD_LIGHT = 9] = "HARD_LIGHT", t[t.SOFT_LIGHT = 10] = "SOFT_LIGHT", t[t.DIFFERENCE = 11] = "DIFFERENCE", t[t.EXCLUSION = 12] = "EXCLUSION", t[t.HUE = 13] = "HUE", t[t.SATURATION = 14] = "SATURATION", t[t.COLOR = 15] = "COLOR", t[t.LUMINOSITY = 16] = "LUMINOSITY", t[t.NORMAL_NPM = 17] = "NORMAL_NPM", t[t.ADD_NPM = 18] = "ADD_NPM", t[t.SCREEN_NPM = 19] = "SCREEN_NPM", t[t.NONE = 20] = "NONE", t[t.SRC_OVER = 0] = "SRC_OVER", t[t.SRC_IN = 21] = "SRC_IN", t[t.SRC_OUT = 22] = "SRC_OUT", t[t.SRC_ATOP = 23] = "SRC_ATOP", t[t.DST_OVER = 24] = "DST_OVER", t[t.DST_IN = 25] = "DST_IN", t[t.DST_OUT = 26] = "DST_OUT", t[t.DST_ATOP = 27] = "DST_ATOP", t[t.ERASE = 26] = "ERASE", t[t.SUBTRACT = 28] = "SUBTRACT", t[t.XOR = 29] = "XOR";
    }(b || (b = {})), function (t) {
      t[t.POINTS = 0] = "POINTS", t[t.LINES = 1] = "LINES", t[t.LINE_LOOP = 2] = "LINE_LOOP", t[t.LINE_STRIP = 3] = "LINE_STRIP", t[t.TRIANGLES = 4] = "TRIANGLES", t[t.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP", t[t.TRIANGLE_FAN = 6] = "TRIANGLE_FAN";
    }(x || (x = {})), function (t) {
      t[t.RGBA = 6408] = "RGBA", t[t.RGB = 6407] = "RGB", t[t.RG = 33319] = "RG", t[t.RED = 6403] = "RED", t[t.RGBA_INTEGER = 36249] = "RGBA_INTEGER", t[t.RGB_INTEGER = 36248] = "RGB_INTEGER", t[t.RG_INTEGER = 33320] = "RG_INTEGER", t[t.RED_INTEGER = 36244] = "RED_INTEGER", t[t.ALPHA = 6406] = "ALPHA", t[t.LUMINANCE = 6409] = "LUMINANCE", t[t.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA", t[t.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT", t[t.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL";
    }(R || (R = {})), function (t) {
      t[t.TEXTURE_2D = 3553] = "TEXTURE_2D", t[t.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP", t[t.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY", t[t.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X", t[t.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X", t[t.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y", t[t.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z";
    }(A || (A = {})), function (t) {
      t[t.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", t[t.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", t[t.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", t[t.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", t[t.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1", t[t.UNSIGNED_INT = 5125] = "UNSIGNED_INT", t[t.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV", t[t.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV", t[t.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8", t[t.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV", t[t.BYTE = 5120] = "BYTE", t[t.SHORT = 5122] = "SHORT", t[t.INT = 5124] = "INT", t[t.FLOAT = 5126] = "FLOAT", t[t.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV", t[t.HALF_FLOAT = 36193] = "HALF_FLOAT";
    }(O || (O = {})), function (t) {
      t[t.FLOAT = 0] = "FLOAT", t[t.INT = 1] = "INT", t[t.UINT = 2] = "UINT";
    }(S || (S = {})), function (t) {
      t[t.NEAREST = 0] = "NEAREST", t[t.LINEAR = 1] = "LINEAR";
    }(I || (I = {})), function (t) {
      t[t.CLAMP = 33071] = "CLAMP", t[t.REPEAT = 10497] = "REPEAT", t[t.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT";
    }(P || (P = {})), function (t) {
      t[t.OFF = 0] = "OFF", t[t.POW2 = 1] = "POW2", t[t.ON = 2] = "ON", t[t.ON_MANUAL = 3] = "ON_MANUAL";
    }(N || (N = {})), function (t) {
      t[t.NPM = 0] = "NPM", t[t.UNPACK = 1] = "UNPACK", t[t.PMA = 2] = "PMA", t[t.NO_PREMULTIPLIED_ALPHA = 0] = "NO_PREMULTIPLIED_ALPHA", t[t.PREMULTIPLY_ON_UPLOAD = 1] = "PREMULTIPLY_ON_UPLOAD", t[t.PREMULTIPLY_ALPHA = 2] = "PREMULTIPLY_ALPHA", t[t.PREMULTIPLIED_ALPHA = 2] = "PREMULTIPLIED_ALPHA";
    }(M || (M = {})), function (t) {
      t[t.NO = 0] = "NO", t[t.YES = 1] = "YES", t[t.AUTO = 2] = "AUTO", t[t.BLEND = 0] = "BLEND", t[t.CLEAR = 1] = "CLEAR", t[t.BLIT = 2] = "BLIT";
    }(D || (D = {})), function (t) {
      t[t.AUTO = 0] = "AUTO", t[t.MANUAL = 1] = "MANUAL";
    }(w || (w = {})), function (t) {
      t.LOW = "lowp", t.MEDIUM = "mediump", t.HIGH = "highp";
    }(C || (C = {})), function (t) {
      t[t.NONE = 0] = "NONE", t[t.SCISSOR = 1] = "SCISSOR", t[t.STENCIL = 2] = "STENCIL", t[t.SPRITE = 3] = "SPRITE";
    }(L || (L = {})), function (t) {
      t[t.NONE = 0] = "NONE", t[t.LOW = 2] = "LOW", t[t.MEDIUM = 4] = "MEDIUM", t[t.HIGH = 8] = "HIGH";
    }(F || (F = {})), function (t) {
      t[t.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER", t[t.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", t[t.UNIFORM_BUFFER = 35345] = "UNIFORM_BUFFER";
    }(U || (U = {}));

    var et,
        rt,
        it,
        nt,
        ot,
        st,
        at,
        ht,
        ut,
        lt,
        ct,
        dt,
        ft,
        pt,
        _t,
        vt,
        mt,
        gt,
        yt,
        Et = {
      MIPMAP_TEXTURES: N.POW2,
      ANISOTROPIC_LEVEL: 0,
      RESOLUTION: 1,
      FILTER_RESOLUTION: 1,
      FILTER_MULTISAMPLE: F.NONE,
      SPRITE_MAX_TEXTURES: function (t) {
        var e,
            r = !0;
        (tt.tablet || tt.phone) && (tt.apple.device && (e = navigator.userAgent.match(/OS (\d+)_(\d+)?/)) && parseInt(e[1], 10) < 11 && (r = !1), tt.android.device && (e = navigator.userAgent.match(/Android\s([0-9.]*)/)) && parseInt(e[1], 10) < 7 && (r = !1));
        return r ? 32 : 4;
      }(),
      SPRITE_BATCH_SIZE: 4096,
      RENDER_OPTIONS: {
        view: null,
        antialias: !1,
        autoDensity: !1,
        backgroundColor: 0,
        backgroundAlpha: 1,
        useContextAlpha: !0,
        clearBeforeRender: !0,
        preserveDrawingBuffer: !1,
        width: 800,
        height: 600,
        legacy: !1
      },
      GC_MODE: w.AUTO,
      GC_MAX_IDLE: 3600,
      GC_MAX_CHECK_COUNT: 600,
      WRAP_MODE: P.CLAMP,
      SCALE_MODE: I.LINEAR,
      PRECISION_VERTEX: C.HIGH,
      PRECISION_FRAGMENT: tt.apple.device ? C.HIGH : C.MEDIUM,
      CAN_UPLOAD_SAME_BUFFER: !tt.apple.device,
      CREATE_IMAGE_BITMAP: !1,
      ROUND_PIXELS: !1
    },
        Tt = r(718),
        bt = r.n(Tt),
        xt = r(187),
        Rt = r.n(xt),
        At = r(575);

    !function (t) {
      t[t.WEBGL_LEGACY = 0] = "WEBGL_LEGACY", t[t.WEBGL = 1] = "WEBGL", t[t.WEBGL2 = 2] = "WEBGL2";
    }(et || (et = {})), function (t) {
      t[t.UNKNOWN = 0] = "UNKNOWN", t[t.WEBGL = 1] = "WEBGL", t[t.CANVAS = 2] = "CANVAS";
    }(rt || (rt = {})), function (t) {
      t[t.COLOR = 16384] = "COLOR", t[t.DEPTH = 256] = "DEPTH", t[t.STENCIL = 1024] = "STENCIL";
    }(it || (it = {})), function (t) {
      t[t.NORMAL = 0] = "NORMAL", t[t.ADD = 1] = "ADD", t[t.MULTIPLY = 2] = "MULTIPLY", t[t.SCREEN = 3] = "SCREEN", t[t.OVERLAY = 4] = "OVERLAY", t[t.DARKEN = 5] = "DARKEN", t[t.LIGHTEN = 6] = "LIGHTEN", t[t.COLOR_DODGE = 7] = "COLOR_DODGE", t[t.COLOR_BURN = 8] = "COLOR_BURN", t[t.HARD_LIGHT = 9] = "HARD_LIGHT", t[t.SOFT_LIGHT = 10] = "SOFT_LIGHT", t[t.DIFFERENCE = 11] = "DIFFERENCE", t[t.EXCLUSION = 12] = "EXCLUSION", t[t.HUE = 13] = "HUE", t[t.SATURATION = 14] = "SATURATION", t[t.COLOR = 15] = "COLOR", t[t.LUMINOSITY = 16] = "LUMINOSITY", t[t.NORMAL_NPM = 17] = "NORMAL_NPM", t[t.ADD_NPM = 18] = "ADD_NPM", t[t.SCREEN_NPM = 19] = "SCREEN_NPM", t[t.NONE = 20] = "NONE", t[t.SRC_OVER = 0] = "SRC_OVER", t[t.SRC_IN = 21] = "SRC_IN", t[t.SRC_OUT = 22] = "SRC_OUT", t[t.SRC_ATOP = 23] = "SRC_ATOP", t[t.DST_OVER = 24] = "DST_OVER", t[t.DST_IN = 25] = "DST_IN", t[t.DST_OUT = 26] = "DST_OUT", t[t.DST_ATOP = 27] = "DST_ATOP", t[t.ERASE = 26] = "ERASE", t[t.SUBTRACT = 28] = "SUBTRACT", t[t.XOR = 29] = "XOR";
    }(nt || (nt = {})), function (t) {
      t[t.POINTS = 0] = "POINTS", t[t.LINES = 1] = "LINES", t[t.LINE_LOOP = 2] = "LINE_LOOP", t[t.LINE_STRIP = 3] = "LINE_STRIP", t[t.TRIANGLES = 4] = "TRIANGLES", t[t.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP", t[t.TRIANGLE_FAN = 6] = "TRIANGLE_FAN";
    }(ot || (ot = {})), function (t) {
      t[t.RGBA = 6408] = "RGBA", t[t.RGB = 6407] = "RGB", t[t.RG = 33319] = "RG", t[t.RED = 6403] = "RED", t[t.RGBA_INTEGER = 36249] = "RGBA_INTEGER", t[t.RGB_INTEGER = 36248] = "RGB_INTEGER", t[t.RG_INTEGER = 33320] = "RG_INTEGER", t[t.RED_INTEGER = 36244] = "RED_INTEGER", t[t.ALPHA = 6406] = "ALPHA", t[t.LUMINANCE = 6409] = "LUMINANCE", t[t.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA", t[t.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT", t[t.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL";
    }(st || (st = {})), function (t) {
      t[t.TEXTURE_2D = 3553] = "TEXTURE_2D", t[t.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP", t[t.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY", t[t.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X", t[t.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X", t[t.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y", t[t.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z";
    }(at || (at = {})), function (t) {
      t[t.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", t[t.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", t[t.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", t[t.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", t[t.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1", t[t.UNSIGNED_INT = 5125] = "UNSIGNED_INT", t[t.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV", t[t.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV", t[t.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8", t[t.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV", t[t.BYTE = 5120] = "BYTE", t[t.SHORT = 5122] = "SHORT", t[t.INT = 5124] = "INT", t[t.FLOAT = 5126] = "FLOAT", t[t.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV", t[t.HALF_FLOAT = 36193] = "HALF_FLOAT";
    }(ht || (ht = {})), function (t) {
      t[t.FLOAT = 0] = "FLOAT", t[t.INT = 1] = "INT", t[t.UINT = 2] = "UINT";
    }(ut || (ut = {})), function (t) {
      t[t.NEAREST = 0] = "NEAREST", t[t.LINEAR = 1] = "LINEAR";
    }(lt || (lt = {})), function (t) {
      t[t.CLAMP = 33071] = "CLAMP", t[t.REPEAT = 10497] = "REPEAT", t[t.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT";
    }(ct || (ct = {})), function (t) {
      t[t.OFF = 0] = "OFF", t[t.POW2 = 1] = "POW2", t[t.ON = 2] = "ON", t[t.ON_MANUAL = 3] = "ON_MANUAL";
    }(dt || (dt = {})), function (t) {
      t[t.NPM = 0] = "NPM", t[t.UNPACK = 1] = "UNPACK", t[t.PMA = 2] = "PMA", t[t.NO_PREMULTIPLIED_ALPHA = 0] = "NO_PREMULTIPLIED_ALPHA", t[t.PREMULTIPLY_ON_UPLOAD = 1] = "PREMULTIPLY_ON_UPLOAD", t[t.PREMULTIPLY_ALPHA = 2] = "PREMULTIPLY_ALPHA", t[t.PREMULTIPLIED_ALPHA = 2] = "PREMULTIPLIED_ALPHA";
    }(ft || (ft = {})), function (t) {
      t[t.NO = 0] = "NO", t[t.YES = 1] = "YES", t[t.AUTO = 2] = "AUTO", t[t.BLEND = 0] = "BLEND", t[t.CLEAR = 1] = "CLEAR", t[t.BLIT = 2] = "BLIT";
    }(pt || (pt = {})), function (t) {
      t[t.AUTO = 0] = "AUTO", t[t.MANUAL = 1] = "MANUAL";
    }(_t || (_t = {})), function (t) {
      t.LOW = "lowp", t.MEDIUM = "mediump", t.HIGH = "highp";
    }(vt || (vt = {})), function (t) {
      t[t.NONE = 0] = "NONE", t[t.SCISSOR = 1] = "SCISSOR", t[t.STENCIL = 2] = "STENCIL", t[t.SPRITE = 3] = "SPRITE";
    }(mt || (mt = {})), function (t) {
      t[t.NONE = 0] = "NONE", t[t.LOW = 2] = "LOW", t[t.MEDIUM = 4] = "MEDIUM", t[t.HIGH = 8] = "HIGH";
    }(gt || (gt = {})), function (t) {
      t[t.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER", t[t.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", t[t.UNIFORM_BUFFER = 35345] = "UNIFORM_BUFFER";
    }(yt || (yt = {}));
    var Ot = {
      parse: At.Qc,
      format: At.WU,
      resolve: At.DB
    };
    Et.RETINA_PREFIX = /@([0-9\.]+)x/, Et.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = !1;
    var St,
        It = !1,
        Pt = {
      aliceblue: "#f0f8ff",
      antiquewhite: "#faebd7",
      aqua: "#00ffff",
      aquamarine: "#7fffd4",
      azure: "#f0ffff",
      beige: "#f5f5dc",
      bisque: "#ffe4c4",
      black: "#000000",
      blanchedalmond: "#ffebcd",
      blue: "#0000ff",
      blueviolet: "#8a2be2",
      brown: "#a52a2a",
      burlywood: "#deb887",
      cadetblue: "#5f9ea0",
      chartreuse: "#7fff00",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      cornflowerblue: "#6495ed",
      cornsilk: "#fff8dc",
      crimson: "#dc143c",
      cyan: "#00ffff",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkgray: "#a9a9a9",
      darkgreen: "#006400",
      darkgrey: "#a9a9a9",
      darkkhaki: "#bdb76b",
      darkmagenta: "#8b008b",
      darkolivegreen: "#556b2f",
      darkorange: "#ff8c00",
      darkorchid: "#9932cc",
      darkred: "#8b0000",
      darksalmon: "#e9967a",
      darkseagreen: "#8fbc8f",
      darkslateblue: "#483d8b",
      darkslategray: "#2f4f4f",
      darkslategrey: "#2f4f4f",
      darkturquoise: "#00ced1",
      darkviolet: "#9400d3",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1e90ff",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      forestgreen: "#228b22",
      fuchsia: "#ff00ff",
      gainsboro: "#dcdcdc",
      ghostwhite: "#f8f8ff",
      goldenrod: "#daa520",
      gold: "#ffd700",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#adff2f",
      grey: "#808080",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      indianred: "#cd5c5c",
      indigo: "#4b0082",
      ivory: "#fffff0",
      khaki: "#f0e68c",
      lavenderblush: "#fff0f5",
      lavender: "#e6e6fa",
      lawngreen: "#7cfc00",
      lemonchiffon: "#fffacd",
      lightblue: "#add8e6",
      lightcoral: "#f08080",
      lightcyan: "#e0ffff",
      lightgoldenrodyellow: "#fafad2",
      lightgray: "#d3d3d3",
      lightgreen: "#90ee90",
      lightgrey: "#d3d3d3",
      lightpink: "#ffb6c1",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      lightskyblue: "#87cefa",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#b0c4de",
      lightyellow: "#ffffe0",
      lime: "#00ff00",
      limegreen: "#32cd32",
      linen: "#faf0e6",
      magenta: "#ff00ff",
      maroon: "#800000",
      mediumaquamarine: "#66cdaa",
      mediumblue: "#0000cd",
      mediumorchid: "#ba55d3",
      mediumpurple: "#9370db",
      mediumseagreen: "#3cb371",
      mediumslateblue: "#7b68ee",
      mediumspringgreen: "#00fa9a",
      mediumturquoise: "#48d1cc",
      mediumvioletred: "#c71585",
      midnightblue: "#191970",
      mintcream: "#f5fffa",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      navajowhite: "#ffdead",
      navy: "#000080",
      oldlace: "#fdf5e6",
      olive: "#808000",
      olivedrab: "#6b8e23",
      orange: "#ffa500",
      orangered: "#ff4500",
      orchid: "#da70d6",
      palegoldenrod: "#eee8aa",
      palegreen: "#98fb98",
      paleturquoise: "#afeeee",
      palevioletred: "#db7093",
      papayawhip: "#ffefd5",
      peachpuff: "#ffdab9",
      peru: "#cd853f",
      pink: "#ffc0cb",
      plum: "#dda0dd",
      powderblue: "#b0e0e6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#ff0000",
      rosybrown: "#bc8f8f",
      royalblue: "#4169e1",
      saddlebrown: "#8b4513",
      salmon: "#fa8072",
      sandybrown: "#f4a460",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      sienna: "#a0522d",
      silver: "#c0c0c0",
      skyblue: "#87ceeb",
      slateblue: "#6a5acd",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#fffafa",
      springgreen: "#00ff7f",
      steelblue: "#4682b4",
      tan: "#d2b48c",
      teal: "#008080",
      thistle: "#d8bfd8",
      tomato: "#ff6347",
      turquoise: "#40e0d0",
      violet: "#ee82ee",
      wheat: "#f5deb3",
      white: "#ffffff",
      whitesmoke: "#f5f5f5",
      yellow: "#ffff00",
      yellowgreen: "#9acd32"
    };

    function Nt(t, e) {
      return void 0 === e && (e = []), e[0] = (t >> 16 & 255) / 255, e[1] = (t >> 8 & 255) / 255, e[2] = (255 & t) / 255, e;
    }

    function Mt(t) {
      var e = t.toString(16);
      return "#" + ("000000".substring(0, 6 - e.length) + e);
    }

    function Dt(t) {
      return "string" == typeof t && "#" === (t = Pt[t.toLowerCase()] || t)[0] && (t = t.slice(1)), parseInt(t, 16);
    }

    var wt = function () {
      for (var t = [], e = [], r = 0; r < 32; r++) t[r] = r, e[r] = r;

      t[nt.NORMAL_NPM] = nt.NORMAL, t[nt.ADD_NPM] = nt.ADD, t[nt.SCREEN_NPM] = nt.SCREEN, e[nt.NORMAL] = nt.NORMAL_NPM, e[nt.ADD] = nt.ADD_NPM, e[nt.SCREEN] = nt.SCREEN_NPM;
      var i = [];
      return i.push(e), i.push(t), i;
    }();

    function Ct(t, e) {
      return wt[e ? 1 : 0][t];
    }

    function Lt(t, e) {
      if (1 === e) return (255 * e << 24) + t;
      if (0 === e) return 0;
      var r = t >> 16 & 255,
          i = t >> 8 & 255,
          n = 255 & t;
      return (255 * e << 24) + ((r = r * e + .5 | 0) << 16) + ((i = i * e + .5 | 0) << 8) + (n * e + .5 | 0);
    }

    function Ft(t, e, r, i) {
      return (r = r || new Float32Array(4))[0] = (t >> 16 & 255) / 255, r[1] = (t >> 8 & 255) / 255, r[2] = (255 & t) / 255, (i || void 0 === i) && (r[0] *= e, r[1] *= e, r[2] *= e), r[3] = e, r;
    }

    function Ut(t) {
      if (4 === t.BYTES_PER_ELEMENT) return t instanceof Float32Array ? "Float32Array" : t instanceof Uint32Array ? "Uint32Array" : "Int32Array";

      if (2 === t.BYTES_PER_ELEMENT) {
        if (t instanceof Uint16Array) return "Uint16Array";
      } else if (1 === t.BYTES_PER_ELEMENT && t instanceof Uint8Array) return "Uint8Array";

      return null;
    }

    function Gt(t) {
      return t += 0 === t ? 1 : 0, --t, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, 1 + (t |= t >>> 16);
    }

    function Bt(t) {
      return !(t & t - 1 || !t);
    }

    function Xt(t) {
      var e = (t > 65535 ? 1 : 0) << 4,
          r = ((t >>>= e) > 255 ? 1 : 0) << 3;
      return e |= r, e |= r = ((t >>>= r) > 15 ? 1 : 0) << 2, (e |= r = ((t >>>= r) > 3 ? 1 : 0) << 1) | (t >>>= r) >> 1;
    }

    function kt(t, e, r) {
      var i,
          n = t.length;

      if (!(e >= n || 0 === r)) {
        var o = n - (r = e + r > n ? n - e : r);

        for (i = e; i < o; ++i) t[i] = t[i + r];

        t.length = o;
      }
    }

    function Ht(t) {
      return 0 === t ? 0 : t < 0 ? -1 : 1;
    }

    Float32Array, Uint32Array, Int32Array, Uint8Array;
    var jt = 0;

    function Yt() {
      return ++jt;
    }

    var Vt = {};

    function Wt(t, e, r) {
      if (void 0 === r && (r = 3), !Vt[e]) {
        var i = new Error().stack;
        void 0 === i ? console.warn("PixiJS Deprecation Warning: ", e + "\nDeprecated since v" + t) : (i = i.split("\n").splice(r).join("\n"), console.groupCollapsed ? (console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s", "color:#614108;background:#fffbe6", "font-weight:normal;color:#614108;background:#fffbe6", e + "\nDeprecated since v" + t), console.warn(i), console.groupEnd()) : (console.warn("PixiJS Deprecation Warning: ", e + "\nDeprecated since v" + t), console.warn(i))), Vt[e] = !0;
      }
    }

    var zt,
        qt = {},
        Kt = Object.create(null),
        Zt = Object.create(null),
        Jt = function () {
      function t(t, e, r) {
        this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.resolution = r || Et.RESOLUTION, this.resize(t, e);
      }

      return t.prototype.clear = function () {
        this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }, t.prototype.resize = function (t, e) {
        this.canvas.width = Math.round(t * this.resolution), this.canvas.height = Math.round(e * this.resolution);
      }, t.prototype.destroy = function () {
        this.context = null, this.canvas = null;
      }, Object.defineProperty(t.prototype, "width", {
        get: function () {
          return this.canvas.width;
        },
        set: function (t) {
          this.canvas.width = Math.round(t);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "height", {
        get: function () {
          return this.canvas.height;
        },
        set: function (t) {
          this.canvas.height = Math.round(t);
        },
        enumerable: !1,
        configurable: !0
      }), t;
    }();

    function Qt(t, e) {
      var r = Et.RETINA_PREFIX.exec(t);
      return r ? parseFloat(r[1]) : void 0 !== e ? e : 1;
    }

    var $t,
        te = 2 * Math.PI,
        ee = 180 / Math.PI,
        re = Math.PI / 180;
    !function (t) {
      t[t.POLY = 0] = "POLY", t[t.RECT = 1] = "RECT", t[t.CIRC = 2] = "CIRC", t[t.ELIP = 3] = "ELIP", t[t.RREC = 4] = "RREC";
    }($t || ($t = {}));

    var ie = function () {
      function t(t, e) {
        void 0 === t && (t = 0), void 0 === e && (e = 0), this.x = 0, this.y = 0, this.x = t, this.y = e;
      }

      return t.prototype.clone = function () {
        return new t(this.x, this.y);
      }, t.prototype.copyFrom = function (t) {
        return this.set(t.x, t.y), this;
      }, t.prototype.copyTo = function (t) {
        return t.set(this.x, this.y), t;
      }, t.prototype.equals = function (t) {
        return t.x === this.x && t.y === this.y;
      }, t.prototype.set = function (t, e) {
        return void 0 === t && (t = 0), void 0 === e && (e = t), this.x = t, this.y = e, this;
      }, t.prototype.toString = function () {
        return "[@pixi/math:Point x=" + this.x + " y=" + this.y + "]";
      }, t;
    }(),
        ne = [new ie(), new ie(), new ie(), new ie()],
        oe = function () {
      function t(t, e, r, i) {
        void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === r && (r = 0), void 0 === i && (i = 0), this.x = Number(t), this.y = Number(e), this.width = Number(r), this.height = Number(i), this.type = $t.RECT;
      }

      return Object.defineProperty(t.prototype, "left", {
        get: function () {
          return this.x;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "right", {
        get: function () {
          return this.x + this.width;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "top", {
        get: function () {
          return this.y;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "bottom", {
        get: function () {
          return this.y + this.height;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t, "EMPTY", {
        get: function () {
          return new t(0, 0, 0, 0);
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.clone = function () {
        return new t(this.x, this.y, this.width, this.height);
      }, t.prototype.copyFrom = function (t) {
        return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this;
      }, t.prototype.copyTo = function (t) {
        return t.x = this.x, t.y = this.y, t.width = this.width, t.height = this.height, t;
      }, t.prototype.contains = function (t, e) {
        return !(this.width <= 0 || this.height <= 0) && t >= this.x && t < this.x + this.width && e >= this.y && e < this.y + this.height;
      }, t.prototype.intersects = function (t, e) {
        if (!e) {
          var r = this.x < t.x ? t.x : this.x;
          if ((this.right > t.right ? t.right : this.right) <= r) return !1;
          var i = this.y < t.y ? t.y : this.y;
          return (this.bottom > t.bottom ? t.bottom : this.bottom) > i;
        }

        var n = this.left,
            o = this.right,
            s = this.top,
            a = this.bottom;
        if (o <= n || a <= s) return !1;
        var h = ne[0].set(t.left, t.top),
            u = ne[1].set(t.left, t.bottom),
            l = ne[2].set(t.right, t.top),
            c = ne[3].set(t.right, t.bottom);
        if (l.x <= h.x || u.y <= h.y) return !1;
        var d = Math.sign(e.a * e.d - e.b * e.c);
        if (0 === d) return !1;
        if (e.apply(h, h), e.apply(u, u), e.apply(l, l), e.apply(c, c), Math.max(h.x, u.x, l.x, c.x) <= n || Math.min(h.x, u.x, l.x, c.x) >= o || Math.max(h.y, u.y, l.y, c.y) <= s || Math.min(h.y, u.y, l.y, c.y) >= a) return !1;

        var f = d * (u.y - h.y),
            p = d * (h.x - u.x),
            _ = f * n + p * s,
            v = f * o + p * s,
            m = f * n + p * a,
            g = f * o + p * a;

        if (Math.max(_, v, m, g) <= f * h.x + p * h.y || Math.min(_, v, m, g) >= f * c.x + p * c.y) return !1;
        var y = d * (h.y - l.y),
            E = d * (l.x - h.x),
            T = y * n + E * s,
            b = y * o + E * s,
            x = y * n + E * a,
            R = y * o + E * a;
        return !(Math.max(T, b, x, R) <= y * h.x + E * h.y || Math.min(T, b, x, R) >= y * c.x + E * c.y);
      }, t.prototype.pad = function (t, e) {
        return void 0 === t && (t = 0), void 0 === e && (e = t), this.x -= t, this.y -= e, this.width += 2 * t, this.height += 2 * e, this;
      }, t.prototype.fit = function (t) {
        var e = Math.max(this.x, t.x),
            r = Math.min(this.x + this.width, t.x + t.width),
            i = Math.max(this.y, t.y),
            n = Math.min(this.y + this.height, t.y + t.height);
        return this.x = e, this.width = Math.max(r - e, 0), this.y = i, this.height = Math.max(n - i, 0), this;
      }, t.prototype.ceil = function (t, e) {
        void 0 === t && (t = 1), void 0 === e && (e = .001);
        var r = Math.ceil((this.x + this.width - e) * t) / t,
            i = Math.ceil((this.y + this.height - e) * t) / t;
        return this.x = Math.floor((this.x + e) * t) / t, this.y = Math.floor((this.y + e) * t) / t, this.width = r - this.x, this.height = i - this.y, this;
      }, t.prototype.enlarge = function (t) {
        var e = Math.min(this.x, t.x),
            r = Math.max(this.x + this.width, t.x + t.width),
            i = Math.min(this.y, t.y),
            n = Math.max(this.y + this.height, t.y + t.height);
        return this.x = e, this.width = r - e, this.y = i, this.height = n - i, this;
      }, t.prototype.toString = function () {
        return "[@pixi/math:Rectangle x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + "]";
      }, t;
    }(),
        se = function () {
      function t(t, e, r) {
        void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === r && (r = 0), this.x = t, this.y = e, this.radius = r, this.type = $t.CIRC;
      }

      return t.prototype.clone = function () {
        return new t(this.x, this.y, this.radius);
      }, t.prototype.contains = function (t, e) {
        if (this.radius <= 0) return !1;
        var r = this.radius * this.radius,
            i = this.x - t,
            n = this.y - e;
        return (i *= i) + (n *= n) <= r;
      }, t.prototype.getBounds = function () {
        return new oe(this.x - this.radius, this.y - this.radius, 2 * this.radius, 2 * this.radius);
      }, t.prototype.toString = function () {
        return "[@pixi/math:Circle x=" + this.x + " y=" + this.y + " radius=" + this.radius + "]";
      }, t;
    }(),
        ae = function () {
      function t(t, e, r, i) {
        void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === r && (r = 0), void 0 === i && (i = 0), this.x = t, this.y = e, this.width = r, this.height = i, this.type = $t.ELIP;
      }

      return t.prototype.clone = function () {
        return new t(this.x, this.y, this.width, this.height);
      }, t.prototype.contains = function (t, e) {
        if (this.width <= 0 || this.height <= 0) return !1;
        var r = (t - this.x) / this.width,
            i = (e - this.y) / this.height;
        return (r *= r) + (i *= i) <= 1;
      }, t.prototype.getBounds = function () {
        return new oe(this.x - this.width, this.y - this.height, this.width, this.height);
      }, t.prototype.toString = function () {
        return "[@pixi/math:Ellipse x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + "]";
      }, t;
    }(),
        he = function () {
      function t() {
        for (var t = arguments, e = [], r = 0; r < arguments.length; r++) e[r] = t[r];

        var i = Array.isArray(e[0]) ? e[0] : e;

        if ("number" != typeof i[0]) {
          for (var n = [], o = 0, s = i.length; o < s; o++) n.push(i[o].x, i[o].y);

          i = n;
        }

        this.points = i, this.type = $t.POLY, this.closeStroke = !0;
      }

      return t.prototype.clone = function () {
        var e = new t(this.points.slice());
        return e.closeStroke = this.closeStroke, e;
      }, t.prototype.contains = function (t, e) {
        for (var r = !1, i = this.points.length / 2, n = 0, o = i - 1; n < i; o = n++) {
          var s = this.points[2 * n],
              a = this.points[2 * n + 1],
              h = this.points[2 * o],
              u = this.points[2 * o + 1];
          a > e != u > e && t < (e - a) / (u - a) * (h - s) + s && (r = !r);
        }

        return r;
      }, t.prototype.toString = function () {
        return "[@pixi/math:PolygoncloseStroke=" + this.closeStroke + "points=" + this.points.reduce(function (t, e) {
          return t + ", " + e;
        }, "") + "]";
      }, t;
    }(),
        ue = function () {
      function t(t, e, r, i, n) {
        void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === r && (r = 0), void 0 === i && (i = 0), void 0 === n && (n = 20), this.x = t, this.y = e, this.width = r, this.height = i, this.radius = n, this.type = $t.RREC;
      }

      return t.prototype.clone = function () {
        return new t(this.x, this.y, this.width, this.height, this.radius);
      }, t.prototype.contains = function (t, e) {
        if (this.width <= 0 || this.height <= 0) return !1;

        if (t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height) {
          var r = Math.max(0, Math.min(this.radius, Math.min(this.width, this.height) / 2));
          if (e >= this.y + r && e <= this.y + this.height - r || t >= this.x + r && t <= this.x + this.width - r) return !0;
          var i = t - (this.x + r),
              n = e - (this.y + r),
              o = r * r;
          if (i * i + n * n <= o) return !0;
          if ((i = t - (this.x + this.width - r)) * i + n * n <= o) return !0;
          if (i * i + (n = e - (this.y + this.height - r)) * n <= o) return !0;
          if ((i = t - (this.x + r)) * i + n * n <= o) return !0;
        }

        return !1;
      }, t.prototype.toString = function () {
        return "[@pixi/math:RoundedRectangle x=" + this.x + " y=" + this.y + "width=" + this.width + " height=" + this.height + " radius=" + this.radius + "]";
      }, t;
    }(),
        le = function () {
      function t(t, e, r, i) {
        void 0 === r && (r = 0), void 0 === i && (i = 0), this._x = r, this._y = i, this.cb = t, this.scope = e;
      }

      return t.prototype.clone = function (e, r) {
        return void 0 === e && (e = this.cb), void 0 === r && (r = this.scope), new t(e, r, this._x, this._y);
      }, t.prototype.set = function (t, e) {
        return void 0 === t && (t = 0), void 0 === e && (e = t), this._x === t && this._y === e || (this._x = t, this._y = e, this.cb.call(this.scope)), this;
      }, t.prototype.copyFrom = function (t) {
        return this._x === t.x && this._y === t.y || (this._x = t.x, this._y = t.y, this.cb.call(this.scope)), this;
      }, t.prototype.copyTo = function (t) {
        return t.set(this._x, this._y), t;
      }, t.prototype.equals = function (t) {
        return t.x === this._x && t.y === this._y;
      }, t.prototype.toString = function () {
        return "[@pixi/math:ObservablePoint x=0 y=0 scope=" + this.scope + "]";
      }, Object.defineProperty(t.prototype, "x", {
        get: function () {
          return this._x;
        },
        set: function (t) {
          this._x !== t && (this._x = t, this.cb.call(this.scope));
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "y", {
        get: function () {
          return this._y;
        },
        set: function (t) {
          this._y !== t && (this._y = t, this.cb.call(this.scope));
        },
        enumerable: !1,
        configurable: !0
      }), t;
    }(),
        ce = function () {
      function t(t, e, r, i, n, o) {
        void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === r && (r = 0), void 0 === i && (i = 1), void 0 === n && (n = 0), void 0 === o && (o = 0), this.array = null, this.a = t, this.b = e, this.c = r, this.d = i, this.tx = n, this.ty = o;
      }

      return t.prototype.fromArray = function (t) {
        this.a = t[0], this.b = t[1], this.c = t[3], this.d = t[4], this.tx = t[2], this.ty = t[5];
      }, t.prototype.set = function (t, e, r, i, n, o) {
        return this.a = t, this.b = e, this.c = r, this.d = i, this.tx = n, this.ty = o, this;
      }, t.prototype.toArray = function (t, e) {
        this.array || (this.array = new Float32Array(9));
        var r = e || this.array;
        return t ? (r[0] = this.a, r[1] = this.b, r[2] = 0, r[3] = this.c, r[4] = this.d, r[5] = 0, r[6] = this.tx, r[7] = this.ty, r[8] = 1) : (r[0] = this.a, r[1] = this.c, r[2] = this.tx, r[3] = this.b, r[4] = this.d, r[5] = this.ty, r[6] = 0, r[7] = 0, r[8] = 1), r;
      }, t.prototype.apply = function (t, e) {
        e = e || new ie();
        var r = t.x,
            i = t.y;
        return e.x = this.a * r + this.c * i + this.tx, e.y = this.b * r + this.d * i + this.ty, e;
      }, t.prototype.applyInverse = function (t, e) {
        e = e || new ie();
        var r = 1 / (this.a * this.d + this.c * -this.b),
            i = t.x,
            n = t.y;
        return e.x = this.d * r * i + -this.c * r * n + (this.ty * this.c - this.tx * this.d) * r, e.y = this.a * r * n + -this.b * r * i + (-this.ty * this.a + this.tx * this.b) * r, e;
      }, t.prototype.translate = function (t, e) {
        return this.tx += t, this.ty += e, this;
      }, t.prototype.scale = function (t, e) {
        return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, this;
      }, t.prototype.rotate = function (t) {
        var e = Math.cos(t),
            r = Math.sin(t),
            i = this.a,
            n = this.c,
            o = this.tx;
        return this.a = i * e - this.b * r, this.b = i * r + this.b * e, this.c = n * e - this.d * r, this.d = n * r + this.d * e, this.tx = o * e - this.ty * r, this.ty = o * r + this.ty * e, this;
      }, t.prototype.append = function (t) {
        var e = this.a,
            r = this.b,
            i = this.c,
            n = this.d;
        return this.a = t.a * e + t.b * i, this.b = t.a * r + t.b * n, this.c = t.c * e + t.d * i, this.d = t.c * r + t.d * n, this.tx = t.tx * e + t.ty * i + this.tx, this.ty = t.tx * r + t.ty * n + this.ty, this;
      }, t.prototype.setTransform = function (t, e, r, i, n, o, s, a, h) {
        return this.a = Math.cos(s + h) * n, this.b = Math.sin(s + h) * n, this.c = -Math.sin(s - a) * o, this.d = Math.cos(s - a) * o, this.tx = t - (r * this.a + i * this.c), this.ty = e - (r * this.b + i * this.d), this;
      }, t.prototype.prepend = function (t) {
        var e = this.tx;

        if (1 !== t.a || 0 !== t.b || 0 !== t.c || 1 !== t.d) {
          var r = this.a,
              i = this.c;
          this.a = r * t.a + this.b * t.c, this.b = r * t.b + this.b * t.d, this.c = i * t.a + this.d * t.c, this.d = i * t.b + this.d * t.d;
        }

        return this.tx = e * t.a + this.ty * t.c + t.tx, this.ty = e * t.b + this.ty * t.d + t.ty, this;
      }, t.prototype.decompose = function (t) {
        var e = this.a,
            r = this.b,
            i = this.c,
            n = this.d,
            o = t.pivot,
            s = -Math.atan2(-i, n),
            a = Math.atan2(r, e),
            h = Math.abs(s + a);
        return h < 1e-5 || Math.abs(te - h) < 1e-5 ? (t.rotation = a, t.skew.x = t.skew.y = 0) : (t.rotation = 0, t.skew.x = s, t.skew.y = a), t.scale.x = Math.sqrt(e * e + r * r), t.scale.y = Math.sqrt(i * i + n * n), t.position.x = this.tx + (o.x * e + o.y * i), t.position.y = this.ty + (o.x * r + o.y * n), t;
      }, t.prototype.invert = function () {
        var t = this.a,
            e = this.b,
            r = this.c,
            i = this.d,
            n = this.tx,
            o = t * i - e * r;
        return this.a = i / o, this.b = -e / o, this.c = -r / o, this.d = t / o, this.tx = (r * this.ty - i * n) / o, this.ty = -(t * this.ty - e * n) / o, this;
      }, t.prototype.identity = function () {
        return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this;
      }, t.prototype.clone = function () {
        var e = new t();
        return e.a = this.a, e.b = this.b, e.c = this.c, e.d = this.d, e.tx = this.tx, e.ty = this.ty, e;
      }, t.prototype.copyTo = function (t) {
        return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t;
      }, t.prototype.copyFrom = function (t) {
        return this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.tx = t.tx, this.ty = t.ty, this;
      }, t.prototype.toString = function () {
        return "[@pixi/math:Matrix a=" + this.a + " b=" + this.b + " c=" + this.c + " d=" + this.d + " tx=" + this.tx + " ty=" + this.ty + "]";
      }, Object.defineProperty(t, "IDENTITY", {
        get: function () {
          return new t();
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t, "TEMP_MATRIX", {
        get: function () {
          return new t();
        },
        enumerable: !1,
        configurable: !0
      }), t;
    }(),
        de = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1],
        fe = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1],
        pe = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1],
        _e = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1],
        ve = [],
        me = [],
        ge = Math.sign;

    !function () {
      for (var t = 0; t < 16; t++) {
        var e = [];
        ve.push(e);

        for (var r = 0; r < 16; r++) for (var i = ge(de[t] * de[r] + pe[t] * fe[r]), n = ge(fe[t] * de[r] + _e[t] * fe[r]), o = ge(de[t] * pe[r] + pe[t] * _e[r]), s = ge(fe[t] * pe[r] + _e[t] * _e[r]), a = 0; a < 16; a++) if (de[a] === i && fe[a] === n && pe[a] === o && _e[a] === s) {
          e.push(a);
          break;
        }
      }

      for (t = 0; t < 16; t++) {
        var h = new ce();
        h.set(de[t], fe[t], pe[t], _e[t], 0, 0), me.push(h);
      }
    }();

    var ye = {
      E: 0,
      SE: 1,
      S: 2,
      SW: 3,
      W: 4,
      NW: 5,
      N: 6,
      NE: 7,
      MIRROR_VERTICAL: 8,
      MAIN_DIAGONAL: 10,
      MIRROR_HORIZONTAL: 12,
      REVERSE_DIAGONAL: 14,
      uX: function (t) {
        return de[t];
      },
      uY: function (t) {
        return fe[t];
      },
      vX: function (t) {
        return pe[t];
      },
      vY: function (t) {
        return _e[t];
      },
      inv: function (t) {
        return 8 & t ? 15 & t : 7 & -t;
      },
      add: function (t, e) {
        return ve[t][e];
      },
      sub: function (t, e) {
        return ve[t][ye.inv(e)];
      },
      rotate180: function (t) {
        return 4 ^ t;
      },
      isVertical: function (t) {
        return 2 == (3 & t);
      },
      byDirection: function (t, e) {
        return 2 * Math.abs(t) <= Math.abs(e) ? e >= 0 ? ye.S : ye.N : 2 * Math.abs(e) <= Math.abs(t) ? t > 0 ? ye.E : ye.W : e > 0 ? t > 0 ? ye.SE : ye.SW : t > 0 ? ye.NE : ye.NW;
      },
      matrixAppendRotationInv: function (t, e, r, i) {
        void 0 === r && (r = 0), void 0 === i && (i = 0);
        var n = me[ye.inv(e)];
        n.tx = r, n.ty = i, t.append(n);
      }
    },
        Ee = function () {
      function t() {
        this.worldTransform = new ce(), this.localTransform = new ce(), this.position = new le(this.onChange, this, 0, 0), this.scale = new le(this.onChange, this, 1, 1), this.pivot = new le(this.onChange, this, 0, 0), this.skew = new le(this.updateSkew, this, 0, 0), this._rotation = 0, this._cx = 1, this._sx = 0, this._cy = 0, this._sy = 1, this._localID = 0, this._currentLocalID = 0, this._worldID = 0, this._parentID = 0;
      }

      return t.prototype.onChange = function () {
        this._localID++;
      }, t.prototype.updateSkew = function () {
        this._cx = Math.cos(this._rotation + this.skew.y), this._sx = Math.sin(this._rotation + this.skew.y), this._cy = -Math.sin(this._rotation - this.skew.x), this._sy = Math.cos(this._rotation - this.skew.x), this._localID++;
      }, t.prototype.toString = function () {
        return "[@pixi/math:Transform position=(" + this.position.x + ", " + this.position.y + ") rotation=" + this.rotation + " scale=(" + this.scale.x + ", " + this.scale.y + ") skew=(" + this.skew.x + ", " + this.skew.y + ") ]";
      }, t.prototype.updateLocalTransform = function () {
        var t = this.localTransform;
        this._localID !== this._currentLocalID && (t.a = this._cx * this.scale.x, t.b = this._sx * this.scale.x, t.c = this._cy * this.scale.y, t.d = this._sy * this.scale.y, t.tx = this.position.x - (this.pivot.x * t.a + this.pivot.y * t.c), t.ty = this.position.y - (this.pivot.x * t.b + this.pivot.y * t.d), this._currentLocalID = this._localID, this._parentID = -1);
      }, t.prototype.updateTransform = function (t) {
        var e = this.localTransform;

        if (this._localID !== this._currentLocalID && (e.a = this._cx * this.scale.x, e.b = this._sx * this.scale.x, e.c = this._cy * this.scale.y, e.d = this._sy * this.scale.y, e.tx = this.position.x - (this.pivot.x * e.a + this.pivot.y * e.c), e.ty = this.position.y - (this.pivot.x * e.b + this.pivot.y * e.d), this._currentLocalID = this._localID, this._parentID = -1), this._parentID !== t._worldID) {
          var r = t.worldTransform,
              i = this.worldTransform;
          i.a = e.a * r.a + e.b * r.c, i.b = e.a * r.b + e.b * r.d, i.c = e.c * r.a + e.d * r.c, i.d = e.c * r.b + e.d * r.d, i.tx = e.tx * r.a + e.ty * r.c + r.tx, i.ty = e.tx * r.b + e.ty * r.d + r.ty, this._parentID = t._worldID, this._worldID++;
        }
      }, t.prototype.setFromMatrix = function (t) {
        t.decompose(this), this._localID++;
      }, Object.defineProperty(t.prototype, "rotation", {
        get: function () {
          return this._rotation;
        },
        set: function (t) {
          this._rotation !== t && (this._rotation = t, this.updateSkew());
        },
        enumerable: !1,
        configurable: !0
      }), t.IDENTITY = new t(), t;
    }();

    Et.SORTABLE_CHILDREN = !1;

    var Te = function () {
      function t() {
        this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, this.rect = null, this.updateID = -1;
      }

      return t.prototype.isEmpty = function () {
        return this.minX > this.maxX || this.minY > this.maxY;
      }, t.prototype.clear = function () {
        this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0;
      }, t.prototype.getRectangle = function (t) {
        return this.minX > this.maxX || this.minY > this.maxY ? oe.EMPTY : ((t = t || new oe(0, 0, 1, 1)).x = this.minX, t.y = this.minY, t.width = this.maxX - this.minX, t.height = this.maxY - this.minY, t);
      }, t.prototype.addPoint = function (t) {
        this.minX = Math.min(this.minX, t.x), this.maxX = Math.max(this.maxX, t.x), this.minY = Math.min(this.minY, t.y), this.maxY = Math.max(this.maxY, t.y);
      }, t.prototype.addPointMatrix = function (t, e) {
        var r = t.a,
            i = t.b,
            n = t.c,
            o = t.d,
            s = t.tx,
            a = t.ty,
            h = r * e.x + n * e.y + s,
            u = i * e.x + o * e.y + a;
        this.minX = Math.min(this.minX, h), this.maxX = Math.max(this.maxX, h), this.minY = Math.min(this.minY, u), this.maxY = Math.max(this.maxY, u);
      }, t.prototype.addQuad = function (t) {
        var e = this.minX,
            r = this.minY,
            i = this.maxX,
            n = this.maxY,
            o = t[0],
            s = t[1];
        e = o < e ? o : e, r = s < r ? s : r, i = o > i ? o : i, n = s > n ? s : n, e = (o = t[2]) < e ? o : e, r = (s = t[3]) < r ? s : r, i = o > i ? o : i, n = s > n ? s : n, e = (o = t[4]) < e ? o : e, r = (s = t[5]) < r ? s : r, i = o > i ? o : i, n = s > n ? s : n, e = (o = t[6]) < e ? o : e, r = (s = t[7]) < r ? s : r, i = o > i ? o : i, n = s > n ? s : n, this.minX = e, this.minY = r, this.maxX = i, this.maxY = n;
      }, t.prototype.addFrame = function (t, e, r, i, n) {
        this.addFrameMatrix(t.worldTransform, e, r, i, n);
      }, t.prototype.addFrameMatrix = function (t, e, r, i, n) {
        var o = t.a,
            s = t.b,
            a = t.c,
            h = t.d,
            u = t.tx,
            l = t.ty,
            c = this.minX,
            d = this.minY,
            f = this.maxX,
            p = this.maxY,
            _ = o * e + a * r + u,
            v = s * e + h * r + l;

        c = _ < c ? _ : c, d = v < d ? v : d, f = _ > f ? _ : f, p = v > p ? v : p, c = (_ = o * i + a * r + u) < c ? _ : c, d = (v = s * i + h * r + l) < d ? v : d, f = _ > f ? _ : f, p = v > p ? v : p, c = (_ = o * e + a * n + u) < c ? _ : c, d = (v = s * e + h * n + l) < d ? v : d, f = _ > f ? _ : f, p = v > p ? v : p, c = (_ = o * i + a * n + u) < c ? _ : c, d = (v = s * i + h * n + l) < d ? v : d, f = _ > f ? _ : f, p = v > p ? v : p, this.minX = c, this.minY = d, this.maxX = f, this.maxY = p;
      }, t.prototype.addVertexData = function (t, e, r) {
        for (var i = this.minX, n = this.minY, o = this.maxX, s = this.maxY, a = e; a < r; a += 2) {
          var h = t[a],
              u = t[a + 1];
          i = h < i ? h : i, n = u < n ? u : n, o = h > o ? h : o, s = u > s ? u : s;
        }

        this.minX = i, this.minY = n, this.maxX = o, this.maxY = s;
      }, t.prototype.addVertices = function (t, e, r, i) {
        this.addVerticesMatrix(t.worldTransform, e, r, i);
      }, t.prototype.addVerticesMatrix = function (t, e, r, i, n, o) {
        void 0 === n && (n = 0), void 0 === o && (o = n);

        for (var s = t.a, a = t.b, h = t.c, u = t.d, l = t.tx, c = t.ty, d = this.minX, f = this.minY, p = this.maxX, _ = this.maxY, v = r; v < i; v += 2) {
          var m = e[v],
              g = e[v + 1],
              y = s * m + h * g + l,
              E = u * g + a * m + c;
          d = Math.min(d, y - n), p = Math.max(p, y + n), f = Math.min(f, E - o), _ = Math.max(_, E + o);
        }

        this.minX = d, this.minY = f, this.maxX = p, this.maxY = _;
      }, t.prototype.addBounds = function (t) {
        var e = this.minX,
            r = this.minY,
            i = this.maxX,
            n = this.maxY;
        this.minX = t.minX < e ? t.minX : e, this.minY = t.minY < r ? t.minY : r, this.maxX = t.maxX > i ? t.maxX : i, this.maxY = t.maxY > n ? t.maxY : n;
      }, t.prototype.addBoundsMask = function (t, e) {
        var r = t.minX > e.minX ? t.minX : e.minX,
            i = t.minY > e.minY ? t.minY : e.minY,
            n = t.maxX < e.maxX ? t.maxX : e.maxX,
            o = t.maxY < e.maxY ? t.maxY : e.maxY;

        if (r <= n && i <= o) {
          var s = this.minX,
              a = this.minY,
              h = this.maxX,
              u = this.maxY;
          this.minX = r < s ? r : s, this.minY = i < a ? i : a, this.maxX = n > h ? n : h, this.maxY = o > u ? o : u;
        }
      }, t.prototype.addBoundsMatrix = function (t, e) {
        this.addFrameMatrix(e, t.minX, t.minY, t.maxX, t.maxY);
      }, t.prototype.addBoundsArea = function (t, e) {
        var r = t.minX > e.x ? t.minX : e.x,
            i = t.minY > e.y ? t.minY : e.y,
            n = t.maxX < e.x + e.width ? t.maxX : e.x + e.width,
            o = t.maxY < e.y + e.height ? t.maxY : e.y + e.height;

        if (r <= n && i <= o) {
          var s = this.minX,
              a = this.minY,
              h = this.maxX,
              u = this.maxY;
          this.minX = r < s ? r : s, this.minY = i < a ? i : a, this.maxX = n > h ? n : h, this.maxY = o > u ? o : u;
        }
      }, t.prototype.pad = function (t, e) {
        void 0 === t && (t = 0), void 0 === e && (e = t), this.isEmpty() || (this.minX -= t, this.maxX += t, this.minY -= e, this.maxY += e);
      }, t.prototype.addFramePad = function (t, e, r, i, n, o) {
        t -= n, e -= o, r += n, i += o, this.minX = this.minX < t ? this.minX : t, this.maxX = this.maxX > r ? this.maxX : r, this.minY = this.minY < e ? this.minY : e, this.maxY = this.maxY > i ? this.maxY : i;
      }, t;
    }(),
        be = function (t, e) {
      return be = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      }, be(t, e);
    };

    function xe(t, e) {
      function r() {
        this.constructor = t;
      }

      be(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
    }

    var Re,
        Ae,
        Oe,
        Se,
        Ie,
        Pe,
        Ne,
        Me,
        De,
        we,
        Ce,
        Le,
        Fe,
        Ue,
        Ge,
        Be,
        Xe,
        ke,
        He,
        je = function (t) {
      function e() {
        var e = t.call(this) || this;
        return e.tempDisplayObjectParent = null, e.transform = new Ee(), e.alpha = 1, e.visible = !0, e.renderable = !0, e.cullable = !1, e.cullArea = null, e.parent = null, e.worldAlpha = 1, e._lastSortedIndex = 0, e._zIndex = 0, e.filterArea = null, e.filters = null, e._enabledFilters = null, e._bounds = new Te(), e._localBounds = null, e._boundsID = 0, e._boundsRect = null, e._localBoundsRect = null, e._mask = null, e._maskRefCount = 0, e._destroyed = !1, e.isSprite = !1, e.isMask = !1, e;
      }

      return xe(e, t), e.mixin = function (t) {
        for (var r = Object.keys(t), i = 0; i < r.length; ++i) {
          var n = r[i];
          Object.defineProperty(e.prototype, n, Object.getOwnPropertyDescriptor(t, n));
        }
      }, Object.defineProperty(e.prototype, "destroyed", {
        get: function () {
          return this._destroyed;
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype._recursivePostUpdateTransform = function () {
        this.parent ? (this.parent._recursivePostUpdateTransform(), this.transform.updateTransform(this.parent.transform)) : this.transform.updateTransform(this._tempDisplayObjectParent.transform);
      }, e.prototype.updateTransform = function () {
        this._boundsID++, this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha;
      }, e.prototype.getBounds = function (t, e) {
        return t || (this.parent ? (this._recursivePostUpdateTransform(), this.updateTransform()) : (this.parent = this._tempDisplayObjectParent, this.updateTransform(), this.parent = null)), this._bounds.updateID !== this._boundsID && (this.calculateBounds(), this._bounds.updateID = this._boundsID), e || (this._boundsRect || (this._boundsRect = new oe()), e = this._boundsRect), this._bounds.getRectangle(e);
      }, e.prototype.getLocalBounds = function (t) {
        t || (this._localBoundsRect || (this._localBoundsRect = new oe()), t = this._localBoundsRect), this._localBounds || (this._localBounds = new Te());
        var e = this.transform,
            r = this.parent;
        this.parent = null, this.transform = this._tempDisplayObjectParent.transform;
        var i = this._bounds,
            n = this._boundsID;
        this._bounds = this._localBounds;
        var o = this.getBounds(!1, t);
        return this.parent = r, this.transform = e, this._bounds = i, this._bounds.updateID += this._boundsID - n, o;
      }, e.prototype.toGlobal = function (t, e, r) {
        return void 0 === r && (r = !1), r || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.apply(t, e);
      }, e.prototype.toLocal = function (t, e, r, i) {
        return e && (t = e.toGlobal(t, r, i)), i || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.applyInverse(t, r);
      }, e.prototype.setParent = function (t) {
        if (!t || !t.addChild) throw new Error("setParent: Argument must be a Container");
        return t.addChild(this), t;
      }, e.prototype.setTransform = function (t, e, r, i, n, o, s, a, h) {
        return void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === r && (r = 1), void 0 === i && (i = 1), void 0 === n && (n = 0), void 0 === o && (o = 0), void 0 === s && (s = 0), void 0 === a && (a = 0), void 0 === h && (h = 0), this.position.x = t, this.position.y = e, this.scale.x = r || 1, this.scale.y = i || 1, this.rotation = n, this.skew.x = o, this.skew.y = s, this.pivot.x = a, this.pivot.y = h, this;
      }, e.prototype.destroy = function (t) {
        this.parent && this.parent.removeChild(this), this.emit("destroyed"), this.removeAllListeners(), this.transform = null, this.parent = null, this._bounds = null, this.mask = null, this.cullArea = null, this.filters = null, this.filterArea = null, this.hitArea = null, this.interactive = !1, this.interactiveChildren = !1, this._destroyed = !0;
      }, Object.defineProperty(e.prototype, "_tempDisplayObjectParent", {
        get: function () {
          return null === this.tempDisplayObjectParent && (this.tempDisplayObjectParent = new Ye()), this.tempDisplayObjectParent;
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.enableTempParent = function () {
        var t = this.parent;
        return this.parent = this._tempDisplayObjectParent, t;
      }, e.prototype.disableTempParent = function (t) {
        this.parent = t;
      }, Object.defineProperty(e.prototype, "x", {
        get: function () {
          return this.position.x;
        },
        set: function (t) {
          this.transform.position.x = t;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "y", {
        get: function () {
          return this.position.y;
        },
        set: function (t) {
          this.transform.position.y = t;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "worldTransform", {
        get: function () {
          return this.transform.worldTransform;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "localTransform", {
        get: function () {
          return this.transform.localTransform;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "position", {
        get: function () {
          return this.transform.position;
        },
        set: function (t) {
          this.transform.position.copyFrom(t);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "scale", {
        get: function () {
          return this.transform.scale;
        },
        set: function (t) {
          this.transform.scale.copyFrom(t);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "pivot", {
        get: function () {
          return this.transform.pivot;
        },
        set: function (t) {
          this.transform.pivot.copyFrom(t);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "skew", {
        get: function () {
          return this.transform.skew;
        },
        set: function (t) {
          this.transform.skew.copyFrom(t);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "rotation", {
        get: function () {
          return this.transform.rotation;
        },
        set: function (t) {
          this.transform.rotation = t;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "angle", {
        get: function () {
          return this.transform.rotation * ee;
        },
        set: function (t) {
          this.transform.rotation = t * re;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "zIndex", {
        get: function () {
          return this._zIndex;
        },
        set: function (t) {
          this._zIndex = t, this.parent && (this.parent.sortDirty = !0);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "worldVisible", {
        get: function () {
          var t = this;

          do {
            if (!t.visible) return !1;
            t = t.parent;
          } while (t);

          return !0;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "mask", {
        get: function () {
          return this._mask;
        },
        set: function (t) {
          var e;
          this._mask !== t && (this._mask && ((e = this._mask.maskObject || this._mask)._maskRefCount--, 0 === e._maskRefCount && (e.renderable = !0, e.isMask = !1)), this._mask = t, this._mask && (0 === (e = this._mask.maskObject || this._mask)._maskRefCount && (e.renderable = !1, e.isMask = !0), e._maskRefCount++));
        },
        enumerable: !1,
        configurable: !0
      }), e;
    }(bt()),
        Ye = function (t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.sortDirty = null, e;
      }

      return xe(e, t), e;
    }(je);

    function Ve(t, e) {
      return t.zIndex === e.zIndex ? t._lastSortedIndex - e._lastSortedIndex : t.zIndex - e.zIndex;
    }

    je.prototype.displayObjectUpdateTransform = je.prototype.updateTransform, function (t) {
      t[t.WEBGL_LEGACY = 0] = "WEBGL_LEGACY", t[t.WEBGL = 1] = "WEBGL", t[t.WEBGL2 = 2] = "WEBGL2";
    }(Re || (Re = {})), function (t) {
      t[t.UNKNOWN = 0] = "UNKNOWN", t[t.WEBGL = 1] = "WEBGL", t[t.CANVAS = 2] = "CANVAS";
    }(Ae || (Ae = {})), function (t) {
      t[t.COLOR = 16384] = "COLOR", t[t.DEPTH = 256] = "DEPTH", t[t.STENCIL = 1024] = "STENCIL";
    }(Oe || (Oe = {})), function (t) {
      t[t.NORMAL = 0] = "NORMAL", t[t.ADD = 1] = "ADD", t[t.MULTIPLY = 2] = "MULTIPLY", t[t.SCREEN = 3] = "SCREEN", t[t.OVERLAY = 4] = "OVERLAY", t[t.DARKEN = 5] = "DARKEN", t[t.LIGHTEN = 6] = "LIGHTEN", t[t.COLOR_DODGE = 7] = "COLOR_DODGE", t[t.COLOR_BURN = 8] = "COLOR_BURN", t[t.HARD_LIGHT = 9] = "HARD_LIGHT", t[t.SOFT_LIGHT = 10] = "SOFT_LIGHT", t[t.DIFFERENCE = 11] = "DIFFERENCE", t[t.EXCLUSION = 12] = "EXCLUSION", t[t.HUE = 13] = "HUE", t[t.SATURATION = 14] = "SATURATION", t[t.COLOR = 15] = "COLOR", t[t.LUMINOSITY = 16] = "LUMINOSITY", t[t.NORMAL_NPM = 17] = "NORMAL_NPM", t[t.ADD_NPM = 18] = "ADD_NPM", t[t.SCREEN_NPM = 19] = "SCREEN_NPM", t[t.NONE = 20] = "NONE", t[t.SRC_OVER = 0] = "SRC_OVER", t[t.SRC_IN = 21] = "SRC_IN", t[t.SRC_OUT = 22] = "SRC_OUT", t[t.SRC_ATOP = 23] = "SRC_ATOP", t[t.DST_OVER = 24] = "DST_OVER", t[t.DST_IN = 25] = "DST_IN", t[t.DST_OUT = 26] = "DST_OUT", t[t.DST_ATOP = 27] = "DST_ATOP", t[t.ERASE = 26] = "ERASE", t[t.SUBTRACT = 28] = "SUBTRACT", t[t.XOR = 29] = "XOR";
    }(Se || (Se = {})), function (t) {
      t[t.POINTS = 0] = "POINTS", t[t.LINES = 1] = "LINES", t[t.LINE_LOOP = 2] = "LINE_LOOP", t[t.LINE_STRIP = 3] = "LINE_STRIP", t[t.TRIANGLES = 4] = "TRIANGLES", t[t.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP", t[t.TRIANGLE_FAN = 6] = "TRIANGLE_FAN";
    }(Ie || (Ie = {})), function (t) {
      t[t.RGBA = 6408] = "RGBA", t[t.RGB = 6407] = "RGB", t[t.RG = 33319] = "RG", t[t.RED = 6403] = "RED", t[t.RGBA_INTEGER = 36249] = "RGBA_INTEGER", t[t.RGB_INTEGER = 36248] = "RGB_INTEGER", t[t.RG_INTEGER = 33320] = "RG_INTEGER", t[t.RED_INTEGER = 36244] = "RED_INTEGER", t[t.ALPHA = 6406] = "ALPHA", t[t.LUMINANCE = 6409] = "LUMINANCE", t[t.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA", t[t.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT", t[t.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL";
    }(Pe || (Pe = {})), function (t) {
      t[t.TEXTURE_2D = 3553] = "TEXTURE_2D", t[t.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP", t[t.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY", t[t.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X", t[t.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X", t[t.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y", t[t.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z";
    }(Ne || (Ne = {})), function (t) {
      t[t.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", t[t.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", t[t.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", t[t.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", t[t.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1", t[t.UNSIGNED_INT = 5125] = "UNSIGNED_INT", t[t.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV", t[t.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV", t[t.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8", t[t.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV", t[t.BYTE = 5120] = "BYTE", t[t.SHORT = 5122] = "SHORT", t[t.INT = 5124] = "INT", t[t.FLOAT = 5126] = "FLOAT", t[t.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV", t[t.HALF_FLOAT = 36193] = "HALF_FLOAT";
    }(Me || (Me = {})), function (t) {
      t[t.FLOAT = 0] = "FLOAT", t[t.INT = 1] = "INT", t[t.UINT = 2] = "UINT";
    }(De || (De = {})), function (t) {
      t[t.NEAREST = 0] = "NEAREST", t[t.LINEAR = 1] = "LINEAR";
    }(we || (we = {})), function (t) {
      t[t.CLAMP = 33071] = "CLAMP", t[t.REPEAT = 10497] = "REPEAT", t[t.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT";
    }(Ce || (Ce = {})), function (t) {
      t[t.OFF = 0] = "OFF", t[t.POW2 = 1] = "POW2", t[t.ON = 2] = "ON", t[t.ON_MANUAL = 3] = "ON_MANUAL";
    }(Le || (Le = {})), function (t) {
      t[t.NPM = 0] = "NPM", t[t.UNPACK = 1] = "UNPACK", t[t.PMA = 2] = "PMA", t[t.NO_PREMULTIPLIED_ALPHA = 0] = "NO_PREMULTIPLIED_ALPHA", t[t.PREMULTIPLY_ON_UPLOAD = 1] = "PREMULTIPLY_ON_UPLOAD", t[t.PREMULTIPLY_ALPHA = 2] = "PREMULTIPLY_ALPHA", t[t.PREMULTIPLIED_ALPHA = 2] = "PREMULTIPLIED_ALPHA";
    }(Fe || (Fe = {})), function (t) {
      t[t.NO = 0] = "NO", t[t.YES = 1] = "YES", t[t.AUTO = 2] = "AUTO", t[t.BLEND = 0] = "BLEND", t[t.CLEAR = 1] = "CLEAR", t[t.BLIT = 2] = "BLIT";
    }(Ue || (Ue = {})), function (t) {
      t[t.AUTO = 0] = "AUTO", t[t.MANUAL = 1] = "MANUAL";
    }(Ge || (Ge = {})), function (t) {
      t.LOW = "lowp", t.MEDIUM = "mediump", t.HIGH = "highp";
    }(Be || (Be = {})), function (t) {
      t[t.NONE = 0] = "NONE", t[t.SCISSOR = 1] = "SCISSOR", t[t.STENCIL = 2] = "STENCIL", t[t.SPRITE = 3] = "SPRITE";
    }(Xe || (Xe = {})), function (t) {
      t[t.NONE = 0] = "NONE", t[t.LOW = 2] = "LOW", t[t.MEDIUM = 4] = "MEDIUM", t[t.HIGH = 8] = "HIGH";
    }(ke || (ke = {})), function (t) {
      t[t.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER", t[t.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", t[t.UNIFORM_BUFFER = 35345] = "UNIFORM_BUFFER";
    }(He || (He = {}));

    var We = function (t) {
      function e() {
        var e = t.call(this) || this;
        return e.children = [], e.sortableChildren = Et.SORTABLE_CHILDREN, e.sortDirty = !1, e;
      }

      return xe(e, t), e.prototype.onChildrenChange = function (t) {}, e.prototype.addChild = function () {
        for (var t = arguments, e = [], r = 0; r < arguments.length; r++) e[r] = t[r];

        if (e.length > 1) for (var i = 0; i < e.length; i++) this.addChild(e[i]);else {
          var n = e[0];
          n.parent && n.parent.removeChild(n), n.parent = this, this.sortDirty = !0, n.transform._parentID = -1, this.children.push(n), this._boundsID++, this.onChildrenChange(this.children.length - 1), this.emit("childAdded", n, this, this.children.length - 1), n.emit("added", this);
        }
        return e[0];
      }, e.prototype.addChildAt = function (t, e) {
        if (e < 0 || e > this.children.length) throw new Error(t + "addChildAt: The index " + e + " supplied is out of bounds " + this.children.length);
        return t.parent && t.parent.removeChild(t), t.parent = this, this.sortDirty = !0, t.transform._parentID = -1, this.children.splice(e, 0, t), this._boundsID++, this.onChildrenChange(e), t.emit("added", this), this.emit("childAdded", t, this, e), t;
      }, e.prototype.swapChildren = function (t, e) {
        if (t !== e) {
          var r = this.getChildIndex(t),
              i = this.getChildIndex(e);
          this.children[r] = e, this.children[i] = t, this.onChildrenChange(r < i ? r : i);
        }
      }, e.prototype.getChildIndex = function (t) {
        var e = this.children.indexOf(t);
        if (-1 === e) throw new Error("The supplied DisplayObject must be a child of the caller");
        return e;
      }, e.prototype.setChildIndex = function (t, e) {
        if (e < 0 || e >= this.children.length) throw new Error("The index " + e + " supplied is out of bounds " + this.children.length);
        var r = this.getChildIndex(t);
        kt(this.children, r, 1), this.children.splice(e, 0, t), this.onChildrenChange(e);
      }, e.prototype.getChildAt = function (t) {
        if (t < 0 || t >= this.children.length) throw new Error("getChildAt: Index (" + t + ") does not exist.");
        return this.children[t];
      }, e.prototype.removeChild = function () {
        for (var t = arguments, e = [], r = 0; r < arguments.length; r++) e[r] = t[r];

        if (e.length > 1) for (var i = 0; i < e.length; i++) this.removeChild(e[i]);else {
          var n = e[0],
              o = this.children.indexOf(n);
          if (-1 === o) return null;
          n.parent = null, n.transform._parentID = -1, kt(this.children, o, 1), this._boundsID++, this.onChildrenChange(o), n.emit("removed", this), this.emit("childRemoved", n, this, o);
        }
        return e[0];
      }, e.prototype.removeChildAt = function (t) {
        var e = this.getChildAt(t);
        return e.parent = null, e.transform._parentID = -1, kt(this.children, t, 1), this._boundsID++, this.onChildrenChange(t), e.emit("removed", this), this.emit("childRemoved", e, this, t), e;
      }, e.prototype.removeChildren = function (t, e) {
        void 0 === t && (t = 0), void 0 === e && (e = this.children.length);
        var r,
            i = t,
            n = e - i;

        if (n > 0 && n <= e) {
          r = this.children.splice(i, n);

          for (var o = 0; o < r.length; ++o) r[o].parent = null, r[o].transform && (r[o].transform._parentID = -1);

          for (this._boundsID++, this.onChildrenChange(t), o = 0; o < r.length; ++o) r[o].emit("removed", this), this.emit("childRemoved", r[o], this, o);

          return r;
        }

        if (0 === n && 0 === this.children.length) return [];
        throw new RangeError("removeChildren: numeric values are outside the acceptable range.");
      }, e.prototype.sortChildren = function () {
        for (var t = !1, e = 0, r = this.children.length; e < r; ++e) {
          var i = this.children[e];
          i._lastSortedIndex = e, t || 0 === i.zIndex || (t = !0);
        }

        t && this.children.length > 1 && this.children.sort(Ve), this.sortDirty = !1;
      }, e.prototype.updateTransform = function () {
        this.sortableChildren && this.sortDirty && this.sortChildren(), this._boundsID++, this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha;

        for (var t = 0, e = this.children.length; t < e; ++t) {
          var r = this.children[t];
          r.visible && r.updateTransform();
        }
      }, e.prototype.calculateBounds = function () {
        this._bounds.clear(), this._calculateBounds();

        for (var t = 0; t < this.children.length; t++) {
          var e = this.children[t];
          if (e.visible && e.renderable) if (e.calculateBounds(), e._mask) {
            var r = e._mask.maskObject || e._mask;
            r.calculateBounds(), this._bounds.addBoundsMask(e._bounds, r._bounds);
          } else e.filterArea ? this._bounds.addBoundsArea(e._bounds, e.filterArea) : this._bounds.addBounds(e._bounds);
        }

        this._bounds.updateID = this._boundsID;
      }, e.prototype.getLocalBounds = function (e, r) {
        void 0 === r && (r = !1);
        var i = t.prototype.getLocalBounds.call(this, e);
        if (!r) for (var n = 0, o = this.children.length; n < o; ++n) {
          var s = this.children[n];
          s.visible && s.updateTransform();
        }
        return i;
      }, e.prototype._calculateBounds = function () {}, e.prototype._renderWithCulling = function (t) {
        var r = t.renderTexture.sourceFrame;

        if (r.width > 0 && r.height > 0) {
          var i, n;
          if (this.cullArea ? (i = this.cullArea, n = this.worldTransform) : this._render !== e.prototype._render && (i = this.getBounds(!0)), i && r.intersects(i, n)) this._render(t);else if (this.cullArea) return;

          for (var o = 0, s = this.children.length; o < s; ++o) {
            var a = this.children[o],
                h = a.cullable;
            a.cullable = h || !this.cullArea, a.render(t), a.cullable = h;
          }
        }
      }, e.prototype.render = function (t) {
        if (this.visible && !(this.worldAlpha <= 0) && this.renderable) if (this._mask || this.filters && this.filters.length) this.renderAdvanced(t);else if (this.cullable) this._renderWithCulling(t);else {
          this._render(t);

          for (var e = 0, r = this.children.length; e < r; ++e) this.children[e].render(t);
        }
      }, e.prototype.renderAdvanced = function (t) {
        var e = this.filters,
            r = this._mask;

        if (e) {
          this._enabledFilters || (this._enabledFilters = []), this._enabledFilters.length = 0;

          for (var i = 0; i < e.length; i++) e[i].enabled && this._enabledFilters.push(e[i]);
        }

        var n = e && this._enabledFilters && this._enabledFilters.length || r && (!r.isMaskData || r.enabled && (r.autoDetect || r.type !== Xe.NONE));
        if (n && t.batch.flush(), e && this._enabledFilters && this._enabledFilters.length && t.filter.push(this, this._enabledFilters), r && t.mask.push(this, this._mask), this.cullable) this._renderWithCulling(t);else {
          this._render(t), i = 0;

          for (var o = this.children.length; i < o; ++i) this.children[i].render(t);
        }
        n && t.batch.flush(), r && t.mask.pop(this), e && this._enabledFilters && this._enabledFilters.length && t.filter.pop();
      }, e.prototype._render = function (t) {}, e.prototype.destroy = function (e) {
        t.prototype.destroy.call(this), this.sortDirty = !1;
        var r = "boolean" == typeof e ? e : e && e.children,
            i = this.removeChildren(0, this.children.length);
        if (r) for (var n = 0; n < i.length; ++n) i[n].destroy(e);
      }, Object.defineProperty(e.prototype, "width", {
        get: function () {
          return this.scale.x * this.getLocalBounds().width;
        },
        set: function (t) {
          var e = this.getLocalBounds().width;
          this.scale.x = 0 !== e ? t / e : 1, this._width = t;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "height", {
        get: function () {
          return this.scale.y * this.getLocalBounds().height;
        },
        set: function (t) {
          var e = this.getLocalBounds().height;
          this.scale.y = 0 !== e ? t / e : 1, this._height = t;
        },
        enumerable: !1,
        configurable: !0
      }), e;
    }(je);

    We.prototype.containerUpdateTransform = We.prototype.updateTransform, je.mixin({
      accessible: !1,
      accessibleTitle: null,
      accessibleHint: null,
      tabIndex: 0,
      _accessibleActive: !1,
      _accessibleDiv: null,
      accessibleType: "button",
      accessiblePointerEvents: "auto",
      accessibleChildren: !0,
      renderId: -1
    });

    var ze,
        qe = function () {
      function t(t) {
        this.debug = !1, this._isActive = !1, this._isMobileAccessibility = !1, this.pool = [], this.renderId = 0, this.children = [], this.androidUpdateCount = 0, this.androidUpdateFrequency = 500, this._hookDiv = null, (tt.tablet || tt.phone) && this.createTouchHook();
        var e = document.createElement("div");
        e.style.width = "100px", e.style.height = "100px", e.style.position = "absolute", e.style.top = "0px", e.style.left = "0px", e.style.zIndex = 2..toString(), this.div = e, this.renderer = t, this._onKeyDown = this._onKeyDown.bind(this), this._onMouseMove = this._onMouseMove.bind(this), globalThis.addEventListener("keydown", this._onKeyDown, !1);
      }

      return Object.defineProperty(t.prototype, "isActive", {
        get: function () {
          return this._isActive;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "isMobileAccessibility", {
        get: function () {
          return this._isMobileAccessibility;
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.createTouchHook = function () {
        var t = this,
            e = document.createElement("button");
        e.style.width = "1px", e.style.height = "1px", e.style.position = "absolute", e.style.top = "-1000px", e.style.left = "-1000px", e.style.zIndex = 2..toString(), e.style.backgroundColor = "#FF0000", e.title = "select to enable accessibility for this content", e.addEventListener("focus", function () {
          t._isMobileAccessibility = !0, t.activate(), t.destroyTouchHook();
        }), document.body.appendChild(e), this._hookDiv = e;
      }, t.prototype.destroyTouchHook = function () {
        this._hookDiv && (document.body.removeChild(this._hookDiv), this._hookDiv = null);
      }, t.prototype.activate = function () {
        var t;
        this._isActive || (this._isActive = !0, globalThis.document.addEventListener("mousemove", this._onMouseMove, !0), globalThis.removeEventListener("keydown", this._onKeyDown, !1), this.renderer.on("postrender", this.update, this), null === (t = this.renderer.view.parentNode) || void 0 === t || t.appendChild(this.div));
      }, t.prototype.deactivate = function () {
        var t;
        this._isActive && !this._isMobileAccessibility && (this._isActive = !1, globalThis.document.removeEventListener("mousemove", this._onMouseMove, !0), globalThis.addEventListener("keydown", this._onKeyDown, !1), this.renderer.off("postrender", this.update), null === (t = this.div.parentNode) || void 0 === t || t.removeChild(this.div));
      }, t.prototype.updateAccessibleObjects = function (t) {
        if (t.visible && t.accessibleChildren) {
          t.accessible && t.interactive && (t._accessibleActive || this.addChild(t), t.renderId = this.renderId);
          var e = t.children;
          if (e) for (var r = 0; r < e.length; r++) this.updateAccessibleObjects(e[r]);
        }
      }, t.prototype.update = function () {
        var t = performance.now();

        if (!(tt.android.device && t < this.androidUpdateCount) && (this.androidUpdateCount = t + this.androidUpdateFrequency, this.renderer.renderingToScreen)) {
          this.renderer._lastObjectRendered && this.updateAccessibleObjects(this.renderer._lastObjectRendered);
          var e = this.renderer.view.getBoundingClientRect(),
              r = e.left,
              i = e.top,
              n = e.width,
              o = e.height,
              s = this.renderer,
              a = s.width,
              h = s.height,
              u = s.resolution,
              l = n / a * u,
              c = o / h * u,
              d = this.div;
          d.style.left = r + "px", d.style.top = i + "px", d.style.width = a + "px", d.style.height = h + "px";

          for (var f = 0; f < this.children.length; f++) {
            var p = this.children[f];
            if (p.renderId !== this.renderId) p._accessibleActive = !1, kt(this.children, f, 1), this.div.removeChild(p._accessibleDiv), this.pool.push(p._accessibleDiv), p._accessibleDiv = null, f--;else {
              d = p._accessibleDiv;
              var _ = p.hitArea,
                  v = p.worldTransform;
              p.hitArea ? (d.style.left = (v.tx + _.x * v.a) * l + "px", d.style.top = (v.ty + _.y * v.d) * c + "px", d.style.width = _.width * v.a * l + "px", d.style.height = _.height * v.d * c + "px") : (_ = p.getBounds(), this.capHitArea(_), d.style.left = _.x * l + "px", d.style.top = _.y * c + "px", d.style.width = _.width * l + "px", d.style.height = _.height * c + "px", d.title !== p.accessibleTitle && null !== p.accessibleTitle && (d.title = p.accessibleTitle), d.getAttribute("aria-label") !== p.accessibleHint && null !== p.accessibleHint && d.setAttribute("aria-label", p.accessibleHint)), p.accessibleTitle === d.title && p.tabIndex === d.tabIndex || (d.title = p.accessibleTitle, d.tabIndex = p.tabIndex, this.debug && this.updateDebugHTML(d));
            }
          }

          this.renderId++;
        }
      }, t.prototype.updateDebugHTML = function (t) {
        t.innerHTML = "type: " + t.type + "</br> title : " + t.title + "</br> tabIndex: " + t.tabIndex;
      }, t.prototype.capHitArea = function (t) {
        t.x < 0 && (t.width += t.x, t.x = 0), t.y < 0 && (t.height += t.y, t.y = 0);
        var e = this.renderer,
            r = e.width,
            i = e.height;
        t.x + t.width > r && (t.width = r - t.x), t.y + t.height > i && (t.height = i - t.y);
      }, t.prototype.addChild = function (t) {
        var e = this.pool.pop();
        e || ((e = document.createElement("button")).style.width = "100px", e.style.height = "100px", e.style.backgroundColor = this.debug ? "rgba(255,255,255,0.5)" : "transparent", e.style.position = "absolute", e.style.zIndex = 2..toString(), e.style.borderStyle = "none", navigator.userAgent.toLowerCase().indexOf("chrome") > -1 ? e.setAttribute("aria-live", "off") : e.setAttribute("aria-live", "polite"), navigator.userAgent.match(/rv:.*Gecko\//) ? e.setAttribute("aria-relevant", "additions") : e.setAttribute("aria-relevant", "text"), e.addEventListener("click", this._onClick.bind(this)), e.addEventListener("focus", this._onFocus.bind(this)), e.addEventListener("focusout", this._onFocusOut.bind(this))), e.style.pointerEvents = t.accessiblePointerEvents, e.type = t.accessibleType, t.accessibleTitle && null !== t.accessibleTitle ? e.title = t.accessibleTitle : t.accessibleHint && null !== t.accessibleHint || (e.title = "displayObject " + t.tabIndex), t.accessibleHint && null !== t.accessibleHint && e.setAttribute("aria-label", t.accessibleHint), this.debug && this.updateDebugHTML(e), t._accessibleActive = !0, t._accessibleDiv = e, e.displayObject = t, this.children.push(t), this.div.appendChild(t._accessibleDiv), t._accessibleDiv.tabIndex = t.tabIndex;
      }, t.prototype._onClick = function (t) {
        var e = this.renderer.plugins.interaction,
            r = t.target.displayObject,
            i = e.eventData;
        e.dispatchEvent(r, "click", i), e.dispatchEvent(r, "pointertap", i), e.dispatchEvent(r, "tap", i);
      }, t.prototype._onFocus = function (t) {
        t.target.getAttribute("aria-live") || t.target.setAttribute("aria-live", "assertive");
        var e = this.renderer.plugins.interaction,
            r = t.target.displayObject,
            i = e.eventData;
        e.dispatchEvent(r, "mouseover", i);
      }, t.prototype._onFocusOut = function (t) {
        t.target.getAttribute("aria-live") || t.target.setAttribute("aria-live", "polite");
        var e = this.renderer.plugins.interaction,
            r = t.target.displayObject,
            i = e.eventData;
        e.dispatchEvent(r, "mouseout", i);
      }, t.prototype._onKeyDown = function (t) {
        9 === t.keyCode && this.activate();
      }, t.prototype._onMouseMove = function (t) {
        0 === t.movementX && 0 === t.movementY || this.deactivate();
      }, t.prototype.destroy = function () {
        this.destroyTouchHook(), this.div = null, globalThis.document.removeEventListener("mousemove", this._onMouseMove, !0), globalThis.removeEventListener("keydown", this._onKeyDown), this.pool = null, this.children = null, this.renderer = null;
      }, t;
    }();

    Et.TARGET_FPMS = .06, function (t) {
      t[t.INTERACTION = 50] = "INTERACTION", t[t.HIGH = 25] = "HIGH", t[t.NORMAL = 0] = "NORMAL", t[t.LOW = -25] = "LOW", t[t.UTILITY = -50] = "UTILITY";
    }(ze || (ze = {}));

    var Ke = function () {
      function t(t, e, r, i) {
        void 0 === e && (e = null), void 0 === r && (r = 0), void 0 === i && (i = !1), this.next = null, this.previous = null, this._destroyed = !1, this.fn = t, this.context = e, this.priority = r, this.once = i;
      }

      return t.prototype.match = function (t, e) {
        return void 0 === e && (e = null), this.fn === t && this.context === e;
      }, t.prototype.emit = function (t) {
        this.fn && (this.context ? this.fn.call(this.context, t) : this.fn(t));
        var e = this.next;
        return this.once && this.destroy(!0), this._destroyed && (this.next = null), e;
      }, t.prototype.connect = function (t) {
        this.previous = t, t.next && (t.next.previous = this), this.next = t.next, t.next = this;
      }, t.prototype.destroy = function (t) {
        void 0 === t && (t = !1), this._destroyed = !0, this.fn = null, this.context = null, this.previous && (this.previous.next = this.next), this.next && (this.next.previous = this.previous);
        var e = this.next;
        return this.next = t ? null : e, this.previous = null, e;
      }, t;
    }(),
        Ze = function () {
      function t() {
        var t = this;
        this.autoStart = !1, this.deltaTime = 1, this.lastTime = -1, this.speed = 1, this.started = !1, this._requestId = null, this._maxElapsedMS = 100, this._minElapsedMS = 0, this._protected = !1, this._lastFrame = -1, this._head = new Ke(null, null, 1 / 0), this.deltaMS = 1 / Et.TARGET_FPMS, this.elapsedMS = 1 / Et.TARGET_FPMS, this._tick = function (e) {
          t._requestId = null, t.started && (t.update(e), t.started && null === t._requestId && t._head.next && (t._requestId = requestAnimationFrame(t._tick)));
        };
      }

      return t.prototype._requestIfNeeded = function () {
        null === this._requestId && this._head.next && (this.lastTime = performance.now(), this._lastFrame = this.lastTime, this._requestId = requestAnimationFrame(this._tick));
      }, t.prototype._cancelIfNeeded = function () {
        null !== this._requestId && (cancelAnimationFrame(this._requestId), this._requestId = null);
      }, t.prototype._startIfPossible = function () {
        this.started ? this._requestIfNeeded() : this.autoStart && this.start();
      }, t.prototype.add = function (t, e, r) {
        return void 0 === r && (r = ze.NORMAL), this._addListener(new Ke(t, e, r));
      }, t.prototype.addOnce = function (t, e, r) {
        return void 0 === r && (r = ze.NORMAL), this._addListener(new Ke(t, e, r, !0));
      }, t.prototype._addListener = function (t) {
        var e = this._head.next,
            r = this._head;

        if (e) {
          for (; e;) {
            if (t.priority > e.priority) {
              t.connect(r);
              break;
            }

            r = e, e = e.next;
          }

          t.previous || t.connect(r);
        } else t.connect(r);

        return this._startIfPossible(), this;
      }, t.prototype.remove = function (t, e) {
        for (var r = this._head.next; r;) r = r.match(t, e) ? r.destroy() : r.next;

        return this._head.next || this._cancelIfNeeded(), this;
      }, Object.defineProperty(t.prototype, "count", {
        get: function () {
          if (!this._head) return 0;

          for (var t = 0, e = this._head; e = e.next;) t++;

          return t;
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.start = function () {
        this.started || (this.started = !0, this._requestIfNeeded());
      }, t.prototype.stop = function () {
        this.started && (this.started = !1, this._cancelIfNeeded());
      }, t.prototype.destroy = function () {
        if (!this._protected) {
          this.stop();

          for (var t = this._head.next; t;) t = t.destroy(!0);

          this._head.destroy(), this._head = null;
        }
      }, t.prototype.update = function (t) {
        var e;

        if (void 0 === t && (t = performance.now()), t > this.lastTime) {
          if ((e = this.elapsedMS = t - this.lastTime) > this._maxElapsedMS && (e = this._maxElapsedMS), e *= this.speed, this._minElapsedMS) {
            var r = t - this._lastFrame | 0;
            if (r < this._minElapsedMS) return;
            this._lastFrame = t - r % this._minElapsedMS;
          }

          this.deltaMS = e, this.deltaTime = this.deltaMS * Et.TARGET_FPMS;

          for (var i = this._head, n = i.next; n;) n = n.emit(this.deltaTime);

          i.next || this._cancelIfNeeded();
        } else this.deltaTime = this.deltaMS = this.elapsedMS = 0;

        this.lastTime = t;
      }, Object.defineProperty(t.prototype, "FPS", {
        get: function () {
          return 1e3 / this.elapsedMS;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "minFPS", {
        get: function () {
          return 1e3 / this._maxElapsedMS;
        },
        set: function (t) {
          var e = Math.min(this.maxFPS, t),
              r = Math.min(Math.max(0, e) / 1e3, Et.TARGET_FPMS);
          this._maxElapsedMS = 1 / r;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "maxFPS", {
        get: function () {
          return this._minElapsedMS ? Math.round(1e3 / this._minElapsedMS) : 0;
        },
        set: function (t) {
          if (0 === t) this._minElapsedMS = 0;else {
            var e = Math.max(this.minFPS, t);
            this._minElapsedMS = 1 / (e / 1e3);
          }
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t, "shared", {
        get: function () {
          if (!t._shared) {
            var e = t._shared = new t();
            e.autoStart = !0, e._protected = !0;
          }

          return t._shared;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t, "system", {
        get: function () {
          if (!t._system) {
            var e = t._system = new t();
            e.autoStart = !0, e._protected = !0;
          }

          return t._system;
        },
        enumerable: !1,
        configurable: !0
      }), t;
    }(),
        Je = function () {
      function t() {}

      return t.init = function (t) {
        var e = this;
        t = Object.assign({
          autoStart: !0,
          sharedTicker: !1
        }, t), Object.defineProperty(this, "ticker", {
          set: function (t) {
            this._ticker && this._ticker.remove(this.render, this), this._ticker = t, t && t.add(this.render, this, ze.LOW);
          },
          get: function () {
            return this._ticker;
          }
        }), this.stop = function () {
          e._ticker.stop();
        }, this.start = function () {
          e._ticker.start();
        }, this._ticker = null, this.ticker = t.sharedTicker ? Ze.shared : new Ze(), t.autoStart && this.start();
      }, t.destroy = function () {
        if (this._ticker) {
          var t = this._ticker;
          this.ticker = null, t.destroy();
        }
      }, t;
    }(),
        Qe = function () {
      function t() {
        this.pressure = 0, this.rotationAngle = 0, this.twist = 0, this.tangentialPressure = 0, this.global = new ie(), this.target = null, this.originalEvent = null, this.identifier = null, this.isPrimary = !1, this.button = 0, this.buttons = 0, this.width = 0, this.height = 0, this.tiltX = 0, this.tiltY = 0, this.pointerType = null, this.pressure = 0, this.rotationAngle = 0, this.twist = 0, this.tangentialPressure = 0;
      }

      return Object.defineProperty(t.prototype, "pointerId", {
        get: function () {
          return this.identifier;
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.getLocalPosition = function (t, e, r) {
        return t.worldTransform.applyInverse(r || this.global, e);
      }, t.prototype.copyEvent = function (t) {
        "isPrimary" in t && t.isPrimary && (this.isPrimary = !0), this.button = "button" in t && t.button;
        var e = "buttons" in t && t.buttons;
        this.buttons = Number.isInteger(e) ? e : "which" in t && t.which, this.width = "width" in t && t.width, this.height = "height" in t && t.height, this.tiltX = "tiltX" in t && t.tiltX, this.tiltY = "tiltY" in t && t.tiltY, this.pointerType = "pointerType" in t && t.pointerType, this.pressure = "pressure" in t && t.pressure, this.rotationAngle = "rotationAngle" in t && t.rotationAngle, this.twist = "twist" in t && t.twist || 0, this.tangentialPressure = "tangentialPressure" in t && t.tangentialPressure || 0;
      }, t.prototype.reset = function () {
        this.isPrimary = !1;
      }, t;
    }(),
        $e = function (t, e) {
      return $e = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      }, $e(t, e);
    },
        tr = function () {
      function t() {
        this.stopped = !1, this.stopsPropagatingAt = null, this.stopPropagationHint = !1, this.target = null, this.currentTarget = null, this.type = null, this.data = null;
      }

      return t.prototype.stopPropagation = function () {
        this.stopped = !0, this.stopPropagationHint = !0, this.stopsPropagatingAt = this.currentTarget;
      }, t.prototype.reset = function () {
        this.stopped = !1, this.stopsPropagatingAt = null, this.stopPropagationHint = !1, this.currentTarget = null, this.target = null;
      }, t;
    }(),
        er = function () {
      function t(e) {
        this._pointerId = e, this._flags = t.FLAGS.NONE;
      }

      return t.prototype._doSet = function (t, e) {
        this._flags = e ? this._flags | t : this._flags & ~t;
      }, Object.defineProperty(t.prototype, "pointerId", {
        get: function () {
          return this._pointerId;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "flags", {
        get: function () {
          return this._flags;
        },
        set: function (t) {
          this._flags = t;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "none", {
        get: function () {
          return this._flags === t.FLAGS.NONE;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "over", {
        get: function () {
          return 0 != (this._flags & t.FLAGS.OVER);
        },
        set: function (e) {
          this._doSet(t.FLAGS.OVER, e);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "rightDown", {
        get: function () {
          return 0 != (this._flags & t.FLAGS.RIGHT_DOWN);
        },
        set: function (e) {
          this._doSet(t.FLAGS.RIGHT_DOWN, e);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "leftDown", {
        get: function () {
          return 0 != (this._flags & t.FLAGS.LEFT_DOWN);
        },
        set: function (e) {
          this._doSet(t.FLAGS.LEFT_DOWN, e);
        },
        enumerable: !1,
        configurable: !0
      }), t.FLAGS = Object.freeze({
        NONE: 0,
        OVER: 1,
        LEFT_DOWN: 2,
        RIGHT_DOWN: 4
      }), t;
    }(),
        rr = function () {
      function t() {
        this._tempPoint = new ie();
      }

      return t.prototype.recursiveFindHit = function (t, e, r, i, n) {
        if (!e || !e.visible) return !1;
        var o = t.data.global,
            s = !1,
            a = n = e.interactive || n,
            h = !0;
        if (e.hitArea ? (i && (e.worldTransform.applyInverse(o, this._tempPoint), e.hitArea.contains(this._tempPoint.x, this._tempPoint.y) ? s = !0 : (i = !1, h = !1)), a = !1) : e._mask && i && (e._mask.containsPoint && e._mask.containsPoint(o) || (i = !1)), h && e.interactiveChildren && e.children) for (var u = e.children, l = u.length - 1; l >= 0; l--) {
          var c = u[l],
              d = this.recursiveFindHit(t, c, r, i, a);

          if (d) {
            if (!c.parent) continue;
            a = !1, d && (t.target && (i = !1), s = !0);
          }
        }
        return n && (i && !t.target && !e.hitArea && e.containsPoint && e.containsPoint(o) && (s = !0), e.interactive && (s && !t.target && (t.target = e), r && r(t, e, !!s))), s;
      }, t.prototype.findHit = function (t, e, r, i) {
        this.recursiveFindHit(t, e, r, i, !1);
      }, t;
    }(),
        ir = {
      interactive: !1,
      interactiveChildren: !0,
      hitArea: null,

      get buttonMode() {
        return "pointer" === this.cursor;
      },

      set buttonMode(t) {
        t ? this.cursor = "pointer" : "pointer" === this.cursor && (this.cursor = null);
      },

      cursor: null,

      get trackedPointers() {
        return void 0 === this._trackedPointers && (this._trackedPointers = {}), this._trackedPointers;
      },

      _trackedPointers: void 0
    };

    je.mixin(ir);

    var nr = {
      target: null,
      data: {
        global: null
      }
    },
        or = function (t) {
      function e(e, r) {
        var i = t.call(this) || this;
        return r = r || {}, i.renderer = e, i.autoPreventDefault = void 0 === r.autoPreventDefault || r.autoPreventDefault, i.interactionFrequency = r.interactionFrequency || 10, i.mouse = new Qe(), i.mouse.identifier = 1, i.mouse.global.set(-999999), i.activeInteractionData = {}, i.activeInteractionData[1] = i.mouse, i.interactionDataPool = [], i.eventData = new tr(), i.interactionDOMElement = null, i.moveWhenInside = !1, i.eventsAdded = !1, i.tickerAdded = !1, i.mouseOverRenderer = !("PointerEvent" in globalThis), i.supportsTouchEvents = "ontouchstart" in globalThis, i.supportsPointerEvents = !!globalThis.PointerEvent, i.onPointerUp = i.onPointerUp.bind(i), i.processPointerUp = i.processPointerUp.bind(i), i.onPointerCancel = i.onPointerCancel.bind(i), i.processPointerCancel = i.processPointerCancel.bind(i), i.onPointerDown = i.onPointerDown.bind(i), i.processPointerDown = i.processPointerDown.bind(i), i.onPointerMove = i.onPointerMove.bind(i), i.processPointerMove = i.processPointerMove.bind(i), i.onPointerOut = i.onPointerOut.bind(i), i.processPointerOverOut = i.processPointerOverOut.bind(i), i.onPointerOver = i.onPointerOver.bind(i), i.cursorStyles = {
          default: "inherit",
          pointer: "pointer"
        }, i.currentCursorMode = null, i.cursor = null, i.resolution = 1, i.delayedEvents = [], i.search = new rr(), i._tempDisplayObject = new Ye(), i._eventListenerOptions = {
          capture: !0,
          passive: !1
        }, i._useSystemTicker = void 0 === r.useSystemTicker || r.useSystemTicker, i.setTargetElement(i.renderer.view, i.renderer.resolution), i;
      }

      return function (t, e) {
        function r() {
          this.constructor = t;
        }

        $e(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
      }(e, t), Object.defineProperty(e.prototype, "useSystemTicker", {
        get: function () {
          return this._useSystemTicker;
        },
        set: function (t) {
          this._useSystemTicker = t, t ? this.addTickerListener() : this.removeTickerListener();
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "lastObjectRendered", {
        get: function () {
          return this.renderer._lastObjectRendered || this._tempDisplayObject;
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.hitTest = function (t, e) {
        return nr.target = null, nr.data.global = t, e || (e = this.lastObjectRendered), this.processInteractive(nr, e, null, !0), nr.target;
      }, e.prototype.setTargetElement = function (t, e) {
        void 0 === e && (e = 1), this.removeTickerListener(), this.removeEvents(), this.interactionDOMElement = t, this.resolution = e, this.addEvents(), this.addTickerListener();
      }, e.prototype.addTickerListener = function () {
        !this.tickerAdded && this.interactionDOMElement && this._useSystemTicker && (Ze.system.add(this.tickerUpdate, this, ze.INTERACTION), this.tickerAdded = !0);
      }, e.prototype.removeTickerListener = function () {
        this.tickerAdded && (Ze.system.remove(this.tickerUpdate, this), this.tickerAdded = !1);
      }, e.prototype.addEvents = function () {
        if (!this.eventsAdded && this.interactionDOMElement) {
          var t = this.interactionDOMElement.style;
          globalThis.navigator.msPointerEnabled ? (t.msContentZooming = "none", t.msTouchAction = "none") : this.supportsPointerEvents && (t.touchAction = "none"), this.supportsPointerEvents ? (globalThis.document.addEventListener("pointermove", this.onPointerMove, this._eventListenerOptions), this.interactionDOMElement.addEventListener("pointerdown", this.onPointerDown, this._eventListenerOptions), this.interactionDOMElement.addEventListener("pointerleave", this.onPointerOut, this._eventListenerOptions), this.interactionDOMElement.addEventListener("pointerover", this.onPointerOver, this._eventListenerOptions), globalThis.addEventListener("pointercancel", this.onPointerCancel, this._eventListenerOptions), globalThis.addEventListener("pointerup", this.onPointerUp, this._eventListenerOptions)) : (globalThis.document.addEventListener("mousemove", this.onPointerMove, this._eventListenerOptions), this.interactionDOMElement.addEventListener("mousedown", this.onPointerDown, this._eventListenerOptions), this.interactionDOMElement.addEventListener("mouseout", this.onPointerOut, this._eventListenerOptions), this.interactionDOMElement.addEventListener("mouseover", this.onPointerOver, this._eventListenerOptions), globalThis.addEventListener("mouseup", this.onPointerUp, this._eventListenerOptions)), this.supportsTouchEvents && (this.interactionDOMElement.addEventListener("touchstart", this.onPointerDown, this._eventListenerOptions), this.interactionDOMElement.addEventListener("touchcancel", this.onPointerCancel, this._eventListenerOptions), this.interactionDOMElement.addEventListener("touchend", this.onPointerUp, this._eventListenerOptions), this.interactionDOMElement.addEventListener("touchmove", this.onPointerMove, this._eventListenerOptions)), this.eventsAdded = !0;
        }
      }, e.prototype.removeEvents = function () {
        if (this.eventsAdded && this.interactionDOMElement) {
          var t = this.interactionDOMElement.style;
          globalThis.navigator.msPointerEnabled ? (t.msContentZooming = "", t.msTouchAction = "") : this.supportsPointerEvents && (t.touchAction = ""), this.supportsPointerEvents ? (globalThis.document.removeEventListener("pointermove", this.onPointerMove, this._eventListenerOptions), this.interactionDOMElement.removeEventListener("pointerdown", this.onPointerDown, this._eventListenerOptions), this.interactionDOMElement.removeEventListener("pointerleave", this.onPointerOut, this._eventListenerOptions), this.interactionDOMElement.removeEventListener("pointerover", this.onPointerOver, this._eventListenerOptions), globalThis.removeEventListener("pointercancel", this.onPointerCancel, this._eventListenerOptions), globalThis.removeEventListener("pointerup", this.onPointerUp, this._eventListenerOptions)) : (globalThis.document.removeEventListener("mousemove", this.onPointerMove, this._eventListenerOptions), this.interactionDOMElement.removeEventListener("mousedown", this.onPointerDown, this._eventListenerOptions), this.interactionDOMElement.removeEventListener("mouseout", this.onPointerOut, this._eventListenerOptions), this.interactionDOMElement.removeEventListener("mouseover", this.onPointerOver, this._eventListenerOptions), globalThis.removeEventListener("mouseup", this.onPointerUp, this._eventListenerOptions)), this.supportsTouchEvents && (this.interactionDOMElement.removeEventListener("touchstart", this.onPointerDown, this._eventListenerOptions), this.interactionDOMElement.removeEventListener("touchcancel", this.onPointerCancel, this._eventListenerOptions), this.interactionDOMElement.removeEventListener("touchend", this.onPointerUp, this._eventListenerOptions), this.interactionDOMElement.removeEventListener("touchmove", this.onPointerMove, this._eventListenerOptions)), this.interactionDOMElement = null, this.eventsAdded = !1;
        }
      }, e.prototype.tickerUpdate = function (t) {
        this._deltaTime += t, this._deltaTime < this.interactionFrequency || (this._deltaTime = 0, this.update());
      }, e.prototype.update = function () {
        if (this.interactionDOMElement) if (this._didMove) this._didMove = !1;else {
          for (var t in this.cursor = null, this.activeInteractionData) if (this.activeInteractionData.hasOwnProperty(t)) {
            var e = this.activeInteractionData[t];

            if (e.originalEvent && "touch" !== e.pointerType) {
              var r = this.configureInteractionEventForDOMEvent(this.eventData, e.originalEvent, e);
              this.processInteractive(r, this.lastObjectRendered, this.processPointerOverOut, !0);
            }
          }

          this.setCursorMode(this.cursor);
        }
      }, e.prototype.setCursorMode = function (t) {
        t = t || "default";
        var e = !0;

        if (globalThis.OffscreenCanvas && this.interactionDOMElement instanceof OffscreenCanvas && (e = !1), this.currentCursorMode !== t) {
          this.currentCursorMode = t;
          var r = this.cursorStyles[t];
          if (r) switch (typeof r) {
            case "string":
              e && (this.interactionDOMElement.style.cursor = r);
              break;

            case "function":
              r(t);
              break;

            case "object":
              e && Object.assign(this.interactionDOMElement.style, r);
          } else e && "string" == typeof t && !Object.prototype.hasOwnProperty.call(this.cursorStyles, t) && (this.interactionDOMElement.style.cursor = t);
        }
      }, e.prototype.dispatchEvent = function (t, e, r) {
        r.stopPropagationHint && t !== r.stopsPropagatingAt || (r.currentTarget = t, r.type = e, t.emit(e, r), t[e] && t[e](r));
      }, e.prototype.delayDispatchEvent = function (t, e, r) {
        this.delayedEvents.push({
          displayObject: t,
          eventString: e,
          eventData: r
        });
      }, e.prototype.mapPositionToPoint = function (t, e, r) {
        var i;
        i = this.interactionDOMElement.parentElement ? this.interactionDOMElement.getBoundingClientRect() : {
          x: 0,
          y: 0,
          width: this.interactionDOMElement.width,
          height: this.interactionDOMElement.height,
          left: 0,
          top: 0
        };
        var n = 1 / this.resolution;
        t.x = (e - i.left) * (this.interactionDOMElement.width / i.width) * n, t.y = (r - i.top) * (this.interactionDOMElement.height / i.height) * n;
      }, e.prototype.processInteractive = function (t, e, r, i) {
        var n = this.search.findHit(t, e, r, i),
            o = this.delayedEvents;
        if (!o.length) return n;
        t.stopPropagationHint = !1;
        var s = o.length;
        this.delayedEvents = [];

        for (var a = 0; a < s; a++) {
          var h = o[a],
              u = h.displayObject,
              l = h.eventString,
              c = h.eventData;
          c.stopsPropagatingAt === u && (c.stopPropagationHint = !0), this.dispatchEvent(u, l, c);
        }

        return n;
      }, e.prototype.onPointerDown = function (t) {
        if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
          var e = this.normalizeToPointerData(t);
          this.autoPreventDefault && e[0].isNormalized && (t.cancelable || !("cancelable" in t)) && t.preventDefault();

          for (var r = e.length, i = 0; i < r; i++) {
            var n = e[i],
                o = this.getInteractionDataForPointerId(n),
                s = this.configureInteractionEventForDOMEvent(this.eventData, n, o);
            if (s.data.originalEvent = t, this.processInteractive(s, this.lastObjectRendered, this.processPointerDown, !0), this.emit("pointerdown", s), "touch" === n.pointerType) this.emit("touchstart", s);else if ("mouse" === n.pointerType || "pen" === n.pointerType) {
              var a = 2 === n.button;
              this.emit(a ? "rightdown" : "mousedown", this.eventData);
            }
          }
        }
      }, e.prototype.processPointerDown = function (t, e, r) {
        var i = t.data,
            n = t.data.identifier;
        if (r) if (e.trackedPointers[n] || (e.trackedPointers[n] = new er(n)), this.dispatchEvent(e, "pointerdown", t), "touch" === i.pointerType) this.dispatchEvent(e, "touchstart", t);else if ("mouse" === i.pointerType || "pen" === i.pointerType) {
          var o = 2 === i.button;
          o ? e.trackedPointers[n].rightDown = !0 : e.trackedPointers[n].leftDown = !0, this.dispatchEvent(e, o ? "rightdown" : "mousedown", t);
        }
      }, e.prototype.onPointerComplete = function (t, e, r) {
        for (var i = this.normalizeToPointerData(t), n = i.length, o = t.target !== this.interactionDOMElement ? "outside" : "", s = 0; s < n; s++) {
          var a = i[s],
              h = this.getInteractionDataForPointerId(a),
              u = this.configureInteractionEventForDOMEvent(this.eventData, a, h);

          if (u.data.originalEvent = t, this.processInteractive(u, this.lastObjectRendered, r, e || !o), this.emit(e ? "pointercancel" : "pointerup" + o, u), "mouse" === a.pointerType || "pen" === a.pointerType) {
            var l = 2 === a.button;
            this.emit(l ? "rightup" + o : "mouseup" + o, u);
          } else "touch" === a.pointerType && (this.emit(e ? "touchcancel" : "touchend" + o, u), this.releaseInteractionDataForPointerId(a.pointerId));
        }
      }, e.prototype.onPointerCancel = function (t) {
        this.supportsTouchEvents && "touch" === t.pointerType || this.onPointerComplete(t, !0, this.processPointerCancel);
      }, e.prototype.processPointerCancel = function (t, e) {
        var r = t.data,
            i = t.data.identifier;
        void 0 !== e.trackedPointers[i] && (delete e.trackedPointers[i], this.dispatchEvent(e, "pointercancel", t), "touch" === r.pointerType && this.dispatchEvent(e, "touchcancel", t));
      }, e.prototype.onPointerUp = function (t) {
        this.supportsTouchEvents && "touch" === t.pointerType || this.onPointerComplete(t, !1, this.processPointerUp);
      }, e.prototype.processPointerUp = function (t, e, r) {
        var i = t.data,
            n = t.data.identifier,
            o = e.trackedPointers[n],
            s = "touch" === i.pointerType,
            a = "mouse" === i.pointerType || "pen" === i.pointerType,
            h = !1;

        if (a) {
          var u = 2 === i.button,
              l = er.FLAGS,
              c = u ? l.RIGHT_DOWN : l.LEFT_DOWN,
              d = void 0 !== o && o.flags & c;
          r ? (this.dispatchEvent(e, u ? "rightup" : "mouseup", t), d && (this.dispatchEvent(e, u ? "rightclick" : "click", t), h = !0)) : d && this.dispatchEvent(e, u ? "rightupoutside" : "mouseupoutside", t), o && (u ? o.rightDown = !1 : o.leftDown = !1);
        }

        r ? (this.dispatchEvent(e, "pointerup", t), s && this.dispatchEvent(e, "touchend", t), o && (a && !h || this.dispatchEvent(e, "pointertap", t), s && (this.dispatchEvent(e, "tap", t), o.over = !1))) : o && (this.dispatchEvent(e, "pointerupoutside", t), s && this.dispatchEvent(e, "touchendoutside", t)), o && o.none && delete e.trackedPointers[n];
      }, e.prototype.onPointerMove = function (t) {
        if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
          var e = this.normalizeToPointerData(t);
          "mouse" !== e[0].pointerType && "pen" !== e[0].pointerType || (this._didMove = !0, this.cursor = null);

          for (var r = e.length, i = 0; i < r; i++) {
            var n = e[i],
                o = this.getInteractionDataForPointerId(n),
                s = this.configureInteractionEventForDOMEvent(this.eventData, n, o);
            s.data.originalEvent = t, this.processInteractive(s, this.lastObjectRendered, this.processPointerMove, !0), this.emit("pointermove", s), "touch" === n.pointerType && this.emit("touchmove", s), "mouse" !== n.pointerType && "pen" !== n.pointerType || this.emit("mousemove", s);
          }

          "mouse" === e[0].pointerType && this.setCursorMode(this.cursor);
        }
      }, e.prototype.processPointerMove = function (t, e, r) {
        var i = t.data,
            n = "touch" === i.pointerType,
            o = "mouse" === i.pointerType || "pen" === i.pointerType;
        o && this.processPointerOverOut(t, e, r), this.moveWhenInside && !r || (this.dispatchEvent(e, "pointermove", t), n && this.dispatchEvent(e, "touchmove", t), o && this.dispatchEvent(e, "mousemove", t));
      }, e.prototype.onPointerOut = function (t) {
        if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
          var e = this.normalizeToPointerData(t)[0];
          "mouse" === e.pointerType && (this.mouseOverRenderer = !1, this.setCursorMode(null));
          var r = this.getInteractionDataForPointerId(e),
              i = this.configureInteractionEventForDOMEvent(this.eventData, e, r);
          i.data.originalEvent = e, this.processInteractive(i, this.lastObjectRendered, this.processPointerOverOut, !1), this.emit("pointerout", i), "mouse" === e.pointerType || "pen" === e.pointerType ? this.emit("mouseout", i) : this.releaseInteractionDataForPointerId(r.identifier);
        }
      }, e.prototype.processPointerOverOut = function (t, e, r) {
        var i = t.data,
            n = t.data.identifier,
            o = "mouse" === i.pointerType || "pen" === i.pointerType,
            s = e.trackedPointers[n];
        r && !s && (s = e.trackedPointers[n] = new er(n)), void 0 !== s && (r && this.mouseOverRenderer ? (s.over || (s.over = !0, this.delayDispatchEvent(e, "pointerover", t), o && this.delayDispatchEvent(e, "mouseover", t)), o && null === this.cursor && (this.cursor = e.cursor)) : s.over && (s.over = !1, this.dispatchEvent(e, "pointerout", this.eventData), o && this.dispatchEvent(e, "mouseout", t), s.none && delete e.trackedPointers[n]));
      }, e.prototype.onPointerOver = function (t) {
        var e = this.normalizeToPointerData(t)[0],
            r = this.getInteractionDataForPointerId(e),
            i = this.configureInteractionEventForDOMEvent(this.eventData, e, r);
        i.data.originalEvent = e, "mouse" === e.pointerType && (this.mouseOverRenderer = !0), this.emit("pointerover", i), "mouse" !== e.pointerType && "pen" !== e.pointerType || this.emit("mouseover", i);
      }, e.prototype.getInteractionDataForPointerId = function (t) {
        var e,
            r = t.pointerId;
        return 1 === r || "mouse" === t.pointerType ? e = this.mouse : this.activeInteractionData[r] ? e = this.activeInteractionData[r] : ((e = this.interactionDataPool.pop() || new Qe()).identifier = r, this.activeInteractionData[r] = e), e.copyEvent(t), e;
      }, e.prototype.releaseInteractionDataForPointerId = function (t) {
        var e = this.activeInteractionData[t];
        e && (delete this.activeInteractionData[t], e.reset(), this.interactionDataPool.push(e));
      }, e.prototype.configureInteractionEventForDOMEvent = function (t, e, r) {
        return t.data = r, this.mapPositionToPoint(r.global, e.clientX, e.clientY), "touch" === e.pointerType && (e.globalX = r.global.x, e.globalY = r.global.y), r.originalEvent = e, t.reset(), t;
      }, e.prototype.normalizeToPointerData = function (t) {
        var e = [];
        if (this.supportsTouchEvents && t instanceof TouchEvent) for (var r = 0, i = t.changedTouches.length; r < i; r++) {
          var n = t.changedTouches[r];
          void 0 === n.button && (n.button = t.touches.length ? 1 : 0), void 0 === n.buttons && (n.buttons = t.touches.length ? 1 : 0), void 0 === n.isPrimary && (n.isPrimary = 1 === t.touches.length && "touchstart" === t.type), void 0 === n.width && (n.width = n.radiusX || 1), void 0 === n.height && (n.height = n.radiusY || 1), void 0 === n.tiltX && (n.tiltX = 0), void 0 === n.tiltY && (n.tiltY = 0), void 0 === n.pointerType && (n.pointerType = "touch"), void 0 === n.pointerId && (n.pointerId = n.identifier || 0), void 0 === n.pressure && (n.pressure = n.force || .5), void 0 === n.twist && (n.twist = 0), void 0 === n.tangentialPressure && (n.tangentialPressure = 0), void 0 === n.layerX && (n.layerX = n.offsetX = n.clientX), void 0 === n.layerY && (n.layerY = n.offsetY = n.clientY), n.isNormalized = !0, e.push(n);
        } else if (!globalThis.MouseEvent || t instanceof MouseEvent && !(this.supportsPointerEvents && t instanceof globalThis.PointerEvent)) {
          var o = t;
          void 0 === o.isPrimary && (o.isPrimary = !0), void 0 === o.width && (o.width = 1), void 0 === o.height && (o.height = 1), void 0 === o.tiltX && (o.tiltX = 0), void 0 === o.tiltY && (o.tiltY = 0), void 0 === o.pointerType && (o.pointerType = "mouse"), void 0 === o.pointerId && (o.pointerId = 1), void 0 === o.pressure && (o.pressure = .5), void 0 === o.twist && (o.twist = 0), void 0 === o.tangentialPressure && (o.tangentialPressure = 0), o.isNormalized = !0, e.push(o);
        } else e.push(t);
        return e;
      }, e.prototype.destroy = function () {
        this.removeEvents(), this.removeTickerListener(), this.removeAllListeners(), this.renderer = null, this.mouse = null, this.eventData = null, this.interactionDOMElement = null, this.onPointerDown = null, this.processPointerDown = null, this.onPointerUp = null, this.processPointerUp = null, this.onPointerCancel = null, this.processPointerCancel = null, this.onPointerMove = null, this.processPointerMove = null, this.onPointerOut = null, this.processPointerOverOut = null, this.onPointerOver = null, this.search = null;
      }, e;
    }(bt()),
        sr = function () {
      function t(t) {
        this.items = [], this._name = t, this._aliasCount = 0;
      }

      return t.prototype.emit = function (t, e, r, i, n, o, s, a) {
        if (arguments.length > 8) throw new Error("max arguments reached");
        var h = this,
            u = h.name,
            l = h.items;
        this._aliasCount++;

        for (var c = 0, d = l.length; c < d; c++) l[c][u](t, e, r, i, n, o, s, a);

        return l === this.items && this._aliasCount--, this;
      }, t.prototype.ensureNonAliasedItems = function () {
        this._aliasCount > 0 && this.items.length > 1 && (this._aliasCount = 0, this.items = this.items.slice(0));
      }, t.prototype.add = function (t) {
        return t[this._name] && (this.ensureNonAliasedItems(), this.remove(t), this.items.push(t)), this;
      }, t.prototype.remove = function (t) {
        var e = this.items.indexOf(t);
        return -1 !== e && (this.ensureNonAliasedItems(), this.items.splice(e, 1)), this;
      }, t.prototype.contains = function (t) {
        return -1 !== this.items.indexOf(t);
      }, t.prototype.removeAll = function () {
        return this.ensureNonAliasedItems(), this.items.length = 0, this;
      }, t.prototype.destroy = function () {
        this.removeAll(), this.items = null, this._name = null;
      }, Object.defineProperty(t.prototype, "empty", {
        get: function () {
          return 0 === this.items.length;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "name", {
        get: function () {
          return this._name;
        },
        enumerable: !1,
        configurable: !0
      }), t;
    }();

    Object.defineProperties(sr.prototype, {
      dispatch: {
        value: sr.prototype.emit
      },
      run: {
        value: sr.prototype.emit
      }
    }), Et.PREFER_ENV = tt.any ? et.WEBGL : et.WEBGL2, Et.STRICT_TEXTURE_CACHE = !1;
    var ar = [];

    function hr(t, e) {
      if (!t) return null;
      var r = "";

      if ("string" == typeof t) {
        var i = /\.(\w{3,4})(?:$|\?|#)/i.exec(t);
        i && (r = i[1].toLowerCase());
      }

      for (var n = ar.length - 1; n >= 0; --n) {
        var o = ar[n];
        if (o.test && o.test(t, r)) return new o(t, e);
      }

      throw new Error("Unrecognized source type to auto-detect Resource");
    }

    var ur = function (t, e) {
      return ur = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      }, ur(t, e);
    };

    function lr(t, e) {
      function r() {
        this.constructor = t;
      }

      ur(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
    }

    var cr = function () {
      return cr = Object.assign || function (t) {
        for (var e, r = arguments, i = 1, n = arguments.length; i < n; i++) for (var o in e = r[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);

        return t;
      }, cr.apply(this, arguments);
    },
        dr = function () {
      function t(t, e) {
        void 0 === t && (t = 0), void 0 === e && (e = 0), this._width = t, this._height = e, this.destroyed = !1, this.internal = !1, this.onResize = new sr("setRealSize"), this.onUpdate = new sr("update"), this.onError = new sr("onError");
      }

      return t.prototype.bind = function (t) {
        this.onResize.add(t), this.onUpdate.add(t), this.onError.add(t), (this._width || this._height) && this.onResize.emit(this._width, this._height);
      }, t.prototype.unbind = function (t) {
        this.onResize.remove(t), this.onUpdate.remove(t), this.onError.remove(t);
      }, t.prototype.resize = function (t, e) {
        t === this._width && e === this._height || (this._width = t, this._height = e, this.onResize.emit(t, e));
      }, Object.defineProperty(t.prototype, "valid", {
        get: function () {
          return !!this._width && !!this._height;
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.update = function () {
        this.destroyed || this.onUpdate.emit();
      }, t.prototype.load = function () {
        return Promise.resolve(this);
      }, Object.defineProperty(t.prototype, "width", {
        get: function () {
          return this._width;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "height", {
        get: function () {
          return this._height;
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.style = function (t, e, r) {
        return !1;
      }, t.prototype.dispose = function () {}, t.prototype.destroy = function () {
        this.destroyed || (this.destroyed = !0, this.dispose(), this.onError.removeAll(), this.onError = null, this.onResize.removeAll(), this.onResize = null, this.onUpdate.removeAll(), this.onUpdate = null);
      }, t.test = function (t, e) {
        return !1;
      }, t;
    }(),
        fr = function (t) {
      function e(e, r) {
        var i = this,
            n = r || {},
            o = n.width,
            s = n.height;
        if (!o || !s) throw new Error("BufferResource width or height invalid");
        return (i = t.call(this, o, s) || this).data = e, i;
      }

      return lr(e, t), e.prototype.upload = function (t, e, r) {
        var i = t.gl;
        i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.alphaMode === ft.UNPACK);
        var n = e.realWidth,
            o = e.realHeight;
        return r.width === n && r.height === o ? i.texSubImage2D(e.target, 0, 0, 0, n, o, e.format, r.type, this.data) : (r.width = n, r.height = o, i.texImage2D(e.target, 0, r.internalFormat, n, o, 0, e.format, r.type, this.data)), !0;
      }, e.prototype.dispose = function () {
        this.data = null;
      }, e.test = function (t) {
        return t instanceof Float32Array || t instanceof Uint8Array || t instanceof Uint32Array;
      }, e;
    }(dr),
        pr = {
      scaleMode: lt.NEAREST,
      format: st.RGBA,
      alphaMode: ft.NPM
    },
        _r = function (t) {
      function e(e, r) {
        void 0 === e && (e = null), void 0 === r && (r = null);
        var i = t.call(this) || this,
            n = (r = r || {}).alphaMode,
            o = r.mipmap,
            s = r.anisotropicLevel,
            a = r.scaleMode,
            h = r.width,
            u = r.height,
            l = r.wrapMode,
            c = r.format,
            d = r.type,
            f = r.target,
            p = r.resolution,
            _ = r.resourceOptions;
        return !e || e instanceof dr || ((e = hr(e, _)).internal = !0), i.resolution = p || Et.RESOLUTION, i.width = Math.round((h || 0) * i.resolution) / i.resolution, i.height = Math.round((u || 0) * i.resolution) / i.resolution, i._mipmap = void 0 !== o ? o : Et.MIPMAP_TEXTURES, i.anisotropicLevel = void 0 !== s ? s : Et.ANISOTROPIC_LEVEL, i._wrapMode = l || Et.WRAP_MODE, i._scaleMode = void 0 !== a ? a : Et.SCALE_MODE, i.format = c || st.RGBA, i.type = d || ht.UNSIGNED_BYTE, i.target = f || at.TEXTURE_2D, i.alphaMode = void 0 !== n ? n : ft.UNPACK, i.uid = Yt(), i.touched = 0, i.isPowerOfTwo = !1, i._refreshPOT(), i._glTextures = {}, i.dirtyId = 0, i.dirtyStyleId = 0, i.cacheId = null, i.valid = h > 0 && u > 0, i.textureCacheIds = [], i.destroyed = !1, i.resource = null, i._batchEnabled = 0, i._batchLocation = 0, i.parentTextureArray = null, i.setResource(e), i;
      }

      return lr(e, t), Object.defineProperty(e.prototype, "realWidth", {
        get: function () {
          return Math.round(this.width * this.resolution);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "realHeight", {
        get: function () {
          return Math.round(this.height * this.resolution);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "mipmap", {
        get: function () {
          return this._mipmap;
        },
        set: function (t) {
          this._mipmap !== t && (this._mipmap = t, this.dirtyStyleId++);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "scaleMode", {
        get: function () {
          return this._scaleMode;
        },
        set: function (t) {
          this._scaleMode !== t && (this._scaleMode = t, this.dirtyStyleId++);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "wrapMode", {
        get: function () {
          return this._wrapMode;
        },
        set: function (t) {
          this._wrapMode !== t && (this._wrapMode = t, this.dirtyStyleId++);
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.setStyle = function (t, e) {
        var r;
        return void 0 !== t && t !== this.scaleMode && (this.scaleMode = t, r = !0), void 0 !== e && e !== this.mipmap && (this.mipmap = e, r = !0), r && this.dirtyStyleId++, this;
      }, e.prototype.setSize = function (t, e, r) {
        return r = r || this.resolution, this.setRealSize(t * r, e * r, r);
      }, e.prototype.setRealSize = function (t, e, r) {
        return this.resolution = r || this.resolution, this.width = Math.round(t) / this.resolution, this.height = Math.round(e) / this.resolution, this._refreshPOT(), this.update(), this;
      }, e.prototype._refreshPOT = function () {
        this.isPowerOfTwo = Bt(this.realWidth) && Bt(this.realHeight);
      }, e.prototype.setResolution = function (t) {
        var e = this.resolution;
        return e === t || (this.resolution = t, this.valid && (this.width = Math.round(this.width * e) / t, this.height = Math.round(this.height * e) / t, this.emit("update", this)), this._refreshPOT()), this;
      }, e.prototype.setResource = function (t) {
        if (this.resource === t) return this;
        if (this.resource) throw new Error("Resource can be set only once");
        return t.bind(this), this.resource = t, this;
      }, e.prototype.update = function () {
        this.valid ? (this.dirtyId++, this.dirtyStyleId++, this.emit("update", this)) : this.width > 0 && this.height > 0 && (this.valid = !0, this.emit("loaded", this), this.emit("update", this));
      }, e.prototype.onError = function (t) {
        this.emit("error", this, t);
      }, e.prototype.destroy = function () {
        this.resource && (this.resource.unbind(this), this.resource.internal && this.resource.destroy(), this.resource = null), this.cacheId && (delete Zt[this.cacheId], delete Kt[this.cacheId], this.cacheId = null), this.dispose(), e.removeFromCache(this), this.textureCacheIds = null, this.destroyed = !0;
      }, e.prototype.dispose = function () {
        this.emit("dispose", this);
      }, e.prototype.castToBaseTexture = function () {
        return this;
      }, e.from = function (t, r, i) {
        void 0 === i && (i = Et.STRICT_TEXTURE_CACHE);
        var n = "string" == typeof t,
            o = null;
        if (n) o = t;else {
          if (!t._pixiId) {
            var s = r && r.pixiIdPrefix || "pixiid";
            t._pixiId = s + "_" + Yt();
          }

          o = t._pixiId;
        }
        var a = Zt[o];
        if (n && i && !a) throw new Error('The cacheId "' + o + '" does not exist in BaseTextureCache.');
        return a || ((a = new e(t, r)).cacheId = o, e.addToCache(a, o)), a;
      }, e.fromBuffer = function (t, r, i, n) {
        t = t || new Float32Array(r * i * 4);
        var o = new fr(t, {
          width: r,
          height: i
        }),
            s = t instanceof Float32Array ? ht.FLOAT : ht.UNSIGNED_BYTE;
        return new e(o, Object.assign(pr, n || {
          width: r,
          height: i,
          type: s
        }));
      }, e.addToCache = function (t, e) {
        e && (-1 === t.textureCacheIds.indexOf(e) && t.textureCacheIds.push(e), Zt[e] && console.warn("BaseTexture added to the cache with an id [" + e + "] that already had an entry"), Zt[e] = t);
      }, e.removeFromCache = function (t) {
        if ("string" == typeof t) {
          var e = Zt[t];

          if (e) {
            var r = e.textureCacheIds.indexOf(t);
            return r > -1 && e.textureCacheIds.splice(r, 1), delete Zt[t], e;
          }
        } else if (t && t.textureCacheIds) {
          for (var i = 0; i < t.textureCacheIds.length; ++i) delete Zt[t.textureCacheIds[i]];

          return t.textureCacheIds.length = 0, t;
        }

        return null;
      }, e._globalBatch = 0, e;
    }(bt()),
        vr = function (t) {
      function e(e, r) {
        var i = this,
            n = r || {},
            o = n.width,
            s = n.height;
        (i = t.call(this, o, s) || this).items = [], i.itemDirtyIds = [];

        for (var a = 0; a < e; a++) {
          var h = new _r();
          i.items.push(h), i.itemDirtyIds.push(-2);
        }

        return i.length = e, i._load = null, i.baseTexture = null, i;
      }

      return lr(e, t), e.prototype.initFromArray = function (t, e) {
        for (var r = 0; r < this.length; r++) t[r] && (t[r].castToBaseTexture ? this.addBaseTextureAt(t[r].castToBaseTexture(), r) : t[r] instanceof dr ? this.addResourceAt(t[r], r) : this.addResourceAt(hr(t[r], e), r));
      }, e.prototype.dispose = function () {
        for (var t = 0, e = this.length; t < e; t++) this.items[t].destroy();

        this.items = null, this.itemDirtyIds = null, this._load = null;
      }, e.prototype.addResourceAt = function (t, e) {
        if (!this.items[e]) throw new Error("Index " + e + " is out of bounds");
        return t.valid && !this.valid && this.resize(t.width, t.height), this.items[e].setResource(t), this;
      }, e.prototype.bind = function (e) {
        if (null !== this.baseTexture) throw new Error("Only one base texture per TextureArray is allowed");
        t.prototype.bind.call(this, e);

        for (var r = 0; r < this.length; r++) this.items[r].parentTextureArray = e, this.items[r].on("update", e.update, e);
      }, e.prototype.unbind = function (e) {
        t.prototype.unbind.call(this, e);

        for (var r = 0; r < this.length; r++) this.items[r].parentTextureArray = null, this.items[r].off("update", e.update, e);
      }, e.prototype.load = function () {
        var t = this;
        if (this._load) return this._load;
        var e = this.items.map(function (t) {
          return t.resource;
        }).filter(function (t) {
          return t;
        }).map(function (t) {
          return t.load();
        });
        return this._load = Promise.all(e).then(function () {
          var e = t.items[0],
              r = e.realWidth,
              i = e.realHeight;
          return t.resize(r, i), Promise.resolve(t);
        }), this._load;
      }, e;
    }(dr),
        mr = function (t) {
      function e(e, r) {
        var i,
            n,
            o = this,
            s = r || {},
            a = s.width,
            h = s.height;
        return Array.isArray(e) ? (i = e, n = e.length) : n = e, o = t.call(this, n, {
          width: a,
          height: h
        }) || this, i && o.initFromArray(i, r), o;
      }

      return lr(e, t), e.prototype.addBaseTextureAt = function (t, e) {
        if (!t.resource) throw new Error("ArrayResource does not support RenderTexture");
        return this.addResourceAt(t.resource, e), this;
      }, e.prototype.bind = function (e) {
        t.prototype.bind.call(this, e), e.target = at.TEXTURE_2D_ARRAY;
      }, e.prototype.upload = function (t, e, r) {
        var i = this,
            n = i.length,
            o = i.itemDirtyIds,
            s = i.items,
            a = t.gl;
        r.dirtyId < 0 && a.texImage3D(a.TEXTURE_2D_ARRAY, 0, r.internalFormat, this._width, this._height, n, 0, e.format, r.type, null);

        for (var h = 0; h < n; h++) {
          var u = s[h];
          o[h] < u.dirtyId && (o[h] = u.dirtyId, u.valid && a.texSubImage3D(a.TEXTURE_2D_ARRAY, 0, 0, 0, h, u.resource.width, u.resource.height, 1, e.format, r.type, u.resource.source));
        }

        return !0;
      }, e;
    }(vr),
        gr = function (t) {
      function e(e) {
        var r = this,
            i = e,
            n = i.naturalWidth || i.videoWidth || i.width,
            o = i.naturalHeight || i.videoHeight || i.height;
        return (r = t.call(this, n, o) || this).source = e, r.noSubImage = !1, r;
      }

      return lr(e, t), e.crossOrigin = function (t, e, r) {
        void 0 === r && 0 !== e.indexOf("data:") ? t.crossOrigin = function (t, e) {
          if (void 0 === e && (e = globalThis.location), 0 === t.indexOf("data:")) return "";
          e = e || globalThis.location, zt || (zt = document.createElement("a")), zt.href = t;
          var r = Ot.parse(zt.href),
              i = !r.port && "" === e.port || r.port === e.port;
          return r.hostname === e.hostname && i && r.protocol === e.protocol ? "" : "anonymous";
        }(e) : !1 !== r && (t.crossOrigin = "string" == typeof r ? r : "anonymous");
      }, e.prototype.upload = function (t, e, r, i) {
        var n = t.gl,
            o = e.realWidth,
            s = e.realHeight;

        if ((i = i || this.source) instanceof HTMLImageElement) {
          if (!i.complete || 0 === i.naturalWidth) return !1;
        } else if (i instanceof HTMLVideoElement && i.readyState <= 1) return !1;

        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.alphaMode === ft.UNPACK), this.noSubImage || e.target !== n.TEXTURE_2D || r.width !== o || r.height !== s ? (r.width = o, r.height = s, n.texImage2D(e.target, 0, r.internalFormat, e.format, r.type, i)) : n.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, e.format, r.type, i), !0;
      }, e.prototype.update = function () {
        if (!this.destroyed) {
          var e = this.source,
              r = e.naturalWidth || e.videoWidth || e.width,
              i = e.naturalHeight || e.videoHeight || e.height;
          this.resize(r, i), t.prototype.update.call(this);
        }
      }, e.prototype.dispose = function () {
        this.source = null;
      }, e;
    }(dr),
        yr = function (t) {
      function e(e) {
        return t.call(this, e) || this;
      }

      return lr(e, t), e.test = function (t) {
        var e = globalThis.OffscreenCanvas;
        return !!(e && t instanceof e) || globalThis.HTMLCanvasElement && t instanceof HTMLCanvasElement;
      }, e;
    }(gr),
        Er = function (t) {
      function e(r, i) {
        var n = this,
            o = i || {},
            s = o.width,
            a = o.height,
            h = o.autoLoad,
            u = o.linkBaseTexture;
        if (r && r.length !== e.SIDES) throw new Error("Invalid length. Got " + r.length + ", expected 6");
        n = t.call(this, 6, {
          width: s,
          height: a
        }) || this;

        for (var l = 0; l < e.SIDES; l++) n.items[l].target = at.TEXTURE_CUBE_MAP_POSITIVE_X + l;

        return n.linkBaseTexture = !1 !== u, r && n.initFromArray(r, i), !1 !== h && n.load(), n;
      }

      return lr(e, t), e.prototype.bind = function (e) {
        t.prototype.bind.call(this, e), e.target = at.TEXTURE_CUBE_MAP;
      }, e.prototype.addBaseTextureAt = function (t, e, r) {
        if (!this.items[e]) throw new Error("Index " + e + " is out of bounds");

        if (!this.linkBaseTexture || t.parentTextureArray || Object.keys(t._glTextures).length > 0) {
          if (!t.resource) throw new Error("CubeResource does not support copying of renderTexture.");
          this.addResourceAt(t.resource, e);
        } else t.target = at.TEXTURE_CUBE_MAP_POSITIVE_X + e, t.parentTextureArray = this.baseTexture, this.items[e] = t;

        return t.valid && !this.valid && this.resize(t.realWidth, t.realHeight), this.items[e] = t, this;
      }, e.prototype.upload = function (t, r, i) {
        for (var n = this.itemDirtyIds, o = 0; o < e.SIDES; o++) {
          var s = this.items[o];
          n[o] < s.dirtyId && (s.valid && s.resource ? (s.resource.upload(t, s, i), n[o] = s.dirtyId) : n[o] < -1 && (t.gl.texImage2D(s.target, 0, i.internalFormat, r.realWidth, r.realHeight, 0, r.format, i.type, null), n[o] = -1));
        }

        return !0;
      }, e.test = function (t) {
        return Array.isArray(t) && t.length === e.SIDES;
      }, e.SIDES = 6, e;
    }(vr),
        Tr = function (t) {
      function e(e, r) {
        var i = this;

        if (r = r || {}, !(e instanceof HTMLImageElement)) {
          var n = new Image();
          gr.crossOrigin(n, e, r.crossorigin), n.src = e, e = n;
        }

        return i = t.call(this, e) || this, !e.complete && i._width && i._height && (i._width = 0, i._height = 0), i.url = e.src, i._process = null, i.preserveBitmap = !1, i.createBitmap = (void 0 !== r.createBitmap ? r.createBitmap : Et.CREATE_IMAGE_BITMAP) && !!globalThis.createImageBitmap, i.alphaMode = "number" == typeof r.alphaMode ? r.alphaMode : null, i.bitmap = null, i._load = null, !1 !== r.autoLoad && i.load(), i;
      }

      return lr(e, t), e.prototype.load = function (t) {
        var e = this;
        return this._load || (void 0 !== t && (this.createBitmap = t), this._load = new Promise(function (t, r) {
          var i = e.source;
          e.url = i.src;

          var n = function () {
            e.destroyed || (i.onload = null, i.onerror = null, e.resize(i.width, i.height), e._load = null, e.createBitmap ? t(e.process()) : t(e));
          };

          i.complete && i.src ? n() : (i.onload = n, i.onerror = function (t) {
            r(t), e.onError.emit(t);
          });
        })), this._load;
      }, e.prototype.process = function () {
        var t = this,
            e = this.source;
        if (null !== this._process) return this._process;
        if (null !== this.bitmap || !globalThis.createImageBitmap) return Promise.resolve(this);
        var r = globalThis.createImageBitmap,
            i = !e.crossOrigin || "anonymous" === e.crossOrigin;
        return this._process = fetch(e.src, {
          mode: i ? "cors" : "no-cors"
        }).then(function (t) {
          return t.blob();
        }).then(function (i) {
          return r(i, 0, 0, e.width, e.height, {
            premultiplyAlpha: t.alphaMode === ft.UNPACK ? "premultiply" : "none"
          });
        }).then(function (e) {
          return t.destroyed ? Promise.reject() : (t.bitmap = e, t.update(), t._process = null, Promise.resolve(t));
        }), this._process;
      }, e.prototype.upload = function (e, r, i) {
        if ("number" == typeof this.alphaMode && (r.alphaMode = this.alphaMode), !this.createBitmap) return t.prototype.upload.call(this, e, r, i);
        if (!this.bitmap && (this.process(), !this.bitmap)) return !1;

        if (t.prototype.upload.call(this, e, r, i, this.bitmap), !this.preserveBitmap) {
          var n = !0,
              o = r._glTextures;

          for (var s in o) {
            var a = o[s];

            if (a !== i && a.dirtyId !== r.dirtyId) {
              n = !1;
              break;
            }
          }

          n && (this.bitmap.close && this.bitmap.close(), this.bitmap = null);
        }

        return !0;
      }, e.prototype.dispose = function () {
        this.source.onload = null, this.source.onerror = null, t.prototype.dispose.call(this), this.bitmap && (this.bitmap.close(), this.bitmap = null), this._process = null, this._load = null;
      }, e.test = function (t) {
        return "string" == typeof t || t instanceof HTMLImageElement;
      }, e;
    }(gr),
        br = function (t) {
      function e(e, r) {
        var i = this;
        return r = r || {}, (i = t.call(this, document.createElement("canvas")) || this)._width = 0, i._height = 0, i.svg = e, i.scale = r.scale || 1, i._overrideWidth = r.width, i._overrideHeight = r.height, i._resolve = null, i._crossorigin = r.crossorigin, i._load = null, !1 !== r.autoLoad && i.load(), i;
      }

      return lr(e, t), e.prototype.load = function () {
        var t = this;
        return this._load || (this._load = new Promise(function (r) {
          if (t._resolve = function () {
            t.resize(t.source.width, t.source.height), r(t);
          }, e.SVG_XML.test(t.svg.trim())) {
            if (!btoa) throw new Error("Your browser doesn't support base64 conversions.");
            t.svg = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(t.svg)));
          }

          t._loadSvg();
        })), this._load;
      }, e.prototype._loadSvg = function () {
        var t = this,
            e = new Image();
        gr.crossOrigin(e, this.svg, this._crossorigin), e.src = this.svg, e.onerror = function (r) {
          t._resolve && (e.onerror = null, t.onError.emit(r));
        }, e.onload = function () {
          if (t._resolve) {
            var r = e.width,
                i = e.height;
            if (!r || !i) throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");
            var n = r * t.scale,
                o = i * t.scale;
            (t._overrideWidth || t._overrideHeight) && (n = t._overrideWidth || t._overrideHeight / i * r, o = t._overrideHeight || t._overrideWidth / r * i), n = Math.round(n), o = Math.round(o);
            var s = t.source;
            s.width = n, s.height = o, s._pixiId = "canvas_" + Yt(), s.getContext("2d").drawImage(e, 0, 0, r, i, 0, 0, n, o), t._resolve(), t._resolve = null;
          }
        };
      }, e.getSize = function (t) {
        var r = e.SVG_SIZE.exec(t),
            i = {};
        return r && (i[r[1]] = Math.round(parseFloat(r[3])), i[r[5]] = Math.round(parseFloat(r[7]))), i;
      }, e.prototype.dispose = function () {
        t.prototype.dispose.call(this), this._resolve = null, this._crossorigin = null;
      }, e.test = function (t, r) {
        return "svg" === r || "string" == typeof t && /^data:image\/svg\+xml(;(charset=utf8|utf8))?;base64/.test(t) || "string" == typeof t && e.SVG_XML.test(t);
      }, e.SVG_XML = /^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m, e.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i, e;
    }(gr),
        xr = function (t) {
      function e(r, i) {
        var n = this;

        if (i = i || {}, !(r instanceof HTMLVideoElement)) {
          var o = document.createElement("video");
          o.setAttribute("preload", "auto"), o.setAttribute("webkit-playsinline", ""), o.setAttribute("playsinline", ""), "string" == typeof r && (r = [r]);
          var s = r[0].src || r[0];
          gr.crossOrigin(o, s, i.crossorigin);

          for (var a = 0; a < r.length; ++a) {
            var h = document.createElement("source"),
                u = r[a],
                l = u.src,
                c = u.mime,
                d = (l = l || r[a]).split("?").shift().toLowerCase(),
                f = d.slice(d.lastIndexOf(".") + 1);
            c = c || e.MIME_TYPES[f] || "video/" + f, h.src = l, h.type = c, o.appendChild(h);
          }

          r = o;
        }

        return (n = t.call(this, r) || this).noSubImage = !0, n._autoUpdate = !0, n._isConnectedToTicker = !1, n._updateFPS = i.updateFPS || 0, n._msToNextUpdate = 0, n.autoPlay = !1 !== i.autoPlay, n._load = null, n._resolve = null, n._onCanPlay = n._onCanPlay.bind(n), n._onError = n._onError.bind(n), !1 !== i.autoLoad && n.load(), n;
      }

      return lr(e, t), e.prototype.update = function (e) {
        if (!this.destroyed) {
          var r = Ze.shared.elapsedMS * this.source.playbackRate;
          this._msToNextUpdate = Math.floor(this._msToNextUpdate - r), (!this._updateFPS || this._msToNextUpdate <= 0) && (t.prototype.update.call(this), this._msToNextUpdate = this._updateFPS ? Math.floor(1e3 / this._updateFPS) : 0);
        }
      }, e.prototype.load = function () {
        var t = this;
        if (this._load) return this._load;
        var e = this.source;
        return (e.readyState === e.HAVE_ENOUGH_DATA || e.readyState === e.HAVE_FUTURE_DATA) && e.width && e.height && (e.complete = !0), e.addEventListener("play", this._onPlayStart.bind(this)), e.addEventListener("pause", this._onPlayStop.bind(this)), this._isSourceReady() ? this._onCanPlay() : (e.addEventListener("canplay", this._onCanPlay), e.addEventListener("canplaythrough", this._onCanPlay), e.addEventListener("error", this._onError, !0)), this._load = new Promise(function (r) {
          t.valid ? r(t) : (t._resolve = r, e.load());
        }), this._load;
      }, e.prototype._onError = function (t) {
        this.source.removeEventListener("error", this._onError, !0), this.onError.emit(t);
      }, e.prototype._isSourcePlaying = function () {
        var t = this.source;
        return t.currentTime > 0 && !1 === t.paused && !1 === t.ended && t.readyState > 2;
      }, e.prototype._isSourceReady = function () {
        var t = this.source;
        return 3 === t.readyState || 4 === t.readyState;
      }, e.prototype._onPlayStart = function () {
        this.valid || this._onCanPlay(), this.autoUpdate && !this._isConnectedToTicker && (Ze.shared.add(this.update, this), this._isConnectedToTicker = !0);
      }, e.prototype._onPlayStop = function () {
        this._isConnectedToTicker && (Ze.shared.remove(this.update, this), this._isConnectedToTicker = !1);
      }, e.prototype._onCanPlay = function () {
        var t = this.source;
        t.removeEventListener("canplay", this._onCanPlay), t.removeEventListener("canplaythrough", this._onCanPlay);
        var e = this.valid;
        this.resize(t.videoWidth, t.videoHeight), !e && this._resolve && (this._resolve(this), this._resolve = null), this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && t.play();
      }, e.prototype.dispose = function () {
        this._isConnectedToTicker && (Ze.shared.remove(this.update, this), this._isConnectedToTicker = !1);
        var e = this.source;
        e && (e.removeEventListener("error", this._onError, !0), e.pause(), e.src = "", e.load()), t.prototype.dispose.call(this);
      }, Object.defineProperty(e.prototype, "autoUpdate", {
        get: function () {
          return this._autoUpdate;
        },
        set: function (t) {
          t !== this._autoUpdate && (this._autoUpdate = t, !this._autoUpdate && this._isConnectedToTicker ? (Ze.shared.remove(this.update, this), this._isConnectedToTicker = !1) : this._autoUpdate && !this._isConnectedToTicker && this._isSourcePlaying() && (Ze.shared.add(this.update, this), this._isConnectedToTicker = !0));
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "updateFPS", {
        get: function () {
          return this._updateFPS;
        },
        set: function (t) {
          t !== this._updateFPS && (this._updateFPS = t);
        },
        enumerable: !1,
        configurable: !0
      }), e.test = function (t, r) {
        return globalThis.HTMLVideoElement && t instanceof HTMLVideoElement || e.TYPES.indexOf(r) > -1;
      }, e.TYPES = ["mp4", "m4v", "webm", "ogg", "ogv", "h264", "avi", "mov"], e.MIME_TYPES = {
        ogv: "video/ogg",
        mov: "video/quicktime",
        m4v: "video/mp4"
      }, e;
    }(gr),
        Rr = function (t) {
      function e(e) {
        return t.call(this, e) || this;
      }

      return lr(e, t), e.test = function (t) {
        return !!globalThis.createImageBitmap && t instanceof ImageBitmap;
      }, e;
    }(gr);

    ar.push(Tr, Rr, yr, xr, br, fr, Er, mr);

    var Ar = {
      __proto__: null,
      Resource: dr,
      BaseImageResource: gr,
      INSTALLED: ar,
      autoDetectResource: hr,
      AbstractMultiResource: vr,
      ArrayResource: mr,
      BufferResource: fr,
      CanvasResource: yr,
      CubeResource: Er,
      ImageResource: Tr,
      SVGResource: br,
      VideoResource: xr,
      ImageBitmapResource: Rr
    },
        Or = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }

      return lr(e, t), e.prototype.upload = function (t, e, r) {
        var i = t.gl;
        i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.alphaMode === ft.UNPACK);
        var n = e.realWidth,
            o = e.realHeight;
        return r.width === n && r.height === o ? i.texSubImage2D(e.target, 0, 0, 0, n, o, e.format, r.type, this.data) : (r.width = n, r.height = o, i.texImage2D(e.target, 0, r.internalFormat, n, o, 0, e.format, r.type, this.data)), !0;
      }, e;
    }(fr),
        Sr = function () {
      function t(t, e) {
        this.width = Math.round(t || 100), this.height = Math.round(e || 100), this.stencil = !1, this.depth = !1, this.dirtyId = 0, this.dirtyFormat = 0, this.dirtySize = 0, this.depthTexture = null, this.colorTextures = [], this.glFramebuffers = {}, this.disposeRunner = new sr("disposeFramebuffer"), this.multisample = gt.NONE;
      }

      return Object.defineProperty(t.prototype, "colorTexture", {
        get: function () {
          return this.colorTextures[0];
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.addColorTexture = function (t, e) {
        return void 0 === t && (t = 0), this.colorTextures[t] = e || new _r(null, {
          scaleMode: lt.NEAREST,
          resolution: 1,
          mipmap: dt.OFF,
          width: this.width,
          height: this.height
        }), this.dirtyId++, this.dirtyFormat++, this;
      }, t.prototype.addDepthTexture = function (t) {
        return this.depthTexture = t || new _r(new Or(null, {
          width: this.width,
          height: this.height
        }), {
          scaleMode: lt.NEAREST,
          resolution: 1,
          width: this.width,
          height: this.height,
          mipmap: dt.OFF,
          format: st.DEPTH_COMPONENT,
          type: ht.UNSIGNED_SHORT
        }), this.dirtyId++, this.dirtyFormat++, this;
      }, t.prototype.enableDepth = function () {
        return this.depth = !0, this.dirtyId++, this.dirtyFormat++, this;
      }, t.prototype.enableStencil = function () {
        return this.stencil = !0, this.dirtyId++, this.dirtyFormat++, this;
      }, t.prototype.resize = function (t, e) {
        if (t = Math.round(t), e = Math.round(e), t !== this.width || e !== this.height) {
          this.width = t, this.height = e, this.dirtyId++, this.dirtySize++;

          for (var r = 0; r < this.colorTextures.length; r++) {
            var i = this.colorTextures[r],
                n = i.resolution;
            i.setSize(t / n, e / n);
          }

          this.depthTexture && (n = this.depthTexture.resolution, this.depthTexture.setSize(t / n, e / n));
        }
      }, t.prototype.dispose = function () {
        this.disposeRunner.emit(this, !1);
      }, t.prototype.destroyDepthTexture = function () {
        this.depthTexture && (this.depthTexture.destroy(), this.depthTexture = null, ++this.dirtyId, ++this.dirtyFormat);
      }, t;
    }(),
        Ir = function (t) {
      function e(e) {
        void 0 === e && (e = {});
        var r = this;

        if ("number" == typeof e) {
          var i = arguments[0],
              n = arguments[1],
              o = arguments[2],
              s = arguments[3];
          e = {
            width: i,
            height: n,
            scaleMode: o,
            resolution: s
          };
        }

        return e.width = e.width || 100, e.height = e.height || 100, e.multisample = void 0 !== e.multisample ? e.multisample : gt.NONE, (r = t.call(this, null, e) || this).mipmap = dt.OFF, r.valid = !0, r.clearColor = [0, 0, 0, 0], r.framebuffer = new Sr(r.realWidth, r.realHeight).addColorTexture(0, r), r.framebuffer.multisample = e.multisample, r.maskStack = [], r.filterStack = [{}], r;
      }

      return lr(e, t), e.prototype.resize = function (t, e) {
        this.framebuffer.resize(t * this.resolution, e * this.resolution), this.setRealSize(this.framebuffer.width, this.framebuffer.height);
      }, e.prototype.dispose = function () {
        this.framebuffer.dispose(), t.prototype.dispose.call(this);
      }, e.prototype.destroy = function () {
        t.prototype.destroy.call(this), this.framebuffer.destroyDepthTexture(), this.framebuffer = null;
      }, e;
    }(_r),
        Pr = function () {
      function t() {
        this.x0 = 0, this.y0 = 0, this.x1 = 1, this.y1 = 0, this.x2 = 1, this.y2 = 1, this.x3 = 0, this.y3 = 1, this.uvsFloat32 = new Float32Array(8);
      }

      return t.prototype.set = function (t, e, r) {
        var i = e.width,
            n = e.height;

        if (r) {
          var o = t.width / 2 / i,
              s = t.height / 2 / n,
              a = t.x / i + o,
              h = t.y / n + s;
          r = ye.add(r, ye.NW), this.x0 = a + o * ye.uX(r), this.y0 = h + s * ye.uY(r), r = ye.add(r, 2), this.x1 = a + o * ye.uX(r), this.y1 = h + s * ye.uY(r), r = ye.add(r, 2), this.x2 = a + o * ye.uX(r), this.y2 = h + s * ye.uY(r), r = ye.add(r, 2), this.x3 = a + o * ye.uX(r), this.y3 = h + s * ye.uY(r);
        } else this.x0 = t.x / i, this.y0 = t.y / n, this.x1 = (t.x + t.width) / i, this.y1 = t.y / n, this.x2 = (t.x + t.width) / i, this.y2 = (t.y + t.height) / n, this.x3 = t.x / i, this.y3 = (t.y + t.height) / n;

        this.uvsFloat32[0] = this.x0, this.uvsFloat32[1] = this.y0, this.uvsFloat32[2] = this.x1, this.uvsFloat32[3] = this.y1, this.uvsFloat32[4] = this.x2, this.uvsFloat32[5] = this.y2, this.uvsFloat32[6] = this.x3, this.uvsFloat32[7] = this.y3;
      }, t.prototype.toString = function () {
        return "[@pixi/core:TextureUvs x0=" + this.x0 + " y0=" + this.y0 + " x1=" + this.x1 + " y1=" + this.y1 + " x2=" + this.x2 + " y2=" + this.y2 + " x3=" + this.x3 + " y3=" + this.y3 + "]";
      }, t;
    }(),
        Nr = new Pr();

    function Mr(t) {
      t.destroy = function () {}, t.on = function () {}, t.once = function () {}, t.emit = function () {};
    }

    var Dr = function (t) {
      function e(r, i, n, o, s, a) {
        var h = t.call(this) || this;
        if (h.noFrame = !1, i || (h.noFrame = !0, i = new oe(0, 0, 1, 1)), r instanceof e && (r = r.baseTexture), h.baseTexture = r, h._frame = i, h.trim = o, h.valid = !1, h._uvs = Nr, h.uvMatrix = null, h.orig = n || i, h._rotate = Number(s || 0), !0 === s) h._rotate = 2;else if (h._rotate % 2 != 0) throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");
        return h.defaultAnchor = a ? new ie(a.x, a.y) : new ie(0, 0), h._updateID = 0, h.textureCacheIds = [], r.valid ? h.noFrame ? r.valid && h.onBaseTextureUpdated(r) : h.frame = i : r.once("loaded", h.onBaseTextureUpdated, h), h.noFrame && r.on("update", h.onBaseTextureUpdated, h), h;
      }

      return lr(e, t), e.prototype.update = function () {
        this.baseTexture.resource && this.baseTexture.resource.update();
      }, e.prototype.onBaseTextureUpdated = function (t) {
        if (this.noFrame) {
          if (!this.baseTexture.valid) return;
          this._frame.width = t.width, this._frame.height = t.height, this.valid = !0, this.updateUvs();
        } else this.frame = this._frame;

        this.emit("update", this);
      }, e.prototype.destroy = function (t) {
        if (this.baseTexture) {
          if (t) {
            var r = this.baseTexture.resource;
            r && r.url && Kt[r.url] && e.removeFromCache(r.url), this.baseTexture.destroy();
          }

          this.baseTexture.off("loaded", this.onBaseTextureUpdated, this), this.baseTexture.off("update", this.onBaseTextureUpdated, this), this.baseTexture = null;
        }

        this._frame = null, this._uvs = null, this.trim = null, this.orig = null, this.valid = !1, e.removeFromCache(this), this.textureCacheIds = null;
      }, e.prototype.clone = function () {
        var t = this._frame.clone(),
            r = this._frame === this.orig ? t : this.orig.clone(),
            i = new e(this.baseTexture, !this.noFrame && t, r, this.trim && this.trim.clone(), this.rotate, this.defaultAnchor);

        return this.noFrame && (i._frame = t), i;
      }, e.prototype.updateUvs = function () {
        this._uvs === Nr && (this._uvs = new Pr()), this._uvs.set(this._frame, this.baseTexture, this.rotate), this._updateID++;
      }, e.from = function (t, r, i) {
        void 0 === r && (r = {}), void 0 === i && (i = Et.STRICT_TEXTURE_CACHE);
        var n = "string" == typeof t,
            o = null;
        if (n) o = t;else if (t instanceof _r) {
          if (!t.cacheId) {
            var s = r && r.pixiIdPrefix || "pixiid";
            t.cacheId = s + "-" + Yt(), _r.addToCache(t, t.cacheId);
          }

          o = t.cacheId;
        } else t._pixiId || (s = r && r.pixiIdPrefix || "pixiid", t._pixiId = s + "_" + Yt()), o = t._pixiId;
        var a = Kt[o];
        if (n && i && !a) throw new Error('The cacheId "' + o + '" does not exist in TextureCache.');
        return a || t instanceof _r ? !a && t instanceof _r && (a = new e(t), e.addToCache(a, o)) : (r.resolution || (r.resolution = Qt(t)), (a = new e(new _r(t, r))).baseTexture.cacheId = o, _r.addToCache(a.baseTexture, o), e.addToCache(a, o)), a;
      }, e.fromURL = function (t, r) {
        var i = Object.assign({
          autoLoad: !1
        }, null == r ? void 0 : r.resourceOptions),
            n = e.from(t, Object.assign({
          resourceOptions: i
        }, r), !1),
            o = n.baseTexture.resource;
        return n.baseTexture.valid ? Promise.resolve(n) : o.load().then(function () {
          return Promise.resolve(n);
        });
      }, e.fromBuffer = function (t, r, i, n) {
        return new e(_r.fromBuffer(t, r, i, n));
      }, e.fromLoader = function (t, r, i, n) {
        var o = new _r(t, Object.assign({
          scaleMode: Et.SCALE_MODE,
          resolution: Qt(r)
        }, n)),
            s = o.resource;
        s instanceof Tr && (s.url = r);
        var a = new e(o);
        return i || (i = r), _r.addToCache(a.baseTexture, i), e.addToCache(a, i), i !== r && (_r.addToCache(a.baseTexture, r), e.addToCache(a, r)), a.baseTexture.valid ? Promise.resolve(a) : new Promise(function (t) {
          a.baseTexture.once("loaded", function () {
            return t(a);
          });
        });
      }, e.addToCache = function (t, e) {
        e && (-1 === t.textureCacheIds.indexOf(e) && t.textureCacheIds.push(e), Kt[e] && console.warn("Texture added to the cache with an id [" + e + "] that already had an entry"), Kt[e] = t);
      }, e.removeFromCache = function (t) {
        if ("string" == typeof t) {
          var e = Kt[t];

          if (e) {
            var r = e.textureCacheIds.indexOf(t);
            return r > -1 && e.textureCacheIds.splice(r, 1), delete Kt[t], e;
          }
        } else if (t && t.textureCacheIds) {
          for (var i = 0; i < t.textureCacheIds.length; ++i) Kt[t.textureCacheIds[i]] === t && delete Kt[t.textureCacheIds[i]];

          return t.textureCacheIds.length = 0, t;
        }

        return null;
      }, Object.defineProperty(e.prototype, "resolution", {
        get: function () {
          return this.baseTexture.resolution;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "frame", {
        get: function () {
          return this._frame;
        },
        set: function (t) {
          this._frame = t, this.noFrame = !1;
          var e = t.x,
              r = t.y,
              i = t.width,
              n = t.height,
              o = e + i > this.baseTexture.width,
              s = r + n > this.baseTexture.height;

          if (o || s) {
            var a = o && s ? "and" : "or",
                h = "X: " + e + " + " + i + " = " + (e + i) + " > " + this.baseTexture.width,
                u = "Y: " + r + " + " + n + " = " + (r + n) + " > " + this.baseTexture.height;
            throw new Error("Texture Error: frame does not fit inside the base Texture dimensions: " + h + " " + a + " " + u);
          }

          this.valid = i && n && this.baseTexture.valid, this.trim || this.rotate || (this.orig = t), this.valid && this.updateUvs();
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "rotate", {
        get: function () {
          return this._rotate;
        },
        set: function (t) {
          this._rotate = t, this.valid && this.updateUvs();
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "width", {
        get: function () {
          return this.orig.width;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "height", {
        get: function () {
          return this.orig.height;
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.castToBaseTexture = function () {
        return this.baseTexture;
      }, Object.defineProperty(e, "EMPTY", {
        get: function () {
          return e._EMPTY || (e._EMPTY = new e(new _r()), Mr(e._EMPTY), Mr(e._EMPTY.baseTexture)), e._EMPTY;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e, "WHITE", {
        get: function () {
          if (!e._WHITE) {
            var t = document.createElement("canvas"),
                r = t.getContext("2d");
            t.width = 16, t.height = 16, r.fillStyle = "white", r.fillRect(0, 0, 16, 16), e._WHITE = new e(new _r(new yr(t))), Mr(e._WHITE), Mr(e._WHITE.baseTexture);
          }

          return e._WHITE;
        },
        enumerable: !1,
        configurable: !0
      }), e;
    }(bt()),
        wr = function (t) {
      function e(e, r) {
        var i = t.call(this, e, r) || this;
        return i.valid = !0, i.filterFrame = null, i.filterPoolKey = null, i.updateUvs(), i;
      }

      return lr(e, t), Object.defineProperty(e.prototype, "framebuffer", {
        get: function () {
          return this.baseTexture.framebuffer;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "multisample", {
        get: function () {
          return this.framebuffer.multisample;
        },
        set: function (t) {
          this.framebuffer.multisample = t;
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.resize = function (t, e, r) {
        void 0 === r && (r = !0);
        var i = this.baseTexture.resolution,
            n = Math.round(t * i) / i,
            o = Math.round(e * i) / i;
        this.valid = n > 0 && o > 0, this._frame.width = this.orig.width = n, this._frame.height = this.orig.height = o, r && this.baseTexture.resize(n, o), this.updateUvs();
      }, e.prototype.setResolution = function (t) {
        var e = this.baseTexture;
        e.resolution !== t && (e.setResolution(t), this.resize(e.width, e.height, !1));
      }, e.create = function (t) {
        for (var r = arguments, i = [], n = 1; n < arguments.length; n++) i[n - 1] = r[n];

        return "number" == typeof t && (Wt("6.0.0", "Arguments (width, height, scaleMode, resolution) have been deprecated."), t = {
          width: t,
          height: i[0],
          scaleMode: i[1],
          resolution: i[2]
        }), new e(new Ir(t));
      }, e;
    }(Dr),
        Cr = function () {
      function t(t) {
        this.texturePool = {}, this.textureOptions = t || {}, this.enableFullScreen = !1, this._pixelsWidth = 0, this._pixelsHeight = 0;
      }

      return t.prototype.createTexture = function (t, e, r) {
        void 0 === r && (r = gt.NONE);
        var i = new Ir(Object.assign({
          width: t,
          height: e,
          resolution: 1,
          multisample: r
        }, this.textureOptions));
        return new wr(i);
      }, t.prototype.getOptimalTexture = function (t, e, r, i) {
        var n;
        void 0 === r && (r = 1), void 0 === i && (i = gt.NONE), t = Math.ceil(t * r - 1e-6), e = Math.ceil(e * r - 1e-6), this.enableFullScreen && t === this._pixelsWidth && e === this._pixelsHeight ? n = i > 1 ? -i : -1 : (n = ((65535 & (t = Gt(t))) << 16 | 65535 & (e = Gt(e))) >>> 0, i > 1 && (n += 4294967296 * i)), this.texturePool[n] || (this.texturePool[n] = []);
        var o = this.texturePool[n].pop();
        return o || (o = this.createTexture(t, e, i)), o.filterPoolKey = n, o.setResolution(r), o;
      }, t.prototype.getFilterTexture = function (t, e, r) {
        var i = this.getOptimalTexture(t.width, t.height, e || t.resolution, r || gt.NONE);
        return i.filterFrame = t.filterFrame, i;
      }, t.prototype.returnTexture = function (t) {
        var e = t.filterPoolKey;
        t.filterFrame = null, this.texturePool[e].push(t);
      }, t.prototype.returnFilterTexture = function (t) {
        this.returnTexture(t);
      }, t.prototype.clear = function (t) {
        if (t = !1 !== t) for (var e in this.texturePool) {
          var r = this.texturePool[e];
          if (r) for (var i = 0; i < r.length; i++) r[i].destroy(!0);
        }
        this.texturePool = {};
      }, t.prototype.setScreenSize = function (t) {
        if (t.width !== this._pixelsWidth || t.height !== this._pixelsHeight) {
          for (var e in this.enableFullScreen = t.width > 0 && t.height > 0, this.texturePool) if (Number(e) < 0) {
            var r = this.texturePool[e];
            if (r) for (var i = 0; i < r.length; i++) r[i].destroy(!0);
            this.texturePool[e] = [];
          }

          this._pixelsWidth = t.width, this._pixelsHeight = t.height;
        }
      }, t.SCREEN_KEY = -1, t;
    }(),
        Lr = function () {
      function t(t, e, r, i, n, o, s) {
        void 0 === e && (e = 0), void 0 === r && (r = !1), void 0 === i && (i = ht.FLOAT), this.buffer = t, this.size = e, this.normalized = r, this.type = i, this.stride = n, this.start = o, this.instance = s;
      }

      return t.prototype.destroy = function () {
        this.buffer = null;
      }, t.from = function (e, r, i, n, o) {
        return new t(e, r, i, n, o);
      }, t;
    }(),
        Fr = 0,
        Ur = function () {
      function t(t, e, r) {
        void 0 === e && (e = !0), void 0 === r && (r = !1), this.data = t || new Float32Array(1), this._glBuffers = {}, this._updateID = 0, this.index = r, this.static = e, this.id = Fr++, this.disposeRunner = new sr("disposeBuffer");
      }

      return t.prototype.update = function (t) {
        t instanceof Array && (t = new Float32Array(t)), this.data = t || this.data, this._updateID++;
      }, t.prototype.dispose = function () {
        this.disposeRunner.emit(this, !1);
      }, t.prototype.destroy = function () {
        this.dispose(), this.data = null;
      }, Object.defineProperty(t.prototype, "index", {
        get: function () {
          return this.type === yt.ELEMENT_ARRAY_BUFFER;
        },
        set: function (t) {
          this.type = t ? yt.ELEMENT_ARRAY_BUFFER : yt.ARRAY_BUFFER;
        },
        enumerable: !1,
        configurable: !0
      }), t.from = function (e) {
        return e instanceof Array && (e = new Float32Array(e)), new t(e);
      }, t;
    }(),
        Gr = {
      Float32Array,
      Uint32Array,
      Int32Array,
      Uint8Array
    },
        Br = {
      5126: 4,
      5123: 2,
      5121: 1
    },
        Xr = 0,
        kr = {
      Float32Array,
      Uint32Array,
      Int32Array,
      Uint8Array,
      Uint16Array
    },
        Hr = function () {
      function t(t, e) {
        void 0 === t && (t = []), void 0 === e && (e = {}), this.buffers = t, this.indexBuffer = null, this.attributes = e, this.glVertexArrayObjects = {}, this.id = Xr++, this.instanced = !1, this.instanceCount = 1, this.disposeRunner = new sr("disposeGeometry"), this.refCount = 0;
      }

      return t.prototype.addAttribute = function (t, e, r, i, n, o, s, a) {
        if (void 0 === r && (r = 0), void 0 === i && (i = !1), void 0 === a && (a = !1), !e) throw new Error("You must pass a buffer when creating an attribute");
        e instanceof Ur || (e instanceof Array && (e = new Float32Array(e)), e = new Ur(e));
        var h = t.split("|");

        if (h.length > 1) {
          for (var u = 0; u < h.length; u++) this.addAttribute(h[u], e, r, i, n);

          return this;
        }

        var l = this.buffers.indexOf(e);
        return -1 === l && (this.buffers.push(e), l = this.buffers.length - 1), this.attributes[t] = new Lr(l, r, i, n, o, s, a), this.instanced = this.instanced || a, this;
      }, t.prototype.getAttribute = function (t) {
        return this.attributes[t];
      }, t.prototype.getBuffer = function (t) {
        return this.buffers[this.getAttribute(t).buffer];
      }, t.prototype.addIndex = function (t) {
        return t instanceof Ur || (t instanceof Array && (t = new Uint16Array(t)), t = new Ur(t)), t.type = yt.ELEMENT_ARRAY_BUFFER, this.indexBuffer = t, -1 === this.buffers.indexOf(t) && this.buffers.push(t), this;
      }, t.prototype.getIndex = function () {
        return this.indexBuffer;
      }, t.prototype.interleave = function () {
        if (1 === this.buffers.length || 2 === this.buffers.length && this.indexBuffer) return this;
        var t,
            e = [],
            r = [],
            i = new Ur();

        for (t in this.attributes) {
          var n = this.attributes[t],
              o = this.buffers[n.buffer];
          e.push(o.data), r.push(n.size * Br[n.type] / 4), n.buffer = 0;
        }

        for (i.data = function (t, e) {
          for (var r = 0, i = 0, n = {}, o = 0; o < t.length; o++) i += e[o], r += t[o].length;

          var s = new ArrayBuffer(4 * r),
              a = null,
              h = 0;

          for (o = 0; o < t.length; o++) {
            var u = e[o],
                l = t[o],
                c = Ut(l);
            n[c] || (n[c] = new Gr[c](s)), a = n[c];

            for (var d = 0; d < l.length; d++) a[(d / u | 0) * i + h + d % u] = l[d];

            h += u;
          }

          return new Float32Array(s);
        }(e, r), t = 0; t < this.buffers.length; t++) this.buffers[t] !== this.indexBuffer && this.buffers[t].destroy();

        return this.buffers = [i], this.indexBuffer && this.buffers.push(this.indexBuffer), this;
      }, t.prototype.getSize = function () {
        for (var t in this.attributes) {
          var e = this.attributes[t];
          return this.buffers[e.buffer].data.length / (e.stride / 4 || e.size);
        }

        return 0;
      }, t.prototype.dispose = function () {
        this.disposeRunner.emit(this, !1);
      }, t.prototype.destroy = function () {
        this.dispose(), this.buffers = null, this.indexBuffer = null, this.attributes = null;
      }, t.prototype.clone = function () {
        for (var e = new t(), r = 0; r < this.buffers.length; r++) e.buffers[r] = new Ur(this.buffers[r].data.slice(0));

        for (var r in this.attributes) {
          var i = this.attributes[r];
          e.attributes[r] = new Lr(i.buffer, i.size, i.normalized, i.type, i.stride, i.start, i.instance);
        }

        return this.indexBuffer && (e.indexBuffer = e.buffers[this.buffers.indexOf(this.indexBuffer)], e.indexBuffer.type = yt.ELEMENT_ARRAY_BUFFER), e;
      }, t.merge = function (e) {
        for (var r, i = new t(), n = [], o = [], s = [], a = 0; a < e.length; a++) {
          r = e[a];

          for (var h = 0; h < r.buffers.length; h++) o[h] = o[h] || 0, o[h] += r.buffers[h].data.length, s[h] = 0;
        }

        for (a = 0; a < r.buffers.length; a++) n[a] = new kr[Ut(r.buffers[a].data)](o[a]), i.buffers[a] = new Ur(n[a]);

        for (a = 0; a < e.length; a++) for (r = e[a], h = 0; h < r.buffers.length; h++) n[h].set(r.buffers[h].data, s[h]), s[h] += r.buffers[h].data.length;

        if (i.attributes = r.attributes, r.indexBuffer) {
          i.indexBuffer = i.buffers[r.buffers.indexOf(r.indexBuffer)], i.indexBuffer.type = yt.ELEMENT_ARRAY_BUFFER;
          var u = 0,
              l = 0,
              c = 0,
              d = 0;

          for (a = 0; a < r.buffers.length; a++) if (r.buffers[a] !== r.indexBuffer) {
            d = a;
            break;
          }

          for (var a in r.attributes) {
            var f = r.attributes[a];
            (0 | f.buffer) === d && (l += f.size * Br[f.type] / 4);
          }

          for (a = 0; a < e.length; a++) {
            var p = e[a].indexBuffer.data;

            for (h = 0; h < p.length; h++) i.indexBuffer.data[h + c] += u;

            u += e[a].buffers[d].data.length / l, c += p.length;
          }
        }

        return i;
      }, t;
    }(),
        jr = function (t) {
      function e() {
        var e = t.call(this) || this;
        return e.addAttribute("aVertexPosition", new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])).addIndex([0, 1, 3, 2]), e;
      }

      return lr(e, t), e;
    }(Hr),
        Yr = function (t) {
      function e() {
        var e = t.call(this) || this;
        return e.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]), e.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), e.vertexBuffer = new Ur(e.vertices), e.uvBuffer = new Ur(e.uvs), e.addAttribute("aVertexPosition", e.vertexBuffer).addAttribute("aTextureCoord", e.uvBuffer).addIndex([0, 1, 2, 0, 2, 3]), e;
      }

      return lr(e, t), e.prototype.map = function (t, e) {
        var r = 0,
            i = 0;
        return this.uvs[0] = r, this.uvs[1] = i, this.uvs[2] = r + e.width / t.width, this.uvs[3] = i, this.uvs[4] = r + e.width / t.width, this.uvs[5] = i + e.height / t.height, this.uvs[6] = r, this.uvs[7] = i + e.height / t.height, r = e.x, i = e.y, this.vertices[0] = r, this.vertices[1] = i, this.vertices[2] = r + e.width, this.vertices[3] = i, this.vertices[4] = r + e.width, this.vertices[5] = i + e.height, this.vertices[6] = r, this.vertices[7] = i + e.height, this.invalidate(), this;
      }, e.prototype.invalidate = function () {
        return this.vertexBuffer._updateID++, this.uvBuffer._updateID++, this;
      }, e;
    }(Hr),
        Vr = 0,
        Wr = function () {
      function t(t, e, r) {
        this.group = !0, this.syncUniforms = {}, this.dirtyId = 0, this.id = Vr++, this.static = !!e, this.ubo = !!r, t instanceof Ur ? (this.buffer = t, this.buffer.type = yt.UNIFORM_BUFFER, this.autoManage = !1, this.ubo = !0) : (this.uniforms = t, this.ubo && (this.buffer = new Ur(new Float32Array(1)), this.buffer.type = yt.UNIFORM_BUFFER, this.autoManage = !0));
      }

      return t.prototype.update = function () {
        this.dirtyId++, !this.autoManage && this.buffer && this.buffer.update();
      }, t.prototype.add = function (e, r, i) {
        if (this.ubo) throw new Error("[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them");
        this.uniforms[e] = new t(r, i);
      }, t.from = function (e, r, i) {
        return new t(e, r, i);
      }, t.uboFrom = function (e, r) {
        return new t(e, null == r || r, !0);
      }, t;
    }(),
        zr = function () {
      function t() {
        this.renderTexture = null, this.target = null, this.legacy = !1, this.resolution = 1, this.multisample = gt.NONE, this.sourceFrame = new oe(), this.destinationFrame = new oe(), this.bindingSourceFrame = new oe(), this.bindingDestinationFrame = new oe(), this.filters = [], this.transform = null;
      }

      return t.prototype.clear = function () {
        this.target = null, this.filters = null, this.renderTexture = null;
      }, t;
    }(),
        qr = [new ie(), new ie(), new ie(), new ie()],
        Kr = new ce(),
        Zr = function () {
      function t(t) {
        this.renderer = t, this.defaultFilterStack = [{}], this.texturePool = new Cr(), this.texturePool.setScreenSize(t.view), this.statePool = [], this.quad = new jr(), this.quadUv = new Yr(), this.tempRect = new oe(), this.activeState = {}, this.globalUniforms = new Wr({
          outputFrame: new oe(),
          inputSize: new Float32Array(4),
          inputPixel: new Float32Array(4),
          inputClamp: new Float32Array(4),
          resolution: 1,
          filterArea: new Float32Array(4),
          filterClamp: new Float32Array(4)
        }, !0), this.forceClear = !1, this.useMaxPadding = !1;
      }

      return t.prototype.push = function (t, e) {
        for (var r, i, n = this.renderer, o = this.defaultFilterStack, s = this.statePool.pop() || new zr(), a = this.renderer.renderTexture, h = e[0].resolution, u = e[0].multisample, l = e[0].padding, c = e[0].autoFit, d = null === (r = e[0].legacy) || void 0 === r || r, f = 1; f < e.length; f++) {
          var p = e[f];
          h = Math.min(h, p.resolution), u = Math.min(u, p.multisample), l = this.useMaxPadding ? Math.max(l, p.padding) : l + p.padding, c = c && p.autoFit, d = d || null === (i = p.legacy) || void 0 === i || i;
        }

        1 === o.length && (this.defaultFilterStack[0].renderTexture = a.current), o.push(s), s.resolution = h, s.multisample = u, s.legacy = d, s.target = t, s.sourceFrame.copyFrom(t.filterArea || t.getBounds(!0)), s.sourceFrame.pad(l);

        var _ = this.tempRect.copyFrom(a.sourceFrame);

        n.projection.transform && this.transformAABB(Kr.copyFrom(n.projection.transform).invert(), _), c ? (s.sourceFrame.fit(_), (s.sourceFrame.width <= 0 || s.sourceFrame.height <= 0) && (s.sourceFrame.width = 0, s.sourceFrame.height = 0)) : s.sourceFrame.intersects(_) || (s.sourceFrame.width = 0, s.sourceFrame.height = 0), this.roundFrame(s.sourceFrame, a.current ? a.current.resolution : n.resolution, a.sourceFrame, a.destinationFrame, n.projection.transform), s.renderTexture = this.getOptimalFilterTexture(s.sourceFrame.width, s.sourceFrame.height, h, u), s.filters = e, s.destinationFrame.width = s.renderTexture.width, s.destinationFrame.height = s.renderTexture.height;
        var v = this.tempRect;
        v.x = 0, v.y = 0, v.width = s.sourceFrame.width, v.height = s.sourceFrame.height, s.renderTexture.filterFrame = s.sourceFrame, s.bindingSourceFrame.copyFrom(a.sourceFrame), s.bindingDestinationFrame.copyFrom(a.destinationFrame), s.transform = n.projection.transform, n.projection.transform = null, a.bind(s.renderTexture, s.sourceFrame, v), n.framebuffer.clear(0, 0, 0, 0);
      }, t.prototype.pop = function () {
        var t = this.defaultFilterStack,
            e = t.pop(),
            r = e.filters;
        this.activeState = e;
        var i = this.globalUniforms.uniforms;
        i.outputFrame = e.sourceFrame, i.resolution = e.resolution;
        var n = i.inputSize,
            o = i.inputPixel,
            s = i.inputClamp;

        if (n[0] = e.destinationFrame.width, n[1] = e.destinationFrame.height, n[2] = 1 / n[0], n[3] = 1 / n[1], o[0] = Math.round(n[0] * e.resolution), o[1] = Math.round(n[1] * e.resolution), o[2] = 1 / o[0], o[3] = 1 / o[1], s[0] = .5 * o[2], s[1] = .5 * o[3], s[2] = e.sourceFrame.width * n[2] - .5 * o[2], s[3] = e.sourceFrame.height * n[3] - .5 * o[3], e.legacy) {
          var a = i.filterArea;
          a[0] = e.destinationFrame.width, a[1] = e.destinationFrame.height, a[2] = e.sourceFrame.x, a[3] = e.sourceFrame.y, i.filterClamp = i.inputClamp;
        }

        this.globalUniforms.update();
        var h = t[t.length - 1];
        if (this.renderer.framebuffer.blit(), 1 === r.length) r[0].apply(this, e.renderTexture, h.renderTexture, pt.BLEND, e), this.returnFilterTexture(e.renderTexture);else {
          var u = e.renderTexture,
              l = this.getOptimalFilterTexture(u.width, u.height, e.resolution);
          l.filterFrame = u.filterFrame;
          var c = 0;

          for (c = 0; c < r.length - 1; ++c) {
            1 === c && e.multisample > 1 && ((l = this.getOptimalFilterTexture(u.width, u.height, e.resolution)).filterFrame = u.filterFrame), r[c].apply(this, u, l, pt.CLEAR, e);
            var d = u;
            u = l, l = d;
          }

          r[c].apply(this, u, h.renderTexture, pt.BLEND, e), c > 1 && e.multisample > 1 && this.returnFilterTexture(e.renderTexture), this.returnFilterTexture(u), this.returnFilterTexture(l);
        }
        e.clear(), this.statePool.push(e);
      }, t.prototype.bindAndClear = function (t, e) {
        void 0 === e && (e = pt.CLEAR);
        var r = this.renderer,
            i = r.renderTexture,
            n = r.state;

        if (t === this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture ? this.renderer.projection.transform = this.activeState.transform : this.renderer.projection.transform = null, t && t.filterFrame) {
          var o = this.tempRect;
          o.x = 0, o.y = 0, o.width = t.filterFrame.width, o.height = t.filterFrame.height, i.bind(t, t.filterFrame, o);
        } else t !== this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture ? i.bind(t) : this.renderer.renderTexture.bind(t, this.activeState.bindingSourceFrame, this.activeState.bindingDestinationFrame);

        var s = 1 & n.stateId || this.forceClear;
        (e === pt.CLEAR || e === pt.BLIT && s) && this.renderer.framebuffer.clear(0, 0, 0, 0);
      }, t.prototype.applyFilter = function (t, e, r, i) {
        var n = this.renderer;
        n.state.set(t.state), this.bindAndClear(r, i), t.uniforms.uSampler = e, t.uniforms.filterGlobals = this.globalUniforms, n.shader.bind(t), t.legacy = !!t.program.attributeData.aTextureCoord, t.legacy ? (this.quadUv.map(e._frame, e.filterFrame), n.geometry.bind(this.quadUv), n.geometry.draw(ot.TRIANGLES)) : (n.geometry.bind(this.quad), n.geometry.draw(ot.TRIANGLE_STRIP));
      }, t.prototype.calculateSpriteMatrix = function (t, e) {
        var r = this.activeState,
            i = r.sourceFrame,
            n = r.destinationFrame,
            o = e._texture.orig,
            s = t.set(n.width, 0, 0, n.height, i.x, i.y),
            a = e.worldTransform.copyTo(ce.TEMP_MATRIX);
        return a.invert(), s.prepend(a), s.scale(1 / o.width, 1 / o.height), s.translate(e.anchor.x, e.anchor.y), s;
      }, t.prototype.destroy = function () {
        this.renderer = null, this.texturePool.clear(!1);
      }, t.prototype.getOptimalFilterTexture = function (t, e, r, i) {
        return void 0 === r && (r = 1), void 0 === i && (i = gt.NONE), this.texturePool.getOptimalTexture(t, e, r, i);
      }, t.prototype.getFilterTexture = function (t, e, r) {
        if ("number" == typeof t) {
          var i = t;
          t = e, e = i;
        }

        t = t || this.activeState.renderTexture;
        var n = this.texturePool.getOptimalTexture(t.width, t.height, e || t.resolution, r || gt.NONE);
        return n.filterFrame = t.filterFrame, n;
      }, t.prototype.returnFilterTexture = function (t) {
        this.texturePool.returnTexture(t);
      }, t.prototype.emptyPool = function () {
        this.texturePool.clear(!0);
      }, t.prototype.resize = function () {
        this.texturePool.setScreenSize(this.renderer.view);
      }, t.prototype.transformAABB = function (t, e) {
        var r = qr[0],
            i = qr[1],
            n = qr[2],
            o = qr[3];
        r.set(e.left, e.top), i.set(e.left, e.bottom), n.set(e.right, e.top), o.set(e.right, e.bottom), t.apply(r, r), t.apply(i, i), t.apply(n, n), t.apply(o, o);
        var s = Math.min(r.x, i.x, n.x, o.x),
            a = Math.min(r.y, i.y, n.y, o.y),
            h = Math.max(r.x, i.x, n.x, o.x),
            u = Math.max(r.y, i.y, n.y, o.y);
        e.x = s, e.y = a, e.width = h - s, e.height = u - a;
      }, t.prototype.roundFrame = function (t, e, r, i, n) {
        if (!(t.width <= 0 || t.height <= 0 || r.width <= 0 || r.height <= 0)) {
          if (n) {
            var o = n.a,
                s = n.b,
                a = n.c,
                h = n.d;
            if ((Math.abs(s) > 1e-4 || Math.abs(a) > 1e-4) && (Math.abs(o) > 1e-4 || Math.abs(h) > 1e-4)) return;
          }

          (n = n ? Kr.copyFrom(n) : Kr.identity()).translate(-r.x, -r.y).scale(i.width / r.width, i.height / r.height).translate(i.x, i.y), this.transformAABB(n, t), t.ceil(e), this.transformAABB(n.invert(), t);
        }
      }, t;
    }(),
        Jr = function () {
      function t(t) {
        this.renderer = t;
      }

      return t.prototype.flush = function () {}, t.prototype.destroy = function () {
        this.renderer = null;
      }, t.prototype.start = function () {}, t.prototype.stop = function () {
        this.flush();
      }, t.prototype.render = function (t) {}, t;
    }(),
        Qr = function () {
      function t(t) {
        this.renderer = t, this.emptyRenderer = new Jr(t), this.currentRenderer = this.emptyRenderer;
      }

      return t.prototype.setObjectRenderer = function (t) {
        this.currentRenderer !== t && (this.currentRenderer.stop(), this.currentRenderer = t, this.currentRenderer.start());
      }, t.prototype.flush = function () {
        this.setObjectRenderer(this.emptyRenderer);
      }, t.prototype.reset = function () {
        this.setObjectRenderer(this.emptyRenderer);
      }, t.prototype.copyBoundTextures = function (t, e) {
        for (var r = this.renderer.texture.boundTextures, i = e - 1; i >= 0; --i) t[i] = r[i] || null, t[i] && (t[i]._batchLocation = i);
      }, t.prototype.boundArray = function (t, e, r, i) {
        for (var n = t.elements, o = t.ids, s = t.count, a = 0, h = 0; h < s; h++) {
          var u = n[h],
              l = u._batchLocation;
          if (l >= 0 && l < i && e[l] === u) o[h] = l;else for (; a < i;) {
            var c = e[a];

            if (!c || c._batchEnabled !== r || c._batchLocation !== a) {
              o[h] = a, u._batchLocation = a, e[a] = u;
              break;
            }

            a++;
          }
        }
      }, t.prototype.destroy = function () {
        this.renderer = null;
      }, t;
    }(),
        $r = 0,
        ti = function () {
      function t(t) {
        this.renderer = t, this.webGLVersion = 1, this.extensions = {}, this.supports = {
          uint32Indices: !1
        }, this.handleContextLost = this.handleContextLost.bind(this), this.handleContextRestored = this.handleContextRestored.bind(this), t.view.addEventListener("webglcontextlost", this.handleContextLost, !1), t.view.addEventListener("webglcontextrestored", this.handleContextRestored, !1);
      }

      return Object.defineProperty(t.prototype, "isLost", {
        get: function () {
          return !this.gl || this.gl.isContextLost();
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.contextChange = function (t) {
        this.gl = t, this.renderer.gl = t, this.renderer.CONTEXT_UID = $r++, t.isContextLost() && t.getExtension("WEBGL_lose_context") && t.getExtension("WEBGL_lose_context").restoreContext();
      }, t.prototype.initFromContext = function (t) {
        this.gl = t, this.validateContext(t), this.renderer.gl = t, this.renderer.CONTEXT_UID = $r++, this.renderer.runners.contextChange.emit(t);
      }, t.prototype.initFromOptions = function (t) {
        var e = this.createContext(this.renderer.view, t);
        this.initFromContext(e);
      }, t.prototype.createContext = function (t, e) {
        var r;
        if (Et.PREFER_ENV >= et.WEBGL2 && (r = t.getContext("webgl2", e)), r) this.webGLVersion = 2;else if (this.webGLVersion = 1, !(r = t.getContext("webgl", e) || t.getContext("experimental-webgl", e))) throw new Error("This browser does not support WebGL. Try using the canvas renderer");
        return this.gl = r, this.getExtensions(), this.gl;
      }, t.prototype.getExtensions = function () {
        var t = this.gl,
            e = {
          anisotropicFiltering: t.getExtension("EXT_texture_filter_anisotropic"),
          floatTextureLinear: t.getExtension("OES_texture_float_linear"),
          s3tc: t.getExtension("WEBGL_compressed_texture_s3tc"),
          s3tc_sRGB: t.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
          etc: t.getExtension("WEBGL_compressed_texture_etc"),
          etc1: t.getExtension("WEBGL_compressed_texture_etc1"),
          pvrtc: t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
          atc: t.getExtension("WEBGL_compressed_texture_atc"),
          astc: t.getExtension("WEBGL_compressed_texture_astc")
        };
        1 === this.webGLVersion ? Object.assign(this.extensions, e, {
          drawBuffers: t.getExtension("WEBGL_draw_buffers"),
          depthTexture: t.getExtension("WEBGL_depth_texture"),
          loseContext: t.getExtension("WEBGL_lose_context"),
          vertexArrayObject: t.getExtension("OES_vertex_array_object") || t.getExtension("MOZ_OES_vertex_array_object") || t.getExtension("WEBKIT_OES_vertex_array_object"),
          uint32ElementIndex: t.getExtension("OES_element_index_uint"),
          floatTexture: t.getExtension("OES_texture_float"),
          floatTextureLinear: t.getExtension("OES_texture_float_linear"),
          textureHalfFloat: t.getExtension("OES_texture_half_float"),
          textureHalfFloatLinear: t.getExtension("OES_texture_half_float_linear")
        }) : 2 === this.webGLVersion && Object.assign(this.extensions, e, {
          colorBufferFloat: t.getExtension("EXT_color_buffer_float")
        });
      }, t.prototype.handleContextLost = function (t) {
        t.preventDefault();
      }, t.prototype.handleContextRestored = function () {
        this.renderer.runners.contextChange.emit(this.gl);
      }, t.prototype.destroy = function () {
        var t = this.renderer.view;
        this.renderer = null, t.removeEventListener("webglcontextlost", this.handleContextLost), t.removeEventListener("webglcontextrestored", this.handleContextRestored), this.gl.useProgram(null), this.extensions.loseContext && this.extensions.loseContext.loseContext();
      }, t.prototype.postrender = function () {
        this.renderer.renderingToScreen && this.gl.flush();
      }, t.prototype.validateContext = function (t) {
        var e = t.getContextAttributes(),
            r = "WebGL2RenderingContext" in globalThis && t instanceof globalThis.WebGL2RenderingContext;
        r && (this.webGLVersion = 2), e.stencil || console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly");
        var i = r || !!t.getExtension("OES_element_index_uint");
        this.supports.uint32Indices = i, i || console.warn("Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly");
      }, t;
    }(),
        ei = function (t) {
      this.framebuffer = t, this.stencil = null, this.dirtyId = -1, this.dirtyFormat = -1, this.dirtySize = -1, this.multisample = gt.NONE, this.msaaBuffer = null, this.blitFramebuffer = null, this.mipLevel = 0;
    },
        ri = new oe(),
        ii = function () {
      function t(t) {
        this.renderer = t, this.managedFramebuffers = [], this.unknownFramebuffer = new Sr(10, 10), this.msaaSamples = null;
      }

      return t.prototype.contextChange = function () {
        var t = this.gl = this.renderer.gl;

        if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.current = this.unknownFramebuffer, this.viewport = new oe(), this.hasMRT = !0, this.writeDepthTexture = !0, this.disposeAll(!0), 1 === this.renderer.context.webGLVersion) {
          var e = this.renderer.context.extensions.drawBuffers,
              r = this.renderer.context.extensions.depthTexture;
          Et.PREFER_ENV === et.WEBGL_LEGACY && (e = null, r = null), e ? t.drawBuffers = function (t) {
            return e.drawBuffersWEBGL(t);
          } : (this.hasMRT = !1, t.drawBuffers = function () {}), r || (this.writeDepthTexture = !1);
        } else this.msaaSamples = t.getInternalformatParameter(t.RENDERBUFFER, t.RGBA8, t.SAMPLES);
      }, t.prototype.bind = function (t, e, r) {
        void 0 === r && (r = 0);
        var i = this.gl;

        if (t) {
          var n = t.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(t);
          this.current !== t && (this.current = t, i.bindFramebuffer(i.FRAMEBUFFER, n.framebuffer)), n.mipLevel !== r && (t.dirtyId++, t.dirtyFormat++, n.mipLevel = r), n.dirtyId !== t.dirtyId && (n.dirtyId = t.dirtyId, n.dirtyFormat !== t.dirtyFormat ? (n.dirtyFormat = t.dirtyFormat, n.dirtySize = t.dirtySize, this.updateFramebuffer(t, r)) : n.dirtySize !== t.dirtySize && (n.dirtySize = t.dirtySize, this.resizeFramebuffer(t)));

          for (var o = 0; o < t.colorTextures.length; o++) {
            var s = t.colorTextures[o];
            this.renderer.texture.unbind(s.parentTextureArray || s);
          }

          if (t.depthTexture && this.renderer.texture.unbind(t.depthTexture), e) {
            var a = e.width >> r,
                h = e.height >> r,
                u = a / e.width;
            this.setViewport(e.x * u, e.y * u, a, h);
          } else a = t.width >> r, h = t.height >> r, this.setViewport(0, 0, a, h);
        } else this.current && (this.current = null, i.bindFramebuffer(i.FRAMEBUFFER, null)), e ? this.setViewport(e.x, e.y, e.width, e.height) : this.setViewport(0, 0, this.renderer.width, this.renderer.height);
      }, t.prototype.setViewport = function (t, e, r, i) {
        var n = this.viewport;
        t = Math.round(t), e = Math.round(e), r = Math.round(r), i = Math.round(i), n.width === r && n.height === i && n.x === t && n.y === e || (n.x = t, n.y = e, n.width = r, n.height = i, this.gl.viewport(t, e, r, i));
      }, Object.defineProperty(t.prototype, "size", {
        get: function () {
          return this.current ? {
            x: 0,
            y: 0,
            width: this.current.width,
            height: this.current.height
          } : {
            x: 0,
            y: 0,
            width: this.renderer.width,
            height: this.renderer.height
          };
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.clear = function (t, e, r, i, n) {
        void 0 === n && (n = it.COLOR | it.DEPTH);
        var o = this.gl;
        o.clearColor(t, e, r, i), o.clear(n);
      }, t.prototype.initFramebuffer = function (t) {
        var e = this.gl,
            r = new ei(e.createFramebuffer());
        return r.multisample = this.detectSamples(t.multisample), t.glFramebuffers[this.CONTEXT_UID] = r, this.managedFramebuffers.push(t), t.disposeRunner.add(this), r;
      }, t.prototype.resizeFramebuffer = function (t) {
        var e = this.gl,
            r = t.glFramebuffers[this.CONTEXT_UID];
        r.msaaBuffer && (e.bindRenderbuffer(e.RENDERBUFFER, r.msaaBuffer), e.renderbufferStorageMultisample(e.RENDERBUFFER, r.multisample, e.RGBA8, t.width, t.height)), r.stencil && (e.bindRenderbuffer(e.RENDERBUFFER, r.stencil), r.msaaBuffer ? e.renderbufferStorageMultisample(e.RENDERBUFFER, r.multisample, e.DEPTH24_STENCIL8, t.width, t.height) : e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_STENCIL, t.width, t.height));
        var i = t.colorTextures,
            n = i.length;
        e.drawBuffers || (n = Math.min(n, 1));

        for (var o = 0; o < n; o++) {
          var s = i[o],
              a = s.parentTextureArray || s;
          this.renderer.texture.bind(a, 0);
        }

        t.depthTexture && this.writeDepthTexture && this.renderer.texture.bind(t.depthTexture, 0);
      }, t.prototype.updateFramebuffer = function (t, e) {
        var r = this.gl,
            i = t.glFramebuffers[this.CONTEXT_UID],
            n = t.colorTextures,
            o = n.length;
        r.drawBuffers || (o = Math.min(o, 1)), i.multisample > 1 && this.canMultisampleFramebuffer(t) ? (i.msaaBuffer = i.msaaBuffer || r.createRenderbuffer(), r.bindRenderbuffer(r.RENDERBUFFER, i.msaaBuffer), r.renderbufferStorageMultisample(r.RENDERBUFFER, i.multisample, r.RGBA8, t.width, t.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.RENDERBUFFER, i.msaaBuffer)) : i.msaaBuffer && (r.deleteRenderbuffer(i.msaaBuffer), i.msaaBuffer = null, i.blitFramebuffer && (i.blitFramebuffer.dispose(), i.blitFramebuffer = null));

        for (var s = [], a = 0; a < o; a++) {
          var h = n[a],
              u = h.parentTextureArray || h;
          this.renderer.texture.bind(u, 0), 0 === a && i.msaaBuffer || (r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + a, h.target, u._glTextures[this.CONTEXT_UID].texture, e), s.push(r.COLOR_ATTACHMENT0 + a));
        }

        if (s.length > 1 && r.drawBuffers(s), t.depthTexture && this.writeDepthTexture) {
          var l = t.depthTexture;
          this.renderer.texture.bind(l, 0), r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, l._glTextures[this.CONTEXT_UID].texture, e);
        }

        !t.stencil && !t.depth || t.depthTexture && this.writeDepthTexture ? i.stencil && (r.deleteRenderbuffer(i.stencil), i.stencil = null) : (i.stencil = i.stencil || r.createRenderbuffer(), r.bindRenderbuffer(r.RENDERBUFFER, i.stencil), i.msaaBuffer ? r.renderbufferStorageMultisample(r.RENDERBUFFER, i.multisample, r.DEPTH24_STENCIL8, t.width, t.height) : r.renderbufferStorage(r.RENDERBUFFER, r.DEPTH_STENCIL, t.width, t.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.RENDERBUFFER, i.stencil));
      }, t.prototype.canMultisampleFramebuffer = function (t) {
        return 1 !== this.renderer.context.webGLVersion && t.colorTextures.length <= 1 && !t.depthTexture;
      }, t.prototype.detectSamples = function (t) {
        var e = this.msaaSamples,
            r = gt.NONE;
        if (t <= 1 || null === e) return r;

        for (var i = 0; i < e.length; i++) if (e[i] <= t) {
          r = e[i];
          break;
        }

        return 1 === r && (r = gt.NONE), r;
      }, t.prototype.blit = function (t, e, r) {
        var i = this,
            n = i.current,
            o = i.renderer,
            s = i.gl,
            a = i.CONTEXT_UID;

        if (2 === o.context.webGLVersion && n) {
          var h = n.glFramebuffers[a];

          if (h) {
            if (!t) {
              if (!h.msaaBuffer) return;
              var u = n.colorTextures[0];
              if (!u) return;
              h.blitFramebuffer || (h.blitFramebuffer = new Sr(n.width, n.height), h.blitFramebuffer.addColorTexture(0, u)), (t = h.blitFramebuffer).colorTextures[0] !== u && (t.colorTextures[0] = u, t.dirtyId++, t.dirtyFormat++), t.width === n.width && t.height === n.height || (t.width = n.width, t.height = n.height, t.dirtyId++, t.dirtySize++);
            }

            e || ((e = ri).width = n.width, e.height = n.height), r || (r = e);
            var l = e.width === r.width && e.height === r.height;
            this.bind(t), s.bindFramebuffer(s.READ_FRAMEBUFFER, h.framebuffer), s.blitFramebuffer(e.left, e.top, e.right, e.bottom, r.left, r.top, r.right, r.bottom, s.COLOR_BUFFER_BIT, l ? s.NEAREST : s.LINEAR);
          }
        }
      }, t.prototype.disposeFramebuffer = function (t, e) {
        var r = t.glFramebuffers[this.CONTEXT_UID],
            i = this.gl;

        if (r) {
          delete t.glFramebuffers[this.CONTEXT_UID];
          var n = this.managedFramebuffers.indexOf(t);
          n >= 0 && this.managedFramebuffers.splice(n, 1), t.disposeRunner.remove(this), e || (i.deleteFramebuffer(r.framebuffer), r.msaaBuffer && i.deleteRenderbuffer(r.msaaBuffer), r.stencil && i.deleteRenderbuffer(r.stencil)), r.blitFramebuffer && r.blitFramebuffer.dispose();
        }
      }, t.prototype.disposeAll = function (t) {
        var e = this.managedFramebuffers;
        this.managedFramebuffers = [];

        for (var r = 0; r < e.length; r++) this.disposeFramebuffer(e[r], t);
      }, t.prototype.forceStencil = function () {
        var t = this.current;

        if (t) {
          var e = t.glFramebuffers[this.CONTEXT_UID];

          if (e && !e.stencil) {
            t.stencil = !0;
            var r = t.width,
                i = t.height,
                n = this.gl,
                o = n.createRenderbuffer();
            n.bindRenderbuffer(n.RENDERBUFFER, o), e.msaaBuffer ? n.renderbufferStorageMultisample(n.RENDERBUFFER, e.multisample, n.DEPTH24_STENCIL8, r, i) : n.renderbufferStorage(n.RENDERBUFFER, n.DEPTH_STENCIL, r, i), e.stencil = o, n.framebufferRenderbuffer(n.FRAMEBUFFER, n.DEPTH_STENCIL_ATTACHMENT, n.RENDERBUFFER, o);
          }
        }
      }, t.prototype.reset = function () {
        this.current = this.unknownFramebuffer, this.viewport = new oe();
      }, t.prototype.destroy = function () {
        this.renderer = null;
      }, t;
    }(),
        ni = {
      5126: 4,
      5123: 2,
      5121: 1
    },
        oi = function () {
      function t(t) {
        this.renderer = t, this._activeGeometry = null, this._activeVao = null, this.hasVao = !0, this.hasInstance = !0, this.canUseUInt32ElementIndex = !1, this.managedGeometries = {};
      }

      return t.prototype.contextChange = function () {
        this.disposeAll(!0);
        var t = this.gl = this.renderer.gl,
            e = this.renderer.context;

        if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, 2 !== e.webGLVersion) {
          var r = this.renderer.context.extensions.vertexArrayObject;
          Et.PREFER_ENV === et.WEBGL_LEGACY && (r = null), r ? (t.createVertexArray = function () {
            return r.createVertexArrayOES();
          }, t.bindVertexArray = function (t) {
            return r.bindVertexArrayOES(t);
          }, t.deleteVertexArray = function (t) {
            return r.deleteVertexArrayOES(t);
          }) : (this.hasVao = !1, t.createVertexArray = function () {
            return null;
          }, t.bindVertexArray = function () {
            return null;
          }, t.deleteVertexArray = function () {
            return null;
          });
        }

        if (2 !== e.webGLVersion) {
          var i = t.getExtension("ANGLE_instanced_arrays");
          i ? (t.vertexAttribDivisor = function (t, e) {
            return i.vertexAttribDivisorANGLE(t, e);
          }, t.drawElementsInstanced = function (t, e, r, n, o) {
            return i.drawElementsInstancedANGLE(t, e, r, n, o);
          }, t.drawArraysInstanced = function (t, e, r, n) {
            return i.drawArraysInstancedANGLE(t, e, r, n);
          }) : this.hasInstance = !1;
        }

        this.canUseUInt32ElementIndex = 2 === e.webGLVersion || !!e.extensions.uint32ElementIndex;
      }, t.prototype.bind = function (t, e) {
        e = e || this.renderer.shader.shader;
        var r = this.gl,
            i = t.glVertexArrayObjects[this.CONTEXT_UID],
            n = !1;
        i || (this.managedGeometries[t.id] = t, t.disposeRunner.add(this), t.glVertexArrayObjects[this.CONTEXT_UID] = i = {}, n = !0);
        var o = i[e.program.id] || this.initGeometryVao(t, e, n);
        this._activeGeometry = t, this._activeVao !== o && (this._activeVao = o, this.hasVao ? r.bindVertexArray(o) : this.activateVao(t, e.program)), this.updateBuffers();
      }, t.prototype.reset = function () {
        this.unbind();
      }, t.prototype.updateBuffers = function () {
        for (var t = this._activeGeometry, e = this.renderer.buffer, r = 0; r < t.buffers.length; r++) {
          var i = t.buffers[r];
          e.update(i);
        }
      }, t.prototype.checkCompatibility = function (t, e) {
        var r = t.attributes,
            i = e.attributeData;

        for (var n in i) if (!r[n]) throw new Error('shader and geometry incompatible, geometry missing the "' + n + '" attribute');
      }, t.prototype.getSignature = function (t, e) {
        var r = t.attributes,
            i = e.attributeData,
            n = ["g", t.id];

        for (var o in r) i[o] && n.push(o, i[o].location);

        return n.join("-");
      }, t.prototype.initGeometryVao = function (t, e, r) {
        void 0 === r && (r = !0);
        var i = this.gl,
            n = this.CONTEXT_UID,
            o = this.renderer.buffer,
            s = e.program;
        s.glPrograms[n] || this.renderer.shader.generateProgram(e), this.checkCompatibility(t, s);
        var a = this.getSignature(t, s),
            h = t.glVertexArrayObjects[this.CONTEXT_UID],
            u = h[a];
        if (u) return h[s.id] = u, u;
        var l = t.buffers,
            c = t.attributes,
            d = {},
            f = {};

        for (var p in l) d[p] = 0, f[p] = 0;

        for (var p in c) !c[p].size && s.attributeData[p] ? c[p].size = s.attributeData[p].size : c[p].size || console.warn("PIXI Geometry attribute '" + p + "' size cannot be determined (likely the bound shader does not have the attribute)"), d[c[p].buffer] += c[p].size * ni[c[p].type];

        for (var p in c) {
          var _ = c[p],
              v = _.size;
          void 0 === _.stride && (d[_.buffer] === v * ni[_.type] ? _.stride = 0 : _.stride = d[_.buffer]), void 0 === _.start && (_.start = f[_.buffer], f[_.buffer] += v * ni[_.type]);
        }

        u = i.createVertexArray(), i.bindVertexArray(u);

        for (var m = 0; m < l.length; m++) {
          var g = l[m];
          o.bind(g), r && g._glBuffers[n].refCount++;
        }

        return this.activateVao(t, s), this._activeVao = u, h[s.id] = u, h[a] = u, u;
      }, t.prototype.disposeGeometry = function (t, e) {
        var r;

        if (this.managedGeometries[t.id]) {
          delete this.managedGeometries[t.id];
          var i = t.glVertexArrayObjects[this.CONTEXT_UID],
              n = this.gl,
              o = t.buffers,
              s = null === (r = this.renderer) || void 0 === r ? void 0 : r.buffer;

          if (t.disposeRunner.remove(this), i) {
            if (s) for (var a = 0; a < o.length; a++) {
              var h = o[a]._glBuffers[this.CONTEXT_UID];
              h && (h.refCount--, 0 !== h.refCount || e || s.dispose(o[a], e));
            }
            if (!e) for (var u in i) if ("g" === u[0]) {
              var l = i[u];
              this._activeVao === l && this.unbind(), n.deleteVertexArray(l);
            }
            delete t.glVertexArrayObjects[this.CONTEXT_UID];
          }
        }
      }, t.prototype.disposeAll = function (t) {
        for (var e = Object.keys(this.managedGeometries), r = 0; r < e.length; r++) this.disposeGeometry(this.managedGeometries[e[r]], t);
      }, t.prototype.activateVao = function (t, e) {
        var r = this.gl,
            i = this.CONTEXT_UID,
            n = this.renderer.buffer,
            o = t.buffers,
            s = t.attributes;
        t.indexBuffer && n.bind(t.indexBuffer);
        var a = null;

        for (var h in s) {
          var u = s[h],
              l = o[u.buffer],
              c = l._glBuffers[i];

          if (e.attributeData[h]) {
            a !== c && (n.bind(l), a = c);
            var d = e.attributeData[h].location;

            if (r.enableVertexAttribArray(d), r.vertexAttribPointer(d, u.size, u.type || r.FLOAT, u.normalized, u.stride, u.start), u.instance) {
              if (!this.hasInstance) throw new Error("geometry error, GPU Instancing is not supported on this device");
              r.vertexAttribDivisor(d, 1);
            }
          }
        }
      }, t.prototype.draw = function (t, e, r, i) {
        var n = this.gl,
            o = this._activeGeometry;

        if (o.indexBuffer) {
          var s = o.indexBuffer.data.BYTES_PER_ELEMENT,
              a = 2 === s ? n.UNSIGNED_SHORT : n.UNSIGNED_INT;
          2 === s || 4 === s && this.canUseUInt32ElementIndex ? o.instanced ? n.drawElementsInstanced(t, e || o.indexBuffer.data.length, a, (r || 0) * s, i || 1) : n.drawElements(t, e || o.indexBuffer.data.length, a, (r || 0) * s) : console.warn("unsupported index buffer type: uint32");
        } else o.instanced ? n.drawArraysInstanced(t, r, e || o.getSize(), i || 1) : n.drawArrays(t, r, e || o.getSize());

        return this;
      }, t.prototype.unbind = function () {
        this.gl.bindVertexArray(null), this._activeVao = null, this._activeGeometry = null;
      }, t.prototype.destroy = function () {
        this.renderer = null;
      }, t;
    }(),
        si = function () {
      function t(t) {
        void 0 === t && (t = null), this.type = mt.NONE, this.autoDetect = !0, this.maskObject = t || null, this.pooled = !1, this.isMaskData = !0, this.resolution = null, this.multisample = Et.FILTER_MULTISAMPLE, this.enabled = !0, this._filters = null, this._stencilCounter = 0, this._scissorCounter = 0, this._scissorRect = null, this._scissorRectLocal = null, this._target = null;
      }

      return Object.defineProperty(t.prototype, "filter", {
        get: function () {
          return this._filters ? this._filters[0] : null;
        },
        set: function (t) {
          t ? this._filters ? this._filters[0] = t : this._filters = [t] : this._filters = null;
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.reset = function () {
        this.pooled && (this.maskObject = null, this.type = mt.NONE, this.autoDetect = !0), this._target = null, this._scissorRectLocal = null;
      }, t.prototype.copyCountersOrReset = function (t) {
        t ? (this._stencilCounter = t._stencilCounter, this._scissorCounter = t._scissorCounter, this._scissorRect = t._scissorRect) : (this._stencilCounter = 0, this._scissorCounter = 0, this._scissorRect = null);
      }, t;
    }();

    function ai(t, e, r) {
      var i = t.createShader(e);
      return t.shaderSource(i, r), t.compileShader(i), i;
    }

    function hi(t, e) {
      var r = t.getShaderSource(e).split("\n").map(function (t, e) {
        return e + ": " + t;
      }),
          i = t.getShaderInfoLog(e),
          n = i.split("\n"),
          o = {},
          s = n.map(function (t) {
        return parseFloat(t.replace(/^ERROR\: 0\:([\d]+)\:.*$/, "$1"));
      }).filter(function (t) {
        return !(!t || o[t] || (o[t] = !0, 0));
      }),
          a = [""];
      s.forEach(function (t) {
        r[t - 1] = "%c" + r[t - 1] + "%c", a.push("background: #FF0000; color:#FFFFFF; font-size: 10px", "font-size: 10px");
      });
      var h = r.join("\n");
      a[0] = h, console.error(i), console.groupCollapsed("click to view full shader code"), console.warn.apply(console, a), console.groupEnd();
    }

    function ui(t) {
      for (var e = new Array(t), r = 0; r < e.length; r++) e[r] = !1;

      return e;
    }

    function li(t, e) {
      switch (t) {
        case "float":
        case "int":
        case "uint":
        case "sampler2D":
        case "sampler2DArray":
          return 0;

        case "vec2":
          return new Float32Array(2 * e);

        case "vec3":
          return new Float32Array(3 * e);

        case "vec4":
          return new Float32Array(4 * e);

        case "ivec2":
          return new Int32Array(2 * e);

        case "ivec3":
          return new Int32Array(3 * e);

        case "ivec4":
          return new Int32Array(4 * e);

        case "uvec2":
          return new Uint32Array(2 * e);

        case "uvec3":
          return new Uint32Array(3 * e);

        case "uvec4":
          return new Uint32Array(4 * e);

        case "bool":
          return !1;

        case "bvec2":
          return ui(2 * e);

        case "bvec3":
          return ui(3 * e);

        case "bvec4":
          return ui(4 * e);

        case "mat2":
          return new Float32Array([1, 0, 0, 1]);

        case "mat3":
          return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);

        case "mat4":
          return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
      }

      return null;
    }

    var ci,
        di = {},
        fi = di;

    function pi(t, e, r) {
      if ("precision" !== t.substring(0, 9)) {
        var i = e;
        return e === vt.HIGH && r !== vt.HIGH && (i = vt.MEDIUM), "precision " + i + " float;\n" + t;
      }

      return r !== vt.HIGH && "precision highp" === t.substring(0, 15) ? t.replace("precision highp", "precision mediump") : t;
    }

    var _i = {
      float: 1,
      vec2: 2,
      vec3: 3,
      vec4: 4,
      int: 1,
      ivec2: 2,
      ivec3: 3,
      ivec4: 4,
      uint: 1,
      uvec2: 2,
      uvec3: 3,
      uvec4: 4,
      bool: 1,
      bvec2: 2,
      bvec3: 3,
      bvec4: 4,
      mat2: 4,
      mat3: 9,
      mat4: 16,
      sampler2D: 1
    };

    function vi(t) {
      return _i[t];
    }

    var mi = null,
        gi = {
      FLOAT: "float",
      FLOAT_VEC2: "vec2",
      FLOAT_VEC3: "vec3",
      FLOAT_VEC4: "vec4",
      INT: "int",
      INT_VEC2: "ivec2",
      INT_VEC3: "ivec3",
      INT_VEC4: "ivec4",
      UNSIGNED_INT: "uint",
      UNSIGNED_INT_VEC2: "uvec2",
      UNSIGNED_INT_VEC3: "uvec3",
      UNSIGNED_INT_VEC4: "uvec4",
      BOOL: "bool",
      BOOL_VEC2: "bvec2",
      BOOL_VEC3: "bvec3",
      BOOL_VEC4: "bvec4",
      FLOAT_MAT2: "mat2",
      FLOAT_MAT3: "mat3",
      FLOAT_MAT4: "mat4",
      SAMPLER_2D: "sampler2D",
      INT_SAMPLER_2D: "sampler2D",
      UNSIGNED_INT_SAMPLER_2D: "sampler2D",
      SAMPLER_CUBE: "samplerCube",
      INT_SAMPLER_CUBE: "samplerCube",
      UNSIGNED_INT_SAMPLER_CUBE: "samplerCube",
      SAMPLER_2D_ARRAY: "sampler2DArray",
      INT_SAMPLER_2D_ARRAY: "sampler2DArray",
      UNSIGNED_INT_SAMPLER_2D_ARRAY: "sampler2DArray"
    };

    function yi(t, e) {
      if (!mi) {
        var r = Object.keys(gi);
        mi = {};

        for (var i = 0; i < r.length; ++i) {
          var n = r[i];
          mi[t[n]] = gi[n];
        }
      }

      return mi[e];
    }

    var Ei,
        Ti = [{
      test: function (t) {
        return "float" === t.type && 1 === t.size;
      },
      code: function (t) {
        return '\n            if(uv["' + t + '"] !== ud["' + t + '"].value)\n            {\n                ud["' + t + '"].value = uv["' + t + '"]\n                gl.uniform1f(ud["' + t + '"].location, uv["' + t + '"])\n            }\n            ';
      }
    }, {
      test: function (t) {
        return ("sampler2D" === t.type || "samplerCube" === t.type || "sampler2DArray" === t.type) && 1 === t.size && !t.isArray;
      },
      code: function (t) {
        return 't = syncData.textureCount++;\n\n            renderer.texture.bind(uv["' + t + '"], t);\n\n            if(ud["' + t + '"].value !== t)\n            {\n                ud["' + t + '"].value = t;\n                gl.uniform1i(ud["' + t + '"].location, t);\n; // eslint-disable-line max-len\n            }';
      }
    }, {
      test: function (t, e) {
        return "mat3" === t.type && 1 === t.size && void 0 !== e.a;
      },
      code: function (t) {
        return '\n            gl.uniformMatrix3fv(ud["' + t + '"].location, false, uv["' + t + '"].toArray(true));\n            ';
      },
      codeUbo: function (t) {
        return "\n                var " + t + "_matrix = uv." + t + ".toArray(true);\n\n                data[offset] = " + t + "_matrix[0];\n                data[offset+1] = " + t + "_matrix[1];\n                data[offset+2] = " + t + "_matrix[2];\n        \n                data[offset + 4] = " + t + "_matrix[3];\n                data[offset + 5] = " + t + "_matrix[4];\n                data[offset + 6] = " + t + "_matrix[5];\n        \n                data[offset + 8] = " + t + "_matrix[6];\n                data[offset + 9] = " + t + "_matrix[7];\n                data[offset + 10] = " + t + "_matrix[8];\n            ";
      }
    }, {
      test: function (t, e) {
        return "vec2" === t.type && 1 === t.size && void 0 !== e.x;
      },
      code: function (t) {
        return '\n                cv = ud["' + t + '"].value;\n                v = uv["' + t + '"];\n\n                if(cv[0] !== v.x || cv[1] !== v.y)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    gl.uniform2f(ud["' + t + '"].location, v.x, v.y);\n                }';
      },
      codeUbo: function (t) {
        return "\n                v = uv." + t + ";\n\n                data[offset] = v.x;\n                data[offset+1] = v.y;\n            ";
      }
    }, {
      test: function (t) {
        return "vec2" === t.type && 1 === t.size;
      },
      code: function (t) {
        return '\n                cv = ud["' + t + '"].value;\n                v = uv["' + t + '"];\n\n                if(cv[0] !== v[0] || cv[1] !== v[1])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    gl.uniform2f(ud["' + t + '"].location, v[0], v[1]);\n                }\n            ';
      }
    }, {
      test: function (t, e) {
        return "vec4" === t.type && 1 === t.size && void 0 !== e.width;
      },
      code: function (t) {
        return '\n                cv = ud["' + t + '"].value;\n                v = uv["' + t + '"];\n\n                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    cv[2] = v.width;\n                    cv[3] = v.height;\n                    gl.uniform4f(ud["' + t + '"].location, v.x, v.y, v.width, v.height)\n                }';
      },
      codeUbo: function (t) {
        return "\n                    v = uv." + t + ";\n\n                    data[offset] = v.x;\n                    data[offset+1] = v.y;\n                    data[offset+2] = v.width;\n                    data[offset+3] = v.height;\n                ";
      }
    }, {
      test: function (t) {
        return "vec4" === t.type && 1 === t.size;
      },
      code: function (t) {
        return '\n                cv = ud["' + t + '"].value;\n                v = uv["' + t + '"];\n\n                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    cv[2] = v[2];\n                    cv[3] = v[3];\n\n                    gl.uniform4f(ud["' + t + '"].location, v[0], v[1], v[2], v[3])\n                }';
      }
    }],
        bi = {
      float: "\n    if (cv !== v)\n    {\n        cu.value = v;\n        gl.uniform1f(location, v);\n    }",
      vec2: "\n    if (cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n\n        gl.uniform2f(location, v[0], v[1])\n    }",
      vec3: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3f(location, v[0], v[1], v[2])\n    }",
      vec4: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n        cv[3] = v[3];\n\n        gl.uniform4f(location, v[0], v[1], v[2], v[3]);\n    }",
      int: "\n    if (cv !== v)\n    {\n        cu.value = v;\n\n        gl.uniform1i(location, v);\n    }",
      ivec2: "\n    if (cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n\n        gl.uniform2i(location, v[0], v[1]);\n    }",
      ivec3: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3i(location, v[0], v[1], v[2]);\n    }",
      ivec4: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n        cv[3] = v[3];\n\n        gl.uniform4i(location, v[0], v[1], v[2], v[3]);\n    }",
      uint: "\n    if (cv !== v)\n    {\n        cu.value = v;\n\n        gl.uniform1ui(location, v);\n    }",
      uvec2: "\n    if (cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n\n        gl.uniform2ui(location, v[0], v[1]);\n    }",
      uvec3: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3ui(location, v[0], v[1], v[2]);\n    }",
      uvec4: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n        cv[3] = v[3];\n\n        gl.uniform4ui(location, v[0], v[1], v[2], v[3]);\n    }",
      bool: "\n    if (cv !== v)\n    {\n        cu.value = v;\n        gl.uniform1i(location, v);\n    }",
      bvec2: "\n    if (cv[0] != v[0] || cv[1] != v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n\n        gl.uniform2i(location, v[0], v[1]);\n    }",
      bvec3: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3i(location, v[0], v[1], v[2]);\n    }",
      bvec4: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n        cv[3] = v[3];\n\n        gl.uniform4i(location, v[0], v[1], v[2], v[3]);\n    }",
      mat2: "gl.uniformMatrix2fv(location, false, v)",
      mat3: "gl.uniformMatrix3fv(location, false, v)",
      mat4: "gl.uniformMatrix4fv(location, false, v)",
      sampler2D: "gl.uniform1i(location, v)",
      samplerCube: "gl.uniform1i(location, v)",
      sampler2DArray: "gl.uniform1i(location, v)"
    },
        xi = {
      float: "gl.uniform1fv(location, v)",
      vec2: "gl.uniform2fv(location, v)",
      vec3: "gl.uniform3fv(location, v)",
      vec4: "gl.uniform4fv(location, v)",
      mat4: "gl.uniformMatrix4fv(location, false, v)",
      mat3: "gl.uniformMatrix3fv(location, false, v)",
      mat2: "gl.uniformMatrix2fv(location, false, v)",
      int: "gl.uniform1iv(location, v)",
      ivec2: "gl.uniform2iv(location, v)",
      ivec3: "gl.uniform3iv(location, v)",
      ivec4: "gl.uniform4iv(location, v)",
      uint: "gl.uniform1uiv(location, v)",
      uvec2: "gl.uniform2uiv(location, v)",
      uvec3: "gl.uniform3uiv(location, v)",
      uvec4: "gl.uniform4uiv(location, v)",
      bool: "gl.uniform1iv(location, v)",
      bvec2: "gl.uniform2iv(location, v)",
      bvec3: "gl.uniform3iv(location, v)",
      bvec4: "gl.uniform4iv(location, v)",
      sampler2D: "gl.uniform1iv(location, v)",
      samplerCube: "gl.uniform1iv(location, v)",
      sampler2DArray: "gl.uniform1iv(location, v)"
    },
        Ri = ["precision mediump float;", "void main(void){", "float test = 0.1;", "%forloop%", "gl_FragColor = vec4(0.0);", "}"].join("\n");

    function Ai(t) {
      for (var e = "", r = 0; r < t; ++r) r > 0 && (e += "\nelse "), r < t - 1 && (e += "if(test == " + r + ".0){}");

      return e;
    }

    var Oi = 0,
        Si = {},
        Ii = function () {
      function t(e, r, i) {
        void 0 === i && (i = "pixi-shader"), this.id = Oi++, this.vertexSrc = e || t.defaultVertexSrc, this.fragmentSrc = r || t.defaultFragmentSrc, this.vertexSrc = this.vertexSrc.trim(), this.fragmentSrc = this.fragmentSrc.trim(), "#version" !== this.vertexSrc.substring(0, 8) && (i = i.replace(/\s+/g, "-"), Si[i] ? (Si[i]++, i += "-" + Si[i]) : Si[i] = 1, this.vertexSrc = "#define SHADER_NAME " + i + "\n" + this.vertexSrc, this.fragmentSrc = "#define SHADER_NAME " + i + "\n" + this.fragmentSrc, this.vertexSrc = pi(this.vertexSrc, Et.PRECISION_VERTEX, vt.HIGH), this.fragmentSrc = pi(this.fragmentSrc, Et.PRECISION_FRAGMENT, function () {
          if (!ci) {
            ci = vt.MEDIUM;

            var t = function () {
              if (fi === di || fi && fi.isContextLost()) {
                var t = document.createElement("canvas"),
                    e = void 0;
                Et.PREFER_ENV >= et.WEBGL2 && (e = t.getContext("webgl2", {})), e || ((e = t.getContext("webgl", {}) || t.getContext("experimental-webgl", {})) ? e.getExtension("WEBGL_draw_buffers") : e = null), fi = e;
              }

              return fi;
            }();

            if (t && t.getShaderPrecisionFormat) {
              var e = t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT);
              ci = e.precision ? vt.HIGH : vt.MEDIUM;
            }
          }

          return ci;
        }())), this.glPrograms = {}, this.syncUniforms = null;
      }

      return Object.defineProperty(t, "defaultVertexSrc", {
        get: function () {
          return "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n}\n";
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t, "defaultFragmentSrc", {
        get: function () {
          return "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor *= texture2D(uSampler, vTextureCoord);\n}";
        },
        enumerable: !1,
        configurable: !0
      }), t.from = function (e, r, i) {
        var n = e + r,
            o = qt[n];
        return o || (qt[n] = o = new t(e, r, i)), o;
      }, t;
    }(),
        Pi = function () {
      function t(t, e) {
        this.uniformBindCount = 0, this.program = t, this.uniformGroup = e ? e instanceof Wr ? e : new Wr(e) : new Wr({});
      }

      return t.prototype.checkUniformExists = function (t, e) {
        if (e.uniforms[t]) return !0;

        for (var r in e.uniforms) {
          var i = e.uniforms[r];
          if (i.group && this.checkUniformExists(t, i)) return !0;
        }

        return !1;
      }, t.prototype.destroy = function () {
        this.uniformGroup = null;
      }, Object.defineProperty(t.prototype, "uniforms", {
        get: function () {
          return this.uniformGroup.uniforms;
        },
        enumerable: !1,
        configurable: !0
      }), t.from = function (e, r, i) {
        return new t(Ii.from(e, r), i);
      }, t;
    }(),
        Ni = function () {
      function t() {
        this.data = 0, this.blendMode = nt.NORMAL, this.polygonOffset = 0, this.blend = !0, this.depthMask = !0;
      }

      return Object.defineProperty(t.prototype, "blend", {
        get: function () {
          return !!(1 & this.data);
        },
        set: function (t) {
          !!(1 & this.data) !== t && (this.data ^= 1);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "offsets", {
        get: function () {
          return !!(2 & this.data);
        },
        set: function (t) {
          !!(2 & this.data) !== t && (this.data ^= 2);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "culling", {
        get: function () {
          return !!(4 & this.data);
        },
        set: function (t) {
          !!(4 & this.data) !== t && (this.data ^= 4);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "depthTest", {
        get: function () {
          return !!(8 & this.data);
        },
        set: function (t) {
          !!(8 & this.data) !== t && (this.data ^= 8);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "depthMask", {
        get: function () {
          return !!(32 & this.data);
        },
        set: function (t) {
          !!(32 & this.data) !== t && (this.data ^= 32);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "clockwiseFrontFace", {
        get: function () {
          return !!(16 & this.data);
        },
        set: function (t) {
          !!(16 & this.data) !== t && (this.data ^= 16);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "blendMode", {
        get: function () {
          return this._blendMode;
        },
        set: function (t) {
          this.blend = t !== nt.NONE, this._blendMode = t;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "polygonOffset", {
        get: function () {
          return this._polygonOffset;
        },
        set: function (t) {
          this.offsets = !!t, this._polygonOffset = t;
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.toString = function () {
        return "[@pixi/core:State blendMode=" + this.blendMode + " clockwiseFrontFace=" + this.clockwiseFrontFace + " culling=" + this.culling + " depthMask=" + this.depthMask + " polygonOffset=" + this.polygonOffset + "]";
      }, t.for2d = function () {
        var e = new t();
        return e.depthTest = !1, e.blend = !0, e;
      }, t;
    }(),
        Mi = function (t) {
      function e(r, i, n) {
        var o = this,
            s = Ii.from(r || e.defaultVertexSrc, i || e.defaultFragmentSrc);
        return (o = t.call(this, s, n) || this).padding = 0, o.resolution = Et.FILTER_RESOLUTION, o.multisample = Et.FILTER_MULTISAMPLE, o.enabled = !0, o.autoFit = !0, o.state = new Ni(), o;
      }

      return lr(e, t), e.prototype.apply = function (t, e, r, i, n) {
        t.applyFilter(this, e, r, i);
      }, Object.defineProperty(e.prototype, "blendMode", {
        get: function () {
          return this.state.blendMode;
        },
        set: function (t) {
          this.state.blendMode = t;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "resolution", {
        get: function () {
          return this._resolution;
        },
        set: function (t) {
          this._resolution = t;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e, "defaultVertexSrc", {
        get: function () {
          return "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n";
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e, "defaultFragmentSrc", {
        get: function () {
          return "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n}\n";
        },
        enumerable: !1,
        configurable: !0
      }), e;
    }(Pi),
        Di = new ce(),
        wi = function () {
      function t(t, e) {
        this._texture = t, this.mapCoord = new ce(), this.uClampFrame = new Float32Array(4), this.uClampOffset = new Float32Array(2), this._textureID = -1, this._updateID = 0, this.clampOffset = 0, this.clampMargin = void 0 === e ? .5 : e, this.isSimple = !1;
      }

      return Object.defineProperty(t.prototype, "texture", {
        get: function () {
          return this._texture;
        },
        set: function (t) {
          this._texture = t, this._textureID = -1;
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.multiplyUvs = function (t, e) {
        void 0 === e && (e = t);

        for (var r = this.mapCoord, i = 0; i < t.length; i += 2) {
          var n = t[i],
              o = t[i + 1];
          e[i] = n * r.a + o * r.c + r.tx, e[i + 1] = n * r.b + o * r.d + r.ty;
        }

        return e;
      }, t.prototype.update = function (t) {
        var e = this._texture;
        if (!e || !e.valid) return !1;
        if (!t && this._textureID === e._updateID) return !1;
        this._textureID = e._updateID, this._updateID++;
        var r = e._uvs;
        this.mapCoord.set(r.x1 - r.x0, r.y1 - r.y0, r.x3 - r.x0, r.y3 - r.y0, r.x0, r.y0);
        var i = e.orig,
            n = e.trim;
        n && (Di.set(i.width / n.width, 0, 0, i.height / n.height, -n.x / n.width, -n.y / n.height), this.mapCoord.append(Di));
        var o = e.baseTexture,
            s = this.uClampFrame,
            a = this.clampMargin / o.resolution,
            h = this.clampOffset;
        return s[0] = (e._frame.x + a + h) / o.width, s[1] = (e._frame.y + a + h) / o.height, s[2] = (e._frame.x + e._frame.width - a + h) / o.width, s[3] = (e._frame.y + e._frame.height - a + h) / o.height, this.uClampOffset[0] = h / o.realWidth, this.uClampOffset[1] = h / o.realHeight, this.isSimple = e._frame.width === o.width && e._frame.height === o.height && 0 === e.rotate, !0;
      }, t;
    }(),
        Ci = function (t) {
      function e(e, r, i) {
        var n = this,
            o = null;
        return "string" != typeof e && void 0 === r && void 0 === i && (o = e, e = void 0, r = void 0, i = void 0), (n = t.call(this, e || "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n", r || "varying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform sampler2D mask;\nuniform float alpha;\nuniform float npmAlpha;\nuniform vec4 maskClamp;\n\nvoid main(void)\n{\n    float clip = step(3.5,\n        step(maskClamp.x, vMaskCoord.x) +\n        step(maskClamp.y, vMaskCoord.y) +\n        step(vMaskCoord.x, maskClamp.z) +\n        step(vMaskCoord.y, maskClamp.w));\n\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);\n\n    original *= (alphaMul * masky.r * alpha * clip);\n\n    gl_FragColor = original;\n}\n", i) || this).maskSprite = o, n.maskMatrix = new ce(), n;
      }

      return lr(e, t), Object.defineProperty(e.prototype, "maskSprite", {
        get: function () {
          return this._maskSprite;
        },
        set: function (t) {
          this._maskSprite = t, this._maskSprite && (this._maskSprite.renderable = !1);
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.apply = function (t, e, r, i) {
        var n = this._maskSprite,
            o = n._texture;
        o.valid && (o.uvMatrix || (o.uvMatrix = new wi(o, 0)), o.uvMatrix.update(), this.uniforms.npmAlpha = o.baseTexture.alphaMode ? 0 : 1, this.uniforms.mask = o, this.uniforms.otherMatrix = t.calculateSpriteMatrix(this.maskMatrix, n).prepend(o.uvMatrix.mapCoord), this.uniforms.alpha = n.worldAlpha, this.uniforms.maskClamp = o.uvMatrix.uClampFrame, t.applyFilter(this, e, r, i));
      }, e;
    }(Mi),
        Li = function () {
      function t(t) {
        this.renderer = t, this.enableScissor = !0, this.alphaMaskPool = [], this.maskDataPool = [], this.maskStack = [], this.alphaMaskIndex = 0;
      }

      return t.prototype.setMaskStack = function (t) {
        this.maskStack = t, this.renderer.scissor.setMaskStack(t), this.renderer.stencil.setMaskStack(t);
      }, t.prototype.push = function (t, e) {
        var r = e;

        if (!r.isMaskData) {
          var i = this.maskDataPool.pop() || new si();
          i.pooled = !0, i.maskObject = e, r = i;
        }

        var n = 0 !== this.maskStack.length ? this.maskStack[this.maskStack.length - 1] : null;
        if (r.copyCountersOrReset(n), r.autoDetect && this.detect(r), r._target = t, r.type !== mt.SPRITE && this.maskStack.push(r), r.enabled) switch (r.type) {
          case mt.SCISSOR:
            this.renderer.scissor.push(r);
            break;

          case mt.STENCIL:
            this.renderer.stencil.push(r);
            break;

          case mt.SPRITE:
            r.copyCountersOrReset(null), this.pushSpriteMask(r);
        }
        r.type === mt.SPRITE && this.maskStack.push(r);
      }, t.prototype.pop = function (t) {
        var e = this.maskStack.pop();

        if (e && e._target === t) {
          if (e.enabled) switch (e.type) {
            case mt.SCISSOR:
              this.renderer.scissor.pop();
              break;

            case mt.STENCIL:
              this.renderer.stencil.pop(e.maskObject);
              break;

            case mt.SPRITE:
              this.popSpriteMask(e);
          }

          if (e.reset(), e.pooled && this.maskDataPool.push(e), 0 !== this.maskStack.length) {
            var r = this.maskStack[this.maskStack.length - 1];
            r.type === mt.SPRITE && r._filters && (r._filters[0].maskSprite = r.maskObject);
          }
        }
      }, t.prototype.detect = function (t) {
        t.maskObject.isSprite ? t.type = mt.SPRITE : this.enableScissor && this.renderer.scissor.testScissor(t) ? t.type = mt.SCISSOR : t.type = mt.STENCIL;
      }, t.prototype.pushSpriteMask = function (t) {
        var e,
            r,
            i = t.maskObject,
            n = t._target,
            o = t._filters;
        o || (o = this.alphaMaskPool[this.alphaMaskIndex]) || (o = this.alphaMaskPool[this.alphaMaskIndex] = [new Ci()]);
        var s,
            a,
            h = this.renderer,
            u = h.renderTexture;

        if (u.current) {
          var l = u.current;
          s = t.resolution || l.resolution, a = null !== (e = t.multisample) && void 0 !== e ? e : l.multisample;
        } else s = t.resolution || h.resolution, a = null !== (r = t.multisample) && void 0 !== r ? r : h.multisample;

        o[0].resolution = s, o[0].multisample = a, o[0].maskSprite = i;
        var c = n.filterArea;
        n.filterArea = i.getBounds(!0), h.filter.push(n, o), n.filterArea = c, t._filters || this.alphaMaskIndex++;
      }, t.prototype.popSpriteMask = function (t) {
        this.renderer.filter.pop(), t._filters ? t._filters[0].maskSprite = null : (this.alphaMaskIndex--, this.alphaMaskPool[this.alphaMaskIndex][0].maskSprite = null);
      }, t.prototype.destroy = function () {
        this.renderer = null;
      }, t;
    }(),
        Fi = function () {
      function t(t) {
        this.renderer = t, this.maskStack = [], this.glConst = 0;
      }

      return t.prototype.getStackLength = function () {
        return this.maskStack.length;
      }, t.prototype.setMaskStack = function (t) {
        var e = this.renderer.gl,
            r = this.getStackLength();
        this.maskStack = t;
        var i = this.getStackLength();
        i !== r && (0 === i ? e.disable(this.glConst) : (e.enable(this.glConst), this._useCurrent()));
      }, t.prototype._useCurrent = function () {}, t.prototype.destroy = function () {
        this.renderer = null, this.maskStack = null;
      }, t;
    }(),
        Ui = new ce(),
        Gi = function (t) {
      function e(e) {
        var r = t.call(this, e) || this;
        return r.glConst = WebGLRenderingContext.SCISSOR_TEST, r;
      }

      return lr(e, t), e.prototype.getStackLength = function () {
        var t = this.maskStack[this.maskStack.length - 1];
        return t ? t._scissorCounter : 0;
      }, e.prototype.calcScissorRect = function (t) {
        if (!t._scissorRectLocal) {
          var e = t._scissorRect,
              r = t.maskObject,
              i = this.renderer,
              n = i.renderTexture;
          r.renderable = !0;
          var o = r.getBounds();
          this.roundFrameToPixels(o, n.current ? n.current.resolution : i.resolution, n.sourceFrame, n.destinationFrame, i.projection.transform), r.renderable = !1, e && o.fit(e), t._scissorRectLocal = o;
        }
      }, e.isMatrixRotated = function (t) {
        if (!t) return !1;
        var e = t.a,
            r = t.b,
            i = t.c,
            n = t.d;
        return (Math.abs(r) > 1e-4 || Math.abs(i) > 1e-4) && (Math.abs(e) > 1e-4 || Math.abs(n) > 1e-4);
      }, e.prototype.testScissor = function (t) {
        var r = t.maskObject;
        if (!r.isFastRect || !r.isFastRect()) return !1;
        if (e.isMatrixRotated(r.worldTransform)) return !1;
        if (e.isMatrixRotated(this.renderer.projection.transform)) return !1;
        this.calcScissorRect(t);
        var i = t._scissorRectLocal;
        return i.width > 0 && i.height > 0;
      }, e.prototype.roundFrameToPixels = function (t, r, i, n, o) {
        e.isMatrixRotated(o) || ((o = o ? Ui.copyFrom(o) : Ui.identity()).translate(-i.x, -i.y).scale(n.width / i.width, n.height / i.height).translate(n.x, n.y), this.renderer.filter.transformAABB(o, t), t.fit(n), t.x = Math.round(t.x * r), t.y = Math.round(t.y * r), t.width = Math.round(t.width * r), t.height = Math.round(t.height * r));
      }, e.prototype.push = function (t) {
        t._scissorRectLocal || this.calcScissorRect(t);
        var e = this.renderer.gl;
        t._scissorRect || e.enable(e.SCISSOR_TEST), t._scissorCounter++, t._scissorRect = t._scissorRectLocal, this._useCurrent();
      }, e.prototype.pop = function () {
        var t = this.renderer.gl;
        this.getStackLength() > 0 ? this._useCurrent() : t.disable(t.SCISSOR_TEST);
      }, e.prototype._useCurrent = function () {
        var t,
            e = this.maskStack[this.maskStack.length - 1]._scissorRect;
        t = this.renderer.renderTexture.current ? e.y : this.renderer.height - e.height - e.y, this.renderer.gl.scissor(e.x, t, e.width, e.height);
      }, e;
    }(Fi),
        Bi = function (t) {
      function e(e) {
        var r = t.call(this, e) || this;
        return r.glConst = WebGLRenderingContext.STENCIL_TEST, r;
      }

      return lr(e, t), e.prototype.getStackLength = function () {
        var t = this.maskStack[this.maskStack.length - 1];
        return t ? t._stencilCounter : 0;
      }, e.prototype.push = function (t) {
        var e = t.maskObject,
            r = this.renderer.gl,
            i = t._stencilCounter;
        0 === i && (this.renderer.framebuffer.forceStencil(), r.clearStencil(0), r.clear(r.STENCIL_BUFFER_BIT), r.enable(r.STENCIL_TEST)), t._stencilCounter++, r.colorMask(!1, !1, !1, !1), r.stencilFunc(r.EQUAL, i, 4294967295), r.stencilOp(r.KEEP, r.KEEP, r.INCR), e.renderable = !0, e.render(this.renderer), this.renderer.batch.flush(), e.renderable = !1, this._useCurrent();
      }, e.prototype.pop = function (t) {
        var e = this.renderer.gl;
        0 === this.getStackLength() ? e.disable(e.STENCIL_TEST) : (e.colorMask(!1, !1, !1, !1), e.stencilOp(e.KEEP, e.KEEP, e.DECR), t.renderable = !0, t.render(this.renderer), this.renderer.batch.flush(), t.renderable = !1, this._useCurrent());
      }, e.prototype._useCurrent = function () {
        var t = this.renderer.gl;
        t.colorMask(!0, !0, !0, !0), t.stencilFunc(t.EQUAL, this.getStackLength(), 4294967295), t.stencilOp(t.KEEP, t.KEEP, t.KEEP);
      }, e;
    }(Fi),
        Xi = function () {
      function t(t) {
        this.renderer = t, this.destinationFrame = null, this.sourceFrame = null, this.defaultFrame = null, this.projectionMatrix = new ce(), this.transform = null;
      }

      return t.prototype.update = function (t, e, r, i) {
        this.destinationFrame = t || this.destinationFrame || this.defaultFrame, this.sourceFrame = e || this.sourceFrame || t, this.calculateProjection(this.destinationFrame, this.sourceFrame, r, i), this.transform && this.projectionMatrix.append(this.transform);
        var n = this.renderer;
        n.globalUniforms.uniforms.projectionMatrix = this.projectionMatrix, n.globalUniforms.update(), n.shader.shader && n.shader.syncUniformGroup(n.shader.shader.uniforms.globals);
      }, t.prototype.calculateProjection = function (t, e, r, i) {
        var n = this.projectionMatrix,
            o = i ? -1 : 1;
        n.identity(), n.a = 1 / e.width * 2, n.d = o * (1 / e.height * 2), n.tx = -1 - e.x * n.a, n.ty = -o - e.y * n.d;
      }, t.prototype.setTransform = function (t) {}, t.prototype.destroy = function () {
        this.renderer = null;
      }, t;
    }(),
        ki = new oe(),
        Hi = new oe(),
        ji = function () {
      function t(t) {
        this.renderer = t, this.clearColor = t._backgroundColorRgba, this.defaultMaskStack = [], this.current = null, this.sourceFrame = new oe(), this.destinationFrame = new oe(), this.viewportFrame = new oe();
      }

      return t.prototype.bind = function (t, e, r) {
        void 0 === t && (t = null);
        var i,
            n,
            o,
            s = this.renderer;
        this.current = t, t ? (o = (i = t.baseTexture).resolution, e || (ki.width = t.frame.width, ki.height = t.frame.height, e = ki), r || (Hi.x = t.frame.x, Hi.y = t.frame.y, Hi.width = e.width, Hi.height = e.height, r = Hi), n = i.framebuffer) : (o = s.resolution, e || (ki.width = s.screen.width, ki.height = s.screen.height, e = ki), r || ((r = ki).width = e.width, r.height = e.height));
        var a = this.viewportFrame;
        a.x = r.x * o, a.y = r.y * o, a.width = r.width * o, a.height = r.height * o, t || (a.y = s.view.height - (a.y + a.height)), a.ceil(), this.renderer.framebuffer.bind(n, a), this.renderer.projection.update(r, e, o, !n), t ? this.renderer.mask.setMaskStack(i.maskStack) : this.renderer.mask.setMaskStack(this.defaultMaskStack), this.sourceFrame.copyFrom(e), this.destinationFrame.copyFrom(r);
      }, t.prototype.clear = function (t, e) {
        t = this.current ? t || this.current.baseTexture.clearColor : t || this.clearColor;
        var r = this.destinationFrame,
            i = this.current ? this.current.baseTexture : this.renderer.screen,
            n = r.width !== i.width || r.height !== i.height;

        if (n) {
          var o = this.viewportFrame,
              s = o.x,
              a = o.y,
              h = o.width,
              u = o.height;
          s = Math.round(s), a = Math.round(a), h = Math.round(h), u = Math.round(u), this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST), this.renderer.gl.scissor(s, a, h, u);
        }

        this.renderer.framebuffer.clear(t[0], t[1], t[2], t[3], e), n && this.renderer.scissor.pop();
      }, t.prototype.resize = function () {
        this.bind(null);
      }, t.prototype.reset = function () {
        this.bind(null);
      }, t.prototype.destroy = function () {
        this.renderer = null;
      }, t;
    }();

    function Yi(t, e, r, i, n) {
      r.buffer.update(n);
    }

    var Vi = {
      float: "\n        data[offset] = v;\n    ",
      vec2: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n    ",
      vec3: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n        data[offset+2] = v[2];\n\n    ",
      vec4: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n        data[offset+2] = v[2];\n        data[offset+3] = v[3];\n    ",
      mat2: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n\n        data[offset+4] = v[2];\n        data[offset+5] = v[3];\n    ",
      mat3: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n        data[offset+2] = v[2];\n\n        data[offset + 4] = v[3];\n        data[offset + 5] = v[4];\n        data[offset + 6] = v[5];\n\n        data[offset + 8] = v[6];\n        data[offset + 9] = v[7];\n        data[offset + 10] = v[8];\n    ",
      mat4: "\n        for(var i = 0; i < 16; i++)\n        {\n            data[offset + i] = v[i];\n        }\n    "
    },
        Wi = {
      float: 4,
      vec2: 8,
      vec3: 12,
      vec4: 16,
      int: 4,
      ivec2: 8,
      ivec3: 12,
      ivec4: 16,
      uint: 4,
      uvec2: 8,
      uvec3: 12,
      uvec4: 16,
      bool: 4,
      bvec2: 8,
      bvec3: 12,
      bvec4: 16,
      mat2: 32,
      mat3: 48,
      mat4: 64
    };

    var zi = function () {
      function t(t, e) {
        this.program = t, this.uniformData = e, this.uniformGroups = {}, this.uniformDirtyGroups = {}, this.uniformBufferBindings = {};
      }

      return t.prototype.destroy = function () {
        this.uniformData = null, this.uniformGroups = null, this.uniformDirtyGroups = null, this.uniformBufferBindings = null, this.program = null;
      }, t;
    }();

    var qi = 0,
        Ki = {
      textureCount: 0,
      uboCount: 0
    },
        Zi = function () {
      function t(t) {
        this.destroyed = !1, this.renderer = t, this.systemCheck(), this.gl = null, this.shader = null, this.program = null, this.cache = {}, this._uboCache = {}, this.id = qi++;
      }

      return t.prototype.systemCheck = function () {
        if (!function () {
          if ("boolean" == typeof Ei) return Ei;

          try {
            var t = new Function("param1", "param2", "param3", "return param1[param2] === param3;");
            Ei = !0 === t({
              a: "b"
            }, "a", "b");
          } catch (t) {
            Ei = !1;
          }

          return Ei;
        }()) throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.");
      }, t.prototype.contextChange = function (t) {
        this.gl = t, this.reset();
      }, t.prototype.bind = function (t, e) {
        t.uniforms.globals = this.renderer.globalUniforms;
        var r = t.program,
            i = r.glPrograms[this.renderer.CONTEXT_UID] || this.generateProgram(t);
        return this.shader = t, this.program !== r && (this.program = r, this.gl.useProgram(i.program)), e || (Ki.textureCount = 0, Ki.uboCount = 0, this.syncUniformGroup(t.uniformGroup, Ki)), i;
      }, t.prototype.setUniforms = function (t) {
        var e = this.shader.program,
            r = e.glPrograms[this.renderer.CONTEXT_UID];
        e.syncUniforms(r.uniformData, t, this.renderer);
      }, t.prototype.syncUniformGroup = function (t, e) {
        var r = this.getGlProgram();
        t.static && t.dirtyId === r.uniformDirtyGroups[t.id] || (r.uniformDirtyGroups[t.id] = t.dirtyId, this.syncUniforms(t, r, e));
      }, t.prototype.syncUniforms = function (t, e, r) {
        (t.syncUniforms[this.shader.program.id] || this.createSyncGroups(t))(e.uniformData, t.uniforms, this.renderer, r);
      }, t.prototype.createSyncGroups = function (t) {
        var e = this.getSignature(t, this.shader.program.uniformData, "u");
        return this.cache[e] || (this.cache[e] = function (t, e) {
          var r,
              i = ["\n        var v = null;\n        var cv = null;\n        var cu = null;\n        var t = 0;\n        var gl = renderer.gl;\n    "];

          for (var n in t.uniforms) {
            var o = e[n];

            if (o) {
              for (var s = t.uniforms[n], a = !1, h = 0; h < Ti.length; h++) if (Ti[h].test(o, s)) {
                i.push(Ti[h].code(n, s)), a = !0;
                break;
              }

              if (!a) {
                var u = (1 === o.size ? bi : xi)[o.type].replace("location", 'ud["' + n + '"].location');
                i.push('\n            cu = ud["' + n + '"];\n            cv = cu.value;\n            v = uv["' + n + '"];\n            ' + u + ";");
              }
            } else (null === (r = t.uniforms[n]) || void 0 === r ? void 0 : r.group) && (t.uniforms[n].ubo ? i.push("\n                        renderer.shader.syncUniformBufferGroup(uv." + n + ", '" + n + "');\n                    ") : i.push("\n                        renderer.shader.syncUniformGroup(uv." + n + ", syncData);\n                    "));
          }

          return new Function("ud", "uv", "renderer", "syncData", i.join("\n"));
        }(t, this.shader.program.uniformData)), t.syncUniforms[this.shader.program.id] = this.cache[e], t.syncUniforms[this.shader.program.id];
      }, t.prototype.syncUniformBufferGroup = function (t, e) {
        var r = this.getGlProgram();

        if (!t.static || 0 !== t.dirtyId || !r.uniformGroups[t.id]) {
          t.dirtyId = 0;
          var i = r.uniformGroups[t.id] || this.createSyncBufferGroup(t, r, e);
          t.buffer.update(), i(r.uniformData, t.uniforms, this.renderer, Ki, t.buffer);
        }

        this.renderer.buffer.bindBufferBase(t.buffer, r.uniformBufferBindings[e]);
      }, t.prototype.createSyncBufferGroup = function (t, e, r) {
        var i = this.renderer.gl;
        this.renderer.buffer.bind(t.buffer);
        var n = this.gl.getUniformBlockIndex(e.program, r);
        e.uniformBufferBindings[r] = this.shader.uniformBindCount, i.uniformBlockBinding(e.program, n, this.shader.uniformBindCount), this.shader.uniformBindCount++;
        var o = this.getSignature(t, this.shader.program.uniformData, "ubo"),
            s = this._uboCache[o];

        if (s || (s = this._uboCache[o] = function (t, e) {
          if (!t.autoManage) return {
            size: 0,
            syncFunc: Yi
          };

          for (var r = function (t, e) {
            var r = [];

            for (var i in t) e[i] && r.push(e[i]);

            return r.sort(function (t, e) {
              return t.index - e.index;
            }), r;
          }(t.uniforms, e), i = function (t) {
            for (var e = t.map(function (t) {
              return {
                data: t,
                offset: 0,
                dataLen: 0,
                dirty: 0
              };
            }), r = 0, i = 0, n = 0, o = 0; o < e.length; o++) {
              var s = e[o];

              if (r = Wi[s.data.type], s.data.size > 1 && (r = Math.max(r, 16) * s.data.size), s.dataLen = r, i % r != 0 && i < 16) {
                var a = i % r % 16;
                i += a, n += a;
              }

              i + r > 16 ? (n = 16 * Math.ceil(n / 16), s.offset = n, n += r, i = r) : (s.offset = n, i += r, n += r);
            }

            return {
              uboElements: e,
              size: n = 16 * Math.ceil(n / 16)
            };
          }(r), n = i.uboElements, o = i.size, s = ["\n    var v = null;\n    var v2 = null;\n    var cv = null;\n    var t = 0;\n    var gl = renderer.gl\n    var index = 0;\n    var data = buffer.data;\n    "], a = 0; a < n.length; a++) {
            for (var h = n[a], u = t.uniforms[h.data.name], l = h.data.name, c = !1, d = 0; d < Ti.length; d++) {
              var f = Ti[d];

              if (f.codeUbo && f.test(h.data, u)) {
                s.push("offset = " + h.offset / 4 + ";", Ti[d].codeUbo(h.data.name, u)), c = !0;
                break;
              }
            }

            if (!c) if (h.data.size > 1) {
              var p = vi(h.data.type),
                  _ = Math.max(Wi[h.data.type] / 16, 1),
                  v = p / _,
                  m = (4 - v % 4) % 4;

              s.push("\n                cv = ud." + l + ".value;\n                v = uv." + l + ";\n                offset = " + h.offset / 4 + ";\n\n                t = 0;\n\n                for(var i=0; i < " + h.data.size * _ + "; i++)\n                {\n                    for(var j = 0; j < " + v + "; j++)\n                    {\n                        data[offset++] = v[t++];\n                    }\n                    offset += " + m + ";\n                }\n\n                ");
            } else {
              var g = Vi[h.data.type];
              s.push("\n                cv = ud." + l + ".value;\n                v = uv." + l + ";\n                offset = " + h.offset / 4 + ";\n                " + g + ";\n                ");
            }
          }

          return s.push("\n       renderer.buffer.update(buffer);\n    "), {
            size: o,
            syncFunc: new Function("ud", "uv", "renderer", "syncData", "buffer", s.join("\n"))
          };
        }(t, this.shader.program.uniformData)), t.autoManage) {
          var a = new Float32Array(s.size / 4);
          t.buffer.update(a);
        }

        return e.uniformGroups[t.id] = s.syncFunc, e.uniformGroups[t.id];
      }, t.prototype.getSignature = function (t, e, r) {
        var i = t.uniforms,
            n = [r + "-"];

        for (var o in i) n.push(o), e[o] && n.push(e[o].type);

        return n.join("-");
      }, t.prototype.getGlProgram = function () {
        return this.shader ? this.shader.program.glPrograms[this.renderer.CONTEXT_UID] : null;
      }, t.prototype.generateProgram = function (t) {
        var e = this.gl,
            r = t.program,
            i = function (t, e) {
          var r = ai(t, t.VERTEX_SHADER, e.vertexSrc),
              i = ai(t, t.FRAGMENT_SHADER, e.fragmentSrc),
              n = t.createProgram();

          if (t.attachShader(n, r), t.attachShader(n, i), t.linkProgram(n), t.getProgramParameter(n, t.LINK_STATUS) || function (t, e, r, i) {
            t.getProgramParameter(e, t.LINK_STATUS) || (t.getShaderParameter(r, t.COMPILE_STATUS) || hi(t, r), t.getShaderParameter(i, t.COMPILE_STATUS) || hi(t, i), console.error("PixiJS Error: Could not initialize shader."), "" !== t.getProgramInfoLog(e) && console.warn("PixiJS Warning: gl.getProgramInfoLog()", t.getProgramInfoLog(e)));
          }(t, n, r, i), e.attributeData = function (t, e) {
            for (var r = {}, i = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES), n = 0; n < i; n++) {
              var o = e.getActiveAttrib(t, n);

              if (0 !== o.name.indexOf("gl_")) {
                var s = yi(e, o.type),
                    a = {
                  type: s,
                  name: o.name,
                  size: vi(s),
                  location: e.getAttribLocation(t, o.name)
                };
                r[o.name] = a;
              }
            }

            return r;
          }(n, t), e.uniformData = function (t, e) {
            for (var r = {}, i = e.getProgramParameter(t, e.ACTIVE_UNIFORMS), n = 0; n < i; n++) {
              var o = e.getActiveUniform(t, n),
                  s = o.name.replace(/\[.*?\]$/, ""),
                  a = !!o.name.match(/\[.*?\]$/),
                  h = yi(e, o.type);
              r[s] = {
                name: s,
                index: n,
                type: h,
                size: o.size,
                isArray: a,
                value: li(h, o.size)
              };
            }

            return r;
          }(n, t), !/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(e.vertexSrc)) {
            var o = Object.keys(e.attributeData);
            o.sort(function (t, e) {
              return t > e ? 1 : -1;
            });

            for (var s = 0; s < o.length; s++) e.attributeData[o[s]].location = s, t.bindAttribLocation(n, s, o[s]);

            t.linkProgram(n);
          }

          t.deleteShader(r), t.deleteShader(i);
          var a = {};

          for (var s in e.uniformData) {
            var h = e.uniformData[s];
            a[s] = {
              location: t.getUniformLocation(n, s),
              value: li(h.type, h.size)
            };
          }

          return new zi(n, a);
        }(e, r);

        return r.glPrograms[this.renderer.CONTEXT_UID] = i, i;
      }, t.prototype.reset = function () {
        this.program = null, this.shader = null;
      }, t.prototype.destroy = function () {
        this.renderer = null, this.destroyed = !0;
      }, t;
    }(),
        Ji = function () {
      function t() {
        this.gl = null, this.stateId = 0, this.polygonOffset = 0, this.blendMode = nt.NONE, this._blendEq = !1, this.map = [], this.map[0] = this.setBlend, this.map[1] = this.setOffset, this.map[2] = this.setCullFace, this.map[3] = this.setDepthTest, this.map[4] = this.setFrontFace, this.map[5] = this.setDepthMask, this.checks = [], this.defaultState = new Ni(), this.defaultState.blend = !0;
      }

      return t.prototype.contextChange = function (t) {
        this.gl = t, this.blendModes = function (t, e) {
          return void 0 === e && (e = []), e[nt.NORMAL] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[nt.ADD] = [t.ONE, t.ONE], e[nt.MULTIPLY] = [t.DST_COLOR, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA], e[nt.SCREEN] = [t.ONE, t.ONE_MINUS_SRC_COLOR, t.ONE, t.ONE_MINUS_SRC_ALPHA], e[nt.OVERLAY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[nt.DARKEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[nt.LIGHTEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[nt.COLOR_DODGE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[nt.COLOR_BURN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[nt.HARD_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[nt.SOFT_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[nt.DIFFERENCE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[nt.EXCLUSION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[nt.HUE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[nt.SATURATION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[nt.COLOR] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[nt.LUMINOSITY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[nt.NONE] = [0, 0], e[nt.NORMAL_NPM] = [t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA], e[nt.ADD_NPM] = [t.SRC_ALPHA, t.ONE, t.ONE, t.ONE], e[nt.SCREEN_NPM] = [t.SRC_ALPHA, t.ONE_MINUS_SRC_COLOR, t.ONE, t.ONE_MINUS_SRC_ALPHA], e[nt.SRC_IN] = [t.DST_ALPHA, t.ZERO], e[nt.SRC_OUT] = [t.ONE_MINUS_DST_ALPHA, t.ZERO], e[nt.SRC_ATOP] = [t.DST_ALPHA, t.ONE_MINUS_SRC_ALPHA], e[nt.DST_OVER] = [t.ONE_MINUS_DST_ALPHA, t.ONE], e[nt.DST_IN] = [t.ZERO, t.SRC_ALPHA], e[nt.DST_OUT] = [t.ZERO, t.ONE_MINUS_SRC_ALPHA], e[nt.DST_ATOP] = [t.ONE_MINUS_DST_ALPHA, t.SRC_ALPHA], e[nt.XOR] = [t.ONE_MINUS_DST_ALPHA, t.ONE_MINUS_SRC_ALPHA], e[nt.SUBTRACT] = [t.ONE, t.ONE, t.ONE, t.ONE, t.FUNC_REVERSE_SUBTRACT, t.FUNC_ADD], e;
        }(t), this.set(this.defaultState), this.reset();
      }, t.prototype.set = function (t) {
        if (t = t || this.defaultState, this.stateId !== t.data) {
          for (var e = this.stateId ^ t.data, r = 0; e;) 1 & e && this.map[r].call(this, !!(t.data & 1 << r)), e >>= 1, r++;

          this.stateId = t.data;
        }

        for (r = 0; r < this.checks.length; r++) this.checks[r](this, t);
      }, t.prototype.forceState = function (t) {
        t = t || this.defaultState;

        for (var e = 0; e < this.map.length; e++) this.map[e].call(this, !!(t.data & 1 << e));

        for (e = 0; e < this.checks.length; e++) this.checks[e](this, t);

        this.stateId = t.data;
      }, t.prototype.setBlend = function (e) {
        this.updateCheck(t.checkBlendMode, e), this.gl[e ? "enable" : "disable"](this.gl.BLEND);
      }, t.prototype.setOffset = function (e) {
        this.updateCheck(t.checkPolygonOffset, e), this.gl[e ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL);
      }, t.prototype.setDepthTest = function (t) {
        this.gl[t ? "enable" : "disable"](this.gl.DEPTH_TEST);
      }, t.prototype.setDepthMask = function (t) {
        this.gl.depthMask(t);
      }, t.prototype.setCullFace = function (t) {
        this.gl[t ? "enable" : "disable"](this.gl.CULL_FACE);
      }, t.prototype.setFrontFace = function (t) {
        this.gl.frontFace(this.gl[t ? "CW" : "CCW"]);
      }, t.prototype.setBlendMode = function (t) {
        if (t !== this.blendMode) {
          this.blendMode = t;
          var e = this.blendModes[t],
              r = this.gl;
          2 === e.length ? r.blendFunc(e[0], e[1]) : r.blendFuncSeparate(e[0], e[1], e[2], e[3]), 6 === e.length ? (this._blendEq = !0, r.blendEquationSeparate(e[4], e[5])) : this._blendEq && (this._blendEq = !1, r.blendEquationSeparate(r.FUNC_ADD, r.FUNC_ADD));
        }
      }, t.prototype.setPolygonOffset = function (t, e) {
        this.gl.polygonOffset(t, e);
      }, t.prototype.reset = function () {
        this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1), this.forceState(this.defaultState), this._blendEq = !0, this.blendMode = -1, this.setBlendMode(0);
      }, t.prototype.updateCheck = function (t, e) {
        var r = this.checks.indexOf(t);
        e && -1 === r ? this.checks.push(t) : e || -1 === r || this.checks.splice(r, 1);
      }, t.checkBlendMode = function (t, e) {
        t.setBlendMode(e.blendMode);
      }, t.checkPolygonOffset = function (t, e) {
        t.setPolygonOffset(1, e.polygonOffset);
      }, t.prototype.destroy = function () {
        this.gl = null;
      }, t;
    }(),
        Qi = function () {
      function t(t) {
        this.renderer = t, this.count = 0, this.checkCount = 0, this.maxIdle = Et.GC_MAX_IDLE, this.checkCountMax = Et.GC_MAX_CHECK_COUNT, this.mode = Et.GC_MODE;
      }

      return t.prototype.postrender = function () {
        this.renderer.renderingToScreen && (this.count++, this.mode !== _t.MANUAL && (this.checkCount++, this.checkCount > this.checkCountMax && (this.checkCount = 0, this.run())));
      }, t.prototype.run = function () {
        for (var t = this.renderer.texture, e = t.managedTextures, r = !1, i = 0; i < e.length; i++) {
          var n = e[i];
          !n.framebuffer && this.count - n.touched > this.maxIdle && (t.destroyTexture(n, !0), e[i] = null, r = !0);
        }

        if (r) {
          var o = 0;

          for (i = 0; i < e.length; i++) null !== e[i] && (e[o++] = e[i]);

          e.length = o;
        }
      }, t.prototype.unload = function (t) {
        var e = this.renderer.texture,
            r = t._texture;
        r && !r.framebuffer && e.destroyTexture(r);

        for (var i = t.children.length - 1; i >= 0; i--) this.unload(t.children[i]);
      }, t.prototype.destroy = function () {
        this.renderer = null;
      }, t;
    }(),
        $i = function (t) {
      this.texture = t, this.width = -1, this.height = -1, this.dirtyId = -1, this.dirtyStyleId = -1, this.mipmap = !1, this.wrapMode = 33071, this.type = ht.UNSIGNED_BYTE, this.internalFormat = st.RGBA, this.samplerType = 0;
    },
        tn = function () {
      function t(t) {
        this.renderer = t, this.boundTextures = [], this.currentLocation = -1, this.managedTextures = [], this._unknownBoundTextures = !1, this.unknownTexture = new _r(), this.hasIntegerTextures = !1;
      }

      return t.prototype.contextChange = function () {
        var t = this.gl = this.renderer.gl;
        this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.webGLVersion = this.renderer.context.webGLVersion, this.internalFormats = function (t) {
          var e, r, i, n, o, s, a, h, u, l, c, d, f, p, _, v, m, g, y, E, T, b, x;

          return "WebGL2RenderingContext" in globalThis && t instanceof globalThis.WebGL2RenderingContext ? ((e = {})[ht.UNSIGNED_BYTE] = ((r = {})[st.RGBA] = t.RGBA8, r[st.RGB] = t.RGB8, r[st.RG] = t.RG8, r[st.RED] = t.R8, r[st.RGBA_INTEGER] = t.RGBA8UI, r[st.RGB_INTEGER] = t.RGB8UI, r[st.RG_INTEGER] = t.RG8UI, r[st.RED_INTEGER] = t.R8UI, r[st.ALPHA] = t.ALPHA, r[st.LUMINANCE] = t.LUMINANCE, r[st.LUMINANCE_ALPHA] = t.LUMINANCE_ALPHA, r), e[ht.BYTE] = ((i = {})[st.RGBA] = t.RGBA8_SNORM, i[st.RGB] = t.RGB8_SNORM, i[st.RG] = t.RG8_SNORM, i[st.RED] = t.R8_SNORM, i[st.RGBA_INTEGER] = t.RGBA8I, i[st.RGB_INTEGER] = t.RGB8I, i[st.RG_INTEGER] = t.RG8I, i[st.RED_INTEGER] = t.R8I, i), e[ht.UNSIGNED_SHORT] = ((n = {})[st.RGBA_INTEGER] = t.RGBA16UI, n[st.RGB_INTEGER] = t.RGB16UI, n[st.RG_INTEGER] = t.RG16UI, n[st.RED_INTEGER] = t.R16UI, n[st.DEPTH_COMPONENT] = t.DEPTH_COMPONENT16, n), e[ht.SHORT] = ((o = {})[st.RGBA_INTEGER] = t.RGBA16I, o[st.RGB_INTEGER] = t.RGB16I, o[st.RG_INTEGER] = t.RG16I, o[st.RED_INTEGER] = t.R16I, o), e[ht.UNSIGNED_INT] = ((s = {})[st.RGBA_INTEGER] = t.RGBA32UI, s[st.RGB_INTEGER] = t.RGB32UI, s[st.RG_INTEGER] = t.RG32UI, s[st.RED_INTEGER] = t.R32UI, s[st.DEPTH_COMPONENT] = t.DEPTH_COMPONENT24, s), e[ht.INT] = ((a = {})[st.RGBA_INTEGER] = t.RGBA32I, a[st.RGB_INTEGER] = t.RGB32I, a[st.RG_INTEGER] = t.RG32I, a[st.RED_INTEGER] = t.R32I, a), e[ht.FLOAT] = ((h = {})[st.RGBA] = t.RGBA32F, h[st.RGB] = t.RGB32F, h[st.RG] = t.RG32F, h[st.RED] = t.R32F, h[st.DEPTH_COMPONENT] = t.DEPTH_COMPONENT32F, h), e[ht.HALF_FLOAT] = ((u = {})[st.RGBA] = t.RGBA16F, u[st.RGB] = t.RGB16F, u[st.RG] = t.RG16F, u[st.RED] = t.R16F, u), e[ht.UNSIGNED_SHORT_5_6_5] = ((l = {})[st.RGB] = t.RGB565, l), e[ht.UNSIGNED_SHORT_4_4_4_4] = ((c = {})[st.RGBA] = t.RGBA4, c), e[ht.UNSIGNED_SHORT_5_5_5_1] = ((d = {})[st.RGBA] = t.RGB5_A1, d), e[ht.UNSIGNED_INT_2_10_10_10_REV] = ((f = {})[st.RGBA] = t.RGB10_A2, f[st.RGBA_INTEGER] = t.RGB10_A2UI, f), e[ht.UNSIGNED_INT_10F_11F_11F_REV] = ((p = {})[st.RGB] = t.R11F_G11F_B10F, p), e[ht.UNSIGNED_INT_5_9_9_9_REV] = ((_ = {})[st.RGB] = t.RGB9_E5, _), e[ht.UNSIGNED_INT_24_8] = ((v = {})[st.DEPTH_STENCIL] = t.DEPTH24_STENCIL8, v), e[ht.FLOAT_32_UNSIGNED_INT_24_8_REV] = ((m = {})[st.DEPTH_STENCIL] = t.DEPTH32F_STENCIL8, m), x = e) : ((g = {})[ht.UNSIGNED_BYTE] = ((y = {})[st.RGBA] = t.RGBA, y[st.RGB] = t.RGB, y[st.ALPHA] = t.ALPHA, y[st.LUMINANCE] = t.LUMINANCE, y[st.LUMINANCE_ALPHA] = t.LUMINANCE_ALPHA, y), g[ht.UNSIGNED_SHORT_5_6_5] = ((E = {})[st.RGB] = t.RGB, E), g[ht.UNSIGNED_SHORT_4_4_4_4] = ((T = {})[st.RGBA] = t.RGBA, T), g[ht.UNSIGNED_SHORT_5_5_5_1] = ((b = {})[st.RGBA] = t.RGBA, b), x = g), x;
        }(t);
        var e = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);
        this.boundTextures.length = e;

        for (var r = 0; r < e; r++) this.boundTextures[r] = null;

        this.emptyTextures = {};
        var i = new $i(t.createTexture());

        for (t.bindTexture(t.TEXTURE_2D, i.texture), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, new Uint8Array(4)), this.emptyTextures[t.TEXTURE_2D] = i, this.emptyTextures[t.TEXTURE_CUBE_MAP] = new $i(t.createTexture()), t.bindTexture(t.TEXTURE_CUBE_MAP, this.emptyTextures[t.TEXTURE_CUBE_MAP].texture), r = 0; r < 6; r++) t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + r, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, null);

        for (t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MIN_FILTER, t.LINEAR), r = 0; r < this.boundTextures.length; r++) this.bind(null, r);
      }, t.prototype.bind = function (t, e) {
        void 0 === e && (e = 0);
        var r = this.gl;

        if ((t = null == t ? void 0 : t.castToBaseTexture()) && t.valid && !t.parentTextureArray) {
          t.touched = this.renderer.textureGC.count;
          var i = t._glTextures[this.CONTEXT_UID] || this.initTexture(t);
          this.boundTextures[e] !== t && (this.currentLocation !== e && (this.currentLocation = e, r.activeTexture(r.TEXTURE0 + e)), r.bindTexture(t.target, i.texture)), i.dirtyId !== t.dirtyId && (this.currentLocation !== e && (this.currentLocation = e, r.activeTexture(r.TEXTURE0 + e)), this.updateTexture(t)), this.boundTextures[e] = t;
        } else this.currentLocation !== e && (this.currentLocation = e, r.activeTexture(r.TEXTURE0 + e)), r.bindTexture(r.TEXTURE_2D, this.emptyTextures[r.TEXTURE_2D].texture), this.boundTextures[e] = null;
      }, t.prototype.reset = function () {
        this._unknownBoundTextures = !0, this.hasIntegerTextures = !1, this.currentLocation = -1;

        for (var t = 0; t < this.boundTextures.length; t++) this.boundTextures[t] = this.unknownTexture;
      }, t.prototype.unbind = function (t) {
        var e = this.gl,
            r = this.boundTextures;

        if (this._unknownBoundTextures) {
          this._unknownBoundTextures = !1;

          for (var i = 0; i < r.length; i++) r[i] === this.unknownTexture && this.bind(null, i);
        }

        for (i = 0; i < r.length; i++) r[i] === t && (this.currentLocation !== i && (e.activeTexture(e.TEXTURE0 + i), this.currentLocation = i), e.bindTexture(t.target, this.emptyTextures[t.target].texture), r[i] = null);
      }, t.prototype.ensureSamplerType = function (t) {
        var e = this,
            r = e.boundTextures,
            i = e.hasIntegerTextures,
            n = e.CONTEXT_UID;
        if (i) for (var o = t - 1; o >= 0; --o) {
          var s = r[o];
          s && s._glTextures[n].samplerType !== ut.FLOAT && this.renderer.texture.unbind(s);
        }
      }, t.prototype.initTexture = function (t) {
        var e = new $i(this.gl.createTexture());
        return e.dirtyId = -1, t._glTextures[this.CONTEXT_UID] = e, this.managedTextures.push(t), t.on("dispose", this.destroyTexture, this), e;
      }, t.prototype.initTextureType = function (t, e) {
        var r, i;
        e.internalFormat = null !== (i = null === (r = this.internalFormats[t.type]) || void 0 === r ? void 0 : r[t.format]) && void 0 !== i ? i : t.format, 2 === this.webGLVersion && t.type === ht.HALF_FLOAT ? e.type = this.gl.HALF_FLOAT : e.type = t.type;
      }, t.prototype.updateTexture = function (t) {
        var e = t._glTextures[this.CONTEXT_UID];

        if (e) {
          var r = this.renderer;
          if (this.initTextureType(t, e), t.resource && t.resource.upload(r, t, e)) e.samplerType !== ut.FLOAT && (this.hasIntegerTextures = !0);else {
            var i = t.realWidth,
                n = t.realHeight,
                o = r.gl;
            (e.width !== i || e.height !== n || e.dirtyId < 0) && (e.width = i, e.height = n, o.texImage2D(t.target, 0, e.internalFormat, i, n, 0, t.format, e.type, null));
          }
          t.dirtyStyleId !== e.dirtyStyleId && this.updateTextureStyle(t), e.dirtyId = t.dirtyId;
        }
      }, t.prototype.destroyTexture = function (t, e) {
        var r = this.gl;

        if ((t = t.castToBaseTexture())._glTextures[this.CONTEXT_UID] && (this.unbind(t), r.deleteTexture(t._glTextures[this.CONTEXT_UID].texture), t.off("dispose", this.destroyTexture, this), delete t._glTextures[this.CONTEXT_UID], !e)) {
          var i = this.managedTextures.indexOf(t);
          -1 !== i && kt(this.managedTextures, i, 1);
        }
      }, t.prototype.updateTextureStyle = function (t) {
        var e = t._glTextures[this.CONTEXT_UID];
        e && (t.mipmap !== dt.POW2 && 2 === this.webGLVersion || t.isPowerOfTwo ? e.mipmap = t.mipmap >= 1 : e.mipmap = !1, 2 === this.webGLVersion || t.isPowerOfTwo ? e.wrapMode = t.wrapMode : e.wrapMode = ct.CLAMP, t.resource && t.resource.style(this.renderer, t, e) || this.setStyle(t, e), e.dirtyStyleId = t.dirtyStyleId);
      }, t.prototype.setStyle = function (t, e) {
        var r = this.gl;

        if (e.mipmap && t.mipmap !== dt.ON_MANUAL && r.generateMipmap(t.target), r.texParameteri(t.target, r.TEXTURE_WRAP_S, e.wrapMode), r.texParameteri(t.target, r.TEXTURE_WRAP_T, e.wrapMode), e.mipmap) {
          r.texParameteri(t.target, r.TEXTURE_MIN_FILTER, t.scaleMode === lt.LINEAR ? r.LINEAR_MIPMAP_LINEAR : r.NEAREST_MIPMAP_NEAREST);
          var i = this.renderer.context.extensions.anisotropicFiltering;

          if (i && t.anisotropicLevel > 0 && t.scaleMode === lt.LINEAR) {
            var n = Math.min(t.anisotropicLevel, r.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT));
            r.texParameterf(t.target, i.TEXTURE_MAX_ANISOTROPY_EXT, n);
          }
        } else r.texParameteri(t.target, r.TEXTURE_MIN_FILTER, t.scaleMode === lt.LINEAR ? r.LINEAR : r.NEAREST);

        r.texParameteri(t.target, r.TEXTURE_MAG_FILTER, t.scaleMode === lt.LINEAR ? r.LINEAR : r.NEAREST);
      }, t.prototype.destroy = function () {
        this.renderer = null;
      }, t;
    }(),
        en = {
      __proto__: null,
      FilterSystem: Zr,
      BatchSystem: Qr,
      ContextSystem: ti,
      FramebufferSystem: ii,
      GeometrySystem: oi,
      MaskSystem: Li,
      ScissorSystem: Gi,
      StencilSystem: Bi,
      ProjectionSystem: Xi,
      RenderTextureSystem: ji,
      ShaderSystem: Zi,
      StateSystem: Ji,
      TextureGCSystem: Qi,
      TextureSystem: tn
    },
        rn = new ce(),
        nn = function (t) {
      function e(e, r) {
        void 0 === e && (e = rt.UNKNOWN);
        var i = t.call(this) || this;
        return r = Object.assign({}, Et.RENDER_OPTIONS, r), i.options = r, i.type = e, i.screen = new oe(0, 0, r.width, r.height), i.view = r.view || document.createElement("canvas"), i.resolution = r.resolution || Et.RESOLUTION, i.useContextAlpha = r.useContextAlpha, i.autoDensity = !!r.autoDensity, i.preserveDrawingBuffer = r.preserveDrawingBuffer, i.clearBeforeRender = r.clearBeforeRender, i._backgroundColor = 0, i._backgroundColorRgba = [0, 0, 0, 1], i._backgroundColorString = "#000000", i.backgroundColor = r.backgroundColor || i._backgroundColor, i.backgroundAlpha = r.backgroundAlpha, void 0 !== r.transparent && (Wt("6.0.0", "Option transparent is deprecated, please use backgroundAlpha instead."), i.useContextAlpha = r.transparent, i.backgroundAlpha = r.transparent ? 0 : 1), i._lastObjectRendered = null, i.plugins = {}, i;
      }

      return lr(e, t), e.prototype.initPlugins = function (t) {
        for (var e in t) this.plugins[e] = new t[e](this);
      }, Object.defineProperty(e.prototype, "width", {
        get: function () {
          return this.view.width;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "height", {
        get: function () {
          return this.view.height;
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.resize = function (t, e) {
        this.view.width = Math.round(t * this.resolution), this.view.height = Math.round(e * this.resolution);
        var r = this.view.width / this.resolution,
            i = this.view.height / this.resolution;
        this.screen.width = r, this.screen.height = i, this.autoDensity && (this.view.style.width = r + "px", this.view.style.height = i + "px"), this.emit("resize", r, i);
      }, e.prototype.generateTexture = function (t, e, r, i) {
        void 0 === e && (e = {}), "number" == typeof e && (Wt("6.1.0", "generateTexture options (scaleMode, resolution, region) are now object options."), e = {
          scaleMode: e,
          resolution: r,
          region: i
        });

        var n = e.region,
            o = function (t, e) {
          var r = {};

          for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (r[i] = t[i]);

          if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
            var n = 0;

            for (i = Object.getOwnPropertySymbols(t); n < i.length; n++) e.indexOf(i[n]) < 0 && (r[i[n]] = t[i[n]]);
          }

          return r;
        }(e, ["region"]);

        0 === (i = n || t.getLocalBounds(null, !0)).width && (i.width = 1), 0 === i.height && (i.height = 1);
        var s = wr.create(cr({
          width: i.width,
          height: i.height
        }, o));
        return rn.tx = -i.x, rn.ty = -i.y, this.render(t, {
          renderTexture: s,
          clear: !1,
          transform: rn,
          skipUpdateTransform: !!t.parent
        }), s;
      }, e.prototype.destroy = function (t) {
        for (var e in this.plugins) this.plugins[e].destroy(), this.plugins[e] = null;

        t && this.view.parentNode && this.view.parentNode.removeChild(this.view);
        var r = this;
        r.plugins = null, r.type = rt.UNKNOWN, r.view = null, r.screen = null, r._tempDisplayObjectParent = null, r.options = null, this._backgroundColorRgba = null, this._backgroundColorString = null, this._lastObjectRendered = null;
      }, Object.defineProperty(e.prototype, "backgroundColor", {
        get: function () {
          return this._backgroundColor;
        },
        set: function (t) {
          this._backgroundColor = t, this._backgroundColorString = Mt(t), Nt(t, this._backgroundColorRgba);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "backgroundAlpha", {
        get: function () {
          return this._backgroundColorRgba[3];
        },
        set: function (t) {
          this._backgroundColorRgba[3] = t;
        },
        enumerable: !1,
        configurable: !0
      }), e;
    }(bt()),
        on = function (t) {
      this.buffer = t || null, this.updateID = -1, this.byteLength = -1, this.refCount = 0;
    },
        sn = function () {
      function t(t) {
        this.renderer = t, this.managedBuffers = {}, this.boundBufferBases = {};
      }

      return t.prototype.destroy = function () {
        this.renderer = null;
      }, t.prototype.contextChange = function () {
        this.disposeAll(!0), this.gl = this.renderer.gl, this.CONTEXT_UID = this.renderer.CONTEXT_UID;
      }, t.prototype.bind = function (t) {
        var e = this.gl,
            r = this.CONTEXT_UID,
            i = t._glBuffers[r] || this.createGLBuffer(t);
        e.bindBuffer(t.type, i.buffer);
      }, t.prototype.bindBufferBase = function (t, e) {
        var r = this.gl,
            i = this.CONTEXT_UID;

        if (this.boundBufferBases[e] !== t) {
          var n = t._glBuffers[i] || this.createGLBuffer(t);
          this.boundBufferBases[e] = t, r.bindBufferBase(r.UNIFORM_BUFFER, e, n.buffer);
        }
      }, t.prototype.bindBufferRange = function (t, e, r) {
        var i = this.gl,
            n = this.CONTEXT_UID;
        r = r || 0;
        var o = t._glBuffers[n] || this.createGLBuffer(t);
        i.bindBufferRange(i.UNIFORM_BUFFER, e || 0, o.buffer, 256 * r, 256);
      }, t.prototype.update = function (t) {
        var e = this.gl,
            r = this.CONTEXT_UID,
            i = t._glBuffers[r];
        if (t._updateID !== i.updateID) if (i.updateID = t._updateID, e.bindBuffer(t.type, i.buffer), i.byteLength >= t.data.byteLength) e.bufferSubData(t.type, 0, t.data);else {
          var n = t.static ? e.STATIC_DRAW : e.DYNAMIC_DRAW;
          i.byteLength = t.data.byteLength, e.bufferData(t.type, t.data, n);
        }
      }, t.prototype.dispose = function (t, e) {
        if (this.managedBuffers[t.id]) {
          delete this.managedBuffers[t.id];
          var r = t._glBuffers[this.CONTEXT_UID],
              i = this.gl;
          t.disposeRunner.remove(this), r && (e || i.deleteBuffer(r.buffer), delete t._glBuffers[this.CONTEXT_UID]);
        }
      }, t.prototype.disposeAll = function (t) {
        for (var e = Object.keys(this.managedBuffers), r = 0; r < e.length; r++) this.dispose(this.managedBuffers[e[r]], t);
      }, t.prototype.createGLBuffer = function (t) {
        var e = this.CONTEXT_UID,
            r = this.gl;
        return t._glBuffers[e] = new on(r.createBuffer()), this.managedBuffers[t.id] = t, t.disposeRunner.add(this), t._glBuffers[e];
      }, t;
    }(),
        an = function (t) {
      function e(r) {
        var i = t.call(this, rt.WEBGL, r) || this;
        return r = i.options, i.gl = null, i.CONTEXT_UID = 0, i.runners = {
          destroy: new sr("destroy"),
          contextChange: new sr("contextChange"),
          reset: new sr("reset"),
          update: new sr("update"),
          postrender: new sr("postrender"),
          prerender: new sr("prerender"),
          resize: new sr("resize")
        }, i.runners.contextChange.add(i), i.globalUniforms = new Wr({
          projectionMatrix: new ce()
        }, !0), i.addSystem(Li, "mask").addSystem(ti, "context").addSystem(Ji, "state").addSystem(Zi, "shader").addSystem(tn, "texture").addSystem(sn, "buffer").addSystem(oi, "geometry").addSystem(ii, "framebuffer").addSystem(Gi, "scissor").addSystem(Bi, "stencil").addSystem(Xi, "projection").addSystem(Qi, "textureGC").addSystem(Zr, "filter").addSystem(ji, "renderTexture").addSystem(Qr, "batch"), i.initPlugins(e.__plugins), i.multisample = void 0, r.context ? i.context.initFromContext(r.context) : i.context.initFromOptions({
          alpha: !!i.useContextAlpha,
          antialias: r.antialias,
          premultipliedAlpha: i.useContextAlpha && "notMultiplied" !== i.useContextAlpha,
          stencil: !0,
          preserveDrawingBuffer: r.preserveDrawingBuffer,
          powerPreference: i.options.powerPreference
        }), i.renderingToScreen = !0, function (t) {
          var e;

          if (!It) {
            if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
              var r = ["\n %c %c %c PixiJS 6.3.2 - ✰ " + t + " ✰  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ \n\n", "background: #ff66a5; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff66a5; background: #030307; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "background: #ffc3dc; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;"];
              (e = globalThis.console).log.apply(e, r);
            } else globalThis.console && globalThis.console.log("PixiJS 6.3.2 - " + t + " - http://www.pixijs.com/");

            It = !0;
          }
        }(2 === i.context.webGLVersion ? "WebGL 2" : "WebGL 1"), i.resize(i.options.width, i.options.height), i;
      }

      return lr(e, t), e.create = function (t) {
        if (void 0 === St && (St = function () {
          var t = {
            stencil: !0,
            failIfMajorPerformanceCaveat: Et.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT
          };

          try {
            if (!globalThis.WebGLRenderingContext) return !1;
            var e = document.createElement("canvas"),
                r = e.getContext("webgl", t) || e.getContext("experimental-webgl", t),
                i = !(!r || !r.getContextAttributes().stencil);

            if (r) {
              var n = r.getExtension("WEBGL_lose_context");
              n && n.loseContext();
            }

            return r = null, i;
          } catch (t) {
            return !1;
          }
        }()), St) return new e(t);
        throw new Error('WebGL unsupported in this browser, use "pixi.js-legacy" for fallback canvas2d support.');
      }, e.prototype.contextChange = function () {
        var t,
            e = this.gl;

        if (1 === this.context.webGLVersion) {
          var r = e.getParameter(e.FRAMEBUFFER_BINDING);
          e.bindFramebuffer(e.FRAMEBUFFER, null), t = e.getParameter(e.SAMPLES), e.bindFramebuffer(e.FRAMEBUFFER, r);
        } else r = e.getParameter(e.DRAW_FRAMEBUFFER_BINDING), e.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), t = e.getParameter(e.SAMPLES), e.bindFramebuffer(e.DRAW_FRAMEBUFFER, r);

        t >= gt.HIGH ? this.multisample = gt.HIGH : t >= gt.MEDIUM ? this.multisample = gt.MEDIUM : t >= gt.LOW ? this.multisample = gt.LOW : this.multisample = gt.NONE;
      }, e.prototype.addSystem = function (t, e) {
        var r = new t(this);
        if (this[e]) throw new Error('Whoops! The name "' + e + '" is already in use');

        for (var i in this[e] = r, this.runners) this.runners[i].add(r);

        return this;
      }, e.prototype.render = function (t, e) {
        var r, i, n, o;

        if (e && (e instanceof wr ? (Wt("6.0.0", "Renderer#render arguments changed, use options instead."), r = e, i = arguments[2], n = arguments[3], o = arguments[4]) : (r = e.renderTexture, i = e.clear, n = e.transform, o = e.skipUpdateTransform)), this.renderingToScreen = !r, this.runners.prerender.emit(), this.emit("prerender"), this.projection.transform = n, !this.context.isLost) {
          if (r || (this._lastObjectRendered = t), !o) {
            var s = t.enableTempParent();
            t.updateTransform(), t.disableTempParent(s);
          }

          this.renderTexture.bind(r), this.batch.currentRenderer.start(), (void 0 !== i ? i : this.clearBeforeRender) && this.renderTexture.clear(), t.render(this), this.batch.currentRenderer.flush(), r && r.baseTexture.update(), this.runners.postrender.emit(), this.projection.transform = null, this.emit("postrender");
        }
      }, e.prototype.generateTexture = function (e, r, i, n) {
        void 0 === r && (r = {});
        var o = t.prototype.generateTexture.call(this, e, r, i, n);
        return this.framebuffer.blit(), o;
      }, e.prototype.resize = function (e, r) {
        t.prototype.resize.call(this, e, r), this.runners.resize.emit(this.screen.height, this.screen.width);
      }, e.prototype.reset = function () {
        return this.runners.reset.emit(), this;
      }, e.prototype.clear = function () {
        this.renderTexture.bind(), this.renderTexture.clear();
      }, e.prototype.destroy = function (e) {
        for (var r in this.runners.destroy.emit(), this.runners) this.runners[r].destroy();

        t.prototype.destroy.call(this, e), this.gl = null;
      }, Object.defineProperty(e.prototype, "extract", {
        get: function () {
          return Wt("6.0.0", "Renderer#extract has been deprecated, please use Renderer#plugins.extract instead."), this.plugins.extract;
        },
        enumerable: !1,
        configurable: !0
      }), e.registerPlugin = function (t, r) {
        e.__plugins = e.__plugins || {}, e.__plugins[t] = r;
      }, e;
    }(nn),
        hn = "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n",
        un = function () {
      this.texArray = null, this.blend = 0, this.type = ot.TRIANGLES, this.start = 0, this.size = 0, this.data = null;
    },
        ln = function () {
      function t() {
        this.elements = [], this.ids = [], this.count = 0;
      }

      return t.prototype.clear = function () {
        for (var t = 0; t < this.count; t++) this.elements[t] = null;

        this.count = 0;
      }, t;
    }(),
        cn = function () {
      function t(t) {
        "number" == typeof t ? this.rawBinaryData = new ArrayBuffer(t) : t instanceof Uint8Array ? this.rawBinaryData = t.buffer : this.rawBinaryData = t, this.uint32View = new Uint32Array(this.rawBinaryData), this.float32View = new Float32Array(this.rawBinaryData);
      }

      return Object.defineProperty(t.prototype, "int8View", {
        get: function () {
          return this._int8View || (this._int8View = new Int8Array(this.rawBinaryData)), this._int8View;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "uint8View", {
        get: function () {
          return this._uint8View || (this._uint8View = new Uint8Array(this.rawBinaryData)), this._uint8View;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "int16View", {
        get: function () {
          return this._int16View || (this._int16View = new Int16Array(this.rawBinaryData)), this._int16View;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "uint16View", {
        get: function () {
          return this._uint16View || (this._uint16View = new Uint16Array(this.rawBinaryData)), this._uint16View;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "int32View", {
        get: function () {
          return this._int32View || (this._int32View = new Int32Array(this.rawBinaryData)), this._int32View;
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.view = function (t) {
        return this[t + "View"];
      }, t.prototype.destroy = function () {
        this.rawBinaryData = null, this._int8View = null, this._uint8View = null, this._int16View = null, this._uint16View = null, this._int32View = null, this.uint32View = null, this.float32View = null;
      }, t.sizeOf = function (t) {
        switch (t) {
          case "int8":
          case "uint8":
            return 1;

          case "int16":
          case "uint16":
            return 2;

          case "int32":
          case "uint32":
          case "float32":
            return 4;

          default:
            throw new Error(t + " isn't a valid view type");
        }
      }, t;
    }(),
        dn = function (t) {
      function e(e) {
        var r = t.call(this, e) || this;
        return r.shaderGenerator = null, r.geometryClass = null, r.vertexSize = null, r.state = Ni.for2d(), r.size = 4 * Et.SPRITE_BATCH_SIZE, r._vertexCount = 0, r._indexCount = 0, r._bufferedElements = [], r._bufferedTextures = [], r._bufferSize = 0, r._shader = null, r._packedGeometries = [], r._packedGeometryPoolSize = 2, r._flushId = 0, r._aBuffers = {}, r._iBuffers = {}, r.MAX_TEXTURES = 1, r.renderer.on("prerender", r.onPrerender, r), e.runners.contextChange.add(r), r._dcIndex = 0, r._aIndex = 0, r._iIndex = 0, r._attributeBuffer = null, r._indexBuffer = null, r._tempBoundTextures = [], r;
      }

      return lr(e, t), e.prototype.contextChange = function () {
        var t = this.renderer.gl;
        Et.PREFER_ENV === et.WEBGL_LEGACY ? this.MAX_TEXTURES = 1 : (this.MAX_TEXTURES = Math.min(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS), Et.SPRITE_MAX_TEXTURES), this.MAX_TEXTURES = function (t, e) {
          if (0 === t) throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");

          for (var r = e.createShader(e.FRAGMENT_SHADER);;) {
            var i = Ri.replace(/%forloop%/gi, Ai(t));
            if (e.shaderSource(r, i), e.compileShader(r), e.getShaderParameter(r, e.COMPILE_STATUS)) break;
            t = t / 2 | 0;
          }

          return t;
        }(this.MAX_TEXTURES, t)), this._shader = this.shaderGenerator.generateShader(this.MAX_TEXTURES);

        for (var e = 0; e < this._packedGeometryPoolSize; e++) this._packedGeometries[e] = new this.geometryClass();

        this.initFlushBuffers();
      }, e.prototype.initFlushBuffers = function () {
        for (var t = e._drawCallPool, r = e._textureArrayPool, i = this.size / 4, n = Math.floor(i / this.MAX_TEXTURES) + 1; t.length < i;) t.push(new un());

        for (; r.length < n;) r.push(new ln());

        for (var o = 0; o < this.MAX_TEXTURES; o++) this._tempBoundTextures[o] = null;
      }, e.prototype.onPrerender = function () {
        this._flushId = 0;
      }, e.prototype.render = function (t) {
        t._texture.valid && (this._vertexCount + t.vertexData.length / 2 > this.size && this.flush(), this._vertexCount += t.vertexData.length / 2, this._indexCount += t.indices.length, this._bufferedTextures[this._bufferSize] = t._texture.baseTexture, this._bufferedElements[this._bufferSize++] = t);
      }, e.prototype.buildTexturesAndDrawCalls = function () {
        var t = this._bufferedTextures,
            r = this.MAX_TEXTURES,
            i = e._textureArrayPool,
            n = this.renderer.batch,
            o = this._tempBoundTextures,
            s = this.renderer.textureGC.count,
            a = ++_r._globalBatch,
            h = 0,
            u = i[0],
            l = 0;
        n.copyBoundTextures(o, r);

        for (var c = 0; c < this._bufferSize; ++c) {
          var d = t[c];
          t[c] = null, d._batchEnabled !== a && (u.count >= r && (n.boundArray(u, o, a, r), this.buildDrawCalls(u, l, c), l = c, u = i[++h], ++a), d._batchEnabled = a, d.touched = s, u.elements[u.count++] = d);
        }

        for (u.count > 0 && (n.boundArray(u, o, a, r), this.buildDrawCalls(u, l, this._bufferSize), ++h, ++a), c = 0; c < o.length; c++) o[c] = null;

        _r._globalBatch = a;
      }, e.prototype.buildDrawCalls = function (t, r, i) {
        var n = this,
            o = n._bufferedElements,
            s = n._attributeBuffer,
            a = n._indexBuffer,
            h = n.vertexSize,
            u = e._drawCallPool,
            l = this._dcIndex,
            c = this._aIndex,
            d = this._iIndex,
            f = u[l];
        f.start = this._iIndex, f.texArray = t;

        for (var p = r; p < i; ++p) {
          var _ = o[p],
              v = _._texture.baseTexture,
              m = wt[v.alphaMode ? 1 : 0][_.blendMode];
          o[p] = null, r < p && f.blend !== m && (f.size = d - f.start, r = p, (f = u[++l]).texArray = t, f.start = d), this.packInterleavedGeometry(_, s, a, c, d), c += _.vertexData.length / 2 * h, d += _.indices.length, f.blend = m;
        }

        r < i && (f.size = d - f.start, ++l), this._dcIndex = l, this._aIndex = c, this._iIndex = d;
      }, e.prototype.bindAndClearTexArray = function (t) {
        for (var e = this.renderer.texture, r = 0; r < t.count; r++) e.bind(t.elements[r], t.ids[r]), t.elements[r] = null;

        t.count = 0;
      }, e.prototype.updateGeometry = function () {
        var t = this,
            e = t._packedGeometries,
            r = t._attributeBuffer,
            i = t._indexBuffer;
        Et.CAN_UPLOAD_SAME_BUFFER ? (e[this._flushId]._buffer.update(r.rawBinaryData), e[this._flushId]._indexBuffer.update(i), this.renderer.geometry.updateBuffers()) : (this._packedGeometryPoolSize <= this._flushId && (this._packedGeometryPoolSize++, e[this._flushId] = new this.geometryClass()), e[this._flushId]._buffer.update(r.rawBinaryData), e[this._flushId]._indexBuffer.update(i), this.renderer.geometry.bind(e[this._flushId]), this.renderer.geometry.updateBuffers(), this._flushId++);
      }, e.prototype.drawBatches = function () {
        for (var t = this._dcIndex, r = this.renderer, i = r.gl, n = r.state, o = e._drawCallPool, s = null, a = 0; a < t; a++) {
          var h = o[a],
              u = h.texArray,
              l = h.type,
              c = h.size,
              d = h.start,
              f = h.blend;
          s !== u && (s = u, this.bindAndClearTexArray(u)), this.state.blendMode = f, n.set(this.state), i.drawElements(l, c, i.UNSIGNED_SHORT, 2 * d);
        }
      }, e.prototype.flush = function () {
        0 !== this._vertexCount && (this._attributeBuffer = this.getAttributeBuffer(this._vertexCount), this._indexBuffer = this.getIndexBuffer(this._indexCount), this._aIndex = 0, this._iIndex = 0, this._dcIndex = 0, this.buildTexturesAndDrawCalls(), this.updateGeometry(), this.drawBatches(), this._bufferSize = 0, this._vertexCount = 0, this._indexCount = 0);
      }, e.prototype.start = function () {
        this.renderer.state.set(this.state), this.renderer.texture.ensureSamplerType(this.MAX_TEXTURES), this.renderer.shader.bind(this._shader), Et.CAN_UPLOAD_SAME_BUFFER && this.renderer.geometry.bind(this._packedGeometries[this._flushId]);
      }, e.prototype.stop = function () {
        this.flush();
      }, e.prototype.destroy = function () {
        for (var e = 0; e < this._packedGeometryPoolSize; e++) this._packedGeometries[e] && this._packedGeometries[e].destroy();

        this.renderer.off("prerender", this.onPrerender, this), this._aBuffers = null, this._iBuffers = null, this._packedGeometries = null, this._attributeBuffer = null, this._indexBuffer = null, this._shader && (this._shader.destroy(), this._shader = null), t.prototype.destroy.call(this);
      }, e.prototype.getAttributeBuffer = function (t) {
        var e = Gt(Math.ceil(t / 8)),
            r = Xt(e),
            i = 8 * e;
        this._aBuffers.length <= r && (this._iBuffers.length = r + 1);
        var n = this._aBuffers[i];
        return n || (this._aBuffers[i] = n = new cn(i * this.vertexSize * 4)), n;
      }, e.prototype.getIndexBuffer = function (t) {
        var e = Gt(Math.ceil(t / 12)),
            r = Xt(e),
            i = 12 * e;
        this._iBuffers.length <= r && (this._iBuffers.length = r + 1);
        var n = this._iBuffers[r];
        return n || (this._iBuffers[r] = n = new Uint16Array(i)), n;
      }, e.prototype.packInterleavedGeometry = function (t, e, r, i, n) {
        for (var o = e.uint32View, s = e.float32View, a = i / this.vertexSize, h = t.uvs, u = t.indices, l = t.vertexData, c = t._texture.baseTexture._batchLocation, d = Math.min(t.worldAlpha, 1), f = d < 1 && t._texture.baseTexture.alphaMode ? Lt(t._tintRGB, d) : t._tintRGB + (255 * d << 24), p = 0; p < l.length; p += 2) s[i++] = l[p], s[i++] = l[p + 1], s[i++] = h[p], s[i++] = h[p + 1], o[i++] = f, s[i++] = c;

        for (p = 0; p < u.length; p++) r[n++] = a + u[p];
      }, e._drawCallPool = [], e._textureArrayPool = [], e;
    }(Jr),
        fn = function () {
      function t(t, e) {
        if (this.vertexSrc = t, this.fragTemplate = e, this.programCache = {}, this.defaultGroupCache = {}, e.indexOf("%count%") < 0) throw new Error('Fragment template must contain "%count%".');
        if (e.indexOf("%forloop%") < 0) throw new Error('Fragment template must contain "%forloop%".');
      }

      return t.prototype.generateShader = function (t) {
        if (!this.programCache[t]) {
          for (var e = new Int32Array(t), r = 0; r < t; r++) e[r] = r;

          this.defaultGroupCache[t] = Wr.from({
            uSamplers: e
          }, !0);
          var i = this.fragTemplate;
          i = (i = i.replace(/%count%/gi, "" + t)).replace(/%forloop%/gi, this.generateSampleSrc(t)), this.programCache[t] = new Ii(this.vertexSrc, i);
        }

        var n = {
          tint: new Float32Array([1, 1, 1, 1]),
          translationMatrix: new ce(),
          default: this.defaultGroupCache[t]
        };
        return new Pi(this.programCache[t], n);
      }, t.prototype.generateSampleSrc = function (t) {
        var e = "";
        e += "\n", e += "\n";

        for (var r = 0; r < t; r++) r > 0 && (e += "\nelse "), r < t - 1 && (e += "if(vTextureId < " + r + ".5)"), e += "\n{", e += "\n\tcolor = texture2D(uSamplers[" + r + "], vTextureCoord);", e += "\n}";

        return (e += "\n") + "\n";
      }, t;
    }(),
        pn = function (t) {
      function e(e) {
        void 0 === e && (e = !1);
        var r = t.call(this) || this;
        return r._buffer = new Ur(null, e, !1), r._indexBuffer = new Ur(null, e, !0), r.addAttribute("aVertexPosition", r._buffer, 2, !1, ht.FLOAT).addAttribute("aTextureCoord", r._buffer, 2, !1, ht.FLOAT).addAttribute("aColor", r._buffer, 4, !0, ht.UNSIGNED_BYTE).addAttribute("aTextureId", r._buffer, 1, !0, ht.FLOAT).addIndex(r._indexBuffer), r;
      }

      return lr(e, t), e;
    }(Hr),
        _n = "precision highp float;\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform vec4 tint;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vTextureId = aTextureId;\n    vColor = aColor * tint;\n}\n",
        vn = "varying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\nuniform sampler2D uSamplers[%count%];\n\nvoid main(void){\n    vec4 color;\n    %forloop%\n    gl_FragColor = color * vColor;\n}\n",
        mn = function () {
      function t() {}

      return t.create = function (t) {
        var e = Object.assign({
          vertex: _n,
          fragment: vn,
          geometryClass: pn,
          vertexSize: 6
        }, t),
            r = e.vertex,
            i = e.fragment,
            n = e.vertexSize,
            o = e.geometryClass;
        return function (t) {
          function e(e) {
            var s = t.call(this, e) || this;
            return s.shaderGenerator = new fn(r, i), s.geometryClass = o, s.vertexSize = n, s;
          }

          return lr(e, t), e;
        }(dn);
      }, Object.defineProperty(t, "defaultVertexSrc", {
        get: function () {
          return _n;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t, "defaultFragmentTemplate", {
        get: function () {
          return vn;
        },
        enumerable: !1,
        configurable: !0
      }), t;
    }(),
        gn = mn.create(),
        yn = {},
        En = function (t) {
      Object.defineProperty(yn, t, {
        get: function () {
          return Wt("6.0.0", "PIXI.systems." + t + " has moved to PIXI." + t), Ar[t];
        }
      });
    };

    for (var Tn in Ar) En(Tn);

    var bn = {},
        xn = function (t) {
      Object.defineProperty(bn, t, {
        get: function () {
          return Wt("6.0.0", "PIXI.resources." + t + " has moved to PIXI." + t), en[t];
        }
      });
    };

    for (var Tn in en) xn(Tn);

    var Rn = function () {
      function t(e) {
        var r = this;
        this.stage = new We(), e = Object.assign({
          forceCanvas: !1
        }, e), this.renderer = function (t) {
          return an.create(t);
        }(e), t._plugins.forEach(function (t) {
          t.init.call(r, e);
        });
      }

      return t.registerPlugin = function (e) {
        t._plugins.push(e);
      }, t.prototype.render = function () {
        this.renderer.render(this.stage);
      }, Object.defineProperty(t.prototype, "view", {
        get: function () {
          return this.renderer.view;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "screen", {
        get: function () {
          return this.renderer.screen;
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.destroy = function (e, r) {
        var i = this,
            n = t._plugins.slice(0);

        n.reverse(), n.forEach(function (t) {
          t.destroy.call(i);
        }), this.stage.destroy(r), this.stage = null, this.renderer.destroy(e), this.renderer = null;
      }, t._plugins = [], t;
    }(),
        An = function () {
      function t() {}

      return t.init = function (t) {
        var e = this;
        Object.defineProperty(this, "resizeTo", {
          set: function (t) {
            globalThis.removeEventListener("resize", this.queueResize), this._resizeTo = t, t && (globalThis.addEventListener("resize", this.queueResize), this.resize());
          },
          get: function () {
            return this._resizeTo;
          }
        }), this.queueResize = function () {
          e._resizeTo && (e.cancelResize(), e._resizeId = requestAnimationFrame(function () {
            return e.resize();
          }));
        }, this.cancelResize = function () {
          e._resizeId && (cancelAnimationFrame(e._resizeId), e._resizeId = null);
        }, this.resize = function () {
          if (e._resizeTo) {
            var t, r;
            if (e.cancelResize(), e._resizeTo === globalThis.window) t = globalThis.innerWidth, r = globalThis.innerHeight;else {
              var i = e._resizeTo;
              t = i.clientWidth, r = i.clientHeight;
            }
            e.renderer.resize(t, r);
          }
        }, this._resizeId = null, this._resizeTo = null, this.resizeTo = t.resizeTo || null;
      }, t.destroy = function () {
        globalThis.removeEventListener("resize", this.queueResize), this.cancelResize(), this.cancelResize = null, this.queueResize = null, this.resizeTo = null, this.resize = null;
      }, t;
    }();

    Rn.registerPlugin(An);

    var On = new oe(),
        Sn = function () {
      function t(t) {
        this.renderer = t;
      }

      return t.prototype.image = function (t, e, r) {
        var i = new Image();
        return i.src = this.base64(t, e, r), i;
      }, t.prototype.base64 = function (t, e, r) {
        return this.canvas(t).toDataURL(e, r);
      }, t.prototype.canvas = function (e) {
        var r,
            i,
            n,
            o = this.renderer,
            s = !1,
            a = !1;
        e && (e instanceof wr ? n = e : (n = this.renderer.generateTexture(e), a = !0)), n ? (r = n.baseTexture.resolution, i = n.frame, s = !1, o.renderTexture.bind(n)) : (r = this.renderer.resolution, s = !0, (i = On).width = this.renderer.width, i.height = this.renderer.height, o.renderTexture.bind(null));
        var h = Math.floor(i.width * r + 1e-4),
            u = Math.floor(i.height * r + 1e-4),
            l = new Jt(h, u, 1),
            c = new Uint8Array(4 * h * u),
            d = o.gl;
        d.readPixels(i.x * r, i.y * r, h, u, d.RGBA, d.UNSIGNED_BYTE, c);
        var f = l.context.getImageData(0, 0, h, u);

        if (t.arrayPostDivide(c, f.data), l.context.putImageData(f, 0, 0), s) {
          var p = new Jt(l.width, l.height, 1);
          p.context.scale(1, -1), p.context.drawImage(l.canvas, 0, -u), l.destroy(), l = p;
        }

        return a && n.destroy(!0), l.canvas;
      }, t.prototype.pixels = function (e) {
        var r,
            i,
            n,
            o = this.renderer,
            s = !1;
        e && (e instanceof wr ? n = e : (n = this.renderer.generateTexture(e), s = !0)), n ? (r = n.baseTexture.resolution, i = n.frame, o.renderTexture.bind(n)) : (r = o.resolution, (i = On).width = o.width, i.height = o.height, o.renderTexture.bind(null));
        var a = i.width * r,
            h = i.height * r,
            u = new Uint8Array(4 * a * h),
            l = o.gl;
        return l.readPixels(i.x * r, i.y * r, a, h, l.RGBA, l.UNSIGNED_BYTE, u), s && n.destroy(!0), t.arrayPostDivide(u, u), u;
      }, t.prototype.destroy = function () {
        this.renderer = null;
      }, t.arrayPostDivide = function (t, e) {
        for (var r = 0; r < t.length; r += 4) {
          var i = e[r + 3] = t[r + 3];
          0 !== i ? (e[r] = Math.round(Math.min(255 * t[r] / i, 255)), e[r + 1] = Math.round(Math.min(255 * t[r + 1] / i, 255)), e[r + 2] = Math.round(Math.min(255 * t[r + 2] / i, 255))) : (e[r] = t[r], e[r + 1] = t[r + 1], e[r + 2] = t[r + 2]);
        }
      }, t;
    }(),
        In = function () {
      function t(t, e, r) {
        void 0 === e && (e = !1), this._fn = t, this._once = e, this._thisArg = r, this._next = this._prev = this._owner = null;
      }

      return t.prototype.detach = function () {
        return null !== this._owner && (this._owner.detach(this), !0);
      }, t;
    }();

    function Pn(t, e) {
      return t._head ? (t._tail._next = e, e._prev = t._tail, t._tail = e) : (t._head = e, t._tail = e), e._owner = t, e;
    }

    var Nn,
        Mn = function () {
      function t() {
        this._head = this._tail = void 0;
      }

      return t.prototype.handlers = function (t) {
        void 0 === t && (t = !1);
        var e = this._head;
        if (t) return !!e;

        for (var r = []; e;) r.push(e), e = e._next;

        return r;
      }, t.prototype.has = function (t) {
        if (!(t instanceof In)) throw new Error("MiniSignal#has(): First arg must be a SignalBinding object.");
        return t._owner === this;
      }, t.prototype.dispatch = function () {
        for (var t = arguments, e = [], r = 0; r < arguments.length; r++) e[r] = t[r];

        var i = this._head;
        if (!i) return !1;

        for (; i;) i._once && this.detach(i), i._fn.apply(i._thisArg, e), i = i._next;

        return !0;
      }, t.prototype.add = function (t, e) {
        if (void 0 === e && (e = null), "function" != typeof t) throw new Error("MiniSignal#add(): First arg must be a Function.");
        return Pn(this, new In(t, !1, e));
      }, t.prototype.once = function (t, e) {
        if (void 0 === e && (e = null), "function" != typeof t) throw new Error("MiniSignal#once(): First arg must be a Function.");
        return Pn(this, new In(t, !0, e));
      }, t.prototype.detach = function (t) {
        if (!(t instanceof In)) throw new Error("MiniSignal#detach(): First arg must be a SignalBinding object.");
        return t._owner !== this || (t._prev && (t._prev._next = t._next), t._next && (t._next._prev = t._prev), t === this._head ? (this._head = t._next, null === t._next && (this._tail = null)) : t === this._tail && (this._tail = t._prev, this._tail._next = null), t._owner = null), this;
      }, t.prototype.detachAll = function () {
        var t = this._head;
        if (!t) return this;

        for (this._head = this._tail = null; t;) t._owner = null, t = t._next;

        return this;
      }, t;
    }();

    function Dn(t, e) {
      e = e || {};

      for (var r = {
        key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
        q: {
          name: "queryKey",
          parser: /(?:^|&)([^&=]*)=?([^&]*)/g
        },
        parser: {
          strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
          loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
        }
      }, i = r.parser[e.strictMode ? "strict" : "loose"].exec(t), n = {}, o = 14; o--;) n[r.key[o]] = i[o] || "";

      return n[r.q.name] = {}, n[r.key[12]].replace(r.q.parser, function (t, e, i) {
        e && (n[r.q.name][e] = i);
      }), n;
    }

    var wn = null;

    function Cn() {}

    function Ln(t, e, r) {
      e && 0 === e.indexOf(".") && (e = e.substring(1)), e && (t[e] = r);
    }

    function Fn(t) {
      return t.toString().replace("object ", "");
    }

    var Un = function () {
      function t(e, r, i) {
        if (this._dequeue = Cn, this._onLoadBinding = null, this._elementTimer = 0, this._boundComplete = null, this._boundOnError = null, this._boundOnProgress = null, this._boundOnTimeout = null, this._boundXhrOnError = null, this._boundXhrOnTimeout = null, this._boundXhrOnAbort = null, this._boundXhrOnLoad = null, "string" != typeof e || "string" != typeof r) throw new Error("Both name and url are required for constructing a resource.");
        i = i || {}, this._flags = 0, this._setFlag(t.STATUS_FLAGS.DATA_URL, 0 === r.indexOf("data:")), this.name = e, this.url = r, this.extension = this._getExtension(), this.data = null, this.crossOrigin = !0 === i.crossOrigin ? "anonymous" : i.crossOrigin, this.timeout = i.timeout || 0, this.loadType = i.loadType || this._determineLoadType(), this.xhrType = i.xhrType, this.metadata = i.metadata || {}, this.error = null, this.xhr = null, this.children = [], this.type = t.TYPE.UNKNOWN, this.progressChunk = 0, this._dequeue = Cn, this._onLoadBinding = null, this._elementTimer = 0, this._boundComplete = this.complete.bind(this), this._boundOnError = this._onError.bind(this), this._boundOnProgress = this._onProgress.bind(this), this._boundOnTimeout = this._onTimeout.bind(this), this._boundXhrOnError = this._xhrOnError.bind(this), this._boundXhrOnTimeout = this._xhrOnTimeout.bind(this), this._boundXhrOnAbort = this._xhrOnAbort.bind(this), this._boundXhrOnLoad = this._xhrOnLoad.bind(this), this.onStart = new Mn(), this.onProgress = new Mn(), this.onComplete = new Mn(), this.onAfterMiddleware = new Mn();
      }

      return t.setExtensionLoadType = function (e, r) {
        Ln(t._loadTypeMap, e, r);
      }, t.setExtensionXhrType = function (e, r) {
        Ln(t._xhrTypeMap, e, r);
      }, Object.defineProperty(t.prototype, "isDataUrl", {
        get: function () {
          return this._hasFlag(t.STATUS_FLAGS.DATA_URL);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "isComplete", {
        get: function () {
          return this._hasFlag(t.STATUS_FLAGS.COMPLETE);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "isLoading", {
        get: function () {
          return this._hasFlag(t.STATUS_FLAGS.LOADING);
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.complete = function () {
        this._clearEvents(), this._finish();
      }, t.prototype.abort = function (e) {
        if (!this.error) {
          if (this.error = new Error(e), this._clearEvents(), this.xhr) this.xhr.abort();else if (this.xdr) this.xdr.abort();else if (this.data) if (this.data.src) this.data.src = t.EMPTY_GIF;else for (; this.data.firstChild;) this.data.removeChild(this.data.firstChild);

          this._finish();
        }
      }, t.prototype.load = function (e) {
        var r = this;
        if (!this.isLoading) if (this.isComplete) e && setTimeout(function () {
          return e(r);
        }, 1);else switch (e && this.onComplete.once(e), this._setFlag(t.STATUS_FLAGS.LOADING, !0), this.onStart.dispatch(this), !1 !== this.crossOrigin && "string" == typeof this.crossOrigin || (this.crossOrigin = this._determineCrossOrigin(this.url)), this.loadType) {
          case t.LOAD_TYPE.IMAGE:
            this.type = t.TYPE.IMAGE, this._loadElement("image");
            break;

          case t.LOAD_TYPE.AUDIO:
            this.type = t.TYPE.AUDIO, this._loadSourceElement("audio");
            break;

          case t.LOAD_TYPE.VIDEO:
            this.type = t.TYPE.VIDEO, this._loadSourceElement("video");
            break;

          case t.LOAD_TYPE.XHR:
          default:
            void 0 === Nn && (Nn = !(!globalThis.XDomainRequest || "withCredentials" in new XMLHttpRequest())), Nn && this.crossOrigin ? this._loadXdr() : this._loadXhr();
        }
      }, t.prototype._hasFlag = function (t) {
        return 0 != (this._flags & t);
      }, t.prototype._setFlag = function (t, e) {
        this._flags = e ? this._flags | t : this._flags & ~t;
      }, t.prototype._clearEvents = function () {
        clearTimeout(this._elementTimer), this.data && this.data.removeEventListener && (this.data.removeEventListener("error", this._boundOnError, !1), this.data.removeEventListener("load", this._boundComplete, !1), this.data.removeEventListener("progress", this._boundOnProgress, !1), this.data.removeEventListener("canplaythrough", this._boundComplete, !1)), this.xhr && (this.xhr.removeEventListener ? (this.xhr.removeEventListener("error", this._boundXhrOnError, !1), this.xhr.removeEventListener("timeout", this._boundXhrOnTimeout, !1), this.xhr.removeEventListener("abort", this._boundXhrOnAbort, !1), this.xhr.removeEventListener("progress", this._boundOnProgress, !1), this.xhr.removeEventListener("load", this._boundXhrOnLoad, !1)) : (this.xhr.onerror = null, this.xhr.ontimeout = null, this.xhr.onprogress = null, this.xhr.onload = null));
      }, t.prototype._finish = function () {
        if (this.isComplete) throw new Error("Complete called again for an already completed resource.");
        this._setFlag(t.STATUS_FLAGS.COMPLETE, !0), this._setFlag(t.STATUS_FLAGS.LOADING, !1), this.onComplete.dispatch(this);
      }, t.prototype._loadElement = function (t) {
        this.metadata.loadElement ? this.data = this.metadata.loadElement : "image" === t && void 0 !== globalThis.Image ? this.data = new Image() : this.data = document.createElement(t), this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), this.metadata.skipSource || (this.data.src = this.url), this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1), this.timeout && (this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout));
      }, t.prototype._loadSourceElement = function (t) {
        if (this.metadata.loadElement ? this.data = this.metadata.loadElement : "audio" === t && void 0 !== globalThis.Audio ? this.data = new Audio() : this.data = document.createElement(t), null !== this.data) {
          if (this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), !this.metadata.skipSource) if (navigator.isCocoonJS) this.data.src = Array.isArray(this.url) ? this.url[0] : this.url;else if (Array.isArray(this.url)) for (var e = this.metadata.mimeType, r = 0; r < this.url.length; ++r) this.data.appendChild(this._createSource(t, this.url[r], Array.isArray(e) ? e[r] : e));else e = this.metadata.mimeType, this.data.appendChild(this._createSource(t, this.url, Array.isArray(e) ? e[0] : e));
          this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1), this.data.addEventListener("canplaythrough", this._boundComplete, !1), this.data.load(), this.timeout && (this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout));
        } else this.abort("Unsupported element: " + t);
      }, t.prototype._loadXhr = function () {
        "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
        var e = this.xhr = new XMLHttpRequest();
        "use-credentials" === this.crossOrigin && (e.withCredentials = !0), e.open("GET", this.url, !0), e.timeout = this.timeout, this.xhrType === t.XHR_RESPONSE_TYPE.JSON || this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT ? e.responseType = t.XHR_RESPONSE_TYPE.TEXT : e.responseType = this.xhrType, e.addEventListener("error", this._boundXhrOnError, !1), e.addEventListener("timeout", this._boundXhrOnTimeout, !1), e.addEventListener("abort", this._boundXhrOnAbort, !1), e.addEventListener("progress", this._boundOnProgress, !1), e.addEventListener("load", this._boundXhrOnLoad, !1), e.send();
      }, t.prototype._loadXdr = function () {
        "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
        var t = this.xhr = new globalThis.XDomainRequest();
        t.timeout = this.timeout || 5e3, t.onerror = this._boundXhrOnError, t.ontimeout = this._boundXhrOnTimeout, t.onprogress = this._boundOnProgress, t.onload = this._boundXhrOnLoad, t.open("GET", this.url, !0), setTimeout(function () {
          return t.send();
        }, 1);
      }, t.prototype._createSource = function (t, e, r) {
        r || (r = t + "/" + this._getExtension(e));
        var i = document.createElement("source");
        return i.src = e, i.type = r, i;
      }, t.prototype._onError = function (t) {
        this.abort("Failed to load element using: " + t.target.nodeName);
      }, t.prototype._onProgress = function (t) {
        t && t.lengthComputable && this.onProgress.dispatch(this, t.loaded / t.total);
      }, t.prototype._onTimeout = function () {
        this.abort("Load timed out.");
      }, t.prototype._xhrOnError = function () {
        var t = this.xhr;
        this.abort(Fn(t) + " Request failed. Status: " + t.status + ', text: "' + t.statusText + '"');
      }, t.prototype._xhrOnTimeout = function () {
        var t = this.xhr;
        this.abort(Fn(t) + " Request timed out.");
      }, t.prototype._xhrOnAbort = function () {
        var t = this.xhr;
        this.abort(Fn(t) + " Request was aborted by the user.");
      }, t.prototype._xhrOnLoad = function () {
        var e = this.xhr,
            r = "",
            i = void 0 === e.status ? 200 : e.status;

        if ("" !== e.responseType && "text" !== e.responseType && void 0 !== e.responseType || (r = e.responseText), 0 === i && (r.length > 0 || e.responseType === t.XHR_RESPONSE_TYPE.BUFFER) ? i = 200 : 1223 === i && (i = 204), 2 == (i / 100 | 0)) {
          if (this.xhrType === t.XHR_RESPONSE_TYPE.TEXT) this.data = r, this.type = t.TYPE.TEXT;else if (this.xhrType === t.XHR_RESPONSE_TYPE.JSON) try {
            this.data = JSON.parse(r), this.type = t.TYPE.JSON;
          } catch (t) {
            return void this.abort("Error trying to parse loaded json: " + t);
          } else if (this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT) try {
            if (globalThis.DOMParser) {
              var n = new DOMParser();
              this.data = n.parseFromString(r, "text/xml");
            } else {
              var o = document.createElement("div");
              o.innerHTML = r, this.data = o;
            }

            this.type = t.TYPE.XML;
          } catch (t) {
            return void this.abort("Error trying to parse loaded xml: " + t);
          } else this.data = e.response || r;
          this.complete();
        } else this.abort("[" + e.status + "] " + e.statusText + ": " + e.responseURL);
      }, t.prototype._determineCrossOrigin = function (t, e) {
        if (0 === t.indexOf("data:")) return "";
        if (globalThis.origin !== globalThis.location.origin) return "anonymous";
        e = e || globalThis.location, wn || (wn = document.createElement("a")), wn.href = t;
        var r = Dn(wn.href, {
          strictMode: !0
        }),
            i = !r.port && "" === e.port || r.port === e.port,
            n = r.protocol ? r.protocol + ":" : "";
        return r.host === e.hostname && i && n === e.protocol ? "" : "anonymous";
      }, t.prototype._determineXhrType = function () {
        return t._xhrTypeMap[this.extension] || t.XHR_RESPONSE_TYPE.TEXT;
      }, t.prototype._determineLoadType = function () {
        return t._loadTypeMap[this.extension] || t.LOAD_TYPE.XHR;
      }, t.prototype._getExtension = function (t) {
        void 0 === t && (t = this.url);
        var e = "";

        if (this.isDataUrl) {
          var r = t.indexOf("/");
          e = t.substring(r + 1, t.indexOf(";", r));
        } else {
          var i = t.indexOf("?"),
              n = t.indexOf("#"),
              o = Math.min(i > -1 ? i : t.length, n > -1 ? n : t.length);
          e = (t = t.substring(0, o)).substring(t.lastIndexOf(".") + 1);
        }

        return e.toLowerCase();
      }, t.prototype._getMimeFromXhrType = function (e) {
        switch (e) {
          case t.XHR_RESPONSE_TYPE.BUFFER:
            return "application/octet-binary";

          case t.XHR_RESPONSE_TYPE.BLOB:
            return "application/blob";

          case t.XHR_RESPONSE_TYPE.DOCUMENT:
            return "application/xml";

          case t.XHR_RESPONSE_TYPE.JSON:
            return "application/json";

          case t.XHR_RESPONSE_TYPE.DEFAULT:
          case t.XHR_RESPONSE_TYPE.TEXT:
          default:
            return "text/plain";
        }
      }, t;
    }();

    function Gn() {}

    function Bn(t) {
      return function () {
        for (var e = arguments, r = [], i = 0; i < arguments.length; i++) r[i] = e[i];

        if (null === t) throw new Error("Callback was already called.");
        var n = t;
        t = null, n.apply(this, r);
      };
    }

    !function (t) {
      var e, r, i, n;
      (e = t.STATUS_FLAGS || (t.STATUS_FLAGS = {}))[e.NONE = 0] = "NONE", e[e.DATA_URL = 1] = "DATA_URL", e[e.COMPLETE = 2] = "COMPLETE", e[e.LOADING = 4] = "LOADING", (r = t.TYPE || (t.TYPE = {}))[r.UNKNOWN = 0] = "UNKNOWN", r[r.JSON = 1] = "JSON", r[r.XML = 2] = "XML", r[r.IMAGE = 3] = "IMAGE", r[r.AUDIO = 4] = "AUDIO", r[r.VIDEO = 5] = "VIDEO", r[r.TEXT = 6] = "TEXT", (i = t.LOAD_TYPE || (t.LOAD_TYPE = {}))[i.XHR = 1] = "XHR", i[i.IMAGE = 2] = "IMAGE", i[i.AUDIO = 3] = "AUDIO", i[i.VIDEO = 4] = "VIDEO", (n = t.XHR_RESPONSE_TYPE || (t.XHR_RESPONSE_TYPE = {})).DEFAULT = "text", n.BUFFER = "arraybuffer", n.BLOB = "blob", n.DOCUMENT = "document", n.JSON = "json", n.TEXT = "text", t._loadTypeMap = {
        gif: t.LOAD_TYPE.IMAGE,
        png: t.LOAD_TYPE.IMAGE,
        bmp: t.LOAD_TYPE.IMAGE,
        jpg: t.LOAD_TYPE.IMAGE,
        jpeg: t.LOAD_TYPE.IMAGE,
        tif: t.LOAD_TYPE.IMAGE,
        tiff: t.LOAD_TYPE.IMAGE,
        webp: t.LOAD_TYPE.IMAGE,
        tga: t.LOAD_TYPE.IMAGE,
        svg: t.LOAD_TYPE.IMAGE,
        "svg+xml": t.LOAD_TYPE.IMAGE,
        mp3: t.LOAD_TYPE.AUDIO,
        ogg: t.LOAD_TYPE.AUDIO,
        wav: t.LOAD_TYPE.AUDIO,
        mp4: t.LOAD_TYPE.VIDEO,
        webm: t.LOAD_TYPE.VIDEO
      }, t._xhrTypeMap = {
        xhtml: t.XHR_RESPONSE_TYPE.DOCUMENT,
        html: t.XHR_RESPONSE_TYPE.DOCUMENT,
        htm: t.XHR_RESPONSE_TYPE.DOCUMENT,
        xml: t.XHR_RESPONSE_TYPE.DOCUMENT,
        tmx: t.XHR_RESPONSE_TYPE.DOCUMENT,
        svg: t.XHR_RESPONSE_TYPE.DOCUMENT,
        tsx: t.XHR_RESPONSE_TYPE.DOCUMENT,
        gif: t.XHR_RESPONSE_TYPE.BLOB,
        png: t.XHR_RESPONSE_TYPE.BLOB,
        bmp: t.XHR_RESPONSE_TYPE.BLOB,
        jpg: t.XHR_RESPONSE_TYPE.BLOB,
        jpeg: t.XHR_RESPONSE_TYPE.BLOB,
        tif: t.XHR_RESPONSE_TYPE.BLOB,
        tiff: t.XHR_RESPONSE_TYPE.BLOB,
        webp: t.XHR_RESPONSE_TYPE.BLOB,
        tga: t.XHR_RESPONSE_TYPE.BLOB,
        json: t.XHR_RESPONSE_TYPE.JSON,
        text: t.XHR_RESPONSE_TYPE.TEXT,
        txt: t.XHR_RESPONSE_TYPE.TEXT,
        ttf: t.XHR_RESPONSE_TYPE.BUFFER,
        otf: t.XHR_RESPONSE_TYPE.BUFFER
      }, t.EMPTY_GIF = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
    }(Un || (Un = {}));

    var Xn = function (t, e) {
      this.data = t, this.callback = e;
    },
        kn = function () {
      function t(t, e) {
        var r = this;
        if (void 0 === e && (e = 1), this.workers = 0, this.saturated = Gn, this.unsaturated = Gn, this.empty = Gn, this.drain = Gn, this.error = Gn, this.started = !1, this.paused = !1, this._tasks = [], this._insert = function (t, e, i) {
          if (i && "function" != typeof i) throw new Error("task callback must be a function");
          if (r.started = !0, null == t && r.idle()) setTimeout(function () {
            return r.drain();
          }, 1);else {
            var n = new Xn(t, "function" == typeof i ? i : Gn);
            e ? r._tasks.unshift(n) : r._tasks.push(n), setTimeout(r.process, 1);
          }
        }, this.process = function () {
          for (; !r.paused && r.workers < r.concurrency && r._tasks.length;) {
            var t = r._tasks.shift();

            0 === r._tasks.length && r.empty(), r.workers += 1, r.workers === r.concurrency && r.saturated(), r._worker(t.data, Bn(r._next(t)));
          }
        }, this._worker = t, 0 === e) throw new Error("Concurrency must not be zero");
        this.concurrency = e, this.buffer = e / 4;
      }

      return t.prototype._next = function (t) {
        var e = this;
        return function () {
          for (var r = arguments, i = [], n = 0; n < arguments.length; n++) i[n] = r[n];

          e.workers -= 1, t.callback.apply(t, i), null != i[0] && e.error(i[0], t.data), e.workers <= e.concurrency - e.buffer && e.unsaturated(), e.idle() && e.drain(), e.process();
        };
      }, t.prototype.push = function (t, e) {
        this._insert(t, !1, e);
      }, t.prototype.kill = function () {
        this.workers = 0, this.drain = Gn, this.started = !1, this._tasks = [];
      }, t.prototype.unshift = function (t, e) {
        this._insert(t, !0, e);
      }, t.prototype.length = function () {
        return this._tasks.length;
      }, t.prototype.running = function () {
        return this.workers;
      }, t.prototype.idle = function () {
        return this._tasks.length + this.workers === 0;
      }, t.prototype.pause = function () {
        !0 !== this.paused && (this.paused = !0);
      }, t.prototype.resume = function () {
        if (!1 !== this.paused) {
          this.paused = !1;

          for (var t = 1; t <= this.concurrency; t++) this.process();
        }
      }, t.eachSeries = function (t, e, r, i) {
        var n = 0,
            o = t.length;
        !function s(a) {
          a || n === o ? r && r(a) : i ? setTimeout(function () {
            e(t[n++], s);
          }, 1) : e(t[n++], s);
        }();
      }, t.queue = function (e, r) {
        return new t(e, r);
      }, t;
    }(),
        Hn = /(#[\w-]+)?$/,
        jn = function () {
      function t(e, r) {
        var i = this;
        void 0 === e && (e = ""), void 0 === r && (r = 10), this.progress = 0, this.loading = !1, this.defaultQueryString = "", this._beforeMiddleware = [], this._afterMiddleware = [], this._resourcesParsing = [], this._boundLoadResource = function (t, e) {
          return i._loadResource(t, e);
        }, this.resources = {}, this.baseUrl = e, this._beforeMiddleware = [], this._afterMiddleware = [], this._resourcesParsing = [], this._boundLoadResource = function (t, e) {
          return i._loadResource(t, e);
        }, this._queue = kn.queue(this._boundLoadResource, r), this._queue.pause(), this.resources = {}, this.onProgress = new Mn(), this.onError = new Mn(), this.onLoad = new Mn(), this.onStart = new Mn(), this.onComplete = new Mn();

        for (var n = 0; n < t._plugins.length; ++n) {
          var o = t._plugins[n],
              s = o.pre,
              a = o.use;
          s && this.pre(s), a && this.use(a);
        }

        this._protected = !1;
      }

      return t.prototype._add = function (t, e, r, i) {
        if (this.loading && (!r || !r.parentResource)) throw new Error("Cannot add resources while the loader is running.");
        if (this.resources[t]) throw new Error('Resource named "' + t + '" already exists.');

        if (e = this._prepareUrl(e), this.resources[t] = new Un(t, e, r), "function" == typeof i && this.resources[t].onAfterMiddleware.once(i), this.loading) {
          for (var n = r.parentResource, o = [], s = 0; s < n.children.length; ++s) n.children[s].isComplete || o.push(n.children[s]);

          var a = n.progressChunk * (o.length + 1) / (o.length + 2);

          for (n.children.push(this.resources[t]), n.progressChunk = a, s = 0; s < o.length; ++s) o[s].progressChunk = a;

          this.resources[t].progressChunk = a;
        }

        return this._queue.push(this.resources[t]), this;
      }, t.prototype.pre = function (t) {
        return this._beforeMiddleware.push(t), this;
      }, t.prototype.use = function (t) {
        return this._afterMiddleware.push(t), this;
      }, t.prototype.reset = function () {
        for (var t in this.progress = 0, this.loading = !1, this._queue.kill(), this._queue.pause(), this.resources) {
          var e = this.resources[t];
          e._onLoadBinding && e._onLoadBinding.detach(), e.isLoading && e.abort("loader reset");
        }

        return this.resources = {}, this;
      }, t.prototype.load = function (t) {
        if ("function" == typeof t && this.onComplete.once(t), this.loading) return this;
        if (this._queue.idle()) this._onStart(), this._onComplete();else {
          for (var e = 100 / this._queue._tasks.length, r = 0; r < this._queue._tasks.length; ++r) this._queue._tasks[r].data.progressChunk = e;

          this._onStart(), this._queue.resume();
        }
        return this;
      }, Object.defineProperty(t.prototype, "concurrency", {
        get: function () {
          return this._queue.concurrency;
        },
        set: function (t) {
          this._queue.concurrency = t;
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype._prepareUrl = function (t) {
        var e,
            r = Dn(t, {
          strictMode: !0
        });

        if (e = r.protocol || !r.path || 0 === t.indexOf("//") ? t : this.baseUrl.length && this.baseUrl.lastIndexOf("/") !== this.baseUrl.length - 1 && "/" !== t.charAt(0) ? this.baseUrl + "/" + t : this.baseUrl + t, this.defaultQueryString) {
          var i = Hn.exec(e)[0];
          -1 !== (e = e.slice(0, e.length - i.length)).indexOf("?") ? e += "&" + this.defaultQueryString : e += "?" + this.defaultQueryString, e += i;
        }

        return e;
      }, t.prototype._loadResource = function (t, e) {
        var r = this;
        t._dequeue = e, kn.eachSeries(this._beforeMiddleware, function (e, i) {
          e.call(r, t, function () {
            i(t.isComplete ? {} : null);
          });
        }, function () {
          t.isComplete ? r._onLoad(t) : (t._onLoadBinding = t.onComplete.once(r._onLoad, r), t.load());
        }, !0);
      }, t.prototype._onStart = function () {
        this.progress = 0, this.loading = !0, this.onStart.dispatch(this);
      }, t.prototype._onComplete = function () {
        this.progress = 100, this.loading = !1, this.onComplete.dispatch(this, this.resources);
      }, t.prototype._onLoad = function (t) {
        var e = this;
        t._onLoadBinding = null, this._resourcesParsing.push(t), t._dequeue(), kn.eachSeries(this._afterMiddleware, function (r, i) {
          r.call(e, t, i);
        }, function () {
          t.onAfterMiddleware.dispatch(t), e.progress = Math.min(100, e.progress + t.progressChunk), e.onProgress.dispatch(e, t), t.error ? e.onError.dispatch(t.error, e, t) : e.onLoad.dispatch(e, t), e._resourcesParsing.splice(e._resourcesParsing.indexOf(t), 1), e._queue.idle() && 0 === e._resourcesParsing.length && e._onComplete();
        }, !0);
      }, t.prototype.destroy = function () {
        this._protected || this.reset();
      }, Object.defineProperty(t, "shared", {
        get: function () {
          var e = t._shared;
          return e || ((e = new t())._protected = !0, t._shared = e), e;
        },
        enumerable: !1,
        configurable: !0
      }), t.registerPlugin = function (e) {
        return t._plugins.push(e), e.add && e.add(), t;
      }, t._plugins = [], t;
    }();

    jn.prototype.add = function (t, e, r, i) {
      if (Array.isArray(t)) {
        for (var n = 0; n < t.length; ++n) this.add(t[n]);

        return this;
      }

      if ("object" == typeof t && (r = t, i = e || r.callback || r.onComplete, e = r.url, t = r.name || r.key || r.url), "string" != typeof e && (i = r, r = e, e = t), "string" != typeof e) throw new Error("No url passed to add resource to loader.");
      return "function" == typeof r && (i = r, r = null), this._add(t, e, r, i);
    };

    var Yn,
        Vn,
        Wn = function () {
      function t() {}

      return t.init = function (t) {
        t = Object.assign({
          sharedLoader: !1
        }, t), this.loader = t.sharedLoader ? jn.shared : new jn();
      }, t.destroy = function () {
        this.loader && (this.loader.destroy(), this.loader = null);
      }, t;
    }(),
        zn = function () {
      function t() {}

      return t.add = function () {
        Un.setExtensionLoadType("svg", Un.LOAD_TYPE.XHR), Un.setExtensionXhrType("svg", Un.XHR_RESPONSE_TYPE.TEXT);
      }, t.use = function (t, e) {
        if (!t.data || t.type !== Un.TYPE.IMAGE && "svg" !== t.extension) e();else {
          var r = t.data,
              i = t.url,
              n = t.name,
              o = t.metadata;
          Dr.fromLoader(r, i, n, o).then(function (r) {
            t.texture = r, e();
          }).catch(e);
        }
      }, t;
    }();

    jn.registerPlugin({
      use: function (t, e) {
        if (t.data) {
          if (t.xhr && t.xhrType === Un.XHR_RESPONSE_TYPE.BLOB) if (self.Blob && "string" != typeof t.data) {
            if (0 === t.data.type.indexOf("image")) {
              var r = globalThis.URL || globalThis.webkitURL,
                  i = r.createObjectURL(t.data);
              return t.blob = t.data, t.data = new Image(), t.data.src = i, t.type = Un.TYPE.IMAGE, void (t.data.onload = function () {
                r.revokeObjectURL(i), t.data.onload = null, e();
              });
            }
          } else {
            var n = t.xhr.getResponseHeader("content-type");
            if (n && 0 === n.indexOf("image")) return t.data = new Image(), t.data.src = "data:" + n + ";base64," + function (t) {
              for (var e = "", r = 0; r < t.length;) {
                for (var i = [0, 0, 0], n = [0, 0, 0, 0], o = 0; o < i.length; ++o) r < t.length ? i[o] = 255 & t.charCodeAt(r++) : i[o] = 0;

                switch (n[0] = i[0] >> 2, n[1] = (3 & i[0]) << 4 | i[1] >> 4, n[2] = (15 & i[1]) << 2 | i[2] >> 6, n[3] = 63 & i[2], r - (t.length - 1)) {
                  case 2:
                    n[3] = 64, n[2] = 64;
                    break;

                  case 1:
                    n[3] = 64;
                }

                for (o = 0; o < n.length; ++o) e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(n[o]);
              }

              return e;
            }(t.xhr.responseText), t.type = Un.TYPE.IMAGE, void (t.data.onload = function () {
              t.data.onload = null, e();
            });
          }
          e();
        } else e();
      }
    }), jn.registerPlugin(zn), function (t) {
      t[t.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", t[t.COMPRESSED_RGBA_S3TC_DXT1_EXT = 33777] = "COMPRESSED_RGBA_S3TC_DXT1_EXT", t[t.COMPRESSED_RGBA_S3TC_DXT3_EXT = 33778] = "COMPRESSED_RGBA_S3TC_DXT3_EXT", t[t.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", t[t.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT", t[t.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT", t[t.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT", t[t.COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916] = "COMPRESSED_SRGB_S3TC_DXT1_EXT", t[t.COMPRESSED_R11_EAC = 37488] = "COMPRESSED_R11_EAC", t[t.COMPRESSED_SIGNED_R11_EAC = 37489] = "COMPRESSED_SIGNED_R11_EAC", t[t.COMPRESSED_RG11_EAC = 37490] = "COMPRESSED_RG11_EAC", t[t.COMPRESSED_SIGNED_RG11_EAC = 37491] = "COMPRESSED_SIGNED_RG11_EAC", t[t.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", t[t.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", t[t.COMPRESSED_SRGB8_ETC2 = 37493] = "COMPRESSED_SRGB8_ETC2", t[t.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497] = "COMPRESSED_SRGB8_ALPHA8_ETC2_EAC", t[t.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494] = "COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2", t[t.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495] = "COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2", t[t.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", t[t.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", t[t.COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 35841] = "COMPRESSED_RGB_PVRTC_2BPPV1_IMG", t[t.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 35843] = "COMPRESSED_RGBA_PVRTC_2BPPV1_IMG", t[t.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", t[t.COMPRESSED_RGB_ATC_WEBGL = 35986] = "COMPRESSED_RGB_ATC_WEBGL", t[t.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL = 35986] = "COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL", t[t.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL = 34798] = "COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL";
    }(Vn || (Vn = {}));

    var qn = ((Yn = {})[Vn.COMPRESSED_RGB_S3TC_DXT1_EXT] = .5, Yn[Vn.COMPRESSED_RGBA_S3TC_DXT1_EXT] = .5, Yn[Vn.COMPRESSED_RGBA_S3TC_DXT3_EXT] = 1, Yn[Vn.COMPRESSED_RGBA_S3TC_DXT5_EXT] = 1, Yn[Vn.COMPRESSED_SRGB_S3TC_DXT1_EXT] = .5, Yn[Vn.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT] = .5, Yn[Vn.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT] = 1, Yn[Vn.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT] = 1, Yn[Vn.COMPRESSED_R11_EAC] = .5, Yn[Vn.COMPRESSED_SIGNED_R11_EAC] = .5, Yn[Vn.COMPRESSED_RG11_EAC] = 1, Yn[Vn.COMPRESSED_SIGNED_RG11_EAC] = 1, Yn[Vn.COMPRESSED_RGB8_ETC2] = .5, Yn[Vn.COMPRESSED_RGBA8_ETC2_EAC] = 1, Yn[Vn.COMPRESSED_SRGB8_ETC2] = .5, Yn[Vn.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC] = 1, Yn[Vn.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2] = .5, Yn[Vn.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2] = .5, Yn[Vn.COMPRESSED_RGB_PVRTC_4BPPV1_IMG] = .5, Yn[Vn.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG] = .5, Yn[Vn.COMPRESSED_RGB_PVRTC_2BPPV1_IMG] = .25, Yn[Vn.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG] = .25, Yn[Vn.COMPRESSED_RGB_ETC1_WEBGL] = .5, Yn[Vn.COMPRESSED_RGB_ATC_WEBGL] = .5, Yn[Vn.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL] = 1, Yn[Vn.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL] = 1, Yn),
        Kn = function (t, e) {
      return Kn = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      }, Kn(t, e);
    };

    function Zn(t, e) {
      function r() {
        this.constructor = t;
      }

      Kn(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
    }

    var Jn,
        Qn,
        $n = function (t) {
      function e(e, r) {
        void 0 === r && (r = {
          width: 1,
          height: 1,
          autoLoad: !0
        });
        var i,
            n,
            o = this;
        return "string" == typeof e ? (i = e, n = new Uint8Array()) : (i = null, n = e), (o = t.call(this, n, r) || this).origin = i, o.buffer = n ? new cn(n) : null, o.origin && !1 !== r.autoLoad && o.load(), n && n.length && (o.loaded = !0, o.onBlobLoaded(o.buffer.rawBinaryData)), o;
      }

      return Zn(e, t), e.prototype.onBlobLoaded = function (t) {}, e.prototype.load = function () {
        return t = this, void 0, r = function () {
          var t;
          return function (t, e) {
            var r,
                i,
                n,
                o,
                s = {
              label: 0,
              sent: function () {
                if (1 & n[0]) throw n[1];
                return n[1];
              },
              trys: [],
              ops: []
            };
            return o = {
              next: a(0),
              throw: a(1),
              return: a(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
              return this;
            }), o;

            function a(o) {
              return function (a) {
                return function (o) {
                  if (r) throw new TypeError("Generator is already executing.");

                  for (; s;) try {
                    if (r = 1, i && (n = 2 & o[0] ? i.return : o[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, o[1])).done) return n;

                    switch (i = 0, n && (o = [2 & o[0], n.value]), o[0]) {
                      case 0:
                      case 1:
                        n = o;
                        break;

                      case 4:
                        return s.label++, {
                          value: o[1],
                          done: !1
                        };

                      case 5:
                        s.label++, i = o[1], o = [0];
                        continue;

                      case 7:
                        o = s.ops.pop(), s.trys.pop();
                        continue;

                      default:
                        if (!((n = (n = s.trys).length > 0 && n[n.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                          s = 0;
                          continue;
                        }

                        if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                          s.label = o[1];
                          break;
                        }

                        if (6 === o[0] && s.label < n[1]) {
                          s.label = n[1], n = o;
                          break;
                        }

                        if (n && s.label < n[2]) {
                          s.label = n[2], s.ops.push(o);
                          break;
                        }

                        n[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }

                    o = e.call(t, s);
                  } catch (t) {
                    o = [6, t], i = 0;
                  } finally {
                    r = n = 0;
                  }

                  if (5 & o[0]) throw o[1];
                  return {
                    value: o[0] ? o[1] : void 0,
                    done: !0
                  };
                }([o, a]);
              };
            }
          }(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, fetch(this.origin)];

              case 1:
                return [4, e.sent().blob()];

              case 2:
                return [4, e.sent().arrayBuffer()];

              case 3:
                return t = e.sent(), this.data = new Uint32Array(t), this.buffer = new cn(t), this.loaded = !0, this.onBlobLoaded(t), this.update(), [2, this];
            }
          });
        }, new ((e = Promise) || (e = Promise))(function (i, n) {
          function o(t) {
            try {
              a(r.next(t));
            } catch (t) {
              n(t);
            }
          }

          function s(t) {
            try {
              a(r.throw(t));
            } catch (t) {
              n(t);
            }
          }

          function a(t) {
            t.done ? i(t.value) : new e(function (e) {
              e(t.value);
            }).then(o, s);
          }

          a((r = r.apply(t, [])).next());
        });
        var t, e, r;
      }, e;
    }(fr),
        to = function (t) {
      function e(r, i) {
        var n = t.call(this, r, i) || this;
        return n.format = i.format, n.levels = i.levels || 1, n._width = i.width, n._height = i.height, n._extension = e._formatToExtension(n.format), (i.levelBuffers || n.buffer) && (n._levelBuffers = i.levelBuffers || e._createLevelBuffers(r instanceof Uint8Array ? r : n.buffer.uint8View, n.format, n.levels, 4, 4, n.width, n.height)), n;
      }

      return Zn(e, t), e.prototype.upload = function (t, e, r) {
        var i = t.gl;
        if (!t.context.extensions[this._extension]) throw new Error(this._extension + " textures are not supported on the current machine");
        if (!this._levelBuffers) return !1;

        for (var n = 0, o = this.levels; n < o; n++) {
          var s = this._levelBuffers[n],
              a = s.levelID,
              h = s.levelWidth,
              u = s.levelHeight,
              l = s.levelBuffer;
          i.compressedTexImage2D(i.TEXTURE_2D, a, this.format, h, u, 0, l);
        }

        return !0;
      }, e.prototype.onBlobLoaded = function () {
        this._levelBuffers = e._createLevelBuffers(this.buffer.uint8View, this.format, this.levels, 4, 4, this.width, this.height);
      }, e._formatToExtension = function (t) {
        if (t >= 33776 && t <= 33779) return "s3tc";
        if (t >= 37488 && t <= 37497) return "etc";
        if (t >= 35840 && t <= 35843) return "pvrtc";
        if (t >= 36196) return "etc1";
        if (t >= 35986 && t <= 34798) return "atc";
        throw new Error("Invalid (compressed) texture format given!");
      }, e._createLevelBuffers = function (t, e, r, i, n, o, s) {
        for (var a = new Array(r), h = t.byteOffset, u = o, l = s, c = u + i - 1 & ~(i - 1), d = l + n - 1 & ~(n - 1), f = c * d * qn[e], p = 0; p < r; p++) a[p] = {
          levelID: p,
          levelWidth: r > 1 ? u : c,
          levelHeight: r > 1 ? l : d,
          levelBuffer: new Uint8Array(t.buffer, h, f)
        }, h += f, f = (c = (u = u >> 1 || 1) + i - 1 & ~(i - 1)) * (d = (l = l >> 1 || 1) + n - 1 & ~(n - 1)) * qn[e];

        return a;
      }, e;
    }($n),
        eo = function () {
      function t() {}

      return t.use = function (e, r) {
        var i = e.data;

        if (e.type === Un.TYPE.JSON && i && i.cacheID && i.textures) {
          for (var n = i.textures, o = void 0, s = void 0, a = 0, h = n.length; a < h; a++) {
            var u = n[a],
                l = u.src,
                c = u.format;

            if (c || (s = l), t.textureFormats[c]) {
              o = l;
              break;
            }
          }

          if (!(o = o || s)) return void r(new Error("Cannot load compressed-textures in " + e.url + ", make sure you provide a fallback"));
          if (o === e.url) return void r(new Error("URL of compressed texture cannot be the same as the manifest's URL"));
          var d = {
            crossOrigin: e.crossOrigin,
            metadata: e.metadata.imageMetadata,
            parentResource: e
          },
              f = Ot.resolve(e.url.replace(this.baseUrl, ""), o),
              p = i.cacheID;
          this.add(p, f, d, function (t) {
            if (t.error) r(t.error);else {
              var i = t.texture,
                  n = void 0 === i ? null : i,
                  o = t.textures,
                  s = void 0 === o ? {} : o;
              Object.assign(e, {
                texture: n,
                textures: s
              }), r();
            }
          });
        } else r();
      }, Object.defineProperty(t, "textureExtensions", {
        get: function () {
          if (!t._textureExtensions) {
            var e = document.createElement("canvas").getContext("webgl");
            if (!e) return console.warn("WebGL not available for compressed textures. Silently failing."), {};
            var r = {
              s3tc: e.getExtension("WEBGL_compressed_texture_s3tc"),
              s3tc_sRGB: e.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
              etc: e.getExtension("WEBGL_compressed_texture_etc"),
              etc1: e.getExtension("WEBGL_compressed_texture_etc1"),
              pvrtc: e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
              atc: e.getExtension("WEBGL_compressed_texture_atc"),
              astc: e.getExtension("WEBGL_compressed_texture_astc")
            };
            t._textureExtensions = r;
          }

          return t._textureExtensions;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t, "textureFormats", {
        get: function () {
          if (!t._textureFormats) {
            var e = t.textureExtensions;

            for (var r in t._textureFormats = {}, e) {
              var i = e[r];
              i && Object.assign(t._textureFormats, Object.getPrototypeOf(i));
            }
          }

          return t._textureFormats;
        },
        enumerable: !1,
        configurable: !0
      }), t;
    }();

    function ro(t, e, r) {
      var i = {
        textures: {},
        texture: null
      };
      return e ? (e.map(function (t) {
        return new Dr(new _r(t, Object.assign({
          mipmap: dt.OFF,
          alphaMode: ft.NO_PREMULTIPLIED_ALPHA
        }, r)));
      }).forEach(function (e, r) {
        var n = e.baseTexture,
            o = t + "-" + (r + 1);
        _r.addToCache(n, o), Dr.addToCache(e, o), 0 === r && (_r.addToCache(n, t), Dr.addToCache(e, t), i.texture = e), i.textures[o] = e;
      }), i) : i;
    }

    Un.setExtensionXhrType("dds", Un.XHR_RESPONSE_TYPE.BUFFER);
    var io, no;
    !function (t) {
      t[t.DXGI_FORMAT_UNKNOWN = 0] = "DXGI_FORMAT_UNKNOWN", t[t.DXGI_FORMAT_R32G32B32A32_TYPELESS = 1] = "DXGI_FORMAT_R32G32B32A32_TYPELESS", t[t.DXGI_FORMAT_R32G32B32A32_FLOAT = 2] = "DXGI_FORMAT_R32G32B32A32_FLOAT", t[t.DXGI_FORMAT_R32G32B32A32_UINT = 3] = "DXGI_FORMAT_R32G32B32A32_UINT", t[t.DXGI_FORMAT_R32G32B32A32_SINT = 4] = "DXGI_FORMAT_R32G32B32A32_SINT", t[t.DXGI_FORMAT_R32G32B32_TYPELESS = 5] = "DXGI_FORMAT_R32G32B32_TYPELESS", t[t.DXGI_FORMAT_R32G32B32_FLOAT = 6] = "DXGI_FORMAT_R32G32B32_FLOAT", t[t.DXGI_FORMAT_R32G32B32_UINT = 7] = "DXGI_FORMAT_R32G32B32_UINT", t[t.DXGI_FORMAT_R32G32B32_SINT = 8] = "DXGI_FORMAT_R32G32B32_SINT", t[t.DXGI_FORMAT_R16G16B16A16_TYPELESS = 9] = "DXGI_FORMAT_R16G16B16A16_TYPELESS", t[t.DXGI_FORMAT_R16G16B16A16_FLOAT = 10] = "DXGI_FORMAT_R16G16B16A16_FLOAT", t[t.DXGI_FORMAT_R16G16B16A16_UNORM = 11] = "DXGI_FORMAT_R16G16B16A16_UNORM", t[t.DXGI_FORMAT_R16G16B16A16_UINT = 12] = "DXGI_FORMAT_R16G16B16A16_UINT", t[t.DXGI_FORMAT_R16G16B16A16_SNORM = 13] = "DXGI_FORMAT_R16G16B16A16_SNORM", t[t.DXGI_FORMAT_R16G16B16A16_SINT = 14] = "DXGI_FORMAT_R16G16B16A16_SINT", t[t.DXGI_FORMAT_R32G32_TYPELESS = 15] = "DXGI_FORMAT_R32G32_TYPELESS", t[t.DXGI_FORMAT_R32G32_FLOAT = 16] = "DXGI_FORMAT_R32G32_FLOAT", t[t.DXGI_FORMAT_R32G32_UINT = 17] = "DXGI_FORMAT_R32G32_UINT", t[t.DXGI_FORMAT_R32G32_SINT = 18] = "DXGI_FORMAT_R32G32_SINT", t[t.DXGI_FORMAT_R32G8X24_TYPELESS = 19] = "DXGI_FORMAT_R32G8X24_TYPELESS", t[t.DXGI_FORMAT_D32_FLOAT_S8X24_UINT = 20] = "DXGI_FORMAT_D32_FLOAT_S8X24_UINT", t[t.DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS = 21] = "DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS", t[t.DXGI_FORMAT_X32_TYPELESS_G8X24_UINT = 22] = "DXGI_FORMAT_X32_TYPELESS_G8X24_UINT", t[t.DXGI_FORMAT_R10G10B10A2_TYPELESS = 23] = "DXGI_FORMAT_R10G10B10A2_TYPELESS", t[t.DXGI_FORMAT_R10G10B10A2_UNORM = 24] = "DXGI_FORMAT_R10G10B10A2_UNORM", t[t.DXGI_FORMAT_R10G10B10A2_UINT = 25] = "DXGI_FORMAT_R10G10B10A2_UINT", t[t.DXGI_FORMAT_R11G11B10_FLOAT = 26] = "DXGI_FORMAT_R11G11B10_FLOAT", t[t.DXGI_FORMAT_R8G8B8A8_TYPELESS = 27] = "DXGI_FORMAT_R8G8B8A8_TYPELESS", t[t.DXGI_FORMAT_R8G8B8A8_UNORM = 28] = "DXGI_FORMAT_R8G8B8A8_UNORM", t[t.DXGI_FORMAT_R8G8B8A8_UNORM_SRGB = 29] = "DXGI_FORMAT_R8G8B8A8_UNORM_SRGB", t[t.DXGI_FORMAT_R8G8B8A8_UINT = 30] = "DXGI_FORMAT_R8G8B8A8_UINT", t[t.DXGI_FORMAT_R8G8B8A8_SNORM = 31] = "DXGI_FORMAT_R8G8B8A8_SNORM", t[t.DXGI_FORMAT_R8G8B8A8_SINT = 32] = "DXGI_FORMAT_R8G8B8A8_SINT", t[t.DXGI_FORMAT_R16G16_TYPELESS = 33] = "DXGI_FORMAT_R16G16_TYPELESS", t[t.DXGI_FORMAT_R16G16_FLOAT = 34] = "DXGI_FORMAT_R16G16_FLOAT", t[t.DXGI_FORMAT_R16G16_UNORM = 35] = "DXGI_FORMAT_R16G16_UNORM", t[t.DXGI_FORMAT_R16G16_UINT = 36] = "DXGI_FORMAT_R16G16_UINT", t[t.DXGI_FORMAT_R16G16_SNORM = 37] = "DXGI_FORMAT_R16G16_SNORM", t[t.DXGI_FORMAT_R16G16_SINT = 38] = "DXGI_FORMAT_R16G16_SINT", t[t.DXGI_FORMAT_R32_TYPELESS = 39] = "DXGI_FORMAT_R32_TYPELESS", t[t.DXGI_FORMAT_D32_FLOAT = 40] = "DXGI_FORMAT_D32_FLOAT", t[t.DXGI_FORMAT_R32_FLOAT = 41] = "DXGI_FORMAT_R32_FLOAT", t[t.DXGI_FORMAT_R32_UINT = 42] = "DXGI_FORMAT_R32_UINT", t[t.DXGI_FORMAT_R32_SINT = 43] = "DXGI_FORMAT_R32_SINT", t[t.DXGI_FORMAT_R24G8_TYPELESS = 44] = "DXGI_FORMAT_R24G8_TYPELESS", t[t.DXGI_FORMAT_D24_UNORM_S8_UINT = 45] = "DXGI_FORMAT_D24_UNORM_S8_UINT", t[t.DXGI_FORMAT_R24_UNORM_X8_TYPELESS = 46] = "DXGI_FORMAT_R24_UNORM_X8_TYPELESS", t[t.DXGI_FORMAT_X24_TYPELESS_G8_UINT = 47] = "DXGI_FORMAT_X24_TYPELESS_G8_UINT", t[t.DXGI_FORMAT_R8G8_TYPELESS = 48] = "DXGI_FORMAT_R8G8_TYPELESS", t[t.DXGI_FORMAT_R8G8_UNORM = 49] = "DXGI_FORMAT_R8G8_UNORM", t[t.DXGI_FORMAT_R8G8_UINT = 50] = "DXGI_FORMAT_R8G8_UINT", t[t.DXGI_FORMAT_R8G8_SNORM = 51] = "DXGI_FORMAT_R8G8_SNORM", t[t.DXGI_FORMAT_R8G8_SINT = 52] = "DXGI_FORMAT_R8G8_SINT", t[t.DXGI_FORMAT_R16_TYPELESS = 53] = "DXGI_FORMAT_R16_TYPELESS", t[t.DXGI_FORMAT_R16_FLOAT = 54] = "DXGI_FORMAT_R16_FLOAT", t[t.DXGI_FORMAT_D16_UNORM = 55] = "DXGI_FORMAT_D16_UNORM", t[t.DXGI_FORMAT_R16_UNORM = 56] = "DXGI_FORMAT_R16_UNORM", t[t.DXGI_FORMAT_R16_UINT = 57] = "DXGI_FORMAT_R16_UINT", t[t.DXGI_FORMAT_R16_SNORM = 58] = "DXGI_FORMAT_R16_SNORM", t[t.DXGI_FORMAT_R16_SINT = 59] = "DXGI_FORMAT_R16_SINT", t[t.DXGI_FORMAT_R8_TYPELESS = 60] = "DXGI_FORMAT_R8_TYPELESS", t[t.DXGI_FORMAT_R8_UNORM = 61] = "DXGI_FORMAT_R8_UNORM", t[t.DXGI_FORMAT_R8_UINT = 62] = "DXGI_FORMAT_R8_UINT", t[t.DXGI_FORMAT_R8_SNORM = 63] = "DXGI_FORMAT_R8_SNORM", t[t.DXGI_FORMAT_R8_SINT = 64] = "DXGI_FORMAT_R8_SINT", t[t.DXGI_FORMAT_A8_UNORM = 65] = "DXGI_FORMAT_A8_UNORM", t[t.DXGI_FORMAT_R1_UNORM = 66] = "DXGI_FORMAT_R1_UNORM", t[t.DXGI_FORMAT_R9G9B9E5_SHAREDEXP = 67] = "DXGI_FORMAT_R9G9B9E5_SHAREDEXP", t[t.DXGI_FORMAT_R8G8_B8G8_UNORM = 68] = "DXGI_FORMAT_R8G8_B8G8_UNORM", t[t.DXGI_FORMAT_G8R8_G8B8_UNORM = 69] = "DXGI_FORMAT_G8R8_G8B8_UNORM", t[t.DXGI_FORMAT_BC1_TYPELESS = 70] = "DXGI_FORMAT_BC1_TYPELESS", t[t.DXGI_FORMAT_BC1_UNORM = 71] = "DXGI_FORMAT_BC1_UNORM", t[t.DXGI_FORMAT_BC1_UNORM_SRGB = 72] = "DXGI_FORMAT_BC1_UNORM_SRGB", t[t.DXGI_FORMAT_BC2_TYPELESS = 73] = "DXGI_FORMAT_BC2_TYPELESS", t[t.DXGI_FORMAT_BC2_UNORM = 74] = "DXGI_FORMAT_BC2_UNORM", t[t.DXGI_FORMAT_BC2_UNORM_SRGB = 75] = "DXGI_FORMAT_BC2_UNORM_SRGB", t[t.DXGI_FORMAT_BC3_TYPELESS = 76] = "DXGI_FORMAT_BC3_TYPELESS", t[t.DXGI_FORMAT_BC3_UNORM = 77] = "DXGI_FORMAT_BC3_UNORM", t[t.DXGI_FORMAT_BC3_UNORM_SRGB = 78] = "DXGI_FORMAT_BC3_UNORM_SRGB", t[t.DXGI_FORMAT_BC4_TYPELESS = 79] = "DXGI_FORMAT_BC4_TYPELESS", t[t.DXGI_FORMAT_BC4_UNORM = 80] = "DXGI_FORMAT_BC4_UNORM", t[t.DXGI_FORMAT_BC4_SNORM = 81] = "DXGI_FORMAT_BC4_SNORM", t[t.DXGI_FORMAT_BC5_TYPELESS = 82] = "DXGI_FORMAT_BC5_TYPELESS", t[t.DXGI_FORMAT_BC5_UNORM = 83] = "DXGI_FORMAT_BC5_UNORM", t[t.DXGI_FORMAT_BC5_SNORM = 84] = "DXGI_FORMAT_BC5_SNORM", t[t.DXGI_FORMAT_B5G6R5_UNORM = 85] = "DXGI_FORMAT_B5G6R5_UNORM", t[t.DXGI_FORMAT_B5G5R5A1_UNORM = 86] = "DXGI_FORMAT_B5G5R5A1_UNORM", t[t.DXGI_FORMAT_B8G8R8A8_UNORM = 87] = "DXGI_FORMAT_B8G8R8A8_UNORM", t[t.DXGI_FORMAT_B8G8R8X8_UNORM = 88] = "DXGI_FORMAT_B8G8R8X8_UNORM", t[t.DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM = 89] = "DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM", t[t.DXGI_FORMAT_B8G8R8A8_TYPELESS = 90] = "DXGI_FORMAT_B8G8R8A8_TYPELESS", t[t.DXGI_FORMAT_B8G8R8A8_UNORM_SRGB = 91] = "DXGI_FORMAT_B8G8R8A8_UNORM_SRGB", t[t.DXGI_FORMAT_B8G8R8X8_TYPELESS = 92] = "DXGI_FORMAT_B8G8R8X8_TYPELESS", t[t.DXGI_FORMAT_B8G8R8X8_UNORM_SRGB = 93] = "DXGI_FORMAT_B8G8R8X8_UNORM_SRGB", t[t.DXGI_FORMAT_BC6H_TYPELESS = 94] = "DXGI_FORMAT_BC6H_TYPELESS", t[t.DXGI_FORMAT_BC6H_UF16 = 95] = "DXGI_FORMAT_BC6H_UF16", t[t.DXGI_FORMAT_BC6H_SF16 = 96] = "DXGI_FORMAT_BC6H_SF16", t[t.DXGI_FORMAT_BC7_TYPELESS = 97] = "DXGI_FORMAT_BC7_TYPELESS", t[t.DXGI_FORMAT_BC7_UNORM = 98] = "DXGI_FORMAT_BC7_UNORM", t[t.DXGI_FORMAT_BC7_UNORM_SRGB = 99] = "DXGI_FORMAT_BC7_UNORM_SRGB", t[t.DXGI_FORMAT_AYUV = 100] = "DXGI_FORMAT_AYUV", t[t.DXGI_FORMAT_Y410 = 101] = "DXGI_FORMAT_Y410", t[t.DXGI_FORMAT_Y416 = 102] = "DXGI_FORMAT_Y416", t[t.DXGI_FORMAT_NV12 = 103] = "DXGI_FORMAT_NV12", t[t.DXGI_FORMAT_P010 = 104] = "DXGI_FORMAT_P010", t[t.DXGI_FORMAT_P016 = 105] = "DXGI_FORMAT_P016", t[t.DXGI_FORMAT_420_OPAQUE = 106] = "DXGI_FORMAT_420_OPAQUE", t[t.DXGI_FORMAT_YUY2 = 107] = "DXGI_FORMAT_YUY2", t[t.DXGI_FORMAT_Y210 = 108] = "DXGI_FORMAT_Y210", t[t.DXGI_FORMAT_Y216 = 109] = "DXGI_FORMAT_Y216", t[t.DXGI_FORMAT_NV11 = 110] = "DXGI_FORMAT_NV11", t[t.DXGI_FORMAT_AI44 = 111] = "DXGI_FORMAT_AI44", t[t.DXGI_FORMAT_IA44 = 112] = "DXGI_FORMAT_IA44", t[t.DXGI_FORMAT_P8 = 113] = "DXGI_FORMAT_P8", t[t.DXGI_FORMAT_A8P8 = 114] = "DXGI_FORMAT_A8P8", t[t.DXGI_FORMAT_B4G4R4A4_UNORM = 115] = "DXGI_FORMAT_B4G4R4A4_UNORM", t[t.DXGI_FORMAT_P208 = 116] = "DXGI_FORMAT_P208", t[t.DXGI_FORMAT_V208 = 117] = "DXGI_FORMAT_V208", t[t.DXGI_FORMAT_V408 = 118] = "DXGI_FORMAT_V408", t[t.DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE = 119] = "DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE", t[t.DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE = 120] = "DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE", t[t.DXGI_FORMAT_FORCE_UINT = 121] = "DXGI_FORMAT_FORCE_UINT";
    }(io || (io = {})), function (t) {
      t[t.DDS_DIMENSION_TEXTURE1D = 2] = "DDS_DIMENSION_TEXTURE1D", t[t.DDS_DIMENSION_TEXTURE2D = 3] = "DDS_DIMENSION_TEXTURE2D", t[t.DDS_DIMENSION_TEXTURE3D = 6] = "DDS_DIMENSION_TEXTURE3D";
    }(no || (no = {}));

    var oo,
        so,
        ao,
        ho = ((Jn = {})[827611204] = Vn.COMPRESSED_RGBA_S3TC_DXT1_EXT, Jn[861165636] = Vn.COMPRESSED_RGBA_S3TC_DXT3_EXT, Jn[894720068] = Vn.COMPRESSED_RGBA_S3TC_DXT5_EXT, Jn),
        uo = ((Qn = {})[io.DXGI_FORMAT_BC1_TYPELESS] = Vn.COMPRESSED_RGBA_S3TC_DXT1_EXT, Qn[io.DXGI_FORMAT_BC1_UNORM] = Vn.COMPRESSED_RGBA_S3TC_DXT1_EXT, Qn[io.DXGI_FORMAT_BC2_TYPELESS] = Vn.COMPRESSED_RGBA_S3TC_DXT3_EXT, Qn[io.DXGI_FORMAT_BC2_UNORM] = Vn.COMPRESSED_RGBA_S3TC_DXT3_EXT, Qn[io.DXGI_FORMAT_BC3_TYPELESS] = Vn.COMPRESSED_RGBA_S3TC_DXT5_EXT, Qn[io.DXGI_FORMAT_BC3_UNORM] = Vn.COMPRESSED_RGBA_S3TC_DXT5_EXT, Qn[io.DXGI_FORMAT_BC1_UNORM_SRGB] = Vn.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, Qn[io.DXGI_FORMAT_BC2_UNORM_SRGB] = Vn.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT, Qn[io.DXGI_FORMAT_BC3_UNORM_SRGB] = Vn.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT, Qn),
        lo = function () {
      function t() {}

      return t.use = function (e, r) {
        if ("dds" === e.extension && e.data) try {
          Object.assign(e, ro(e.name || e.url, t.parse(e.data), e.metadata));
        } catch (t) {
          return void r(t);
        }
        r();
      }, t.parse = function (t) {
        var e = new Uint32Array(t);
        if (542327876 !== e[0]) throw new Error("Invalid DDS file magic word");
        var r = new Uint32Array(t, 0, 124 / Uint32Array.BYTES_PER_ELEMENT),
            i = r[3],
            n = r[4],
            o = r[7],
            s = new Uint32Array(t, 19 * Uint32Array.BYTES_PER_ELEMENT, 32 / Uint32Array.BYTES_PER_ELEMENT),
            a = s[1];

        if (4 & a) {
          var h = s[2];

          if (808540228 !== h) {
            var u = ho[h],
                l = new Uint8Array(t, 128);
            return [new to(l, {
              format: u,
              width: n,
              height: i,
              levels: o
            })];
          }

          var c = new Uint32Array(e.buffer, 128, 20 / Uint32Array.BYTES_PER_ELEMENT),
              d = c[0],
              f = c[1],
              p = c[2],
              _ = c[3],
              v = uo[d];
          if (void 0 === v) throw new Error("DDSLoader cannot parse texture data with DXGI format " + d);
          if (4 === p) throw new Error("DDSLoader does not support cubemap textures");
          if (f === no.DDS_DIMENSION_TEXTURE3D) throw new Error("DDSLoader does not supported 3D texture data");
          var m = new Array();
          if (1 === _) m.push(new Uint8Array(t, 148));else {
            for (var g = qn[v], y = 0, E = n, T = i, b = 0; b < o; b++) y += Math.max(1, E + 3 & -4) * Math.max(1, T + 3 & -4) * g, E >>>= 1, T >>>= 1;

            var x = 148;

            for (b = 0; b < _; b++) m.push(new Uint8Array(t, x, y)), x += y;
          }
          return m.map(function (t) {
            return new to(t, {
              format: v,
              width: n,
              height: i,
              levels: o
            });
          });
        }

        if (64 & a) throw new Error("DDSLoader does not support uncompressed texture data.");
        if (512 & a) throw new Error("DDSLoader does not supported YUV uncompressed texture data.");
        if (131072 & a) throw new Error("DDSLoader does not support single-channel (lumninance) texture data!");
        if (2 & a) throw new Error("DDSLoader does not support single-channel (alpha) texture data!");
        throw new Error("DDSLoader failed to load a texture file due to an unknown reason!");
      }, t;
    }();

    Un.setExtensionXhrType("ktx", Un.XHR_RESPONSE_TYPE.BUFFER);

    var co = [171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10],
        fo = ((oo = {})[ht.UNSIGNED_BYTE] = 1, oo[ht.UNSIGNED_SHORT] = 2, oo[ht.INT] = 4, oo[ht.UNSIGNED_INT] = 4, oo[ht.FLOAT] = 4, oo[ht.HALF_FLOAT] = 8, oo),
        po = ((so = {})[st.RGBA] = 4, so[st.RGB] = 3, so[st.RG] = 2, so[st.RED] = 1, so[st.LUMINANCE] = 1, so[st.LUMINANCE_ALPHA] = 2, so[st.ALPHA] = 1, so),
        _o = ((ao = {})[ht.UNSIGNED_SHORT_4_4_4_4] = 2, ao[ht.UNSIGNED_SHORT_5_5_5_1] = 2, ao[ht.UNSIGNED_SHORT_5_6_5] = 2, ao),
        vo = function () {
      function t() {}

      return t.use = function (e, r) {
        if ("ktx" === e.extension && e.data) try {
          var i = e.name || e.url,
              n = t.parse(i, e.data),
              o = n.compressed,
              s = n.uncompressed;
          if (o) Object.assign(e, ro(i, o, e.metadata));else if (s) {
            var a = {};
            s.forEach(function (t, e) {
              var r = new Dr(new _r(t.resource, {
                mipmap: dt.OFF,
                alphaMode: ft.NO_PREMULTIPLIED_ALPHA,
                type: t.type,
                format: t.format
              })),
                  n = i + "-" + (e + 1);
              _r.addToCache(r.baseTexture, n), Dr.addToCache(r, n), 0 === e && (a[i] = r, _r.addToCache(r.baseTexture, i), Dr.addToCache(r, i)), a[n] = r;
            }), Object.assign(e, {
              textures: a
            });
          }
        } catch (t) {
          return void r(t);
        }
        r();
      }, t.parse = function (e, r) {
        var i = new DataView(r);
        if (!t.validate(e, i)) return null;
        var n = 67305985 === i.getUint32(12, !0),
            o = i.getUint32(16, n),
            s = i.getUint32(24, n),
            a = i.getUint32(28, n),
            h = i.getUint32(36, n),
            u = i.getUint32(40, n) || 1,
            l = i.getUint32(44, n) || 1,
            c = i.getUint32(48, n) || 1,
            d = i.getUint32(52, n),
            f = i.getUint32(56, n),
            p = i.getUint32(60, n);
        if (0 === u || 1 !== l) throw new Error("Only 2D textures are supported");
        if (1 !== d) throw new Error("CubeTextures are not supported by KTXLoader yet!");
        if (1 !== c) throw new Error("WebGL does not support array textures");

        var _,
            v = h + 3 & -4,
            m = u + 3 & -4,
            g = new Array(c),
            y = h * u;

        if (0 === o && (y = v * m), void 0 === (_ = 0 !== o ? fo[o] ? fo[o] * po[s] : _o[o] : qn[a])) throw new Error("Unable to resolve the pixel format stored in the *.ktx file!");

        for (var E = y * _, T = h, b = u, x = v, R = m, A = 64 + p, O = 0; O < f; O++) {
          for (var S = i.getUint32(A, n), I = A + 4, P = 0; P < c; P++) {
            var N = g[P];
            N || (N = g[P] = new Array(f)), N[O] = {
              levelID: O,
              levelWidth: f > 1 || 0 !== o ? T : x,
              levelHeight: f > 1 || 0 !== o ? b : R,
              levelBuffer: new Uint8Array(r, I, E)
            }, I += E;
          }

          A = (A += S + 4) % 4 != 0 ? A + 4 - A % 4 : A, E = (x = (T = T >> 1 || 1) + 4 - 1 & -4) * (R = (b = b >> 1 || 1) + 4 - 1 & -4) * _;
        }

        return 0 !== o ? {
          uncompressed: g.map(function (e) {
            var r = e[0].levelBuffer,
                i = !1;
            return o === ht.FLOAT ? r = new Float32Array(e[0].levelBuffer.buffer, e[0].levelBuffer.byteOffset, e[0].levelBuffer.byteLength / 4) : o === ht.UNSIGNED_INT ? (i = !0, r = new Uint32Array(e[0].levelBuffer.buffer, e[0].levelBuffer.byteOffset, e[0].levelBuffer.byteLength / 4)) : o === ht.INT && (i = !0, r = new Int32Array(e[0].levelBuffer.buffer, e[0].levelBuffer.byteOffset, e[0].levelBuffer.byteLength / 4)), {
              resource: new fr(r, {
                width: e[0].levelWidth,
                height: e[0].levelHeight
              }),
              type: o,
              format: i ? t.convertFormatToInteger(s) : s
            };
          })
        } : {
          compressed: g.map(function (t) {
            return new to(null, {
              format: a,
              width: h,
              height: u,
              levels: f,
              levelBuffers: t
            });
          })
        };
      }, t.validate = function (t, e) {
        for (var r = 0; r < co.length; r++) if (e.getUint8(r) !== co[r]) return console.error(t + " is not a valid *.ktx file!"), !1;

        return !0;
      }, t.convertFormatToInteger = function (t) {
        switch (t) {
          case st.RGBA:
            return st.RGBA_INTEGER;

          case st.RGB:
            return st.RGB_INTEGER;

          case st.RG:
            return st.RG_INTEGER;

          case st.RED:
            return st.RED_INTEGER;

          default:
            return t;
        }
      }, t;
    }(),
        mo = function (t, e) {
      return mo = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      }, mo(t, e);
    };

    function go(t, e) {
      function r() {
        this.constructor = t;
      }

      mo(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
    }

    !function (t) {
      function e(e, r, i, n) {
        void 0 === e && (e = 1500), void 0 === i && (i = 16384), void 0 === n && (n = !1);
        var o = t.call(this) || this;
        return i > 16384 && (i = 16384), o._properties = [!1, !0, !1, !1, !1], o._maxSize = e, o._batchSize = i, o._buffers = null, o._bufferUpdateIDs = [], o._updateID = 0, o.interactiveChildren = !1, o.blendMode = nt.NORMAL, o.autoResize = n, o.roundPixels = !0, o.baseTexture = null, o.setProperties(r), o._tint = 0, o.tintRgb = new Float32Array(4), o.tint = 16777215, o;
      }

      go(e, t), e.prototype.setProperties = function (t) {
        t && (this._properties[0] = "vertices" in t || "scale" in t ? !!t.vertices || !!t.scale : this._properties[0], this._properties[1] = "position" in t ? !!t.position : this._properties[1], this._properties[2] = "rotation" in t ? !!t.rotation : this._properties[2], this._properties[3] = "uvs" in t ? !!t.uvs : this._properties[3], this._properties[4] = "tint" in t || "alpha" in t ? !!t.tint || !!t.alpha : this._properties[4]);
      }, e.prototype.updateTransform = function () {
        this.displayObjectUpdateTransform();
      }, Object.defineProperty(e.prototype, "tint", {
        get: function () {
          return this._tint;
        },
        set: function (t) {
          this._tint = t, Nt(t, this.tintRgb);
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.render = function (t) {
        var e = this;
        this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable && (this.baseTexture || (this.baseTexture = this.children[0]._texture.baseTexture, this.baseTexture.valid || this.baseTexture.once("update", function () {
          return e.onChildrenChange(0);
        })), t.batch.setObjectRenderer(t.plugins.particle), t.plugins.particle.render(this));
      }, e.prototype.onChildrenChange = function (t) {
        for (var e = Math.floor(t / this._batchSize); this._bufferUpdateIDs.length < e;) this._bufferUpdateIDs.push(0);

        this._bufferUpdateIDs[e] = ++this._updateID;
      }, e.prototype.dispose = function () {
        if (this._buffers) {
          for (var t = 0; t < this._buffers.length; ++t) this._buffers[t].destroy();

          this._buffers = null;
        }
      }, e.prototype.destroy = function (e) {
        t.prototype.destroy.call(this, e), this.dispose(), this._properties = null, this._buffers = null, this._bufferUpdateIDs = null;
      };
    }(We);

    var yo,
        Eo,
        To = function () {
      function t(t, e, r) {
        this.geometry = new Hr(), this.indexBuffer = null, this.size = r, this.dynamicProperties = [], this.staticProperties = [];

        for (var i = 0; i < t.length; ++i) {
          var n = t[i];
          n = {
            attributeName: n.attributeName,
            size: n.size,
            uploadFunction: n.uploadFunction,
            type: n.type || ht.FLOAT,
            offset: n.offset
          }, e[i] ? this.dynamicProperties.push(n) : this.staticProperties.push(n);
        }

        this.staticStride = 0, this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null, this.dynamicStride = 0, this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this._updateID = 0, this.initBuffers();
      }

      return t.prototype.initBuffers = function () {
        var t = this.geometry,
            e = 0;
        this.indexBuffer = new Ur(function (t, e) {
          void 0 === e && (e = null);
          var r = 6 * t;
          if ((e = e || new Uint16Array(r)).length !== r) throw new Error("Out buffer length is incorrect, got " + e.length + " and expected " + r);

          for (var i = 0, n = 0; i < r; i += 6, n += 4) e[i + 0] = n + 0, e[i + 1] = n + 1, e[i + 2] = n + 2, e[i + 3] = n + 0, e[i + 4] = n + 2, e[i + 5] = n + 3;

          return e;
        }(this.size), !0, !0), t.addIndex(this.indexBuffer), this.dynamicStride = 0;

        for (var r = 0; r < this.dynamicProperties.length; ++r) (s = this.dynamicProperties[r]).offset = e, e += s.size, this.dynamicStride += s.size;

        var i = new ArrayBuffer(this.size * this.dynamicStride * 4 * 4);
        this.dynamicData = new Float32Array(i), this.dynamicDataUint32 = new Uint32Array(i), this.dynamicBuffer = new Ur(this.dynamicData, !1, !1);
        var n = 0;

        for (this.staticStride = 0, r = 0; r < this.staticProperties.length; ++r) (s = this.staticProperties[r]).offset = n, n += s.size, this.staticStride += s.size;

        var o = new ArrayBuffer(this.size * this.staticStride * 4 * 4);

        for (this.staticData = new Float32Array(o), this.staticDataUint32 = new Uint32Array(o), this.staticBuffer = new Ur(this.staticData, !0, !1), r = 0; r < this.dynamicProperties.length; ++r) {
          var s = this.dynamicProperties[r];
          t.addAttribute(s.attributeName, this.dynamicBuffer, 0, s.type === ht.UNSIGNED_BYTE, s.type, 4 * this.dynamicStride, 4 * s.offset);
        }

        for (r = 0; r < this.staticProperties.length; ++r) s = this.staticProperties[r], t.addAttribute(s.attributeName, this.staticBuffer, 0, s.type === ht.UNSIGNED_BYTE, s.type, 4 * this.staticStride, 4 * s.offset);
      }, t.prototype.uploadDynamic = function (t, e, r) {
        for (var i = 0; i < this.dynamicProperties.length; i++) {
          var n = this.dynamicProperties[i];
          n.uploadFunction(t, e, r, n.type === ht.UNSIGNED_BYTE ? this.dynamicDataUint32 : this.dynamicData, this.dynamicStride, n.offset);
        }

        this.dynamicBuffer._updateID++;
      }, t.prototype.uploadStatic = function (t, e, r) {
        for (var i = 0; i < this.staticProperties.length; i++) {
          var n = this.staticProperties[i];
          n.uploadFunction(t, e, r, n.type === ht.UNSIGNED_BYTE ? this.staticDataUint32 : this.staticData, this.staticStride, n.offset);
        }

        this.staticBuffer._updateID++;
      }, t.prototype.destroy = function () {
        this.indexBuffer = null, this.dynamicProperties = null, this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this.staticProperties = null, this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null, this.geometry.destroy();
      }, t;
    }(),
        bo = function (t) {
      function e(e) {
        var r = t.call(this, e) || this;
        return r.shader = null, r.properties = null, r.tempMatrix = new ce(), r.properties = [{
          attributeName: "aVertexPosition",
          size: 2,
          uploadFunction: r.uploadVertices,
          offset: 0
        }, {
          attributeName: "aPositionCoord",
          size: 2,
          uploadFunction: r.uploadPosition,
          offset: 0
        }, {
          attributeName: "aRotation",
          size: 1,
          uploadFunction: r.uploadRotation,
          offset: 0
        }, {
          attributeName: "aTextureCoord",
          size: 2,
          uploadFunction: r.uploadUvs,
          offset: 0
        }, {
          attributeName: "aColor",
          size: 1,
          type: ht.UNSIGNED_BYTE,
          uploadFunction: r.uploadTint,
          offset: 0
        }], r.shader = Pi.from("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nattribute vec2 aPositionCoord;\nattribute float aRotation;\n\nuniform mat3 translationMatrix;\nuniform vec4 uColor;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvoid main(void){\n    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);\n    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);\n\n    vec2 v = vec2(x, y);\n    v = v + aPositionCoord;\n\n    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vColor = aColor * uColor;\n}\n", "varying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;\n    gl_FragColor = color;\n}", {}), r.state = Ni.for2d(), r;
      }

      return go(e, t), e.prototype.render = function (t) {
        var e = t.children,
            r = t._maxSize,
            i = t._batchSize,
            n = this.renderer,
            o = e.length;

        if (0 !== o) {
          o > r && !t.autoResize && (o = r);
          var s = t._buffers;
          s || (s = t._buffers = this.generateBuffers(t));
          var a = e[0]._texture.baseTexture;
          this.state.blendMode = Ct(t.blendMode, a.alphaMode), n.state.set(this.state);
          var h,
              u,
              l,
              c,
              d = n.gl,
              f = t.worldTransform.copyTo(this.tempMatrix);
          f.prepend(n.globalUniforms.uniforms.projectionMatrix), this.shader.uniforms.translationMatrix = f.toArray(!0), this.shader.uniforms.uColor = (h = t.tintRgb, u = t.worldAlpha, l = this.shader.uniforms.uColor, c = a.alphaMode, l = l || new Float32Array(4), c || void 0 === c ? (l[0] = h[0] * u, l[1] = h[1] * u, l[2] = h[2] * u) : (l[0] = h[0], l[1] = h[1], l[2] = h[2]), l[3] = u, l), this.shader.uniforms.uSampler = a, this.renderer.shader.bind(this.shader);

          for (var p = !1, _ = 0, v = 0; _ < o; _ += i, v += 1) {
            var m = o - _;
            m > i && (m = i), v >= s.length && s.push(this._generateOneMoreBuffer(t));
            var g = s[v];
            g.uploadDynamic(e, _, m);
            var y = t._bufferUpdateIDs[v] || 0;
            (p = p || g._updateID < y) && (g._updateID = t._updateID, g.uploadStatic(e, _, m)), n.geometry.bind(g.geometry), d.drawElements(d.TRIANGLES, 6 * m, d.UNSIGNED_SHORT, 0);
          }
        }
      }, e.prototype.generateBuffers = function (t) {
        for (var e = [], r = t._maxSize, i = t._batchSize, n = t._properties, o = 0; o < r; o += i) e.push(new To(this.properties, n, i));

        return e;
      }, e.prototype._generateOneMoreBuffer = function (t) {
        var e = t._batchSize,
            r = t._properties;
        return new To(this.properties, r, e);
      }, e.prototype.uploadVertices = function (t, e, r, i, n, o) {
        for (var s = 0, a = 0, h = 0, u = 0, l = 0; l < r; ++l) {
          var c = t[e + l],
              d = c._texture,
              f = c.scale.x,
              p = c.scale.y,
              _ = d.trim,
              v = d.orig;
          _ ? (s = (a = _.x - c.anchor.x * v.width) + _.width, h = (u = _.y - c.anchor.y * v.height) + _.height) : (s = v.width * (1 - c.anchor.x), a = v.width * -c.anchor.x, h = v.height * (1 - c.anchor.y), u = v.height * -c.anchor.y), i[o] = a * f, i[o + 1] = u * p, i[o + n] = s * f, i[o + n + 1] = u * p, i[o + 2 * n] = s * f, i[o + 2 * n + 1] = h * p, i[o + 3 * n] = a * f, i[o + 3 * n + 1] = h * p, o += 4 * n;
        }
      }, e.prototype.uploadPosition = function (t, e, r, i, n, o) {
        for (var s = 0; s < r; s++) {
          var a = t[e + s].position;
          i[o] = a.x, i[o + 1] = a.y, i[o + n] = a.x, i[o + n + 1] = a.y, i[o + 2 * n] = a.x, i[o + 2 * n + 1] = a.y, i[o + 3 * n] = a.x, i[o + 3 * n + 1] = a.y, o += 4 * n;
        }
      }, e.prototype.uploadRotation = function (t, e, r, i, n, o) {
        for (var s = 0; s < r; s++) {
          var a = t[e + s].rotation;
          i[o] = a, i[o + n] = a, i[o + 2 * n] = a, i[o + 3 * n] = a, o += 4 * n;
        }
      }, e.prototype.uploadUvs = function (t, e, r, i, n, o) {
        for (var s = 0; s < r; ++s) {
          var a = t[e + s]._texture._uvs;
          a ? (i[o] = a.x0, i[o + 1] = a.y0, i[o + n] = a.x1, i[o + n + 1] = a.y1, i[o + 2 * n] = a.x2, i[o + 2 * n + 1] = a.y2, i[o + 3 * n] = a.x3, i[o + 3 * n + 1] = a.y3, o += 4 * n) : (i[o] = 0, i[o + 1] = 0, i[o + n] = 0, i[o + n + 1] = 0, i[o + 2 * n] = 0, i[o + 2 * n + 1] = 0, i[o + 3 * n] = 0, i[o + 3 * n + 1] = 0, o += 4 * n);
        }
      }, e.prototype.uploadTint = function (t, e, r, i, n, o) {
        for (var s = 0; s < r; ++s) {
          var a = t[e + s],
              h = a._texture.baseTexture.alphaMode > 0,
              u = a.alpha,
              l = u < 1 && h ? Lt(a._tintRGB, u) : a._tintRGB + (255 * u << 24);
          i[o] = l, i[o + n] = l, i[o + 2 * n] = l, i[o + 3 * n] = l, o += 4 * n;
        }
      }, e.prototype.destroy = function () {
        t.prototype.destroy.call(this), this.shader && (this.shader.destroy(), this.shader = null), this.tempMatrix = null;
      }, e;
    }(Jr);

    !function (t) {
      t.MITER = "miter", t.BEVEL = "bevel", t.ROUND = "round";
    }(yo || (yo = {})), function (t) {
      t.BUTT = "butt", t.ROUND = "round", t.SQUARE = "square";
    }(Eo || (Eo = {}));

    var xo = {
      adaptive: !0,
      maxLength: 10,
      minSegments: 8,
      maxSegments: 2048,
      epsilon: 1e-4,
      _segmentsCount: function (t, e) {
        if (void 0 === e && (e = 20), !this.adaptive || !t || isNaN(t)) return e;
        var r = Math.ceil(t / this.maxLength);
        return r < this.minSegments ? r = this.minSegments : r > this.maxSegments && (r = this.maxSegments), r;
      }
    },
        Ro = function () {
      function t() {
        this.color = 16777215, this.alpha = 1, this.texture = Dr.WHITE, this.matrix = null, this.visible = !1, this.reset();
      }

      return t.prototype.clone = function () {
        var e = new t();
        return e.color = this.color, e.alpha = this.alpha, e.texture = this.texture, e.matrix = this.matrix, e.visible = this.visible, e;
      }, t.prototype.reset = function () {
        this.color = 16777215, this.alpha = 1, this.texture = Dr.WHITE, this.matrix = null, this.visible = !1;
      }, t.prototype.destroy = function () {
        this.texture = null, this.matrix = null;
      }, t;
    }(),
        Ao = function (t, e) {
      return Ao = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      }, Ao(t, e);
    };

    function Oo(t, e) {
      function r() {
        this.constructor = t;
      }

      Ao(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
    }

    function So(t, e) {
      var r, i;
      void 0 === e && (e = !1);
      var n = t.length;

      if (!(n < 6)) {
        for (var o = 0, s = 0, a = t[n - 2], h = t[n - 1]; s < n; s += 2) {
          var u = t[s],
              l = t[s + 1];
          o += (u - a) * (l + h), a = u, h = l;
        }

        if (!e && o > 0 || e && o <= 0) {
          var c = n / 2;

          for (s = c + c % 2; s < n; s += 2) {
            var d = n - s - 2,
                f = n - s - 1,
                p = s,
                _ = s + 1;

            r = [t[p], t[d]], t[d] = r[0], t[p] = r[1], i = [t[_], t[f]], t[f] = i[0], t[_] = i[1];
          }
        }
      }
    }

    var Io = {
      build: function (t) {
        t.points = t.shape.points.slice();
      },
      triangulate: function (t, e) {
        var r = t.points,
            i = t.holes,
            n = e.points,
            o = e.indices;

        if (r.length >= 6) {
          So(r, !1);

          for (var s = [], a = 0; a < i.length; a++) {
            var h = i[a];
            So(h.points, !0), s.push(r.length / 2), r = r.concat(h.points);
          }

          var u = Rt()(r, s, 2);
          if (!u) return;
          var l = n.length / 2;

          for (a = 0; a < u.length; a += 3) o.push(u[a] + l), o.push(u[a + 1] + l), o.push(u[a + 2] + l);

          for (a = 0; a < r.length; a++) n.push(r[a]);
        }
      }
    },
        Po = {
      build: function (t) {
        var e,
            r,
            i,
            n,
            o,
            s,
            a = t.points;

        if (t.type === $t.CIRC) {
          var h = t.shape;
          e = h.x, r = h.y, o = s = h.radius, i = n = 0;
        } else if (t.type === $t.ELIP) {
          var u = t.shape;
          e = u.x, r = u.y, o = u.width, s = u.height, i = n = 0;
        } else {
          var l = t.shape,
              c = l.width / 2,
              d = l.height / 2;
          e = l.x + c, r = l.y + d, i = c - (o = s = Math.max(0, Math.min(l.radius, Math.min(c, d)))), n = d - s;
        }

        var f = Math.ceil(2.3 * Math.sqrt(o + s)),
            p = 8 * f + (i ? 4 : 0) + (n ? 4 : 0);

        if (a.length = p, 0 !== p) {
          if (0 === f) return a.length = 8, a[0] = a[6] = e + i, a[1] = a[3] = r + n, a[2] = a[4] = e - i, void (a[5] = a[7] = r - n);

          var _,
              v,
              m = 0,
              g = 4 * f + (i ? 2 : 0) + 2,
              y = g,
              E = p,
              T = e + (_ = i + o),
              b = e - _,
              x = r + (v = n);

          if (a[m++] = T, a[m++] = x, a[--g] = x, a[--g] = b, n) {
            var R = r - v;
            a[y++] = b, a[y++] = R, a[--E] = R, a[--E] = T;
          }

          for (var A = 1; A < f; A++) {
            var O = Math.PI / 2 * (A / f);
            T = e + (_ = i + Math.cos(O) * o), b = e - _, x = r + (v = n + Math.sin(O) * s), R = r - v, a[m++] = T, a[m++] = x, a[--g] = x, a[--g] = b, a[y++] = b, a[y++] = R, a[--E] = R, a[--E] = T;
          }

          T = e + (_ = i), b = e - _, x = r + (v = n + s), R = r - v, a[m++] = T, a[m++] = x, a[--E] = R, a[--E] = T, i && (a[m++] = b, a[m++] = x, a[--E] = R, a[--E] = b);
        }
      },
      triangulate: function (t, e) {
        var r,
            i,
            n = t.points,
            o = e.points,
            s = e.indices,
            a = o.length / 2,
            h = a;

        if (t.type !== $t.RREC) {
          var u = t.shape;
          r = u.x, i = u.y;
        } else {
          var l = t.shape;
          r = l.x + l.width / 2, i = l.y + l.height / 2;
        }

        var c = t.matrix;
        o.push(t.matrix ? c.a * r + c.c * i + c.tx : r, t.matrix ? c.b * r + c.d * i + c.ty : i), a++, o.push(n[0], n[1]);

        for (var d = 2; d < n.length; d += 2) o.push(n[d], n[d + 1]), s.push(a++, h, a);

        s.push(h + 1, h, a);
      }
    };

    function No(t, e, r) {
      return t + (e - t) * r;
    }

    function Mo(t, e, r, i, n, o, s) {
      void 0 === s && (s = []);

      for (var a = s, h = 0, u = 0, l = 0, c = 0, d = 0, f = 0, p = 0, _ = 0; p <= 20; ++p) h = No(t, r, _ = p / 20), u = No(e, i, _), l = No(r, n, _), c = No(i, o, _), d = No(h, l, _), f = No(u, c, _), 0 === p && a[a.length - 2] === d && a[a.length - 1] === f || a.push(d, f);

      return a;
    }

    var Do = {
      build: function (t) {
        if (Qo.nextRoundedRectBehavior) Po.build(t);else {
          var e = t.shape,
              r = t.points,
              i = e.x,
              n = e.y,
              o = e.width,
              s = e.height,
              a = Math.max(0, Math.min(e.radius, Math.min(o, s) / 2));
          r.length = 0, a ? (Mo(i, n + a, i, n, i + a, n, r), Mo(i + o - a, n, i + o, n, i + o, n + a, r), Mo(i + o, n + s - a, i + o, n + s, i + o - a, n + s, r), Mo(i + a, n + s, i, n + s, i, n + s - a, r)) : r.push(i, n, i + o, n, i + o, n + s, i, n + s);
        }
      },
      triangulate: function (t, e) {
        if (Qo.nextRoundedRectBehavior) Po.triangulate(t, e);else {
          for (var r = t.points, i = e.points, n = e.indices, o = i.length / 2, s = Rt()(r, null, 2), a = 0, h = s.length; a < h; a += 3) n.push(s[a] + o), n.push(s[a + 1] + o), n.push(s[a + 2] + o);

          for (a = 0, h = r.length; a < h; a++) i.push(r[a], r[++a]);
        }
      }
    };

    function wo(t, e, r, i, n, o, s, a) {
      var h, u;
      s ? (h = i, u = -r) : (h = -i, u = r);
      var l = t - r * n + h,
          c = e - i * n + u,
          d = t + r * o + h,
          f = e + i * o + u;
      return a.push(l, c), a.push(d, f), 2;
    }

    function Co(t, e, r, i, n, o, s, a) {
      var h = r - t,
          u = i - e,
          l = Math.atan2(h, u),
          c = Math.atan2(n - t, o - e);
      a && l < c ? l += 2 * Math.PI : !a && l > c && (c += 2 * Math.PI);

      var d = l,
          f = c - l,
          p = Math.abs(f),
          _ = Math.sqrt(h * h + u * u),
          v = 1 + (15 * p * Math.sqrt(_) / Math.PI >> 0),
          m = f / v;

      if (d += m, a) {
        s.push(t, e), s.push(r, i);

        for (var g = 1, y = d; g < v; g++, y += m) s.push(t, e), s.push(t + Math.sin(y) * _, e + Math.cos(y) * _);

        s.push(t, e), s.push(n, o);
      } else {
        for (s.push(r, i), s.push(t, e), g = 1, y = d; g < v; g++, y += m) s.push(t + Math.sin(y) * _, e + Math.cos(y) * _), s.push(t, e);

        s.push(n, o), s.push(t, e);
      }

      return 2 * v;
    }

    function Lo(t, e) {
      t.lineStyle.native ? function (t, e) {
        var r = 0,
            i = t.shape,
            n = t.points || i.points,
            o = i.type !== $t.POLY || i.closeStroke;

        if (0 !== n.length) {
          var s = e.points,
              a = e.indices,
              h = n.length / 2,
              u = s.length / 2,
              l = u;

          for (s.push(n[0], n[1]), r = 1; r < h; r++) s.push(n[2 * r], n[2 * r + 1]), a.push(l, l + 1), l++;

          o && a.push(l, u);
        }
      }(t, e) : function (t, e) {
        var r = t.shape,
            i = t.points || r.points.slice(),
            n = e.closePointEps;

        if (0 !== i.length) {
          var o = t.lineStyle,
              s = new ie(i[0], i[1]),
              a = new ie(i[i.length - 2], i[i.length - 1]),
              h = r.type !== $t.POLY || r.closeStroke,
              u = Math.abs(s.x - a.x) < n && Math.abs(s.y - a.y) < n;

          if (h) {
            i = i.slice(), u && (i.pop(), i.pop(), a.set(i[i.length - 2], i[i.length - 1]));
            var l = .5 * (s.x + a.x),
                c = .5 * (a.y + s.y);
            i.unshift(l, c), i.push(l, c);
          }

          var d = e.points,
              f = i.length / 2,
              p = i.length,
              _ = d.length / 2,
              v = o.width / 2,
              m = v * v,
              g = o.miterLimit * o.miterLimit,
              y = i[0],
              E = i[1],
              T = i[2],
              b = i[3],
              x = 0,
              R = 0,
              A = -(E - b),
              O = y - T,
              S = 0,
              I = 0,
              P = Math.sqrt(A * A + O * O);

          A /= P, O /= P, A *= v, O *= v;
          var N = o.alignment,
              M = 2 * (1 - N),
              D = 2 * N;
          h || (o.cap === Eo.ROUND ? p += Co(y - A * (M - D) * .5, E - O * (M - D) * .5, y - A * M, E - O * M, y + A * D, E + O * D, d, !0) + 2 : o.cap === Eo.SQUARE && (p += wo(y, E, A, O, M, D, !0, d))), d.push(y - A * M, E - O * M), d.push(y + A * D, E + O * D);

          for (var w = 1; w < f - 1; ++w) {
            y = i[2 * (w - 1)], E = i[2 * (w - 1) + 1], T = i[2 * w], b = i[2 * w + 1], x = i[2 * (w + 1)], R = i[2 * (w + 1) + 1], A = -(E - b), O = y - T, A /= P = Math.sqrt(A * A + O * O), O /= P, A *= v, O *= v, S = -(b - R), I = T - x, S /= P = Math.sqrt(S * S + I * I), I /= P, S *= v, I *= v;
            var C = T - y,
                L = E - b,
                F = T - x,
                U = R - b,
                G = L * F - U * C,
                B = G < 0;
            if (Math.abs(G) < .1) d.push(T - A * M, b - O * M), d.push(T + A * D, b + O * D);else {
              var X = (-A + y) * (-O + b) - (-A + T) * (-O + E),
                  k = (-S + x) * (-I + b) - (-S + T) * (-I + R),
                  H = (C * k - F * X) / G,
                  j = (U * X - L * k) / G,
                  Y = (H - T) * (H - T) + (j - b) * (j - b),
                  V = T + (H - T) * M,
                  W = b + (j - b) * M,
                  z = T - (H - T) * D,
                  q = b - (j - b) * D,
                  K = B ? M : D;
              Y <= Math.min(C * C + L * L, F * F + U * U) + K * K * m ? o.join === yo.BEVEL || Y / m > g ? (B ? (d.push(V, W), d.push(T + A * D, b + O * D), d.push(V, W), d.push(T + S * D, b + I * D)) : (d.push(T - A * M, b - O * M), d.push(z, q), d.push(T - S * M, b - I * M), d.push(z, q)), p += 2) : o.join === yo.ROUND ? B ? (d.push(V, W), d.push(T + A * D, b + O * D), p += Co(T, b, T + A * D, b + O * D, T + S * D, b + I * D, d, !0) + 4, d.push(V, W), d.push(T + S * D, b + I * D)) : (d.push(T - A * M, b - O * M), d.push(z, q), p += Co(T, b, T - A * M, b - O * M, T - S * M, b - I * M, d, !1) + 4, d.push(T - S * M, b - I * M), d.push(z, q)) : (d.push(V, W), d.push(z, q)) : (d.push(T - A * M, b - O * M), d.push(T + A * D, b + O * D), o.join === yo.BEVEL || Y / m > g || (o.join === yo.ROUND ? p += B ? Co(T, b, T + A * D, b + O * D, T + S * D, b + I * D, d, !0) + 2 : Co(T, b, T - A * M, b - O * M, T - S * M, b - I * M, d, !1) + 2 : (B ? (d.push(z, q), d.push(z, q)) : (d.push(V, W), d.push(V, W)), p += 2)), d.push(T - S * M, b - I * M), d.push(T + S * D, b + I * D), p += 2);
            }
          }

          y = i[2 * (f - 2)], E = i[2 * (f - 2) + 1], T = i[2 * (f - 1)], A = -(E - (b = i[2 * (f - 1) + 1])), O = y - T, A /= P = Math.sqrt(A * A + O * O), O /= P, A *= v, O *= v, d.push(T - A * M, b - O * M), d.push(T + A * D, b + O * D), h || (o.cap === Eo.ROUND ? p += Co(T - A * (M - D) * .5, b - O * (M - D) * .5, T - A * M, b - O * M, T + A * D, b + O * D, d, !1) + 2 : o.cap === Eo.SQUARE && (p += wo(T, b, A, O, M, D, !1, d)));
          var Z = e.indices,
              J = xo.epsilon * xo.epsilon;

          for (w = _; w < p + _ - 2; ++w) y = d[2 * w], E = d[2 * w + 1], T = d[2 * (w + 1)], b = d[2 * (w + 1) + 1], x = d[2 * (w + 2)], R = d[2 * (w + 2) + 1], Math.abs(y * (b - R) + T * (R - E) + x * (E - b)) < J || Z.push(w, w + 1, w + 2);
        }
      }(t, e);
    }

    var Fo,
        Uo,
        Go = function () {
      function t() {}

      return t.curveTo = function (t, e, r, i, n, o) {
        var s = o[o.length - 2],
            a = o[o.length - 1] - e,
            h = s - t,
            u = i - e,
            l = r - t,
            c = Math.abs(a * l - h * u);
        if (c < 1e-8 || 0 === n) return o[o.length - 2] === t && o[o.length - 1] === e || o.push(t, e), null;

        var d = a * a + h * h,
            f = u * u + l * l,
            p = a * u + h * l,
            _ = n * Math.sqrt(d) / c,
            v = n * Math.sqrt(f) / c,
            m = _ * p / d,
            g = v * p / f,
            y = _ * l + v * h,
            E = _ * u + v * a,
            T = h * (v + m),
            b = a * (v + m),
            x = l * (_ + g),
            R = u * (_ + g);

        return {
          cx: y + t,
          cy: E + e,
          radius: n,
          startAngle: Math.atan2(b - E, T - y),
          endAngle: Math.atan2(R - E, x - y),
          anticlockwise: h * u > l * a
        };
      }, t.arc = function (t, e, r, i, n, o, s, a, h) {
        for (var u = s - o, l = xo._segmentsCount(Math.abs(u) * n, 40 * Math.ceil(Math.abs(u) / te)), c = u / (2 * l), d = 2 * c, f = Math.cos(c), p = Math.sin(c), _ = l - 1, v = _ % 1 / _, m = 0; m <= _; ++m) {
          var g = c + o + d * (m + v * m),
              y = Math.cos(g),
              E = -Math.sin(g);
          h.push((f * y + p * E) * n + r, (f * -E + p * y) * n + i);
        }
      }, t;
    }(),
        Bo = function () {
      function t() {}

      return t.curveLength = function (t, e, r, i, n, o, s, a) {
        for (var h = 0, u = 0, l = 0, c = 0, d = 0, f = 0, p = 0, _ = 0, v = 0, m = 0, g = 0, y = t, E = e, T = 1; T <= 10; ++T) m = y - (_ = (p = (f = (d = 1 - (u = T / 10)) * d) * d) * t + 3 * f * u * r + 3 * d * (l = u * u) * n + (c = l * u) * s), g = E - (v = p * e + 3 * f * u * i + 3 * d * l * o + c * a), y = _, E = v, h += Math.sqrt(m * m + g * g);

        return h;
      }, t.curveTo = function (e, r, i, n, o, s, a) {
        var h = a[a.length - 2],
            u = a[a.length - 1];
        a.length -= 2;

        var l = xo._segmentsCount(t.curveLength(h, u, e, r, i, n, o, s)),
            c = 0,
            d = 0,
            f = 0,
            p = 0,
            _ = 0;

        a.push(h, u);

        for (var v = 1, m = 0; v <= l; ++v) f = (d = (c = 1 - (m = v / l)) * c) * c, _ = (p = m * m) * m, a.push(f * h + 3 * d * m * e + 3 * c * p * i + _ * o, f * u + 3 * d * m * r + 3 * c * p * n + _ * s);
      }, t;
    }(),
        Xo = function () {
      function t() {}

      return t.curveLength = function (t, e, r, i, n, o) {
        var s = t - 2 * r + n,
            a = e - 2 * i + o,
            h = 2 * r - 2 * t,
            u = 2 * i - 2 * e,
            l = 4 * (s * s + a * a),
            c = 4 * (s * h + a * u),
            d = h * h + u * u,
            f = 2 * Math.sqrt(l + c + d),
            p = Math.sqrt(l),
            _ = 2 * l * p,
            v = 2 * Math.sqrt(d),
            m = c / p;

        return (_ * f + p * c * (f - v) + (4 * d * l - c * c) * Math.log((2 * p + m + f) / (m + v))) / (4 * _);
      }, t.curveTo = function (e, r, i, n, o) {
        for (var s = o[o.length - 2], a = o[o.length - 1], h = xo._segmentsCount(t.curveLength(s, a, e, r, i, n)), u = 0, l = 0, c = 1; c <= h; ++c) {
          var d = c / h;
          u = s + (e - s) * d, l = a + (r - a) * d, o.push(u + (e + (i - e) * d - u) * d, l + (r + (n - r) * d - l) * d);
        }
      }, t;
    }(),
        ko = function () {
      function t() {
        this.reset();
      }

      return t.prototype.begin = function (t, e, r) {
        this.reset(), this.style = t, this.start = e, this.attribStart = r;
      }, t.prototype.end = function (t, e) {
        this.attribSize = e - this.attribStart, this.size = t - this.start;
      }, t.prototype.reset = function () {
        this.style = null, this.size = 0, this.start = 0, this.attribStart = 0, this.attribSize = 0;
      }, t;
    }(),
        Ho = ((Fo = {})[$t.POLY] = Io, Fo[$t.CIRC] = Po, Fo[$t.ELIP] = Po, Fo[$t.RECT] = {
      build: function (t) {
        var e = t.shape,
            r = e.x,
            i = e.y,
            n = e.width,
            o = e.height,
            s = t.points;
        s.length = 0, s.push(r, i, r + n, i, r + n, i + o, r, i + o);
      },
      triangulate: function (t, e) {
        var r = t.points,
            i = e.points,
            n = i.length / 2;
        i.push(r[0], r[1], r[2], r[3], r[6], r[7], r[4], r[5]), e.indices.push(n, n + 1, n + 2, n + 1, n + 2, n + 3);
      }
    }, Fo[$t.RREC] = Do, Fo),
        jo = [],
        Yo = [],
        Vo = function () {
      function t(t, e, r, i) {
        void 0 === e && (e = null), void 0 === r && (r = null), void 0 === i && (i = null), this.points = [], this.holes = [], this.shape = t, this.lineStyle = r, this.fillStyle = e, this.matrix = i, this.type = t.type;
      }

      return t.prototype.clone = function () {
        return new t(this.shape, this.fillStyle, this.lineStyle, this.matrix);
      }, t.prototype.destroy = function () {
        this.shape = null, this.holes.length = 0, this.holes = null, this.points.length = 0, this.points = null, this.lineStyle = null, this.fillStyle = null;
      }, t;
    }(),
        Wo = new ie(),
        zo = new Te(),
        qo = function (t) {
      function e() {
        var e = t.call(this) || this;
        return e.closePointEps = 1e-4, e.boundsPadding = 0, e.uvsFloat32 = null, e.indicesUint16 = null, e.batchable = !1, e.points = [], e.colors = [], e.uvs = [], e.indices = [], e.textureIds = [], e.graphicsData = [], e.drawCalls = [], e.batchDirty = -1, e.batches = [], e.dirty = 0, e.cacheDirty = -1, e.clearDirty = 0, e.shapeIndex = 0, e._bounds = new Te(), e.boundsDirty = -1, e;
      }

      return Oo(e, t), Object.defineProperty(e.prototype, "bounds", {
        get: function () {
          return this.boundsDirty !== this.dirty && (this.boundsDirty = this.dirty, this.calculateBounds()), this._bounds;
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.invalidate = function () {
        this.boundsDirty = -1, this.dirty++, this.batchDirty++, this.shapeIndex = 0, this.points.length = 0, this.colors.length = 0, this.uvs.length = 0, this.indices.length = 0, this.textureIds.length = 0;

        for (var t = 0; t < this.drawCalls.length; t++) this.drawCalls[t].texArray.clear(), Yo.push(this.drawCalls[t]);

        for (this.drawCalls.length = 0, t = 0; t < this.batches.length; t++) {
          var e = this.batches[t];
          e.reset(), jo.push(e);
        }

        this.batches.length = 0;
      }, e.prototype.clear = function () {
        return this.graphicsData.length > 0 && (this.invalidate(), this.clearDirty++, this.graphicsData.length = 0), this;
      }, e.prototype.drawShape = function (t, e, r, i) {
        void 0 === e && (e = null), void 0 === r && (r = null), void 0 === i && (i = null);
        var n = new Vo(t, e, r, i);
        return this.graphicsData.push(n), this.dirty++, this;
      }, e.prototype.drawHole = function (t, e) {
        if (void 0 === e && (e = null), !this.graphicsData.length) return null;
        var r = new Vo(t, null, null, e),
            i = this.graphicsData[this.graphicsData.length - 1];
        return r.lineStyle = i.lineStyle, i.holes.push(r), this.dirty++, this;
      }, e.prototype.destroy = function () {
        t.prototype.destroy.call(this);

        for (var e = 0; e < this.graphicsData.length; ++e) this.graphicsData[e].destroy();

        this.points.length = 0, this.points = null, this.colors.length = 0, this.colors = null, this.uvs.length = 0, this.uvs = null, this.indices.length = 0, this.indices = null, this.indexBuffer.destroy(), this.indexBuffer = null, this.graphicsData.length = 0, this.graphicsData = null, this.drawCalls.length = 0, this.drawCalls = null, this.batches.length = 0, this.batches = null, this._bounds = null;
      }, e.prototype.containsPoint = function (t) {
        for (var e = this.graphicsData, r = 0; r < e.length; ++r) {
          var i = e[r];

          if (i.fillStyle.visible && i.shape && (i.matrix ? i.matrix.applyInverse(t, Wo) : Wo.copyFrom(t), i.shape.contains(Wo.x, Wo.y))) {
            var n = !1;
            if (i.holes) for (var o = 0; o < i.holes.length; o++) if (i.holes[o].shape.contains(Wo.x, Wo.y)) {
              n = !0;
              break;
            }
            if (!n) return !0;
          }
        }

        return !1;
      }, e.prototype.updateBatches = function (t) {
        if (this.graphicsData.length) {
          if (this.validateBatching()) {
            this.cacheDirty = this.dirty;
            var e = this.uvs,
                r = this.graphicsData,
                i = null,
                n = null;
            this.batches.length > 0 && (n = (i = this.batches[this.batches.length - 1]).style);

            for (var o = this.shapeIndex; o < r.length; o++) {
              this.shapeIndex++;
              var s = r[o],
                  a = s.fillStyle,
                  h = s.lineStyle;
              Ho[s.type].build(s), s.matrix && this.transformPoints(s.points, s.matrix), (a.visible || h.visible) && this.processHoles(s.holes);

              for (var u = 0; u < 2; u++) {
                var l = 0 === u ? a : h;

                if (l.visible) {
                  var c = l.texture.baseTexture,
                      d = this.indices.length,
                      f = this.points.length / 2;
                  c.wrapMode = ct.REPEAT, 0 === u ? this.processFill(s) : this.processLine(s);
                  var p = this.points.length / 2 - f;
                  0 !== p && (i && !this._compareStyles(n, l) && (i.end(d, f), i = null), i || ((i = jo.pop() || new ko()).begin(l, d, f), this.batches.push(i), n = l), this.addUvs(this.points, e, l.texture, f, p, l.matrix));
                }
              }
            }

            var _ = this.indices.length,
                v = this.points.length / 2;

            if (i && i.end(_, v), 0 !== this.batches.length) {
              if (this.indicesUint16 && this.indices.length === this.indicesUint16.length) this.indicesUint16.set(this.indices);else {
                var m = v > 65535 && t;
                this.indicesUint16 = m ? new Uint32Array(this.indices) : new Uint16Array(this.indices);
              }
              this.batchable = this.isBatchable(), this.batchable ? this.packBatches() : this.buildDrawCalls();
            } else this.batchable = !0;
          }
        } else this.batchable = !0;
      }, e.prototype._compareStyles = function (t, e) {
        return !(!t || !e) && t.texture.baseTexture === e.texture.baseTexture && t.color + t.alpha === e.color + e.alpha && !!t.native == !!e.native;
      }, e.prototype.validateBatching = function () {
        if (this.dirty === this.cacheDirty || !this.graphicsData.length) return !1;

        for (var t = 0, e = this.graphicsData.length; t < e; t++) {
          var r = this.graphicsData[t],
              i = r.fillStyle,
              n = r.lineStyle;
          if (i && !i.texture.baseTexture.valid) return !1;
          if (n && !n.texture.baseTexture.valid) return !1;
        }

        return !0;
      }, e.prototype.packBatches = function () {
        this.batchDirty++, this.uvsFloat32 = new Float32Array(this.uvs);

        for (var t = this.batches, e = 0, r = t.length; e < r; e++) for (var i = t[e], n = 0; n < i.size; n++) {
          var o = i.start + n;
          this.indicesUint16[o] = this.indicesUint16[o] - i.attribStart;
        }
      }, e.prototype.isBatchable = function () {
        if (this.points.length > 131070) return !1;

        for (var t = this.batches, r = 0; r < t.length; r++) if (t[r].style.native) return !1;

        return this.points.length < 2 * e.BATCHABLE_SIZE;
      }, e.prototype.buildDrawCalls = function () {
        for (var t = ++_r._globalBatch, e = 0; e < this.drawCalls.length; e++) this.drawCalls[e].texArray.clear(), Yo.push(this.drawCalls[e]);

        this.drawCalls.length = 0;
        var r = this.colors,
            i = this.textureIds,
            n = Yo.pop();
        n || ((n = new un()).texArray = new ln()), n.texArray.count = 0, n.start = 0, n.size = 0, n.type = ot.TRIANGLES;
        var o = 0,
            s = null,
            a = 0,
            h = !1,
            u = ot.TRIANGLES,
            l = 0;

        for (this.drawCalls.push(n), e = 0; e < this.batches.length; e++) {
          var c = this.batches[e],
              d = c.style,
              f = d.texture.baseTexture;
          h !== !!d.native && (u = (h = !!d.native) ? ot.LINES : ot.TRIANGLES, s = null, o = 8, t++), s !== f && (s = f, f._batchEnabled !== t && (8 === o && (t++, o = 0, n.size > 0 && ((n = Yo.pop()) || ((n = new un()).texArray = new ln()), this.drawCalls.push(n)), n.start = l, n.size = 0, n.texArray.count = 0, n.type = u), f.touched = 1, f._batchEnabled = t, f._batchLocation = o, f.wrapMode = ct.REPEAT, n.texArray.elements[n.texArray.count++] = f, o++)), n.size += c.size, l += c.size, a = f._batchLocation, this.addColors(r, d.color, d.alpha, c.attribSize, c.attribStart), this.addTextureIds(i, a, c.attribSize, c.attribStart);
        }

        _r._globalBatch = t, this.packAttributes();
      }, e.prototype.packAttributes = function () {
        for (var t = this.points, e = this.uvs, r = this.colors, i = this.textureIds, n = new ArrayBuffer(3 * t.length * 4), o = new Float32Array(n), s = new Uint32Array(n), a = 0, h = 0; h < t.length / 2; h++) o[a++] = t[2 * h], o[a++] = t[2 * h + 1], o[a++] = e[2 * h], o[a++] = e[2 * h + 1], s[a++] = r[h], o[a++] = i[h];

        this._buffer.update(n), this._indexBuffer.update(this.indicesUint16);
      }, e.prototype.processFill = function (t) {
        t.holes.length ? Io.triangulate(t, this) : Ho[t.type].triangulate(t, this);
      }, e.prototype.processLine = function (t) {
        Lo(t, this);

        for (var e = 0; e < t.holes.length; e++) Lo(t.holes[e], this);
      }, e.prototype.processHoles = function (t) {
        for (var e = 0; e < t.length; e++) {
          var r = t[e];
          Ho[r.type].build(r), r.matrix && this.transformPoints(r.points, r.matrix);
        }
      }, e.prototype.calculateBounds = function () {
        var t = this._bounds,
            e = zo,
            r = ce.IDENTITY;
        this._bounds.clear(), e.clear();

        for (var i = 0; i < this.graphicsData.length; i++) {
          var n = this.graphicsData[i],
              o = n.shape,
              s = n.type,
              a = n.lineStyle,
              h = n.matrix || ce.IDENTITY,
              u = 0;

          if (a && a.visible && (u = a.width, s !== $t.POLY || n.fillStyle.visible ? u *= Math.max(0, a.alignment) : u *= Math.max(a.alignment, 1 - a.alignment)), r !== h && (e.isEmpty() || (t.addBoundsMatrix(e, r), e.clear()), r = h), s === $t.RECT || s === $t.RREC) {
            var l = o;
            e.addFramePad(l.x, l.y, l.x + l.width, l.y + l.height, u, u);
          } else if (s === $t.CIRC) {
            var c = o;
            e.addFramePad(c.x, c.y, c.x, c.y, c.radius + u, c.radius + u);
          } else if (s === $t.ELIP) {
            var d = o;
            e.addFramePad(d.x, d.y, d.x, d.y, d.width + u, d.height + u);
          } else {
            var f = o;
            t.addVerticesMatrix(r, f.points, 0, f.points.length, u, u);
          }
        }

        e.isEmpty() || t.addBoundsMatrix(e, r), t.pad(this.boundsPadding, this.boundsPadding);
      }, e.prototype.transformPoints = function (t, e) {
        for (var r = 0; r < t.length / 2; r++) {
          var i = t[2 * r],
              n = t[2 * r + 1];
          t[2 * r] = e.a * i + e.c * n + e.tx, t[2 * r + 1] = e.b * i + e.d * n + e.ty;
        }
      }, e.prototype.addColors = function (t, e, r, i, n) {
        void 0 === n && (n = 0);
        var o = Lt((e >> 16) + (65280 & e) + ((255 & e) << 16), r);
        t.length = Math.max(t.length, n + i);

        for (var s = 0; s < i; s++) t[n + s] = o;
      }, e.prototype.addTextureIds = function (t, e, r, i) {
        void 0 === i && (i = 0), t.length = Math.max(t.length, i + r);

        for (var n = 0; n < r; n++) t[i + n] = e;
      }, e.prototype.addUvs = function (t, e, r, i, n, o) {
        void 0 === o && (o = null);

        for (var s = 0, a = e.length, h = r.frame; s < n;) {
          var u = t[2 * (i + s)],
              l = t[2 * (i + s) + 1];

          if (o) {
            var c = o.a * u + o.c * l + o.tx;
            l = o.b * u + o.d * l + o.ty, u = c;
          }

          s++, e.push(u / h.width, l / h.height);
        }

        var d = r.baseTexture;
        (h.width < d.width || h.height < d.height) && this.adjustUvs(e, r, a, n);
      }, e.prototype.adjustUvs = function (t, e, r, i) {
        for (var n = e.baseTexture, o = 1e-6, s = r + 2 * i, a = e.frame, h = a.width / n.width, u = a.height / n.height, l = a.x / a.width, c = a.y / a.height, d = Math.floor(t[r] + o), f = Math.floor(t[r + 1] + o), p = r + 2; p < s; p += 2) d = Math.min(d, Math.floor(t[p] + o)), f = Math.min(f, Math.floor(t[p + 1] + o));

        for (l -= d, c -= f, p = r; p < s; p += 2) t[p] = (t[p] + l) * h, t[p + 1] = (t[p + 1] + c) * u;
      }, e.BATCHABLE_SIZE = 100, e;
    }(pn),
        Ko = function (t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.width = 0, e.alignment = .5, e.native = !1, e.cap = Eo.BUTT, e.join = yo.MITER, e.miterLimit = 10, e;
      }

      return Oo(e, t), e.prototype.clone = function () {
        var t = new e();
        return t.color = this.color, t.alpha = this.alpha, t.texture = this.texture, t.matrix = this.matrix, t.visible = this.visible, t.width = this.width, t.alignment = this.alignment, t.native = this.native, t.cap = this.cap, t.join = this.join, t.miterLimit = this.miterLimit, t;
      }, e.prototype.reset = function () {
        t.prototype.reset.call(this), this.color = 0, this.alignment = .5, this.width = 0, this.native = !1;
      }, e;
    }(Ro),
        Zo = new Float32Array(3),
        Jo = {},
        Qo = function (t) {
      function e(e) {
        void 0 === e && (e = null);
        var r = t.call(this) || this;
        return r.shader = null, r.pluginName = "batch", r.currentPath = null, r.batches = [], r.batchTint = -1, r.batchDirty = -1, r.vertexData = null, r._fillStyle = new Ro(), r._lineStyle = new Ko(), r._matrix = null, r._holeMode = !1, r.state = Ni.for2d(), r._geometry = e || new qo(), r._geometry.refCount++, r._transformID = -1, r.tint = 16777215, r.blendMode = nt.NORMAL, r;
      }

      return Oo(e, t), Object.defineProperty(e.prototype, "geometry", {
        get: function () {
          return this._geometry;
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.clone = function () {
        return this.finishPoly(), new e(this._geometry);
      }, Object.defineProperty(e.prototype, "blendMode", {
        get: function () {
          return this.state.blendMode;
        },
        set: function (t) {
          this.state.blendMode = t;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "tint", {
        get: function () {
          return this._tint;
        },
        set: function (t) {
          this._tint = t;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "fill", {
        get: function () {
          return this._fillStyle;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "line", {
        get: function () {
          return this._lineStyle;
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.lineStyle = function (t, e, r, i, n) {
        return void 0 === t && (t = null), void 0 === e && (e = 0), void 0 === r && (r = 1), void 0 === i && (i = .5), void 0 === n && (n = !1), "number" == typeof t && (t = {
          width: t,
          color: e,
          alpha: r,
          alignment: i,
          native: n
        }), this.lineTextureStyle(t);
      }, e.prototype.lineTextureStyle = function (t) {
        t = Object.assign({
          width: 0,
          texture: Dr.WHITE,
          color: t && t.texture ? 16777215 : 0,
          alpha: 1,
          matrix: null,
          alignment: .5,
          native: !1,
          cap: Eo.BUTT,
          join: yo.MITER,
          miterLimit: 10
        }, t), this.currentPath && this.startPoly();
        var e = t.width > 0 && t.alpha > 0;
        return e ? (t.matrix && (t.matrix = t.matrix.clone(), t.matrix.invert()), Object.assign(this._lineStyle, {
          visible: e
        }, t)) : this._lineStyle.reset(), this;
      }, e.prototype.startPoly = function () {
        if (this.currentPath) {
          var t = this.currentPath.points,
              e = this.currentPath.points.length;
          e > 2 && (this.drawShape(this.currentPath), this.currentPath = new he(), this.currentPath.closeStroke = !1, this.currentPath.points.push(t[e - 2], t[e - 1]));
        } else this.currentPath = new he(), this.currentPath.closeStroke = !1;
      }, e.prototype.finishPoly = function () {
        this.currentPath && (this.currentPath.points.length > 2 ? (this.drawShape(this.currentPath), this.currentPath = null) : this.currentPath.points.length = 0);
      }, e.prototype.moveTo = function (t, e) {
        return this.startPoly(), this.currentPath.points[0] = t, this.currentPath.points[1] = e, this;
      }, e.prototype.lineTo = function (t, e) {
        this.currentPath || this.moveTo(0, 0);
        var r = this.currentPath.points,
            i = r[r.length - 2],
            n = r[r.length - 1];
        return i === t && n === e || r.push(t, e), this;
      }, e.prototype._initCurve = function (t, e) {
        void 0 === t && (t = 0), void 0 === e && (e = 0), this.currentPath ? 0 === this.currentPath.points.length && (this.currentPath.points = [t, e]) : this.moveTo(t, e);
      }, e.prototype.quadraticCurveTo = function (t, e, r, i) {
        this._initCurve();

        var n = this.currentPath.points;
        return 0 === n.length && this.moveTo(0, 0), Xo.curveTo(t, e, r, i, n), this;
      }, e.prototype.bezierCurveTo = function (t, e, r, i, n, o) {
        return this._initCurve(), Bo.curveTo(t, e, r, i, n, o, this.currentPath.points), this;
      }, e.prototype.arcTo = function (t, e, r, i, n) {
        this._initCurve(t, e);

        var o = this.currentPath.points,
            s = Go.curveTo(t, e, r, i, n, o);

        if (s) {
          var a = s.cx,
              h = s.cy,
              u = s.radius,
              l = s.startAngle,
              c = s.endAngle,
              d = s.anticlockwise;
          this.arc(a, h, u, l, c, d);
        }

        return this;
      }, e.prototype.arc = function (t, e, r, i, n, o) {
        if (void 0 === o && (o = !1), i === n) return this;
        if (!o && n <= i ? n += te : o && i <= n && (i += te), 0 == n - i) return this;
        var s = t + Math.cos(i) * r,
            a = e + Math.sin(i) * r,
            h = this._geometry.closePointEps,
            u = this.currentPath ? this.currentPath.points : null;

        if (u) {
          var l = Math.abs(u[u.length - 2] - s),
              c = Math.abs(u[u.length - 1] - a);
          l < h && c < h || u.push(s, a);
        } else this.moveTo(s, a), u = this.currentPath.points;

        return Go.arc(s, a, t, e, r, i, n, o, u), this;
      }, e.prototype.beginFill = function (t, e) {
        return void 0 === t && (t = 0), void 0 === e && (e = 1), this.beginTextureFill({
          texture: Dr.WHITE,
          color: t,
          alpha: e
        });
      }, e.prototype.beginTextureFill = function (t) {
        t = Object.assign({
          texture: Dr.WHITE,
          color: 16777215,
          alpha: 1,
          matrix: null
        }, t), this.currentPath && this.startPoly();
        var e = t.alpha > 0;
        return e ? (t.matrix && (t.matrix = t.matrix.clone(), t.matrix.invert()), Object.assign(this._fillStyle, {
          visible: e
        }, t)) : this._fillStyle.reset(), this;
      }, e.prototype.endFill = function () {
        return this.finishPoly(), this._fillStyle.reset(), this;
      }, e.prototype.drawRect = function (t, e, r, i) {
        return this.drawShape(new oe(t, e, r, i));
      }, e.prototype.drawRoundedRect = function (t, e, r, i, n) {
        return this.drawShape(new ue(t, e, r, i, n));
      }, e.prototype.drawCircle = function (t, e, r) {
        return this.drawShape(new se(t, e, r));
      }, e.prototype.drawEllipse = function (t, e, r, i) {
        return this.drawShape(new ae(t, e, r, i));
      }, e.prototype.drawPolygon = function () {
        for (var t, e = arguments, r = [], i = 0; i < arguments.length; i++) r[i] = e[i];

        var n = !0,
            o = r[0];
        o.points ? (n = o.closeStroke, t = o.points) : t = Array.isArray(r[0]) ? r[0] : r;
        var s = new he(t);
        return s.closeStroke = n, this.drawShape(s), this;
      }, e.prototype.drawShape = function (t) {
        return this._holeMode ? this._geometry.drawHole(t, this._matrix) : this._geometry.drawShape(t, this._fillStyle.clone(), this._lineStyle.clone(), this._matrix), this;
      }, e.prototype.clear = function () {
        return this._geometry.clear(), this._lineStyle.reset(), this._fillStyle.reset(), this._boundsID++, this._matrix = null, this._holeMode = !1, this.currentPath = null, this;
      }, e.prototype.isFastRect = function () {
        var t = this._geometry.graphicsData;
        return !(1 !== t.length || t[0].shape.type !== $t.RECT || t[0].matrix || t[0].holes.length || t[0].lineStyle.visible && t[0].lineStyle.width);
      }, e.prototype._render = function (t) {
        this.finishPoly();
        var e = this._geometry,
            r = t.context.supports.uint32Indices;
        e.updateBatches(r), e.batchable ? (this.batchDirty !== e.batchDirty && this._populateBatches(), this._renderBatched(t)) : (t.batch.flush(), this._renderDirect(t));
      }, e.prototype._populateBatches = function () {
        var t = this._geometry,
            e = this.blendMode,
            r = t.batches.length;
        this.batchTint = -1, this._transformID = -1, this.batchDirty = t.batchDirty, this.batches.length = r, this.vertexData = new Float32Array(t.points);

        for (var i = 0; i < r; i++) {
          var n = t.batches[i],
              o = n.style.color,
              s = new Float32Array(this.vertexData.buffer, 4 * n.attribStart * 2, 2 * n.attribSize),
              a = new Float32Array(t.uvsFloat32.buffer, 4 * n.attribStart * 2, 2 * n.attribSize),
              h = {
            vertexData: s,
            blendMode: e,
            indices: new Uint16Array(t.indicesUint16.buffer, 2 * n.start, n.size),
            uvs: a,
            _batchRGB: Nt(o),
            _tintRGB: o,
            _texture: n.style.texture,
            alpha: n.style.alpha,
            worldAlpha: 1
          };
          this.batches[i] = h;
        }
      }, e.prototype._renderBatched = function (t) {
        if (this.batches.length) {
          t.batch.setObjectRenderer(t.plugins[this.pluginName]), this.calculateVertices(), this.calculateTints();

          for (var e = 0, r = this.batches.length; e < r; e++) {
            var i = this.batches[e];
            i.worldAlpha = this.worldAlpha * i.alpha, t.plugins[this.pluginName].render(i);
          }
        }
      }, e.prototype._renderDirect = function (t) {
        var e = this._resolveDirectShader(t),
            r = this._geometry,
            i = this.tint,
            n = this.worldAlpha,
            o = e.uniforms,
            s = r.drawCalls;

        o.translationMatrix = this.transform.worldTransform, o.tint[0] = (i >> 16 & 255) / 255 * n, o.tint[1] = (i >> 8 & 255) / 255 * n, o.tint[2] = (255 & i) / 255 * n, o.tint[3] = n, t.shader.bind(e), t.geometry.bind(r, e), t.state.set(this.state);

        for (var a = 0, h = s.length; a < h; a++) this._renderDrawCallDirect(t, r.drawCalls[a]);
      }, e.prototype._renderDrawCallDirect = function (t, e) {
        for (var r = e.texArray, i = e.type, n = e.size, o = e.start, s = r.count, a = 0; a < s; a++) t.texture.bind(r.elements[a], a);

        t.geometry.draw(i, n, o);
      }, e.prototype._resolveDirectShader = function (t) {
        var e = this.shader,
            r = this.pluginName;

        if (!e) {
          if (!Jo[r]) {
            for (var i = t.plugins[r].MAX_TEXTURES, n = new Int32Array(i), o = 0; o < i; o++) n[o] = o;

            var s = {
              tint: new Float32Array([1, 1, 1, 1]),
              translationMatrix: new ce(),
              default: Wr.from({
                uSamplers: n
              }, !0)
            },
                a = t.plugins[r]._shader.program;
            Jo[r] = new Pi(a, s);
          }

          e = Jo[r];
        }

        return e;
      }, e.prototype._calculateBounds = function () {
        this.finishPoly();
        var t = this._geometry;

        if (t.graphicsData.length) {
          var e = t.bounds,
              r = e.minX,
              i = e.minY,
              n = e.maxX,
              o = e.maxY;

          this._bounds.addFrame(this.transform, r, i, n, o);
        }
      }, e.prototype.containsPoint = function (t) {
        return this.worldTransform.applyInverse(t, e._TEMP_POINT), this._geometry.containsPoint(e._TEMP_POINT);
      }, e.prototype.calculateTints = function () {
        if (this.batchTint !== this.tint) {
          this.batchTint = this.tint;

          for (var t = Nt(this.tint, Zo), e = 0; e < this.batches.length; e++) {
            var r = this.batches[e],
                i = r._batchRGB,
                n = (t[0] * i[0] * 255 << 16) + (t[1] * i[1] * 255 << 8) + (0 | t[2] * i[2] * 255);
            r._tintRGB = (n >> 16) + (65280 & n) + ((255 & n) << 16);
          }
        }
      }, e.prototype.calculateVertices = function () {
        var t = this.transform._worldID;

        if (this._transformID !== t) {
          this._transformID = t;

          for (var e = this.transform.worldTransform, r = e.a, i = e.b, n = e.c, o = e.d, s = e.tx, a = e.ty, h = this._geometry.points, u = this.vertexData, l = 0, c = 0; c < h.length; c += 2) {
            var d = h[c],
                f = h[c + 1];
            u[l++] = r * d + n * f + s, u[l++] = o * f + i * d + a;
          }
        }
      }, e.prototype.closePath = function () {
        var t = this.currentPath;
        return t && (t.closeStroke = !0, this.finishPoly()), this;
      }, e.prototype.setMatrix = function (t) {
        return this._matrix = t, this;
      }, e.prototype.beginHole = function () {
        return this.finishPoly(), this._holeMode = !0, this;
      }, e.prototype.endHole = function () {
        return this.finishPoly(), this._holeMode = !1, this;
      }, e.prototype.destroy = function (e) {
        this._geometry.refCount--, 0 === this._geometry.refCount && this._geometry.dispose(), this._matrix = null, this.currentPath = null, this._lineStyle.destroy(), this._lineStyle = null, this._fillStyle.destroy(), this._fillStyle = null, this._geometry = null, this.shader = null, this.vertexData = null, this.batches.length = 0, this.batches = null, t.prototype.destroy.call(this, e);
      }, e.nextRoundedRectBehavior = !1, e._TEMP_POINT = new ie(), e;
    }(We),
        $o = function (t, e) {
      return $o = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      }, $o(t, e);
    },
        ts = new ie(),
        es = new Uint16Array([0, 1, 2, 0, 2, 3]),
        rs = function (t) {
      function e(e) {
        var r = t.call(this) || this;
        return r._anchor = new le(r._onAnchorUpdate, r, e ? e.defaultAnchor.x : 0, e ? e.defaultAnchor.y : 0), r._texture = null, r._width = 0, r._height = 0, r._tint = null, r._tintRGB = null, r.tint = 16777215, r.blendMode = nt.NORMAL, r._cachedTint = 16777215, r.uvs = null, r.texture = e || Dr.EMPTY, r.vertexData = new Float32Array(8), r.vertexTrimmedData = null, r._transformID = -1, r._textureID = -1, r._transformTrimmedID = -1, r._textureTrimmedID = -1, r.indices = es, r.pluginName = "batch", r.isSprite = !0, r._roundPixels = Et.ROUND_PIXELS, r;
      }

      return function (t, e) {
        function r() {
          this.constructor = t;
        }

        $o(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
      }(e, t), e.prototype._onTextureUpdate = function () {
        this._textureID = -1, this._textureTrimmedID = -1, this._cachedTint = 16777215, this._width && (this.scale.x = Ht(this.scale.x) * this._width / this._texture.orig.width), this._height && (this.scale.y = Ht(this.scale.y) * this._height / this._texture.orig.height);
      }, e.prototype._onAnchorUpdate = function () {
        this._transformID = -1, this._transformTrimmedID = -1;
      }, e.prototype.calculateVertices = function () {
        var t = this._texture;

        if (this._transformID !== this.transform._worldID || this._textureID !== t._updateID) {
          this._textureID !== t._updateID && (this.uvs = this._texture._uvs.uvsFloat32), this._transformID = this.transform._worldID, this._textureID = t._updateID;
          var e = this.transform.worldTransform,
              r = e.a,
              i = e.b,
              n = e.c,
              o = e.d,
              s = e.tx,
              a = e.ty,
              h = this.vertexData,
              u = t.trim,
              l = t.orig,
              c = this._anchor,
              d = 0,
              f = 0,
              p = 0,
              _ = 0;
          if (u ? (d = (f = u.x - c._x * l.width) + u.width, p = (_ = u.y - c._y * l.height) + u.height) : (d = (f = -c._x * l.width) + l.width, p = (_ = -c._y * l.height) + l.height), h[0] = r * f + n * _ + s, h[1] = o * _ + i * f + a, h[2] = r * d + n * _ + s, h[3] = o * _ + i * d + a, h[4] = r * d + n * p + s, h[5] = o * p + i * d + a, h[6] = r * f + n * p + s, h[7] = o * p + i * f + a, this._roundPixels) for (var v = Et.RESOLUTION, m = 0; m < h.length; ++m) h[m] = Math.round((h[m] * v | 0) / v);
        }
      }, e.prototype.calculateTrimmedVertices = function () {
        if (this.vertexTrimmedData) {
          if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID) return;
        } else this.vertexTrimmedData = new Float32Array(8);

        this._transformTrimmedID = this.transform._worldID, this._textureTrimmedID = this._texture._updateID;
        var t = this._texture,
            e = this.vertexTrimmedData,
            r = t.orig,
            i = this._anchor,
            n = this.transform.worldTransform,
            o = n.a,
            s = n.b,
            a = n.c,
            h = n.d,
            u = n.tx,
            l = n.ty,
            c = -i._x * r.width,
            d = c + r.width,
            f = -i._y * r.height,
            p = f + r.height;
        e[0] = o * c + a * f + u, e[1] = h * f + s * c + l, e[2] = o * d + a * f + u, e[3] = h * f + s * d + l, e[4] = o * d + a * p + u, e[5] = h * p + s * d + l, e[6] = o * c + a * p + u, e[7] = h * p + s * c + l;
      }, e.prototype._render = function (t) {
        this.calculateVertices(), t.batch.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this);
      }, e.prototype._calculateBounds = function () {
        var t = this._texture.trim,
            e = this._texture.orig;
        !t || t.width === e.width && t.height === e.height ? (this.calculateVertices(), this._bounds.addQuad(this.vertexData)) : (this.calculateTrimmedVertices(), this._bounds.addQuad(this.vertexTrimmedData));
      }, e.prototype.getLocalBounds = function (e) {
        return 0 === this.children.length ? (this._localBounds || (this._localBounds = new Te()), this._localBounds.minX = this._texture.orig.width * -this._anchor._x, this._localBounds.minY = this._texture.orig.height * -this._anchor._y, this._localBounds.maxX = this._texture.orig.width * (1 - this._anchor._x), this._localBounds.maxY = this._texture.orig.height * (1 - this._anchor._y), e || (this._localBoundsRect || (this._localBoundsRect = new oe()), e = this._localBoundsRect), this._localBounds.getRectangle(e)) : t.prototype.getLocalBounds.call(this, e);
      }, e.prototype.containsPoint = function (t) {
        this.worldTransform.applyInverse(t, ts);
        var e = this._texture.orig.width,
            r = this._texture.orig.height,
            i = -e * this.anchor.x,
            n = 0;
        return ts.x >= i && ts.x < i + e && (n = -r * this.anchor.y, ts.y >= n && ts.y < n + r);
      }, e.prototype.destroy = function (e) {
        if (t.prototype.destroy.call(this, e), this._texture.off("update", this._onTextureUpdate, this), this._anchor = null, "boolean" == typeof e ? e : e && e.texture) {
          var r = "boolean" == typeof e ? e : e && e.baseTexture;

          this._texture.destroy(!!r);
        }

        this._texture = null;
      }, e.from = function (t, r) {
        return new e(t instanceof Dr ? t : Dr.from(t, r));
      }, Object.defineProperty(e.prototype, "roundPixels", {
        get: function () {
          return this._roundPixels;
        },
        set: function (t) {
          this._roundPixels !== t && (this._transformID = -1), this._roundPixels = t;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "width", {
        get: function () {
          return Math.abs(this.scale.x) * this._texture.orig.width;
        },
        set: function (t) {
          var e = Ht(this.scale.x) || 1;
          this.scale.x = e * t / this._texture.orig.width, this._width = t;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "height", {
        get: function () {
          return Math.abs(this.scale.y) * this._texture.orig.height;
        },
        set: function (t) {
          var e = Ht(this.scale.y) || 1;
          this.scale.y = e * t / this._texture.orig.height, this._height = t;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "anchor", {
        get: function () {
          return this._anchor;
        },
        set: function (t) {
          this._anchor.copyFrom(t);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "tint", {
        get: function () {
          return this._tint;
        },
        set: function (t) {
          this._tint = t, this._tintRGB = (t >> 16) + (65280 & t) + ((255 & t) << 16);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "texture", {
        get: function () {
          return this._texture;
        },
        set: function (t) {
          this._texture !== t && (this._texture && this._texture.off("update", this._onTextureUpdate, this), this._texture = t || Dr.EMPTY, this._cachedTint = 16777215, this._textureID = -1, this._textureTrimmedID = -1, t && (t.baseTexture.valid ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this)));
        },
        enumerable: !1,
        configurable: !0
      }), e;
    }(We),
        is = function (t, e) {
      return is = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      }, is(t, e);
    };

    !function (t) {
      t[t.LINEAR_VERTICAL = 0] = "LINEAR_VERTICAL", t[t.LINEAR_HORIZONTAL = 1] = "LINEAR_HORIZONTAL";
    }(Uo || (Uo = {}));

    var ns = {
      align: "left",
      breakWords: !1,
      dropShadow: !1,
      dropShadowAlpha: 1,
      dropShadowAngle: Math.PI / 6,
      dropShadowBlur: 0,
      dropShadowColor: "black",
      dropShadowDistance: 5,
      fill: "black",
      fillGradientType: Uo.LINEAR_VERTICAL,
      fillGradientStops: [],
      fontFamily: "Arial",
      fontSize: 26,
      fontStyle: "normal",
      fontVariant: "normal",
      fontWeight: "normal",
      letterSpacing: 0,
      lineHeight: 0,
      lineJoin: "miter",
      miterLimit: 10,
      padding: 0,
      stroke: "black",
      strokeThickness: 0,
      textBaseline: "alphabetic",
      trim: !1,
      whiteSpace: "pre",
      wordWrap: !1,
      wordWrapWidth: 100,
      leading: 0
    },
        os = ["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui"],
        ss = function () {
      function t(t) {
        this.styleID = 0, this.reset(), us(this, t, t);
      }

      return t.prototype.clone = function () {
        var e = {};
        return us(e, this, ns), new t(e);
      }, t.prototype.reset = function () {
        us(this, ns, ns);
      }, Object.defineProperty(t.prototype, "align", {
        get: function () {
          return this._align;
        },
        set: function (t) {
          this._align !== t && (this._align = t, this.styleID++);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "breakWords", {
        get: function () {
          return this._breakWords;
        },
        set: function (t) {
          this._breakWords !== t && (this._breakWords = t, this.styleID++);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "dropShadow", {
        get: function () {
          return this._dropShadow;
        },
        set: function (t) {
          this._dropShadow !== t && (this._dropShadow = t, this.styleID++);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "dropShadowAlpha", {
        get: function () {
          return this._dropShadowAlpha;
        },
        set: function (t) {
          this._dropShadowAlpha !== t && (this._dropShadowAlpha = t, this.styleID++);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "dropShadowAngle", {
        get: function () {
          return this._dropShadowAngle;
        },
        set: function (t) {
          this._dropShadowAngle !== t && (this._dropShadowAngle = t, this.styleID++);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "dropShadowBlur", {
        get: function () {
          return this._dropShadowBlur;
        },
        set: function (t) {
          this._dropShadowBlur !== t && (this._dropShadowBlur = t, this.styleID++);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "dropShadowColor", {
        get: function () {
          return this._dropShadowColor;
        },
        set: function (t) {
          var e = hs(t);
          this._dropShadowColor !== e && (this._dropShadowColor = e, this.styleID++);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "dropShadowDistance", {
        get: function () {
          return this._dropShadowDistance;
        },
        set: function (t) {
          this._dropShadowDistance !== t && (this._dropShadowDistance = t, this.styleID++);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "fill", {
        get: function () {
          return this._fill;
        },
        set: function (t) {
          var e = hs(t);
          this._fill !== e && (this._fill = e, this.styleID++);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "fillGradientType", {
        get: function () {
          return this._fillGradientType;
        },
        set: function (t) {
          this._fillGradientType !== t && (this._fillGradientType = t, this.styleID++);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "fillGradientStops", {
        get: function () {
          return this._fillGradientStops;
        },
        set: function (t) {
          (function (t, e) {
            if (!Array.isArray(t) || !Array.isArray(e)) return !1;
            if (t.length !== e.length) return !1;

            for (var r = 0; r < t.length; ++r) if (t[r] !== e[r]) return !1;

            return !0;
          })(this._fillGradientStops, t) || (this._fillGradientStops = t, this.styleID++);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "fontFamily", {
        get: function () {
          return this._fontFamily;
        },
        set: function (t) {
          this.fontFamily !== t && (this._fontFamily = t, this.styleID++);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "fontSize", {
        get: function () {
          return this._fontSize;
        },
        set: function (t) {
          this._fontSize !== t && (this._fontSize = t, this.styleID++);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "fontStyle", {
        get: function () {
          return this._fontStyle;
        },
        set: function (t) {
          this._fontStyle !== t && (this._fontStyle = t, this.styleID++);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "fontVariant", {
        get: function () {
          return this._fontVariant;
        },
        set: function (t) {
          this._fontVariant !== t && (this._fontVariant = t, this.styleID++);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "fontWeight", {
        get: function () {
          return this._fontWeight;
        },
        set: function (t) {
          this._fontWeight !== t && (this._fontWeight = t, this.styleID++);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "letterSpacing", {
        get: function () {
          return this._letterSpacing;
        },
        set: function (t) {
          this._letterSpacing !== t && (this._letterSpacing = t, this.styleID++);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "lineHeight", {
        get: function () {
          return this._lineHeight;
        },
        set: function (t) {
          this._lineHeight !== t && (this._lineHeight = t, this.styleID++);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "leading", {
        get: function () {
          return this._leading;
        },
        set: function (t) {
          this._leading !== t && (this._leading = t, this.styleID++);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "lineJoin", {
        get: function () {
          return this._lineJoin;
        },
        set: function (t) {
          this._lineJoin !== t && (this._lineJoin = t, this.styleID++);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "miterLimit", {
        get: function () {
          return this._miterLimit;
        },
        set: function (t) {
          this._miterLimit !== t && (this._miterLimit = t, this.styleID++);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "padding", {
        get: function () {
          return this._padding;
        },
        set: function (t) {
          this._padding !== t && (this._padding = t, this.styleID++);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "stroke", {
        get: function () {
          return this._stroke;
        },
        set: function (t) {
          var e = hs(t);
          this._stroke !== e && (this._stroke = e, this.styleID++);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "strokeThickness", {
        get: function () {
          return this._strokeThickness;
        },
        set: function (t) {
          this._strokeThickness !== t && (this._strokeThickness = t, this.styleID++);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "textBaseline", {
        get: function () {
          return this._textBaseline;
        },
        set: function (t) {
          this._textBaseline !== t && (this._textBaseline = t, this.styleID++);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "trim", {
        get: function () {
          return this._trim;
        },
        set: function (t) {
          this._trim !== t && (this._trim = t, this.styleID++);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "whiteSpace", {
        get: function () {
          return this._whiteSpace;
        },
        set: function (t) {
          this._whiteSpace !== t && (this._whiteSpace = t, this.styleID++);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "wordWrap", {
        get: function () {
          return this._wordWrap;
        },
        set: function (t) {
          this._wordWrap !== t && (this._wordWrap = t, this.styleID++);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t.prototype, "wordWrapWidth", {
        get: function () {
          return this._wordWrapWidth;
        },
        set: function (t) {
          this._wordWrapWidth !== t && (this._wordWrapWidth = t, this.styleID++);
        },
        enumerable: !1,
        configurable: !0
      }), t.prototype.toFontString = function () {
        var t = "number" == typeof this.fontSize ? this.fontSize + "px" : this.fontSize,
            e = this.fontFamily;
        Array.isArray(this.fontFamily) || (e = this.fontFamily.split(","));

        for (var r = e.length - 1; r >= 0; r--) {
          var i = e[r].trim();
          !/([\"\'])[^\'\"]+\1/.test(i) && os.indexOf(i) < 0 && (i = '"' + i + '"'), e[r] = i;
        }

        return this.fontStyle + " " + this.fontVariant + " " + this.fontWeight + " " + t + " " + e.join(",");
      }, t;
    }();

    function as(t) {
      return "number" == typeof t ? Mt(t) : ("string" == typeof t && 0 === t.indexOf("0x") && (t = t.replace("0x", "#")), t);
    }

    function hs(t) {
      if (Array.isArray(t)) {
        for (var e = 0; e < t.length; ++e) t[e] = as(t[e]);

        return t;
      }

      return as(t);
    }

    function us(t, e, r) {
      for (var i in r) Array.isArray(e[i]) ? t[i] = e[i].slice() : t[i] = e[i];
    }

    var ls = function () {
      function t(t, e, r, i, n, o, s, a, h) {
        this.text = t, this.style = e, this.width = r, this.height = i, this.lines = n, this.lineWidths = o, this.lineHeight = s, this.maxLineWidth = a, this.fontProperties = h;
      }

      return t.measureText = function (e, r, i, n) {
        void 0 === n && (n = t._canvas), i = null == i ? r.wordWrap : i;
        var o = r.toFontString(),
            s = t.measureFont(o);
        0 === s.fontSize && (s.fontSize = r.fontSize, s.ascent = r.fontSize);
        var a = n.getContext("2d");
        a.font = o;

        for (var h = (i ? t.wordWrap(e, r, n) : e).split(/(?:\r\n|\r|\n)/), u = new Array(h.length), l = 0, c = 0; c < h.length; c++) {
          var d = a.measureText(h[c]).width + (h[c].length - 1) * r.letterSpacing;
          u[c] = d, l = Math.max(l, d);
        }

        var f = l + r.strokeThickness;
        r.dropShadow && (f += r.dropShadowDistance);

        var p = r.lineHeight || s.fontSize + r.strokeThickness,
            _ = Math.max(p, s.fontSize + r.strokeThickness) + (h.length - 1) * (p + r.leading);

        return r.dropShadow && (_ += r.dropShadowDistance), new t(e, r, f, _, h, u, p + r.leading, l, s);
      }, t.wordWrap = function (e, r, i) {
        void 0 === i && (i = t._canvas);

        for (var n = i.getContext("2d"), o = 0, s = "", a = "", h = Object.create(null), u = r.letterSpacing, l = r.whiteSpace, c = t.collapseSpaces(l), d = t.collapseNewlines(l), f = !c, p = r.wordWrapWidth + u, _ = t.tokenize(e), v = 0; v < _.length; v++) {
          var m = _[v];

          if (t.isNewline(m)) {
            if (!d) {
              a += t.addLine(s), f = !c, s = "", o = 0;
              continue;
            }

            m = " ";
          }

          if (c) {
            var g = t.isBreakingSpace(m),
                y = t.isBreakingSpace(s[s.length - 1]);
            if (g && y) continue;
          }

          var E = t.getFromCache(m, u, h, n);
          if (E > p) {
            if ("" !== s && (a += t.addLine(s), s = "", o = 0), t.canBreakWords(m, r.breakWords)) for (var T = t.wordWrapSplit(m), b = 0; b < T.length; b++) {
              for (var x = T[b], R = 1; T[b + R];) {
                var A = T[b + R],
                    O = x[x.length - 1];
                if (t.canBreakChars(O, A, m, b, r.breakWords)) break;
                x += A, R++;
              }

              b += x.length - 1;
              var S = t.getFromCache(x, u, h, n);
              S + o > p && (a += t.addLine(s), f = !1, s = "", o = 0), s += x, o += S;
            } else {
              s.length > 0 && (a += t.addLine(s), s = "", o = 0);
              var I = v === _.length - 1;
              a += t.addLine(m, !I), f = !1, s = "", o = 0;
            }
          } else E + o > p && (f = !1, a += t.addLine(s), s = "", o = 0), (s.length > 0 || !t.isBreakingSpace(m) || f) && (s += m, o += E);
        }

        return a + t.addLine(s, !1);
      }, t.addLine = function (e, r) {
        return void 0 === r && (r = !0), e = t.trimRight(e), r ? e + "\n" : e;
      }, t.getFromCache = function (t, e, r, i) {
        var n = r[t];

        if ("number" != typeof n) {
          var o = t.length * e;
          n = i.measureText(t).width + o, r[t] = n;
        }

        return n;
      }, t.collapseSpaces = function (t) {
        return "normal" === t || "pre-line" === t;
      }, t.collapseNewlines = function (t) {
        return "normal" === t;
      }, t.trimRight = function (e) {
        if ("string" != typeof e) return "";

        for (var r = e.length - 1; r >= 0; r--) {
          var i = e[r];
          if (!t.isBreakingSpace(i)) break;
          e = e.slice(0, -1);
        }

        return e;
      }, t.isNewline = function (e) {
        return "string" == typeof e && t._newlines.indexOf(e.charCodeAt(0)) >= 0;
      }, t.isBreakingSpace = function (e, r) {
        return "string" == typeof e && t._breakingSpaces.indexOf(e.charCodeAt(0)) >= 0;
      }, t.tokenize = function (e) {
        var r = [],
            i = "";
        if ("string" != typeof e) return r;

        for (var n = 0; n < e.length; n++) {
          var o = e[n],
              s = e[n + 1];
          t.isBreakingSpace(o, s) || t.isNewline(o) ? ("" !== i && (r.push(i), i = ""), r.push(o)) : i += o;
        }

        return "" !== i && r.push(i), r;
      }, t.canBreakWords = function (t, e) {
        return e;
      }, t.canBreakChars = function (t, e, r, i, n) {
        return !0;
      }, t.wordWrapSplit = function (t) {
        return t.split("");
      }, t.measureFont = function (e) {
        if (t._fonts[e]) return t._fonts[e];
        var r = {
          ascent: 0,
          descent: 0,
          fontSize: 0
        },
            i = t._canvas,
            n = t._context;
        n.font = e;
        var o = t.METRICS_STRING + t.BASELINE_SYMBOL,
            s = Math.ceil(n.measureText(o).width),
            a = Math.ceil(n.measureText(t.BASELINE_SYMBOL).width),
            h = Math.ceil(t.HEIGHT_MULTIPLIER * a);
        a = a * t.BASELINE_MULTIPLIER | 0, i.width = s, i.height = h, n.fillStyle = "#f00", n.fillRect(0, 0, s, h), n.font = e, n.textBaseline = "alphabetic", n.fillStyle = "#000", n.fillText(o, 0, a);
        var u = n.getImageData(0, 0, s, h).data,
            l = u.length,
            c = 4 * s,
            d = 0,
            f = 0,
            p = !1;

        for (d = 0; d < a; ++d) {
          for (var _ = 0; _ < c; _ += 4) if (255 !== u[f + _]) {
            p = !0;
            break;
          }

          if (p) break;
          f += c;
        }

        for (r.ascent = a - d, f = l - c, p = !1, d = h; d > a; --d) {
          for (_ = 0; _ < c; _ += 4) if (255 !== u[f + _]) {
            p = !0;
            break;
          }

          if (p) break;
          f -= c;
        }

        return r.descent = d - a, r.fontSize = r.ascent + r.descent, t._fonts[e] = r, r;
      }, t.clearMetrics = function (e) {
        void 0 === e && (e = ""), e ? delete t._fonts[e] : t._fonts = {};
      }, Object.defineProperty(t, "_canvas", {
        get: function () {
          if (!t.__canvas) {
            var e = void 0;

            try {
              var r = new OffscreenCanvas(0, 0),
                  i = r.getContext("2d");
              if (i && i.measureText) return t.__canvas = r, r;
              e = document.createElement("canvas");
            } catch (t) {
              e = document.createElement("canvas");
            }

            e.width = e.height = 10, t.__canvas = e;
          }

          return t.__canvas;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(t, "_context", {
        get: function () {
          return t.__context || (t.__context = t._canvas.getContext("2d")), t.__context;
        },
        enumerable: !1,
        configurable: !0
      }), t;
    }();

    ls._fonts = {}, ls.METRICS_STRING = "|ÉqÅ", ls.BASELINE_SYMBOL = "M", ls.BASELINE_MULTIPLIER = 1.4, ls.HEIGHT_MULTIPLIER = 2, ls._newlines = [10, 13], ls._breakingSpaces = [9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287, 12288];

    var cs = {
      texture: !0,
      children: !1,
      baseTexture: !0
    },
        ds = function (t) {
      function e(e, r, i) {
        var n = this,
            o = !1;
        i || (i = document.createElement("canvas"), o = !0), i.width = 3, i.height = 3;
        var s = Dr.from(i);
        return s.orig = new oe(), s.trim = new oe(), (n = t.call(this, s) || this)._ownCanvas = o, n.canvas = i, n.context = n.canvas.getContext("2d"), n._resolution = Et.RESOLUTION, n._autoResolution = !0, n._text = null, n._style = null, n._styleListener = null, n._font = "", n.text = e, n.style = r, n.localStyleID = -1, n;
      }

      return function (t, e) {
        function r() {
          this.constructor = t;
        }

        is(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
      }(e, t), e.prototype.updateText = function (t) {
        var r = this._style;

        if (this.localStyleID !== r.styleID && (this.dirty = !0, this.localStyleID = r.styleID), this.dirty || !t) {
          this._font = this._style.toFontString();
          var i,
              n,
              o = this.context,
              s = ls.measureText(this._text || " ", this._style, this._style.wordWrap, this.canvas),
              a = s.width,
              h = s.height,
              u = s.lines,
              l = s.lineHeight,
              c = s.lineWidths,
              d = s.maxLineWidth,
              f = s.fontProperties;
          this.canvas.width = Math.ceil(Math.ceil(Math.max(1, a) + 2 * r.padding) * this._resolution), this.canvas.height = Math.ceil(Math.ceil(Math.max(1, h) + 2 * r.padding) * this._resolution), o.scale(this._resolution, this._resolution), o.clearRect(0, 0, this.canvas.width, this.canvas.height), o.font = this._font, o.lineWidth = r.strokeThickness, o.textBaseline = r.textBaseline, o.lineJoin = r.lineJoin, o.miterLimit = r.miterLimit;

          for (var p = r.dropShadow ? 2 : 1, _ = 0; _ < p; ++_) {
            var v = r.dropShadow && 0 === _,
                m = v ? Math.ceil(Math.max(1, h) + 2 * r.padding) : 0,
                g = m * this._resolution;

            if (v) {
              o.fillStyle = "black", o.strokeStyle = "black";
              var y = r.dropShadowColor,
                  E = Nt("number" == typeof y ? y : Dt(y)),
                  T = r.dropShadowBlur * this._resolution,
                  b = r.dropShadowDistance * this._resolution;
              o.shadowColor = "rgba(" + 255 * E[0] + "," + 255 * E[1] + "," + 255 * E[2] + "," + r.dropShadowAlpha + ")", o.shadowBlur = T, o.shadowOffsetX = Math.cos(r.dropShadowAngle) * b, o.shadowOffsetY = Math.sin(r.dropShadowAngle) * b + g;
            } else o.fillStyle = this._generateFillStyle(r, u, s), o.strokeStyle = r.stroke, o.shadowColor = "black", o.shadowBlur = 0, o.shadowOffsetX = 0, o.shadowOffsetY = 0;

            var x = (l - f.fontSize) / 2;
            (!e.nextLineHeightBehavior || l - f.fontSize < 0) && (x = 0);

            for (var R = 0; R < u.length; R++) i = r.strokeThickness / 2, n = r.strokeThickness / 2 + R * l + f.ascent + x, "right" === r.align ? i += d - c[R] : "center" === r.align && (i += (d - c[R]) / 2), r.stroke && r.strokeThickness && this.drawLetterSpacing(u[R], i + r.padding, n + r.padding - m, !0), r.fill && this.drawLetterSpacing(u[R], i + r.padding, n + r.padding - m);
          }

          this.updateTexture();
        }
      }, e.prototype.drawLetterSpacing = function (t, r, i, n) {
        void 0 === n && (n = !1);
        var o = this._style.letterSpacing,
            s = e.experimentalLetterSpacing && ("letterSpacing" in CanvasRenderingContext2D.prototype || "textLetterSpacing" in CanvasRenderingContext2D.prototype);
        if (0 === o || s) return s && (this.context.letterSpacing = o, this.context.textLetterSpacing = o), void (n ? this.context.strokeText(t, r, i) : this.context.fillText(t, r, i));

        for (var a = r, h = Array.from ? Array.from(t) : t.split(""), u = this.context.measureText(t).width, l = 0, c = 0; c < h.length; ++c) {
          var d = h[c];
          n ? this.context.strokeText(d, a, i) : this.context.fillText(d, a, i);

          for (var f = "", p = c + 1; p < h.length; ++p) f += h[p];

          a += u - (l = this.context.measureText(f).width) + o, u = l;
        }
      }, e.prototype.updateTexture = function () {
        var t = this.canvas;

        if (this._style.trim) {
          var e = function (t) {
            var e,
                r,
                i,
                n = t.width,
                o = t.height,
                s = t.getContext("2d"),
                a = s.getImageData(0, 0, n, o).data,
                h = a.length,
                u = {
              top: null,
              left: null,
              right: null,
              bottom: null
            },
                l = null;

            for (e = 0; e < h; e += 4) 0 !== a[e + 3] && (r = e / 4 % n, i = ~~(e / 4 / n), null === u.top && (u.top = i), (null === u.left || r < u.left) && (u.left = r), (null === u.right || u.right < r) && (u.right = r + 1), (null === u.bottom || u.bottom < i) && (u.bottom = i));

            return null !== u.top && (n = u.right - u.left, o = u.bottom - u.top + 1, l = s.getImageData(u.left, u.top, n, o)), {
              height: o,
              width: n,
              data: l
            };
          }(t);

          e.data && (t.width = e.width, t.height = e.height, this.context.putImageData(e.data, 0, 0));
        }

        var r = this._texture,
            i = this._style,
            n = i.trim ? 0 : i.padding,
            o = r.baseTexture;
        r.trim.width = r._frame.width = t.width / this._resolution, r.trim.height = r._frame.height = t.height / this._resolution, r.trim.x = -n, r.trim.y = -n, r.orig.width = r._frame.width - 2 * n, r.orig.height = r._frame.height - 2 * n, this._onTextureUpdate(), o.setRealSize(t.width, t.height, this._resolution), r.updateUvs(), this._recursivePostUpdateTransform(), this.dirty = !1;
      }, e.prototype._render = function (e) {
        this._autoResolution && this._resolution !== e.resolution && (this._resolution = e.resolution, this.dirty = !0), this.updateText(!0), t.prototype._render.call(this, e);
      }, e.prototype.getLocalBounds = function (e) {
        return this.updateText(!0), t.prototype.getLocalBounds.call(this, e);
      }, e.prototype._calculateBounds = function () {
        this.updateText(!0), this.calculateVertices(), this._bounds.addQuad(this.vertexData);
      }, e.prototype._generateFillStyle = function (t, e, r) {
        var i,
            n = t.fill;
        if (!Array.isArray(n)) return n;
        if (1 === n.length) return n[0];
        var o = t.dropShadow ? t.dropShadowDistance : 0,
            s = t.padding || 0,
            a = this.canvas.width / this._resolution - o - 2 * s,
            h = this.canvas.height / this._resolution - o - 2 * s,
            u = n.slice(),
            l = t.fillGradientStops.slice();
        if (!l.length) for (var c = u.length + 1, d = 1; d < c; ++d) l.push(d / c);

        if (u.unshift(n[0]), l.unshift(0), u.push(n[n.length - 1]), l.push(1), t.fillGradientType === Uo.LINEAR_VERTICAL) {
          i = this.context.createLinearGradient(a / 2, s, a / 2, h + s);
          var f = r.fontProperties.fontSize + t.strokeThickness;

          for (d = 0; d < e.length; d++) {
            var p = r.lineHeight * (d - 1) + f,
                _ = r.lineHeight * d,
                v = _;

            d > 0 && p > _ && (v = (_ + p) / 2);
            var m = _ + f,
                g = r.lineHeight * (d + 1),
                y = m;
            d + 1 < e.length && g < m && (y = (m + g) / 2);

            for (var E = (y - v) / h, T = 0; T < u.length; T++) {
              var b;
              b = "number" == typeof l[T] ? l[T] : T / u.length;
              var x = Math.min(1, Math.max(0, v / h + b * E));
              x = Number(x.toFixed(5)), i.addColorStop(x, u[T]);
            }
          }
        } else {
          i = this.context.createLinearGradient(s, h / 2, a + s, h / 2);
          var R = u.length + 1,
              A = 1;

          for (d = 0; d < u.length; d++) {
            var O;
            O = "number" == typeof l[d] ? l[d] : A / R, i.addColorStop(O, u[d]), A++;
          }
        }

        return i;
      }, e.prototype.destroy = function (e) {
        "boolean" == typeof e && (e = {
          children: e
        }), e = Object.assign({}, cs, e), t.prototype.destroy.call(this, e), this._ownCanvas && (this.canvas.height = this.canvas.width = 0), this.context = null, this.canvas = null, this._style = null;
      }, Object.defineProperty(e.prototype, "width", {
        get: function () {
          return this.updateText(!0), Math.abs(this.scale.x) * this._texture.orig.width;
        },
        set: function (t) {
          this.updateText(!0);
          var e = Ht(this.scale.x) || 1;
          this.scale.x = e * t / this._texture.orig.width, this._width = t;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "height", {
        get: function () {
          return this.updateText(!0), Math.abs(this.scale.y) * this._texture.orig.height;
        },
        set: function (t) {
          this.updateText(!0);
          var e = Ht(this.scale.y) || 1;
          this.scale.y = e * t / this._texture.orig.height, this._height = t;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "style", {
        get: function () {
          return this._style;
        },
        set: function (t) {
          t = t || {}, this._style = t instanceof ss ? t : new ss(t), this.localStyleID = -1, this.dirty = !0;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "text", {
        get: function () {
          return this._text;
        },
        set: function (t) {
          t = String(null == t ? "" : t), this._text !== t && (this._text = t, this.dirty = !0);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "resolution", {
        get: function () {
          return this._resolution;
        },
        set: function (t) {
          this._autoResolution = !1, this._resolution !== t && (this._resolution = t, this.dirty = !0);
        },
        enumerable: !1,
        configurable: !0
      }), e.nextLineHeightBehavior = !1, e.experimentalLetterSpacing = !1, e;
    }(rs);

    Et.UPLOADS_PER_FRAME = 4;

    var fs = function (t, e) {
      return fs = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      }, fs(t, e);
    },
        ps = function () {
      function t(t) {
        this.maxItemsPerFrame = t, this.itemsLeft = 0;
      }

      return t.prototype.beginFrame = function () {
        this.itemsLeft = this.maxItemsPerFrame;
      }, t.prototype.allowedToUpload = function () {
        return this.itemsLeft-- > 0;
      }, t;
    }();

    function _s(t, e) {
      var r = !1;
      if (t && t._textures && t._textures.length) for (var i = 0; i < t._textures.length; i++) if (t._textures[i] instanceof Dr) {
        var n = t._textures[i].baseTexture;
        -1 === e.indexOf(n) && (e.push(n), r = !0);
      }
      return r;
    }

    function vs(t, e) {
      if (t.baseTexture instanceof _r) {
        var r = t.baseTexture;
        return -1 === e.indexOf(r) && e.push(r), !0;
      }

      return !1;
    }

    function ms(t, e) {
      if (t._texture && t._texture instanceof Dr) {
        var r = t._texture.baseTexture;
        return -1 === e.indexOf(r) && e.push(r), !0;
      }

      return !1;
    }

    function gs(t, e) {
      return e instanceof ds && (e.updateText(!0), !0);
    }

    function ys(t, e) {
      if (e instanceof ss) {
        var r = e.toFontString();
        return ls.measureFont(r), !0;
      }

      return !1;
    }

    function Es(t, e) {
      if (t instanceof ds) {
        -1 === e.indexOf(t.style) && e.push(t.style), -1 === e.indexOf(t) && e.push(t);
        var r = t._texture.baseTexture;
        return -1 === e.indexOf(r) && e.push(r), !0;
      }

      return !1;
    }

    function Ts(t, e) {
      return t instanceof ss && (-1 === e.indexOf(t) && e.push(t), !0);
    }

    function bs(t, e) {
      return e instanceof _r && (e._glTextures[t.CONTEXT_UID] || t.texture.bind(e), !0);
    }

    function xs(t, e) {
      if (!(e instanceof Qo)) return !1;
      var r = e.geometry;
      e.finishPoly(), r.updateBatches();

      for (var i = r.batches, n = 0; n < i.length; n++) {
        var o = i[n].style.texture;
        o && bs(t, o.baseTexture);
      }

      return r.batchable || t.geometry.bind(r, e._resolveDirectShader(t)), !0;
    }

    function Rs(t, e) {
      return t instanceof Qo && (e.push(t), !0);
    }

    var As = function (t) {
      function e(e) {
        var r = t.call(this, e) || this;
        return r.uploadHookHelper = r.renderer, r.registerFindHook(Rs), r.registerUploadHook(bs), r.registerUploadHook(xs), r;
      }

      return function (t, e) {
        function r() {
          this.constructor = t;
        }

        fs(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
      }(e, t), e;
    }(function () {
      function t(t) {
        var e = this;
        this.limiter = new ps(Et.UPLOADS_PER_FRAME), this.renderer = t, this.uploadHookHelper = null, this.queue = [], this.addHooks = [], this.uploadHooks = [], this.completes = [], this.ticking = !1, this.delayedTick = function () {
          e.queue && e.prepareItems();
        }, this.registerFindHook(Es), this.registerFindHook(Ts), this.registerFindHook(_s), this.registerFindHook(vs), this.registerFindHook(ms), this.registerUploadHook(gs), this.registerUploadHook(ys);
      }

      return t.prototype.upload = function (t, e) {
        "function" == typeof t && (e = t, t = null), t && this.add(t), this.queue.length ? (e && this.completes.push(e), this.ticking || (this.ticking = !0, Ze.system.addOnce(this.tick, this, ze.UTILITY))) : e && e();
      }, t.prototype.tick = function () {
        setTimeout(this.delayedTick, 0);
      }, t.prototype.prepareItems = function () {
        for (this.limiter.beginFrame(); this.queue.length && this.limiter.allowedToUpload();) {
          var t = this.queue[0],
              e = !1;
          if (t && !t._destroyed) for (var r = 0, i = this.uploadHooks.length; r < i; r++) if (this.uploadHooks[r](this.uploadHookHelper, t)) {
            this.queue.shift(), e = !0;
            break;
          }
          e || this.queue.shift();
        }

        if (this.queue.length) Ze.system.addOnce(this.tick, this, ze.UTILITY);else {
          this.ticking = !1;
          var n = this.completes.slice(0);

          for (this.completes.length = 0, r = 0, i = n.length; r < i; r++) n[r]();
        }
      }, t.prototype.registerFindHook = function (t) {
        return t && this.addHooks.push(t), this;
      }, t.prototype.registerUploadHook = function (t) {
        return t && this.uploadHooks.push(t), this;
      }, t.prototype.add = function (t) {
        for (var e = 0, r = this.addHooks.length; e < r && !this.addHooks[e](t, this.queue); e++);

        if (t instanceof We) for (e = t.children.length - 1; e >= 0; e--) this.add(t.children[e]);
        return this;
      }, t.prototype.destroy = function () {
        this.ticking && Ze.system.remove(this.tick, this), this.ticking = !1, this.addHooks = null, this.uploadHooks = null, this.renderer = null, this.completes = null, this.queue = null, this.limiter = null, this.uploadHookHelper = null;
      }, t;
    }()),
        Os = (function () {
      function t(t) {
        this.maxMilliseconds = t, this.frameStart = 0;
      }

      t.prototype.beginFrame = function () {
        this.frameStart = Date.now();
      }, t.prototype.allowedToUpload = function () {
        return Date.now() - this.frameStart < this.maxMilliseconds;
      };
    }(), function () {
      function t(t, e, r) {
        void 0 === r && (r = null), this._texture = t instanceof Dr ? t : null, this.baseTexture = t instanceof _r ? t : this._texture.baseTexture, this.textures = {}, this.animations = {}, this.data = e;
        var i = this.baseTexture.resource;
        this.resolution = this._updateResolution(r || (i ? i.url : null)), this._frames = this.data.frames, this._frameKeys = Object.keys(this._frames), this._batchIndex = 0, this._callback = null;
      }

      return t.prototype._updateResolution = function (t) {
        void 0 === t && (t = null);
        var e = this.data.meta.scale,
            r = Qt(t, null);
        return null === r && (r = void 0 !== e ? parseFloat(e) : 1), 1 !== r && this.baseTexture.setResolution(r), r;
      }, t.prototype.parse = function (e) {
        this._batchIndex = 0, this._callback = e, this._frameKeys.length <= t.BATCH_SIZE ? (this._processFrames(0), this._processAnimations(), this._parseComplete()) : this._nextBatch();
      }, t.prototype._processFrames = function (e) {
        for (var r = e, i = t.BATCH_SIZE; r - e < i && r < this._frameKeys.length;) {
          var n = this._frameKeys[r],
              o = this._frames[n],
              s = o.frame;

          if (s) {
            var a,
                h = null,
                u = !1 !== o.trimmed && o.sourceSize ? o.sourceSize : o.frame,
                l = new oe(0, 0, Math.floor(u.w) / this.resolution, Math.floor(u.h) / this.resolution);
            a = o.rotated ? new oe(Math.floor(s.x) / this.resolution, Math.floor(s.y) / this.resolution, Math.floor(s.h) / this.resolution, Math.floor(s.w) / this.resolution) : new oe(Math.floor(s.x) / this.resolution, Math.floor(s.y) / this.resolution, Math.floor(s.w) / this.resolution, Math.floor(s.h) / this.resolution), !1 !== o.trimmed && o.spriteSourceSize && (h = new oe(Math.floor(o.spriteSourceSize.x) / this.resolution, Math.floor(o.spriteSourceSize.y) / this.resolution, Math.floor(s.w) / this.resolution, Math.floor(s.h) / this.resolution)), this.textures[n] = new Dr(this.baseTexture, a, l, h, o.rotated ? 2 : 0, o.anchor), Dr.addToCache(this.textures[n], n);
          }

          r++;
        }
      }, t.prototype._processAnimations = function () {
        var t = this.data.animations || {};

        for (var e in t) {
          this.animations[e] = [];

          for (var r = 0; r < t[e].length; r++) {
            var i = t[e][r];
            this.animations[e].push(this.textures[i]);
          }
        }
      }, t.prototype._parseComplete = function () {
        var t = this._callback;
        this._callback = null, this._batchIndex = 0, t.call(this, this.textures);
      }, t.prototype._nextBatch = function () {
        var e = this;
        this._processFrames(this._batchIndex * t.BATCH_SIZE), this._batchIndex++, setTimeout(function () {
          e._batchIndex * t.BATCH_SIZE < e._frameKeys.length ? e._nextBatch() : (e._processAnimations(), e._parseComplete());
        }, 0);
      }, t.prototype.destroy = function (t) {
        var e;

        for (var r in void 0 === t && (t = !1), this.textures) this.textures[r].destroy();

        this._frames = null, this._frameKeys = null, this.data = null, this.textures = null, t && (null === (e = this._texture) || void 0 === e || e.destroy(), this.baseTexture.destroy()), this._texture = null, this.baseTexture = null;
      }, t.BATCH_SIZE = 1e3, t;
    }()),
        Ss = function () {
      function t() {}

      return t.use = function (e, r) {
        var i,
            n,
            o = this,
            s = e.name + "_image";

        if (e.data && e.type === Un.TYPE.JSON && e.data.frames && !o.resources[s]) {
          var a = null === (n = null === (i = e.data) || void 0 === i ? void 0 : i.meta) || void 0 === n ? void 0 : n.related_multi_packs;
          if (Array.isArray(a)) for (var h = function (t) {
            if ("string" != typeof t) return "continue";
            var r = t.replace(".json", ""),
                i = Ot.resolve(e.url.replace(o.baseUrl, ""), t);
            if (o.resources[r] || Object.values(o.resources).some(function (t) {
              return Ot.format(Ot.parse(t.url)) === i;
            })) return "continue";
            var n = {
              crossOrigin: e.crossOrigin,
              loadType: Un.LOAD_TYPE.XHR,
              xhrType: Un.XHR_RESPONSE_TYPE.JSON,
              parentResource: e,
              metadata: e.metadata
            };
            o.add(r, i, n);
          }, u = 0, l = a; u < l.length; u++) h(l[u]);
          var c = {
            crossOrigin: e.crossOrigin,
            metadata: e.metadata.imageMetadata,
            parentResource: e
          },
              d = t.getResourcePath(e, o.baseUrl);
          o.add(s, d, c, function (t) {
            if (t.error) r(t.error);else {
              var i = new Os(t.texture, e.data, e.url);
              i.parse(function () {
                e.spritesheet = i, e.textures = i.textures, r();
              });
            }
          });
        } else r();
      }, t.getResourcePath = function (t, e) {
        return t.isDataUrl ? t.data.meta.image : Ot.resolve(t.url.replace(e, ""), t.data.meta.image);
      }, t;
    }(),
        Is = function (t, e) {
      return Is = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      }, Is(t, e);
    };

    function Ps(t, e) {
      function r() {
        this.constructor = t;
      }

      Is(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
    }

    var Ns = new ie(),
        Ms = (function (t) {
      function e(e, r, i) {
        void 0 === r && (r = 100), void 0 === i && (i = 100);
        var n = t.call(this, e) || this;
        return n.tileTransform = new Ee(), n._width = r, n._height = i, n.uvMatrix = n.texture.uvMatrix || new wi(e), n.pluginName = "tilingSprite", n.uvRespectAnchor = !1, n;
      }

      Ps(e, t), Object.defineProperty(e.prototype, "clampMargin", {
        get: function () {
          return this.uvMatrix.clampMargin;
        },
        set: function (t) {
          this.uvMatrix.clampMargin = t, this.uvMatrix.update(!0);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "tileScale", {
        get: function () {
          return this.tileTransform.scale;
        },
        set: function (t) {
          this.tileTransform.scale.copyFrom(t);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "tilePosition", {
        get: function () {
          return this.tileTransform.position;
        },
        set: function (t) {
          this.tileTransform.position.copyFrom(t);
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype._onTextureUpdate = function () {
        this.uvMatrix && (this.uvMatrix.texture = this._texture), this._cachedTint = 16777215;
      }, e.prototype._render = function (t) {
        var e = this._texture;
        e && e.valid && (this.tileTransform.updateLocalTransform(), this.uvMatrix.update(), t.batch.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this));
      }, e.prototype._calculateBounds = function () {
        var t = this._width * -this._anchor._x,
            e = this._height * -this._anchor._y,
            r = this._width * (1 - this._anchor._x),
            i = this._height * (1 - this._anchor._y);

        this._bounds.addFrame(this.transform, t, e, r, i);
      }, e.prototype.getLocalBounds = function (e) {
        return 0 === this.children.length ? (this._bounds.minX = this._width * -this._anchor._x, this._bounds.minY = this._height * -this._anchor._y, this._bounds.maxX = this._width * (1 - this._anchor._x), this._bounds.maxY = this._height * (1 - this._anchor._y), e || (this._localBoundsRect || (this._localBoundsRect = new oe()), e = this._localBoundsRect), this._bounds.getRectangle(e)) : t.prototype.getLocalBounds.call(this, e);
      }, e.prototype.containsPoint = function (t) {
        this.worldTransform.applyInverse(t, Ns);
        var e = this._width,
            r = this._height,
            i = -e * this.anchor._x;

        if (Ns.x >= i && Ns.x < i + e) {
          var n = -r * this.anchor._y;
          if (Ns.y >= n && Ns.y < n + r) return !0;
        }

        return !1;
      }, e.prototype.destroy = function (e) {
        t.prototype.destroy.call(this, e), this.tileTransform = null, this.uvMatrix = null;
      }, e.from = function (t, r) {
        return new e(t instanceof Dr ? t : Dr.from(t, r), r.width, r.height);
      }, Object.defineProperty(e.prototype, "width", {
        get: function () {
          return this._width;
        },
        set: function (t) {
          this._width = t;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "height", {
        get: function () {
          return this._height;
        },
        set: function (t) {
          this._height = t;
        },
        enumerable: !1,
        configurable: !0
      });
    }(rs), "#version 100\n#define SHADER_NAME Tiling-Sprite-100\n\nprecision lowp float;\n\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n"),
        Ds = new ce(),
        ws = function (t) {
      function e(e) {
        var r = t.call(this, e) || this;
        return e.runners.contextChange.add(r), r.quad = new Yr(), r.state = Ni.for2d(), r;
      }

      return Ps(e, t), e.prototype.contextChange = function () {
        var t = this.renderer,
            e = {
          globals: t.globalUniforms
        };
        this.simpleShader = Pi.from(Ms, "#version 100\n#define SHADER_NAME Tiling-Sprite-Simple-100\n\nprecision lowp float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\n\nvoid main(void)\n{\n    vec4 texSample = texture2D(uSampler, vTextureCoord);\n    gl_FragColor = texSample * uColor;\n}\n", e), this.shader = t.context.webGLVersion > 1 ? Pi.from("#version 300 es\n#define SHADER_NAME Tiling-Sprite-300\n\nprecision lowp float;\n\nin vec2 aVertexPosition;\nin vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nout vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n", "#version 300 es\n#define SHADER_NAME Tiling-Sprite-100\n\nprecision lowp float;\n\nin vec2 vTextureCoord;\n\nout vec4 fragmentColor;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    vec2 unclamped = coord;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    vec4 texSample = texture(uSampler, coord, unclamped == coord ? 0.0f : -32.0f);// lod-bias very negative to force lod 0\n\n    fragmentColor = texSample * uColor;\n}\n", e) : Pi.from(Ms, "#version 100\n#ifdef GL_EXT_shader_texture_lod\n    #extension GL_EXT_shader_texture_lod : enable\n#endif\n#define SHADER_NAME Tiling-Sprite-100\n\nprecision lowp float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    vec2 unclamped = coord;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    #ifdef GL_EXT_shader_texture_lod\n        vec4 texSample = unclamped == coord\n            ? texture2D(uSampler, coord) \n            : texture2DLodEXT(uSampler, coord, 0);\n    #else\n        vec4 texSample = texture2D(uSampler, coord);\n    #endif\n\n    gl_FragColor = texSample * uColor;\n}\n", e);
      }, e.prototype.render = function (t) {
        var e = this.renderer,
            r = this.quad,
            i = r.vertices;
        i[0] = i[6] = t._width * -t.anchor.x, i[1] = i[3] = t._height * -t.anchor.y, i[2] = i[4] = t._width * (1 - t.anchor.x), i[5] = i[7] = t._height * (1 - t.anchor.y);
        var n = t.uvRespectAnchor ? t.anchor.x : 0,
            o = t.uvRespectAnchor ? t.anchor.y : 0;
        (i = r.uvs)[0] = i[6] = -n, i[1] = i[3] = -o, i[2] = i[4] = 1 - n, i[5] = i[7] = 1 - o, r.invalidate();
        var s = t._texture,
            a = s.baseTexture,
            h = t.tileTransform.localTransform,
            u = t.uvMatrix,
            l = a.isPowerOfTwo && s.frame.width === a.width && s.frame.height === a.height;
        l && (a._glTextures[e.CONTEXT_UID] ? l = a.wrapMode !== ct.CLAMP : a.wrapMode === ct.CLAMP && (a.wrapMode = ct.REPEAT));
        var c = l ? this.simpleShader : this.shader,
            d = s.width,
            f = s.height,
            p = t._width,
            _ = t._height;
        Ds.set(h.a * d / p, h.b * d / _, h.c * f / p, h.d * f / _, h.tx / p, h.ty / _), Ds.invert(), l ? Ds.prepend(u.mapCoord) : (c.uniforms.uMapCoord = u.mapCoord.toArray(!0), c.uniforms.uClampFrame = u.uClampFrame, c.uniforms.uClampOffset = u.uClampOffset), c.uniforms.uTransform = Ds.toArray(!0), c.uniforms.uColor = Ft(t.tint, t.worldAlpha, c.uniforms.uColor, a.alphaMode), c.uniforms.translationMatrix = t.transform.worldTransform.toArray(!0), c.uniforms.uSampler = s, e.shader.bind(c), e.geometry.bind(r), this.state.blendMode = Ct(t.blendMode, a.alphaMode), e.state.set(this.state), e.geometry.draw(this.renderer.gl.TRIANGLES, 6, 0);
      }, e;
    }(Jr),
        Cs = function (t, e) {
      return Cs = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      }, Cs(t, e);
    };

    function Ls(t, e) {
      function r() {
        this.constructor = t;
      }

      Cs(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
    }

    var Fs = function () {
      function t(t, e) {
        this.uvBuffer = t, this.uvMatrix = e, this.data = null, this._bufferUpdateId = -1, this._textureUpdateId = -1, this._updateID = 0;
      }

      return t.prototype.update = function (t) {
        if (t || this._bufferUpdateId !== this.uvBuffer._updateID || this._textureUpdateId !== this.uvMatrix._updateID) {
          this._bufferUpdateId = this.uvBuffer._updateID, this._textureUpdateId = this.uvMatrix._updateID;
          var e = this.uvBuffer.data;
          this.data && this.data.length === e.length || (this.data = new Float32Array(e.length)), this.uvMatrix.multiplyUvs(e, this.data), this._updateID++;
        }
      }, t;
    }(),
        Us = new ie(),
        Gs = new he(),
        Bs = function (t) {
      function e(e, r, i, n) {
        void 0 === n && (n = ot.TRIANGLES);
        var o = t.call(this) || this;
        return o.geometry = e, o.shader = r, o.state = i || Ni.for2d(), o.drawMode = n, o.start = 0, o.size = 0, o.uvs = null, o.indices = null, o.vertexData = new Float32Array(1), o.vertexDirty = -1, o._transformID = -1, o._roundPixels = Et.ROUND_PIXELS, o.batchUvs = null, o;
      }

      return Ls(e, t), Object.defineProperty(e.prototype, "geometry", {
        get: function () {
          return this._geometry;
        },
        set: function (t) {
          this._geometry !== t && (this._geometry && (this._geometry.refCount--, 0 === this._geometry.refCount && this._geometry.dispose()), this._geometry = t, this._geometry && this._geometry.refCount++, this.vertexDirty = -1);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "uvBuffer", {
        get: function () {
          return this.geometry.buffers[1];
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "verticesBuffer", {
        get: function () {
          return this.geometry.buffers[0];
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "material", {
        get: function () {
          return this.shader;
        },
        set: function (t) {
          this.shader = t;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "blendMode", {
        get: function () {
          return this.state.blendMode;
        },
        set: function (t) {
          this.state.blendMode = t;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "roundPixels", {
        get: function () {
          return this._roundPixels;
        },
        set: function (t) {
          this._roundPixels !== t && (this._transformID = -1), this._roundPixels = t;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "tint", {
        get: function () {
          return "tint" in this.shader ? this.shader.tint : null;
        },
        set: function (t) {
          this.shader.tint = t;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "texture", {
        get: function () {
          return "texture" in this.shader ? this.shader.texture : null;
        },
        set: function (t) {
          this.shader.texture = t;
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype._render = function (t) {
        var r = this.geometry.buffers[0].data;
        this.shader.batchable && this.drawMode === ot.TRIANGLES && r.length < 2 * e.BATCHABLE_SIZE ? this._renderToBatch(t) : this._renderDefault(t);
      }, e.prototype._renderDefault = function (t) {
        var e = this.shader;
        e.alpha = this.worldAlpha, e.update && e.update(), t.batch.flush(), e.uniforms.translationMatrix = this.transform.worldTransform.toArray(!0), t.shader.bind(e), t.state.set(this.state), t.geometry.bind(this.geometry, e), t.geometry.draw(this.drawMode, this.size, this.start, this.geometry.instanceCount);
      }, e.prototype._renderToBatch = function (t) {
        var e = this.geometry,
            r = this.shader;
        r.uvMatrix && (r.uvMatrix.update(), this.calculateUvs()), this.calculateVertices(), this.indices = e.indexBuffer.data, this._tintRGB = r._tintRGB, this._texture = r.texture;
        var i = this.material.pluginName;
        t.batch.setObjectRenderer(t.plugins[i]), t.plugins[i].render(this);
      }, e.prototype.calculateVertices = function () {
        var t = this.geometry.buffers[0],
            e = t.data,
            r = t._updateID;

        if (r !== this.vertexDirty || this._transformID !== this.transform._worldID) {
          this._transformID = this.transform._worldID, this.vertexData.length !== e.length && (this.vertexData = new Float32Array(e.length));

          for (var i = this.transform.worldTransform, n = i.a, o = i.b, s = i.c, a = i.d, h = i.tx, u = i.ty, l = this.vertexData, c = 0; c < l.length / 2; c++) {
            var d = e[2 * c],
                f = e[2 * c + 1];
            l[2 * c] = n * d + s * f + h, l[2 * c + 1] = o * d + a * f + u;
          }

          if (this._roundPixels) {
            var p = Et.RESOLUTION;

            for (c = 0; c < l.length; ++c) l[c] = Math.round((l[c] * p | 0) / p);
          }

          this.vertexDirty = r;
        }
      }, e.prototype.calculateUvs = function () {
        var t = this.geometry.buffers[1],
            e = this.shader;
        e.uvMatrix.isSimple ? this.uvs = t.data : (this.batchUvs || (this.batchUvs = new Fs(t, e.uvMatrix)), this.batchUvs.update(), this.uvs = this.batchUvs.data);
      }, e.prototype._calculateBounds = function () {
        this.calculateVertices(), this._bounds.addVertexData(this.vertexData, 0, this.vertexData.length);
      }, e.prototype.containsPoint = function (t) {
        if (!this.getBounds().contains(t.x, t.y)) return !1;
        this.worldTransform.applyInverse(t, Us);

        for (var e = this.geometry.getBuffer("aVertexPosition").data, r = Gs.points, i = this.geometry.getIndex().data, n = i.length, o = 4 === this.drawMode ? 3 : 1, s = 0; s + 2 < n; s += o) {
          var a = 2 * i[s],
              h = 2 * i[s + 1],
              u = 2 * i[s + 2];
          if (r[0] = e[a], r[1] = e[a + 1], r[2] = e[h], r[3] = e[h + 1], r[4] = e[u], r[5] = e[u + 1], Gs.contains(Us.x, Us.y)) return !0;
        }

        return !1;
      }, e.prototype.destroy = function (e) {
        t.prototype.destroy.call(this, e), this._cachedTexture && (this._cachedTexture.destroy(), this._cachedTexture = null), this.geometry = null, this.shader = null, this.state = null, this.uvs = null, this.indices = null, this.vertexData = null;
      }, e.BATCHABLE_SIZE = 100, e;
    }(We),
        Xs = function (t) {
      function e(e, r) {
        var i = this,
            n = {
          uSampler: e,
          alpha: 1,
          uTextureMatrix: ce.IDENTITY,
          uColor: new Float32Array([1, 1, 1, 1])
        };
        return (r = Object.assign({
          tint: 16777215,
          alpha: 1,
          pluginName: "batch"
        }, r)).uniforms && Object.assign(n, r.uniforms), (i = t.call(this, r.program || Ii.from("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTextureMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\n}\n", "varying vec2 vTextureCoord;\nuniform vec4 uColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;\n}\n"), n) || this)._colorDirty = !1, i.uvMatrix = new wi(e), i.batchable = void 0 === r.program, i.pluginName = r.pluginName, i.tint = r.tint, i.alpha = r.alpha, i;
      }

      return Ls(e, t), Object.defineProperty(e.prototype, "texture", {
        get: function () {
          return this.uniforms.uSampler;
        },
        set: function (t) {
          this.uniforms.uSampler !== t && (this.uniforms.uSampler = t, this.uvMatrix.texture = t);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "alpha", {
        get: function () {
          return this._alpha;
        },
        set: function (t) {
          t !== this._alpha && (this._alpha = t, this._colorDirty = !0);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "tint", {
        get: function () {
          return this._tint;
        },
        set: function (t) {
          t !== this._tint && (this._tint = t, this._tintRGB = (t >> 16) + (65280 & t) + ((255 & t) << 16), this._colorDirty = !0);
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.update = function () {
        if (this._colorDirty) {
          this._colorDirty = !1;
          var t = this.texture.baseTexture;
          Ft(this._tint, this._alpha, this.uniforms.uColor, t.alphaMode);
        }

        this.uvMatrix.update() && (this.uniforms.uTextureMatrix = this.uvMatrix.mapCoord);
      }, e;
    }(Pi),
        ks = function (t) {
      function e(e, r, i) {
        var n = t.call(this) || this,
            o = new Ur(e),
            s = new Ur(r, !0),
            a = new Ur(i, !0, !0);
        return n.addAttribute("aVertexPosition", o, 2, !1, ht.FLOAT).addAttribute("aTextureCoord", s, 2, !1, ht.FLOAT).addIndex(a), n._updateId = -1, n;
      }

      return Ls(e, t), Object.defineProperty(e.prototype, "vertexDirtyId", {
        get: function () {
          return this.buffers[0]._updateID;
        },
        enumerable: !1,
        configurable: !0
      }), e;
    }(Hr),
        Hs = function (t, e) {
      return Hs = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      }, Hs(t, e);
    },
        js = function () {
      this.info = [], this.common = [], this.page = [], this.char = [], this.kerning = [], this.distanceField = [];
    },
        Ys = function () {
      function t() {}

      return t.test = function (t) {
        return "string" == typeof t && 0 === t.indexOf("info face=");
      }, t.parse = function (t) {
        var e = t.match(/^[a-z]+\s+.+$/gm),
            r = {
          info: [],
          common: [],
          page: [],
          char: [],
          chars: [],
          kerning: [],
          kernings: [],
          distanceField: []
        };

        for (var i in e) {
          var n = e[i].match(/^[a-z]+/gm)[0],
              o = e[i].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),
              s = {};

          for (var a in o) {
            var h = o[a].split("="),
                u = h[0],
                l = h[1].replace(/"/gm, ""),
                c = parseFloat(l),
                d = isNaN(c) ? l : c;
            s[u] = d;
          }

          r[n].push(s);
        }

        var f = new js();
        return r.info.forEach(function (t) {
          return f.info.push({
            face: t.face,
            size: parseInt(t.size, 10)
          });
        }), r.common.forEach(function (t) {
          return f.common.push({
            lineHeight: parseInt(t.lineHeight, 10)
          });
        }), r.page.forEach(function (t) {
          return f.page.push({
            id: parseInt(t.id, 10),
            file: t.file
          });
        }), r.char.forEach(function (t) {
          return f.char.push({
            id: parseInt(t.id, 10),
            page: parseInt(t.page, 10),
            x: parseInt(t.x, 10),
            y: parseInt(t.y, 10),
            width: parseInt(t.width, 10),
            height: parseInt(t.height, 10),
            xoffset: parseInt(t.xoffset, 10),
            yoffset: parseInt(t.yoffset, 10),
            xadvance: parseInt(t.xadvance, 10)
          });
        }), r.kerning.forEach(function (t) {
          return f.kerning.push({
            first: parseInt(t.first, 10),
            second: parseInt(t.second, 10),
            amount: parseInt(t.amount, 10)
          });
        }), r.distanceField.forEach(function (t) {
          return f.distanceField.push({
            distanceRange: parseInt(t.distanceRange, 10),
            fieldType: t.fieldType
          });
        }), f;
      }, t;
    }(),
        Vs = function () {
      function t() {}

      return t.test = function (t) {
        return t instanceof XMLDocument && t.getElementsByTagName("page").length && null !== t.getElementsByTagName("info")[0].getAttribute("face");
      }, t.parse = function (t) {
        for (var e = new js(), r = t.getElementsByTagName("info"), i = t.getElementsByTagName("common"), n = t.getElementsByTagName("page"), o = t.getElementsByTagName("char"), s = t.getElementsByTagName("kerning"), a = t.getElementsByTagName("distanceField"), h = 0; h < r.length; h++) e.info.push({
          face: r[h].getAttribute("face"),
          size: parseInt(r[h].getAttribute("size"), 10)
        });

        for (h = 0; h < i.length; h++) e.common.push({
          lineHeight: parseInt(i[h].getAttribute("lineHeight"), 10)
        });

        for (h = 0; h < n.length; h++) e.page.push({
          id: parseInt(n[h].getAttribute("id"), 10) || 0,
          file: n[h].getAttribute("file")
        });

        for (h = 0; h < o.length; h++) {
          var u = o[h];
          e.char.push({
            id: parseInt(u.getAttribute("id"), 10),
            page: parseInt(u.getAttribute("page"), 10) || 0,
            x: parseInt(u.getAttribute("x"), 10),
            y: parseInt(u.getAttribute("y"), 10),
            width: parseInt(u.getAttribute("width"), 10),
            height: parseInt(u.getAttribute("height"), 10),
            xoffset: parseInt(u.getAttribute("xoffset"), 10),
            yoffset: parseInt(u.getAttribute("yoffset"), 10),
            xadvance: parseInt(u.getAttribute("xadvance"), 10)
          });
        }

        for (h = 0; h < s.length; h++) e.kerning.push({
          first: parseInt(s[h].getAttribute("first"), 10),
          second: parseInt(s[h].getAttribute("second"), 10),
          amount: parseInt(s[h].getAttribute("amount"), 10)
        });

        for (h = 0; h < a.length; h++) e.distanceField.push({
          fieldType: a[h].getAttribute("fieldType"),
          distanceRange: parseInt(a[h].getAttribute("distanceRange"), 10)
        });

        return e;
      }, t;
    }(),
        Ws = function () {
      function t() {}

      return t.test = function (t) {
        if ("string" == typeof t && t.indexOf("<font>") > -1) {
          var e = new globalThis.DOMParser().parseFromString(t, "text/xml");
          return Vs.test(e);
        }

        return !1;
      }, t.parse = function (t) {
        var e = new globalThis.DOMParser().parseFromString(t, "text/xml");
        return Vs.parse(e);
      }, t;
    }(),
        zs = [Ys, Vs, Ws];

    function qs(t) {
      for (var e = 0; e < zs.length; e++) if (zs[e].test(t)) return zs[e];

      return null;
    }

    function Ks(t, e, r, i, n, o, s) {
      var a = r.text,
          h = r.fontProperties;
      e.translate(i, n), e.scale(o, o);
      var u = s.strokeThickness / 2,
          l = -s.strokeThickness / 2;

      if (e.font = s.toFontString(), e.lineWidth = s.strokeThickness, e.textBaseline = s.textBaseline, e.lineJoin = s.lineJoin, e.miterLimit = s.miterLimit, e.fillStyle = function (t, e, r, i, n, o) {
        var s,
            a = r.fill;
        if (!Array.isArray(a)) return a;
        if (1 === a.length) return a[0];
        var h = r.dropShadow ? r.dropShadowDistance : 0,
            u = r.padding || 0,
            l = t.width / i - h - 2 * u,
            c = t.height / i - h - 2 * u,
            d = a.slice(),
            f = r.fillGradientStops.slice();
        if (!f.length) for (var p = d.length + 1, _ = 1; _ < p; ++_) f.push(_ / p);

        if (d.unshift(a[0]), f.unshift(0), d.push(a[a.length - 1]), f.push(1), r.fillGradientType === Uo.LINEAR_VERTICAL) {
          s = e.createLinearGradient(l / 2, u, l / 2, c + u);
          var v = 0,
              m = (o.fontProperties.fontSize + r.strokeThickness) / c;

          for (_ = 0; _ < n.length; _++) for (var g = o.lineHeight * _, y = 0; y < d.length; y++) {
            var E = g / c + ("number" == typeof f[y] ? f[y] : y / d.length) * m,
                T = Math.max(v, E);
            T = Math.min(T, 1), s.addColorStop(T, d[y]), v = T;
          }
        } else {
          s = e.createLinearGradient(u, c / 2, l + u, c / 2);
          var b = d.length + 1,
              x = 1;

          for (_ = 0; _ < d.length; _++) {
            var R;
            R = "number" == typeof f[_] ? f[_] : x / b, s.addColorStop(R, d[_]), x++;
          }
        }

        return s;
      }(t, e, s, o, [a], r), e.strokeStyle = s.stroke, s.dropShadow) {
        var c = s.dropShadowColor,
            d = Nt("number" == typeof c ? c : Dt(c)),
            f = s.dropShadowBlur * o,
            p = s.dropShadowDistance * o;
        e.shadowColor = "rgba(" + 255 * d[0] + "," + 255 * d[1] + "," + 255 * d[2] + "," + s.dropShadowAlpha + ")", e.shadowBlur = f, e.shadowOffsetX = Math.cos(s.dropShadowAngle) * p, e.shadowOffsetY = Math.sin(s.dropShadowAngle) * p;
      } else e.shadowColor = "black", e.shadowBlur = 0, e.shadowOffsetX = 0, e.shadowOffsetY = 0;

      s.stroke && s.strokeThickness && e.strokeText(a, u, l + r.lineHeight - h.descent), s.fill && e.fillText(a, u, l + r.lineHeight - h.descent), e.setTransform(1, 0, 0, 1, 0, 0), e.fillStyle = "rgba(0, 0, 0, 0)";
    }

    function Zs(t) {
      return Array.from ? Array.from(t) : t.split("");
    }

    function Js(t) {
      return t.codePointAt ? t.codePointAt(0) : t.charCodeAt(0);
    }

    var Qs = function () {
      function t(t, e, r) {
        var i,
            n,
            o = t.info[0],
            s = t.common[0],
            a = t.page[0],
            h = t.distanceField[0],
            u = Qt(a.file),
            l = {};
        this._ownsTextures = r, this.font = o.face, this.size = o.size, this.lineHeight = s.lineHeight / u, this.chars = {}, this.pageTextures = l;

        for (var c = 0; c < t.page.length; c++) {
          var d = t.page[c],
              f = d.id,
              p = d.file;
          l[f] = e instanceof Array ? e[c] : e[p], (null == h ? void 0 : h.fieldType) && "none" !== h.fieldType && (l[f].baseTexture.alphaMode = ft.NO_PREMULTIPLIED_ALPHA);
        }

        for (c = 0; c < t.char.length; c++) {
          var _ = t.char[c],
              v = (f = _.id, _.page),
              m = t.char[c],
              g = m.x,
              y = m.y,
              E = m.width,
              T = m.height,
              b = m.xoffset,
              x = m.yoffset,
              R = m.xadvance;
          y /= u, E /= u, T /= u, b /= u, x /= u, R /= u;
          var A = new oe((g /= u) + l[v].frame.x / u, y + l[v].frame.y / u, E, T);
          this.chars[f] = {
            xOffset: b,
            yOffset: x,
            xAdvance: R,
            kerning: {},
            texture: new Dr(l[v].baseTexture, A),
            page: v
          };
        }

        for (c = 0; c < t.kerning.length; c++) {
          var O = t.kerning[c],
              S = O.first,
              I = O.second,
              P = O.amount;
          S /= u, I /= u, P /= u, this.chars[I] && (this.chars[I].kerning[S] = P);
        }

        this.distanceFieldRange = null == h ? void 0 : h.distanceRange, this.distanceFieldType = null !== (n = null === (i = null == h ? void 0 : h.fieldType) || void 0 === i ? void 0 : i.toLowerCase()) && void 0 !== n ? n : "none";
      }

      return t.prototype.destroy = function () {
        for (var t in this.chars) this.chars[t].texture.destroy(), this.chars[t].texture = null;

        for (var t in this.pageTextures) this._ownsTextures && this.pageTextures[t].destroy(!0), this.pageTextures[t] = null;

        this.chars = null, this.pageTextures = null;
      }, t.install = function (e, r, i) {
        var n;
        if (e instanceof js) n = e;else {
          var o = qs(e);
          if (!o) throw new Error("Unrecognized data format for font.");
          n = o.parse(e);
        }
        r instanceof Dr && (r = [r]);
        var s = new t(n, r, i);
        return t.available[s.font] = s, s;
      }, t.uninstall = function (e) {
        var r = t.available[e];
        if (!r) throw new Error("No font found named '" + e + "'");
        r.destroy(), delete t.available[e];
      }, t.from = function (e, r, i) {
        if (!e) throw new Error("[BitmapFont] Property `name` is required.");

        var n = Object.assign({}, t.defaultOptions, i),
            o = n.chars,
            s = n.padding,
            a = n.resolution,
            h = n.textureWidth,
            u = n.textureHeight,
            l = function (t) {
          "string" == typeof t && (t = [t]);

          for (var e = [], r = 0, i = t.length; r < i; r++) {
            var n = t[r];

            if (Array.isArray(n)) {
              if (2 !== n.length) throw new Error("[BitmapFont]: Invalid character range length, expecting 2 got " + n.length + ".");
              var o = n[0].charCodeAt(0),
                  s = n[1].charCodeAt(0);
              if (s < o) throw new Error("[BitmapFont]: Invalid character range.");

              for (var a = o, h = s; a <= h; a++) e.push(String.fromCharCode(a));
            } else e.push.apply(e, Zs(n));
          }

          if (0 === e.length) throw new Error("[BitmapFont]: Empty set when resolving characters.");
          return e;
        }(o),
            c = r instanceof ss ? r : new ss(r),
            d = h,
            f = new js();

        f.info[0] = {
          face: c.fontFamily,
          size: c.fontSize
        }, f.common[0] = {
          lineHeight: c.fontSize
        };

        for (var p, _, v, m = 0, g = 0, y = 0, E = [], T = 0; T < l.length; T++) {
          p || ((p = document.createElement("canvas")).width = h, p.height = u, _ = p.getContext("2d"), v = new _r(p, {
            resolution: a
          }), E.push(new Dr(v)), f.page.push({
            id: E.length - 1,
            file: ""
          }));
          var b = ls.measureText(l[T], c, !1, p),
              x = b.width,
              R = Math.ceil(b.height),
              A = Math.ceil(("italic" === c.fontStyle ? 2 : 1) * x);

          if (g >= u - R * a) {
            if (0 === g) throw new Error("[BitmapFont] textureHeight " + u + "px is too small for " + c.fontSize + "px fonts");
            --T, p = null, _ = null, v = null, g = 0, m = 0, y = 0;
          } else if (y = Math.max(R + b.fontProperties.descent, y), A * a + m >= d) --T, g += y * a, g = Math.ceil(g), m = 0, y = 0;else {
            Ks(p, _, b, m, g, a, c);
            var O = Js(b.text);
            f.char.push({
              id: O,
              page: E.length - 1,
              x: m / a,
              y: g / a,
              width: A,
              height: R,
              xoffset: 0,
              yoffset: 0,
              xadvance: Math.ceil(x - (c.dropShadow ? c.dropShadowDistance : 0) - (c.stroke ? c.strokeThickness : 0))
            }), m += (A + 2 * s) * a, m = Math.ceil(m);
          }
        }

        T = 0;

        for (var S = l.length; T < S; T++) for (var I = l[T], P = 0; P < S; P++) {
          var N = l[P],
              M = _.measureText(I).width,
              D = _.measureText(N).width,
              w = _.measureText(I + N).width - (M + D);

          w && f.kerning.push({
            first: Js(I),
            second: Js(N),
            amount: w
          });
        }

        var C = new t(f, E, !0);
        return void 0 !== t.available[e] && t.uninstall(e), t.available[e] = C, C;
      }, t.ALPHA = [["a", "z"], ["A", "Z"], " "], t.NUMERIC = [["0", "9"]], t.ALPHANUMERIC = [["a", "z"], ["A", "Z"], ["0", "9"], " "], t.ASCII = [[" ", "~"]], t.defaultOptions = {
        resolution: 1,
        textureWidth: 512,
        textureHeight: 512,
        padding: 4,
        chars: t.ALPHANUMERIC
      }, t.available = {}, t;
    }(),
        $s = [],
        ta = [],
        ea = [],
        ra = (function (t) {
      function e(r, i) {
        void 0 === i && (i = {});
        var n = t.call(this) || this;
        n._tint = 16777215;
        var o = Object.assign({}, e.styleDefaults, i),
            s = o.align,
            a = o.tint,
            h = o.maxWidth,
            u = o.letterSpacing,
            l = o.fontName,
            c = o.fontSize;
        if (!Qs.available[l]) throw new Error('Missing BitmapFont "' + l + '"');
        return n._activePagesMeshData = [], n._textWidth = 0, n._textHeight = 0, n._align = s, n._tint = a, n._fontName = l, n._fontSize = c || Qs.available[l].size, n.text = r, n._maxWidth = h, n._maxLineHeight = 0, n._letterSpacing = u, n._anchor = new le(function () {
          n.dirty = !0;
        }, n, 0, 0), n._roundPixels = Et.ROUND_PIXELS, n.dirty = !0, n._textureCache = {}, n;
      }

      (function (t, e) {
        function r() {
          this.constructor = t;
        }

        Hs(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
      })(e, t), e.prototype.updateText = function () {
        for (var t, e = Qs.available[this._fontName], r = this._fontSize / e.size, i = new ie(), n = [], o = [], s = [], a = Zs(this._text.replace(/(?:\r\n|\r)/g, "\n") || " "), h = this._maxWidth * e.size / this._fontSize, u = "none" === e.distanceFieldType ? $s : ta, l = null, c = 0, d = 0, f = 0, p = -1, _ = 0, v = 0, m = 0, g = 0, y = 0; y < a.length; y++) {
          var E = Js(X = a[y]);

          if (/(?:\s)/.test(X) && (p = y, _ = c, g++), "\r" !== X && "\n" !== X) {
            var T = e.chars[E];

            if (T) {
              l && T.kerning[l] && (i.x += T.kerning[l]);
              var b = ea.pop() || {
                texture: Dr.EMPTY,
                line: 0,
                charCode: 0,
                prevSpaces: 0,
                position: new ie()
              };
              b.texture = T.texture, b.line = f, b.charCode = E, b.position.x = i.x + T.xOffset + this._letterSpacing / 2, b.position.y = i.y + T.yOffset, b.prevSpaces = g, n.push(b), c = b.position.x + Math.max(T.xAdvance, T.texture.orig.width), i.x += T.xAdvance + this._letterSpacing, m = Math.max(m, T.yOffset + T.texture.height), l = E, -1 !== p && h > 0 && i.x > h && (kt(n, 1 + p - ++v, 1 + y - p), y = p, p = -1, o.push(_), s.push(n.length > 0 ? n[n.length - 1].prevSpaces : 0), d = Math.max(d, _), f++, i.x = 0, i.y += e.lineHeight, l = null, g = 0);
            }
          } else o.push(c), s.push(-1), d = Math.max(d, c), ++f, ++v, i.x = 0, i.y += e.lineHeight, l = null, g = 0;
        }

        var x = a[a.length - 1];
        "\r" !== x && "\n" !== x && (/(?:\s)/.test(x) && (c = _), o.push(c), d = Math.max(d, c), s.push(-1));
        var R = [];

        for (y = 0; y <= f; y++) {
          var A = 0;
          "right" === this._align ? A = d - o[y] : "center" === this._align ? A = (d - o[y]) / 2 : "justify" === this._align && (A = s[y] < 0 ? 0 : (d - o[y]) / s[y]), R.push(A);
        }

        var O = n.length,
            S = {},
            I = [],
            P = this._activePagesMeshData;

        for (y = 0; y < P.length; y++) u.push(P[y]);

        for (y = 0; y < O; y++) {
          var N = (H = n[y].texture).baseTexture.uid;

          if (!S[N]) {
            if (!(K = u.pop())) {
              var M = new ks(),
                  D = void 0,
                  w = void 0;
              "none" === e.distanceFieldType ? (D = new Xs(Dr.EMPTY), w = nt.NORMAL) : (D = new Xs(Dr.EMPTY, {
                program: Ii.from("// Mesh material default fragment\r\nattribute vec2 aVertexPosition;\r\nattribute vec2 aTextureCoord;\r\n\r\nuniform mat3 projectionMatrix;\r\nuniform mat3 translationMatrix;\r\nuniform mat3 uTextureMatrix;\r\n\r\nvarying vec2 vTextureCoord;\r\n\r\nvoid main(void)\r\n{\r\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\r\n\r\n    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\r\n}\r\n", "// Pixi texture info\r\nvarying vec2 vTextureCoord;\r\nuniform sampler2D uSampler;\r\n\r\n// Tint\r\nuniform vec4 uColor;\r\n\r\n// on 2D applications fwidth is screenScale / glyphAtlasScale * distanceFieldRange\r\nuniform float uFWidth;\r\n\r\nvoid main(void) {\r\n\r\n  // To stack MSDF and SDF we need a non-pre-multiplied-alpha texture.\r\n  vec4 texColor = texture2D(uSampler, vTextureCoord);\r\n\r\n  // MSDF\r\n  float median = texColor.r + texColor.g + texColor.b -\r\n                  min(texColor.r, min(texColor.g, texColor.b)) -\r\n                  max(texColor.r, max(texColor.g, texColor.b));\r\n  // SDF\r\n  median = min(median, texColor.a);\r\n\r\n  float screenPxDistance = uFWidth * (median - 0.5);\r\n  float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);\r\n\r\n  // NPM Textures, NPM outputs\r\n  gl_FragColor = vec4(uColor.rgb, uColor.a * alpha);\r\n\r\n}\r\n"),
                uniforms: {
                  uFWidth: 0
                }
              }), w = nt.NORMAL_NPM);
              var C = new Bs(M, D);
              C.blendMode = w, K = {
                index: 0,
                indexCount: 0,
                vertexCount: 0,
                uvsCount: 0,
                total: 0,
                mesh: C,
                vertices: null,
                uvs: null,
                indices: null
              };
            }

            K.index = 0, K.indexCount = 0, K.vertexCount = 0, K.uvsCount = 0, K.total = 0;
            var L = this._textureCache;
            L[N] = L[N] || new Dr(H.baseTexture), K.mesh.texture = L[N], K.mesh.tint = this._tint, I.push(K), S[N] = K;
          }

          S[N].total++;
        }

        for (y = 0; y < P.length; y++) -1 === I.indexOf(P[y]) && this.removeChild(P[y].mesh);

        for (y = 0; y < I.length; y++) I[y].mesh.parent !== this && this.addChild(I[y].mesh);

        for (var y in this._activePagesMeshData = I, S) {
          var F = (K = S[y]).total;
          if (!((null === (t = K.indices) || void 0 === t ? void 0 : t.length) > 6 * F) || K.vertices.length < 2 * Bs.BATCHABLE_SIZE) K.vertices = new Float32Array(8 * F), K.uvs = new Float32Array(8 * F), K.indices = new Uint16Array(6 * F);else for (var U = K.total, G = K.vertices, B = 4 * U * 2; B < G.length; B++) G[B] = 0;
          K.mesh.size = 6 * F;
        }

        for (y = 0; y < O; y++) {
          var X,
              k = (X = n[y]).position.x + R[X.line] * ("justify" === this._align ? X.prevSpaces : 1);
          this._roundPixels && (k = Math.round(k));
          var H,
              j = k * r,
              Y = X.position.y * r,
              V = S[(H = X.texture).baseTexture.uid],
              W = H.frame,
              z = H._uvs,
              q = V.index++;
          V.indices[6 * q + 0] = 0 + 4 * q, V.indices[6 * q + 1] = 1 + 4 * q, V.indices[6 * q + 2] = 2 + 4 * q, V.indices[6 * q + 3] = 0 + 4 * q, V.indices[6 * q + 4] = 2 + 4 * q, V.indices[6 * q + 5] = 3 + 4 * q, V.vertices[8 * q + 0] = j, V.vertices[8 * q + 1] = Y, V.vertices[8 * q + 2] = j + W.width * r, V.vertices[8 * q + 3] = Y, V.vertices[8 * q + 4] = j + W.width * r, V.vertices[8 * q + 5] = Y + W.height * r, V.vertices[8 * q + 6] = j, V.vertices[8 * q + 7] = Y + W.height * r, V.uvs[8 * q + 0] = z.x0, V.uvs[8 * q + 1] = z.y0, V.uvs[8 * q + 2] = z.x1, V.uvs[8 * q + 3] = z.y1, V.uvs[8 * q + 4] = z.x2, V.uvs[8 * q + 5] = z.y2, V.uvs[8 * q + 6] = z.x3, V.uvs[8 * q + 7] = z.y3;
        }

        for (var y in this._textWidth = d * r, this._textHeight = (i.y + e.lineHeight) * r, S) {
          var K = S[y];
          if (0 !== this.anchor.x || 0 !== this.anchor.y) for (var Z = 0, J = this._textWidth * this.anchor.x, Q = this._textHeight * this.anchor.y, $ = 0; $ < K.total; $++) K.vertices[Z++] -= J, K.vertices[Z++] -= Q, K.vertices[Z++] -= J, K.vertices[Z++] -= Q, K.vertices[Z++] -= J, K.vertices[Z++] -= Q, K.vertices[Z++] -= J, K.vertices[Z++] -= Q;
          this._maxLineHeight = m * r;
          var tt = K.mesh.geometry.getBuffer("aVertexPosition"),
              et = K.mesh.geometry.getBuffer("aTextureCoord"),
              rt = K.mesh.geometry.getIndex();
          tt.data = K.vertices, et.data = K.uvs, rt.data = K.indices, tt.update(), et.update(), rt.update();
        }

        for (y = 0; y < n.length; y++) ea.push(n[y]);
      }, e.prototype.updateTransform = function () {
        this.validate(), this.containerUpdateTransform();
      }, e.prototype._render = function (e) {
        var r = Qs.available[this._fontName],
            i = r.distanceFieldRange,
            n = r.distanceFieldType,
            o = r.size;
        if ("none" !== n) for (var s = this.worldTransform, a = s.a, h = s.b, u = s.c, l = s.d, c = Math.sqrt(a * a + h * h), d = Math.sqrt(u * u + l * l), f = (Math.abs(c) + Math.abs(d)) / 2, p = this._fontSize / o, _ = 0, v = this._activePagesMeshData; _ < v.length; _++) v[_].mesh.shader.uniforms.uFWidth = f * i * p * e.resolution;

        t.prototype._render.call(this, e);
      }, e.prototype.getLocalBounds = function () {
        return this.validate(), t.prototype.getLocalBounds.call(this);
      }, e.prototype.validate = function () {
        this.dirty && (this.updateText(), this.dirty = !1);
      }, Object.defineProperty(e.prototype, "tint", {
        get: function () {
          return this._tint;
        },
        set: function (t) {
          if (this._tint !== t) {
            this._tint = t;

            for (var e = 0; e < this._activePagesMeshData.length; e++) this._activePagesMeshData[e].mesh.tint = t;
          }
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "align", {
        get: function () {
          return this._align;
        },
        set: function (t) {
          this._align !== t && (this._align = t, this.dirty = !0);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "fontName", {
        get: function () {
          return this._fontName;
        },
        set: function (t) {
          if (!Qs.available[t]) throw new Error('Missing BitmapFont "' + t + '"');
          this._fontName !== t && (this._fontName = t, this.dirty = !0);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "fontSize", {
        get: function () {
          return this._fontSize;
        },
        set: function (t) {
          this._fontSize !== t && (this._fontSize = t, this.dirty = !0);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "anchor", {
        get: function () {
          return this._anchor;
        },
        set: function (t) {
          "number" == typeof t ? this._anchor.set(t) : this._anchor.copyFrom(t);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "text", {
        get: function () {
          return this._text;
        },
        set: function (t) {
          t = String(null == t ? "" : t), this._text !== t && (this._text = t, this.dirty = !0);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "maxWidth", {
        get: function () {
          return this._maxWidth;
        },
        set: function (t) {
          this._maxWidth !== t && (this._maxWidth = t, this.dirty = !0);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "maxLineHeight", {
        get: function () {
          return this.validate(), this._maxLineHeight;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "textWidth", {
        get: function () {
          return this.validate(), this._textWidth;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "letterSpacing", {
        get: function () {
          return this._letterSpacing;
        },
        set: function (t) {
          this._letterSpacing !== t && (this._letterSpacing = t, this.dirty = !0);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "roundPixels", {
        get: function () {
          return this._roundPixels;
        },
        set: function (t) {
          t !== this._roundPixels && (this._roundPixels = t, this.dirty = !0);
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "textHeight", {
        get: function () {
          return this.validate(), this._textHeight;
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.destroy = function (e) {
        var r = this._textureCache;

        for (var i in r) r[i].destroy(), delete r[i];

        this._textureCache = null, t.prototype.destroy.call(this, e);
      }, e.styleDefaults = {
        align: "left",
        tint: 16777215,
        maxWidth: 0,
        letterSpacing: 0
      };
    }(We), function () {
      function t() {}

      return t.add = function () {
        Un.setExtensionXhrType("fnt", Un.XHR_RESPONSE_TYPE.TEXT);
      }, t.use = function (e, r) {
        var i = qs(e.data);
        if (i) for (var n = t.getBaseUrl(this, e), o = i.parse(e.data), s = {}, a = function (t) {
          s[t.metadata.pageFile] = t.texture, Object.keys(s).length === o.page.length && (e.bitmapFont = Qs.install(o, s, !0), r());
        }, h = 0; h < o.page.length; ++h) {
          var u = o.page[h].file,
              l = n + u,
              c = !1;

          for (var d in this.resources) {
            var f = this.resources[d];

            if (f.url === l) {
              f.metadata.pageFile = u, f.texture ? a(f) : f.onAfterMiddleware.add(a), c = !0;
              break;
            }
          }

          if (!c) {
            var p = {
              crossOrigin: e.crossOrigin,
              loadType: Un.LOAD_TYPE.IMAGE,
              metadata: Object.assign({
                pageFile: u
              }, e.metadata.imageMetadata),
              parentResource: e
            };
            this.add(l, p, a);
          }
        } else r();
      }, t.getBaseUrl = function (e, r) {
        var i = r.isDataUrl ? "" : t.dirname(r.url);
        return r.isDataUrl && ("." === i && (i = ""), e.baseUrl && i && "/" === e.baseUrl.charAt(e.baseUrl.length - 1) && (i += "/")), (i = i.replace(e.baseUrl, "")) && "/" !== i.charAt(i.length - 1) && (i += "/"), i;
      }, t.dirname = function (t) {
        var e = t.replace(/\\/g, "/").replace(/\/$/, "").replace(/\/[^\/]*$/, "");
        return e === t ? "." : "" === e ? "/" : e;
      }, t;
    }()),
        ia = function (t, e) {
      return ia = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      }, ia(t, e);
    };

    !function (t) {
      function e(e) {
        void 0 === e && (e = 1);
        var r = t.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float uAlpha;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;\n}\n", {
          uAlpha: 1
        }) || this;
        return r.alpha = e, r;
      }

      (function (t, e) {
        function r() {
          this.constructor = t;
        }

        ia(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
      })(e, t), Object.defineProperty(e.prototype, "alpha", {
        get: function () {
          return this.uniforms.uAlpha;
        },
        set: function (t) {
          this.uniforms.uAlpha = t;
        },
        enumerable: !1,
        configurable: !0
      });
    }(Mi);

    var na = function (t, e) {
      return na = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      }, na(t, e);
    };

    function oa(t, e) {
      function r() {
        this.constructor = t;
      }

      na(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
    }

    var sa,
        aa,
        ha,
        ua,
        la,
        ca,
        da,
        fa,
        pa,
        _a,
        va,
        ma,
        ga,
        ya,
        Ea,
        Ta,
        ba,
        xa,
        Ra,
        Aa = {
      5: [.153388, .221461, .250301],
      7: [.071303, .131514, .189879, .214607],
      9: [.028532, .067234, .124009, .179044, .20236],
      11: [.0093, .028002, .065984, .121703, .175713, .198596],
      13: [.002406, .009255, .027867, .065666, .121117, .174868, .197641],
      15: [489e-6, .002403, .009246, .02784, .065602, .120999, .174697, .197448]
    },
        Oa = ["varying vec2 vBlurTexCoords[%size%];", "uniform sampler2D uSampler;", "void main(void)", "{", "    gl_FragColor = vec4(0.0);", "    %blur%", "}"].join("\n");

    !function (t) {
      t[t.WEBGL_LEGACY = 0] = "WEBGL_LEGACY", t[t.WEBGL = 1] = "WEBGL", t[t.WEBGL2 = 2] = "WEBGL2";
    }(sa || (sa = {})), function (t) {
      t[t.UNKNOWN = 0] = "UNKNOWN", t[t.WEBGL = 1] = "WEBGL", t[t.CANVAS = 2] = "CANVAS";
    }(aa || (aa = {})), function (t) {
      t[t.COLOR = 16384] = "COLOR", t[t.DEPTH = 256] = "DEPTH", t[t.STENCIL = 1024] = "STENCIL";
    }(ha || (ha = {})), function (t) {
      t[t.NORMAL = 0] = "NORMAL", t[t.ADD = 1] = "ADD", t[t.MULTIPLY = 2] = "MULTIPLY", t[t.SCREEN = 3] = "SCREEN", t[t.OVERLAY = 4] = "OVERLAY", t[t.DARKEN = 5] = "DARKEN", t[t.LIGHTEN = 6] = "LIGHTEN", t[t.COLOR_DODGE = 7] = "COLOR_DODGE", t[t.COLOR_BURN = 8] = "COLOR_BURN", t[t.HARD_LIGHT = 9] = "HARD_LIGHT", t[t.SOFT_LIGHT = 10] = "SOFT_LIGHT", t[t.DIFFERENCE = 11] = "DIFFERENCE", t[t.EXCLUSION = 12] = "EXCLUSION", t[t.HUE = 13] = "HUE", t[t.SATURATION = 14] = "SATURATION", t[t.COLOR = 15] = "COLOR", t[t.LUMINOSITY = 16] = "LUMINOSITY", t[t.NORMAL_NPM = 17] = "NORMAL_NPM", t[t.ADD_NPM = 18] = "ADD_NPM", t[t.SCREEN_NPM = 19] = "SCREEN_NPM", t[t.NONE = 20] = "NONE", t[t.SRC_OVER = 0] = "SRC_OVER", t[t.SRC_IN = 21] = "SRC_IN", t[t.SRC_OUT = 22] = "SRC_OUT", t[t.SRC_ATOP = 23] = "SRC_ATOP", t[t.DST_OVER = 24] = "DST_OVER", t[t.DST_IN = 25] = "DST_IN", t[t.DST_OUT = 26] = "DST_OUT", t[t.DST_ATOP = 27] = "DST_ATOP", t[t.ERASE = 26] = "ERASE", t[t.SUBTRACT = 28] = "SUBTRACT", t[t.XOR = 29] = "XOR";
    }(ua || (ua = {})), function (t) {
      t[t.POINTS = 0] = "POINTS", t[t.LINES = 1] = "LINES", t[t.LINE_LOOP = 2] = "LINE_LOOP", t[t.LINE_STRIP = 3] = "LINE_STRIP", t[t.TRIANGLES = 4] = "TRIANGLES", t[t.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP", t[t.TRIANGLE_FAN = 6] = "TRIANGLE_FAN";
    }(la || (la = {})), function (t) {
      t[t.RGBA = 6408] = "RGBA", t[t.RGB = 6407] = "RGB", t[t.RG = 33319] = "RG", t[t.RED = 6403] = "RED", t[t.RGBA_INTEGER = 36249] = "RGBA_INTEGER", t[t.RGB_INTEGER = 36248] = "RGB_INTEGER", t[t.RG_INTEGER = 33320] = "RG_INTEGER", t[t.RED_INTEGER = 36244] = "RED_INTEGER", t[t.ALPHA = 6406] = "ALPHA", t[t.LUMINANCE = 6409] = "LUMINANCE", t[t.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA", t[t.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT", t[t.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL";
    }(ca || (ca = {})), function (t) {
      t[t.TEXTURE_2D = 3553] = "TEXTURE_2D", t[t.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP", t[t.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY", t[t.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X", t[t.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X", t[t.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y", t[t.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z";
    }(da || (da = {})), function (t) {
      t[t.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", t[t.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", t[t.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", t[t.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", t[t.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1", t[t.UNSIGNED_INT = 5125] = "UNSIGNED_INT", t[t.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV", t[t.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV", t[t.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8", t[t.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV", t[t.BYTE = 5120] = "BYTE", t[t.SHORT = 5122] = "SHORT", t[t.INT = 5124] = "INT", t[t.FLOAT = 5126] = "FLOAT", t[t.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV", t[t.HALF_FLOAT = 36193] = "HALF_FLOAT";
    }(fa || (fa = {})), function (t) {
      t[t.FLOAT = 0] = "FLOAT", t[t.INT = 1] = "INT", t[t.UINT = 2] = "UINT";
    }(pa || (pa = {})), function (t) {
      t[t.NEAREST = 0] = "NEAREST", t[t.LINEAR = 1] = "LINEAR";
    }(_a || (_a = {})), function (t) {
      t[t.CLAMP = 33071] = "CLAMP", t[t.REPEAT = 10497] = "REPEAT", t[t.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT";
    }(va || (va = {})), function (t) {
      t[t.OFF = 0] = "OFF", t[t.POW2 = 1] = "POW2", t[t.ON = 2] = "ON", t[t.ON_MANUAL = 3] = "ON_MANUAL";
    }(ma || (ma = {})), function (t) {
      t[t.NPM = 0] = "NPM", t[t.UNPACK = 1] = "UNPACK", t[t.PMA = 2] = "PMA", t[t.NO_PREMULTIPLIED_ALPHA = 0] = "NO_PREMULTIPLIED_ALPHA", t[t.PREMULTIPLY_ON_UPLOAD = 1] = "PREMULTIPLY_ON_UPLOAD", t[t.PREMULTIPLY_ALPHA = 2] = "PREMULTIPLY_ALPHA", t[t.PREMULTIPLIED_ALPHA = 2] = "PREMULTIPLIED_ALPHA";
    }(ga || (ga = {})), function (t) {
      t[t.NO = 0] = "NO", t[t.YES = 1] = "YES", t[t.AUTO = 2] = "AUTO", t[t.BLEND = 0] = "BLEND", t[t.CLEAR = 1] = "CLEAR", t[t.BLIT = 2] = "BLIT";
    }(ya || (ya = {})), function (t) {
      t[t.AUTO = 0] = "AUTO", t[t.MANUAL = 1] = "MANUAL";
    }(Ea || (Ea = {})), function (t) {
      t.LOW = "lowp", t.MEDIUM = "mediump", t.HIGH = "highp";
    }(Ta || (Ta = {})), function (t) {
      t[t.NONE = 0] = "NONE", t[t.SCISSOR = 1] = "SCISSOR", t[t.STENCIL = 2] = "STENCIL", t[t.SPRITE = 3] = "SPRITE";
    }(ba || (ba = {})), function (t) {
      t[t.NONE = 0] = "NONE", t[t.LOW = 2] = "LOW", t[t.MEDIUM = 4] = "MEDIUM", t[t.HIGH = 8] = "HIGH";
    }(xa || (xa = {})), function (t) {
      t[t.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER", t[t.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", t[t.UNIFORM_BUFFER = 35345] = "UNIFORM_BUFFER";
    }(Ra || (Ra = {}));

    var Sa = function (t) {
      function e(e, r, i, n, o) {
        void 0 === r && (r = 8), void 0 === i && (i = 4), void 0 === n && (n = Et.FILTER_RESOLUTION), void 0 === o && (o = 5);

        var s = this,
            a = function (t, e) {
          var r,
              i = Math.ceil(t / 2),
              n = "\n    attribute vec2 aVertexPosition;\n\n    uniform mat3 projectionMatrix;\n\n    uniform float strength;\n\n    varying vec2 vBlurTexCoords[%size%];\n\n    uniform vec4 inputSize;\n    uniform vec4 outputFrame;\n\n    vec4 filterVertexPosition( void )\n    {\n        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n    }\n\n    vec2 filterTextureCoord( void )\n    {\n        return aVertexPosition * (outputFrame.zw * inputSize.zw);\n    }\n\n    void main(void)\n    {\n        gl_Position = filterVertexPosition();\n\n        vec2 textureCoord = filterTextureCoord();\n        %blur%\n    }",
              o = "";
          r = e ? "vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);" : "vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";

          for (var s = 0; s < t; s++) {
            var a = r.replace("%index%", s.toString());
            o += a = a.replace("%sampleIndex%", s - (i - 1) + ".0"), o += "\n";
          }

          return (n = n.replace("%blur%", o)).replace("%size%", t.toString());
        }(o, e),
            h = function (t) {
          for (var e, r = Aa[t], i = r.length, n = Oa, o = "", s = 0; s < t; s++) {
            var a = "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;".replace("%index%", s.toString());
            e = s, s >= i && (e = t - s - 1), o += a = a.replace("%value%", r[e].toString()), o += "\n";
          }

          return (n = n.replace("%blur%", o)).replace("%size%", t.toString());
        }(o);

        return (s = t.call(this, a, h) || this).horizontal = e, s.resolution = n, s._quality = 0, s.quality = i, s.blur = r, s;
      }

      return oa(e, t), e.prototype.apply = function (t, e, r, i) {
        if (r ? this.horizontal ? this.uniforms.strength = 1 / r.width * (r.width / e.width) : this.uniforms.strength = 1 / r.height * (r.height / e.height) : this.horizontal ? this.uniforms.strength = 1 / t.renderer.width * (t.renderer.width / e.width) : this.uniforms.strength = 1 / t.renderer.height * (t.renderer.height / e.height), this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes, 1 === this.passes) t.applyFilter(this, e, r, i);else {
          var n = t.getFilterTexture(),
              o = t.renderer,
              s = e,
              a = n;
          this.state.blend = !1, t.applyFilter(this, s, a, ya.CLEAR);

          for (var h = 1; h < this.passes - 1; h++) {
            t.bindAndClear(s, ya.BLIT), this.uniforms.uSampler = a;
            var u = a;
            a = s, s = u, o.shader.bind(this), o.geometry.draw(5);
          }

          this.state.blend = !0, t.applyFilter(this, a, r, i), t.returnFilterTexture(n);
        }
      }, Object.defineProperty(e.prototype, "blur", {
        get: function () {
          return this.strength;
        },
        set: function (t) {
          this.padding = 1 + 2 * Math.abs(t), this.strength = t;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "quality", {
        get: function () {
          return this._quality;
        },
        set: function (t) {
          this._quality = t, this.passes = t;
        },
        enumerable: !1,
        configurable: !0
      }), e;
    }(Mi),
        Ia = (function (t) {
      function e(e, r, i, n) {
        void 0 === e && (e = 8), void 0 === r && (r = 4), void 0 === i && (i = Et.FILTER_RESOLUTION), void 0 === n && (n = 5);
        var o = t.call(this) || this;
        return o.blurXFilter = new Sa(!0, e, r, i, n), o.blurYFilter = new Sa(!1, e, r, i, n), o.resolution = i, o.quality = r, o.blur = e, o.repeatEdgePixels = !1, o;
      }

      oa(e, t), e.prototype.apply = function (t, e, r, i) {
        var n = Math.abs(this.blurXFilter.strength),
            o = Math.abs(this.blurYFilter.strength);

        if (n && o) {
          var s = t.getFilterTexture();
          this.blurXFilter.apply(t, e, s, ya.CLEAR), this.blurYFilter.apply(t, s, r, i), t.returnFilterTexture(s);
        } else o ? this.blurYFilter.apply(t, e, r, i) : this.blurXFilter.apply(t, e, r, i);
      }, e.prototype.updatePadding = function () {
        this._repeatEdgePixels ? this.padding = 0 : this.padding = 2 * Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength));
      }, Object.defineProperty(e.prototype, "blur", {
        get: function () {
          return this.blurXFilter.blur;
        },
        set: function (t) {
          this.blurXFilter.blur = this.blurYFilter.blur = t, this.updatePadding();
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "quality", {
        get: function () {
          return this.blurXFilter.quality;
        },
        set: function (t) {
          this.blurXFilter.quality = this.blurYFilter.quality = t;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "blurX", {
        get: function () {
          return this.blurXFilter.blur;
        },
        set: function (t) {
          this.blurXFilter.blur = t, this.updatePadding();
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "blurY", {
        get: function () {
          return this.blurYFilter.blur;
        },
        set: function (t) {
          this.blurYFilter.blur = t, this.updatePadding();
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "blendMode", {
        get: function () {
          return this.blurYFilter.blendMode;
        },
        set: function (t) {
          this.blurYFilter.blendMode = t;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "repeatEdgePixels", {
        get: function () {
          return this._repeatEdgePixels;
        },
        set: function (t) {
          this._repeatEdgePixels = t, this.updatePadding();
        },
        enumerable: !1,
        configurable: !0
      });
    }(Mi), function (t, e) {
      return Ia = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      }, Ia(t, e);
    }),
        Pa = function (t) {
      function e() {
        var e = this,
            r = {
          m: new Float32Array([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]),
          uAlpha: 1
        };
        return (e = t.call(this, hn, "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[20];\nuniform float uAlpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (uAlpha == 0.0) {\n        gl_FragColor = c;\n        return;\n    }\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (c.a > 0.0) {\n      c.rgb /= c.a;\n    }\n\n    vec4 result;\n\n    result.r = (m[0] * c.r);\n        result.r += (m[1] * c.g);\n        result.r += (m[2] * c.b);\n        result.r += (m[3] * c.a);\n        result.r += m[4];\n\n    result.g = (m[5] * c.r);\n        result.g += (m[6] * c.g);\n        result.g += (m[7] * c.b);\n        result.g += (m[8] * c.a);\n        result.g += m[9];\n\n    result.b = (m[10] * c.r);\n       result.b += (m[11] * c.g);\n       result.b += (m[12] * c.b);\n       result.b += (m[13] * c.a);\n       result.b += m[14];\n\n    result.a = (m[15] * c.r);\n       result.a += (m[16] * c.g);\n       result.a += (m[17] * c.b);\n       result.a += (m[18] * c.a);\n       result.a += m[19];\n\n    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);\n\n    // Premultiply alpha again.\n    rgb *= result.a;\n\n    gl_FragColor = vec4(rgb, result.a);\n}\n", r) || this).alpha = 1, e;
      }

      return function (t, e) {
        function r() {
          this.constructor = t;
        }

        Ia(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
      }(e, t), e.prototype._loadMatrix = function (t, e) {
        void 0 === e && (e = !1);
        var r = t;
        e && (this._multiply(r, this.uniforms.m, t), r = this._colorMatrix(r)), this.uniforms.m = r;
      }, e.prototype._multiply = function (t, e, r) {
        return t[0] = e[0] * r[0] + e[1] * r[5] + e[2] * r[10] + e[3] * r[15], t[1] = e[0] * r[1] + e[1] * r[6] + e[2] * r[11] + e[3] * r[16], t[2] = e[0] * r[2] + e[1] * r[7] + e[2] * r[12] + e[3] * r[17], t[3] = e[0] * r[3] + e[1] * r[8] + e[2] * r[13] + e[3] * r[18], t[4] = e[0] * r[4] + e[1] * r[9] + e[2] * r[14] + e[3] * r[19] + e[4], t[5] = e[5] * r[0] + e[6] * r[5] + e[7] * r[10] + e[8] * r[15], t[6] = e[5] * r[1] + e[6] * r[6] + e[7] * r[11] + e[8] * r[16], t[7] = e[5] * r[2] + e[6] * r[7] + e[7] * r[12] + e[8] * r[17], t[8] = e[5] * r[3] + e[6] * r[8] + e[7] * r[13] + e[8] * r[18], t[9] = e[5] * r[4] + e[6] * r[9] + e[7] * r[14] + e[8] * r[19] + e[9], t[10] = e[10] * r[0] + e[11] * r[5] + e[12] * r[10] + e[13] * r[15], t[11] = e[10] * r[1] + e[11] * r[6] + e[12] * r[11] + e[13] * r[16], t[12] = e[10] * r[2] + e[11] * r[7] + e[12] * r[12] + e[13] * r[17], t[13] = e[10] * r[3] + e[11] * r[8] + e[12] * r[13] + e[13] * r[18], t[14] = e[10] * r[4] + e[11] * r[9] + e[12] * r[14] + e[13] * r[19] + e[14], t[15] = e[15] * r[0] + e[16] * r[5] + e[17] * r[10] + e[18] * r[15], t[16] = e[15] * r[1] + e[16] * r[6] + e[17] * r[11] + e[18] * r[16], t[17] = e[15] * r[2] + e[16] * r[7] + e[17] * r[12] + e[18] * r[17], t[18] = e[15] * r[3] + e[16] * r[8] + e[17] * r[13] + e[18] * r[18], t[19] = e[15] * r[4] + e[16] * r[9] + e[17] * r[14] + e[18] * r[19] + e[19], t;
      }, e.prototype._colorMatrix = function (t) {
        var e = new Float32Array(t);
        return e[4] /= 255, e[9] /= 255, e[14] /= 255, e[19] /= 255, e;
      }, e.prototype.brightness = function (t, e) {
        var r = [t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 1, 0];

        this._loadMatrix(r, e);
      }, e.prototype.tint = function (t, e) {
        var r = [(t >> 16 & 255) / 255, 0, 0, 0, 0, 0, (t >> 8 & 255) / 255, 0, 0, 0, 0, 0, (255 & t) / 255, 0, 0, 0, 0, 0, 1, 0];

        this._loadMatrix(r, e);
      }, e.prototype.greyscale = function (t, e) {
        var r = [t, t, t, 0, 0, t, t, t, 0, 0, t, t, t, 0, 0, 0, 0, 0, 1, 0];

        this._loadMatrix(r, e);
      }, e.prototype.blackAndWhite = function (t) {
        this._loadMatrix([.3, .6, .1, 0, 0, .3, .6, .1, 0, 0, .3, .6, .1, 0, 0, 0, 0, 0, 1, 0], t);
      }, e.prototype.hue = function (t, e) {
        t = (t || 0) / 180 * Math.PI;
        var r = Math.cos(t),
            i = Math.sin(t),
            n = 1 / 3,
            o = (0, Math.sqrt)(n),
            s = [r + (1 - r) * n, n * (1 - r) - o * i, n * (1 - r) + o * i, 0, 0, n * (1 - r) + o * i, r + n * (1 - r), n * (1 - r) - o * i, 0, 0, n * (1 - r) - o * i, n * (1 - r) + o * i, r + n * (1 - r), 0, 0, 0, 0, 0, 1, 0];

        this._loadMatrix(s, e);
      }, e.prototype.contrast = function (t, e) {
        var r = (t || 0) + 1,
            i = -.5 * (r - 1),
            n = [r, 0, 0, 0, i, 0, r, 0, 0, i, 0, 0, r, 0, i, 0, 0, 0, 1, 0];

        this._loadMatrix(n, e);
      }, e.prototype.saturate = function (t, e) {
        void 0 === t && (t = 0);
        var r = 2 * t / 3 + 1,
            i = -.5 * (r - 1),
            n = [r, i, i, 0, 0, i, r, i, 0, 0, i, i, r, 0, 0, 0, 0, 0, 1, 0];

        this._loadMatrix(n, e);
      }, e.prototype.desaturate = function () {
        this.saturate(-1);
      }, e.prototype.negative = function (t) {
        this._loadMatrix([-1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, 0], t);
      }, e.prototype.sepia = function (t) {
        this._loadMatrix([.393, .7689999, .18899999, 0, 0, .349, .6859999, .16799999, 0, 0, .272, .5339999, .13099999, 0, 0, 0, 0, 0, 1, 0], t);
      }, e.prototype.technicolor = function (t) {
        this._loadMatrix([1.9125277891456083, -.8545344976951645, -.09155508482755585, 0, 11.793603434377337, -.3087833385928097, 1.7658908555458428, -.10601743074722245, 0, -70.35205161461398, -.231103377548616, -.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1, 0], t);
      }, e.prototype.polaroid = function (t) {
        this._loadMatrix([1.438, -.062, -.062, 0, 0, -.122, 1.378, -.122, 0, 0, -.016, -.016, 1.483, 0, 0, 0, 0, 0, 1, 0], t);
      }, e.prototype.toBGR = function (t) {
        this._loadMatrix([0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0], t);
      }, e.prototype.kodachrome = function (t) {
        this._loadMatrix([1.1285582396593525, -.3967382283601348, -.03992559172921793, 0, 63.72958762196502, -.16404339962244616, 1.0835251566291304, -.05498805115633132, 0, 24.732407896706203, -.16786010706155763, -.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1, 0], t);
      }, e.prototype.browni = function (t) {
        this._loadMatrix([.5997023498159715, .34553243048391263, -.2708298674538042, 0, 47.43192855600873, -.037703249837783157, .8609577587992641, .15059552388459913, 0, -36.96841498319127, .24113635128153335, -.07441037908422492, .44972182064877153, 0, -7.562075277591283, 0, 0, 0, 1, 0], t);
      }, e.prototype.vintage = function (t) {
        this._loadMatrix([.6279345635605994, .3202183420819367, -.03965408211312453, 0, 9.651285835294123, .02578397704808868, .6441188644374771, .03259127616149294, 0, 7.462829176470591, .0466055556782719, -.0851232987247891, .5241648018700465, 0, 5.159190588235296, 0, 0, 0, 1, 0], t);
      }, e.prototype.colorTone = function (t, e, r, i, n) {
        var o = ((r = r || 16770432) >> 16 & 255) / 255,
            s = (r >> 8 & 255) / 255,
            a = (255 & r) / 255,
            h = ((i = i || 3375104) >> 16 & 255) / 255,
            u = (i >> 8 & 255) / 255,
            l = (255 & i) / 255,
            c = [.3, .59, .11, 0, 0, o, s, a, t = t || .2, 0, h, u, l, e = e || .15, 0, o - h, s - u, a - l, 0, 0];

        this._loadMatrix(c, n);
      }, e.prototype.night = function (t, e) {
        var r = [-2 * (t = t || .1), -t, 0, 0, 0, -t, 0, t, 0, 0, 0, t, 2 * t, 0, 0, 0, 0, 0, 1, 0];

        this._loadMatrix(r, e);
      }, e.prototype.predator = function (t, e) {
        var r = [11.224130630493164 * t, -4.794486999511719 * t, -2.8746118545532227 * t, 0 * t, .40342438220977783 * t, -3.6330697536468506 * t, 9.193157196044922 * t, -2.951810836791992 * t, 0 * t, -1.316135048866272 * t, -3.2184197902679443 * t, -4.2375030517578125 * t, 7.476448059082031 * t, 0 * t, .8044459223747253 * t, 0, 0, 0, 1, 0];

        this._loadMatrix(r, e);
      }, e.prototype.lsd = function (t) {
        this._loadMatrix([2, -.4, .5, 0, 0, -.5, 2, -.4, 0, 0, -.4, -.5, 3, 0, 0, 0, 0, 0, 1, 0], t);
      }, e.prototype.reset = function () {
        this._loadMatrix([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], !1);
      }, Object.defineProperty(e.prototype, "matrix", {
        get: function () {
          return this.uniforms.m;
        },
        set: function (t) {
          this.uniforms.m = t;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "alpha", {
        get: function () {
          return this.uniforms.uAlpha;
        },
        set: function (t) {
          this.uniforms.uAlpha = t;
        },
        enumerable: !1,
        configurable: !0
      }), e;
    }(Mi);

    Pa.prototype.grayscale = Pa.prototype.greyscale;

    var Na = function (t, e) {
      return Na = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      }, Na(t, e);
    };

    !function (t) {
      function e(e, r) {
        var i = this,
            n = new ce();
        return e.renderable = !1, (i = t.call(this, "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\nuniform mat3 filterMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n\tgl_Position = filterVertexPosition();\n\tvTextureCoord = filterTextureCoord();\n\tvFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;\n}\n", "varying vec2 vFilterCoord;\nvarying vec2 vTextureCoord;\n\nuniform vec2 scale;\nuniform mat2 rotation;\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nuniform highp vec4 inputSize;\nuniform vec4 inputClamp;\n\nvoid main(void)\n{\n  vec4 map =  texture2D(mapSampler, vFilterCoord);\n\n  map -= 0.5;\n  map.xy = scale * inputSize.zw * (rotation * map.xy);\n\n  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));\n}\n", {
          mapSampler: e._texture,
          filterMatrix: n,
          scale: {
            x: 1,
            y: 1
          },
          rotation: new Float32Array([1, 0, 0, 1])
        }) || this).maskSprite = e, i.maskMatrix = n, null == r && (r = 20), i.scale = new ie(r, r), i;
      }

      (function (t, e) {
        function r() {
          this.constructor = t;
        }

        Na(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
      })(e, t), e.prototype.apply = function (t, e, r, i) {
        this.uniforms.filterMatrix = t.calculateSpriteMatrix(this.maskMatrix, this.maskSprite), this.uniforms.scale.x = this.scale.x, this.uniforms.scale.y = this.scale.y;
        var n = this.maskSprite.worldTransform,
            o = Math.sqrt(n.a * n.a + n.b * n.b),
            s = Math.sqrt(n.c * n.c + n.d * n.d);
        0 !== o && 0 !== s && (this.uniforms.rotation[0] = n.a / o, this.uniforms.rotation[1] = n.b / o, this.uniforms.rotation[2] = n.c / s, this.uniforms.rotation[3] = n.d / s), t.applyFilter(this, e, r, i);
      }, Object.defineProperty(e.prototype, "map", {
        get: function () {
          return this.uniforms.mapSampler;
        },
        set: function (t) {
          this.uniforms.mapSampler = t;
        },
        enumerable: !1,
        configurable: !0
      });
    }(Mi);

    var Ma,
        Da = function (t, e) {
      return Da = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      }, Da(t, e);
    };

    (function (t, e) {
      function r() {
        this.constructor = t;
      }

      Da(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
    })(function () {
      return Ma.call(this, "\nattribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vFragCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvoid texcoords(vec2 fragCoord, vec2 inverseVP,\n               out vec2 v_rgbNW, out vec2 v_rgbNE,\n               out vec2 v_rgbSW, out vec2 v_rgbSE,\n               out vec2 v_rgbM) {\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void) {\n\n   gl_Position = filterVertexPosition();\n\n   vFragCoord = aVertexPosition * outputFrame.zw;\n\n   texcoords(vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}\n", 'varying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vFragCoord;\nuniform sampler2D uSampler;\nuniform highp vec4 inputSize;\n\n\n/**\n Basic FXAA implementation based on the code on geeks3d.com with the\n modification that the texture2DLod stuff was removed since it\'s\n unsupported by WebGL.\n\n --\n\n From:\n https://github.com/mitsuhiko/webgl-meincraft\n\n Copyright (c) 2011 by Armin Ronacher.\n\n Some rights reserved.\n\n Redistribution and use in source and binary forms, with or without\n modification, are permitted provided that the following conditions are\n met:\n\n * Redistributions of source code must retain the above copyright\n notice, this list of conditions and the following disclaimer.\n\n * Redistributions in binary form must reproduce the above\n copyright notice, this list of conditions and the following\n disclaimer in the documentation and/or other materials provided\n with the distribution.\n\n * The names of the contributors may not be used to endorse or\n promote products derived from this software without specific\n prior written permission.\n\n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n#ifndef FXAA_REDUCE_MIN\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n#define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,\n          vec2 v_rgbNW, vec2 v_rgbNE,\n          vec2 v_rgbSW, vec2 v_rgbSE,\n          vec2 v_rgbM) {\n    vec4 color;\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n                  dir * rcpDirMin)) * inverseVP;\n\n    vec3 rgbA = 0.5 * (\n                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\nvoid main() {\n\n      vec4 color;\n\n      color = fxaa(uSampler, vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n      gl_FragColor = color;\n}\n') || this;
    }, Ma = Mi);

    var wa,
        Ca,
        La,
        Fa,
        Ua,
        Ga,
        Ba,
        Xa,
        ka,
        Ha,
        ja,
        Ya,
        Va,
        Wa,
        za,
        qa,
        Ka,
        Za,
        Ja,
        Qa = function (t, e) {
      return Qa = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      }, Qa(t, e);
    };

    !function (t) {
      function e(e, r) {
        void 0 === e && (e = .5), void 0 === r && (r = Math.random());
        var i = t.call(this, hn, "precision highp float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float uNoise;\nuniform float uSeed;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    float randomValue = rand(gl_FragCoord.xy * uSeed);\n    float diff = (randomValue - 0.5) * uNoise;\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n    }\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    // Premultiply alpha again.\n    color.rgb *= color.a;\n\n    gl_FragColor = color;\n}\n", {
          uNoise: 0,
          uSeed: 0
        }) || this;
        return i.noise = e, i.seed = r, i;
      }

      (function (t, e) {
        function r() {
          this.constructor = t;
        }

        Qa(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
      })(e, t), Object.defineProperty(e.prototype, "noise", {
        get: function () {
          return this.uniforms.uNoise;
        },
        set: function (t) {
          this.uniforms.uNoise = t;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "seed", {
        get: function () {
          return this.uniforms.uSeed;
        },
        set: function (t) {
          this.uniforms.uSeed = t;
        },
        enumerable: !1,
        configurable: !0
      });
    }(Mi), function (t) {
      t[t.WEBGL_LEGACY = 0] = "WEBGL_LEGACY", t[t.WEBGL = 1] = "WEBGL", t[t.WEBGL2 = 2] = "WEBGL2";
    }(wa || (wa = {})), function (t) {
      t[t.UNKNOWN = 0] = "UNKNOWN", t[t.WEBGL = 1] = "WEBGL", t[t.CANVAS = 2] = "CANVAS";
    }(Ca || (Ca = {})), function (t) {
      t[t.COLOR = 16384] = "COLOR", t[t.DEPTH = 256] = "DEPTH", t[t.STENCIL = 1024] = "STENCIL";
    }(La || (La = {})), function (t) {
      t[t.NORMAL = 0] = "NORMAL", t[t.ADD = 1] = "ADD", t[t.MULTIPLY = 2] = "MULTIPLY", t[t.SCREEN = 3] = "SCREEN", t[t.OVERLAY = 4] = "OVERLAY", t[t.DARKEN = 5] = "DARKEN", t[t.LIGHTEN = 6] = "LIGHTEN", t[t.COLOR_DODGE = 7] = "COLOR_DODGE", t[t.COLOR_BURN = 8] = "COLOR_BURN", t[t.HARD_LIGHT = 9] = "HARD_LIGHT", t[t.SOFT_LIGHT = 10] = "SOFT_LIGHT", t[t.DIFFERENCE = 11] = "DIFFERENCE", t[t.EXCLUSION = 12] = "EXCLUSION", t[t.HUE = 13] = "HUE", t[t.SATURATION = 14] = "SATURATION", t[t.COLOR = 15] = "COLOR", t[t.LUMINOSITY = 16] = "LUMINOSITY", t[t.NORMAL_NPM = 17] = "NORMAL_NPM", t[t.ADD_NPM = 18] = "ADD_NPM", t[t.SCREEN_NPM = 19] = "SCREEN_NPM", t[t.NONE = 20] = "NONE", t[t.SRC_OVER = 0] = "SRC_OVER", t[t.SRC_IN = 21] = "SRC_IN", t[t.SRC_OUT = 22] = "SRC_OUT", t[t.SRC_ATOP = 23] = "SRC_ATOP", t[t.DST_OVER = 24] = "DST_OVER", t[t.DST_IN = 25] = "DST_IN", t[t.DST_OUT = 26] = "DST_OUT", t[t.DST_ATOP = 27] = "DST_ATOP", t[t.ERASE = 26] = "ERASE", t[t.SUBTRACT = 28] = "SUBTRACT", t[t.XOR = 29] = "XOR";
    }(Fa || (Fa = {})), function (t) {
      t[t.POINTS = 0] = "POINTS", t[t.LINES = 1] = "LINES", t[t.LINE_LOOP = 2] = "LINE_LOOP", t[t.LINE_STRIP = 3] = "LINE_STRIP", t[t.TRIANGLES = 4] = "TRIANGLES", t[t.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP", t[t.TRIANGLE_FAN = 6] = "TRIANGLE_FAN";
    }(Ua || (Ua = {})), function (t) {
      t[t.RGBA = 6408] = "RGBA", t[t.RGB = 6407] = "RGB", t[t.RG = 33319] = "RG", t[t.RED = 6403] = "RED", t[t.RGBA_INTEGER = 36249] = "RGBA_INTEGER", t[t.RGB_INTEGER = 36248] = "RGB_INTEGER", t[t.RG_INTEGER = 33320] = "RG_INTEGER", t[t.RED_INTEGER = 36244] = "RED_INTEGER", t[t.ALPHA = 6406] = "ALPHA", t[t.LUMINANCE = 6409] = "LUMINANCE", t[t.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA", t[t.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT", t[t.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL";
    }(Ga || (Ga = {})), function (t) {
      t[t.TEXTURE_2D = 3553] = "TEXTURE_2D", t[t.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP", t[t.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY", t[t.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X", t[t.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X", t[t.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y", t[t.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z", t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z";
    }(Ba || (Ba = {})), function (t) {
      t[t.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", t[t.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", t[t.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", t[t.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", t[t.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1", t[t.UNSIGNED_INT = 5125] = "UNSIGNED_INT", t[t.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV", t[t.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV", t[t.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8", t[t.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV", t[t.BYTE = 5120] = "BYTE", t[t.SHORT = 5122] = "SHORT", t[t.INT = 5124] = "INT", t[t.FLOAT = 5126] = "FLOAT", t[t.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV", t[t.HALF_FLOAT = 36193] = "HALF_FLOAT";
    }(Xa || (Xa = {})), function (t) {
      t[t.FLOAT = 0] = "FLOAT", t[t.INT = 1] = "INT", t[t.UINT = 2] = "UINT";
    }(ka || (ka = {})), function (t) {
      t[t.NEAREST = 0] = "NEAREST", t[t.LINEAR = 1] = "LINEAR";
    }(Ha || (Ha = {})), function (t) {
      t[t.CLAMP = 33071] = "CLAMP", t[t.REPEAT = 10497] = "REPEAT", t[t.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT";
    }(ja || (ja = {})), function (t) {
      t[t.OFF = 0] = "OFF", t[t.POW2 = 1] = "POW2", t[t.ON = 2] = "ON", t[t.ON_MANUAL = 3] = "ON_MANUAL";
    }(Ya || (Ya = {})), function (t) {
      t[t.NPM = 0] = "NPM", t[t.UNPACK = 1] = "UNPACK", t[t.PMA = 2] = "PMA", t[t.NO_PREMULTIPLIED_ALPHA = 0] = "NO_PREMULTIPLIED_ALPHA", t[t.PREMULTIPLY_ON_UPLOAD = 1] = "PREMULTIPLY_ON_UPLOAD", t[t.PREMULTIPLY_ALPHA = 2] = "PREMULTIPLY_ALPHA", t[t.PREMULTIPLIED_ALPHA = 2] = "PREMULTIPLIED_ALPHA";
    }(Va || (Va = {})), function (t) {
      t[t.NO = 0] = "NO", t[t.YES = 1] = "YES", t[t.AUTO = 2] = "AUTO", t[t.BLEND = 0] = "BLEND", t[t.CLEAR = 1] = "CLEAR", t[t.BLIT = 2] = "BLIT";
    }(Wa || (Wa = {})), function (t) {
      t[t.AUTO = 0] = "AUTO", t[t.MANUAL = 1] = "MANUAL";
    }(za || (za = {})), function (t) {
      t.LOW = "lowp", t.MEDIUM = "mediump", t.HIGH = "highp";
    }(qa || (qa = {})), function (t) {
      t[t.NONE = 0] = "NONE", t[t.SCISSOR = 1] = "SCISSOR", t[t.STENCIL = 2] = "STENCIL", t[t.SPRITE = 3] = "SPRITE";
    }(Ka || (Ka = {})), function (t) {
      t[t.NONE = 0] = "NONE", t[t.LOW = 2] = "LOW", t[t.MEDIUM = 4] = "MEDIUM", t[t.HIGH = 8] = "HIGH";
    }(Za || (Za = {})), function (t) {
      t[t.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER", t[t.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", t[t.UNIFORM_BUFFER = 35345] = "UNIFORM_BUFFER";
    }(Ja || (Ja = {}));
    var $a = new ce();
    je.prototype._cacheAsBitmap = !1, je.prototype._cacheData = null, je.prototype._cacheAsBitmapResolution = null, je.prototype._cacheAsBitmapMultisample = Za.NONE;

    var th = function () {
      this.textureCacheId = null, this.originalRender = null, this.originalRenderCanvas = null, this.originalCalculateBounds = null, this.originalGetLocalBounds = null, this.originalUpdateTransform = null, this.originalDestroy = null, this.originalMask = null, this.originalFilterArea = null, this.originalContainsPoint = null, this.sprite = null;
    };

    Object.defineProperties(je.prototype, {
      cacheAsBitmapResolution: {
        get: function () {
          return this._cacheAsBitmapResolution;
        },
        set: function (t) {
          t !== this._cacheAsBitmapResolution && (this._cacheAsBitmapResolution = t, this.cacheAsBitmap && (this.cacheAsBitmap = !1, this.cacheAsBitmap = !0));
        }
      },
      cacheAsBitmapMultisample: {
        get: function () {
          return this._cacheAsBitmapMultisample;
        },
        set: function (t) {
          t !== this._cacheAsBitmapMultisample && (this._cacheAsBitmapMultisample = t, this.cacheAsBitmap && (this.cacheAsBitmap = !1, this.cacheAsBitmap = !0));
        }
      },
      cacheAsBitmap: {
        get: function () {
          return this._cacheAsBitmap;
        },
        set: function (t) {
          var e;
          this._cacheAsBitmap !== t && (this._cacheAsBitmap = t, t ? (this._cacheData || (this._cacheData = new th()), (e = this._cacheData).originalRender = this.render, e.originalRenderCanvas = this.renderCanvas, e.originalUpdateTransform = this.updateTransform, e.originalCalculateBounds = this.calculateBounds, e.originalGetLocalBounds = this.getLocalBounds, e.originalDestroy = this.destroy, e.originalContainsPoint = this.containsPoint, e.originalMask = this._mask, e.originalFilterArea = this.filterArea, this.render = this._renderCached, this.renderCanvas = this._renderCachedCanvas, this.destroy = this._cacheAsBitmapDestroy) : ((e = this._cacheData).sprite && this._destroyCachedDisplayObject(), this.render = e.originalRender, this.renderCanvas = e.originalRenderCanvas, this.calculateBounds = e.originalCalculateBounds, this.getLocalBounds = e.originalGetLocalBounds, this.destroy = e.originalDestroy, this.updateTransform = e.originalUpdateTransform, this.containsPoint = e.originalContainsPoint, this._mask = e.originalMask, this.filterArea = e.originalFilterArea));
        }
      }
    }), je.prototype._renderCached = function (t) {
      !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObject(t), this._cacheData.sprite.transform._worldID = this.transform._worldID, this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._render(t));
    }, je.prototype._initCachedDisplayObject = function (t) {
      var e;

      if (!this._cacheData || !this._cacheData.sprite) {
        var r = this.alpha;
        this.alpha = 1, t.batch.flush();
        var i = this.getLocalBounds(null, !0).clone();

        if (this.filters && this.filters.length) {
          var n = this.filters[0].padding;
          i.pad(n);
        }

        i.ceil(Et.RESOLUTION);
        var o = t.renderTexture.current,
            s = t.renderTexture.sourceFrame.clone(),
            a = t.renderTexture.destinationFrame.clone(),
            h = t.projection.transform,
            u = wr.create({
          width: i.width,
          height: i.height,
          resolution: this.cacheAsBitmapResolution || t.resolution,
          multisample: null !== (e = this.cacheAsBitmapMultisample) && void 0 !== e ? e : t.multisample
        }),
            l = "cacheAsBitmap_" + Yt();
        this._cacheData.textureCacheId = l, _r.addToCache(u.baseTexture, l), Dr.addToCache(u, l);
        var c = this.transform.localTransform.copyTo($a).invert().translate(-i.x, -i.y);
        this.render = this._cacheData.originalRender, t.render(this, {
          renderTexture: u,
          clear: !0,
          transform: c,
          skipUpdateTransform: !1
        }), t.framebuffer.blit(), t.projection.transform = h, t.renderTexture.bind(o, s, a), this.render = this._renderCached, this.updateTransform = this.displayObjectUpdateTransform, this.calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._mask = null, this.filterArea = null, this.alpha = r;
        var d = new rs(u);
        d.transform.worldTransform = this.transform.worldTransform, d.anchor.x = -i.x / i.width, d.anchor.y = -i.y / i.height, d.alpha = r, d._bounds = this._bounds, this._cacheData.sprite = d, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.enableTempParent(), this.updateTransform(), this.disableTempParent(null)), this.containsPoint = d.containsPoint.bind(d);
      }
    }, je.prototype._renderCachedCanvas = function (t) {
      !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObjectCanvas(t), this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._renderCanvas(t));
    }, je.prototype._initCachedDisplayObjectCanvas = function (t) {
      if (!this._cacheData || !this._cacheData.sprite) {
        var e = this.getLocalBounds(null, !0),
            r = this.alpha;
        this.alpha = 1;
        var i = t.context,
            n = t._projTransform;
        e.ceil(Et.RESOLUTION);
        var o = wr.create({
          width: e.width,
          height: e.height
        }),
            s = "cacheAsBitmap_" + Yt();
        this._cacheData.textureCacheId = s, _r.addToCache(o.baseTexture, s), Dr.addToCache(o, s);
        var a = $a;
        this.transform.localTransform.copyTo(a), a.invert(), a.tx -= e.x, a.ty -= e.y, this.renderCanvas = this._cacheData.originalRenderCanvas, t.render(this, {
          renderTexture: o,
          clear: !0,
          transform: a,
          skipUpdateTransform: !1
        }), t.context = i, t._projTransform = n, this.renderCanvas = this._renderCachedCanvas, this.updateTransform = this.displayObjectUpdateTransform, this.calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._mask = null, this.filterArea = null, this.alpha = r;
        var h = new rs(o);
        h.transform.worldTransform = this.transform.worldTransform, h.anchor.x = -e.x / e.width, h.anchor.y = -e.y / e.height, h.alpha = r, h._bounds = this._bounds, this._cacheData.sprite = h, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.parent = t._tempDisplayObjectParent, this.updateTransform(), this.parent = null), this.containsPoint = h.containsPoint.bind(h);
      }
    }, je.prototype._calculateCachedBounds = function () {
      this._bounds.clear(), this._cacheData.sprite.transform._worldID = this.transform._worldID, this._cacheData.sprite._calculateBounds(), this._bounds.updateID = this._boundsID;
    }, je.prototype._getCachedLocalBounds = function () {
      return this._cacheData.sprite.getLocalBounds(null);
    }, je.prototype._destroyCachedDisplayObject = function () {
      this._cacheData.sprite._texture.destroy(!0), this._cacheData.sprite = null, _r.removeFromCache(this._cacheData.textureCacheId), Dr.removeFromCache(this._cacheData.textureCacheId), this._cacheData.textureCacheId = null;
    }, je.prototype._cacheAsBitmapDestroy = function (t) {
      this.cacheAsBitmap = !1, this.destroy(t);
    }, je.prototype.name = null, We.prototype.getChildByName = function (t, e) {
      for (var r = 0, i = this.children.length; r < i; r++) if (this.children[r].name === t) return this.children[r];

      if (e) for (r = 0, i = this.children.length; r < i; r++) if (this.children[r].getChildByName) {
        var n = this.children[r].getChildByName(t, !0);
        if (n) return n;
      }
      return null;
    }, je.prototype.getGlobalPosition = function (t, e) {
      return void 0 === t && (t = new ie()), void 0 === e && (e = !1), this.parent ? this.parent.toGlobal(this.position, t, e) : (t.x = this.position.x, t.y = this.position.y), t;
    };

    var eh = function (t, e) {
      return eh = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      }, eh(t, e);
    };

    function rh(t, e) {
      function r() {
        this.constructor = t;
      }

      eh(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
    }

    var ih = function (t) {
      function e(e, r, i, n) {
        void 0 === e && (e = 100), void 0 === r && (r = 100), void 0 === i && (i = 10), void 0 === n && (n = 10);
        var o = t.call(this) || this;
        return o.segWidth = i, o.segHeight = n, o.width = e, o.height = r, o.build(), o;
      }

      return rh(e, t), e.prototype.build = function () {
        for (var t = this.segWidth * this.segHeight, e = [], r = [], i = [], n = this.segWidth - 1, o = this.segHeight - 1, s = this.width / n, a = this.height / o, h = 0; h < t; h++) {
          var u = h % this.segWidth,
              l = h / this.segWidth | 0;
          e.push(u * s, l * a), r.push(u / n, l / o);
        }

        var c = n * o;

        for (h = 0; h < c; h++) {
          var d = h % n,
              f = h / n | 0,
              p = f * this.segWidth + d,
              _ = f * this.segWidth + d + 1,
              v = (f + 1) * this.segWidth + d,
              m = (f + 1) * this.segWidth + d + 1;

          i.push(p, _, v, _, m, v);
        }

        this.buffers[0].data = new Float32Array(e), this.buffers[1].data = new Float32Array(r), this.indexBuffer.data = new Uint16Array(i), this.buffers[0].update(), this.buffers[1].update(), this.indexBuffer.update();
      }, e;
    }(ks),
        nh = function (t) {
      function e(e, r, i) {
        void 0 === e && (e = 200), void 0 === i && (i = 0);
        var n = t.call(this, new Float32Array(4 * r.length), new Float32Array(4 * r.length), new Uint16Array(6 * (r.length - 1))) || this;
        return n.points = r, n._width = e, n.textureScale = i, n.build(), n;
      }

      return rh(e, t), Object.defineProperty(e.prototype, "width", {
        get: function () {
          return this._width;
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.build = function () {
        var t = this.points;

        if (t) {
          var e = this.getBuffer("aVertexPosition"),
              r = this.getBuffer("aTextureCoord"),
              i = this.getIndex();

          if (!(t.length < 1)) {
            e.data.length / 4 !== t.length && (e.data = new Float32Array(4 * t.length), r.data = new Float32Array(4 * t.length), i.data = new Uint16Array(6 * (t.length - 1)));
            var n = r.data,
                o = i.data;
            n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 1;

            for (var s = 0, a = t[0], h = this._width * this.textureScale, u = t.length, l = 0; l < u; l++) {
              var c = 4 * l;

              if (this.textureScale > 0) {
                var d = a.x - t[l].x,
                    f = a.y - t[l].y,
                    p = Math.sqrt(d * d + f * f);
                a = t[l], s += p / h;
              } else s = l / (u - 1);

              n[c] = s, n[c + 1] = 0, n[c + 2] = s, n[c + 3] = 1;
            }

            var _ = 0;

            for (l = 0; l < u - 1; l++) c = 2 * l, o[_++] = c, o[_++] = c + 1, o[_++] = c + 2, o[_++] = c + 2, o[_++] = c + 1, o[_++] = c + 3;

            r.update(), i.update(), this.updateVertices();
          }
        }
      }, e.prototype.updateVertices = function () {
        var t = this.points;

        if (!(t.length < 1)) {
          for (var e, r = t[0], i = 0, n = 0, o = this.buffers[0].data, s = t.length, a = 0; a < s; a++) {
            var h = t[a],
                u = 4 * a;
            n = -((e = a < t.length - 1 ? t[a + 1] : h).x - r.x), i = e.y - r.y;
            var l = Math.sqrt(i * i + n * n),
                c = this.textureScale > 0 ? this.textureScale * this._width / 2 : this._width / 2;
            i /= l, n /= l, i *= c, n *= c, o[u] = h.x + i, o[u + 1] = h.y + n, o[u + 2] = h.x - i, o[u + 3] = h.y - n, r = h;
          }

          this.buffers[0].update();
        }
      }, e.prototype.update = function () {
        this.textureScale > 0 ? this.build() : this.updateVertices();
      }, e;
    }(ks),
        oh = (function (t) {
      function e(e, r, i) {
        void 0 === i && (i = 0);
        var n = this,
            o = new nh(e.height, r, i),
            s = new Xs(e);
        return i > 0 && (e.baseTexture.wrapMode = ct.REPEAT), (n = t.call(this, o, s) || this).autoUpdate = !0, n;
      }

      rh(e, t), e.prototype._render = function (e) {
        var r = this.geometry;
        (this.autoUpdate || r._width !== this.shader.texture.height) && (r._width = this.shader.texture.height, r.update()), t.prototype._render.call(this, e);
      };
    }(Bs), function (t) {
      function e(e, r, i) {
        var n = this,
            o = new ih(e.width, e.height, r, i),
            s = new Xs(Dr.WHITE);
        return (n = t.call(this, o, s) || this).texture = e, n.autoResize = !0, n;
      }

      return rh(e, t), e.prototype.textureUpdated = function () {
        this._textureID = this.shader.texture._updateID;
        var t = this.geometry,
            e = this.shader.texture,
            r = e.width,
            i = e.height;
        !this.autoResize || t.width === r && t.height === i || (t.width = this.shader.texture.width, t.height = this.shader.texture.height, t.build());
      }, Object.defineProperty(e.prototype, "texture", {
        get: function () {
          return this.shader.texture;
        },
        set: function (t) {
          this.shader.texture !== t && (this.shader.texture = t, this._textureID = -1, t.baseTexture.valid ? this.textureUpdated() : t.once("update", this.textureUpdated, this));
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype._render = function (e) {
        this._textureID !== this.shader.texture._updateID && this.textureUpdated(), t.prototype._render.call(this, e);
      }, e.prototype.destroy = function (e) {
        this.shader.texture.off("update", this.textureUpdated, this), t.prototype.destroy.call(this, e);
      }, e;
    }(Bs)),
        sh = (function (t) {
      function e(e, r, i, n, o) {
        void 0 === e && (e = Dr.EMPTY);
        var s = this,
            a = new ks(r, i, n);
        a.getBuffer("aVertexPosition").static = !1;
        var h = new Xs(e);
        return (s = t.call(this, a, h, null, o) || this).autoUpdate = !0, s;
      }

      rh(e, t), Object.defineProperty(e.prototype, "vertices", {
        get: function () {
          return this.geometry.getBuffer("aVertexPosition").data;
        },
        set: function (t) {
          this.geometry.getBuffer("aVertexPosition").data = t;
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype._render = function (e) {
        this.autoUpdate && this.geometry.getBuffer("aVertexPosition").update(), t.prototype._render.call(this, e);
      };
    }(Bs), function (t) {
      function e(e, r, i, n, o) {
        void 0 === r && (r = 10), void 0 === i && (i = 10), void 0 === n && (n = 10), void 0 === o && (o = 10);
        var s = t.call(this, Dr.WHITE, 4, 4) || this;
        return s._origWidth = e.orig.width, s._origHeight = e.orig.height, s._width = s._origWidth, s._height = s._origHeight, s._leftWidth = r, s._rightWidth = n, s._topHeight = i, s._bottomHeight = o, s.texture = e, s;
      }

      rh(e, t), e.prototype.textureUpdated = function () {
        this._textureID = this.shader.texture._updateID, this._refresh();
      }, Object.defineProperty(e.prototype, "vertices", {
        get: function () {
          return this.geometry.getBuffer("aVertexPosition").data;
        },
        set: function (t) {
          this.geometry.getBuffer("aVertexPosition").data = t;
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype.updateHorizontalVertices = function () {
        var t = this.vertices,
            e = this._getMinScale();

        t[9] = t[11] = t[13] = t[15] = this._topHeight * e, t[17] = t[19] = t[21] = t[23] = this._height - this._bottomHeight * e, t[25] = t[27] = t[29] = t[31] = this._height;
      }, e.prototype.updateVerticalVertices = function () {
        var t = this.vertices,
            e = this._getMinScale();

        t[2] = t[10] = t[18] = t[26] = this._leftWidth * e, t[4] = t[12] = t[20] = t[28] = this._width - this._rightWidth * e, t[6] = t[14] = t[22] = t[30] = this._width;
      }, e.prototype._getMinScale = function () {
        var t = this._leftWidth + this._rightWidth,
            e = this._width > t ? 1 : this._width / t,
            r = this._topHeight + this._bottomHeight,
            i = this._height > r ? 1 : this._height / r;
        return Math.min(e, i);
      }, Object.defineProperty(e.prototype, "width", {
        get: function () {
          return this._width;
        },
        set: function (t) {
          this._width = t, this._refresh();
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "height", {
        get: function () {
          return this._height;
        },
        set: function (t) {
          this._height = t, this._refresh();
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "leftWidth", {
        get: function () {
          return this._leftWidth;
        },
        set: function (t) {
          this._leftWidth = t, this._refresh();
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "rightWidth", {
        get: function () {
          return this._rightWidth;
        },
        set: function (t) {
          this._rightWidth = t, this._refresh();
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "topHeight", {
        get: function () {
          return this._topHeight;
        },
        set: function (t) {
          this._topHeight = t, this._refresh();
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "bottomHeight", {
        get: function () {
          return this._bottomHeight;
        },
        set: function (t) {
          this._bottomHeight = t, this._refresh();
        },
        enumerable: !1,
        configurable: !0
      }), e.prototype._refresh = function () {
        var t = this.texture,
            e = this.geometry.buffers[1].data;
        this._origWidth = t.orig.width, this._origHeight = t.orig.height;
        var r = 1 / this._origWidth,
            i = 1 / this._origHeight;
        e[0] = e[8] = e[16] = e[24] = 0, e[1] = e[3] = e[5] = e[7] = 0, e[6] = e[14] = e[22] = e[30] = 1, e[25] = e[27] = e[29] = e[31] = 1, e[2] = e[10] = e[18] = e[26] = r * this._leftWidth, e[4] = e[12] = e[20] = e[28] = 1 - r * this._rightWidth, e[9] = e[11] = e[13] = e[15] = i * this._topHeight, e[17] = e[19] = e[21] = e[23] = 1 - i * this._bottomHeight, this.updateHorizontalVertices(), this.updateVerticalVertices(), this.geometry.buffers[0].update(), this.geometry.buffers[1].update();
      };
    }(oh), function (t, e) {
      return sh = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      }, sh(t, e);
    });

    !function (t) {
      function e(e, r) {
        void 0 === r && (r = !0);
        var i = t.call(this, e[0] instanceof Dr ? e[0] : e[0].texture) || this;
        return i._textures = null, i._durations = null, i._autoUpdate = r, i._isConnectedToTicker = !1, i.animationSpeed = 1, i.loop = !0, i.updateAnchor = !1, i.onComplete = null, i.onFrameChange = null, i.onLoop = null, i._currentTime = 0, i._playing = !1, i._previousFrame = null, i.textures = e, i;
      }

      (function (t, e) {
        function r() {
          this.constructor = t;
        }

        sh(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
      })(e, t), e.prototype.stop = function () {
        this._playing && (this._playing = !1, this._autoUpdate && this._isConnectedToTicker && (Ze.shared.remove(this.update, this), this._isConnectedToTicker = !1));
      }, e.prototype.play = function () {
        this._playing || (this._playing = !0, this._autoUpdate && !this._isConnectedToTicker && (Ze.shared.add(this.update, this, ze.HIGH), this._isConnectedToTicker = !0));
      }, e.prototype.gotoAndStop = function (t) {
        this.stop();
        var e = this.currentFrame;
        this._currentTime = t, e !== this.currentFrame && this.updateTexture();
      }, e.prototype.gotoAndPlay = function (t) {
        var e = this.currentFrame;
        this._currentTime = t, e !== this.currentFrame && this.updateTexture(), this.play();
      }, e.prototype.update = function (t) {
        if (this._playing) {
          var e = this.animationSpeed * t,
              r = this.currentFrame;

          if (null !== this._durations) {
            var i = this._currentTime % 1 * this._durations[this.currentFrame];

            for (i += e / 60 * 1e3; i < 0;) this._currentTime--, i += this._durations[this.currentFrame];

            var n = Math.sign(this.animationSpeed * t);

            for (this._currentTime = Math.floor(this._currentTime); i >= this._durations[this.currentFrame];) i -= this._durations[this.currentFrame] * n, this._currentTime += n;

            this._currentTime += i / this._durations[this.currentFrame];
          } else this._currentTime += e;

          this._currentTime < 0 && !this.loop ? (this.gotoAndStop(0), this.onComplete && this.onComplete()) : this._currentTime >= this._textures.length && !this.loop ? (this.gotoAndStop(this._textures.length - 1), this.onComplete && this.onComplete()) : r !== this.currentFrame && (this.loop && this.onLoop && (this.animationSpeed > 0 && this.currentFrame < r || this.animationSpeed < 0 && this.currentFrame > r) && this.onLoop(), this.updateTexture());
        }
      }, e.prototype.updateTexture = function () {
        var t = this.currentFrame;
        this._previousFrame !== t && (this._previousFrame = t, this._texture = this._textures[t], this._textureID = -1, this._textureTrimmedID = -1, this._cachedTint = 16777215, this.uvs = this._texture._uvs.uvsFloat32, this.updateAnchor && this._anchor.copyFrom(this._texture.defaultAnchor), this.onFrameChange && this.onFrameChange(this.currentFrame));
      }, e.prototype.destroy = function (e) {
        this.stop(), t.prototype.destroy.call(this, e), this.onComplete = null, this.onFrameChange = null, this.onLoop = null;
      }, e.fromFrames = function (t) {
        for (var r = [], i = 0; i < t.length; ++i) r.push(Dr.from(t[i]));

        return new e(r);
      }, e.fromImages = function (t) {
        for (var r = [], i = 0; i < t.length; ++i) r.push(Dr.from(t[i]));

        return new e(r);
      }, Object.defineProperty(e.prototype, "totalFrames", {
        get: function () {
          return this._textures.length;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "textures", {
        get: function () {
          return this._textures;
        },
        set: function (t) {
          if (t[0] instanceof Dr) this._textures = t, this._durations = null;else {
            this._textures = [], this._durations = [];

            for (var e = 0; e < t.length; e++) this._textures.push(t[e].texture), this._durations.push(t[e].time);
          }
          this._previousFrame = null, this.gotoAndStop(0), this.updateTexture();
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "currentFrame", {
        get: function () {
          var t = Math.floor(this._currentTime) % this._textures.length;

          return t < 0 && (t += this._textures.length), t;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "playing", {
        get: function () {
          return this._playing;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(e.prototype, "autoUpdate", {
        get: function () {
          return this._autoUpdate;
        },
        set: function (t) {
          t !== this._autoUpdate && (this._autoUpdate = t, !this._autoUpdate && this._isConnectedToTicker ? (Ze.shared.remove(this.update, this), this._isConnectedToTicker = !1) : this._autoUpdate && !this._isConnectedToTicker && this._playing && (Ze.shared.add(this.update, this), this._isConnectedToTicker = !0));
        },
        enumerable: !1,
        configurable: !0
      });
    }(rs), an.registerPlugin("accessibility", qe), an.registerPlugin("extract", Sn), an.registerPlugin("interaction", or), an.registerPlugin("particle", bo), an.registerPlugin("prepare", As), an.registerPlugin("batch", gn), an.registerPlugin("tilingSprite", ws), jn.registerPlugin(ra), jn.registerPlugin(eo), jn.registerPlugin(lo), jn.registerPlugin(vo), jn.registerPlugin(Ss), Rn.registerPlugin(Je), Rn.registerPlugin(Wn);

    var ah = r(379),
        hh = r.n(ah),
        uh = r(795),
        lh = r.n(uh),
        ch = r(569),
        dh = r.n(ch),
        fh = r(565),
        ph = r.n(fh),
        _h = r(216),
        vh = r.n(_h),
        mh = r(589),
        gh = r.n(mh),
        yh = r(924),
        Eh = {};

    Eh.styleTagTransform = gh(), Eh.setAttributes = ph(), Eh.insert = dh().bind(null, "head"), Eh.domAPI = lh(), Eh.insertStyleElement = vh(), hh()(yh.Z, Eh), yh.Z && yh.Z.locals && yh.Z.locals;
    var Th = r(556),
        bh = {};
    bh.styleTagTransform = gh(), bh.setAttributes = ph(), bh.insert = dh().bind(null, "head"), bh.domAPI = lh(), bh.insertStyleElement = vh(), hh()(Th.Z, bh), Th.Z && Th.Z.locals && Th.Z.locals, window.innerWidth, window.innerHeight;
    const xh = new Rn({
      resizeTo: window,
      resolution: window.devicePixelRatio || 1
    });
    document.body.appendChild(xh.view);
    const Rh = new We();
    xh.stage.addChild(Rh), xh.loader.add("bathmatt", "media/nicebathmatt.png").load((t, e) => {
      const r = new rs(e.bathmatt.texture);
      r.x = xh.renderer.width / 2, r.y = xh.renderer.height / 2, r.anchor.x = .5, r.anchor.y = .5, Rh.addChild(r), xh.ticker.add(t => {
        r.rotation -= .008 * t;
      });
    });
    const Ah = new We();
    xh.stage.addChild(Ah), Ah.visible = !1;
    const Oh = Dr.from("media/spidey.png");

    for (let t = 0; t < 25; t++) {
      const e = new rs(Oh);
      e.anchor.set(.5), e.x = t % 5 * 40, e.y = 40 * Math.floor(t / 5), Ah.addChild(e);
    }

    let Sh, Ih;
    Ah.x = xh.screen.width / 2, Ah.y = xh.screen.height / 2, Ah.pivot.x = Ah.width / 2, Ah.pivot.y = Ah.height / 2, xh.ticker.add(t => {
      Ah.rotation -= .01 * t;
    });
    let Ph,
        Nh = !1,
        Mh = !0;
    onpointermove = function (t) {
      Sh = t.clientX, Ih = t.clientY, !0 === Nh && !1 === Mh && Sh !== Ph && (Rh.visible = !Rh.visible, Ah.visible = !Ah.visible, Mh = !0), void 0 !== Sh && (Ph = Sh);
    }, onpointerdown = function (t) {
      Nh = !0, Mh = !1;
    }, onpointerup = function (t) {
      Nh = !1, Mh = !0;
    };
  })();
})();