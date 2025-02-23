//your JS code here. If required.
const student = {
  name: "John Doe"
};

// Step 2: Create the 'getKeys' function that accepts an object and returns an array of its keys.
function getKeys(obj) {
  return Object.keys(obj);  // Using Object.keys() to get the keys of the object
}

// Test the function
console.log(getKeys(student));