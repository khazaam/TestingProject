import chai from 'chai';
var expect = chai.expect;

import at from '../../src/at.js';

describe('Testing function at', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
    it('Returns an array of values corresponding to paths of object', () => {
        const result = at(object, ['a[0].b.c', 'a[1]']);
        expect(result).to.eql([3, 4]);
    });
});