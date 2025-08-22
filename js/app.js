// declaring game music
const clickSound = new Audio('select-sound-121244.mp3');
const bmusic = new Audio('bmusic.mp3');
const hmusic = new Audio('hover-button-287656.mp3');
const tick = new Audio('tick.mp3.mp3');

// declaring buttons and needed divs
const helpBtn = document.querySelector('#help');
const startBtn = document.querySelector('#start');
const nextBtn = document.querySelector('#next');
const nextBtn2 = document.querySelector('#next2');
const how = document.querySelector('#play');
const inst = document.querySelector('#instructions');
const playAgainBtn = document.querySelector('#PlayAgain');
const playAgainBtn2 = document.querySelector('#PlayAgain2');
const backTo = document.querySelector('#BackTo');
const speech = document.getElementById('speechText');
const cup = document.querySelector('#empty');
const timerBar = document.querySelector('.timerBar');
const livesCount = document.querySelector('#lives');
const ingredients = document.querySelectorAll('.ingredientsPage');

// declaring ingredient page and buttons
const ingredientsPage = document.querySelector('#ingWrap');
const submit = document.querySelector('#submit');
const clear = document.querySelector('#delete');

// declaring the four levels as an array
const levels = [
document.querySelector('#level1'),
document.querySelector('#level2'),
document.querySelector('#level3'),
document.querySelector('#level4')
];

// declaring the recipes as an array of an array
const recipes = [
  ["Espresso", "Milk"],         
  ["Espresso", "Water", "Ice"],     
  ["Espresso", "Milk", "VanillaSyrup"], 
  ["Espresso", "Milk", "Sugar"],       
  ["Espresso", "Milk", "VanillaBean", "CaramelSyrup"],
  ["Espresso", "Milk", "Chocolate", "whipCream"],    
  ["Espresso", "Milk", "VanillaBean"],               
  ["IceCream", "Espresso", "CaramelSyrup", "Chocolate"] 
];

// to check which recipes are completed and which are not
const levelStatus = [
  { recipe1Done: false, recipe2Done: false },
  { recipe1Done: false, recipe2Done: false },
  { recipe1Done: false, recipe2Done: false },
  { recipe1Done: false, recipe2Done: false }
];

// declaring the drinks buttons and the recipe card for each
const latte = document.querySelector('#Latte');
const recipe1 = document.querySelector('#recipeCard1');
const americano = document.querySelector('#Americano');
const recipe2 = document.querySelector('#recipeCard2');
const vanillaLatte = document.querySelector('#VanillaLatte');
const recipe3 = document.querySelector('#recipeCard3');
const cappuccino = document.querySelector('#Cappuccino');
const recipe4 = document.querySelector('#recipeCard4');
const caramelMacchiato = document.querySelector('#CaramelMacchiato');
const recipe5 = document.querySelector('#recipeCard5');
const mocha = document.querySelector('#Mocha');
const recipe6 = document.querySelector('#recipeCard6');
const flatWhite = document.querySelector('#FlatWhite');
const recipe7 = document.querySelector('#recipeCard7');
const affogato = document.querySelector('#Affogato');
const recipe8 = document.querySelector('#recipeCard8');

// declare variables needed
let countdownInterval = null;
let lives = 3;
let currentLevel = 1;
let totalLevels = 4;
let selectedRecipe = null;

// hide the time bar, lives and start the music automatically
function hideUI() {
    document.querySelector('#timer').classList.add('hidden');
    document.querySelector('#lives').classList.add('hidden');
}
    hideUI();
    
// start the music 
document.addEventListener('click', () => {
  bmusic.currentTime= 0;
  bmusic.play();
});

// displaying functions when time is up, run out of lives or win
function displayWin() {
    document.querySelector('#timer').classList.add('hidden');
    document.querySelector('#lives').classList.add('hidden');
    document.querySelector('#right').classList.remove('hidden');
}

function displayLose() {
    document.querySelector('#timer').classList.add('hidden');
    document.querySelector('#lives').classList.add('hidden');
    document.querySelector('#wrong').classList.remove('hidden');
}

