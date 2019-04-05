//figure out bulbasaur's hidden ability
//get list of pokemon
// getRequest('https://pokeapi.co/api/v2/pokemon/', function(){
//   //code inside this callback
//   repsonse.results //find which pokemon is bulbasaur
//   getRequest('https://pokeapi.co/api/v2/pokemon/1/', function(){
//     response.abilities //find which ability is hidden
//       getRequest('https://pokeapi.co/api/v2/ability/34/', function(){
//         let desc = response.effect_entries[0].effect //the description I'm looking for
//         console.log(desc)
//       })
//   })
// })

//Is there a better way?
//do something1
//do something2
//do seomthing3

// var p = fetch('https://animal-farm-api.herokuapp.com/animals')
// p.then((x)=>{console.log(x)})


// document.addEventListener("DOMContentLoaded", fetchAnimals)

function fetchAnimals(){
  fetch('https://animal-farm-api.herokuapp.com/animals')
  .then((response)=>{return response.json()})
  .then((data)=>{
    // console.log(data)
    // global = data
    //anything that relies on the data being ready should be written here
    data.forEach(animal => {
      let container = document.querySelector('.container')
      container.innerHTML += `<div>${animal.name}: ${animal.species}
        <img src=${animal.img} />
      </div>`
    })
  })
}


//
document.querySelector("button").addEventListener("click", fetchAnimals)

document.querySelector("#delete").addEventListener("click", clearPage)

function clearPage(){
  document.querySelector('.container').innerHTML = ""
}

//
// function printAnimals(){
//   console.log(global)
// }
//
// console.log(global)









//
