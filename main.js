window.addEventListener("load", function () {
  const createUserLayout = (user) => {
    // Remover los elementos del padre
    document.querySelector(".mainBtn").remove();
    document.querySelector(".navBar1").remove();
    document.querySelector(".navBar3").remove();
    document.querySelector(".navBar4").remove();

    // Crear el elemento de imagen
    const img = document.createElement("img");
    img.className = "userImg userImg2";
    img.src = "/mainImages/bestoInsider.png";
    img.alt = "ins";

    // Crear el elemento de enlace que contiene la imagen
    const link = document.createElement("a");
    link.appendChild(img); // Agregar la imagen como hijo del enlace

    // Crear el primer enlace dentro del div .ParentElement
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

    // Crear el separador entre los enlaces
    const separator = document.createTextNode("|");

    // Crear el segundo enlace dentro del div .ParentElement
    const userName = document.createElement("a");
    userName.className = "textDecorationNone nameLogOut";
    userName.textContent = user.firstName + " " + user.lastName;

    // Crear el div .ParentElement
    const ParentElement = document.createElement("div");
    ParentElement.className = "userDiv2";
    ParentElement.appendChild(link); // Agregar la img.
    ParentElement.appendChild(logOutLink); // Agregar el primer enlace al div
    ParentElement.appendChild(separator); // Agregar el separador al div
    ParentElement.appendChild(userName); // Agregar el segundo enlace al div

    // Agregar los elementos al contenedor
    document.querySelector(".navBar").classList.add("navBarPad");
    document.querySelector(".navBar").prepend(ParentElement);
  };
  for (let i = 0; i < localStorage.length; i++) {
    let user = JSON.parse(localStorage.getItem(localStorage.key(i)));
    if (user.active === true) {
      createUserLayout(user);
    }
  }
});
