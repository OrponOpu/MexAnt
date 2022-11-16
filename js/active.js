// Any Slider

var swiper = new Swiper(".full-slider", {
  speed: 1200,
  parallax: true,
  loop:true,
  autoplay:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Wow JS
new WOW().init();



//For Any tabs 

// Need to add these css

// li.tab-list {
//   visibility: hidden;
//   position: absolute;
// }
// li.tab-list.tab-list-active {
//   visibility: visible;
//   opacity: 1;
// }

let tabBtn = document.querySelectorAll(".tab-btn");
let tabList = document.querySelectorAll(".tab-list");

tabBtn.forEach((element, index) => {
  element.addEventListener("click", function () {
    element.classList.add("tab-btn-active");
    tabList[index].classList.add("tab-list-active");
    for (let i = 0; i < tabBtn.length; i++) {
      if (i !== index) {
        tabBtn[i].classList.remove("tab-btn-active");
        tabList[i].classList.remove("tab-list-active");
      }
    }
  });
});

// For any Carosel

$(document).ready(function(){
  $(".testimonial-full-slider").owlCarousel({

    items: 1,
    dots: true,
    loop:true,
    autoplay:true,
  });
});


// Any Sticky Header

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myheader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}