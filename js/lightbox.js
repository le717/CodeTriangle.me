const qLightboxWrapper = document.querySelector(".lightbox-wrapper");
const qCurrentImage = document.querySelector(".lightbox-wrapper img");
const qPhotoGallery = document.querySelector(".photo-gallery");
let totalNumberOfPhotos = 0;
let currentScrollPos = 0;


function set(index, url) {
  qCurrentImage.dataset.index = index;
  qCurrentImage.src = url;
}

function open() {
  currentScrollPos = window.scrollY;
  document.body.classList.add("lightbox-visible");
  document.body.scrollIntoView();
  qLightboxWrapper.classList.add("visible");
}

function close() {
  window.scroll(0, currentScrollPos);
  document.body.classList.remove("lightbox-visible");
  qLightboxWrapper.classList.remove("visible");
  set(-1, "");
}

function previous() {
  let current_index = Number.parseInt(qCurrentImage.dataset.index, 10);
  let previous_index = current_index - 1;
  if (previous_index >= 0) {
    set(previous_index, get_src(previous_index));
  }
}

function next() {
  let current_index = Number.parseInt(qCurrentImage.dataset.index, 10);
  let next_index = current_index + 1;
  let next_img = get_src(next_index);
  if (next_img && next_index <= totalNumberOfPhotos) {
    set(next_index, next_img);
  }
}

function get_src(index) {
  let src = document.querySelector(`.photo-gallery img[data-index='${index}']`);
  return src ? src.dataset.src : null;
}

qLightboxWrapper.addEventListener("click", function(e) {
  // Close the lightbox
  if (e.target.matches(".btn-close")) {
    close();
  }

  // Previous/next photo
  if (e.target.matches(".btn-previous")) {
    previous();
  }
  if (e.target.matches(".btn-next")) {
    next();
  }
});


// Open the clicked photo
qPhotoGallery.addEventListener("click", function(e) {
  if (e.target.matches("img")) {
    set(e.target.dataset.index, e.target.dataset.src);
    open();
  }
});


// Keyboard accessibility
document.body.addEventListener("keydown", function(e) {
  // Open a photo on enter key press
  if (e.target.matches(".photo-gallery img") && e.key === "Enter") {
    set(e.target.dataset.index, e.target.dataset.src);
    open();
  }

  // Do nothing if the lightbox isn't open
  let isLightBoxOpen = qLightboxWrapper.classList.contains("visible");
  if (!isLightBoxOpen) {
    return false;
  }

  // Close the lightbox
  if (e.key === "Escape") {
    close();
  }

  // Previous/next photo
  if (e.key === "ArrowLeft") {
    previous();
  }
  if (e.key === "ArrowRight") {
    next();
  }
});

// Make all photos tabbable
qPhotoGallery.querySelectorAll("img").forEach(function(v, i) {
  v.setAttribute("tabindex", "0");
  v.dataset.index = i.toString();
  totalNumberOfPhotos += 1;
});
