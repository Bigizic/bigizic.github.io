/**
 * bootstrapmade.com personal free resume bootstrap template
*/
!(function($) {
  "use strict";

  // Parallax scroll functionality
  let currentSection = 0;
  const sections = ['home', 'about', 'education', 'experience', 'portfolio', 'skills', 'contacts'];
  let isScrolling = false;

  // Initialize parallax scroll
  function initParallaxScroll() {
    updateScrollIndicator();
    
    // Smooth scroll to section
    window.scrollToSection = function(index) {
      if (isScrolling) return;
      isScrolling = true;
      
      const targetSection = index === 0 ? $('#header') : $(`#${sections[index]}`);
      const targetOffset = index === 0 ? 0 : targetSection.offset().top;
      
      $('html, body').animate({
        scrollTop: targetOffset
      }, 800, 'easeInOutQuart', function() {
        currentSection = index;
        updateScrollIndicator();
        setTimeout(() => { isScrolling = false; }, 100);
        $('.-up').html(sections[index - 1])
        $('.-down').html(sections[index + 1])
      });
    };

    // Scroll indicators click handlers
    $('.scroll-up').on('click', function() {
      if (currentSection > 0) {
        scrollToSection(currentSection - 1);
      }
    });

    $('.scroll-down').on('click', function() {
      if (currentSection < sections.length - 1) {
        scrollToSection(currentSection + 1);
      }
    });

    // Wheel scroll handling
    let wheelTimeout;
    $(window).on('wheel', function(e) {
      if (isScrolling) return;
      
      clearTimeout(wheelTimeout);
      wheelTimeout = setTimeout(function() {
        const delta = e.originalEvent.deltaY;
        
        if (delta > 0 && currentSection < sections.length - 1) {
          // Scroll down
          scrollToSection(currentSection + 1);
        } else if (delta < 0 && currentSection > 0) {
          // Scroll up
          scrollToSection(currentSection - 1);
        }
      }, 50);
    });

    // Update scroll indicator
    function updateScrollIndicator() {
      const sectionName = sections[currentSection] === 'home' ? 'Home' : 
                         sections[currentSection].charAt(0).toUpperCase() + sections[currentSection].slice(1);
      $('.current-section').text(sectionName);
      
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
    let scrollTimeout;
    $(window).on('scroll', function() {
      if (isScrolling) return;
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(function() {
        const scrollTop = $(window).scrollTop();
        const windowHeight = $(window).height();
        
        // Determine current section based on scroll position
        if (scrollTop < windowHeight * 0.5) {
          currentSection = 0;
        } else {
          for (let i = 1; i < sections.length; i++) {
            const sectionTop = $(`#${sections[i]}`).offset().top;
            const sectionBottom = sectionTop + $(`#${sections[i]}`).outerHeight();
            
            if (scrollTop >= sectionTop - windowHeight * 0.5 && scrollTop < sectionBottom - windowHeight * 0.5) {
              currentSection = i;
              break;
            }
          }
        }
        updateScrollIndicator();
      }, 100);
    });

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

    $(window).on('scroll', animateSections);
    animateSections(); // Initial call
  }

  // Navigation Menu
  $(document).on('click', '.nav-menu a, .mobile-nav a', function(e) {
    e.preventDefault();
    const hash = this.hash;
    
    if (hash) {
      const sectionIndex = sections.indexOf(hash.substring(1));
      if (sectionIndex !== -1) {
        scrollToSection(sectionIndex);
      } else if (hash === '#header') {
        scrollToSection(0);
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

  // ==== Mobile Navigation ====
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

  // ==== jQuery counterUp ====
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // ==== Skills section ====
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // ==== Testimonials carousel (uses the Owl Carousel library) ====
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

  // ==== Porfolio isotope and filter ====
  $(window).on('load', function() {
    // Initialize parallax scroll
    initParallaxScroll();
    
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

  // ==== Initiate venobox (lightbox feature used in portofilo) ====
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