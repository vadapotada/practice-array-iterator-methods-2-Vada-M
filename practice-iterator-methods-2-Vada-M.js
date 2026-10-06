// Task 1: Using forEach()
// 1. Create an array of five of your favorite cities.

let favoriteCities = ["St. Paul", "Asheville", "St. Louis", "Chicago", "Carolina Beach"];

// 2. Use forEach( ) to log each city name to the console in uppercase.

let upperCaseCityNames = favoriteCities.forEach(cityName => console.log(cityName.toUpperCase()));

// 3. Add comments to your code that show the expected output as it would be formatted in the console.

// ST. PAUL
// ASHEVILLE
// ST. LOUIS
// CHICAGO
// CAROLINA BEACH

// Task 2: Transforming with map()
// 1. Create an array called numbers with the numbers 1-5.

let numbers = [1, 2, 3, 4, 5];

// 2. Use map( ) to create a new array called squares where each number is squared.

let squares = numbers.map(result => result * result);

// 3. Log the new array.

console.log(squares);

// 4. Add comments to your code that show the expected output as it would be formatted in the console.

// [1, 4, 9, 16, 25]

// Task 3: Filtering with filter()
// 1. Create an array called scores containing the numbers 85, 42, 90, 75, 30, and 100.

let scores = [85, 42, 90,  75, 30, 100];

// 2. Use filter() to create a new array called highScores that contains only the scores greater than or equal to 80.

let highScores = scores.filter(score => score >= 80);

// 3. Log the new array.

console.log(highScores);

// 4. Add comments to your code that show the expected output as it would be formatted in the console.

// [85, 90, 100]

// Task 4: Finding with find() and findIndex()
// 1. Create an array called favoriteFood that contains a list of your favorite dishes. Try to add 5 or 6 elements.

let favoriteFood = ["Pizza", "Foccacia", "Fries", "Soup", "Grilled Cheese", "Veggie Corndogs"];

// 2. Use find() to locate the first food with more than 4 letters.

let longFood = favoriteFood.find(food => food.length > 4);

// 3. Use findIndex( ) to find the index of that food.

let indexOfFavoriteFood = favoriteFood.findIndex(food => food.length > 4);

// 4. Log each of these results.

console.log(longFood);
console.log(indexOfFavoriteFood);

// 5. Add comments to your code that show the expected output as it would be formatted in the console.

// Pizza
// 0

// Task 5: Checking conditions with some() and every()
// 1. Create an array called temperatures that contains a list of 5 temperatures from the forecast for your city.

let temperatures = [79, 82, 90, 76, 52];

// 2. Use some() to check whether any temperatures are above 90 degrees.

let hotTemperatures = temperatures.some(temp => temp > 90);

// 3. Use every() to check if all temperatures are above 50 degrees.

let mildTemperatures = temperatures.every(temp => temp > 50);

// 4. Log the results as a single array.

console.log([hotTemperatures, mildTemperatures]);

// 5. Add comments to your code that show the expected output as it would be formatted in the console.

//[false, true]

// Task 6: Reducing with reduce()
// 1. Decide on a total budget for birthday gifts.

let totalBudget = 450;

// 2. Create an array called prices that contains the price of 4 items you would like to purchase as gifts.

let prices = [120, 142, 45, 69];

// 3. Use reduce() to subtract each item’s price from your total budget. If the number is 0 or greater, you will know these items fit within your budget.

let remainderGiftPrices = prices.reduce((total, price) => total - price, totalBudget);

// 4. Log the results.

console.log(remainderGiftPrices);

// 5. Add comments to your code that show the expected output as it would be formatted in the console.

// 74
