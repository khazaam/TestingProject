import chai from 'chai';
var expect = chai.expect;

import get from '../../src/get.js';

describe('Testing function get', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] };
    it('Should return 3 for object { a: [{ b: { c: 3 } }] } and path a[0].b.c', () => {
        const result = get(object, 'a[0].b.c');
        expect(result).to.equal(3);
    });

    it('Should return defaultValue when resolved value was undefined', () => {
        const result = get(object, 'a.b.c', 'default');
        expect(result).to.equal('default');
    });
});