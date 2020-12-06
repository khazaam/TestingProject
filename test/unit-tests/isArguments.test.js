import chai from 'chai';
var expect = chai.expect;

import isArguments from '../../src/isArguments.js';

describe('Testing function isArguments', () => {
    it('Should return true for function() { return arguments }()', () => {
        const result = isArguments(function() { return arguments }());
        expect(result).to.equal(true);
    });

    it('Should return false for [1, 2, 3]', () => {
        const result = isArguments([1, 2, 3]);
        expect(result).to.equal(false);
    });
});