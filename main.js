console.log('Connected');

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
        // entry.target.classList.add('animate__delay-1s');
      }

    });
});
const anEl = document.querySelectorAll(".animate__animated")
anEl.forEach(el => {
    observer.observe(el)
})
