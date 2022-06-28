// Listing variables that interact with the HTML 
const settingsBtn = document.querySelector('#setting-btn');
const settings = document.querySelector('#settings');
const difficultySelect = document.querySelector('#difficulty');
const word = document.querySelector('#word');
const inputText = document.querySelector('#input-text');
const scoreEl = document.querySelector('#score');
const timeEl = document.querySelector('#time');
const endgameEl = document.querySelector('#end-game-container');

// Words to be displayed at random  
const words = [
    'good',
    'club',
    'metric',
    'metropolis',
    'south',
    'independent',
    'steering',
    'gold',
    'home',
    'artificial',
    'intelligence',
    'nine',
    'fame',
    'dismiss',
    'drop',
    'caring',
    'sing',
    'utensil',
    'airplane',
    'pilot',
    'basket',
    'juice',
    'ukraine',
    'captain',
    'this',
    'game',
    'is',
    'difficult',
    'june',
    'monday',
    'daylight',
    'agree',
    'super',
    'stars',
    'moonlight',
    'picnic',
    'doctor',
    'landscape',
    'python',
    'media',
    'fifteen',
    'speedometer',
    'lance',
    'camelot',
    'michael',
    'vanya',
    'hope',
    'mistook',
    'lovers',
    'legends',
    'tomorrow',
    'starling',
    'central',
    'arrow',
    'classroom',
    'catalyst',
    'cider',
    'agent',
    'undercover',
    'villain',
    'lifeguard',
    'onomatopoeia',
    'alliteration',
    'illiteracy',
    'rigorous',
    'powerhouse',
    'horsepower',
    'magnet',
    'culterize',
    'disseminate',
    'iterate',
    'ternary',
    'operators',
  ];
// Initialize Time Number
let time = 10;

// counting down time
const timeInterval = setInterval(updateTime, 1000);

// Initialize random word variable
let randomWord;

// Update Time Function
function updateTime(){
    time--;
    timeEl.innerHTML = `${time}s`

    if(time === 0){
      clearInterval(timeInterval);
      // End game
      gameOver();
    }
}
updateTime()

// Game over display
function gameOver() {
  endgameEl.innerHTML = `
  <h1>Time Ran Out</h1>
  <p>Here is your final score: ${score}</p>
  <button onClick="window.location.reload()">Reload</button>`;
  endgameEl.style.display = 'flex';
}
// Generating Random Word Function
function getRandomWord(){
  return words[Math.floor(Math.random() * words.length)];
}


// Function to add word to DOM
function addWordToDom(){
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

addWordToDom()


// Initialize a score variable in number
let score = 0;

// Function to Update the Score
function updateScore(){
  score += 2;
  scoreEl.innerHTML = score;
}

// updateScore()


// Listening for input event and matching words 
inputText.addEventListener('input', e => {
  const typedWord = e.target.value;

  if(typedWord === randomWord){
    updateScore();
    addWordToDom();

    // clear input field on score update
    e.target.value = '';

    // time difficulty functionality
    if(difficulty === 'hard'){
      time += 1;
    } else if(difficulty === 'medium'){
      time += 2;
    } else {

      time += 3;
    }

    updateTime();
  }
})

// Settings Button Functionality
difficultySelect.addEventListener('change', e =>{
  const difficulty = e.target.value;
})

// Button on click
settingsBtn.addEventListener('click',() => {
  settings.classList.toggle('show');
})











/* What does it mean when they say JavaScript is single-threaded and non-blocking? 
Memory Heap contains variable
Call Stack is stacks of functions

Single-threaded means it passes from top to bottom but that is in synchronous javascript
C# can be multithread (doing things in one thread and doing another in another)

Non-blocking means one line of code you make one code not wait for the other to load first (It means it can be asynchronous)
*setTimeout() : it can be used to break code
this particular function proves javascript is autoblocking when there's no parameters in it

Run this: setTimeout(() => {
    console.log b ;
}, 2000)
*
It's very possible for one function to take its time to load and another one would load before it
this is asynchronous javascript

a recursion is when a function keeps calling itself
e.g.
const add = function(){
  add()
}
This is what is actually called stack overflow

const a = 1;
const b = 2;
const c = 3;

console.log(a);
setTimeout(() => {
  console.log(b) ;
}, 2000);
console.log(c);
*/