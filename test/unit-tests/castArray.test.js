import chai from 'chai';
var expect = chai.expect;

import castArray from '../../src/castArray.js';

describe('Testing function castArray', () => {
    it('Should cast value as an array when its not one', () => {
        const result = castArray(1);
        expect(result).to.eql([1]);
    });
});