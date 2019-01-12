function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from '../vendor/react.js';
import ReactDOM from '../vendor/react-dom.js';
import Header from '../header.js';
import Footer from '../footer.js';

function LoginForm() {
  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      username = _useState2[0],
      setUsername = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      password = _useState4[0],
      setPassword = _useState4[1];

  return React.createElement("section", {
    className: "container"
  }, React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "one-half column offset-by-three columns text-center"
  }, React.createElement("h1", null, "Login to", ' ', React.createElement("span", {
    className: "emoji",
    "aria-label": "Dollar"
  }, ":dollar:")))), React.createElement("div", null, React.createElement("form", {
    className: "dollar-login-form"
  }, React.createElement("fieldset", null, React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "one-third offset-by-one-third column text-center"
  }, React.createElement("label", {
    htmlFor: "dollar-login-username"
  }, React.createElement("span", {
    className: "emoji small",
    "aria-hidden": true
  }, ":grinning:"), ' ', "Username:"), React.createElement("input", {
    value: username,
    onChange: function onChange(event) {
      return setUsername(event.target.value);
    },
    type: "text",
    id: "dollar-login-username",
    placeholder: "Username",
    autoComplete: "username"
  }))), React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "one-third offset-by-one-third column text-center"
  }, React.createElement("label", {
    htmlFor: "dollar-login-password"
  }, React.createElement("span", {
    className: "emoji small",
    "aria-hidden": true
  }, ":key2:"), ' ', "Password:"), React.createElement("input", {
    value: password,
    onChange: function onChange(event) {
      return setPassword(event.target.value);
    },
    type: "password",
    id: "dollar-login-password",
    autoComplete: "current-password"
  }))), React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "one-third offset-by-one-third column text-center"
  }, React.createElement("label", {
    htmlFor: "dollar-login-remember"
  }, React.createElement("input", {
    type: "checkbox",
    id: "dollar-login-remember"
  }), " Remember Me")))))), React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "one-third offset-by-one-third column text-center"
  }, React.createElement("p", null, "Don't have an account yet?", ' ', React.createElement("a", {
    href: "./signup.html",
    className: "link"
  }, "Click Here!"))), React.createElement("div", {
    className: "one-third offset-by-one-third column text-center"
  }, React.createElement("p", null, "Forgot your password?", React.createElement("a", {
    href: "mailto:hamlim@outlook.com?Subject=I%20Forgot%20My%20Password%20for%20Dollar!"
  }, "Click Here!")))), React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "one-full column text-center"
  }, React.createElement("button", {
    className: "button-tertiary",
    id: "dollar-login-login_btn"
  }, "Login!"))));
}

function Login() {
  return React.createElement(React.Fragment, null, React.createElement("header", {
    className: "navigation special-green"
  }, React.createElement(Header, {
    pageType: "login"
  })), React.createElement("main", {
    className: "dollar-main-container"
  }, React.createElement(LoginForm, null)), React.createElement("footer", {
    className: "footer"
  }, React.createElement(Footer, {
    pageType: "login"
  })));
}

ReactDOM.render(React.createElement(Login, null), document.querySelector('.js-login-page-mount'));