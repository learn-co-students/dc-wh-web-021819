"use strict"

var a = "hello world"

// console.log(this)
//this
// console.log("this in the global space", this)





let paul = {
  firstName: "Paul",
  lastName: "Nicholsen",
  greet: function(){
    debugger //this == paul
    console.log(`${this.firstName} says hi`)

    const setFullName = () => {
      debugger //this == the outter scope's this
      this.fullName = this.firstName + " " + this.lastName
    }

    setFullName()

  }
}

let ann = {
  firstName: "Ann",
  lastName: "Duong"
}

let rob = {
  firstName: "Rob",
  lastName: "Cobb"
}

//
// paul.greet()
// ann.greet()

function greet(person1, person2){
  console.log(`${this.firstName} says hi to ${person1} and ${person2}`)
}

//.bind, .call, and .apply

//bind() that returns a new copy of a function
//the value of this is 'hardcoded'

let boundedGreet1 = greet.bind(ann, "Lane")
let boundedGreet2 = greet.bind(ann, "Trevor")
let boundedGreet3 = greet.bind(rob, "Lane")
let boundedGreet4 = greet.bind(rob, "Will")

// let anotherGreet = greet.bind(rob)

//call and apply

// greet.call(rob, "Trevor", "Lane")
greet.apply(rob, ["Will", "Bruno"])












//
