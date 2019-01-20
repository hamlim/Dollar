function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { useReducer, useCallback } from '../vendor/react.mjs';
import ReactDOM from '../vendor/react-dom.mjs';
import Header from '../header.mjs';
import Footer from '../footer.mjs';

function formatDate() {
  var date = new Date(); // yyyy-MM-dd

  return "".concat(date.getFullYear(), "-").concat(date.getMonth() === 0 ? '01' : date.getMonth().toString().length === 1 ? "0".concat(date.getMonth()) : date.getMonth(), "-").concat(date.getDate());
}

var UPDATE_AMOUNT = 'UPDATE_AMOUNT';
var UPDATE_TAG = 'UPDATE_TAG';
var UPDATE_LOCATION = 'UPDATE_LOCATION';
var UPDATE_TYPE = 'UPDATE_TYPE';
var UPDATES_NOTES = 'UPDATES_NOTES';
var UPDATE_DATE = 'UPDATE_DATE';

function appFormReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    amount: '',
    tag: '',
    location: '',
    type: '',
    notes: '',
    date: formatDate()
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case UPDATE_AMOUNT:
      {
        return _objectSpread({}, state, {
          amount: action.payload
        });
      }

    case UPDATE_TAG:
      {
        return _objectSpread({}, state, {
          tag: action.payload
        });
      }

    case UPDATE_LOCATION:
      {
        return _objectSpread({}, state, {
          location: action.payload
        });
      }

    case UPDATE_TYPE:
      {
        return _objectSpread({}, state, {
          type: action.payload
        });
      }

    case UPDATES_NOTES:
      {
        return _objectSpread({}, state, {
          notes: action.payload
        });
      }

    case UPDATE_DATE:
      {
        return _objectSpread({}, state, {
          date: action.payload
        });
      }

    default:
      return state;
  }
}

function makeAction(type, dispatch) {
  return function (payload) {
    return {
      type: type,
      payload: payload
    };
  };
}

