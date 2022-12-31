function recursion(n) {
    if(n<0)
     return;
    console.log(n);
    recursion(n-1) //* Karthik calling Karthik
}
//recursion(5);


function factorial(n) {
    if(n==0 || n==1) return 1;
    console.log(n);
    const semiResult = factorial(n-1);
    const finalResult = n * semiResult;
    return finalResult
    //return n * factorial(n-1);
}


let result = factorial(5);
console.log("factorial is", result) //120

const factorial_opti = n => !n ? 1 : n * factorial_opti(n-1);
let opt_result = factorial_opti(5);
console.log("Opti factorial is", opt_result) //120