function displayTimeLose() {
    document.querySelector('#timer').classList.add('hidden');
    document.querySelector('#lives').classList.add('hidden');
    document.querySelector('#timeUp').classList.remove('hidden');
}

//losing life make a picture of bean dissappear
function loseLife() {
  if (lives === 2) document.getElementById('live3').style.opacity = 0.3;
  if (lives === 1) document.getElementById('live2').style.opacity = 0.3;
  if (lives === 0) document.getElementById('live1').style.opacity = 0.3;
}

// help button show the first page of the game's back story 
helpBtn.addEventListener('click', () => {
clickSound.currentTime =0;
clickSound.play();
how.classList.remove('hidden');
});

// first next btn removes first page and display the how to play page
nextBtn.addEventListener('click', ()=> {
clickSound.currentTime =0;
clickSound.play();
how.classList.add('hidden');
inst.classList.remove('hidden');
});

// second next btn closes the help button and back to welcome page
nextBtn2.addEventListener('click', () => {
clickSound.currentTime =0;
clickSound.play();
inst.classList.add('hidden');
});

//adding a sound once you hover on the buttons 
function hoverSound() {
hmusic.currentTime = 0;
hmusic.play();
}

// hover sound for all buttons
helpBtn.addEventListener('mouseover',hoverSound);
startBtn.addEventListener('mouseover',hoverSound);
nextBtn.addEventListener('mouseover',hoverSound);
nextBtn2.addEventListener('mouseover',hoverSound);
latte.addEventListener('mouseover',hoverSound);
americano.addEventListener('mouseover',hoverSound);
vanillaLatte.addEventListener('mouseover',hoverSound);
cappuccino.addEventListener('mouseover',hoverSound);
caramelMacchiato.addEventListener('mouseover',hoverSound);
mocha.addEventListener('mouseover',hoverSound);
flatWhite.addEventListener('mouseover',hoverSound);
affogato.addEventListener('mouseover',hoverSound);
submit.addEventListener('mouseover',hoverSound);
clear.addEventListener('mouseover',hoverSound);

//start btn to level 1 displays the background, timer, lives, the barista, speech of beginning of the game and level1 container
startBtn.addEventListener('click', () => {
    clickSound.currentTime =0;
    clickSound.play();
    document.querySelector('#welcome').classList.add('hidden');
    document.querySelector('#pic').classList.remove('hidden');
    document.querySelector('#level1').classList.remove('hidden');
    document.querySelector('#timer').classList.remove('hidden');
    document.querySelector('#lives').classList.remove('hidden');
    speechText.textContent = "Level 1: Choose a drink!";
});

//add the latte and americano recipe card to the button, add clicking sound, if a recipe is shown and the other was clicked a message will be displayed, if the drink status was already true the recipe card won't pop again on click , otherwise the recipe card will be displayed
latte.addEventListener('click',() => {
    clickSound.currentTime =0;
    clickSound.play();
    if (selectedRecipe) {
      speech.textContent = "Finish the current recipe first!";
      return;
    } else {
    const status = levelStatus[0];
    if (status.recipe1Done) return; 
    selectedRecipe = "recipe1";       
    recipe1.classList.remove('hidden');
        startCountdown(30);
    }
});

americano.addEventListener('click',() => {
    clickSound.currentTime =0;
    clickSound.play();
    if (selectedRecipe) {
      speech.textContent = "Finish the current recipe first!";
      return;
    } else {
    const status = levelStatus[0];
    if (status.recipe2Done) return;
    selectedRecipe = "recipe2";
    recipe2.classList.remove('hidden');
    startCountdown(30);
    }
});

//go to ingredients button, checks which recipe was chosen from the level and save it in a selected recipe, then hide the level displayed and display the ingredients page 
document.querySelectorAll(".goBtn").forEach((btn, index) => {
  btn.addEventListener("click", () => {

    if(index%2 === 0){
        selectedRecipe= "recipe1";
    } else {
        selectedRecipe= "recipe2";
    }
    document.querySelectorAll("[id^=level]").forEach(lvl => lvl.classList.add("hidden"));
    document.querySelector('#pic').classList.add('hidden');
    document.getElementById("ingWrap").classList.remove("hidden");
  });
});

