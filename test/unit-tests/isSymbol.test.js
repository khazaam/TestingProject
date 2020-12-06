import chai from 'chai';
var expect = chai.expect;

import isSymbol from '../../src/isSymbol.js';

describe('Testing function isSymbol', () => {
    it('Should return true for Symbol.iterator', () => {
        const result = isSymbol(Symbol.iterator);
        expect(result).to.equal(true);
    });

    it('Should return false for abc', () => {
        const result = isSymbol('abc');
        expect(result).to.equal(false);
    });
});