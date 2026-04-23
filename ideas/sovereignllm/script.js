/**
 * SovereignLLM - Interactive Script
 * Form handling, animations, and UI interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollAnimations();
  initContactForm();
  initSmoothScroll();
});

/**
 * Navigation - scroll effect and mobile toggle
 */
function initNavigation() {
  const nav = document.querySelector('.nav');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  // Scroll effect
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });

  // Mobile menu toggle
  navToggle.addEventListener('click', () => {
    const isActive = navToggle.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', isActive);
    navMenu.classList.toggle('active');

    // Prevent body scroll when menu is open
    document.body.style.overflow = isActive ? 'hidden' : '';
  });

  // Close menu when clicking a link
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
      navToggle.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

/**
 * Scroll-triggered animations using Intersection Observer
 */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('[data-animate]');

  if (!animatedElements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Stagger animation for grid items
          const delay = entry.target.closest('.features-grid, .pricing-grid, .team-grid')
            ? index * 100
            : 0;

          setTimeout(() => {
            entry.target.classList.add('animated');
          }, delay);

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  animatedElements.forEach(el => observer.observe(el));
}

/**
 * Contact form handling with validation
 */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const submitBtn = form.querySelector('.btn-submit');
  const successMessage = document.getElementById('formSuccess');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Clear previous errors
    clearFormErrors(form);

    // Validate form
    if (!validateForm(form)) {
      return;
    }

    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;

    // Simulate form submission (replace with actual API call)
    try {
      await simulateSubmission(form);

      // Show success message
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;
      successMessage.classList.add('show');
      form.reset();

      // Hide success message after 5 seconds
      setTimeout(() => {
        successMessage.classList.remove('show');
      }, 5000);
    } catch (error) {
      submitBtn.classList.remove('loading');
      submitBtn.disabled = false;
      showFormError(form, error.message || 'There was an error. Please try again.');
    }
  });

  // Real-time validation on blur
  form.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('blur', () => {
      validateField(field);
    });

    // Clear error on input
    field.addEventListener('input', () => {
      const group = field.closest('.form-group');
      if (group.classList.contains('error')) {
        group.classList.remove('error');
        field.removeAttribute('required');
        field.setAttribute('required', '');
      }
    });
  });
}

/**
 * Form validation
 */
function validateForm(form) {
  let isValid = true;
  const fields = form.querySelectorAll('input[required], textarea[required]');

  fields.forEach(field => {
    if (!validateField(field)) {
      isValid = false;
    }
  });

  return isValid;
}

/**
 * Validate individual field
 */
function validateField(field) {
  const group = field.closest('.form-group');
  const value = field.value.trim();

  // Required check
  if (field.hasAttribute('required') && !value) {
    showFieldError(group, field, 'This field is required');
    return false;
  }

  // Email validation
  if (field.type === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      showFieldError(group, field, 'Please enter a valid email address');
      return false;
    }
  }

  // Clear error if valid
  group.classList.remove('error');
  return true;
}

/**
 * Show field error
 */
function showFieldError(group, field, message) {
  group.classList.add('error');
  const errorEl = group.querySelector('.form-error');
  if (errorEl) {
    errorEl.textContent = message;
  }
}

/**
 * Show general form error
 */
function showFormError(form, message) {
  let errorEl = form.querySelector('.form-general-error');
  if (!errorEl) {
    errorEl = document.createElement('p');
    errorEl.className = 'form-general-error';
    errorEl.style.cssText = 'color:#ef4444;font-size:0.875rem;margin-top:0.5rem;text-align:center;';
    form.querySelector('.btn-submit').insertAdjacentElement('afterend', errorEl);
  }
  errorEl.textContent = message;
}

/**
 * Clear all form errors
 */
function clearFormErrors(form) {
  form.querySelectorAll('.form-group').forEach(group => {
    group.classList.remove('error');
  });
}

/**
 * Submit form data to PHP handler
 */
async function simulateSubmission(form) {
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  const response = await fetch('submit.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  if (!result.ok) {
    throw new Error(result.error || 'Submission failed');
  }
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        const navHeight = document.querySelector('.nav').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Parallax effect for hero section (subtle)
 */
function initParallax() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroHeight = hero.offsetHeight;

    if (scrolled < heroHeight) {
      const grid = hero.querySelector('.hero-grid');
      const glow = hero.querySelector('.hero-glow');

      if (grid) {
        grid.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
      if (glow) {
        glow.style.transform = `translateX(-50%) translateY(${scrolled * 0.2}px)`;
      }
    }
  });
}

// Initialize parallax on load
window.addEventListener('load', initParallax);

/**
 * Add subtle hover effects to feature cards
 */
function initCardEffects() {
  const cards = document.querySelectorAll('.feature-card, .pricing-card, .team-card');

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease';
    });
  });
}

initCardEffects();