// Telephone Number Validator - Victor Freire(devbuda)

function telephoneCheck(str) {
  
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
  
  return regex.test(str);
}

console.log(telephoneCheck("555-555-5555")); // true
console.log(telephoneCheck("(555)555-5555")); // true
console.log(telephoneCheck("(555) 555-5555")); // true
console.log(telephoneCheck("555 555 5555")); // true
console.log(telephoneCheck("5555555555")); // true
console.log(telephoneCheck("1 555 555 5555")); // true
