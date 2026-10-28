var uf = Object.defineProperty;
var ff = (e, t, n) => t in e ? uf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Xe = (e, t, n) => ff(e, typeof t != "symbol" ? t + "" : t, n);
/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Io(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Ze = {}, bs = [], ln = () => {
}, hf = () => !1, li = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Lo = (e) => e.startsWith("onUpdate:"), Et = Object.assign, Oo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, df = Object.prototype.hasOwnProperty, ze = (e, t) => df.call(e, t), ye = Array.isArray, ws = (e) => ci(e) === "[object Map]", ql = (e) => ci(e) === "[object Set]", ke = (e) => typeof e == "function", dt = (e) => typeof e == "string", Hn = (e) => typeof e == "symbol", rt = (e) => e !== null && typeof e == "object", jl = (e) => (rt(e) || ke(e)) && ke(e.then) && ke(e.catch), Vl = Object.prototype.toString, ci = (e) => Vl.call(e), pf = (e) => ci(e).slice(8, -1), Kl = (e) => ci(e) === "[object Object]", No = (e) => dt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, tr = /* @__PURE__ */ Io(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ui = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, gf = /-(\w)/g, Bn = ui(
  (e) => e.replace(gf, (t, n) => n ? n.toUpperCase() : "")
), mf = /\B([A-Z])/g, zn = ui(
  (e) => e.replace(mf, "-$1").toLowerCase()
), Gl = ui((e) => e.charAt(0).toUpperCase() + e.slice(1)), Pi = ui(
  (e) => e ? `on${Gl(e)}` : ""
), Pn = (e, t) => !Object.is(e, t), Nr = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, ro = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, io = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Fa;
const fi = () => Fa || (Fa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ee(e) {
  if (ye(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = dt(s) ? bf(s) : Ee(s);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (dt(e) || rt(e))
    return e;
}
const _f = /;(?![^(]*\))/g, yf = /:([^]+)/, vf = /\/\*[^]*?\*\//g;
function bf(e) {
  const t = {};
  return e.replace(vf, "").split(_f).forEach((n) => {
    if (n) {
      const s = n.split(yf);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Fe(e) {
  let t = "";
  if (dt(e))
    t = e;
  else if (ye(e))
    for (let n = 0; n < e.length; n++) {
      const s = Fe(e[n]);
      s && (t += s + " ");
    }
  else if (rt(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const wf = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", kf = /* @__PURE__ */ Io(wf);
function Yl(e) {
  return !!e || e === "";
}
const Xl = (e) => !!(e && e.__v_isRef === !0), Q = (e) => dt(e) ? e : e == null ? "" : ye(e) || rt(e) && (e.toString === Vl || !ke(e.toString)) ? Xl(e) ? Q(e.value) : JSON.stringify(e, Zl, 2) : String(e), Zl = (e, t) => Xl(t) ? Zl(e, t.value) : ws(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], i) => (n[Fi(s, i) + " =>"] = r, n),
    {}
  )
} : ql(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Fi(n))
} : Hn(t) ? Fi(t) : rt(t) && !ye(t) && !Kl(t) ? String(t) : t, Fi = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Hn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ut;
class xf {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Ut, !t && Ut && (this.index = (Ut.scopes || (Ut.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Ut;
      try {
        return Ut = this, t();
      } finally {
        Ut = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ut, Ut = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Ut = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Tf() {
  return Ut;
}
let Je;
const Di = /* @__PURE__ */ new WeakSet();
class Jl {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ut && Ut.active && Ut.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Di.has(this) && (Di.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ec(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Da(this), tc(this);
    const t = Je, n = tn;
    Je = this, tn = !0;
    try {
      return this.fn();
    } finally {
      nc(this), Je = t, tn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Fo(t);
      this.deps = this.depsTail = void 0, Da(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Di.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    oo(this) && this.run();
  }
  get dirty() {
    return oo(this);
  }
}
let Ql = 0, nr, sr;
function ec(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = sr, sr = e;
    return;
  }
  e.next = nr, nr = e;
}
function Mo() {
  Ql++;
}
function Po() {
  if (--Ql > 0)
    return;
  if (sr) {
    let t = sr;
    for (sr = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; nr; ) {
    let t = nr;
    for (nr = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function tc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function nc(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), Fo(s), Af(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function oo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (sc(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function sc(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ur) || (e.globalVersion = ur, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !oo(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Je, s = tn;
  Je = e, tn = !0;
  try {
    tc(e);
    const r = e.fn(e._value);
    (t.version === 0 || Pn(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    Je = n, tn = s, nc(e), e.flags &= -3;
  }
}
function Fo(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Fo(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Af(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let tn = !0;
const rc = [];
function kn() {
  rc.push(tn), tn = !1;
}
function xn() {
  const e = rc.pop();
  tn = e === void 0 ? !0 : e;
}
function Da(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Je;
    Je = void 0;
    try {
      t();
    } finally {
      Je = n;
    }
  }
}
let ur = 0;
class Ef {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Do {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Je || !tn || Je === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Je)
      n = this.activeLink = new Ef(Je, this), Je.deps ? (n.prevDep = Je.depsTail, Je.depsTail.nextDep = n, Je.depsTail = n) : Je.deps = Je.depsTail = n, ic(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = Je.depsTail, n.nextDep = void 0, Je.depsTail.nextDep = n, Je.depsTail = n, Je.deps === n && (Je.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, ur++, this.notify(t);
  }
  notify(t) {
    Mo();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Po();
    }
  }
}
function ic(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        ic(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const ao = /* @__PURE__ */ new WeakMap(), ss = Symbol(
  ""
), lo = Symbol(
  ""
), fr = Symbol(
  ""
);
function Tt(e, t, n) {
  if (tn && Je) {
    let s = ao.get(e);
    s || ao.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new Do()), r.map = s, r.key = n), r.track();
  }
}
function yn(e, t, n, s, r, i) {
  const o = ao.get(e);
  if (!o) {
    ur++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if (Mo(), t === "clear")
    o.forEach(a);
  else {
    const l = ye(e), d = l && No(n);
    if (l && n === "length") {
      const c = Number(s);
      o.forEach((b, w) => {
        (w === "length" || w === fr || !Hn(w) && w >= c) && a(b);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && a(o.get(n)), d && a(o.get(fr)), t) {
        case "add":
          l ? d && a(o.get("length")) : (a(o.get(ss)), ws(e) && a(o.get(lo)));
          break;
        case "delete":
          l || (a(o.get(ss)), ws(e) && a(o.get(lo)));
          break;
        case "set":
          ws(e) && a(o.get(ss));
          break;
      }
  }
  Po();
}
function _s(e) {
  const t = He(e);
  return t === e ? t : (Tt(t, "iterate", fr), Yt(e) ? t : t.map(kt));
}
function hi(e) {
  return Tt(e = He(e), "iterate", fr), e;
}
const Sf = {
  __proto__: null,
  [Symbol.iterator]() {
    return Bi(this, Symbol.iterator, kt);
  },
  concat(...e) {
    return _s(this).concat(
      ...e.map((t) => ye(t) ? _s(t) : t)
    );
  },
  entries() {
    return Bi(this, "entries", (e) => (e[1] = kt(e[1]), e));
  },
  every(e, t) {
    return pn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return pn(this, "filter", e, t, (n) => n.map(kt), arguments);
  },
  find(e, t) {
    return pn(this, "find", e, t, kt, arguments);
  },
  findIndex(e, t) {
    return pn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return pn(this, "findLast", e, t, kt, arguments);
  },
  findLastIndex(e, t) {
    return pn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return pn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return $i(this, "includes", e);
  },
  indexOf(...e) {
    return $i(this, "indexOf", e);
  },
  join(e) {
    return _s(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return $i(this, "lastIndexOf", e);
  },
  map(e, t) {
    return pn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Us(this, "pop");
  },
  push(...e) {
    return Us(this, "push", e);
  },
  reduce(e, ...t) {
    return Ba(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ba(this, "reduceRight", e, t);
  },
  shift() {
    return Us(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return pn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Us(this, "splice", e);
  },
  toReversed() {
    return _s(this).toReversed();
  },
  toSorted(e) {
    return _s(this).toSorted(e);
  },
  toSpliced(...e) {
    return _s(this).toSpliced(...e);
  },
  unshift(...e) {
    return Us(this, "unshift", e);
  },
  values() {
    return Bi(this, "values", kt);
  }
};
function Bi(e, t, n) {
  const s = hi(e), r = s[t]();
  return s !== e && !Yt(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.value && (i.value = n(i.value)), i;
  }), r;
}
const Cf = Array.prototype;
function pn(e, t, n, s, r, i) {
  const o = hi(e), a = o !== e && !Yt(e), l = o[t];
  if (l !== Cf[t]) {
    const b = l.apply(e, i);
    return a ? kt(b) : b;
  }
  let d = n;
  o !== e && (a ? d = function(b, w) {
    return n.call(this, kt(b), w, e);
  } : n.length > 2 && (d = function(b, w) {
    return n.call(this, b, w, e);
  }));
  const c = l.call(o, d, s);
  return a && r ? r(c) : c;
}
function Ba(e, t, n, s) {
  const r = hi(e);
  let i = n;
  return r !== e && (Yt(e) ? n.length > 3 && (i = function(o, a, l) {
    return n.call(this, o, a, l, e);
  }) : i = function(o, a, l) {
    return n.call(this, o, kt(a), l, e);
  }), r[t](i, ...s);
}
function $i(e, t, n) {
  const s = He(e);
  Tt(s, "iterate", fr);
  const r = s[t](...n);
  return (r === -1 || r === !1) && Uo(n[0]) ? (n[0] = He(n[0]), s[t](...n)) : r;
}
function Us(e, t, n = []) {
  kn(), Mo();
  const s = He(e)[t].apply(e, n);
  return Po(), xn(), s;
}
const Rf = /* @__PURE__ */ Io("__proto__,__v_isRef,__isVue"), oc = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Hn)
);
function If(e) {
  Hn(e) || (e = String(e));
  const t = He(this);
  return Tt(t, "has", e), t.hasOwnProperty(e);
}
class ac {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return s === (r ? i ? Uf : fc : i ? uc : cc).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = ye(t);
    if (!r) {
      let l;
      if (o && (l = Sf[n]))
        return l;
      if (n === "hasOwnProperty")
        return If;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      At(t) ? t : s
    );
    return (Hn(n) ? oc.has(n) : Rf(n)) || (r || Tt(t, "get", n), i) ? a : At(a) ? o && No(n) ? a : a.value : rt(a) ? r ? hc(a) : di(a) : a;
  }
}
class lc extends ac {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    if (!this._isShallow) {
      const l = $n(i);
      if (!Yt(s) && !$n(s) && (i = He(i), s = He(s)), !ye(t) && At(i) && !At(s))
        return l ? !1 : (i.value = s, !0);
    }
    const o = ye(t) && No(n) ? Number(n) < t.length : ze(t, n), a = Reflect.set(
      t,
      n,
      s,
      At(t) ? t : r
    );
    return t === He(r) && (o ? Pn(s, i) && yn(t, "set", n, s) : yn(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = ze(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && yn(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Hn(n) || !oc.has(n)) && Tt(t, "has", n), s;
  }
  ownKeys(t) {
    return Tt(
      t,
      "iterate",
      ye(t) ? "length" : ss
    ), Reflect.ownKeys(t);
  }
}
class Lf extends ac {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Of = /* @__PURE__ */ new lc(), Nf = /* @__PURE__ */ new Lf(), Mf = /* @__PURE__ */ new lc(!0);
const co = (e) => e, Ar = (e) => Reflect.getPrototypeOf(e);
function Pf(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, i = He(r), o = ws(i), a = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, d = r[e](...s), c = n ? co : t ? Gr : kt;
    return !t && Tt(
      i,
      "iterate",
      l ? lo : ss
    ), {
      // iterator protocol
      next() {
        const { value: b, done: w } = d.next();
        return w ? { value: b, done: w } : {
          value: a ? [c(b[0]), c(b[1])] : c(b),
          done: w
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Er(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ff(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw, o = He(i), a = He(r);
      e || (Pn(r, a) && Tt(o, "get", r), Tt(o, "get", a));
      const { has: l } = Ar(o), d = t ? co : e ? Gr : kt;
      if (l.call(o, r))
        return d(i.get(r));
      if (l.call(o, a))
        return d(i.get(a));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && Tt(He(r), "iterate", ss), Reflect.get(r, "size", r);
    },
    has(r) {
      const i = this.__v_raw, o = He(i), a = He(r);
      return e || (Pn(r, a) && Tt(o, "has", r), Tt(o, "has", a)), r === a ? i.has(r) : i.has(r) || i.has(a);
    },
    forEach(r, i) {
      const o = this, a = o.__v_raw, l = He(a), d = t ? co : e ? Gr : kt;
      return !e && Tt(l, "iterate", ss), a.forEach((c, b) => r.call(i, d(c), d(b), o));
    }
  };
  return Et(
    n,
    e ? {
      add: Er("add"),
      set: Er("set"),
      delete: Er("delete"),
      clear: Er("clear")
    } : {
      add(r) {
        !t && !Yt(r) && !$n(r) && (r = He(r));
        const i = He(this);
        return Ar(i).has.call(i, r) || (i.add(r), yn(i, "add", r, r)), this;
      },
      set(r, i) {
        !t && !Yt(i) && !$n(i) && (i = He(i));
        const o = He(this), { has: a, get: l } = Ar(o);
        let d = a.call(o, r);
        d || (r = He(r), d = a.call(o, r));
        const c = l.call(o, r);
        return o.set(r, i), d ? Pn(i, c) && yn(o, "set", r, i) : yn(o, "add", r, i), this;
      },
      delete(r) {
        const i = He(this), { has: o, get: a } = Ar(i);
        let l = o.call(i, r);
        l || (r = He(r), l = o.call(i, r)), a && a.call(i, r);
        const d = i.delete(r);
        return l && yn(i, "delete", r, void 0), d;
      },
      clear() {
        const r = He(this), i = r.size !== 0, o = r.clear();
        return i && yn(
          r,
          "clear",
          void 0,
          void 0
        ), o;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    n[r] = Pf(r, e, t);
  }), n;
}
function Bo(e, t) {
  const n = Ff(e, t);
  return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    ze(n, r) && r in s ? n : s,
    r,
    i
  );
}
const Df = {
  get: /* @__PURE__ */ Bo(!1, !1)
}, Bf = {
  get: /* @__PURE__ */ Bo(!1, !0)
}, $f = {
  get: /* @__PURE__ */ Bo(!0, !1)
};
const cc = /* @__PURE__ */ new WeakMap(), uc = /* @__PURE__ */ new WeakMap(), fc = /* @__PURE__ */ new WeakMap(), Uf = /* @__PURE__ */ new WeakMap();
function Hf(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function zf(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Hf(pf(e));
}
function di(e) {
  return $n(e) ? e : $o(
    e,
    !1,
    Of,
    Df,
    cc
  );
}
function Wf(e) {
  return $o(
    e,
    !1,
    Mf,
    Bf,
    uc
  );
}
function hc(e) {
  return $o(
    e,
    !0,
    Nf,
    $f,
    fc
  );
}
function $o(e, t, n, s, r) {
  if (!rt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = zf(e);
  if (i === 0)
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const a = new Proxy(
    e,
    i === 2 ? s : n
  );
  return r.set(e, a), a;
}
function ks(e) {
  return $n(e) ? ks(e.__v_raw) : !!(e && e.__v_isReactive);
}
function $n(e) {
  return !!(e && e.__v_isReadonly);
}
function Yt(e) {
  return !!(e && e.__v_isShallow);
}
function Uo(e) {
  return e ? !!e.__v_raw : !1;
}
function He(e) {
  const t = e && e.__v_raw;
  return t ? He(t) : e;
}
function qf(e) {
  return !ze(e, "__v_skip") && Object.isExtensible(e) && ro(e, "__v_skip", !0), e;
}
const kt = (e) => rt(e) ? di(e) : e, Gr = (e) => rt(e) ? hc(e) : e;
function At(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function le(e) {
  return jf(e, !1);
}
function jf(e, t) {
  return At(e) ? e : new Vf(e, t);
}
class Vf {
  constructor(t, n) {
    this.dep = new Do(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : He(t), this._value = n ? t : kt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || Yt(t) || $n(t);
    t = s ? t : He(t), Pn(t, n) && (this._rawValue = t, this._value = s ? t : kt(t), this.dep.trigger());
  }
}
function S(e) {
  return At(e) ? e.value : e;
}
const Kf = {
  get: (e, t, n) => t === "__v_raw" ? e : S(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return At(r) && !At(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function dc(e) {
  return ks(e) ? e : new Proxy(e, Kf);
}
class Gf {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Do(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ur - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Je !== this)
      return ec(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return sc(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Yf(e, t, n = !1) {
  let s, r;
  return ke(e) ? s = e : (s = e.get, r = e.set), new Gf(s, r, n);
}
const Sr = {}, Yr = /* @__PURE__ */ new WeakMap();
let Qn;
function Xf(e, t = !1, n = Qn) {
  if (n) {
    let s = Yr.get(n);
    s || Yr.set(n, s = []), s.push(e);
  }
}
function Zf(e, t, n = Ze) {
  const { immediate: s, deep: r, once: i, scheduler: o, augmentJob: a, call: l } = n, d = (k) => r ? k : Yt(k) || r === !1 || r === 0 ? vn(k, 1) : vn(k);
  let c, b, w, D, P = !1, z = !1;
  if (At(e) ? (b = () => e.value, P = Yt(e)) : ks(e) ? (b = () => d(e), P = !0) : ye(e) ? (z = !0, P = e.some((k) => ks(k) || Yt(k)), b = () => e.map((k) => {
    if (At(k))
      return k.value;
    if (ks(k))
      return d(k);
    if (ke(k))
      return l ? l(k, 2) : k();
  })) : ke(e) ? t ? b = l ? () => l(e, 2) : e : b = () => {
    if (w) {
      kn();
      try {
        w();
      } finally {
        xn();
      }
    }
    const k = Qn;
    Qn = c;
    try {
      return l ? l(e, 3, [D]) : e(D);
    } finally {
      Qn = k;
    }
  } : b = ln, t && r) {
    const k = b, R = r === !0 ? 1 / 0 : r;
    b = () => vn(k(), R);
  }
  const L = Tf(), se = () => {
    c.stop(), L && L.active && Oo(L.effects, c);
  };
  if (i && t) {
    const k = t;
    t = (...R) => {
      k(...R), se();
    };
  }
  let he = z ? new Array(e.length).fill(Sr) : Sr;
  const ce = (k) => {
    if (!(!(c.flags & 1) || !c.dirty && !k))
      if (t) {
        const R = c.run();
        if (r || P || (z ? R.some((K, G) => Pn(K, he[G])) : Pn(R, he))) {
          w && w();
          const K = Qn;
          Qn = c;
          try {
            const G = [
              R,
              // pass undefined as the old value when it's changed for the first time
              he === Sr ? void 0 : z && he[0] === Sr ? [] : he,
              D
            ];
            he = R, l ? l(t, 3, G) : (
              // @ts-expect-error
              t(...G)
            );
          } finally {
            Qn = K;
          }
        }
      } else
        c.run();
  };
  return a && a(ce), c = new Jl(b), c.scheduler = o ? () => o(ce, !1) : ce, D = (k) => Xf(k, !1, c), w = c.onStop = () => {
    const k = Yr.get(c);
    if (k) {
      if (l)
        l(k, 4);
      else
        for (const R of k) R();
      Yr.delete(c);
    }
  }, t ? s ? ce(!0) : he = c.run() : o ? o(ce.bind(null, !0), !0) : c.run(), se.pause = c.pause.bind(c), se.resume = c.resume.bind(c), se.stop = se, se;
}
function vn(e, t = 1 / 0, n) {
  if (t <= 0 || !rt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, At(e))
    vn(e.value, t, n);
  else if (ye(e))
    for (let s = 0; s < e.length; s++)
      vn(e[s], t, n);
  else if (ql(e) || ws(e))
    e.forEach((s) => {
      vn(s, t, n);
    });
  else if (Kl(e)) {
    for (const s in e)
      vn(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && vn(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function gr(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    pi(r, t, n);
  }
}
function fn(e, t, n, s) {
  if (ke(e)) {
    const r = gr(e, t, n, s);
    return r && jl(r) && r.catch((i) => {
      pi(i, t, n);
    }), r;
  }
  if (ye(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(fn(e[i], t, n, s));
    return r;
  }
}
function pi(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || Ze;
  if (t) {
    let a = t.parent;
    const l = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const c = a.ec;
      if (c) {
        for (let b = 0; b < c.length; b++)
          if (c[b](e, l, d) === !1)
            return;
      }
      a = a.parent;
    }
    if (i) {
      kn(), gr(i, null, 10, [
        e,
        l,
        d
      ]), xn();
      return;
    }
  }
  Jf(e, n, r, s, o);
}
function Jf(e, t, n, s = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const Ot = [];
let on = -1;
const xs = [];
let Nn = null, ys = 0;
const pc = /* @__PURE__ */ Promise.resolve();
let Xr = null;
function rs(e) {
  const t = Xr || pc;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Qf(e) {
  let t = on + 1, n = Ot.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = Ot[s], i = hr(r);
    i < e || i === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Ho(e) {
  if (!(e.flags & 1)) {
    const t = hr(e), n = Ot[Ot.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= hr(n) ? Ot.push(e) : Ot.splice(Qf(t), 0, e), e.flags |= 1, gc();
  }
}
function gc() {
  Xr || (Xr = pc.then(_c));
}
function eh(e) {
  ye(e) ? xs.push(...e) : Nn && e.id === -1 ? Nn.splice(ys + 1, 0, e) : e.flags & 1 || (xs.push(e), e.flags |= 1), gc();
}
function $a(e, t, n = on + 1) {
  for (; n < Ot.length; n++) {
    const s = Ot[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      Ot.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function mc(e) {
  if (xs.length) {
    const t = [...new Set(xs)].sort(
      (n, s) => hr(n) - hr(s)
    );
    if (xs.length = 0, Nn) {
      Nn.push(...t);
      return;
    }
    for (Nn = t, ys = 0; ys < Nn.length; ys++) {
      const n = Nn[ys];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Nn = null, ys = 0;
  }
}
const hr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function _c(e) {
  try {
    for (on = 0; on < Ot.length; on++) {
      const t = Ot[on];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), gr(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; on < Ot.length; on++) {
      const t = Ot[on];
      t && (t.flags &= -2);
    }
    on = -1, Ot.length = 0, mc(), Xr = null, (Ot.length || xs.length) && _c();
  }
}
let Gt = null, yc = null;
function Zr(e) {
  const t = Gt;
  return Gt = e, yc = e && e.type.__scopeId || null, t;
}
function th(e, t = Gt, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && Ga(-1);
    const i = Zr(t);
    let o;
    try {
      o = e(...r);
    } finally {
      Zr(i), s._d && Ga(1);
    }
    return o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function On(e, t) {
  if (Gt === null)
    return e;
  const n = vi(Gt), s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, o, a, l = Ze] = t[r];
    i && (ke(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && vn(o), s.push({
      dir: i,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: a,
      modifiers: l
    }));
  }
  return e;
}
function Yn(e, t, n, s) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const a = r[o];
    i && (a.oldValue = i[o].value);
    let l = a.dir[s];
    l && (kn(), fn(l, n, 8, [
      e.el,
      a,
      e,
      t
    ]), xn());
  }
}
const nh = Symbol("_vte"), sh = (e) => e.__isTeleport;
function zo(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, zo(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Wo(e, t) {
  return ke(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Et({ name: e.name }, t, { setup: e })
  ) : e;
}
function vc(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function rr(e, t, n, s, r = !1) {
  if (ye(e)) {
    e.forEach(
      (P, z) => rr(
        P,
        t && (ye(t) ? t[z] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (ir(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && rr(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? vi(s.component) : s.el, o = r ? null : i, { i: a, r: l } = e, d = t && t.r, c = a.refs === Ze ? a.refs = {} : a.refs, b = a.setupState, w = He(b), D = b === Ze ? () => !1 : (P) => ze(w, P);
  if (d != null && d !== l && (dt(d) ? (c[d] = null, D(d) && (b[d] = null)) : At(d) && (d.value = null)), ke(l))
    gr(l, a, 12, [o, c]);
  else {
    const P = dt(l), z = At(l);
    if (P || z) {
      const L = () => {
        if (e.f) {
          const se = P ? D(l) ? b[l] : c[l] : l.value;
          r ? ye(se) && Oo(se, i) : ye(se) ? se.includes(i) || se.push(i) : P ? (c[l] = [i], D(l) && (b[l] = c[l])) : (l.value = [i], e.k && (c[e.k] = l.value));
        } else P ? (c[l] = o, D(l) && (b[l] = o)) : z && (l.value = o, e.k && (c[e.k] = o));
      };
      o ? (L.id = -1, zt(L, n)) : L();
    }
  }
}
fi().requestIdleCallback;
fi().cancelIdleCallback;
const ir = (e) => !!e.type.__asyncLoader, bc = (e) => e.type.__isKeepAlive;
function rh(e, t) {
  wc(e, "a", t);
}
function ih(e, t) {
  wc(e, "da", t);
}
function wc(e, t, n = Nt) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (gi(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      bc(r.parent.vnode) && oh(s, t, n, r), r = r.parent;
  }
}
function oh(e, t, n, s) {
  const r = gi(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  mr(() => {
    Oo(s[t], r);
  }, n);
}
function gi(e, t, n = Nt, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      kn();
      const a = _r(n), l = fn(t, n, e, o);
      return a(), xn(), l;
    });
    return s ? r.unshift(i) : r.push(i), i;
  }
}
const Tn = (e) => (t, n = Nt) => {
  (!pr || e === "sp") && gi(e, (...s) => t(...s), n);
}, ah = Tn("bm"), mi = Tn("m"), lh = Tn(
  "bu"
), ch = Tn("u"), kc = Tn(
  "bum"
), mr = Tn("um"), uh = Tn(
  "sp"
), fh = Tn("rtg"), hh = Tn("rtc");
function dh(e, t = Nt) {
  gi("ec", e, t);
}
const ph = Symbol.for("v-ndc");
function wt(e, t, n, s) {
  let r;
  const i = n, o = ye(e);
  if (o || dt(e)) {
    const a = o && ks(e);
    let l = !1, d = !1;
    a && (l = !Yt(e), d = $n(e), e = hi(e)), r = new Array(e.length);
    for (let c = 0, b = e.length; c < b; c++)
      r[c] = t(
        l ? d ? Gr(kt(e[c])) : kt(e[c]) : e[c],
        c,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let a = 0; a < e; a++)
      r[a] = t(a + 1, a, void 0, i);
  } else if (rt(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (a, l) => t(a, l, void 0, i)
      );
    else {
      const a = Object.keys(e);
      r = new Array(a.length);
      for (let l = 0, d = a.length; l < d; l++) {
        const c = a[l];
        r[l] = t(e[c], c, l, i);
      }
    }
  else
    r = [];
  return r;
}
const uo = (e) => e ? Wc(e) ? vi(e) : uo(e.parent) : null, or = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Et(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => uo(e.parent),
    $root: (e) => uo(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Tc(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ho(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = rs.bind(e.proxy)),
    $watch: (e) => Fh.bind(e)
  })
), Ui = (e, t) => e !== Ze && !e.__isScriptSetup && ze(e, t), gh = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: r, props: i, accessCache: o, type: a, appContext: l } = e;
    let d;
    if (t[0] !== "$") {
      const D = o[t];
      if (D !== void 0)
        switch (D) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (Ui(s, t))
          return o[t] = 1, s[t];
        if (r !== Ze && ze(r, t))
          return o[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && ze(d, t)
        )
          return o[t] = 3, i[t];
        if (n !== Ze && ze(n, t))
          return o[t] = 4, n[t];
        fo && (o[t] = 0);
      }
    }
    const c = or[t];
    let b, w;
    if (c)
      return t === "$attrs" && Tt(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (b = a.__cssModules) && (b = b[t])
    )
      return b;
    if (n !== Ze && ze(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      w = l.config.globalProperties, ze(w, t)
    )
      return w[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: i } = e;
    return Ui(r, t) ? (r[t] = n, !0) : s !== Ze && ze(s, t) ? (s[t] = n, !0) : ze(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: i }
  }, o) {
    let a;
    return !!n[o] || e !== Ze && ze(e, o) || Ui(t, o) || (a = i[0]) && ze(a, o) || ze(s, o) || ze(or, o) || ze(r.config.globalProperties, o);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ze(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Ua(e) {
  return ye(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let fo = !0;
function mh(e) {
  const t = Tc(e), n = e.proxy, s = e.ctx;
  fo = !1, t.beforeCreate && Ha(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: o,
    watch: a,
    provide: l,
    inject: d,
    // lifecycle
    created: c,
    beforeMount: b,
    mounted: w,
    beforeUpdate: D,
    updated: P,
    activated: z,
    deactivated: L,
    beforeDestroy: se,
    beforeUnmount: he,
    destroyed: ce,
    unmounted: k,
    render: R,
    renderTracked: K,
    renderTriggered: G,
    errorCaptured: Se,
    serverPrefetch: Ne,
    // public API
    expose: Me,
    inheritAttrs: xe,
    // assets
    components: ve,
    directives: $e,
    filters: qe
  } = t;
  if (d && _h(d, s, null), o)
    for (const _e in o) {
      const ue = o[_e];
      ke(ue) && (s[_e] = ue.bind(n));
    }
  if (r) {
    const _e = r.call(n, n);
    rt(_e) && (e.data = di(_e));
  }
  if (fo = !0, i)
    for (const _e in i) {
      const ue = i[_e], st = ke(ue) ? ue.bind(n, n) : ke(ue.get) ? ue.get.bind(n, n) : ln, et = !ke(ue) && ke(ue.set) ? ue.set.bind(n) : ln, Te = fe({
        get: st,
        set: et
      });
      Object.defineProperty(s, _e, {
        enumerable: !0,
        configurable: !0,
        get: () => Te.value,
        set: (we) => Te.value = we
      });
    }
  if (a)
    for (const _e in a)
      xc(a[_e], s, n, _e);
  if (l) {
    const _e = ke(l) ? l.call(n) : l;
    Reflect.ownKeys(_e).forEach((ue) => {
      xh(ue, _e[ue]);
    });
  }
  c && Ha(c, e, "c");
  function de(_e, ue) {
    ye(ue) ? ue.forEach((st) => _e(st.bind(n))) : ue && _e(ue.bind(n));
  }
  if (de(ah, b), de(mi, w), de(lh, D), de(ch, P), de(rh, z), de(ih, L), de(dh, Se), de(hh, K), de(fh, G), de(kc, he), de(mr, k), de(uh, Ne), ye(Me))
    if (Me.length) {
      const _e = e.exposed || (e.exposed = {});
      Me.forEach((ue) => {
        Object.defineProperty(_e, ue, {
          get: () => n[ue],
          set: (st) => n[ue] = st,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  R && e.render === ln && (e.render = R), xe != null && (e.inheritAttrs = xe), ve && (e.components = ve), $e && (e.directives = $e), Ne && vc(e);
}
function _h(e, t, n = ln) {
  ye(e) && (e = ho(e));
  for (const s in e) {
    const r = e[s];
    let i;
    rt(r) ? "default" in r ? i = Mr(
      r.from || s,
      r.default,
      !0
    ) : i = Mr(r.from || s) : i = Mr(r), At(i) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[s] = i;
  }
}
function Ha(e, t, n) {
  fn(
    ye(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function xc(e, t, n, s) {
  let r = s.includes(".") ? Dc(n, s) : () => n[s];
  if (dt(e)) {
    const i = t[e];
    ke(i) && Lt(r, i);
  } else if (ke(e))
    Lt(r, e.bind(n));
  else if (rt(e))
    if (ye(e))
      e.forEach((i) => xc(i, t, n, s));
    else {
      const i = ke(e.handler) ? e.handler.bind(n) : t[e.handler];
      ke(i) && Lt(r, i, e);
    }
}
function Tc(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, a = i.get(t);
  let l;
  return a ? l = a : !r.length && !n && !s ? l = t : (l = {}, r.length && r.forEach(
    (d) => Jr(l, d, o, !0)
  ), Jr(l, t, o)), rt(t) && i.set(t, l), l;
}
function Jr(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t;
  i && Jr(e, i, n, !0), r && r.forEach(
    (o) => Jr(e, o, n, !0)
  );
  for (const o in t)
    if (!(s && o === "expose")) {
      const a = yh[o] || n && n[o];
      e[o] = a ? a(e[o], t[o]) : t[o];
    }
  return e;
}
const yh = {
  data: za,
  props: Wa,
  emits: Wa,
  // objects
  methods: Js,
  computed: Js,
  // lifecycle
  beforeCreate: Rt,
  created: Rt,
  beforeMount: Rt,
  mounted: Rt,
  beforeUpdate: Rt,
  updated: Rt,
  beforeDestroy: Rt,
  beforeUnmount: Rt,
  destroyed: Rt,
  unmounted: Rt,
  activated: Rt,
  deactivated: Rt,
  errorCaptured: Rt,
  serverPrefetch: Rt,
  // assets
  components: Js,
  directives: Js,
  // watch
  watch: bh,
  // provide / inject
  provide: za,
  inject: vh
};
function za(e, t) {
  return t ? e ? function() {
    return Et(
      ke(e) ? e.call(this, this) : e,
      ke(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function vh(e, t) {
  return Js(ho(e), ho(t));
}
function ho(e) {
  if (ye(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Rt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Js(e, t) {
  return e ? Et(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Wa(e, t) {
  return e ? ye(e) && ye(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Et(
    /* @__PURE__ */ Object.create(null),
    Ua(e),
    Ua(t ?? {})
  ) : t;
}
function bh(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Et(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = Rt(e[s], t[s]);
  return n;
}
function Ac() {
  return {
    app: null,
    config: {
      isNativeTag: hf,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let wh = 0;
function kh(e, t) {
  return function(s, r = null) {
    ke(s) || (s = Et({}, s)), r != null && !rt(r) && (r = null);
    const i = Ac(), o = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const d = i.app = {
      _uid: wh++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: sd,
      get config() {
        return i.config;
      },
      set config(c) {
      },
      use(c, ...b) {
        return o.has(c) || (c && ke(c.install) ? (o.add(c), c.install(d, ...b)) : ke(c) && (o.add(c), c(d, ...b))), d;
      },
      mixin(c) {
        return i.mixins.includes(c) || i.mixins.push(c), d;
      },
      component(c, b) {
        return b ? (i.components[c] = b, d) : i.components[c];
      },
      directive(c, b) {
        return b ? (i.directives[c] = b, d) : i.directives[c];
      },
      mount(c, b, w) {
        if (!l) {
          const D = d._ceVNode || cn(s, r);
          return D.appContext = i, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(D, c, w), l = !0, d._container = c, c.__vue_app__ = d, vi(D.component);
        }
      },
      onUnmount(c) {
        a.push(c);
      },
      unmount() {
        l && (fn(
          a,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(c, b) {
        return i.provides[c] = b, d;
      },
      runWithContext(c) {
        const b = Ts;
        Ts = d;
        try {
          return c();
        } finally {
          Ts = b;
        }
      }
    };
    return d;
  };
}
let Ts = null;
function xh(e, t) {
  if (Nt) {
    let n = Nt.provides;
    const s = Nt.parent && Nt.parent.provides;
    s === n && (n = Nt.provides = Object.create(s)), n[e] = t;
  }
}
function Mr(e, t, n = !1) {
  const s = Zh();
  if (s || Ts) {
    let r = Ts ? Ts._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && ke(t) ? t.call(s && s.proxy) : t;
  }
}
const Ec = {}, Sc = () => Object.create(Ec), Cc = (e) => Object.getPrototypeOf(e) === Ec;
function Th(e, t, n, s = !1) {
  const r = {}, i = Sc();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Rc(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  n ? e.props = s ? r : Wf(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function Ah(e, t, n, s) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, a = He(r), [l] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const c = e.vnode.dynamicProps;
      for (let b = 0; b < c.length; b++) {
        let w = c[b];
        if (_i(e.emitsOptions, w))
          continue;
        const D = t[w];
        if (l)
          if (ze(i, w))
            D !== i[w] && (i[w] = D, d = !0);
          else {
            const P = Bn(w);
            r[P] = po(
              l,
              a,
              P,
              D,
              e,
              !1
            );
          }
        else
          D !== i[w] && (i[w] = D, d = !0);
      }
    }
  } else {
    Rc(e, t, r, i) && (d = !0);
    let c;
    for (const b in a)
      (!t || // for camelCase
      !ze(t, b) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = zn(b)) === b || !ze(t, c))) && (l ? n && // for camelCase
      (n[b] !== void 0 || // for kebab-case
      n[c] !== void 0) && (r[b] = po(
        l,
        a,
        b,
        void 0,
        e,
        !0
      )) : delete r[b]);
    if (i !== a)
      for (const b in i)
        (!t || !ze(t, b)) && (delete i[b], d = !0);
  }
  d && yn(e.attrs, "set", "");
}
function Rc(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let o = !1, a;
  if (t)
    for (let l in t) {
      if (tr(l))
        continue;
      const d = t[l];
      let c;
      r && ze(r, c = Bn(l)) ? !i || !i.includes(c) ? n[c] = d : (a || (a = {}))[c] = d : _i(e.emitsOptions, l) || (!(l in s) || d !== s[l]) && (s[l] = d, o = !0);
    }
  if (i) {
    const l = He(n), d = a || Ze;
    for (let c = 0; c < i.length; c++) {
      const b = i[c];
      n[b] = po(
        r,
        l,
        b,
        d[b],
        e,
        !ze(d, b)
      );
    }
  }
  return o;
}
function po(e, t, n, s, r, i) {
  const o = e[n];
  if (o != null) {
    const a = ze(o, "default");
    if (a && s === void 0) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && ke(l)) {
        const { propsDefaults: d } = r;
        if (n in d)
          s = d[n];
        else {
          const c = _r(r);
          s = d[n] = l.call(
            null,
            t
          ), c();
        }
      } else
        s = l;
      r.ce && r.ce._setProp(n, s);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !a ? s = !1 : o[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === zn(n)) && (s = !0));
  }
  return s;
}
const Eh = /* @__PURE__ */ new WeakMap();
function Ic(e, t, n = !1) {
  const s = n ? Eh : t.propsCache, r = s.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, a = [];
  let l = !1;
  if (!ke(e)) {
    const c = (b) => {
      l = !0;
      const [w, D] = Ic(b, t, !0);
      Et(o, w), D && a.push(...D);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!i && !l)
    return rt(e) && s.set(e, bs), bs;
  if (ye(i))
    for (let c = 0; c < i.length; c++) {
      const b = Bn(i[c]);
      qa(b) && (o[b] = Ze);
    }
  else if (i)
    for (const c in i) {
      const b = Bn(c);
      if (qa(b)) {
        const w = i[c], D = o[b] = ye(w) || ke(w) ? { type: w } : Et({}, w), P = D.type;
        let z = !1, L = !0;
        if (ye(P))
          for (let se = 0; se < P.length; ++se) {
            const he = P[se], ce = ke(he) && he.name;
            if (ce === "Boolean") {
              z = !0;
              break;
            } else ce === "String" && (L = !1);
          }
        else
          z = ke(P) && P.name === "Boolean";
        D[
          0
          /* shouldCast */
        ] = z, D[
          1
          /* shouldCastTrue */
        ] = L, (z || ze(D, "default")) && a.push(b);
      }
    }
  const d = [o, a];
  return rt(e) && s.set(e, d), d;
}
function qa(e) {
  return e[0] !== "$" && !tr(e);
}
const qo = (e) => e === "_" || e === "__" || e === "_ctx" || e === "$stable", jo = (e) => ye(e) ? e.map(an) : [an(e)], Sh = (e, t, n) => {
  if (t._n)
    return t;
  const s = th((...r) => jo(t(...r)), n);
  return s._c = !1, s;
}, Lc = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (qo(r)) continue;
    const i = e[r];
    if (ke(i))
      t[r] = Sh(r, i, s);
    else if (i != null) {
      const o = jo(i);
      t[r] = () => o;
    }
  }
}, Oc = (e, t) => {
  const n = jo(t);
  e.slots.default = () => n;
}, Nc = (e, t, n) => {
  for (const s in t)
    (n || !qo(s)) && (e[s] = t[s]);
}, Ch = (e, t, n) => {
  const s = e.slots = Sc();
  if (e.vnode.shapeFlag & 32) {
    const r = t.__;
    r && ro(s, "__", r, !0);
    const i = t._;
    i ? (Nc(s, t, n), n && ro(s, "_", i, !0)) : Lc(t, s);
  } else t && Oc(e, t);
}, Rh = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let i = !0, o = Ze;
  if (s.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? i = !1 : Nc(r, t, n) : (i = !t.$stable, Lc(t, r)), o = t;
  } else t && (Oc(e, t), o = { default: 1 });
  if (i)
    for (const a in r)
      !qo(a) && o[a] == null && delete r[a];
}, zt = Wh;
function Ih(e) {
  return Lh(e);
}
function Lh(e, t) {
  const n = fi();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: r,
    patchProp: i,
    createElement: o,
    createText: a,
    createComment: l,
    setText: d,
    setElementText: c,
    parentNode: b,
    nextSibling: w,
    setScopeId: D = ln,
    insertStaticContent: P
  } = e, z = (g, _, E, U = null, F = null, M = null, j = void 0, q = null, W = !!_.dynamicChildren) => {
    if (g === _)
      return;
    g && !Hs(g, _) && (U = it(g), we(g, F, M, !0), g = null), _.patchFlag === -2 && (W = !1, _.dynamicChildren = null);
    const { type: B, ref: X, shapeFlag: V } = _;
    switch (B) {
      case yi:
        L(g, _, E, U);
        break;
      case Un:
        se(g, _, E, U);
        break;
      case Pr:
        g == null && he(_, E, U, j);
        break;
      case De:
        ve(
          g,
          _,
          E,
          U,
          F,
          M,
          j,
          q,
          W
        );
        break;
      default:
        V & 1 ? R(
          g,
          _,
          E,
          U,
          F,
          M,
          j,
          q,
          W
        ) : V & 6 ? $e(
          g,
          _,
          E,
          U,
          F,
          M,
          j,
          q,
          W
        ) : (V & 64 || V & 128) && B.process(
          g,
          _,
          E,
          U,
          F,
          M,
          j,
          q,
          W,
          yt
        );
    }
    X != null && F ? rr(X, g && g.ref, M, _ || g, !_) : X == null && g && g.ref != null && rr(g.ref, null, M, g, !0);
  }, L = (g, _, E, U) => {
    if (g == null)
      s(
        _.el = a(_.children),
        E,
        U
      );
    else {
      const F = _.el = g.el;
      _.children !== g.children && d(F, _.children);
    }
  }, se = (g, _, E, U) => {
    g == null ? s(
      _.el = l(_.children || ""),
      E,
      U
    ) : _.el = g.el;
  }, he = (g, _, E, U) => {
    [g.el, g.anchor] = P(
      g.children,
      _,
      E,
      U,
      g.el,
      g.anchor
    );
  }, ce = ({ el: g, anchor: _ }, E, U) => {
    let F;
    for (; g && g !== _; )
      F = w(g), s(g, E, U), g = F;
    s(_, E, U);
  }, k = ({ el: g, anchor: _ }) => {
    let E;
    for (; g && g !== _; )
      E = w(g), r(g), g = E;
    r(_);
  }, R = (g, _, E, U, F, M, j, q, W) => {
    _.type === "svg" ? j = "svg" : _.type === "math" && (j = "mathml"), g == null ? K(
      _,
      E,
      U,
      F,
      M,
      j,
      q,
      W
    ) : Ne(
      g,
      _,
      F,
      M,
      j,
      q,
      W
    );
  }, K = (g, _, E, U, F, M, j, q) => {
    let W, B;
    const { props: X, shapeFlag: V, transition: Z, dirs: ie } = g;
    if (W = g.el = o(
      g.type,
      M,
      X && X.is,
      X
    ), V & 8 ? c(W, g.children) : V & 16 && Se(
      g.children,
      W,
      null,
      U,
      F,
      Hi(g, M),
      j,
      q
    ), ie && Yn(g, null, U, "created"), G(W, g, g.scopeId, j, U), X) {
      for (const N in X)
        N !== "value" && !tr(N) && i(W, N, null, X[N], M, U);
      "value" in X && i(W, "value", null, X.value, M), (B = X.onVnodeBeforeMount) && sn(B, U, g);
    }
    ie && Yn(g, null, U, "beforeMount");
    const me = Oh(F, Z);
    me && Z.beforeEnter(W), s(W, _, E), ((B = X && X.onVnodeMounted) || me || ie) && zt(() => {
      B && sn(B, U, g), me && Z.enter(W), ie && Yn(g, null, U, "mounted");
    }, F);
  }, G = (g, _, E, U, F) => {
    if (E && D(g, E), U)
      for (let M = 0; M < U.length; M++)
        D(g, U[M]);
    if (F) {
      let M = F.subTree;
      if (_ === M || $c(M.type) && (M.ssContent === _ || M.ssFallback === _)) {
        const j = F.vnode;
        G(
          g,
          j,
          j.scopeId,
          j.slotScopeIds,
          F.parent
        );
      }
    }
  }, Se = (g, _, E, U, F, M, j, q, W = 0) => {
    for (let B = W; B < g.length; B++) {
      const X = g[B] = q ? Mn(g[B]) : an(g[B]);
      z(
        null,
        X,
        _,
        E,
        U,
        F,
        M,
        j,
        q
      );
    }
  }, Ne = (g, _, E, U, F, M, j) => {
    const q = _.el = g.el;
    let { patchFlag: W, dynamicChildren: B, dirs: X } = _;
    W |= g.patchFlag & 16;
    const V = g.props || Ze, Z = _.props || Ze;
    let ie;
    if (E && Xn(E, !1), (ie = Z.onVnodeBeforeUpdate) && sn(ie, E, _, g), X && Yn(_, g, E, "beforeUpdate"), E && Xn(E, !0), (V.innerHTML && Z.innerHTML == null || V.textContent && Z.textContent == null) && c(q, ""), B ? Me(
      g.dynamicChildren,
      B,
      q,
      E,
      U,
      Hi(_, F),
      M
    ) : j || ue(
      g,
      _,
      q,
      null,
      E,
      U,
      Hi(_, F),
      M,
      !1
    ), W > 0) {
      if (W & 16)
        xe(q, V, Z, E, F);
      else if (W & 2 && V.class !== Z.class && i(q, "class", null, Z.class, F), W & 4 && i(q, "style", V.style, Z.style, F), W & 8) {
        const me = _.dynamicProps;
        for (let N = 0; N < me.length; N++) {
          const I = me[N], J = V[I], ee = Z[I];
          (ee !== J || I === "value") && i(q, I, J, ee, F, E);
        }
      }
      W & 1 && g.children !== _.children && c(q, _.children);
    } else !j && B == null && xe(q, V, Z, E, F);
    ((ie = Z.onVnodeUpdated) || X) && zt(() => {
      ie && sn(ie, E, _, g), X && Yn(_, g, E, "updated");
    }, U);
  }, Me = (g, _, E, U, F, M, j) => {
    for (let q = 0; q < _.length; q++) {
      const W = g[q], B = _[q], X = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        W.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (W.type === De || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Hs(W, B) || // - In the case of a component, it could contain anything.
        W.shapeFlag & 198) ? b(W.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          E
        )
      );
      z(
        W,
        B,
        X,
        null,
        U,
        F,
        M,
        j,
        !0
      );
    }
  }, xe = (g, _, E, U, F) => {
    if (_ !== E) {
      if (_ !== Ze)
        for (const M in _)
          !tr(M) && !(M in E) && i(
            g,
            M,
            _[M],
            null,
            F,
            U
          );
      for (const M in E) {
        if (tr(M)) continue;
        const j = E[M], q = _[M];
        j !== q && M !== "value" && i(g, M, q, j, F, U);
      }
      "value" in E && i(g, "value", _.value, E.value, F);
    }
  }, ve = (g, _, E, U, F, M, j, q, W) => {
    const B = _.el = g ? g.el : a(""), X = _.anchor = g ? g.anchor : a("");
    let { patchFlag: V, dynamicChildren: Z, slotScopeIds: ie } = _;
    ie && (q = q ? q.concat(ie) : ie), g == null ? (s(B, E, U), s(X, E, U), Se(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      _.children || [],
      E,
      X,
      F,
      M,
      j,
      q,
      W
    )) : V > 0 && V & 64 && Z && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    g.dynamicChildren ? (Me(
      g.dynamicChildren,
      Z,
      E,
      F,
      M,
      j,
      q
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (_.key != null || F && _ === F.subTree) && Mc(
      g,
      _,
      !0
      /* shallow */
    )) : ue(
      g,
      _,
      E,
      X,
      F,
      M,
      j,
      q,
      W
    );
  }, $e = (g, _, E, U, F, M, j, q, W) => {
    _.slotScopeIds = q, g == null ? _.shapeFlag & 512 ? F.ctx.activate(
      _,
      E,
      U,
      j,
      W
    ) : qe(
      _,
      E,
      U,
      F,
      M,
      j,
      W
    ) : Qe(g, _, W);
  }, qe = (g, _, E, U, F, M, j) => {
    const q = g.component = Xh(
      g,
      U,
      F
    );
    if (bc(g) && (q.ctx.renderer = yt), Jh(q, !1, j), q.asyncDep) {
      if (F && F.registerDep(q, de, j), !g.el) {
        const W = q.subTree = cn(Un);
        se(null, W, _, E), g.placeholder = W.el;
      }
    } else
      de(
        q,
        g,
        _,
        E,
        F,
        M,
        j
      );
  }, Qe = (g, _, E) => {
    const U = _.component = g.component;
    if (Hh(g, _, E))
      if (U.asyncDep && !U.asyncResolved) {
        _e(U, _, E);
        return;
      } else
        U.next = _, U.update();
    else
      _.el = g.el, U.vnode = _;
  }, de = (g, _, E, U, F, M, j) => {
    const q = () => {
      if (g.isMounted) {
        let { next: V, bu: Z, u: ie, parent: me, vnode: N } = g;
        {
          const h = Pc(g);
          if (h) {
            V && (V.el = N.el, _e(g, V, j)), h.asyncDep.then(() => {
              g.isUnmounted || q();
            });
            return;
          }
        }
        let I = V, J;
        Xn(g, !1), V ? (V.el = N.el, _e(g, V, j)) : V = N, Z && Nr(Z), (J = V.props && V.props.onVnodeBeforeUpdate) && sn(J, me, V, N), Xn(g, !0);
        const ee = Va(g), Ie = g.subTree;
        g.subTree = ee, z(
          Ie,
          ee,
          // parent may have changed if it's in a teleport
          b(Ie.el),
          // anchor may have changed if it's in a fragment
          it(Ie),
          g,
          F,
          M
        ), V.el = ee.el, I === null && zh(g, ee.el), ie && zt(ie, F), (J = V.props && V.props.onVnodeUpdated) && zt(
          () => sn(J, me, V, N),
          F
        );
      } else {
        let V;
        const { el: Z, props: ie } = _, { bm: me, m: N, parent: I, root: J, type: ee } = g, Ie = ir(_);
        Xn(g, !1), me && Nr(me), !Ie && (V = ie && ie.onVnodeBeforeMount) && sn(V, I, _), Xn(g, !0);
        {
          J.ce && // @ts-expect-error _def is private
          J.ce._def.shadowRoot !== !1 && J.ce._injectChildStyle(ee);
          const h = g.subTree = Va(g);
          z(
            null,
            h,
            E,
            U,
            g,
            F,
            M
          ), _.el = h.el;
        }
        if (N && zt(N, F), !Ie && (V = ie && ie.onVnodeMounted)) {
          const h = _;
          zt(
            () => sn(V, I, h),
            F
          );
        }
        (_.shapeFlag & 256 || I && ir(I.vnode) && I.vnode.shapeFlag & 256) && g.a && zt(g.a, F), g.isMounted = !0, _ = E = U = null;
      }
    };
    g.scope.on();
    const W = g.effect = new Jl(q);
    g.scope.off();
    const B = g.update = W.run.bind(W), X = g.job = W.runIfDirty.bind(W);
    X.i = g, X.id = g.uid, W.scheduler = () => Ho(X), Xn(g, !0), B();
  }, _e = (g, _, E) => {
    _.component = g;
    const U = g.vnode.props;
    g.vnode = _, g.next = null, Ah(g, _.props, U, E), Rh(g, _.children, E), kn(), $a(g), xn();
  }, ue = (g, _, E, U, F, M, j, q, W = !1) => {
    const B = g && g.children, X = g ? g.shapeFlag : 0, V = _.children, { patchFlag: Z, shapeFlag: ie } = _;
    if (Z > 0) {
      if (Z & 128) {
        et(
          B,
          V,
          E,
          U,
          F,
          M,
          j,
          q,
          W
        );
        return;
      } else if (Z & 256) {
        st(
          B,
          V,
          E,
          U,
          F,
          M,
          j,
          q,
          W
        );
        return;
      }
    }
    ie & 8 ? (X & 16 && ct(B, F, M), V !== B && c(E, V)) : X & 16 ? ie & 16 ? et(
      B,
      V,
      E,
      U,
      F,
      M,
      j,
      q,
      W
    ) : ct(B, F, M, !0) : (X & 8 && c(E, ""), ie & 16 && Se(
      V,
      E,
      U,
      F,
      M,
      j,
      q,
      W
    ));
  }, st = (g, _, E, U, F, M, j, q, W) => {
    g = g || bs, _ = _ || bs;
    const B = g.length, X = _.length, V = Math.min(B, X);
    let Z;
    for (Z = 0; Z < V; Z++) {
      const ie = _[Z] = W ? Mn(_[Z]) : an(_[Z]);
      z(
        g[Z],
        ie,
        E,
        null,
        F,
        M,
        j,
        q,
        W
      );
    }
    B > X ? ct(
      g,
      F,
      M,
      !0,
      !1,
      V
    ) : Se(
      _,
      E,
      U,
      F,
      M,
      j,
      q,
      W,
      V
    );
  }, et = (g, _, E, U, F, M, j, q, W) => {
    let B = 0;
    const X = _.length;
    let V = g.length - 1, Z = X - 1;
    for (; B <= V && B <= Z; ) {
      const ie = g[B], me = _[B] = W ? Mn(_[B]) : an(_[B]);
      if (Hs(ie, me))
        z(
          ie,
          me,
          E,
          null,
          F,
          M,
          j,
          q,
          W
        );
      else
        break;
      B++;
    }
    for (; B <= V && B <= Z; ) {
      const ie = g[V], me = _[Z] = W ? Mn(_[Z]) : an(_[Z]);
      if (Hs(ie, me))
        z(
          ie,
          me,
          E,
          null,
          F,
          M,
          j,
          q,
          W
        );
      else
        break;
      V--, Z--;
    }
    if (B > V) {
      if (B <= Z) {
        const ie = Z + 1, me = ie < X ? _[ie].el : U;
        for (; B <= Z; )
          z(
            null,
            _[B] = W ? Mn(_[B]) : an(_[B]),
            E,
            me,
            F,
            M,
            j,
            q,
            W
          ), B++;
      }
    } else if (B > Z)
      for (; B <= V; )
        we(g[B], F, M, !0), B++;
    else {
      const ie = B, me = B, N = /* @__PURE__ */ new Map();
      for (B = me; B <= Z; B++) {
        const T = _[B] = W ? Mn(_[B]) : an(_[B]);
        T.key != null && N.set(T.key, B);
      }
      let I, J = 0;
      const ee = Z - me + 1;
      let Ie = !1, h = 0;
      const m = new Array(ee);
      for (B = 0; B < ee; B++) m[B] = 0;
      for (B = ie; B <= V; B++) {
        const T = g[B];
        if (J >= ee) {
          we(T, F, M, !0);
          continue;
        }
        let $;
        if (T.key != null)
          $ = N.get(T.key);
        else
          for (I = me; I <= Z; I++)
            if (m[I - me] === 0 && Hs(T, _[I])) {
              $ = I;
              break;
            }
        $ === void 0 ? we(T, F, M, !0) : (m[$ - me] = B + 1, $ >= h ? h = $ : Ie = !0, z(
          T,
          _[$],
          E,
          null,
          F,
          M,
          j,
          q,
          W
        ), J++);
      }
      const C = Ie ? Nh(m) : bs;
      for (I = C.length - 1, B = ee - 1; B >= 0; B--) {
        const T = me + B, $ = _[T], Y = _[T + 1], te = T + 1 < X ? (
          // #13559, fallback to el placeholder for unresolved async component
          Y.el || Y.placeholder
        ) : U;
        m[B] === 0 ? z(
          null,
          $,
          E,
          te,
          F,
          M,
          j,
          q,
          W
        ) : Ie && (I < 0 || B !== C[I] ? Te($, E, te, 2) : I--);
      }
    }
  }, Te = (g, _, E, U, F = null) => {
    const { el: M, type: j, transition: q, children: W, shapeFlag: B } = g;
    if (B & 6) {
      Te(g.component.subTree, _, E, U);
      return;
    }
    if (B & 128) {
      g.suspense.move(_, E, U);
      return;
    }
    if (B & 64) {
      j.move(g, _, E, yt);
      return;
    }
    if (j === De) {
      s(M, _, E);
      for (let V = 0; V < W.length; V++)
        Te(W[V], _, E, U);
      s(g.anchor, _, E);
      return;
    }
    if (j === Pr) {
      ce(g, _, E);
      return;
    }
    if (U !== 2 && B & 1 && q)
      if (U === 0)
        q.beforeEnter(M), s(M, _, E), zt(() => q.enter(M), F);
      else {
        const { leave: V, delayLeave: Z, afterLeave: ie } = q, me = () => {
          g.ctx.isUnmounted ? r(M) : s(M, _, E);
        }, N = () => {
          V(M, () => {
            me(), ie && ie();
          });
        };
        Z ? Z(M, me, N) : N();
      }
    else
      s(M, _, E);
  }, we = (g, _, E, U = !1, F = !1) => {
    const {
      type: M,
      props: j,
      ref: q,
      children: W,
      dynamicChildren: B,
      shapeFlag: X,
      patchFlag: V,
      dirs: Z,
      cacheIndex: ie
    } = g;
    if (V === -2 && (F = !1), q != null && (kn(), rr(q, null, E, g, !0), xn()), ie != null && (_.renderCache[ie] = void 0), X & 256) {
      _.ctx.deactivate(g);
      return;
    }
    const me = X & 1 && Z, N = !ir(g);
    let I;
    if (N && (I = j && j.onVnodeBeforeUnmount) && sn(I, _, g), X & 6)
      Ce(g.component, E, U);
    else {
      if (X & 128) {
        g.suspense.unmount(E, U);
        return;
      }
      me && Yn(g, null, _, "beforeUnmount"), X & 64 ? g.type.remove(
        g,
        _,
        E,
        yt,
        U
      ) : B && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !B.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (M !== De || V > 0 && V & 64) ? ct(
        B,
        _,
        E,
        !1,
        !0
      ) : (M === De && V & 384 || !F && X & 16) && ct(W, _, E), U && Pe(g);
    }
    (N && (I = j && j.onVnodeUnmounted) || me) && zt(() => {
      I && sn(I, _, g), me && Yn(g, null, _, "unmounted");
    }, E);
  }, Pe = (g) => {
    const { type: _, el: E, anchor: U, transition: F } = g;
    if (_ === De) {
      tt(E, U);
      return;
    }
    if (_ === Pr) {
      k(g);
      return;
    }
    const M = () => {
      r(E), F && !F.persisted && F.afterLeave && F.afterLeave();
    };
    if (g.shapeFlag & 1 && F && !F.persisted) {
      const { leave: j, delayLeave: q } = F, W = () => j(E, M);
      q ? q(g.el, M, W) : W();
    } else
      M();
  }, tt = (g, _) => {
    let E;
    for (; g !== _; )
      E = w(g), r(g), g = E;
    r(_);
  }, Ce = (g, _, E) => {
    const {
      bum: U,
      scope: F,
      job: M,
      subTree: j,
      um: q,
      m: W,
      a: B,
      parent: X,
      slots: { __: V }
    } = g;
    ja(W), ja(B), U && Nr(U), X && ye(V) && V.forEach((Z) => {
      X.renderCache[Z] = void 0;
    }), F.stop(), M && (M.flags |= 8, we(j, g, _, E)), q && zt(q, _), zt(() => {
      g.isUnmounted = !0;
    }, _), _ && _.pendingBranch && !_.isUnmounted && g.asyncDep && !g.asyncResolved && g.suspenseId === _.pendingId && (_.deps--, _.deps === 0 && _.resolve());
  }, ct = (g, _, E, U = !1, F = !1, M = 0) => {
    for (let j = M; j < g.length; j++)
      we(g[j], _, E, U, F);
  }, it = (g) => {
    if (g.shapeFlag & 6)
      return it(g.component.subTree);
    if (g.shapeFlag & 128)
      return g.suspense.next();
    const _ = w(g.anchor || g.el), E = _ && _[nh];
    return E ? w(E) : _;
  };
  let ut = !1;
  const vt = (g, _, E) => {
    g == null ? _._vnode && we(_._vnode, null, null, !0) : z(
      _._vnode || null,
      g,
      _,
      null,
      null,
      null,
      E
    ), _._vnode = g, ut || (ut = !0, $a(), mc(), ut = !1);
  }, yt = {
    p: z,
    um: we,
    m: Te,
    r: Pe,
    mt: qe,
    mc: Se,
    pc: ue,
    pbc: Me,
    n: it,
    o: e
  };
  return {
    render: vt,
    hydrate: void 0,
    createApp: kh(vt)
  };
}
function Hi({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Xn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Oh(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Mc(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (ye(s) && ye(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      let a = r[i];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = r[i] = Mn(r[i]), a.el = o.el), !n && a.patchFlag !== -2 && Mc(o, a)), a.type === yi && (a.el = o.el), a.type === Un && !a.el && (a.el = o.el);
    }
}
function Nh(e) {
  const t = e.slice(), n = [0];
  let s, r, i, o, a;
  const l = e.length;
  for (s = 0; s < l; s++) {
    const d = e[s];
    if (d !== 0) {
      if (r = n[n.length - 1], e[r] < d) {
        t[s] = r, n.push(s);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        a = i + o >> 1, e[n[a]] < d ? i = a + 1 : o = a;
      d < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; )
    n[i] = o, o = t[o];
  return n;
}
function Pc(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Pc(t);
}
function ja(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Mh = Symbol.for("v-scx"), Ph = () => Mr(Mh);
function Lt(e, t, n) {
  return Fc(e, t, n);
}
function Fc(e, t, n = Ze) {
  const { immediate: s, deep: r, flush: i, once: o } = n, a = Et({}, n), l = t && s || !t && i !== "post";
  let d;
  if (pr) {
    if (i === "sync") {
      const D = Ph();
      d = D.__watcherHandles || (D.__watcherHandles = []);
    } else if (!l) {
      const D = () => {
      };
      return D.stop = ln, D.resume = ln, D.pause = ln, D;
    }
  }
  const c = Nt;
  a.call = (D, P, z) => fn(D, c, P, z);
  let b = !1;
  i === "post" ? a.scheduler = (D) => {
    zt(D, c && c.suspense);
  } : i !== "sync" && (b = !0, a.scheduler = (D, P) => {
    P ? D() : Ho(D);
  }), a.augmentJob = (D) => {
    t && (D.flags |= 4), b && (D.flags |= 2, c && (D.id = c.uid, D.i = c));
  };
  const w = Zf(e, t, a);
  return pr && (d ? d.push(w) : l && w()), w;
}
function Fh(e, t, n) {
  const s = this.proxy, r = dt(e) ? e.includes(".") ? Dc(s, e) : () => s[e] : e.bind(s, s);
  let i;
  ke(t) ? i = t : (i = t.handler, n = t);
  const o = _r(this), a = Fc(r, i.bind(s), n);
  return o(), a;
}
function Dc(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
const Dh = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Bn(t)}Modifiers`] || e[`${zn(t)}Modifiers`];
function Bh(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || Ze;
  let r = n;
  const i = t.startsWith("update:"), o = i && Dh(s, t.slice(7));
  o && (o.trim && (r = n.map((c) => dt(c) ? c.trim() : c)), o.number && (r = n.map(io)));
  let a, l = s[a = Pi(t)] || // also try camelCase event handler (#2249)
  s[a = Pi(Bn(t))];
  !l && i && (l = s[a = Pi(zn(t))]), l && fn(
    l,
    e,
    6,
    r
  );
  const d = s[a + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, fn(
      d,
      e,
      6,
      r
    );
  }
}
function Bc(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {}, a = !1;
  if (!ke(e)) {
    const l = (d) => {
      const c = Bc(d, t, !0);
      c && (a = !0, Et(o, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !i && !a ? (rt(e) && s.set(e, null), null) : (ye(i) ? i.forEach((l) => o[l] = null) : Et(o, i), rt(e) && s.set(e, o), o);
}
function _i(e, t) {
  return !e || !li(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ze(e, t[0].toLowerCase() + t.slice(1)) || ze(e, zn(t)) || ze(e, t));
}
function Va(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    propsOptions: [i],
    slots: o,
    attrs: a,
    emit: l,
    render: d,
    renderCache: c,
    props: b,
    data: w,
    setupState: D,
    ctx: P,
    inheritAttrs: z
  } = e, L = Zr(e);
  let se, he;
  try {
    if (n.shapeFlag & 4) {
      const k = r || s, R = k;
      se = an(
        d.call(
          R,
          k,
          c,
          b,
          D,
          w,
          P
        )
      ), he = a;
    } else {
      const k = t;
      se = an(
        k.length > 1 ? k(
          b,
          { attrs: a, slots: o, emit: l }
        ) : k(
          b,
          null
        )
      ), he = t.props ? a : $h(a);
    }
  } catch (k) {
    ar.length = 0, pi(k, e, 1), se = cn(Un);
  }
  let ce = se;
  if (he && z !== !1) {
    const k = Object.keys(he), { shapeFlag: R } = ce;
    k.length && R & 7 && (i && k.some(Lo) && (he = Uh(
      he,
      i
    )), ce = Ss(ce, he, !1, !0));
  }
  return n.dirs && (ce = Ss(ce, null, !1, !0), ce.dirs = ce.dirs ? ce.dirs.concat(n.dirs) : n.dirs), n.transition && zo(ce, n.transition), se = ce, Zr(L), se;
}
const $h = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || li(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Uh = (e, t) => {
  const n = {};
  for (const s in e)
    (!Lo(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Hh(e, t, n) {
  const { props: s, children: r, component: i } = e, { props: o, children: a, patchFlag: l } = t, d = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return s ? Ka(s, o, d) : !!o;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let b = 0; b < c.length; b++) {
        const w = c[b];
        if (o[w] !== s[w] && !_i(d, w))
          return !0;
      }
    }
  } else
    return (r || a) && (!a || !a.$stable) ? !0 : s === o ? !1 : s ? o ? Ka(s, o, d) : !0 : !!o;
  return !1;
}
function Ka(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (t[i] !== e[i] && !_i(n, i))
      return !0;
  }
  return !1;
}
function zh({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const $c = (e) => e.__isSuspense;
function Wh(e, t) {
  t && t.pendingBranch ? ye(e) ? t.effects.push(...e) : t.effects.push(e) : eh(e);
}
const De = Symbol.for("v-fgt"), yi = Symbol.for("v-txt"), Un = Symbol.for("v-cmt"), Pr = Symbol.for("v-stc"), ar = [];
let Wt = null;
function x(e = !1) {
  ar.push(Wt = e ? null : []);
}
function qh() {
  ar.pop(), Wt = ar[ar.length - 1] || null;
}
let dr = 1;
function Ga(e, t = !1) {
  dr += e, e < 0 && Wt && t && (Wt.hasOnce = !0);
}
function Uc(e) {
  return e.dynamicChildren = dr > 0 ? Wt || bs : null, qh(), dr > 0 && Wt && Wt.push(e), e;
}
function A(e, t, n, s, r, i) {
  return Uc(
    v(
      e,
      t,
      n,
      s,
      r,
      i,
      !0
    )
  );
}
function Qr(e, t, n, s, r) {
  return Uc(
    cn(
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function Hc(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Hs(e, t) {
  return e.type === t.type && e.key === t.key;
}
const zc = ({ key: e }) => e ?? null, Fr = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? dt(e) || At(e) || ke(e) ? { i: Gt, r: e, k: t, f: !!n } : e : null);
function v(e, t = null, n = null, s = 0, r = null, i = e === De ? 0 : 1, o = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && zc(t),
    ref: t && Fr(t),
    scopeId: yc,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Gt
  };
  return a ? (Vo(l, n), i & 128 && e.normalize(l)) : n && (l.shapeFlag |= dt(n) ? 8 : 16), dr > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Wt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Wt.push(l), l;
}
const cn = jh;
function jh(e, t = null, n = null, s = 0, r = null, i = !1) {
  if ((!e || e === ph) && (e = Un), Hc(e)) {
    const a = Ss(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Vo(a, n), dr > 0 && !i && Wt && (a.shapeFlag & 6 ? Wt[Wt.indexOf(e)] = a : Wt.push(a)), a.patchFlag = -2, a;
  }
  if (nd(e) && (e = e.__vccOpts), t) {
    t = Vh(t);
    let { class: a, style: l } = t;
    a && !dt(a) && (t.class = Fe(a)), rt(l) && (Uo(l) && !ye(l) && (l = Et({}, l)), t.style = Ee(l));
  }
  const o = dt(e) ? 1 : $c(e) ? 128 : sh(e) ? 64 : rt(e) ? 4 : ke(e) ? 2 : 0;
  return v(
    e,
    t,
    n,
    s,
    r,
    o,
    i,
    !0
  );
}
function Vh(e) {
  return e ? Uo(e) || Cc(e) ? Et({}, e) : e : null;
}
function Ss(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: a, transition: l } = e, d = t ? Kh(r || {}, t) : r, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && zc(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? ye(i) ? i.concat(Fr(t)) : [i, Fr(t)] : Fr(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== De ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ss(e.ssContent),
    ssFallback: e.ssFallback && Ss(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && s && zo(
    c,
    l.clone(c)
  ), c;
}
function gn(e = " ", t = 0) {
  return cn(yi, null, e, t);
}
function Zn(e, t) {
  const n = cn(Pr, null, e);
  return n.staticCount = t, n;
}
function ae(e = "", t = !1) {
  return t ? (x(), Qr(Un, null, e)) : cn(Un, null, e);
}
function an(e) {
  return e == null || typeof e == "boolean" ? cn(Un) : ye(e) ? cn(
    De,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Hc(e) ? Mn(e) : cn(yi, null, String(e));
}
function Mn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ss(e);
}
function Vo(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (ye(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Vo(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Cc(t) ? t._ctx = Gt : r === 3 && Gt && (Gt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ke(t) ? (t = { default: t, _ctx: Gt }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [gn(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Kh(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = Fe([t.class, s.class]));
      else if (r === "style")
        t.style = Ee([t.style, s.style]);
      else if (li(r)) {
        const i = t[r], o = s[r];
        o && i !== o && !(ye(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function sn(e, t, n, s = null) {
  fn(e, t, 7, [
    n,
    s
  ]);
}
const Gh = Ac();
let Yh = 0;
function Xh(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || Gh, i = {
    uid: Yh++,
    vnode: e,
    type: s,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new xf(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Ic(s, r),
    emitsOptions: Bc(s, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ze,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: Ze,
    data: Ze,
    props: Ze,
    attrs: Ze,
    slots: Ze,
    refs: Ze,
    setupState: Ze,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Bh.bind(null, i), e.ce && e.ce(i), i;
}
let Nt = null;
const Zh = () => Nt || Gt;
let ei, go;
{
  const e = fi(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  ei = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Nt = n
  ), go = t(
    "__VUE_SSR_SETTERS__",
    (n) => pr = n
  );
}
const _r = (e) => {
  const t = Nt;
  return ei(e), e.scope.on(), () => {
    e.scope.off(), ei(t);
  };
}, Ya = () => {
  Nt && Nt.scope.off(), ei(null);
};
function Wc(e) {
  return e.vnode.shapeFlag & 4;
}
let pr = !1;
function Jh(e, t = !1, n = !1) {
  t && go(t);
  const { props: s, children: r } = e.vnode, i = Wc(e);
  Th(e, s, i, t), Ch(e, r, n || t);
  const o = i ? Qh(e, t) : void 0;
  return t && go(!1), o;
}
function Qh(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, gh);
  const { setup: s } = n;
  if (s) {
    kn();
    const r = e.setupContext = s.length > 1 ? td(e) : null, i = _r(e), o = gr(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    ), a = jl(o);
    if (xn(), i(), (a || e.sp) && !ir(e) && vc(e), a) {
      if (o.then(Ya, Ya), t)
        return o.then((l) => {
          Xa(e, l);
        }).catch((l) => {
          pi(l, e, 0);
        });
      e.asyncDep = o;
    } else
      Xa(e, o);
  } else
    qc(e);
}
function Xa(e, t, n) {
  ke(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : rt(t) && (e.setupState = dc(t)), qc(e);
}
function qc(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || ln);
  {
    const r = _r(e);
    kn();
    try {
      mh(e);
    } finally {
      xn(), r();
    }
  }
}
const ed = {
  get(e, t) {
    return Tt(e, "get", ""), e[t];
  }
};
function td(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, ed),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function vi(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(dc(qf(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in or)
        return or[n](e);
    },
    has(t, n) {
      return n in t || n in or;
    }
  })) : e.proxy;
}
function nd(e) {
  return ke(e) && "__vccOpts" in e;
}
const fe = (e, t) => Yf(e, t, pr), sd = "3.5.18";
/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let mo;
const Za = typeof window < "u" && window.trustedTypes;
if (Za)
  try {
    mo = /* @__PURE__ */ Za.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const jc = mo ? (e) => mo.createHTML(e) : (e) => e, rd = "http://www.w3.org/2000/svg", id = "http://www.w3.org/1998/Math/MathML", _n = typeof document < "u" ? document : null, Ja = _n && /* @__PURE__ */ _n.createElement("template"), od = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? _n.createElementNS(rd, e) : t === "mathml" ? _n.createElementNS(id, e) : n ? _n.createElement(e, { is: n }) : _n.createElement(e);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => _n.createTextNode(e),
  createComment: (e) => _n.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => _n.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, r, i) {
    const o = n ? n.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      Ja.innerHTML = jc(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const a = Ja.content;
      if (s === "svg" || s === "mathml") {
        const l = a.firstChild;
        for (; l.firstChild; )
          a.appendChild(l.firstChild);
        a.removeChild(l);
      }
      t.insertBefore(a, n);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, ad = Symbol("_vtc");
function ld(e, t, n) {
  const s = e[ad];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ti = Symbol("_vod"), Vc = Symbol("_vsh"), cd = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[ti] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : zs(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), zs(e, !0), s.enter(e)) : s.leave(e, () => {
      zs(e, !1);
    }) : zs(e, t));
  },
  beforeUnmount(e, { value: t }) {
    zs(e, t);
  }
};
function zs(e, t) {
  e.style.display = t ? e[ti] : "none", e[Vc] = !t;
}
const ud = Symbol(""), fd = /(^|;)\s*display\s*:/;
function hd(e, t, n) {
  const s = e.style, r = dt(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (dt(t))
        for (const o of t.split(";")) {
          const a = o.slice(0, o.indexOf(":")).trim();
          n[a] == null && Dr(s, a, "");
        }
      else
        for (const o in t)
          n[o] == null && Dr(s, o, "");
    for (const o in n)
      o === "display" && (i = !0), Dr(s, o, n[o]);
  } else if (r) {
    if (t !== n) {
      const o = s[ud];
      o && (n += ";" + o), s.cssText = n, i = fd.test(n);
    }
  } else t && e.removeAttribute("style");
  ti in e && (e[ti] = i ? s.display : "", e[Vc] && (s.display = "none"));
}
const Qa = /\s*!important$/;
function Dr(e, t, n) {
  if (ye(n))
    n.forEach((s) => Dr(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = dd(e, t);
    Qa.test(n) ? e.setProperty(
      zn(s),
      n.replace(Qa, ""),
      "important"
    ) : e[s] = n;
  }
}
const el = ["Webkit", "Moz", "ms"], zi = {};
function dd(e, t) {
  const n = zi[t];
  if (n)
    return n;
  let s = Bn(t);
  if (s !== "filter" && s in e)
    return zi[t] = s;
  s = Gl(s);
  for (let r = 0; r < el.length; r++) {
    const i = el[r] + s;
    if (i in e)
      return zi[t] = i;
  }
  return t;
}
const tl = "http://www.w3.org/1999/xlink";
function nl(e, t, n, s, r, i = kf(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(tl, t.slice(6, t.length)) : e.setAttributeNS(tl, t, n) : n == null || i && !Yl(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Hn(n) ? String(n) : n
  );
}
function sl(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? jc(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const a = i === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (a !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = Yl(n) : n == null && a === "string" ? (n = "", o = !0) : a === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(r || t);
}
function vs(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function pd(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const rl = Symbol("_vei");
function gd(e, t, n, s, r = null) {
  const i = e[rl] || (e[rl] = {}), o = i[t];
  if (s && o)
    o.value = s;
  else {
    const [a, l] = md(t);
    if (s) {
      const d = i[t] = vd(
        s,
        r
      );
      vs(e, a, d, l);
    } else o && (pd(e, a, o, l), i[t] = void 0);
  }
}
const il = /(?:Once|Passive|Capture)$/;
function md(e) {
  let t;
  if (il.test(e)) {
    t = {};
    let s;
    for (; s = e.match(il); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : zn(e.slice(2)), t];
}
let Wi = 0;
const _d = /* @__PURE__ */ Promise.resolve(), yd = () => Wi || (_d.then(() => Wi = 0), Wi = Date.now());
function vd(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    fn(
      bd(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = yd(), n;
}
function bd(e, t) {
  if (ye(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (r) => !r._stopped && s && s(r)
    );
  } else
    return t;
}
const ol = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, wd = (e, t, n, s, r, i) => {
  const o = r === "svg";
  t === "class" ? ld(e, s, o) : t === "style" ? hd(e, n, s) : li(t) ? Lo(t) || gd(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : kd(e, t, s, o)) ? (sl(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && nl(e, t, s, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !dt(s)) ? sl(e, Bn(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), nl(e, t, s, o));
};
function kd(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ol(t) && ke(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return ol(t) && dt(n) ? !1 : t in e;
}
const al = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ye(t) ? (n) => Nr(t, n) : t;
};
function xd(e) {
  e.target.composing = !0;
}
function ll(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const qi = Symbol("_assign"), Jn = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e[qi] = al(r);
    const i = s || r.props && r.props.type === "number";
    vs(e, t ? "change" : "input", (o) => {
      if (o.target.composing) return;
      let a = e.value;
      n && (a = a.trim()), i && (a = io(a)), e[qi](a);
    }), n && vs(e, "change", () => {
      e.value = e.value.trim();
    }), t || (vs(e, "compositionstart", xd), vs(e, "compositionend", ll), vs(e, "change", ll));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: i } }, o) {
    if (e[qi] = al(o), e.composing) return;
    const a = (i || e.type === "number") && !/^0\d/.test(e.value) ? io(e.value) : e.value, l = t ?? "";
    a !== l && (document.activeElement === e && e.type !== "range" && (s && t === n || r && e.value.trim() === l) || (e.value = l));
  }
}, Td = ["ctrl", "shift", "alt", "meta"], Ad = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Td.some((n) => e[`${n}Key`] && !t.includes(n))
}, es = (e, t) => {
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (r, ...i) => {
    for (let o = 0; o < t.length; o++) {
      const a = Ad[t[o]];
      if (a && a(r, t)) return;
    }
    return e(r, ...i);
  });
}, Ed = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Br = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = (r) => {
    if (!("key" in r))
      return;
    const i = zn(r.key);
    if (t.some(
      (o) => o === i || Ed[o] === i
    ))
      return e(r);
  });
}, Sd = /* @__PURE__ */ Et({ patchProp: wd }, od);
let cl;
function Cd() {
  return cl || (cl = Ih(Sd));
}
const Rd = (...e) => {
  const t = Cd().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = Ld(s);
    if (!r) return;
    const i = t._component;
    !ke(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = n(r, !1, Id(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
};
function Id(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Ld(e) {
  return dt(e) ? document.querySelector(e) : e;
}
const Kc = /* @__PURE__ */ new Set(["customer_required", "token_invalid"]), _o = (e) => !!e && Kc.has(e), As = (e) => {
  const t = e.replace("#", ""), n = parseInt(t.substr(0, 2), 16), s = parseInt(t.substr(2, 2), 16), r = parseInt(t.substr(4, 2), 16);
  return (n * 299 + s * 587 + r * 114) / 1e3 < 128;
}, Od = (e, t) => {
  const n = e.replace("#", ""), s = parseInt(n.substr(0, 2), 16), r = parseInt(n.substr(2, 2), 16), i = parseInt(n.substr(4, 2), 16), o = As(e), a = o ? Math.min(255, s + t) : Math.max(0, s - t), l = o ? Math.min(255, r + t) : Math.max(0, r - t), d = o ? Math.min(255, i + t) : Math.max(0, i - t);
  return `#${a.toString(16).padStart(2, "0")}${l.toString(16).padStart(2, "0")}${d.toString(16).padStart(2, "0")}`;
}, Ws = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e), Nd = (e) => {
  switch (e.type) {
    case "connection_error":
      return "Unable to connect. Please try again later.";
    case "auth_error":
      return "Authentication failed. Please refresh the page.";
    case "chat_error":
      return "Unable to send message. Please try again.";
    case "ai_config_missing":
      return "Chat service is currently unavailable.";
    default:
      return e.error || "Something went wrong. Please try again.";
  }
};
function Ko() {
  return {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null
  };
}
var as = Ko();
function Gc(e) {
  as = e;
}
var lr = { exec: () => null };
function We(e, t = "") {
  let n = typeof e == "string" ? e : e.source;
  const s = {
    replace: (r, i) => {
      let o = typeof i == "string" ? i : i.source;
      return o = o.replace(Mt.caret, "$1"), n = n.replace(r, o), s;
    },
    getRegex: () => new RegExp(n, t)
  };
  return s;
}
var Mt = {
  codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
  outputLinkReplace: /\\([\[\]])/g,
  indentCodeCompensation: /^(\s+)(?:```)/,
  beginningSpace: /^\s+/,
  endingHash: /#$/,
  startingSpaceChar: /^ /,
  endingSpaceChar: / $/,
  nonSpaceChar: /[^ ]/,
  newLineCharGlobal: /\n/g,
  tabCharGlobal: /\t/g,
  multipleSpaceGlobal: /\s+/g,
  blankLine: /^[ \t]*$/,
  doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
  blockquoteStart: /^ {0,3}>/,
  blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
  blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
  listReplaceTabs: /^\t+/,
  listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
  listIsTask: /^\[[ xX]\] /,
  listReplaceTask: /^\[[ xX]\] +/,
  anyLine: /\n.*\n/,
  hrefBrackets: /^<(.*)>$/,
  tableDelimiter: /[:|]/,
  tableAlignChars: /^\||\| *$/g,
  tableRowBlankLine: /\n[ \t]*$/,
  tableAlignRight: /^ *-+: *$/,
  tableAlignCenter: /^ *:-+: *$/,
  tableAlignLeft: /^ *:-+ *$/,
  startATag: /^<a /i,
  endATag: /^<\/a>/i,
  startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
  endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
  startAngleBracket: /^</,
  endAngleBracket: />$/,
  pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
  unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
  escapeTest: /[&<>"']/,
  escapeReplace: /[&<>"']/g,
  escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
  escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
  unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,
  caret: /(^|[^\[])\^/g,
  percentDecode: /%25/g,
  findPipe: /\|/g,
  splitPipe: / \|/,
  slashPipe: /\\\|/g,
  carriageReturn: /\r\n|\r/g,
  spaceLine: /^ +$/gm,
  notSpaceStart: /^\S*/,
  endingNewline: /\n$/,
  listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),
  nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),
  hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
  fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`),
  headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`),
  htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i")
}, Md = /^(?:[ \t]*(?:\n|$))+/, Pd = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Fd = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, yr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Dd = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Go = /(?:[*+-]|\d{1,9}[.)])/, Yc = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, Xc = We(Yc).replace(/bull/g, Go).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), Bd = We(Yc).replace(/bull/g, Go).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), Yo = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, $d = /^[^\n]+/, Xo = /(?!\s*\])(?:\\.|[^\[\]\\])+/, Ud = We(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Xo).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Hd = We(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Go).getRegex(), bi = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Zo = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, zd = We(
  "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))",
  "i"
).replace("comment", Zo).replace("tag", bi).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Zc = We(Yo).replace("hr", yr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", bi).getRegex(), Wd = We(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Zc).getRegex(), Jo = {
  blockquote: Wd,
  code: Pd,
  def: Ud,
  fences: Fd,
  heading: Dd,
  hr: yr,
  html: zd,
  lheading: Xc,
  list: Hd,
  newline: Md,
  paragraph: Zc,
  table: lr,
  text: $d
}, ul = We(
  "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
).replace("hr", yr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", bi).getRegex(), qd = {
  ...Jo,
  lheading: Bd,
  table: ul,
  paragraph: We(Yo).replace("hr", yr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", ul).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", bi).getRegex()
}, jd = {
  ...Jo,
  html: We(
    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
  ).replace("comment", Zo).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: lr,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: We(Yo).replace("hr", yr).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Xc).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, Vd = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Kd = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Jc = /^( {2,}|\\)\n(?!\s*$)/, Gd = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, wi = /[\p{P}\p{S}]/u, Qo = /[\s\p{P}\p{S}]/u, Qc = /[^\s\p{P}\p{S}]/u, Yd = We(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Qo).getRegex(), eu = /(?!~)[\p{P}\p{S}]/u, Xd = /(?!~)[\s\p{P}\p{S}]/u, Zd = /(?:[^\s\p{P}\p{S}]|~)/u, Jd = /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g, tu = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Qd = We(tu, "u").replace(/punct/g, wi).getRegex(), ep = We(tu, "u").replace(/punct/g, eu).getRegex(), nu = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", tp = We(nu, "gu").replace(/notPunctSpace/g, Qc).replace(/punctSpace/g, Qo).replace(/punct/g, wi).getRegex(), np = We(nu, "gu").replace(/notPunctSpace/g, Zd).replace(/punctSpace/g, Xd).replace(/punct/g, eu).getRegex(), sp = We(
  "^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)",
  "gu"
).replace(/notPunctSpace/g, Qc).replace(/punctSpace/g, Qo).replace(/punct/g, wi).getRegex(), rp = We(/\\(punct)/, "gu").replace(/punct/g, wi).getRegex(), ip = We(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), op = We(Zo).replace("(?:-->|$)", "-->").getRegex(), ap = We(
  "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>"
).replace("comment", op).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), ni = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, lp = We(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", ni).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), su = We(/^!?\[(label)\]\[(ref)\]/).replace("label", ni).replace("ref", Xo).getRegex(), ru = We(/^!?\[(ref)\](?:\[\])?/).replace("ref", Xo).getRegex(), cp = We("reflink|nolink(?!\\()", "g").replace("reflink", su).replace("nolink", ru).getRegex(), ea = {
  _backpedal: lr,
  // only used for GFM url
  anyPunctuation: rp,
  autolink: ip,
  blockSkip: Jd,
  br: Jc,
  code: Kd,
  del: lr,
  emStrongLDelim: Qd,
  emStrongRDelimAst: tp,
  emStrongRDelimUnd: sp,
  escape: Vd,
  link: lp,
  nolink: ru,
  punctuation: Yd,
  reflink: su,
  reflinkSearch: cp,
  tag: ap,
  text: Gd,
  url: lr
}, up = {
  ...ea,
  link: We(/^!?\[(label)\]\((.*?)\)/).replace("label", ni).getRegex(),
  reflink: We(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", ni).getRegex()
}, yo = {
  ...ea,
  emStrongRDelimAst: np,
  emStrongLDelim: ep,
  url: We(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, fp = {
  ...yo,
  br: We(Jc).replace("{2,}", "*").getRegex(),
  text: We(yo.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, Cr = {
  normal: Jo,
  gfm: qd,
  pedantic: jd
}, qs = {
  normal: ea,
  gfm: yo,
  breaks: fp,
  pedantic: up
}, hp = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, fl = (e) => hp[e];
function rn(e, t) {
  if (t) {
    if (Mt.escapeTest.test(e))
      return e.replace(Mt.escapeReplace, fl);
  } else if (Mt.escapeTestNoEncode.test(e))
    return e.replace(Mt.escapeReplaceNoEncode, fl);
  return e;
}
function hl(e) {
  try {
    e = encodeURI(e).replace(Mt.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function dl(e, t) {
  var i;
  const n = e.replace(Mt.findPipe, (o, a, l) => {
    let d = !1, c = a;
    for (; --c >= 0 && l[c] === "\\"; ) d = !d;
    return d ? "|" : " |";
  }), s = n.split(Mt.splitPipe);
  let r = 0;
  if (s[0].trim() || s.shift(), s.length > 0 && !((i = s.at(-1)) != null && i.trim()) && s.pop(), t)
    if (s.length > t)
      s.splice(t);
    else
      for (; s.length < t; ) s.push("");
  for (; r < s.length; r++)
    s[r] = s[r].trim().replace(Mt.slashPipe, "|");
  return s;
}
function js(e, t, n) {
  const s = e.length;
  if (s === 0)
    return "";
  let r = 0;
  for (; r < s && e.charAt(s - r - 1) === t; )
    r++;
  return e.slice(0, s - r);
}
function dp(e, t) {
  if (e.indexOf(t[1]) === -1)
    return -1;
  let n = 0;
  for (let s = 0; s < e.length; s++)
    if (e[s] === "\\")
      s++;
    else if (e[s] === t[0])
      n++;
    else if (e[s] === t[1] && (n--, n < 0))
      return s;
  return n > 0 ? -2 : -1;
}
function pl(e, t, n, s, r) {
  const i = t.href, o = t.title || null, a = e[1].replace(r.other.outputLinkReplace, "$1");
  s.state.inLink = !0;
  const l = {
    type: e[0].charAt(0) === "!" ? "image" : "link",
    raw: n,
    href: i,
    title: o,
    text: a,
    tokens: s.inlineTokens(a)
  };
  return s.state.inLink = !1, l;
}
function pp(e, t, n) {
  const s = e.match(n.other.indentCodeCompensation);
  if (s === null)
    return t;
  const r = s[1];
  return t.split(`
`).map((i) => {
    const o = i.match(n.other.beginningSpace);
    if (o === null)
      return i;
    const [a] = o;
    return a.length >= r.length ? i.slice(r.length) : i;
  }).join(`
`);
}
var si = class {
  // set by the lexer
  constructor(e) {
    Xe(this, "options");
    Xe(this, "rules");
    // set by the lexer
    Xe(this, "lexer");
    this.options = e || as;
  }
  space(e) {
    const t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0)
      return {
        type: "space",
        raw: t[0]
      };
  }
  code(e) {
    const t = this.rules.block.code.exec(e);
    if (t) {
      const n = t[0].replace(this.rules.other.codeRemoveIndent, "");
      return {
        type: "code",
        raw: t[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? n : js(n, `
`)
      };
    }
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const n = t[0], s = pp(n, t[3] || "", this.rules);
      return {
        type: "code",
        raw: n,
        lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
        text: s
      };
    }
  }
  heading(e) {
    const t = this.rules.block.heading.exec(e);
    if (t) {
      let n = t[2].trim();
      if (this.rules.other.endingHash.test(n)) {
        const s = js(n, "#");
        (this.options.pedantic || !s || this.rules.other.endingSpaceChar.test(s)) && (n = s.trim());
      }
      return {
        type: "heading",
        raw: t[0],
        depth: t[1].length,
        text: n,
        tokens: this.lexer.inline(n)
      };
    }
  }
  hr(e) {
    const t = this.rules.block.hr.exec(e);
    if (t)
      return {
        type: "hr",
        raw: js(t[0], `
`)
      };
  }
  blockquote(e) {
    const t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = js(t[0], `
`).split(`
`), s = "", r = "";
      const i = [];
      for (; n.length > 0; ) {
        let o = !1;
        const a = [];
        let l;
        for (l = 0; l < n.length; l++)
          if (this.rules.other.blockquoteStart.test(n[l]))
            a.push(n[l]), o = !0;
          else if (!o)
            a.push(n[l]);
          else
            break;
        n = n.slice(l);
        const d = a.join(`
`), c = d.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        s = s ? `${s}
${d}` : d, r = r ? `${r}
${c}` : c;
        const b = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(c, i, !0), this.lexer.state.top = b, n.length === 0)
          break;
        const w = i.at(-1);
        if ((w == null ? void 0 : w.type) === "code")
          break;
        if ((w == null ? void 0 : w.type) === "blockquote") {
          const D = w, P = D.raw + `
` + n.join(`
`), z = this.blockquote(P);
          i[i.length - 1] = z, s = s.substring(0, s.length - D.raw.length) + z.raw, r = r.substring(0, r.length - D.text.length) + z.text;
          break;
        } else if ((w == null ? void 0 : w.type) === "list") {
          const D = w, P = D.raw + `
` + n.join(`
`), z = this.list(P);
          i[i.length - 1] = z, s = s.substring(0, s.length - w.raw.length) + z.raw, r = r.substring(0, r.length - D.raw.length) + z.raw, n = P.substring(i.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return {
        type: "blockquote",
        raw: s,
        tokens: i,
        text: r
      };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let n = t[1].trim();
      const s = n.length > 1, r = {
        type: "list",
        raw: "",
        ordered: s,
        start: s ? +n.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      n = s ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = s ? n : "[*+-]");
      const i = this.rules.other.listItemRegex(n);
      let o = !1;
      for (; e; ) {
        let l = !1, d = "", c = "";
        if (!(t = i.exec(e)) || this.rules.block.hr.test(e))
          break;
        d = t[0], e = e.substring(d.length);
        let b = t[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (se) => " ".repeat(3 * se.length)), w = e.split(`
`, 1)[0], D = !b.trim(), P = 0;
        if (this.options.pedantic ? (P = 2, c = b.trimStart()) : D ? P = t[1].length + 1 : (P = t[2].search(this.rules.other.nonSpaceChar), P = P > 4 ? 1 : P, c = b.slice(P), P += t[1].length), D && this.rules.other.blankLine.test(w) && (d += w + `
`, e = e.substring(w.length + 1), l = !0), !l) {
          const se = this.rules.other.nextBulletRegex(P), he = this.rules.other.hrRegex(P), ce = this.rules.other.fencesBeginRegex(P), k = this.rules.other.headingBeginRegex(P), R = this.rules.other.htmlBeginRegex(P);
          for (; e; ) {
            const K = e.split(`
`, 1)[0];
            let G;
            if (w = K, this.options.pedantic ? (w = w.replace(this.rules.other.listReplaceNesting, "  "), G = w) : G = w.replace(this.rules.other.tabCharGlobal, "    "), ce.test(w) || k.test(w) || R.test(w) || se.test(w) || he.test(w))
              break;
            if (G.search(this.rules.other.nonSpaceChar) >= P || !w.trim())
              c += `
` + G.slice(P);
            else {
              if (D || b.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || ce.test(b) || k.test(b) || he.test(b))
                break;
              c += `
` + w;
            }
            !D && !w.trim() && (D = !0), d += K + `
`, e = e.substring(K.length + 1), b = G.slice(P);
          }
        }
        r.loose || (o ? r.loose = !0 : this.rules.other.doubleBlankLine.test(d) && (o = !0));
        let z = null, L;
        this.options.gfm && (z = this.rules.other.listIsTask.exec(c), z && (L = z[0] !== "[ ] ", c = c.replace(this.rules.other.listReplaceTask, ""))), r.items.push({
          type: "list_item",
          raw: d,
          task: !!z,
          checked: L,
          loose: !1,
          text: c,
          tokens: []
        }), r.raw += d;
      }
      const a = r.items.at(-1);
      if (a)
        a.raw = a.raw.trimEnd(), a.text = a.text.trimEnd();
      else
        return;
      r.raw = r.raw.trimEnd();
      for (let l = 0; l < r.items.length; l++)
        if (this.lexer.state.top = !1, r.items[l].tokens = this.lexer.blockTokens(r.items[l].text, []), !r.loose) {
          const d = r.items[l].tokens.filter((b) => b.type === "space"), c = d.length > 0 && d.some((b) => this.rules.other.anyLine.test(b.raw));
          r.loose = c;
        }
      if (r.loose)
        for (let l = 0; l < r.items.length; l++)
          r.items[l].loose = !0;
      return r;
    }
  }
  html(e) {
    const t = this.rules.block.html.exec(e);
    if (t)
      return {
        type: "html",
        block: !0,
        raw: t[0],
        pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
        text: t[0]
      };
  }
  def(e) {
    const t = this.rules.block.def.exec(e);
    if (t) {
      const n = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), s = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", r = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
      return {
        type: "def",
        tag: n,
        raw: t[0],
        href: s,
        title: r
      };
    }
  }
  table(e) {
    var o;
    const t = this.rules.block.table.exec(e);
    if (!t || !this.rules.other.tableDelimiter.test(t[2]))
      return;
    const n = dl(t[1]), s = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), r = (o = t[3]) != null && o.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], i = {
      type: "table",
      raw: t[0],
      header: [],
      align: [],
      rows: []
    };
    if (n.length === s.length) {
      for (const a of s)
        this.rules.other.tableAlignRight.test(a) ? i.align.push("right") : this.rules.other.tableAlignCenter.test(a) ? i.align.push("center") : this.rules.other.tableAlignLeft.test(a) ? i.align.push("left") : i.align.push(null);
      for (let a = 0; a < n.length; a++)
        i.header.push({
          text: n[a],
          tokens: this.lexer.inline(n[a]),
          header: !0,
          align: i.align[a]
        });
      for (const a of r)
        i.rows.push(dl(a, i.header.length).map((l, d) => ({
          text: l,
          tokens: this.lexer.inline(l),
          header: !1,
          align: i.align[d]
        })));
      return i;
    }
  }
  lheading(e) {
    const t = this.rules.block.lheading.exec(e);
    if (t)
      return {
        type: "heading",
        raw: t[0],
        depth: t[2].charAt(0) === "=" ? 1 : 2,
        text: t[1],
        tokens: this.lexer.inline(t[1])
      };
  }
  paragraph(e) {
    const t = this.rules.block.paragraph.exec(e);
    if (t) {
      const n = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return {
        type: "paragraph",
        raw: t[0],
        text: n,
        tokens: this.lexer.inline(n)
      };
    }
  }
  text(e) {
    const t = this.rules.block.text.exec(e);
    if (t)
      return {
        type: "text",
        raw: t[0],
        text: t[0],
        tokens: this.lexer.inline(t[0])
      };
  }
  escape(e) {
    const t = this.rules.inline.escape.exec(e);
    if (t)
      return {
        type: "escape",
        raw: t[0],
        text: t[1]
      };
  }
  tag(e) {
    const t = this.rules.inline.tag.exec(e);
    if (t)
      return !this.lexer.state.inLink && this.rules.other.startATag.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
        type: "html",
        raw: t[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: !1,
        text: t[0]
      };
  }
  link(e) {
    const t = this.rules.inline.link.exec(e);
    if (t) {
      const n = t[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(n)) {
        if (!this.rules.other.endAngleBracket.test(n))
          return;
        const i = js(n.slice(0, -1), "\\");
        if ((n.length - i.length) % 2 === 0)
          return;
      } else {
        const i = dp(t[2], "()");
        if (i === -2)
          return;
        if (i > -1) {
          const a = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + i;
          t[2] = t[2].substring(0, i), t[0] = t[0].substring(0, a).trim(), t[3] = "";
        }
      }
      let s = t[2], r = "";
      if (this.options.pedantic) {
        const i = this.rules.other.pedanticHrefTitle.exec(s);
        i && (s = i[1], r = i[3]);
      } else
        r = t[3] ? t[3].slice(1, -1) : "";
      return s = s.trim(), this.rules.other.startAngleBracket.test(s) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? s = s.slice(1) : s = s.slice(1, -1)), pl(t, {
        href: s && s.replace(this.rules.inline.anyPunctuation, "$1"),
        title: r && r.replace(this.rules.inline.anyPunctuation, "$1")
      }, t[0], this.lexer, this.rules);
    }
  }
  reflink(e, t) {
    let n;
    if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
      const s = (n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " "), r = t[s.toLowerCase()];
      if (!r) {
        const i = n[0].charAt(0);
        return {
          type: "text",
          raw: i,
          text: i
        };
      }
      return pl(n, r, n[0], this.lexer, this.rules);
    }
  }
  emStrong(e, t, n = "") {
    let s = this.rules.inline.emStrongLDelim.exec(e);
    if (!s || s[3] && n.match(this.rules.other.unicodeAlphaNumeric)) return;
    if (!(s[1] || s[2] || "") || !n || this.rules.inline.punctuation.exec(n)) {
      const i = [...s[0]].length - 1;
      let o, a, l = i, d = 0;
      const c = s[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (c.lastIndex = 0, t = t.slice(-1 * e.length + i); (s = c.exec(t)) != null; ) {
        if (o = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !o) continue;
        if (a = [...o].length, s[3] || s[4]) {
          l += a;
          continue;
        } else if ((s[5] || s[6]) && i % 3 && !((i + a) % 3)) {
          d += a;
          continue;
        }
        if (l -= a, l > 0) continue;
        a = Math.min(a, a + l + d);
        const b = [...s[0]][0].length, w = e.slice(0, i + s.index + b + a);
        if (Math.min(i, a) % 2) {
          const P = w.slice(1, -1);
          return {
            type: "em",
            raw: w,
            text: P,
            tokens: this.lexer.inlineTokens(P)
          };
        }
        const D = w.slice(2, -2);
        return {
          type: "strong",
          raw: w,
          text: D,
          tokens: this.lexer.inlineTokens(D)
        };
      }
    }
  }
  codespan(e) {
    const t = this.rules.inline.code.exec(e);
    if (t) {
      let n = t[2].replace(this.rules.other.newLineCharGlobal, " ");
      const s = this.rules.other.nonSpaceChar.test(n), r = this.rules.other.startingSpaceChar.test(n) && this.rules.other.endingSpaceChar.test(n);
      return s && r && (n = n.substring(1, n.length - 1)), {
        type: "codespan",
        raw: t[0],
        text: n
      };
    }
  }
  br(e) {
    const t = this.rules.inline.br.exec(e);
    if (t)
      return {
        type: "br",
        raw: t[0]
      };
  }
  del(e) {
    const t = this.rules.inline.del.exec(e);
    if (t)
      return {
        type: "del",
        raw: t[0],
        text: t[2],
        tokens: this.lexer.inlineTokens(t[2])
      };
  }
  autolink(e) {
    const t = this.rules.inline.autolink.exec(e);
    if (t) {
      let n, s;
      return t[2] === "@" ? (n = t[1], s = "mailto:" + n) : (n = t[1], s = n), {
        type: "link",
        raw: t[0],
        text: n,
        href: s,
        tokens: [
          {
            type: "text",
            raw: n,
            text: n
          }
        ]
      };
    }
  }
  url(e) {
    var n;
    let t;
    if (t = this.rules.inline.url.exec(e)) {
      let s, r;
      if (t[2] === "@")
        s = t[0], r = "mailto:" + s;
      else {
        let i;
        do
          i = t[0], t[0] = ((n = this.rules.inline._backpedal.exec(t[0])) == null ? void 0 : n[0]) ?? "";
        while (i !== t[0]);
        s = t[0], t[1] === "www." ? r = "http://" + t[0] : r = t[0];
      }
      return {
        type: "link",
        raw: t[0],
        text: s,
        href: r,
        tokens: [
          {
            type: "text",
            raw: s,
            text: s
          }
        ]
      };
    }
  }
  inlineText(e) {
    const t = this.rules.inline.text.exec(e);
    if (t) {
      const n = this.lexer.state.inRawBlock;
      return {
        type: "text",
        raw: t[0],
        text: t[0],
        escaped: n
      };
    }
  }
}, bn = class vo {
  constructor(t) {
    Xe(this, "tokens");
    Xe(this, "options");
    Xe(this, "state");
    Xe(this, "tokenizer");
    Xe(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || as, this.options.tokenizer = this.options.tokenizer || new si(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const n = {
      other: Mt,
      block: Cr.normal,
      inline: qs.normal
    };
    this.options.pedantic ? (n.block = Cr.pedantic, n.inline = qs.pedantic) : this.options.gfm && (n.block = Cr.gfm, this.options.breaks ? n.inline = qs.breaks : n.inline = qs.gfm), this.tokenizer.rules = n;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: Cr,
      inline: qs
    };
  }
  /**
   * Static Lex Method
   */
  static lex(t, n) {
    return new vo(n).lex(t);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(t, n) {
    return new vo(n).inlineTokens(t);
  }
  /**
   * Preprocessing
   */
  lex(t) {
    t = t.replace(Mt.carriageReturn, `
`), this.blockTokens(t, this.tokens);
    for (let n = 0; n < this.inlineQueue.length; n++) {
      const s = this.inlineQueue[n];
      this.inlineTokens(s.src, s.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, n = [], s = !1) {
    var r, i, o;
    for (this.options.pedantic && (t = t.replace(Mt.tabCharGlobal, "    ").replace(Mt.spaceLine, "")); t; ) {
      let a;
      if ((i = (r = this.options.extensions) == null ? void 0 : r.block) != null && i.some((d) => (a = d.call({ lexer: this }, t, n)) ? (t = t.substring(a.raw.length), n.push(a), !0) : !1))
        continue;
      if (a = this.tokenizer.space(t)) {
        t = t.substring(a.raw.length);
        const d = n.at(-1);
        a.raw.length === 1 && d !== void 0 ? d.raw += `
` : n.push(a);
        continue;
      }
      if (a = this.tokenizer.code(t)) {
        t = t.substring(a.raw.length);
        const d = n.at(-1);
        (d == null ? void 0 : d.type) === "paragraph" || (d == null ? void 0 : d.type) === "text" ? (d.raw += `
` + a.raw, d.text += `
` + a.text, this.inlineQueue.at(-1).src = d.text) : n.push(a);
        continue;
      }
      if (a = this.tokenizer.fences(t)) {
        t = t.substring(a.raw.length), n.push(a);
        continue;
      }
      if (a = this.tokenizer.heading(t)) {
        t = t.substring(a.raw.length), n.push(a);
        continue;
      }
      if (a = this.tokenizer.hr(t)) {
        t = t.substring(a.raw.length), n.push(a);
        continue;
      }
      if (a = this.tokenizer.blockquote(t)) {
        t = t.substring(a.raw.length), n.push(a);
        continue;
      }
      if (a = this.tokenizer.list(t)) {
        t = t.substring(a.raw.length), n.push(a);
        continue;
      }
      if (a = this.tokenizer.html(t)) {
        t = t.substring(a.raw.length), n.push(a);
        continue;
      }
      if (a = this.tokenizer.def(t)) {
        t = t.substring(a.raw.length);
        const d = n.at(-1);
        (d == null ? void 0 : d.type) === "paragraph" || (d == null ? void 0 : d.type) === "text" ? (d.raw += `
` + a.raw, d.text += `
` + a.raw, this.inlineQueue.at(-1).src = d.text) : this.tokens.links[a.tag] || (this.tokens.links[a.tag] = {
          href: a.href,
          title: a.title
        });
        continue;
      }
      if (a = this.tokenizer.table(t)) {
        t = t.substring(a.raw.length), n.push(a);
        continue;
      }
      if (a = this.tokenizer.lheading(t)) {
        t = t.substring(a.raw.length), n.push(a);
        continue;
      }
      let l = t;
      if ((o = this.options.extensions) != null && o.startBlock) {
        let d = 1 / 0;
        const c = t.slice(1);
        let b;
        this.options.extensions.startBlock.forEach((w) => {
          b = w.call({ lexer: this }, c), typeof b == "number" && b >= 0 && (d = Math.min(d, b));
        }), d < 1 / 0 && d >= 0 && (l = t.substring(0, d + 1));
      }
      if (this.state.top && (a = this.tokenizer.paragraph(l))) {
        const d = n.at(-1);
        s && (d == null ? void 0 : d.type) === "paragraph" ? (d.raw += `
` + a.raw, d.text += `
` + a.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = d.text) : n.push(a), s = l.length !== t.length, t = t.substring(a.raw.length);
        continue;
      }
      if (a = this.tokenizer.text(t)) {
        t = t.substring(a.raw.length);
        const d = n.at(-1);
        (d == null ? void 0 : d.type) === "text" ? (d.raw += `
` + a.raw, d.text += `
` + a.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = d.text) : n.push(a);
        continue;
      }
      if (t) {
        const d = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(d);
          break;
        } else
          throw new Error(d);
      }
    }
    return this.state.top = !0, n;
  }
  inline(t, n = []) {
    return this.inlineQueue.push({ src: t, tokens: n }), n;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(t, n = []) {
    var a, l, d;
    let s = t, r = null;
    if (this.tokens.links) {
      const c = Object.keys(this.tokens.links);
      if (c.length > 0)
        for (; (r = this.tokenizer.rules.inline.reflinkSearch.exec(s)) != null; )
          c.includes(r[0].slice(r[0].lastIndexOf("[") + 1, -1)) && (s = s.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + s.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (r = this.tokenizer.rules.inline.anyPunctuation.exec(s)) != null; )
      s = s.slice(0, r.index) + "++" + s.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; (r = this.tokenizer.rules.inline.blockSkip.exec(s)) != null; )
      s = s.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    let i = !1, o = "";
    for (; t; ) {
      i || (o = ""), i = !1;
      let c;
      if ((l = (a = this.options.extensions) == null ? void 0 : a.inline) != null && l.some((w) => (c = w.call({ lexer: this }, t, n)) ? (t = t.substring(c.raw.length), n.push(c), !0) : !1))
        continue;
      if (c = this.tokenizer.escape(t)) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      if (c = this.tokenizer.tag(t)) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      if (c = this.tokenizer.link(t)) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      if (c = this.tokenizer.reflink(t, this.tokens.links)) {
        t = t.substring(c.raw.length);
        const w = n.at(-1);
        c.type === "text" && (w == null ? void 0 : w.type) === "text" ? (w.raw += c.raw, w.text += c.text) : n.push(c);
        continue;
      }
      if (c = this.tokenizer.emStrong(t, s, o)) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      if (c = this.tokenizer.codespan(t)) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      if (c = this.tokenizer.br(t)) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      if (c = this.tokenizer.del(t)) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      if (c = this.tokenizer.autolink(t)) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      if (!this.state.inLink && (c = this.tokenizer.url(t))) {
        t = t.substring(c.raw.length), n.push(c);
        continue;
      }
      let b = t;
      if ((d = this.options.extensions) != null && d.startInline) {
        let w = 1 / 0;
        const D = t.slice(1);
        let P;
        this.options.extensions.startInline.forEach((z) => {
          P = z.call({ lexer: this }, D), typeof P == "number" && P >= 0 && (w = Math.min(w, P));
        }), w < 1 / 0 && w >= 0 && (b = t.substring(0, w + 1));
      }
      if (c = this.tokenizer.inlineText(b)) {
        t = t.substring(c.raw.length), c.raw.slice(-1) !== "_" && (o = c.raw.slice(-1)), i = !0;
        const w = n.at(-1);
        (w == null ? void 0 : w.type) === "text" ? (w.raw += c.raw, w.text += c.text) : n.push(c);
        continue;
      }
      if (t) {
        const w = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(w);
          break;
        } else
          throw new Error(w);
      }
    }
    return n;
  }
}, ri = class {
  // set by the parser
  constructor(e) {
    Xe(this, "options");
    Xe(this, "parser");
    this.options = e || as;
  }
  space(e) {
    return "";
  }
  code({ text: e, lang: t, escaped: n }) {
    var i;
    const s = (i = (t || "").match(Mt.notSpaceStart)) == null ? void 0 : i[0], r = e.replace(Mt.endingNewline, "") + `
`;
    return s ? '<pre><code class="language-' + rn(s) + '">' + (n ? r : rn(r, !0)) + `</code></pre>
` : "<pre><code>" + (n ? r : rn(r, !0)) + `</code></pre>
`;
  }
  blockquote({ tokens: e }) {
    return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
  }
  html({ text: e }) {
    return e;
  }
  heading({ tokens: e, depth: t }) {
    return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
  }
  hr(e) {
    return `<hr>
`;
  }
  list(e) {
    const t = e.ordered, n = e.start;
    let s = "";
    for (let o = 0; o < e.items.length; o++) {
      const a = e.items[o];
      s += this.listitem(a);
    }
    const r = t ? "ol" : "ul", i = t && n !== 1 ? ' start="' + n + '"' : "";
    return "<" + r + i + `>
` + s + "</" + r + `>
`;
  }
  listitem(e) {
    var n;
    let t = "";
    if (e.task) {
      const s = this.checkbox({ checked: !!e.checked });
      e.loose ? ((n = e.tokens[0]) == null ? void 0 : n.type) === "paragraph" ? (e.tokens[0].text = s + " " + e.tokens[0].text, e.tokens[0].tokens && e.tokens[0].tokens.length > 0 && e.tokens[0].tokens[0].type === "text" && (e.tokens[0].tokens[0].text = s + " " + rn(e.tokens[0].tokens[0].text), e.tokens[0].tokens[0].escaped = !0)) : e.tokens.unshift({
        type: "text",
        raw: s + " ",
        text: s + " ",
        escaped: !0
      }) : t += s + " ";
    }
    return t += this.parser.parse(e.tokens, !!e.loose), `<li>${t}</li>
`;
  }
  checkbox({ checked: e }) {
    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens: e }) {
    return `<p>${this.parser.parseInline(e)}</p>
`;
  }
  table(e) {
    let t = "", n = "";
    for (let r = 0; r < e.header.length; r++)
      n += this.tablecell(e.header[r]);
    t += this.tablerow({ text: n });
    let s = "";
    for (let r = 0; r < e.rows.length; r++) {
      const i = e.rows[r];
      n = "";
      for (let o = 0; o < i.length; o++)
        n += this.tablecell(i[o]);
      s += this.tablerow({ text: n });
    }
    return s && (s = `<tbody>${s}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + s + `</table>
`;
  }
  tablerow({ text: e }) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e) {
    const t = this.parser.parseInline(e.tokens), n = e.header ? "th" : "td";
    return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>
`;
  }
  /**
   * span level renderer
   */
  strong({ tokens: e }) {
    return `<strong>${this.parser.parseInline(e)}</strong>`;
  }
  em({ tokens: e }) {
    return `<em>${this.parser.parseInline(e)}</em>`;
  }
  codespan({ text: e }) {
    return `<code>${rn(e, !0)}</code>`;
  }
  br(e) {
    return "<br>";
  }
  del({ tokens: e }) {
    return `<del>${this.parser.parseInline(e)}</del>`;
  }
  link({ href: e, title: t, tokens: n }) {
    const s = this.parser.parseInline(n), r = hl(e);
    if (r === null)
      return s;
    e = r;
    let i = '<a href="' + e + '"';
    return t && (i += ' title="' + rn(t) + '"'), i += ">" + s + "</a>", i;
  }
  image({ href: e, title: t, text: n, tokens: s }) {
    s && (n = this.parser.parseInline(s, this.parser.textRenderer));
    const r = hl(e);
    if (r === null)
      return rn(n);
    e = r;
    let i = `<img src="${e}" alt="${n}"`;
    return t && (i += ` title="${rn(t)}"`), i += ">", i;
  }
  text(e) {
    return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : rn(e.text);
  }
}, ta = class {
  // no need for block level renderers
  strong({ text: e }) {
    return e;
  }
  em({ text: e }) {
    return e;
  }
  codespan({ text: e }) {
    return e;
  }
  del({ text: e }) {
    return e;
  }
  html({ text: e }) {
    return e;
  }
  text({ text: e }) {
    return e;
  }
  link({ text: e }) {
    return "" + e;
  }
  image({ text: e }) {
    return "" + e;
  }
  br() {
    return "";
  }
}, wn = class bo {
  constructor(t) {
    Xe(this, "options");
    Xe(this, "renderer");
    Xe(this, "textRenderer");
    this.options = t || as, this.options.renderer = this.options.renderer || new ri(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new ta();
  }
  /**
   * Static Parse Method
   */
  static parse(t, n) {
    return new bo(n).parse(t);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(t, n) {
    return new bo(n).parseInline(t);
  }
  /**
   * Parse Loop
   */
  parse(t, n = !0) {
    var r, i;
    let s = "";
    for (let o = 0; o < t.length; o++) {
      const a = t[o];
      if ((i = (r = this.options.extensions) == null ? void 0 : r.renderers) != null && i[a.type]) {
        const d = a, c = this.options.extensions.renderers[d.type].call({ parser: this }, d);
        if (c !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(d.type)) {
          s += c || "";
          continue;
        }
      }
      const l = a;
      switch (l.type) {
        case "space": {
          s += this.renderer.space(l);
          continue;
        }
        case "hr": {
          s += this.renderer.hr(l);
          continue;
        }
        case "heading": {
          s += this.renderer.heading(l);
          continue;
        }
        case "code": {
          s += this.renderer.code(l);
          continue;
        }
        case "table": {
          s += this.renderer.table(l);
          continue;
        }
        case "blockquote": {
          s += this.renderer.blockquote(l);
          continue;
        }
        case "list": {
          s += this.renderer.list(l);
          continue;
        }
        case "html": {
          s += this.renderer.html(l);
          continue;
        }
        case "paragraph": {
          s += this.renderer.paragraph(l);
          continue;
        }
        case "text": {
          let d = l, c = this.renderer.text(d);
          for (; o + 1 < t.length && t[o + 1].type === "text"; )
            d = t[++o], c += `
` + this.renderer.text(d);
          n ? s += this.renderer.paragraph({
            type: "paragraph",
            raw: c,
            text: c,
            tokens: [{ type: "text", raw: c, text: c, escaped: !0 }]
          }) : s += c;
          continue;
        }
        default: {
          const d = 'Token with "' + l.type + '" type was not found.';
          if (this.options.silent)
            return console.error(d), "";
          throw new Error(d);
        }
      }
    }
    return s;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(t, n = this.renderer) {
    var r, i;
    let s = "";
    for (let o = 0; o < t.length; o++) {
      const a = t[o];
      if ((i = (r = this.options.extensions) == null ? void 0 : r.renderers) != null && i[a.type]) {
        const d = this.options.extensions.renderers[a.type].call({ parser: this }, a);
        if (d !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(a.type)) {
          s += d || "";
          continue;
        }
      }
      const l = a;
      switch (l.type) {
        case "escape": {
          s += n.text(l);
          break;
        }
        case "html": {
          s += n.html(l);
          break;
        }
        case "link": {
          s += n.link(l);
          break;
        }
        case "image": {
          s += n.image(l);
          break;
        }
        case "strong": {
          s += n.strong(l);
          break;
        }
        case "em": {
          s += n.em(l);
          break;
        }
        case "codespan": {
          s += n.codespan(l);
          break;
        }
        case "br": {
          s += n.br(l);
          break;
        }
        case "del": {
          s += n.del(l);
          break;
        }
        case "text": {
          s += n.text(l);
          break;
        }
        default: {
          const d = 'Token with "' + l.type + '" type was not found.';
          if (this.options.silent)
            return console.error(d), "";
          throw new Error(d);
        }
      }
    }
    return s;
  }
}, so, $r = (so = class {
  constructor(e) {
    Xe(this, "options");
    Xe(this, "block");
    this.options = e || as;
  }
  /**
   * Process markdown before marked
   */
  preprocess(e) {
    return e;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(e) {
    return e;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(e) {
    return e;
  }
  /**
   * Provide function to tokenize markdown
   */
  provideLexer() {
    return this.block ? bn.lex : bn.lexInline;
  }
  /**
   * Provide function to parse tokens
   */
  provideParser() {
    return this.block ? wn.parse : wn.parseInline;
  }
}, Xe(so, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
])), so), gp = class {
  constructor(...e) {
    Xe(this, "defaults", Ko());
    Xe(this, "options", this.setOptions);
    Xe(this, "parse", this.parseMarkdown(!0));
    Xe(this, "parseInline", this.parseMarkdown(!1));
    Xe(this, "Parser", wn);
    Xe(this, "Renderer", ri);
    Xe(this, "TextRenderer", ta);
    Xe(this, "Lexer", bn);
    Xe(this, "Tokenizer", si);
    Xe(this, "Hooks", $r);
    this.use(...e);
  }
  /**
   * Run callback for every token
   */
  walkTokens(e, t) {
    var s, r;
    let n = [];
    for (const i of e)
      switch (n = n.concat(t.call(this, i)), i.type) {
        case "table": {
          const o = i;
          for (const a of o.header)
            n = n.concat(this.walkTokens(a.tokens, t));
          for (const a of o.rows)
            for (const l of a)
              n = n.concat(this.walkTokens(l.tokens, t));
          break;
        }
        case "list": {
          const o = i;
          n = n.concat(this.walkTokens(o.items, t));
          break;
        }
        default: {
          const o = i;
          (r = (s = this.defaults.extensions) == null ? void 0 : s.childTokens) != null && r[o.type] ? this.defaults.extensions.childTokens[o.type].forEach((a) => {
            const l = o[a].flat(1 / 0);
            n = n.concat(this.walkTokens(l, t));
          }) : o.tokens && (n = n.concat(this.walkTokens(o.tokens, t)));
        }
      }
    return n;
  }
  use(...e) {
    const t = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e.forEach((n) => {
      const s = { ...n };
      if (s.async = this.defaults.async || s.async || !1, n.extensions && (n.extensions.forEach((r) => {
        if (!r.name)
          throw new Error("extension name required");
        if ("renderer" in r) {
          const i = t.renderers[r.name];
          i ? t.renderers[r.name] = function(...o) {
            let a = r.renderer.apply(this, o);
            return a === !1 && (a = i.apply(this, o)), a;
          } : t.renderers[r.name] = r.renderer;
        }
        if ("tokenizer" in r) {
          if (!r.level || r.level !== "block" && r.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const i = t[r.level];
          i ? i.unshift(r.tokenizer) : t[r.level] = [r.tokenizer], r.start && (r.level === "block" ? t.startBlock ? t.startBlock.push(r.start) : t.startBlock = [r.start] : r.level === "inline" && (t.startInline ? t.startInline.push(r.start) : t.startInline = [r.start]));
        }
        "childTokens" in r && r.childTokens && (t.childTokens[r.name] = r.childTokens);
      }), s.extensions = t), n.renderer) {
        const r = this.defaults.renderer || new ri(this.defaults);
        for (const i in n.renderer) {
          if (!(i in r))
            throw new Error(`renderer '${i}' does not exist`);
          if (["options", "parser"].includes(i))
            continue;
          const o = i, a = n.renderer[o], l = r[o];
          r[o] = (...d) => {
            let c = a.apply(r, d);
            return c === !1 && (c = l.apply(r, d)), c || "";
          };
        }
        s.renderer = r;
      }
      if (n.tokenizer) {
        const r = this.defaults.tokenizer || new si(this.defaults);
        for (const i in n.tokenizer) {
          if (!(i in r))
            throw new Error(`tokenizer '${i}' does not exist`);
          if (["options", "rules", "lexer"].includes(i))
            continue;
          const o = i, a = n.tokenizer[o], l = r[o];
          r[o] = (...d) => {
            let c = a.apply(r, d);
            return c === !1 && (c = l.apply(r, d)), c;
          };
        }
        s.tokenizer = r;
      }
      if (n.hooks) {
        const r = this.defaults.hooks || new $r();
        for (const i in n.hooks) {
          if (!(i in r))
            throw new Error(`hook '${i}' does not exist`);
          if (["options", "block"].includes(i))
            continue;
          const o = i, a = n.hooks[o], l = r[o];
          $r.passThroughHooks.has(i) ? r[o] = (d) => {
            if (this.defaults.async)
              return Promise.resolve(a.call(r, d)).then((b) => l.call(r, b));
            const c = a.call(r, d);
            return l.call(r, c);
          } : r[o] = (...d) => {
            let c = a.apply(r, d);
            return c === !1 && (c = l.apply(r, d)), c;
          };
        }
        s.hooks = r;
      }
      if (n.walkTokens) {
        const r = this.defaults.walkTokens, i = n.walkTokens;
        s.walkTokens = function(o) {
          let a = [];
          return a.push(i.call(this, o)), r && (a = a.concat(r.call(this, o))), a;
        };
      }
      this.defaults = { ...this.defaults, ...s };
    }), this;
  }
  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this;
  }
  lexer(e, t) {
    return bn.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return wn.parse(e, t ?? this.defaults);
  }
  parseMarkdown(e) {
    return (n, s) => {
      const r = { ...s }, i = { ...this.defaults, ...r }, o = this.onError(!!i.silent, !!i.async);
      if (this.defaults.async === !0 && r.async === !1)
        return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof n > "u" || n === null)
        return o(new Error("marked(): input parameter is undefined or null"));
      if (typeof n != "string")
        return o(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
      i.hooks && (i.hooks.options = i, i.hooks.block = e);
      const a = i.hooks ? i.hooks.provideLexer() : e ? bn.lex : bn.lexInline, l = i.hooks ? i.hooks.provideParser() : e ? wn.parse : wn.parseInline;
      if (i.async)
        return Promise.resolve(i.hooks ? i.hooks.preprocess(n) : n).then((d) => a(d, i)).then((d) => i.hooks ? i.hooks.processAllTokens(d) : d).then((d) => i.walkTokens ? Promise.all(this.walkTokens(d, i.walkTokens)).then(() => d) : d).then((d) => l(d, i)).then((d) => i.hooks ? i.hooks.postprocess(d) : d).catch(o);
      try {
        i.hooks && (n = i.hooks.preprocess(n));
        let d = a(n, i);
        i.hooks && (d = i.hooks.processAllTokens(d)), i.walkTokens && this.walkTokens(d, i.walkTokens);
        let c = l(d, i);
        return i.hooks && (c = i.hooks.postprocess(c)), c;
      } catch (d) {
        return o(d);
      }
    };
  }
  onError(e, t) {
    return (n) => {
      if (n.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
        const s = "<p>An error occurred:</p><pre>" + rn(n.message + "", !0) + "</pre>";
        return t ? Promise.resolve(s) : s;
      }
      if (t)
        return Promise.reject(n);
      throw n;
    };
  }
}, is = new gp();
function Be(e, t) {
  return is.parse(e, t);
}
Be.options = Be.setOptions = function(e) {
  return is.setOptions(e), Be.defaults = is.defaults, Gc(Be.defaults), Be;
};
Be.getDefaults = Ko;
Be.defaults = as;
Be.use = function(...e) {
  return is.use(...e), Be.defaults = is.defaults, Gc(Be.defaults), Be;
};
Be.walkTokens = function(e, t) {
  return is.walkTokens(e, t);
};
Be.parseInline = is.parseInline;
Be.Parser = wn;
Be.parser = wn.parse;
Be.Renderer = ri;
Be.TextRenderer = ta;
Be.Lexer = bn;
Be.lexer = bn.lex;
Be.Tokenizer = si;
Be.Hooks = $r;
Be.parse = Be;
Be.options;
Be.setOptions;
Be.use;
Be.walkTokens;
Be.parseInline;
wn.parse;
bn.lex;
/*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE */
const {
  entries: iu,
  setPrototypeOf: gl,
  isFrozen: mp,
  getPrototypeOf: _p,
  getOwnPropertyDescriptor: yp
} = Object;
let {
  freeze: Pt,
  seal: Xt,
  create: ou
} = Object, {
  apply: wo,
  construct: ko
} = typeof Reflect < "u" && Reflect;
Pt || (Pt = function(t) {
  return t;
});
Xt || (Xt = function(t) {
  return t;
});
wo || (wo = function(t, n, s) {
  return t.apply(n, s);
});
ko || (ko = function(t, n) {
  return new t(...n);
});
const Rr = Ft(Array.prototype.forEach), vp = Ft(Array.prototype.lastIndexOf), ml = Ft(Array.prototype.pop), Vs = Ft(Array.prototype.push), bp = Ft(Array.prototype.splice), Ur = Ft(String.prototype.toLowerCase), ji = Ft(String.prototype.toString), _l = Ft(String.prototype.match), Ks = Ft(String.prototype.replace), wp = Ft(String.prototype.indexOf), kp = Ft(String.prototype.trim), Qt = Ft(Object.prototype.hasOwnProperty), Ct = Ft(RegExp.prototype.test), Gs = xp(TypeError);
function Ft(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, s = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
      s[r - 1] = arguments[r];
    return wo(e, t, s);
  };
}
function xp(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), s = 0; s < t; s++)
      n[s] = arguments[s];
    return ko(e, n);
  };
}
function Re(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ur;
  gl && gl(e, null);
  let s = t.length;
  for (; s--; ) {
    let r = t[s];
    if (typeof r == "string") {
      const i = n(r);
      i !== r && (mp(t) || (t[s] = i), r = i);
    }
    e[r] = !0;
  }
  return e;
}
function Tp(e) {
  for (let t = 0; t < e.length; t++)
    Qt(e, t) || (e[t] = null);
  return e;
}
function mn(e) {
  const t = ou(null);
  for (const [n, s] of iu(e))
    Qt(e, n) && (Array.isArray(s) ? t[n] = Tp(s) : s && typeof s == "object" && s.constructor === Object ? t[n] = mn(s) : t[n] = s);
  return t;
}
function Ys(e, t) {
  for (; e !== null; ) {
    const s = yp(e, t);
    if (s) {
      if (s.get)
        return Ft(s.get);
      if (typeof s.value == "function")
        return Ft(s.value);
    }
    e = _p(e);
  }
  function n() {
    return null;
  }
  return n;
}
const yl = Pt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Vi = Pt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ki = Pt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ap = Pt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Gi = Pt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Ep = Pt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), vl = Pt(["#text"]), bl = Pt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Yi = Pt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), wl = Pt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ir = Pt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Sp = Xt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Cp = Xt(/<%[\w\W]*|[\w\W]*%>/gm), Rp = Xt(/\$\{[\w\W]*/gm), Ip = Xt(/^data-[\-\w.\u00B7-\uFFFF]+$/), Lp = Xt(/^aria-[\-\w]+$/), au = Xt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Op = Xt(/^(?:\w+script|data):/i), Np = Xt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), lu = Xt(/^html$/i), Mp = Xt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var kl = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Lp,
  ATTR_WHITESPACE: Np,
  CUSTOM_ELEMENT: Mp,
  DATA_ATTR: Ip,
  DOCTYPE_NAME: lu,
  ERB_EXPR: Cp,
  IS_ALLOWED_URI: au,
  IS_SCRIPT_OR_DATA: Op,
  MUSTACHE_EXPR: Sp,
  TMPLIT_EXPR: Rp
});
const Xs = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Pp = function() {
  return typeof window > "u" ? null : window;
}, Fp = function(t, n) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let s = null;
  const r = "data-tt-policy-suffix";
  n && n.hasAttribute(r) && (s = n.getAttribute(r));
  const i = "dompurify" + (s ? "#" + s : "");
  try {
    return t.createPolicy(i, {
      createHTML(o) {
        return o;
      },
      createScriptURL(o) {
        return o;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + i + " could not be created."), null;
  }
}, xl = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function cu() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Pp();
  const t = (oe) => cu(oe);
  if (t.version = "3.2.6", t.removed = [], !e || !e.document || e.document.nodeType !== Xs.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: n
  } = e;
  const s = n, r = s.currentScript, {
    DocumentFragment: i,
    HTMLTemplateElement: o,
    Node: a,
    Element: l,
    NodeFilter: d,
    NamedNodeMap: c = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: b,
    DOMParser: w,
    trustedTypes: D
  } = e, P = l.prototype, z = Ys(P, "cloneNode"), L = Ys(P, "remove"), se = Ys(P, "nextSibling"), he = Ys(P, "childNodes"), ce = Ys(P, "parentNode");
  if (typeof o == "function") {
    const oe = n.createElement("template");
    oe.content && oe.content.ownerDocument && (n = oe.content.ownerDocument);
  }
  let k, R = "";
  const {
    implementation: K,
    createNodeIterator: G,
    createDocumentFragment: Se,
    getElementsByTagName: Ne
  } = n, {
    importNode: Me
  } = s;
  let xe = xl();
  t.isSupported = typeof iu == "function" && typeof ce == "function" && K && K.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: ve,
    ERB_EXPR: $e,
    TMPLIT_EXPR: qe,
    DATA_ATTR: Qe,
    ARIA_ATTR: de,
    IS_SCRIPT_OR_DATA: _e,
    ATTR_WHITESPACE: ue,
    CUSTOM_ELEMENT: st
  } = kl;
  let {
    IS_ALLOWED_URI: et
  } = kl, Te = null;
  const we = Re({}, [...yl, ...Vi, ...Ki, ...Gi, ...vl]);
  let Pe = null;
  const tt = Re({}, [...bl, ...Yi, ...wl, ...Ir]);
  let Ce = Object.seal(ou(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), ct = null, it = null, ut = !0, vt = !0, yt = !1, qt = !0, g = !1, _ = !0, E = !1, U = !1, F = !1, M = !1, j = !1, q = !1, W = !0, B = !1;
  const X = "user-content-";
  let V = !0, Z = !1, ie = {}, me = null;
  const N = Re({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let I = null;
  const J = Re({}, ["audio", "video", "img", "source", "image", "track"]);
  let ee = null;
  const Ie = Re({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), h = "http://www.w3.org/1998/Math/MathML", m = "http://www.w3.org/2000/svg", C = "http://www.w3.org/1999/xhtml";
  let T = C, $ = !1, Y = null;
  const te = Re({}, [h, m, C], ji);
  let pe = Re({}, ["mi", "mo", "mn", "ms", "mtext"]), Le = Re({}, ["annotation-xml"]);
  const Ke = Re({}, ["title", "style", "font", "a", "script"]);
  let Ae = null;
  const pt = ["application/xhtml+xml", "text/html"], gt = "text/html";
  let je = null, nn = null;
  const ls = n.createElement("form"), Rs = function(y) {
    return y instanceof RegExp || y instanceof Function;
  }, cs = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(nn && nn === y)) {
      if ((!y || typeof y != "object") && (y = {}), y = mn(y), Ae = // eslint-disable-next-line unicorn/prefer-includes
      pt.indexOf(y.PARSER_MEDIA_TYPE) === -1 ? gt : y.PARSER_MEDIA_TYPE, je = Ae === "application/xhtml+xml" ? ji : Ur, Te = Qt(y, "ALLOWED_TAGS") ? Re({}, y.ALLOWED_TAGS, je) : we, Pe = Qt(y, "ALLOWED_ATTR") ? Re({}, y.ALLOWED_ATTR, je) : tt, Y = Qt(y, "ALLOWED_NAMESPACES") ? Re({}, y.ALLOWED_NAMESPACES, ji) : te, ee = Qt(y, "ADD_URI_SAFE_ATTR") ? Re(mn(Ie), y.ADD_URI_SAFE_ATTR, je) : Ie, I = Qt(y, "ADD_DATA_URI_TAGS") ? Re(mn(J), y.ADD_DATA_URI_TAGS, je) : J, me = Qt(y, "FORBID_CONTENTS") ? Re({}, y.FORBID_CONTENTS, je) : N, ct = Qt(y, "FORBID_TAGS") ? Re({}, y.FORBID_TAGS, je) : mn({}), it = Qt(y, "FORBID_ATTR") ? Re({}, y.FORBID_ATTR, je) : mn({}), ie = Qt(y, "USE_PROFILES") ? y.USE_PROFILES : !1, ut = y.ALLOW_ARIA_ATTR !== !1, vt = y.ALLOW_DATA_ATTR !== !1, yt = y.ALLOW_UNKNOWN_PROTOCOLS || !1, qt = y.ALLOW_SELF_CLOSE_IN_ATTR !== !1, g = y.SAFE_FOR_TEMPLATES || !1, _ = y.SAFE_FOR_XML !== !1, E = y.WHOLE_DOCUMENT || !1, M = y.RETURN_DOM || !1, j = y.RETURN_DOM_FRAGMENT || !1, q = y.RETURN_TRUSTED_TYPE || !1, F = y.FORCE_BODY || !1, W = y.SANITIZE_DOM !== !1, B = y.SANITIZE_NAMED_PROPS || !1, V = y.KEEP_CONTENT !== !1, Z = y.IN_PLACE || !1, et = y.ALLOWED_URI_REGEXP || au, T = y.NAMESPACE || C, pe = y.MATHML_TEXT_INTEGRATION_POINTS || pe, Le = y.HTML_INTEGRATION_POINTS || Le, Ce = y.CUSTOM_ELEMENT_HANDLING || {}, y.CUSTOM_ELEMENT_HANDLING && Rs(y.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Ce.tagNameCheck = y.CUSTOM_ELEMENT_HANDLING.tagNameCheck), y.CUSTOM_ELEMENT_HANDLING && Rs(y.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Ce.attributeNameCheck = y.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), y.CUSTOM_ELEMENT_HANDLING && typeof y.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (Ce.allowCustomizedBuiltInElements = y.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), g && (vt = !1), j && (M = !0), ie && (Te = Re({}, vl), Pe = [], ie.html === !0 && (Re(Te, yl), Re(Pe, bl)), ie.svg === !0 && (Re(Te, Vi), Re(Pe, Yi), Re(Pe, Ir)), ie.svgFilters === !0 && (Re(Te, Ki), Re(Pe, Yi), Re(Pe, Ir)), ie.mathMl === !0 && (Re(Te, Gi), Re(Pe, wl), Re(Pe, Ir))), y.ADD_TAGS && (Te === we && (Te = mn(Te)), Re(Te, y.ADD_TAGS, je)), y.ADD_ATTR && (Pe === tt && (Pe = mn(Pe)), Re(Pe, y.ADD_ATTR, je)), y.ADD_URI_SAFE_ATTR && Re(ee, y.ADD_URI_SAFE_ATTR, je), y.FORBID_CONTENTS && (me === N && (me = mn(me)), Re(me, y.FORBID_CONTENTS, je)), V && (Te["#text"] = !0), E && Re(Te, ["html", "head", "body"]), Te.table && (Re(Te, ["tbody"]), delete ct.tbody), y.TRUSTED_TYPES_POLICY) {
        if (typeof y.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Gs('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof y.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Gs('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        k = y.TRUSTED_TYPES_POLICY, R = k.createHTML("");
      } else
        k === void 0 && (k = Fp(D, r)), k !== null && typeof R == "string" && (R = k.createHTML(""));
      Pt && Pt(y), nn = y;
    }
  }, Is = Re({}, [...Vi, ...Ki, ...Ap]), Ls = Re({}, [...Gi, ...Ep]), vr = function(y) {
    let H = ce(y);
    (!H || !H.tagName) && (H = {
      namespaceURI: T,
      tagName: "template"
    });
    const re = Ur(y.tagName), Ve = Ur(H.tagName);
    return Y[y.namespaceURI] ? y.namespaceURI === m ? H.namespaceURI === C ? re === "svg" : H.namespaceURI === h ? re === "svg" && (Ve === "annotation-xml" || pe[Ve]) : !!Is[re] : y.namespaceURI === h ? H.namespaceURI === C ? re === "math" : H.namespaceURI === m ? re === "math" && Le[Ve] : !!Ls[re] : y.namespaceURI === C ? H.namespaceURI === m && !Le[Ve] || H.namespaceURI === h && !pe[Ve] ? !1 : !Ls[re] && (Ke[re] || !Is[re]) : !!(Ae === "application/xhtml+xml" && Y[y.namespaceURI]) : !1;
  }, Ht = function(y) {
    Vs(t.removed, {
      element: y
    });
    try {
      ce(y).removeChild(y);
    } catch {
      L(y);
    }
  }, An = function(y, H) {
    try {
      Vs(t.removed, {
        attribute: H.getAttributeNode(y),
        from: H
      });
    } catch {
      Vs(t.removed, {
        attribute: null,
        from: H
      });
    }
    if (H.removeAttribute(y), y === "is")
      if (M || j)
        try {
          Ht(H);
        } catch {
        }
      else
        try {
          H.setAttribute(y, "");
        } catch {
        }
  }, us = function(y) {
    let H = null, re = null;
    if (F)
      y = "<remove></remove>" + y;
    else {
      const lt = _l(y, /^[\r\n\t ]+/);
      re = lt && lt[0];
    }
    Ae === "application/xhtml+xml" && T === C && (y = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + y + "</body></html>");
    const Ve = k ? k.createHTML(y) : y;
    if (T === C)
      try {
        H = new w().parseFromString(Ve, Ae);
      } catch {
      }
    if (!H || !H.documentElement) {
      H = K.createDocument(T, "template", null);
      try {
        H.documentElement.innerHTML = $ ? R : Ve;
      } catch {
      }
    }
    const mt = H.body || H.documentElement;
    return y && re && mt.insertBefore(n.createTextNode(re), mt.childNodes[0] || null), T === C ? Ne.call(H, E ? "html" : "body")[0] : E ? H.documentElement : mt;
  }, Wn = function(y) {
    return G.call(
      y.ownerDocument || y,
      y,
      // eslint-disable-next-line no-bitwise
      d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION,
      null
    );
  }, fs = function(y) {
    return y instanceof b && (typeof y.nodeName != "string" || typeof y.textContent != "string" || typeof y.removeChild != "function" || !(y.attributes instanceof c) || typeof y.removeAttribute != "function" || typeof y.setAttribute != "function" || typeof y.namespaceURI != "string" || typeof y.insertBefore != "function" || typeof y.hasChildNodes != "function");
  }, Os = function(y) {
    return typeof a == "function" && y instanceof a;
  };
  function xt(oe, y, H) {
    Rr(oe, (re) => {
      re.call(t, y, H, nn);
    });
  }
  const En = function(y) {
    let H = null;
    if (xt(xe.beforeSanitizeElements, y, null), fs(y))
      return Ht(y), !0;
    const re = je(y.nodeName);
    if (xt(xe.uponSanitizeElement, y, {
      tagName: re,
      allowedTags: Te
    }), _ && y.hasChildNodes() && !Os(y.firstElementChild) && Ct(/<[/\w!]/g, y.innerHTML) && Ct(/<[/\w!]/g, y.textContent) || y.nodeType === Xs.progressingInstruction || _ && y.nodeType === Xs.comment && Ct(/<[/\w]/g, y.data))
      return Ht(y), !0;
    if (!Te[re] || ct[re]) {
      if (!ct[re] && ds(re) && (Ce.tagNameCheck instanceof RegExp && Ct(Ce.tagNameCheck, re) || Ce.tagNameCheck instanceof Function && Ce.tagNameCheck(re)))
        return !1;
      if (V && !me[re]) {
        const Ve = ce(y) || y.parentNode, mt = he(y) || y.childNodes;
        if (mt && Ve) {
          const lt = mt.length;
          for (let bt = lt - 1; bt >= 0; --bt) {
            const Dt = z(mt[bt], !0);
            Dt.__removalCount = (y.__removalCount || 0) + 1, Ve.insertBefore(Dt, se(y));
          }
        }
      }
      return Ht(y), !0;
    }
    return y instanceof l && !vr(y) || (re === "noscript" || re === "noembed" || re === "noframes") && Ct(/<\/no(script|embed|frames)/i, y.innerHTML) ? (Ht(y), !0) : (g && y.nodeType === Xs.text && (H = y.textContent, Rr([ve, $e, qe], (Ve) => {
      H = Ks(H, Ve, " ");
    }), y.textContent !== H && (Vs(t.removed, {
      element: y.cloneNode()
    }), y.textContent = H)), xt(xe.afterSanitizeElements, y, null), !1);
  }, hs = function(y, H, re) {
    if (W && (H === "id" || H === "name") && (re in n || re in ls))
      return !1;
    if (!(vt && !it[H] && Ct(Qe, H))) {
      if (!(ut && Ct(de, H))) {
        if (!Pe[H] || it[H]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(ds(y) && (Ce.tagNameCheck instanceof RegExp && Ct(Ce.tagNameCheck, y) || Ce.tagNameCheck instanceof Function && Ce.tagNameCheck(y)) && (Ce.attributeNameCheck instanceof RegExp && Ct(Ce.attributeNameCheck, H) || Ce.attributeNameCheck instanceof Function && Ce.attributeNameCheck(H)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            H === "is" && Ce.allowCustomizedBuiltInElements && (Ce.tagNameCheck instanceof RegExp && Ct(Ce.tagNameCheck, re) || Ce.tagNameCheck instanceof Function && Ce.tagNameCheck(re)))
          ) return !1;
        } else if (!ee[H]) {
          if (!Ct(et, Ks(re, ue, ""))) {
            if (!((H === "src" || H === "xlink:href" || H === "href") && y !== "script" && wp(re, "data:") === 0 && I[y])) {
              if (!(yt && !Ct(_e, Ks(re, ue, "")))) {
                if (re)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, ds = function(y) {
    return y !== "annotation-xml" && _l(y, st);
  }, Zt = function(y) {
    xt(xe.beforeSanitizeAttributes, y, null);
    const {
      attributes: H
    } = y;
    if (!H || fs(y))
      return;
    const re = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Pe,
      forceKeepAttr: void 0
    };
    let Ve = H.length;
    for (; Ve--; ) {
      const mt = H[Ve], {
        name: lt,
        namespaceURI: bt,
        value: Dt
      } = mt, dn = je(lt), Bt = Dt;
      let Ge = lt === "value" ? Bt : kp(Bt);
      if (re.attrName = dn, re.attrValue = Ge, re.keepAttr = !0, re.forceKeepAttr = void 0, xt(xe.uponSanitizeAttribute, y, re), Ge = re.attrValue, B && (dn === "id" || dn === "name") && (An(lt, y), Ge = X + Ge), _ && Ct(/((--!?|])>)|<\/(style|title)/i, Ge)) {
        An(lt, y);
        continue;
      }
      if (re.forceKeepAttr)
        continue;
      if (!re.keepAttr) {
        An(lt, y);
        continue;
      }
      if (!qt && Ct(/\/>/i, Ge)) {
        An(lt, y);
        continue;
      }
      g && Rr([ve, $e, qe], (ft) => {
        Ge = Ks(Ge, ft, " ");
      });
      const ot = je(y.nodeName);
      if (!hs(ot, dn, Ge)) {
        An(lt, y);
        continue;
      }
      if (k && typeof D == "object" && typeof D.getAttributeType == "function" && !bt)
        switch (D.getAttributeType(ot, dn)) {
          case "TrustedHTML": {
            Ge = k.createHTML(Ge);
            break;
          }
          case "TrustedScriptURL": {
            Ge = k.createScriptURL(Ge);
            break;
          }
        }
      if (Ge !== Bt)
        try {
          bt ? y.setAttributeNS(bt, lt, Ge) : y.setAttribute(lt, Ge), fs(y) ? Ht(y) : ml(t.removed);
        } catch {
          An(lt, y);
        }
    }
    xt(xe.afterSanitizeAttributes, y, null);
  }, br = function oe(y) {
    let H = null;
    const re = Wn(y);
    for (xt(xe.beforeSanitizeShadowDOM, y, null); H = re.nextNode(); )
      xt(xe.uponSanitizeShadowNode, H, null), En(H), Zt(H), H.content instanceof i && oe(H.content);
    xt(xe.afterSanitizeShadowDOM, y, null);
  };
  return t.sanitize = function(oe) {
    let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, H = null, re = null, Ve = null, mt = null;
    if ($ = !oe, $ && (oe = "<!-->"), typeof oe != "string" && !Os(oe))
      if (typeof oe.toString == "function") {
        if (oe = oe.toString(), typeof oe != "string")
          throw Gs("dirty is not a string, aborting");
      } else
        throw Gs("toString is not a function");
    if (!t.isSupported)
      return oe;
    if (U || cs(y), t.removed = [], typeof oe == "string" && (Z = !1), Z) {
      if (oe.nodeName) {
        const Dt = je(oe.nodeName);
        if (!Te[Dt] || ct[Dt])
          throw Gs("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (oe instanceof a)
      H = us("<!---->"), re = H.ownerDocument.importNode(oe, !0), re.nodeType === Xs.element && re.nodeName === "BODY" || re.nodeName === "HTML" ? H = re : H.appendChild(re);
    else {
      if (!M && !g && !E && // eslint-disable-next-line unicorn/prefer-includes
      oe.indexOf("<") === -1)
        return k && q ? k.createHTML(oe) : oe;
      if (H = us(oe), !H)
        return M ? null : q ? R : "";
    }
    H && F && Ht(H.firstChild);
    const lt = Wn(Z ? oe : H);
    for (; Ve = lt.nextNode(); )
      En(Ve), Zt(Ve), Ve.content instanceof i && br(Ve.content);
    if (Z)
      return oe;
    if (M) {
      if (j)
        for (mt = Se.call(H.ownerDocument); H.firstChild; )
          mt.appendChild(H.firstChild);
      else
        mt = H;
      return (Pe.shadowroot || Pe.shadowrootmode) && (mt = Me.call(s, mt, !0)), mt;
    }
    let bt = E ? H.outerHTML : H.innerHTML;
    return E && Te["!doctype"] && H.ownerDocument && H.ownerDocument.doctype && H.ownerDocument.doctype.name && Ct(lu, H.ownerDocument.doctype.name) && (bt = "<!DOCTYPE " + H.ownerDocument.doctype.name + `>
` + bt), g && Rr([ve, $e, qe], (Dt) => {
      bt = Ks(bt, Dt, " ");
    }), k && q ? k.createHTML(bt) : bt;
  }, t.setConfig = function() {
    let oe = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    cs(oe), U = !0;
  }, t.clearConfig = function() {
    nn = null, U = !1;
  }, t.isValidAttribute = function(oe, y, H) {
    nn || cs({});
    const re = je(oe), Ve = je(y);
    return hs(re, Ve, H);
  }, t.addHook = function(oe, y) {
    typeof y == "function" && Vs(xe[oe], y);
  }, t.removeHook = function(oe, y) {
    if (y !== void 0) {
      const H = vp(xe[oe], y);
      return H === -1 ? void 0 : bp(xe[oe], H, 1)[0];
    }
    return ml(xe[oe]);
  }, t.removeHooks = function(oe) {
    xe[oe] = [];
  }, t.removeAllHooks = function() {
    xe = xl();
  }, t;
}
var na = cu();
na.addHook("uponSanitizeElement", (e, t) => {
  var r, i, o, a, l;
  if (t.tagName === "svg") {
    (r = e.parentNode) == null || r.removeChild(e);
    return;
  }
  if (t.tagName === "math") {
    (i = e.parentNode) == null || i.removeChild(e);
    return;
  }
  if (t.tagName === "foreignobject") {
    (o = e.parentNode) == null || o.removeChild(e);
    return;
  }
  const n = e, s = (a = t.tagName) == null ? void 0 : a.toUpperCase();
  (s === "IMG" || s === "AREA" || s === "MAP") && ((l = n.parentNode) == null || l.removeChild(n));
});
na.addHook("afterSanitizeAttributes", (e) => {
  if (e.hasAttribute("href")) {
    const t = e.getAttribute("href") || "";
    try {
      const n = decodeURIComponent(t.toLowerCase());
      (n.includes("javascript:") || n.includes("data:text/html") || n.includes("vbscript:") || n.includes("about:") || n.includes("file:")) && e.removeAttribute("href");
    } catch {
      (t.toLowerCase().includes("javascript:") || t.toLowerCase().includes("data:text/html") || t.toLowerCase().includes("vbscript:") || t.toLowerCase().includes("about:") || t.toLowerCase().includes("file:")) && e.removeAttribute("href");
    }
  }
  if (e.nodeName === "A") {
    const t = (e.getAttribute("href") || "").trim();
    /^(https?:|mailto:)/i.test(t) ? (e.setAttribute("target", "_blank"), e.setAttribute("rel", "noopener noreferrer nofollow")) : e.removeAttribute("href");
  }
  if (e.hasAttribute("src")) {
    const t = e.getAttribute("src") || "";
    try {
      const n = decodeURIComponent(t.toLowerCase());
      (n.includes("javascript:") || n.includes("data:text/html") || n.includes("vbscript:") || n.includes("about:") || n.includes("file:")) && e.removeAttribute("src");
    } catch {
      (t.toLowerCase().includes("javascript:") || t.toLowerCase().includes("data:text/html") || t.toLowerCase().includes("vbscript:") || t.toLowerCase().includes("about:") || t.toLowerCase().includes("file:")) && e.removeAttribute("src");
    }
  }
  if (e.hasAttribute("style")) {
    const t = e.getAttribute("style") || "";
    try {
      const n = decodeURIComponent(t.toLowerCase());
      (n.includes("expression(") || n.includes("behavior:") || n.includes("-moz-binding") || n.includes("import") || n.includes("javascript:") || n.includes("vbscript:")) && e.removeAttribute("style");
    } catch {
      (t.toLowerCase().includes("expression(") || t.toLowerCase().includes("behavior:") || t.toLowerCase().includes("-moz-binding") || t.toLowerCase().includes("import") || t.toLowerCase().includes("javascript:") || t.toLowerCase().includes("vbscript:")) && e.removeAttribute("style");
    }
  }
  Array.from(e.attributes).forEach((t) => {
    t.name.toLowerCase().startsWith("on") && e.removeAttribute(t.name);
  });
});
function Dp(e) {
  const t = {
    // Block all dangerous tags including SVG, form elements and images.
    // NOTE: 'a' must NOT be in this list — FORBID_TAGS beats ALLOWED_TAGS, and
    // anchors are intentionally kept (markdown links) then hardened by the
    // afterSanitizeAttributes hook (http(s)/mailto only, forced target+rel).
    FORBID_TAGS: [
      "iframe",
      "frame",
      "frameset",
      "object",
      "embed",
      "applet",
      "script",
      "base",
      "link",
      "meta",
      "style",
      "svg",
      "math",
      "form",
      "input",
      "button",
      "textarea",
      "select",
      "option",
      "xml",
      "xss",
      "import",
      "video",
      "audio",
      "track",
      "source",
      "canvas",
      "details",
      "template",
      "slot",
      "noscript",
      "marquee",
      "bgsound",
      "keygen",
      "command",
      "img",
      "area",
      "map"
      // SECURITY: Remove image/map tags completely
    ],
    // Block dangerous attributes
    FORBID_ATTR: [
      // Event handlers
      "onerror",
      "onload",
      "onclick",
      "onmouseover",
      "onmouseout",
      "onmousemove",
      "onkeydown",
      "onkeyup",
      "onkeypress",
      "onfocus",
      "onblur",
      "onchange",
      "onsubmit",
      "ondblclick",
      "oncontextmenu",
      "oninput",
      "oninvalid",
      "onreset",
      "onsearch",
      "onselect",
      "onabort",
      "oncanplay",
      "oncanplaythrough",
      "oncuechange",
      "ondurationchange",
      "onemptied",
      "onended",
      "onloadeddata",
      "onloadedmetadata",
      "onloadstart",
      "onpause",
      "onplay",
      "onplaying",
      "onprogress",
      "onratechange",
      "onseeked",
      "onseeking",
      "onstalled",
      "onsuspend",
      "ontimeupdate",
      "onvolumechange",
      "onwaiting",
      "ontoggle",
      "onauxclick",
      "ongotpointercapture",
      "onlostpointercapture",
      "onpointercancel",
      "onpointerdown",
      "onpointerenter",
      "onpointerleave",
      "onpointermove",
      "onpointerout",
      "onpointerover",
      "onpointerup",
      "onwheel",
      "onanimationcancel",
      "onanimationend",
      "onanimationiteration",
      "onanimationstart",
      "ontransitioncancel",
      "ontransitionend",
      "ontransitionrun",
      "ontransitionstart",
      "ondrag",
      "ondragend",
      "ondragenter",
      "ondragleave",
      "ondragover",
      "ondragstart",
      "ondrop",
      "oncopy",
      "oncut",
      "onpaste",
      "onscroll",
      "onmessage",
      "onmouseenter",
      "onmouseleave",
      "onmousewheel",
      "onbeforeunload",
      "onerrorupdate",
      "onhelp",
      "onmove",
      "onreadystatechange",
      "onresize",
      "onstart",
      "onstop",
      "onunload",
      "onactivate",
      "onafterprint",
      "onafterupdate",
      "onbeforeactivate",
      "onbeforecopy",
      "onbeforecut",
      "onbeforedeactivate",
      "onbeforeeditfocus",
      "onbeforepaste",
      "onbeforeprint",
      "onbeforeupdate",
      "onbounce",
      "oncellchange",
      "oncontrolselect",
      "ondataavailable",
      "ondatasetchanged",
      "ondatasetcomplete",
      "ondeactivate",
      "onfilterchange",
      "onfinish",
      "onfocusin",
      "onfocusout",
      "onlayoutcomplete",
      "onlosecapture",
      "onmoveend",
      "onmovestart",
      "onpropertychange",
      "onresizeend",
      "onresizestart",
      "onrowenter",
      "onrowexit",
      "onrowsdelete",
      "onrowsinserted",
      "onselectionchange",
      "onselectstart",
      "onshow",
      "onsort",
      "onpointerrawupdate",
      // Dangerous attributes
      "formaction",
      "action",
      "form",
      "srcdoc",
      "srcset",
      "dynsrc",
      "lowsrc",
      "ping",
      "poster",
      "background",
      "code",
      "codebase",
      "archive",
      "profile",
      "xmlns",
      "xlink:href",
      "attributename",
      "from",
      "to",
      "values",
      "begin",
      "autofocus",
      "autoplay",
      "controls",
      "manifest",
      "sandbox",
      // SECURITY: block resource-loading attributes. 'href' is intentionally NOT
      // here (FORBID_ATTR beats ALLOWED_ATTR): markdown links need it, and the
      // afterSanitizeAttributes hook strips any href that isn't http(s)/mailto.
      "src",
      "data"
    ],
    // Only allow safe protocols
    ALLOWED_URI_REGEXP: /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
    // SECURITY: Strip ALL HTML tags to prevent rendering exploits
    // Only allow basic text formatting for markdown (no links, images, or any potentially dangerous tags)
    ALLOWED_TAGS: [
      "a",
      "b",
      "i",
      "u",
      "strong",
      "em",
      "p",
      "br",
      "ul",
      "ol",
      "li",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "blockquote",
      "code",
      "pre",
      "table",
      "thead",
      "tbody",
      "tr",
      "th",
      "td",
      "span",
      "div",
      "del",
      "hr",
      "sup",
      "sub",
      "abbr",
      "cite",
      "dfn",
      "kbd",
      "mark",
      "q",
      "samp",
      "small",
      "time",
      "var"
    ],
    // Allow safe link attributes only (href is protocol-restricted + target/rel are
    // forced by the afterSanitizeAttributes hook above). No src or resource-loading attrs.
    ALLOWED_ATTR: [
      "href",
      "target",
      "rel",
      "title",
      "class",
      "id",
      "align",
      "colspan",
      "rowspan"
    ],
    // Return a string instead of a document
    RETURN_DOM: !1,
    RETURN_DOM_FRAGMENT: !1,
    // Keep HTML comments removed
    ALLOW_DATA_ATTR: !1
    // NOTE: do NOT set USE_PROFILES here — it overrides ALLOWED_TAGS/ALLOWED_ATTR,
    // which would drop the <a> tags we explicitly allow above. The explicit
    // ALLOWED_TAGS/ALLOWED_ATTR allowlist is authoritative; protocols are still
    // restricted by the afterSanitizeAttributes hook (href → http/https/mailto only).
  };
  return na.sanitize(e, t);
}
Be.setOptions({
  renderer: new Be.Renderer(),
  gfm: !0,
  breaks: !0
});
const Hr = (e) => Dp(Be(e || "")), Tl = "*", Bp = /* @__PURE__ */ new Set(["null", "about:blank", ""]);
let Vt = null;
const cr = (e) => e && !Bp.has(e) ? e : null, $p = (e) => {
  if (!e) return null;
  try {
    return cr(new URL(e).origin);
  } catch {
    return null;
  }
};
function Up() {
  if (Vt) return Vt;
  if (window.parent === window)
    return Vt = cr(window.location.origin) || Tl, Vt;
  try {
    const e = cr(window.parent.location.origin);
    if (e)
      return Vt = e, Vt;
  } catch {
  }
  try {
    const e = window.location.ancestorOrigins, t = e && e.length ? cr(e[0]) : null;
    if (t)
      return Vt = t, Vt;
  } catch {
  }
  return Vt = $p(document.referrer) || Tl, Vt;
}
function Al(e) {
  Vt = cr(e) || Vt;
}
function It(e) {
  window.parent.postMessage(e, Up());
}
const ii = "Start a new chat", El = "Start a new chat? This ends the current one.", Hp = "Start new chat", zp = "Cancel", Sl = "Couldn't start a new chat. Please try again.", Wp = 15e3, qp = ["aria-label"], jp = { class: "new-chat-confirm__question" }, Vp = { class: "new-chat-confirm__actions" }, Kp = ["disabled"], Gp = ["disabled"], Yp = /* @__PURE__ */ Wo({
  __name: "NewChatConfirm",
  props: {
    error: {},
    busy: { type: Boolean }
  },
  emits: ["confirm", "cancel"],
  setup(e, { emit: t }) {
    const n = t;
    return (s, r) => (x(), A("div", {
      class: "new-chat-confirm",
      role: "alertdialog",
      "aria-live": "polite",
      "aria-label": S(El)
    }, [
      v("p", jp, Q(s.error || S(El)), 1),
      v("div", Vp, [
        v("button", {
          type: "button",
          class: "new-chat-confirm__button",
          disabled: s.busy,
          onClick: r[0] || (r[0] = (i) => n("cancel"))
        }, Q(S(zp)), 9, Kp),
        v("button", {
          type: "button",
          class: "new-chat-confirm__button new-chat-confirm__button--primary",
          disabled: s.busy,
          onClick: r[1] || (r[1] = (i) => n("confirm"))
        }, Q(S(Hp)), 9, Gp)
      ])
    ], 8, qp));
  }
}), sa = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, uu = /* @__PURE__ */ sa(Yp, [["__scopeId", "data-v-6c78f353"]]), Xp = { class: "askai" }, Zp = { class: "askai__bar" }, Jp = ["value", "placeholder", "disabled", "aria-label", "onKeydown"], Qp = ["disabled", "title", "aria-label", "aria-expanded"], eg = { class: "askai__intro" }, tg = { class: "askai__title" }, ng = {
  key: 0,
  class: "askai__subtitle"
}, sg = {
  key: 0,
  class: "askai__suggestions"
}, rg = ["disabled", "onClick"], ig = ["aria-live"], og = {
  key: 0,
  class: "askai__question"
}, ag = {
  key: 1,
  class: "askai__system"
}, lg = ["innerHTML"], cg = {
  key: 0,
  class: "askai__sources"
}, ug = ["title"], fg = {
  key: 0,
  class: "askai__thinking",
  role: "status",
  "aria-live": "polite"
}, hg = { class: "askai__thinking-text" }, dg = { class: "askai__foot" }, pg = { key: 0 }, gg = /* @__PURE__ */ Wo({
  __name: "AskAiPanel",
  props: {
    messages: {},
    draft: {},
    agentName: {},
    suggestions: {},
    welcomeTitle: {},
    welcomeSubtitle: {},
    placeholder: {},
    inputEnabled: { type: Boolean },
    typingEnabled: { type: Boolean },
    loading: { type: Boolean },
    showCitations: { type: Boolean },
    disclaimer: {},
    active: { type: Boolean },
    hotkey: { type: Boolean },
    citationLabel: { type: Function },
    citationTooltip: { type: Function },
    displayText: { type: Function },
    isStreaming: { type: Function },
    canStartNewChat: { type: Boolean },
    startingNewChat: { type: Boolean },
    newChatArmed: { type: Boolean },
    newChatError: {}
  },
  emits: ["update:draft", "send", "ask", "close", "newChat", "confirmNewChat", "cancelNewChat"],
  setup(e, { emit: t }) {
    const n = e, s = t, r = le(null), i = le(null), o = le(null), a = ["user", "bot", "agent", "system"], l = fe(
      () => n.messages.map((k, R) => ({ message: k, index: R })).filter(({ message: k }) => a.includes(k.message_type))
    ), d = fe(() => l.value.length > 0), c = (k) => {
      s("update:draft", k.target.value);
    }, b = () => {
      !(n.typingEnabled ?? n.inputEnabled) || !n.draft.trim() || s("send");
    }, w = (k) => {
      n.inputEnabled && s("ask", k);
    }, D = typeof navigator < "u" && /Mac|iPod|iPhone|iPad/.test(navigator.platform || ""), P = (k) => {
      if (k.key === "Escape") {
        k.preventDefault(), s("close");
        return;
      }
      const R = D ? k.metaKey && !k.ctrlKey : k.ctrlKey && !k.metaKey;
      n.hotkey && R && !k.altKey && (k.key === "k" || k.key === "K") && (k.preventDefault(), s("close"));
    }, z = () => {
      rs(() => {
        var k;
        return (k = r.value) == null ? void 0 : k.focus();
      });
    };
    let L = 0;
    const se = () => {
      if (!o.value) return;
      const k = o.value.closest(".askai"), R = i.value;
      if (!k || !R) return;
      const K = k.offsetHeight - R.offsetHeight, G = getComputedStyle(R), Se = parseFloat(G.paddingTop) + parseFloat(G.paddingBottom), Ne = Math.ceil(K + Se + o.value.getBoundingClientRect().height);
      Math.abs(Ne - L) < 3 || (L = Ne, It({ type: "WIDGET_RESIZE", height: Ne }));
    };
    let he = null;
    const ce = fe(
      () => l.value.reduce((k, { message: R, index: K }) => k + n.displayText(K, R.message || "").length, 0)
    );
    return Lt(
      () => [l.value.length, ce.value, n.loading],
      () => rs(() => {
        i.value && (i.value.scrollTop = i.value.scrollHeight);
      })
    ), Lt(() => n.newChatArmed, () => rs(() => se())), Lt(() => n.active, (k) => {
      k && z();
    }), mi(() => {
      n.active && z(), window.addEventListener("keydown", P), o.value && typeof ResizeObserver < "u" && (he = new ResizeObserver(() => se()), he.observe(o.value)), se();
    }), kc(() => {
      window.removeEventListener("keydown", P), he == null || he.disconnect(), he = null;
    }), (k, R) => (x(), A("div", Xp, [
      v("div", Zp, [
        R[6] || (R[6] = v("svg", {
          class: "askai__bar-icon",
          width: "18",
          height: "18",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          "stroke-width": "1.8",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "aria-hidden": "true"
        }, [
          v("path", { d: "M12 3l1.9 4.9L19 9.8l-4.9 1.9L12 17l-1.9-5.3L5 9.8l5.1-1.9L12 3z" })
        ], -1)),
        v("input", {
          ref_key: "inputEl",
          ref: r,
          type: "text",
          class: "askai__input",
          value: k.draft,
          placeholder: k.placeholder,
          disabled: !(k.typingEnabled ?? k.inputEnabled),
          "aria-label": k.placeholder,
          autocomplete: "off",
          spellcheck: "false",
          onInput: c,
          onKeydown: Br(es(b, ["prevent"]), ["enter"])
        }, null, 40, Jp),
        k.canStartNewChat ? (x(), A("button", {
          key: 0,
          type: "button",
          class: Fe(["askai__new", { "askai__new--armed": k.newChatArmed }]),
          disabled: k.startingNewChat,
          title: S(ii),
          "aria-label": S(ii),
          "aria-expanded": k.newChatArmed,
          onClick: R[0] || (R[0] = (K) => s("newChat"))
        }, R[4] || (R[4] = [
          v("svg", {
            width: "15",
            height: "15",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "aria-hidden": "true"
          }, [
            v("path", { d: "M12 20h9" }),
            v("path", { d: "M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" })
          ], -1)
        ]), 10, Qp)) : ae("", !0),
        v("button", {
          type: "button",
          class: "askai__close",
          "aria-label": "Close",
          title: "Close (Esc)",
          onClick: R[1] || (R[1] = (K) => s("close"))
        }, R[5] || (R[5] = [
          v("span", { class: "askai__kbd" }, "Esc", -1)
        ]))
      ]),
      k.newChatArmed && k.canStartNewChat ? (x(), Qr(uu, {
        key: 0,
        busy: k.startingNewChat,
        error: k.newChatError,
        onConfirm: R[2] || (R[2] = (K) => s("confirmNewChat")),
        onCancel: R[3] || (R[3] = (K) => s("cancelNewChat"))
      }, null, 8, ["busy", "error"])) : ae("", !0),
      v("div", {
        ref_key: "bodyEl",
        ref: i,
        class: "askai__body"
      }, [
        v("div", {
          ref_key: "contentEl",
          ref: o,
          class: "askai__content"
        }, [
          d.value ? (x(), A(De, { key: 1 }, [
            (x(!0), A(De, null, wt(l.value, ({ message: K, index: G }) => (x(), A("div", {
              key: G,
              class: "askai__turn",
              "aria-live": k.isStreaming(G) ? "off" : "polite"
            }, [
              K.message_type === "user" ? (x(), A("p", og, Q(K.message), 1)) : K.message_type === "system" ? (x(), A("p", ag, Q(K.message), 1)) : (x(), A(De, { key: 2 }, [
                v("div", {
                  class: Fe(["askai__answer", { "askai__answer--streaming": k.isStreaming(G) }]),
                  innerHTML: S(Hr)(k.isStreaming(G) ? k.displayText(G, K.message || "") : K.message || "")
                }, null, 10, lg),
                k.showCitations && !k.isStreaming(G) && K.sources && K.sources.length ? (x(), A("div", cg, [
                  R[9] || (R[9] = v("span", { class: "askai__label" }, "Sources", -1)),
                  (x(!0), A(De, null, wt(K.sources, (Se, Ne) => (x(), A("span", {
                    key: Ne,
                    class: "askai__source",
                    title: k.citationTooltip(Se)
                  }, Q(k.citationLabel(Se)), 9, ug))), 128))
                ])) : ae("", !0)
              ], 64))
            ], 8, ig))), 128)),
            k.loading ? (x(), A("div", fg, [
              R[10] || (R[10] = v("span", { class: "askai__dot" }, null, -1)),
              R[11] || (R[11] = v("span", { class: "askai__dot" }, null, -1)),
              R[12] || (R[12] = v("span", { class: "askai__dot" }, null, -1)),
              v("span", hg, Q(k.showCitations ? "Searching the knowledge base" : "Thinking"), 1)
            ])) : ae("", !0)
          ], 64)) : (x(), A(De, { key: 0 }, [
            v("div", eg, [
              v("h2", tg, Q(k.welcomeTitle || `Ask ${k.agentName}`), 1),
              k.welcomeSubtitle ? (x(), A("p", ng, Q(k.welcomeSubtitle), 1)) : ae("", !0)
            ]),
            k.suggestions.length && !k.draft.trim() ? (x(), A("div", sg, [
              R[8] || (R[8] = v("p", { class: "askai__label" }, "Suggested", -1)),
              (x(!0), A(De, null, wt(k.suggestions, (K) => (x(), A("button", {
                key: K,
                type: "button",
                class: "askai__suggestion",
                disabled: !k.inputEnabled,
                onClick: (G) => w(K)
              }, [
                v("span", null, Q(K), 1),
                R[7] || (R[7] = v("svg", {
                  width: "15",
                  height: "15",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "aria-hidden": "true"
                }, [
                  v("path", { d: "M5 12h14M13 6l6 6-6 6" })
                ], -1))
              ], 8, rg))), 128))
            ])) : ae("", !0)
          ], 64))
        ], 512)
      ], 512),
      v("div", dg, [
        k.disclaimer ? (x(), A("span", pg, Q(k.disclaimer), 1)) : ae("", !0),
        R[13] || (R[13] = v("a", {
          class: "askai__brand",
          href: "https://chattermate.chat",
          target: "_blank",
          rel: "noopener noreferrer"
        }, "Powered by ChatterMate", -1))
      ])
    ]));
  }
}), mg = /* @__PURE__ */ sa(gg, [["__scopeId", "data-v-edea9534"]]), Qs = [
  { stops: "#9D8CFF, #5FE3D6, #C9F24E", glow: "rgba(157,140,255,0.45)" },
  // aurora (default)
  { stops: "#FF8A73, #9D8CFF, #5FE3D6", glow: "rgba(255,138,115,0.40)" },
  // coral
  { stops: "#5FE3D6, #C9F24E, #9D8CFF", glow: "rgba(95,227,214,0.40)" },
  // teal
  { stops: "#C9F24E, #5FE3D6, #FF8A73", glow: "rgba(201,242,78,0.35)" },
  // lime
  { stops: "#6EA8FF, #9D8CFF, #5FE3D6", glow: "rgba(110,168,255,0.42)" },
  // blue
  { stops: "#FF7AC6, #9D8CFF, #6EA8FF", glow: "rgba(255,122,198,0.42)" },
  // pink
  { stops: "#FF8A73, #FFC857, #FF7AC6", glow: "rgba(255,200,87,0.40)" },
  // sunset
  { stops: "#7C5CFF, #B388FF, #5FE3D6", glow: "rgba(124,92,255,0.45)" },
  // violet
  { stops: "#0EA5A5, #5FE3D6, #C9F24E", glow: "rgba(14,165,165,0.40)" },
  // emerald
  { stops: "#F34611, #FF8A73, #FFC857", glow: "rgba(243,70,17,0.38)" }
  // ember
], _g = (e) => (e || "").split("").reduce((t, n) => t + n.charCodeAt(0), 0) % Qs.length, yg = (e) => {
  const t = Qs[(e % Qs.length + Qs.length) % Qs.length];
  return {
    background: `
            radial-gradient(circle at 32% 28%, rgba(255,255,255,0.22) 0%, transparent 42%),
            radial-gradient(circle at 68% 72%, rgba(0,0,0,0.25) 0%, transparent 38%),
            radial-gradient(ellipse at 50% 50%, ${t.stops})
        `.trim(),
    boxShadow: `0 4px 28px ${t.glow}, inset 0 1px 0 rgba(255,255,255,0.15)`,
    borderRadius: "50%"
  };
}, vg = (e, t) => {
  const n = typeof t == "number" && Number.isFinite(t) ? t : _g(e);
  return yg(n);
}, Cl = (e) => {
  var t;
  return !!((t = e == null ? void 0 : e.attributes) != null && t.end_chat);
}, Rl = "AI can make mistakes. Check important info.";
function bg(e, t = !1) {
  return e !== !1 && !t;
}
const Xi = {
  ai: "Online · replies instantly",
  human: "Online · usually replies in a few minutes",
  away: "Away · we'll reply when we're back"
};
function wg(e, t = !1) {
  return (t ? "human" : (e == null ? void 0 : e.mode) ?? "ai") === "ai" ? { text: Xi.ai, online: !0 } : (e == null ? void 0 : e.available) !== !1 ? { text: Xi.human, online: !0 } : { text: Xi.away, online: !1 };
}
const fu = (e) => !!e && (/^https?:\/\//i.test(e) || e.startsWith("data:")), kg = (e, t) => e ? fu(e) || e.startsWith("blob:") ? e : `${t.replace(/\/api\/v1\/?$/, "")}${e.startsWith("/") ? "" : "/"}${e}` : "";
function Il() {
  return typeof window < "u" && window.APP_CONFIG ? window.APP_CONFIG : {};
}
const os = {
  get API_URL() {
    return Il().API_URL || void 0 || "https://api.chattermate.chat/api/v1";
  },
  get WS_URL() {
    return Il().WS_URL || void 0 || "wss://api.chattermate.chat";
  }
};
function oi(e) {
  return kg(e, os.API_URL);
}
const hu = "ctid", xg = "identity_expired", Tg = "invalid_token", Ll = 0.8, Ag = 720 * 60 * 1e3, Zi = 30 * 1e3, Ji = 1e3, Fn = (e) => {
  if (typeof e != "string") return e ? String(e) : null;
  const t = e.trim();
  return !t || t === "undefined" || t === "null" ? null : t;
}, zr = (e) => {
  const t = Fn(e);
  if (!t) return null;
  const [, n] = t.split(".");
  if (!n) return null;
  try {
    const s = atob(n.replace(/-/g, "+").replace(/_/g, "/"));
    return JSON.parse(s);
  } catch {
    return null;
  }
}, Eg = async (e) => {
  var t, n;
  try {
    return (n = (t = await e.json()) == null ? void 0 : t.detail) == null ? void 0 : n.code;
  } catch {
    return;
  }
}, ai = (e = hu) => ({
  read: () => {
    try {
      return Fn(localStorage.getItem(e));
    } catch {
      return null;
    }
  },
  write: (t) => {
    try {
      localStorage.setItem(e, t);
    } catch {
    }
  },
  clear: () => {
    try {
      localStorage.removeItem(e);
    } catch {
    }
  }
}), Sg = () => ({
  read: () => null,
  write: () => {
  },
  clear: () => {
  }
});
function Cg(e = {}) {
  const t = e.store ?? ai(), n = le(null);
  let s = null, r = null;
  const i = () => {
    s && (clearTimeout(s), s = null);
  }, o = () => {
    const z = zr(n.value);
    return z != null && z.exp ? Number(z.exp) - Math.floor(Date.now() / Ji) : null;
  }, a = () => {
    const z = zr(n.value);
    if (!(z != null && z.exp)) return !1;
    const L = z.iat ? Number(z.exp) - Number(z.iat) : 0, se = o() ?? 0;
    return L <= 0 ? se <= 0 : se <= L * (1 - Ll);
  }, l = (z, { persist: L = !0 } = {}) => {
    var ce, k;
    const se = Fn(z), he = !!n.value;
    if (i(), n.value = se, !se) {
      t.clear(), he && ((ce = e.onTokenCleared) == null || ce.call(e));
      return;
    }
    L && (t.write(se), (k = e.onTokenChanged) == null || k.call(e, se)), b();
  }, d = async (z) => {
    if (!n.value || !z) return !1;
    if (r) return r;
    const L = n.value;
    return r = (async () => {
      var se, he;
      try {
        const ce = await fetch(`${os.API_URL}/refresh-token`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${L}`
          },
          body: JSON.stringify({ widget_id: z })
        });
        if (ce.status === 401)
          return await Eg(ce) !== Tg && ((se = e.onIdentityExpired) == null || se.call(e)), !1;
        if (!ce.ok)
          return b(Zi), !1;
        const k = await ce.json(), R = Fn((he = k == null ? void 0 : k.data) == null ? void 0 : he.token);
        return R ? (l(R), !0) : !1;
      } catch {
        return b(Zi), !1;
      } finally {
        r = null;
      }
    })(), r;
  }, c = async (z) => n.value ? a() ? d(z) : !0 : !1, b = (z) => {
    i();
    const L = zr(n.value);
    if (!(L != null && L.exp) || !(L != null && L.iat)) return;
    const se = (Number(L.exp) - Number(L.iat)) * Ji, he = (o() ?? 0) * Ji, ce = z ?? Math.min(
      Ag,
      Math.max(0, he - se * (1 - Ll))
    );
    s = setTimeout(() => {
      s = null, c(w).then((k) => {
        b(k ? void 0 : Zi);
      });
    }, ce);
  };
  let w = "";
  return {
    token: n,
    start: (z, L) => {
      w = z;
      const se = Fn(L) || t.read();
      l(se, { persist: !1 }), se && t.write(se);
    },
    stop: () => {
      i(), r = null;
    },
    setToken: l,
    ensureFresh: c
  };
}
const Es = window.__CM_FRAME__, du = "null";
let ns = !1, pu = !1, gu = null;
const xo = () => !!Es, ts = () => !Es || ns && !pu, Rg = () => gu, mu = (e) => {
  typeof e == "string" && e && (gu = e);
}, _u = (e) => Es ? ns ? Sg() : ai(`${hu}:${e}`) : ai(), Ig = () => new Promise((e) => {
  const t = (n) => {
    var r;
    if (n.source !== window.parent || ((r = n.data) == null ? void 0 : r.type) !== "HOST_INIT") return;
    window.removeEventListener("message", t);
    const s = n.origin === du;
    e({
      origin: n.origin,
      // An opaque host can't be addressed, so nothing it hands over can be
      // answered safely: such a frame runs as an anonymous visitor.
      token: s ? null : Fn(n.data.token),
      pageUrl: typeof n.data.pageUrl == "string" ? n.data.pageUrl : null
    });
  };
  window.addEventListener("message", t), window.parent.postMessage({ type: "FRAME_READY" }, "*");
}), Lg = async (e) => {
  var t;
  try {
    const n = await e.json();
    return ((t = n == null ? void 0 : n.detail) == null ? void 0 : t.code) || "unavailable";
  } catch {
    return "unavailable";
  }
}, Ol = () => {
  const e = document.getElementById("app");
  e && (e.textContent = "Chat is unavailable right now.");
};
async function Og() {
  if (!Es) return !0;
  const e = new URL(window.location.href).searchParams;
  ns = e.get("host") === "1" && window.parent !== window;
  let t, n = null;
  if (ns) {
    const o = await Ig();
    o.origin !== du ? (Al(o.origin), n = o.origin) : (pu = !0, Al("*")), mu(o.pageUrl), t = o.token;
  } else
    t = _u(Es.widgetId).read();
  let s;
  try {
    s = await fetch(`${os.API_URL}/widgets/${encodeURIComponent(Es.widgetId)}/bootstrap`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...t ? { Authorization: `Bearer ${t}` } : {}
      },
      body: JSON.stringify({ host_origin: n, source: e.get("source") })
    });
  } catch {
    return ns ? It({ type: "WIDGET_ERROR", code: "unavailable" }) : Ol(), !1;
  }
  if (!s.ok) {
    const o = await Lg(s);
    return ns ? It({ type: "WIDGET_ERROR", code: o }) : Ol(), !1;
  }
  const r = await s.json();
  window.__INITIAL_DATA__ = r;
  const i = Fn(r.initialToken);
  return ts() && i && i !== t && It({ type: "TOKEN_UPDATE", token: i }), !0;
}
const Ng = () => {
  ns && It({ type: "WIDGET_READY" });
};
function Mg(e) {
  const t = fe(() => ({
    backgroundColor: "var(--cm-card)",
    color: "var(--cm-text)"
  })), n = fe(() => ({
    backgroundColor: e.value.chat_bubble_color || "#C9F24E",
    color: As(e.value.chat_bubble_color || "#C9F24E") ? "#FFFFFF" : "#000000"
  })), s = fe(() => ({
    backgroundColor: "var(--cm-agent-bg)",
    color: "var(--cm-text)"
  })), r = fe(() => ({
    backgroundColor: "var(--cm-accent)",
    color: "var(--cm-on-accent)"
  })), i = fe(() => ({
    color: "var(--cm-text)"
  })), o = fe(() => ({
    borderBottom: "1px solid var(--cm-hairline)"
  })), a = fe(() => oi(e.value.photo_url)), l = fe(() => {
    const d = e.value.chat_background_color || "#ffffff";
    return {
      boxShadow: `0 8px 5px ${As(d) ? "rgba(0, 0, 0, 0.24)" : "rgba(0, 0, 0, 0.12)"}`
    };
  });
  return {
    chatStyles: t,
    chatIconStyles: n,
    agentBubbleStyles: s,
    userBubbleStyles: r,
    messageNameStyles: i,
    headerBorderStyles: o,
    photoUrl: a,
    shadowStyle: l
  };
}
const Pg = /* @__PURE__ */ new Set(["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp"]), Fg = /* @__PURE__ */ new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/plain",
  "text/csv",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
]);
[...Pg, ...Fg];
function Dg(e, t) {
  const n = le([]), s = le(!1), r = le(null), i = (R) => {
    if (R === 0) return "0 Bytes";
    const K = 1024, G = ["Bytes", "KB", "MB", "GB"], Se = Math.floor(Math.log(R) / Math.log(K));
    return parseFloat((R / Math.pow(K, Se)).toFixed(2)) + " " + G[Se];
  }, o = (R) => R.startsWith("image/"), a = (R) => R ? oi(R) : "", l = (R) => {
    const K = R.file_url || R.url;
    return K ? oi(K) : "";
  }, d = async (R) => {
    const K = R.target;
    K.files && K.files.length > 0 && (await z(Array.from(K.files)), K.value = "");
  }, c = async (R) => {
    var G;
    R.preventDefault();
    const K = (G = R.dataTransfer) == null ? void 0 : G.files;
    K && K.length > 0 && await z(Array.from(K));
  }, b = (R) => {
    R.preventDefault();
  }, w = (R) => {
    R.preventDefault();
  }, D = async (R) => {
    var Se;
    const K = (Se = R.clipboardData) == null ? void 0 : Se.items;
    if (!K) return;
    const G = [];
    for (const Ne of Array.from(K))
      if (Ne.kind === "file") {
        const Me = Ne.getAsFile();
        Me && G.push(Me);
      }
    G.length > 0 && await z(G);
  }, P = async (R, K = 500) => new Promise((G, Se) => {
    const Ne = new FileReader();
    Ne.onload = (Me) => {
      var ve;
      const xe = new Image();
      xe.onload = () => {
        const $e = document.createElement("canvas");
        let qe = xe.width, Qe = xe.height;
        const de = 1920;
        (qe > de || Qe > de) && (qe > Qe ? (Qe = Qe / qe * de, qe = de) : (qe = qe / Qe * de, Qe = de)), $e.width = qe, $e.height = Qe;
        const _e = $e.getContext("2d");
        if (!_e) {
          Se(new Error("Failed to get canvas context"));
          return;
        }
        _e.drawImage(xe, 0, 0, qe, Qe);
        let ue = 0.9;
        const st = () => {
          $e.toBlob((et) => {
            if (!et) {
              Se(new Error("Failed to compress image"));
              return;
            }
            if (et.size / 1024 > K && ue > 0.3)
              ue -= 0.1, st();
            else {
              const we = new FileReader();
              we.onload = () => {
                const Pe = we.result.split(",")[1];
                G({ blob: et, base64: Pe });
              }, we.readAsDataURL(et);
            }
          }, R.type === "image/png" ? "image/png" : "image/jpeg", ue);
        };
        st();
      }, xe.onerror = () => Se(new Error("Failed to load image")), xe.src = (ve = Me.target) == null ? void 0 : ve.result;
    }, Ne.onerror = () => Se(new Error("Failed to read file")), Ne.readAsDataURL(R);
  }), z = async (R) => {
    if (n.value.length >= 3) {
      alert("Maximum 3 files allowed per message");
      return;
    }
    const Me = 3 - n.value.length, xe = R.slice(0, Me);
    R.length > Me && alert(`Only ${Me} more file(s) can be uploaded. Maximum 3 files per message.`);
    for (const ve of xe)
      try {
        if (n.value.some((de) => de.filename === ve.name)) {
          console.warn(`File ${ve.name} is already selected`), alert(`File "${ve.name}" is already selected`);
          continue;
        }
        const qe = ve.type.startsWith("image/"), Qe = qe ? 5242880 : 10485760;
        if (ve.size > Qe) {
          const de = Qe / 1048576;
          console.error(`File ${ve.name} is too large. Maximum size is ${de}MB`), alert(`File "${ve.name}" is too large. Maximum size for ${qe ? "images" : "documents"} is ${de}MB`);
          continue;
        }
        if (qe)
          try {
            const { blob: de, base64: _e } = await P(ve, 500), ue = de.size;
            console.log(`Compressed ${ve.name}: ${(ve.size / 1024).toFixed(2)}KB → ${(ue / 1024).toFixed(2)}KB`), n.value.push({
              content: _e,
              filename: ve.name,
              type: ve.type,
              size: ue,
              url: URL.createObjectURL(de),
              file_url: URL.createObjectURL(de)
            });
          } catch (de) {
            console.error("Image compression failed, uploading original:", de);
            const _e = new FileReader();
            _e.onload = (ue) => {
              var Te;
              const et = ((Te = ue.target) == null ? void 0 : Te.result).split(",")[1];
              n.value.push({
                content: et,
                filename: ve.name,
                type: ve.type,
                size: ve.size,
                url: URL.createObjectURL(ve),
                file_url: URL.createObjectURL(ve)
              });
            }, _e.readAsDataURL(ve);
          }
        else {
          const de = new FileReader();
          de.onload = (_e) => {
            var et;
            const st = ((et = _e.target) == null ? void 0 : et.result).split(",")[1];
            n.value.push({
              content: st,
              filename: ve.name,
              type: ve.type || "application/octet-stream",
              size: ve.size,
              url: "",
              file_url: ""
            });
          }, de.readAsDataURL(ve);
        }
      } catch ($e) {
        console.error("File upload error:", $e);
      }
  };
  return {
    uploadedAttachments: n,
    previewModal: s,
    previewFile: r,
    formatFileSize: i,
    isImageAttachment: o,
    getDownloadUrl: a,
    getPreviewUrl: l,
    handleFileSelect: d,
    handleDrop: c,
    handleDragOver: b,
    handleDragLeave: w,
    handlePaste: D,
    uploadFiles: z,
    removeAttachment: async (R) => {
      const K = n.value[R];
      if (K) {
        try {
          let G = K.url;
          if (G.startsWith("/uploads/") ? G = G.substring(9) : G.startsWith("/") && (G = G.substring(1)), fu(G))
            try {
              G = new URL(G).pathname.replace(/^\/+/, "");
            } catch {
            }
          const Se = {};
          e.value && (Se.Authorization = `Bearer ${e.value}`);
          const Ne = await fetch(`${os.API_URL}/files/upload/${G}`, {
            method: "DELETE",
            headers: Se
          });
          if (Ne.ok)
            console.log("File deleted successfully from backend.");
          else {
            const Me = await Ne.json();
            console.error("Failed to delete file:", Me.detail);
          }
        } catch (G) {
          console.error("Error calling delete API:", G);
        }
        K.url && K.url.startsWith("blob:") && URL.revokeObjectURL(K.url), K.file_url && K.file_url.startsWith("blob:") && URL.revokeObjectURL(K.file_url), n.value.splice(R, 1);
      }
    },
    openPreview: (R) => {
      r.value = R, s.value = !0;
    },
    closePreview: () => {
      s.value = !1, setTimeout(() => {
        r.value = null;
      }, 300);
    },
    openFilePicker: () => {
      var R;
      (R = t.value) == null || R.click();
    },
    isImage: (R) => R.startsWith("image/")
  };
}
const hn = /* @__PURE__ */ Object.create(null);
hn.open = "0";
hn.close = "1";
hn.ping = "2";
hn.pong = "3";
hn.message = "4";
hn.upgrade = "5";
hn.noop = "6";
const Wr = /* @__PURE__ */ Object.create(null);
Object.keys(hn).forEach((e) => {
  Wr[hn[e]] = e;
});
const To = { type: "error", data: "parser error" }, yu = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", vu = typeof ArrayBuffer == "function", bu = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, ra = ({ type: e, data: t }, n, s) => yu && t instanceof Blob ? n ? s(t) : Nl(t, s) : vu && (t instanceof ArrayBuffer || bu(t)) ? n ? s(t) : Nl(new Blob([t]), s) : s(hn[e] + (t || "")), Nl = (e, t) => {
  const n = new FileReader();
  return n.onload = function() {
    const s = n.result.split(",")[1];
    t("b" + (s || ""));
  }, n.readAsDataURL(e);
};
function Ml(e) {
  return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let Qi;
function Bg(e, t) {
  if (yu && e.data instanceof Blob)
    return e.data.arrayBuffer().then(Ml).then(t);
  if (vu && (e.data instanceof ArrayBuffer || bu(e.data)))
    return t(Ml(e.data));
  ra(e, !1, (n) => {
    Qi || (Qi = new TextEncoder()), t(Qi.encode(n));
  });
}
const Pl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", er = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < Pl.length; e++)
  er[Pl.charCodeAt(e)] = e;
const $g = (e) => {
  let t = e.length * 0.75, n = e.length, s, r = 0, i, o, a, l;
  e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
  const d = new ArrayBuffer(t), c = new Uint8Array(d);
  for (s = 0; s < n; s += 4)
    i = er[e.charCodeAt(s)], o = er[e.charCodeAt(s + 1)], a = er[e.charCodeAt(s + 2)], l = er[e.charCodeAt(s + 3)], c[r++] = i << 2 | o >> 4, c[r++] = (o & 15) << 4 | a >> 2, c[r++] = (a & 3) << 6 | l & 63;
  return d;
}, Ug = typeof ArrayBuffer == "function", ia = (e, t) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: wu(e, t)
    };
  const n = e.charAt(0);
  return n === "b" ? {
    type: "message",
    data: Hg(e.substring(1), t)
  } : Wr[n] ? e.length > 1 ? {
    type: Wr[n],
    data: e.substring(1)
  } : {
    type: Wr[n]
  } : To;
}, Hg = (e, t) => {
  if (Ug) {
    const n = $g(e);
    return wu(n, t);
  } else
    return { base64: !0, data: e };
}, wu = (e, t) => {
  switch (t) {
    case "blob":
      return e instanceof Blob ? e : new Blob([e]);
    case "arraybuffer":
    default:
      return e instanceof ArrayBuffer ? e : e.buffer;
  }
}, ku = "", zg = (e, t) => {
  const n = e.length, s = new Array(n);
  let r = 0;
  e.forEach((i, o) => {
    ra(i, !1, (a) => {
      s[o] = a, ++r === n && t(s.join(ku));
    });
  });
}, Wg = (e, t) => {
  const n = e.split(ku), s = [];
  for (let r = 0; r < n.length; r++) {
    const i = ia(n[r], t);
    if (s.push(i), i.type === "error")
      break;
  }
  return s;
};
function qg() {
  return new TransformStream({
    transform(e, t) {
      Bg(e, (n) => {
        const s = n.length;
        let r;
        if (s < 126)
          r = new Uint8Array(1), new DataView(r.buffer).setUint8(0, s);
        else if (s < 65536) {
          r = new Uint8Array(3);
          const i = new DataView(r.buffer);
          i.setUint8(0, 126), i.setUint16(1, s);
        } else {
          r = new Uint8Array(9);
          const i = new DataView(r.buffer);
          i.setUint8(0, 127), i.setBigUint64(1, BigInt(s));
        }
        e.data && typeof e.data != "string" && (r[0] |= 128), t.enqueue(r), t.enqueue(n);
      });
    }
  });
}
let eo;
function Lr(e) {
  return e.reduce((t, n) => t + n.length, 0);
}
function Or(e, t) {
  if (e[0].length === t)
    return e.shift();
  const n = new Uint8Array(t);
  let s = 0;
  for (let r = 0; r < t; r++)
    n[r] = e[0][s++], s === e[0].length && (e.shift(), s = 0);
  return e.length && s < e[0].length && (e[0] = e[0].slice(s)), n;
}
function jg(e, t) {
  eo || (eo = new TextDecoder());
  const n = [];
  let s = 0, r = -1, i = !1;
  return new TransformStream({
    transform(o, a) {
      for (n.push(o); ; ) {
        if (s === 0) {
          if (Lr(n) < 1)
            break;
          const l = Or(n, 1);
          i = (l[0] & 128) === 128, r = l[0] & 127, r < 126 ? s = 3 : r === 126 ? s = 1 : s = 2;
        } else if (s === 1) {
          if (Lr(n) < 2)
            break;
          const l = Or(n, 2);
          r = new DataView(l.buffer, l.byteOffset, l.length).getUint16(0), s = 3;
        } else if (s === 2) {
          if (Lr(n) < 8)
            break;
          const l = Or(n, 8), d = new DataView(l.buffer, l.byteOffset, l.length), c = d.getUint32(0);
          if (c > Math.pow(2, 21) - 1) {
            a.enqueue(To);
            break;
          }
          r = c * Math.pow(2, 32) + d.getUint32(4), s = 3;
        } else {
          if (Lr(n) < r)
            break;
          const l = Or(n, r);
          a.enqueue(ia(i ? l : eo.decode(l), t)), s = 0;
        }
        if (r === 0 || r > e) {
          a.enqueue(To);
          break;
        }
      }
    }
  });
}
const xu = 4;
function ht(e) {
  if (e) return Vg(e);
}
function Vg(e) {
  for (var t in ht.prototype)
    e[t] = ht.prototype[t];
  return e;
}
ht.prototype.on = ht.prototype.addEventListener = function(e, t) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this;
};
ht.prototype.once = function(e, t) {
  function n() {
    this.off(e, n), t.apply(this, arguments);
  }
  return n.fn = t, this.on(e, n), this;
};
ht.prototype.off = ht.prototype.removeListener = ht.prototype.removeAllListeners = ht.prototype.removeEventListener = function(e, t) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var n = this._callbacks["$" + e];
  if (!n) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + e], this;
  for (var s, r = 0; r < n.length; r++)
    if (s = n[r], s === t || s.fn === t) {
      n.splice(r, 1);
      break;
    }
  return n.length === 0 && delete this._callbacks["$" + e], this;
};
ht.prototype.emit = function(e) {
  this._callbacks = this._callbacks || {};
  for (var t = new Array(arguments.length - 1), n = this._callbacks["$" + e], s = 1; s < arguments.length; s++)
    t[s - 1] = arguments[s];
  if (n) {
    n = n.slice(0);
    for (var s = 0, r = n.length; s < r; ++s)
      n[s].apply(this, t);
  }
  return this;
};
ht.prototype.emitReserved = ht.prototype.emit;
ht.prototype.listeners = function(e) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
};
ht.prototype.hasListeners = function(e) {
  return !!this.listeners(e).length;
};
const ki = typeof Promise == "function" && typeof Promise.resolve == "function" ? (t) => Promise.resolve().then(t) : (t, n) => n(t, 0), Kt = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), Kg = "arraybuffer";
function Tu(e, ...t) {
  return t.reduce((n, s) => (e.hasOwnProperty(s) && (n[s] = e[s]), n), {});
}
const Gg = Kt.setTimeout, Yg = Kt.clearTimeout;
function xi(e, t) {
  t.useNativeTimers ? (e.setTimeoutFn = Gg.bind(Kt), e.clearTimeoutFn = Yg.bind(Kt)) : (e.setTimeoutFn = Kt.setTimeout.bind(Kt), e.clearTimeoutFn = Kt.clearTimeout.bind(Kt));
}
const Xg = 1.33;
function Zg(e) {
  return typeof e == "string" ? Jg(e) : Math.ceil((e.byteLength || e.size) * Xg);
}
function Jg(e) {
  let t = 0, n = 0;
  for (let s = 0, r = e.length; s < r; s++)
    t = e.charCodeAt(s), t < 128 ? n += 1 : t < 2048 ? n += 2 : t < 55296 || t >= 57344 ? n += 3 : (s++, n += 4);
  return n;
}
function Au() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function Qg(e) {
  let t = "";
  for (let n in e)
    e.hasOwnProperty(n) && (t.length && (t += "&"), t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
  return t;
}
function em(e) {
  let t = {}, n = e.split("&");
  for (let s = 0, r = n.length; s < r; s++) {
    let i = n[s].split("=");
    t[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
  }
  return t;
}
class tm extends Error {
  constructor(t, n, s) {
    super(t), this.description = n, this.context = s, this.type = "TransportError";
  }
}
class oa extends ht {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(t) {
    super(), this.writable = !1, xi(this, t), this.opts = t, this.query = t.query, this.socket = t.socket, this.supportsBinary = !t.forceBase64;
  }
  /**
   * Emits an error.
   *
   * @param {String} reason
   * @param description
   * @param context - the error context
   * @return {Transport} for chaining
   * @protected
   */
  onError(t, n, s) {
    return super.emitReserved("error", new tm(t, n, s)), this;
  }
  /**
   * Opens the transport.
   */
  open() {
    return this.readyState = "opening", this.doOpen(), this;
  }
  /**
   * Closes the transport.
   */
  close() {
    return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this;
  }
  /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   */
  send(t) {
    this.readyState === "open" && this.write(t);
  }
  /**
   * Called upon open
   *
   * @protected
   */
  onOpen() {
    this.readyState = "open", this.writable = !0, super.emitReserved("open");
  }
  /**
   * Called with data.
   *
   * @param {String} data
   * @protected
   */
  onData(t) {
    const n = ia(t, this.socket.binaryType);
    this.onPacket(n);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(t) {
    super.emitReserved("packet", t);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(t) {
    this.readyState = "closed", super.emitReserved("close", t);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(t) {
  }
  createUri(t, n = {}) {
    return t + "://" + this._hostname() + this._port() + this.opts.path + this._query(n);
  }
  _hostname() {
    const t = this.opts.hostname;
    return t.indexOf(":") === -1 ? t : "[" + t + "]";
  }
  _port() {
    return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
  }
  _query(t) {
    const n = Qg(t);
    return n.length ? "?" + n : "";
  }
}
class nm extends oa {
  constructor() {
    super(...arguments), this._polling = !1;
  }
  get name() {
    return "polling";
  }
  /**
   * Opens the socket (triggers polling). We write a PING message to determine
   * when the transport is open.
   *
   * @protected
   */
  doOpen() {
    this._poll();
  }
  /**
   * Pauses polling.
   *
   * @param {Function} onPause - callback upon buffers are flushed and transport is paused
   * @package
   */
  pause(t) {
    this.readyState = "pausing";
    const n = () => {
      this.readyState = "paused", t();
    };
    if (this._polling || !this.writable) {
      let s = 0;
      this._polling && (s++, this.once("pollComplete", function() {
        --s || n();
      })), this.writable || (s++, this.once("drain", function() {
        --s || n();
      }));
    } else
      n();
  }
  /**
   * Starts polling cycle.
   *
   * @private
   */
  _poll() {
    this._polling = !0, this.doPoll(), this.emitReserved("poll");
  }
  /**
   * Overloads onData to detect payloads.
   *
   * @protected
   */
  onData(t) {
    const n = (s) => {
      if (this.readyState === "opening" && s.type === "open" && this.onOpen(), s.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(s);
    };
    Wg(t, this.socket.binaryType).forEach(n), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const t = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? t() : this.once("open", t);
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(t) {
    this.writable = !1, zg(t, (n) => {
      this.doWrite(n, () => {
        this.writable = !0, this.emitReserved("drain");
      });
    });
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const t = this.opts.secure ? "https" : "http", n = this.query || {};
    return this.opts.timestampRequests !== !1 && (n[this.opts.timestampParam] = Au()), !this.supportsBinary && !n.sid && (n.b64 = 1), this.createUri(t, n);
  }
}
let Eu = !1;
try {
  Eu = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const sm = Eu;
function rm() {
}
class im extends nm {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(t) {
    if (super(t), typeof location < "u") {
      const n = location.protocol === "https:";
      let s = location.port;
      s || (s = n ? "443" : "80"), this.xd = typeof location < "u" && t.hostname !== location.hostname || s !== t.port;
    }
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(t, n) {
    const s = this.request({
      method: "POST",
      data: t
    });
    s.on("success", n), s.on("error", (r, i) => {
      this.onError("xhr post error", r, i);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const t = this.request();
    t.on("data", this.onData.bind(this)), t.on("error", (n, s) => {
      this.onError("xhr poll error", n, s);
    }), this.pollXhr = t;
  }
}
class un extends ht {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(t, n, s) {
    super(), this.createRequest = t, xi(this, s), this._opts = s, this._method = s.method || "GET", this._uri = n, this._data = s.data !== void 0 ? s.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var t;
    const n = Tu(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    n.xdomain = !!this._opts.xd;
    const s = this._xhr = this.createRequest(n);
    try {
      s.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          s.setDisableHeaderCheck && s.setDisableHeaderCheck(!0);
          for (let r in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(r) && s.setRequestHeader(r, this._opts.extraHeaders[r]);
        }
      } catch {
      }
      if (this._method === "POST")
        try {
          s.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        s.setRequestHeader("Accept", "*/*");
      } catch {
      }
      (t = this._opts.cookieJar) === null || t === void 0 || t.addCookies(s), "withCredentials" in s && (s.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (s.timeout = this._opts.requestTimeout), s.onreadystatechange = () => {
        var r;
        s.readyState === 3 && ((r = this._opts.cookieJar) === null || r === void 0 || r.parseCookies(
          // @ts-ignore
          s.getResponseHeader("set-cookie")
        )), s.readyState === 4 && (s.status === 200 || s.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
          this._onError(typeof s.status == "number" ? s.status : 0);
        }, 0));
      }, s.send(this._data);
    } catch (r) {
      this.setTimeoutFn(() => {
        this._onError(r);
      }, 0);
      return;
    }
    typeof document < "u" && (this._index = un.requestsCount++, un.requests[this._index] = this);
  }
  /**
   * Called upon error.
   *
   * @private
   */
  _onError(t) {
    this.emitReserved("error", t, this._xhr), this._cleanup(!0);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  _cleanup(t) {
    if (!(typeof this._xhr > "u" || this._xhr === null)) {
      if (this._xhr.onreadystatechange = rm, t)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete un.requests[this._index], this._xhr = null;
    }
  }
  /**
   * Called upon load.
   *
   * @private
   */
  _onLoad() {
    const t = this._xhr.responseText;
    t !== null && (this.emitReserved("data", t), this.emitReserved("success"), this._cleanup());
  }
  /**
   * Aborts the request.
   *
   * @package
   */
  abort() {
    this._cleanup();
  }
}
un.requestsCount = 0;
un.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", Fl);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in Kt ? "pagehide" : "unload";
    addEventListener(e, Fl, !1);
  }
}
function Fl() {
  for (let e in un.requests)
    un.requests.hasOwnProperty(e) && un.requests[e].abort();
}
const om = function() {
  const e = Su({
    xdomain: !1
  });
  return e && e.responseType !== null;
}();
class am extends im {
  constructor(t) {
    super(t);
    const n = t && t.forceBase64;
    this.supportsBinary = om && !n;
  }
  request(t = {}) {
    return Object.assign(t, { xd: this.xd }, this.opts), new un(Su, this.uri(), t);
  }
}
function Su(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || sm))
      return new XMLHttpRequest();
  } catch {
  }
  if (!t)
    try {
      return new Kt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const Cu = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class lm extends oa {
  get name() {
    return "websocket";
  }
  doOpen() {
    const t = this.uri(), n = this.opts.protocols, s = Cu ? {} : Tu(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (s.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(t, n, s);
    } catch (r) {
      return this.emitReserved("error", r);
    }
    this.ws.binaryType = this.socket.binaryType, this.addEventListeners();
  }
  /**
   * Adds event listeners to the socket
   *
   * @private
   */
  addEventListeners() {
    this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }, this.ws.onclose = (t) => this.onClose({
      description: "websocket connection closed",
      context: t
    }), this.ws.onmessage = (t) => this.onData(t.data), this.ws.onerror = (t) => this.onError("websocket error", t);
  }
  write(t) {
    this.writable = !1;
    for (let n = 0; n < t.length; n++) {
      const s = t[n], r = n === t.length - 1;
      ra(s, this.supportsBinary, (i) => {
        try {
          this.doWrite(s, i);
        } catch {
        }
        r && ki(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" && (this.ws.onerror = () => {
    }, this.ws.close(), this.ws = null);
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const t = this.opts.secure ? "wss" : "ws", n = this.query || {};
    return this.opts.timestampRequests && (n[this.opts.timestampParam] = Au()), this.supportsBinary || (n.b64 = 1), this.createUri(t, n);
  }
}
const to = Kt.WebSocket || Kt.MozWebSocket;
class cm extends lm {
  createSocket(t, n, s) {
    return Cu ? new to(t, n, s) : n ? new to(t, n) : new to(t);
  }
  doWrite(t, n) {
    this.ws.send(n);
  }
}
class um extends oa {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
    } catch (t) {
      return this.emitReserved("error", t);
    }
    this._transport.closed.then(() => {
      this.onClose();
    }).catch((t) => {
      this.onError("webtransport error", t);
    }), this._transport.ready.then(() => {
      this._transport.createBidirectionalStream().then((t) => {
        const n = jg(Number.MAX_SAFE_INTEGER, this.socket.binaryType), s = t.readable.pipeThrough(n).getReader(), r = qg();
        r.readable.pipeTo(t.writable), this._writer = r.writable.getWriter();
        const i = () => {
          s.read().then(({ done: a, value: l }) => {
            a || (this.onPacket(l), i());
          }).catch((a) => {
          });
        };
        i();
        const o = { type: "open" };
        this.query.sid && (o.data = `{"sid":"${this.query.sid}"}`), this._writer.write(o).then(() => this.onOpen());
      });
    });
  }
  write(t) {
    this.writable = !1;
    for (let n = 0; n < t.length; n++) {
      const s = t[n], r = n === t.length - 1;
      this._writer.write(s).then(() => {
        r && ki(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var t;
    (t = this._transport) === null || t === void 0 || t.close();
  }
}
const fm = {
  websocket: cm,
  webtransport: um,
  polling: am
}, hm = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, dm = [
  "source",
  "protocol",
  "authority",
  "userInfo",
  "user",
  "password",
  "host",
  "port",
  "relative",
  "path",
  "directory",
  "file",
  "query",
  "anchor"
];
function Ao(e) {
  if (e.length > 8e3)
    throw "URI too long";
  const t = e, n = e.indexOf("["), s = e.indexOf("]");
  n != -1 && s != -1 && (e = e.substring(0, n) + e.substring(n, s).replace(/:/g, ";") + e.substring(s, e.length));
  let r = hm.exec(e || ""), i = {}, o = 14;
  for (; o--; )
    i[dm[o]] = r[o] || "";
  return n != -1 && s != -1 && (i.source = t, i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":"), i.authority = i.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), i.ipv6uri = !0), i.pathNames = pm(i, i.path), i.queryKey = gm(i, i.query), i;
}
function pm(e, t) {
  const n = /\/{2,9}/g, s = t.replace(n, "/").split("/");
  return (t.slice(0, 1) == "/" || t.length === 0) && s.splice(0, 1), t.slice(-1) == "/" && s.splice(s.length - 1, 1), s;
}
function gm(e, t) {
  const n = {};
  return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(s, r, i) {
    r && (n[r] = i);
  }), n;
}
const Eo = typeof addEventListener == "function" && typeof removeEventListener == "function", qr = [];
Eo && addEventListener("offline", () => {
  qr.forEach((e) => e());
}, !1);
class Dn extends ht {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(t, n) {
    if (super(), this.binaryType = Kg, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, t && typeof t == "object" && (n = t, t = null), t) {
      const s = Ao(t);
      n.hostname = s.host, n.secure = s.protocol === "https" || s.protocol === "wss", n.port = s.port, s.query && (n.query = s.query);
    } else n.host && (n.hostname = Ao(n.host).host);
    xi(this, n), this.secure = n.secure != null ? n.secure : typeof location < "u" && location.protocol === "https:", n.hostname && !n.port && (n.port = this.secure ? "443" : "80"), this.hostname = n.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = n.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, n.transports.forEach((s) => {
      const r = s.prototype.name;
      this.transports.push(r), this._transportsByName[r] = s;
    }), this.opts = Object.assign({
      path: "/engine.io",
      agent: !1,
      withCredentials: !1,
      upgrade: !0,
      timestampParam: "t",
      rememberUpgrade: !1,
      addTrailingSlash: !0,
      rejectUnauthorized: !0,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: !1
    }, n), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = em(this.opts.query)), Eo && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, qr.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(t) {
    const n = Object.assign({}, this.opts.query);
    n.EIO = xu, n.transport = t, this.id && (n.sid = this.id);
    const s = Object.assign({}, this.opts, {
      query: n,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[t]);
    return new this._transportsByName[t](s);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    }
    const t = this.opts.rememberUpgrade && Dn.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
    this.readyState = "opening";
    const n = this.createTransport(t);
    n.open(), this.setTransport(n);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(t) {
    this.transport && this.transport.removeAllListeners(), this.transport = t, t.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (n) => this._onClose("transport close", n));
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    this.readyState = "open", Dn.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  _onPacket(t) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
      switch (this.emitReserved("packet", t), this.emitReserved("heartbeat"), t.type) {
        case "open":
          this.onHandshake(JSON.parse(t.data));
          break;
        case "ping":
          this._sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong"), this._resetPingTimeout();
          break;
        case "error":
          const n = new Error("server error");
          n.code = t.data, this._onError(n);
          break;
        case "message":
          this.emitReserved("data", t.data), this.emitReserved("message", t.data);
          break;
      }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(t) {
    this.emitReserved("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this._pingInterval = t.pingInterval, this._pingTimeout = t.pingTimeout, this._maxPayload = t.maxPayload, this.onOpen(), this.readyState !== "closed" && this._resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @private
   */
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const t = this._pingInterval + this._pingTimeout;
    this._pingTimeoutTime = Date.now() + t, this._pingTimeoutTimer = this.setTimeoutFn(() => {
      this._onClose("ping timeout");
    }, t), this.opts.autoUnref && this._pingTimeoutTimer.unref();
  }
  /**
   * Called on `drain` event
   *
   * @private
   */
  _onDrain() {
    this.writeBuffer.splice(0, this._prevBufferLen), this._prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  /**
   * Flush write buffers.
   *
   * @private
   */
  flush() {
    if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const t = this._getWritablePackets();
      this.transport.send(t), this._prevBufferLen = t.length, this.emitReserved("flush");
    }
  }
  /**
   * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
   * long-polling)
   *
   * @private
   */
  _getWritablePackets() {
    if (!(this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
      return this.writeBuffer;
    let n = 1;
    for (let s = 0; s < this.writeBuffer.length; s++) {
      const r = this.writeBuffer[s].data;
      if (r && (n += Zg(r)), s > 0 && n > this._maxPayload)
        return this.writeBuffer.slice(0, s);
      n += 2;
    }
    return this.writeBuffer;
  }
  /**
   * Checks whether the heartbeat timer has expired but the socket has not yet been notified.
   *
   * Note: this method is private for now because it does not really fit the WebSocket API, but if we put it in the
   * `write()` method then the message would not be buffered by the Socket.IO client.
   *
   * @return {boolean}
   * @private
   */
  /* private */
  _hasPingExpired() {
    if (!this._pingTimeoutTime)
      return !0;
    const t = Date.now() > this._pingTimeoutTime;
    return t && (this._pingTimeoutTime = 0, ki(() => {
      this._onClose("ping timeout");
    }, this.setTimeoutFn)), t;
  }
  /**
   * Sends a message.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  write(t, n, s) {
    return this._sendPacket("message", t, n, s), this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(t, n, s) {
    return this._sendPacket("message", t, n, s), this;
  }
  /**
   * Sends a packet.
   *
   * @param {String} type: packet type.
   * @param {String} data.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @private
   */
  _sendPacket(t, n, s, r) {
    if (typeof n == "function" && (r = n, n = void 0), typeof s == "function" && (r = s, s = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    s = s || {}, s.compress = s.compress !== !1;
    const i = {
      type: t,
      data: n,
      options: s
    };
    this.emitReserved("packetCreate", i), this.writeBuffer.push(i), r && this.once("flush", r), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const t = () => {
      this._onClose("forced close"), this.transport.close();
    }, n = () => {
      this.off("upgrade", n), this.off("upgradeError", n), t();
    }, s = () => {
      this.once("upgrade", n), this.once("upgradeError", n);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? s() : t();
    }) : this.upgrading ? s() : t()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  _onError(t) {
    if (Dn.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
      return this.transports.shift(), this._open();
    this.emitReserved("error", t), this._onClose("transport error", t);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  _onClose(t, n) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), Eo && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const s = qr.indexOf(this._offlineEventListener);
        s !== -1 && qr.splice(s, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", t, n), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
Dn.protocol = xu;
class mm extends Dn {
  constructor() {
    super(...arguments), this._upgrades = [];
  }
  onOpen() {
    if (super.onOpen(), this.readyState === "open" && this.opts.upgrade)
      for (let t = 0; t < this._upgrades.length; t++)
        this._probe(this._upgrades[t]);
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  _probe(t) {
    let n = this.createTransport(t), s = !1;
    Dn.priorWebsocketSuccess = !1;
    const r = () => {
      s || (n.send([{ type: "ping", data: "probe" }]), n.once("packet", (b) => {
        if (!s)
          if (b.type === "pong" && b.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", n), !n)
              return;
            Dn.priorWebsocketSuccess = n.name === "websocket", this.transport.pause(() => {
              s || this.readyState !== "closed" && (c(), this.setTransport(n), n.send([{ type: "upgrade" }]), this.emitReserved("upgrade", n), n = null, this.upgrading = !1, this.flush());
            });
          } else {
            const w = new Error("probe error");
            w.transport = n.name, this.emitReserved("upgradeError", w);
          }
      }));
    };
    function i() {
      s || (s = !0, c(), n.close(), n = null);
    }
    const o = (b) => {
      const w = new Error("probe error: " + b);
      w.transport = n.name, i(), this.emitReserved("upgradeError", w);
    };
    function a() {
      o("transport closed");
    }
    function l() {
      o("socket closed");
    }
    function d(b) {
      n && b.name !== n.name && i();
    }
    const c = () => {
      n.removeListener("open", r), n.removeListener("error", o), n.removeListener("close", a), this.off("close", l), this.off("upgrading", d);
    };
    n.once("open", r), n.once("error", o), n.once("close", a), this.once("close", l), this.once("upgrading", d), this._upgrades.indexOf("webtransport") !== -1 && t !== "webtransport" ? this.setTimeoutFn(() => {
      s || n.open();
    }, 200) : n.open();
  }
  onHandshake(t) {
    this._upgrades = this._filterUpgrades(t.upgrades), super.onHandshake(t);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  _filterUpgrades(t) {
    const n = [];
    for (let s = 0; s < t.length; s++)
      ~this.transports.indexOf(t[s]) && n.push(t[s]);
    return n;
  }
}
let _m = class extends mm {
  constructor(t, n = {}) {
    const s = typeof t == "object" ? t : n;
    (!s.transports || s.transports && typeof s.transports[0] == "string") && (s.transports = (s.transports || ["polling", "websocket", "webtransport"]).map((r) => fm[r]).filter((r) => !!r)), super(t, s);
  }
};
function ym(e, t = "", n) {
  let s = e;
  n = n || typeof location < "u" && location, e == null && (e = n.protocol + "//" + n.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = n.protocol + e : e = n.host + e), /^(https?|wss?):\/\//.test(e) || (typeof n < "u" ? e = n.protocol + "//" + e : e = "https://" + e), s = Ao(e)), s.port || (/^(http|ws)$/.test(s.protocol) ? s.port = "80" : /^(http|ws)s$/.test(s.protocol) && (s.port = "443")), s.path = s.path || "/";
  const i = s.host.indexOf(":") !== -1 ? "[" + s.host + "]" : s.host;
  return s.id = s.protocol + "://" + i + ":" + s.port + t, s.href = s.protocol + "://" + i + (n && n.port === s.port ? "" : ":" + s.port), s;
}
const vm = typeof ArrayBuffer == "function", bm = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, Ru = Object.prototype.toString, wm = typeof Blob == "function" || typeof Blob < "u" && Ru.call(Blob) === "[object BlobConstructor]", km = typeof File == "function" || typeof File < "u" && Ru.call(File) === "[object FileConstructor]";
function aa(e) {
  return vm && (e instanceof ArrayBuffer || bm(e)) || wm && e instanceof Blob || km && e instanceof File;
}
function jr(e, t) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let n = 0, s = e.length; n < s; n++)
      if (jr(e[n]))
        return !0;
    return !1;
  }
  if (aa(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return jr(e.toJSON(), !0);
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && jr(e[n]))
      return !0;
  return !1;
}
function xm(e) {
  const t = [], n = e.data, s = e;
  return s.data = So(n, t), s.attachments = t.length, { packet: s, buffers: t };
}
function So(e, t) {
  if (!e)
    return e;
  if (aa(e)) {
    const n = { _placeholder: !0, num: t.length };
    return t.push(e), n;
  } else if (Array.isArray(e)) {
    const n = new Array(e.length);
    for (let s = 0; s < e.length; s++)
      n[s] = So(e[s], t);
    return n;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const n = {};
    for (const s in e)
      Object.prototype.hasOwnProperty.call(e, s) && (n[s] = So(e[s], t));
    return n;
  }
  return e;
}
function Tm(e, t) {
  return e.data = Co(e.data, t), delete e.attachments, e;
}
function Co(e, t) {
  if (!e)
    return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let n = 0; n < e.length; n++)
      e[n] = Co(e[n], t);
  else if (typeof e == "object")
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (e[n] = Co(e[n], t));
  return e;
}
const Am = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
];
var Oe;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(Oe || (Oe = {}));
class Em {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(t) {
    this.replacer = t;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(t) {
    return (t.type === Oe.EVENT || t.type === Oe.ACK) && jr(t) ? this.encodeAsBinary({
      type: t.type === Oe.EVENT ? Oe.BINARY_EVENT : Oe.BINARY_ACK,
      nsp: t.nsp,
      data: t.data,
      id: t.id
    }) : [this.encodeAsString(t)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(t) {
    let n = "" + t.type;
    return (t.type === Oe.BINARY_EVENT || t.type === Oe.BINARY_ACK) && (n += t.attachments + "-"), t.nsp && t.nsp !== "/" && (n += t.nsp + ","), t.id != null && (n += t.id), t.data != null && (n += JSON.stringify(t.data, this.replacer)), n;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(t) {
    const n = xm(t), s = this.encodeAsString(n.packet), r = n.buffers;
    return r.unshift(s), r;
  }
}
function Dl(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class la extends ht {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(t) {
    super(), this.reviver = t;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(t) {
    let n;
    if (typeof t == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      n = this.decodeString(t);
      const s = n.type === Oe.BINARY_EVENT;
      s || n.type === Oe.BINARY_ACK ? (n.type = s ? Oe.EVENT : Oe.ACK, this.reconstructor = new Sm(n), n.attachments === 0 && super.emitReserved("decoded", n)) : super.emitReserved("decoded", n);
    } else if (aa(t) || t.base64)
      if (this.reconstructor)
        n = this.reconstructor.takeBinaryData(t), n && (this.reconstructor = null, super.emitReserved("decoded", n));
      else
        throw new Error("got binary data when not reconstructing a packet");
    else
      throw new Error("Unknown type: " + t);
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(t) {
    let n = 0;
    const s = {
      type: Number(t.charAt(0))
    };
    if (Oe[s.type] === void 0)
      throw new Error("unknown packet type " + s.type);
    if (s.type === Oe.BINARY_EVENT || s.type === Oe.BINARY_ACK) {
      const i = n + 1;
      for (; t.charAt(++n) !== "-" && n != t.length; )
        ;
      const o = t.substring(i, n);
      if (o != Number(o) || t.charAt(n) !== "-")
        throw new Error("Illegal attachments");
      s.attachments = Number(o);
    }
    if (t.charAt(n + 1) === "/") {
      const i = n + 1;
      for (; ++n && !(t.charAt(n) === "," || n === t.length); )
        ;
      s.nsp = t.substring(i, n);
    } else
      s.nsp = "/";
    const r = t.charAt(n + 1);
    if (r !== "" && Number(r) == r) {
      const i = n + 1;
      for (; ++n; ) {
        const o = t.charAt(n);
        if (o == null || Number(o) != o) {
          --n;
          break;
        }
        if (n === t.length)
          break;
      }
      s.id = Number(t.substring(i, n + 1));
    }
    if (t.charAt(++n)) {
      const i = this.tryParse(t.substr(n));
      if (la.isPayloadValid(s.type, i))
        s.data = i;
      else
        throw new Error("invalid payload");
    }
    return s;
  }
  tryParse(t) {
    try {
      return JSON.parse(t, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(t, n) {
    switch (t) {
      case Oe.CONNECT:
        return Dl(n);
      case Oe.DISCONNECT:
        return n === void 0;
      case Oe.CONNECT_ERROR:
        return typeof n == "string" || Dl(n);
      case Oe.EVENT:
      case Oe.BINARY_EVENT:
        return Array.isArray(n) && (typeof n[0] == "number" || typeof n[0] == "string" && Am.indexOf(n[0]) === -1);
      case Oe.ACK:
      case Oe.BINARY_ACK:
        return Array.isArray(n);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
  }
}
class Sm {
  constructor(t) {
    this.packet = t, this.buffers = [], this.reconPack = t;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(t) {
    if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {
      const n = Tm(this.reconPack, this.buffers);
      return this.finishedReconstruction(), n;
    }
    return null;
  }
  /**
   * Cleans up binary packet reconstruction variables.
   */
  finishedReconstruction() {
    this.reconPack = null, this.buffers = [];
  }
}
const Cm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: la,
  Encoder: Em,
  get PacketType() {
    return Oe;
  }
}, Symbol.toStringTag, { value: "Module" }));
function en(e, t, n) {
  return e.on(t, n), function() {
    e.off(t, n);
  };
}
const Rm = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
class Iu extends ht {
  /**
   * `Socket` constructor.
   */
  constructor(t, n, s) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = t, this.nsp = n, s && s.auth && (this.auth = s.auth), this._opts = Object.assign({}, s), this.io._autoConnect && this.open();
  }
  /**
   * Whether the socket is currently disconnected
   *
   * @example
   * const socket = io();
   *
   * socket.on("connect", () => {
   *   console.log(socket.disconnected); // false
   * });
   *
   * socket.on("disconnect", () => {
   *   console.log(socket.disconnected); // true
   * });
   */
  get disconnected() {
    return !this.connected;
  }
  /**
   * Subscribe to open, close and packet events
   *
   * @private
   */
  subEvents() {
    if (this.subs)
      return;
    const t = this.io;
    this.subs = [
      en(t, "open", this.onopen.bind(this)),
      en(t, "packet", this.onpacket.bind(this)),
      en(t, "error", this.onerror.bind(this)),
      en(t, "close", this.onclose.bind(this))
    ];
  }
  /**
   * Whether the Socket will try to reconnect when its Manager connects or reconnects.
   *
   * @example
   * const socket = io();
   *
   * console.log(socket.active); // true
   *
   * socket.on("disconnect", (reason) => {
   *   if (reason === "io server disconnect") {
   *     // the disconnection was initiated by the server, you need to manually reconnect
   *     console.log(socket.active); // false
   *   }
   *   // else the socket will automatically try to reconnect
   *   console.log(socket.active); // true
   * });
   */
  get active() {
    return !!this.subs;
  }
  /**
   * "Opens" the socket.
   *
   * @example
   * const socket = io({
   *   autoConnect: false
   * });
   *
   * socket.connect();
   */
  connect() {
    return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this);
  }
  /**
   * Alias for {@link connect()}.
   */
  open() {
    return this.connect();
  }
  /**
   * Sends a `message` event.
   *
   * This method mimics the WebSocket.send() method.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
   *
   * @example
   * socket.send("hello");
   *
   * // this is equivalent to
   * socket.emit("message", "hello");
   *
   * @return self
   */
  send(...t) {
    return t.unshift("message"), this.emit.apply(this, t), this;
  }
  /**
   * Override `emit`.
   * If the event is in `events`, it's emitted normally.
   *
   * @example
   * socket.emit("hello", "world");
   *
   * // all serializable datastructures are supported (no need to call JSON.stringify)
   * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
   *
   * // with an acknowledgement from the server
   * socket.emit("hello", "world", (val) => {
   *   // ...
   * });
   *
   * @return self
   */
  emit(t, ...n) {
    var s, r, i;
    if (Rm.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (n.unshift(t), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(n), this;
    const o = {
      type: Oe.EVENT,
      data: n
    };
    if (o.options = {}, o.options.compress = this.flags.compress !== !1, typeof n[n.length - 1] == "function") {
      const c = this.ids++, b = n.pop();
      this._registerAckCallback(c, b), o.id = c;
    }
    const a = (r = (s = this.io.engine) === null || s === void 0 ? void 0 : s.transport) === null || r === void 0 ? void 0 : r.writable, l = this.connected && !(!((i = this.io.engine) === null || i === void 0) && i._hasPingExpired());
    return this.flags.volatile && !a || (l ? (this.notifyOutgoingListeners(o), this.packet(o)) : this.sendBuffer.push(o)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(t, n) {
    var s;
    const r = (s = this.flags.timeout) !== null && s !== void 0 ? s : this._opts.ackTimeout;
    if (r === void 0) {
      this.acks[t] = n;
      return;
    }
    const i = this.io.setTimeoutFn(() => {
      delete this.acks[t];
      for (let a = 0; a < this.sendBuffer.length; a++)
        this.sendBuffer[a].id === t && this.sendBuffer.splice(a, 1);
      n.call(this, new Error("operation has timed out"));
    }, r), o = (...a) => {
      this.io.clearTimeoutFn(i), n.apply(this, a);
    };
    o.withError = !0, this.acks[t] = o;
  }
  /**
   * Emits an event and waits for an acknowledgement
   *
   * @example
   * // without timeout
   * const response = await socket.emitWithAck("hello", "world");
   *
   * // with a specific timeout
   * try {
   *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
   * } catch (err) {
   *   // the server did not acknowledge the event in the given delay
   * }
   *
   * @return a Promise that will be fulfilled when the server acknowledges the event
   */
  emitWithAck(t, ...n) {
    return new Promise((s, r) => {
      const i = (o, a) => o ? r(o) : s(a);
      i.withError = !0, n.push(i), this.emit(t, ...n);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(t) {
    let n;
    typeof t[t.length - 1] == "function" && (n = t.pop());
    const s = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: t,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    t.push((r, ...i) => s !== this._queue[0] ? void 0 : (r !== null ? s.tryCount > this._opts.retries && (this._queue.shift(), n && n(r)) : (this._queue.shift(), n && n(null, ...i)), s.pending = !1, this._drainQueue())), this._queue.push(s), this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(t = !1) {
    if (!this.connected || this._queue.length === 0)
      return;
    const n = this._queue[0];
    n.pending && !t || (n.pending = !0, n.tryCount++, this.flags = n.flags, this.emit.apply(this, n.args));
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(t) {
    t.nsp = this.nsp, this.io._packet(t);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    typeof this.auth == "function" ? this.auth((t) => {
      this._sendConnectPacket(t);
    }) : this._sendConnectPacket(this.auth);
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(t) {
    this.packet({
      type: Oe.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, t) : t
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(t) {
    this.connected || this.emitReserved("connect_error", t);
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(t, n) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", t, n), this._clearAcks();
  }
  /**
   * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
   * the server.
   *
   * @private
   */
  _clearAcks() {
    Object.keys(this.acks).forEach((t) => {
      if (!this.sendBuffer.some((s) => String(s.id) === t)) {
        const s = this.acks[t];
        delete this.acks[t], s.withError && s.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(t) {
    if (t.nsp === this.nsp)
      switch (t.type) {
        case Oe.CONNECT:
          t.data && t.data.sid ? this.onconnect(t.data.sid, t.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case Oe.EVENT:
        case Oe.BINARY_EVENT:
          this.onevent(t);
          break;
        case Oe.ACK:
        case Oe.BINARY_ACK:
          this.onack(t);
          break;
        case Oe.DISCONNECT:
          this.ondisconnect();
          break;
        case Oe.CONNECT_ERROR:
          this.destroy();
          const s = new Error(t.data.message);
          s.data = t.data.data, this.emitReserved("connect_error", s);
          break;
      }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(t) {
    const n = t.data || [];
    t.id != null && n.push(this.ack(t.id)), this.connected ? this.emitEvent(n) : this.receiveBuffer.push(Object.freeze(n));
  }
  emitEvent(t) {
    if (this._anyListeners && this._anyListeners.length) {
      const n = this._anyListeners.slice();
      for (const s of n)
        s.apply(this, t);
    }
    super.emit.apply(this, t), this._pid && t.length && typeof t[t.length - 1] == "string" && (this._lastOffset = t[t.length - 1]);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(t) {
    const n = this;
    let s = !1;
    return function(...r) {
      s || (s = !0, n.packet({
        type: Oe.ACK,
        id: t,
        data: r
      }));
    };
  }
  /**
   * Called upon a server acknowledgement.
   *
   * @param packet
   * @private
   */
  onack(t) {
    const n = this.acks[t.id];
    typeof n == "function" && (delete this.acks[t.id], n.withError && t.data.unshift(null), n.apply(this, t.data));
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(t, n) {
    this.id = t, this.recovered = n && this._pid === n, this._pid = n, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((t) => this.emitEvent(t)), this.receiveBuffer = [], this.sendBuffer.forEach((t) => {
      this.notifyOutgoingListeners(t), this.packet(t);
    }), this.sendBuffer = [];
  }
  /**
   * Called upon server disconnect.
   *
   * @private
   */
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  /**
   * Called upon forced client/server side disconnections,
   * this method ensures the manager stops tracking us and
   * that reconnections don't get triggered for this.
   *
   * @private
   */
  destroy() {
    this.subs && (this.subs.forEach((t) => t()), this.subs = void 0), this.io._destroy(this);
  }
  /**
   * Disconnects the socket manually. In that case, the socket will not try to reconnect.
   *
   * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
   *
   * @example
   * const socket = io();
   *
   * socket.on("disconnect", (reason) => {
   *   // console.log(reason); prints "io client disconnect"
   * });
   *
   * socket.disconnect();
   *
   * @return self
   */
  disconnect() {
    return this.connected && this.packet({ type: Oe.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
  }
  /**
   * Alias for {@link disconnect()}.
   *
   * @return self
   */
  close() {
    return this.disconnect();
  }
  /**
   * Sets the compress flag.
   *
   * @example
   * socket.compress(false).emit("hello");
   *
   * @param compress - if `true`, compresses the sending data
   * @return self
   */
  compress(t) {
    return this.flags.compress = t, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
   * ready to send messages.
   *
   * @example
   * socket.volatile.emit("hello"); // the server may or may not receive it
   *
   * @returns self
   */
  get volatile() {
    return this.flags.volatile = !0, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
   * given number of milliseconds have elapsed without an acknowledgement from the server:
   *
   * @example
   * socket.timeout(5000).emit("my-event", (err) => {
   *   if (err) {
   *     // the server did not acknowledge the event in the given delay
   *   }
   * });
   *
   * @returns self
   */
  timeout(t) {
    return this.flags.timeout = t, this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * @example
   * socket.onAny((event, ...args) => {
   *   console.log(`got ${event}`);
   * });
   *
   * @param listener
   */
  onAny(t) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(t), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * @example
   * socket.prependAny((event, ...args) => {
   *   console.log(`got event ${event}`);
   * });
   *
   * @param listener
   */
  prependAny(t) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(t), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`got event ${event}`);
   * }
   *
   * socket.onAny(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAny(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAny();
   *
   * @param listener
   */
  offAny(t) {
    if (!this._anyListeners)
      return this;
    if (t) {
      const n = this._anyListeners;
      for (let s = 0; s < n.length; s++)
        if (t === n[s])
          return n.splice(s, 1), this;
    } else
      this._anyListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAny() {
    return this._anyListeners || [];
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.onAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  onAnyOutgoing(t) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(t), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.prependAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  prependAnyOutgoing(t) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(t), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`sent event ${event}`);
   * }
   *
   * socket.onAnyOutgoing(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAnyOutgoing(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAnyOutgoing();
   *
   * @param [listener] - the catch-all listener (optional)
   */
  offAnyOutgoing(t) {
    if (!this._anyOutgoingListeners)
      return this;
    if (t) {
      const n = this._anyOutgoingListeners;
      for (let s = 0; s < n.length; s++)
        if (t === n[s])
          return n.splice(s, 1), this;
    } else
      this._anyOutgoingListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  /**
   * Notify the listeners for each packet sent
   *
   * @param packet
   *
   * @private
   */
  notifyOutgoingListeners(t) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const n = this._anyOutgoingListeners.slice();
      for (const s of n)
        s.apply(this, t.data);
    }
  }
}
function Cs(e) {
  e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
}
Cs.prototype.duration = function() {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(), n = Math.floor(t * this.jitter * e);
    e = (Math.floor(t * 10) & 1) == 0 ? e - n : e + n;
  }
  return Math.min(e, this.max) | 0;
};
Cs.prototype.reset = function() {
  this.attempts = 0;
};
Cs.prototype.setMin = function(e) {
  this.ms = e;
};
Cs.prototype.setMax = function(e) {
  this.max = e;
};
Cs.prototype.setJitter = function(e) {
  this.jitter = e;
};
class Ro extends ht {
  constructor(t, n) {
    var s;
    super(), this.nsps = {}, this.subs = [], t && typeof t == "object" && (n = t, t = void 0), n = n || {}, n.path = n.path || "/socket.io", this.opts = n, xi(this, n), this.reconnection(n.reconnection !== !1), this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0), this.reconnectionDelay(n.reconnectionDelay || 1e3), this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3), this.randomizationFactor((s = n.randomizationFactor) !== null && s !== void 0 ? s : 0.5), this.backoff = new Cs({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(n.timeout == null ? 2e4 : n.timeout), this._readyState = "closed", this.uri = t;
    const r = n.parser || Cm;
    this.encoder = new r.Encoder(), this.decoder = new r.Decoder(), this._autoConnect = n.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(t) {
    return arguments.length ? (this._reconnection = !!t, t || (this.skipReconnect = !0), this) : this._reconnection;
  }
  reconnectionAttempts(t) {
    return t === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = t, this);
  }
  reconnectionDelay(t) {
    var n;
    return t === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = t, (n = this.backoff) === null || n === void 0 || n.setMin(t), this);
  }
  randomizationFactor(t) {
    var n;
    return t === void 0 ? this._randomizationFactor : (this._randomizationFactor = t, (n = this.backoff) === null || n === void 0 || n.setJitter(t), this);
  }
  reconnectionDelayMax(t) {
    var n;
    return t === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t, (n = this.backoff) === null || n === void 0 || n.setMax(t), this);
  }
  timeout(t) {
    return arguments.length ? (this._timeout = t, this) : this._timeout;
  }
  /**
   * Starts trying to reconnect if reconnection is enabled and we have not
   * started reconnecting yet
   *
   * @private
   */
  maybeReconnectOnOpen() {
    !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect();
  }
  /**
   * Sets the current transport `socket`.
   *
   * @param {Function} fn - optional, callback
   * @return self
   * @public
   */
  open(t) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new _m(this.uri, this.opts);
    const n = this.engine, s = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const r = en(n, "open", function() {
      s.onopen(), t && t();
    }), i = (a) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), t ? t(a) : this.maybeReconnectOnOpen();
    }, o = en(n, "error", i);
    if (this._timeout !== !1) {
      const a = this._timeout, l = this.setTimeoutFn(() => {
        r(), i(new Error("timeout")), n.close();
      }, a);
      this.opts.autoUnref && l.unref(), this.subs.push(() => {
        this.clearTimeoutFn(l);
      });
    }
    return this.subs.push(r), this.subs.push(o), this;
  }
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */
  connect(t) {
    return this.open(t);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup(), this._readyState = "open", this.emitReserved("open");
    const t = this.engine;
    this.subs.push(
      en(t, "ping", this.onping.bind(this)),
      en(t, "data", this.ondata.bind(this)),
      en(t, "error", this.onerror.bind(this)),
      en(t, "close", this.onclose.bind(this)),
      // @ts-ignore
      en(this.decoder, "decoded", this.ondecoded.bind(this))
    );
  }
  /**
   * Called upon a ping.
   *
   * @private
   */
  onping() {
    this.emitReserved("ping");
  }
  /**
   * Called with data.
   *
   * @private
   */
  ondata(t) {
    try {
      this.decoder.add(t);
    } catch (n) {
      this.onclose("parse error", n);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(t) {
    ki(() => {
      this.emitReserved("packet", t);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(t) {
    this.emitReserved("error", t);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(t, n) {
    let s = this.nsps[t];
    return s ? this._autoConnect && !s.active && s.connect() : (s = new Iu(this, t, n), this.nsps[t] = s), s;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(t) {
    const n = Object.keys(this.nsps);
    for (const s of n)
      if (this.nsps[s].active)
        return;
    this._close();
  }
  /**
   * Writes a packet.
   *
   * @param packet
   * @private
   */
  _packet(t) {
    const n = this.encoder.encode(t);
    for (let s = 0; s < n.length; s++)
      this.engine.write(n[s], t.options);
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((t) => t()), this.subs.length = 0, this.decoder.destroy();
  }
  /**
   * Close the current socket.
   *
   * @private
   */
  _close() {
    this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close");
  }
  /**
   * Alias for close()
   *
   * @private
   */
  disconnect() {
    return this._close();
  }
  /**
   * Called when:
   *
   * - the low-level engine is closed
   * - the parser encountered a badly formatted packet
   * - all sockets are disconnected
   *
   * @private
   */
  onclose(t, n) {
    var s;
    this.cleanup(), (s = this.engine) === null || s === void 0 || s.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", t, n), this._reconnection && !this.skipReconnect && this.reconnect();
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const t = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
    else {
      const n = this.backoff.duration();
      this._reconnecting = !0;
      const s = this.setTimeoutFn(() => {
        t.skipReconnect || (this.emitReserved("reconnect_attempt", t.backoff.attempts), !t.skipReconnect && t.open((r) => {
          r ? (t._reconnecting = !1, t.reconnect(), this.emitReserved("reconnect_error", r)) : t.onreconnect();
        }));
      }, n);
      this.opts.autoUnref && s.unref(), this.subs.push(() => {
        this.clearTimeoutFn(s);
      });
    }
  }
  /**
   * Called upon successful reconnect.
   *
   * @private
   */
  onreconnect() {
    const t = this.backoff.attempts;
    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", t);
  }
}
const Zs = {};
function Vr(e, t) {
  typeof e == "object" && (t = e, e = void 0), t = t || {};
  const n = ym(e, t.path || "/socket.io"), s = n.source, r = n.id, i = n.path, o = Zs[r] && i in Zs[r].nsps, a = t.forceNew || t["force new connection"] || t.multiplex === !1 || o;
  let l;
  return a ? l = new Ro(s, t) : (Zs[r] || (Zs[r] = new Ro(s, t)), l = Zs[r]), n.query && !t.query && (t.query = n.queryKey), l.socket(n.path, t);
}
Object.assign(Vr, {
  Manager: Ro,
  Socket: Iu,
  io: Vr,
  connect: Vr
});
const Im = 5e3;
function Lm() {
  const e = le([]), t = le(!1), n = le(""), s = le(!1), r = le(!1), i = le(!1), o = le("connecting"), a = le(0), l = 5, d = le({}), c = le(null), b = le("");
  let w = null;
  const D = 6e4, P = () => {
    t.value = !1, w && (clearTimeout(w), w = null);
  }, z = () => {
    t.value = !0, w && clearTimeout(w), w = setTimeout(P, D);
  };
  let L = null;
  const se = 1e3, he = 15e3;
  let ce = null;
  const k = /* @__PURE__ */ new Set(["ai_config_missing", ...Kc]);
  let R = !1;
  const K = le(null), G = () => {
    ce && (clearTimeout(ce), ce = null);
  }, Se = () => {
    if (ce || R) return;
    const N = Math.min(
      se * 2 ** Math.max(0, a.value - 1),
      he
    );
    ce = setTimeout(() => {
      ce = null, L == null || L.connect();
    }, N);
  };
  let Ne = null, Me = null, xe = null, ve = null, $e = null, qe = !1, Qe = null, de, _e, ue;
  const st = (N) => {
    var I;
    return (I = zr(N ?? null)) == null ? void 0 : I.sub;
  }, et = (N) => {
    de = N, N && L != null && L.connected && L.emit("refresh_token", { conversation_token: N });
  }, Te = (N) => {
    _e = N;
  }, we = () => {
    var J;
    const N = de || (xo() ? null : ai().read()), I = {};
    N && (I.conversation_token = N), _e && (I.widget_id = _e);
    try {
      I.page_url = Rg() || (window.parent !== window && ((J = window.parent.location) != null && J.href) ? window.parent.location.href : document.referrer || window.location.href);
    } catch {
      I.page_url = document.referrer || "";
    }
    return I;
  }, Pe = (N) => (L = Vr(`${os.WS_URL}/widget`, {
    transports: ["websocket"],
    reconnection: !0,
    // Keep trying. The old cap of 5 attempts was ~15s of backoff, so a
    // backend restart or a laptop waking from sleep left the widget dead
    // until the visitor reloaded the page.
    reconnectionAttempts: 1 / 0,
    reconnectionDelay: 1e3,
    reconnectionDelayMax: 15e3,
    // Called before every attempt, so a token refreshed since the socket
    // was created is the one that gets sent.
    auth: (I) => I(we())
  }), L.on("connect", () => {
    ue = st(we().conversation_token), o.value = "connected", G(), a.value = 0;
  }), L.on("bot_typing", () => {
    z();
  }), L.on("disconnect", () => {
    P(), o.value === "connected" && (console.log("Socket disconnected, setting connection status to connecting"), o.value = "connecting");
  }), L.on("connect_error", (I) => {
    var ee;
    const J = (ee = I == null ? void 0 : I.data) == null ? void 0 : ee.type;
    if (J && k.has(J)) {
      R = !0, K.value = J, G(), o.value = "failed", _o(J) ? qe || $e == null || $e() : qt(I.data);
      return;
    }
    a.value++, console.error("Socket connection failed, attempt:", a.value), a.value >= l && (o.value = "failed"), L && !L.active && Se();
  }), L.on("chat_response", (I) => {
    if (P(), I.session_id ? (console.log("Captured session_id from chat_response:", I.session_id), b.value = I.session_id) : console.warn("No session_id in chat_response data:", I), I.type === "agent_message") {
      const J = {
        message: I.message,
        message_type: "agent",
        created_at: (/* @__PURE__ */ new Date()).toISOString(),
        session_id: "",
        agent_name: I.agent_name,
        stream: !0,
        // live reply → client-side typewriter reveal
        attributes: {
          end_chat: I.end_chat,
          end_chat_reason: I.end_chat_reason,
          end_chat_description: I.end_chat_description,
          request_rating: I.request_rating
        }
      };
      I.attachments && Array.isArray(I.attachments) && (J.id = I.message_id, J.attachments = I.attachments.map((ee, Ie) => ({
        id: I.message_id * 1e3 + Ie,
        filename: ee.filename,
        file_url: ee.file_url,
        content_type: ee.content_type,
        file_size: ee.file_size
      }))), e.value.push(J);
    } else I.shopify_output && typeof I.shopify_output == "object" && I.shopify_output.products ? e.value.push({
      message: I.message,
      // Keep the accompanying text message
      message_type: "product",
      // Use 'product' type for rendering
      created_at: (/* @__PURE__ */ new Date()).toISOString(),
      session_id: "",
      agent_name: I.agent_name,
      // Assign the whole structured object
      shopify_output: I.shopify_output,
      // Remove the old flattened fields (product_id, product_title, etc.)
      attributes: {
        // Keep other attributes if needed
        end_chat: I.end_chat,
        request_rating: I.request_rating
      }
    }) : e.value.push({
      message: I.message,
      message_type: "bot",
      created_at: (/* @__PURE__ */ new Date()).toISOString(),
      session_id: "",
      agent_name: I.agent_name,
      stream: !0,
      // live reply → client-side typewriter reveal
      // Knowledge-base citations (display gated by show_citations in the widget)
      sources: Array.isArray(I.sources) && I.sources.length ? I.sources : void 0,
      attributes: {
        end_chat: I.end_chat,
        end_chat_reason: I.end_chat_reason,
        end_chat_description: I.end_chat_description,
        request_rating: I.request_rating
      }
    });
  }), L.on("handle_taken_over", (I) => {
    e.value.push({
      message: `${I.user_name} joined the conversation`,
      message_type: "system",
      created_at: (/* @__PURE__ */ new Date()).toISOString(),
      session_id: I.session_id
    }), d.value = {
      ...d.value,
      human_agent_name: I.user_name,
      human_agent_profile_pic: I.profile_picture
    }, P(), Ne && Ne(I);
  }), L.on("session_initialized", (I) => {
    I.session_id && (b.value = I.session_id, Qe = {
      session_id: I.session_id,
      authenticated: !!I.authenticated,
      created: !!I.created
    }, ve == null || ve(Qe));
  }), L.on("error", qt), L.on("chat_history", g), L.on("rating_submitted", _), L.on("display_form", E), L.on("form_submitted", U), L.on("workflow_state", F), L.on("workflow_proceeded", M), L), tt = async () => {
    try {
      return L != null && L.connected && ue && ue === st(we().conversation_token) ? (o.value = "connected", !0) : (o.value = "connecting", a.value = 0, P(), G(), R = !1, K.value = null, L && (L.removeAllListeners(), L.disconnect(), L = null), qe = !0, L = Pe(""), new Promise((N) => {
        const I = (J) => {
          qe = !1, N(J);
        };
        L == null || L.on("connect", () => {
          I(!0);
        }), L == null || L.on("connect_error", () => {
          (R || a.value >= l) && I(!1);
        });
      }));
    } catch (N) {
      return console.error("Socket initialization failed:", N), qe = !1, o.value = "failed", !1;
    }
  }, Ce = () => (L && L.disconnect(), tt()), ct = (N) => {
    Ne = N;
  }, it = (N) => {
    $e = N;
  }, ut = (N) => {
    ve = N, Qe && N(Qe);
  }, vt = (N) => {
    Me = N;
  }, yt = (N) => {
    xe = N;
  }, qt = (N) => {
    P(), n.value = Nd(N), s.value = !0, setTimeout(() => {
      s.value = !1, n.value = "";
    }, 5e3);
  }, g = (N) => {
    if (N.type === "chat_history" && Array.isArray(N.messages)) {
      const I = N.messages.map((J) => {
        var Ie, h;
        const ee = {
          message: J.message,
          message_type: J.message_type,
          created_at: J.created_at,
          session_id: "",
          agent_name: J.agent_name || "",
          user_name: J.user_name || "",
          attributes: J.attributes || {},
          attachments: J.attachments || []
          // Include attachments
        };
        return Array.isArray((Ie = J.attributes) == null ? void 0 : Ie.sources) && J.attributes.sources.length && (ee.sources = J.attributes.sources), (h = J.attributes) != null && h.shopify_output && typeof J.attributes.shopify_output == "object" ? {
          ...ee,
          message_type: "product",
          shopify_output: J.attributes.shopify_output
        } : ee;
      });
      e.value = [
        ...I.filter(
          (J) => !e.value.some(
            (ee) => ee.message === J.message && ee.created_at === J.created_at
          )
        ),
        ...e.value
      ];
    }
  }, _ = (N) => {
    N.success && e.value.push({
      message: "Thank you for your feedback!",
      message_type: "system",
      created_at: (/* @__PURE__ */ new Date()).toISOString(),
      session_id: ""
    });
  }, E = (N) => {
    var I;
    console.log("Form display handler in composable:", N), P(), c.value = N.form_data, console.log("Set currentForm in handleDisplayForm:", c.value), ((I = N.form_data) == null ? void 0 : I.form_full_screen) === !0 ? (console.log("Full screen form detected, triggering workflow state callback"), Me && Me({
      type: "form",
      form_data: N.form_data,
      session_id: N.session_id
    })) : e.value.push({
      message: "",
      message_type: "form",
      created_at: (/* @__PURE__ */ new Date()).toISOString(),
      session_id: N.session_id,
      attributes: {
        form_data: N.form_data
      }
    });
  }, U = (N) => {
    console.log("Form submitted confirmation received, clearing currentForm"), c.value = null, N.success && console.log("Form submitted successfully");
  }, F = (N) => {
    console.log("Workflow state received in composable:", N), (N.type === "form" || N.type === "display_form") && (console.log("Setting currentForm from workflow state:", N.form_data), c.value = N.form_data), Me && Me(N);
  }, M = (N) => {
    console.log("Workflow proceeded in composable:", N), xe && xe(N);
  }, j = async (N, I) => {
    !L || !N || L.emit("submit_rating", {
      rating: N,
      feedback: I
    });
  }, q = async (N) => {
    var ee;
    if (console.log("Submitting form in socket:", N), console.log("Current form in socket:", c.value), console.log("Socket in socket:", L), !L) {
      console.error("No socket available for form submission");
      return;
    }
    if (!N || Object.keys(N).length === 0) {
      console.error("No form data to submit");
      return;
    }
    const J = ((ee = c.value) == null ? void 0 : ee.form_type) === "contact" ? "submit_contact_info" : "submit_form";
    console.log(`Emitting ${J} event with data:`, N), L.emit(J, {
      form_data: N
    }), c.value = null;
  }, W = async () => {
    L && (console.log("Getting workflow state 12"), L.emit("get_workflow_state"));
  }, B = async () => {
    L && L.emit("proceed_workflow", {});
  }, X = async (N, I, J = []) => {
    if (!L || !N.trim() && J.length === 0) return;
    const ee = {
      message: N,
      message_type: "user",
      created_at: (/* @__PURE__ */ new Date()).toISOString(),
      session_id: ""
    };
    J.length > 0 && (ee.attachments = J.map((Ie, h) => {
      let m = "";
      if (Ie.content_type.startsWith("image/")) {
        const C = atob(Ie.content), T = new Array(C.length);
        for (let te = 0; te < C.length; te++)
          T[te] = C.charCodeAt(te);
        const $ = new Uint8Array(T), Y = new Blob([$], { type: Ie.content_type });
        m = URL.createObjectURL(Y);
      }
      return {
        id: Date.now() * 1e3 + h,
        // Temporary ID
        filename: Ie.filename,
        file_url: m,
        // Temporary blob URL, will be replaced
        content_type: Ie.content_type,
        file_size: Ie.size,
        _isTemporary: !0
        // Flag to identify temporary attachments
      };
    })), e.value.push(ee), L.emit("chat", {
      message: N,
      email: I,
      files: J
      // Send files with base64 content
    }), i.value = !0;
  }, V = () => {
    e.value = [], i.value = !1, b.value = "", P(), c.value = null;
  };
  return {
    messages: e,
    loading: t,
    errorMessage: n,
    showError: s,
    loadingHistory: r,
    hasStartedChat: i,
    connectionStatus: o,
    sendMessage: X,
    endChat: (N = "CUSTOMER_REQUEST") => new Promise((I) => {
      if (!L || !L.connected) {
        I(!1);
        return;
      }
      let J = !1;
      const ee = (C) => {
        J || (J = !0, clearTimeout(m), L == null || L.off("chat_ended", Ie), L == null || L.off("error", h), C && V(), I(C));
      }, Ie = () => ee(!0), h = (C) => {
        (C == null ? void 0 : C.type) === "end_chat_error" && ee(!1);
      }, m = setTimeout(() => ee(!1), Im);
      L.on("chat_ended", Ie), L.on("error", h), L.emit("end_chat", { reason: N });
    }),
    loadChatHistory: async () => {
      if (L)
        try {
          r.value = !0, L.emit("get_chat_history");
        } catch (N) {
          console.error("Failed to load chat history:", N);
        } finally {
          r.value = !1;
        }
    },
    connect: tt,
    reconnect: Ce,
    cleanup: () => {
      P(), G(), L && (L.removeAllListeners(), L.disconnect(), L = null), Ne = null, Me = null, xe = null;
    },
    humanAgent: d,
    onTakeover: ct,
    onSessionState: ut,
    onReauthorize: it,
    refusal: K,
    submitRating: j,
    currentForm: c,
    submitForm: q,
    getWorkflowState: W,
    proceedWorkflow: B,
    onWorkflowState: vt,
    onWorkflowProceeded: yt,
    currentSessionId: b,
    setToken: et,
    setWidgetId: Te
  };
}
function Om(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var no = { exports: {} }, Bl;
function Nm() {
  return Bl || (Bl = 1, function(e) {
    (function() {
      function t(h, m, C) {
        return h.call.apply(h.bind, arguments);
      }
      function n(h, m, C) {
        if (!h) throw Error();
        if (2 < arguments.length) {
          var T = Array.prototype.slice.call(arguments, 2);
          return function() {
            var $ = Array.prototype.slice.call(arguments);
            return Array.prototype.unshift.apply($, T), h.apply(m, $);
          };
        }
        return function() {
          return h.apply(m, arguments);
        };
      }
      function s(h, m, C) {
        return s = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? t : n, s.apply(null, arguments);
      }
      var r = Date.now || function() {
        return +/* @__PURE__ */ new Date();
      };
      function i(h, m) {
        this.a = h, this.o = m || h, this.c = this.o.document;
      }
      var o = !!window.FontFace;
      function a(h, m, C, T) {
        if (m = h.c.createElement(m), C) for (var $ in C) C.hasOwnProperty($) && ($ == "style" ? m.style.cssText = C[$] : m.setAttribute($, C[$]));
        return T && m.appendChild(h.c.createTextNode(T)), m;
      }
      function l(h, m, C) {
        h = h.c.getElementsByTagName(m)[0], h || (h = document.documentElement), h.insertBefore(C, h.lastChild);
      }
      function d(h) {
        h.parentNode && h.parentNode.removeChild(h);
      }
      function c(h, m, C) {
        m = m || [], C = C || [];
        for (var T = h.className.split(/\s+/), $ = 0; $ < m.length; $ += 1) {
          for (var Y = !1, te = 0; te < T.length; te += 1) if (m[$] === T[te]) {
            Y = !0;
            break;
          }
          Y || T.push(m[$]);
        }
        for (m = [], $ = 0; $ < T.length; $ += 1) {
          for (Y = !1, te = 0; te < C.length; te += 1) if (T[$] === C[te]) {
            Y = !0;
            break;
          }
          Y || m.push(T[$]);
        }
        h.className = m.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "");
      }
      function b(h, m) {
        for (var C = h.className.split(/\s+/), T = 0, $ = C.length; T < $; T++) if (C[T] == m) return !0;
        return !1;
      }
      function w(h) {
        return h.o.location.hostname || h.a.location.hostname;
      }
      function D(h, m, C) {
        function T() {
          pe && $ && Y && (pe(te), pe = null);
        }
        m = a(h, "link", { rel: "stylesheet", href: m, media: "all" });
        var $ = !1, Y = !0, te = null, pe = C || null;
        o ? (m.onload = function() {
          $ = !0, T();
        }, m.onerror = function() {
          $ = !0, te = Error("Stylesheet failed to load"), T();
        }) : setTimeout(function() {
          $ = !0, T();
        }, 0), l(h, "head", m);
      }
      function P(h, m, C, T) {
        var $ = h.c.getElementsByTagName("head")[0];
        if ($) {
          var Y = a(h, "script", { src: m }), te = !1;
          return Y.onload = Y.onreadystatechange = function() {
            te || this.readyState && this.readyState != "loaded" && this.readyState != "complete" || (te = !0, C && C(null), Y.onload = Y.onreadystatechange = null, Y.parentNode.tagName == "HEAD" && $.removeChild(Y));
          }, $.appendChild(Y), setTimeout(function() {
            te || (te = !0, C && C(Error("Script load timeout")));
          }, T || 5e3), Y;
        }
        return null;
      }
      function z() {
        this.a = 0, this.c = null;
      }
      function L(h) {
        return h.a++, function() {
          h.a--, he(h);
        };
      }
      function se(h, m) {
        h.c = m, he(h);
      }
      function he(h) {
        h.a == 0 && h.c && (h.c(), h.c = null);
      }
      function ce(h) {
        this.a = h || "-";
      }
      ce.prototype.c = function(h) {
        for (var m = [], C = 0; C < arguments.length; C++) m.push(arguments[C].replace(/[\W_]+/g, "").toLowerCase());
        return m.join(this.a);
      };
      function k(h, m) {
        this.c = h, this.f = 4, this.a = "n";
        var C = (m || "n4").match(/^([nio])([1-9])$/i);
        C && (this.a = C[1], this.f = parseInt(C[2], 10));
      }
      function R(h) {
        return Se(h) + " " + (h.f + "00") + " 300px " + K(h.c);
      }
      function K(h) {
        var m = [];
        h = h.split(/,\s*/);
        for (var C = 0; C < h.length; C++) {
          var T = h[C].replace(/['"]/g, "");
          T.indexOf(" ") != -1 || /^\d/.test(T) ? m.push("'" + T + "'") : m.push(T);
        }
        return m.join(",");
      }
      function G(h) {
        return h.a + h.f;
      }
      function Se(h) {
        var m = "normal";
        return h.a === "o" ? m = "oblique" : h.a === "i" && (m = "italic"), m;
      }
      function Ne(h) {
        var m = 4, C = "n", T = null;
        return h && ((T = h.match(/(normal|oblique|italic)/i)) && T[1] && (C = T[1].substr(0, 1).toLowerCase()), (T = h.match(/([1-9]00|normal|bold)/i)) && T[1] && (/bold/i.test(T[1]) ? m = 7 : /[1-9]00/.test(T[1]) && (m = parseInt(T[1].substr(0, 1), 10)))), C + m;
      }
      function Me(h, m) {
        this.c = h, this.f = h.o.document.documentElement, this.h = m, this.a = new ce("-"), this.j = m.events !== !1, this.g = m.classes !== !1;
      }
      function xe(h) {
        h.g && c(h.f, [h.a.c("wf", "loading")]), $e(h, "loading");
      }
      function ve(h) {
        if (h.g) {
          var m = b(h.f, h.a.c("wf", "active")), C = [], T = [h.a.c("wf", "loading")];
          m || C.push(h.a.c("wf", "inactive")), c(h.f, C, T);
        }
        $e(h, "inactive");
      }
      function $e(h, m, C) {
        h.j && h.h[m] && (C ? h.h[m](C.c, G(C)) : h.h[m]());
      }
      function qe() {
        this.c = {};
      }
      function Qe(h, m, C) {
        var T = [], $;
        for ($ in m) if (m.hasOwnProperty($)) {
          var Y = h.c[$];
          Y && T.push(Y(m[$], C));
        }
        return T;
      }
      function de(h, m) {
        this.c = h, this.f = m, this.a = a(this.c, "span", { "aria-hidden": "true" }, this.f);
      }
      function _e(h) {
        l(h.c, "body", h.a);
      }
      function ue(h) {
        return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + K(h.c) + ";" + ("font-style:" + Se(h) + ";font-weight:" + (h.f + "00") + ";");
      }
      function st(h, m, C, T, $, Y) {
        this.g = h, this.j = m, this.a = T, this.c = C, this.f = $ || 3e3, this.h = Y || void 0;
      }
      st.prototype.start = function() {
        var h = this.c.o.document, m = this, C = r(), T = new Promise(function(te, pe) {
          function Le() {
            r() - C >= m.f ? pe() : h.fonts.load(R(m.a), m.h).then(function(Ke) {
              1 <= Ke.length ? te() : setTimeout(Le, 25);
            }, function() {
              pe();
            });
          }
          Le();
        }), $ = null, Y = new Promise(function(te, pe) {
          $ = setTimeout(pe, m.f);
        });
        Promise.race([Y, T]).then(function() {
          $ && (clearTimeout($), $ = null), m.g(m.a);
        }, function() {
          m.j(m.a);
        });
      };
      function et(h, m, C, T, $, Y, te) {
        this.v = h, this.B = m, this.c = C, this.a = T, this.s = te || "BESbswy", this.f = {}, this.w = $ || 3e3, this.u = Y || null, this.m = this.j = this.h = this.g = null, this.g = new de(this.c, this.s), this.h = new de(this.c, this.s), this.j = new de(this.c, this.s), this.m = new de(this.c, this.s), h = new k(this.a.c + ",serif", G(this.a)), h = ue(h), this.g.a.style.cssText = h, h = new k(this.a.c + ",sans-serif", G(this.a)), h = ue(h), this.h.a.style.cssText = h, h = new k("serif", G(this.a)), h = ue(h), this.j.a.style.cssText = h, h = new k("sans-serif", G(this.a)), h = ue(h), this.m.a.style.cssText = h, _e(this.g), _e(this.h), _e(this.j), _e(this.m);
      }
      var Te = { D: "serif", C: "sans-serif" }, we = null;
      function Pe() {
        if (we === null) {
          var h = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
          we = !!h && (536 > parseInt(h[1], 10) || parseInt(h[1], 10) === 536 && 11 >= parseInt(h[2], 10));
        }
        return we;
      }
      et.prototype.start = function() {
        this.f.serif = this.j.a.offsetWidth, this.f["sans-serif"] = this.m.a.offsetWidth, this.A = r(), Ce(this);
      };
      function tt(h, m, C) {
        for (var T in Te) if (Te.hasOwnProperty(T) && m === h.f[Te[T]] && C === h.f[Te[T]]) return !0;
        return !1;
      }
      function Ce(h) {
        var m = h.g.a.offsetWidth, C = h.h.a.offsetWidth, T;
        (T = m === h.f.serif && C === h.f["sans-serif"]) || (T = Pe() && tt(h, m, C)), T ? r() - h.A >= h.w ? Pe() && tt(h, m, C) && (h.u === null || h.u.hasOwnProperty(h.a.c)) ? it(h, h.v) : it(h, h.B) : ct(h) : it(h, h.v);
      }
      function ct(h) {
        setTimeout(s(function() {
          Ce(this);
        }, h), 50);
      }
      function it(h, m) {
        setTimeout(s(function() {
          d(this.g.a), d(this.h.a), d(this.j.a), d(this.m.a), m(this.a);
        }, h), 0);
      }
      function ut(h, m, C) {
        this.c = h, this.a = m, this.f = 0, this.m = this.j = !1, this.s = C;
      }
      var vt = null;
      ut.prototype.g = function(h) {
        var m = this.a;
        m.g && c(m.f, [m.a.c("wf", h.c, G(h).toString(), "active")], [m.a.c("wf", h.c, G(h).toString(), "loading"), m.a.c("wf", h.c, G(h).toString(), "inactive")]), $e(m, "fontactive", h), this.m = !0, yt(this);
      }, ut.prototype.h = function(h) {
        var m = this.a;
        if (m.g) {
          var C = b(m.f, m.a.c("wf", h.c, G(h).toString(), "active")), T = [], $ = [m.a.c("wf", h.c, G(h).toString(), "loading")];
          C || T.push(m.a.c("wf", h.c, G(h).toString(), "inactive")), c(m.f, T, $);
        }
        $e(m, "fontinactive", h), yt(this);
      };
      function yt(h) {
        --h.f == 0 && h.j && (h.m ? (h = h.a, h.g && c(h.f, [h.a.c("wf", "active")], [h.a.c("wf", "loading"), h.a.c("wf", "inactive")]), $e(h, "active")) : ve(h.a));
      }
      function qt(h) {
        this.j = h, this.a = new qe(), this.h = 0, this.f = this.g = !0;
      }
      qt.prototype.load = function(h) {
        this.c = new i(this.j, h.context || this.j), this.g = h.events !== !1, this.f = h.classes !== !1, _(this, new Me(this.c, h), h);
      };
      function g(h, m, C, T, $) {
        var Y = --h.h == 0;
        (h.f || h.g) && setTimeout(function() {
          var te = $ || null, pe = T || null || {};
          if (C.length === 0 && Y) ve(m.a);
          else {
            m.f += C.length, Y && (m.j = Y);
            var Le, Ke = [];
            for (Le = 0; Le < C.length; Le++) {
              var Ae = C[Le], pt = pe[Ae.c], gt = m.a, je = Ae;
              if (gt.g && c(gt.f, [gt.a.c("wf", je.c, G(je).toString(), "loading")]), $e(gt, "fontloading", je), gt = null, vt === null) if (window.FontFace) {
                var je = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent), nn = /OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent) && /Apple/.exec(window.navigator.vendor);
                vt = je ? 42 < parseInt(je[1], 10) : !nn;
              } else vt = !1;
              vt ? gt = new st(s(m.g, m), s(m.h, m), m.c, Ae, m.s, pt) : gt = new et(s(m.g, m), s(m.h, m), m.c, Ae, m.s, te, pt), Ke.push(gt);
            }
            for (Le = 0; Le < Ke.length; Le++) Ke[Le].start();
          }
        }, 0);
      }
      function _(h, m, C) {
        var $ = [], T = C.timeout;
        xe(m);
        var $ = Qe(h.a, C, h.c), Y = new ut(h.c, m, T);
        for (h.h = $.length, m = 0, C = $.length; m < C; m++) $[m].load(function(te, pe, Le) {
          g(h, Y, te, pe, Le);
        });
      }
      function E(h, m) {
        this.c = h, this.a = m;
      }
      E.prototype.load = function(h) {
        function m() {
          if (Y["__mti_fntLst" + T]) {
            var te = Y["__mti_fntLst" + T](), pe = [], Le;
            if (te) for (var Ke = 0; Ke < te.length; Ke++) {
              var Ae = te[Ke].fontfamily;
              te[Ke].fontStyle != null && te[Ke].fontWeight != null ? (Le = te[Ke].fontStyle + te[Ke].fontWeight, pe.push(new k(Ae, Le))) : pe.push(new k(Ae));
            }
            h(pe);
          } else setTimeout(function() {
            m();
          }, 50);
        }
        var C = this, T = C.a.projectId, $ = C.a.version;
        if (T) {
          var Y = C.c.o;
          P(this.c, (C.a.api || "https://fast.fonts.net/jsapi") + "/" + T + ".js" + ($ ? "?v=" + $ : ""), function(te) {
            te ? h([]) : (Y["__MonotypeConfiguration__" + T] = function() {
              return C.a;
            }, m());
          }).id = "__MonotypeAPIScript__" + T;
        } else h([]);
      };
      function U(h, m) {
        this.c = h, this.a = m;
      }
      U.prototype.load = function(h) {
        var m, C, T = this.a.urls || [], $ = this.a.families || [], Y = this.a.testStrings || {}, te = new z();
        for (m = 0, C = T.length; m < C; m++) D(this.c, T[m], L(te));
        var pe = [];
        for (m = 0, C = $.length; m < C; m++) if (T = $[m].split(":"), T[1]) for (var Le = T[1].split(","), Ke = 0; Ke < Le.length; Ke += 1) pe.push(new k(T[0], Le[Ke]));
        else pe.push(new k(T[0]));
        se(te, function() {
          h(pe, Y);
        });
      };
      function F(h, m) {
        h ? this.c = h : this.c = M, this.a = [], this.f = [], this.g = m || "";
      }
      var M = "https://fonts.googleapis.com/css";
      function j(h, m) {
        for (var C = m.length, T = 0; T < C; T++) {
          var $ = m[T].split(":");
          $.length == 3 && h.f.push($.pop());
          var Y = "";
          $.length == 2 && $[1] != "" && (Y = ":"), h.a.push($.join(Y));
        }
      }
      function q(h) {
        if (h.a.length == 0) throw Error("No fonts to load!");
        if (h.c.indexOf("kit=") != -1) return h.c;
        for (var m = h.a.length, C = [], T = 0; T < m; T++) C.push(h.a[T].replace(/ /g, "+"));
        return m = h.c + "?family=" + C.join("%7C"), 0 < h.f.length && (m += "&subset=" + h.f.join(",")), 0 < h.g.length && (m += "&text=" + encodeURIComponent(h.g)), m;
      }
      function W(h) {
        this.f = h, this.a = [], this.c = {};
      }
      var B = { latin: "BESbswy", "latin-ext": "çöüğş", cyrillic: "йяЖ", greek: "αβΣ", khmer: "កខគ", Hanuman: "កខគ" }, X = { thin: "1", extralight: "2", "extra-light": "2", ultralight: "2", "ultra-light": "2", light: "3", regular: "4", book: "4", medium: "5", "semi-bold": "6", semibold: "6", "demi-bold": "6", demibold: "6", bold: "7", "extra-bold": "8", extrabold: "8", "ultra-bold": "8", ultrabold: "8", black: "9", heavy: "9", l: "3", r: "4", b: "7" }, V = { i: "i", italic: "i", n: "n", normal: "n" }, Z = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
      function ie(h) {
        for (var m = h.f.length, C = 0; C < m; C++) {
          var T = h.f[C].split(":"), $ = T[0].replace(/\+/g, " "), Y = ["n4"];
          if (2 <= T.length) {
            var te, pe = T[1];
            if (te = [], pe) for (var pe = pe.split(","), Le = pe.length, Ke = 0; Ke < Le; Ke++) {
              var Ae;
              if (Ae = pe[Ke], Ae.match(/^[\w-]+$/)) {
                var pt = Z.exec(Ae.toLowerCase());
                if (pt == null) Ae = "";
                else {
                  if (Ae = pt[2], Ae = Ae == null || Ae == "" ? "n" : V[Ae], pt = pt[1], pt == null || pt == "") pt = "4";
                  else var gt = X[pt], pt = gt || (isNaN(pt) ? "4" : pt.substr(0, 1));
                  Ae = [Ae, pt].join("");
                }
              } else Ae = "";
              Ae && te.push(Ae);
            }
            0 < te.length && (Y = te), T.length == 3 && (T = T[2], te = [], T = T ? T.split(",") : te, 0 < T.length && (T = B[T[0]]) && (h.c[$] = T));
          }
          for (h.c[$] || (T = B[$]) && (h.c[$] = T), T = 0; T < Y.length; T += 1) h.a.push(new k($, Y[T]));
        }
      }
      function me(h, m) {
        this.c = h, this.a = m;
      }
      var N = { Arimo: !0, Cousine: !0, Tinos: !0 };
      me.prototype.load = function(h) {
        var m = new z(), C = this.c, T = new F(this.a.api, this.a.text), $ = this.a.families;
        j(T, $);
        var Y = new W($);
        ie(Y), D(C, q(T), L(m)), se(m, function() {
          h(Y.a, Y.c, N);
        });
      };
      function I(h, m) {
        this.c = h, this.a = m;
      }
      I.prototype.load = function(h) {
        var m = this.a.id, C = this.c.o;
        m ? P(this.c, (this.a.api || "https://use.typekit.net") + "/" + m + ".js", function(T) {
          if (T) h([]);
          else if (C.Typekit && C.Typekit.config && C.Typekit.config.fn) {
            T = C.Typekit.config.fn;
            for (var $ = [], Y = 0; Y < T.length; Y += 2) for (var te = T[Y], pe = T[Y + 1], Le = 0; Le < pe.length; Le++) $.push(new k(te, pe[Le]));
            try {
              C.Typekit.load({ events: !1, classes: !1, async: !0 });
            } catch {
            }
            h($);
          }
        }, 2e3) : h([]);
      };
      function J(h, m) {
        this.c = h, this.f = m, this.a = [];
      }
      J.prototype.load = function(h) {
        var m = this.f.id, C = this.c.o, T = this;
        m ? (C.__webfontfontdeckmodule__ || (C.__webfontfontdeckmodule__ = {}), C.__webfontfontdeckmodule__[m] = function($, Y) {
          for (var te = 0, pe = Y.fonts.length; te < pe; ++te) {
            var Le = Y.fonts[te];
            T.a.push(new k(Le.name, Ne("font-weight:" + Le.weight + ";font-style:" + Le.style)));
          }
          h(T.a);
        }, P(this.c, (this.f.api || "https://f.fontdeck.com/s/css/js/") + w(this.c) + "/" + m + ".js", function($) {
          $ && h([]);
        })) : h([]);
      };
      var ee = new qt(window);
      ee.a.c.custom = function(h, m) {
        return new U(m, h);
      }, ee.a.c.fontdeck = function(h, m) {
        return new J(m, h);
      }, ee.a.c.monotype = function(h, m) {
        return new E(m, h);
      }, ee.a.c.typekit = function(h, m) {
        return new I(m, h);
      }, ee.a.c.google = function(h, m) {
        return new me(m, h);
      };
      var Ie = { load: s(ee.load, ee) };
      e.exports ? e.exports = Ie : (window.WebFont = Ie, window.WebFontConfig && ee.load(window.WebFontConfig));
    })();
  }(no)), no.exports;
}
var Mm = Nm();
const Pm = /* @__PURE__ */ Om(Mm), $l = [
  "Space Grotesk:400,500,600,700",
  "Instrument Sans:400,500,600",
  "JetBrains Mono:400,500,600"
], Fm = (e) => {
  const t = [...$l], n = (e == null ? void 0 : e.split(",")[0].trim().replace(/['"]/g, "")) || "", s = $l.some(
    (r) => r.toLowerCase().startsWith(n.toLowerCase())
  );
  n && !s && t.push(n), Pm.load({
    google: { families: t },
    active: () => {
      if (!e) return;
      const r = document.querySelector(".chat-container");
      r && (r.style.fontFamily = e.includes(",") ? e : `"${e}", system-ui, sans-serif`);
    }
  });
};
function Dm() {
  const e = le({}), t = le(""), n = (r) => {
    var i;
    e.value = r, r.photo_url && (e.value.photo_url = r.photo_url), Fm(r.font_family), It({
      type: "CUSTOMIZATION_UPDATE",
      data: {
        chat_bubble_color: r.chat_bubble_color || "#C9F24E",
        chat_style: r.chat_style,
        chat_initiation_messages: r.chat_initiation_messages || [],
        // Dashboard "Widget placement" defaults — the embed loader merges these
        // under any options the installing developer set.
        widget_display: (i = r.customization_metadata) == null ? void 0 : i.widget_display
      }
    });
  };
  return {
    customization: e,
    agentName: t,
    applyCustomization: n,
    initializeFromData: () => {
      const r = window.__INITIAL_DATA__;
      r && (n(r.customization || {}), t.value = r.agentName || "");
    }
  };
}
const Bm = 13, $m = 24;
function Um(e, t) {
  const n = di({}), s = [];
  let r = null;
  const i = typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, o = (c) => {
    r || s.length === 0 || (r = setTimeout(a, c));
  }, a = () => {
    r = null;
    const c = s[0];
    if (c === void 0) return;
    const b = e.value[c], w = n[c], D = (b == null ? void 0 : b.message) ?? "";
    if (!w || !b) {
      s.shift(), o(0);
      return;
    }
    if (w.shown >= D.length) {
      w.done = !0, s.shift(), o(0);
      return;
    }
    w.shown += 1;
    const P = D[w.shown - 1];
    t == null || t(), o(P === " " ? $m : Bm);
  };
  Lt(() => e.value.length, (c, b) => {
    b !== void 0 && c < b && (Object.keys(n).forEach((w) => {
      delete n[Number(w)];
    }), s.length = 0);
    for (let w = b ?? 0; w < c; w++) {
      const D = e.value[w];
      if (!D || !D.stream || w in n) continue;
      const P = D.message ?? "";
      i || !P ? n[w] = { shown: P.length, done: !0 } : (n[w] = { shown: 0, done: !1 }, s.push(w));
    }
    o(0);
  });
  const l = (c, b) => {
    const w = n[c];
    return w ? b.slice(0, w.shown) : b;
  }, d = (c) => {
    const b = n[c];
    return !!b && !b.done;
  };
  return mr(() => {
    r && clearTimeout(r);
  }), { displayText: l, isStreaming: d };
}
function Hm(e) {
  const t = le(!0);
  let n = 0;
  const s = () => {
    It({ type: "UNREAD_COUNT", count: n });
  }, r = (i) => {
    var o;
    ((o = i == null ? void 0 : i.data) == null ? void 0 : o.type) === "WIDGET_VISIBILITY" && (t.value = !!i.data.open, t.value && n !== 0 && (n = 0, s()));
  };
  Lt(() => e.value.length, (i, o) => {
    if (i <= (o ?? 0) || t.value) return;
    const a = e.value[i - 1];
    a && (a.message_type === "bot" || a.message_type === "agent") && (n += 1, s());
  }), mi(() => window.addEventListener("message", r)), mr(() => window.removeEventListener("message", r));
}
const zm = {
  light: !1,
  mono: !1,
  radius: 22,
  bubble: 16,
  glow: "rgba(157,140,255,.26)",
  border: "rgba(157,140,255,.32)",
  card: "linear-gradient(180deg,rgba(28,26,40,.94),rgba(15,14,22,.97))",
  text: "#ECEAFA",
  muted: "#9C97BE",
  agentBg: "rgba(255,255,255,.06)",
  accent: "#9D8CFF"
}, Wm = {
  light: !1,
  mono: !1,
  radius: 26,
  bubble: 18,
  glow: "rgba(157,140,255,.32)",
  border: "rgba(157,140,255,.40)",
  card: "linear-gradient(180deg,#16131F,#0A0910)",
  text: "#F2F3F8",
  muted: "#A7A0CC",
  agentBg: "rgba(255,255,255,.05)",
  accent: "#9D8CFF"
}, qm = {
  light: !1,
  mono: !0,
  radius: 8,
  bubble: 4,
  glow: "rgba(201,242,78,.20)",
  border: "rgba(201,242,78,.30)",
  card: "#070907",
  text: "#D7F7C8",
  muted: "#7F9B57",
  agentBg: "rgba(201,242,78,.045)",
  accent: "#C9F24E"
}, jm = {
  light: !1,
  mono: !1,
  radius: 18,
  bubble: 14,
  glow: "rgba(95,227,214,.22)",
  border: "rgba(95,227,214,.30)",
  card: "linear-gradient(180deg,#0E1A1A,#0A1414)",
  text: "#DDF7F3",
  muted: "#6FAFA8",
  agentBg: "rgba(255,255,255,.05)",
  accent: "#5FE3D6"
}, Vm = {
  light: !0,
  mono: !1,
  radius: 28,
  bubble: 20,
  glow: "rgba(255,138,115,.30)",
  border: "rgba(0,0,0,.07)",
  card: "#FFFFFF",
  text: "#2A2730",
  muted: "#736C7C",
  agentBg: "#F4F1F6",
  accent: "#FF8A73"
}, Kr = {
  light: !0,
  mono: !1,
  radius: 24,
  bubble: 16,
  glow: "rgba(255,138,115,.22)",
  border: "rgba(0,0,0,.08)",
  card: "#FFFFFF",
  text: "#2A2A33",
  muted: "#6E6E7B",
  agentBg: "#F3F3F6",
  accent: "#FF8A73"
}, Km = {
  GLASS: zm,
  AURORA: Wm,
  TERMINAL: qm,
  CALM_MINT: jm,
  PLAYFUL: Vm,
  SUNRISE: Kr,
  CHATBOT: Kr,
  ASK_ANYTHING: Kr
}, Gm = "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace", Ul = "'Instrument Sans', system-ui, -apple-system, 'Segoe UI', sans-serif";
function Ym(e) {
  return Math.max(4, Math.round(e * 0.3));
}
function Hl(e) {
  const t = (e || "").replace("#", "");
  if (t.length < 6) return "#0B0C10";
  const n = parseInt(t.slice(0, 2), 16), s = parseInt(t.slice(2, 4), 16), r = parseInt(t.slice(4, 6), 16);
  return (0.299 * n + 0.587 * s + 0.114 * r) / 255 > 0.62 ? "#0B0C10" : "#FFFFFF";
}
function Xm(e) {
  return Km[e || ""] || Kr;
}
const Zm = "#212529";
function Jm(e, t) {
  const n = Xm(e), s = (t == null ? void 0 : t.chat_background_color) || "", r = /^#[0-9a-fA-F]{6}$/.test(s), i = s || n.card, o = (t == null ? void 0 : t.chat_text_color) || "", l = /^#[0-9a-fA-F]{6}$/.test(o) && o.toLowerCase() !== Zm ? o : r ? As(s) ? "#FFFFFF" : "#111111" : n.text, d = r ? As(s) ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.62)" : n.muted, c = r ? Od(s, 20) : n.agentBg, b = (t == null ? void 0 : t.accent_color) || n.accent, w = r ? !As(s) : n.light, D = Hl(b) === "#0B0C10", P = w === D ? d : b, z = n.mono ? Gm : t != null && t.font_family ? `${t.font_family}, ${Ul}` : Ul;
  return {
    "--cm-card": i,
    "--cm-text": l,
    "--cm-muted": d,
    "--cm-agent-bg": c,
    "--cm-accent": b,
    "--cm-on-accent": Hl(b),
    "--cm-presence": P,
    "--cm-border": n.border,
    "--cm-glow": n.glow,
    "--cm-radius": `${n.radius}px`,
    "--cm-bubble": `${n.bubble}px`,
    "--cm-bubble-tail": `${Ym(n.bubble)}px`,
    "--cm-field-radius": n.mono ? "7px" : "12px",
    "--cm-avatar-radius": n.mono ? "28%" : "50%",
    "--cm-hairline": n.light ? "rgba(0,0,0,0.07)" : "rgba(255,255,255,0.08)",
    "--cm-body-font": z
  };
}
const zl = (e) => {
  try {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: e || "USD" }).resolvedOptions().maximumFractionDigits ?? 2;
  } catch {
    return 2;
  }
};
function Qm() {
  const e = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    JPY: "¥",
    INR: "₹",
    CAD: "CA$",
    AUD: "A$",
    CNY: "¥",
    CHF: "CHF",
    SEK: "kr",
    NOK: "kr",
    DKK: "kr",
    NZD: "NZ$",
    SGD: "S$",
    HKD: "HK$",
    KRW: "₩",
    MXN: "MX$",
    BRL: "R$",
    ZAR: "R",
    RUB: "₽",
    TRY: "₺",
    THB: "฿",
    PLN: "zł",
    AED: "د.إ",
    SAR: "﷼",
    ILS: "₪",
    MYR: "RM"
  };
  return {
    formatCurrency: (s, r) => {
      if (!s && s !== 0) return "";
      const i = r ? e[r] || r : "", o = typeof s == "number" ? s : Number(s), a = Number.isFinite(o) ? o.toLocaleString("en-US", {
        minimumFractionDigits: zl(r),
        maximumFractionDigits: zl(r)
      }) : String(s);
      return i ? `${i}${a}` : a;
    },
    getCurrencySymbol: (s) => e[s] || s,
    currencySymbols: e
  };
}
const e_ = {
  key: 0,
  class: "widget-unavailable-overlay"
}, t_ = {
  key: 1,
  class: "auth-error-overlay"
}, n_ = { class: "auth-error-card" }, s_ = { class: "auth-error-message" }, r_ = {
  key: 0,
  class: "initializing-overlay"
}, i_ = {
  key: 0,
  class: "connecting-message"
}, o_ = {
  key: 1,
  class: "failed-message"
}, a_ = { class: "welcome-content" }, l_ = { class: "welcome-header" }, c_ = ["src", "alt"], u_ = { class: "welcome-title" }, f_ = { class: "welcome-subtitle" }, h_ = { class: "welcome-input-container" }, d_ = {
  key: 0,
  class: "email-input"
}, p_ = ["disabled"], g_ = { class: "welcome-message-input" }, m_ = ["placeholder", "disabled"], __ = ["disabled"], y_ = {
  key: 0,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, v_ = {
  key: 1,
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, b_ = { class: "landing-page-content" }, w_ = { class: "landing-page-header" }, k_ = { class: "landing-page-heading" }, x_ = { class: "landing-page-text" }, T_ = { class: "landing-page-actions" }, A_ = { class: "form-fullscreen-content" }, E_ = {
  key: 0,
  class: "form-header"
}, S_ = {
  key: 0,
  class: "form-title"
}, C_ = {
  key: 1,
  class: "form-description"
}, R_ = { class: "form-fields" }, I_ = ["for"], L_ = {
  key: 0,
  class: "required-indicator"
}, O_ = ["id", "type", "placeholder", "required", "minlength", "maxlength", "value", "onInput", "onBlur", "autocomplete", "inputmode"], N_ = ["id", "placeholder", "required", "min", "max", "value", "onInput"], M_ = ["id", "placeholder", "required", "minlength", "maxlength", "value", "onInput"], P_ = ["id", "required", "value", "onChange"], F_ = { value: "" }, D_ = ["value"], B_ = {
  key: 4,
  class: "checkbox-field"
}, $_ = ["id", "required", "checked", "onChange"], U_ = { class: "checkbox-label" }, H_ = {
  key: 5,
  class: "radio-group"
}, z_ = ["name", "value", "required", "checked", "onChange"], W_ = { class: "radio-label" }, q_ = {
  key: 6,
  class: "field-error"
}, j_ = { class: "form-actions" }, V_ = ["disabled"], K_ = {
  key: 0,
  class: "loading-spinner-inline"
}, G_ = { key: 1 }, Y_ = { class: "header-content" }, X_ = ["src", "alt"], Z_ = { class: "header-info" }, J_ = { class: "status" }, Q_ = { class: "status-text cm-presence" }, ey = { class: "header-actions" }, ty = ["disabled", "title", "aria-label", "aria-expanded"], ny = { class: "ask-anything-header" }, sy = ["src", "alt"], ry = { class: "header-info" }, iy = {
  key: 2,
  class: "loading-history"
}, oy = { class: "cm-email-gate-title" }, ay = ["disabled"], ly = {
  key: 0,
  class: "cm-email-gate-error"
}, cy = ["disabled"], uy = {
  key: 0,
  class: "cm-welcome-block"
}, fy = { class: "message agent-message cm-welcome-row" }, hy = ["src", "alt"], dy = {
  key: 0,
  class: "cm-msg-avatar",
  "aria-hidden": "true"
}, py = ["src"], gy = ["src"], my = { class: "message-col" }, _y = {
  key: 0,
  class: "rating-content"
}, yy = { class: "rating-prompt" }, vy = ["onMouseover", "onMouseleave", "onClick", "disabled"], by = {
  key: 0,
  class: "feedback-wrapper"
}, wy = { class: "feedback-section" }, ky = ["onUpdate:modelValue", "disabled"], xy = { class: "feedback-counter" }, Ty = ["onClick", "disabled"], Ay = {
  key: 1,
  class: "submitted-feedback-wrapper"
}, Ey = { class: "submitted-feedback" }, Sy = { class: "submitted-feedback-text" }, Cy = {
  key: 2,
  class: "submitted-message"
}, Ry = {
  key: 1,
  class: "form-content"
}, Iy = {
  key: 0,
  class: "form-header"
}, Ly = {
  key: 0,
  class: "form-title"
}, Oy = {
  key: 1,
  class: "form-description"
}, Ny = { class: "form-fields" }, My = ["for"], Py = {
  key: 0,
  class: "required-indicator"
}, Fy = ["id", "type", "placeholder", "required", "minlength", "maxlength", "value", "onInput", "onBlur", "disabled", "autocomplete", "inputmode"], Dy = ["id", "placeholder", "required", "min", "max", "value", "onInput", "disabled"], By = ["id", "placeholder", "required", "minlength", "maxlength", "value", "onInput", "disabled"], $y = ["id", "required", "value", "onChange", "disabled"], Uy = { value: "" }, Hy = ["value"], zy = {
  key: 4,
  class: "checkbox-field"
}, Wy = ["id", "checked", "onChange", "disabled"], qy = ["for"], jy = {
  key: 5,
  class: "radio-field"
}, Vy = ["id", "name", "value", "checked", "onChange", "disabled"], Ky = ["for"], Gy = {
  key: 6,
  class: "field-error"
}, Yy = { class: "form-actions" }, Xy = ["onClick", "disabled"], Zy = {
  key: 2,
  class: "user-input-content"
}, Jy = {
  key: 0,
  class: "user-input-prompt"
}, Qy = {
  key: 1,
  class: "user-input-form"
}, ev = ["onUpdate:modelValue", "onKeydown"], tv = ["onClick", "disabled"], nv = {
  key: 2,
  class: "user-input-submitted"
}, sv = {
  key: 0,
  class: "user-input-confirmation"
}, rv = {
  key: 3,
  class: "product-message-container"
}, iv = ["innerHTML"], ov = {
  key: 1,
  class: "products-carousel"
}, av = { class: "carousel-items" }, lv = {
  key: 0,
  class: "product-image-compact"
}, cv = ["src", "alt"], uv = { class: "product-info-compact" }, fv = { class: "product-text-area" }, hv = { class: "product-title-compact" }, dv = {
  key: 0,
  class: "product-variant-compact"
}, pv = { class: "product-price-compact" }, gv = { class: "product-actions-compact" }, mv = ["onClick"], _v = {
  key: 2,
  class: "no-products-message"
}, yv = {
  key: 3,
  class: "no-products-message"
}, vv = ["innerHTML"], bv = ["innerHTML"], wv = {
  key: 2,
  class: "message-attachments"
}, kv = {
  key: 0,
  class: "attachment-image-container"
}, xv = ["src", "alt", "onClick"], Tv = { class: "attachment-image-info" }, Av = ["href"], Ev = { class: "attachment-size" }, Sv = ["href"], Cv = { class: "attachment-size" }, Rv = {
  key: 0,
  class: "citation-chips"
}, Iv = ["title"], Lv = { class: "message-info" }, Ov = {
  key: 0,
  class: "agent-name"
}, Nv = {
  key: 5,
  class: "cm-quick-actions-bar"
}, Mv = ["disabled", "onClick"], Pv = {
  key: 0,
  class: "file-previews-widget"
}, Fv = {
  class: "file-preview-content-widget",
  style: { cursor: "pointer" }
}, Dv = ["src", "alt", "onClick"], Bv = ["onClick"], $v = { class: "file-preview-info-widget" }, Uv = { class: "file-preview-name-widget" }, Hv = { class: "file-preview-size-widget" }, zv = ["onClick"], Wv = {
  key: 1,
  class: "upload-progress-widget"
}, qv = { class: "message-input" }, jv = ["placeholder", "disabled"], Vv = ["disabled", "title"], Kv = ["disabled"], Gv = {
  key: 7,
  class: "new-conversation-section"
}, Yv = { class: "conversation-ended-message" }, Xv = {
  key: 8,
  class: "ai-disclaimer"
}, Zv = {
  key: 8,
  class: "rating-dialog"
}, Jv = { class: "rating-content" }, Qv = { class: "star-rating" }, eb = ["onClick"], tb = { class: "rating-actions" }, nb = ["disabled"], sb = {
  key: 0,
  class: "preview-modal-image-container"
}, rb = ["src", "alt"], ib = { class: "preview-modal-filename" }, ob = {
  key: 3,
  class: "widget-loading"
}, Wl = 3, ab = "image/*,.pdf,.doc,.docx,.txt,.csv,.xlsx,.xls", lb = /* @__PURE__ */ Wo({
  __name: "WidgetBuilder",
  props: {
    widgetId: {},
    token: {},
    initialAuthError: {}
  },
  setup(e) {
    const t = e, n = fe(() => {
      var f;
      return t.widgetId || ((f = window.__INITIAL_DATA__) == null ? void 0 : f.widgetId);
    }), {
      customization: s,
      agentName: r,
      applyCustomization: i,
      initializeFromData: o
    } = Dm(), { formatCurrency: a } = Qm(), {
      messages: l,
      loading: d,
      errorMessage: c,
      showError: b,
      loadingHistory: w,
      hasStartedChat: D,
      connectionStatus: P,
      sendMessage: z,
      endChat: L,
      loadChatHistory: se,
      connect: he,
      reconnect: ce,
      cleanup: k,
      humanAgent: R,
      onTakeover: K,
      refusal: G,
      submitRating: Se,
      submitForm: Ne,
      currentForm: Me,
      getWorkflowState: xe,
      proceedWorkflow: ve,
      onWorkflowState: $e,
      onWorkflowProceeded: qe,
      currentSessionId: Qe,
      setToken: de,
      setWidgetId: _e,
      onSessionState: ue,
      onReauthorize: st
    } = Lm(), { displayText: et, isStreaming: Te } = Um(l, () => rs(() => Ve()));
    Hm(l);
    const we = le(""), Pe = le(!0), tt = le(""), Ce = le(!1), ct = (f) => {
      const p = f.target;
      we.value = p.value;
    };
    let it = null;
    const ut = () => {
      it && it.disconnect(), it = new MutationObserver((p) => {
        let u = !1, ne = !1;
        p.forEach((be) => {
          if (be.type === "childList") {
            const ge = Array.from(be.addedNodes).some(
              (nt) => {
                var Ye;
                return nt.nodeType === Node.ELEMENT_NODE && (nt.matches("input, textarea") || ((Ye = nt.querySelector) == null ? void 0 : Ye.call(nt, "input, textarea")));
              }
            ), at = Array.from(be.removedNodes).some(
              (nt) => {
                var Ye;
                return nt.nodeType === Node.ELEMENT_NODE && (nt.matches("input, textarea") || ((Ye = nt.querySelector) == null ? void 0 : Ye.call(nt, "input, textarea")));
              }
            );
            ge && (ne = !0, u = !0), at && (u = !0);
          }
        }), u && (clearTimeout(ut.timeoutId), ut.timeoutId = setTimeout(() => {
          E();
        }, ne ? 50 : 100));
      });
      const f = document.querySelector(".widget-container") || document.body;
      it.observe(f, {
        childList: !0,
        subtree: !0
      });
    };
    ut.timeoutId = null;
    let vt = [];
    const yt = /* @__PURE__ */ new Set();
    let qt = !1;
    const g = (f) => {
      if (qt) return;
      const p = setTimeout(() => {
        yt.delete(p), E();
      }, f);
      yt.add(p);
    }, _ = () => {
      yt.forEach(clearTimeout), yt.clear();
    }, E = () => {
      U();
      const f = [
        '.widget-container input[type="text"]',
        '.chat-container input[type="text"]',
        ".message-input input",
        ".welcome-message-field",
        ".ask-anything-field",
        'input[placeholder*="message"]',
        'input[placeholder*="Type"]',
        'input[placeholder*="Ask"]',
        "input.message-input",
        "textarea",
        // More specific selectors for the widget context
        ".widget-container input",
        ".chat-input input",
        "input"
      ];
      let p = [];
      for (const u of f) {
        const ne = document.querySelectorAll(u);
        if (ne.length > 0) {
          p = Array.from(ne);
          break;
        }
      }
      p.length !== 0 && (vt = p, p.forEach((u) => {
        u.addEventListener("input", M, !0), u.addEventListener("keyup", M, !0), u.addEventListener("change", M, !0), u.addEventListener("keypress", j, !0), u.addEventListener("keydown", q, !0);
      }));
    }, U = () => {
      vt.forEach((f) => {
        f.removeEventListener("input", M), f.removeEventListener("keyup", M), f.removeEventListener("change", M), f.removeEventListener("keypress", j), f.removeEventListener("keydown", q);
      }), vt = [];
    }, F = (f) => !!(f && f.closest && f.closest(".form-message, .form-fullscreen, .cm-email-gate")), M = (f) => {
      if (F(f.target)) return;
      const p = f.target;
      we.value = p.value;
    }, j = (f) => {
      F(f.target) || f.key === "Enter" && !f.shiftKey && (f.preventDefault(), f.stopPropagation(), Zt());
    }, q = (f) => {
      F(f.target) || f.key === "Enter" && !f.shiftKey && (f.preventDefault(), f.stopPropagation(), Zt());
    }, W = (f) => {
      const p = f.target, u = document.querySelector(".header-menu-container");
      document.querySelector(".header-menu-btn");
      const ne = document.querySelector(".header-dropdown-menu");
      ne && !(u != null && u.contains(p)) && (ne.style.display = "none");
    }, B = le(!0), {
      token: X,
      start: V,
      stop: Z,
      setToken: ie,
      ensureFresh: me
    } = Cg({
      onTokenChanged: (f) => {
        ts() && It({ type: "TOKEN_UPDATE", token: f }), de(f);
      },
      onIdentityExpired: () => {
        da();
      },
      // A framed widget holds the token only in memory: the host page keeps it, so
      // it must hear when the widget lets it go.
      onTokenCleared: () => {
        xo() && ts() && It({ type: "TOKEN_CLEAR" });
      },
      store: _u(n.value || "")
    });
    fe(() => !!X.value);
    const N = le(null), I = le(!1), J = le(!1);
    t.initialAuthError && (N.value = t.initialAuthError, I.value = !0, B.value = !1), o();
    const ee = window.__INITIAL_DATA__;
    V((ee == null ? void 0 : ee.widgetId) || "", ee == null ? void 0 : ee.initialToken), X.value && (Ce.value = !0);
    const Ie = le(!1);
    (ee == null ? void 0 : ee.allowAttachments) !== void 0 && (Ie.value = ee.allowAttachments);
    const h = le(null), {
      chatStyles: m,
      chatIconStyles: C,
      agentBubbleStyles: T,
      userBubbleStyles: $,
      messageNameStyles: Y,
      headerBorderStyles: te,
      photoUrl: pe,
      shadowStyle: Le
    } = Mg(s), Ke = le(null), {
      uploadedAttachments: Ae,
      previewModal: pt,
      previewFile: gt,
      formatFileSize: je,
      isImageAttachment: nn,
      getDownloadUrl: ls,
      getPreviewUrl: Rs,
      handleFileSelect: cs,
      handleDrop: Is,
      handleDragOver: Ls,
      handleDragLeave: vr,
      handlePaste: Ht,
      removeAttachment: An,
      openPreview: us,
      closePreview: Wn,
      openFilePicker: fs,
      isImage: Os
    } = Dg(X, Ke);
    fe(() => l.value.some(
      (f) => f.message_type === "form" && (!f.isSubmitted || f.isSubmitted === !1)
    ));
    const xt = fe(() => {
      var f;
      return D.value && Ce.value || !Ii.value ? P.value === "connected" && !d.value : Ws(tt.value.trim()) && P.value === "connected" && !d.value || ((f = window.__INITIAL_DATA__) == null ? void 0 : f.workflow);
    }), En = fe(() => xt.value || d.value && P.value === "connected" && D.value), hs = fe(() => P.value === "connected" ? jt.value ? "Ask me anything..." : "Type a message..." : "Connecting..."), ds = le(!1), Zt = async () => {
      if (!we.value.trim() && Ae.value.length === 0) return;
      if (d.value && D.value) {
        ds.value = !0;
        return;
      }
      !D.value && tt.value && await H();
      const f = Ae.value.map((u) => ({
        content: u.content,
        // base64 content
        filename: u.filename,
        content_type: u.type,
        size: u.size
      }));
      await z(we.value, tt.value, f), Ae.value.forEach((u) => {
        u.url && u.url.startsWith("blob:") && URL.revokeObjectURL(u.url), u.file_url && u.file_url.startsWith("blob:") && URL.revokeObjectURL(u.file_url);
      }), we.value = "", Ae.value = [];
      const p = document.querySelector('input[placeholder*="Type a message"]');
      p && (p.value = ""), g(500);
    };
    Lt(d, (f) => {
      f || !ds.value || (ds.value = !1, P.value === "connected" && D.value && Zt());
    });
    const br = (f) => {
      xt.value && (we.value = f, Zt());
    }, oe = () => {
      It({ type: "WIDGET_MINIMIZE" });
    }, y = (f) => {
      f.key === "Enter" && !f.shiftKey && (f.preventDefault(), f.stopPropagation(), Zt());
    }, H = async ({ afterRefusal: f = !1 } = {}) => {
      var p, u, ne, be;
      try {
        if (!n.value)
          return console.error("Widget ID is not available"), N.value = "Widget ID is not available. Please refresh and try again.", I.value = !0, !1;
        await me(n.value);
        const ge = new URL(`${os.API_URL}/widgets/${n.value}`);
        tt.value.trim() && Ws(tt.value.trim()) && ge.searchParams.append("email", tt.value.trim());
        const at = {
          Accept: "application/json",
          "Content-Type": "application/json"
        };
        X.value && (at.Authorization = `Bearer ${X.value}`);
        const nt = await fetch(ge, {
          headers: at,
          cache: "no-store"
        });
        if (nt.status === 401) {
          Ce.value = !1;
          try {
            const Ln = (await nt.json()).detail;
            if ((Ln == null ? void 0 : Ln.code) === xg)
              return da(), !1;
            const ms = typeof Ln == "string" ? Ln : "";
            (ms.includes("generate-token") || ms.includes("API key") || ms.includes("Token required")) && (J.value = !0, N.value = "Widget authentication not configured. Please contact the website administrator.", I.value = !0, ie(null));
          } catch {
            N.value = "Authentication required. Your token has expired or is invalid. Please refresh the page.", I.value = !0, ie(null);
          }
          return !1;
        }
        if (!nt.ok) {
          try {
            const $s = await nt.json();
            N.value = $s.detail || `Error: ${nt.statusText}`;
          } catch {
            N.value = `Error: ${nt.statusText}. Please try again.`;
          }
          return I.value = !0, !1;
        }
        const Ye = await nt.json();
        Ye.token && ie(Ye.token), Ce.value = !0, N.value = null, I.value = !1, de(X.value || void 0);
        const Bs = await he();
        return !Bs && _o(G.value) && !f ? await H({ afterRefusal: !0 }) : (Bs || console.error("Chat service not reachable yet; retrying in the background"), await re(), (p = Ye.agent) != null && p.customization && i(Ye.agent.customization), Ye.agent && !(Ye != null && Ye.human_agent) && (r.value = Ye.agent.name), Ye != null && Ye.human_agent && (R.value = Ye.human_agent), ((u = Ye.agent) == null ? void 0 : u.allow_attachments) !== void 0 && (Ie.value = Ye.agent.allow_attachments), ((ne = Ye.agent) == null ? void 0 : ne.workflow) !== void 0 && (window.__INITIAL_DATA__ = window.__INITIAL_DATA__ || {}, window.__INITIAL_DATA__.workflow = Ye.agent.workflow), (be = Ye.agent) != null && be.workflow && await xe(), !0);
      } catch (ge) {
        return console.error("Error checking authorization:", ge), N.value = "An unexpected error occurred. Please try again.", I.value = !0, Ce.value = !1, !1;
      } finally {
        B.value = !1;
      }
    }, re = async () => {
      !D.value && Ce.value && (D.value = !0, await se());
    }, Ve = () => {
      h.value && (h.value.scrollTop = h.value.scrollHeight);
    };
    Lt(() => l.value, (f) => {
      rs(() => {
        Ve();
      });
    }, { deep: !0 }), Lt(P, (f, p) => {
      f === "connected" && p !== "connected" && g(100);
    }), Lt(() => l.value.length, (f, p) => {
      f > 0 && p === 0 && g(100);
    });
    let mt = null;
    Lt(() => l.value, (f) => {
      const p = f[f.length - 1];
      !Cl(p) || p === mt || (mt = p, Lu(p));
    }, { deep: !0 });
    const lt = async () => {
      (await ce() || _o(G.value)) && await H();
    }, bt = le(!1), Dt = le(0), dn = le(""), Bt = le(0), Ge = le(!1), ot = le({}), ft = le(!1), _t = le({}), qn = le(!1), Ns = le(null), ca = le("Start Chat"), jn = le(!1), St = le(null);
    fe(() => {
      var p;
      const f = l.value[l.value.length - 1];
      return ((p = f == null ? void 0 : f.attributes) == null ? void 0 : p.request_rating) || !1;
    });
    const Ms = fe(() => {
      var p;
      if (!((p = window.__INITIAL_DATA__) != null && p.workflow))
        return !1;
      const f = l.value.find((u) => u.message_type === "rating");
      return (f == null ? void 0 : f.isSubmitted) === !0;
    }), Vn = fe(
      () => oi(R.value.human_agent_profile_pic)
    ), Lu = async (f) => {
      var p, u, ne, be, ge;
      if (Cl(f)) {
        try {
          if (f.session_id && X.value && n.value) {
            const at = await ha(f.session_id, {
              reason: (p = f.attributes) == null ? void 0 : p.end_chat_reason,
              description: (u = f.attributes) == null ? void 0 : u.end_chat_description
            });
            if (at.ok) {
              const nt = await at.json();
              console.info(`✓ Chat session closed on backend: ${nt.session_id}`);
            } else
              console.warn(`Failed to close session on backend: ${at.status}`);
          }
        } catch (at) {
          console.error("Error calling end-chat API:", at);
        }
        if ((ne = f.attributes) != null && ne.end_chat && ((be = f.attributes) != null && be.request_rating)) {
          const at = f.agent_name || ((ge = R.value) == null ? void 0 : ge.human_agent_name) || r.value || "our agent";
          l.value.push({
            message: `Rate the chat session that you had with ${at}`,
            message_type: "rating",
            created_at: (/* @__PURE__ */ new Date()).toISOString(),
            session_id: f.session_id,
            agent_name: at,
            showFeedback: !1
          }), Qe.value = f.session_id;
        }
      }
    }, Ou = (f) => {
      Ge.value || (Bt.value = f);
    }, Nu = () => {
      if (!Ge.value) {
        const f = l.value[l.value.length - 1];
        Bt.value = (f == null ? void 0 : f.selectedRating) || 0;
      }
    }, Mu = async (f) => {
      if (!Ge.value) {
        Bt.value = f;
        const p = l.value[l.value.length - 1];
        p && p.message_type === "rating" && (p.showFeedback = !0, p.selectedRating = f);
      }
    }, Pu = async (f, p, u = null) => {
      try {
        Ge.value = !0, await Se(p, u);
        const ne = l.value.find((be) => be.message_type === "rating");
        ne && (ne.isSubmitted = !0, ne.finalRating = p, ne.finalFeedback = u);
      } catch (ne) {
        console.error("Failed to submit rating:", ne);
      } finally {
        Ge.value = !1;
      }
    }, Fu = (f) => {
      const p = {};
      for (const u of f.fields) {
        const ne = ot.value[u.name], be = Ti(u, ne);
        be && (p[u.name] = be);
      }
      return _t.value = p, Object.keys(p).length === 0;
    }, Du = async (f) => {
      if (!(ft.value || !Fu(f)))
        try {
          ft.value = !0, await Ne(ot.value);
          const u = l.value.findIndex(
            (ne) => ne.message_type === "form" && (!ne.isSubmitted || ne.isSubmitted === !1)
          );
          u !== -1 && l.value.splice(u, 1), ot.value = {}, _t.value = {};
        } catch (u) {
          console.error("Failed to submit form:", u);
        } finally {
          ft.value = !1;
        }
    }, $t = (f, p) => {
      var u, ne;
      if (ot.value[f] = p, p && p.toString().trim() !== "") {
        let be = null;
        if ((u = St.value) != null && u.fields && (be = St.value.fields.find((ge) => ge.name === f)), !be && ((ne = Me.value) != null && ne.fields) && (be = Me.value.fields.find((ge) => ge.name === f)), be) {
          const ge = Ti(be, p);
          ge ? (_t.value[f] = ge, console.log(`Validation error for ${f}:`, ge)) : delete _t.value[f];
        }
      } else
        delete _t.value[f], console.log(`Cleared error for ${f}`);
    }, Bu = (f) => {
      const p = f.replace(/\D/g, "");
      return p.length >= 7 && p.length <= 15;
    }, Ti = (f, p) => {
      if (f.required && (!p || p.toString().trim() === ""))
        return `${f.label} is required`;
      if (!p || p.toString().trim() === "")
        return null;
      if (f.type === "email" && !Ws(p))
        return "Please enter a valid email address";
      if (f.type === "tel" && !Bu(p))
        return "Please enter a valid phone number";
      if ((f.type === "text" || f.type === "textarea") && f.minLength && p.length < f.minLength)
        return `${f.label} must be at least ${f.minLength} characters`;
      if ((f.type === "text" || f.type === "textarea") && f.maxLength && p.length > f.maxLength)
        return `${f.label} must not exceed ${f.maxLength} characters`;
      if (f.type === "number") {
        const u = parseFloat(p);
        if (isNaN(u))
          return `${f.label} must be a valid number`;
        if (f.minLength && u < f.minLength)
          return `${f.label} must be at least ${f.minLength}`;
        if (f.maxLength && u > f.maxLength)
          return `${f.label} must not exceed ${f.maxLength}`;
      }
      return null;
    }, $u = async () => {
      if (!(ft.value || !St.value))
        try {
          ft.value = !0, _t.value = {};
          let f = !1;
          for (const p of St.value.fields || []) {
            const u = ot.value[p.name], ne = Ti(p, u);
            ne && (_t.value[p.name] = ne, f = !0, console.log(`Validation error for field ${p.name}:`, ne));
          }
          if (f) {
            ft.value = !1, console.log("Validation failed, not submitting");
            return;
          }
          await Ne(ot.value), jn.value = !1, St.value = null, ot.value = {};
        } catch (f) {
          console.error("Failed to submit full screen form:", f);
        } finally {
          ft.value = !1, console.log("Full screen form submission completed");
        }
    }, Uu = (f, p) => {
      if (console.log("handleViewDetails called with:", { product: f, shopDomain: p }), !f) {
        console.error("No product provided to handleViewDetails");
        return;
      }
      let u = null;
      if (f.handle && p)
        u = `https://${p}/products/${f.handle}`;
      else if (f.id && p)
        u = `https://${p}/products/${f.id}`;
      else if (p) {
        if (!f.handle && !f.id) {
          console.error("Product handle and ID are both missing! Product:", f), alert("Unable to open product: Product information incomplete.");
          return;
        }
      } else {
        console.error("Shop domain is missing! Product:", f), alert("Unable to open product: Shop domain not available. Please contact support.");
        return;
      }
      u && (console.log("Opening product URL:", u), window.open(u, "_blank", "noopener"));
    }, Hu = (f) => {
      if (!f) return "";
      let p = f.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, "");
      const u = [];
      return p = p.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (ne, be, ge) => {
        const at = `__MARKDOWN_LINK_${u.length}__`;
        return console.log("Found markdown link:", ne, "-> placeholder:", at), u.push(ne), at;
      }), console.log("After replacing markdown links with placeholders:", p), console.log("Markdown links array:", u), p = p.replace(/https?:\/\/[^\s\)]+/g, "[link removed]"), console.log("After removing standalone URLs:", p), u.forEach((ne, be) => {
        p = p.replace(`__MARKDOWN_LINK_${be}__`, ne), console.log(`Restored markdown link ${be}:`, ne);
      }), p = p.replace(/\n\s*\n\s*\n/g, `

`).trim(), p;
    }, ua = le(!1);
    le(!1);
    const Ai = fe(() => {
      var f;
      return !!((f = R.value) != null && f.human_agent_name);
    }), fa = fe(() => {
      var f;
      return wg((f = window.__INITIAL_DATA__) == null ? void 0 : f.presence, Ai.value);
    }), zu = fe(() => Ie.value && Ai.value && Ae.value.length < Wl), Wu = async () => {
      try {
        qn.value = !1, Ns.value = null, await ve();
      } catch (f) {
        console.error("Failed to proceed workflow:", f);
      }
    }, Ei = async (f) => {
      try {
        if (!f.userInputValue || !f.userInputValue.trim())
          return;
        const p = f.userInputValue.trim();
        f.isSubmitted = !0, f.submittedValue = p, await z(p, tt.value);
      } catch (p) {
        console.error("Failed to submit user input:", p), f.isSubmitted = !1, f.submittedValue = null;
      }
    }, ha = (f, { reason: p, description: u, keepalive: ne = !1 } = {}) => {
      const be = new URL(`${os.API_URL}/widgets/${n.value}/end-chat`);
      return be.searchParams.append("session_id", f), p && be.searchParams.append("reason", p), u && be.searchParams.append("description", u), fetch(be, {
        method: "POST",
        keepalive: ne,
        headers: {
          Authorization: `Bearer ${X.value}`,
          "Content-Type": "application/json"
        }
      });
    }, qu = async (f) => {
      try {
        typeof f == "string" && f && X.value && n.value && await ha(f, { reason: "CUSTOMER_REQUEST", keepalive: !0 });
      } catch {
      } finally {
        It({ type: "END_CHAT_DONE" });
      }
    }, da = () => {
      if (!ts()) {
        pa();
        return;
      }
      It({ type: "IDENTITY_EXPIRED" });
    }, pa = async () => {
      X.value && (ie(null), await Ps());
    }, ju = async (f) => {
      const p = Fn(f);
      !p || p === X.value || (ie(p), await Ps());
    }, Ps = async () => {
      var f, p, u;
      try {
        let ne = 0;
        const be = 50;
        for (; !((f = window.__INITIAL_DATA__) != null && f.widgetId) && ne < be; )
          await new Promise((at) => setTimeout(at, 100)), ne++;
        return (p = window.__INITIAL_DATA__) != null && p.widgetId ? (_e(window.__INITIAL_DATA__.widgetId), await H() ? ((u = window.__INITIAL_DATA__) != null && u.workflow && Ce.value && await xe(), !0) : (P.value = "connected", !1)) : (console.error("Widget data not available after waiting"), !1);
      } catch (ne) {
        return console.error("Failed to initialize widget:", ne), !1;
      }
    };
    window.addEventListener("message", (f) => {
      f.source === window.parent && (!f.data || typeof f.data.type != "string" || (f.data.type === "SCROLL_TO_BOTTOM" && Ve(), f.data.type === "HOST_PAGE" && mu(f.data.url), f.data.type === "END_CHAT" && ts() && qu(f.data.sessionId), f.data.type === "IDENTITY_UNAVAILABLE" && ts() && pa(), f.data.type === "TOKEN_REFRESH" && ts() && ju(f.data.token), f.data.type === "WIDGET_VISIBILITY" && (Ta.value = !!f.data.open), f.data.type === "WIDGET_DISPLAY" && (Li.value = {
        mode: f.data.mode,
        width: f.data.width,
        height: f.data.height,
        hotkey: f.data.hotkey
      }), f.data.type === "PREFILL_MESSAGE" && typeof f.data.text == "string" && (we.value = f.data.text.slice(0, 2e3), rs(() => {
        const p = document.querySelector(
          ".message-input input, .welcome-message-field"
        );
        p == null || p.focus();
      }))));
    }), window.addEventListener("keydown", (f) => {
      f.key !== "Escape" || f.defaultPrevented || !xo() || It({ type: "WIDGET_ESCAPE" });
    });
    const Vu = () => {
      K(async () => {
        await H();
      }), st(async () => {
        await H();
      }), ue(({ session_id: f, authenticated: p, created: u }) => {
        It({
          type: "CHAT_SESSION",
          sessionId: f,
          authenticated: p,
          created: u
        });
      }), $e((f) => {
        var p;
        if (ca.value = f.button_text || "Start Chat", f.type === "landing_page")
          Ns.value = f.landing_page_data, qn.value = !0, jn.value = !1;
        else if (f.type === "form" || f.type === "display_form")
          if (((p = f.form_data) == null ? void 0 : p.form_full_screen) === !0)
            St.value = f.form_data, jn.value = !0, qn.value = !1;
          else {
            const u = {
              message: "",
              message_type: "form",
              attributes: {
                form_data: f.form_data
              },
              created_at: (/* @__PURE__ */ new Date()).toISOString(),
              isSubmitted: !1
            };
            l.value.findIndex(
              (be) => be.message_type === "form" && !be.isSubmitted
            ) === -1 && l.value.push(u), qn.value = !1, jn.value = !1;
          }
        else
          qn.value = !1, jn.value = !1;
      }), qe((f) => {
        console.log("Workflow proceeded:", f);
      });
    }, Ku = async () => {
      try {
        await Ps(), await xe();
      } catch (f) {
        throw console.error("Failed to start new conversation:", f), f;
      }
    }, wr = fe(
      () => {
        var f;
        return s.value.allow_new_chat === !0 && l.value.length > 0 && !((f = R.value) != null && f.human_agent_name) && !Gn.value;
      }
    ), Sn = le(!1), Cn = le(""), Rn = le(!1);
    let Kn = null;
    const ps = () => {
      Rn.value = !1, Cn.value = "", Kn && (clearTimeout(Kn), Kn = null);
    }, ga = () => {
      if (!Sn.value) {
        if (Rn.value) {
          ps();
          return;
        }
        Rn.value = !0, Cn.value = "", Kn = setTimeout(ps, Wp);
      }
    };
    Lt(wr, (f) => {
      f || ps();
    });
    const ma = async () => {
      Sn.value || (Kn && (clearTimeout(Kn), Kn = null), await Gu(), Cn.value || (Rn.value = !1));
    }, Gu = async () => {
      if (!Sn.value) {
        Sn.value = !0, Cn.value = "";
        try {
          if (!await L()) {
            Cn.value = Sl;
            return;
          }
          R.value = {}, we.value = "", Ae.value = [], await Ps();
        } catch (f) {
          console.error("Failed to start a new chat:", f), Cn.value = Sl;
        } finally {
          Sn.value = !1;
        }
      }
    }, Yu = async () => {
      Ms.value = !1, l.value = [], R.value = {}, await Ku();
    };
    mi(async () => {
      await Ps(), Vu(), ut(), document.addEventListener("click", W), (() => {
        const p = l.value.length > 0, u = P.value === "connected", ne = document.querySelector('input[type="text"], textarea') !== null;
        return p || u || ne;
      })() && g(100);
    }), mr(() => {
      window.removeEventListener("message", (f) => {
        f.data.type === "SCROLL_TO_BOTTOM" && Ve();
      }), document.removeEventListener("click", W), it && (it.disconnect(), it = null), ut.timeoutId && (clearTimeout(ut.timeoutId), ut.timeoutId = null), qt = !0, _(), U(), Z(), ps(), k();
    });
    const gs = fe(() => s.value.chat_style === "AURORA"), jt = fe(() => s.value.chat_style === "ASK_ANYTHING" || gs.value), _a = fe(() => s.value.customization_metadata), kr = fe(() => {
      var p;
      const f = (p = _a.value) == null ? void 0 : p.avatar_style;
      return f === "orb" ? !0 : f === "photo" ? !1 : gs.value && !s.value.photo_url;
    }), Fs = fe(() => {
      var f;
      return vg(r.value || "", (f = _a.value) == null ? void 0 : f.orb_variant);
    }), Xu = {
      GLASS: "theme-glass",
      TERMINAL: "theme-terminal",
      PLAYFUL: "theme-playful",
      CALM_MINT: "theme-calm",
      SUNRISE: "theme-sunrise"
    }, Zu = fe(() => Xu[s.value.chat_style] || ""), Ju = fe(() => Jm(s.value.chat_style, {
      chat_background_color: s.value.chat_background_color,
      chat_text_color: s.value.chat_text_color,
      accent_color: s.value.accent_color,
      font_family: s.value.font_family
    })), Si = fe(
      () => Array.isArray(s.value.quick_actions) ? s.value.quick_actions.filter((f) => !!f && f.trim().length > 0) : []
    ), ya = fe(() => (s.value.welcome_message || "").trim()), va = fe(
      () => !jt.value && l.value.length === 0 && !w.value && !Gn.value
    ), Qu = fe(
      () => va.value && ya.value.length > 0
    ), ef = fe(
      () => va.value && !Ms.value && Si.value.length > 0
    ), xr = fe(() => s.value.show_citations === !0), ba = fe(() => bg(s.value.show_ai_disclaimer, Ai.value)), tf = (f) => /^[0-9a-f]{16,}$/i.test(f) || /^[0-9a-f-]{32,}$/i.test(f), Ci = (f) => {
      const p = (f || "").trim().toLowerCase();
      return !p || p === "unknown" ? "Knowledge base" : p.charAt(0).toUpperCase() + p.slice(1);
    }, Ri = (f) => {
      let p = ((f == null ? void 0 : f.name) || "").trim();
      return !p || (p = p.replace(/^[0-9a-f]{16,}[_-]/i, "").replace(/\.(pdf|txt|md|html?|docx?|csv|json)$/i, ""), !p || tf(p)) ? Ci(f == null ? void 0 : f.type) : p;
    }, wa = (f) => {
      const p = Ri(f), u = Ci(f == null ? void 0 : f.type);
      return p === u ? u : `${p} · ${u}`;
    }, Ii = fe(() => s.value.collect_email === !0 && !jt.value), ka = le(!1), In = le(""), Ds = le(!1), Gn = fe(() => !D.value && Ii.value && !ka.value), xa = async () => {
      const f = tt.value.trim();
      if (!f) {
        In.value = "Please enter your email address.";
        return;
      }
      if (!Ws(f)) {
        In.value = "Please enter a valid email address.";
        return;
      }
      In.value = "", Ds.value = !0;
      try {
        await H(), ka.value = !0;
      } catch {
        In.value = "Something went wrong. Please try again.";
      } finally {
        Ds.value = !1;
      }
    }, Li = le(null), Ta = le(!0), Oi = { mode: "floating", width: 400, height: 560 }, Tr = fe(
      () => {
        var f;
        return Li.value || ((f = s.value.customization_metadata) == null ? void 0 : f.widget_display) || null;
      }
    ), nf = fe(() => {
      const f = Tr.value;
      return f ? typeof f.mode == "string" && f.mode !== Oi.mode || typeof f.width == "number" && f.width !== Oi.width || typeof f.height == "number" && f.height !== Oi.height : !1;
    }), sf = fe(() => {
      var p;
      const f = {
        width: "100%",
        height: "100%",
        borderRadius: "var(--radius-lg)"
      };
      if (nf.value) {
        const u = (p = Tr.value) == null ? void 0 : p.mode;
        return u === "sidebar-left" || u === "sidebar-right" ? { ...f, borderRadius: "0" } : f;
      }
      return jt.value ? window.innerWidth <= 768 ? {
        ...f,
        width: "100vw",
        height: "100vh",
        maxWidth: "100vw",
        maxHeight: "100vh",
        minWidth: "unset",
        borderRadius: "0"
      } : window.innerWidth <= 1024 ? {
        ...f,
        width: "95%",
        maxWidth: "700px",
        minWidth: "500px",
        height: "650px"
      } : {
        ...f,
        width: "100%",
        maxWidth: "400px",
        minWidth: "400px",
        height: "580px"
      } : f;
    }), Aa = fe(() => jt.value && l.value.length === 0), rf = ["form", "user_input", "rating", "product", "shopify_output"], of = fe(
      () => l.value.some(
        (f) => rf.includes(f.message_type) || Array.isArray(f.attachments) && f.attachments.length > 0
      )
    ), af = fe(() => {
      var p, u;
      return jt.value ? !0 : (((p = Tr.value) == null ? void 0 : p.mode) === "ask-ai" || ((u = Tr.value) == null ? void 0 : u.mode) === "search-bar") && !Ie.value;
    }), Ni = fe(
      () => af.value && Pe.value && !qn.value && !jn.value && !Gn.value && !Ms.value && !of.value
    );
    Lt(Ni, (f) => {
      It({ type: "WIDGET_SURFACE", palette: f });
    }, { immediate: !0 });
    const lf = fe(
      () => s.value.welcome_subtitle || `Ask a question — ${r.value || "the assistant"} answers from what it knows.`
    ), cf = fe(() => {
      var f;
      return ((f = Li.value) == null ? void 0 : f.hotkey) !== !1;
    });
    return (f, p) => I.value && J.value ? (x(), A("div", e_, [
      v("button", {
        type: "button",
        class: "cm-error-close",
        "aria-label": "Close chat",
        title: "Close",
        onClick: oe
      }, "×"),
      p[20] || (p[20] = Zn('<div class="widget-unavailable-card" data-v-9fd058c8><div class="widget-unavailable-icon-wrapper" data-v-9fd058c8><svg class="widget-unavailable-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-v-9fd058c8><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" data-v-9fd058c8></path><path d="M9 12l2 2 4-4" data-v-9fd058c8></path></svg></div><h2 class="widget-unavailable-title" data-v-9fd058c8>Chat Unavailable</h2><p class="widget-unavailable-message" data-v-9fd058c8> This chat widget is not currently configured. Please contact the website administrator to enable chat support. </p><div class="widget-unavailable-footer" data-v-9fd058c8><svg class="chattermate-logo-small" width="14" height="14" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9fd058c8><path d="M19 3H41A16 16 0 0 1 57 19V41A16 16 0 0 1 41 57H9A6 6 0 0 1 3 51V19A16 16 0 0 1 19 3Z" fill="#C9F24E" data-v-9fd058c8></path><circle cx="19.7" cy="30" r="4.3" fill="#0B0C10" data-v-9fd058c8></circle><circle cx="30" cy="30" r="4.3" fill="#0B0C10" data-v-9fd058c8></circle><circle cx="40.3" cy="30" r="4.3" fill="#0B0C10" data-v-9fd058c8></circle></svg><a class="cm-powered-link" href="https://chattermate.chat" target="_blank" rel="noopener" data-v-9fd058c8><span class="cm-powered-prefix" data-v-9fd058c8>Powered by </span><strong class="cm-brand" data-v-9fd058c8>ChatterMate</strong></a></div></div>', 1))
    ])) : I.value ? (x(), A("div", t_, [
      v("button", {
        type: "button",
        class: "cm-error-close",
        "aria-label": "Close chat",
        title: "Close",
        onClick: oe
      }, "×"),
      v("div", n_, [
        p[21] || (p[21] = Zn('<div class="auth-error-header" data-v-9fd058c8><svg class="auth-error-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-9fd058c8><circle cx="12" cy="12" r="10" data-v-9fd058c8></circle><line x1="12" y1="8" x2="12" y2="12" data-v-9fd058c8></line><line x1="12" y1="16" x2="12.01" y2="16" data-v-9fd058c8></line></svg><h2 data-v-9fd058c8>Authentication Error</h2></div>', 1)),
        v("p", s_, Q(N.value), 1),
        v("button", {
          class: "auth-error-refresh-btn",
          onClick: p[0] || (p[0] = () => f.window.location.reload())
        }, " Refresh Page ")
      ])
    ])) : n.value && !I.value ? (x(), A("div", {
      key: 2,
      class: Fe(["chat-container cm-surface", [{ collapsed: !Pe.value, "ask-anything-style": jt.value, aurora: gs.value }, Zu.value]]),
      style: Ee({ ...S(Le), ...sf.value, ...Ju.value })
    }, [
      B.value ? (x(), A("div", r_, p[22] || (p[22] = [
        Zn('<div class="loading-spinner" data-v-9fd058c8><div class="dot" data-v-9fd058c8></div><div class="dot" data-v-9fd058c8></div><div class="dot" data-v-9fd058c8></div></div><div class="loading-text" data-v-9fd058c8>Initializing chat...</div>', 2)
      ]))) : ae("", !0),
      !B.value && S(P) !== "connected" ? (x(), A("div", {
        key: 1,
        class: Fe(["connection-status", S(P)])
      }, [
        S(P) === "connecting" ? (x(), A("div", i_, p[23] || (p[23] = [
          gn(" Connecting to chat service... ", -1),
          v("div", { class: "loading-dots" }, [
            v("div", { class: "dot" }),
            v("div", { class: "dot" }),
            v("div", { class: "dot" })
          ], -1)
        ]))) : S(P) === "failed" ? (x(), A("div", o_, [
          p[24] || (p[24] = gn(" Connection failed. ", -1)),
          v("button", {
            onClick: lt,
            class: "reconnect-button"
          }, " Click here to reconnect ")
        ])) : ae("", !0)
      ], 2)) : ae("", !0),
      S(b) ? (x(), A("div", {
        key: 2,
        class: "error-alert",
        style: Ee(S(C))
      }, Q(S(c)), 5)) : ae("", !0),
      Ni.value ? (x(), Qr(mg, {
        key: 3,
        messages: S(l),
        draft: we.value,
        "agent-name": S(r),
        suggestions: Si.value,
        "welcome-title": S(s).welcome_title,
        "welcome-subtitle": lf.value,
        placeholder: hs.value,
        "input-enabled": xt.value,
        "typing-enabled": En.value,
        loading: S(d),
        "show-citations": xr.value,
        disclaimer: ba.value ? S(Rl) : "",
        active: Ta.value,
        hotkey: cf.value,
        "can-start-new-chat": wr.value,
        "starting-new-chat": Sn.value,
        "new-chat-armed": Rn.value,
        "new-chat-error": Cn.value,
        onNewChat: ga,
        onConfirmNewChat: ma,
        onCancelNewChat: ps,
        "citation-label": Ri,
        "citation-tooltip": wa,
        "display-text": S(et),
        "is-streaming": S(Te),
        "onUpdate:draft": p[1] || (p[1] = (u) => we.value = u),
        onSend: Zt,
        onAsk: br,
        onClose: oe
      }, null, 8, ["messages", "draft", "agent-name", "suggestions", "welcome-title", "welcome-subtitle", "placeholder", "input-enabled", "typing-enabled", "loading", "show-citations", "disclaimer", "active", "hotkey", "can-start-new-chat", "starting-new-chat", "new-chat-armed", "new-chat-error", "display-text", "is-streaming"])) : Aa.value ? (x(), A("div", {
        key: 4,
        class: Fe(["welcome-message-section", { aurora: gs.value }]),
        style: Ee(S(m))
      }, [
        v("div", a_, [
          v("div", l_, [
            kr.value ? (x(), A("div", {
              key: 0,
              class: "welcome-orb",
              style: Ee(Fs.value)
            }, null, 4)) : S(pe) ? (x(), A("img", {
              key: 1,
              src: S(pe),
              alt: S(r),
              class: "welcome-avatar"
            }, null, 8, c_)) : ae("", !0),
            v("h1", u_, Q(S(s).welcome_title || `Welcome to ${S(r)}`), 1),
            v("p", f_, Q(S(s).welcome_subtitle || "I'm here to help you with anything you need. What can I assist you with today?"), 1)
          ])
        ]),
        v("div", h_, [
          !S(D) && !Ce.value && Ii.value ? (x(), A("div", d_, [
            On(v("input", {
              "onUpdate:modelValue": p[2] || (p[2] = (u) => tt.value = u),
              type: "email",
              placeholder: "Enter your email address",
              disabled: S(d) || S(P) !== "connected",
              class: Fe([{
                invalid: tt.value.trim() && !S(Ws)(tt.value.trim()),
                disabled: S(P) !== "connected"
              }, "welcome-email-input"])
            }, null, 10, p_), [
              [Jn, tt.value]
            ])
          ])) : ae("", !0),
          v("div", g_, [
            On(v("input", {
              "onUpdate:modelValue": p[3] || (p[3] = (u) => we.value = u),
              type: "text",
              placeholder: hs.value,
              onKeypress: y,
              onInput: ct,
              onChange: ct,
              disabled: !En.value,
              class: Fe([{ disabled: !En.value }, "welcome-message-field"])
            }, null, 42, m_), [
              [Jn, we.value]
            ]),
            v("button", {
              class: Fe(["welcome-send-button", { "aurora-send": gs.value }]),
              style: Ee(S($)),
              onClick: Zt,
              disabled: !we.value.trim() || !xt.value
            }, [
              gs.value ? (x(), A("svg", y_, p[25] || (p[25] = [
                v("path", {
                  d: "M12 19V5M12 5L5 12M12 5L19 12",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, null, -1)
              ]))) : (x(), A("svg", v_, p[26] || (p[26] = [
                v("path", {
                  d: "M5 12L3 21L21 12L3 3L5 12ZM5 12L13 12",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }, null, -1)
              ])))
            ], 14, __)
          ])
        ]),
        v("div", {
          class: "powered-by-welcome",
          style: Ee(S(Y))
        }, p[27] || (p[27] = [
          Zn('<svg class="chattermate-logo" width="16" height="16" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9fd058c8><path d="M19 3H41A16 16 0 0 1 57 19V41A16 16 0 0 1 41 57H9A6 6 0 0 1 3 51V19A16 16 0 0 1 19 3Z" fill="#C9F24E" data-v-9fd058c8></path><circle cx="19.7" cy="30" r="4.3" fill="#0B0C10" data-v-9fd058c8></circle><circle cx="30" cy="30" r="4.3" fill="#0B0C10" data-v-9fd058c8></circle><circle cx="40.3" cy="30" r="4.3" fill="#0B0C10" data-v-9fd058c8></circle></svg><a class="cm-powered-link" href="https://chattermate.chat" target="_blank" rel="noopener" data-v-9fd058c8><span class="cm-powered-prefix" data-v-9fd058c8>Powered by </span><strong class="cm-brand" data-v-9fd058c8>ChatterMate</strong></a>', 2)
        ]), 4)
      ], 6)) : ae("", !0),
      qn.value && Ns.value ? (x(), A("div", {
        key: 5,
        class: "landing-page-fullscreen",
        style: Ee(S(m))
      }, [
        v("div", b_, [
          v("div", w_, [
            v("h2", k_, Q(Ns.value.heading), 1),
            v("div", x_, Q(Ns.value.content), 1)
          ]),
          v("div", T_, [
            v("button", {
              class: "landing-page-button",
              onClick: Wu
            }, Q(ca.value), 1)
          ])
        ]),
        v("div", {
          class: "powered-by-landing",
          style: Ee(S(Y))
        }, p[28] || (p[28] = [
          Zn('<svg class="chattermate-logo" width="16" height="16" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9fd058c8><path d="M19 3H41A16 16 0 0 1 57 19V41A16 16 0 0 1 41 57H9A6 6 0 0 1 3 51V19A16 16 0 0 1 19 3Z" fill="#C9F24E" data-v-9fd058c8></path><circle cx="19.7" cy="30" r="4.3" fill="#0B0C10" data-v-9fd058c8></circle><circle cx="30" cy="30" r="4.3" fill="#0B0C10" data-v-9fd058c8></circle><circle cx="40.3" cy="30" r="4.3" fill="#0B0C10" data-v-9fd058c8></circle></svg><a class="cm-powered-link" href="https://chattermate.chat" target="_blank" rel="noopener" data-v-9fd058c8><span class="cm-powered-prefix" data-v-9fd058c8>Powered by </span><strong class="cm-brand" data-v-9fd058c8>ChatterMate</strong></a>', 2)
        ]), 4)
      ], 4)) : jn.value && St.value ? (x(), A("div", {
        key: 6,
        class: "form-fullscreen",
        style: Ee(S(m))
      }, [
        v("div", A_, [
          St.value.title || St.value.description ? (x(), A("div", E_, [
            St.value.title ? (x(), A("h2", S_, Q(St.value.title), 1)) : ae("", !0),
            St.value.description ? (x(), A("p", C_, Q(St.value.description), 1)) : ae("", !0)
          ])) : ae("", !0),
          v("div", R_, [
            (x(!0), A(De, null, wt(St.value.fields, (u) => {
              var ne, be;
              return x(), A("div", {
                key: u.name,
                class: "form-field"
              }, [
                v("label", {
                  for: `fullscreen-form-${u.name}`,
                  class: "field-label"
                }, [
                  gn(Q(u.label) + " ", 1),
                  u.required ? (x(), A("span", L_, "*")) : ae("", !0)
                ], 8, I_),
                u.type === "text" || u.type === "email" || u.type === "tel" ? (x(), A("input", {
                  key: 0,
                  id: `fullscreen-form-${u.name}`,
                  type: u.type,
                  placeholder: u.placeholder || "",
                  required: u.required,
                  minlength: u.minLength,
                  maxlength: u.maxLength,
                  value: ot.value[u.name] || "",
                  onInput: (ge) => $t(u.name, ge.target.value),
                  onBlur: (ge) => $t(u.name, ge.target.value),
                  class: Fe(["form-input", { error: _t.value[u.name] }]),
                  autocomplete: u.type === "email" ? "email" : u.type === "tel" ? "tel" : "off",
                  inputmode: u.type === "tel" ? "tel" : u.type === "email" ? "email" : "text"
                }, null, 42, O_)) : u.type === "number" ? (x(), A("input", {
                  key: 1,
                  id: `fullscreen-form-${u.name}`,
                  type: "number",
                  placeholder: u.placeholder || "",
                  required: u.required,
                  min: u.minLength,
                  max: u.maxLength,
                  value: ot.value[u.name] || "",
                  onInput: (ge) => $t(u.name, ge.target.value),
                  class: Fe(["form-input", { error: _t.value[u.name] }])
                }, null, 42, N_)) : u.type === "textarea" ? (x(), A("textarea", {
                  key: 2,
                  id: `fullscreen-form-${u.name}`,
                  placeholder: u.placeholder || "",
                  required: u.required,
                  minlength: u.minLength,
                  maxlength: u.maxLength,
                  value: ot.value[u.name] || "",
                  onInput: (ge) => $t(u.name, ge.target.value),
                  class: Fe(["form-textarea", { error: _t.value[u.name] }]),
                  rows: "4"
                }, null, 42, M_)) : u.type === "select" ? (x(), A("select", {
                  key: 3,
                  id: `fullscreen-form-${u.name}`,
                  required: u.required,
                  value: ot.value[u.name] || "",
                  onChange: (ge) => $t(u.name, ge.target.value),
                  class: Fe(["form-select", { error: _t.value[u.name] }])
                }, [
                  v("option", F_, Q(u.placeholder || "Please select..."), 1),
                  (x(!0), A(De, null, wt((Array.isArray(u.options) ? u.options : ((ne = u.options) == null ? void 0 : ne.split(`
`)) || []).filter((ge) => ge.trim()), (ge) => (x(), A("option", {
                    key: ge,
                    value: ge.trim()
                  }, Q(ge.trim()), 9, D_))), 128))
                ], 42, P_)) : u.type === "checkbox" ? (x(), A("label", B_, [
                  v("input", {
                    id: `fullscreen-form-${u.name}`,
                    type: "checkbox",
                    required: u.required,
                    checked: ot.value[u.name] || !1,
                    onChange: (ge) => $t(u.name, ge.target.checked),
                    class: "form-checkbox"
                  }, null, 40, $_),
                  v("span", U_, Q(u.label), 1)
                ])) : u.type === "radio" ? (x(), A("div", H_, [
                  (x(!0), A(De, null, wt((Array.isArray(u.options) ? u.options : ((be = u.options) == null ? void 0 : be.split(`
`)) || []).filter((ge) => ge.trim()), (ge) => (x(), A("label", {
                    key: ge,
                    class: "radio-field"
                  }, [
                    v("input", {
                      type: "radio",
                      name: `fullscreen-form-${u.name}`,
                      value: ge.trim(),
                      required: u.required,
                      checked: ot.value[u.name] === ge.trim(),
                      onChange: (at) => $t(u.name, ge.trim()),
                      class: "form-radio"
                    }, null, 40, z_),
                    v("span", W_, Q(ge.trim()), 1)
                  ]))), 128))
                ])) : ae("", !0),
                _t.value[u.name] ? (x(), A("div", q_, Q(_t.value[u.name]), 1)) : ae("", !0)
              ]);
            }), 128))
          ]),
          v("div", j_, [
            v("button", {
              onClick: p[4] || (p[4] = () => {
                console.log("Submit button clicked!"), $u();
              }),
              disabled: ft.value,
              class: "submit-form-button",
              style: Ee(S($))
            }, [
              ft.value ? (x(), A("span", K_, p[29] || (p[29] = [
                v("div", { class: "dot" }, null, -1),
                v("div", { class: "dot" }, null, -1),
                v("div", { class: "dot" }, null, -1)
              ]))) : (x(), A("span", G_, Q(St.value.submit_button_text || "Submit"), 1))
            ], 12, V_)
          ])
        ]),
        v("div", {
          class: "powered-by-landing",
          style: Ee(S(Y))
        }, p[30] || (p[30] = [
          Zn('<svg class="chattermate-logo" width="16" height="16" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9fd058c8><path d="M19 3H41A16 16 0 0 1 57 19V41A16 16 0 0 1 41 57H9A6 6 0 0 1 3 51V19A16 16 0 0 1 19 3Z" fill="#C9F24E" data-v-9fd058c8></path><circle cx="19.7" cy="30" r="4.3" fill="#0B0C10" data-v-9fd058c8></circle><circle cx="30" cy="30" r="4.3" fill="#0B0C10" data-v-9fd058c8></circle><circle cx="40.3" cy="30" r="4.3" fill="#0B0C10" data-v-9fd058c8></circle></svg><a class="cm-powered-link" href="https://chattermate.chat" target="_blank" rel="noopener" data-v-9fd058c8><span class="cm-powered-prefix" data-v-9fd058c8>Powered by </span><strong class="cm-brand" data-v-9fd058c8>ChatterMate</strong></a>', 2)
        ]), 4)
      ], 4)) : !Aa.value && Pe.value && !Ni.value ? (x(), A("div", {
        key: 7,
        class: Fe(["chat-panel", { "ask-anything-chat": jt.value }]),
        style: Ee(S(m))
      }, [
        jt.value ? (x(), A("div", {
          key: 1,
          class: "ask-anything-top",
          style: Ee(S(te))
        }, [
          v("div", ny, [
            Vn.value || S(pe) ? (x(), A("img", {
              key: 0,
              src: Vn.value || S(pe),
              alt: S(R).human_agent_name || S(r),
              class: "header-avatar"
            }, null, 8, sy)) : ae("", !0),
            v("div", ry, [
              v("h3", {
                style: Ee(S(Y))
              }, Q(S(r)), 5),
              v("p", {
                class: "ask-anything-subtitle",
                style: Ee(S(Y))
              }, Q(S(s).welcome_subtitle || "Ask me anything. I'm here to help."), 5)
            ])
          ])
        ], 4)) : (x(), A("div", {
          key: 0,
          class: "chat-header",
          style: Ee(S(te))
        }, [
          v("div", {
            class: "cm-header-sheen",
            style: Ee({ background: "linear-gradient(90deg, transparent, " + (S(s).accent_color || "#C9F24E") + ", transparent)" })
          }, null, 4),
          v("div", Y_, [
            !Vn.value && (kr.value || !S(pe)) ? (x(), A("div", {
              key: 0,
              class: "header-orb",
              style: Ee(Fs.value)
            }, null, 4)) : Vn.value || S(pe) ? (x(), A("img", {
              key: 1,
              src: Vn.value || S(pe),
              alt: S(R).human_agent_name || S(r),
              class: "header-avatar"
            }, null, 8, X_)) : ae("", !0),
            v("div", Z_, [
              v("h3", {
                style: Ee(S(Y))
              }, Q(S(R).human_agent_name || S(r)), 5),
              v("div", J_, [
                v("span", {
                  class: Fe(["status-indicator", fa.value.online ? "online" : "away"])
                }, null, 2),
                v("span", Q_, Q(fa.value.text), 1)
              ])
            ])
          ]),
          v("div", ey, [
            wr.value ? (x(), A("button", {
              key: 0,
              type: "button",
              class: Fe(["header-new-chat", { armed: Rn.value }]),
              style: Ee(S(Y)),
              disabled: Sn.value,
              title: S(ii),
              "aria-label": S(ii),
              "aria-expanded": Rn.value,
              onClick: ga
            }, p[31] || (p[31] = [
              v("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "aria-hidden": "true"
              }, [
                v("path", { d: "M12 20h9" }),
                v("path", { d: "M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" })
              ], -1)
            ]), 14, ty)) : ae("", !0),
            v("button", {
              type: "button",
              class: "header-minimize",
              style: Ee(S(Y)),
              title: "Minimize",
              "aria-label": "Minimize chat",
              onClick: oe
            }, p[32] || (p[32] = [
              v("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "aria-hidden": "true"
              }, [
                v("path", { d: "M6 9l6 6 6-6" })
              ], -1)
            ]), 4)
          ])
        ], 4)),
        S(w) ? (x(), A("div", iy, p[33] || (p[33] = [
          v("div", { class: "loading-spinner" }, [
            v("div", { class: "dot" }),
            v("div", { class: "dot" }),
            v("div", { class: "dot" })
          ], -1)
        ]))) : ae("", !0),
        Gn.value ? (x(), A("div", {
          key: 3,
          class: "cm-email-gate",
          style: Ee(S(m))
        }, [
          v("div", {
            class: "cm-email-gate-orb",
            style: Ee(Fs.value)
          }, null, 4),
          v("h3", oy, Q(S(s).welcome_title || "Before we start"), 1),
          p[34] || (p[34] = v("p", { class: "cm-email-gate-text" }, "Enter your email and we'll continue the chat.", -1)),
          On(v("input", {
            "onUpdate:modelValue": p[5] || (p[5] = (u) => tt.value = u),
            type: "email",
            inputmode: "email",
            autocomplete: "email",
            placeholder: "you@example.com",
            class: Fe(["cm-email-gate-input", { invalid: !!In.value }]),
            disabled: Ds.value,
            onKeyup: Br(xa, ["enter"]),
            onInput: p[6] || (p[6] = (u) => In.value = "")
          }, null, 42, ay), [
            [Jn, tt.value]
          ]),
          In.value ? (x(), A("p", ly, Q(In.value), 1)) : ae("", !0),
          v("button", {
            type: "button",
            class: "cm-email-gate-btn",
            style: Ee(S($)),
            disabled: Ds.value,
            onClick: xa
          }, Q(Ds.value ? "Please wait…" : "Continue to chat"), 13, cy)
        ], 4)) : ae("", !0),
        Rn.value && wr.value ? (x(), Qr(uu, {
          key: 4,
          busy: Sn.value,
          error: Cn.value,
          onConfirm: ma,
          onCancel: ps
        }, null, 8, ["busy", "error"])) : ae("", !0),
        On(v("div", {
          class: "chat-messages",
          ref_key: "messagesContainer",
          ref: h,
          role: "log",
          "aria-label": "Messages"
        }, [
          Qu.value ? (x(), A("div", uy, [
            v("div", fy, [
              kr.value || !S(pe) ? (x(), A("div", {
                key: 0,
                class: "cm-welcome-orb",
                style: Ee(Fs.value)
              }, null, 4)) : (x(), A("img", {
                key: 1,
                src: S(pe),
                alt: S(r),
                class: "cm-welcome-avatar"
              }, null, 8, hy)),
              v("div", {
                class: "message-bubble cm-welcome-bubble",
                style: Ee(S(T))
              }, Q(ya.value), 5)
            ])
          ])) : ae("", !0),
          (x(!0), A(De, null, wt(S(l), (u, ne) => {
            var be, ge, at, nt, Ye, Bs, $s, Ln, ms, Ea, Sa, Ca, Ra, Ia, La, Oa, Na, Ma, Pa;
            return x(), A("div", {
              key: ne,
              class: Fe([
                "message",
                u.message_type === "bot" || u.message_type === "agent" ? "agent-message" : u.message_type === "system" ? "system-message" : u.message_type === "rating" ? "rating-message" : u.message_type === "form" ? "form-message" : u.message_type === "product" || u.shopify_output ? "product-message" : "user-message"
              ])
            }, [
              u.message_type === "bot" || u.message_type === "agent" ? (x(), A("div", dy, [
                Vn.value ? (x(), A("img", {
                  key: 0,
                  src: Vn.value,
                  class: "cm-msg-avatar-img",
                  alt: ""
                }, null, 8, py)) : !kr.value && S(pe) ? (x(), A("img", {
                  key: 1,
                  src: S(pe),
                  class: "cm-msg-avatar-img",
                  alt: ""
                }, null, 8, gy)) : (x(), A("div", {
                  key: 2,
                  class: "cm-msg-avatar-orb",
                  style: Ee(Fs.value)
                }, null, 4))
              ])) : ae("", !0),
              v("div", my, [
                v("div", {
                  class: "message-bubble",
                  style: Ee(u.message_type === "system" || u.message_type === "rating" || u.message_type === "form" || u.message_type === "product" || u.shopify_output ? {} : u.message_type === "user" ? S($) : S(T))
                }, [
                  u.message_type === "rating" ? (x(), A("div", _y, [
                    v("p", yy, "Rate the chat session that you had with " + Q(u.agent_name || S(R).human_agent_name || S(r) || "our agent"), 1),
                    v("div", {
                      class: Fe(["star-rating", { submitted: Ge.value || u.isSubmitted }])
                    }, [
                      (x(), A(De, null, wt(5, (O) => v("button", {
                        key: O,
                        class: Fe(["star-button", {
                          warning: O <= (u.isSubmitted ? u.finalRating : Bt.value || u.selectedRating) && (u.isSubmitted ? u.finalRating : Bt.value || u.selectedRating) <= 3,
                          success: O <= (u.isSubmitted ? u.finalRating : Bt.value || u.selectedRating) && (u.isSubmitted ? u.finalRating : Bt.value || u.selectedRating) > 3,
                          selected: O <= (u.isSubmitted ? u.finalRating : Bt.value || u.selectedRating)
                        }]),
                        onMouseover: (Jt) => !u.isSubmitted && Ou(O),
                        onMouseleave: (Jt) => !u.isSubmitted && Nu,
                        onClick: (Jt) => !u.isSubmitted && Mu(O),
                        disabled: Ge.value || u.isSubmitted
                      }, " ★ ", 42, vy)), 64))
                    ], 2),
                    u.showFeedback && !u.isSubmitted ? (x(), A("div", by, [
                      v("div", wy, [
                        On(v("input", {
                          "onUpdate:modelValue": (O) => u.feedback = O,
                          placeholder: "Please share your feedback (optional)",
                          disabled: Ge.value,
                          maxlength: "500",
                          class: "feedback-input"
                        }, null, 8, ky), [
                          [Jn, u.feedback]
                        ]),
                        v("div", xy, Q(((be = u.feedback) == null ? void 0 : be.length) || 0) + "/500", 1)
                      ]),
                      v("button", {
                        onClick: (O) => Pu(u.session_id, Bt.value, u.feedback),
                        disabled: Ge.value || !Bt.value,
                        class: "submit-rating-button",
                        style: Ee({ backgroundColor: S(s).accent_color || "var(--accent-solid)" })
                      }, Q(Ge.value ? "Submitting..." : "Submit Rating"), 13, Ty)
                    ])) : ae("", !0),
                    u.isSubmitted && u.finalFeedback ? (x(), A("div", Ay, [
                      v("div", Ey, [
                        v("p", Sy, Q(u.finalFeedback), 1)
                      ])
                    ])) : u.isSubmitted ? (x(), A("div", Cy, " Thank you for your rating! ")) : ae("", !0)
                  ])) : u.message_type === "form" ? (x(), A("div", Ry, [
                    (at = (ge = u.attributes) == null ? void 0 : ge.form_data) != null && at.title || (Ye = (nt = u.attributes) == null ? void 0 : nt.form_data) != null && Ye.description ? (x(), A("div", Iy, [
                      ($s = (Bs = u.attributes) == null ? void 0 : Bs.form_data) != null && $s.title ? (x(), A("h3", Ly, Q(u.attributes.form_data.title), 1)) : ae("", !0),
                      (ms = (Ln = u.attributes) == null ? void 0 : Ln.form_data) != null && ms.description ? (x(), A("p", Oy, Q(u.attributes.form_data.description), 1)) : ae("", !0)
                    ])) : ae("", !0),
                    v("div", Ny, [
                      (x(!0), A(De, null, wt((Sa = (Ea = u.attributes) == null ? void 0 : Ea.form_data) == null ? void 0 : Sa.fields, (O) => {
                        var Jt, Mi;
                        return x(), A("div", {
                          key: O.name,
                          class: "form-field"
                        }, [
                          v("label", {
                            for: `form-${O.name}`,
                            class: "field-label"
                          }, [
                            gn(Q(O.label) + " ", 1),
                            O.required ? (x(), A("span", Py, "*")) : ae("", !0)
                          ], 8, My),
                          O.type === "text" || O.type === "email" || O.type === "tel" ? (x(), A("input", {
                            key: 0,
                            id: `form-${O.name}`,
                            type: O.type,
                            placeholder: O.placeholder || "",
                            required: O.required,
                            minlength: O.minLength,
                            maxlength: O.maxLength,
                            value: ot.value[O.name] || "",
                            onInput: (Ue) => $t(O.name, Ue.target.value),
                            onBlur: (Ue) => $t(O.name, Ue.target.value),
                            class: Fe(["form-input", { error: _t.value[O.name] }]),
                            disabled: ft.value,
                            autocomplete: O.type === "email" ? "email" : O.type === "tel" ? "tel" : "off",
                            inputmode: O.type === "tel" ? "tel" : O.type === "email" ? "email" : "text"
                          }, null, 42, Fy)) : O.type === "number" ? (x(), A("input", {
                            key: 1,
                            id: `form-${O.name}`,
                            type: "number",
                            placeholder: O.placeholder || "",
                            required: O.required,
                            min: O.min,
                            max: O.max,
                            value: ot.value[O.name] || "",
                            onInput: (Ue) => $t(O.name, Ue.target.value),
                            class: Fe(["form-input", { error: _t.value[O.name] }]),
                            disabled: ft.value
                          }, null, 42, Dy)) : O.type === "textarea" ? (x(), A("textarea", {
                            key: 2,
                            id: `form-${O.name}`,
                            placeholder: O.placeholder || "",
                            required: O.required,
                            minlength: O.minLength,
                            maxlength: O.maxLength,
                            value: ot.value[O.name] || "",
                            onInput: (Ue) => $t(O.name, Ue.target.value),
                            class: Fe(["form-textarea", { error: _t.value[O.name] }]),
                            disabled: ft.value,
                            rows: "3"
                          }, null, 42, By)) : O.type === "select" ? (x(), A("select", {
                            key: 3,
                            id: `form-${O.name}`,
                            required: O.required,
                            value: ot.value[O.name] || "",
                            onChange: (Ue) => $t(O.name, Ue.target.value),
                            class: Fe(["form-select", { error: _t.value[O.name] }]),
                            disabled: ft.value
                          }, [
                            v("option", Uy, Q(O.placeholder || "Select an option"), 1),
                            (x(!0), A(De, null, wt((Array.isArray(O.options) ? O.options : ((Jt = O.options) == null ? void 0 : Jt.split(`
`)) || []).filter((Ue) => Ue.trim()), (Ue) => (x(), A("option", {
                              key: Ue.trim(),
                              value: Ue.trim()
                            }, Q(Ue.trim()), 9, Hy))), 128))
                          ], 42, $y)) : O.type === "checkbox" ? (x(), A("div", zy, [
                            v("input", {
                              id: `form-${O.name}`,
                              type: "checkbox",
                              checked: ot.value[O.name] || !1,
                              onChange: (Ue) => $t(O.name, Ue.target.checked),
                              class: "form-checkbox",
                              disabled: ft.value
                            }, null, 40, Wy),
                            v("label", {
                              for: `form-${O.name}`,
                              class: "checkbox-label"
                            }, Q(O.placeholder || O.label), 9, qy)
                          ])) : O.type === "radio" ? (x(), A("div", jy, [
                            (x(!0), A(De, null, wt((Array.isArray(O.options) ? O.options : ((Mi = O.options) == null ? void 0 : Mi.split(`
`)) || []).filter((Ue) => Ue.trim()), (Ue) => (x(), A("div", {
                              key: Ue.trim(),
                              class: "radio-option"
                            }, [
                              v("input", {
                                id: `form-${O.name}-${Ue.trim()}`,
                                name: `form-${O.name}`,
                                type: "radio",
                                value: Ue.trim(),
                                checked: ot.value[O.name] === Ue.trim(),
                                onChange: (fb) => $t(O.name, Ue.trim()),
                                class: "form-radio",
                                disabled: ft.value
                              }, null, 40, Vy),
                              v("label", {
                                for: `form-${O.name}-${Ue.trim()}`,
                                class: "radio-label"
                              }, Q(Ue.trim()), 9, Ky)
                            ]))), 128))
                          ])) : ae("", !0),
                          _t.value[O.name] ? (x(), A("div", Gy, Q(_t.value[O.name]), 1)) : ae("", !0)
                        ]);
                      }), 128))
                    ]),
                    v("div", Yy, [
                      v("button", {
                        onClick: () => {
                          var O;
                          console.log("Regular form submit button clicked!"), Du((O = u.attributes) == null ? void 0 : O.form_data);
                        },
                        disabled: ft.value,
                        class: "form-submit-button",
                        style: Ee(S($))
                      }, Q(ft.value ? "Submitting..." : ((Ra = (Ca = u.attributes) == null ? void 0 : Ca.form_data) == null ? void 0 : Ra.submit_button_text) || "Submit"), 13, Xy)
                    ])
                  ])) : u.message_type === "user_input" ? (x(), A("div", Zy, [
                    (Ia = u.attributes) != null && Ia.prompt_message && u.attributes.prompt_message.trim() ? (x(), A("div", Jy, Q(u.attributes.prompt_message), 1)) : ae("", !0),
                    u.isSubmitted ? (x(), A("div", nv, [
                      p[35] || (p[35] = v("strong", null, "Your input:", -1)),
                      gn(" " + Q(u.submittedValue) + " ", 1),
                      (La = u.attributes) != null && La.confirmation_message && u.attributes.confirmation_message.trim() ? (x(), A("div", sv, Q(u.attributes.confirmation_message), 1)) : ae("", !0)
                    ])) : (x(), A("div", Qy, [
                      On(v("textarea", {
                        "onUpdate:modelValue": (O) => u.userInputValue = O,
                        class: "user-input-textarea",
                        placeholder: "Type your message here...",
                        rows: "3",
                        onKeydown: [
                          Br(es((O) => Ei(u), ["ctrl"]), ["enter"]),
                          Br(es((O) => Ei(u), ["meta"]), ["enter"])
                        ]
                      }, null, 40, ev), [
                        [Jn, u.userInputValue]
                      ]),
                      v("button", {
                        class: "user-input-submit-button",
                        onClick: (O) => Ei(u),
                        disabled: !u.userInputValue || !u.userInputValue.trim()
                      }, " Submit ", 8, tv)
                    ]))
                  ])) : u.shopify_output || u.message_type === "product" ? (x(), A("div", rv, [
                    u.message ? (x(), A("div", {
                      key: 0,
                      innerHTML: S(Hr)(((Na = (Oa = u.shopify_output) == null ? void 0 : Oa.products) == null ? void 0 : Na.length) > 0 ? Hu(u.message) : u.message),
                      class: "product-message-text"
                    }, null, 8, iv)) : ae("", !0),
                    (Ma = u.shopify_output) != null && Ma.products && u.shopify_output.products.length > 0 ? (x(), A("div", ov, [
                      p[37] || (p[37] = v("h3", { class: "carousel-title" }, "Products", -1)),
                      v("div", av, [
                        (x(!0), A(De, null, wt(u.shopify_output.products, (O) => {
                          var Jt;
                          return x(), A("div", {
                            key: O.id,
                            class: "product-card-compact carousel-item"
                          }, [
                            (Jt = O.image) != null && Jt.src ? (x(), A("div", lv, [
                              v("img", {
                                src: O.image.src,
                                alt: O.title,
                                class: "product-thumbnail"
                              }, null, 8, cv)
                            ])) : ae("", !0),
                            v("div", uv, [
                              v("div", fv, [
                                v("div", hv, Q(O.title), 1),
                                O.variant_title && O.variant_title !== "Default Title" ? (x(), A("div", dv, Q(O.variant_title), 1)) : ae("", !0),
                                v("div", pv, Q(O.price_formatted || S(a)(O.price, O.currency)), 1)
                              ]),
                              v("div", gv, [
                                v("button", {
                                  class: "view-details-button-compact",
                                  onClick: (Mi) => {
                                    var Ue;
                                    return Uu(O, (Ue = u.shopify_output) == null ? void 0 : Ue.shop_domain);
                                  }
                                }, p[36] || (p[36] = [
                                  gn(" View product ", -1),
                                  v("span", { class: "external-link-icon" }, "↗", -1)
                                ]), 8, mv)
                              ])
                            ])
                          ]);
                        }), 128))
                      ])
                    ])) : !u.message && ((Pa = u.shopify_output) != null && Pa.products) && u.shopify_output.products.length === 0 ? (x(), A("div", _v, p[38] || (p[38] = [
                      v("p", null, "No products found.", -1)
                    ]))) : !u.message && u.shopify_output && !u.shopify_output.products ? (x(), A("div", yv, p[39] || (p[39] = [
                      v("p", null, "No products to display.", -1)
                    ]))) : ae("", !0)
                  ])) : (x(), A(De, { key: 4 }, [
                    S(Te)(ne) ? (x(), A("div", {
                      key: 0,
                      class: "message-streaming",
                      innerHTML: S(Hr)(S(et)(ne, u.message))
                    }, null, 8, vv)) : (x(), A("div", {
                      key: 1,
                      innerHTML: S(Hr)(u.message)
                    }, null, 8, bv)),
                    u.attachments && u.attachments.length > 0 ? (x(), A("div", wv, [
                      (x(!0), A(De, null, wt(u.attachments, (O) => (x(), A("div", {
                        key: O.id,
                        class: "attachment-item"
                      }, [
                        S(nn)(O.content_type) ? (x(), A("div", kv, [
                          v("img", {
                            src: S(ls)(O.file_url),
                            alt: O.filename,
                            class: "attachment-image",
                            onClick: es((Jt) => S(us)({ url: O.file_url, filename: O.filename, type: O.content_type, file_url: S(ls)(O.file_url), size: void 0 }), ["stop"]),
                            style: { cursor: "pointer" }
                          }, null, 8, xv),
                          v("div", Tv, [
                            v("a", {
                              href: S(ls)(O.file_url),
                              target: "_blank",
                              class: "attachment-link"
                            }, [
                              p[40] || (p[40] = v("svg", {
                                width: "14",
                                height: "14",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                "stroke-width": "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round"
                              }, [
                                v("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
                                v("polyline", { points: "7 10 12 15 17 10" }),
                                v("line", {
                                  x1: "12",
                                  y1: "15",
                                  x2: "12",
                                  y2: "3"
                                })
                              ], -1)),
                              gn(" " + Q(O.filename) + " ", 1),
                              v("span", Ev, "(" + Q(S(je)(O.file_size)) + ")", 1)
                            ], 8, Av)
                          ])
                        ])) : (x(), A("a", {
                          key: 1,
                          href: S(ls)(O.file_url),
                          target: "_blank",
                          class: "attachment-link"
                        }, [
                          p[41] || (p[41] = v("svg", {
                            width: "14",
                            height: "14",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }, [
                            v("path", { d: "M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" })
                          ], -1)),
                          gn(" " + Q(O.filename) + " ", 1),
                          v("span", Cv, "(" + Q(S(je)(O.file_size)) + ")", 1)
                        ], 8, Sv))
                      ]))), 128))
                    ])) : ae("", !0)
                  ], 64))
                ], 4),
                xr.value && (u.message_type === "bot" || u.message_type === "agent") && u.sources && u.sources.length ? (x(), A("div", Rv, [
                  p[42] || (p[42] = v("span", { class: "citation-label" }, "Sources", -1)),
                  (x(!0), A(De, null, wt(u.sources, (O, Jt) => (x(), A("span", {
                    key: Jt,
                    class: "citation-chip",
                    title: wa(O)
                  }, Q(Ri(O)), 9, Iv))), 128))
                ])) : ae("", !0),
                v("div", Lv, [
                  u.message_type === "user" ? (x(), A("span", Ov, " You ")) : ae("", !0)
                ])
              ])
            ], 2);
          }), 128)),
          S(d) ? (x(), A("div", {
            key: 1,
            class: Fe(["typing-indicator", { "reading-indicator": xr.value }])
          }, [
            xr.value ? (x(), A(De, { key: 0 }, [
              p[43] || (p[43] = v("div", {
                class: "reading-bars",
                "aria-hidden": "true"
              }, [
                v("span"),
                v("span"),
                v("span")
              ], -1)),
              p[44] || (p[44] = v("span", { class: "reading-label" }, "reading knowledge base", -1))
            ], 64)) : (x(), A("div", {
              key: 1,
              class: "cm-typing-bubble",
              style: Ee(S(T))
            }, p[45] || (p[45] = [
              v("span", { class: "cm-typing-dot" }, null, -1),
              v("span", { class: "cm-typing-dot" }, null, -1),
              v("span", { class: "cm-typing-dot" }, null, -1)
            ]), 4))
          ], 2)) : ae("", !0)
        ], 512), [
          [cd, !Gn.value]
        ]),
        ef.value ? (x(), A("div", Nv, [
          (x(!0), A(De, null, wt(Si.value, (u) => (x(), A("button", {
            key: u,
            type: "button",
            class: "cm-quick-action",
            disabled: !xt.value,
            onClick: (ne) => br(u)
          }, Q(u), 9, Mv))), 128))
        ])) : ae("", !0),
        !Ms.value && !Gn.value ? (x(), A("div", {
          key: 6,
          class: Fe(["chat-input", { "ask-anything-input": jt.value }])
        }, [
          v("input", {
            ref_key: "fileInputRef",
            ref: Ke,
            type: "file",
            accept: ab,
            multiple: "",
            style: { display: "none" },
            onChange: p[7] || (p[7] = //@ts-ignore
            (...u) => S(cs) && S(cs)(...u))
          }, null, 544),
          S(Ae).length > 0 ? (x(), A("div", Pv, [
            (x(!0), A(De, null, wt(S(Ae), (u, ne) => (x(), A("div", {
              key: ne,
              class: "file-preview-widget"
            }, [
              v("div", Fv, [
                S(Os)(u.type) ? (x(), A("img", {
                  key: 0,
                  src: S(Rs)(u),
                  alt: u.filename,
                  class: "file-preview-image-widget",
                  onClick: es((be) => S(us)(u), ["stop"]),
                  style: { cursor: "pointer" }
                }, null, 8, Dv)) : (x(), A("div", {
                  key: 1,
                  class: "file-preview-icon-widget",
                  onClick: es((be) => S(us)(u), ["stop"]),
                  style: { cursor: "pointer" }
                }, p[46] || (p[46] = [
                  v("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2"
                  }, [
                    v("path", { d: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" }),
                    v("polyline", { points: "13 2 13 9 20 9" })
                  ], -1)
                ]), 8, Bv))
              ]),
              v("div", $v, [
                v("div", Uv, Q(u.filename), 1),
                v("div", Hv, Q(S(je)(u.size)), 1)
              ]),
              v("button", {
                type: "button",
                class: "file-preview-remove-widget",
                onClick: (be) => S(An)(ne),
                title: "Remove file"
              }, " × ", 8, zv)
            ]))), 128))
          ])) : ae("", !0),
          ua.value ? (x(), A("div", Wv, p[47] || (p[47] = [
            v("div", { class: "upload-spinner-widget" }, null, -1),
            v("span", { class: "upload-text-widget" }, "Uploading files...", -1)
          ]))) : ae("", !0),
          v("div", qv, [
            On(v("input", {
              "onUpdate:modelValue": p[8] || (p[8] = (u) => we.value = u),
              type: "text",
              placeholder: hs.value,
              onKeypress: y,
              onInput: ct,
              onChange: ct,
              onPaste: p[9] || (p[9] = //@ts-ignore
              (...u) => S(Ht) && S(Ht)(...u)),
              onDrop: p[10] || (p[10] = //@ts-ignore
              (...u) => S(Is) && S(Is)(...u)),
              onDragover: p[11] || (p[11] = //@ts-ignore
              (...u) => S(Ls) && S(Ls)(...u)),
              onDragleave: p[12] || (p[12] = //@ts-ignore
              (...u) => S(vr) && S(vr)(...u)),
              disabled: !En.value,
              class: Fe({ disabled: !En.value, "ask-anything-field": jt.value })
            }, null, 42, jv), [
              [Jn, we.value]
            ]),
            zu.value ? (x(), A("button", {
              key: 0,
              type: "button",
              class: "attach-button",
              disabled: ua.value,
              onClick: p[13] || (p[13] = //@ts-ignore
              (...u) => S(fs) && S(fs)(...u)),
              title: `Attach files (${S(Ae).length}/${Wl} used) or paste screenshots`
            }, p[48] || (p[48] = [
              v("svg", {
                width: "22",
                height: "22",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                v("path", {
                  d: "M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48",
                  stroke: "currentColor",
                  "stroke-width": "2.2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ], -1),
              v("span", { class: "attach-button-glow" }, null, -1)
            ]), 8, Vv)) : ae("", !0),
            v("button", {
              class: Fe(["send-button", { "ask-anything-send": jt.value }]),
              "aria-label": "Send message",
              style: Ee(S($)),
              onClick: Zt,
              disabled: !we.value.trim() && S(Ae).length === 0 || !xt.value
            }, p[49] || (p[49] = [
              v("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                v("path", {
                  d: "M12 19V5M5 12l7-7 7 7",
                  stroke: "currentColor",
                  "stroke-width": "2.2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ], -1)
            ]), 14, Kv)
          ])
        ], 2)) : Ms.value && !Gn.value ? (x(), A("div", Gv, [
          v("div", Yv, [
            p[50] || (p[50] = v("p", { class: "ended-text" }, "This chat has ended.", -1)),
            v("button", {
              class: "start-new-conversation-button",
              style: Ee(S($)),
              onClick: Yu
            }, " Click here to start a new conversation ", 4)
          ])
        ])) : ae("", !0),
        ba.value ? (x(), A("div", Xv, Q(S(Rl)), 1)) : ae("", !0),
        v("div", {
          class: "powered-by",
          style: Ee(S(Y))
        }, p[51] || (p[51] = [
          Zn('<svg class="chattermate-logo" width="16" height="16" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9fd058c8><path d="M19 3H41A16 16 0 0 1 57 19V41A16 16 0 0 1 41 57H9A6 6 0 0 1 3 51V19A16 16 0 0 1 19 3Z" fill="#C9F24E" data-v-9fd058c8></path><circle cx="19.7" cy="30" r="4.3" fill="#0B0C10" data-v-9fd058c8></circle><circle cx="30" cy="30" r="4.3" fill="#0B0C10" data-v-9fd058c8></circle><circle cx="40.3" cy="30" r="4.3" fill="#0B0C10" data-v-9fd058c8></circle></svg><a class="cm-powered-link" href="https://chattermate.chat" target="_blank" rel="noopener" data-v-9fd058c8><span class="cm-powered-prefix" data-v-9fd058c8>Powered by </span><strong class="cm-brand" data-v-9fd058c8>ChatterMate</strong></a>', 2)
        ]), 4)
      ], 6)) : ae("", !0),
      bt.value ? (x(), A("div", Zv, [
        v("div", Jv, [
          p[52] || (p[52] = v("h3", null, "Rate your conversation", -1)),
          v("div", Qv, [
            (x(), A(De, null, wt(5, (u) => v("button", {
              key: u,
              onClick: (ne) => Dt.value = u,
              class: Fe([{ active: u <= Dt.value }, "star-button"])
            }, " ★ ", 10, eb)), 64))
          ]),
          On(v("textarea", {
            "onUpdate:modelValue": p[14] || (p[14] = (u) => dn.value = u),
            placeholder: "Additional feedback (optional)",
            class: "rating-feedback"
          }, null, 512), [
            [Jn, dn.value]
          ]),
          v("div", tb, [
            v("button", {
              onClick: p[15] || (p[15] = (u) => f.submitRating(Dt.value, dn.value)),
              disabled: !Dt.value,
              class: "submit-button",
              style: Ee(S($))
            }, " Submit ", 12, nb),
            v("button", {
              onClick: p[16] || (p[16] = (u) => bt.value = !1),
              class: "skip-rating"
            }, " Skip ")
          ])
        ])
      ])) : ae("", !0),
      S(pt) ? (x(), A("div", {
        key: 9,
        class: "preview-modal-overlay",
        onClick: p[19] || (p[19] = //@ts-ignore
        (...u) => S(Wn) && S(Wn)(...u))
      }, [
        v("div", {
          class: "preview-modal-content",
          onClick: p[18] || (p[18] = es(() => {
          }, ["stop"]))
        }, [
          v("button", {
            class: "preview-modal-close",
            onClick: p[17] || (p[17] = //@ts-ignore
            (...u) => S(Wn) && S(Wn)(...u))
          }, "×"),
          S(gt) && S(Os)(S(gt).type) ? (x(), A("div", sb, [
            v("img", {
              src: S(Rs)(S(gt)),
              alt: S(gt).filename,
              class: "preview-modal-image"
            }, null, 8, rb),
            v("div", ib, Q(S(gt).filename), 1)
          ])) : ae("", !0)
        ])
      ])) : ae("", !0)
    ], 6)) : (x(), A("div", ob));
  }
}), cb = /* @__PURE__ */ sa(lb, [["__scopeId", "data-v-9fd058c8"]]);
window.process || (window.process = { env: { NODE_ENV: "production" } });
async function ub() {
  if (!await Og()) return;
  const e = window.__INITIAL_DATA__, t = new URL(window.location.href), n = t.searchParams.get("preview") === "true", s = (a) => {
    const l = t.searchParams.get(a);
    if (!(!l || l === "undefined" || l.trim() === ""))
      return l;
  }, r = n ? s("widget_id") || (e == null ? void 0 : e.widgetId) || void 0 : (e == null ? void 0 : e.widgetId) || void 0, i = n ? (e == null ? void 0 : e.initialToken) || s("token") || void 0 : (e == null ? void 0 : e.initialToken) || void 0;
  Rd(cb, {
    widgetId: r,
    token: i || void 0,
    initialAuthError: null
    // Let backend determine if auth is required
  }).mount("#app"), Ng();
}
ub();
