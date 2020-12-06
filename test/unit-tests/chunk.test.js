import chai from 'chai';
var expect = chai.expect;

import chunk from '../../src/chunk.js';

describe('Testing function chunk', () => {
    it.skip('Should return [[a, b], [c, d]] when passing [a, b, c, d] and 2', () => {
        const result = chunk(['a', 'b', 'c', 'd'], 2);
        expect(result).to.equal([['a', 'b'], ['c', 'd']]);
    });

    it.skip('Should return [[a, b, c], [d]] when passing [a, b, c, d] and 3', () => {
        const result = chunk(['a', 'b', 'c', 'd'], 3);
        expect(result).to.equal([['a', 'b', 'c'], ['d']]);
    });
});