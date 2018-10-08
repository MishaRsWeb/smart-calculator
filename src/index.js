class SmartCalculator {
constructor(initialValue)  {
return this.addOperation({
operator: '+',
number,
});
}

  add(number) {
return this.addOperation({
operator: '+',
number,
});
}
  
  subtract(number) {
return this.addOperation({
operator: '-',
number,
});
}

  multiply(number) {
return this.addOperation({
operator: '*',
number,
});
}

  devide(number) {
return this.addOperation({
operator: '/',
number,
});
}



  pow(number)  {
return this.addOperation({
operator: '*',
number,
});
}
addOperation(operation) {
this.operations.push(operation);
return this;
}
calculate(operations) {
const ops = ['^', '*', '/', '+', '-'];
let results = operations.map(o => o.number);
ops.map(o => {
operations.map((operation, index) => {
if (operation.operator !== o) {
return;
}
switch (operation.operator) {
case '^':
results[index - 1] =
Math.pow(+results[index - 1], +operation.number);
results[index] = 0;
break;
case '*':
results[index - 1] = +results[index - 1] * +operation.number;
results[index] = 0;
break;
case '/':
results[index - 1] = +results[index - 1] / +operation.number;
results[index] = 0;
break;
case '-':
results[index] = - +operation.number;
break;
default:
break;
}
});
});
return results.reduce((a,b) => a + b);
}

valueOf() {
return this.calculate(this.operations);
}
}


module.exports = SmartCalculator;
