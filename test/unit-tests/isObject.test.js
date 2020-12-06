import chai from 'chai';
var expect = chai.expect;

import isObject from '../../src/isObject.js';

describe('Testing function isObject', () => {
    it('Should return true for object', () => {
        let result = isObject({});
        expect(result).to.be.equal(true);

        result = isObject(["TestiOlento"]);
        expect(result).to.be.equal(true);

        result = isObject(Function);
        expect(result).to.be.equal(true);

    });

    it('Should return false if not object is passed', () => {
        const result = isObject(null);
        expect(result).to.be.equal(false);
    });
});