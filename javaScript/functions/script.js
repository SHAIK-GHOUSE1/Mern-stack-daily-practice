console.log(addition(10,29));
const add=addition(10,20);
console.log(add);

// Named functions
function addition(a,b){
    const result=a+b;
    // console.log(result)
    return result
}

// Anonymous functions or function expression
let multiplication=function (a,b){
    let result=a*b;
    return result;
}
console.log(multiplication(10,20));
// Nested functions

function addsquares(x,y){
    const a=square(x);
    const b=square(y);
    function square(a){
        return a*a;
    }
    return a*b;
}

console.log(addsquares(4,5));
