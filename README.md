# getByTest(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;testFunction,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<br>): IValueIndexPair[]

`testFunction = function(currentValue, currentIndex?, array?) : boolean`

`getByTest()` is almost exactly like `Array.filter()`, except it returns array of 
IValueIndexPairs.  
A  IValueIndexPair is this object:  `{value: any,  index: integer}`  
It's both an item filtered by `testFunction` and its index.


## Examples
```
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let results = getByTest((item) => item > 8, arr);

// results is [{value:9, index:8}, {value:10, index:9}]


let arr = [50, -10, 100, -20, 1000, -100];
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
```

```