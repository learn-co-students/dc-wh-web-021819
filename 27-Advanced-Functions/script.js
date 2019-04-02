//setTimeout
let masterList = []
//takes in a function, delay in ms
// setTimeout(sayHello, 3000)
// // let id = setInterval(sayHello, 1000)
// //
// function sayHello(){
//   console.log('Hi...')
// }

// setTimeout(function(){clearInterval(id)}, 5000)

// let arr = [4,6,2,8]
// let mappedArray = arr.map(negNumber)
// //function that takes in a number and returns negative
// function negNumber(num){
//   return -1 * num
// }
// console.log(mappedArray)
//
// //array is an array and callback is a function
// function myMapFunction(array, callback){
//   let newArray = []
//   for(let i=0; i<array.length; i++){
//     newArray[i] = callback(array[i])
//   }
//   return newArray
// }
//
// function squared(val){
//   return val*val
// }
//Callback
//name is a string, process is a function
// function onBoardStudent(name, process){
//   console.log(`Welcome ${name} to Flatiron!`)
//   process(name)
// }
//
// onBoardStudent("Paul", convertToStudent)
// onBoardStudent("Joe", brandNewStudent)
//
// function brandNewStudent(studentName){
//   console.log(`${studentName}, here is your key card!`)
// }
//
// function convertToStudent(studentName){
//   console.log(`${studentName}, please turn in your laptop, here is your new one`)
// }

//Return functions: Function Factories
// function welcomeStudentToMod(modNum){
//   //modNum exists in this scope
//   return function(name){
//     console.log(`Welcome, ${name}, to Mod ${modNum}`)
//   }
//
// }
//
// let welcomeStudentToMod1 = welcomeStudentToMod(1)
// let welcomeStudentToMod2 = welcomeStudentToMod(2)
// let welcomeStudentToMod3 = welcomeStudentToMod(3)
// let welcomeStudentToMod4 = welcomeStudentToMod(4)
// let welcomeStudentToMod5 = welcomeStudentToMod(5)
// let welcomeStudentToMod6 = welcomeStudentToMod(6)
// welcomeStudentToMod1("Ann")
// welcomeStudentToMod2("Paul")
// welcomeStudentToMod4("Trevor")
// welcomeStudentToMod5("Lane")
//
// function welcomeStudentToModNumber(name, num){
//   console.log(`Welcome, ${name}, to Mod ${num}`)
// }


//Closure
// function generateStudentCounter(countStart){
//   let count = countStart
//   return function(name){
//     count++
//     console.log(`Welcome ${name}, your ID is ${count}`)
//   }
// }
//
// let generateInstructorID = generateStudentCounter(0)
// let generateStudentID = generateStudentCounter(67)
//

(function (date, location, cohort){
  window.DCCampus = {
    date: date,
    location: location,
    cohort: cohort
  }



  //even
  //more
  //code


  //here...
})('March 2018', 'G Street', 'Baby Got Stack')












//
