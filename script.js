function isLoggedIn() {
  var user = localStorage.getItem("loggedInUser");
  if (user !== null) {
    return true;
  } else {
    return false;
  }
}

function getLoggedInUser() {
  var name = localStorage.getItem("loggedInUser");
  if (name !== null) {
    return name;
  }
  return "";
}

function logoutUser() {
  localStorage.removeItem("loggedInUser");
}

var formatScore = (score, total) => {
  var percent = Math.round((score / total) * 100);
  return percent + "%";
};

var isValidEmail = (email) => {
  if (email.includes("@") && email.includes(".")) {
    return true;
  }
  return false;
};

var isValidPassword = (password) => {
  return password.length >= 6;
};

console.log("script.js loaded successfully.");