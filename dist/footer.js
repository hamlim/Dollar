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

function Footer(_ref) {
  var page = _ref.page;
  return React.createElement("section", {
    className: "container"
  }, React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "one-half column offset-by-three columns center-text"
  }, page === 'app' || page === 'analysis' || page === 'budgets' || page === 'account' ? React.createElement("button", {
    className: "btn",
    onClick: logoutHandler,
    id: "logout-btn"
  }, "Logout", ' ', React.createElement("span", {
    className: "emoji navmoji small",
    "aria-hidden": true
  }, ":wave:")) : React.createElement("h5", {
    className: "footer-text"
  }, "Made with", ' ', React.createElement("span", {
    className: "emoji small",
    "aria-label": "heart"
  }, ":hearts:"), ' ', "and", React.createElement("span", {
    className: "emoji small",
    "aria-label": "joy"
  }, ":smiley_cat:"), ' ', "by", React.createElement("a", {
    target: "blank",
    href: "//matthamlin.me",
    title: "Matt Hamlin"
  }, "Matt"), "."))));
}

var footer = document.querySelector('.footer');

if (footer) {
  var page = typeof footer.getAttribute('data-footer') === 'string' ? footer.getAttribute('data-footer') : 'ERR';
  ReactDOM.render(React.createElement(Footer, {
    pageType: page
  }), footer);
}

export default Footer;