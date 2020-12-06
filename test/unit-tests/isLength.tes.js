import chai from 'chai';
var expect = chai.expect;

import isLength from '../../src/isLength.js';

describe('Testing function isLength', () => {
    it('Should return true for 3', () => {
        const result = isLength(3);
        expect(result).to.equal(true);
    });

    it('Should return false for 3 as string', () => {
        const result = isLength('3');
        expect(result).to.equal(false);
    });

    it('Should return false for 3.1', () => {
        const result = isLength(3.1);
        expect(result).to.equal(false);
    });
});