import chai from 'chai';
var expect = chai.expect;

import isBuffer from '../../src/isBuffer.js';

describe('Testing function isBuffer', () => {
    it.skip('Should return true for Buffer(2)', () => {
        const string = "String";
        const result = isBuffer(new Buffer(2));
        expect(isBuffer(result)).to.equal(true);
    });

    it('Should return false for Uint8Array(2)', () => {
        const result = isBuffer(new Uint8Array(2));
        expect(result).to.equal(false);
    });
});