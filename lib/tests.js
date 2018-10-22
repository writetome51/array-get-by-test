"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arrays_match_1 = require("@writetome51/arrays-match");
var getFilteredResults_1 = require("./getFilteredResults");
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Test 1: test function returns every item greater than or equal to 5, and array should
// not be modified:
var result = getFilteredResults_1.getFilteredResults(function (item) { return item >= 5; }, arr);
if (arrays_match_1.arraysMatch(result, [5, 6, 7, 8, 9, 10]) && arrays_match_1.arraysMatch(arr, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
    console.log('test 1 passed');
else
    console.log('test 1 failed.');
// Test 2:
result = getFilteredResults_1.getFilteredResults(function (item) { return item % 2 !== 0; }, arr);
if (arrays_match_1.arraysMatch(result, [1, 3, 5, 7, 9]) && arrays_match_1.arraysMatch(arr, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
    console.log('test 2 passed');
else
    console.log('test 2 failed.');
// Test 3
var errorTriggered = false;
try {
    getFilteredResults_1.getFilteredResults({}, arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 3 passed');
else
    console.log('test 3 failed.');
// Test 3
errorTriggered = false;
try {
    getFilteredResults_1.getFilteredResults(function (item) { return item >= 5; }, 'hello');
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 4 passed');
else
    console.log('test 4 failed.');
// Test 4
result = getFilteredResults_1.getFilteredResults(function (item) { return item > 10; }, arr);
if (Array.isArray(result) && result.length === 0)
    console.log('test 5 passed');
else
    console.log('test 5 failed.');
