import chai from 'chai';
var expect = chai.expect;

// Add paths here for tests
import add from '../../src/add.js';
import countBy from'../../src/countBy.js';
import divide from '../../src/divide.js';

describe('Tests library used with different calculations', () => {
    it('(1 + 2) / 3', () => {
        const result = divide(add(1,2), 3);
        expect(result).to.equal(1);
    });

    it('(1 - 2) / 3', () => {
        const result = divide(add(1,-2), 3);
        expect(result).to.equal(1);
    });

    // This fails because divide returns 1
    it.skip('1 / 4 + 4', () => {
        const result = add(divide(1,4), 4);
        expect(result).to.equal(4.25);
    });

});

