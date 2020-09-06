# getByTest(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;test: (value, index?, array?) => boolean,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;getValue?: (value, index?, array?) => any<br>): any[]

Similar to Array.prototype.filter(), except it includes optional callback `getValue()`,  
which lets you customize what value to get from the element that passes `test`.  
By default `getValue()` simply returns the element.


## Examples
```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
getByTest((value) => value >= 9, arr);
// --> [9, 10]


// Return the value and index of each element that passes:

arr = [50, -10, 100, -20, 1000, -100];
getByTest(
    (value) => value < 0, 
    arr,
    (value, index) => { return {value, index}; }
);
/*************** 
Returns:
[
   {value: -10, index: 1}, 
   {value: -20, index: 3}, 
   {value: -100, index: 5}
]
***************/


// Get only the indexes:

arr = [50, -10, 100, -20, 1000, -100];
getByTest(
    (value) => value < 0, 
    arr, 
    (value, index) => index
);
// --> [1, 3, 5]


// Get the square root of each element that passes:

arr = [-2,-4, 9, 16];
getByTest(
    (value) => value > 0,
    arr,
    (value) => Math.sqrt(value)
);
// --> [3, 4]
```

## Installation
`npm i  @writetome51/array-get-by-test`

## Loading
```ts
import {getByTest} from '@writetome51/array-get-by-test';
```
