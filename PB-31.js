const fs = require("fs");

// Division 1
var division1 = {
  students: ["Ravi", "Priya", "Amit", "Neha", "Kiran"]
};

// Division 2
var division2 = {
  students: ["Ankit", "Sneha", "Rahul", "Pooja", "Vikas"]
};

// Sort names alphabetically
division1.students.sort();
division2.students.sort();

// Combine दोनों objects
var result = {
  division1: division1,
  division2: division2
};

// Write to file
fs.writeFileSync("students.json", JSON.stringify(result, null, 2));

// Confirmation
console.log("Data written to file successfully!");
