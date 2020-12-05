import assert from 'assert';
import chai from 'chai';
var expect = chai.expect;

//add paths here for tests
import add from '../../src/add.js';
import countBy from'../../src/countBy.js';
import divide from '../../src/divide.js';

describe('Tests library used with different calculations', () => {
    it('(1 + 2) / 3', () => {
        const result = divide(add(1,2), 3);
        expect(result).to.equal(1);
    });
});

