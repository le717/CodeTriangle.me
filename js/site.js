import { calculateExperience } from "./experience.js";


// Remove the no-js class because we clearly have JS support
document.body.classList.remove("no-js");

// Calculate the years of experience I have
document.querySelector(".year-exp").innerHTML = calculateExperience({
  year: 2013,
  month: 1,
  day: 26
});