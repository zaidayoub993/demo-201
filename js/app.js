'use strict'
var num = 1;
console.log(typeof num);
var str = 'zaid';
console.log(typeof str);
var bool = true;
console.log(typeof bool);
// // if(condition){
// //     do statement 
// // }else{
//     do another statemant 
// }
var age = 28;

if (age > 27) {
    alert('hi');
}

else {
    console.log('hello');
}
var isold = true;
var isfat = false;
if (isold && isfat) {
    console.log('hi fat old')
} else if (isold || isfat) {
    console.log('hi fat or old ');
} else {
    console.log('nooo');
}