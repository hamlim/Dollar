const { default: bundler } = require('@native-bundler/core')

bundler({
  entry: 'src/index.js',
  out: './dist',
  cache: new Map(),
})
