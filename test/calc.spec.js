var calc = require('../src/calc.js');

describe('The add method of the string calculator', function () {
	it('should return 0 if string is empty', function () {
		expect(calc.add()).toBe(0);
	});

	it('should return 0 if string is ', function () {
		expect(calc.add("")).toBe(0);
	});

	it('should return 1 if string is 1', function () {
		expect(calc.add(1)).toBe(1);
	});



});