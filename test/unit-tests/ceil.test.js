import chai from 'chai';
var expect = chai.expect;

import ceil from '../../src/ceil.js';

describe('Testing function ceil', () => {
    it('Should compute 4.006 to 5', () => {
        const result = ceil(4.006);
        expect(result).to.equal(5);
    });

    it('Should compute 6.004 to 6.01 when precision is 2', () => {
        const result = ceil(6.004, 2);
        expect(result).to.equal(6.01);
    });

    it('Should compute 6040 to 6100 when precision is -2', () => {
        const result = ceil(6040, -2);
        expect(result).to.equal(6100);
    });
});