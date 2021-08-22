
const options={
    threshold: 0,
    rootMargin: '0px 0px 0px 0px'
}
//function which toggles animation in scroll for bigger div
const observer = new IntersectionObserver((entries, observer) => {
    // Looped over the entries
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
      // If the element is visible
        if (entry.isIntersecting) {
        // Added the animation class
            entry.target.classList.add('animate__slideInUp');
            observer.unobserve(entry.target)
        }

    });
}, options);

const addElementBg = document.querySelectorAll(".project")
addElementBg.forEach(element => {
    observer.observe(element);
})



// function which toggles animation in scroll for smaller div
const observerSm = new IntersectionObserver(entries => {

    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }

      if (entry.isIntersecting) {
        entry.target.classList.add('animate__pulse');
      }

    });
});
const addElementSm = document.querySelectorAll(".small_project");

addElementSm.forEach(element => {
    observerSm.observe(element);
})



// function which makes navbar sticks to the top after scrolling
window.onscroll = function() {stickyNavbar()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

