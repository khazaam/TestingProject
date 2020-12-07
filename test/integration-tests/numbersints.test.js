import chai from 'chai';
var expect = chai.expect;

import toNumber from '../../src/toNumber'
import toInteger from '../../src/toInteger'

describe('Lets make numbers from values', () => {
it('Numbers is 7',() => {
    const result = toNumber('6.6')
    expect(result).to.equal(6.6)
})
it('Numbers is 7',() => {
    const result = toInteger('6.6')
    expect(result).to.toInteger(6.6)
})

})