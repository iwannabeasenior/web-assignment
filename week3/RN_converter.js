
let map = new Map([
    [1, "I"],
    [4, "IV"],
    [5, "V"],
    [9, "IX"],
    [10, "X"],
    [40, "XL"],
    [50, "L"],
    [90, "XC"],
    [100, "C"],
    [400, "CD"],
    [500, "D"],
    [900, "CM"],
    [1000, "M"]   
]);

function convertToRoman(num) {
    let i = -1;
    let result = "";
    while (num > 0) {
        i++;
        let moduleOfNum = num % 10;
        let addToResult = "";
        if (1 <= moduleOfNum  && moduleOfNum <= 3) {
            let str = map.get(Math.pow(10, i));
            for (let j = 0; j < moduleOfNum; j++) {
                result = str + result;
            }
        } else if (6 <= moduleOfNum && moduleOfNum <= 8) {
            console.log(moduleOfNum);
            let subFive = moduleOfNum - 5;
            let subFiveStr = "";
            let sub1FiveStr = map.get(Math.pow(10, i));
            for (let j = 0; j < subFive; j++) {
                subFiveStr += sub1FiveStr;
            }
            result = map.get(5 * Math.pow(10, i)) + subFiveStr + result;
        } else if (moduleOfNum == 0) {
        } else {
            result = map.get(moduleOfNum * Math.pow(10, i)) + result;
        }
        num = Math.floor(num/10);
    }  
    return result;  
}
console.log(convertToRoman(36));
