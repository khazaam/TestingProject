import chai from 'chai';
var expect = chai.expect;

import isArrayLike from '../../src/isArrayLike.js';

describe('Testing function isArrayLike', () => {
    it('Should return true for [1, 2, 3]', () => {
        const result = isArrayLike([1, 2, 3]);
        expect(result).to.equal(true);
    });

    it('Should return true for string abc', () => {
        const result = isArrayLike('abc');
        expect(result).to.equal(true);
    });

    it('Should return false for string Function', () => {
        const result = isArrayLike(Function);
        expect(result).to.equal(false);
    });
});