// Palindrome Checker - Victor Freire(devbuda)

function palindrome(str) {

  str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  return str === str.split('').reverse().join('');
}
console.log(palindrome("eye")); // true
console.log(palindrome("RaceCar")); // true
console.log(palindrome("2A3*3a2")); // true
console.log(palindrome("hello")); // false
