document.addEventListener("DOMContentLoaded", init)

function init(e){
  //getDogs().then(addAllDogsToDogBar)
  console.log("page loaded")
}

function addAllDogsToDogBar(dogArray, filter = false){
  const dogBar = document.querySelector("#dog-bar")
  dogBar.innerHTML = ""
  dogArray.forEach(addDogSpantoDogBar)
}

function addDogSpantoDogBar(dog){
  const dogBar = document.querySelector("#dog-bar")
  const dogSpan = document.createElement("span")
  dogSpan.innerText = dog.name
  dogSpan.dataset.id = dog.id
  dogBar.append(dogSpan)
}

// fetches:

const baseURL = "http://localhost:3000/pups"

function getDogs(){
  return fetch(baseURL)
    .then(r => r.json())
}
