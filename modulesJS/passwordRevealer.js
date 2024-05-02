const passwordRevealer = function (passwordField, revealButton) {
  revealButton.addEventListener("click", () => {
    if (passwordField.type === "password") {
      passwordField.type = "text";
      revealButton.src = "/mainImages/invisible.png";
    } else {
      passwordField.type = "password";
      revealButton.src = "/mainImages/ojo.png";
    }
  });
};

export default passwordRevealer;
