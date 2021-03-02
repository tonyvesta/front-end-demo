function stryNS_9fa48() {
  var g = new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});

  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = Number(g.process.env.__STRYKER_ACTIVE_MUTANT__);
  }

  function retrieveNS() {
    return ns;
  }

  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}

stryNS_9fa48();

function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });

  function cover() {
    var c = cov.static;

    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }

    var a = arguments;

    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }

  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}

function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();

  function isActive(id) {
    return ns.activeMutant === id;
  }

  stryMutAct_9fa48 = isActive;
  return isActive(id);
}

/* eslint-env browser */

/* eslint-disable-next-line no-var */
var app = stryMutAct_9fa48(178) ? app && {} : stryMutAct_9fa48(177) ? false : stryMutAct_9fa48(176) ? true : (stryCov_9fa48(176, 177, 178), app || {});

(function () {
  if (stryMutAct_9fa48(179)) {
    {
      'use strict';
    }
  } else {
    stryCov_9fa48(179);
    app.Utils = stryMutAct_9fa48(180) ? {} : (stryCov_9fa48(180), {
      uuid() {
        if (stryMutAct_9fa48(181)) {
          {}
        } else {
          stryCov_9fa48(181);

          /*jshint bitwise:false */
          let i;
          let random;
          let uuid = stryMutAct_9fa48(182) ? "Stryker was here!" : (stryCov_9fa48(182), '');

          for (i = 0; stryMutAct_9fa48(185) ? i >= 32 : stryMutAct_9fa48(184) ? i <= 32 : stryMutAct_9fa48(183) ? false : (stryCov_9fa48(183, 184, 185), i < 32); stryMutAct_9fa48(186) ? i-- : (stryCov_9fa48(186), i++)) {
            if (stryMutAct_9fa48(187)) {
              {}
            } else {
              stryCov_9fa48(187);
              random = (stryMutAct_9fa48(188) ? Math.random() / 16 : (stryCov_9fa48(188), Math.random() * 16)) | 0;

              if (stryMutAct_9fa48(191) ? ((stryMutAct_9fa48(197) ? i === 8 && i === 12 : stryMutAct_9fa48(196) ? false : stryMutAct_9fa48(195) ? true : (stryCov_9fa48(195, 196, 197), (stryMutAct_9fa48(200) ? i !== 8 : stryMutAct_9fa48(199) ? false : stryMutAct_9fa48(198) ? true : (stryCov_9fa48(198, 199, 200), i === 8)) || (stryMutAct_9fa48(203) ? i !== 12 : stryMutAct_9fa48(202) ? false : stryMutAct_9fa48(201) ? true : (stryCov_9fa48(201, 202, 203), i === 12)))) || (stryMutAct_9fa48(206) ? i !== 16 : stryMutAct_9fa48(205) ? false : stryMutAct_9fa48(204) ? true : (stryCov_9fa48(204, 205, 206), i === 16))) && i === 20 : stryMutAct_9fa48(190) ? false : stryMutAct_9fa48(189) ? true : (stryCov_9fa48(189, 190, 191), (stryMutAct_9fa48(194) ? ((stryMutAct_9fa48(200) ? i !== 8 : stryMutAct_9fa48(199) ? false : stryMutAct_9fa48(198) ? true : (stryCov_9fa48(198, 199, 200), i === 8)) || (stryMutAct_9fa48(203) ? i !== 12 : stryMutAct_9fa48(202) ? false : stryMutAct_9fa48(201) ? true : (stryCov_9fa48(201, 202, 203), i === 12))) && i === 16 : stryMutAct_9fa48(193) ? false : stryMutAct_9fa48(192) ? true : (stryCov_9fa48(192, 193, 194), (stryMutAct_9fa48(197) ? i === 8 && i === 12 : stryMutAct_9fa48(196) ? false : stryMutAct_9fa48(195) ? true : (stryCov_9fa48(195, 196, 197), (stryMutAct_9fa48(200) ? i !== 8 : stryMutAct_9fa48(199) ? false : stryMutAct_9fa48(198) ? true : (stryCov_9fa48(198, 199, 200), i === 8)) || (stryMutAct_9fa48(203) ? i !== 12 : stryMutAct_9fa48(202) ? false : stryMutAct_9fa48(201) ? true : (stryCov_9fa48(201, 202, 203), i === 12)))) || (stryMutAct_9fa48(206) ? i !== 16 : stryMutAct_9fa48(205) ? false : stryMutAct_9fa48(204) ? true : (stryCov_9fa48(204, 205, 206), i === 16)))) || (stryMutAct_9fa48(209) ? i !== 20 : stryMutAct_9fa48(208) ? false : stryMutAct_9fa48(207) ? true : (stryCov_9fa48(207, 208, 209), i === 20)))) {
                if (stryMutAct_9fa48(210)) {
                  {}
                } else {
                  stryCov_9fa48(210);
                  uuid += stryMutAct_9fa48(211) ? "" : (stryCov_9fa48(211), '-');
                }
              }

              uuid += ((stryMutAct_9fa48(214) ? i !== 12 : stryMutAct_9fa48(213) ? false : stryMutAct_9fa48(212) ? true : (stryCov_9fa48(212, 213, 214), i === 12)) ? 4 : (stryMutAct_9fa48(217) ? i !== 16 : stryMutAct_9fa48(216) ? false : stryMutAct_9fa48(215) ? true : (stryCov_9fa48(215, 216, 217), i === 16)) ? random & 3 | 8 : random).toString(16);
            }
          }

          return uuid;
        }
      },

      pluralize(count, word) {
        if (stryMutAct_9fa48(218)) {
          {}
        } else {
          stryCov_9fa48(218);
          return (stryMutAct_9fa48(221) ? count !== 1 : stryMutAct_9fa48(220) ? false : stryMutAct_9fa48(219) ? true : (stryCov_9fa48(219, 220, 221), count === 1)) ? word : stryMutAct_9fa48(222) ? `` : (stryCov_9fa48(222), `${word}s`);
        }
      },

      store(namespace, data) {
        if (stryMutAct_9fa48(223)) {
          {}
        } else {
          stryCov_9fa48(223);

          if (stryMutAct_9fa48(225) ? false : stryMutAct_9fa48(224) ? true : (stryCov_9fa48(224, 225), data)) {
            if (stryMutAct_9fa48(226)) {
              {}
            } else {
              stryCov_9fa48(226);
              return localStorage.setItem(namespace, JSON.stringify(data));
            }
          }

          let store = localStorage.getItem(namespace);
          return stryMutAct_9fa48(229) ? store && JSON.parse(store) && [] : stryMutAct_9fa48(228) ? false : stryMutAct_9fa48(227) ? true : (stryCov_9fa48(227, 228, 229), (stryMutAct_9fa48(232) ? store || JSON.parse(store) : stryMutAct_9fa48(231) ? false : stryMutAct_9fa48(230) ? true : (stryCov_9fa48(230, 231, 232), store && JSON.parse(store))) || (stryMutAct_9fa48(233) ? ["Stryker was here"] : (stryCov_9fa48(233), [])));
        }
      },

      extend(...args) {
        if (stryMutAct_9fa48(234)) {
          {}
        } else {
          stryCov_9fa48(234);
          let newObj = {};

          for (let i = 0; stryMutAct_9fa48(237) ? i >= args.length : stryMutAct_9fa48(236) ? i <= args.length : stryMutAct_9fa48(235) ? false : (stryCov_9fa48(235, 236, 237), i < args.length); stryMutAct_9fa48(238) ? i-- : (stryCov_9fa48(238), i++)) {
            if (stryMutAct_9fa48(239)) {
              {}
            } else {
              stryCov_9fa48(239);
              let obj = args[i];

              for (let key in obj) {
                if (stryMutAct_9fa48(240)) {
                  {}
                } else {
                  stryCov_9fa48(240);

                  if (stryMutAct_9fa48(242) ? false : stryMutAct_9fa48(241) ? true : (stryCov_9fa48(241, 242), obj.hasOwnProperty(key))) {
                    if (stryMutAct_9fa48(243)) {
                      {}
                    } else {
                      stryCov_9fa48(243);
                      newObj[key] = obj[key];
                    }
                  }
                }
              }
            }
          }

          return newObj;
        }
      }

    });
  }
})();