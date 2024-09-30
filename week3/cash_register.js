
function checkCashRegister(price, cash, cid) {

    let change;
    let totalCash = 0;
    let sub = cash - price;
    
    for (let i = 0; i < cid.length; i++) {
        totalCash += cid[i][1];
    }
    
    if (totalCash < sub) {
        change = {
            status: "INSUFFICIENT_FUNDS", change: []
        }
    } else {
        // totalCast > sub 
        // cid vs map
        
        let subChange = [];

        for (let i = cid.length - 1; i >= 0; i--) {

            let unit = map.get(cid[i][0]);
            let a = Math.floor(cid[i][1] / unit); // have
            let b = Math.floor(sub / unit); // need 

            if (b >= 1 && a >= 1) {
                if (a > b) {
                    sub = (sub - b * unit).toFixed(3);
                    subChange.push([cid[i][0], b * unit]);
                } else {
                    sub = (sub - a * unit).toFixed(3);
                    
                    subChange.push([cid[i][0], a * unit]);
                }
            }

            if (sub == 0) {
                break;
            }
            if (i == 0 && sub > 0) {
                return  change = {
                    status: "INSUFFICIENT_FUNDS", change: []
                };
            }
        }

        let totalCashAfter = 0;

        for (let j = 0; j < subChange.length; j++) {
            totalCashAfter += subChange[j][1];
        }

        if (totalCashAfter == totalCash) {
            change = {
                status:  "CLOSED", change: cid
            }
        } else {
            change = {
                status: "OPEN", change: subChange,
            };
        }
        

    }
    return change;
}

let map = new Map([
    ["PENNY", 0.01],
    ["NICKLE", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100],
])

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));