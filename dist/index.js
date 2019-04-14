"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_not_array_1 = require("error-if-not-array");
var error_if_not_function_1 = require("error-if-not-function");
// Similar to Array.filter(), except it returns array of objects.  
// Each object is a IValueIndexPair, which looks like this:   {value: any,  index: integer}
// testFunction = function(currentValue, currentIndex?, array?) : return boolean
function getByTest(testFunction, array) {
    error_if_not_function_1.errorIfNotFunction(testFunction);
    error_if_not_array_1.errorIfNotArray(array);
    var filteredResults = [];
    array.filter(function (currentValue, currentIndex, theArray) {
        if (testFunction(currentValue, currentIndex, theArray)) {
            filteredResults.push({ value: currentValue, index: currentIndex });
        }
    });
    return filteredResults;
}
exports.getByTest = getByTest;
