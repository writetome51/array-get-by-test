import { errorIfNotArray } from 'basic-data-handling/errorIfNotArray';
import { errorIfNotFunction } from 'basic-data-handling/errorIfNotFunction';

// Does same thing as Array.filter(), but with type-checking of parameters, and a more intuitive name,
// in my opinion.

export function getFilteredResults(testFunction, array): any[] {
	errorIfNotFunction(testFunction);
	errorIfNotArray(array);
	return array.filter(testFunction);
}
