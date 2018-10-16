This function does the same thing as Array.filter()

getFilteredResults(testFunction, array);

Example:

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let results = getFilteredResults((item) => item > 6, arr);

results is now [7,8,9,10]
