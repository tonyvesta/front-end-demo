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

/*jshint quotmark:false */

/*jshint white:false */

/*jshint trailing:false */

/*jshint newcap:false */

/*global React */
var app = stryMutAct_9fa48(65) ? app && {} : stryMutAct_9fa48(64) ? false : stryMutAct_9fa48(63) ? true : (stryCov_9fa48(63, 64, 65), app || {});

(function () {
  if (stryMutAct_9fa48(66)) {
    {
      'use strict';
    }
  } else {
    stryCov_9fa48(66);
    app.TodoFooter = React.createClass(stryMutAct_9fa48(67) ? {} : (stryCov_9fa48(67), {
      render: function () {
        if (stryMutAct_9fa48(68)) {
          {}
        } else {
          stryCov_9fa48(68);
          var activeTodoWord = app.Utils.pluralize(this.props.count, stryMutAct_9fa48(69) ? "" : (stryCov_9fa48(69), 'item'));
          var clearButton = null;

          if (stryMutAct_9fa48(73) ? this.props.completedCount <= 0 : stryMutAct_9fa48(72) ? this.props.completedCount >= 0 : stryMutAct_9fa48(71) ? false : stryMutAct_9fa48(70) ? true : (stryCov_9fa48(70, 71, 72, 73), this.props.completedCount > 0)) {
            if (stryMutAct_9fa48(74)) {
              {}
            } else {
              stryCov_9fa48(74);
              clearButton = <button className="clear-completed" onClick={this.props.onClearCompleted}>
						Clear completed
					</button>;
            }
          } // React idiom for shortcutting to `classSet` since it'll be used often


          var cx = React.addons.classSet;
          var nowShowing = this.props.nowShowing;
          return <footer className="footer">
					<span className="todo-count">
						<strong>{this.props.count}</strong> {activeTodoWord} left
					</span>
					<ul className="filters">
						<li>
							<a href="#/" className={cx(stryMutAct_9fa48(75) ? {} : (stryCov_9fa48(75), {
                  selected: stryMutAct_9fa48(78) ? nowShowing !== app.ALL_TODOS : stryMutAct_9fa48(77) ? false : stryMutAct_9fa48(76) ? true : (stryCov_9fa48(76, 77, 78), nowShowing === app.ALL_TODOS)
                }))}>
									All
							</a>
						</li>
						{stryMutAct_9fa48(79) ? "" : (stryCov_9fa48(79), ' ')}
						<li>
							<a href="#/active" className={cx(stryMutAct_9fa48(80) ? {} : (stryCov_9fa48(80), {
                  selected: stryMutAct_9fa48(83) ? nowShowing !== app.ACTIVE_TODOS : stryMutAct_9fa48(82) ? false : stryMutAct_9fa48(81) ? true : (stryCov_9fa48(81, 82, 83), nowShowing === app.ACTIVE_TODOS)
                }))}>
									Active
							</a>
						</li>
						{stryMutAct_9fa48(84) ? "" : (stryCov_9fa48(84), ' ')}
						<li>
							<a href="#/completed" className={cx(stryMutAct_9fa48(85) ? {} : (stryCov_9fa48(85), {
                  selected: stryMutAct_9fa48(88) ? nowShowing !== app.COMPLETED_TODOS : stryMutAct_9fa48(87) ? false : stryMutAct_9fa48(86) ? true : (stryCov_9fa48(86, 87, 88), nowShowing === app.COMPLETED_TODOS)
                }))}>
									Completed
							</a>
						</li>
					</ul>
					{clearButton}
				</footer>;
        }
      }
    }));
  }
})();