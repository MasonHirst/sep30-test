///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day off the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

let totalAcres = 0

for (let i = 0; i < fujiAcres.length; i++) {
    totalAcres += fujiAcres[i]
}
for (let i = 0; i < galaAcres.length; i++) {
    totalAcres += galaAcres[i]
}
for (let i = 0; i < pinkAcres.length; i++) {
    totalAcres += pinkAcres[i]
}

console.log("total acres picked in the week:", totalAcres)

console.log(".....................................................")


// I felt that the easiest way for me to add all the values together was to make 3 for loops. Each for loop ran through one array, adding each value to the total acres variable. After all the loops ran, I logged the variable.



// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
let averageDailyAcres = totalAcres / 7
console.log("Average acres picked per day:", averageDailyAcres)

console.log(".....................................................")


// This one was pretty simple. I already had a single variable for the total number of acres, so I could just then add up the lengths of the arrays, and divide the total acres by the sum lengths. The new variable for the average was set equal to this math problem.



// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE
while (acresLeft > 0) {
    acresLeft -= averageDailyAcres
    days++
}
console.log("number of day:", days)

console.log(".....................................................")


// In this problem, I made a while loop that continually subtracted the average apples picked per day from the new total acres, and then added 1 to the days count. It was set to run until the acres left was 0 or less. Doing this instead of simple division gave us a whole number instead of a decimal number.

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

let fujiTons = []
for (let i = 0; i < fujiAcres.length; i++) {
    fujiTons.push(fujiAcres[i]  * 6.5)
}
console.log("fuji acre tons picked/day:", fujiTons)

let galaTons = []
for (let i = 0; i < galaAcres.length; i++) {
    galaTons.push(galaAcres[i]  * 6.5)
}
console.log("gala acre tons picked/day:", galaTons)

let pinkTons = []
for (let i = 0; i < pinkAcres.length; i++) {
    pinkTons.push(pinkAcres[i]  * 6.5)
}
console.log("pink acre tons picked/day:", pinkTons)

// console.log(fujiAcres, galaAcres, pinkAcres)
// the above console log is just to make sure that the original arrays were not affected.

console.log(".....................................................")


// In this problem, I made each ----Tons variable an array. Then I ran a for loop through the ----Acres arrays. The loops pushed each value in the ----Acres arrays into the ----Tons arrays, after multiplying it by 6.5 (tons per acre).


// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

let fujiPounds = 0
let galaPounds = 0
let pinkPounds = 0

for (let i = 0; i < fujiTons.length; i++) {
    fujiPounds += fujiTons[i] * 2000
}

for (let i = 0; i < galaTons.length; i++) {
    galaPounds += galaTons[i] * 2000
}

for (let i = 0; i < pinkTons.length; i++) {
    pinkPounds += pinkTons[i] * 2000
}

console.log("pounds picked in fuji acres:", fujiPounds)
console.log("pounds picked in gala acres:", galaPounds)
console.log("pounds picked in pink acres:", pinkPounds)

console.log(".....................................................")

// In this problem, I ran a for-loop through each ----Tons array. The loop took each value of the array, multiplied it by 2000, then added it to the ----Pounds variable. This converted the arrays into single numbers. 




// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

let fujiProfit = fujiPrice * fujiPounds
let galaProfit = galaPrice * galaPounds
let pinkProfit = pinkPrice * pinkPounds

console.log("profit from fuji acres:", fujiProfit, "dollars")
console.log("profit from gala acres:", galaProfit, "dollars")
console.log("profit from pink acres:", pinkProfit, "dollars")

console.log(".....................................................")


// This one was very simple. To get the profits, we just multiply the price per pound by the number of pounds. In code, I made the value of the ----Profit variables equal the variable for ----Price * ----Pounds.


// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
let totalProfit = fujiProfit + galaProfit + pinkProfit
console.log("Total profit:", totalProfit, "dollars")

// Here I made the 'totalProfit' variable equal the added values of the '----Profit' variables.