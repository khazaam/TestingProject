import chai from 'chai';
var expect = chai.expect;

import keys from '../../src/keys.js';

describe('Testing function keys', () => {
    const object = {"a": 1, "b": 2};
    it('Should return keys [a, b] for object  { a: 1, b: 2 }', () => {
        const result = keys(object);
        expect(result).to.eql(["a", "b"]);
    });
});