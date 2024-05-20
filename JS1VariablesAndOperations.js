/*
  Copyright (c) 2023 Promineo Tech
  Author:  Promineo Tech Academic Team
  Subject:  Variables and Operations Lab
  FE JS1 Lab
*/

/** Key Terms:
 *  JavaScript
 *  GUI (Graphic User Interface)
 *  CLI (Command Line Interface)
 *  Variable
 *  Data Types:
 *   - String
 *   - Number
 *   - Boolean
 *   - Array
 *   - Undefined
 *   - Object
 *   - BigInt
 *   - Null
 *   - Symbol
 *  Method
 *  Git
 *  Source Control
 *  Operators
 *  console.log()
 * 
*/

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so. 
// Read the comments and add your code where it is specified for each question. 
/* ----------------------------------------------------- */

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 1. Creating & 'console.log()'ing variables \n`);

/**
 * Instruction: Create a variable for each step, then print that variable 
 *              to the console in the correct section.
 *
 * Step 1: Create a variable to hold the quantity of available seats left on a flight.
 * Step 2: Create a variable to hold the cost of groceries at checkout
 * Step 3: Create a variable to hold a person's middle initial
 * Step 4: Is it Hot Outside?
 *         Create a variable to hold a boolean, true if it's hot outside, false if it's not hot outside.
 * Step 5: Create a variable to hold a customer's first name.
 * Step 6: Create a variable to hold a street address.
 * ↓ YOUR CODE HERE ↓ */

console.log("Step 1:  Number of Seats on a Plane");
    var seatsOnPlane = 295;
    console.log("This flight has " + seatsOnPlane + " still available.");


console.log("Step 2:  Cost of Groceries");
    var costOfGroceries = 158.42;
    console.log("Our grocery cost is " + costOfGroceries);

console.log("Step 3:  Middle Initial");
    var personsMiddleInitial = "J";
    console.log("This person's middle initial is " + personsMiddleInitial);


console.log("Step 4:  Is it Hot Outside?");
    var isItHotOutside = false;
    console.log("Is it currently hot outside? " + isItHotOutside);

console.log("Step 5:  First Name");
    var customerFirstName = "Charles";
    console.log("Our customer's first name is " + customerFirstName);


console.log("Step 6:  Street Address");
    var personStreetAddress = "1234 Nowhere Lane";
    console.log("Customer's street address is " + personStreetAddress);


/*-------------------------------------------------------*/

console.log(`--------------------------
Question 2. Creating & 'console.log()'ing variables \n`);
 

/** 
 * Instruction: Use the variables we just created to solve the problems below.
 *              Print your answers to the console.
 * 
 *
 * */

    console.log('Remove Plane Seats:')
//	A customer booked 2 plane seats. Remove 2 seats from the available seats variable
//  ↓ YOUR CODE HERE ↓
    seatsOnPlane -=2;
    console.log("Latest number of available seats are " + seatsOnPlane);

    console.log('Buy a Candy Bar:')
//	Impulse candy bar purchase! Add 2.15 to the grocery total
//  ↓ YOUR CODE HERE ↓
    costOfGroceries +=2.15;
    console.log("Had to have that candy bar! My new cost of groceries is " + costOfGroceries);


    console.log('Fix a Birth Certificate:')
//	A birth certificate was printed incorrectly, change the middle initial to something else
//  ↓ YOUR CODE HERE ↓
    personsMiddleInitial = "M";
    console.log("Ooops. Wrong middle initial. It should be " + personsMiddleInitial);

    console.log('Changing Seasons:')
//	The season has changed, update the hot outside variable	to be opposite of what it was
//  ↓ YOUR CODE HERE ↓
    isItHotOutside = true;
    console.log("The weather has changed! " + isItHotOutside + " its hot outside!")

    console.log('Full Name:')
//	Create a new variable called full name using the customer's
//  first name, the middle initial, and a last name of your choice
//  ↓ YOUR CODE HERE ↓
    var customersFullName = customerFirstName + " " + personsMiddleInitial + " " + "Schmoe";
    console.log("Our customer's full name is " + customersFullName);

    console.log('Introduce a Customer:')
//	Print a line to the console that introduces the customer 
//	including the name, and saying that they live at the address variable
//  ↓ YOUR CODE HERE ↓
    console.log("Please welcome " + customersFullName + " who is living at " + personStreetAddress + " here in beautiful Florida");


    console.log('-----------Finished------------')