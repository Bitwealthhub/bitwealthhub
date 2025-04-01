// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animation on scroll
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
    
    // Form validation
    const forms = document.querySelectorAll('.needs-validation');
    
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            
            form.classList.add('was-validated');
        }, false);
    });
    
    // Countdown timer for special offers
    const countdownElement = document.getElementById('special-offer-countdown');
    // Special offer countdown timer - ends on June 30, 2025
    if (countdownElement) {
        const countdownDate = new Date("2025-06-30T23:59:59"); // Fixed offer end date

        
        const countdownTimer = setInterval(function() {
            const now = new Date().getTime();
            const distance = countdownDate - now;
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            
            if (distance < 0) {
                clearInterval(countdownTimer);
                countdownElement.innerHTML = "Offer Expired";
            }
        }, 1000);
    }
    
    // Investment calculator for BitWealth Hub plans
    const calculatorForm = document.getElementById('investment-calculator-form');
    if (calculatorForm) {
        calculatorForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const amount = parseFloat(document.getElementById('investment-amount').value);
            if (isNaN(amount) || amount < 100) { alert("Please enter a valid investment amount (minimum $100)"); return; }
            const plan = document.getElementById('investment-plan').value;

            
            let returnRate = 0;
            let duration = '';
            
            switch(plan) {
                case 'basic':
                    if (amount < 100) { alert("Basic plan requires minimum $100 investment"); return; }
                    returnRate = 0.10; // 10%
                    duration = '12 hours';
                    break;
                case 'premium':
                    if (amount < 500) { alert("Premium plan requires minimum $500 investment"); return; }
                    returnRate = 0.15; // 15%
                    duration = '24 hours';
                    break;
                case 'gold':
                    if (amount < 1000) { alert("Gold plan requires minimum $1000 investment"); return; }
                    returnRate = 0.25; // 25%
                    duration = '48 hours';
                    break;
                case 'advanced':
                    if (amount < 5000) { alert("Advanced plan requires minimum $5000 investment"); return; }
                    returnRate = 0.40; // 40%
                    duration = '72 hours';
                    break;
            }
            
            const profit = amount * returnRate;
            const totalReturn = amount + profit;
            
            document.getElementById('calculator-result').innerHTML = `
                <div class="alert alert-success">
                    <h5>Investment Summary:</h5>
                    <p>Initial Investment: $${amount.toFixed(2)}</p>
                    <p>Profit (${(returnRate * 100)}%): $${profit.toFixed(2)}</p>
                    <p>Total Return after ${duration}: $${totalReturn.toFixed(2)}</p>
                </div>
            `;
        });
    }
});