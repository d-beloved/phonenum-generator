/**
 * Phone number generator class
 */
class RandomNumberGenerator{

  /**
   * Generate numbers function
   * @param {integer} limit
   */
  static generateNumbers(limit) {
    const phoneNumbers = [];

    for (let i = 0; i < limit; i++) {
      const min  = Math.ceil(100000000);
      const max = Math.floor(999999999);
      const rawGeneration = Math.floor(Math.random() * (max - min)) + min;
      const generatedNumber = `0${rawGeneration}`;
      phoneNumbers.push(generatedNumber);
    }
    return phoneNumbers;
  }

  /**
   * Sort array in ascending order
   * @param {object} numbers
   */
  static sortInAscendingOrder(numbers) {
    return numbers.sort((a, b) => (a - b));
  }

  /**
   * Sort array in descending order
   * @param {object} numbers
   */
  static sortInDescendingOrder(numbers) {
    return numbers.sort((a, b) => (b - a));
  }

  /**
   * Returns the maximum number
   * @param {object} numbers
   */
  static maximumNumber(numbers) {
    return Math.max(...numbers)
  }

  /**
   * Returns minimum number in the array
   * @param {ibject} numbers
   */
  static minimumNumber(numbers) {
    return Math.min(...numbers)
  }
}


export default RandomNumberGenerator;
