/* jshint browser: true */

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
    // Find the project box
    var qProjectBox = findParent(e.target, "project-box");

    // Hide/show the clicked box
    if (qProjectBox.classList.contains("project-box")) {
      qProjectBox.classList.toggle("visible");
    }
  });
}());
