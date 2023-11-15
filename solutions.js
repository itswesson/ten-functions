"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

// Question 1
function isTrue(input) {
    return input === true
}
//  const isTrue = input => input === true;


// Question 2
// Define a function named 'isFalse'
// takes in a value
// returns true if input exactly equal to false

function isFalse(input) {
    return input === false
}

// Question 3
// define a function named 'not'
// takes in input
// returns boolean opposite of input

function not(input) {
    // return input === (!false)
    return !input
}


// Question 4
// define a function named "addOne"
// enter single input
// returns input +1

function addOne(input) {
    return Number(input) + (1)
}
// function addOne(input) {
//     if (!isNaN(input)) {
//         return Number(input) + 1;
//     } else {
//         return "Invalid input. Please provide a number or a numeric string.";
//     }
// }

// Question 5
// function isEven(input) {
//     // // guard clause against booleans
//     if(typeof (input) == "boolean") {
//         return false
//      }
//     if(typeof (input) == "string") {
//         return false
//     }
//     if (input % 2 === 0) {
//         return true
//     }
//     if (input % 2 === 1) {
//         return false
//     }

    // // #5 example 1
    // const isEven = (input) => {
    //     if(
    //         typeof input === 'number'
    //         || typeof input === 'string'
    //         && !isNaN(input)
    //     ){
    //     return input % 2
    //     }
    // }
    // }

//  // #5 example 2
const isEven = (input) => {
    if(typeof input === 'number')
        return input % 2 === 0;
    if(typeof input === 'boolean')
        return false;
    if(typeof input === 'string')
        if(!isNaN(input)) {
            return input % 2 === 0
        } else {
            return false
        }
}

//     #5 example 3
// if(typeof input === 'boolean') {
//     return false;
// }
// return input % 2 === 0;

// Question 6


// Question 10
function concat(input1, input2) {
    if(
        typeof input1 === 'string'
        && typeof input2 === 'string'
    )    {}
}