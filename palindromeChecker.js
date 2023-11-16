// Function to check if a given string is a palindrome
function isPalindrome(str) {
	// Remove non-alphanumeric characters and convert to lowercase
	const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

	// Compare the original string with its reverse
	return cleanedStr === cleanedStr.split("").reverse().join("");
}

// Test cases
console.log(isPalindrome("eye")); // true
console.log(isPalindrome("_eye")); // true
console.log(isPalindrome("race car")); // true
console.log(isPalindrome("not a palindrome")); // false
console.log(isPalindrome("A man, a plan, a canal. Panama")); // true
console.log(isPalindrome("never odd or even")); // true
console.log(isPalindrome("nope")); // false
console.log(isPalindrome("almostomla")); // false
console.log(isPalindrome("My age is 0, 0 si ega ym.")); // true
console.log(isPalindrome("1 eye for of 1 eye.")); // false
console.log(isPalindrome("0_0 (: /- :) 0-0")); // true
console.log(isPalindrome("five|_/|four")); // false
