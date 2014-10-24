var calc = require('../src/calc.js');

describe('The add method of the string calculator', function () {
	it('should return 0 if string is empty', function () {
		expect(calc.add()).toBe(0);
	});

});