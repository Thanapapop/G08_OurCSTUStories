document.querySelectorAll('.info-more').forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.card');
      card.classList.toggle('flip');
    });
});

document.querySelectorAll('.btn-back').forEach(button => {
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
    spaceBetween: 30, 
    initialSlide: 0,
    centeredSlides: true,
    speed: 900,
    grabCursor: true,
    effect: "coverflow",
    coverflowEffect: {
        rotate: -10,
        stretch: -45,
        depth: 90,
        modifier: 1,
        slideShadows: false,
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
        spaceBetween: 100,
        },
    },
});
  
const nextArrow = document.querySelector('.swiper-button-next');
const prevArrow = document.querySelector('.swiper-button-prev');

nextArrow.style.color = '#33363F';  
nextArrow.style.fontSize = '30px';
nextArrow.style.transition = 'color 0.3s ease';  

prevArrow.style.color = '#33363F';  
prevArrow.style.fontSize = '30px';  
prevArrow.style.transition = 'color 0.3s ease';  

nextArrow.addEventListener('mouseover', function () {
  nextArrow.style.color = '#C9C5A5'; 
});

nextArrow.addEventListener('mouseout', function () {
  nextArrow.style.color = '#33363F'; 
});

prevArrow.addEventListener('mouseover', function () {
  prevArrow.style.color = '#C9C5A5'; 
});

prevArrow.addEventListener('mouseout', function () {
  prevArrow.style.color = '#33363F'; 
});

const imageUpload = document.getElementById('fileUpload');
    const imagePreview = document.getElementById('imagePreview');

    imageUpload.addEventListener('change', function() {
        const file = imageUpload.files[0];
        if (file && file.type.startsWith('image')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imagePreview.src = e.target.result;
            };
            reader.readAsDataURL(file);
        } 
        else {
            alert('Please upload a valid image file.');
        }
});

function updateTime() {
    const now = new Date(); 
    
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = daysOfWeek[now.getDay()];

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    const currentTime = `${day}, ${hours}:${minutes}:${seconds}`;
    
    document.getElementById('time').textContent = currentTime;
}

setInterval(updateTime, 1000);