const palindromes = function (string) {
  let newString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  return newString === newString.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
