function validateForm() {
  // Get the form element
  var form = document.getElementById("visitor-form");

  // Get the state input field
  var state = document.getElementById("state");

  // Set the state input field as valid if its value is in the list of state abbreviations
  if (stateAbbreviations.includes(state.value.toUpperCase())) {
    state.setCustomValidity("");
  } else {
    state.setCustomValidity("Please enter a valid state abbreviation");
  }

  // Get the checkbox group
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');

  // Set the checkbox group as valid if at least one checkbox is selected
  var checked = false;
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checked = true;
      break;
    }
  }
  if (checked) {
    checkboxes.setCustomValidity("");
  } else {
    checkboxes.setCustomValidity("Please select at least one option");
  }

  // Check if the form is valid
  if (form.checkValidity()) {
    // Hide the form and display a thank you message
    form.style.display = "none";
    var thankYou = document.createElement("p");
    thankYou.innerHTML = "Thank you for visiting my page!";
    document.body.appendChild(thankYou);
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  // Add event listeners to the form fields
  var form = document.getElementById("visitor-form");
  form.addEventListener("change", validateForm);
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    event.stopPropagation();
    validateForm();
  });
});