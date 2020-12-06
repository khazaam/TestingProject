import chai from 'chai';
var expect = chai.expect;

import clamp from '../../src/clamp.js';

describe('Testing function clamp', () => {
    it('Should return -5 when passing -10, -5, 5', () => {
        const result = clamp(-10, -5, 5);
        expect(result).to.equal(-5);
    });
});