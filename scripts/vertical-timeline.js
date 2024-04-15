document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('js-animate-visible');
        } else {
          entry.target.classList.remove('js-animate-visible');
        }
      });
    }, {
      threshold: 0.1 // Adjust if needed
    });
  
    const animateCards = document.querySelectorAll('.js-animate');
    animateCards.forEach((card) => {
      observer.observe(card);
    });
  });
  