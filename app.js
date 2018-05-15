const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const koaBody  = require('koa-body')
const logger = require('koa-logger')

const index = require('./routes/index')
const users = require('./routes/users')
const course = require('./routes/course')
const operation = require('./routes/operation')
// error handler
onerror(app)

// middlewares
app.use(bodyparser())
app.use(koaBody({
    multipart: true,
    formidable: {
        maxFileSize: 500*1024*1024    // 设置上传文件大小最大限制，默认2M
    }
}));

app.use(json())
app.use(logger())

app.use(require('koa-static')(__dirname + './public'))


// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})



// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(course.routes(), course.allowedMethods())
app.use(operation.routes(), operation.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
