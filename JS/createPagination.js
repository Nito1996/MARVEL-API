import { fetchData, fetchedData } from "../JS/apiRequest.js";
let currentPage = 0;

const createPagination = (fetchedDataTotal) => {
  const startPage = Math.max(1, currentPage - 3); // Start page(min = 1)
  const endPage = Math.min(fetchedDataTotal - 1, currentPage + 3); // Last page (max = data fetched)

  const section = document.createElement("section");

  const nav = document.createElement("nav");
  nav.setAttribute("aria-label", "Page navigation example");

  const ul = document.createElement("ul");
  ul.classList.add("pagination", "justify-content-center");

  const previousLi = document.createElement("li");
  previousLi.classList.add("page-item");

  const previousA = document.createElement("a");
  previousA.classList.add("page-link", "bg-dark", "text-light", "disabled");
  previousA.setAttribute("href", "#");
  previousA.textContent = "«";
  previousA.onclick = () => {
    //Current active class turns to be removed and remove active classes
    document.querySelector(".active").classList.add("bg-dark", "text-light");
    document
      .querySelector(".active")
      .classList.remove("active", "disabled", "bg-warning");
    //Assing active class to the new selected pagination
    document.querySelectorAll(".page-link").forEach((e) => {
      if (parseInt(e.textContent) === currentPage - 1) {
        e.classList.remove("bg-dark");
        e.classList.add("active", "disabled", "bg-warning");
        //Update currentPage to active class
        currentPage = parseInt(e.textContent);
      }
    });
    // Delete previous cards by looping on the main container firstChilds
    while (document.querySelector(".mainSectionContainer").firstChild) {
      document
        .querySelector(".mainSectionContainer")
        .removeChild(
          document.querySelector(".mainSectionContainer").firstChild
        );
    }
    //Create new cards based on pagination selected
    handleNewCreateCards();
    //Handle pagination by removing the previous one and creating a new one based on new active class selected.
    section.remove();
    createPagination(fetchedData.total);
    //Assign active class again
    document.querySelectorAll(".page-link").forEach((e) => {
      if (parseInt(e.textContent) === currentPage) {
        e.classList.remove("bg-dark");
        e.classList.add("active", "disabled", "bg-warning");
      } else {
        e.classList.remove("active", "disabled", "bg-warning");
        e.classList.add("bg-dark");
      }
    });
    //When active class === 0, disable previous button
    if (currentPage === 0) {
      document
        .querySelector(".pagination")
        .firstChild.classList.add("disabled");
    } else {
      document
        .querySelector(".pagination")
        .firstChild.classList.remove("disabled");
    }
    //Show/Hide first ...
    if (currentPage > 6) {
      previousElipsisLi.classList.remove("displayNone");
      previousElipsisLi.classList.add("displayInline", "disabled");
    } else {
      previousElipsisLi.classList.remove("displayInline");
      previousElipsisLi.classList.add("displayNone");
    }
  };

  previousLi.appendChild(previousA);
  ul.appendChild(previousLi);

  const firstLi = document.createElement("li");
  firstLi.classList.add("page-item");

  const firstA = document.createElement("a");
  firstA.classList.add("page-link", "active", "disabled", "bg-warning");
  firstA.setAttribute("href", "#");
  firstA.textContent = 0;
  firstA.onclick = () => {
    //Remove active class to all
    document.querySelectorAll(".page-link").forEach((e) => {
      e.classList.remove("active", "disabled", "bg-warning");
      e.classList.add("bg-dark");
    });
    //Assing active class on current click number at pagination
    firstA.classList.remove("bg-dark");
    firstA.classList.add("active", "disabled", "bg-warning");
    //Update currentPage to active class
    currentPage = parseInt(document.querySelector(".active").textContent);
    // Delete previous cards by looping on the main container firstChilds
    while (document.querySelector(".mainSectionContainer").firstChild) {
      document
        .querySelector(".mainSectionContainer")
        .removeChild(
          document.querySelector(".mainSectionContainer").firstChild
        );
    }
    //Create new cards based on pagination selected
    handleNewCreateCards();
    // Handle pagination by removing the previous one and creating a new one based on new active class selected.
    section.remove();
    createPagination(fetchedData.total);
    // Assign active class again
    document.querySelectorAll(".page-link").forEach((e) => {
      if (parseInt(e.textContent) === currentPage) {
        e.classList.remove("bg-dark");
        e.classList.add("active", "disabled", "bg-warning");
      } else {
        e.classList.remove("active", "disabled", "bg-warning");
        e.classList.add("bg-dark");
      }
      //When active class === 0, disable previous button
      if (currentPage === 0) {
        document
          .querySelector(".pagination")
          .firstChild.classList.add("disabled");
      } else {
        document
          .querySelector(".pagination")
          .firstChild.classList.remove("disabled");
      }
    });
  };

  firstLi.appendChild(firstA);
  ul.appendChild(firstLi);

  const previousElipsisLi = document.createElement("li");
  const previousElipsisA = document.createElement("a");
  previousElipsisA.classList.add(
    "page-link",
    "text-light",
    "disabled",
    "bg-dark"
  );
  previousElipsisA.setAttribute("href", "#");
  previousElipsisA.textContent = "...";

  previousElipsisLi.appendChild(previousElipsisA);
  ul.appendChild(previousElipsisLi);

  for (let i = startPage; i <= endPage; i++) {
    const li = document.createElement("li");
    li.classList.add("page-item");

    const a = document.createElement("a");
    a.classList.add("page-link", "bg-dark");
    a.setAttribute("href", "#");
    a.textContent = i;
    //Initial validation for assigning active class
    if (a.textContent === "0") {
      a.classList.remove("bg-dark");
      a.classList.add("active", "disabled", "bg-warning");
    }
    a.onclick = () => {
      //Remove active class to all
      document.querySelectorAll(".page-link").forEach((e) => {
        e.classList.remove("active", "disabled", "bg-warning");
        e.classList.add("bg-dark");
      });
      //Assing active class on current click number at pagination
      a.classList.remove("bg-dark");
      a.classList.add("active", "disabled", "bg-warning");
      //When active class === 0, disable previous button
      if (currentPage === 0) {
        previousA.classList.add("disabled");
      }
      //Update currentPage to active class
      currentPage = parseInt(document.querySelector(".active").textContent);
      // Delete previous cards by looping on the main container firstChilds
      while (document.querySelector(".mainSectionContainer").firstChild) {
        document
          .querySelector(".mainSectionContainer")
          .removeChild(
            document.querySelector(".mainSectionContainer").firstChild
          );
      }
      //Create new cards based on pagination selected
      handleNewCreateCards();
      // Handle pagination by removing the previous one and creating a new one based on new active class selected.
      section.remove();
      createPagination(fetchedData.total);
      // Assign active class again
      document.querySelectorAll(".page-link").forEach((e) => {
        if (parseInt(e.textContent) === currentPage) {
          e.classList.remove("bg-dark");
          e.classList.add("active", "disabled", "bg-warning");
        } else {
          e.classList.remove("active", "disabled", "bg-warning");
          e.classList.add("bg-dark");
        }
      });
    };
    li.appendChild(a);
    ul.appendChild(li);
  }

  const nextElipsisLi = document.createElement("li");
  const nextElipsisA = document.createElement("a");
  nextElipsisA.classList.add("page-link", "text-light", "disabled", "bg-dark");
  nextElipsisA.setAttribute("href", "#");
  nextElipsisA.textContent = "...";

  nextElipsisLi.appendChild(nextElipsisA);
  ul.appendChild(nextElipsisLi);

  nextElipsisLi.classList.add("page-item", "displayNone");

  const lastLi = document.createElement("li");
  lastLi.classList.add("page-item");

  const lastA = document.createElement("a");
  lastA.classList.add("page-link", "bg-dark");
  lastA.setAttribute("href", "#");
  lastA.textContent = fetchedDataTotal;
  lastA.onclick = () => {
    //Remove active class to all
    document.querySelectorAll(".page-link").forEach((e) => {
      e.classList.remove("active", "disabled", "bg-warning");
      e.classList.add("bg-dark");
    });
    //Assing active class on current click number at pagination
    lastA.classList.remove("bg-dark");
    lastA.classList.add("active", "disabled", "bg-warning");
    //Update currentPage to active class
    currentPage = parseInt(document.querySelector(".active").textContent);
    // Delete previous cards by looping on the main container firstChilds
    while (document.querySelector(".mainSectionContainer").firstChild) {
      document
        .querySelector(".mainSectionContainer")
        .removeChild(
          document.querySelector(".mainSectionContainer").firstChild
        );
    }
    //Create new cards based on pagination selected
    handleNewCreateCards();
    // Handle pagination by removing the previous one and creating a new one based on new active class selected.
    section.remove();
    createPagination(fetchedData.total);
    // Assign active class again
    document.querySelectorAll(".page-link").forEach((e) => {
      if (parseInt(e.textContent) === currentPage) {
        e.classList.remove("bg-dark");
        e.classList.add("active", "disabled", "bg-warning");
      } else {
        e.classList.remove("active", "disabled", "bg-warning");
        e.classList.add("bg-dark");
      }
      //When active class === fetchedDataTotal, disable next button
      if (currentPage === fetchedDataTotal) {
        document
          .querySelector(".pagination")
          .lastChild.classList.add("disabled");
      } else {
        document
          .querySelector(".pagination")
          .lastChild.classList.remove("disabled");
      }
    });
  };

  lastLi.appendChild(lastA);
  ul.appendChild(lastLi);

  const nextLi = document.createElement("li");
  nextLi.classList.add("page-item");

  const nextA = document.createElement("a");
  nextA.classList.add("page-link", "bg-dark", "text-light");
  nextA.setAttribute("href", "#");
  nextA.textContent = "»";
  nextA.onclick = () => {
    //Current active class turns to be removed and remove active classes
    document.querySelector(".active").classList.add("bg-dark", "text-light");
    document
      .querySelector(".active")
      .classList.remove("active", "disabled", "bg-warning");
    //Assing active class to the new selected pagination
    let currentPageUpdated = false;
    document.querySelectorAll(".page-link").forEach((e) => {
      if (!currentPageUpdated && parseInt(e.textContent) === currentPage + 1) {
        e.classList.remove("bg-dark");
        e.classList.add("active", "disabled", "bg-warning");
            //Update currentPage to active class
            currentPage = parseInt(e.textContent);
            currentPageUpdated = true;
      }
    });
    // Delete previous cards by looping on the main container firstChilds
    while (document.querySelector(".mainSectionContainer").firstChild) {
      document
        .querySelector(".mainSectionContainer")
        .removeChild(
          document.querySelector(".mainSectionContainer").firstChild
        );
    }
    //Create new cards based on pagination selected
    handleNewCreateCards();
    // Handle pagination by removing the previous one and creating a new one based on new active class selected.
    section.remove();
    createPagination(fetchedData.total);
    // Assign active class again
    document.querySelectorAll(".page-link").forEach((e) => {
      if (parseInt(e.textContent) === currentPage) {
        e.classList.remove("bg-dark");
        e.classList.add("active", "disabled", "bg-warning");
      } else {
        e.classList.remove("active", "disabled", "bg-warning");
        e.classList.add("bg-dark");
      }
    });
    //When active class === fetchedDataTotal, disable next button
    if (currentPage === fetchedDataTotal) {
      document.querySelector(".pagination").lastChild.classList.add("disabled");
    } else {
      document
        .querySelector(".pagination")
        .lastChild.classList.remove("disabled");
    }
    // Show/Hide last ...
    if (currentPage > fetchedDataTotal - 4) {
      nextElipsisLi.classList.remove("displayNone");
      nextElipsisLi.classList.add("displayInline", "disabled");
    } else {
      nextElipsisLi.classList.remove("displayInline");
      nextElipsisLi.classList.add("displayNone");
    }
  };

  nextLi.appendChild(nextA);
  ul.appendChild(nextLi);

  nav.appendChild(ul);
  section.appendChild(nav);
  document.body.appendChild(section);
  document.querySelector(".mainContainer").appendChild(section);

  //Validations for first ...
  if (currentPage > 4) {
    previousElipsisLi.classList.remove("displayNone");
    previousElipsisLi.classList.add("displayInline", "disabled");
  } else {
    previousElipsisLi.classList.remove("displayInline");
    previousElipsisLi.classList.add("displayNone");
  }
  //Validations for last ...
  if (currentPage < fetchedDataTotal - 4) {
    nextElipsisLi.classList.remove("displayNone");
    nextElipsisLi.classList.add("displayInline", "disabled");
  } else {
    nextElipsisLi.classList.remove("displayInline");
    nextElipsisLi.classList.add("displayNone");
  }
};

