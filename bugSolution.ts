function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterImproved(person: string | string[]): string {
  if (Array.isArray(person)) {
    return "Hello, " + person.join(' ');
  } else {
    return "Hello, " + person;
  }
}

let userString = "Jane Doe";
let userArray = ["Jane", "Doe"];

console.log(greeterImproved(userString)); // Expected output
console.log(greeterImproved(userArray)); // Expected output
//console.log(greeter(userArray)); // This will now produce a type error