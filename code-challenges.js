// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:
// input: string1, string2
// output: string1 if > string2 or string2 if > string 1
// Set one:
//  - define the function that will use the parameters string1 and string2
//  - compare the two strings using .length
//  - console log the larger string

const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"
const largestString = (string1, string2) => {
    if(string1.length > string2.length){
        return string1
    }
    else {
        return string2
    }
}
console.log(largestString(fruit3, fruit4))

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
// input: temperature
// output: is below boiling or is above boiling, or is at boiling
// - define function that uses temperature as parameter
// - compare temperature and return if it is above, below, or at the boiling point
// - console log the function with argument temperature1, 2, 3

const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"
const boilingPoint = (temperature) => {
    if (temperature > 212){
        return `${temperature} is above boiling point`
    } else if (temperature === 212){
        return `${temperature} is at boiling point`
    } else if (temperature < 212){
        return `${temperature} is below boiling point`
    } else {
        return "invalid temperature"
    }
}
console.log(boilingPoint(temperature3))

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
// input: array1, array2
// output: length of both arrays combined array1 + array2.length
//  - create variable to hold combined arrays
//  - initialize variable with array1 + array2 using .concat()
//  - print the variable length using .length

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9
const padres1984_1998WorldSeriesRuns = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
console.log(padres1984_1998WorldSeriesRuns.length)


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:
// input: currentCohort
// output: string reversed 
// - turn string into array using . split()
// - reverse the array using .reverse()
// - rejoin the characters into a string using .join()
// - console log the reversed string

const currentCohort = "Charlie 2023"
// Expected output: "3202 eilrahC"
const currentCohortReversed = currentCohort.split("").reverse().join("")
console.log(currentCohortReversed)

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
// input: array numberOfConnections
// output: the last index of array
// - create a function that takes a parameter of variable 
// - return the last index of the variable in array using .lastIndexOf()
// console log the index of the value

const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

const indexOfValue = (value) => {
    return numberOfConnections.lastIndexOf(value)
}
console.log(indexOfValue(givenValue1))

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
// input: sanDiegoSummerTemperatures, sanDiegoWinterTemperatures
// output: array from largest to smallest
// - make a function using the array as a parameter
// - sort through the array using .sort() funcition
// - console log the array from largest to smallest

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

const arraySort = (sdTemperatures) => {
    return sdTemperatures.sort((a,b) => b-a)
}
console.log(arraySort(sanDiegoSummerTemperatures))