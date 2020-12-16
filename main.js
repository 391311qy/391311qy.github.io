import ReactDOM from 'react-dom';

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

// //--------------------------
// var oUser = document.getElementById('user');
// console.log(oUser);

// var oCommon = document.getElementsByClassName('common');
// console.log(oCommon);

// var oUl = document.getElementsByClassName('box');
// var oLis = document.getElementsByTagName('li');
// var john = oUl[0].getElementsByTagName('li')[0];
// console.log(oUl);
// console.log(oLis);
// console.log(john);

// //querySelector
// var oUser2 = document.querySelector('#user');
// console.log(oUser2);

// var oLis2 = document.querySelectorAll('li');
// console.log(oLis2);

// var oCommons = document.querySelectorAll('.common');
// console.log(oCommons);

// ---------------------------

// client side rendering using react
// create virtual dom element
// JS expression


// here it also uses html, which is intotal called jsx.
// const a = 10;
// const str = 'this is a str';
// const arr = [ <p key='1'>first</p>, <p key='2'>second</p>, <p key='3'>third</p> ];

// //map : used to modify the array using a function.
// const arr1 = ['apple', 'pear', 'berry'];
// const res = arr1.map((item, index) => {
//            return <p key={index}>* {item} *</p>// <p defines a paragraph>
//        });

// // JS function
// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez',
// };

// const element = <h1>Hello, {formatName(user)}!</h1>;

// ReactDOM.render(element, document.getElementById('root'));



function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}


function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}
 
setInterval(tick, 1000);
