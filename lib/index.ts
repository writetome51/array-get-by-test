import { errorIfNotArray } from 'basic-data-handling/errorIfNotArray';
import { errorIfNotFunction } from 'basic-data-handling/errorIfNotFunction';
import { IValueIndexPair } from 'value-index-pair-interface/IValueIndexPair';


// Similar to Array.filter(), except it returns array of objects.  
// Each object is a IValueIndexPair, which looks like this:   {value: any,  index: integer}
// testFunction = function(currentValue, currentIndex?, array?) : return boolean

export function getByTest(testFunction, array): IValueIndexPair[] {
	errorIfNotFunction(testFunction);
	errorIfNotArray(array);
	let filteredResults = [];
	array.filter((currentValue, currentIndex, theArray) => {
		if (testFunction(currentValue, currentIndex, theArray)) {
			filteredResults.push({value: currentValue, index: currentIndex});
		}
	});
	return filteredResults;
}
