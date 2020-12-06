import chai from 'chai';
var expect = chai.expect;

import defaultTo from '../../src/defaultTo.js';

describe('Testing function defaultTo', () => {
    it('Should return 1 when passing 1, 10', () => {
        const result = defaultTo(1, 10);
        expect(result).to.equal(1);
    });

    it('Should return 10 when passing undefined, 10', () => {
        const result = defaultTo(undefined, 10);
        expect(result).to.equal(10);
    });
});