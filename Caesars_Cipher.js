// Caesars Cipher - Victor Freire(devbuda)

function rot13(str) {

  function decodeChar(char) {
    const charCodeA = 'A'.charCodeAt(0);
    const charCodeZ = 'Z'.charCodeAt(0);
    const charCode = char.charCodeAt(0);

    if (charCode >= charCodeA && charCode <= charCodeZ) {
      const decodedCharCode = charCode - 13 < charCodeA ? charCode + 13 : charCode - 13;
      return String.fromCharCode(decodedCharCode);
    } else {
      return char;
    }
  }
  
  const decodedArray = str.split('').map(decodeChar);

  const decodedStr = decodedArray.join('');

  return decodedStr;
}

console.log(rot13("SERR PBQR PNZC"));
