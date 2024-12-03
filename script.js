document.querySelectorAll('#nav-upper a').forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
}); 
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

document.getElementById("fileUpload").addEventListener("change", function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        document.getElementById("imagePreview").src = e.target.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});

document.getElementById("fileUpload").addEventListener("change", function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
            
    reader.onload = function(e) {
        document.getElementById("imagePreview").src = e.target.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});

function validateInput(inputElement, errorElement) {
    const isValid = inputElement.checkValidity();  
    if (!isValid) {
        errorElement.style.display = 'block';  
    } else {
        errorElement.style.display = 'none';  
    }
}

document.getElementById('first-name').addEventListener('input', function() {
    validateInput(this, document.getElementById('first-name-error'));
});

document.getElementById('last-name').addEventListener('input', function() {
    validateInput(this, document.getElementById('last-name-error'));
});

document.getElementById('student-id').addEventListener('input', function() {
    validateInput(this, document.getElementById('student-id-error'));
});

document.getElementById("post-comment").addEventListener("click", function(event) {
    event.preventDefault(); 
    
    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const rating = document.querySelector('input[name="rating"]:checked');
    const comment = document.getElementById("comment-form").value.trim();
    const imageSrc = document.getElementById("imagePreview").src;

    let isValid = true;

    const genderError = document.getElementById('category-option-error');
    if (!gender) {
        genderError.style.display = 'block';
        isValid = false;
    } 
    else {
        genderError.style.display = 'none';
    }

    const ratingError = document.getElementById('review-error');
    if (!rating) {
        ratingError.style.display = 'block';
        isValid = false;
    } 
    else {
        ratingError.style.display = 'none';
    }

    if (firstName === '' || lastName === '') {
        alert('Please fill in all name fields.');
        isValid = false;
    }

    if (isValid) {
        let title = gender.value === "male" ? "Mr." :
                    gender.value === "female" ? "Mrs." : "Mx.";

        const newPost = {
            image: imageSrc,
            title: title,
            firstName: firstName,
            lastName: lastName,
            faculty: document.getElementById("faculties").value,
            rating: rating.value,
            comment: comment
        };

        let posts = JSON.parse(localStorage.getItem("posts")) || [];
        posts.unshift(newPost);
        localStorage.setItem("posts", JSON.stringify(posts));
        
        displayPosts(posts);
        document.getElementById("postData").scrollIntoView({ behavior: 'smooth', block: 'end' });

        setTimeout(() => {
            document.getElementById("postData").scrollIntoView({ behavior: 'smooth', block: 'end' });
        }, 200); 
        document.querySelector("form").reset();
    }
});

function displayPosts(posts) {
    const postDataDiv = document.getElementById("postData");

    postDataDiv.innerHTML = "";

    posts.forEach(post => {
        const postCard = document.createElement("div");
        postCard.classList.add("post-card");
        postCard.innerHTML = `
                    <img src="${post.image}" alt="User Image">
                    <div class="post-card-content">
                        <h3>${post.title} ${post.firstName} ${post.lastName}</h3>
                        <p>${post.faculty}</p>
                        <p> <span class="rating">${"⭐".repeat(post.rating)}</span></p>
                        <p>${post.comment}</p>
                    </div>
                `;

        postDataDiv.appendChild(postCard);
    });

    setTimeout(() => {
        postDataDiv.scrollTop = 0;
    }, 0);
}

window.onload = function() {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    displayPosts(posts);
};

document.getElementById("cancel").addEventListener("click", function() {
    document.querySelector("form").reset();
    document.getElementById("postData").innerHTML = "";
});

document.getElementById("get-start").addEventListener("click", function() {
    document.getElementById("member-page").scrollIntoView({ behavior: 'smooth', block: 'start' });
});
