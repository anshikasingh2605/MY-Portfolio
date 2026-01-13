document.addEventListener('DOMContentLoaded', () => {

    // 1. TYPED.JS INITIALIZATION
    const typed = new Typed('#element', {
        strings: ['Web Developer', 'Programmer', 'Web Designer', 'Frontend Developer', 'Backend Developer'],
        typeSpeed: 70,
        backSpeed: 40,
        loop: true,
        showCursor: true,
        cursorChar: '|',
    });

    // 2. SKILLS BAR LOGIC (Horizontal & Hover Fix)
    const skillBars = document.querySelectorAll('.technical-bars .bar .progress-line span');
    
    skillBars.forEach((span, index) => {
        const percent = span.getAttribute('data-percent');
        
        // Setting CSS variables for the animation and percentage display
        span.style.setProperty('--percent', percent); 
        span.style.width = percent; // Ensures the bar actually fills to the data-percent
        
        // Staggered animation delays for a smoother entrance
        const parentBar = span.closest('.bar');
        if (parentBar) {
            parentBar.style.setProperty('--delay', `${0.2 + index * 0.1}s`);
            const progressLine = parentBar.querySelector('.progress-line');
            if (progressLine) {
                progressLine.style.setProperty('--delay-bar', `${0.5 + index * 0.1}s`);
            }
        }
    });

    // 3. THEME TOGGLE LOGIC
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggle.querySelector('i');

    // Check for saved user preference
    const savedTheme = localStorage.getItem('theme') || 'light-theme';
    body.classList.add(savedTheme);
    
    // Set correct icon on load
    if (savedTheme === 'dark-theme') {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('light-theme')) {
            body.classList.replace('light-theme', 'dark-theme');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark-theme');
        } else {
            body.classList.replace('dark-theme', 'light-theme');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light-theme');
        }
    });

    // 4. ACTIVE NAVIGATION LINK ON SCROLL
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar a');

    const updateActiveLink = () => {
        let current = '';
        const headerHeight = document.querySelector('.header').offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100; // Offset for better trigger timing
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Initial call

    // 5. TIMELINE ANIMATION DELAY
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.setProperty('--delay', `${0.3 + index * 0.2}s`);
    });
});
function sendDirectEmail() {
    const name = document.getElementById('senderName').value;
    const subject = document.getElementById('msgSubject').value;
    const message = document.getElementById('senderMessage').value;
    const email = "anshusingh262005@gmail.com";

    // This creates the direct mailto link
    // %0D%0A is the code for a new line in email body
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Name: " + name + "\n\n" + message)}`;

    // This opens the user's email client
    window.location.href = mailtoLink;
}
