import { expect } from 'chai'
import getPrimeFactors from '../getPrimeFactors'

describe('prime factor', ()=>{
  it('should be 1 for 1', ()=>{
    expect(getPrimeFactors(1)).to.be.eql([])
  })
})
