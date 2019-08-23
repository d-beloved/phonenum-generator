import { expect } from 'chai';
import RandomNumberGenerator from './generateNumbers';

const {
  generateNumbers,
  sortInAscendingOrder,
  sortInDescendingOrder,
  maximumNumber,
  minimumNumber
} = RandomNumberGenerator;

const limit = 20;
const randomNumbers = generateNumbers(limit);

const mockRadomNumbers = [133077848, 277935984, 302447694, 508097911, 519682951, 879016661, 882498503]
const ascendingSort = sortInAscendingOrder(mockRadomNumbers);
const descendingSort = sortInDescendingOrder(mockRadomNumbers);
const min = minimumNumber(mockRadomNumbers);
const max = maximumNumber(mockRadomNumbers);

describe('Generate random phone numbers class', () => {

  it('should generate 20 numbers', () => {
    expect(randomNumbers).to.be.a('array');
    expect(randomNumbers).to.have.lengthOf(20);
  })

  it('should return the numbers sorted in ascending order', () => {
    expect(mockRadomNumbers[1]).to.be.equal(ascendingSort[1]);
    expect(ascendingSort).to.be.a('array')
  })

  it('should return the numbers sorted in descending order', () => {
    expect(mockRadomNumbers[5]).to.be.equal(descendingSort[5]);
    expect(descendingSort).to.be.a('array')
  })

  it('should return the maximum number', () => {
    expect(max).to.be.equal(882498503);
    expect(max).to.be.a('number')
  })

  it('should return the minimum number', () => {
    expect(min).to.be.equal(133077848);
    expect(min).to.be.a('number')
  })

})
