/* jshint browser: true */

(function() {
  "use strict";
  var QprojectContainer = document.querySelector("#projects-container");

  function findParentEle(ele, classEle) {
    // We found the desired element
    if (ele.classList.contains(classEle)) {
      return ele;
    } else {
      return findParentEle(ele.parentElement, classEle);
    }
  }

  QprojectContainer.addEventListener("click", function(e) {
    // Find the project box
    var projectBox = findParentEle(e.target, "project-box");

    // Hide/show the clicked box
    if (projectBox.classList.contains("project-box")) {
      projectBox.classList.toggle("visible");
    }
  });
}());
