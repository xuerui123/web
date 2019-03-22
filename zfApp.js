let koa = require('koa');
let router = require('koa-router')();
let gzip = require('koa-gzip');
let jade = require("jade");
let path = require('path');
let serve = require('koa-static-cache');
let bodyParser = require('koa-bodyparser');
let fs = require('fs');
const crypto = require('crypto');
let app = new koa();
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
        let num = JSON.parse(fs.readFileSync(`${__dirname}/fs/lookNum.json`,'utf8'));
        let str = path;
        num[str] = num[str] ? num[str] + 1 : 1;
        fs.writeFileSync(`${__dirname}/fs/lookNum.json`,JSON.stringify(num),'utf8');
        if (!params) {
            params = {};
        }
        if(this.phoneType && this.phoneType.match(/android/i) == 'android'){
            ctx.body = jade.renderFile(`${__dirname}/phone/${path}.jade`, params);
        }else if (this.phoneType && (this.phoneType.match(/iphone/i) == 'iphone' || this.phoneType.match(/ipad/i) == 'ipad')) {
            ctx.body = jade.renderFile(`${__dirname}/phone/${path}.jade`, params);
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
router.get('/join', ctx => ctx.render('join'));
router.get('/news', ctx => ctx.render('news'));
router.get('/service', ctx => ctx.render('service'));
router.get('/chuanglian', ctx => ctx.render('chuanglian'));
router.get('/kaiguan', ctx => ctx.render('kaiguan'));
router.get('/menchuang', ctx => ctx.render('menchuang'));
router.get('/mensuo', ctx => ctx.render('mensuo'));
router.get('/rentichuanganqi', ctx => ctx.render('rentichuanganqi'));
router.get('/shengguang', ctx => ctx.render('shengguang'));
router.get('/mulian', ctx => ctx.render('mulian'));
router.get('/qiti', ctx => ctx.render('qiti'));
router.get('/baojing', ctx => ctx.render('baojing'));
router.get('/shuijin', ctx => ctx.render('shuijin'));
router.get('/sos', ctx => ctx.render('sos'));
router.get('/yanwu', ctx => ctx.render('yanwu'));
router.get('/qiangmiantie', ctx => ctx.render('qiangmiantie'));
router.get('/guanjia', ctx => ctx.render('guanjia'));
router.get('/xiaoqiao', ctx => ctx.render('xiaoqiao'));
router.get('/wait', ctx => ctx.render('wait'));
router.get('/chazuo', ctx => ctx.render('chazuo'));
router.get('/buy', ctx => ctx.render('buy'));

router.get('/news/news1', ctx => ctx.render('news/news1'));
router.get('/news/news2', ctx => ctx.render('news/news2'));
router.get('/news/news3', ctx => ctx.render('news/news3'));
router.get('/news/news4', ctx => ctx.render('news/news4'));
router.get('/news/news5', ctx => ctx.render('news/news5'));
router.get('/news/news6', ctx => ctx.render('news/news6'));
router.get('/news/news7', ctx => ctx.render('news/news7'));
//手机端页面
router.get('/home', ctx => ctx.render('home'));
router.get('/hotel', ctx => ctx.render('hotel'));




app.use(serve(path.join(__dirname, './resource')));
app.use(router.routes());
app.listen(3400, function () {
    console.log(`程序启动成功，当前监听3400端口`);
});
