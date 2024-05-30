import passwordRevealer from "../modulesJS/passwordRevealer.js";

window.addEventListener("load", function () {
  const queryParams = new URLSearchParams(window.location.search);
  const receivedEmail = queryParams.get("email");
  const user = JSON.parse(localStorage.getItem(receivedEmail));
  document.querySelector(".verifiedEmail").textContent = receivedEmail;

  document
    .querySelector("#passwordField")
    .addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        const inputPassword = document
          .querySelector("#passwordField")
          .value.trim();

        if (inputPassword === user.password) {
          user.active = true;
          localStorage.setItem(receivedEmail, JSON.stringify(user));
          window.location.href = "../index.html";
        } else {
          document.querySelector(".displayed").style.display = "flex";
        }
      }
    });

  document.querySelector(".btnModify").addEventListener("click", () => {
    const inputPassword = document.querySelector("#passwordField").value.trim();
    if (inputPassword === user.password) {
      user.active = true;
      localStorage.setItem(receivedEmail, JSON.stringify(user));
      window.location.href = "../index.html";
    } else {
      document.querySelector(".displayed").style.display = "flex";
    }
  });

  document
    .querySelector("#toggleButton")
    .addEventListener("click", function () {
      if (document.querySelector("#inputContainer").style.display === "none") {
        document.querySelector("#inputContainer").style.display = "flex";
      } else {
        document.querySelector("#inputContainer").style.display = "none";
      }
    });

  document.querySelector(".btnSubmit").addEventListener("click", () => {
    if (
      document.querySelector(".changePasswordInputFirstName").value.trim() ===
        user.firstName &&
      document.querySelector(".changePasswordInputLastName").value.trim() ===
        user.lastName &&
      document.querySelector(".changePasswordInputBirthDate").value.trim() ===
        user.birthDate
    ) {
      user.active = true;
      user.password = document
        .querySelector(".changePasswordInputNewPassword")
        .value.trim();
      localStorage.setItem(receivedEmail, JSON.stringify(user));
      window.location.href = "../index.html";
    } else {
      alert("Incorrect info, please do it again!");
      document.querySelector(".changePasswordInputFirstName").value = "";
      document.querySelector(".changePasswordInputLastName").value = "";
      document.querySelector(".changePasswordInputBirthDate").value = "";
      document.querySelector(".changePasswordInputNewPassword").value = "";
    }
  });

  passwordRevealer(
    document.querySelector("#passwordField"),
    document.querySelector("#revealButton")
  );

  passwordRevealer(
    document.querySelector(".changePasswordInputNewPassword"),
    document.querySelector(".reveal-btn2")
  );
});
