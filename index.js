function signUp(username, password) {
  let userNames = ["Alice", "Bob", "Delta", "Elena", "Forbe"];
  for (let i = 0; i <= userNames.length - 1; i++) {
    if (username == userNames[i]) {
      return "User Already Registered";
    }
  }
  userNames.push[username];
  return "Login Successfull";
}

// console.log(signUp("Elena"));

let logIn = function (username, password) {
  let userNames = ["Alice", "Bob", "Delta", "Elena", "Forbe"];
  let corrrectPassword = "Emp@123";

  if (userNames.includes(username)) {
    if (password == corrrectPassword) {
      return "Login Successfull";
    } else {
      return "Wrong Password";
    }
  }
  return "User Not Found!!!";
};

console.log(logIn("Bob0", "Emp@23"));

// console.log(logIn("Alice", "Emp@123"));
// console.log(logIn("Alice", "WrongPass"));
// console.log(logIn("Zara", "Emp@123"));
