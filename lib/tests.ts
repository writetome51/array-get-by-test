import { arraysMatch } from '@writetome51/arrays-match';
import { getFilteredResults } from './getFilteredResults';


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Test 1: test function returns every item greater than or equal to 5, and array should
// not be modified:
let result = getFilteredResults((item) => item >= 5, arr);
if (arraysMatch(result, [5, 6, 7, 8, 9, 10]) && arraysMatch(arr, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
	console.log('test 1 passed');
else console.log('test 1 failed.');


// Test 2:
result = getFilteredResults((item) => item % 2 !== 0, arr);
if (arraysMatch(result, [1, 3, 5, 7, 9]) && arraysMatch(arr, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
	console.log('test 2 passed');
else console.log('test 2 failed.');


// Test 3
let errorTriggered = false;
try {
	getFilteredResults({}, arr);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 3 passed');
else console.log('test 3 failed.');


// Test 3
errorTriggered = false;
try {
	getFilteredResults((item) => item >= 5, 'hello');
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 4 passed');
else console.log('test 4 failed.');


// Test 4
result = getFilteredResults((item) => item > 10, arr);
if (Array.isArray(result) && result.length === 0) console.log('test 5 passed');
else console.log('test 5 failed.');