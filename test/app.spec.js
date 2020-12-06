import assert from 'assert'
import chai from 'chai';
var expect = chai.expect;
import add from '../src/add.js';


describe('this is the add function', () => {
    it('lets add two numbers together', () => {
        const result = add(2,2);
        //now you can add all kinds of things what you want to do
        //assert.strictEqual(result, 4);//if equal
        expect(result).to.equal;
        
        //assert.ifError("There were an error");
    });
    it('One number hadling', () => {
        const result = add(2);
        expect(result).to.be.equal(2);

    });
    it('Handling zero'), () => {
        const result = add();
        expect(result).to.be.equal(0);
    }
    it('Returns 0 if either argument is not a number, if it is string'), () => {
     const result = add(2, 'testing');
     expect(result).to.be.eq(0);
    }
});

//sub

describe('this is the sub function', () => {
    it('lets sub two numbers together', () => {
        const result = sub(5,2);
        //now you can add all kinds of things what you want to do
        //assert.strictEqual(result, 4);//if equal
        expect(result).to.equal;
        
        //assert.ifError("There were an error");
    });
    it('One number hadling', () => {
        const result = sub(2);
        expect(result).to.be.equal(2);

    });
    it('Handling zero'), () => {
        const result = sub();
        expect(result).to.be.equal(0);
    }
    it('Returns 0 if either argument is not a number, if it is string'), () => {
     const result = sub(2, 'testing');
     expect(result).to.be.equal(0);
    }
});