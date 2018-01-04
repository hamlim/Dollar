const colors = require('./colors.js');
const numbers = require('./numbers.js');

module.exports = {
  base: {
    size: numbers.base,
    color: colors.base
  },
  headline: {
    size: numbers.extraLarge,
    color: colors.base
  },
  link: {
    size: numbers.base,
    color: colors.primary
  }
}