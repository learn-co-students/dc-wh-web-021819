document.addEventListener("DOMContentLoaded", function(){
  console.log("DOM is loaded")
  addInstructor("Jane", "Doe", "jane@gmail.com")
})

function getTableBody(){
  return document.querySelector('tbody')
}

function addInstructorHTML(firstName, lastName, email){
  getTableBody().innerHTML +=`<tr id="row-3">
            <td class="firstName">${firstName}</td>
            <td class="lastName">${lastName}</td>
            <td class="email">${email}</td>
          </tr>`
}

function addInstructor(firstName, lastName, email){
  var tbodyElement = getTableBody()
  var trElement = document.createElement("tr")
  trElement.id = "row-4"
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
}
