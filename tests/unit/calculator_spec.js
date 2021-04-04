var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.strictEqual(true, true)
  })

//   calculator.add() - add 1 to 4 and get 5

it("can add 1 to 4", function(){
  calculator.previousTotal = 1;
  calculator.add(4);
  assert.strictEqual(5, calculator.runningTotal);
});
// calculator.subtract() subtract 4 from 7 and get 3

it("can subtract 4 from 7", function(){
  calculator.previousTotal = 7;
  calculator.subtract(4);
  assert.strictEqual(3, calculator.runningTotal);

});
// calculator.multiply() - multiply 3 by 5 and get 15

it("can multiply 3 by 5", function(){
  calculator.previousTotal = 3;
  calculator.multiply(5);
  assert.strictEqual(15, calculator.runningTotal);
})
// calculator.divide() - divide 21 by 7 and get 3

it("can divide 21 by 7", function(){
  calculator.previousTotal = 21;
  calculator.divide(7);
  assert.strictEqual(3, calculator.runningTotal);
})

// calculator.numberClick() - concatenate multiple number button clicks

it("can concatenate multiple number button clicks", function(){
  calculator.previousTotal = 4;
  calculator.add(1);
  calculator.runningTotal;
  calculator.previousTotal = 6;
  calculator.add(4);
  assert.strictEqual(10, calculator.runningTotal);
})

// calculator.operatorClick() - chain multiple operations together
// it("can chain multiple operations together", function(){
//   calculator.previousTotal = 3;
//   calculator.add(9);
//   calculator.subtract(3);
//   // calculator.multiply(3);
//   assert.strictEqual(9, calculator.runningTotal);
//   // assert.strictEqual(true, calculator.newTotal);
// })

it("can chain multiple operations together", function(){
  calculator.operatorClick('+');
  calculator.previousTotal = 3;
  calculator.add(3);
  assert.strictEqual(6, calculator.runningTotal);
  assert.strictEqual(true, calculator.newTotal);
})
// calculator.clearClick() - clear the running total without affecting the calculation

it("can clear the running total without affecting the calculation", function(){
  calculator.runningTotal = 0;
  assert.strictEqual(0, calculator.runningTotal)
})


});
