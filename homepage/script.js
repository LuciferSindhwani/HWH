// Enhanced parallax and animation effects - add before the closing </body> tag

document.addEventListener('DOMContentLoaded', function() {
    // First, let's preserve the original positioning of all elements
    const elements = {
      hero: document.querySelector('.hero'),
      heroContent: document.querySelector('.hero-content'),
      healthcarePro: document.querySelector('.healthcare-pro'),
      healthcarePatient: document.querySelector('.healthcare-patient'),
      heartIcon: document.querySelector('.heart-icon'),
      empoweringImage: document.querySelector('.empowering-image img'),
      empoweringText: document.querySelector('.empowering-text'),
      missionTitle: document.querySelector('.mission-title'),
      missionPoints: document.querySelectorAll('.mission-point'),
      missionImage: document.querySelector('.mission-image img'),
      serviceCards: document.querySelectorAll('.service-card'),
      personalizedText: document.querySelector('.personalized-text'),
      personalizedImage: document.querySelector('.personalized-image img'),
      flowerCorner: document.querySelector('.flower-corner img')
    };
  
    // Add necessary CSS for animation and parallax effects
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      /* Base styles to ensure proper positioning */
      .hero {
        position: relative;
        overflow: hidden;
      }
      
      .hero-content {
        z-index: 10;
        transform: translateZ(0);
      }
      
      .healthcare-pro, .healthcare-patient {
        position: absolute;
        bottom: 0;
        height: 90%;
        z-index: 5;
        pointer-events: none;
      }
      
      .healthcare-pro {
        left: 0;
      }
      
      .healthcare-patient {
        right: 0;
      }
      
      .heart-icon {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: 4;
        pointer-events: none;
      }
      
      /* Animation classes */
      .fade-in {
        animation: fadeIn 1.2s ease forwards;
      }
      
      .slide-up {
        animation: slideUp 1s ease forwards;
      }
      
      .slide-left {
        animation: slideLeft 1s ease forwards;
      }
      
      .slide-right {
        animation: slideRight 1s ease forwards;
      }
      
      .pulse {
        animation: pulse 2s infinite;
      }
      
      .float {
        animation: float 4s ease-in-out infinite;
      }
      
      .rotate {
        animation: rotate 15s linear infinite;
      }
      
      /* Parallax ready classes */
      .parallax-deep {
        will-change: transform;
        transform: translateZ(0);
      }
      
      .parallax-medium {
        will-change: transform;
        transform: translateZ(0);
      }
      
      .parallax-shallow {
        will-change: transform;
        transform: translateZ(0);
      }
      
      /* Animation keyframes */
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes slideUp {
        from { transform: translateY(50px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      
      @keyframes slideLeft {
        from { transform: translateX(50px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      
      @keyframes slideRight {
        from { transform: translateX(-50px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }
      
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-15px); }
        100% { transform: translateY(0px); }
      }
      
      @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      
      /* Staggered reveal for mission points and service cards */
      .mission-point, .service-card {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }
      
      .mission-point.reveal, .service-card.reveal {
        opacity: 1;
        transform: translateY(0);
      }
      
      /* Gradient overlay for section transitions */
      .section-transition {
        position: absolute;
        left: 0;
        right: 0;
        height: 150px;
        pointer-events: none;
        z-index: 5;
      }
      
      .transition-top {
        top: -1px;
        background: linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
      }
      
      .transition-bottom {
        bottom: -1px;
        background: linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
      }
    `;
    document.head.appendChild(styleElement);
  
    // Add transition overlays to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      if (section.classList.contains('hero')) return; // Skip for hero section
      
      const topTransition = document.createElement('div');
      topTransition.className = 'section-transition transition-top';
      section.appendChild(topTransition);
      
      const bottomTransition = document.createElement('div');
      bottomTransition.className = 'section-transition transition-bottom';
      section.appendChild(bottomTransition);
    });
  
    // Apply initial animations and classes
    if (elements.heroContent) {
      elements.heroContent.classList.add('fade-in');
    }
    
    if (elements.heartIcon) {
      elements.heartIcon.classList.add('pulse');
    }
    
    if (elements.flowerCorner) {
      elements.flowerCorner.classList.add('float');
    }
  
    // Parallax effect function
    function applyParallax() {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Hero section parallax (crazy effect as requested)
      if (elements.hero) {
        const heroHeight = elements.hero.offsetHeight;
        const heroOffset = elements.hero.getBoundingClientRect().top + scrollY;
        const heroProgress = (scrollY - heroOffset + windowHeight) / (heroHeight + windowHeight);
        
        if (heroProgress >= 0 && heroProgress <= 1) {
          // Dramatic hero content movement
          if (elements.heroContent) {
            const moveY = -heroProgress * 120; // Move up as scroll down
            const scale = 1 - (heroProgress * 0.2); // Slight scale down
            elements.heroContent.style.transform = `translateY(${moveY}px) scale(${scale})`;
            elements.heroContent.style.opacity = 1 - (heroProgress * 0.7);
          }
          
          // Left image moves left and up
          if (elements.healthcarePro) {
            const moveX = -heroProgress * 100;
            const moveY = -heroProgress * 50;
            elements.healthcarePro.style.transform = `translate(${moveX}px, ${moveY}px)`;
          }
          
          // Right image moves right and up
          if (elements.healthcarePatient) {
            const moveX = heroProgress * 100;
            const moveY = -heroProgress * 50;
            elements.healthcarePatient.style.transform = `translate(${moveX}px, ${moveY}px)`;
          }
          
          // Heart icon zooms out and fades
          if (elements.heartIcon) {
            const scale = 1 - (heroProgress * 0.4);
            const moveY = heroProgress * 80;
            elements.heartIcon.style.transform = `translateX(-50%) translateY(${moveY}px) scale(${scale})`;
            elements.heartIcon.style.opacity = 1 - (heroProgress * 0.9);
          }
        }
      }
      
      // Apply parallax to other sections
      function applyElementParallax(element, speed, direction = 'y', additionalEffects = null) {
        if (!element) return;
        
        const rect = element.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distanceFromCenter = elementCenter - windowHeight / 2;
        
        // Only apply effect when element is in view or close to it
        if (rect.bottom > 0 && rect.top < windowHeight) {
          let transform = '';
          
          // Apply directional movement
          if (direction === 'y') {
            transform += `translateY(${-distanceFromCenter * speed}px) `;
          } else if (direction === 'x') {
            transform += `translateX(${distanceFromCenter * speed}px) `;
          }
          
          // Apply additional effects if specified
          if (additionalEffects === 'scale') {
            const scale = 1 + (Math.abs(distanceFromCenter) / windowHeight) * 0.1;
            transform += `scale(${scale}) `;
          } else if (additionalEffects === 'rotate') {
            const rotate = (distanceFromCenter / windowHeight) * 10;
            transform += `rotate(${rotate}deg) `;
          }
          
          element.style.transform = transform;
        }
      }
      
      // Apply parallax to content images
      applyElementParallax(elements.empoweringImage, 0.1, 'y', 'scale');
      applyElementParallax(elements.missionImage, 0.12, 'y');
      applyElementParallax(elements.personalizedImage, 0.08, 'y', 'scale');
      
      // Reveal elements when scrolled into view
      function revealOnScroll(elements, staggerDelay = 0) {
        if (!elements || !elements.length) return;
        
        Array.from(elements).forEach((element, index) => {
          const rect = element.getBoundingClientRect();
          if (rect.top < windowHeight - 100) {
            setTimeout(() => {
              element.classList.add('reveal');
            }, staggerDelay * index);
          }
        });
      }
      
      revealOnScroll(elements.missionPoints, 150);
      revealOnScroll(elements.serviceCards, 100);
    }
  
    // Initial application
    applyParallax();
    
    // Apply on scroll
    window.addEventListener('scroll', applyParallax);
    
    // Apply on resize to ensure effects work at all viewport sizes
    window.addEventListener('resize', applyParallax);
    
    // Add mouse movement parallax for hero section
    if (elements.hero) {
      elements.hero.addEventListener('mousemove', function(e) {
        if (!elements.heroContent) return;
        
        const moveX = (e.clientX - window.innerWidth / 2) / 50;
        const moveY = (e.clientY - window.innerHeight / 2) / 50;
        
        elements.heroContent.style.transform = `translate(${moveX}px, ${moveY}px)`;
        
        if (elements.healthcarePro) {
          elements.healthcarePro.style.transform = `translate(${-moveX * 1.5}px, ${-moveY * 1.5}px)`;
        }
        
        if (elements.healthcarePatient) {
          elements.healthcarePatient.style.transform = `translate(${moveX * 1.5}px, ${-moveY * 1.5}px)`;
        }
        
        if (elements.heartIcon) {
          elements.heartIcon.style.transform = `translateX(-50%) translate(${moveX * 0.5}px, ${moveY * 0.5}px)`;
        }
      });
    }
    
    // Add 3D tilt effect to service cards
    if (elements.serviceCards) {
      elements.serviceCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
          const cardRect = card.getBoundingClientRect();
          const cardCenterX = cardRect.left + cardRect.width / 2;
          const cardCenterY = cardRect.top + cardRect.height / 2;
          
          const percentX = (e.clientX - cardCenterX) / (cardRect.width / 2);
          const percentY = (e.clientY - cardCenterY) / (cardRect.height / 2);
          
          const tiltAmount = 10;
          const tiltX = -percentY * tiltAmount;
          const tiltY = percentX * tiltAmount;
          
          card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.05)`;
        });
        
        card.addEventListener('mouseleave', function() {
          card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
          card.style.transition = 'transform 0.5s ease';
        });
      });
    }
    
    // Add smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Add dramatic page load animation
    function pageLoadAnimation() {
      // Animate hero section elements with delays
      if (elements.healthcarePro) {
        elements.healthcarePro.style.opacity = '0';
        elements.healthcarePro.style.transform = 'translateX(-50px)';
        setTimeout(() => {
          elements.healthcarePro.style.transition = 'all 1.2s ease';
          elements.healthcarePro.style.opacity = '1';
          elements.healthcarePro.style.transform = 'translateX(0)';
        }, 300);
      }
      
      if (elements.healthcarePatient) {
        elements.healthcarePatient.style.opacity = '0';
        elements.healthcarePatient.style.transform = 'translateX(50px)';
        setTimeout(() => {
          elements.healthcarePatient.style.transition = 'all 1.2s ease';
          elements.healthcarePatient.style.opacity = '1';
          elements.healthcarePatient.style.transform = 'translateX(0)';
        }, 500);
      }
      
      if (elements.heroContent) {
        elements.heroContent.style.opacity = '0';
        elements.heroContent.style.transform = 'translateY(30px)';
        setTimeout(() => {
          elements.heroContent.style.transition = 'all 1s ease';
          elements.heroContent.style.opacity = '1';
          elements.heroContent.style.transform = 'translateY(0)';
        }, 700);
      }
      
      if (elements.heartIcon) {
        elements.heartIcon.style.opacity = '0';
        elements.heartIcon.style.transform = 'translateX(-50%) scale(0.8)';
        setTimeout(() => {
          elements.heartIcon.style.transition = 'all 1s ease';
          elements.heartIcon.style.opacity = '1';
          elements.heartIcon.style.transform = 'translateX(-50%) scale(1)';
        }, 1000);
      }
    }
    
    // Run page load animation
    pageLoadAnimation();
  });