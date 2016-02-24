
var math = require('../math') //file location

describe("A simple math program", function() {
  it("can add two numbers", function() {
    expect(math.add(3,5)).toBe(8);
  });
  it("can subtract two numbers", function() {
    expect(math.subtract(10,5)).toBe(5);
  });
  it("can add two numbers", function() {
    expect(math.multiply(3,5)).toBe(15);
  });  
     it("can add two numbers", function() {
    expect(math.divide(10,5)).toBe(2);
  });          
});

