describe("A simple math program", function() {
  it("can add two numbers", function() {
    expect(add(3,5)).toBe(8);
  });

function add(num1, num2) {
    return num1 + num2;              
}

});
describe("A simple math program", function() {
  it("can subtract two numbers", function() {
    expect(subtract(10,5)).toBe(5);
  });

function subtract(num1, num2) {
    return num1 - num2;              
}

});
describe("A simple math program", function() {
  it("can multiply two numbers", function() {
    expect(multiply(3,5)).toBe(15);
  });

function multiply(num1, num2) {
    return num1 * num2;              
}

});
describe("A simple math program", function() {
  it("can divide two numbers", function() {
    expect(divide(10,5)).toBe(2);
  });

function divide(num1, num2) {
    return num1 / num2;            
}

});
