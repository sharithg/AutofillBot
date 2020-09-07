chrome.storage.sync.get("first_name", function (result) {
  if (result.first_name !== "" && result.first_name !== undefined)
    document.getElementById("firstName").value = result.first_name;
});

chrome.storage.sync.get("last_name", function (result) {
  if (result.last_name !== "" && result.last_name !== undefined)
    document.getElementById("lastName").value = result.last_name;
});

chrome.storage.sync.get("email_address", function (result) {
  if (result.email_address !== "" && result.email_address !== undefined)
    document.getElementById("emailAddress").value = result.email_address;
});

chrome.storage.sync.get("address", function (result) {
  if (result.address !== "" && result.address !== undefined)
    document.getElementById("address").value = result.address;
});

chrome.storage.sync.get("phone_number", function (result) {
  if (result.phone_number !== "" && result.phone_number !== undefined)
    document.getElementById("phoneNumber").value = result.phone_number;
});

chrome.storage.sync.get("zipcode", function (result) {
  if (result.zipcode !== "" && result.zipcode !== undefined)
    document.getElementById("zipcode").value = result.zipcode;
});

chrome.storage.sync.get("city", function (result) {
  if (result.city !== "" && result.city !== undefined)
    document.getElementById("city").value = result.city;
});
