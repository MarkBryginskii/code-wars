// In this exercise you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.


const abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function alphabetPosition(text) {
  let result = '';
  const newText = text.toLowerCase().match(/[a-z]/g);

  if (newText) {
    newText.forEach(latter => {
      result += abc.indexOf(latter)+1 + ' ';
    });
  }

  return result.trim();
}

alphabetPosition("The sunset sets at twelve o' clock.");
