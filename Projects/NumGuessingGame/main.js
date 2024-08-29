const minNum = 1;
const maxNum = 10;
const answer = Math.floor(Math.random() * (maxNum - minNum) + 1);

let guess;
let attempts = 0;
let result = true;

while (result) {
  guess = window.prompt(`enter number in between ${minNum} - ${maxNum}`);
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert("Invalid Number");
  } else if (guess < minNum || guess > maxNum) {
    window.alert("In between (1-100): ");
  } else {
    attempts++;
    if (guess < answer) {
      window.alert("Low! try again..");
    } else if (guess > answer) {
      window.alert("High! try again..");
    } else {
      window.alert(`The answer was ${answer} and it takes ${attempts} attemps`);
      result = false;
    }
  }
}
