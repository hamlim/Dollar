function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from './vendor/react.js';
import ReactDOM from './vendor/react-dom.js';

function useOriginalState(initialState) {
  var _useState = useState(initialState),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      set = _useState2[1];

  return [state, function (s) {
    return set(function (prevState) {
      return _objectSpread({}, prevState, s);
    });
  }];
}

function formatDate() {
  var date = new Date(); // yyyy-MM-dd

  return "".concat(date.getFullYear(), "-").concat(date.getMonth(), "-").concat(date.getDate());
}

function App() {
  var _useOriginalState = useOriginalState({
    amount: '',
    tag: '',
    location: '',
    type: '',
    notes: '',
    date: formatDate()
  }),
      _useOriginalState2 = _slicedToArray(_useOriginalState, 2),
      state = _useOriginalState2[0],
      setState = _useOriginalState2[1];

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
      setState({
        amount: event.target.value
      });
    }
  })), React.createElement("div", {
    className: "row"
  }, React.createElement("label", {
    className: "one-half column",
    htmlFor: "tagField"
  }, "Account Tag:"), React.createElement("select", {
    className: "one-half column",
    value: state.tag,
    onChange: function onChange(evt) {
      setState({
        tag: event.target.value
      });
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
    onChange: function onChange(evt) {
      setState({
        type: evt.target.value
      });
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
      setState({
        note: event.target.value
      });
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
      setState({
        date: event.target.value
      });
    }
  })))), React.createElement("div", {
    className: "row"
  }, React.createElement("button", {
    id: "submit-btn",
    className: "one-full column button button-tertiary"
  }, "Submit"))));
}

ReactDOM.render(React.createElement(App, null), document.querySelector('[data-app-form]'));