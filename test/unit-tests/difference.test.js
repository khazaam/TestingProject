import chai from 'chai';
var expect = chai.expect;

import difference from '../../src/difference.js';

describe('Testing function difference', () => {
    it('Should return [1] when passing [2, 1], [2, 3]', () => {
        const result = difference([2, 1], [2, 3]);
        expect(result).to.eql([1]);
    });
});