import chai from 'chai';
var expect = chai.expect;

import isTypedArray from '../../src/isTypedArray.js';

describe('Testing function isTypedArray', () => {
    it('Should return true for Uint8Array', () => {
        const result = isTypedArray(new Uint8Array);
        expect(result).to.equal(true);
    });
});