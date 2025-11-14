document.addEventListener('DOMContentLoaded', () => {



    const skillBars = document.querySelectorAll('.technical-bars .bar .progress-line span');
    skillBars.forEach((span, index) => {
        const percent = span.getAttribute('data-percent');
        
        
        span.style.setProperty('--percent', percent); 

    
        span.closest('.bar').style.setProperty('--delay', `${0.2 + index * 0.1}s`); 
        span.closest('.bar').querySelector('.progress-line').style.setProperty('--delay-bar', `${0.5 + index * 0.1}s`); 
    });

});




        document.addEventListener('DOMContentLoaded', () => {
    
    var typed = new Typed('#element', {
        strings: ['Web Developer', 'Programmer', 'Web Designer', 'Frontend Developer', 'Backend Developer'],
        typeSpeed: 70,
        backSpeed: 40,
        loop: true,
        showCursor: true,
        cursorChar: '|',
    });

    
    const skillBars = document.querySelectorAll('.technical-bars .bar .progress-line span');
    skillBars.forEach((span, index) => {
        const percent = span.getAttribute('data-percent');
        span.style.setProperty('--percent', percent); // Set CSS variable
        span.style.animationDelay = `${0.5 + index * 0.2}s`; // Stagger animation
        span.closest('.bar').style.setProperty('--delay', `${0.2 + index * 0.1}s`); // Stagger parent bar animation
        span.closest('.bar').querySelector('.progress-line').style.setProperty('--delay-bar', `${0.5 + index * 0.1}s`); // Stagger bar animation
    });

    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        if (savedTheme === 'dark-theme') {
            themeToggle.querySelector('i').classList.remove('fa-moon');
            themeToggle.querySelector('i').classList.add('fa-sun');
        }
    } else {
        body.classList.add('light-theme'); // Default to light
    }

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('light-theme')) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            themeToggle.querySelector('i').classList.remove('fa-moon');
            themeToggle.querySelector('i').classList.add('fa-sun');
            localStorage.setItem('theme', 'dark-theme');
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            themeToggle.querySelector('i').classList.remove('fa-sun');
            themeToggle.querySelector('i').classList.add('fa-moon');
            localStorage.setItem('theme', 'light-theme');
        }
    });

    
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar a');

    const updateActiveLink = () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - document.querySelector('.header').offsetHeight; // Account for fixed header
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
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
    
    updateActiveLink();

    
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.setProperty('--delay', `${0.3 + index * 0.2}s`);
    });
});