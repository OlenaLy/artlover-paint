document.addEventListener('DOMContentLoaded', function () {
  const burgerBtn = document.querySelector('header button.burger');
  const burgerIcons = burgerBtn.querySelectorAll('img');
  const mobileMenu = document.querySelector('header .mobile-menu .nav');
  const menuLinks = mobileMenu.querySelectorAll('a');

  function openMenu() {
    burgerIcons[0].classList.add('hidden');    // burger
    burgerIcons[1].classList.remove('hidden'); // cross
    mobileMenu.classList.add('visible');
  }

  function closeMenu() {
    burgerIcons[0].classList.remove('hidden'); // burger
    burgerIcons[1].classList.add('hidden');    // cross
    mobileMenu.classList.remove('visible');
  }

  burgerBtn.addEventListener('click', function () {
    if (mobileMenu.classList.contains('visible')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', function () {
      closeMenu();
    });
  });
});

// document.addEventListener('DOMContentLoaded', function() {
//   const burgerBtn = document.querySelector('header button.burger');
//   const burgerBtnIcons = document.querySelectorAll('header button.burger img');
//   const mobileMenu = document.querySelector('header .mobile-menu .nav');
//   const menuLinks = mobileMenu.querySelectorAll('a');

//   function openMenu() {
//     burgerBtnIcons[0].classList.add('hidden');    // burger
//     burgerBtnIcons[1].classList.remove('hidden'); // cross
//     mobileMenu.classList.add('visible');
//   }

//   function closeMenu() {
//     burgerBtnIcons[0].classList.remove('hidden'); // burger
//     burgerBtnIcons[1].classList.add('hidden');    // cross
//     // burgerBtnIcons.forEach(icon => icon.classList.toggle('hidden'));
//     mobileMenu.classList.remove('visible');
//   }

//   burgerBtn.addEventListener('click', function() {
    // burgerBtnIcons.forEach((icon) => {
    //   icon.classList.toggle('hidden');
    //   mobileMenu.classList.toggle('visible');
    // });
//     if (mobileMenu.classList.contains('visible')) {
//       closeMenu();
//     } else {
//       openMenu();
//     }
//   });

//     menuLinks.forEach(link => {
//       link.addEventListener('click', function () {
//         closeMenu();
//       });
//     });

//     document.querySelector('header .mobile-menu .nav').classList.toggle('visible');
//   })
// });

const sec1Btn = document.querySelector('.sec1-btn');
sec1Btn.addEventListener('click', () => window.open('https://www.instagram.com/artlover_lessons?utm_source=qr&igsh=MXFrcGF6MHBsajU4OQ=='));

const glideEl = document.querySelector('.sec4-cards');
if (glideEl) {
  new Glide(glideEl, {
    type: 'carousel',
    startAt: 0,
    perView: 1
  }).mount();
}

const cardsAll = document.querySelector('.sec3-cards__slides');

const images = [
  'assets/images/1.webp',
  'assets/images/2.webp',
  'assets/images/3.webp',
  'assets/images/4.webp',
  'assets/images/5.webp',
  'assets/images/6.webp',
  'assets/images/7.webp',
  'assets/images/8.webp',
  'assets/images/9.webp',
  'assets/images/10.webp',
  'assets/images/11.webp',
  'assets/images/12.webp',
  'assets/images/13.webp',
  'assets/images/14.webp',
  'assets/images/15.webp',
  'assets/images/16.webp',
  'assets/images/17.webp',
  'assets/images/18.webp',
  'assets/images/19.webp',
  'assets/images/20.webp'
];

images.forEach((src, index) => {
  const li = document.createElement("li");
  li.className = 'glide__slide sec3-card';

  const span = document.createElement('span');
  span.className = 'photo';
  const img = document.createElement('img');
  img.src = src;

  span.appendChild(img);
  li.appendChild(span);
  cardsAll.appendChild(li);

});

const glideEl3 = document.querySelector('.sec3-cards');
if (glideEl3) {
  new Glide('.sec3-cards', {
    type: 'carusel',
    perView: 2,
    gap: 20,
    breakpoints: {
      768: {
        perView: 1,
      }
    }
  }).mount();
  
}

const btnIdsToOpenModal = ['sec-2-card-1-btn', 'sec-2-card-2-btn', 'sec-2-card-3-btn', 'sec-2-card-4-btn', 'sec-2-card-5-btn'];
  const generalModalWrapper = document.querySelector('.modals-wrapper');
  const closeModalBtns = document.querySelectorAll('.modal-close-btn');

  btnIdsToOpenModal.forEach((btnId) => {
    const btnEl = document.getElementById(btnId);
    if (!btnEl) return;

    const modalId = btnEl.dataset.modalId;
    const modalEl = document.getElementById(modalId);

    btnEl.addEventListener('click', function(e) {
      e.preventDefault();
      generalModalWrapper.classList.add('visible');
      modalEl.classList.add('visible');
      document.querySelector('body').classList.add('overflow');
    });
  })

  closeModalBtns.forEach((closeBtn) => {
    closeBtn.addEventListener('click', function() {
      generalModalWrapper.classList.remove('visible');
      this.parentElement.classList.remove('visible');
      document.querySelector('body').classList.remove('overflow');
    })
  });

