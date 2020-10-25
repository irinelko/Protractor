// rj.js
let homepage = require('../page/homepage');
describe('Test homepage', function () {


  beforeEach(function () {
    homepage.get();

  });

  it('should add numbers', function () {
    homepage.addNumbers('3', '4');
    homepage.verifyResult('7');

  });
});
