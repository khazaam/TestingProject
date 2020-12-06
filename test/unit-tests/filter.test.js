import chai from 'chai';
var expect = chai.expect;

import filter from '../../src/filter.js';

describe('Testing function filter', () => {
    const users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'fred',   'active': false }
    ];
    it('Should return correct filtered user', () => {
        const result = filter(users, ({ active }) => active);
        expect(result).to.eql([{ 'user': 'barney', 'active': true }]);
    });
});