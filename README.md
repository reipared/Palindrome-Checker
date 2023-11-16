# Palindrome Checker in JavaScript

## Introduction

This JavaScript code is a simple palindrome checker. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization. The purpose of this code is to determine whether a given string is a palindrome or not.

## How it Works

The `isPalindrome` function in the code performs the following steps:

1. **Cleaning the Input:**

   - Non-alphanumeric characters are removed from the input string using a regular expression.
   - The string is then converted to lowercase to ensure case insensitivity.

2. **Checking for Palindrome:**
   - The cleaned string is compared with its reverse to determine if it is a palindrome.
   - If the cleaned string is the same as its reverse, the function returns `true`, indicating that the input is a palindrome. Otherwise, it returns `false`.

## Test Cases

The code includes several test cases to demonstrate its functionality. These test cases cover various scenarios, including strings with spaces, punctuation, and mixed cases.

## How to Use

1. Clone this repository to your local machine.
2. Open the JavaScript file (`palindromeChecker.js`) in your preferred code editor.
3. Modify the test cases or add your own if needed.
4. Run the script to see the results of the palindrome checks.

Feel free to use and modify this code according to your requirements!
