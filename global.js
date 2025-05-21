  <script>
    // Flash
    const flash = document.getElementById("flash");
    const links = document.querySelectorAll("a.flash-link");

    links.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        flash.style.opacity = "1";
        setTimeout(() => {
          window.location.href = link.href;
        }, 100); // flash rapide
      });
    });
  </script>
