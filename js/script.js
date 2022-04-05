"use stict";

let mainBlock = document.querySelectorAll('.main_img'),
    tabCross = document.querySelectorAll('.cross_img'),
    tabParent = document.querySelector('.cross'),
    minus = document.querySelector('.minus'),
    plus = document.querySelector('.plus'),
    input = document.querySelector('input'),
    cart = document.querySelector('.img_cart'),
    cartBlock = document.querySelector('.right_box'),
    boxOne = document.querySelector('.menu_one'),
    boxTwo = document.querySelector('.menu_two'),
    closeID = document.getElementById('close'),
    deleteBlock = document.querySelector('.delete');

let push = document.querySelector('.push_me'),
    expensive = document.querySelector('.expensive'),
    clickId = document.querySelector('click_me'),
    cartCount = document.querySelector('.spot'),
    dollar = '$';


const backMenu = document.getElementById('back_menu'),
    nextMenu = document.getElementById('next_menu');

cart.addEventListener('click', function() {
    boxOne.style.display = 'block';
});

function hideTabs() {
    mainBlock.forEach((item) => {
        item.classList.add('picture-hide');
        item.classList.remove('picture-show');

    });
}

function showTabs(i = 0) {
    mainBlock[i].classList.remove('picture-hide');
    mainBlock[i].classList.add('picture-show');
}
hideTabs();
showTabs();

tabParent.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('cross_img')) {
        tabCross.forEach((item, i) => {
            if (e.target == item) {
                hideTabs();
                showTabs(i);
            }
        });
    }
});

plus.addEventListener('click', () => {
    input.value = Number(input.value) + 1;

});

minus.addEventListener('click', function() {
    if (Number(input.value) > 0) {
        input.value = Number(input.value) - 1;
    }
});


closeID.addEventListener('click', () => {
    boxOne.style.display = 'none';

});


push.addEventListener('click', () => {
    boxTwo.style.display = 'block';
    expensive.innerHTML +=

        `<div class="block">
                        <img src="image/feet.jpg" alt="" width="50px" height="50px">
                        <div class="info">
                            <p>Fall Limited Edition Sneakers</p>
                            <div class="expensive">
                                <h3>${dollar + 125}.00 x ${input.value}</h3>
                                <h2>${dollar + 125*input.value}.00</h2>
                            </div>
                        </div>
                    </div>`;

    cartCount.innerHTML = `${input.value}`;
    console.log(input.value);
});


deleteBlock.addEventListener('click', () => {
    boxTwo.style.display = 'none';
});

const openPopUp = document.getElementById('open_pop_up'),
    closePopUp = document.getElementById('pop_up_close'),
    popUp = document.getElementById('pop_up');

openPopUp.addEventListener('click', function() {
    popUp.classList.add('active');
    document.body.style.overflow = 'hidden';
});


closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
    document.body.style.overflow = '';
});

let dots = document.getElementsByClassName('pop_cross_hide'),
    dotsArea = document.getElementsByClassName('pop_up_cross')[0],
    slides = document.getElementsByClassName('pop_picture_hide'),
    beforeBtn = document.getElementById('back_menu'),
    nextBtn = document.getElementById('next_menu'),
    slideIndex = 1;

showSlides(slideIndex);

function showSlides(n) {
    if (n < 1) {
        slideIndex = slides.length;
    } else if (n > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('working');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('working');
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
beforeBtn.onclick = function() {
    plusSlides(-1);
};
nextBtn.onclick = function() {
    plusSlides(1);
};

dotsArea.onclick = function(e) {
    for (let i = 0; i < dots.length + 1; i++) {
        if (e.target.classList.contains('pop_cross_hide') && e.target == dots[i - 1]) {
            currentSlide(i);
        }
    }
};

let menu = document.querySelector('.toggle'),
    mobileMenu = document.querySelector('.mobile_menu'),
    menuClose = document.getElementById('menu_close');

menu.addEventListener('click', () => {
    mobileMenu.style.display = 'block';
});
menuClose.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
});