import chai from 'chai';
var expect = chai.expect;

import memoize from '../../src/memoize.js';

describe('Testing function memoize', () => {
    const object = {"a": 1, "b": 2};
    it('Should return values [1, 2] for object  { a: 1, b: 2 }', () => {
        const memo = memoize(Object.values);
        const result = memo(object);
        expect(result).to.eql([1, 2]);
    });

    it('Should return keys [a, b] for object  { a: 1, b: 2 }', () => {
        const memo = memoize(Object.keys);
        const result = memo(object);
        expect(result).to.eql(["a", "b"]);
    });
});