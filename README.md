getFilteredResults(testFunction, array);

Similar to Array.filter(), except it returns array of objects.
Each object contains both the value that matched the testFunction and its index.
Each object matches this interface:   {value: any,  index: integer}

testFunction = function(currentValue, currentIndex?, array?) : return boolean

Example:

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let results = getFilteredResults((item) => item > 8, arr);

results is now [{value:9, index:8}, {value:10, index:9}]
