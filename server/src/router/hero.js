/**
 * Created by linfeiyang on 16-9-22.
 */
const Router = require('koa-router');

var router = new Router({
    prefix: '/api'
});

router.get('/heroes', async (ctx, next) => {
    ctx.response.body = [
        {id: 11, name: 'Mr. Nice'},
        {id: 12, name: 'Narco'},
        {id: 13, name: 'Bombasto'},
        {id: 14, name: 'Celeritas'},
        {id: 15, name: 'Magneta'},
        {id: 16, name: 'RubberMan'},
        {id: 17, name: 'Dynama'},
        {id: 18, name: 'Dr IQ'},
        {id: 19, name: 'Magma'},
        {id: 20, name: 'Tornado'}
    ];
    ctx.response.type = 'text/json';
    await next();
});

router.get('/hero/:id', async (ctx, next) => {
    let data = [
        {id: 11, name: 'Mr. Nice'},
        {id: 12, name: 'Narco'},
        {id: 13, name: 'Bombasto'},
        {id: 14, name: 'Celeritas'},
        {id: 15, name: 'Magneta'},
        {id: 16, name: 'RubberMan'},
        {id: 17, name: 'Dynama'},
        {id: 18, name: 'Dr IQ'},
        {id: 19, name: 'Magma'},
        {id: 20, name: 'Tornado'}
    ];
    console.log(ctx.params);
    let id = ~~ctx.params['id'];
    if(id > 0) {
        for(let i = 0; i < data.length; i++) {
            if(data[i].id == id) {
                ctx.response.body = data[i];
                break;
            }
        }
    }
    ctx.response.type = 'text/json';
    await next();
});



module.exports = router;