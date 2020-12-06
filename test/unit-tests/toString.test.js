import chai from 'chai';
var expect = chai.expect;

import toString from '../../src/toString.js';

describe('Testing function toString', () => {
    it('Should return string if integer is passed', () => {
        const result = toString(100);
        expect(result).to.have.equal("100");
    });
});