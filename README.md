getFilteredResults(testFunction, array): IValueIndexPair[]

testFunction = function(currentValue, currentIndex?, array?) : return boolean

getFilteredResults is almost exactly like Array.filter(), except it returns array of 
IValueIndexPairs.  
A  IValueIndexPair is this object:   {value: any,  index: integer}  
It contains both the value filtered by the testFunction and its index.



Example:

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let results = getFilteredResults((item) => item > 8, arr);

results is now [{value:9, index:8}, {value:10, index:9}]
