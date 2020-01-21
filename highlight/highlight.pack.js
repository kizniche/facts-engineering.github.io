/* ========================================================================
 * Highlight.js
 * https://highlightjs.org
 * ========================================================================
 * Copyright (c) 2006, Ivan Sagalaev
 * Licensed under BSD (https://github.com/isagalaev/highlight.js/blob/master/LICENSE)
 *
 * Edited 2020 by Adam: Add P1 as built-in function for CPP
 * ======================================================================== */

! function(e) {
  "undefined" != typeof exports ? e(exports) : (window.hljs = e({}), "function" == typeof define && define.amd && define([], function() {
    return window.hljs
  }))
}(function(e) {
  function n(e) {
    return e.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;")
  }

  function t(e) {
    return e.nodeName.toLowerCase()
  }

  function r(e, n) {
    var t = e && e.exec(n);
    return t && 0 == t.index
  }

  function a(e) {
    var n = (e.className + " " + (e.parentNode ? e.parentNode.className : "")).split(/\s+/);
    return n = n.map(function(e) {
      return e.replace(/^lang(uage)?-/, "")
    }), n.filter(function(e) {
      return N(e) || /no(-?)highlight/.test(e)
    })[0]
  }

  function o(e, n) {
    var t = {};
    for (var r in e) t[r] = e[r];
    if (n)
      for (var r in n) t[r] = n[r];
    return t
  }

  function i(e) {
    var n = [];
    return function r(e, a) {
      for (var o = e.firstChild; o; o = o.nextSibling) 3 == o.nodeType ? a += o.nodeValue.length : 1 == o.nodeType && (n.push({
        event: "start",
        offset: a,
        node: o
      }), a = r(o, a), t(o).match(/br|hr|img|input/) || n.push({
        event: "stop",
        offset: a,
        node: o
      }));
      return a
    }(e, 0), n
  }

  function c(e, r, a) {
    function o() {
      return e.length && r.length ? e[0].offset != r[0].offset ? e[0].offset < r[0].offset ? e : r : "start" == r[0].event ? e : r : e.length ? e : r
    }

    function i(e) {
      function r(e) {
        return " " + e.nodeName + '="' + n(e.value) + '"'
      }
      l += "<" + t(e) + Array.prototype.map.call(e.attributes, r).join("") + ">"
    }

    function c(e) {
      l += "</" + t(e) + ">"
    }

    function u(e) {
      ("start" == e.event ? i : c)(e.node)
    }
    for (var s = 0, l = "", f = []; e.length || r.length;) {
      var g = o();
      if (l += n(a.substr(s, g[0].offset - s)), s = g[0].offset, g == e) {
        f.reverse().forEach(c);
        do u(g.splice(0, 1)[0]), g = o(); while (g == e && g.length && g[0].offset == s);
        f.reverse().forEach(i)
      } else "start" == g[0].event ? f.push(g[0].node) : f.pop(), u(g.splice(0, 1)[0])
    }
    return l + n(a.substr(s))
  }

  function u(e) {
    function n(e) {
      return e && e.source || e
    }

    function t(t, r) {
      return RegExp(n(t), "m" + (e.cI ? "i" : "") + (r ? "g" : ""))
    }

    function r(a, i) {
      if (!a.compiled) {
        if (a.compiled = !0, a.k = a.k || a.bK, a.k) {
          var c = {},
            u = function(n, t) {
              e.cI && (t = t.toLowerCase()), t.split(" ").forEach(function(e) {
                var t = e.split("|");
                c[t[0]] = [n, t[1] ? Number(t[1]) : 1]
              })
            };
          "string" == typeof a.k ? u("keyword", a.k) : Object.keys(a.k).forEach(function(e) {
            u(e, a.k[e])
          }), a.k = c
        }
        a.lR = t(a.l || /\b[A-Za-z0-9_]+\b/, !0), i && (a.bK && (a.b = "\\b(" + a.bK.split(" ").join("|") + ")\\b"), a.b || (a.b = /\B|\b/), a.bR = t(a.b), a.e || a.eW || (a.e = /\B|\b/), a.e && (a.eR = t(a.e)), a.tE = n(a.e) || "", a.eW && i.tE && (a.tE += (a.e ? "|" : "") + i.tE)), a.i && (a.iR = t(a.i)), void 0 === a.r && (a.r = 1), a.c || (a.c = []);
        var s = [];
        a.c.forEach(function(e) {
          e.v ? e.v.forEach(function(n) {
            s.push(o(e, n))
          }) : s.push("self" == e ? a : e)
        }), a.c = s, a.c.forEach(function(e) {
          r(e, a)
        }), a.starts && r(a.starts, i);
        var l = a.c.map(function(e) {
          return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b
        }).concat([a.tE, a.i]).map(n).filter(Boolean);
        a.t = l.length ? t(l.join("|"), !0) : {
          exec: function() {
            return null
          }
        }
      }
    }
    r(e)
  }

  function s(e, t, a, o) {
    function i(e, n) {
      for (var t = 0; t < n.c.length; t++)
        if (r(n.c[t].bR, e)) return n.c[t]
    }

    function c(e, n) {
      return r(e.eR, n) ? e : e.eW ? c(e.parent, n) : void 0
    }

    function f(e, n) {
      return !a && r(n.iR, e)
    }

    function g(e, n) {
      var t = x.cI ? n[0].toLowerCase() : n[0];
      return e.k.hasOwnProperty(t) && e.k[t]
    }

    function p(e, n, t, r) {
      var a = r ? "" : E.classPrefix,
        o = '<span class="' + a,
        i = t ? "" : "</span>";
      return o += e + '">', o + n + i
    }

    function d() {
      if (!w.k) return n(y);
      var e = "",
        t = 0;
      w.lR.lastIndex = 0;
      for (var r = w.lR.exec(y); r;) {
        e += n(y.substr(t, r.index - t));
        var a = g(w, r);
        a ? (B += a[1], e += p(a[0], n(r[0]))) : e += n(r[0]), t = w.lR.lastIndex, r = w.lR.exec(y)
      }
      return e + n(y.substr(t))
    }

    function h() {
      if (w.sL && !R[w.sL]) return n(y);
      var e = w.sL ? s(w.sL, y, !0, L[w.sL]) : l(y);
      return w.r > 0 && (B += e.r), "continuous" == w.subLanguageMode && (L[w.sL] = e.top), p(e.language, e.value, !1, !0)
    }

    function v() {
      return void 0 !== w.sL ? h() : d()
    }

    function b(e, t) {
      var r = e.cN ? p(e.cN, "", !0) : "";
      e.rB ? (M += r, y = "") : e.eB ? (M += n(t) + r, y = "") : (M += r, y = t), w = Object.create(e, {
        parent: {
          value: w
        }
      })
    }

    function m(e, t) {
      if (y += e, void 0 === t) return M += v(), 0;
      var r = i(t, w);
      if (r) return M += v(), b(r, t), r.rB ? 0 : t.length;
      var a = c(w, t);
      if (a) {
        var o = w;
        o.rE || o.eE || (y += t), M += v();
        do w.cN && (M += "</span>"), B += w.r, w = w.parent; while (w != a.parent);
        return o.eE && (M += n(t)), y = "", a.starts && b(a.starts, ""), o.rE ? 0 : t.length
      }
      if (f(t, w)) throw new Error('Illegal lexeme "' + t + '" for mode "' + (w.cN || "<unnamed>") + '"');
      return y += t, t.length || 1
    }
    var x = N(e);
    if (!x) throw new Error('Unknown language: "' + e + '"');
    u(x);
    for (var w = o || x, L = {}, M = "", k = w; k != x; k = k.parent) k.cN && (M = p(k.cN, "", !0) + M);
    var y = "",
      B = 0;
    try {
      for (var C, j, I = 0;;) {
        if (w.t.lastIndex = I, C = w.t.exec(t), !C) break;
        j = m(t.substr(I, C.index - I), C[0]), I = C.index + j
      }
      m(t.substr(I));
      for (var k = w; k.parent; k = k.parent) k.cN && (M += "</span>");
      return {
        r: B,
        value: M,
        language: e,
        top: w
      }
    } catch (A) {
      if (-1 != A.message.indexOf("Illegal")) return {
        r: 0,
        value: n(t)
      };
      throw A
    }
  }

  function l(e, t) {
    t = t || E.languages || Object.keys(R);
    var r = {
        r: 0,
        value: n(e)
      },
      a = r;
    return t.forEach(function(n) {
      if (N(n)) {
        var t = s(n, e, !1);
        t.language = n, t.r > a.r && (a = t), t.r > r.r && (a = r, r = t)
      }
    }), a.language && (r.second_best = a), r
  }

  function f(e) {
    return E.tabReplace && (e = e.replace(/^((<[^>]+>|\t)+)/gm, function(e, n) {
      return n.replace(/\t/g, E.tabReplace)
    })), E.useBR && (e = e.replace(/\n/g, "<br>")), e
  }

  function g(e, n, t) {
    var r = n ? x[n] : t,
      a = [e.trim()];
    return e.match(/(\s|^)hljs(\s|$)/) || a.push("hljs"), r && a.push(r), a.join(" ").trim()
  }

  function p(e) {
    var n = a(e);
    if (!/no(-?)highlight/.test(n)) {
      var t;
      E.useBR ? (t = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), t.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n")) : t = e;
      var r = t.textContent,
        o = n ? s(n, r, !0) : l(r),
        u = i(t);
      if (u.length) {
        var p = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
        p.innerHTML = o.value, o.value = c(u, i(p), r)
      }
      o.value = f(o.value), e.innerHTML = o.value, e.className = g(e.className, n, o.language), e.result = {
        language: o.language,
        re: o.r
      }, o.second_best && (e.second_best = {
        language: o.second_best.language,
        re: o.second_best.r
      })
    }
  }

  function d(e) {
    E = o(E, e)
  }

  function h() {
    if (!h.called) {
      h.called = !0;
      var e = document.querySelectorAll("pre code");
      Array.prototype.forEach.call(e, p)
    }
  }

  function v() {
    addEventListener("DOMContentLoaded", h, !1), addEventListener("load", h, !1)
  }

  function b(n, t) {
    var r = R[n] = t(e);
    r.aliases && r.aliases.forEach(function(e) {
      x[e] = n
    })
  }

  function m() {
    return Object.keys(R)
  }

  function N(e) {
    return R[e] || R[x[e]]
  }
  var E = {
      classPrefix: "hljs-",
      tabReplace: null,
      useBR: !1,
      languages: void 0
    },
    R = {},
    x = {};
  return e.highlight = s, e.highlightAuto = l, e.fixMarkup = f, e.highlightBlock = p, e.configure = d, e.initHighlighting = h, e.initHighlightingOnLoad = v, e.registerLanguage = b, e.listLanguages = m, e.getLanguage = N, e.inherit = o, e.IR = "[a-zA-Z][a-zA-Z0-9_]*", e.UIR = "[a-zA-Z_][a-zA-Z0-9_]*", e.NR = "\\b\\d+(\\.\\d+)?", e.CNR = "(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", e.BNR = "\\b(0b[01]+)", e.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", e.BE = {
    b: "\\\\[\\s\\S]",
    r: 0
  }, e.ASM = {
    cN: "string",
    b: "'",
    e: "'",
    i: "\\n",
    c: [e.BE]
  }, e.QSM = {
    cN: "string",
    b: '"',
    e: '"',
    i: "\\n",
    c: [e.BE]
  }, e.PWM = {
    b: /\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/
  }, e.CLCM = {
    cN: "comment",
    b: "//",
    e: "$",
    c: [e.PWM]
  }, e.CBCM = {
    cN: "comment",
    b: "/\\*",
    e: "\\*/",
    c: [e.PWM]
  }, e.HCM = {
    cN: "comment",
    b: "#",
    e: "$",
    c: [e.PWM]
  }, e.NM = {
    cN: "number",
    b: e.NR,
    r: 0
  }, e.CNM = {
    cN: "number",
    b: e.CNR,
    r: 0
  }, e.BNM = {
    cN: "number",
    b: e.BNR,
    r: 0
  }, e.CSSNM = {
    cN: "number",
    b: e.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
    r: 0
  }, e.RM = {
    cN: "regexp",
    b: /\//,
    e: /\/[gimuy]*/,
    i: /\n/,
    c: [e.BE, {
      b: /\[/,
      e: /\]/,
      r: 0,
      c: [e.BE]
    }]
  }, e.TM = {
    cN: "title",
    b: e.IR,
    r: 0
  }, e.UTM = {
    cN: "title",
    b: e.UIR,
    r: 0
  }, e
});
hljs.registerLanguage("coffeescript", function(e) {
  var c = {
      keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",
      literal: "true false null undefined yes no on off",
      reserved: "case default function var void with const let enum export import native __hasProp __extends __slice __bind __indexOf",
      built_in: "npm require console print module global window document"
    },
    n = "[A-Za-z$_][0-9A-Za-z$_]*",
    t = {
      cN: "subst",
      b: /#\{/,
      e: /}/,
      k: c
    },
    r = [e.BNM, e.inherit(e.CNM, {
      starts: {
        e: "(\\s*/)?",
        r: 0
      }
    }), {
      cN: "string",
      v: [{
        b: /'''/,
        e: /'''/,
        c: [e.BE]
      }, {
        b: /'/,
        e: /'/,
        c: [e.BE]
      }, {
        b: /"""/,
        e: /"""/,
        c: [e.BE, t]
      }, {
        b: /"/,
        e: /"/,
        c: [e.BE, t]
      }]
    }, {
      cN: "regexp",
      v: [{
        b: "///",
        e: "///",
        c: [t, e.HCM]
      }, {
        b: "//[gim]*",
        r: 0
      }, {
        b: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/
      }]
    }, {
      cN: "property",
      b: "@" + n
    }, {
      b: "`",
      e: "`",
      eB: !0,
      eE: !0,
      sL: "javascript"
    }];
  t.c = r;
  var i = e.inherit(e.TM, {
      b: n
    }),
    s = "(\\(.*\\))?\\s*\\B[-=]>",
    o = {
      cN: "params",
      b: "\\([^\\(]",
      rB: !0,
      c: [{
        b: /\(/,
        e: /\)/,
        k: c,
        c: ["self"].concat(r)
      }]
    };
  return {
    aliases: ["coffee", "cson", "iced"],
    k: c,
    i: /\/\*/,
    c: r.concat([{
      cN: "comment",
      b: "###",
      e: "###",
      c: [e.PWM]
    }, e.HCM, {
      cN: "function",
      b: "^\\s*" + n + "\\s*=\\s*" + s,
      e: "[-=]>",
      rB: !0,
      c: [i, o]
    }, {
      b: /[:\(,=]\s*/,
      r: 0,
      c: [{
        cN: "function",
        b: s,
        e: "[-=]>",
        rB: !0,
        c: [o]
      }]
    }, {
      cN: "class",
      bK: "class",
      e: "$",
      i: /[:="\[\]]/,
      c: [{
        bK: "extends",
        eW: !0,
        i: /[:="\[\]]/,
        c: [i]
      }, i]
    }, {
      cN: "attribute",
      b: n + ":",
      e: ":",
      rB: !0,
      rE: !0,
      r: 0
    }])
  }
});
hljs.registerLanguage("swift", function(e) {
  var t = {
      keyword: "class deinit enum extension func import init let protocol static struct subscript typealias var break case continue default do else fallthrough if in for return switch where while as dynamicType is new super self Self Type __COLUMN__ __FILE__ __FUNCTION__ __LINE__ associativity didSet get infix inout left mutating none nonmutating operator override postfix precedence prefix right set unowned unowned safe unsafe weak willSet",
      literal: "true false nil",
      built_in: "abs advance alignof alignofValue assert bridgeFromObjectiveC bridgeFromObjectiveCUnconditional bridgeToObjectiveC bridgeToObjectiveCUnconditional c contains count countElements countLeadingZeros debugPrint debugPrintln distance dropFirst dropLast dump encodeBitsAsWords enumerate equal false filter find getBridgedObjectiveCType getVaList indices insertionSort isBridgedToObjectiveC isBridgedVerbatimToObjectiveC isUniquelyReferenced join lexicographicalCompare map max maxElement min minElement nil numericCast partition posix print println quickSort reduce reflect reinterpretCast reverse roundUpToAlignment sizeof sizeofValue sort split startsWith strideof strideofValue swap swift toString transcode true underestimateCount unsafeReflect withExtendedLifetime withObjectAtPlusZero withUnsafePointer withUnsafePointerToObject withUnsafePointers withVaList"
    },
    i = {
      cN: "type",
      b: "\\b[A-Z][\\w']*",
      r: 0
    },
    n = {
      cN: "comment",
      b: "/\\*",
      e: "\\*/",
      c: [e.PWM, "self"]
    },
    r = {
      cN: "subst",
      b: /\\\(/,
      e: "\\)",
      k: t,
      c: []
    },
    s = {
      cN: "number",
      b: "\\b([\\d_]+(\\.[\\deE_]+)?|0x[a-fA-F0-9_]+(\\.[a-fA-F0-9p_]+)?|0b[01_]+|0o[0-7_]+)\\b",
      r: 0
    },
    o = e.inherit(e.QSM, {
      c: [r, e.BE]
    });
  return r.c = [s], {
    k: t,
    c: [o, e.CLCM, n, i, s, {
      cN: "func",
      bK: "func",
      e: "{",
      eE: !0,
      c: [e.inherit(e.TM, {
        b: /[A-Za-z$_][0-9A-Za-z$_]*/,
        i: /\(/
      }), {
        cN: "generics",
        b: /\</,
        e: /\>/,
        i: /\>/
      }, {
        cN: "params",
        b: /\(/,
        e: /\)/,
        k: t,
        c: ["self", s, o, e.CBCM, {
          b: ":"
        }],
        i: /["']/
      }],
      i: /\[|%/
    }, {
      cN: "class",
      k: "struct protocol class extension enum",
      b: "(struct|protocol|class(?! (func|var))|extension|enum)",
      e: "\\{",
      eE: !0,
      c: [e.inherit(e.TM, {
        b: /[A-Za-z$_][0-9A-Za-z$_]*/
      })]
    }, {
      cN: "preprocessor",
      b: "(@assignment|@class_protocol|@exported|@final|@lazy|@noreturn|@NSCopying|@NSManaged|@objc|@optional|@required|@auto_closure|@noreturn|@IBAction|@IBDesignable|@IBInspectable|@IBOutlet|@infix|@prefix|@postfix)"
    }]
  }
});
hljs.registerLanguage("apache", function(e) {
  var r = {
    cN: "number",
    b: "[\\$%]\\d+"
  };
  return {
    aliases: ["apacheconf"],
    cI: !0,
    c: [e.HCM, {
      cN: "tag",
      b: "</?",
      e: ">"
    }, {
      cN: "keyword",
      b: /\w+/,
      r: 0,
      k: {
        common: "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"
      },
      starts: {
        e: /$/,
        r: 0,
        k: {
          literal: "on off all"
        },
        c: [{
          cN: "sqbracket",
          b: "\\s\\[",
          e: "\\]$"
        }, {
          cN: "cbracket",
          b: "[\\$%]\\{",
          e: "\\}",
          c: ["self", r]
        }, r, e.QSM]
      }
    }],
    i: /\S/
  }
});
hljs.registerLanguage("scss", function(e) {
  {
    var t = "[a-zA-Z-][a-zA-Z0-9_-]*",
      i = {
        cN: "variable",
        b: "(\\$" + t + ")\\b"
      },
      r = {
        cN: "function",
        b: t + "\\(",
        rB: !0,
        eE: !0,
        e: "\\("
      },
      o = {
        cN: "hexcolor",
        b: "#[0-9A-Fa-f]+"
      };
    ({
      cN: "attribute",
      b: "[A-Z\\_\\.\\-]+",
      e: ":",
      eE: !0,
      i: "[^\\s]",
      starts: {
        cN: "value",
        eW: !0,
        eE: !0,
        c: [r, o, e.CSSNM, e.QSM, e.ASM, e.CBCM, {
          cN: "important",
          b: "!important"
        }]
      }
    })
  }
  return {
    cI: !0,
    i: "[=/|']",
    c: [e.CLCM, e.CBCM, r, {
      cN: "id",
      b: "\\#[A-Za-z0-9_-]+",
      r: 0
    }, {
      cN: "class",
      b: "\\.[A-Za-z0-9_-]+",
      r: 0
    }, {
      cN: "attr_selector",
      b: "\\[",
      e: "\\]",
      i: "$"
    }, {
      cN: "tag",
      b: "\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",
      r: 0
    }, {
      cN: "pseudo",
      b: ":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)"
    }, {
      cN: "pseudo",
      b: "::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)"
    }, i, {
      cN: "attribute",
      b: "\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",
      i: "[^\\s]"
    }, {
      cN: "value",
      b: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"
    }, {
      cN: "value",
      b: ":",
      e: ";",
      c: [r, i, o, e.CSSNM, e.QSM, e.ASM, {
        cN: "important",
        b: "!important"
      }]
    }, {
      cN: "at_rule",
      b: "@",
      e: "[{;]",
      k: "mixin include extend for if else each while charset import debug media page content font-face namespace warn",
      c: [r, i, e.QSM, e.ASM, o, e.CSSNM, {
        cN: "preprocessor",
        b: "\\s[A-Za-z0-9_.-]+",
        r: 0
      }]
    }]
  }
});
hljs.registerLanguage("http", function() {
  return {
    i: "\\S",
    c: [{
      cN: "status",
      b: "^HTTP/[0-9\\.]+",
      e: "$",
      c: [{
        cN: "number",
        b: "\\b\\d{3}\\b"
      }]
    }, {
      cN: "request",
      b: "^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",
      rB: !0,
      e: "$",
      c: [{
        cN: "string",
        b: " ",
        e: " ",
        eB: !0,
        eE: !0
      }]
    }, {
      cN: "attribute",
      b: "^\\w",
      e: ": ",
      eE: !0,
      i: "\\n|\\s|=",
      starts: {
        cN: "string",
        e: "$"
      }
    }, {
      b: "\\n\\n",
      starts: {
        sL: "",
        eW: !0
      }
    }]
  }
});
hljs.registerLanguage("cs", function(e) {
  var r = "abstract as base bool break byte case catch char checked const continue decimal default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long null object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async protected public private internal ascending descending from get group into join let orderby partial select set value var where yield",
    t = e.IR + "(<" + e.IR + ">)?";
  return {
    aliases: ["csharp"],
    k: r,
    i: /::/,
    c: [{
      cN: "comment",
      b: "///",
      e: "$",
      rB: !0,
      c: [{
        cN: "xmlDocTag",
        v: [{
          b: "///",
          r: 0
        }, {
          b: "<!--|-->"
        }, {
          b: "</?",
          e: ">"
        }]
      }]
    }, e.CLCM, e.CBCM, {
      cN: "preprocessor",
      b: "#",
      e: "$",
      k: "if else elif endif define undef warning error line region endregion pragma checksum"
    }, {
      cN: "string",
      b: '@"',
      e: '"',
      c: [{
        b: '""'
      }]
    }, e.ASM, e.QSM, e.CNM, {
      bK: "class namespace interface",
      e: /[{;=]/,
      i: /[^\s:]/,
      c: [e.TM, e.CLCM, e.CBCM]
    }, {
      bK: "new return throw await",
      r: 0
    }, {
      cN: "function",
      b: "(" + t + "\\s+)+" + e.IR + "\\s*\\(",
      rB: !0,
      e: /[{;=]/,
      eE: !0,
      k: r,
      c: [{
        b: e.IR + "\\s*\\(",
        rB: !0,
        c: [e.TM],
        r: 0
      }, {
        cN: "params",
        b: /\(/,
        e: /\)/,
        k: r,
        r: 0,
        c: [e.ASM, e.QSM, e.CNM, e.CBCM]
      }, e.CLCM, e.CBCM]
    }]
  }
});
hljs.registerLanguage("java", function(e) {
  var a = e.UIR + "(<" + e.UIR + ">)?",
    t = "false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private",
    c = "(\\b(0b[01_]+)|\\b0[xX][a-fA-F0-9_]+|(\\b[\\d_]+(\\.[\\d_]*)?|\\.[\\d_]+)([eE][-+]?\\d+)?)[lLfF]?",
    r = {
      cN: "number",
      b: c,
      r: 0
    };
  return {
    aliases: ["jsp"],
    k: t,
    i: /<\//,
    c: [{
      cN: "javadoc",
      b: "/\\*\\*",
      e: "\\*/",
      r: 0,
      c: [{
        cN: "javadoctag",
        b: "(^|\\s)@[A-Za-z]+"
      }]
    }, e.CLCM, e.CBCM, e.ASM, e.QSM, {
      cN: "class",
      bK: "class interface",
      e: /[{;=]/,
      eE: !0,
      k: "class interface",
      i: /[:"\[\]]/,
      c: [{
        bK: "extends implements"
      }, e.UTM]
    }, {
      bK: "new throw return",
      r: 0
    }, {
      cN: "function",
      b: "(" + a + "\\s+)+" + e.UIR + "\\s*\\(",
      rB: !0,
      e: /[{;=]/,
      eE: !0,
      k: t,
      c: [{
        b: e.UIR + "\\s*\\(",
        rB: !0,
        r: 0,
        c: [e.UTM]
      }, {
        cN: "params",
        b: /\(/,
        e: /\)/,
        k: t,
        r: 0,
        c: [e.ASM, e.QSM, e.CNM, e.CBCM]
      }, e.CLCM, e.CBCM]
    }, r, {
      cN: "annotation",
      b: "@[A-Za-z]+"
    }]
  }
});
hljs.registerLanguage("erlang-repl", function(e) {
  return {
    k: {
      special_functions: "spawn spawn_link self",
      reserved: "after and andalso|10 band begin bnot bor bsl bsr bxor case catch cond div end fun if let not of or orelse|10 query receive rem try when xor"
    },
    c: [{
      cN: "prompt",
      b: "^[0-9]+> ",
      r: 10
    }, {
      cN: "comment",
      b: "%",
      e: "$"
    }, {
      cN: "number",
      b: "\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)",
      r: 0
    }, e.ASM, e.QSM, {
      cN: "constant",
      b: "\\?(::)?([A-Z]\\w*(::)?)+"
    }, {
      cN: "arrow",
      b: "->"
    }, {
      cN: "ok",
      b: "ok"
    }, {
      cN: "exclamation_mark",
      b: "!"
    }, {
      cN: "function_or_atom",
      b: "(\\b[a-z'][a-zA-Z0-9_']*:[a-z'][a-zA-Z0-9_']*)|(\\b[a-z'][a-zA-Z0-9_']*)",
      r: 0
    }, {
      cN: "variable",
      b: "[A-Z][a-zA-Z0-9_']*",
      r: 0
    }]
  }
});
hljs.registerLanguage("haml", function() {
  return {
    cI: !0,
    c: [{
      cN: "doctype",
      b: "^!!!( (5|1\\.1|Strict|Frameset|Basic|Mobile|RDFa|XML\\b.*))?$",
      r: 10
    }, {
      cN: "comment",
      b: "^\\s*(!=#|=#|-#|/).*$",
      r: 0
    }, {
      b: "^\\s*(-|=|!=)(?!#)",
      starts: {
        e: "\\n",
        sL: "ruby"
      }
    }, {
      cN: "tag",
      b: "^\\s*%",
      c: [{
        cN: "title",
        b: "\\w+"
      }, {
        cN: "value",
        b: "[#\\.]\\w+"
      }, {
        b: "{\\s*",
        e: "\\s*}",
        eE: !0,
        c: [{
          b: ":\\w+\\s*=>",
          e: ",\\s+",
          rB: !0,
          eW: !0,
          c: [{
            cN: "symbol",
            b: ":\\w+"
          }, {
            cN: "string",
            b: '"',
            e: '"'
          }, {
            cN: "string",
            b: "'",
            e: "'"
          }, {
            b: "\\w+",
            r: 0
          }]
        }]
      }, {
        b: "\\(\\s*",
        e: "\\s*\\)",
        eE: !0,
        c: [{
          b: "\\w+\\s*=",
          e: "\\s+",
          rB: !0,
          eW: !0,
          c: [{
            cN: "attribute",
            b: "\\w+",
            r: 0
          }, {
            cN: "string",
            b: '"',
            e: '"'
          }, {
            cN: "string",
            b: "'",
            e: "'"
          }, {
            b: "\\w+",
            r: 0
          }]
        }]
      }]
    }, {
      cN: "bullet",
      b: "^\\s*[=~]\\s*",
      r: 0
    }, {
      b: "#{",
      starts: {
        e: "}",
        sL: "ruby"
      }
    }]
  }
});
hljs.registerLanguage("nginx", function(e) {
  var r = {
      cN: "variable",
      v: [{
        b: /\$\d+/
      }, {
        b: /\$\{/,
        e: /}/
      }, {
        b: "[\\$\\@]" + e.UIR
      }]
    },
    b = {
      eW: !0,
      l: "[a-z/_]+",
      k: {
        built_in: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"
      },
      r: 0,
      i: "=>",
      c: [e.HCM, {
        cN: "string",
        c: [e.BE, r],
        v: [{
          b: /"/,
          e: /"/
        }, {
          b: /'/,
          e: /'/
        }]
      }, {
        cN: "url",
        b: "([a-z]+):/",
        e: "\\s",
        eW: !0,
        eE: !0,
        c: [r]
      }, {
        cN: "regexp",
        c: [e.BE, r],
        v: [{
          b: "\\s\\^",
          e: "\\s|{|;",
          rE: !0
        }, {
          b: "~\\*?\\s+",
          e: "\\s|{|;",
          rE: !0
        }, {
          b: "\\*(\\.[a-z\\-]+)+"
        }, {
          b: "([a-z\\-]+\\.)+\\*"
        }]
      }, {
        cN: "number",
        b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
      }, {
        cN: "number",
        b: "\\b\\d+[kKmMgGdshdwy]*\\b",
        r: 0
      }, r]
    };
  return {
    aliases: ["nginxconf"],
    c: [e.HCM, {
      b: e.UIR + "\\s",
      e: ";|{",
      rB: !0,
      c: [{
        cN: "title",
        b: e.UIR,
        starts: b
      }],
      r: 0
    }],
    i: "[^\\s\\}]"
  }
});
hljs.registerLanguage("sql", function(e) {
  var t = {
    cN: "comment",
    b: "--",
    e: "$"
  };
  return {
    cI: !0,
    i: /[<>]/,
    c: [{
      cN: "operator",
      bK: "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate savepoint release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup",
      e: /;/,
      eW: !0,
      k: {
        keyword: "abs absolute acos action add adddate addtime aes_decrypt aes_encrypt after aggregate all allocate alter analyze and any are as asc ascii asin assertion at atan atan2 atn2 authorization authors avg backup before begin benchmark between bin binlog bit_and bit_count bit_length bit_or bit_xor both by cache call cascade cascaded case cast catalog ceil ceiling chain change changed char_length character_length charindex charset check checksum checksum_agg choose close coalesce coercibility collate collation collationproperty column columns columns_updated commit compress concat concat_ws concurrent connect connection connection_id consistent constraint constraints continue contributors conv convert convert_tz corresponding cos cot count count_big crc32 create cross cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime data database databases datalength date_add date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts datetimeoffsetfromparts day dayname dayofmonth dayofweek dayofyear deallocate declare decode default deferrable deferred degrees delayed delete des_decrypt des_encrypt des_key_file desc describe descriptor diagnostics difference disconnect distinct distinctrow div do domain double drop dumpfile each else elt enclosed encode encrypt end end-exec engine engines eomonth errors escape escaped event eventdata events except exception exec execute exists exp explain export_set extended external extract fast fetch field fields find_in_set first first_value floor flush for force foreign format found found_rows from from_base64 from_days from_unixtime full function get get_format get_lock getdate getutcdate global go goto grant grants greatest group group_concat grouping grouping_id gtid_subset gtid_subtract handler having help hex high_priority hosts hour ident_current ident_incr ident_seed identified identity if ifnull ignore iif ilike immediate in index indicator inet6_aton inet6_ntoa inet_aton inet_ntoa infile initially inner innodb input insert install instr intersect into is is_free_lock is_ipv4 is_ipv4_compat is_ipv4_mapped is_not is_not_null is_used_lock isdate isnull isolation join key kill language last last_day last_insert_id last_value lcase lead leading least leaves left len lenght level like limit lines ln load load_file local localtime localtimestamp locate lock log log10 log2 logfile logs low_priority lower lpad ltrim make_set makedate maketime master master_pos_wait match matched max md5 medium merge microsecond mid min minute mod mode module month monthname mutex name_const names national natural nchar next no no_write_to_binlog not now nullif nvarchar oct octet_length of old_password on only open optimize option optionally or ord order outer outfile output pad parse partial partition password patindex percent_rank percentile_cont percentile_disc period_add period_diff pi plugin position pow power pragma precision prepare preserve primary prior privileges procedure procedure_analyze processlist profile profiles public publishingservername purge quarter query quick quote quotename radians rand read references regexp relative relaylog release release_lock rename repair repeat replace replicate reset restore restrict return returns reverse revoke right rlike rollback rollup round row row_count rows rpad rtrim savepoint schema scroll sec_to_time second section select serializable server session session_user set sha sha1 sha2 share show sign sin size slave sleep smalldatetimefromparts snapshot some soname soundex sounds_like space sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sql_variant_property sqlstate sqrt square start starting status std stddev stddev_pop stddev_samp stdev stdevp stop str str_to_date straight_join strcmp string stuff subdate substr substring subtime subtring_index sum switchoffset sysdate sysdatetime sysdatetimeoffset system_user sysutcdatetime table tables tablespace tan temporary terminated tertiary_weights then time time_format time_to_sec timediff timefromparts timestamp timestampadd timestampdiff timezone_hour timezone_minute to to_base64 to_days to_seconds todatetimeoffset trailing transaction translation trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse ucase uncompress uncompressed_length unhex unicode uninstall union unique unix_timestamp unknown unlock update upgrade upped upper usage use user user_resources using utc_date utc_time utc_timestamp uuid uuid_short validate_password_strength value values var var_pop var_samp variables variance varp version view warnings week weekday weekofyear weight_string when whenever where with work write xml xor year yearweek zon",
        literal: "true false null",
        built_in: "array bigint binary bit blob boolean char character date dec decimal float int integer interval number numeric real serial smallint varchar varying int8 serial8 text"
      },
      c: [{
        cN: "string",
        b: "'",
        e: "'",
        c: [e.BE, {
          b: "''"
        }]
      }, {
        cN: "string",
        b: '"',
        e: '"',
        c: [e.BE, {
          b: '""'
        }]
      }, {
        cN: "string",
        b: "`",
        e: "`",
        c: [e.BE]
      }, e.CNM, e.CBCM, t]
    }, e.CBCM, t]
  }
});
hljs.registerLanguage("xml", function() {
  var t = "[A-Za-z0-9\\._:-]+",
    e = {
      b: /<\?(php)?(?!\w)/,
      e: /\?>/,
      sL: "php",
      subLanguageMode: "continuous"
    },
    c = {
      eW: !0,
      i: /</,
      r: 0,
      c: [e, {
        cN: "attribute",
        b: t,
        r: 0
      }, {
        b: "=",
        r: 0,
        c: [{
          cN: "value",
          c: [e],
          v: [{
            b: /"/,
            e: /"/
          }, {
            b: /'/,
            e: /'/
          }, {
            b: /[^\s\/>]+/
          }]
        }]
      }]
    };
  return {
    aliases: ["html", "xhtml", "rss", "atom", "xsl", "plist"],
    cI: !0,
    c: [{
      cN: "doctype",
      b: "<!DOCTYPE",
      e: ">",
      r: 10,
      c: [{
        b: "\\[",
        e: "\\]"
      }]
    }, {
      cN: "comment",
      b: "<!--",
      e: "-->",
      r: 10
    }, {
      cN: "cdata",
      b: "<\\!\\[CDATA\\[",
      e: "\\]\\]>",
      r: 10
    }, {
      cN: "tag",
      b: "<style(?=\\s|>|$)",
      e: ">",
      k: {
        title: "style"
      },
      c: [c],
      starts: {
        e: "</style>",
        rE: !0,
        sL: "css"
      }
    }, {
      cN: "tag",
      b: "<script(?=\\s|>|$)",
      e: ">",
      k: {
        title: "script"
      },
      c: [c],
      starts: {
        e: "</script>",
        rE: !0,
        sL: "javascript"
      }
    }, e, {
      cN: "pi",
      b: /<\?\w+/,
      e: /\?>/,
      r: 10
    }, {
      cN: "tag",
      b: "</?",
      e: "/?>",
      c: [{
        cN: "title",
        b: /[^ \/><\n\t]+/,
        r: 0
      }, c]
    }]
  }
});
hljs.registerLanguage("handlebars", function() {
  var e = "each in with if else unless bindattr action collection debugger log outlet template unbound view yield";
  return {
    aliases: ["hbs", "html.hbs", "html.handlebars"],
    cI: !0,
    sL: "xml",
    subLanguageMode: "continuous",
    c: [{
      cN: "expression",
      b: "{{",
      e: "}}",
      c: [{
        cN: "begin-block",
        b: "#[a-zA-Z- .]+",
        k: e
      }, {
        cN: "string",
        b: '"',
        e: '"'
      }, {
        cN: "end-block",
        b: "\\/[a-zA-Z- .]+",
        k: e
      }, {
        cN: "variable",
        b: "[a-zA-Z-.]+",
        k: e
      }]
    }]
  }
});
hljs.registerLanguage("profile", function(e) {
  return {
    c: [e.CNM, {
      cN: "built_in",
      b: "{",
      e: "}$",
      eB: !0,
      eE: !0,
      c: [e.ASM, e.QSM],
      r: 0
    }, {
      cN: "filename",
      b: "[a-zA-Z_][\\da-zA-Z_]+\\.[\\da-zA-Z_]{1,3}",
      e: ":",
      eE: !0
    }, {
      cN: "header",
      b: "(ncalls|tottime|cumtime)",
      e: "$",
      k: "ncalls tottime|10 cumtime|10 filename",
      r: 10
    }, {
      cN: "summary",
      b: "function calls",
      e: "$",
      c: [e.CNM],
      r: 10
    }, e.ASM, e.QSM, {
      cN: "function",
      b: "\\(",
      e: "\\)$",
      c: [e.UTM],
      r: 0
    }]
  }
});
hljs.registerLanguage("django", function() {
  var e = {
    cN: "filter",
    b: /\|[A-Za-z]+\:?/,
    k: "truncatewords removetags linebreaksbr yesno get_digit timesince random striptags filesizeformat escape linebreaks length_is ljust rjust cut urlize fix_ampersands title floatformat capfirst pprint divisibleby add make_list unordered_list urlencode timeuntil urlizetrunc wordcount stringformat linenumbers slice date dictsort dictsortreversed default_if_none pluralize lower join center default truncatewords_html upper length phone2numeric wordwrap time addslashes slugify first escapejs force_escape iriencode last safe safeseq truncatechars localize unlocalize localtime utc timezone",
    c: [{
      cN: "argument",
      b: /"/,
      e: /"/
    }, {
      cN: "argument",
      b: /'/,
      e: /'/
    }]
  };
  return {
    aliases: ["jinja"],
    cI: !0,
    sL: "xml",
    subLanguageMode: "continuous",
    c: [{
      cN: "comment",
      b: /\{%\s*comment\s*%}/,
      e: /\{%\s*endcomment\s*%}/
    }, {
      cN: "comment",
      b: /\{#/,
      e: /#}/
    }, {
      cN: "template_tag",
      b: /\{%/,
      e: /%}/,
      k: "comment endcomment load templatetag ifchanged endifchanged if endif firstof for endfor in ifnotequal endifnotequal widthratio extends include spaceless endspaceless regroup by as ifequal endifequal ssi now with cycle url filter endfilter debug block endblock else autoescape endautoescape csrf_token empty elif endwith static trans blocktrans endblocktrans get_static_prefix get_media_prefix plural get_current_language language get_available_languages get_current_language_bidi get_language_info get_language_info_list localize endlocalize localtime endlocaltime timezone endtimezone get_current_timezone verbatim",
      c: [e]
    }, {
      cN: "variable",
      b: /\{\{/,
      e: /}}/,
      c: [e]
    }]
  }
});
hljs.registerLanguage("javascript", function(r) {
  return {
    aliases: ["js"],
    k: {
      keyword: "in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class",
      literal: "true false null undefined NaN Infinity",
      built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document"
    },
    c: [{
      cN: "pi",
      r: 10,
      v: [{
        b: /^\s*('|")use strict('|")/
      }, {
        b: /^\s*('|")use asm('|")/
      }]
    }, r.ASM, r.QSM, r.CLCM, r.CBCM, r.CNM, {
      b: "(" + r.RSR + "|\\b(case|return|throw)\\b)\\s*",
      k: "return throw case",
      c: [r.CLCM, r.CBCM, r.RM, {
        b: /</,
        e: />;/,
        r: 0,
        sL: "xml"
      }],
      r: 0
    }, {
      cN: "function",
      bK: "function",
      e: /\{/,
      eE: !0,
      c: [r.inherit(r.TM, {
        b: /[A-Za-z$_][0-9A-Za-z$_]*/
      }), {
        cN: "params",
        b: /\(/,
        e: /\)/,
        c: [r.CLCM, r.CBCM],
        i: /["'\(]/
      }],
      i: /\[|%/
    }, {
      b: /\$[(.]/
    }, {
      b: "\\." + r.IR,
      r: 0
    }]
  }
});
hljs.registerLanguage("clojure", function(e) {
  var t = {
      built_in: "def cond apply if-not if-let if not not= = < > <= >= == + / * - rem quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last drop-while while intern condp case reduced cycle split-at split-with repeat replicate iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter monitor-exit defmacro defn defn- macroexpand macroexpand-1 for dosync and or when when-not when-let comp juxt partial sequence memoize constantly complement identity assert peek pop doto proxy defstruct first rest cons defprotocol cast coll deftype defrecord last butlast sigs reify second ffirst fnext nfirst nnext defmulti defmethod meta with-meta ns in-ns create-ns import refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize"
    },
    r = "a-zA-Z_\\-!.?+*=<>&#'",
    n = "[" + r + "][" + r + "0-9/;:]*",
    a = "[-+]?\\d+(\\.\\d+)?",
    o = {
      b: n,
      r: 0
    },
    s = {
      cN: "number",
      b: a,
      r: 0
    },
    c = e.inherit(e.QSM, {
      i: null
    }),
    i = {
      cN: "comment",
      b: ";",
      e: "$",
      r: 0
    },
    d = {
      cN: "literal",
      b: /\b(true|false|nil)\b/
    },
    l = {
      cN: "collection",
      b: "[\\[\\{]",
      e: "[\\]\\}]"
    },
    m = {
      cN: "comment",
      b: "\\^" + n
    },
    p = {
      cN: "comment",
      b: "\\^\\{",
      e: "\\}"
    },
    u = {
      cN: "attribute",
      b: "[:]" + n
    },
    f = {
      cN: "list",
      b: "\\(",
      e: "\\)"
    },
    h = {
      eW: !0,
      r: 0
    },
    y = {
      k: t,
      l: n,
      cN: "keyword",
      b: n,
      starts: h
    },
    b = [f, c, m, p, i, u, l, s, d, o];
  return f.c = [{
    cN: "comment",
    b: "comment"
  }, y, h], h.c = b, l.c = b, {
    aliases: ["clj"],
    i: /\S/,
    c: [f, c, m, p, i, u, l, s, d]
  }
});
hljs.registerLanguage("go", function(e) {
  var t = {
    keyword: "break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer",
    constant: "true false iota nil",
    typename: "bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune",
    built_in: "append cap close complex copy imag len make new panic print println real recover delete"
  };
  return {
    aliases: ["golang"],
    k: t,
    i: "</",
    c: [e.CLCM, e.CBCM, e.QSM, {
      cN: "string",
      b: "'",
      e: "[^\\\\]'"
    }, {
      cN: "string",
      b: "`",
      e: "`"
    }, {
      cN: "number",
      b: e.CNR + "[dflsi]?",
      r: 0
    }, e.CNM]
  }
});
hljs.registerLanguage("stylus", function(t) {
  var e = {
      cN: "variable",
      b: "\\$" + t.IR
    },
    o = {
      cN: "hexcolor",
      b: "#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})",
      r: 10
    },
    i = ["charset", "css", "debug", "extend", "font-face", "for", "import", "include", "media", "mixin", "page", "warn", "while"],
    r = ["after", "before", "first-letter", "first-line", "active", "first-child", "focus", "hover", "lang", "link", "visited"],
    n = ["a", "abbr", "address", "article", "aside", "audio", "b", "blockquote", "body", "button", "canvas", "caption", "cite", "code", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "mark", "menu", "nav", "object", "ol", "p", "q", "quote", "samp", "section", "span", "strong", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "ul", "var", "video"],
    a = "[\\.\\s\\n\\[\\:,]",
    l = ["align-content", "align-items", "align-self", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "auto", "backface-visibility", "background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "clear", "clip", "clip-path", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "content", "counter-increment", "counter-reset", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "font", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-variant-ligatures", "font-weight", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "ime-mode", "inherit", "initial", "justify-content", "left", "letter-spacing", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marks", "mask", "max-height", "max-width", "min-height", "min-width", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "none", "normal", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "right", "tab-size", "table-layout", "text-align", "text-align-last", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-indent", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "transform", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "white-space", "widows", "width", "word-break", "word-spacing", "word-wrap", "z-index"],
    d = ["\\{", "\\}", "\\?", "(\\bReturn\\b)", "(\\bEnd\\b)", "(\\bend\\b)", ";", "#\\s", "\\*\\s", "===\\s", "\\|"];
  return {
    aliases: ["styl"],
    cI: !1,
    i: "(" + d.join("|") + ")",
    k: "if else for in",
    c: [t.QSM, t.ASM, t.CLCM, t.CBCM, o, {
      b: "\\.[a-zA-Z][a-zA-Z0-9_-]*" + a,
      rB: !0,
      c: [{
        cN: "class",
        b: "\\.[a-zA-Z][a-zA-Z0-9_-]*"
      }]
    }, {
      b: "\\#[a-zA-Z][a-zA-Z0-9_-]*" + a,
      rB: !0,
      c: [{
        cN: "id",
        b: "\\#[a-zA-Z][a-zA-Z0-9_-]*"
      }]
    }, {
      b: "\\b(" + n.join("|") + ")" + a,
      rB: !0,
      c: [{
        cN: "tag",
        b: "\\b[a-zA-Z][a-zA-Z0-9_-]*"
      }]
    }, {
      cN: "pseudo",
      b: "&?:?:\\b(" + r.join("|") + ")" + a
    }, {
      cN: "at_rule",
      b: "@(" + i.join("|") + ")\\b"
    }, e, t.CSSNM, t.NM, {
      cN: "function",
      b: "\\b[a-zA-Z][a-zA-Z0-9_-]*\\(.*\\)",
      i: "[\\n]",
      rB: !0,
      c: [{
        cN: "title",
        b: "\\b[a-zA-Z][a-zA-Z0-9_-]*"
      }, {
        cN: "params",
        b: /\(/,
        e: /\)/,
        c: [o, e, t.ASM, t.CSSNM, t.NM, t.QSM]
      }]
    }, {
      cN: "attribute",
      b: "\\b(" + l.reverse().join("|") + ")\\b"
    }]
  }
});
hljs.registerLanguage("r", function(e) {
  var r = "([a-zA-Z]|\\.[a-zA-Z.])[a-zA-Z0-9._]*";
  return {
    c: [e.HCM, {
      b: r,
      l: r,
      k: {
        keyword: "function if in break next repeat else for return switch while try tryCatch|10 stop warning require library attach detach source setMethod setGeneric setGroupGeneric setClass ...|10",
        literal: "NULL NA TRUE FALSE T F Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10"
      },
      r: 0
    }, {
      cN: "number",
      b: "0[xX][0-9a-fA-F]+[Li]?\\b",
      r: 0
    }, {
      cN: "number",
      b: "\\d+(?:[eE][+\\-]?\\d*)?L\\b",
      r: 0
    }, {
      cN: "number",
      b: "\\d+\\.(?!\\d)(?:i\\b)?",
      r: 0
    }, {
      cN: "number",
      b: "\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b",
      r: 0
    }, {
      cN: "number",
      b: "\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b",
      r: 0
    }, {
      b: "`",
      e: "`",
      r: 0
    }, {
      cN: "string",
      c: [e.BE],
      v: [{
        b: '"',
        e: '"'
      }, {
        b: "'",
        e: "'"
      }]
    }]
  }
});
hljs.registerLanguage("bash", function(e) {
  var t = {
      cN: "variable",
      v: [{
        b: /\$[\w\d#@][\w\d_]*/
      }, {
        b: /\$\{(.*?)\}/
      }]
    },
    s = {
      cN: "string",
      b: /"/,
      e: /"/,
      c: [e.BE, t, {
        cN: "variable",
        b: /\$\(/,
        e: /\)/,
        c: [e.BE]
      }]
    },
    a = {
      cN: "string",
      b: /'/,
      e: /'/
    };
  return {
    aliases: ["sh", "zsh"],
    l: /-?[a-z\.]+/,
    k: {
      keyword: "if then else elif fi for while in do done case esac function",
      literal: "true false",
      built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
      operator: "-ne -eq -lt -gt -f -d -e -s -l -a"
    },
    c: [{
      cN: "shebang",
      b: /^#![^\n]+sh\s*$/,
      r: 10
    }, {
      cN: "function",
      b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
      rB: !0,
      c: [e.inherit(e.TM, {
        b: /\w[\w\d_]*/
      })],
      r: 0
    }, e.HCM, e.NM, s, a, t]
  }
});
hljs.registerLanguage("scala", function(e) {
  var t = {
      cN: "annotation",
      b: "@[A-Za-z]+"
    },
    a = {
      cN: "string",
      b: 'u?r?"""',
      e: '"""',
      r: 10
    },
    r = {
      cN: "symbol",
      b: "'\\w[\\w\\d_]*(?!')"
    },
    c = {
      cN: "type",
      b: "\\b[A-Z][A-Za-z0-9_]*",
      r: 0
    },
    i = {
      cN: "title",
      b: /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,
      r: 0
    },
    l = {
      cN: "class",
      bK: "class object trait type",
      e: /[:={\[(\n;]/,
      c: [{
        cN: "keyword",
        bK: "extends with",
        r: 10
      }, i]
    },
    n = {
      cN: "function",
      bK: "def val",
      e: /[:={\[(\n;]/,
      c: [i]
    };
  return {
    k: {
      literal: "true false null",
      keyword: "type yield lazy override def with val var sealed abstract private trait object if forSome for while throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit"
    },
    c: [e.CLCM, e.CBCM, a, e.QSM, r, c, n, l, e.CNM, t]
  }
});
hljs.registerLanguage("objectivec", function(e) {
  var t = {
      keyword: "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required",
      literal: "false true FALSE TRUE nil YES NO NULL",
      built_in: "NSString NSData NSDictionary CGRect CGPoint UIButton UILabel UITextView UIWebView MKMapView NSView NSViewController NSWindow NSWindowController NSSet NSUUID NSIndexSet UISegmentedControl NSObject UITableViewDelegate UITableViewDataSource NSThread UIActivityIndicator UITabbar UIToolBar UIBarButtonItem UIImageView NSAutoreleasePool UITableView BOOL NSInteger CGFloat NSException NSLog NSMutableString NSMutableArray NSMutableDictionary NSURL NSIndexPath CGSize UITableViewCell UIView UIViewController UINavigationBar UINavigationController UITabBarController UIPopoverController UIPopoverControllerDelegate UIImage NSNumber UISearchBar NSFetchedResultsController NSFetchedResultsChangeType UIScrollView UIScrollViewDelegate UIEdgeInsets UIColor UIFont UIApplication NSNotFound NSNotificationCenter NSNotification UILocalNotification NSBundle NSFileManager NSTimeInterval NSDate NSCalendar NSUserDefaults UIWindow NSRange NSArray NSError NSURLRequest NSURLConnection NSURLSession NSURLSessionDataTask NSURLSessionDownloadTask NSURLSessionUploadTask NSURLResponseUIInterfaceOrientation MPMoviePlayerController dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"
    },
    o = /[a-zA-Z@][a-zA-Z0-9_]*/,
    a = "@interface @class @protocol @implementation";
  return {
    aliases: ["m", "mm", "objc", "obj-c"],
    k: t,
    l: o,
    i: "</",
    c: [e.CLCM, e.CBCM, e.CNM, e.QSM, {
      cN: "string",
      v: [{
        b: '@"',
        e: '"',
        i: "\\n",
        c: [e.BE]
      }, {
        b: "'",
        e: "[^\\\\]'",
        i: "[^\\\\][^']"
      }]
    }, {
      cN: "preprocessor",
      b: "#",
      e: "$",
      c: [{
        cN: "title",
        v: [{
          b: '"',
          e: '"'
        }, {
          b: "<",
          e: ">"
        }]
      }]
    }, {
      cN: "class",
      b: "(" + a.split(" ").join("|") + ")\\b",
      e: "({|$)",
      eE: !0,
      k: a,
      l: o,
      c: [e.UTM]
    }, {
      cN: "variable",
      b: "\\." + e.UIR,
      r: 0
    }]
  }
});
hljs.registerLanguage("markdown", function() {
  return {
    aliases: ["md", "mkdown", "mkd"],
    c: [{
      cN: "header",
      v: [{
        b: "^#{1,6}",
        e: "$"
      }, {
        b: "^.+?\\n[=-]{2,}$"
      }]
    }, {
      b: "<",
      e: ">",
      sL: "xml",
      r: 0
    }, {
      cN: "bullet",
      b: "^([*+-]|(\\d+\\.))\\s+"
    }, {
      cN: "strong",
      b: "[*_]{2}.+?[*_]{2}"
    }, {
      cN: "emphasis",
      v: [{
        b: "\\*.+?\\*"
      }, {
        b: "_.+?_",
        r: 0
      }]
    }, {
      cN: "blockquote",
      b: "^>\\s+",
      e: "$"
    }, {
      cN: "code",
      v: [{
        b: "`.+?`"
      }, {
        b: "^( {4}| )",
        e: "$",
        r: 0
      }]
    }, {
      cN: "horizontal_rule",
      b: "^[-\\*]{3,}",
      e: "$"
    }, {
      b: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
      rB: !0,
      c: [{
        cN: "link_label",
        b: "\\[",
        e: "\\]",
        eB: !0,
        rE: !0,
        r: 0
      }, {
        cN: "link_url",
        b: "\\]\\(",
        e: "\\)",
        eB: !0,
        eE: !0
      }, {
        cN: "link_reference",
        b: "\\]\\[",
        e: "\\]",
        eB: !0,
        eE: !0
      }],
      r: 10
    }, {
      b: "^\\[.+\\]:",
      rB: !0,
      c: [{
        cN: "link_reference",
        b: "\\[",
        e: "\\]:",
        eB: !0,
        eE: !0,
        starts: {
          cN: "link_url",
          e: "$"
        }
      }]
    }]
  }
});
hljs.registerLanguage("puppet", function(e) {
  var s = "augeas computer cron exec file filebucket host interface k5login macauthorization mailalias maillist mcx mount nagios_command nagios_contact nagios_contactgroup nagios_host nagios_hostdependency nagios_hostescalation nagios_hostextinfo nagios_hostgroup nagios_service firewall nagios_servicedependency nagios_serviceescalation nagios_serviceextinfo nagios_servicegroup nagios_timeperiod notify package resources router schedule scheduled_task selboolean selmodule service ssh_authorized_key sshkey stage tidy user vlan yumrepo zfs zone zpool",
    r = "alias audit before loglevel noop require subscribe tag owner ensure group mode name|0 changes context force incl lens load_path onlyif provider returns root show_diff type_check en_address ip_address realname command environment hour monute month monthday special target weekday creates cwd ogoutput refresh refreshonly tries try_sleep umask backup checksum content ctime force ignore links mtime purge recurse recurselimit replace selinux_ignore_defaults selrange selrole seltype seluser source souirce_permissions sourceselect validate_cmd validate_replacement allowdupe attribute_membership auth_membership forcelocal gid ia_load_module members system host_aliases ip allowed_trunk_vlans description device_url duplex encapsulation etherchannel native_vlan speed principals allow_root auth_class auth_type authenticate_user k_of_n mechanisms rule session_owner shared options device fstype enable hasrestart directory present absent link atboot blockdevice device dump pass remounts poller_tag use message withpath adminfile allow_virtual allowcdrom category configfiles flavor install_options instance package_settings platform responsefile status uninstall_options vendor unless_system_user unless_uid binary control flags hasstatus manifest pattern restart running start stop allowdupe auths expiry gid groups home iterations key_membership keys managehome membership password password_max_age password_min_age profile_membership profiles project purge_ssh_keys role_membership roles salt shell uid baseurl cost descr enabled enablegroups exclude failovermethod gpgcheck gpgkey http_caching include includepkgs keepalive metadata_expire metalink mirrorlist priority protect proxy proxy_password proxy_username repo_gpgcheck s3_enabled skip_if_unavailable sslcacert sslclientcert sslclientkey sslverify mounted",
    a = {
      keyword: "and case class default define else elsif false if in import enherits node or true undef unless main settings $string " + s,
      literal: r,
      built_in: "architecture augeasversion blockdevices boardmanufacturer boardproductname boardserialnumber cfkey dhcp_servers domain ec2_ ec2_userdata facterversion filesystems ldom fqdn gid hardwareisa hardwaremodel hostname id|0 interfaces ipaddress ipaddress_ ipaddress6 ipaddress6_ iphostnumber is_virtual kernel kernelmajversion kernelrelease kernelversion kernelrelease kernelversion lsbdistcodename lsbdistdescription lsbdistid lsbdistrelease lsbmajdistrelease lsbminordistrelease lsbrelease macaddress macaddress_ macosx_buildversion macosx_productname macosx_productversion macosx_productverson_major macosx_productversion_minor manufacturer memoryfree memorysize netmask metmask_ network_ operatingsystem operatingsystemmajrelease operatingsystemrelease osfamily partitions path physicalprocessorcount processor processorcount productname ps puppetversion rubysitedir rubyversion selinux selinux_config_mode selinux_config_policy selinux_current_mode selinux_current_mode selinux_enforced selinux_policyversion serialnumber sp_ sshdsakey sshecdsakey sshrsakey swapencrypted swapfree swapsize timezone type uniqueid uptime uptime_days uptime_hours uptime_seconds uuid virtual vlans xendomains zfs_version zonenae zones zpool_version"
    },
    i = {
      cN: "comment",
      b: "#",
      e: "$"
    },
    o = {
      cN: "string",
      c: [e.BE],
      v: [{
        b: /'/,
        e: /'/
      }, {
        b: /"/,
        e: /"/
      }]
    },
    n = [o, i, {
      cN: "keyword",
      bK: "class",
      e: "$|;",
      i: /=/,
      c: [e.inherit(e.TM, {
        b: "(::)?[A-Za-z_]\\w*(::\\w+)*"
      }), i, o]
    }, {
      cN: "keyword",
      b: "([a-zA-Z_(::)]+ *\\{)",
      c: [o, i],
      r: 0
    }, {
      cN: "keyword",
      b: "(\\}|\\{)",
      r: 0
    }, {
      cN: "function",
      b: "[a-zA-Z_]+\\s*=>"
    }, {
      cN: "constant",
      b: "(::)?(\\b[A-Z][a-z_]*(::)?)+",
      r: 0
    }, {
      cN: "number",
      b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
      r: 0
    }];
  return {
    aliases: ["pp"],
    k: a,
    c: n
  }
});
hljs.registerLanguage("json", function(e) {
  var t = {
      literal: "true false null"
    },
    i = [e.QSM, e.CNM],
    l = {
      cN: "value",
      e: ",",
      eW: !0,
      eE: !0,
      c: i,
      k: t
    },
    c = {
      b: "{",
      e: "}",
      c: [{
        cN: "attribute",
        b: '\\s*"',
        e: '"\\s*:\\s*',
        eB: !0,
        eE: !0,
        c: [e.BE],
        i: "\\n",
        starts: l
      }],
      i: "\\S"
    },
    n = {
      b: "\\[",
      e: "\\]",
      c: [e.inherit(l, {
        cN: null
      })],
      i: "\\S"
    };
  return i.splice(i.length, 0, c, n), {
    c: i,
    k: t,
    i: "\\S"
  }
});
hljs.registerLanguage("d", function(e) {
  var r = {
      keyword: "abstract alias align asm assert auto body break byte case cast catch class const continue debug default delete deprecated do else enum export extern final finally for foreach foreach_reverse|10 goto if immutable import in inout int interface invariant is lazy macro mixin module new nothrow out override package pragma private protected public pure ref return scope shared static struct super switch synchronized template this throw try typedef typeid typeof union unittest version void volatile while with __FILE__ __LINE__ __gshared|10 __thread __traits __DATE__ __EOF__ __TIME__ __TIMESTAMP__ __VENDOR__ __VERSION__",
      built_in: "bool cdouble cent cfloat char creal dchar delegate double dstring float function idouble ifloat ireal long real short string ubyte ucent uint ulong ushort wchar wstring",
      literal: "false null true"
    },
    t = "(0|[1-9][\\d_]*)",
    a = "(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)",
    i = "0[bB][01_]+",
    n = "([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)",
    c = "0[xX]" + n,
    _ = "([eE][+-]?" + a + ")",
    d = "(" + a + "(\\.\\d*|" + _ + ")|\\d+\\." + a + a + "|\\." + t + _ + "?)",
    o = "(0[xX](" + n + "\\." + n + "|\\.?" + n + ")[pP][+-]?" + a + ")",
    s = "(" + t + "|" + i + "|" + c + ")",
    l = "(" + o + "|" + d + ")",
    u = "\\\\(['\"\\?\\\\abfnrtv]|u[\\dA-Fa-f]{4}|[0-7]{1,3}|x[\\dA-Fa-f]{2}|U[\\dA-Fa-f]{8})|&[a-zA-Z\\d]{2,};",
    b = {
      cN: "number",
      b: "\\b" + s + "(L|u|U|Lu|LU|uL|UL)?",
      r: 0
    },
    f = {
      cN: "number",
      b: "\\b(" + l + "([fF]|L|i|[fF]i|Li)?|" + s + "(i|[fF]i|Li))",
      r: 0
    },
    g = {
      cN: "string",
      b: "'(" + u + "|.)",
      e: "'",
      i: "."
    },
    h = {
      b: u,
      r: 0
    },
    p = {
      cN: "string",
      b: '"',
      c: [h],
      e: '"[cwd]?'
    },
    N = {
      cN: "string",
      b: '[rq]"',
      e: '"[cwd]?',
      r: 5
    },
    m = {
      cN: "string",
      b: "`",
      e: "`[cwd]?"
    },
    w = {
      cN: "string",
      b: 'x"[\\da-fA-F\\s\\n\\r]*"[cwd]?',
      r: 10
    },
    A = {
      cN: "string",
      b: 'q"\\{',
      e: '\\}"'
    },
    F = {
      cN: "shebang",
      b: "^#!",
      e: "$",
      r: 5
    },
    y = {
      cN: "preprocessor",
      b: "#(line)",
      e: "$",
      r: 5
    },
    L = {
      cN: "keyword",
      b: "@[a-zA-Z_][a-zA-Z_\\d]*"
    },
    v = {
      cN: "comment",
      b: "\\/\\+",
      c: ["self"],
      e: "\\+\\/",
      r: 10
    };
  return {
    l: e.UIR,
    k: r,
    c: [e.CLCM, e.CBCM, v, w, p, N, m, A, f, b, g, F, y, L]
  }
});
hljs.registerLanguage("python", function(e) {
  var r = {
      cN: "prompt",
      b: /^(>>>|\.\.\.) /
    },
    b = {
      cN: "string",
      c: [e.BE],
      v: [{
        b: /(u|b)?r?'''/,
        e: /'''/,
        c: [r],
        r: 10
      }, {
        b: /(u|b)?r?"""/,
        e: /"""/,
        c: [r],
        r: 10
      }, {
        b: /(u|r|ur)'/,
        e: /'/,
        r: 10
      }, {
        b: /(u|r|ur)"/,
        e: /"/,
        r: 10
      }, {
        b: /(b|br)'/,
        e: /'/
      }, {
        b: /(b|br)"/,
        e: /"/
      }, e.ASM, e.QSM]
    },
    l = {
      cN: "number",
      r: 0,
      v: [{
        b: e.BNR + "[lLjJ]?"
      }, {
        b: "\\b(0o[0-7]+)[lLjJ]?"
      }, {
        b: e.CNR + "[lLjJ]?"
      }]
    },
    c = {
      cN: "params",
      b: /\(/,
      e: /\)/,
      c: ["self", r, l, b]
    };
  return {
    aliases: ["py", "gyp"],
    k: {
      keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10 None True False",
      built_in: "Ellipsis NotImplemented"
    },
    i: /(<\/|->|\?)/,
    c: [r, l, b, e.HCM, {
      v: [{
        cN: "function",
        bK: "def",
        r: 10
      }, {
        cN: "class",
        bK: "class"
      }],
      e: /:/,
      i: /[${=;\n]/,
      c: [e.UTM, c]
    }, {
      cN: "decorator",
      b: /@/,
      e: /$/
    }, {
      b: /\b(print|exec)\(/
    }]
  }
});
hljs.registerLanguage("ruby", function(e) {
  var b = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",
    r = "and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",
    c = {
      cN: "yardoctag",
      b: "@[A-Za-z]+"
    },
    a = {
      cN: "value",
      b: "#<",
      e: ">"
    },
    s = {
      cN: "comment",
      v: [{
        b: "#",
        e: "$",
        c: [c]
      }, {
        b: "^\\=begin",
        e: "^\\=end",
        c: [c],
        r: 10
      }, {
        b: "^__END__",
        e: "\\n$"
      }]
    },
    n = {
      cN: "subst",
      b: "#\\{",
      e: "}",
      k: r
    },
    t = {
      cN: "string",
      c: [e.BE, n],
      v: [{
        b: /'/,
        e: /'/
      }, {
        b: /"/,
        e: /"/
      }, {
        b: /`/,
        e: /`/
      }, {
        b: "%[qQwWx]?\\(",
        e: "\\)"
      }, {
        b: "%[qQwWx]?\\[",
        e: "\\]"
      }, {
        b: "%[qQwWx]?{",
        e: "}"
      }, {
        b: "%[qQwWx]?<",
        e: ">"
      }, {
        b: "%[qQwWx]?/",
        e: "/"
      }, {
        b: "%[qQwWx]?%",
        e: "%"
      }, {
        b: "%[qQwWx]?-",
        e: "-"
      }, {
        b: "%[qQwWx]?\\|",
        e: "\\|"
      }, {
        b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
      }]
    },
    i = {
      cN: "params",
      b: "\\(",
      e: "\\)",
      k: r
    },
    d = [t, a, s, {
      cN: "class",
      bK: "class module",
      e: "$|;",
      i: /=/,
      c: [e.inherit(e.TM, {
        b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"
      }), {
        cN: "inheritance",
        b: "<\\s*",
        c: [{
          cN: "parent",
          b: "(" + e.IR + "::)?" + e.IR
        }]
      }, s]
    }, {
      cN: "function",
      bK: "def",
      e: " |$|;",
      r: 0,
      c: [e.inherit(e.TM, {
        b: b
      }), i, s]
    }, {
      cN: "constant",
      b: "(::)?(\\b[A-Z]\\w*(::)?)+",
      r: 0
    }, {
      cN: "symbol",
      b: e.UIR + "(\\!|\\?)?:",
      r: 0
    }, {
      cN: "symbol",
      b: ":",
      c: [t, {
        b: b
      }],
      r: 0
    }, {
      cN: "number",
      b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
      r: 0
    }, {
      cN: "variable",
      b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"
    }, {
      b: "(" + e.RSR + ")\\s*",
      c: [a, s, {
        cN: "regexp",
        c: [e.BE, n],
        i: /\n/,
        v: [{
          b: "/",
          e: "/[a-z]*"
        }, {
          b: "%r{",
          e: "}[a-z]*"
        }, {
          b: "%r\\(",
          e: "\\)[a-z]*"
        }, {
          b: "%r!",
          e: "![a-z]*"
        }, {
          b: "%r\\[",
          e: "\\][a-z]*"
        }]
      }],
      r: 0
    }];
  n.c = d, i.c = d;
  var l = "[>?]>",
    u = "[\\w#]+\\(\\w+\\):\\d+:\\d+>",
    N = "(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>",
    o = [{
      b: /^\s*=>/,
      cN: "status",
      starts: {
        e: "$",
        c: d
      }
    }, {
      cN: "prompt",
      b: "^(" + l + "|" + u + "|" + N + ")",
      starts: {
        e: "$",
        c: d
      }
    }];
  return {
    aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
    k: r,
    c: [s].concat(o).concat(d)
  }
});
hljs.registerLanguage("cpp", function(t) {
  var i = {
    keyword: "false int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using true class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue wchar_t inline delete alignof char16_t char32_t constexpr decltype noexcept nullptr static_assert thread_local restrict _Bool complex _Complex _Imaginaryintmax_t uintmax_t int8_t uint8_t int16_t uint16_t int32_t uint32_t  int64_t uint64_tint_least8_t uint_least8_t int_least16_t uint_least16_t int_least32_t uint_least32_tint_least64_t uint_least64_t int_fast8_t uint_fast8_t int_fast16_t uint_fast16_t int_fast32_tuint_fast32_t int_fast64_t uint_fast64_t intptr_t uintptr_t atomic_bool atomic_char atomic_scharatomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llongatomic_ullong atomic_wchar_t atomic_char16_t atomic_char32_t atomic_intmax_t atomic_uintmax_tatomic_intptr_t atomic_uintptr_t atomic_size_t atomic_ptrdiff_t atomic_int_least8_t atomic_int_least16_tatomic_int_least32_t atomic_int_least64_t atomic_uint_least8_t atomic_uint_least16_t atomic_uint_least32_tatomic_uint_least64_t atomic_int_fast8_t atomic_int_fast16_t atomic_int_fast32_t atomic_int_fast64_tatomic_uint_fast8_t atomic_uint_fast16_t atomic_uint_fast32_t atomic_uint_fast64_t",
    built_in: "P1 std string cin cout cerr clog stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf"
  };
  return {
    aliases: ["c", "h", "c++", "h++"],
    k: i,
    i: "</",
    c: [t.CLCM, t.CBCM, t.QSM, {
      cN: "string",
      b: "'\\\\?.",
      e: "'",
      i: "."
    }, {
      cN: "number",
      b: "\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"
    }, t.CNM, {
      cN: "preprocessor",
      b: "#",
      e: "$",
      k: "if else elif endif define undef warning error line pragma",
      c: [{
        b: 'include\\s*[<"]',
        e: '[>"]',
        k: "include",
        i: "\\n"
      }, t.CLCM]
    }, {
      cN: "stl_container",
      b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
      e: ">",
      k: i,
      c: ["self"]
    }, {
      b: t.IR + "::"
    }, {
      bK: "new throw return",
      r: 0
    }, {
      cN: "function",
      b: "(" + t.IR + "\\s+)+" + t.IR + "\\s*\\(",
      rB: !0,
      e: /[{;=]/,
      eE: !0,
      k: i,
      c: [{
        b: t.IR + "\\s*\\(",
        rB: !0,
        c: [t.TM],
        r: 0
      }, {
        cN: "params",
        b: /\(/,
        e: /\)/,
        k: i,
        r: 0,
        c: [t.CBCM]
      }, t.CLCM, t.CBCM]
    }]
  }
});
hljs.registerLanguage("groovy", function(e) {
  return {
    k: {
      typename: "byte short char int long boolean float double void",
      literal: "true false null",
      keyword: "def as in assert trait super this abstract static volatile transient public private protected synchronized final class interface enum if else for while switch case break default continue throw throws try catch finally implements extends new import package return instanceof"
    },
    c: [e.CLCM, {
      cN: "javadoc",
      b: "/\\*\\*",
      e: "\\*//*",
      r: 0,
      c: [{
        cN: "javadoctag",
        b: "(^|\\s)@[A-Za-z]+"
      }]
    }, e.CBCM, {
      cN: "string",
      b: '"""',
      e: '"""'
    }, {
      cN: "string",
      b: "'''",
      e: "'''"
    }, {
      cN: "string",
      b: "\\$/",
      e: "/\\$",
      r: 10
    }, e.ASM, {
      cN: "regexp",
      b: /~?\/[^\/\n]+\//,
      c: [e.BE]
    }, e.QSM, {
      cN: "shebang",
      b: "^#!/usr/bin/env",
      e: "$",
      i: "\n"
    }, e.BNM, {
      cN: "class",
      bK: "class interface trait enum",
      e: "{",
      i: ":",
      c: [{
        bK: "extends implements"
      }, e.UTM]
    }, e.CNM, {
      cN: "annotation",
      b: "@[A-Za-z]+"
    }, {
      cN: "string",
      b: /[^\?]{0}[A-Za-z0-9_$]+ *:/
    }, {
      b: /\?/,
      e: /\:/
    }, {
      cN: "label",
      b: "^\\s*[A-Za-z0-9_$]+:",
      r: 0
    }]
  }
});
hljs.registerLanguage("erb", function() {
  return {
    sL: "xml",
    subLanguageMode: "continuous",
    c: [{
      cN: "comment",
      b: "<%#",
      e: "%>"
    }, {
      b: "<%[%=-]?",
      e: "[%-]?%>",
      sL: "ruby",
      eB: !0,
      eE: !0
    }]
  }
});
hljs.registerLanguage("dart", function(e) {
  var t = {
      cN: "subst",
      b: "\\$\\{",
      e: "}",
      k: "true false null this is new super"
    },
    r = {
      cN: "string",
      v: [{
        b: "r'''",
        e: "'''"
      }, {
        b: 'r"""',
        e: '"""'
      }, {
        b: "r'",
        e: "'",
        i: "\\n"
      }, {
        b: 'r"',
        e: '"',
        i: "\\n"
      }, {
        b: "'''",
        e: "'''",
        c: [e.BE, t]
      }, {
        b: '"""',
        e: '"""',
        c: [e.BE, t]
      }, {
        b: "'",
        e: "'",
        i: "\\n",
        c: [e.BE, t]
      }, {
        b: '"',
        e: '"',
        i: "\\n",
        c: [e.BE, t]
      }]
    };
  t.c = [e.CNM, r];
  var n = {
    keyword: "assert break case catch class const continue default do else enum extends false final finally for if in is new null rethrow return super switch this throw true try var void while with",
    literal: "abstract as dynamic export external factory get implements import library operator part set static typedef",
    built_in: "print Comparable DateTime Duration Function Iterable Iterator List Map Match Null Object Pattern RegExp Set Stopwatch String StringBuffer StringSink Symbol Type Uri bool double int num document window querySelector querySelectorAll Element ElementList"
  };
  return {
    k: n,
    c: [r, {
      cN: "dartdoc",
      b: "/\\*\\*",
      e: "\\*/",
      sL: "markdown",
      subLanguageMode: "continuous"
    }, {
      cN: "dartdoc",
      b: "///",
      e: "$",
      sL: "markdown",
      subLanguageMode: "continuous"
    }, e.CLCM, e.CBCM, {
      cN: "class",
      bK: "class interface",
      e: "{",
      eE: !0,
      c: [{
        bK: "extends implements"
      }, e.UTM]
    }, e.CNM, {
      cN: "annotation",
      b: "@[A-Za-z]+"
    }, {
      b: "=>"
    }]
  }
});
hljs.registerLanguage("css", function(e) {
  var c = "[a-zA-Z-][a-zA-Z0-9_-]*",
    a = {
      cN: "function",
      b: c + "\\(",
      rB: !0,
      eE: !0,
      e: "\\("
    };
  return {
    cI: !0,
    i: "[=/|']",
    c: [e.CBCM, {
      cN: "id",
      b: "\\#[A-Za-z0-9_-]+"
    }, {
      cN: "class",
      b: "\\.[A-Za-z0-9_-]+",
      r: 0
    }, {
      cN: "attr_selector",
      b: "\\[",
      e: "\\]",
      i: "$"
    }, {
      cN: "pseudo",
      b: ":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"
    }, {
      cN: "at_rule",
      b: "@(font-face|page)",
      l: "[a-z-]+",
      k: "font-face page"
    }, {
      cN: "at_rule",
      b: "@",
      e: "[{;]",
      c: [{
        cN: "keyword",
        b: /\S+/
      }, {
        b: /\s/,
        eW: !0,
        eE: !0,
        r: 0,
        c: [a, e.ASM, e.QSM, e.CSSNM]
      }]
    }, {
      cN: "tag",
      b: c,
      r: 0
    }, {
      cN: "rules",
      b: "{",
      e: "}",
      i: "[^\\s]",
      r: 0,
      c: [e.CBCM, {
        cN: "rule",
        b: "[^\\s]",
        rB: !0,
        e: ";",
        eW: !0,
        c: [{
          cN: "attribute",
          b: "[A-Z\\_\\.\\-]+",
          e: ":",
          eE: !0,
          i: "[^\\s]",
          starts: {
            cN: "value",
            eW: !0,
            eE: !0,
            c: [a, e.CSSNM, e.QSM, e.ASM, e.CBCM, {
              cN: "hexcolor",
              b: "#[0-9A-Fa-f]+"
            }, {
              cN: "important",
              b: "!important"
            }]
          }
        }]
      }]
    }]
  }
});
hljs.registerLanguage("clojure-repl", function() {
  return {
    c: [{
      cN: "prompt",
      b: /^([\w.-]+|\s*#_)=>/,
      starts: {
        e: /$/,
        sL: "clojure",
        subLanguageMode: "continuous"
      }
    }]
  }
});
hljs.registerLanguage("php", function(e) {
  var c = {
      cN: "variable",
      b: "\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"
    },
    i = {
      cN: "preprocessor",
      b: /<\?(php)?|\?>/
    },
    a = {
      cN: "string",
      c: [e.BE, i],
      v: [{
        b: 'b"',
        e: '"'
      }, {
        b: "b'",
        e: "'"
      }, e.inherit(e.ASM, {
        i: null
      }), e.inherit(e.QSM, {
        i: null
      })]
    },
    n = {
      v: [e.BNM, e.CNM]
    };
  return {
    aliases: ["php3", "php4", "php5", "php6"],
    cI: !0,
    k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
    c: [e.CLCM, e.HCM, {
      cN: "comment",
      b: "/\\*",
      e: "\\*/",
      c: [{
        cN: "phpdoc",
        b: "\\s@[A-Za-z]+"
      }, i]
    }, {
      cN: "comment",
      b: "__halt_compiler.+?;",
      eW: !0,
      k: "__halt_compiler",
      l: e.UIR
    }, {
      cN: "string",
      b: "<<<['\"]?\\w+['\"]?$",
      e: "^\\w+;",
      c: [e.BE]
    }, i, c, {
      b: /->+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
    }, {
      cN: "function",
      bK: "function",
      e: /[;{]/,
      eE: !0,
      i: "\\$|\\[|%",
      c: [e.UTM, {
        cN: "params",
        b: "\\(",
        e: "\\)",
        c: ["self", c, e.CBCM, a, n]
      }]
    }, {
      cN: "class",
      bK: "class interface",
      e: "{",
      eE: !0,
      i: /[:\(\$"]/,
      c: [{
        bK: "extends implements"
      }, e.UTM]
    }, {
      bK: "namespace",
      e: ";",
      i: /[\.']/,
      c: [e.UTM]
    }, {
      bK: "use",
      e: ";",
      c: [e.UTM]
    }, {
      b: "=>"
    }, a, n]
  }
});
hljs.registerLanguage("perl", function(e) {
  var t = "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when",
    r = {
      cN: "subst",
      b: "[$@]\\{",
      e: "\\}",
      k: t
    },
    s = {
      b: "->{",
      e: "}"
    },
    n = {
      cN: "variable",
      v: [{
        b: /\$\d/
      }, {
        b: /[\$\%\@](\^\w\b|#\w+(\:\:\w+)*|{\w+}|\w+(\:\:\w*)*)/
      }, {
        b: /[\$\%\@][^\s\w{]/,
        r: 0
      }]
    },
    o = {
      cN: "comment",
      b: "^(__END__|__DATA__)",
      e: "\\n$",
      r: 5
    },
    i = [e.BE, r, n],
    c = [n, e.HCM, o, {
      cN: "comment",
      b: "^\\=\\w",
      e: "\\=cut",
      eW: !0
    }, s, {
      cN: "string",
      c: i,
      v: [{
        b: "q[qwxr]?\\s*\\(",
        e: "\\)",
        r: 5
      }, {
        b: "q[qwxr]?\\s*\\[",
        e: "\\]",
        r: 5
      }, {
        b: "q[qwxr]?\\s*\\{",
        e: "\\}",
        r: 5
      }, {
        b: "q[qwxr]?\\s*\\|",
        e: "\\|",
        r: 5
      }, {
        b: "q[qwxr]?\\s*\\<",
        e: "\\>",
        r: 5
      }, {
        b: "qw\\s+q",
        e: "q",
        r: 5
      }, {
        b: "'",
        e: "'",
        c: [e.BE]
      }, {
        b: '"',
        e: '"'
      }, {
        b: "`",
        e: "`",
        c: [e.BE]
      }, {
        b: "{\\w+}",
        c: [],
        r: 0
      }, {
        b: "-?\\w+\\s*\\=\\>",
        c: [],
        r: 0
      }]
    }, {
      cN: "number",
      b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
      r: 0
    }, {
      b: "(\\/\\/|" + e.RSR + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
      k: "split return print reverse grep",
      r: 0,
      c: [e.HCM, o, {
        cN: "regexp",
        b: "(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",
        r: 10
      }, {
        cN: "regexp",
        b: "(m|qr)?/",
        e: "/[a-z]*",
        c: [e.BE],
        r: 0
      }]
    }, {
      cN: "sub",
      bK: "sub",
      e: "(\\s*\\(.*?\\))?[;{]",
      r: 5
    }, {
      cN: "operator",
      b: "-\\w\\b",
      r: 0
    }];
  return r.c = c, s.c = c, {
    aliases: ["pl"],
    k: t,
    c: c
  }
});
hljs.registerLanguage("erlang", function(e) {
  var r = "[a-z'][a-zA-Z0-9_']*",
    c = "(" + r + ":" + r + "|" + r + ")",
    a = {
      keyword: "after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun if let not of orelse|10 query receive rem try when xor",
      literal: "false true"
    },
    n = {
      cN: "comment",
      b: "%",
      e: "$"
    },
    b = {
      cN: "number",
      b: "\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)",
      r: 0
    },
    i = {
      b: "fun\\s+" + r + "/\\d+"
    },
    o = {
      b: c + "\\(",
      e: "\\)",
      rB: !0,
      r: 0,
      c: [{
        cN: "function_name",
        b: c,
        r: 0
      }, {
        b: "\\(",
        e: "\\)",
        eW: !0,
        rE: !0,
        r: 0
      }]
    },
    d = {
      cN: "tuple",
      b: "{",
      e: "}",
      r: 0
    },
    t = {
      cN: "variable",
      b: "\\b_([A-Z][A-Za-z0-9_]*)?",
      r: 0
    },
    l = {
      cN: "variable",
      b: "[A-Z][a-zA-Z0-9_]*",
      r: 0
    },
    f = {
      b: "#" + e.UIR,
      r: 0,
      rB: !0,
      c: [{
        cN: "record_name",
        b: "#" + e.UIR,
        r: 0
      }, {
        b: "{",
        e: "}",
        r: 0
      }]
    },
    s = {
      bK: "fun receive if try case",
      e: "end",
      k: a
    };
  s.c = [n, i, e.inherit(e.ASM, {
    cN: ""
  }), s, o, e.QSM, b, d, t, l, f];
  var u = [n, i, s, o, e.QSM, b, d, t, l, f];
  o.c[1].c = u, d.c = u, f.c[1].c = u;
  var v = {
    cN: "params",
    b: "\\(",
    e: "\\)",
    c: u
  };
  return {
    aliases: ["erl"],
    k: a,
    i: "(</|\\*=|\\+=|-=|/\\*|\\*/|\\(\\*|\\*\\))",
    c: [{
      cN: "function",
      b: "^" + r + "\\s*\\(",
      e: "->",
      rB: !0,
      i: "\\(|#|//|/\\*|\\\\|:|;",
      c: [v, e.inherit(e.TM, {
        b: r
      })],
      starts: {
        e: ";|\\.",
        k: a,
        c: u
      }
    }, n, {
      cN: "pp",
      b: "^-",
      e: "\\.",
      r: 0,
      eE: !0,
      rB: !0,
      l: "-" + e.IR,
      k: "-module -record -undef -export -ifdef -ifndef -author -copyright -doc -vsn -import -include -include_lib -compile -define -else -endif -file -behaviour -behavior -spec",
      c: [v]
    }, b, e.QSM, f, t, l, d, {
      b: /\.$/
    }]
  }
});
hljs.registerLanguage("dos", function(e) {
  var r = {
      cN: "comment",
      b: /@?rem\b/,
      e: /$/,
      r: 10
    },
    t = {
      cN: "label",
      b: "^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)",
      r: 0
    };
  return {
    aliases: ["bat", "cmd"],
    cI: !0,
    k: {
      flow: "if else goto for in do call exit not exist errorlevel defined",
      operator: "equ neq lss leq gtr geq",
      keyword: "shift cd dir echo setlocal endlocal set pause copy",
      stream: "prn nul lpt3 lpt2 lpt1 con com4 com3 com2 com1 aux",
      winutils: "ping net ipconfig taskkill xcopy ren del",
      built_in: "append assoc at attrib break cacls cd chcp chdir chkdsk chkntfs cls cmd color comp compact convert date dir diskcomp diskcopy doskey erase fs find findstr format ftype graftabl help keyb label md mkdir mode more move path pause print popd pushd promt rd recover rem rename replace restore rmdir shiftsort start subst time title tree type ver verify vol"
    },
    c: [{
      cN: "envvar",
      b: /%%[^ ]|%[^ ]+?%|![^ ]+?!/
    }, {
      cN: "function",
      b: t.b,
      e: "goto:eof",
      c: [e.inherit(e.TM, {
        b: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"
      }), r]
    }, {
      cN: "number",
      b: "\\b\\d+",
      r: 0
    }, r]
  }
});
hljs.registerLanguage("makefile", function(e) {
  var a = {
    cN: "variable",
    b: /\$\(/,
    e: /\)/,
    c: [e.BE]
  };
  return {
    aliases: ["mk", "mak"],
    c: [e.HCM, {
      b: /^\w+\s*\W*=/,
      rB: !0,
      r: 0,
      starts: {
        cN: "constant",
        e: /\s*\W*=/,
        eE: !0,
        starts: {
          e: /$/,
          r: 0,
          c: [a]
        }
      }
    }, {
      cN: "title",
      b: /^[\w]+:\s*$/
    }, {
      cN: "phony",
      b: /^\.PHONY:/,
      e: /$/,
      k: ".PHONY",
      l: /[\.\w]+/
    }, {
      b: /^\t+/,
      e: /$/,
      r: 0,
      c: [e.QSM, a]
    }]
  }
});
hljs.registerLanguage("ini", function(e) {
  return {
    cI: !0,
    i: /\S/,
    c: [{
      cN: "comment",
      b: ";",
      e: "$"
    }, {
      cN: "title",
      b: "^\\[",
      e: "\\]"
    }, {
      cN: "setting",
      b: "^[a-z0-9\\[\\]_-]+[ \\t]*=[ \\t]*",
      e: "$",
      c: [{
        cN: "value",
        eW: !0,
        k: "on off true false yes no",
        c: [e.QSM, e.NM],
        r: 0
      }]
    }]
  }
});
hljs.registerLanguage("less", function(e) {
  var r = "[\\w-]+",
    t = "(" + r + "|@{" + r + "})+",
    a = [],
    c = [],
    n = function(e) {
      return {
        cN: "string",
        b: "~?" + e + ".*?" + e
      }
    },
    i = function(e, r, t) {
      return {
        cN: e,
        b: r,
        r: t
      }
    },
    s = function(r, t, a) {
      return e.inherit({
        cN: r,
        b: t + "\\(",
        e: "\\(",
        rB: !0,
        eE: !0,
        r: 0
      }, a)
    },
    b = {
      b: "\\(",
      e: "\\)",
      c: c,
      r: 0
    };
  c.push(e.CLCM, e.CBCM, n("'"), n('"'), e.CSSNM, i("hexcolor", "#[0-9A-Fa-f]+\\b"), s("function", "(url|data-uri)", {
    starts: {
      cN: "string",
      e: "[\\)\\n]",
      eE: !0
    }
  }), s("function", r), b, i("variable", "@@?" + r, 10), i("variable", "@{" + r + "}"), i("built_in", "~?`[^`]*?`"), {
    cN: "attribute",
    b: r + "\\s*:",
    e: ":",
    rB: !0,
    eE: !0
  });
  var o = c.concat({
      b: "{",
      e: "}",
      c: a
    }),
    u = {
      bK: "when",
      eW: !0,
      c: [{
        bK: "and not"
      }].concat(c)
    },
    C = {
      cN: "attribute",
      b: t,
      e: ":",
      eE: !0,
      c: [e.CLCM, e.CBCM],
      i: /\S/,
      starts: {
        e: "[;}]",
        rE: !0,
        c: c,
        i: "[<=$]"
      }
    },
    l = {
      cN: "at_rule",
      b: "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
      starts: {
        e: "[;{}]",
        rE: !0,
        c: c,
        r: 0
      }
    },
    d = {
      cN: "variable",
      v: [{
        b: "@" + r + "\\s*:",
        r: 15
      }, {
        b: "@" + r
      }],
      starts: {
        e: "[;}]",
        rE: !0,
        c: o
      }
    },
    p = {
      v: [{
        b: "[\\.#:&\\[]",
        e: "[;{}]"
      }, {
        b: t + "[^;]*{",
        e: "{"
      }],
      rB: !0,
      rE: !0,
      i: "[<='$\"]",
      c: [e.CLCM, e.CBCM, u, i("keyword", "all\\b"), i("variable", "@{" + r + "}"), i("tag", t + "%?", 0), i("id", "#" + t), i("class", "\\." + t, 0), i("keyword", "&", 0), s("pseudo", ":not"), s("keyword", ":extend"), i("pseudo", "::?" + t), {
        cN: "attr_selector",
        b: "\\[",
        e: "\\]"
      }, {
        b: "\\(",
        e: "\\)",
        c: o
      }, {
        b: "!important"
      }]
    };
  return a.push(e.CLCM, e.CBCM, l, d, p, C), {
    cI: !0,
    i: "[=>'/<($\"]",
    c: a
  }
});