class RandomNumberGenerator{

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

  static sortInAscendingOrder(numbers) {
    return numbers.sort((a, b) => (a - b));
  }

  static sortInDescendingOrder(numbers) {
    return numbers.sort((a, b) => (b - a));
  }

  static maximumNumber(numbers) {
    return Math.max(...numbers)
  }

  static minimumNumber(numbers) {
    return Math.min(...numbers)
  }
}


export default RandomNumberGenerator;
