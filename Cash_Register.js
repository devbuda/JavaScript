// Cash Register - Victor Freire

function checkCashRegister(price, cash, cid) {
  const denomArr = [
    { name: "PENNY", value: 0.01 },
    { name: "NICKEL", value: 0.05 },
    { name: "DIME", value: 0.1 },
    { name: "QUARTER", value: 0.25 },
    { name: "ONE", value: 1 },
    { name: "FIVE", value: 5 },
    { name: "TEN", value: 10 },
    { name: "TWENTY", value: 20 },
    { name: "ONE HUNDRED", value: 100 }
  ];

  let changeDue = (cash - price).toFixed(2) * 100;
  let totalInDrawer = 0;

  for (let i = 0; i < cid.length; i++) {
    totalInDrawer += cid[i][1] * 100;
  }

  totalInDrawer = totalInDrawer.toFixed(2);

  if (changeDue > totalInDrawer) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (changeDue == totalInDrawer) {
    return { status: "CLOSED", change: cid };
  } else {
    let changeArr = [];

    for (let i = denomArr.length - 1; i >= 0; i--) {
      const coin = denomArr[i];
      const coinName = coin.name;
      const coinValue = coin.value * 100;
      const availableCoins = cid[i][1] * 100;

      if (coinValue <= changeDue) {
        let coinsToReturn = Math.min(
          availableCoins,
          Math.floor(changeDue / coinValue) * coinValue
        );

        if (coinsToReturn > 0) {
          changeArr.push([coinName, coinsToReturn / 100]);
          changeDue -= coinsToReturn;
        }
      }
    }

    if (changeDue == 0) {
      return { status: "OPEN", change: changeArr };
    } else {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  }
}

// Test
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ])
);
