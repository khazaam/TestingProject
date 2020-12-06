import chai from 'chai';
var expect = chai.expect;

import upperFirst from '../../src/upperFirst.js';

describe('Testing function upperFirst', () => {
    it('Should capitalize first letter when passing string', () => {
        const result = upperFirst("apple");
        expect(result).to.have.equal("Apple");
    });

    it("Should return string as same if first letter already capitalized", () => {
        const result = upperFirst("APPLE");
        expect(result).to.have.equal("APPLE");
    });
});