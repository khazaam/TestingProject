import chai from 'chai';
var expect = chai.expect;

import isBoolean from '../../src/isBoolean.js';

describe('Testing function isBoolean', () => {
    it('Should return true for false', () => {
        const result = isBoolean(false);
        expect(result).to.equal(true);
    });

    it('Should return false for null', () => {
        const result = isBoolean(null);
        expect(result).to.equal(false);
    });
});