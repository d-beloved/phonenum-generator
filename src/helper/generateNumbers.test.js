import { expect } from 'chai';
import generateNumbers from './generateNumbers';

const limit = 20;
const randomNumbers = generateNumbers(limit);

describe('Generate random numbers function', () => {
  it('should return 20 numbers', () => {
    expect(randomNumbers).to.be.a('array');
    expect(randomNumbers).to.have.lengthOf(20);
  })
})
