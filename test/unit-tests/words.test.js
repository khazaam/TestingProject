import chai from 'chai';
var expect = chai.expect;

import words from '../../src/words.js';

describe('Testing function words', () => {
    it('Should return certain words when passing a sentence', () => {
        const result = words("This is a sentence.");
        expect(result).to.be.an('array');
        expect(result).to.have.members(['This', 'is', 'a', 'sentence']);
    });

    it("Should return [] when passing empty string", () => {
        const result = words("");
        expect(result).to.be.an('array');
        expect(result).to.have.members([]);
      });
});