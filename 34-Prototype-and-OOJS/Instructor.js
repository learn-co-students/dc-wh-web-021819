class Instructor extends Person {
    static all = []

    constructor(firstName, lastName, id){
      super(firstName, lastName)
      this.employeeId = id
      Instructor.all.push(this)
    }
    goeshome(){
      console.log(`${this.firstName} is leaving`)
    }
    static campusIsClose(){
      console.log(`Please come back tomorrow`)
      Instructor.all//ieterate and alert instructors
    }
}
