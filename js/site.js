import { calculateExperience } from "./experience.js";
import { letThereBeLight } from "./theme.js";


// Remove the no-js class because we clearly have JS support
document.body.classList.remove("no-js");

// Select the proper theme on page load
letThereBeLight();

// Calculate my years of experience
const qYearExp = document.querySelector(".year-exp");
if (qYearExp) {
  qYearExp.textContent = calculateExperience({
    year: 2013,
    month: 1,
    day: 26
  });
}
