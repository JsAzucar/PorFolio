
//Scroll
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("a.Move");
    for (const link of links) {
      link.addEventListener("click", scrollToSection);
    }
  
    function scrollToSection(event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1); // Obtiene el ID del destino
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  });

  //Scroll