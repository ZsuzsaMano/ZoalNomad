//navbar

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {

    //slide
    nav.classList.toggle('nav-active');

    // link animation with index/7 for delay
    navLinks.forEach((link, i) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {

        link.style.animation = `navLinkFade 2s ease forwards ${i / 3 + 0.3}s`;
      }

    });
    burger.classList.toggle('toggle');
  });
};

navSlide();

//flip jewellery image

const innerBox = document.querySelectorAll('.flip-box-inner');

const flipBox = document.querySelectorAll('.flip-box');

for (let i = 0; i < flipBox.length; i++) {
  flipBox[i].addEventListener('click', function () {
    innerBox[i].classList.toggle('flip-box-active');
  });
}

const flipImage = () => {
  innerBox.forEach(box=>
          box.classList.toggle('flip-box-active'));
};
