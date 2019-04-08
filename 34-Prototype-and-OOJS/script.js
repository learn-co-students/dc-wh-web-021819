// // var ann = {
// //   firstName: "Ann",
// //   lastName: "Duong"
// // }
// //
// // var paul = {
// //   firstName: "Paul",
// //   lastName: "Nicholsen"
// // }
//
// // function instructoryFactory(firstName, lastName){
// //   return {
// //     firstName: firstName,
// //     lastName: lastName
// //   }
// // }
//
// //ES5
// // function Instructor(firstName, lastName){
// //   this.firstName = firstName
// //   this.lastName = lastName
// //   //return undefined
// // }
// //
// // Instructor.prototype.greet = function(){
// //   console.log(`${this.firstName} says hi`)
// // }
// //
// // Instructor.prototype.goesHome = function(){
// //   console.log(`${this.firstName} is leaving`)
// // }
// //
// // var ann = new Instructor("Ann", "Duong")
// // //var ann = {} -> this for Instructor()
// // var paul = new Instructor("Paul", "Nicholsen")
//
// //ES6
// // class Person {
// //   constructor(firstName, lastName) {
// //     this.firstName = firstName
// //     this.lastName = lastName
// //   }
// //   greet(){
// //     console.log(`${this.firstName} says hi`)
// //   }
// // }
//
// // class Instructor extends Person {
// //     static all = []
// //
// //     constructor(firstName, lastName, id){
// //       super(firstName, lastName)
// //       this.employeeId = id
// //       Instructor.all.push(this)
// //     }
// //     goeshome(){
// //       console.log(`${this.firstName} is leaving`)
// //     }
// //     static campusIsClose(){
// //       console.log(`Please come back tomorrow`)
// //       Instructor.all//ieterate and alert instructors
// //     }
// // }
// var ann = new Instructor("Ann", "Duong", 1)
// var paul = new Instructor("Paul", "Nicholsen", 2)
// var jane = new Person("Jane", "Doe")
//
//
//
//
//
//
//







document.addEventListener("DOMContentLoaded", function(){
  this.fetchPokemon()
})

function fetchPokemon(){
  fetch(url)
  .then(res => res.json())
  .then(pokemonArray => {
    pokemonArray.forEach(pokemon => {
      let pokemonInstance = new Pokemon(pokemon)
    })
  })
}
