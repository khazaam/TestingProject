import chai from 'chai';
var expect = chai.expect;

import camelCase from '../../src/camelCase.js';

describe('Testing function camelCase', () => {
    it.skip('Converts string Foo Bar to fooBar', () => {
        const result = camelCase('Foo Bar');
        expect(result).to.equal('fooBar');
    });

    it.skip('Converts string --foo-bar-- to fooBar', () => {
        const result = camelCase('--foo-bar--');
        expect(result).to.equal('fooBar');
    });

    it.skip('Converts string __FOO_BAR__ to fooBar', () => {
        const result = camelCase('__FOO_BAR__');
        expect(result).to.equal('fooBar');
    });
});