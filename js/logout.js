function logoutHandler() {
  //we want to clear all local storage
  localStorage.setItem('user', '')
  localStorage.removeItem('user')
  localStorage.setItem('budgets', '')
  localStorage.removeItem('budgets')
  localStorage.setItem('userExpenses', '')
  localStorage.removeItem('userExpenses')
  //now we redirect to the login page
  window.location.href = './login'
}
