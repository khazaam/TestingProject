//This is a test file, see the other colour

// You can other test files to src and trought there you could 
//add more tests. But you will nee to modify either this file 
//or include everything into a singular file

//This contain unit testing.
const assert = require('assert');
const { expect } = require('chai');
//add paths here for tests
const { add } = require('../src/app'); //Unit testing, you could add other test same way
const { sub } = require('../src/app')

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