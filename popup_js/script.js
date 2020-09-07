document.addEventListener("DOMContentLoaded", function () {
  var btn = document.getElementById("submit_btn");
  btn.addEventListener("click", function (event) {
    event.stopPropagation();
    event.preventDefault();
    //first name
    chrome.storage.sync.set(
      { first_name: document.getElementById("firstName").value },
      function () {
        console.log(
          "Value is set to " + document.getElementById("firstName").value
        );
      }
    );
    //last name
    chrome.storage.sync.set(
      { last_name: document.getElementById("lastName").value },
      function () {
        console.log(
          "Value is set to " + document.getElementById("lastName").value
        );
      }
    );
    //email address
    chrome.storage.sync.set(
      { email_address: document.getElementById("emailAddress").value },
      function () {
        console.log(
          "Value is set to " + document.getElementById("emailAddress").value
        );
      }
    );
    //address
    chrome.storage.sync.set(
      { address: document.getElementById("address").value },
      function () {
        console.log(
          "Value is set to " + document.getElementById("address").value
        );
      }
    );
    //phone number
    chrome.storage.sync.set(
      { phone_number: document.getElementById("phoneNumber").value },
      function () {
        console.log(
          "Value is set to " + document.getElementById("phoneNumber").value
        );
      }
    );
    //zipcode
    chrome.storage.sync.set(
      { zipcode: document.getElementById("zipcode").value },
      function () {
        console.log(
          "Value is set to " + document.getElementById("zipcode").value
        );
      }
    );
    //zipcode
    chrome.storage.sync.set(
      { city: document.getElementById("city").value },
      function () {
        console.log("Value is set to " + document.getElementById("city").value);
      }
    );
  });
});
