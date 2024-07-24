// function sendSignal() {
//   console.log('HELP!');
// }

// let i = 0;

// /*we havent snet 1000 messages, continue*/
// while (i < 1000) {
//   sendSignal()
//   i++;
// }

// let result = 0;

// let j = 1;

// while (j <= 10) {
//   result = result + j;
//   console.log(result)
//   j++;
// }


let fuel = 1000;
let distance = 0;

while (fuel > 0) {
  distance++;
  if (distance >= 100 && distance <200){
    continue
  }
  fuel--;
  if (distance == 500) {
    break;
  }
}

console.log(distance, fuel)