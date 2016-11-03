/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 
Algorithm 
1. Create a function sumOfArray() with array input
2. Create an output variable to store the array sum
3. loop through the array elements and add each element to the empty output array
4. Return the output variable 
*/

function sumOfArray(inputArray){
	var arraySum = 0
	for(var i=0; i<inputArray.length; i++){
		arraySum += inputArray[i]
	}
	return arraySum
}

console.assert(sumOfArray([1, 2]) === 3);
console.assert(sumOfArray([]) === 0);
console.assert(sumOfArray([1, 2, 3]) === 6);
console.assert(sumOfArray([10, 9, 8]) === 27);

/* PART 1

// Write a function maxOfArray() that takes an array of
// numbers as an argument and finds the highest number.

Algorithm 
1. Create a function maxOfArray() with array input
2. Create an array max output variable and assign zero to it
3. loop through the array elements and compare each element to the array max variable
4. Return the array max output variable 
*/

function compareNum(n1, n2){
	if(n1 > n2){
		return n1
	}
	return n2
}

function maxOfArray(inputArray){
	var arrayMax = 0
	for (var i = 0; i < inputArray.length; i++) {
		if(isNaN(inputArray[i])) {
			return NaN
		} 
		arrayMax = compareNum(arrayMax, inputArray[i])
	}
    return arrayMax
}

console.assert(maxOfArray([2,4,3]) === 4)
console.assert(maxOfArray([10,9,8,100,7,6]) === 100)
console.assert(isNaN(maxOfArray([1,2,'bucklemyshoe'])))

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 

 Algorithm 
1. Create a function isVowel() with string input
2. Create an array of vowels - including lowercase and uppercase instances
3. Loop through the array of vowels and compare the input string to each of the array element 
4. Return true if a match is found
5. Return false if a match is not found  
*/
 
 function isVowel(inputStr){
 	var vowelDictionary = ["a","e","i","o","u","A","E","I","O","U"]
 	for (var i = 0; i < vowelDictionary.length; i++) {
 		if(vowelDictionary[i] === inputStr){
 			return true
 		}
 	}
 	return false
 }

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**
 * Part 3
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 
 Algorithm 
1. Create a function reverse() with input string 
2. Create an empty output string to store the reversed string
3. Loop through the input string in descending order starting from the last character of the string
4. Add each character to the empty output string after each loop
5. Return the output string
*/

function reverse(inputStr){
	var reverseStr = ""
	for (var i = inputStr.length - 1; i >=0; i--) {
		reverseStr += inputStr[i]
	}
	return reverseStr
} 


console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")


/**
 * Part 4
 *
 * write a function that returns a FizzBuzz string for some number N (counting up from 1).
 * - for every number that isn't a multiple of 3 or 5, return a period "."
 * - for every number that is a multiple of 3 (but not 5), return "fizz"
 * - for every number that is a multiple of 5 (but not 3), return "buzz"
 * - for every number that is a multiple of 3 and 5, return "fizzbuzz"
 
 Algorithm 
1. Create a function fizzbuzz() with input number 
2. Loop through the input number and check if the 4 conditions are met
3. Use a Switch statement and assign each condition as a case in the switch statement definition
4. Return the appropraite response for each condition met 
*/

function fizzbuzz(num){
	var newStr = ""
    for(var i=1; i <= num; i++){
    	switch(true){
        	case(i % 5 === 0 && i % 3 === 0):
                newStr += "fizzbuzz"
            break;
            case(i % 5 === 0):
                newStr += "buzz"
            break;
            case(i % 3 === 0):
                newStr += "fizz"
            break;
            default:
                newStr += "."
            break;
        } 
    }
    return newStr
}


console.assert(fizzbuzz(1) === ".")
console.assert(fizzbuzz(2) === "..")
console.assert(fizzbuzz(3) === "..fizz")
console.assert(fizzbuzz(5) === "..fizz.buzz")
console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz")

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes a string of 
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"

 Algoritm
 1. Create a sub function called removePunc to remove all punctuation from input string
 2. Create a function called findLongestWord() that takes a string of words input
 3. Create an empty string output variable called longestWord to store the value of the longestWord
 4. Create a variable called longestLength to store the length of the first element from splitting the string of words with the assumption that the first element has the longest length
 4. Loop through each word in the string of words starting from the second word in the string of words and compare the longestLength to the current word in the loop;
 if a new word emerges as the longest length, make that word the new longest word by assigning it to the longestWord variable
 5. Return the longest word 
 */

function removePunc(strOfWords){
	var puncDictionary = [",", ".", "'"]
	var strToArray = strOfWords.split("")
	for (var i = 0; i < strToArray.length; i++) {
		for (var j = 0; j < puncDictionary.length; j++) {
			if(strToArray[i] === puncDictionary[j]){
				strToArray[i] = ""
			}
		}
	}
	return strToArray.join("")
}


function findLongestWord(strOfWords){ 
	var noPuncStr = removePunc(strOfWords).split(" "),
		longestWord = "",
		longestLength = noPuncStr[0].length
	for(var i = 1; i < noPuncStr.length; i++){
       	if(noPuncStr[i].length > longestLength){
			longestLength = noPuncStr[i].length
            longestWord = noPuncStr[i]
		} 
	}
	return longestWord
} 


console.assert(findLongestWord("a book full of dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")



/**
 * PART 6
 *
 * write a function that returns the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1

 Algorithm
 1. Research and find the formula for calculating Greatest Common Denominator of two numbers 
 - GCD of two numbers is the largest positive integer that divides two numbers without a remainder
 2. Create a sub function called computeGCD that takes 2 numerical inputs, determines the bigger number/smaller number and calculates 
 the remainder after dividing the bigger number by the smaller number 
 3. Create a function called GCD that takes 2 numerical inputs
 4. Return computeGCD(pass the 2 numerical inputs as parameters) in the GCD function
 */

function computeNum(n1, n2){
	var dividend = 0,
		divisor = 0,
		remainder = 0,
		GCD = 0
    if(n1 > n2){
     	dividend = n1
     	divisor = n2
     	remainder = dividend % divisor	
     	if(remainder === 0){
     		GCD = divisor
    	} 
	    	while(remainder > 0){
	    		dividend = n2
	    		divisor = remainder
	    		remainder = dividend % divisor
	    		remainder === 0
	    		GCD = divisor
	    	}	

    } else {
    	dividend = n2
     	divisor = n1
     	remainder = dividend % divisor
     	if(remainder === 0){
     		GCD = divisor
    	} 
	    	while(remainder > 0){
	    		dividend = n1
	    		divisor = remainder
	    		remainder = dividend % divisor
	    		remainder === 0
	    		GCD = divisor
	    	}	
    } 
    return GCD
}

function GCD(num1, num2){
	return computeNum(num1, num2)
}


console.assert(GCD(5,1) === 1);
console.assert(GCD(15,3) === 3);
console.assert(GCD(15,5) === 5);
console.assert(GCD(50,20) === 10);




