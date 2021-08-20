
const options={
    threshold: 0,
    rootMargin: '0px 0px 0px 0px'
}
//function which toggles animation in scroll for bigger div
const observer = new IntersectionObserver((entries, observer) => {
    // Loop over the entries
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
      // If the element is visible
        if (entry.isIntersecting) {
        // Add the animation class
            entry.target.classList.add('animate__slideInUp');
            // entry.target.classList.add('animate__fadeIn');
            observer.unobserve(entry.target)
        }

    });
}, options);

const addElementBg = document.querySelectorAll(".project")
addElementBg.forEach(element => {
    observer.observe(element);
})



// function which t?oggles animation in scroll for smaller div
const observerSm = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('animate__pulse');
      }

    });
});
const addElementSm = document.querySelectorAll(".small_project");

addElementSm.forEach(element => {
    observerSm.observe(element);
})



// function which makes navbae stick to the top after scrolling
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


// function which toggles menu to open and close in mobile width mode

// let isHidden = true;
// const toggleIcon = document.querySelector('.toggle-btn');
// const menuElement = document.querySelector('#navbar');
// const links = document.querySelectorAll('.link-wide')

// function toggleMenu() {
//   if (isHidden) {
//     menuElement.classList.add("mobile");
//     links.forEach(link => link.style.display = "block");
//     isHidden = false;
    
//   } else {
//     menuElement.classList.remove("mobile");
//     links.forEach(link => link.style.display = "none");
//     isHidden = true;
//   }

// } 

// toggleIcon.addEventListener('click', function(){toggleMenu()})

// const sections = document.querySelectorAll("section");
// const navLi = document.querySelectorAll(".link-wide");
// window.onscroll = () => {
//   var current = "";

//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     if (pageYOffset >= sectionTop - 60) {
//       current = section.getAttribute("id"); }
//   });

//   navLi.forEach((li) => {
//     li.classList.remove("active");
//     if (li.classList.contains(current)) {
//       li.classList.add("active");
//     }
//   });
// };