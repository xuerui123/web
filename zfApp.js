var koa = require('koa');
var router = require('koa-router')();
var gzip = require('koa-gzip');
var jade = require("jade");
var path = require('path');
var serve = require('koa-static-cache');
var bodyParser = require('koa-bodyparser');
const crypto = require('crypto');
var app = new koa();
//koa压缩文件
app.use(gzip());
//post请求处理
app.use(bodyParser());

//添加渲染方法
app.use(async (ctx, next) => {
    ctx.render = function (path, params) {
        if (!params) {
            params = {};
        }
        ctx.body = jade.renderFile(`${__dirname}/view/${path}.jade`, params);
    };
    await next();
});

//dianyong
router.post('/api/*', async (ctx) => {
    let api = ctx.path.substring('/api/'.length);
    try {
        ctx.body = await http.post(api, {param: ctx.request.body});
    } catch (e) {
        ctx.status = 500;
        ctx.body = e.message;
    }
});



router.get('/', ctx => ctx.render('index'));
router.get('/index', ctx => ctx.render('index'));

app.use(serve(path.join(__dirname, './resource')));
app.use(router.routes());
app.listen(3400, function () {
    console.log(`程序启动成功，当前监听3400端口`);
});
