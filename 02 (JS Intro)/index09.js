// /////////////////// Logic Operators // /////////////////// Another category in
// the operator family 3 main logic operators

var username = "joe"
var password = "joe123"

if (!username || !password) {
    console.log("Please provide username and password");
} else if (username === "joe" && password === "joe123") {
    console.log("Access Granted");
} else {
    console.log("Username or Password is incorrect");
}
