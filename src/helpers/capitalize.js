module.exports = function capitalize(word = "word") {
  let inicial = word.substring(0, 1);
  return word.replace(inicial, inicial.toUpperCase());
};
