document.addEventListener("DOMContentLoaded", function(e){
  console.log("DOM is loaded")
  //on click of an email <td>, console.log("Sending email")
  let emailElements = document.querySelectorAll('.email')
  //for each node, addEventListener("click", doSomething)
  emailElements.forEach((node)=>{
    node.addEventListener("click", emailClickHandler)
  })

  //on submit of the form, add a new isntructor to the table
  let form = document.querySelector('form')
  form.addEventListener("submit", submitFormHandler)

  //on click of a row <tr>, console.log("Viewing profile")
  let rowElements = document.querySelectorAll(".person")
  rowElements.forEach((node)=>{
    node.addEventListener("click", profileClickHandler, true)
  })
})

function profileClickHandler(event){
  console.log("Profile: ", event.currentTarget.innerText) //the node the listener is attached to
}

function submitFormHandler(event){
  event.preventDefault()
  let firstName = document.querySelector('#firstNameInput').value
  let lastName = document.querySelector('#lastNameInput').value
  let email = document.querySelector('#emailInput').value
  addInstructor(firstName, lastName, email)
}

function emailClickHandler(event){
  // event.stopPropagation()
  console.log('Sending email to...', event.target.innerText) //the node that triggered the event
}

function getTableBody(){
  return document.querySelector('tbody')
}

function addInstructor(firstName, lastName, email){
  var tbodyElement = getTableBody()
  var trElement = document.createElement("tr")
  trElement.addEventListener("click", profileClickHandler)

  trElement.id = "row-4"
  trElement.classList.add("person")
  tbodyElement.appendChild(trElement)

  var tdFirstName = document.createElement("td")
  trElement.appendChild(tdFirstName)
  tdFirstName.innerText = firstName

  var tdLastName = document.createElement("td")
  tdLastName.innerText = lastName
  trElement.appendChild(tdLastName)

  var tdEmail = document.createElement("td")
  trElement.appendChild(tdEmail)
  tdEmail.innerText = email
  tdEmail.addEventListener('click', emailClickHandler)
}

function addInstructorHTML(firstName, lastName, email){
  tableBody.innerHTML = tableBody.innerHTML  + `<tr id="row-3">
      <td class="firstName">${firstName}</td>
      <td class="lastName">${lastName}</td>
      <td class="email">${email}</td>
    </tr>`

    //readd event listeners
}
