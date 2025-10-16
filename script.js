document.addEventListener('DOMContentLoaded', function() {

    // ===== MOBILE NAVIGATION TOGGLE =====
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    function toggleMobileMenu() {
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', function() {
                navMenu.classList.toggle('active');
                this.classList.toggle('active');
            });

            navLinks.forEach(function(link) {
                link.addEventListener('click', function() {
                    if (navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        navToggle.classList.remove('active');
                    }
                });
            });

            document.addEventListener('click', function(e) {
                if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                    if (navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        navToggle.classList.remove('active');
                    }
                }
            });
        }
    }

    // ===== SMOOTH SCROLL =====
    function initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ===== MODAL FUNCTIONALITY =====
    function initModal() {
        const modal = document.getElementById('bookingModal');
        const closeModalButton = document.querySelector('.close');
        const bookingButtons = document.querySelectorAll('.space-book, .workshop-book');
        const cancelBookingButton = document.getElementById('cancelBooking');
        const closeSuccessMessageButton = document.getElementById('closeSuccessMessage');
        const bookingForm = document.getElementById('bookingForm');
        const successMessage = document.getElementById('bookingSuccessMessage');
        const modalTitle = document.getElementById('modalTitle');
        const summaryItemName = document.getElementById('summaryItemName');
        const summaryItemDetail = document.getElementById('summaryItemDetail');
        const summaryItemPrice = document.getElementById('summaryItemPrice');
        const datePickerGroup = document.getElementById('date-picker-group');
        const bookingDateInput = document.getElementById('bookingDate');

        function openModal() {
            if (modal) {
                modal.style.display = 'block';
                setTimeout(() => modal.classList.add('show'), 10);
                document.body.style.overflow = 'hidden';
            }
        }

        function closeModal() {
            if (modal) {
                modal.classList.remove('show');
                setTimeout(() => {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                    if (bookingForm) bookingForm.reset();
                    if (successMessage) successMessage.style.display = 'none';
                    if (bookingForm) bookingForm.style.display = 'block';
                }, 300);
            }
        }

        if (bookingButtons.length > 0) {
            bookingButtons.forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    const card = this.closest('.space-card, .workshop-card');
                    if (!card) return;

                    if (card.classList.contains('space-card')) {
                        modalTitle.textContent = 'Space Booking Form';
                        summaryItemName.textContent = card.querySelector('h3').textContent;
                        summaryItemDetail.textContent = 'Daily Rental';
                        summaryItemPrice.textContent = card.querySelector('.space-price').textContent;
                        if (datePickerGroup) datePickerGroup.style.display = 'block';
                        if (bookingDateInput) bookingDateInput.required = true;
                    } else if (card.classList.contains('workshop-card')) {
                        modalTitle.textContent = 'Workshop Registration Form';
                        summaryItemName.textContent = card.querySelector('h3').textContent;
                        summaryItemDetail.textContent = `${card.querySelector('.workshop-instructor').textContent} | Date: ${card.querySelector('.workshop-date').textContent}`;
                        summaryItemPrice.textContent = card.querySelector('.workshop-price').textContent;
                        if (datePickerGroup) datePickerGroup.style.display = 'none';
                        if (bookingDateInput) bookingDateInput.required = false;
                    }
                    openModal();
                });
            });
        }

        if (bookingForm) {
            bookingForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const name = document.getElementById('bookingName').value.trim();
                const email = document.getElementById('bookingEmail').value.trim();
                const phone = document.getElementById('bookingPhone').value.trim();
                if (name === '' || email === '' || phone === '') {
                    alert('Please fill in all required fields.');
                    return;
                }
                if (successMessage) {
                    bookingForm.style.display = 'none';
                    successMessage.style.display = 'block';
                }
            });
        }

        if (closeModalButton) closeModalButton.addEventListener('click', closeModal);
        if (cancelBookingButton) cancelBookingButton.addEventListener('click', closeModal);
        if (closeSuccessMessageButton) closeSuccessMessageButton.addEventListener('click', closeModal);
        window.addEventListener('click', e => (e.target === modal) && closeModal());
        document.addEventListener('keydown', e => (e.key === 'Escape') && closeModal());
    }

    // ===== CONTACT FORM HANDLING =====
    function initContactForm() {
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const name = document.getElementById('name').value.trim();
                const email = document.getElementById('email').value.trim();
                const subject = document.getElementById('subject').value.trim();
                const message = document.getElementById('message').value.trim();

                if (name === '' || email === '' || subject === '' || message === '') {
                    alert('Please fill in all required fields.');
                    return;
                }
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    alert('Please enter a valid email address.');
                    return;
                }
                alert('Thank you! Your message has been successfully sent. We will reply within 24 hours.');
                contactForm.reset();
            });
        }
    }

    // ===== ACTIVE NAV LINK HIGHLIGHT =====
    function initActiveNavHighlight() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link[href*="#"]');
        window.addEventListener('scroll', () => {
            const scrollY = window.pageYOffset;
            sections.forEach(section => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 100;
                const sectionId = section.getAttribute('id');

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href').includes(sectionId)) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        });
    }

    // ===== HEADER SCROLL EFFECT =====
    function initHeaderScroll() {
        const header = document.querySelector('.header');
        if (header) {
            window.addEventListener('scroll', () => {
                header.style.boxShadow = (window.scrollY > 50) ?
                    '0 4px 20px rgba(0, 0, 0, 0.15)' :
                    '0 2px 10px rgba(0, 0, 0, 0.1)';
            });
        }
    }

    // ===== ANIMATION ON SCROLL =====
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.space-card, .workshop-card, .exhibition-card, .vm-card, .gallery-card, .team-profile-item');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            observer.observe(el);
        });
    }

    // ===== FORM VALIDATION ENHANCEMENT =====
    function initFormValidation() {
        document.querySelectorAll('form').forEach(form => {
            form.querySelectorAll('input[required], textarea[required]').forEach(input => {
                input.addEventListener('blur', function() {
                    this.style.borderColor = (this.value.trim() === '') ? '#dc3545' : '#28a745';
                });
                input.addEventListener('focus', function() {
                    this.style.borderColor = 'var(--primary-color)';
                });
            });
        });
    }

    // ===== BACK TO TOP BUTTON =====
    function initBackToTop() {
        const backToTopBtn = document.createElement('button');
        backToTopBtn.innerHTML = '↑';
        backToTopBtn.className = 'back-to-top';
        Object.assign(backToTopBtn.style, {
            position: 'fixed', bottom: '30px', right: '30px', width: '50px',
            height: '50px', borderRadius: '50%', backgroundColor: 'var(--primary-color)',
            color: 'white', border: 'none', fontSize: '24px', cursor: 'pointer',
            display: 'none', zIndex: '999', transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
        });
        document.body.appendChild(backToTopBtn);

        window.addEventListener('scroll', () => {
            backToTopBtn.style.display = (window.pageYOffset > 300) ? 'block' : 'none';
        });
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ===== INITIALIZE ALL FUNCTIONS =====
    function init() {
        toggleMobileMenu();
        initSmoothScroll();
        initModal();
        initContactForm();
        initActiveNavHighlight();
        initHeaderScroll();
        initScrollAnimations();
        initFormValidation();
        initBackToTop();

        const bookingDateInput = document.getElementById('bookingDate');
        if (bookingDateInput) {
            bookingDateInput.setAttribute('min', new Date().toISOString().split('T')[0]);
        }
    }

    init();
});