//add the vanilla latte and cuppachino recipe to the button 
vanillaLatte.addEventListener('click',() => {
    clickSound.currentTime =0;
    clickSound.play();
    if (selectedRecipe) {
      speech.textContent = "Finish the current recipe first!";
      return;
    } else {
        const status = levelStatus[1];
    if (status.recipe1Done) return;
    selectedRecipe = "recipe1";       
    recipe3.classList.remove('hidden');
    }
});

cappuccino.addEventListener('click',() => {
    clickSound.currentTime =0;
    clickSound.play();
    if (selectedRecipe) {
      speech.textContent = "Finish the current recipe first!";
      return;
    } else {
    const status = levelStatus[1];
    if (status.recipe2Done) return;
    selectedRecipe = "recipe2";
    recipe4.classList.remove('hidden');
    }
});

//add the caramel and mocha recipe to the button
caramelMacchiato.addEventListener('click',() => {
    clickSound.currentTime =0;
    clickSound.play();
    if (selectedRecipe) {
      speech.textContent = "Finish the current recipe first!";
      return;
    } else {
    const status = levelStatus[2]; 
    if (status.recipe1Done) return;
    selectedRecipe = "recipe1";       
    recipe5.classList.remove('hidden');
    }
});

mocha.addEventListener('click',() => {
    clickSound.currentTime =0;
    clickSound.play();
    if (selectedRecipe) {
      speech.textContent = "Finish the current recipe first!";
      return;
    } else {
        const status = levelStatus[2];
    if (status.recipe2Done) return;
    selectedRecipe = "recipe2";
    recipe6.classList.remove('hidden');
    }
});

//add the flat white and affogato recipe to the button
flatWhite.addEventListener('click',() => {
    clickSound.currentTime =0;
    clickSound.play();
    if (selectedRecipe) {
      speech.textContent = "Finish the current recipe first!";
      return;
    } else {
    const status = levelStatus[3]; 
    if (status.recipe1Done) return;
    selectedRecipe = "recipe1";       
    recipe7.classList.remove('hidden');
    }
});

affogato.addEventListener('click',() => {
    clickSound.currentTime =0;
    clickSound.play();
    if (selectedRecipe) {
      speech.textContent = "Finish the current recipe first!";
      return;
    } else {
    const status = levelStatus[3];
    if (status.recipe2Done) return;
    selectedRecipe = "recipe2";
    recipe8.classList.remove('hidden');
    }
});

//countdown bar and text update, declare the bar and countdown text, stop the ticking sound when the countdown restarts 
function startCountdown(seconds) {
  const countdownEl = document.getElementById('countdown');
  const timerBar = document.querySelector('.timerBar');
  countdownEl.textContent = "30";
  tick.currentTime =0;
  tick.pause();

// if it is already running clear before it runs again otherwise it will run twice and cause an error
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }

  let timeLeft = seconds;
// when it restarts these main points should be considered, so the time bar looks similar every time 
  countdownEl.textContent = timeLeft;
  timerBar.style.width = '100%';
  timerBar.style.background = '#fefdfcff';
// decrement the seconds and display it in the count down element in the bar 
  countdownInterval = setInterval(() => {
    timeLeft--;
    countdownEl.textContent = timeLeft;
// each second decreases the bar movement, update it's width
    const percentage = (timeLeft / seconds) * 100;
    timerBar.style.width = percentage + '%';
// turn the bar to red and play the ticking sound if seconds are 5 
    if (timeLeft <= 5) {
      timerBar.style.background = 'red';
      tick.currentTime =0;
      tick.play();
    }
// clear everything to start again, display time is up container and stop the ticking sound as well as the background music  
    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      countdownEl.textContent = "Time's up!";
      timerBar.style.width = '0%';
      tick.pause();
      timerBar.style.background = '#dadadaff';
      countdownInterval = null;
      bmusic.pause();
      displayTimeLose();
       }
  }, 1000);
}

