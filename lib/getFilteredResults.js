"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotArray_1 = require("basic-data-handling/errorIfNotArray");
var errorIfNotFunction_1 = require("basic-data-handling/errorIfNotFunction");
// Does same thing as Array.filter(), but with type-checking of parameters, and a more intuitive name,
// in my opinion.
function getFilteredResults(testFunction, array) {
    errorIfNotFunction_1.errorIfNotFunction(testFunction);
    errorIfNotArray_1.errorIfNotArray(array);
    return array.filter(testFunction);
}
exports.getFilteredResults = getFilteredResults;
