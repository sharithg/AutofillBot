var emailField = document.getElementById("checkout_email");
var firstName = document.getElementById("checkout_shipping_address_first_name");
var lastName = document.getElementById("checkout_shipping_address_last_name");
var address = document.getElementById("checkout_shipping_address_address1");
var city = document.getElementById("checkout_shipping_address_city");
var phone = document.getElementById("checkout_shipping_address_phone");
var zipcode = document.getElementById("checkout_shipping_address_zip");

chrome.storage.sync.get("first_name", function (result) {
  emailField.value = result.first_name;
});

chrome.storage.sync.get("last_name", function (result) {
  firstName.value = result.last_name;
});

chrome.storage.sync.get("email_address", function (result) {
  lastName.value = result.email_address;
});

chrome.storage.sync.get("address", function (result) {
  address.value = result.address;
});

chrome.storage.sync.get("phone_number", function (result) {
  zipcode.value = result.phone_number;
});

chrome.storage.sync.get("zipcode", function (result) {
  phone.value = result.zipcode;
});

chrome.storage.sync.get("city", function (result) {
  city.value = result.city;
});
