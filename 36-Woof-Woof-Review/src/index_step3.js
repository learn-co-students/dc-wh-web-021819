document.addEventListener("DOMContentLoaded", init)

function init(e){
  getDogs().then(addAllDogsToDogBar)
  //console.log("page loaded")
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

// add below
  dogSpan.addEventListener("click", onDogSpanClick)

  dogBar.append(dogSpan)
}

// add function below
function onDogSpanClick(e){
  getSingleDog(e.target.dataset.id)
    .then(addDogInfoToPage)
}

// add function below
function getSingleDog(id){
  return fetch(baseURL + `/${id}`)
    .then(r => r.json() )
}

// add function below
function addDogInfoToPage(dog){
  const dogInfo = document.querySelector("#dog-info")
  dogInfo.innerHTML = ""
  const dogImg = document.createElement("img")
  dogImg.src = dog.image

  const dogTitle = document.createElement("h2")
  dogTitle.innerText = dog.name

  const dogButton = document.createElement("button")
  dogButton.innerText = dog.isGoodDog ? "Good Dog!" : "Bad Dog!"
  dogButton.dataset.id = dog.id
  
  dogInfo.append(dogImg, dogTitle, dogButton)
}

// fetches:

const baseURL = "http://localhost:3000/pups"

function getDogs(){
  return fetch(baseURL)
    .then(r => r.json())
}
