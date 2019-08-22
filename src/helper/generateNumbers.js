const generateNumbers = (limit) => {
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

export default generateNumbers;
