let distance = 200;
let fuel = 100;

let distanceCondition = distance <= 200 && distance >= 100;
let isEngineBroken = false;


if (isEngineBroken || distance > 200) {
  console.log('we are not going to make it');
}

else if (distanceCondition && fuel >= 100) {
  console.log('we are going to make it');
}

else if (distance < 100 && fuel >= 25) {
  console.log('you will make it');
}
