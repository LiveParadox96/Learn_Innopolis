// function  makeFibonacciFunction(){
// let onenum = 0;
// let twonum = 1;
// return()=>{
//     let fib=onenum;
//     onenum=twonum;
//     twonum=fib+onenum;
//     return twonum;
// }
// }

// const fibonacci =  makeFibonacciFunction()


// console.log(fibonacci())
// console.log(fibonacci())
// console.log(fibonacci())
// console.log(fibonacci())
// console.log(fibonacci())


function fibonacci() {
    let onenum = 0;
    let twonum = 1;
    let count = 0;

    return () => {
        if(count === 0){
            count++;
            return 0
        }
        if (count === 1){
            count++;
            return 1
        }
        let summ = onenum + twonum;
        onenum= twonum;
        twonum = summ
        return summ;
    }
}

const funcFibo =fibonacci()

console.log(funcFibo());
console.log(funcFibo());
console.log(funcFibo());
console.log(funcFibo());
console.log(funcFibo());
console.log(funcFibo());
console.log(funcFibo());
console.log(funcFibo());

