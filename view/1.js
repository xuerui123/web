define("version", "6.9.2.26754");
define("resolution", "480*854");
define("requireVersion", "2.5.0");
var device = Device.searchObject(sigmaConst.DevSelectMult);
if (!device) {
    print("Cannot find device");
    throw "Cannot find device";
}

let str = ' 1——哪个动物经常用来形容厉害的人?a牛  b虎  c猴子,\n' +
    '　　答：牛,\n' +
    '　　2——哪项比赛是往后跑的?a跳远 b拔河 c游泳,\n' +
    '　　答：拔河,\n' +
    '　　3——什么人最喜欢添油加醋?a律师 b领导 c同事,\n' +
    '　　答：厨师,\n' +
    '　　4——什么掌不能拍?a,\n' +
    '　　答：仙人掌,\n' +
    '　　5——什么人天天去看病?,\n' +
    '　　答：医生,';
let arr = str.split(',');

for (var i = 0; i < arr.length; i++) {
    let time = parseInt(Math.random()*(15-3+1)+2);
    sleep(time*1000,arr[i])
}
function sleep(numberMillis,str) {
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    while (true) {
        now = new Date();
        if (now.getTime() > exitTime) {
            device.swipe([[0.5310, 0.7853, 0],[0.5448, 0.7756, 51],[0.5552, 0.7544, 55],[0.5724, 0.6944, 61],[0.5828, 0.6654, 62],[0.5828, 0.6634, 78]]);
            device.delay(1075);
            device.click(0.5310, 0.9516, sigmaConst.STATE_DOWN);
            device.delay(110);
            device.click(0.5310, 0.9516, sigmaConst.STATE_UP);
            device.inputText(str);
            device.delay(1565);
            device.click(0.9034, 0.9497, sigmaConst.STATE_DOWN);
            device.delay(16);
            device.click(0.9034, 0.9497, sigmaConst.STATE_UP);
            return;
        }

    }
}

//
// define("version", "6.9.2.26754");
// define("resolution", "480*854");
// define("requireVersion", "2.5.0");
// var device = Device.searchObject(sigmaConst.DevSelectMult);
// if(!device) {
//     print("Cannot find device");
//     throw "Cannot find device";
// }
//
// device.delay(4045);
// device.inputText("2");
// device.delay(2565);
// device.click(0.9034, 0.9497, sigmaConst.STATE_DOWN);
// device.delay(16);
// device.click(0.9034, 0.9497, sigmaConst.STATE_UP);
//


let time = ''

function sleep(numberMillis) {
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    while (true) {
        now = new Date();
        if (now.getTime() > exitTime)
            return;
    }
}
for(var i = 0; i < 5 ; i++){
    console.info(i);
    let time = parseInt(Math.random()*(8-3+1)+3,10);
    console.log(time*1000)
    sleep(time*1000);
}
