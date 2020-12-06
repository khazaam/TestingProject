import chai from 'chai';
var expect = chai.expect;

import isArrayLikeObject from '../../src/isArrayLikeObject.js';

describe('Testing function isArrayLikeObject', () => {
    it('Should return true for [1, 2, 3]', () => {
        const result = isArrayLikeObject([1, 2, 3]);
        expect(result).to.equal(true);
    });

    it('Should return false for string abc', () => {
        const result = isArrayLikeObject('abc');
        expect(result).to.equal(false);
    });
});