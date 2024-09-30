const alphabetToNumber = new Map();
const numberToAlphabet = new Map();

// Populate the maps
for (let i = 0; i < 26; i++) {
    const letter = String.fromCharCode(65 + i); // A-Z (uppercase)
    const number = i + 1; // 1-26
    alphabetToNumber.set(letter, number);
    numberToAlphabet.set(number, letter);
}
function rot13(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let value = alphabetToNumber.get(str[i]);
        if (value != undefined) {
            value += 13;
            if (value > 26) value %= 26;
            result += numberToAlphabet.get(value);
        } else {
            result += str[i];
        }
    }
    return result;
}
  
console.log(rot13("SERR PBQR PNZC"));