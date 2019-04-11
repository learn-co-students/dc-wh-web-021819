document.addEventListener('DOMContentLoaded', init)

function init(){
  document.querySelector('form').addEventListener('submit', submitHandler)
  getHobbies()
  getCats()
}

function submitHandler(e){
  e.preventDefault()
  let name = event.target[0].value
  let image = event.target[1].value
  let breed = event.target[2].value
  let fluffiness = event.target[3].value
  Cat.addCat({name: name, image: image, breed: breed, fluffiness: fluffiness})
}

function getHobbies(){
  fetch(`http://localhost:3000/hobbies`)
  .then(res => res.json())
  .then(hobbies => {
    hobbies.forEach(hobby => {
      let hobbyInstance = new Hobby(hobby)
      document.querySelector('#hobbies').appendChild(hobbyInstance.render())
    })
  })
}

function getCats(){
  fetch(`http://localhost:3000/cats`)
  .then(res => res.json())
  .then(cats => {
    cats.forEach(cat => {
      let catInstance = new Cat(cat)
      document.querySelector('#cats').appendChild(catInstance.render())
    })
  })
}