// add the click sound for every ingredient button and the animation once clicked and handle adding ingredients to cup by a click.

ingredients.forEach(ing => {
  ing.addEventListener('click', () => {
    clickSound.currentTime = 0;
    clickSound.play();

    ing.classList.add('ingredient-clicked');

    setTimeout(() => {
      ing.classList.remove('ingredient-clicked');
    }, 200);

    const clone = ing.cloneNode(true);
    clone.dataset.name = ing.dataset.name;
    clone.classList.add("ingredient");
    cup.appendChild(clone);
  });
});

// clearing the cup by removing the inserted ingredients 
clear.addEventListener('click',() => {
    clickSound.currentTime =0;
    clickSound.play();
    cup.innerHTML="";
});

// Submit button to compare the players choices with the recipe card
submit.addEventListener('click', () => {

    clickSound.currentTime =0;
    clickSound.play();

  // Get the ingredients that were inserted in the cup
  const droppedIngredients = Array.from(cup.querySelectorAll('.ingredient'))
                                  .map(i => i.dataset.name);
  // restart speeches 
  speech.textContent="";
  document.querySelector('#speechText2').textContent="";

  // check the status of the level 
  const status = levelStatus[currentLevel - 1];

  // Get ingredients array of recipes for this level
  const recipe1 = recipes[(currentLevel - 1) * 2];
  const recipe2 = recipes[(currentLevel - 1) * 2 + 1];

  // check the array of ingredients with the correct array list in the recipe array, make a copy using slice, sort both arrays using sort and finally compare each element using every
  function arraysMatch(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    return arr1.slice().sort().every((v, i) => v === arr2.slice().sort()[i]);
  }

  let recipeCompleted = false;

  // Check first recipe if it was selected, and not chosen already, and finally the ingredients match (use the arraysMatch function)
  if (selectedRecipe === "recipe1" && !status.recipe1Done && arraysMatch(droppedIngredients, recipe1)) {
    status.recipe1Done = true;
    recipeCompleted = true;
    selectedRecipe=null;
    document.querySelector('#speechText').textContent = "Well done! Choose the second recipe.";
  }
  // Check second recipeif it was selected, and not chosen already, and finally the ingredients match (use the arraysMatch function)
  else if (selectedRecipe === "recipe2" && !status.recipe2Done && arraysMatch(droppedIngredients, recipe2)) {
    status.recipe2Done = true;
    recipeCompleted = true;
     selectedRecipe=null;
  }
  // if the recipe is completed clear the cup, if both recipes are done update the speech, then hide level container and ingredients page
  if (recipeCompleted) {
    cup.innerHTML = "";
    // Update speech
    if (status.recipe1Done && status.recipe2Done) {
      speech.textContent = `Level ${currentLevel} completed!`;

      // Hide level container and ingredients page
      let current = levels[currentLevel - 1];
      current.classList.add('hidden'); 
      document.getElementById('ingWrap').classList.add('hidden');

      // Move to next level if level is done and there isn't any more otherwise display winning condition
      if (currentLevel < totalLevels) {
        currentLevel++;
        let current2 =levels[currentLevel - 1];
        current2.classList.remove('hidden');
        document.querySelector('#speechText').textContent = `Level ${currentLevel}: Choose a drink!`;
        startCountdown(30);
      } else {
        stopCountdown();
        document.querySelector('#timer').classList.add('hidden');
        document.querySelector('#lives').classList.add('hidden');
        displayWin();
          }
    } else {
      // Else only one recipe is done, display remaining recipe card without the need of clicking and hide the ingredients page, finally update the speech 
      showRemainingRecipes(currentLevel - 1);
      let current = levels[currentLevel -1];
      if(currentLevel === 1){
        document.querySelector("#pic").classList.remove('hidden');
        document.querySelector('#level1').classList.remove('hidden');
        document.querySelector("#ingWrap").classList.add('hidden');
        speech.textContent = "Great! Complete the remaining recipe in this level.";
      } else {
      current.classList.remove('hidden');
      document.querySelector("#ingWrap").classList.add('hidden');
      speech.textContent = "Great! Complete the remaining recipe in this level.";
    }
}
  } else {
    // Wrong ingredients are inserted so decrement a live and clear the cup and update the speech, otherwise when lives are 0 stop the sound, restart the countdown and display losing container 
    lives--;
    loseLife();
    cup.innerHTML = "";
    document.querySelector('#speechText2').textContent = "Wrong ingredient! You lost a life.";
    if (lives <= 0) {
      bmusic.pause();
      stopCountdown();
      document.querySelector('#timer').classList.add('hidden');
      document.querySelector('#lives').classList.add('hidden');
      displayLose();
       }
    }

});


