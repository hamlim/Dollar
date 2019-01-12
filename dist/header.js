import React, { useState } from './vendor/react.js';
import ReactDOM from './vendor/react-dom.js';

function Header(_ref) {
  var pageType = _ref.pageType;

  if (pageType === 'login') {
    return React.createElement("nav", {
      className: "container"
    }, React.createElement("section", {
      className: "row"
    }, React.createElement("div", {
      className: "one-full-column text-center"
    }, React.createElement("a", {
      href: "./index.html"
    }, React.createElement("span", {
      className: "emoji navmoji",
      "aria-label": "Dollar"
    }, ":dollar:")), React.createElement("span", null, React.createElement("a", {
      href: "./login.html",
      className: "selected"
    }, React.createElement("span", {
      className: "emoji navmoji",
      id: "dollar-login-login_emoji",
      "aria-label": "Login"
    }, ":closed_lock_with_key:")), React.createElement("a", {
      href: "./signup.html"
    }, React.createElement("span", {
      className: "emoji navmoji",
      id: "dollar-login-signup_emoji",
      "aria-label": "Sign up"
    }, ":lock_with_ink_pen:"))))));
  }

  return React.createElement("nav", {
    className: "container"
  }, React.createElement("section", {
    className: "row"
  }, React.createElement("div", {
    className: "one-full column text-middle"
  }, React.createElement("a", {
    href: "./index.html"
  }, React.createElement("span", {
    className: "emoji navmoji",
    "aria-label": "Dollar"
  }, ":dollar:")), React.createElement("span", null, React.createElement("a", {
    href: "./app.html",
    className: "selected"
  }, React.createElement("span", {
    className: "emoji navmoji",
    id: "cash",
    "aria-label": "Form"
  }, ":money_with_wings:")), React.createElement("a", {
    href: "./analysis.html"
  }, React.createElement("span", {
    className: "emoji navmoji",
    id: "analysis",
    "aria-label": "Analysis"
  }, ":chart_with_upwards_trend:")), React.createElement("a", {
    href: "./budgets.html"
  }, React.createElement("span", {
    className: "emoji navmoji",
    id: "budget",
    "aria-label": "Budgets"
  }, ":ballot_box_with_check:")), React.createElement("a", {
    href: "./account.html"
  }, React.createElement("span", {
    className: "emoji navmoji",
    id: "account",
    "aria-label": "Settings"
  }, ":gear:"))))));
}

var header = document.querySelector('[data-header]');

if (header) {
  var pageType = typeof header.getAttribute('data-header') === 'string' ? header.getAttribute('data-header') : 'ERR';
  ReactDOM.render(React.createElement(Header, {
    pageType: pageType
  }), header);
}

export default Header;