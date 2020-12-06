import chai from 'chai';
var expect = chai.expect;

import divide from '../../src/divide.js';

describe('Testing function divide', () => {
    it.skip('Should return 1.5 when passing 6 and 4', () => {
        const result = divide(6, 4);
        expect(result).to.equal(1.5);
    });
});