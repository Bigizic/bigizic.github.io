/**
 * Enhanced smooth scroll with GSAP-like behavior
 */
!(function($) {
  "use strict";

  // Smooth scroll functionality with GSAP-like behavior
  let currentSection = 0;
  const sections = ['home', 'about', 'education', 'experience', 'portfolio', 'skills', 'contacts'];
  let isScrolling = false;
  let scrollTimeout;
  let lastScrollTime = 0;
  let scrollDirection = 0;
  let isAtSectionEnd = true;
  let sectionScrollPosition = 0;

  // Throttle function for better performance
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  }

  // Initialize smooth scroll
  function initSmoothScroll() {
    updateScrollIndicator();
    
    // Smooth scroll to section with easing
    window.scrollToSection = function(index, force = false) {
      if (isScrolling && !force) return;
      isScrolling = true;
      
      const targetSection = index === 0 ? $('#header') : $(`#${sections[index]}`);
      const targetOffset = index === 0 ? 0 : targetSection.offset().top;
      
      $('html, body').animate({
        scrollTop: targetOffset
      }, {
        duration: 1200,
        easing: 'easeInOutCubic',
        complete: function() {
          currentSection = index;
          sectionScrollPosition = 0;
          isAtSectionEnd = true;
          updateScrollIndicator();
          setTimeout(() => { isScrolling = false; }, 100);
        }
      });
    };

    // Check if user has scrolled to the end of current section
    function checkSectionEnd() {
      const currentSectionElement = currentSection === 0 ? $('#header') : $(`#${sections[currentSection]}`);
      const sectionHeight = currentSectionElement.outerHeight();
      const windowHeight = $(window).height();
      const scrollTop = $(window).scrollTop();
      const sectionTop = currentSection === 0 ? 0 : currentSectionElement.offset().top;
      
      // Calculate relative scroll position within the section
      const relativeScroll = scrollTop - sectionTop;
      sectionScrollPosition = relativeScroll;
      
      // Check if we're at the end of the section (allowing for some buffer)
      if (sectionHeight > windowHeight) {
        isAtSectionEnd = relativeScroll >= (sectionHeight - windowHeight - 50);
      } else {
        isAtSectionEnd = true;
      }
      
      return isAtSectionEnd;
    }

    // Enhanced wheel scroll handling
    $(window).on('wheel', throttle(function(e) {
      if (isScrolling) return;
      
      const now = Date.now();
      const delta = e.originalEvent.deltaY;
      scrollDirection = delta > 0 ? 1 : -1;
      
      // Prevent too frequent scroll events
      if (now - lastScrollTime < 100) return;
      lastScrollTime = now;
      
      checkSectionEnd();
      
      // Only change sections if we're at the section end and scrolling in the right direction
      if (delta > 0 && currentSection < sections.length - 1 && isAtSectionEnd) {
        // Scroll down to next section
        e.preventDefault();
        scrollToSection(currentSection + 1);
      } else if (delta < 0 && currentSection > 0 && sectionScrollPosition <= 50) {
        // Scroll up to previous section
        e.preventDefault();
        scrollToSection(currentSection - 1);
      }
    }, 50));

    // Scroll indicators click handlers
    $('.scroll-up').on('click', function() {
      if (currentSection > 0) {
        scrollToSection(currentSection - 1, true);
      }
    });

    $('.scroll-down').on('click', function() {
      if (currentSection < sections.length - 1) {
        scrollToSection(currentSection + 1, true);
      }
    });

    // Update scroll indicator
    function updateScrollIndicator() {
      const sectionName = sections[currentSection] === 'home' ? 'Home' : 
                         sections[currentSection].charAt(0).toUpperCase() + sections[currentSection].slice(1);
      $('.current-section').text(sectionName);
      
      // Update navigation text
      const upText = currentSection > 0 ? sections[currentSection - 1].charAt(0).toUpperCase() + sections[currentSection - 1].slice(1) : '';
      const downText = currentSection < sections.length - 1 ? sections[currentSection + 1].charAt(0).toUpperCase() + sections[currentSection + 1].slice(1) : '';
      
      $('.-up').text(upText);
      $('.-down').text(downText);
      
      // Show/hide scroll arrows
      $('.scroll-up').toggle(currentSection > 0);
      $('.scroll-down').toggle(currentSection < sections.length - 1);
      
      // Update header state
      if (currentSection === 0) {
        $('#header').removeClass('scrolled');
      } else {
        $('#header').addClass('scrolled');
      }
    }

    // Detect current section on manual scroll
    $(window).on('scroll', throttle(function() {
      if (isScrolling) return;
      
      const scrollTop = $(window).scrollTop();
      const windowHeight = $(window).height();
      
      // Determine current section based on scroll position
      let newSection = currentSection;
      
      if (scrollTop < windowHeight * 0.3) {
        newSection = 0;
      } else {
        for (let i = 1; i < sections.length; i++) {
          const sectionElement = $(`#${sections[i]}`);
          if (sectionElement.length) {
            const sectionTop = sectionElement.offset().top;
            const sectionBottom = sectionTop + sectionElement.outerHeight();
            
            if (scrollTop >= sectionTop - windowHeight * 0.3 && scrollTop < sectionBottom - windowHeight * 0.3) {
              newSection = i;
              break;
            }
          }
        }
      }
      
      if (newSection !== currentSection) {
        currentSection = newSection;
        updateScrollIndicator();
      }
      
      checkSectionEnd();
      
      // Handle mobile scroll indicator visibility
      handleMobileScrollIndicator();
    }, 16));

    // Mobile scroll indicator handling
    function handleMobileScrollIndicator() {
      if ($(window).width() <= 768) {
        const scrollIndicator = $('.scroll-indicator');
        
        // Clear existing timeout
        clearTimeout(scrollIndicator.data('hideTimeout'));
        
        // Show indicator
        scrollIndicator.addClass('visible');
        
        // Set timeout to hide after 2 seconds of no scrolling
        const hideTimeout = setTimeout(() => {
          scrollIndicator.removeClass('visible');
        }, 2000);
        
        scrollIndicator.data('hideTimeout', hideTimeout);
      }
    }

    // Animate sections on scroll
    function animateSections() {
      $('.section-animate').each(function() {
        const elementTop = $(this).offset().top;
        const elementBottom = elementTop + $(this).outerHeight();
        const viewportTop = $(window).scrollTop();
        const viewportBottom = viewportTop + $(window).height();
        
        if (elementBottom > viewportTop && elementTop < viewportBottom) {
          $(this).addClass('active');
        }
      });
    }

    $(window).on('scroll', throttle(animateSections, 16));
    animateSections(); // Initial call
  }

  // Navigation Menu
  $(document).on('click', '.nav-menu a, .mobile-nav a', function(e) {
    e.preventDefault();
    const hash = this.hash;
    
    if (hash) {
      const sectionIndex = sections.indexOf(hash.substring(1));
      if (sectionIndex !== -1) {
        scrollToSection(sectionIndex, true);
      } else if (hash === '#header') {
        scrollToSection(0, true);
      }
      
      // Update active menu item
      $('.nav-menu .active, .mobile-nav .active').removeClass('active');
      $(this).closest('li').addClass('active');
      
      // Close mobile menu if open
      if ($('body').hasClass('mobile-nav-active')) {
        $('body').removeClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
        $('.mobile-nav-overly').fadeOut();
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Skills section
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // Testimonials carousel
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  // Portfolio isotope and filter
  $(window).on('load', function() {
    // Initialize smooth scroll
    initSmoothScroll();
    
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });
  });

  // Initiate venobox
  $(document).ready(function() {
    $('.venobox').venobox();
    
    // Add section-animate class to all sections
    $('section').addClass('section-animate');
    
    // Trigger initial animation
    setTimeout(function() {
      $('.section-animate').first().addClass('active');
    }, 500);
  });

})(jQuery);