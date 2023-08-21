console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  // Code here
  let time = new Date().getHours();
  // let time = 23;
  if (time >= 6 && time <= 12) {
    return (display.textContent = "Good Morning");
  } else if (time >= 13 && time <= 18) {
    return (display.textContent = "Good Afternoon");
  } else if (time >= 19 && time <= 22) {
    return (display.textContent = "Good Evening");
  }
  return (display.textContent = "Good Night");
}

function getDayColor() {
  // Code here
  let getDay = new Date().getDay();
  if (getDay == 1) {
    return "darkgray";
  } else if (
    getDay == 2 ||
    getDay == 2 ||
    getDay == 3 ||
    getDay == 4 ||
    getDay == 5
  ) {
    return "lightblue";
  }
  return "hotpink";
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
