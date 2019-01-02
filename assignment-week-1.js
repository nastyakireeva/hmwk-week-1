
var randomNumber = Math.floor(Math.random() * 10) + 1;
var turns = 10;
var message = 'Guess the secret number from 1 to 10!';

while (turns > 0) {
  var guess = prompt(message +
      ' You have ' + turns + ' guesses left.');
  if (!guess) break;
  guess = Number(guess);
  if (guess == randomNumber) {
    alert('Congratulations! You are correct!');
    turns = 0;
  } else {
    message = ('Sorry! Your guess was');
    if (guess < randomNumber) message += ' too small!';
    if (guess > randomNumber) message += ' too high!';
    turns = turns - 1;
  }
};

alert('The secret number was ' + randomNumber + '.');

