import { expect } from 'chai'
import getPrimeFactors from '../getPrimeFactors'

describe('prime factor', ()=>{
  it('should be [] for 1', ()=>{
    expect(getPrimeFactors(1)).to.be.eql([])
  })
  it('should be [2] for 2', ()=>{
    expect(getPrimeFactors(2)).to.be.eql([2])
  })
})
