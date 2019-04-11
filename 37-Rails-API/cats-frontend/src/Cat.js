class Cat {
  static all = []

  constructor(cat){
    this.id = cat.id
    this.name = cat.name
    this.breed = cat.breed
    this.image = cat.image
    this.fluffiness = cat.fluffiness
    this.hobbies = cat.hobbies
    Cat.all.push(this)
  }

  render(){
    let catDiv = document.createElement("div")
    catDiv.classList.add("four", "wide", "column")
    catDiv.id = `cat-${this.id}`
    catDiv.innerHTML = `
    <div class="ui card">
      <div class="image">
        <img src="${this.image}">
      </div>
      <div class="content">
        <p>${this.name}: ${this.breed}</p>
        <p>Fluffiness: ${this.fluffiness}</p>
        <ul>Hobbies:
          ${this.renderHobbies()}
        <ul>
      </div>
    </div>
    `
    return this.addForm(catDiv)
  }

  renderHobbies(){
    let htmlString = ''
    this.hobbies.forEach(hobby => {
      htmlString += `<li>${hobby.name}</li>`
    })
    return htmlString
  }

  addForm(catDiv){
    let input = document.createElement('input')
    input.placeholder = "Enter Hobby ID"
    let button = document.createElement('button')
    button.innerText = "Add Hobby"
    button.addEventListener("click", this.addHobby.bind(this))
    catDiv.querySelector(".card").appendChild(input)
    catDiv.querySelector(".card").appendChild(button)
    return catDiv
  }

  //Will need to POST to cats table
  static addCat(cat){
    fetch(`http://localhost:3000/cats`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(cat)
    }).then(res => res.json())
    .then(cat => {
      let instance = new Cat(cat)
      document.querySelector('#cats').appendChild(instance.render())
    })
  }

  //Will need POST to join table
  addHobby(e){
    console.log(this, e)
  }

  //Will need to DELETE to cats table
  deleteCat(){
    fetch(`http://localhost:3000/cats/${this.id}`, {
      method:"DELETE"
    }).then(res => res.json())
    .then(cat => {
      // console.log(cat)
      document.querySelector(`#cat-${this.id}`).remove()
    })
  }

  //Will need to PATCH to cats table
  updateCat(cat){
    fetch(`http://localhost:3000/cats/${this.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(cat)
    }).then(res => res.json())
    .then(cat => {
      console.log(cat)
      //find cat by id, remove it form the DOM, and the append a new Cat
      // document.querySelector(`#cat-${this.id}`).remove

    })
  }
}
