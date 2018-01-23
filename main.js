require('seneca')()
  .use(require('./math.js'))
  .listen(3000)