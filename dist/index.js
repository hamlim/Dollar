function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from 'https://mh-unumd.glitch.me/@matthamlin/danger-react-suspense/dev/react.js?exports=named';
import 'https://unpkg.com/@matthamlin/danger-react-suspense/dev/react-dom.js';
window.React = React;

function App() {
  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      set = _useState2[1];

  return React.createElement("button", {
    onClick: function onClick() {
      return set(!state);
    }
  }, "Toggled: ", state.toString());
}

window.ReactDOM.render(React.createElement(App, null), document.querySelector('.root'));