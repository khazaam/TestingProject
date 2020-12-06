import chai from 'chai';
var expect = chai.expect;

import slice from '../../src/slice.js';

describe('Testing function slice', () => {
    it('Should return [3, 4] when array: [1, 2, 3, 4] and start: 2 is passed', () => {
        const result = slice([1, 2, 3, 4], 2);
        expect(result).to.eql([3, 4]);
    });
});