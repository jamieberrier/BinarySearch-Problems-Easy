// Given a non-negative integer num, return whether it is a palindrome.

// Bonus: Can you solve it without using strings?

// Constraints
// num < 2 ** 31

class Solution {
  solve(num) {
    const reverseNum = parseInt(Array.from(String(num), Number).reverse().join(""))

    return num === reverseNum
  }
}