/* jshint browser: true */

(function() {
  "use strict";
  var qProjectContainer = document.querySelector("#projects-container");

  function findParentEle(ele, classEle) {
    // We found the desired element
    if (ele.classList.contains(classEle)) {
      return ele;
    } else {
      return findParentEle(ele.parentElement, classEle);
    }
  }

  qProjectContainer.addEventListener("click", function(e) {
    // Find the project box
    var qProjectBox = findParentEle(e.target, "project-box");

    // Hide/show the clicked box
    if (qProjectBox.classList.contains("project-box")) {
      qProjectBox.classList.toggle("visible");
    }
  });
}());
