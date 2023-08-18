let truthyOrFalsy = Boolean(3 >= 2);
console.log("The expression is " + truthyOrFalsy);

truthyOrFalsy = Boolean(2 == "2");
console.log("The expression is " + truthyOrFalsy);

truthyOrFalsy = Boolean(2 === "2");
console.log("The expression is " + truthyOrFalsy);

truthyOrFalsy = Boolean("hello world");
console.log("The expression is " + truthyOrFalsy);

truthyOrFalsy = Boolean(" ");
console.log("The expression is " + truthyOrFalsy);

truthyOrFalsy = Boolean(true);
console.log("The expression is " + truthyOrFalsy);

truthyOrFalsy = Boolean(0);
console.log("The expression is " + truthyOrFalsy);

truthyOrFalsy = Boolean(-50);
console.log("The expression is " + truthyOrFalsy);

truthyOrFalsy = Boolean(50);
console.log("The expression is " + truthyOrFalsy);

truthyOrFalsy = Boolean(5 > 1);
console.log("The expression is " + truthyOrFalsy);

truthyOrFalsy = Boolean("1 > 10");
console.log("The expression is " + truthyOrFalsy);

truthyOrFalsy = Boolean("false");
console.log("The expression is " + truthyOrFalsy);
