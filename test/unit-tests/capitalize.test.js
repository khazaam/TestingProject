import chai from 'chai';
var expect = chai.expect;

import capitalize from '../../src/capitalize.js';

describe('Testing function capitalize', () => {
    it('Converts first character of string to upper case and remaining to lower case', () => {
        const result = capitalize('FRED');
        expect(result).to.equal('Fred');
    });
});