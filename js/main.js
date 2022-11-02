
$(document).ready(function () {
    // Slider setup for Categories section
    $('#categories-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    arrows: false
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 4,
                    dots: true,
                    slidesToScroll: 4,
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    dots: true,
                    slidesToScroll: 3,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    slidesToScroll: 2,
                    arrows: false
                }
            }
        ]
    });

    // Mobile menu
    var $body = $('body');
    var $nav = $('.page-nav');

    function menuOpener() {
        $body.toggleClass('menu-open');
        $nav.toggleClass('is-open');
    }

    $('.js-menu-trigger, .menu-open .page-nav__link').on('click touch', function () {
        menuOpener();
    });

    new WOW().init();
});

// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});
