const expect = require("chai").expect;
const subtractfunc = require("../app").subtractfunc;
const divide = require("../app").divide;


describe("Subtract Test", () => {
  let result;
  const x = y = 5;
  before((done) => {
    result = subtractfunc(x, y);
    done();
  });
  it(`should return ${x-y}`, () => {
    expect(result).to.equal(x-y);
  });
});
describe("Divide Test", () => {
  let result;
  const x = y = 5;
  before((done) => {
    result = divide(x, y);
    done();
  });
  it(`should return ${x/y}`, () => {
    expect(result).to.equal(x/y);
  });
});