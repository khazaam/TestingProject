import chai from 'chai';
var expect = chai.expect;

import endsWith from '../../src/endsWith.js';

describe('Testing function endsWith', () => {
    it('Should return true if last letter is given', () => {
        const result = endsWith('abc', 'c');
        expect(result).to.equal(true);
    });

    it('Should return false if last letter was not given', () => {
        const result = endsWith('abc', 'b');
        expect(result).to.equal(false);
    });
});