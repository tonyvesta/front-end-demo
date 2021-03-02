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

/*global React, Router*/
var app = stryMutAct_9fa48(2) ? app && {} : stryMutAct_9fa48(1) ? false : stryMutAct_9fa48(0) ? true : (stryCov_9fa48(0, 1, 2), app || {});

(function () {
  if (stryMutAct_9fa48(3)) {
    {
      'use strict';
    }
  } else {
    stryCov_9fa48(3);
    app.ALL_TODOS = stryMutAct_9fa48(4) ? "" : (stryCov_9fa48(4), 'all');
    app.ACTIVE_TODOS = stryMutAct_9fa48(5) ? "" : (stryCov_9fa48(5), 'active');
    app.COMPLETED_TODOS = stryMutAct_9fa48(6) ? "" : (stryCov_9fa48(6), 'completed');
    var TodoFooter = app.TodoFooter;
    var TodoItem = app.TodoItem;
    var ENTER_KEY = 13;
    var TodoApp = React.createClass(stryMutAct_9fa48(7) ? {} : (stryCov_9fa48(7), {
      getInitialState: function () {
        if (stryMutAct_9fa48(8)) {
          {}
        } else {
          stryCov_9fa48(8);
          return stryMutAct_9fa48(9) ? {} : (stryCov_9fa48(9), {
            nowShowing: app.ALL_TODOS,
            editing: null
          });
        }
      },
      componentDidMount: function () {
        if (stryMutAct_9fa48(10)) {
          {}
        } else {
          stryCov_9fa48(10);
          var setState = this.setState;
          var router = Router(stryMutAct_9fa48(11) ? {} : (stryCov_9fa48(11), {
            '/': setState.bind(this, stryMutAct_9fa48(12) ? {} : (stryCov_9fa48(12), {
              nowShowing: app.ALL_TODOS
            })),
            '/active': setState.bind(this, stryMutAct_9fa48(13) ? {} : (stryCov_9fa48(13), {
              nowShowing: app.ACTIVE_TODOS
            })),
            '/completed': setState.bind(this, stryMutAct_9fa48(14) ? {} : (stryCov_9fa48(14), {
              nowShowing: app.COMPLETED_TODOS
            }))
          }));
          router.init(stryMutAct_9fa48(15) ? "" : (stryCov_9fa48(15), '/'));
        }
      },
      handleNewTodoKeyDown: function (event) {
        if (stryMutAct_9fa48(16)) {
          {}
        } else {
          stryCov_9fa48(16);

          if (stryMutAct_9fa48(19) ? event.keyCode === ENTER_KEY : stryMutAct_9fa48(18) ? false : stryMutAct_9fa48(17) ? true : (stryCov_9fa48(17, 18, 19), event.keyCode !== ENTER_KEY)) {
            if (stryMutAct_9fa48(20)) {
              {}
            } else {
              stryCov_9fa48(20);
              return;
            }
          }

          event.preventDefault();
          var val = React.findDOMNode(this.refs.newField).value.trim();

          if (stryMutAct_9fa48(22) ? false : stryMutAct_9fa48(21) ? true : (stryCov_9fa48(21, 22), val)) {
            if (stryMutAct_9fa48(23)) {
              {}
            } else {
              stryCov_9fa48(23);
              this.props.model.addTodo(val);
              React.findDOMNode(this.refs.newField).value = stryMutAct_9fa48(24) ? "Stryker was here!" : (stryCov_9fa48(24), '');
            }
          }
        }
      },
      toggleAll: function (event) {
        if (stryMutAct_9fa48(25)) {
          {}
        } else {
          stryCov_9fa48(25);
          var checked = event.target.checked;
          this.props.model.toggleAll(checked);
        }
      },
      toggle: function (todoToToggle) {
        if (stryMutAct_9fa48(26)) {
          {}
        } else {
          stryCov_9fa48(26);
          this.props.model.toggle(todoToToggle);
        }
      },
      destroy: function (todo) {
        if (stryMutAct_9fa48(27)) {
          {}
        } else {
          stryCov_9fa48(27);
          this.props.model.destroy(todo);
        }
      },
      edit: function (todo) {
        if (stryMutAct_9fa48(28)) {
          {}
        } else {
          stryCov_9fa48(28);
          this.setState(stryMutAct_9fa48(29) ? {} : (stryCov_9fa48(29), {
            editing: todo.id
          }));
        }
      },
      save: function (todoToSave, text) {
        if (stryMutAct_9fa48(30)) {
          {}
        } else {
          stryCov_9fa48(30);
          this.props.model.save(todoToSave, text);
          this.setState(stryMutAct_9fa48(31) ? {} : (stryCov_9fa48(31), {
            editing: null
          }));
        }
      },
      cancel: function () {
        if (stryMutAct_9fa48(32)) {
          {}
        } else {
          stryCov_9fa48(32);
          this.setState(stryMutAct_9fa48(33) ? {} : (stryCov_9fa48(33), {
            editing: null
          }));
        }
      },
      clearCompleted: function () {
        if (stryMutAct_9fa48(34)) {
          {}
        } else {
          stryCov_9fa48(34);
          this.props.model.clearCompleted();
        }
      },
      render: function () {
        if (stryMutAct_9fa48(35)) {
          {}
        } else {
          stryCov_9fa48(35);
          var footer;
          var main;
          var todos = this.props.model.todos;
          var shownTodos = todos.filter(function (todo) {
            if (stryMutAct_9fa48(36)) {
              {}
            } else {
              stryCov_9fa48(36);

              switch (this.state.nowShowing) {
                case app.ACTIVE_TODOS:
                  if (stryMutAct_9fa48(37)) {} else {
                    stryCov_9fa48(37);
                    return stryMutAct_9fa48(38) ? todo.completed : (stryCov_9fa48(38), !todo.completed);
                  }

                case app.COMPLETED_TODOS:
                  if (stryMutAct_9fa48(39)) {} else {
                    stryCov_9fa48(39);
                    return todo.completed;
                  }

                default:
                  if (stryMutAct_9fa48(40)) {} else {
                    stryCov_9fa48(40);
                    return stryMutAct_9fa48(41) ? false : (stryCov_9fa48(41), true);
                  }

              }
            }
          }, this);
          var todoItems = shownTodos.map(function (todo) {
            if (stryMutAct_9fa48(42)) {
              {}
            } else {
              stryCov_9fa48(42);
              return <TodoItem key={todo.id} todo={todo} onToggle={this.toggle.bind(this, todo)} onDestroy={this.destroy.bind(this, todo)} onEdit={this.edit.bind(this, todo)} editing={stryMutAct_9fa48(45) ? this.state.editing !== todo.id : stryMutAct_9fa48(44) ? false : stryMutAct_9fa48(43) ? true : (stryCov_9fa48(43, 44, 45), this.state.editing === todo.id)} onSave={this.save.bind(this, todo)} onCancel={this.cancel} />;
            }
          }, this);
          var activeTodoCount = todos.reduce(function (accum, todo) {
            if (stryMutAct_9fa48(46)) {
              {}
            } else {
              stryCov_9fa48(46);
              return todo.completed ? accum : stryMutAct_9fa48(47) ? accum - 1 : (stryCov_9fa48(47), accum + 1);
            }
          }, 0);
          var completedCount = stryMutAct_9fa48(48) ? todos.length + activeTodoCount : (stryCov_9fa48(48), todos.length - activeTodoCount);

          if (stryMutAct_9fa48(51) ? activeTodoCount && completedCount : stryMutAct_9fa48(50) ? false : stryMutAct_9fa48(49) ? true : (stryCov_9fa48(49, 50, 51), activeTodoCount || completedCount)) {
            if (stryMutAct_9fa48(52)) {
              {}
            } else {
              stryCov_9fa48(52);
              footer = <TodoFooter count={activeTodoCount} completedCount={completedCount} nowShowing={this.state.nowShowing} onClearCompleted={this.clearCompleted} />;
            }
          }

          if (stryMutAct_9fa48(54) ? false : stryMutAct_9fa48(53) ? true : (stryCov_9fa48(53, 54), todos.length)) {
            if (stryMutAct_9fa48(55)) {
              {}
            } else {
              stryCov_9fa48(55);
              main = <section className="main">
						<input className="toggle-all" type="checkbox" onChange={this.toggleAll} checked={stryMutAct_9fa48(58) ? activeTodoCount !== 0 : stryMutAct_9fa48(57) ? false : stryMutAct_9fa48(56) ? true : (stryCov_9fa48(56, 57, 58), activeTodoCount === 0)} />
						<ul className="todo-list">
							{todoItems}
						</ul>
					</section>;
            }
          }

          return <div>
					<header className="header">
						<h1>todos</h1>
						<input ref="newField" className="new-todo" placeholder="What needs to be done?" onKeyDown={this.handleNewTodoKeyDown} autoFocus={stryMutAct_9fa48(59) ? false : (stryCov_9fa48(59), true)} />
					</header>
					{main}
					{footer}
				</div>;
        }
      }
    }));
    var model = new app.TodoModel(stryMutAct_9fa48(60) ? "" : (stryCov_9fa48(60), 'react-todos'));

    function render() {
      if (stryMutAct_9fa48(61)) {
        {}
      } else {
        stryCov_9fa48(61);
        React.render(<TodoApp model={model} />, document.getElementsByClassName(stryMutAct_9fa48(62) ? "" : (stryCov_9fa48(62), 'todoapp'))[0]);
      }
    }

    model.subscribe(render);
    render();
  }
})();