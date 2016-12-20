import {React, Component} from 'react';

import Header from './Header';
import Footer from './Footer';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      budgets: {},
      expenses: {},
      user: {}
    }
    this.addBudget = this.addBudget.bind(this);
    this.addExpense = this.addExpense.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  addBudget(budgetInformation) {
    /*
      budgetInformation = {
        "field": "some string",
        "value": int value
      }
    */
    let oldBudgets = this.state.budgets;
    for (let budget of oldBudgets) {
      if (oldBudgets[budget][budgetInformation["field"]]) {
        oldBudgets[budget][budgetInformation["field"]] = budgetInformation["value"]; 
      }
    }
    this.setState({
      budgets: oldBudgets
    })
  }

  componentDidMount() {
    fetch()
  }
  render() {
    return (
      <article className="App">
        <Header />

        <Footer />
      </article>
    )
  }

}