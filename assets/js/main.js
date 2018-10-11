var nav = document.getElementById("nav");
window.addEventListener("scroll", function() {
  if (window.pageYOffset >= 200) {
    nav.className = "fixed";
  } else {
    nav.className = " ";
  }
});

// jquery
$(document).ready(function() {});