function AppForm() {
  var _useReducer = useReducer(appFormReducer, undefined, {
    type: '@@INIT'
  }),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var amountUpdater = makeAction(UPDATE_AMOUNT);
  var tagUpdater = makeAction(UPDATE_TAG);
  var typeUpdater = makeAction(UPDATE_TYPE);
  var dateUpdater = makeAction(UPDATE_DATE);
  var noteUpdater = makeAction(UPDATES_NOTES);
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "row"
  }, React.createElement("h1", null, "Enter a New Expense:")), React.createElement("div", {
    id: "form"
  }, React.createElement("form", null, React.createElement("fieldset", null, React.createElement("div", {
    className: "row"
  }, React.createElement("label", {
    className: "one-half column",
    htmlFor: "amountField"
  }, "Expense Amount:", ' '), React.createElement("input", {
    className: "one-half column",
    type: "number",
    step: "any",
    placeholder: "$1.23",
    min: "0",
    id: "transactionAmount",
    required: true,
    value: state.amount,
    onChange: function onChange(event) {
      dispatch(amountUpdater(event.target.value));
    }
  })), React.createElement("div", {
    className: "row"
  }, React.createElement("label", {
    className: "one-half column",
    htmlFor: "tagField"
  }, "Account Tag:"), React.createElement("select", {
    className: "one-half column",
    value: state.tag,
    onChange: function onChange(event) {
      dispatch(tagUpdater(event.target.value));
    },
    id: "transactionTag"
  }, React.createElement("option", {
    value: "Credit Card",
    id: "optone"
  }, "Credit Card"), React.createElement("option", {
    value: "Debit Card",
    id: "opttwo"
  }, "Debit Card"), React.createElement("option", {
    value: "Savings",
    id: "optthree"
  }, "Savings"))), React.createElement("div", {
    className: "row",
    id: "bloodhound"
  }, React.createElement("label", {
    className: "one-half column",
    htmlFor: "transactionLocation"
  }, "Expense Location:", ' '), React.createElement("input", {
    className: "typeahead one-half column",
    type: "text",
    placeholder: "Some Place",
    id: "transactionLocation",
    required: true
  })), React.createElement("div", {
    className: "row"
  }, React.createElement("label", {
    className: "one-half column",
    htmlFor: "transactionType"
  }, "Type of Expense:", ' '), React.createElement("select", {
    className: "one-half column",
    id: "transactionType",
    value: state.type,
    onChange: function onChange(event) {
      dispatch(typeUpdater(event.target.value));
    },
    required: true
  }, React.createElement("option", {
    value: "Other"
  }, "Other "), React.createElement("option", {
    value: "Personal"
  }, "Personal "), React.createElement("option", {
    value: "Food"
  }, "Food "), React.createElement("option", {
    value: "Health"
  }, "Health "), React.createElement("option", {
    value: "Home"
  }, "Home "), React.createElement("option", {
    value: "Gifts"
  }, "Gifts "), React.createElement("option", {
    value: "Transportation"
  }, "Transportation "), React.createElement("option", {
    value: "Utilities"
  }, "Utilities "), React.createElement("option", {
    value: "Travel"
  }, "Travel "))), React.createElement("div", {
    className: "row"
  }, React.createElement("label", {
    className: "one-half column",
    htmlFor: "transactionNotes"
  }, "Expense Notes: (optional)"), React.createElement("textarea", {
    className: "one-half column",
    placeholder: "A quick stop to the grocery store for ... (supports markdown!)",
    id: "transactionNotes",
    value: state.note,
    onChange: function onChange(event) {
      dispatch(noteUpdater(event.target.value));
    }
  })), React.createElement("div", {
    className: "row"
  }, React.createElement("label", {
    className: "one-half column",
    htmlFor: "transactionUserTime"
  }, "Expense Date: (optional)"), React.createElement("input", {
    type: "date",
    className: "one-half column",
    id: "transactionUserTime",
    value: state.date,
    onChange: function onChange(event) {
      dispatch(dateUpdater(event.target.value));
    }
  })))), React.createElement("div", {
    className: "row"
  }, React.createElement("button", {
    id: "submit-btn",
    className: "one-full column button button-tertiary"
  }, "Submit"))));
}

function App() {
  return React.createElement(React.Fragment, null, React.createElement("header", {
    className: "navigation bottom-spacer special-green"
  }, React.createElement(Header, {
    pageType: "app"
  })), React.createElement("main", null, React.createElement("section", {
    className: "container bottom-spacer",
    id: "input"
  }, React.createElement(AppForm, null)), React.createElement("section", {
    className: "container bottom-spacer"
  }, React.createElement("div", {
    className: "row"
  }, React.createElement("h3", null, "Ten most recent transactions:")), React.createElement("div", {
    className: "overflow-container"
  }, React.createElement("table", {
    className: "u-full-width"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, React.createElement("span", null, React.createElement("span", {
    className: "emoji small"
  }, ":information_source:"), " Info:")), React.createElement("th", null, React.createElement("span", null, React.createElement("span", {
    className: "emoji small"
  }, ":clock4:"), " Time:")), React.createElement("th", null, React.createElement("span", null, React.createElement("span", {
    className: "emoji small"
  }, ":dollar:"), " Amount:")), React.createElement("th", null, React.createElement("span", null, React.createElement("span", {
    className: "emoji small"
  }, ":map:"), " Location:")), React.createElement("th", null, React.createElement("span", null, React.createElement("span", {
    className: "emoji small"
  }, ":open_file_folder:"), " Category:")), React.createElement("th", null, React.createElement("span", null, React.createElement("span", {
    className: "emoji small"
  }, ":hash:"), " Tag:")))), React.createElement("tbody", {
    id: "past-transactions"
  }))))), React.createElement("footer", {
    className: "footer"
  }, React.createElement(Footer, {
    pageType: "app"
  })));
}

export default App;