import chai from 'chai';
var expect = chai.expect;

import isEmpty from '../../src/isEmpty.js';

describe('Testing function isEmpty', () => {
    it('Should return true for null', () => {
        const result = isEmpty(null);
        expect(result).to.equal(true);
    });

    it('Should return false for [1, 2, 3]', () => {
        const result = isEmpty([1, 2, 3]);
        expect(result).to.equal(false);
    });
});