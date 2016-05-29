/* jshint browser: true */

(function() {
  "use strict";
  var qNav  = document.querySelector(".navi"),
      qLogo = document.querySelector(".header #logo");

  function toggleScrollActions() {
    // Mobile nav bar
    if (window.pageYOffset >= 222) {
      qNav.classList.add("scroll");
    } else {
      qNav.classList.remove("scroll");
    }
  }

  toggleScrollActions();
  window.addEventListener("scroll", toggleScrollActions);

  // Logo animation
  qLogo.addEventListener("click", function() {
    this.classList.toggle("animate");
  });
}());