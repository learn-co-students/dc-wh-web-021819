// console.log('hello world!!!')
//
// var a = "a"
//
// var b = 3
// debugger
// function myFunction(){
//   return 45
// }
// console.log("on line 10")
// var c = "Ann"
// myFunction()
// function example(arg1, arg2){
//   return arg1 + " " + arg2
// }
// var a
//
// var b = null
//
// var c = 4+5

//Pass by value, vs pass by reference

// function timesTwo(num){
//   num = num * 2
//   return num
// }
//
// var x = 4
// var y = timesTwo(x)

function timesTwo(z){
  //you have to make a copy of z
  var w = {...z} //copy of z
  // var w = Object.assign({}, z)
  w.val = w.val * 2
  return w
}
var obj = {val: 4}
var anotherObj = timesTwo(obj)











//
