import chai from 'chai';
var expect = chai.expect;

import drop from '../../src/drop.js';

describe('Testing function drop', () => {
    it('Should return [2, 3] when passing [1, 2, 3]', () => {
        const result = drop([1, 2, 3]);
        expect(result).to.eql([2, 3]);
    });

    it('Should return [1, 2, 3] when passing [1, 2, 3] and 0', () => {
        const result = drop([1, 2, 3], 0);
        expect(result).to.eql([1, 2, 3]);
    });

    it('Should return [3] when passing [1, 2, 3] and 2', () => {
        const result = drop([1, 2, 3], 2);
        expect(result).to.eql([3]);
    });
});