// Get a reference to the menu icon element
var menuIcon = document.getElementById("menu-icon");

// Add an onclick event listener to the menu icon
menuIcon.addEventListener("click", function () {
  // Get a reference to the navbar-mobile element
  var navbarMobile = document.querySelector(".navbar-mobile");

  // Toggle the visibility of the navbar-mobile element
  if (navbarMobile.style.display === "block") {
    navbarMobile.style.display = "none";
  } else {
    navbarMobile.style.display = "block";
  }
});
