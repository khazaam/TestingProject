import chai from 'chai';
var expect = chai.expect;

import toNumber from '../../src/toNumber.js';

describe('Testing function toNumber', () => {
    it('Should return integer when string containing numbers is passed', () => {
        const result = toNumber("100");
        expect(result).to.have.equal(100);
    });
});