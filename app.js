let maximum = parseInt(prompt("enter the number"));
while (!maximum) {
    maximum = parseInt(prompt('enter valid input'));
}
const targetnum = Math.floor(Math.random() * maximum) + 1;
console.log(targetnum)
let guess = parseInt(prompt('enter the guessing number'));
let count = 1;
while (parseInt(guess) !== targetnum) {
    if (guess === 'q') break;
    count++;
    if (guess < targetnum) {
        guess = (prompt('guess higher'));
    }
    else {
        guess = (prompt('guess higher'));
    }
}
if (guess === 'q') {
    console.log('you quit')
} else {
    console.log(`you got it!  it took  ${count} guesses`);
}