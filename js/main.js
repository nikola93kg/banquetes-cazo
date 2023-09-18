const toggleBtn = document.getElementsByClassName('toggle-btn')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleBtn.addEventListener('click', function() {
    navbarLinks.classList.toggle('active');
});

const navbar = document.getElementsByClassName('navbar')[0];
navbar.classList.toggle('stickyNav');



var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 8500); 
}

