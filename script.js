function myFunction() {
  var x = document.getElementById("myTopnav");
  var menuIcon = document.querySelector(".icon ion-icon");

  if (x.className === "topnav") {
    x.className += " responsive";
    menuIcon.setAttribute("name", "close-outline"); // Change to X icon
  } else {
    x.className = "topnav";
    menuIcon.setAttribute("name", "menu-outline"); // Change back to hamburger
  }
}

// Function that closes the menu when clicking outside of it
document.addEventListener("click", function (event) {
  var x = document.getElementById("myTopnav");
  var menuButton = document.querySelector(".icon");
  var isClickInsideMenu = x.contains(event.target); // Check if the click is inside the menu
  var isClickOnButton = menuButton.contains(event.target); // Check if the click is on the menu button

  // If the click is outside the menu and the button, close the menu
  if (!isClickInsideMenu && !isClickOnButton) {
    x.className = "topnav"; // Close the menu
    var menuIcon = document.querySelector(".icon ion-icon");
    menuIcon.setAttribute("name", "menu-outline"); // Change the hamburger
  }
});
