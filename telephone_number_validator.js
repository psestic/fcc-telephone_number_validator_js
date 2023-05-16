function telephoneCheck(str) {
  // check for invalid symbols
  const re = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/gm;
  return re.test(str);
}

console.log(telephoneCheck("-"));
