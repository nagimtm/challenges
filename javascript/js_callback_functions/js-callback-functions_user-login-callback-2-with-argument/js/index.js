console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

// The exercise starts here!

// creating whowWelcomeMessage callback function
function showWelcomeMessage(userName) {
  console.log(`Welcome ${userName}! You are logged in now.`);
}

// calling handleUserLogin functoin with callback function and userName
handleUserLogin(showWelcomeMessage);

//calling handleUserLogin function with anonymous function
handleUserLogin((userName) => {
  console.log(`Welcome ${userName}! You are logged in now.`);
});
