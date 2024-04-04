let skills = document.getElementById("skills");
let education = document.getElementById("education");
let skillButton = document.getElementById("skillButton");
let eduButton = document.getElementById("eduButton");
let navList = document.getElementById("nav-list");

skillButton.addEventListener("click", function () {
  skillButton.classList.toggle("active");
  eduButton.classList.remove("active");
  skills.style.display = "block";
  education.style.display = "none";
});

eduButton.addEventListener("click", function () {
  eduButton.classList.toggle("active");
  skillButton.classList.remove("active");
  skills.style.display = "none";
  education.style.display = "block";
});

function openSide() {
  navList.style.display = "block";
}

function closeSide() {
  navList.style.display = "none";
}
