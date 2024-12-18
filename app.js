console.log("this is appjs");




//  npm start

// > js-concepts@1.0.0 start
// > node app.js

// this is appjs
// PS E:\Durgesh React\Week 3\JS\js concepts> npm run dev

// > js-concepts@1.0.0 dev
// > node app.js


// this is appjs
// PS E:\Durgesh React\Week 3\JS\js concepts> 

// Javascipt imp for react js
/*
ES6 Features
1. Arrow Functions
2. 
*/

// function fun(a,b,c){
//     console.log("this is fun function");
//     console.log(a+b+c);
    
// }
// fun(1,2,3);

// const myFunc = (a,b,c) =>{
//     console.log("Hello World");
// }

// myFunc(10,20,30); 


function test(sayHello){
    console.log("calling sayhello" + sayHello);

    sayHello();
}
// test(abc());
// function abc(){
//     console.log("aaa");
    
// }

// test(()=>{console.log("this is say hello function");
// });

// function fetchData(url,successCallback){
//     console.log("Fetching Data");
//     console.log(url);
//     console.log("success");
//     successCallback();    
// }
// fetchData('http://',()=>{
//     console.log("Success");
    
// })

// Explaination of fetch 

// fetch('https://jsonplaceholder.typicode.com/todos/2').
// then((response)=>{
//      console.log("AAAAAAAAAAAA");
//     console.log(response);
//     data = response.json();
   
    
//    (data).then((data)=>{
//     console.log(data);
//    }).catch((error) =>{
//     console.log(error);
    
//    })
//     console.log("ans in");
    
// })
// .catch((error)=>{
//     console.log(error);
    
// })

// console.log("ans out");

const fun = () => 45;
console.log(fun());

// 2.String Templates
// ${variable}

// let name = "Ali";
// let message = 'Hello ${name}'
// let a = 44
// let b = 71
// console.log(`${a+b}`);

// const fetchData = (url) =>{
//     console.log(url);
    
// }

// const baseUrl = 'http://localhost:8080/';
// const userId = '123456'
// fetchData(`${baseUrl}/api/v1/${userId}/image`)

// Object Destructuring and Array Destructuring
const person = {name:"Ali",age:10};

const friends=['arvind','sanskar','chandan']

// const f1 = friends[0];
// const f2 = friends[1];
// const f3 = friends[2];

// const [f1,f2,f3] = friends;
// console.log(f1);
// console.log(f2);


// // Spread & Rest Operator
// const newFriends = [
//     ...friends,
//     "sachin",
//     "rahul"
// ]
// console.log(newFriends);

// const user = {
//     ...person,
//     age:25,
//     city:"Delhi",
//     country:"India"
// }
// console.log(user);

