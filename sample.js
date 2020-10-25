function hello(name) {
  return `Hello, ${name}!`;
}

const name = process.argv[2] || "world";
console.log(hello(name));
