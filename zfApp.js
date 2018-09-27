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

app.use(function* (next) {
    try {
        this.phoneType = this.header['user-agent'].toLowerCase();
    } catch (e) {
        this.phoneType = '';
    }

    yield next;
});

//添加渲染方法
app.use(async (ctx, next) => {

    ctx.render = function (path, params) {
        if (!params) {
            params = {};
        }
        if(this.phoneType && this.phoneType.match(/android/i) == 'android'){
            ctx.body = '请用PC端打开页面'
        }else if (this.phoneType && (this.phoneType.match(/iphone/i) == 'iphone' || this.phoneType.match(/ipad/i) == 'ipad')) {
            ctx.body = '请用PC端打开页面'
        }else{
            ctx.body = jade.renderFile(`${__dirname}/view/${path}.jade`, params);
        }

    };
    await next();
});



router.get('/', ctx => ctx.render('index'));
router.get('/index', ctx => ctx.render('index'));
router.get('/product', ctx => ctx.render('product'));
router.get('/solution', ctx => ctx.render('solution'));
router.get('/infrared', ctx => ctx.render('infrared'));
router.get('/open', ctx => ctx.render('open'));
router.get('/aboutUs', ctx => ctx.render('aboutUs'));
router.get('/news', ctx => ctx.render('news'));
router.get('/service', ctx => ctx.render('service'));

app.use(serve(path.join(__dirname, './resource')));
app.use(router.routes());
app.listen(3400, function () {
    console.log(`程序启动成功，当前监听3400端口`);
});
