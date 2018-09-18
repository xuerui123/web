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


let arr = []
for (let i = 86; i <= 99; i++) {
    arr.push(i + '很亮')
}
console.log(arr)
// [ '0很黑', '1很黑', '2很黑', '3很黑', '4很黑', '5很黑', '6很黑', '7很黑', '8很黑', '9很黑', '10很黑','11较黑', '12较黑', '13较黑', '14较黑', '15较黑', '16较黑', '17较黑', '18较黑', '19较黑', '20较黑' , '21较暗','22较暗','23较暗','24较暗','25较暗','26较暗','27较暗', '28较暗', '29较暗', '30较暗' ,'31稍暗', '32稍暗', '33稍暗', '34稍暗', '35稍暗', '36稍暗', '37稍暗', '38稍暗', '39稍暗', '40稍暗', '41稍暗', '42稍暗', '43稍暗', '44稍暗', '45稍暗', '46稍暗', '47稍暗', '48稍暗', '49稍暗', '50稍暗' ,'51稍亮', '52稍亮', '53稍亮', '54稍亮', '55稍亮', '56稍亮', '57稍亮', '58稍亮', '59稍亮', '60稍亮', '61稍亮', '62稍亮', '63稍亮', '64稍亮', '65稍亮', '66稍亮', '67稍亮', '68稍亮', '69稍亮', '70稍亮' ,'71明亮', '72明亮', '73明亮', '74明亮', '75明亮', '76明亮', '77明亮', '78明亮', '79明亮', '80明亮', '81明亮', '82明亮', '83明亮', '84明亮', '85明亮' , '86很亮', '87很亮', '88很亮', '89很亮', '90很亮', '91很亮', '92很亮', '93很亮', '94很亮', '95很亮', '96很亮', '97很亮', '98很亮', '99很亮' ]

// let devlist = [{yid:1},{yid:2},{yid:3},{yid:4}]
// let sev = [{yid:2},{yid:4}]
// for(let i = 0 ; i< devlist.length;i++){
//     for (let a = 0 ; a<sev.length;a++){
//         if (devlist[i].yid == sev[a].yid){
//             console.log(devlist[i])
//         }
//     }
// }
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

// {
//     act:"add"
//     date:{}
//     action:"1,播放张学友的祝福"
//     evindp:1
//     sev:"0,ea54365028826a624031b715be997ad7_move"
//     sevc:""
//     sna:"是的"
//     svc:""
//     timearea:"00:00-23:59"
//     timedo:""
//     did:"30373331313044303741343836424338"
//     op:"scene"
//     uid:"ow2D50OFu0K6pKxJrsSVW0LmKa-4"
// }
