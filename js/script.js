// JavaScript for "Read More" functionality
document.querySelector('.read-more-btn').addEventListener('click', function() {
    const fullText = document.querySelector('.full-text');
    const button = this;
    
    if (fullText.style.display === 'none') {
        fullText.style.display = 'block';
        button.textContent = 'Read Less';
    } else {
        fullText.style.display = 'none';
        button.textContent = 'Read More';
    }
});


// JavaScript for "Read More" functionality for the maternal and child health section
document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtn = document.querySelector('.maternal-child-health-section .read-more-btn');
    const fullText = document.querySelector('.maternal-child-health-section .full-text');

    readMoreBtn.addEventListener('click', function() {
        // Check if the full text is currently hidden
        const isHidden = fullText.style.display === 'none' || !fullText.style.display;

        // Show or hide the full text
        fullText.style.display = isHidden ? 'block' : 'none';

        // Change the button text accordingly
        readMoreBtn.textContent = isHidden ? 'Read Less' : 'Read More';
    });
});


// JavaScript for "Read More" functionality for the protection section
document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtn = document.querySelector('.protection-section .read-more-btn');
    const fullText = document.querySelector('.protection-section .full-text');

    readMoreBtn.addEventListener('click', function() {
        const isHidden = fullText.style.display === 'none' || !fullText.style.display;

        fullText.style.display = isHidden ? 'block' : 'none';
        readMoreBtn.textContent = isHidden ? 'Read Less' : 'Read More';
    });
});


// JavaScript for "Read More" functionality for the education section
document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtn = document.querySelector('.education-section .read-more-btn');
    const fullText = document.querySelector('.education-section .full-text');

    readMoreBtn.addEventListener('click', function() {
        const isHidden = fullText.style.display === 'none' || !fullText.style.display;

        fullText.style.display = isHidden ? 'block' : 'none';
        readMoreBtn.textContent = isHidden ? 'Read Less' : 'Read More';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    function toggleReadMore(element) {
      const card = element.closest('.team-card');
      const shortDesc = card.querySelector('.short-desc');
      const fullDesc = card.querySelector('.full-desc');
  
      if (shortDesc && fullDesc) {
        // Toggle visibility
        shortDesc.style.display = shortDesc.style.display === 'none' ? 'block' : 'none';
        fullDesc.style.display = fullDesc.style.display === 'none' ? 'block' : 'none';
  
        // Toggle button text
        element.textContent = fullDesc.style.display === 'block' ? 'Read Less' : 'Read More';
      }
    }
  });
  
