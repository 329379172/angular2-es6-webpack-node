/**
 * Created by linfeiyang on 16-9-22.
 */

const Koa = require('koa');

const app = new Koa();

const heroRouter = require('./router/hero');

app.use(async (ctx, next) => {
    let start = Date.now();
    await next();
    console.log(`${ctx.req.method} ${ctx.req.url} HTTP/${ctx.req.httpVersion} ${ctx.req.headers['user-agent']} ${Date.now() - start}ms`);
});


app.use(async (ctx, next) => {
    try{
        await next();
    } catch(err) {
        ctx.body = {message: err.message};
        ctx.status = err.status || 500;
    }
});

app.use(heroRouter.routes());

app.listen(3000);
console.log('app started at port 3000~');