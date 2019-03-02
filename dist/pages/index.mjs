function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from '../vendor/react.mjs';
import ReactDOM, { createRoot } from '../vendor/react-dom.mjs';
import App from './app.mjs';
import Login from './login.mjs';
import { Router, Route, Link } from '../vendor/reroute.mjs';
import { FlyingMoney, Chart, Dollar, Gear } from '../icons.mjs';

function Dev() {
  return React.createElement(Route, {
    path: "/internal"
  }, function (_ref) {
    var matches = _ref.matches;
    return matches && React.createElement(React.Fragment, null, React.createElement(Dollar, null), React.createElement(FlyingMoney, null), React.createElement(Chart, null), React.createElement(Gear, null));
  });
}

function Landing() {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLoggedIn = _useState2[0],
      setLoggedIn = _useState2[1];

  return React.createElement(Router, null, React.createElement(Dev, null), React.createElement(Route, {
    path: "/"
  }, function (_ref2) {
    var matches = _ref2.matches,
        navigate = _ref2.navigate;

    if (!isLoggedIn && matches) {
      navigate('/login');
    }

    if (matches) {
      return React.createElement(App, null);
    }

    return null;
  }), React.createElement(Route, {
    path: "/login"
  }, function (_ref3) {
    var matches = _ref3.matches;
    return matches && React.createElement(Login, {
      isLoggedIn: isLoggedIn,
      setLoggedIn: setLoggedIn
    });
  }), React.createElement(Route, {
    path: "/settings"
  }, function (_ref4) {
    var matches = _ref4.matches;
    return matches && React.createElement("h3", null, "Settings Coming Soon");
  }), React.createElement(Route, {
    path: "/budgets"
  }, function (_ref5) {
    var matches = _ref5.matches;
    return matches && React.createElement("h3", null, "Budgets Coming Soon");
  }));
}

var mountNode = document.querySelector('#react-app-mount');

if (mountNode) {
  var root = createRoot(mountNode);
  root.render(React.createElement(Landing, null));
}