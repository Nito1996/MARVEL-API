// On click/enter functions to validate if that email exist in local storage
document
  .querySelector("#exampleInputEmail1")
  .addEventListener("keydown", (event) => {
    const email = document.querySelector("#exampleInputEmail1").value.trim();
    if (event.key === "Enter") {
      if (localStorage.getItem(email) !== null) {
        window.location.href = "./signIn.html?email=" + email;
      } else if (email === "") {
        alert("Introduce a valid email, please!");
      } else {
        window.location.href = "./createAccount.html?email=" + email;
      }
    }
  });
  
// On click/enter functions to validate if that email exist in local storage
document.querySelector(".btnModify").addEventListener("click", () => {
  const email = document.querySelector("#exampleInputEmail1").value.trim();
  if (localStorage.getItem(email) !== null) {
    window.location.href = "./signIn.html?email=" + email;
  } else if (email === "") {
    alert("Introduce a valid email, please!");
  } else {
    window.location.href = "./createAccount.html?email=" + email;
  }
});
