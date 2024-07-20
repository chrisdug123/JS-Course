// 1 hour = 60 minutes
function hourToMinutes(hours) {
  let results = hours * 60;
  console.log(results);
  return results;
}


let a = hourToMinutes(10);

let b = hourToMinutes(20);


let dayToHours = function(days) {
  return days * 24;
}



// variable declaration
let balance = 100;
let stock = 50;
let price = 5;
let quantity = 8;

// 1. check if we have stock
// 2. reduce stock, increase balance


// if (quantity <= stock) {
//   stock -= quantity;
//   balance += price * quantity;
//   console.log("Purchase completed")
// }
// else {
//   console.log("Sale did not go through")
// }


function sellItem(quantity) {
  if (quantity <= stock) {
    stock -= quantity;
    balance += price * quantity;
    console.log("Purchase completed", balance, stock)
  }
  else {
    console.log("Sale did not go through", balance, stock)
  }
}

sellItem(10);