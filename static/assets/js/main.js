/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll header class to the header tag
    if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close')
      
let modal = function (modalClick) { 
    modalViews[modalClick].classList.add('active-modal')
}


modalBtns.forEach((mb, i) => {
    mb.addEventListener('click', () => {
        modal(i)
    })
})

modalClose.forEach((mc, i) => {
    mc.addEventListener('click', () => {
        modalViews.forEach((mv) => {
            mv.classList.remove('active-modal')
        })
    })
})
/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio= mixitup('.work__container', {
    selectors: {
        target: '.work__img'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */ 
const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
    linkWork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener('click', activeWork))

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
            // spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 5,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 5,
        },
    }
  });

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')
     
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector('.nav__menu a[href*='+ sectionId + ']').classList.add('active-link')
        }
        else {
            document.querySelector('.nav__menu a[href*='+ sectionId + ']').classList.remove('active-link')
        }
    })
    
}

window.addEventListener('scroll', scrollActive)

/*=============== LIGHT DARK THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected dtopic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Obtain current theme that the interface has by validating light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// Validate if the user previously chose a topic
if (selectedTheme) {
    // if validation is fulfilled, ask check the know if light theme was activated or deactivated
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
    document.body.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// activate of deactivate the theme manually with buttons
themeButton.addEventListener('click', () => {
    // add or remove light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // save theme and current icon user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.section__subtitle', {delay: 200})
sr.reveal('.section__title', {})

/*SCROLL HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', {delay: 200})
sr.reveal('.home__education', {delay: 300})
sr.reveal('.home__img', {origin:'right', delay: 400})

/*SCROLL ABOUT*/
sr.reveal('.about__img', {origin:'left' ,delay: 500, distance: '80px'})
sr.reveal('.about__subtitle', {delay: 300})
sr.reveal('.about__box', {interval: 200 ,delay: 300, opacity: 0})
sr.reveal('.about__profession', {delay: 400})
sr.reveal('.about__description', {origin: 'bottom' ,delay: 500})
sr.reveal('.about__social-icon', {delay: 600, interval: 200})
sr.reveal('.about__button', {origin: 'bottom' ,delay: 600, interval: 200})

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__content', {distance: '80px', interval: 200})
sr.reveal('.skills__name', {distance: '20px', delay: 50, interval: 50})
sr.reveal('.skills__img', { delay: 400 })

/*SCROLL SERVICES */
sr.reveal('.services__card', {interval: 200})
sr.reveal('.services__title', {})

/*SCROLL PORTFOLIO*/
sr.reveal('.work__img', {interval: 200, distance: '60px'})
sr.reveal('.work__item', {})


/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', {interval: 200})
sr.reveal('.contact__input', {delay: 400})
sr.reveal('.contact__button', {origin: 'bottom' ,delay: 600, interval: 200})
sr.reveal('.contact__title', {delay: 600})
sr.reveal('.contact__card', {})
sr.reveal('.contact__card-title', {delay: 600, distance: '20px'})
sr.reveal('.contact__card-data', {delay: 600, distance: '20px'})
sr.reveal('.contact__card-icon', {delay: 600, distance: '20px'})
sr.reveal('.contact__form-div', {})
