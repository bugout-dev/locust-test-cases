function hello(name) {
  if (!name) {
    name = "world";
  }
  return `Hello, ${name}!`;
}

const name = process.argv[2];
console.log(hello(name));
