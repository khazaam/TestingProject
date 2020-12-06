import chai from 'chai';
var expect = chai.expect;

import eq from '../../src/eq.js';

describe('Testing function eq', () => {
    const object = { 'a': 1 };
    const other = { 'a': 1 };
    it('Should return true when values are equivalent', () => {
        const result = eq(object, object);
        expect(result).to.equal(true);
    });

    it('Should return false when values are not equivalent', () => {
        const result = eq(object, other);
        expect(result).to.equal(false);
    });
});