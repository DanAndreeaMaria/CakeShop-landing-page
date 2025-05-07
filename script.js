function myFunction() {
  var x = document.getElementById("myTopnav");
  var menuIcon = document.querySelector(".icon .material-symbols-rounded");

  if (x.classList.contains("responsive")) {
    x.classList.remove("responsive");
    menuIcon.textContent = "menu"; // Switch back to menu icon
  } else {
    x.classList.add("responsive");
    menuIcon.textContent = "close"; // Switch to close icon
  }
}

// Function that closes the menu when clicking outside of it
document.addEventListener("click", function (event) {
  var x = document.getElementById("myTopnav");
  var menuButton = document.querySelector(".icon .material-symbols-rounded");
  var isClickInsideMenu = x.contains(event.target); // Check if the click is inside the menu
  var isClickOnButton = menuButton.contains(event.target); // Check if the click is on the menu button

  // If the click is outside the menu and the button, close the menu
  if (!isClickInsideMenu && !isClickOnButton) {
    x.classList.remove("responsive"); // Close the menu
    var menuIcon = document.querySelector(".icon .material-symbols-rounded");
    menuIcon.textContent = "menu"; // Change back to menu icon
  }
});

// Go back to top button function
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll back to top
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Switch between languages
function changeLanguage(lang) {
  if (lang === "ro") {
    window.location.href = "/";
  } else if (lang === "en") {
    window.location.href = "../english/";
  }
}
