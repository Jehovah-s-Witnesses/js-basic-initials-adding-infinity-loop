/**
 * @type {string[]}
 */
const names = [];

while (true) {
  const answer = prompt('Enter your name or "stop" to finish.');

  if (answer === 'stop') {
    break;
  }

  names.push(answer);
}

alert(names.join('\n'));
