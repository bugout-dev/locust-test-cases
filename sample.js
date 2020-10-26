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

const lol = function() {
  function throwaway(x) {
    return x;
  }

  return "lol";
}

const name = process.argv[2];
console.log(hello(name));
