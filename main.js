console.log('Connected');

const posStyle = `
    .overlay{
        display: inline;
        position: absolute;
        top: -30px;
        bottom: 0;
        left: -30px;
        right: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: .5s ease;
        background-color: $greyDk;
    }
    .overlay button {
        color: white;
        background: $green;
        height: 15%;
        width: 20%;
        font-size: 20px;
        position: relative; 
        margin: 20px;
        top: 37%;
        text-align: center;
    }
    .overlay:hover {
        position: absolute;
        opacity: 1;
    }
`;
function css(element, style) {
    for (const property in style)
        element.style[property] = style[property];
}

//function which toggles animation in scroll
const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('animate__backInRight');
      }

    });
});
const addElementBg = document.querySelectorAll(".project")
addElementBg.forEach(element => {
    observer.observe(element);
})

const observerSm = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('animate__bounceInUp');
      }

    });
});
const addElementSm = document.querySelectorAll(".small_project ");

addElementSm.forEach(element => {
    observerSm.observe(element);
})

