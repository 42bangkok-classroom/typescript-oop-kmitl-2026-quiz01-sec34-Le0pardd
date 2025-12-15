// Simple password validator for beginners
// Rules:
// - at least 8 characters
// - contains at least one digit
// - contains at least one uppercase letter

const pwd = process.argv[2];

if (!pwd) {
  console.log("Invalid");
  process.exit(0);
}

const isLongEnough = pwd.length >= 8;
const hasDigit = /\d/.test(pwd);
const hasUppercase = /[A-Z]/.test(pwd);

if (isLongEnough && hasDigit && hasUppercase) {
  console.log("Valid");
} else {
  console.log("Invalid");
}
