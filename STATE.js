const date = new Date()

const today = date.toISOString().split('T')[0]

export default {
  tags: ['Credit Card', 'Debit Card', 'Savings'],
  types: ['Personal', 'Groceries', 'Fast Food', 'Gifts', 'Transportation', 'Utilities', 'Travel', 'Health', 'Home'],
  today,
}
