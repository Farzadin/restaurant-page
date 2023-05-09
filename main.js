(() => {
  "use strict";
  var n = {
      426: (n, r, e) => {
        e.d(r, { Z: () => i });
        var t = e(537),
          A = e.n(t),
          o = e(645),
          a = e.n(o)()(A());
        a.push([
          n.id,
          ':root {\r\n  --blue: #1a59c8;\r\n  --grey: #666;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n*::selection {\r\n  background: var(--blue);\r\n  color: #fff;\r\n}\r\n\r\nhtml {\r\n  font-size: 62.5%;\r\n}\r\n\r\nbody,\r\nhtml {\r\n  font-family: "Nunito Sans", sans-serif;\r\n}\r\n\r\nul,\r\nli {\r\n  list-style: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\nbody {\r\n  background: #f7f7f7;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 48px;\r\n}\r\n\r\n/* Header */\r\n\r\nheader {\r\n  padding: 2rem 9%;\r\n  width: 100%;\r\n  background-color: #fff;\r\n\r\n  display: flex;\r\n  gap: 8px;\r\n  flex-direction: column;\r\n  place-items: center;\r\n  justify-content: center;\r\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.tabs {\r\n  display: flex;\r\n  place-content: center;\r\n  place-items: center;\r\n  gap: 16px;\r\n}\r\n\r\n.tabs li {\r\n  cursor: pointer;\r\n  font-size: 2rem;\r\n  color: var(--grey);\r\n}\r\n\r\n.tabs li:hover {\r\n  color: var(--blue);\r\n}\r\n\r\nheader h1 {\r\n  text-align: center;\r\n  font-size: 3.5rem;\r\n  color: #333;\r\n}\r\n/* Header ends */\r\n\r\n/*  Home Content */\r\n\r\n#content {\r\n  padding: 2rem 9%;\r\n\r\n  display: flex;\r\n  flex: wrap;\r\n  gap: 1.5rem;\r\n}\r\n\r\n#content .home {\r\n  display: flex;\r\n  place-items: center;\r\n  place-content: center;\r\n  flex: 1 1 40rem;\r\n  padding: 3rem;\r\n}\r\n\r\n.home .image {\r\n  flex: 1 1 170rem;\r\n}\r\n\r\n.home img {\r\n  width: 100%;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.home h2 {\r\n  font-size: 4.5rem;\r\n  color: #333;\r\n}\r\n\r\n.home p {\r\n  font-size: 1.7rem;\r\n  color: #666;\r\n  padding: 1rem 0;\r\n  width: 70%;\r\n}\r\n\r\n.love {\r\n  background-image: linear-gradient(90deg, #7209d4, #2832d4 33%, #00a5b2);\r\n  background-clip: text;\r\n  -webkit-background-clip: text;\r\n  color: transparent;\r\n}\r\n\r\n.btn {\r\n  display: inline-block;\r\n  padding: 0.8rem 3rem;\r\n  border: 0.2rem solid var(--blue);\r\n  color: var(--blue);\r\n  font-size: 1.7rem;\r\n  border-radius: 0.5rem;\r\n  position: relative;\r\n  overflow: hidden;\r\n  z-index: 0;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.btn::before {\r\n  content: "";\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  width: 0%;\r\n  height: 100%;\r\n  background-color: var(--blue);\r\n  transition: 0.3s linear;\r\n  z-index: -1;\r\n}\r\n\r\n.btn:hover::before {\r\n  width: 100%;\r\n  left: 0;\r\n}\r\n\r\n.btn:hover {\r\n  color: #fff;\r\n}\r\n\r\n/* Home Ends */\r\n\r\n/* menu */\r\n\r\n.menu {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.menu__title {\r\n  text-align: center;\r\n  font-size: 3rem;\r\n  padding: 2rem;\r\n  border-bottom: 1px solid grey;\r\n  width: 80%;\r\n  max-width: 750px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.menu__item {\r\n  padding: 2rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  place-items: center;\r\n  gap: 1.6rem;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.menu__item p {\r\n  font-size: 1.6rem;\r\n  color: #666;\r\n}\r\n\r\n.menu__item h3 {\r\n  font-size: 2rem;\r\n}\r\n\r\n.menu__item img {\r\n  border-radius: 1rem;\r\n}\r\n\r\n.price {\r\n  font-size: 1.6rem;\r\n  font-weight: bold;\r\n  color: #333;\r\n}\r\n\r\n/* menu ends */\r\n\r\n/* contact */\r\n\r\n.container {\r\n  margin: 0 auto;\r\n  padding: 5rem;\r\n}\r\n\r\n.contact {\r\n  margin: 0 auto;\r\n  padding: 4rem;\r\n\r\n  width: 80%;\r\n  max-width: 750%;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n.contact__title {\r\n  font-size: 2.4rem;\r\n}\r\n\r\n.contact img {\r\n  margin: 0 auto;\r\n  width: 100%;\r\n  border-radius: 2rem;\r\n}\r\n\r\n.contact p {\r\n  font-size: 1.6rem;\r\n  color: #666;\r\n}\r\n\r\n.contact p span {\r\n  font-weight: bold;\r\n  font-size: 1.6rem;\r\n  color: #333;\r\n}\r\n',
          "",
          {
            version: 3,
            sources: ["webpack://./src/style.css"],
            names: [],
            mappings:
              "AAAA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;EAEE,sCAAsC;AACxC;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA,WAAW;;AAEX;EACE,gBAAgB;EAChB,WAAW;EACX,sBAAsB;;EAEtB,aAAa;EACb,QAAQ;EACR,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,4CAA4C;AAC9C;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,WAAW;AACb;AACA,gBAAgB;;AAEhB,kBAAkB;;AAElB;EACE,gBAAgB;;EAEhB,aAAa;EACb,UAAU;EACV,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,eAAe;EACf,aAAa;AACf;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,uEAAuE;EACvE,qBAAqB;EACrB,6BAA6B;EAC7B,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,oBAAoB;EACpB,gCAAgC;EAChC,kBAAkB;EAClB,iBAAiB;EACjB,qBAAqB;EACrB,kBAAkB;EAClB,gBAAgB;EAChB,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,SAAS;EACT,YAAY;EACZ,6BAA6B;EAC7B,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,WAAW;EACX,OAAO;AACT;;AAEA;EACE,WAAW;AACb;;AAEA,cAAc;;AAEd,SAAS;;AAET;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,6BAA6B;EAC7B,UAAU;EACV,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,WAAW;AACb;;AAEA,cAAc;;AAEd,YAAY;;AAEZ;EACE,cAAc;EACd,aAAa;AACf;;AAEA;EACE,cAAc;EACd,aAAa;;EAEb,UAAU;EACV,eAAe;;EAEf,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,WAAW;AACb",
            sourcesContent: [
              ':root {\r\n  --blue: #1a59c8;\r\n  --grey: #666;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n*::selection {\r\n  background: var(--blue);\r\n  color: #fff;\r\n}\r\n\r\nhtml {\r\n  font-size: 62.5%;\r\n}\r\n\r\nbody,\r\nhtml {\r\n  font-family: "Nunito Sans", sans-serif;\r\n}\r\n\r\nul,\r\nli {\r\n  list-style: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\nbody {\r\n  background: #f7f7f7;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 48px;\r\n}\r\n\r\n/* Header */\r\n\r\nheader {\r\n  padding: 2rem 9%;\r\n  width: 100%;\r\n  background-color: #fff;\r\n\r\n  display: flex;\r\n  gap: 8px;\r\n  flex-direction: column;\r\n  place-items: center;\r\n  justify-content: center;\r\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.tabs {\r\n  display: flex;\r\n  place-content: center;\r\n  place-items: center;\r\n  gap: 16px;\r\n}\r\n\r\n.tabs li {\r\n  cursor: pointer;\r\n  font-size: 2rem;\r\n  color: var(--grey);\r\n}\r\n\r\n.tabs li:hover {\r\n  color: var(--blue);\r\n}\r\n\r\nheader h1 {\r\n  text-align: center;\r\n  font-size: 3.5rem;\r\n  color: #333;\r\n}\r\n/* Header ends */\r\n\r\n/*  Home Content */\r\n\r\n#content {\r\n  padding: 2rem 9%;\r\n\r\n  display: flex;\r\n  flex: wrap;\r\n  gap: 1.5rem;\r\n}\r\n\r\n#content .home {\r\n  display: flex;\r\n  place-items: center;\r\n  place-content: center;\r\n  flex: 1 1 40rem;\r\n  padding: 3rem;\r\n}\r\n\r\n.home .image {\r\n  flex: 1 1 170rem;\r\n}\r\n\r\n.home img {\r\n  width: 100%;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.home h2 {\r\n  font-size: 4.5rem;\r\n  color: #333;\r\n}\r\n\r\n.home p {\r\n  font-size: 1.7rem;\r\n  color: #666;\r\n  padding: 1rem 0;\r\n  width: 70%;\r\n}\r\n\r\n.love {\r\n  background-image: linear-gradient(90deg, #7209d4, #2832d4 33%, #00a5b2);\r\n  background-clip: text;\r\n  -webkit-background-clip: text;\r\n  color: transparent;\r\n}\r\n\r\n.btn {\r\n  display: inline-block;\r\n  padding: 0.8rem 3rem;\r\n  border: 0.2rem solid var(--blue);\r\n  color: var(--blue);\r\n  font-size: 1.7rem;\r\n  border-radius: 0.5rem;\r\n  position: relative;\r\n  overflow: hidden;\r\n  z-index: 0;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.btn::before {\r\n  content: "";\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  width: 0%;\r\n  height: 100%;\r\n  background-color: var(--blue);\r\n  transition: 0.3s linear;\r\n  z-index: -1;\r\n}\r\n\r\n.btn:hover::before {\r\n  width: 100%;\r\n  left: 0;\r\n}\r\n\r\n.btn:hover {\r\n  color: #fff;\r\n}\r\n\r\n/* Home Ends */\r\n\r\n/* menu */\r\n\r\n.menu {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.menu__title {\r\n  text-align: center;\r\n  font-size: 3rem;\r\n  padding: 2rem;\r\n  border-bottom: 1px solid grey;\r\n  width: 80%;\r\n  max-width: 750px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.menu__item {\r\n  padding: 2rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  place-items: center;\r\n  gap: 1.6rem;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.menu__item p {\r\n  font-size: 1.6rem;\r\n  color: #666;\r\n}\r\n\r\n.menu__item h3 {\r\n  font-size: 2rem;\r\n}\r\n\r\n.menu__item img {\r\n  border-radius: 1rem;\r\n}\r\n\r\n.price {\r\n  font-size: 1.6rem;\r\n  font-weight: bold;\r\n  color: #333;\r\n}\r\n\r\n/* menu ends */\r\n\r\n/* contact */\r\n\r\n.container {\r\n  margin: 0 auto;\r\n  padding: 5rem;\r\n}\r\n\r\n.contact {\r\n  margin: 0 auto;\r\n  padding: 4rem;\r\n\r\n  width: 80%;\r\n  max-width: 750%;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n.contact__title {\r\n  font-size: 2.4rem;\r\n}\r\n\r\n.contact img {\r\n  margin: 0 auto;\r\n  width: 100%;\r\n  border-radius: 2rem;\r\n}\r\n\r\n.contact p {\r\n  font-size: 1.6rem;\r\n  color: #666;\r\n}\r\n\r\n.contact p span {\r\n  font-weight: bold;\r\n  font-size: 1.6rem;\r\n  color: #333;\r\n}\r\n',
            ],
            sourceRoot: "",
          },
        ]);
        const i = a;
      },
      645: (n) => {
        n.exports = function (n) {
          var r = [];
          return (
            (r.toString = function () {
              return this.map(function (r) {
                var e = "",
                  t = void 0 !== r[5];
                return (
                  r[4] && (e += "@supports (".concat(r[4], ") {")),
                  r[2] && (e += "@media ".concat(r[2], " {")),
                  t &&
                    (e += "@layer".concat(
                      r[5].length > 0 ? " ".concat(r[5]) : "",
                      " {"
                    )),
                  (e += n(r)),
                  t && (e += "}"),
                  r[2] && (e += "}"),
                  r[4] && (e += "}"),
                  e
                );
              }).join("");
            }),
            (r.i = function (n, e, t, A, o) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var a = {};
              if (t)
                for (var i = 0; i < this.length; i++) {
                  var c = this[i][0];
                  null != c && (a[c] = !0);
                }
              for (var s = 0; s < n.length; s++) {
                var l = [].concat(n[s]);
                (t && a[l[0]]) ||
                  (void 0 !== o &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = o)),
                  e &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = e))
                      : (l[2] = e)),
                  A &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = A))
                      : (l[4] = "".concat(A))),
                  r.push(l));
              }
            }),
            r
          );
        };
      },
      537: (n) => {
        n.exports = function (n) {
          var r = n[1],
            e = n[3];
          if (!e) return r;
          if ("function" == typeof btoa) {
            var t = btoa(unescape(encodeURIComponent(JSON.stringify(e)))),
              A =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  t
                ),
              o = "/*# ".concat(A, " */");
            return [r].concat([o]).join("\n");
          }
          return [r].join("\n");
        };
      },
      379: (n) => {
        var r = [];
        function e(n) {
          for (var e = -1, t = 0; t < r.length; t++)
            if (r[t].identifier === n) {
              e = t;
              break;
            }
          return e;
        }
        function t(n, t) {
          for (var o = {}, a = [], i = 0; i < n.length; i++) {
            var c = n[i],
              s = t.base ? c[0] + t.base : c[0],
              l = o[s] || 0,
              d = "".concat(s, " ").concat(l);
            o[s] = l + 1;
            var m = e(d),
              p = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== m) r[m].references++, r[m].updater(p);
            else {
              var u = A(p, t);
              (t.byIndex = i),
                r.splice(i, 0, { identifier: d, updater: u, references: 1 });
            }
            a.push(d);
          }
          return a;
        }
        function A(n, r) {
          var e = r.domAPI(r);
          return (
            e.update(n),
            function (r) {
              if (r) {
                if (
                  r.css === n.css &&
                  r.media === n.media &&
                  r.sourceMap === n.sourceMap &&
                  r.supports === n.supports &&
                  r.layer === n.layer
                )
                  return;
                e.update((n = r));
              } else e.remove();
            }
          );
        }
        n.exports = function (n, A) {
          var o = t((n = n || []), (A = A || {}));
          return function (n) {
            n = n || [];
            for (var a = 0; a < o.length; a++) {
              var i = e(o[a]);
              r[i].references--;
            }
            for (var c = t(n, A), s = 0; s < o.length; s++) {
              var l = e(o[s]);
              0 === r[l].references && (r[l].updater(), r.splice(l, 1));
            }
            o = c;
          };
        };
      },
      569: (n) => {
        var r = {};
        n.exports = function (n, e) {
          var t = (function (n) {
            if (void 0 === r[n]) {
              var e = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                e instanceof window.HTMLIFrameElement
              )
                try {
                  e = e.contentDocument.head;
                } catch (n) {
                  e = null;
                }
              r[n] = e;
            }
            return r[n];
          })(n);
          if (!t)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          t.appendChild(e);
        };
      },
      216: (n) => {
        n.exports = function (n) {
          var r = document.createElement("style");
          return n.setAttributes(r, n.attributes), n.insert(r, n.options), r;
        };
      },
      565: (n, r, e) => {
        n.exports = function (n) {
          var r = e.nc;
          r && n.setAttribute("nonce", r);
        };
      },
      795: (n) => {
        n.exports = function (n) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var r = n.insertStyleElement(n);
          return {
            update: function (e) {
              !(function (n, r, e) {
                var t = "";
                e.supports && (t += "@supports (".concat(e.supports, ") {")),
                  e.media && (t += "@media ".concat(e.media, " {"));
                var A = void 0 !== e.layer;
                A &&
                  (t += "@layer".concat(
                    e.layer.length > 0 ? " ".concat(e.layer) : "",
                    " {"
                  )),
                  (t += e.css),
                  A && (t += "}"),
                  e.media && (t += "}"),
                  e.supports && (t += "}");
                var o = e.sourceMap;
                o &&
                  "undefined" != typeof btoa &&
                  (t +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                      " */"
                    )),
                  r.styleTagTransform(t, n, r.options);
              })(r, n, e);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(r);
            },
          };
        };
      },
      589: (n) => {
        n.exports = function (n, r) {
          if (r.styleSheet) r.styleSheet.cssText = n;
          else {
            for (; r.firstChild; ) r.removeChild(r.firstChild);
            r.appendChild(document.createTextNode(n));
          }
        };
      },
    },
    r = {};
  function e(t) {
    var A = r[t];
    if (void 0 !== A) return A.exports;
    var o = (r[t] = { id: t, exports: {} });
    return n[t](o, o.exports, e), o.exports;
  }
  (e.n = (n) => {
    var r = n && n.__esModule ? () => n.default : () => n;
    return e.d(r, { a: r }), r;
  }),
    (e.d = (n, r) => {
      for (var t in r)
        e.o(r, t) &&
          !e.o(n, t) &&
          Object.defineProperty(n, t, { enumerable: !0, get: r[t] });
    }),
    (e.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (n) {
        if ("object" == typeof window) return window;
      }
    })()),
    (e.o = (n, r) => Object.prototype.hasOwnProperty.call(n, r)),
    (() => {
      var n;
      e.g.importScripts && (n = e.g.location + "");
      var r = e.g.document;
      if (!n && r && (r.currentScript && (n = r.currentScript.src), !n)) {
        var t = r.getElementsByTagName("script");
        if (t.length) for (var A = t.length - 1; A > -1 && !n; ) n = t[A--].src;
      }
      if (!n)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (n = n
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (e.p = n);
    })(),
    (e.nc = void 0),
    (() => {
      var n = e(379),
        r = e.n(n),
        t = e(795),
        A = e.n(t),
        o = e(569),
        a = e.n(o),
        i = e(565),
        c = e.n(i),
        s = e(216),
        l = e.n(s),
        d = e(589),
        m = e.n(d),
        p = e(426),
        u = {};
      (u.styleTagTransform = m()),
        (u.setAttributes = c()),
        (u.insert = a().bind(null, "head")),
        (u.domAPI = A()),
        (u.insertStyleElement = l()),
        r()(p.Z, u),
        p.Z && p.Z.locals && p.Z.locals;
      const E = e.p + "1c0f6852e04f794e84174c2b78779b8f.png",
        f = e.p + "8e56f497909fab398b9f769f83286bef.jpg";
      function C() {
        document.getElementById("content").innerHTML =
          "\n  <section class='home'>\n\n    <div class='welcome'>\n      <h2>food <em class='love'>made with love</em></h2>\n      <p>\n        Indulge your taste buds with our mouth-watering dishes prepared by our\n        talented chefs. Our restaurant offers an intimate and comfortable\n        atmosphere where you can enjoy a memorable dining experience with your\n        friends and family.\n      </p>\n      <a href=\"#\" class='btn'>order now</a>\n    </div>\n\n    <div class='image'>\n      <img src='".concat(
            f,
            "' />\n    </div>\n\n  </section>\n  "
          );
      }
      const B = e.p + "702650edce476103d9271babd7b3e4df.jpg",
        g = e.p + "094254193590e5cf4b47d6f920e533e3.jpg";
      window.addEventListener("DOMContentLoaded", function () {
        var n = document.body,
          r = document.createElement("header"),
          e = document.createElement("h1");
        e.textContent = "Saffron Kitchen";
        var t = document.createElement("nav"),
          A = document.createElement("ul");
        A.classList.add("tabs");
        var o = document.createElement("li"),
          a = document.createElement("li"),
          i = document.createElement("li");
        o.classList.add("active"),
          (o.textContent = "Home"),
          (a.textContent = "Menu"),
          (i.textContent = "Contact"),
          A.appendChild(o),
          A.appendChild(a),
          A.appendChild(i),
          t.appendChild(A),
          r.appendChild(e),
          r.appendChild(t),
          n.append(r);
        var c = n.children[0],
          s = n.children[1];
        n.insertBefore(s, c);
        var l = document.querySelectorAll(".tabs li");
        l.forEach(function (n, r) {
          n.addEventListener("click", function () {
            switch (
              (l.forEach(function (n) {
                n.classList.remove("active");
              }),
              n.classList.add("active"),
              r)
            ) {
              case 0:
                C();
                break;
              case 1:
                document.getElementById("content").innerHTML =
                  "\n\t<div class='menu'>\n\t\t<h2 class='menu__title'>Menu</h2>\n\t\t<ul class='menu__items'>\n\t\t\t<li class='menu__item item'>\n\t\t\t\t<img src=\""
                    .concat(
                      B,
                      '" width="30%" class=\'joj food\'>\n\t\t\t\t<h3>جوجه کباب</h3>\n\t\t\t\t<p><span class="price">تومان</span>\n\t\t\t\t50,000</p>\n\t\t\t</li>\n\t\t\t<li class=\'menu__item item\'>\n\t\t\t\t<img src="'
                    )
                    .concat(
                      g,
                      "\" width='30%' class='kob food'>\n\t\t\t\t<h3>چلو کباب کوبیده</h3>\n\t\t\t\t<p><span class=\"price\">تومان</span>\n\t\t\t\t60,000 </p>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n  "
                    );
                break;
              case 2:
                document.getElementById("content").innerHTML =
                  "\n  <div class=\"container\">\n    <div class='contact'>\n      <h2 class='contact__title'>contact</h2>\n      <p><span>Service options</span>: Dine-in · Takeaway</p>\n      <p><span>Address</span>: Tehran Province, Tehran, ranjbar, N Felestin St, PC74+R2R</p>\n      <img src=\"".concat(
                    E,
                    '" />\n    </div>\n  </div>\n  '
                  );
            }
          });
        }),
          C();
      });
    })();
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUdYbEYsR0FDTixLQUFLLEVBQ0hzRSxJQUNBLE1BQ0YsS0FBSyxFQ2pFSzdELFNBQVM4RCxlQUFlLFdBRWhDQyxVQUFZLHVKQUFIeEgsT0FLSDhJLEVBQUcseU1BQUE5SSxPQU1IK0ksRUFBRyxnTERzRFQsTUFDRixLQUFLLEVFckVLdEYsU0FBUzhELGVBQWUsV0FFaENDLFVBQVksMFJBQUh4SCxPQU1EOEcsRUFBUSxrQ0ZpRXRCLEdBQ0YsSUFDQVEsR0FDRixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9jYXRpb24ucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9yZXN0YXVyYW50LmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZm9vZDIuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9mb29kMS5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAtLWJsdWU6ICMxYTU5Yzg7XFxyXFxuICAtLWdyZXk6ICM2NjY7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbio6OnNlbGVjdGlvbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxyXFxufVxcclxcblxcclxcbmJvZHksXFxyXFxuaHRtbCB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk51bml0byBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxudWwsXFxyXFxubGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiA0OHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIZWFkZXIgKi9cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgcGFkZGluZzogMnJlbSA5JTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDhweDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi50YWJzIGxpIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ncmV5KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYnMgbGk6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgaDEge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAzLjVyZW07XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG59XFxyXFxuLyogSGVhZGVyIGVuZHMgKi9cXHJcXG5cXHJcXG4vKiAgSG9tZSBDb250ZW50ICovXFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgcGFkZGluZzogMnJlbSA5JTtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4OiB3cmFwO1xcclxcbiAgZ2FwOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IC5ob21lIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleDogMSAxIDQwcmVtO1xcclxcbiAgcGFkZGluZzogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUgLmltYWdlIHtcXHJcXG4gIGZsZXg6IDEgMSAxNzByZW07XFxyXFxufVxcclxcblxcclxcbi5ob21lIGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5ob21lIGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogNC41cmVtO1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxufVxcclxcblxcclxcbi5ob21lIHAge1xcclxcbiAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxuICBjb2xvcjogIzY2NjtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxufVxcclxcblxcclxcbi5sb3ZlIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzcyMDlkNCwgIzI4MzJkNCAzMyUsICMwMGE1YjIpO1xcclxcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxyXFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcGFkZGluZzogMC44cmVtIDNyZW07XFxyXFxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCB2YXIoLS1ibHVlKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHotaW5kZXg6IDA7XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHdpZHRoOiAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcyBsaW5lYXI7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjpob3Zlcjo6YmVmb3JlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjpob3ZlciB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLyogSG9tZSBFbmRzICovXFxyXFxuXFxyXFxuLyogbWVudSAqL1xcclxcblxcclxcbi5tZW51IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9fdGl0bGUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIG1heC13aWR0aDogNzUwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfX2l0ZW0ge1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMS42cmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfX2l0ZW0gcCB7XFxyXFxuICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gIGNvbG9yOiAjNjY2O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9faXRlbSBoMyB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51X19pdGVtIGltZyB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpY2Uge1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBtZW51IGVuZHMgKi9cXHJcXG5cXHJcXG4vKiBjb250YWN0ICovXFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHBhZGRpbmc6IDVyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0IHtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgcGFkZGluZzogNHJlbTtcXHJcXG5cXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXgtd2lkdGg6IDc1MCU7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RfX3RpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi40cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCBpbWcge1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0IHAge1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBjb2xvcjogIzY2NjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QgcCBzcGFuIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsc0NBQXNDO0FBQ3hDOztBQUVBOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQSxXQUFXOztBQUVYO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxzQkFBc0I7O0VBRXRCLGFBQWE7RUFDYixRQUFRO0VBQ1Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjtBQUNBLGdCQUFnQjs7QUFFaEIsa0JBQWtCOztBQUVsQjtFQUNFLGdCQUFnQjs7RUFFaEIsYUFBYTtFQUNiLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSx1RUFBdUU7RUFDdkUscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUEsY0FBYzs7QUFFZCxTQUFTOztBQUVUO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUEsY0FBYzs7QUFFZCxZQUFZOztBQUVaO0VBQ0UsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhOztFQUViLFVBQVU7RUFDVixlQUFlOztFQUVmLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS1ibHVlOiAjMWE1OWM4O1xcclxcbiAgLS1ncmV5OiAjNjY2O1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4qOjpzZWxlY3Rpb24ge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZSk7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBmb250LXNpemU6IDYyLjUlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LFxcclxcbmh0bWwge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJOdW5pdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbnVsLFxcclxcbmxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogNDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogSGVhZGVyICovXFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIHBhZGRpbmc6IDJyZW0gOSU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA4cHg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbi50YWJzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFicyBsaSB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tZ3JleSk7XFxyXFxufVxcclxcblxcclxcbi50YWJzIGxpOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGgxIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxufVxcclxcbi8qIEhlYWRlciBlbmRzICovXFxyXFxuXFxyXFxuLyogIEhvbWUgQ29udGVudCAqL1xcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gIHBhZGRpbmc6IDJyZW0gOSU7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleDogd3JhcDtcXHJcXG4gIGdhcDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCAuaG9tZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZsZXg6IDEgMSA0MHJlbTtcXHJcXG4gIHBhZGRpbmc6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5ob21lIC5pbWFnZSB7XFxyXFxuICBmbGV4OiAxIDEgMTcwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSBpbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSBoMiB7XFxyXFxuICBmb250LXNpemU6IDQuNXJlbTtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbiAgY29sb3I6ICM2NjY7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubG92ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM3MjA5ZDQsICMyODMyZDQgMzMlLCAjMDBhNWIyKTtcXHJcXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXHJcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBhZGRpbmc6IDAuOHJlbSAzcmVtO1xcclxcbiAgYm9yZGVyOiAwLjJyZW0gc29saWQgdmFyKC0tYmx1ZSk7XFxyXFxuICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxyXFxuICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB6LWluZGV4OiAwO1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB3aWR0aDogMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3MgbGluZWFyO1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxufVxcclxcblxcclxcbi5idG46aG92ZXI6OmJlZm9yZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5idG46aG92ZXIge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi8qIEhvbWUgRW5kcyAqL1xcclxcblxcclxcbi8qIG1lbnUgKi9cXHJcXG5cXHJcXG4ubWVudSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfX3RpdGxlIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXgtd2lkdGg6IDc1MHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5tZW51X19pdGVtIHtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEuNnJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51X19pdGVtIHAge1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBjb2xvcjogIzY2NjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfX2l0ZW0gaDMge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9faXRlbSBpbWcge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaWNlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLyogbWVudSBlbmRzICovXFxyXFxuXFxyXFxuLyogY29udGFjdCAqL1xcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBwYWRkaW5nOiA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCB7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHBhZGRpbmc6IDRyZW07XFxyXFxuXFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgbWF4LXdpZHRoOiA3NTAlO1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0X190aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDIuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QgaW1nIHtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgY29sb3I6ICM2NjY7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0IHAgc3BhbiB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIxYzBmNjg1MmUwNGY3OTRlODQxNzRjMmI3ODc3OWI4Zi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOGU1NmY0OTc5MDlmYWIzOThiOWY3NjlmODMyODZiZWYuanBnXCI7IiwiaW1wb3J0IHJlc3RhdXJhbnQgZnJvbSBcIi4vcmVzdGF1cmFudC5qcGdcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkSG9tZUNvbnRlbnQoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuICBjb250ZW50LmlubmVySFRNTCA9IGBcclxuICA8c2VjdGlvbiBjbGFzcz0naG9tZSc+XHJcblxyXG4gICAgPGRpdiBjbGFzcz0nd2VsY29tZSc+XHJcbiAgICAgIDxoMj5mb29kIDxlbSBjbGFzcz0nbG92ZSc+bWFkZSB3aXRoIGxvdmU8L2VtPjwvaDI+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIEluZHVsZ2UgeW91ciB0YXN0ZSBidWRzIHdpdGggb3VyIG1vdXRoLXdhdGVyaW5nIGRpc2hlcyBwcmVwYXJlZCBieSBvdXJcclxuICAgICAgICB0YWxlbnRlZCBjaGVmcy4gT3VyIHJlc3RhdXJhbnQgb2ZmZXJzIGFuIGludGltYXRlIGFuZCBjb21mb3J0YWJsZVxyXG4gICAgICAgIGF0bW9zcGhlcmUgd2hlcmUgeW91IGNhbiBlbmpveSBhIG1lbW9yYWJsZSBkaW5pbmcgZXhwZXJpZW5jZSB3aXRoIHlvdXJcclxuICAgICAgICBmcmllbmRzIGFuZCBmYW1pbHkuXHJcbiAgICAgIDwvcD5cclxuICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz0nYnRuJz5vcmRlciBub3c8L2E+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPSdpbWFnZSc+XHJcbiAgICAgIDxpbWcgc3JjPScke3Jlc3RhdXJhbnR9JyAvPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIDwvc2VjdGlvbj5cclxuICBgO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3MDI2NTBlZGNlNDc2MTAzZDkyNzFiYWJkN2IzZTRkZi5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMDk0MjU0MTkzNTkwZTVjZjRiNDdkNmY5MjBlNTMzZTMuanBnXCI7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHsgaGFuZGxlUGFnZU9uTG9hZCB9IGZyb20gXCIuL3BhZ2UtbG9hZC5qc1wiO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGhhbmRsZVBhZ2VPbkxvYWQpO1xyXG4iLCJpbXBvcnQgeyBsb2FkQ29udGFjdENvbnRlbnQgfSBmcm9tIFwiLi9jb250YWN0LmpzXCI7XHJcbmltcG9ydCB7IGxvYWRIb21lQ29udGVudCB9IGZyb20gXCIuL2hvbWUuanNcIjtcclxuaW1wb3J0IHsgbG9hZE1lbnVDb250ZW50IH0gZnJvbSBcIi4vbWVudS5qc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVBhZ2VPbkxvYWQoKSB7XHJcbiAgLy8gZ2V0IHJlZmVyZW5jZSBvZiBib2R5XHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XHJcblxyXG4gIC8vIGNyZWF0ZSBIZWFkZXIgRWxlbWVudFxyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcblxyXG4gIC8vIGNyZWF0ZSBoMiBFbGVtZW50XHJcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgaDEudGV4dENvbnRlbnQgPSBcIlNhZmZyb24gS2l0Y2hlblwiO1xyXG5cclxuICAvLyBjcmVhdGUgbmF2IGVsZW1lbnRcclxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG5cclxuICAvLyBjcmVhdGUgVW5PcmRlcmVkIGxpc3QgRWxlbWVudCAoVGFicylcclxuICBjb25zdCB0YWJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gIHRhYnMuY2xhc3NMaXN0LmFkZChcInRhYnNcIik7XHJcblxyXG4gIC8vIGNyZWF0ZSBsaXN0IGl0ZW1zXHJcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcblxyXG4gIC8vIGFkZCBjb250ZW50IGFuZCBhdHRyaWJ1dGUgdG8gbGlzdCBpdGVtc1xyXG4gIGhvbWUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBob21lLnRleHRDb250ZW50ID0gXCJIb21lXCI7XHJcbiAgbWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG4gIGNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcclxuXHJcbiAgLy8gQXBwZW5kIGxpIGVsZW1lbnRzIGludG8gdG8gdWwgZWxlbWVudFxyXG4gIHRhYnMuYXBwZW5kQ2hpbGQoaG9tZSk7XHJcbiAgdGFicy5hcHBlbmRDaGlsZChtZW51KTtcclxuICB0YWJzLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xyXG5cclxuICAvLyBhcHBlbmQgVGFicyAobGlzdCkgaW50byBuYXYgZWxlbWVudFxyXG4gIG5hdi5hcHBlbmRDaGlsZCh0YWJzKTtcclxuXHJcbiAgLy8gSGVhZGVyXHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGgxKTtcclxuICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcclxuICBib2R5LmFwcGVuZChoZWFkZXIpO1xyXG5cclxuICAvLyBhcHBlbmQgbmF2IGVsZW1lbnQgaW50byBib2R5IGVsZW1lbnRcclxuXHJcbiAgLy8gcmVwbGFjZSB0aGUgcG9zaXRpb24gb2YgdGhlIGNoaWxkcmVuIG9mIGJvZHkgZWxlbWVudFxyXG4gIGNvbnN0IGNoaWxkMSA9IGJvZHkuY2hpbGRyZW5bMF07IC8vIHVsLnRhYnNcclxuICBjb25zdCBjaGlsZDIgPSBib2R5LmNoaWxkcmVuWzFdOyAvLyBkaXYjY29udGVudFxyXG4gIGJvZHkuaW5zZXJ0QmVmb3JlKGNoaWxkMiwgY2hpbGQxKTtcclxuXHJcbiAgLy8gQXR0YWNoIGEgY2xpY2sgZXZlbnQgbGlzdGVuZXIgdG8gZWFjaCB0YWJcclxuICBjb25zdCB0YWJJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFicyBsaVwiKTtcclxuICB0YWJJdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0YWJJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vICBBZGQgdGhlIFwiYWN0aXZlXCIgY2xhc3MgdG8gdGhlIGNsaWNrZWQgaXRlbVxyXG4gICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgICAvLyBVcGRhdGUgdGhlIHRhYiBjb250ZW50IGJhc2VkIG9uIHRoZSBjbGlja2VkIHRhYiBoZWFkZXJcclxuICAgICAgc3dpdGNoIChpbmRleCkge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgIGxvYWRIb21lQ29udGVudCgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgbG9hZE1lbnVDb250ZW50KCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICBsb2FkQ29udGFjdENvbnRlbnQoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBsb2FkSG9tZUNvbnRlbnQoKTtcclxufVxyXG4iLCJpbXBvcnQgam9qIGZyb20gXCIuL2Zvb2QyLmpwZ1wiO1xyXG5pbXBvcnQga29iIGZyb20gXCIuL2Zvb2QxLmpwZ1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRNZW51Q29udGVudCgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG5cclxuICBjb250ZW50LmlubmVySFRNTCA9IGBcclxuXHQ8ZGl2IGNsYXNzPSdtZW51Jz5cclxuXHRcdDxoMiBjbGFzcz0nbWVudV9fdGl0bGUnPk1lbnU8L2gyPlxyXG5cdFx0PHVsIGNsYXNzPSdtZW51X19pdGVtcyc+XHJcblx0XHRcdDxsaSBjbGFzcz0nbWVudV9faXRlbSBpdGVtJz5cclxuXHRcdFx0XHQ8aW1nIHNyYz1cIiR7am9qfVwiIHdpZHRoPVwiMzAlXCIgY2xhc3M9J2pvaiBmb29kJz5cclxuXHRcdFx0XHQ8aDM+2KzZiNis2Ycg2qnYqNin2Kg8L2gzPlxyXG5cdFx0XHRcdDxwPjxzcGFuIGNsYXNzPVwicHJpY2VcIj7YqtmI2YXYp9mGPC9zcGFuPlxyXG5cdFx0XHRcdDUwLDAwMDwvcD5cclxuXHRcdFx0PC9saT5cclxuXHRcdFx0PGxpIGNsYXNzPSdtZW51X19pdGVtIGl0ZW0nPlxyXG5cdFx0XHRcdDxpbWcgc3JjPVwiJHtrb2J9XCIgd2lkdGg9JzMwJScgY2xhc3M9J2tvYiBmb29kJz5cclxuXHRcdFx0XHQ8aDM+2obZhNmIINqp2KjYp9ioINqp2YjYqNuM2K/ZhzwvaDM+XHJcblx0XHRcdFx0PHA+PHNwYW4gY2xhc3M9XCJwcmljZVwiPtiq2YjZhdin2YY8L3NwYW4+XHJcblx0XHRcdFx0NjAsMDAwIDwvcD5cclxuXHRcdFx0PC9saT5cclxuXHRcdDwvdWw+XHJcblx0PC9kaXY+XHJcbiAgYDtcclxufVxyXG4iLCJpbXBvcnQgbG9jYXRpb24gZnJvbSBcIi4vbG9jYXRpb24ucG5nXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZENvbnRhY3RDb250ZW50KCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcblxyXG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gYFxyXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9J2NvbnRhY3QnPlxyXG4gICAgICA8aDIgY2xhc3M9J2NvbnRhY3RfX3RpdGxlJz5jb250YWN0PC9oMj5cclxuICAgICAgPHA+PHNwYW4+U2VydmljZSBvcHRpb25zPC9zcGFuPjogRGluZS1pbiDCtyBUYWtlYXdheTwvcD5cclxuICAgICAgPHA+PHNwYW4+QWRkcmVzczwvc3Bhbj46IFRlaHJhbiBQcm92aW5jZSwgVGVocmFuLCByYW5qYmFyLCBOIEZlbGVzdGluIFN0LCBQQzc0K1IyUjwvcD5cclxuICAgICAgPGltZyBzcmM9XCIke2xvY2F0aW9ufVwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICBgO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJfX19DU1NfTE9BREVSX0VYUE9SVF9fXyIsInB1c2giLCJtb2R1bGUiLCJpZCIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwidGhpcyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJfayIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJzdHlsZXNJbkRPTSIsImdldEluZGV4QnlJZGVudGlmaWVyIiwiaWRlbnRpZmllciIsInJlc3VsdCIsIm1vZHVsZXNUb0RvbSIsIm9wdGlvbnMiLCJpZENvdW50TWFwIiwiaWRlbnRpZmllcnMiLCJiYXNlIiwiY291bnQiLCJpbmRleEJ5SWRlbnRpZmllciIsIm9iaiIsImNzcyIsInNvdXJjZU1hcCIsInJlZmVyZW5jZXMiLCJ1cGRhdGVyIiwiYWRkRWxlbWVudFN0eWxlIiwiYnlJbmRleCIsInNwbGljZSIsImFwaSIsImRvbUFQSSIsInVwZGF0ZSIsIm5ld09iaiIsInJlbW92ZSIsImxhc3RJZGVudGlmaWVycyIsIm5ld0xpc3QiLCJpbmRleCIsIm5ld0xhc3RJZGVudGlmaWVycyIsIl9pIiwiX2luZGV4IiwibWVtbyIsImluc2VydCIsInN0eWxlIiwidGFyZ2V0Iiwic3R5bGVUYXJnZXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aW5kb3ciLCJIVE1MSUZyYW1lRWxlbWVudCIsImNvbnRlbnREb2N1bWVudCIsImhlYWQiLCJlIiwiZ2V0VGFyZ2V0IiwiRXJyb3IiLCJhcHBlbmRDaGlsZCIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlcyIsImF0dHJpYnV0ZXMiLCJzdHlsZUVsZW1lbnQiLCJub25jZSIsInNldEF0dHJpYnV0ZSIsImluc2VydFN0eWxlRWxlbWVudCIsInN0eWxlVGFnVHJhbnNmb3JtIiwiYXBwbHkiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJyZW1vdmVTdHlsZUVsZW1lbnQiLCJzdHlsZVNoZWV0IiwiY3NzVGV4dCIsImZpcnN0Q2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJuIiwiZ2V0dGVyIiwiX19lc01vZHVsZSIsImQiLCJhIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJnIiwiZ2xvYmFsVGhpcyIsIkZ1bmN0aW9uIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInNjcmlwdFVybCIsImltcG9ydFNjcmlwdHMiLCJsb2NhdGlvbiIsImN1cnJlbnRTY3JpcHQiLCJzcmMiLCJzY3JpcHRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJyZXBsYWNlIiwicCIsIm5jIiwibG9hZEhvbWVDb250ZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJyZXN0YXVyYW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImJvZHkiLCJoZWFkZXIiLCJoMSIsInRleHRDb250ZW50IiwibmF2IiwidGFicyIsImNsYXNzTGlzdCIsImFkZCIsImhvbWUiLCJtZW51IiwiY29udGFjdCIsImFwcGVuZCIsImNoaWxkMSIsImNoaWxkcmVuIiwiY2hpbGQyIiwiaW5zZXJ0QmVmb3JlIiwidGFiSXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImpvaiIsImtvYiJdLCJzb3VyY2VSb290IjoiIn0=
