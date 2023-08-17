console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--
const title = "Weekend Beer Party";
const text = "Beer Party is starting on Friday at 17:00 during the bootcamp";
let numberOfLikes = 0;
const userName = "Super User";
const isReported = false;
// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your 
code from 1.1 if necessary.
*/

// --v-- write your code here --v--
console.log(title);
numberOfLikes += 1;
console.log(text);
numberOfLikes += 1;
console.log(numberOfLikes);
console.log(userName);
console.log(isReported);
// --^-- write your code here --^--
