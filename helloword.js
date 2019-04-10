const chalk = require('chalk');
console.log('hello word') 
const multiply = (a, b) => a*b;
const factor = multiply(1, 2)
console.log(factor)

console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));

const miles = 18;
const calculateFeet = miles => miles * 5280;
 
console.log(chalk`
  There are {bold 5280 feet} in a mile.
  In {bold ${miles} miles}, there are {green.bold ${calculateFeet(miles)} feet}.
`);