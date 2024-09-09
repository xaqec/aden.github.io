document.addEventListener('DOMContentLoaded', function() {
  // Yavaş kaydırma efektleri için aşağıdaki fonksiyonu ekleyebilirsin.
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});

