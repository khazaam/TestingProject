import chai from 'chai';
var expect = chai.expect;

import compact from '../../src/compact.js';

describe('Testing function compact', () => {
    it.skip('Should return [1, 2, 3] when passing [0, 1, false, 2, null, 3]', () => {
        const result = compact([0, 1, false, 2, '', 3]);
        expect(result).to.equal([1, 2, 3]);
    });
});