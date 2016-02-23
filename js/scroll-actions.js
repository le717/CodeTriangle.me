(function() {
  "use strict";
  var qNav  = document.querySelector(".navi"),
      qLogo = document.querySelector(".header #logo g");


  function toggleScrollActions() {
    // Logo color
    if (window.pageYOffset >= 52) {
      qLogo.classList.add("light");
    } else {
      qLogo.classList.remove("light");
    }

    // Mobile nav bar
    if (window.pageYOffset >= 125) {
      qNav.classList.add("scroll");
    } else {
      qNav.classList.remove("scroll");
    }
  }

  toggleScrollActions();
  window.addEventListener("scroll", toggleScrollActions);
}());