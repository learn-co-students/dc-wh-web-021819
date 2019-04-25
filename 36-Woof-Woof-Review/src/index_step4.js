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

  dogSpan.addEventListener("click", onDogSpanClick)

  dogBar.append(dogSpan)
}

function onDogSpanClick(e){
  getSingleDog(e.target.dataset.id)
    .then(addDogInfoToPage)
}

function getSingleDog(id){
  return fetch(baseURL + `/${id}`)
    .then(r => r.json() )
}

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

// add below
  dogButton.addEventListener("click", onGoodDogButtonClick)

  dogInfo.append(dogImg, dogTitle, dogButton)
}

// add function below
function onGoodDogButtonClick(e){
  let newValue;
  if (e.target.innerText.includes("Good")){
    e.target.innerText = "Bad Dog"
    newValue = false
  } else {
    e.target.innerText = "Good Dog"
    newValue = true
  }
  toggleGoodDog(e.target.dataset.id, newValue).then(updateDogBar)
}

// add function below
function updateDogBar(){
  getDogs().then(dogArray => addAllDogsToDogBar(dogArray))
}

// fetches:

const baseURL = "http://localhost:3000/pups"

function getDogs(){
  return fetch(baseURL)
    .then(r => r.json())
}

// add function below
function toggleGoodDog(id, newValue){
  const options = {
    method: "PATCH",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      isGoodDog: newValue
    })
  }
  return fetch(baseURL + `/${id}`, options)
    .then(r => r.json())
}
