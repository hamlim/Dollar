const date = new Date()

const today = `${date.getYear()}-${date.getMonth()}-${date.getDate()}`

export default {
  tags: ['Credit Card', 'Debit Card', 'Savings'],
  types: ['Personal', 'Groceries', 'Fast Food', 'Gifts', 'Transportation', 'Utilities', 'Travel', 'Health', 'Home'],
  today,
}
