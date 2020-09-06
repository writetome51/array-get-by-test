import {arraysMatch} from '@writetome51/arrays-match';
import {getByTest} from './index.js';


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Test 1: test function returns every item greater than or equal to 9, and array should
// not be modified:
let result = getByTest((item) => item >= 9, arr);
if (arraysMatch(result, [9, 10]) && arraysMatch(arr, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
	console.log('test 1 passed');
else console.log('test 1 FAILED');


// Test 2:
arr = [1, 2, 3, 4, 1, 2, 3, 4];
result = getByTest(
	(item, index) => (item === 1 && index === 4),
	arr,
	(value, index) => {return {value, index};}
);
if (result.length === 1 && result[0]['value'] === 1 && result[0]['index'] === 4)
	console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 2A:
arr = [1, 2, 3, 4, 1, 2, 3, 4];
result = getByTest(
	(value, index, __arr) => (value === 4 && (__arr[index + 1] === 1)),
	arr,
	(value, index) => {return {value, index};}
);
if (result.length === 1 && result[0]['value'] === 4 &&
	result[0]['index'] === 3 && arraysMatch(arr, [1, 2, 3, 4, 1, 2, 3, 4]))
	console.log('test 2A passed');
else console.log('test 2A FAILED');


// Test 3
let errorTriggered = false;
try {
	getByTest({}, arr);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 5
result = getByTest((item) => item > 10, arr);
if (Array.isArray(result) && result.length === 0) console.log('test 5 passed');
else console.log('test 5 FAILED');


//Test 6 : speed test
arr = [];
let i = 0;
while (++i <= 10000000) arr.push(i);
console.time('speed check');
result = getByTest((value) => value !== 0, arr);
console.timeEnd('speed check');
console.log(result.length);

