import chai from 'chai';
var expect = chai.expect;

import isObjectLike from '../../src/isObjectLike.js';

describe('Testing function isObjectLike', () => {
    it('Should return true for {}', () => {
        const result = isObjectLike({});
        expect(result).to.equal(true);
    });

    it('Should return true for [1, 2, 3]', () => {
        const result = isObjectLike([1, 2, 3]);
        expect(result).to.equal(true);
    });

    it('Should return false for Function', () => {
        const result = isObjectLike(Function);
        expect(result).to.equal(false);
    });

    it('Should return false for null value', () => {
        const result = isObjectLike(null);
        expect(result).to.equal(false);
    });
});