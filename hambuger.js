 const menuBtn = document.getElementById("menu-btn");
      const menu = document.getElementById("menu");
      const lines = menuBtn.querySelectorAll("span");

      menuBtn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
        menu.classList.toggle("flex");

        // Animasi garis burger → silang (X)
        lines[0].classList.toggle("rotate-45");
        lines[0].classList.toggle("translate-y-1.5");
        lines[1].classList.toggle("opacity-0");
        lines[2].classList.toggle("-rotate-45");
        lines[2].classList.toggle("-translate-y-1.5");
      });