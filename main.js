document.addEventListener("DOMContentLoaded", () => {
  // Typewriter Effect
  const typedTextElement = document.getElementById("typedText");
  const words = ["Aspiring Software Engineer", "Frontend Developer in Training", "Tech Enthusiast & Problem Solver","Future Full-Stack Developer"];
  let wordIndex = 0;
  let charIndex = 0;

  function typeWord() {
      if (charIndex < words[wordIndex].length) {
          typedTextElement.textContent += words[wordIndex][charIndex];
          charIndex++;
          setTimeout(typeWord, 100); // Typing speed
      } else {
          setTimeout(deleteWord, 1000); // Pause before deleting
      }
  }

  function deleteWord() {
      if (charIndex > 0) {
          typedTextElement.textContent = words[wordIndex].slice(0, charIndex - 1);
          charIndex--;
          setTimeout(deleteWord, 100); // Deleting speed
      } else {
          wordIndex = (wordIndex + 1) % words.length; // Move to the next word
          setTimeout(typeWord, 500); // Pause before typing the next word
      }
  }
  document.querySelectorAll('input, textarea').forEach(input => {
  input.addEventListener('input', () => {
    if (input.validity.valid) {
      input.style.borderColor = 'green';
    } else {
      input.style.borderColor = 'red';
    }
  });
});


  
  

  typeWord(); // Start the typewriter effect
});

// JavaScript to toggle light and dark mode
document.addEventListener("DOMContentLoaded", () => {
  const toggleSwitch = document.getElementById("toggle-switch");
  const body = document.body;

  // Check local storage for saved mode
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
  }

  toggleSwitch.addEventListener("click", () => {
    // Toggle the 'dark' class
    body.classList.toggle("dark");

    // Save the current theme in local storage
    if (body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
   let lastScrollTop = 0;
  const navbar = document.querySelector("nav");

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // scrolling down
      navbar.style.top = "-100px"; // hide nav
    } else {
      // scrolling up
      navbar.style.top = "0";
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });


  
});


