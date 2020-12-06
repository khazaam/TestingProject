import chai from 'chai';
var expect = chai.expect;

import map from '../../src/map.js';

describe('Testing function map', () => {
    it('Should return values [16, 64] for map([4, 8], square)', () => {
        function square(n) {
            return n * n;
        };

        const result = map([4, 8], square);
        expect(result).to.eql([16, 64]);
    });
});