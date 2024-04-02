let skills = document.getElementById("skills");
let education = document.getElementById("education");
let skillButton = document.getElementById("skillButton");
let eduButton = document.getElementById("eduButton");

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
