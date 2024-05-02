window.addEventListener("load", function () {
  const createUserLayout = (user) => {
    // Remove elements from the parent element
    document.querySelector(".mainBtn").remove();
    document.querySelector(".navBar1").remove();
    document.querySelector(".navBar3").remove();
    document.querySelector(".navBar4").remove();

    // Create img element
    const img = document.createElement("img");
    img.className = "userImg userImg2";
    img.src = "/mainImages/bestoInsider.png";
    img.alt = "ins";

    // Create the element link that contains the image
    const link = document.createElement("a");
    link.appendChild(img); // Agregar la imagen como hijo del enlace

    // Create the first link inside the div .ParentElement
    const logOutLink = document.createElement("a");
    logOutLink.className = "textDecorationNone";
    logOutLink.textContent = "log out";
    logOutLink.onclick = () => {
      if (confirm(`Are you sure  want to log out ${user.firstName}?`)) {
        user.active = false;
        localStorage.setItem(user.email, JSON.stringify(user));
        window.location.href = "../index.html";
      }
    };

    // Create the separator between the links
    const separator = document.createTextNode("|");

    // Create the second link inside of div .ParentElement
    const userName = document.createElement("a");
    userName.className = "textDecorationNone nameLogOut";
    userName.textContent = user.firstName + " " + user.lastName;

    // Create the div .ParentElement
    const ParentElement = document.createElement("div");
    ParentElement.className = "userDiv2";
    ParentElement.appendChild(link); // Agregar la img.
    ParentElement.appendChild(logOutLink); // Agregar el primer enlace al div
    ParentElement.appendChild(separator); // Agregar el separador al div
    ParentElement.appendChild(userName); // Agregar el segundo enlace al div

    // Add elements to the container
    document.querySelector(".navBar").classList.add("navBarPad");
    document.querySelector(".navBar").prepend(ParentElement);
  };
  // Handle log in and out
  for (let i = 0; i < localStorage.length; i++) {
    let user = JSON.parse(localStorage.getItem(localStorage.key(i)));
    if (user.active === true) {
      createUserLayout(user);
    }
  }
});
