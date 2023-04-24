// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: 10 is logged because .length returns the amount of characters in a string.

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: o is returned because the [] point to the index of the string.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: ruby
// b) Verify and explain: console log prints the first element of the array which starts at 0 so ruby it outputted.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: SATURDAY SUNDAY
// b) Verify and explain: A type error is shown because .toUpperCase can only be called on a string and not an array. 

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: string
// b) Verify and explain: dataTypes is turned into a number by .length. typeof then outputs number.
