import { expect } from 'chai';
import RandomNumberGenerator from './generateNumbers';

const {
  generateNumbers,
  sortInAscendingOrder,
  sortInDescendingOrder
} = RandomNumberGenerator;

const limit = 20;
const randomNumbers = generateNumbers(limit);

const mockRadomNumbers = [133077848, 277935984, 302447694, 508097911, 519682951, 879016661, 882498503]
const ascendingSort = sortInAscendingOrder(mockRadomNumbers);
const descendingSort = sortInDescendingOrder(mockRadomNumbers);

describe('Generate random numbers function', () => {
  it('should return 20 numbers', () => {
    expect(randomNumbers).to.be.a('array');
    expect(randomNumbers).to.have.lengthOf(20);
  })
})

describe('Sort numbers in ascending order', () => {
  it('should return the numbers sorted in ascending order', () => {
    expect(mockRadomNumbers[1]).to.be.equal(ascendingSort[1]);
    expect(ascendingSort).to.be.a('array')
  })
})

describe('Sort numbers in descending order', () => {
  it('should return the numbers sorted in descending order', () => {
    expect(mockRadomNumbers[5]).to.be.equal(descendingSort[5]);
    expect(descendingSort).to.be.a('array')
  })
})
