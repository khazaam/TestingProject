import chai from 'chai';
var expect = chai.expect;

import countBy from '../../src/countBy.js';

describe('Testing function countBy', () => {
    const users = [
       { 'user': 'barney', 'active': true },
       { 'user': 'betty', 'active': true },
       { 'user': 'fred', 'active': false }
    ]
    it.skip('Should return object composed of keys generated from the results', () => {
        const result = countBy(users, value => value.active);
        expect(result).to.equal({ 'true': 2, 'false': 1 });
    });
});