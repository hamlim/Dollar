import React from './vendor/react.js';
import ReactDOM from './vendor/react-dom.js';

function logoutHandler() {
  //we want to clear all local storage
  localStorage.setItem('user', '');
  localStorage.removeItem('user');
  localStorage.setItem('budgets', '');
  localStorage.removeItem('budgets');
  localStorage.setItem('userExpenses', '');
  localStorage.removeItem('userExpenses'); //now we redirect to the login page

  window.location.href = './login.html';
}

function Footer() {
  return React.createElement("section", {
    className: "container"
  }, React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "one-half column offset-by-three columns center-text"
  }, React.createElement("button", {
    className: "btn",
    onClick: logoutHandler,
    id: "logout-btn"
  }, "Logout ", React.createElement("i", {
    className: "emoji navmoji small"
  }, ":wave:")))));
}

ReactDOM.render(React.createElement(Footer, null), document.querySelector('.footer'));