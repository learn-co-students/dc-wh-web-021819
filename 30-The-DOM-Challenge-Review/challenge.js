document.addEventListener('DOMContentLoaded', function() {
  //grab pre-existing elements
  const counter = document.getElementById('counter');
  const minusBtn = document.getElementById('-');
  const plusBtn = document.getElementById('+');

  const likes = {};
  const likeBtn = document.getElementById('<3');
  const likeList = document.querySelector('.likes');

  let paused = false;
  const pauseBtn = document.getElementById('pause');

  const commentForm = document.querySelector('#comment-form');
  const commentDiv = document.querySelector('#list');

  // add event listeners and set intervals
  let countInterval = setInterval(incrementCounter, 1000);
  // minusBtn.addEventListener('click', decrementCounter);
  // plusBtn.addEventListener('click', incrementCounter);
  // likeBtn.addEventListener('click', likeNumber);
  document.addEventListener('click', clickHandler)
  pauseBtn.addEventListener('click', pause);
  commentForm.addEventListener('submit', addComment)

  // function
  function incrementCounter() {
    counter.innerText++;
  }
  function decrementCounter() {
    counter.innerText--;
  }

  function clickHandler(e) {
    if (e.target.tagName === 'BUTTON') {
      console.log(e.target.id);
      switch (e.target.id) {
        case '+':
          incrementCounter();
          break;
        case '-':
          decrementCounter();
          break;
        default:
          break;
      }
    }
  }

  function likeNumber() {
    const number = counter.innerText;
    if (likes[number]) {
      likes[number]++
      const li = document.getElementById(number);
      li.innerText = `${number} has been liked ${likes[number]} times.`;
    } else {
      likes[number] = 1;
      const li = document.createElement('li');
      li.id = number;
      li.innerText = `${number} has been liked ${likes[number]} time.`;
      likeList.appendChild(li)
    }
  }

  function pause() {
    likeBtn.disabled = !likeBtn.disabled;
    minusBtn.disabled = !minusBtn.disabled;
    plusBtn.disabled = !plusBtn.disabled;
    paused = !paused

    if (paused) {
      clearInterval(countInterval)
      pauseBtn.innerText = 'resume'
    } else {
      countInterval = setInterval(incrementCounter, 1000)
      pauseBtn.innerText = 'pause'
    }
  }

  function addComment(e) {
    e.preventDefault();
    console.log('rip arrow functions');

    const comment = commentForm.querySelector('input').value;
    commentForm.querySelector('input').value = '';
    const seanKelly = document.createElement('p');
    seanKelly.innerText = comment;
    commentDiv.appendChild(seanKelly);
  }

})
