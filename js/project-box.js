(function() {
  "use strict";
  var qProjectContainer = document.querySelector("#projects-container");

  function findParent(ele, _class) {
    // The desired element was not found on the page
    if (ele === null) {
      return null;
    }

    // We found the desired element
    if (ele.classList.contains(_class)) {
      return ele;

      // Keep searching for the element
    } else {
      return findParent(ele.parentElement, _class);
    }
   }

  qProjectContainer.addEventListener("click", function(e) {
    // Do not react on links
    if (e.target.nodeName.toLowerCase() === "a") {
      return false;
    }

    var qProjectBox = findParent(e.target, "project-box");
    // Pind and either hide/show the project box
    if (qProjectBox.classList.contains("project-box")) {
      qProjectBox.classList.toggle("visible");
    }
  });
}());
