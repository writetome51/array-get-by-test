// Similar to Array.filter(), except it returns array of these objects:
//  {value: any,  index: integer}
//
// Originally used Array.filter(), but found Array.forEach() at least 15ms faster.
export function getByTest(testFunction, array) {
    let found = [];
    array.forEach((value, index, theArray) => {
        if (testFunction(value, index, theArray))
            found.push({ value, index });
    });
    return found;
}
