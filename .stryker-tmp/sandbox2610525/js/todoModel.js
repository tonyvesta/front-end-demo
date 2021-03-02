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

/* eslint-disable-next-line no-var */
var app = stryMutAct_9fa48(142) ? app && {} : stryMutAct_9fa48(141) ? false : stryMutAct_9fa48(140) ? true : (stryCov_9fa48(140, 141, 142), app || {});

(function () {
  if (stryMutAct_9fa48(143)) {
    {
      'use strict';
    }
  } else {
    stryCov_9fa48(143);
    let Utils = app.Utils; // Generic "model" object. You can use whatever
    // framework you want. For this application it
    // may not even be worth separating this logic
    // out, but we do this to demonstrate one way to
    // separate out parts of your application.

    app.TodoModel = function (key) {
      if (stryMutAct_9fa48(144)) {
        {}
      } else {
        stryCov_9fa48(144);
        this.key = key;
        this.todos = Utils.store(key);
        this.onChanges = stryMutAct_9fa48(145) ? ["Stryker was here"] : (stryCov_9fa48(145), []);
      }
    };

    app.TodoModel.prototype.subscribe = function (onChange) {
      if (stryMutAct_9fa48(146)) {
        {}
      } else {
        stryCov_9fa48(146);
        this.onChanges.push(onChange);
      }
    };

    app.TodoModel.prototype.inform = function () {
      if (stryMutAct_9fa48(147)) {
        {}
      } else {
        stryCov_9fa48(147);
        Utils.store(this.key, this.todos);
        this.onChanges.forEach(function (cb) {
          if (stryMutAct_9fa48(148)) {
            {}
          } else {
            stryCov_9fa48(148);
            cb();
          }
        });
      }
    };

    app.TodoModel.prototype.addTodo = function (title) {
      if (stryMutAct_9fa48(149)) {
        {}
      } else {
        stryCov_9fa48(149);
        this.todos = this.todos.concat(stryMutAct_9fa48(150) ? {} : (stryCov_9fa48(150), {
          id: Utils.uuid(),
          title,
          completed: stryMutAct_9fa48(151) ? true : (stryCov_9fa48(151), false)
        }));
        this.inform();
      }
    };

    app.TodoModel.prototype.toggleAll = function (checked) {
      if (stryMutAct_9fa48(152)) {
        {}
      } else {
        stryCov_9fa48(152);
        // Note: it's usually better to use immutable data structures since they're
        // easier to reason about and React works very well with them. That's why
        // we use map() and filter() everywhere instead of mutating the array or
        // todo items themselves.
        this.todos = this.todos.map(function (todo) {
          if (stryMutAct_9fa48(153)) {
            {}
          } else {
            stryCov_9fa48(153);
            return Utils.extend({}, todo, stryMutAct_9fa48(154) ? {} : (stryCov_9fa48(154), {
              completed: checked
            }));
          }
        });
        this.inform();
      }
    };

    app.TodoModel.prototype.toggle = function (todoToToggle) {
      if (stryMutAct_9fa48(155)) {
        {}
      } else {
        stryCov_9fa48(155);
        this.todos = this.todos.map(function (todo) {
          if (stryMutAct_9fa48(156)) {
            {}
          } else {
            stryCov_9fa48(156);
            return (stryMutAct_9fa48(159) ? todo === todoToToggle : stryMutAct_9fa48(158) ? false : stryMutAct_9fa48(157) ? true : (stryCov_9fa48(157, 158, 159), todo !== todoToToggle)) ? todo : Utils.extend({}, todo, stryMutAct_9fa48(160) ? {} : (stryCov_9fa48(160), {
              completed: stryMutAct_9fa48(161) ? todo.completed : (stryCov_9fa48(161), !todo.completed)
            }));
          }
        });
        this.inform();
      }
    };

    app.TodoModel.prototype.destroy = function (todo) {
      if (stryMutAct_9fa48(162)) {
        {}
      } else {
        stryCov_9fa48(162);
        this.todos = this.todos.filter(function (candidate) {
          if (stryMutAct_9fa48(163)) {
            {}
          } else {
            stryCov_9fa48(163);
            return stryMutAct_9fa48(166) ? candidate === todo : stryMutAct_9fa48(165) ? false : stryMutAct_9fa48(164) ? true : (stryCov_9fa48(164, 165, 166), candidate !== todo);
          }
        });
        this.inform();
      }
    };

    app.TodoModel.prototype.save = function (todoToSave, text) {
      if (stryMutAct_9fa48(167)) {
        {}
      } else {
        stryCov_9fa48(167);
        this.todos = this.todos.map(function (todo) {
          if (stryMutAct_9fa48(168)) {
            {}
          } else {
            stryCov_9fa48(168);
            return (stryMutAct_9fa48(171) ? todo === todoToSave : stryMutAct_9fa48(170) ? false : stryMutAct_9fa48(169) ? true : (stryCov_9fa48(169, 170, 171), todo !== todoToSave)) ? todo : Utils.extend({}, todo, stryMutAct_9fa48(172) ? {} : (stryCov_9fa48(172), {
              title: text
            }));
          }
        });
        this.inform();
      }
    };

    app.TodoModel.prototype.clearCompleted = function () {
      if (stryMutAct_9fa48(173)) {
        {}
      } else {
        stryCov_9fa48(173);
        this.todos = this.todos.filter(function (todo) {
          if (stryMutAct_9fa48(174)) {
            {}
          } else {
            stryCov_9fa48(174);
            return stryMutAct_9fa48(175) ? todo.completed : (stryCov_9fa48(175), !todo.completed);
          }
        });
        this.inform();
      }
    };
  }
})();