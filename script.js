document.addEventListener("DOMContentLoaded", function() {
    
    // Initialize Vanilla Tilt
    VanillaTilt.init(document.querySelectorAll(".card"), {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
    });

    // Image Shuffling Logic
    const images = [
        "url('images/pic-1.jpg')",
        "url('images/pic-2.jpg')",
        "url('images/pic-3.jpg')",
        "url('images/pic-4.jpg')"
    ];

    const cards = document.querySelectorAll('.card');
    
    // Shuffle the images array
    images.sort(() => Math.random() - 0.5);

    // Assign shuffled images to the cards
    cards.forEach((card, index) => {
        // We set the background image but keep the gradient overlay defined in CSS
        // To do this, we need to be careful not to overwrite the CSS background entirely if it has other properties
        // But in our CSS, .card has background: var(--glass-bg). 
        // The images were set as classes .card1, .card2 etc in CSS.
        // Let's override the background-image property specifically.
        card.style.backgroundImage = images[index];
        card.style.backgroundSize = 'cover';
        card.style.backgroundPosition = 'center';
    });

    // Naughty Button Logic (The "Funny" Part)
    const btn = document.querySelector('.primary-btn');
    
    btn.addEventListener('mouseover', function(e) {
        // 1 in 3 chance to move
        if(Math.random() < 0.3) {
            const x = Math.random() * 100 - 50; // -50 to 50
            const y = Math.random() * 100 - 50;
            
            this.style.transform = `translate(${x}px, ${y}px)`;
            
            setTimeout(() => {
                this.style.transform = 'translate(0, 0)';
            }, 500);
        }
    });

    // Navbar Scroll Effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 12, 41, 0.8)';
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.padding = '10px 20px';
            navbar.style.position = 'fixed';
            navbar.style.top = '0';
            navbar.style.left = '0';
            navbar.style.width = '100%';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.backdropFilter = 'none';
            navbar.style.padding = '20px 0';
            navbar.style.position = 'relative';
        }
    });
});
