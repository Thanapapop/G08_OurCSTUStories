document.querySelectorAll('.info-more').forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.card');
      card.classList.toggle('flip');
    });
  });
  const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    spaceBetween: 30, 
    initialSlide: 3,
    centeredSlides: true,
    speed: 900,
    grabCursor: true,
    effect: "coverflow",
    coverflowEffect: {
        rotate: -10,
        stretch: -45,
        depth: 90,
        modifier: 1,
        slideShadows: true,
    },
    mousewheel: {
        thresholdDelta: 50,
        sensitivity: 1,
    },
    breakpoints: {
        0: {
        slidesPerView: 1,
        spaceBetween: 20,
        },
        600: {
        slidesPerView: 3,
        },
        1200: {
        slidesPerView: 3,
        },
    },
  });
  