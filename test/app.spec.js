import assert from 'assert'
import chai from 'chai';
var expect = chai.expect;

//substraction this is our own code, we saw this in couple tutorials to have for integration tests.
import subb from '../src/subb.js';

//sub

describe('this is the subb function', () => {
    it('lets sub two numbers together', () => {
        const result = subb(5,2);
        //now you can add all kinds of things what you want to do
        //assert.strictEqual(result, 4);//if equal
        expect(result).to.equal;
        
        //assert.ifError("There were an error");
    });
    it('One number hadling', () => {
        const result = subb(2);
        expect(result).to.be.equal(2);

    });
    it('Handling zero'), () => {
        const result = subb();
        expect(result).to.be.equal(0);
    }
    it('Returns 0 if either argument is not a number, if it is string'), () => {
     const result = subb(2, 'testing');
     expect(result).to.be.equal(0);
    }
});