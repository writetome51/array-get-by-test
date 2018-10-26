import { errorIfNotArray } from 'basic-data-handling/errorIfNotArray';
import { errorIfNotFunction } from 'basic-data-handling/errorIfNotFunction';

// Similar to Array.filter(), except it returns array of objects.  
// Each object matches this interface:   {value: any,  index: integer}
// testFunction = function(currentValue, currentIndex?, array?) : return boolean

export function getFilteredResults(testFunction, array): object[] {
	errorIfNotFunction(testFunction);
	errorIfNotArray(array);
	let filteredResults = [];
	array.filter((currentValue, currentIndex, array)=>{
		if (testFunction(currentValue, currentIndex, array)){
			filteredResults.push( {value: currentValue , index: currentIndex} );
		}
	});
	return filteredResults;
}
