console.clear();

function handleUserLogin(onSuccess, onError, userName) {
  if (userName === "Jane Doe") {
    onSuccess(userName, "admin");
  } else {
    onError(`Unknown user "${userName}"`);
  }
}

// The exercise starts here!

// create showWelcomeMessage
function showWelcomeMessage(userName, userRole) {
  console.log(`Welcome ${userName}! You are logged in now as ${userRole}.`);
}

// create showErrorMessage
function showErrorMessage(errorMessage) {
  console.log(`Login error: ${errorMessage}`);
}

//calling handleUserLogin
handleUserLogin(showWelcomeMessage, showErrorMessage, "Jane Doe");

// calling handleUseerLogin different userName;
handleUserLogin(showWelcomeMessage, showErrorMessage, "Jahn Doe");
