// console.log(addition(10,29));
// const add=addition(10,20);
// console.log(add);

// // Named functions
// function addition(a,b){
//     const result=a+b;
//     // console.log(result)
//     return result
// }

// // Anonymous functions or function expression
// let multiplication=function (a,b){
//     let result=a*b;
//     return result;
// }
// console.log(multiplication(10,20));
// // Nested functions

// function addsquares(x,y){
//     const a=square(x);
//     const b=square(y);
//     function square(a){
//         return a*a;
//     }
//     return a*b;
// }

// console.log(addsquares(4,5));
// Arrow functions
const greet =()=>{
    console.log("good morning");
    
}
greet()

// const addition=(a,b)=>{
//     return a+b;
// }

// console.log(addition(89,89));

// const addition=(a,b)=> a+b;
// console.log(addition(90,90));

// call backfunction is the where we pass function as
//a parameter

// const calculate=(a,b,operation)=>{
//     return operation(a,b);
// }
// console.log(calculate(2,3,function(n1,n2){
//     return n1+n2;
// }
// ));
// Anonymous functions
// const calculate=(a,b,operation)=>{
//     return operation(a,b)
// }
// const addition=calculate(2,6,function(n1,n2){
//     return n1+n2
// })
// const subtraction=calculate(2,6,function(n1,n2){
//     return n1-n2
// })

// const multiplication=calculate(2,6,function(n1,n2){
//     return n1*n2
// })

// const division=calculate(2,6,function(n1,n2){
//     return n1/n2
// })
// console.log("addition of a,b is",addition);
// console.log("subtraction of a,b is",subtraction);
// console.log("multiplication of a,b is",multiplication);
// console.log("Division of a,b is",division);
// // named function in call back

// function modular(a,b){
//     return a%b;
// }


// console.log("modular division of a,b is : ",calculate(2,6,modular))

const arr=[2,5,6,8,9,0,-3,-5,-2];
// method 1
const result=(num)=>num<0;
console.log(arr.find(result))
console.log(arr.findIndex(result))

// method 2
// const result=(num)=>{
//     return num<0;
// }
// console.log(arr.find(result))
// method 3
// const result=(num)=>{
//     if (num<0){
//     return num
//     }
// }
// console.log(arr.find(result))

arr.forEach((num,index)=>{
    console.log("value is : ",num,"index is : ",index);
    
})
