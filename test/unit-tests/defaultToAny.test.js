import chai from 'chai';
var expect = chai.expect;

import defaultToAny from '../../src/defaultToAny.js';

describe('Testing function defaultToAny', () => {
    it('Should return 1 when passing 1, 10, 20', () => {
        const result = defaultToAny(1, 10, 20);
        expect(result).to.equal(1);
    });

    it('Should return 10 when passing undefined, 10, 20', () => {
        const result = defaultToAny(undefined, 10, 20);
        expect(result).to.equal(10);
    });
});