console.clear();

function handleUserLogin(onSuccess) {
  // You might wonder why this function is called `onSuccess`. This will become clear by the fourth challenge! 🤞
  onSuccess();
}

//creating showWelcomeMessage
function showWelcomeMessage() {
  console.log("Welcome! You are logged in now.");
}

// Call handleUserLogin below!
//calling handleUserLogin function with callback function
handleUserLogin(showWelcomeMessage);

// calliing handleUserLogin function with anonymous function
handleUserLogin(() => {
  console.log("Welcome! You are logged in now.");
});
