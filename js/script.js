//slider

$('.slider').slick({
  slidesToShow: 3,
  autoplay: false,
  autoplaySpeed: 3000,
  dots: true,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        arrows: false,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
  ]
});
 
// let win = window,
//     doc = document,
//     docElem = doc.documentElement,
//     x = win.innerWidth || docElem.clientWidth || body.clientWidth,
//     y = win.innerHeight|| docElem.clientHeight|| body.clientHeight;
// // alert(x + ' × ' + y);

// form = document.getElementById('form');
// test=document.createElement('div');
// form.appendChild(test);

// test.innerHTML = x + ' × ' + y;
//проверка расширения экранов c модалкой (алерты по умолчанию на эппл заблокированы)/с выводом в блок


 //mobile-menu

 let burger = "",
  mMenuBtn = document.querySelector(".m-menu-button"),
  mMenu = document.querySelector(".m-menu"),
  body = document.getElementsByTagName("body"),
  mLink = document.querySelectorAll(".nav-link-m");

document.addEventListener("DOMContentLoaded", function() {
  burger = document.getElementById('burger');
  burger.onclick = toggleBurger;
  // mMenuBtn = document.querySelector(".m-menu-button");
  // mMenu = document.querySelector(".m-menu");
  // body = document.getElementsByTagName("body");
});

function toggleBurger() {
  if(burger.classList.contains("active")){
    burger.classList.remove("active");
  }else{
    burger.classList += " active";
  }
}

mMenuBtn.addEventListener('click', function (event) {
  event.preventDefault();
  mMenu.classList.toggle("active");
  // document.body.style.overflow = 'hidden';
});

  