var expect = require('chai').expect; //expect library
var quadraticEquationTwo = require('../src/index.js'); //your module, test this
describe('quadratic-equation-two', function() {
	describe('quadratic', function() { //test quadratic method of quadratic module
		it('return no result when a is 0, b is 0 and c has difference value is 0', function(done) {//test case to test a=0, b= 0 and c=1
			quadraticEquationTwo.calQuadratic(0, 0, 1, function(err, result) {
				expect(err).to.not.equal(null);
				expect(err.message).to.equal('function donot have result');
				done();
			});
		});
		it('return parameter is not correct type, it must be is a number value', function(done) {//test case to test a=0, b= 0 and c=1
			quadraticEquationTwo.calQuadratic(0, 0, 'a', function(err, result) {
				expect(err).to.not.equal(null);
				expect(err.message).to.equal('parameter should have number value');
				done();
			});
		});
		it('return 6 when a is 0, b is -2 and c is 12', function(done) {
			quadraticEquationTwo.calQuadratic(0, -2, 12, function(err, result) {
				expect(err).to.equal(null);
				expect(result).to.equal(6);
				done();
			});
		});
		it('return no result when a is 2, b is 3 and c is 9', function(done) {
			quadraticEquationTwo.calQuadratic(2, 3, 9, function(err, result) {
			expect(err).to.not.equal(null);
			done();
			});
		});
		it('return x1 same as x2 is -3 when a is 1, b is 6 and c is 9', function(done) {
			quadraticEquationTwo.calQuadratic(1, 6, 9, function(err, result) {
				expect(err).to.equal(null);
				expect(result).to.equal(-3);
				done();
			});
		});
		it('return x1 is 1 and x2 is -2.5 when a is 2, b is 3 and c is -5', function(done) {
			quadraticEquationTwo.calQuadratic(2, 3, -5, function(err, resultOne, resultTwo) {
				expect(err).to.equal(null);
				expect(resultOne).to.equal(1);
				expect(resultTwo).to.equal(-2.5);
				done();
			});
		});
	});

});