// Toggle menu on mobile
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Sticky navbar background change on scroll
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});
//typing effect
$(function () {
  const texts = ["Web Developer", "Front End Developer"];
  let iText = 0, charPos = 0;
  let deleting = false;

  function type() {
    const current = texts[iText];
    if (!deleting) {
      // typing
      $('#typed').text(current.substring(0, charPos + 1));
      charPos++;
      if (charPos === current.length) {
        deleting = true;
        setTimeout(type, 1000); // pause after typing
        return;
      }
      setTimeout(type, 150);
    } else {
      // deleting
      $('#typed').text(current.substring(0, charPos - 1));
      charPos--;
      if (charPos === 0) {
        deleting = false;
        iText = (iText + 1) % texts.length;
        setTimeout(type, 500); // pause before typing next
        return;
      }
      setTimeout(type, 100);
    }
  }

  type();
});
$(document).ready(function(){
  $("nav a").click(function(){
    $("nav a").removeClass("active ");
    $(this).addClass("active")
  })
})

