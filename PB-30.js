// Array of objects
var persons = [
  { name: "Ravi", height: 5.5 },
  { name: "Priya", height: 5.8 },
  { name: "Amit", height: 6.1 },
  { name: "Neha", height: 5.4 }
];

// Assume first person is tallest
var tallest = persons[0];

// Find person with highest height
for (var i = 1; i < persons.length; i++) {
  if (persons[i].height > tallest.height) {
    tallest = persons[i];
  }
}

// Display result
console.log("Name: " + tallest.name);
console.log("Height: " + tallest.height);
