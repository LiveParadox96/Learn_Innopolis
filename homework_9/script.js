'use strict';
const firstNumber=document.querySelector('.first-number');
const secondNumber=document.querySelector('.second-number');
const operations = document.querySelector('.operations');
const btn= document.querySelector('.btn')
let result;

// let operationsStr = String(operations)
btn.addEventListener('click', (event)=>{
    if(operations.value=='*'){
        result= +firstNumber.value* +secondNumber.value
        console.log(result)
    }else if(operations.value=='/'){
        result= +firstNumber.value / +secondNumber.value
        console.log(result)
    }else if(operations.value=='+'){
        result= +firstNumber.value + +secondNumber.value
        console.log(result)
    }else if(operations.value=='-'){
        result= +firstNumber.value - +secondNumber.value
        console.log(result)
    }

    if(firstNumber.value.length===0 && secondNumber.value.length===0){
        alert('Первое число и второе число не указано')
    }else if(secondNumber.value.length===0){
        alert('Второе число не указаано')
    }else if(firstNumber.value.length===0){
        alert('Первое число не указано')
    }else if(operations.value.length===0){
        alert('Не введён знак')
    }else if(firstNumber.value.length===!typeof(Number)||secondNumber.value.length===!typeof(Number)){
        alert('Некорректный ввод чисел')
    }else if(!((operations.value=== '+')||(operations.value=== '-')||(operations.value== '*')||(operations.value=== '/'))){
        alert('Программа не поддерживает такую операцию')
    }else if (operations.value.length>1){
        alert('Программа не поддерживает такую операцию')
    }else if(result==Infinity){
        alert('Операция некорректна')
    }
})
