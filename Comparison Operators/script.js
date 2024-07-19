// let item = 'window';

// if (item != 'engine') {
//   console.log('not engine!');
// }


// let score = 9;

// if (score >= 60) {
//   console.log('pass');
// }
// else if (score < 10) {
//   console.log('meet the teacher');
// }
// else {
//   console.log('not pass');
// }


// let isEngine = item == 'engine';
// console.log(isEngine)


let balance = 100;

let itemPrice = 10;

// Check Balance
// If they buys the item, update balance

// If they don't have enough money, show message

if (balance >= itemPrice){
  balance = balance - itemPrice;
  console.log('item purchased');
}
else {
  console.log('balance too low')
}