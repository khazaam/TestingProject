import chai from 'chai';
var expect = chai.expect;

import isDate from '../../src/isDate.js';

describe('Testing function isDate', () => {
    it('Should return true for Date', () => {
        const result = isDate(new Date);
        expect(result).to.equal(true);
    });

    it('Should return false for date string Mon April 23 2012', () => {
        const result = isDate('Mon April 23 2012');
        expect(result).to.equal(false);
    });
});