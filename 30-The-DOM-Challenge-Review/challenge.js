(function () {
  // Grab needed pre-existing DOM elements
  const counter = document.querySelector('#counter');
  const pauseBtn = document.getElementById('pause');

  const likes = {}; // keeps track of each numbers "likes"
  const likesUL = document.querySelector('.likes');

  const commentDiv = document.querySelector('#list');
  const commentForm = document.querySelector('#comment-form')

  // add event listeners & intervals
  let countInterval = setInterval(incrementCounter, 1000);
  document.addEventListener('click', buttonHandler);
  pauseBtn.addEventListener('click', toggleCounterInterval);
  commentForm.addEventListener('submit', addComment);

  // functions
  function buttonHandler(e) {
    if (e.target.tagName === 'BUTTON') {
      switch (e.target.id) {
        case '+':
          incrementCounter();
          break;
        case '-':
          decrementCounter();
          break;
        case '<3':
          likeNumber();
          break;
        default:
          break;
      }
    }
  }

  function toggleCounterInterval() {
    if (countInterval) {
      clearInterval(countInterval);
      document.removeEventListener('click', buttonHandler);
      countInterval = null;
      pauseBtn.innerText = 'resume';
    } else {
      countInterval = setInterval(incrementCounter, 1000);
      document.addEventListener('click', buttonHandler);
      pauseBtn.innerText = 'pause';
    }
  }

  function incrementCounter() {
    counter.innerText = parseInt(counter.innerText) + 1;
  }

  function decrementCounter() {
    counter.innerText = parseInt(counter.innerText) - 1
  }

  function likeNumber() {
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

  function addComment(e) {
    e.preventDefault();

    const comment = commentForm.querySelector('input').value;
    commentForm.querySelector('input').value = '';
    const commentEl = document.createElement('p');
    commentEl.innerText = comment;
    commentDiv.appendChild(commentEl)
  }
})()
