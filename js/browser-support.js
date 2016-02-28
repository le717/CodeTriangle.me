/* jshint browser: true */
/* global smoothScroll */

(function() {
  "use strict";
  var qHtml = document.querySelector("html");

  // Obviously we support JavaScript
  qHtml.classList.add("js");

  // If native smooth scrolling is not supported, fallback
  if (document.documentElement.style.scrollBehavior === undefined) {
    qHtml.classList.add("smooth-scroll");
    smoothScroll.init({scrollOnLoad: false});
  }
})();