//Handle how to create new cards function
async function handleNewCreateCards() {
  await fetchData(currentPage);

  fetchedData.results.forEach((e) => {
    //Create card's content
    const cardContainer = document.createElement("div");
    cardContainer.classList.add(
      "card",
      "mb-3",
      "hover",
      "mainCards",
      "col-sm-3"
    );
    //Create anchor/link
    const comicImgLink = document.createElement("a");
    comicImgLink.href = e.resourceURI? e.resourceURI : e.urls[0].url;
    comicImgLink.classList.add("comicImgLink");
    //Create image
    const cardImg = document.createElement("img");
    cardImg.classList.add("card-img-top2", "comicImg");
    if (e.thumbnail === null) {
      cardImg.src = "../mainImages/topSecret.webp"
    } else {
      cardImg.src = `${e.thumbnail.path}.${e.thumbnail.extension}`;
    }
    comicImgLink.appendChild(cardImg); // Agregar la imagen al enlace
    //Create container for the body
    const cardBodyContainer = document.createElement("div");
    cardBodyContainer.classList.add("card-bodyMainContainer", "card-b2");
    //Create the body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-bodyMain");
    //Create anchor/link of the title
    const cardHeadlineLink = document.createElement("a");
    cardHeadlineLink.classList.add("card-body__headline");
    if (e.resourceURI) {
      cardHeadlineLink.href = e.resourceURI
    } else {
      cardHeadlineLink.href = e.urls[0].url
    }
    if (e.firstName) {
      cardHeadlineLink.textContent = e.firstName;
      } else {
        cardHeadlineLink.textContent = e.name ? e.name : e.title;
      }
    //Create the parragrapf for the year
    const cardUnlinkedParagraph = document.createElement("p");
    cardUnlinkedParagraph.textContent = e.description;
    cardUnlinkedParagraph.classList.add("cardDescription");
    cardUnlinkedParagraph.title = e.description;
    //Add everything accordingly
    cardBody.appendChild(cardHeadlineLink);
    cardBody.appendChild(cardUnlinkedParagraph);
    cardBodyContainer.appendChild(cardBody);
    cardContainer.appendChild(comicImgLink);
    cardContainer.appendChild(cardBodyContainer);
    //Insert to the main container
    document.querySelector(".mainSectionContainer").appendChild(cardContainer);
  });
}

export { createPagination };
