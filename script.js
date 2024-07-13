//your JS code here. If required.
// Get the input element by its id
const inputField = document.getElementById('fname');

// Add an event listener for the 'blur' event (when the input loses focus)
inputField.addEventListener('blur', function() {
  // Convert the value of the input field to uppercase
  this.value = this.value.toUpperCase();
});
