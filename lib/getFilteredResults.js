"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotArray_1 = require("basic-data-handling/errorIfNotArray");
var errorIfNotFunction_1 = require("basic-data-handling/errorIfNotFunction");
// Similar to Array.filter(), except it returns array of objects.  
// Each object matches this interface:   {value: any,  index: integer}
// testFunction = function(currentValue, currentIndex?, array?) : return boolean
function getFilteredResults(testFunction, array) {
    errorIfNotFunction_1.errorIfNotFunction(testFunction);
    errorIfNotArray_1.errorIfNotArray(array);
    var filteredResults = [];
    array.filter(function (currentValue, currentIndex, array) {
        if (testFunction(currentValue, currentIndex, array)) {
            filteredResults.push({ value: currentValue, index: currentIndex });
        }
    });
    return filteredResults;
}
exports.getFilteredResults = getFilteredResults;
