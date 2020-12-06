import chai from 'chai';
var expect = chai.expect;

import every from '../../src/every.js';

describe('Testing function every', () => {
    it('Should return true if predicate returns truthy for all elements of array', () => {
        const result = every([true, 1], Boolean);
        expect(result).to.equal(true);
    });

    it('Should return false if predicate does not return truthy for all elements of array', () => {
        const result = every([true, 1, null, 'yes'], Boolean);
        expect(result).to.equal(false);
    });
});