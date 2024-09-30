function palindrome(str) {
    let newStr = removeNonCharacter(str).toLowerCase();
    let len = newStr.length;
    for (let i = 0; i < len/2; i++) {
      if (newStr[i] != newStr[len - i - 1]) return false;   
    }
    return true;
}

function removeNonCharacter(str) {
  return str.replace(/[\W^_]/g, '')
}

console.log(palindrome("eye"));