# Brew-Memory-
Brew memory  (memory game):

// start by having different recipes of coffee 
// the player have to choose one recipe 
// the recipe is displayed for the player for 10s to be memorized 
// ingredients list is displayed 
// the player have to choose the ingredients 
// win if all coffee ingredients are right 
// lose if one ingredient is missing, or one ingredient is wrong 

*goal : The user should memorize the coffee recipe then recreate it from memory by selecting the correct ingredients. 


*User Stories :
. As a user, I want to visual a welcome page once I visit the website.
. As a user, I want to see a starting button.
. As a user, I want to see a clear instruction so I instantly know my first step.
. As a user, I want to visual a button to display the menu of all the recipes we have.
. As a user, I want to observe a clear recipe with messages and pictures of the ingredients of the chosen coffee.
. As a user, I want to be presented by a visible timer that shows clearly when the recipe will disappear.
. As a user, I want to see a clear instruction about the next step.
. As a user, I want to visual the coffee corner page, where I view all the ingredients by pictures and text.
. As a user, I want to be able to click on the ingredients buttons.
. As a user, I want to visual a feedback after clicking, so I know my choice has been selected and whether it's the right or wrong ingredient.
. As a user, I want to see a clear message after winning or losing the game.
. As a user, I want to be able to play another round by clicking the play Again button, and returning back to the welcome page.

*pseudocode :

1. define constants and variables
// Define a constant list of coffee recipes with their ingredients.
// Define a constant array for all the ingredients. 
// Define a constant timer with 10 sec
 
2. define state variables but don't assign values to them
// Define a variable for currentRecipe.
// Define a variable for selectedIngredients.
// Define a variable for correctIngredients.
// Define a variable for Results.
// Define a variable for the countTimer ( it should decrease )
// Define a variable for the intervalId

3. select and save cache elements
// Select startBtn element
// Select recipeBtn element
// Select ingredientsBtn element
// Select displayMessage element
// Select the timerDisplay element
// Select playAgainBtn element

4. add event listeners
// Add an event listener to startBtn 
// Add an event listener to each recipeBtn
// Add an event listener to each ingredientBtn
// Add an event listener to playAgainBtn

5. Invoke the init function 
// Set the currentRecipe to null
// Set the selectedIngredients list to empty
// Set the correctIngredients list to empty
// Set the Results to empty 
// Set countTimer and intervalId to null 
// hide the game sections that we removed the hidden class from

6. Invoke the render function
// Display a win or lose in the displayMessage element
// Display the countTimer value in the timerDisplay element

7. Wait for the user to click on a recipe button 
// Set the currentRecipe based on the clicked button 
// Set the correctIngredients based on the recipe chosen
// Set the countTimer to 10 sec
// Remove the hidden class from the recipe to make it clear for the user
// Start a visible timer for each sec using intervalId 
// Update the timerDisplay and subtract one from the countTimer
// if countTimer reach zero, hide the recipe and show the ingredients

8. Wait for the user to click on the ingredient button
// Add the ingredient clicked to the selectedIngredients list if not selected before
// Check IF the selectedIngredients length matches the correctIngredients length, sort both lists, else set Results to "Oops! That is not the right mix. You lost!"
// check IF the sorted lists match exactly, set Results to "Great! you made the perfect coffee. You won!", else set the Results with the previous message of losing
// call the displayMessage element (render function since it includes it)

9. Wait for user to click the playAgainBtn 
// Call the init function
// Set timerDisplay to empty (to display nothing)


