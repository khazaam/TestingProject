import chai from 'chai';
var expect = chai.expect;

import toInteger from '../../src/toInteger.js';

describe('Testing function toInteger', () => {
    it('Should convert 1.1 to 1', () => {
        const result = toInteger(1.1);
        expect(result).to.have.equal(1);
    });

    
    it.skip('Should convert 1.9 to 2', () => {
        const result = toInteger(1.9);
        expect(result).to.have.equal(2);
    });
});