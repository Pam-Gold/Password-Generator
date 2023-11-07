//

const passwordBox = document.getElementById("password");

const generateBtn = document.querySelector(".generate-btn");

const copyPassword = document.getElementById("copy-password");

//

let length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lowerCase = "abcdefghijklmnopqrstuvwxyz";

const numbers = "01234567890";

const symbols = "!@#$%^&*()_+-|{}[]?<>~";

const allChars = upperCase + lowerCase + numbers + symbols;

const createRandomPassword = () => {
  let password = "";

  password += upperCase[Math.floor(Math.random() * upperCase.length)];

  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];

  password += numbers[Math.floor(Math.random() * numbers.length)];

  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password;
};


const copyPasswordText = () => {
  passwordBox.select()

  document.execCommand("copy");

  alert('Password Copied📝')
}


generateBtn.addEventListener('click', createRandomPassword);

copyPassword.addEventListener('click', copyPasswordText);

