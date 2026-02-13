// console.log("one");
// console.log("Two");
// setTimeout(()=>{
//     console.log("good evening");
// },1000);
// console.log("Three");
// setTimeout(()=>{
//     console.log("good evening");
// },1000);
// function sum(a,b){
//     console.log(a+b);
// }
// function multiply(a,b){
//     console.log(a*b);
// }



// function calculator(a,b,Callback){
//     Callback(a,b);
// }
// calculator(1,2,sum)
// calculator(2,3,multiply)

function getData(dataId,getNextData){ //2s
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextData){
        getNextData();
        }
        
    },2000);  
}
getData(13,()=>{
    getData(2)
});
