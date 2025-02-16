function reverterString(string) {
  return string.split("").reverse().join("");
}

const url = "paranguaticuotimiriruaru";
const urlRevertida = reverterString(url);
console.log(urlRevertida);
