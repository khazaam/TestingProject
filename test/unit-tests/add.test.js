import chai from 'chai';
var expect = chai.expect;

import add from '../../src/add.js';

describe('Testing function add', () => {
    it('Returns 4 as sum of 2 and 2', () => {
        const result = add(2,2);
        expect(result).to.equal(4);
    });

    it('Returns 2 if just 2 is given', () => {
        const result = add(2);
        expect(result).to.be.equal(2);

    });

    it('Return zero if nothing is passed as parameter', () => {
        const result = add();
        expect(result).to.be.equal(0);
    });
});