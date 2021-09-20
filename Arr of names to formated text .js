// Given: an array containing hashes of names
// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

function list(names) {
  let onlyNames = [];

  names.forEach((e) => {
    onlyNames = [...onlyNames, e.name];
  });

  const onlyNamesLength = onlyNames.length;

  const result = onlyNames.reduce((acc, el, index) => {
    return acc.concat(`${el}${index === onlyNamesLength - 2 ? " & " : ", "}`);
  }, "");

  console.log(result.slice(0, result.length - 2));
}

list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]); // returns 'Bart, Lisa & Maggie'
list([{ name: "Bart" }, { name: "Lisa" }]); // returns 'Bart & Lisa'
list([{ name: "Bart" }]); // returns 'Bart'
list([]); // returns ''
