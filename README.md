# getByTest(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;testFn: (value, index?, array?) => boolean,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<br>): {value: any,  index: number}[]

`getByTest()` is almost exactly like `Array.filter()`, except it returns array of these objects:  
 `{value: any,  index: integer}`


## Examples
```js
let arr = ['a', 'bb', 'c', 'dd', 'e', 'ff'];
getByTest((value) => value.length > 1, arr);
// -->  [{value:'bb', index:1}, {value:'dd', index:3}, {value:'ff', index:5}]


arr = [50, -10, 100, -20, 1000, -100];
let results = getByTest((item) => item < 0, arr);

/*************** 
results is 
[
   {value: -10, index: 1}, 
   {value: -20, index: 3}, 
   {value: -100, index: 5}
]
***************/

```

## Installation
`npm i  @writetome51/array-get-by-test`

## Loading
```ts
import {getByTest} from '@writetome51/array-get-by-test';
```
