// Author : Pranto Kumar

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*menu show*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
/*menu hidden*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== SWIPER FAVORITES ===============*/
// const swiperFavorites = new Swiper('.favorites__swiper', {
//     loop: true,
//     grabCursor: true,
//     slidesPerview: 'auto',
//     centeredSlides: 'auto', 
//     autoplay: {
//         delay: 2500,
//       },
// })



document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const filters = document.querySelectorAll('.filter');
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    const allSlides = Array.from(document.querySelectorAll('.swiper-slide'));
  
    // Initialize Swiper with your existing settings
    const swiperFavorites = new Swiper('.favorites__swiper', {
      loop: true,
      grabCursor: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      autoplay: {
        delay: 2500,
      },
    });
  
    // Function to update slides based on the selected category and price filter
    function updateSwiperSlides(category, priceFilter) {
      // Stop autoplay temporarily
      swiperFavorites.autoplay.stop();
  
      // Filter slides by category and price
      const filteredSlides = allSlides.filter(slide => {
        const isCategoryMatch = slide.getAttribute('data-category') === category;
        const isPriceMatch = priceFilter ? slide.getAttribute('data-price') === priceFilter : true; // Filter by price if priceFilter is provided
        return isCategoryMatch && isPriceMatch;
      });
  
      // Clear the swiper wrapper
      swiperWrapper.innerHTML = '';
  
      // If no slides are found, show all slides of the selected category (fallback mechanism)
      if (filteredSlides.length === 0) {
        const fallbackSlides = allSlides.filter(slide => slide.getAttribute('data-category') === category);
        filteredSlides.push(...fallbackSlides);
      }
  
      // Append only filtered slides
      filteredSlides.forEach(slide => {
        swiperWrapper.appendChild(slide.cloneNode(true));
      });
  
      // Update Swiper to reflect the changes
      swiperFavorites.update();
  
      // Restart autoplay
      swiperFavorites.autoplay.start();
    }
  
    // Tabs click event listener
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
  
        // Get the category from the clicked tab
        const targetCategory = tab.getAttribute('data-target');
  
        // Get the current active price filter
        const activeFilter = document.querySelector('.filter.active')?.getAttribute('data-price');
  
        // Update Swiper slides based on category and filter
        updateSwiperSlides(targetCategory, activeFilter);
      });
    });
  
    // Filter click event listener
    filters.forEach(filter => {
      filter.addEventListener('click', () => {
        // Remove active class from all filters
        filters.forEach(f => f.classList.remove('active'));
        filter.classList.add('active');
  
        // Get the current active tab
        const activeTab = document.querySelector('.tab.active').getAttribute('data-target');
  
        // Get the selected price filter
        const selectedPrice = filter.getAttribute('data-price');
  
        // Update Swiper slides based on selected filter and active tab
        updateSwiperSlides(activeTab, selectedPrice);
      });
    });
  
    // Initialize Swiper with the default tab on page load
    const defaultCategory = document.querySelector('.tab.active').getAttribute('data-target');
    const defaultFilter = document.querySelector('.filter.active')?.getAttribute('data-price');
    updateSwiperSlides(defaultCategory, defaultFilter);
});


// gallay swiper

// Swiper JS Initialization
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.gallery__swiper', {
      loop: true,
      autoplay: {
        delay: 3000, // Auto move every 3 seconds
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true, // Allow clicking on pagination
      },
      slidesPerView: 'auto', // Adjust number of images per view depending on screen size
      spaceBetween: 20, // Space between slides
      breakpoints: {
        320: {
          slidesPerView: 1, // On mobile, show 1 image at a time
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2, // On tablets, show 2 images at a time
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3, // On larger screens, show 3 images at a time
          spaceBetween: 20,
        },
      },
    });
  });
  
  


/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')


        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        }
        else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    reset: true //animations repeat
})
sr.reveal('.home_data, .favorite__container .footer__container')
sr.reveal('.home__circle, .home__img', { delay: 600, scale: .5 })
sr.reveal('.home__chips-1, .home__chips-2, .home__chips-3', { delay: 1000, interval: 100 })
sr.reveal('.home__leaf', { delay: 1200 })
sr.reveal('.home__tomato-1, .home__tomato-2', { delay: 1400, interval: 100 })
sr.reveal('.care__img, .contact__img', { origin: 'left' })
sr.reveal('.care__list, .contact__data', { origin: 'right' })
sr.reveal('.banner__item, .products__card', { interval: 100 })






// lightbox

const lightbox = GLightbox({
  touchNavigation: true,
  loop: true,
  width: "90vw",
  height: "90vh"
});
