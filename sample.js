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

function goodbye() {
  return "Goodbye!";
}

const name = process.argv[2];
console.log(hello(name));
