document.addEventListener("DOMContentLoaded", function(){
  console.log('DOM loaded')
  //make a get fetch
  gotchFetchEmAll()

  //add event listener to the form
  let form = document.querySelector("form")
  form.addEventListener("submit", handleFormSubmit)
});

function handleFormSubmit(event){
  console.log('attempting to submit form')
  event.preventDefault()
  //make a POST fetch, want to send name and sprite
  //how to get name? and sprite?
  let name = document.querySelector("#name-input").value
  let sprite = document.querySelector("#sprite-input").value
  postPokemon(name, sprite)
}

function postPokemon(name, sprite){
  //make a post fetch
  let obj = {name: name, sprite: sprite}
  // debugger
  fetch(`http://localhost:3000/pokemon`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(obj)
  }).then(res => res.json())
  .then(renderPokemon)
}

function gotchFetchEmAll(){
  fetch('http://localhost:3000/pokemon')
  .then((res)=>{return res.json()})
  .then((pokemonArray)=>{
    // pokemonArray.forEach(pokemon => {
    //   renderPokemon(pokemon)
    // })
    pokemonArray.forEach(renderPokemon)
  })
}

function renderPokemon(pokemon){
  // console.log(pokemon)
  //does something with pokemon
  //goal: render said pokemon to DOM
  let container = document.querySelector("#pokemon-container")
  let div = document.createElement('div')
  let img = document.createElement('img')
  let header = document.createElement('h4')

  img.src = pokemon.sprite
  header.innerText = pokemon.name
  div.classList.add("card")
  div.id = `pokemon-${pokemon.id}`

  div.appendChild(img)
  div.appendChild(header)
  container.appendChild(div)

  div.addEventListener('click', pokeGone)
}

function pokeGone(event){
  let holder = event.currentTarget
  let id = event.currentTarget.id.split("-")[1]
  fetch(`http://localhost:3000/pokemon/${id}`, {
    method: "DELETE"
  }).then(res => res.json())
  .then(() => {
    alert('we are good to go!')
    holder.remove()
  })
  .catch(() => {
    alert('uh oh... server is down')
  })

  // debugger
}









//
