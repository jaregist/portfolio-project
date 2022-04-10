function myFunction() {
  var menuLinks = document.getElementById("burgerLinks");
  if (menuLinks.style.display === "block") {
    menuLinks.style.display = "none";
  } else {
    menuLinks.style.display = "block";
  }

  var icons = document.getElementById("icons");
  if (icons.classList.contains("fa-bars")) {
    icons.classList.remove("fa-bars");
    icons.classList.add("fa-xmark");
  } else {
    icons.classList.remove("fa-xmark");
    icons.classList.add("fa-bars");
  }

  menuLinks.onclick = function () {
    menuLinks.style.display = "none";
    icons.classList.remove("fa-xmark");
    icons.classList.add("fa-bars");
  };
}
