//This is a test file, see the other colour

// You can other test files to src and trought there you could 
//add more tests. But you will nee to modify either this file 
//or include everything into a singular file

const assert = require('assert');
//add paths here for tests
const { add } = require('../src/app'); //Unit testing, you could add other test same way

describe('this is the add function', () => {
    it('lets add two numbers together', () => {
        const result = add(2,2);
        //now you can add all kinds of things what you want to do
        assert.strictEqual(result, 4);//if equal
    })
})