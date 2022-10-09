/* EXERCISE A Create a variable called test and assign a string value to it.*/
let test = 'mainobject';
console.log('exA:', test)
/* EXERCISE B
Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.
*/
let sum = 10 + 20;
console.log('exB:', sum)

/*Create a variable called random and assign to it a random number between 0 and 20 (it should be randomly created at each execution).*/
let random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let randomNumber = Math.floor(Math.random() * random.length);
console.log('exC:', randomNumber)
/* EXERCISE D Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.*/
const me = {
    firstName: 'Abiodun',
    secondName: 'Akinlotan',
    age: 33
}
console.log('exD:', me)
/* EXERCISE E Write a piece of code for programmatically removing the age property from the previously create object.*/
delete me.age
console.log('exE:', me)
/* EXERCISE F
Write a piece of code for programmatically adding to the me object you defined before an array called skills, containing the programming languages you know right now.*/
me.skills = ['javascript'];
console.log('exF:', me)
/* EXERCISE G Write a piece of code for programmatically removing the last skill from the skills array inside the me object.*/
me.skills.pop()
console.log('exG:', me)
console.log('\n......................JS Functions................')
/* EXERCISE 1
Write a function called dice; it should randomize an integer number between 1 and 6.*/
/* EXERCISE 2
Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.*/
function whoIsBigger(l1, l2) {
    if (l1 > l2 || l2 < l1) {
        return l1
    }
    else {
        return l2
    }
}
console.log('Ex2:', whoIsBigger(5, 10))
/* EXERCISE 3

Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string.

Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]

*/
/* EXERCISE 4

Write a function called deleteOne which receives a string and a boolean as parameters.

If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.

*/
function deleteOne(m1, m2) {
    if (m1 == m2) {
        return m1
    }
    else {
        return m2
    }
}
console.log('Ex4:', deleteOne('leep', 'slee'))
/* EXERCISE 5

Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.

Ex.: onlyLetters("I have 4 dogs") => returns "I have dogs"

*/
function onlyLetters(letters) {
    letters = 'i have 4 girls';
    return letters
}
const replace = letters.replace(/\d/g, "");
console.log(replace)
