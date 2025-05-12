document.addEventListener('DOMContentLoaded', () => {
    const nameElement = document.getElementById('name');
    nameElement.textContent = 'Your Girlfriend\'s Name'; // Replace with her name.
  
    // Add dynamic floating hearts effect
    const heartContainer = document.body;
    setInterval(() => {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
      heartContainer.appendChild(heart);
  
      setTimeout(() => heart.remove(), 5000);
    }, 300);
  });
  