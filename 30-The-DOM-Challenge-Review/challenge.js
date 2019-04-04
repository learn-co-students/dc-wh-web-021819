(function () {
  // Grab needed pre-existing DOM elements
  const counter = document.querySelector('#counter');

  const plusBtn = document.getElementById('+');
  const minusBtn = document.getElementById('-');

  const likes = {}; // keeps track of each numbers "likes"
  const likeBtn = document.getElementById('<3');
  const likesUL = document.querySelector('.likes');

  let pause = false;
  const pauseBtn = document.getElementById('pause');

  const commentDiv = document.querySelector('#list');
  const commentForm = document.querySelector('#comment-form')

  // add event listeners & intervals
  let countInterval = setInterval(incrementCounter, 1000);
  likeBtn.addEventListener('click', likeNumber)
  plusBtn.addEventListener('click', incrementCounter);
  minusBtn.addEventListener('click', decrementCounter);
  pauseBtn.addEventListener('click', toggleCounterInterval)
  commentForm.addEventListener('submit', addComment)

  // functions
  function toggleCounterInterval() {
    pause = !pause
    pause ? pauseBtn.innerText = 'resume' : pauseBtn.innerText = 'pause';
  }

  function incrementCounter() {
    if (!pause) {
      counter.innerText = parseInt(counter.innerText) + 1;
    }
  }

  function decrementCounter() {
    if (!pause) {
      counter.innerText = parseInt(counter.innerText) - 1
    }
  }

  // "Like" current counter number
  function likeNumber() {
    if (!pause) {
      const number = counter.innerText

      if (!likes[number]) {
        likes[number] = 1;
        const li = document.createElement('li');
        li.setAttribute('id', number)
        li.innerText = `${number} has been liked 1 time!`
        likesUL.appendChild(li)
      } else {
        likes[number] += 1
        const li = document.getElementById(number)
        li.innerText = `${number} has been liked ${likes[number]} times!`
      }
    }
  }

  function addComment(e) {
    e.preventDefault();

    const comment = commentForm.querySelector('input').value;
    commentForm.querySelector('input').value = '';
    const commentEl = document.createElement('p');
    commentEl.innerText = comment;
    commentDiv.appendChild(commentEl)
  }
})()
