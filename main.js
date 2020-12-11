// // 动态变量类型 （dynamic）
// //这里的变量为global
// //js has dynamically typed languages
// var a = 1;
// var b = 2;

// //变量的使用域（scope）
// function myfunction() {
//     var string = "yesmaster";
//     console.log(string);
// }

// // //这个loop里的i是global var
// // for (var i = 0; i < 10; i++) {
// //     // 这个是local的
// //     var c = 2;
// // }


// // primitive types

// // object
// var a = {
//     "name" : "yes master",
//     "age" : 40,
// }

// var b = "age";
// console.log(a[b]); // same as console.log(a.age)
// // a.name = undefined; //重新定义成undefined,就是删去的操作

// // // array
// // var arr = ["a", "b", "c","d"];

// // console.log(JSON.stringify(a));
// // console.log(JSON.stringify(a.name));


// function myfunction2() {
//     console.log("this is the easiest function");
// }

// function call_back_example(num, myfunction, myfunction2) {
//     if (num === 0) {
//         myfunction();
//     }else if (num === 1) {
//         myfunction2();
//     }
// }

//getElement*
var oUser = document.getElementById('user');
console.log(oUser);

var oCommon = document.getElementsByClassName('common');
console.log(oCommon);

var oUl = document.getElementsByClassName('box');
var oLis = document.getElementsByTagName('li');
var john = oUl[0].getElementsByTagName('li')[0];
console.log(oUl);
console.log(oLis);
console.log(john);

//querySelector
var oUser2 = document.querySelector('#user');
console.log(oUser2);

var oLis2 = document.querySelectorAll('li');
console.log(oLis2);

var oCommons = document.querySelectorAll('.common');
console.log(oCommons);

