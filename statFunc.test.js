const statFunc = require("./statFunc");

describe('Statistical Functions (statFunc)', function () {
  test('mean', function () {
    let numbers = [1,2,3,4,2,2,3,5,5];

    expect(statFunc.mean(numbers)).toEqual(3);
  });

 
  test('mode', function () {
    let numbers = [1,2,3,4,2,2,3,5,5];
    expect(statFunc.mode(numbers)).toEqual(2);
  });

  test('median', function () {
    let numbers = [1,2,3,4,2,2,3,5,5];
    expect(statFunc.median(numbers)).toEqual(3);
  });

});
