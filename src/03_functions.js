// @ts-nocheck
/*
 How well you understand functions in javascript, bruh?
*/

// 1. create a function called "getMyName" that returns your name. It takes no arguments.
const myName = () => "Egon"
// 2. Create a function called "add". It takes 2 numbers as arguments and returns its sum.
const add = (num_1, num_2) => num_1 + num_2
// 3. Create a function called "subtractWithCheck". This time:
//  - It can expect any 2 arguments
//  - It should return the difference of the 2 arguments if they are numbers
//  - If one of the arguments is not a number, it should return "Yo dawg you can't subtract us!"
function subtractWithCheck(arg1, arg2) {
    if (typeof arg1 === 'number' && typeof arg2 === "number") {
        return arg1 - arg2
    } else if (typeof arg1 !== 'number' || typeof arg2 !== "number") {
        return "Yo dawg you can't subtract us!"
    }
}
// 4. now call the functions with some arguments of your choice.
subtractWithCheck(5, 3)
subtractWithCheck(4, "hello")
// 4.1 assign results to variables.
let result1 = subtractWithCheck(5, 3)
let result2 = subtractWithCheck(4, "hello")
// 4.2 print the results to the console.
console.log(result1, result2)

// 5. Create a function called getAge. It takes a person object as an argument.
//   - It should return the person's name and age as one single string, like "John is 26".
//   - The person's shape is { id: number, bornIn: number, name: string }
// 5.1 Call the function with a person argument of your choosing.
const person = {
    id: 1,
    bornIn: 1992,
    name: "Egon"
}
const getAge = (person) => `${person.name} is ${new Date().getFullYear()-person.bornIn} years old!`
getAge(person)

// 6. Yo, this is a brain picker. Move on for now if you can't solve it ;P
// Create a function called "getGreet" that takes a boolean (you can call it `shouldCapitalise`) and:
//   - returns a function that greets the person with the given string.
//   - if `shouldCapitalise` is true, it should greet the person with a capitalised name.
// 6.1 Using this new function, say hello to yourself in uppercase, and console.log it

const myName = "Egon"
let shouldCapitalise = true

const getGreet = (shouldCapitalise) => {
    if (shouldCapitalise) {
        return "Hello " + myName.toUpperCase() + " !"
    } else {
        return `Hello ${myName} !`
    }
}

console.log(getGreet(shouldCapitalise))