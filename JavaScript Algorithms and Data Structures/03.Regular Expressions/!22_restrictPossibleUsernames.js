let username = "JackOfAllTrades";
let userCheck = /^[a-z]([a-z]+\d*|\d{2,})$/i; // Change this line
let result = userCheck.test(username);