const addBtn = document.querySelector('#new-toy-btn')
const toyFormContainer = document.querySelector('.container')
const toyCollection = document.querySelector('#toy-collection')
const toyForm = document.querySelector('.add-toy-form')
let addToy = false

// YOUR CODE HERE




addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyFormContainer.style.display = 'block'
    // submit listener here
  } else {
    toyFormContainer.style.display = 'none'
  }
})

// OR HERE!
