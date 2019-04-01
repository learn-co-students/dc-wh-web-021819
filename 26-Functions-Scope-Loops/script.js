// debugger
// document.querySelector('button').innerText = "Ann was here"
// document.querySelector('button').style.backgroundColor = "red"
//
// setTimeout(function(){document.querySelector('button').style.backgroundColor = "blue"
}, 2000)
// // console.log('connected')
// // debugger
// // myFunction("hello")
// // funcExpression("hi")
//
//
// //Function Declaration
// function myFunction(arg){
//   console.log('inside func declaration', arg)
//   return 1
// }
//
// //function expression
// var funcExpression = function(arg){
//   console.log("inside annonymnous function", arg)
// }
//
// //arrow functions
// var arrowFunc = (arg1, arg2) => {
//   console.log('inside an arrow function')
// }
//
// var arrowFunc = arg1 => 'inside arrow ' + arg1
//
// var timesTwo = num => num*2
//
//
//
// var a = "a"
// var b = "b"
// let c = "c"
// const d = "d"

//Scope - the palce where a variable is born, lives, and dies

//var, let, and const
//no declaration = globally scope

// //var CAN be redeclared and CAN be reassigned
// var a = "a"
//
// //let CANNOT be redecalred, it CAN be reassigned
// let b = "b"
//
// //const CANNOT be redelared or reassigned
// const c = "c"


let iceCream = "mint"
function aFunction(){
  let iceCream = "vanilla"
  anotherFunction()
}

function anotherFunction(){
  console.log(iceCream)
}


// aFunction()

// console.log("inside global scope", iceCream)


















//
//function -> as callbacks

//Iterate in JS
let arr = [4,7,2,6]
let obj = {firstName: "Ann", lastName:"Duong"}
// for(let i = 0; i<arr.length; i++){
//   console.log(arr[i])
// }

//x = element in the array
//for of -> arrays
// for(const element of arr){
//   console.log(element)
// }

//x = index in the array
//x = key in the obj
// for(const key in obj){
//   console.log(key)
// }

// const myRandomFunction = el => el < 3

let newArr = arr.map(currentVal => currentVal * 10)

let newArr = arr.map(function(currentVal){return currentVal * 10})

// newArr = arr.find(myRandomFunction)

// newArr = arr.filter(function(num){return num > 3})


// let newArr = arr.map(
// function timesTen(currentVal){
//   return currentVal * 10
// })






console.log(newArr)









//
