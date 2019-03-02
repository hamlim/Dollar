import React, { useState } from './vendor/react.mjs';
import { Dollar, Chart, FlyingMoney, Gear, BallotBox, LoginLock, SignupLock } from './icons.mjs';

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
    }, React.createElement(Dollar, {
      style: {
        height: 50,
        width: 50
      },
      "aria-label": "Dollar"
    })), React.createElement("span", null, React.createElement("a", {
      href: "./login.html",
      className: "selected"
    }, React.createElement(LoginLock, {
      style: {
        height: 50,
        width: 50
      },
      "aria-label": "Login"
    })), React.createElement("a", {
      href: "./signup.html"
    }, React.createElement(SignupLock, {
      style: {
        height: 50,
        width: 50
      },
      "aria-label": "Signup"
    }))))));
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
  }, React.createElement(Dollar, {
    style: {
      height: 50,
      width: 50
    },
    "aria-label": "Dollar"
  }))), React.createElement("span", null, React.createElement("a", {
    href: "./app.html",
    className: "selected"
  }, React.createElement(FlyingMoney, {
    style: {
      height: 50,
      width: 50
    },
    "aria-label": "Application"
  })), React.createElement("a", {
    href: "./analysis.html"
  }, React.createElement(Chart, {
    style: {
      height: 50,
      width: 50
    },
    "aria-label": "Analysis"
  })), React.createElement("a", {
    href: "./budgets.html"
  }, React.createElement(BallotBox, {
    style: {
      height: 50,
      width: 50
    },
    "aria-label": "Budgets"
  })), React.createElement("a", {
    href: "./account.html"
  }, React.createElement(Gear, {
    style: {
      height: 50,
      width: 50
    },
    "aria-label": "Settings"
  }))))));
}

export default Header;