// function to show remaining recipes in a level automatically after choosing the first one 
function showRemainingRecipes(levelIndex) {
  // Get the two cards for this level depending on the level itself and whether its the first or second recipe 
  const card1 = document.querySelector(`#level${levelIndex + 1} #recipeCard${levelIndex * 2 + 1}`);
  const card2 = document.querySelector(`#level${levelIndex + 1} #recipeCard${levelIndex * 2 + 2}`);
  // check the status
  const status = levelStatus[levelIndex];

  if (card1) {
    if (status.recipe1Done) card1.classList.add('hidden');  // hide only if status is true
    else {
        card1.classList.remove('hidden');   
                  }              // otherwise always show
  }

  if (card2) {
    if (status.recipe2Done) card2.classList.add('hidden');  // hide only if status is true
    else {
        card2.classList.remove('hidden');  
                   }               // otherwise always show
  }
}

// restarting the countdown 
function stopCountdown() {
  clearInterval(countdownInterval);
  countdownInterval = null;
  timerBar.style.width = '0%';
}

function resetGame() {
  // Hide the losing/winning containers
  document.querySelector('#wrong').classList.add('hidden');
  document.querySelector('#right').classList.add('hidden');
  document.querySelector('#timeUp').classList.add('hidden');

  // Hide all levels and ingredients page
  levels.forEach(lvl => lvl.classList.add('hidden'));
  document.getElementById('ingWrap').classList.add('hidden');
  document.querySelector('#pic').classList.add('hidden');
  document.querySelector('#lives').classList.add('hidden');

  // Hide all recipe cards
  document.querySelectorAll("[id^=recipeCard]").forEach(card => card.classList.add('hidden'));

  // Reset lives and make there opacity clear again
  lives = 3;
  document.getElementById('live1').style.opacity = 1;
  document.getElementById('live2').style.opacity = 1;
  document.getElementById('live3').style.opacity = 1;
  document.querySelector('#hud-bottom').classList.remove('hidden');

  // Reset level statuses all to false 
  levelStatus.forEach(level => {
    level.recipe1Done = false;
    level.recipe2Done = false;
  });

  // Reset cup
  cup.innerHTML = "";

  // Reset speeches
  speech.textContent="Let's start brewing easy! You have 3 lives. Choose one drink.";
  document.querySelector("#speechText2").textContent="";

 // Reset countdown and time bar
  stopCountdown();
 const countdownEl = document.querySelector("#countdown");
  if (countdownEl) countdownEl.textContent = "30";
  const timerBar = document.querySelector('.timerBar');
  if (timerBar) timerBar.style.width = "100%";

  // Reset selected recipe
  selectedRecipe = null;

  // Reset current level
  currentLevel = 1;

  // Show welcome page
  document.getElementById('welcome').classList.remove('hidden');
}

// Event listeners for play again 2 buttons (time end or lives), and back button of winning container
playAgainBtn.addEventListener('click', () => {
    clickSound.currentTime = 0;
    clickSound.play();
    bmusic.currentTime= 0;
    bmusic.play();
    resetGame();
});

playAgainBtn2.addEventListener('click', () => {
    clickSound.currentTime = 0;
    clickSound.play();
    bmusic.currentTime= 0;
    bmusic.play();
    resetGame();
});

backTo.addEventListener('click', () => {
    clickSound.currentTime = 0;
    clickSound.play();
    bmusic.currentTime= 0;
    bmusic.play();
    resetGame();
});
