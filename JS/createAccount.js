import passwordRevealer from "../modulesJS/passwordRevealer.js";
window.addEventListener("load", function () {
  const queryParams = new URLSearchParams(window.location.search);
  const receivedEmail = queryParams.get("email");
  document.querySelector(".verifiedEmail").textContent = receivedEmail;
  document.querySelector(".btnModify").addEventListener("click", () => {
    const firstName = document.querySelector("#firstNameField").value;
    const lastName = document.querySelector("#lastNameField").value;
    const password = document.querySelector("#passwordField").value;
    const birthDate = document.querySelector("#birthDateField").value;
    if (
      firstName !== "" &&
      lastName !== "" &&
      password !== "" &&
      birthDate !== ""
    ) {
      const userEmail = document.querySelector(".verifiedEmail").textContent;
      const userData = {
        email: userEmail,
        firstName: firstName,
        lastName: lastName,
        password: password,
        birthDate: birthDate,
        active: true,
      };
      localStorage.setItem(userEmail, JSON.stringify(userData));
      window.location.href = "../index.html";
    } else {
      alert("You must fill every input field in order to advance.");
      document.querySelector("#firstNameField").value = "";
      document.querySelector("#lastNameField").value = "";
      document.querySelector("#passwordField").value = "";
      document.querySelector("#birthDateField").value = "";
    }
  });
  passwordRevealer(
    document.querySelector("#passwordField"),
    document.querySelector("#revealButton")
  );
});
