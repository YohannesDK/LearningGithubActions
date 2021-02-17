const expect = require("chai").expect;
const addFunc = require("../server").addFunc;
const multiplyFunc = require("../server").multiplyFunc;

describe("AddTest", () => {
  let result;
  const x = y = 5;
  before((done) => {
    console.log(x, y);
    result = addFunc(x, y)
    done();
  });
  it(`Should return ${x+y}`, () => {
    expect(result).to.equal(x+y);
  });
});

describe("MultiplyTest", () => {
  let result;
  const x = y = 5;
  before((done) => {
    console.log(x, y);
    result = multiplyFunc(x, y)
    done();
  });
  it(`Should return ${x*y}`, () => {
    expect(result).to.equal(x*y);
  });
});