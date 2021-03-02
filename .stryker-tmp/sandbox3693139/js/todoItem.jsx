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

/*jshint quotmark: false */

/*jshint white: false */

/*jshint trailing: false */

/*jshint newcap: false */

/*global React */
var app = stryMutAct_9fa48(91) ? app && {} : stryMutAct_9fa48(90) ? false : stryMutAct_9fa48(89) ? true : (stryCov_9fa48(89, 90, 91), app || {});

(function () {
  if (stryMutAct_9fa48(92)) {
    {
      'use strict';
    }
  } else {
    stryCov_9fa48(92);
    var ESCAPE_KEY = 27;
    var ENTER_KEY = 13;
    app.TodoItem = React.createClass(stryMutAct_9fa48(93) ? {} : (stryCov_9fa48(93), {
      handleSubmit: function (event) {
        if (stryMutAct_9fa48(94)) {
          {}
        } else {
          stryCov_9fa48(94);
          var val = this.state.editText.trim();

          if (stryMutAct_9fa48(96) ? false : stryMutAct_9fa48(95) ? true : (stryCov_9fa48(95, 96), val)) {
            if (stryMutAct_9fa48(97)) {
              {}
            } else {
              stryCov_9fa48(97);
              this.props.onSave(val);
              this.setState(stryMutAct_9fa48(98) ? {} : (stryCov_9fa48(98), {
                editText: val
              }));
            }
          } else {
            if (stryMutAct_9fa48(99)) {
              {}
            } else {
              stryCov_9fa48(99);
              this.props.onDestroy();
            }
          }
        }
      },
      handleEdit: function () {
        if (stryMutAct_9fa48(100)) {
          {}
        } else {
          stryCov_9fa48(100);
          this.props.onEdit();
          this.setState(stryMutAct_9fa48(101) ? {} : (stryCov_9fa48(101), {
            editText: this.props.todo.title
          }));
        }
      },
      handleKeyDown: function (event) {
        if (stryMutAct_9fa48(102)) {
          {}
        } else {
          stryCov_9fa48(102);

          if (stryMutAct_9fa48(105) ? event.which !== ESCAPE_KEY : stryMutAct_9fa48(104) ? false : stryMutAct_9fa48(103) ? true : (stryCov_9fa48(103, 104, 105), event.which === ESCAPE_KEY)) {
            if (stryMutAct_9fa48(106)) {
              {}
            } else {
              stryCov_9fa48(106);
              this.setState(stryMutAct_9fa48(107) ? {} : (stryCov_9fa48(107), {
                editText: this.props.todo.title
              }));
              this.props.onCancel(event);
            }
          } else if (stryMutAct_9fa48(110) ? event.which !== ENTER_KEY : stryMutAct_9fa48(109) ? false : stryMutAct_9fa48(108) ? true : (stryCov_9fa48(108, 109, 110), event.which === ENTER_KEY)) {
            if (stryMutAct_9fa48(111)) {
              {}
            } else {
              stryCov_9fa48(111);
              this.handleSubmit(event);
            }
          }
        }
      },
      handleChange: function (event) {
        if (stryMutAct_9fa48(112)) {
          {}
        } else {
          stryCov_9fa48(112);
          this.setState(stryMutAct_9fa48(113) ? {} : (stryCov_9fa48(113), {
            editText: event.target.value
          }));
        }
      },
      getInitialState: function () {
        if (stryMutAct_9fa48(114)) {
          {}
        } else {
          stryCov_9fa48(114);
          return stryMutAct_9fa48(115) ? {} : (stryCov_9fa48(115), {
            editText: this.props.todo.title
          });
        }
      },

      /**
       * This is a completely optional performance enhancement that you can
       * implement on any React component. If you were to delete this method
       * the app would still work correctly (and still be very performant!), we
       * just use it as an example of how little code it takes to get an order
       * of magnitude performance improvement.
       */
      shouldComponentUpdate: function (nextProps, nextState) {
        if (stryMutAct_9fa48(116)) {
          {}
        } else {
          stryCov_9fa48(116);
          return stryMutAct_9fa48(119) ? ((stryMutAct_9fa48(125) ? nextProps.todo === this.props.todo : stryMutAct_9fa48(124) ? false : stryMutAct_9fa48(123) ? true : (stryCov_9fa48(123, 124, 125), nextProps.todo !== this.props.todo)) || (stryMutAct_9fa48(128) ? nextProps.editing === this.props.editing : stryMutAct_9fa48(127) ? false : stryMutAct_9fa48(126) ? true : (stryCov_9fa48(126, 127, 128), nextProps.editing !== this.props.editing))) && nextState.editText !== this.state.editText : stryMutAct_9fa48(118) ? false : stryMutAct_9fa48(117) ? true : (stryCov_9fa48(117, 118, 119), (stryMutAct_9fa48(122) ? nextProps.todo !== this.props.todo && nextProps.editing !== this.props.editing : stryMutAct_9fa48(121) ? false : stryMutAct_9fa48(120) ? true : (stryCov_9fa48(120, 121, 122), (stryMutAct_9fa48(125) ? nextProps.todo === this.props.todo : stryMutAct_9fa48(124) ? false : stryMutAct_9fa48(123) ? true : (stryCov_9fa48(123, 124, 125), nextProps.todo !== this.props.todo)) || (stryMutAct_9fa48(128) ? nextProps.editing === this.props.editing : stryMutAct_9fa48(127) ? false : stryMutAct_9fa48(126) ? true : (stryCov_9fa48(126, 127, 128), nextProps.editing !== this.props.editing)))) || (stryMutAct_9fa48(131) ? nextState.editText === this.state.editText : stryMutAct_9fa48(130) ? false : stryMutAct_9fa48(129) ? true : (stryCov_9fa48(129, 130, 131), nextState.editText !== this.state.editText)));
        }
      },

      /**
       * Safely manipulate the DOM after updating the state when invoking
       * `this.props.onEdit()` in the `handleEdit` method above.
       * For more info refer to notes at https://facebook.github.io/react/docs/component-api.html#setstate
       * and https://facebook.github.io/react/docs/component-specs.html#updating-componentdidupdate
       */
      componentDidUpdate: function (prevProps) {
        if (stryMutAct_9fa48(132)) {
          {}
        } else {
          stryCov_9fa48(132);

          if (stryMutAct_9fa48(135) ? !prevProps.editing || this.props.editing : stryMutAct_9fa48(134) ? false : stryMutAct_9fa48(133) ? true : (stryCov_9fa48(133, 134, 135), (stryMutAct_9fa48(136) ? prevProps.editing : (stryCov_9fa48(136), !prevProps.editing)) && this.props.editing)) {
            if (stryMutAct_9fa48(137)) {
              {}
            } else {
              stryCov_9fa48(137);
              var node = React.findDOMNode(this.refs.editField);
              node.focus();
              node.setSelectionRange(node.value.length, node.value.length);
            }
          }
        }
      },
      render: function () {
        if (stryMutAct_9fa48(138)) {
          {}
        } else {
          stryCov_9fa48(138);
          return <li className={React.addons.classSet(stryMutAct_9fa48(139) ? {} : (stryCov_9fa48(139), {
            completed: this.props.todo.completed,
            editing: this.props.editing
          }))}>
					<div className="view">
						<input className="toggle" type="checkbox" checked={this.props.todo.completed} onChange={this.props.onToggle} />
						<label onDoubleClick={this.handleEdit}>
							{this.props.todo.title}
						</label>
						<button className="destroy" onClick={this.props.onDestroy} />
					</div>
					<input ref="editField" className="edit" value={this.state.editText} onBlur={this.handleSubmit} onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
				</li>;
        }
      }
    }));
  }
})();