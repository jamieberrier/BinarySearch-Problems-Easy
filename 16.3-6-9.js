// Given an integer n, return a list with each number from 1 to n, except if it's a multiple of 3 or has a 3, 6, or 9 in the number, it should be the string "clap".

// Note: return the number as a string.

class Solution {
  solve(n) {
    if(n === 0) return []
    
    let list = ['1']
    
    for(let i = 2; i <= n; i++) {
      const iString = i.toString()

      if(i%3 === 0 || iString.includes('3') || iString.includes('6') || iString.includes('9')) {
          list.push('clap')
      } else {
          list.push(iString)
      }
    }
    return list
  }
}