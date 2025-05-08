// 1. Declare variables
let favoriteColor = "blue";
let bestFriendName = "Ayan";
let country = "Garissa";

// 2. Create a sentence using all three variables
console.log("My favorite color is " + favoriteColor + ", my best friend is " + bestFriendName + ", and I live in " + country + ".");

// 3. Display the length of each string
console.log("Length of favoriteColor: " + favoriteColor.length);
console.log("Length of bestFriendName: " + bestFriendName.length);
console.log("Length of country: " + country.length);

// 4. Apply string methods
console.log("Uppercase country: " + country.toUpperCase());
console.log("Lowercase bestFriendName: " + bestFriendName.toLowerCase());
console.log("Slice favoriteColor (first 3 letters): " + favoriteColor.slice(0, 3));

// 5. (Bonus) Greet the user with your name
let userName = prompt("What is your name?");
console.log("Hello, " + userName + "! .ibra  Nice to meet you!");
