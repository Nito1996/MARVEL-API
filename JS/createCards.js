import { fetchData, fetchedData } from "../JS/apiRequest.js";
import { createPagination } from "../JS/createPagination.js";

window.onload = async () => {
  await fetchData();
  createPagination(fetchedData.total);
  fetchedData.results.forEach((e) => {
    // Crear el contenedor de la tarjeta
    const cardContainer = document.createElement("div");
    cardContainer.classList.add(
      "card",
      "mb-3",
      "hover",
      "mainCards",
      "col-sm-3"
    );

    // Crear el enlace de la imagen de cómic
    const comicImgLink = document.createElement("a");

    if (e.urls != undefined) comicImgLink.href = e.urls[0].url;
    else if ((e.resourceURI = !undefined)) comicImgLink.href = e.resourceURI;
    else comicImgLink.href = comicImgLink.href = e.urls[1].url;

    comicImgLink.classList.add("comicImgLink");

    // Crear la imagen de la tarjeta
    const cardImg = document.createElement("img");
    cardImg.classList.add("card-img-top2", "comicImg");
    if (e.thumbnail === null) {
      cardImg.src = "../mainImages/topSecret.webp";
    } else {
      cardImg.src = `${e.thumbnail.path}.${e.thumbnail.extension}`;
    }
    comicImgLink.appendChild(cardImg); // Agregar la imagen al enlace

    // Crear el contenedor del cuerpo de la tarjeta
    const cardBodyContainer = document.createElement("div");
    cardBodyContainer.classList.add("card-bodyMainContainer", "card-b2");

    // Crear el cuerpo de la tarjeta
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-bodyMain");

    // Crear el enlace del titular de la tarjeta
    const cardHeadlineLink = document.createElement("a");
    cardHeadlineLink.classList.add("card-body__headline");

    if (e.resourceURI) {
      cardHeadlineLink.href = e.resourceURI;
    } else {
      cardHeadlineLink.href = e.urls[0].url;
    }

    if (e.firstName) {
      cardHeadlineLink.textContent = e.firstName;
    } else {
      cardHeadlineLink.textContent = e.name ? e.name : e.title;
    }

    // Crear el párrafo del año del cómic
    const cardUnlinkedParagraph = document.createElement("p");

    cardUnlinkedParagraph.textContent = e.description;
    cardUnlinkedParagraph.classList.add("cardDescription");
    cardUnlinkedParagraph.title = e.description;

    // Agregar el titular y el párrafo al cuerpo de la tarjeta
    cardBody.appendChild(cardHeadlineLink);
    cardBody.appendChild(cardUnlinkedParagraph);

    // Agregar el cuerpo de la tarjeta al contenedor del cuerpo de la tarjeta
    cardBodyContainer.appendChild(cardBody);

    // Agregar el enlace de la imagen de cómic y el contenedor del cuerpo de la tarjeta a la tarjeta
    cardContainer.appendChild(comicImgLink);
    cardContainer.appendChild(cardBodyContainer);

    // Obtener el contenedor principal
    const mainCardsContainer = document.querySelector(".mainSectionContainer");

    // Insertar los elementos creados en el contenedor principal
    mainCardsContainer.appendChild(cardContainer);
  });
};
