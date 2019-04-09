const addBtn = document.querySelector('#new-toy-btn')
const toyFormContainer = document.querySelector('.container')
const toyCollection = document.querySelector('#toy-collection')
const toyForm = document.querySelector('.add-toy-form')
let addToy = false



function toggleForm() {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyFormContainer.style.display = 'block'
    // submit listener here?

  } else {
    toyFormContainer.style.display = 'none'
  }
}

function addToyCard(toy) {
    // creates Toy Card and appends to #toy-collection
  //<div class="card">
    //<h2>Woody</h2>
    //<img src=toy_image_url class="toy-avatar">
    //<p>4 Likes <p>
    //<button class="like-btn">Like <3</button>
  //</div>
  let card = document.createElement("div")
  card.className = "card"
  card.id = `toy-${toy.id}`
  // card.className += " faboo" //ugly.  Bad code.  Bad.
  let title = document.createElement("h2")
  title.innerText = toy.name 
  // card.appendChild(title)
  let image = document.createElement("img")
  image.src = toy.image 
  image.className = "toy-avatar"
  // card.appendChild(image)
  let likes = document.createElement("p")
  likes.innerText = `${toy.likes} Likes`
  // card.appendChild(likes)
  let likeButton = document.createElement("button")
  likeButton.className = "like-btn"
  likeButton.innerText = "Like <3"
  likeButton.addEventListener("click", (event) => {addLike(toy, event)})
  card.append(title, image, likes, likeButton)
  toyCollection.appendChild(card)
}

// toy = "this thing"

// function somethingElse(event) {
//     addLike(toy, event)
// }

function addLike(toy, event) {
    // event.preventDefault()
    // let toy_id = event.currentTarget.siblingElement
    // debugger
    let newLikes = ++toy.likes
    // let card = document.getElementById(`toy-${toy.id}`)
    fetch(`http://localhost:3000/toys/${toy.id}`, {
         method: "PATCH",
         headers: 
         {
           "Content-Type": "application/json",
           Accept: "application/json"
         },
         body:
        JSON.stringify({
           "likes": newLikes
         })
    }).then(res => res.json())
    event.currentTarget.previousSibling.innerText = `${newLikes} Like(s)` // you can do it!

}

function getToys() {
    // get Toy info from JSON server
    fetch("http://localhost:3000/toys")
        .then(res => res.json()) // invoke json:  It is a method, not a property of res
        .then((toys) => {toys.forEach(addToyCard)})
}

function makeNewToy(event) {
    event.preventDefault();
    fetch("http://localhost:3000/toys", {
        method: "POST",
        headers: 
        {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body:
       JSON.stringify({
          "name": event.currentTarget.elements.name.value,
          "image": event.currentTarget.elements.image.value,
          "likes": 0
        })
    })
        .then(res => res.json())
        .then((json) => {addToyCard(json)})
    toyForm.reset()
    toggleForm()
}

document.addEventListener("DOMContentLoaded", () => {
    addBtn.addEventListener('click', toggleForm)
    toyForm.addEventListener("submit", makeNewToy)
    getToys()
})
