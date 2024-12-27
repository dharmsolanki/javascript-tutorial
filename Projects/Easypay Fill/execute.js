var email = document.getElementById("email");
var phone = document.getElementById("mobile_number");
var textInputs = document.querySelectorAll('input[type="text"]');
var isNumberKeys = document.querySelectorAll(
  'input[onkeypress="return isNumberKey(event)"]',
);
var dropdowns = document.querySelectorAll("select");
var amountFields = document.querySelectorAll(".amount_calculation");
var dateField = document.querySelectorAll('input[type="date"]');
var checkboxes = document.querySelectorAll('input[type="checkbox"]');
var pancard = document.querySelectorAll('input[pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}$"]');
var adharcard = document.querySelectorAll('input[maxlength="12"]');
var textarea = document.querySelectorAll("textarea");


amountFields.forEach((input) => {
  if (!input.readOnly && input) {
    input.value = 100;
    input.dispatchEvent(new Event("change"));
  }
});

// Set value for email and phone
email.value = "test@gmail.com";
phone.value = 1234567890;

textInputs.forEach((input) => {
  // Skip mobile_number, email, and amount_calculation fields
  if (!input.readOnly && input) {
    if (input.id === "name") {
      var name = ["Ankit", "Dharm", "Viram", "Vishwas", "Manan", "Khushi"];
      var randomName = Math.floor(Math.random() * name.length);
      input.value = name[randomName]; // Customize the default value for name fields
    } else if (
      input.id !== "mobile_number" &&
      !input.classList.contains("amount_calculation")
    ) {
      input.value = "Test"; // Set "Test" value only for non-mobile_number and non-amount fields
    }
  }
});

// Set a random option for dropdowns
dropdowns.forEach((dropdown) => {
  if (dropdown) {
    var options = dropdown.options; // Get all options of the dropdown
    if (options.length > 0) {
      var randomIndex = Math.floor(Math.random() * options.length); // Generate a random index
      dropdown.selectedIndex = randomIndex === 0 ? 1 : randomIndex; // Set the dropdown to a random option, skipping the first option

      // Trigger the onchange event after changing the selected index
      dropdown.dispatchEvent(new Event("change"));
    }
  }
});

// Set random number for inputs with number-only validation
isNumberKeys.forEach((element) => {
  if (!element.readOnly && element) {
    if (
      !element.readOnly &&
      element.id !== "mobile_number" &&
      !element.classList.contains("amount_calculation")
    ) {
      var randomNum = Math.floor(Math.random() * 100);
      element.value = randomNum;
    }
  }
});

dateField.forEach((element) => {
  if (element) {
    let dateObj = new Date();
    let date = String(dateObj.getDate()).padStart(2, "0");
    let month = String(dateObj.getMonth() + 1).padStart(2, "0");
    let year = dateObj.getFullYear();

    let formattedDate = `${year}-${month}-${date}`;

    element.value = formattedDate;
  }
});

textarea.forEach((element) => {
  if (element) {
    element.value = `Flat No. 101, Aakash Residency
    1234 MG Road, Sector 15
    Bengaluru
    Karnataka
    560001
    India`;
  }
});

checkboxes.forEach((element) => {
  if (element && !element.checked) {
    let oldClass = element.parentElement.classList;
    element.parentElement.className = `${oldClass} c_on`;
    element.checked = true;
  }
});

pancard.forEach((element) => {
  if(!element.readOnly && element)
  {
    element.value = 'ABCDE1234F';
  }
});

adharcard.forEach((element) => {
  if(!element.readOnly && element)
  {
    element.value = 123456789012;
  }
})