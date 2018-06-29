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
        if (ctx.user) {
            params.user = ctx.user;
            params.user.gradeText = conf.member[params.user.grade];
        }
        params.resource = conf.system.resource;
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


router.get('/login', ctx => ctx.render('login'));
router.get('/', ctx => ctx.render('login'));
router.get('/index', ctx => ctx.render('index'));
router.get('/user/list', ctx => ctx.render('user/list'));
router.get('/list/index', ctx => ctx.render('list/index'));
router.get('/list/sort', ctx => ctx.render('list/sort'));
router.get('/list/details', ctx => ctx.render('list/details'));
router.get('/list/see', ctx => ctx.render('list/see'));
router.get('/list/photo', ctx => ctx.render('list/photo'));
router.get('/setting/index', ctx => ctx.render('setting/index'));
router.get('/setting/set', ctx => ctx.render('setting/set'));
router.get('/account/withdrawal', ctx => ctx.render('account/withdrawal'));
router.get('/account/money', ctx => ctx.render('account/money'));
router.get('/account/extract', ctx => ctx.render('account/extract'));
router.get('/account/refund', ctx => ctx.render('account/refund'));


app.use(serve(path.join(__dirname, './resource')));
app.use(router.routes());
app.listen(3400, function () {
    console.log(`程序启动成功，当前监听3400端口`);
});
