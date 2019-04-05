## AJAX, Promises, and Fetch (Communicating with APIs)
- What is AJAX? Async JavaScript and XML
- What is blocking (sync) vs non-blocking code (async)?

### How do we handle async code?
- For example, event listeners and setTimeout

setTimeout(, 5000)
document.addEventListener("click")

### What if you have multiple async code that depend on each other?
- https://pokeapi.co/api/v2/pokemon/
- Given the name of the Pokemon, I want to find out the effect/description of its hidden ability

### Callback Hell
- Nested callbacks within nested callbacks
- Triangle shape
- Really hard to read and manage

### Welcome Fetch
- Built in web api
- Get JSON data
- Returns a promise object
- Practice with:  https://animal-farm-api.herokuapp.com/animals

### Promises and what are they
- [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- pending
- fulfilled (resolved/rejected)
- How to unwrap a promise using `.then`
- At Flatiron, we will work with promises via Fetch rather than creating our own Promises

### Promise chaining
- `.then().then()`
- Easier to read, easier to manage

fetch('https://animal-farm-api.herokuapp.com/animals')
.then(response => response.json())
.then(data => {
	//do something with data
	console.log(data)
})

### Lab Announcements
 - XHR is a old school way, you can ignore it when you see it in labs
 - Check board for Lab priority
 - Intro to Fetch lab Pairing Lab



















#### Old School way of fetching
```XHR (web API)
  const req = new XMLHttpRequest()
  req.addEventListener("load", function(){
		console.log(JSON.parse(this.responseText))
	});
  req.open("GET", 'https://pokeapi.co/api/v2/pokemon/')
  req.send()
```
```FETCH (web API)
	fetch(`https://pokeapi.co/api/v2/pokemon/`)
	.then(response => response.json())
	.then(json => {
		console.log(json)
	})
```
