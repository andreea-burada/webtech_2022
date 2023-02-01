function modifyWord(word) {
  let new_word = word[0];
  for (let i = 0; i < word.length - 2; i++){
    new_word += '*';
  }
  new_word += word[word.length - 1];

  return new_word;
}

// input: string
// dictionary: Array of string
function bowdlerize(input, dictionary) {
  // input should be of type string. If another type is given an Error is thrown with
  // the message "Input should be a string"; (0.5 pts)
  if (Object.prototype.toString.call(input) !== "[object String]") {
    throw Error("Input should be a string");
  }

  // dictionary is an array of string. If at least an element is not a string an Error
  // is thrown with the message "Invalid dictionary format"; (0.5 pts)
  if (Array.isArray(dictionary) == false) {
    throw Error("Invalid dictionary format");
  }
  for (let currentDictionary of dictionary) {
    if (Object.prototype.toString.call(currentDictionary) !== "[object String]") {
      throw Error("Invalid dictionary format");
    }
  }

  // If dictionary contains words, they will be replaced in input with the first letter 
  // followed by a series of * characters followed by the last letter. The length of the 
  // resulting word will be the same as the original (e.g. 'test' will become 't**t'); (0.5 pts)

  // A new string wil be returned, with input remaining unmodified; (0.5 pts)

  // The function also returns the correct result for words starting with a capital letter. (0.5 pts)

  let words_array = input.split(' ');
  words_array.forEach(current_word => {
    // if word is contained in the dictionary
    if (dictionary.includes(current_word.toLowerCase())) {
      let index = words_array.indexOf(current_word);
      words_array[index] = modifyWord(current_word);
    }
  });

  return words_array.join(' ');
}


const app = {
  bowdlerize,
};

module.exports = app;
