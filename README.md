# Brew-Memory-
Brew Memory ☕- Wake up your brain with a shot of memory !

📖 Backstory

Welcome to Brew Memory café --- You've applied to become the next barista, but there's a catch our café only hires those who can brew from memory.

To prove yourself, your challenge is to complete four levels of the café's top signature drinks. Each level tests your memory, speed and focus under pressure. But there's an extra twist some recipes will show up with missing ingredients, you'll have to guess what belongs in the brew.

Choose the right ingredients, be precise with your choices and prove you've got what it takes to earn the job. But be careful one wrong ingredient and you'll lose a life. Run out of time, and the manager won't be impressed. Can you survive and rise to the rank of master barista ? 

🎯 Game Objective
 
⦁	Remember the recipe card before moving to the ingredient page.
⦁	Guess the missing ingredients you spot in the recipe cards
⦁	Add the correct ingredients before you run out of time.
⦁	Complete the 2 drinks across the 4 levels
⦁	Avoid any mistake ( you have only 3 lives ! )


🕹️ How to Play

⦁	Display welcome screen.
⦁	Player click on the drink to view the recipe card.
⦁	Countdown timer begins each level will have 30 seconds to complete.
⦁	Player click ingredients to add them to the cup.
⦁	Clear button to empty the cup if you made a mistake.
⦁	Submit button to check if your drink matches the recipe.
⦁	Automatically going back to the level if you didn't complete the other drink, and the second drink recipe will be already displayed to save time.
⦁	Some recipes will have missing ingredients you must guess them correctly!
⦁	Complete both recipes in a level to progress to the next one.


👤 User Stories

⦁	As a user, I want to see a welcome page with an instruction button to understand how to play.
⦁	As a user, I want to observe a clear message for every level.
⦁	As a user, I want to clearly see the drinks buttons within each level.
⦁	As a user, I want to see a simple animation on the button to know clearly what did I choose.
⦁	As a user, I want to see the recipe cards so I know what to brew.
⦁	As a user, I want to be able to click on the ingredients.
⦁	As a user, I want to be able to delete if I messed up the ingredients.
⦁	As a user, I want to observe a timer bar with a countdown to know clearly how many seconds I got left.
⦁	As a user, I want to clearly see the lives I've got and the one's I've lost.
⦁	As a user, I want to see a clear losing message whether it's regarding losing all lives or time is up.
⦁	As a user, I want to observe a play again button with every losing message, to easily restart the game.
⦁	As a user, I want to see a clear winning message, with a back to welcome page button.


📐 Pseudocode

// declare the game audios used as mp3.

// declare the navigating buttons like start, how to play, play again, etc.

// declare the ingredients page and the complete, and delete buttons.

// declaring the four levels as an array.

// declaring the recipes as an array of arrays ( each recipe is an array of ingredients in  an array of recipes ).

// declare a status array to check which recipes are completed and which are not.

// declaring the drinks buttons and the recipe card for each.

// declare the global variables needed such as lives, current level and selected recipe.

// function to hide the time bar, lives and start the music automatically.

// displaying functions when time is up, run out of lives or win.

// losing a life function to reduce the pictures opacity if you lost a life.
 
// help button show the first page of the game's back story .

// first nextbtn removes first page and display the how to play page.

// second nextbtn closes the help button and back to welcome page.

// function for adding a sound once you hover on the buttons, add an event listener to all buttons.

// startbtn to level 1 displays the background, timer, lives, the barista, speech of beginning of the game and level1 container.

// add the recipe cards to the drinks buttons, add clicking sound, if a recipe is shown and the other was clicked a message will be displayed, if the drink status was already true the recipe card won't pop again on click , otherwise the recipe card will be displayed.

// go to ingredients button, checks which recipe was chosen from the level and save it in a selected recipe variable, then hide the level displayed and display the ingredients page.
 
// timer function with countdown bar and text update, declare the bar and countdown text, stop the ticking sound when the countdown restarts, if it is already running clear before it runs again otherwise it will run twice and cause an error, when it restarts main points should be considered, so the time bar looks similar every time. Each second decreases the bar movement and update it's width, turn the bar to red and play the ticking sound if seconds are 5, if time is up clear everything to start again, display time is up container and stop the ticking sound as well as the background music .
 
// add the click sound for every ingredient button and the animation once clicked and handle adding ingredients to cup by a click.

// function for clearing the cup by removing the inserted ingredients.

// Submit button to compare the players choices with the recipe card, after comparison, move to next level if previous level is done and if there isn't any other level display winning condition. If wrong ingredients are inserted decrement a live, clear the cup and update the speech, otherwise when lives are 0 stop the sound, restart the countdown and display losing container.

// function to show remaining recipes in a level automatically after completing the first one correctly and the game takes you back to the level page.


// function to restart the countdown.

// reset game function that hides all used containers in the previous game, resets the lives, time bar, levels status, speeches and global variables and the welcome page finally.

// Event listeners for play again 2 buttons (time end or lives), and back button of winning container as well as restarting the background music.