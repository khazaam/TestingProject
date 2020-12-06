import chai from 'chai';
var expect = chai.expect;

import toFinite from '../../src/toFinite.js';

describe('Testing function toFinite', () => {
    it('Should return MAX_INTEGER=1.7976931348623157e+308 for Infinity', () => {
        const result = toFinite(Infinity);
        expect(result).to.have.equal(1.7976931348623157e+308);
    });
});