console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

// --v-- write your code here --v--
const title = "Bonjour Tristesse";
const author = "Françoise Sagan";
let rating = 3.7;
let number_of_sales = 200;
// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

// --v-- write your code here --v--
function book() {
  console.log("Title: " + title);
  console.log("Author: " + author);
  console.log("Rating: " + rating);
  console.log("Sales: " + number_of_sales);
}

// book();
rating = 4.0;
number_of_sales = 300;
// book();
// --^-- write your code here --^--

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

// --v-- write your code here --v--
function logBookData(data) {
  console.log(data);
  // console.log("Author: " + author);
  // console.log("Rating: " + rating);
  // console.log("Sales: " + number_of_sales);
}

// logBookData();

function book() {
  console.log(logBookData);
}
book();

rating = 3.8;
number_of_sales = 350;
book();
// --^-- write your code here --^--
