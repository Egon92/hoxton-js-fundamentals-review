/*
 Aight, logic gate time!
*/

// function called "getShorterString" takes 2 strings as arguments. It returns the string that is shorter in length.
// - If the strings are the same length, return "They're the same length!"
// 1. Build the function.

// function getShorterString(string_1, string_2) {
//     if (string_1.length === string_2.length) {
//         return "They're the same length!"
//     } else if (string_1.length < string_2.length) {
//         return string_1
//     } else {
//         return string_2
//     }
// }
const getShorterString = (string_1, string_2) => string_1.length === string_2.length ? "They're the same length!" : (string_1.length < string_2.length ? string_1 : string_2)
// 1.1 Call the function with "Bob" and "Steven" as arguments.
getShorterString("Bob", "Steven")
// 1.2. Call the function with "Henrica" and "Mark" as arguments.
getShorterString("Henrica", "Mark")
// 1.3. Call the function with any arguments we like to test the remaining use case.
getShorterString("Mia", "Edd")

// 2. for this exercise, nasty birds are pigeon, seagull and bin chicken. All other birds are clean.
// Write a function called checkDirtyBirds which takes an array of bird species as an argument.
// The function should:
// - return "Eww" if the array contains one of the nasty birds
// - return "Oh god" if the array contains 2 of the nasty birds
// - return "Where the hell am I?" if the array contains 3 or more of the nasty birds
// - return "Birds are cute!" if all the birds are clean

const nastyBirds = ["pigeon", "seagull", "bin chicken"]
const birdsArray = ["duck", "seagull", "guinea fowl", "pigeon", "goose"]

function checkDirtyBirds(nastyBirds, birdsArray) {
    let arrayOfNastyBirdsInBirdsArray = []
    for (const bird of nastyBirds) {
        if (birdsArray.includes(bird)) {
            arrayOfNastyBirdsInBirdsArray.push(bird)
        }
    }
    if (arrayOfNastyBirdsInBirdsArray.length === 0) {
        return "Birds are cute!"
    } else if (arrayOfNastyBirdsInBirdsArray.length === 1) {
        return "Eww"
    } else if (arrayOfNastyBirdsInBirdsArray.length === 2) {
        return "Oh god!"
    } else if (arrayOfNastyBirdsInBirdsArray.length >= 3) {
        return "Where the hell am I?"
    }
}


// 2.1 Test all the scenarios by calling the function with different arguments.