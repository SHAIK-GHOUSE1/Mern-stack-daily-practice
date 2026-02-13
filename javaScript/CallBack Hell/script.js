// setTimeout(function greet(){
//     console.log("welcome to the world");
// },3000)
// console.log("one");
// console.log("Two");
// console.log("Three");

// function getcandies(callback1){
//     setTimeout(() => {
//         const candies="🍬🍬🍬🍬🍬🍬🍬";
//         console.log("In our getcandies method",candies);
//         callback1(candies)
//         // return candies;
//     }, 5000);
// }
// // console.log(getcandies());
// getcandies(()=>{
//     console.log("here is our candy",candies);
// })

console.log("one")
console.log("Two")
setTimeout(function greet(){
    console.log("This will execute after 10 seconds")
},3000);
console.log("Three")
