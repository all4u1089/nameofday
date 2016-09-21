var expect = require('chai').expect;
var nameOfDay = require('../src/index.js');

describe('Name of day test case', function () {
	describe('days in month', function () {
		it('returns 30 when year is 2016 and month is 9', function (done) {
			nameOfDay.daysInMonth(2016,9, function (err, s) {
				expect(err).to.equal(null);
				expect(s).to.equal(30);
				done();
			});
		});
		
		it('returns error when year is not number', function (done) {
			nameOfDay.daysInMonth('x',9, function (err,s) {				
				expect(err).to.not.equal(null);
				expect(err.message).to.equal('year must be a number');
				done();
			});
		});
		
		it('returns error when year is not positive', function (done) {
			nameOfDay.daysInMonth(-1,9, function (err,s) {				
				expect(err).to.not.equal(null);
				expect(err.message).to.equal('year must be positive');
				done();
			});
		});
		
		it('returns error when month is not number', function (done) {
			nameOfDay.daysInMonth(2016,'y', function (err,s) {				
				expect(err).to.not.equal(null);
				expect(err.message).to.equal('month must be a number');
				done();
			});
		});
		
		it('returns error when month is not positive', function (done) {
			nameOfDay.daysInMonth(2016,-8, function (err,s) {				
				expect(err).to.not.equal(null);
				expect(err.message).to.equal('month must be positive');
				done();
			});
		});
		
		it('returns error when month is greater than 12', function (done) {
			nameOfDay.daysInMonth(2016,13, function (err,s) {				
				expect(err).to.not.equal(null);
				expect(err.message).to.equal('month must be lower than or equal to 12');
				done();
			});
		});
	});
	
	describe('Name of day', function () {
		it('returns error when day is not number', function (done) {
			nameOfDay.nameOfDay(2016,9,'z', function (err,s) {				
				expect(err).to.not.equal(null);
				expect(err.message).to.equal('day must be a number');
				done();
			});
		});
		it('returns error when day is not positive', function (done) {
			nameOfDay.nameOfDay(2016,9,-4, function (err,s) {				
				expect(err).to.not.equal(null);
				expect(err.message).to.equal('day must be positive');
				done();
			});
		});
		it('returns error when day is 31, month is 9 and year is 2016', function (done) {
			nameOfDay.nameOfDay(2016,9,31, function (err,s) {				
				expect(err).to.not.equal(null);
				expect(err.message).to.equal('day must be lower than or equal to days of month');
				done();
			});
		});
		
		it('returns Tuesday when year is 2016, month is 9, day is 20', function (done) {
			nameOfDay.daysInMonth(2016,9,20 function (err, name) {
				expect(err).to.equal(null);
				expect(name).to.equal('Tuesday');
				done();
			});
		});
		
	});
});