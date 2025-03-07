// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeCarousel();
});

function initializeCarousel() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    if (!slides.length) return;

    let currentSlide = 0;
    let isAnimating = false;
    const totalSlides = slides.length;

    // Initialize first slide
    showSlide(0);

    function showSlide(index, direction = 'next') {
        if (isAnimating) return;
        isAnimating = true;

        // Show current and next slides
        slides.forEach(slide => {
            slide.style.display = 'none';
            slide.classList.remove('active', 'previous', 'next');
        });
        dots.forEach(dot => dot.classList.remove('active'));

        // Set up slides for animation
        slides[currentSlide].style.display = 'block';
        slides[index].style.display = 'block';

        if (direction === 'next') {
            slides[currentSlide].classList.add('previous');
            slides[index].classList.add('active');
        } else {
            slides[currentSlide].classList.add('next');
            slides[index].classList.add('active');
        }

        dots[index].classList.add('active');

        // Reset animation flag after transition
        setTimeout(() => {
            isAnimating = false;
            currentSlide = index;
        }, 800);
    }

    function nextSlide() {
        const newIndex = (currentSlide + 1) % totalSlides;
        showSlide(newIndex, 'next');
    }

    function prevSlide() {
        const newIndex = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(newIndex, 'prev');
    }

    // Event listeners
    if (prevButton && nextButton) {
        prevButton.addEventListener('click', prevSlide);
        nextButton.addEventListener('click', nextSlide);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            if (index === currentSlide || isAnimating) return;
            const direction = index > currentSlide ? 'next' : 'prev';
            showSlide(index, direction);
        });
    });

    // Auto-advance slides
    let slideInterval = setInterval(nextSlide, 5000);

    // Pause auto-advance on hover
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });

        carouselContainer.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, 5000);
        });
    }
}

// Form handling
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Here you would typically make an API call to authenticate
    console.log('Login attempt:', { email, password });
    
    // For demo purposes, redirect to home
    window.location.href = 'home.html';
    return false;
}

function handleRegister(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return false;
    }
    
    // Here you would typically make an API call to register
    console.log('Register attempt:', { name, email, password });
    
    // For demo purposes, redirect to login
    window.location.href = 'login.html';
    return false;
}

// Scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(element);
    });
});