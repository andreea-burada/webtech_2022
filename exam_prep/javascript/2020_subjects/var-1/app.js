// input is a string (e.g. "This is an orange cat")
// stopWords is a vector containing strings
function calculateFrequencies(input, dictionary) {
  // input should be of type string or String. If another type is given an Error
  // is thrown with the message Input should be a string or a String; (0.5 pts)
  if (typeof input !== "string") {
    throw Error("Input should be a string or a String");
  }

  // dictionary is an array of string or String. If at least an element is not a string
  // an Error is thrown with the message Invalid dictionary format; (0.5 pts)
  dictionary.forEach((word) => {
    if (typeof word !== "string") {
      throw Error("Invalid dictionary format");
    }
  });

  // the function will calculate the relative frequencies of words in input and return a dictionary
  // containing words as keys and frequencies as values (e.g. for the string 'orange cat' the result
  // will be {orange : 0.5, cat : 0.5}); (0.5 pts)

  // if stopWords contains any words, they will be ignored in the result (e.g. for the string 'the orange cat'
  // with 'the' defined as a stopword the result will be {orange : 0.5, cat : 0.5}); (0.5 pts)

  // the function also returns the correct result for words starting with a capital letter, which
  // are considered identical to their lowercase variant. (0.5 pts)
  let frequencies = [];
  let words = [];
  let noWords = 0;

  let input_words = input.split(' ');
  input_words.forEach((word) => {
    if (dictionary.includes(word.toLowerCase()) === false) {
      if (words.includes(word.toLowerCase()) === false) {
        words.push(word);
        frequencies.push(1);
        noWords += 1;
      } else {
        let index = words.indexOf(word);
        frequencies[index] += 1;
      }
    }
  });

  console.log('words', words);
  console.log('freq', frequencies);

  let result = {};
  words.map((word, index) => {
    result = {
      ...result,
      [word.toLowerCase()]: frequencies[index] / noWords
    };
  });
  console.log("result", result);
  return result;
}

const app = {
  calculateFrequencies,
};

module.exports = app;
