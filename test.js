// let roomList = [{id:6,name:''},{id:7,name:2},{id:8,name:3}];
// let list = [{name:'',a:"jjd"},{name:2,a:"sa"},{name:2,a:"ser"},{name:'',a:"axx"},{name:'',a:"xzsa"},{name:3,a:"mlm"}];
//     // [
//     //     {name:'',content:[{name:'',a:"jjd"},{name:'',a:"axx"},{name:'',a:"xzsa"}]},
//     //     {name:'2',content:[{name:2,a:"sa"},{name:2,a:"ser"}]},
//     //     {name:'3',content:[{name:3,a:"mlm"}]}
//     //  ]
// let newList = [];
//
// for(let i = 0;i<roomList.length;i++)
// {
//     var temObj = {};
//
//     temObj.name = roomList[i].name;
//
//     var temList = [];
//
//     for(let j = 0; j<list.length;j++)
//     {
//         if(temObj.name == list[j].name)
//         {
//             temList.push(list[j]);
//         }
//     }
//     temObj.content = temList;
//
//     newList.push(temObj);
// }
// console.log(JSON.stringify(newList));




// let arr =[]
// for(let i =0 ; i<=99;i++){
//     arr.push(i+'%')
// }
// console.log(arr)


let devlist = [{yid:1},{yid:2},{yid:3},{yid:4}]
let sev = [{yid:2},{yid:4}]
for(let i = 0 ; i< devlist.length;i++){
    for (let a = 0 ; a<sev.length;a++){
        if (devlist[i].yid == sev[a].yid){
            console.log(devlist[i])
        }
    }
}
// //转换时间
// function transDate(n) {
//     var date = new Date(n);
//     var Y = date.getFullYear() + '-';
//     var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
//     var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
//     return (Y + M + D)
// }
// //处理原数组
// for(var i=0;i<data.length;i++){
//     var timeitem = transDate(data[i].time);
//     console.log(data[i].time);
//     data[i].time = timeitem;
// }

//返回所需数据格式
// const mapLoction = function(arr) {
//     let newArr = [];
//     arr.forEach((address, i) => {
//         let index = -1;
//         let alreadyExists = newArr.some((newAddress, j) => {
//             if (address.date === newAddress.date) {
//                 index = j;
//                 return true;
//             }
//         });
//         if (!alreadyExists) {
//             newArr.push({
//                 date: address.date,
//                 location: [address]
//             });
//         } else {
//             newArr[index].location.push(address);
//         }
//     });
//     return newArr;
// };
// console.log(mapLoction(data));


{"id":"1","sid":"331e73ef4a3926d216633d77fe88f418","xqid":"30373331313064303761343837336332","sna":"hhfh","timearea":"03:00-00:00","svc":"我回来了","svcack":"","sev":"3ad99d3432cfdc1c536777bd923d629b_open,adf9ae90e3b4d058aea281d88cea999d_lumiH60,adf9ae90e3b4d058aea281d88cea999d_temH33℃","timedo":"repeat:1;mode:2;date:3,4,5,6;time:00:00","voevdp":"","evindp":"1","sevc":"1","action":"1,打开客厅空调,1,关闭客厅筒灯","env":"","scres1":"","scres2":""}