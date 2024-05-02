const mainContainer = document.querySelector(".flyout");
const news = document.querySelector(".navNews");
const middleNav = document.querySelector(".middleNav");
const skewBoxSection = document.querySelector(".skewBoxSection");
const mainSectionContainer = document.querySelector(".mainSectionContainer");
const comicsContainer = document.querySelector(".flyout2");
const comics = document.querySelector(".navComics");
const moviesContainer = document.querySelector(".flyout4");
const movies = document.querySelector(".navMovies");
const showsContainer = document.querySelector(".flyout5");
const shows = document.querySelector(".navShows");
const gamesContainer = document.querySelector(".flyout6");
const games = document.querySelector(".navGames");
const videosContainer = document.querySelector(".flyout7");
const videos = document.querySelector(".navVideos");
const moreContainer = document.querySelector(".flyout8");
const more = document.querySelector(".navMore");
const charactersContainer = document.querySelector(".flyout3");
const characters = document.querySelector(".navCharacters");

news.addEventListener("mouseover", () => {
  middleNav.classList.add("visibilityHidden");
  skewBoxSection.classList.add("visibilityHidden");
  mainSectionContainer.classList.add("visibilityHidden");
  mainContainer.classList.remove("displayNone");
  document.getElementById("flyout").style.display = "flex"; 
});

news.addEventListener("mouseout", () => {
  middleNav.classList.remove("visibilityHidden");
  skewBoxSection.classList.remove("visibilityHidden");
  mainSectionContainer.classList.remove("visibilityHidden");
  document.getElementById("flyout").style.display = "none"
});

comics.addEventListener("mouseover", () => {
  middleNav.classList.add("visibilityHidden");
  skewBoxSection.classList.add("visibilityHidden");
  mainSectionContainer.classList.add("visibilityHidden");
  comicsContainer.classList.remove("displayNone");
  document.getElementById("flyout2").style.display = "flex";
});

comics.addEventListener("mouseout", () => {
  middleNav.classList.remove("visibilityHidden");
  skewBoxSection.classList.remove("visibilityHidden");
  mainSectionContainer.classList.remove("visibilityHidden");
  document.getElementById("flyout2").style.display = "none"
});

movies.addEventListener("mouseover", () => {
  middleNav.classList.add("visibilityHidden");
  skewBoxSection.classList.add("visibilityHidden");
  mainSectionContainer.classList.add("visibilityHidden");
  comicsContainer.classList.remove("displayNone");
  document.getElementById("flyout4").style.display = "flex";
});

movies.addEventListener("mouseout", () => {
  middleNav.classList.remove("visibilityHidden");
  skewBoxSection.classList.remove("visibilityHidden");
  mainSectionContainer.classList.remove("visibilityHidden");
  document.getElementById("flyout4").style.display = "none"
});

shows.addEventListener("mouseover", () => {
  middleNav.classList.add("visibilityHidden");
  skewBoxSection.classList.add("visibilityHidden");
  mainSectionContainer.classList.add("visibilityHidden");
  comicsContainer.classList.remove("displayNone");
  document.getElementById("flyout5").style.display = "flex";
});

shows.addEventListener("mouseout", () => {
  middleNav.classList.remove("visibilityHidden");
  skewBoxSection.classList.remove("visibilityHidden");
  mainSectionContainer.classList.remove("visibilityHidden");
  document.getElementById("flyout5").style.display = "none"
});

games.addEventListener("mouseover", () => {
  middleNav.classList.add("visibilityHidden");
  skewBoxSection.classList.add("visibilityHidden");
  mainSectionContainer.classList.add("visibilityHidden");
  gamesContainer.classList.remove("displayNone");
  document.getElementById("flyout6").style.display = "flex";
});

games.addEventListener("mouseout", () => {
  middleNav.classList.remove("visibilityHidden");
  skewBoxSection.classList.remove("visibilityHidden");
  mainSectionContainer.classList.remove("visibilityHidden");
  document.getElementById("flyout6").style.display = "none"
});

videos.addEventListener("mouseover", () => {
  middleNav.classList.add("visibilityHidden");
  skewBoxSection.classList.add("visibilityHidden");
  mainSectionContainer.classList.add("visibilityHidden");
  videosContainer.classList.remove("displayNone");
  document.getElementById("flyout7").style.display = "flex";
});

videos.addEventListener("mouseout", () => {
  middleNav.classList.remove("visibilityHidden");
  skewBoxSection.classList.remove("visibilityHidden");
  mainSectionContainer.classList.remove("visibilityHidden");
  document.getElementById("flyout7").style.display = "none"
});

more.addEventListener("mouseover", () => {
  middleNav.classList.add("visibilityHidden");
  skewBoxSection.classList.add("visibilityHidden");
  mainSectionContainer.classList.add("visibilityHidden");
  moreContainer.classList.remove("displayNone");
  document.getElementById("flyout8").style.display = "flex";
});

more.addEventListener("mouseout", () => {
  middleNav.classList.remove("visibilityHidden");
  skewBoxSection.classList.remove("visibilityHidden");
  mainSectionContainer.classList.remove("visibilityHidden");
  document.getElementById("flyout8").style.display = "none"
});

characters.addEventListener("mouseover", () => {
  middleNav.classList.add("visibilityHidden");
  skewBoxSection.classList.add("visibilityHidden");
  mainSectionContainer.classList.add("visibilityHidden");
  charactersContainer.classList.remove("displayNone");
  document.getElementById("flyout3").style.display = "flex";
});

characters.addEventListener("mouseout", () => {
  middleNav.classList.remove("visibilityHidden");
  skewBoxSection.classList.remove("visibilityHidden");
  mainSectionContainer.classList.remove("visibilityHidden");
  document.getElementById("flyout3").style.display = "none"
});
