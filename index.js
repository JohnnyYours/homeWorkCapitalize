function capitaLize (string) {
  return string[0].toUpperCase() + string.substr(1, string.length - 1)
}

console.log(capitaLize("hello"));
console.log(capitaLize("qwerty"));
