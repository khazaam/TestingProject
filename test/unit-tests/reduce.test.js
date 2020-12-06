import chai from 'chai';
var expect = chai.expect;

import reduce from '../../src/reduce.js';

describe('Testing function reduce', () => {
    it('Should return 3 when reduce([1, 2], (sum, n) => sum + n, 0) is passed', () => {
        const result = reduce([1, 2], (sum, n) => sum + n, 0);
        expect(result).to.have.equal(3);
    });
});