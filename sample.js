function hello(name) {
  function validName(n) {
    if (!n) {
      return "world";
    }
    return n;
  }
  validatedName = validName(name);
  return `Hello, ${validatedName}!`;
}

const name = process.argv[2];
console.log(hello(name));
