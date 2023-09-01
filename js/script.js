let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}

document.querySelector('#nav-close').onclick = () =>{
     navbar.classList.remove('active');
 }


 let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.add('active');
}

 document.querySelector('#close-search').onclick = () =>{
     searchForm.classList.remove('active');
 }

 window.onscroll = () =>{
     navbar.classList.remove('active');

     if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
     }else{
        document.querySelector('.header').classList.remove('active');
     }

  };

//   window.onscroll = () =>{
//     links.classList.remove('on');

//     if(window.scrollY > 0){
//        document.querySelector('.links').classList.add('on');
//     }else{
//        document.querySelector('.links').classList.remove('on');
//     }

//  };


 window.onload = () =>{
    if(window.scrollY > 0){
       document.querySelector('.header').classList.add('active');
    }else{
       document.querySelector('.header').classList.remove('active');
    }

};

 var swiper= new Swiper(".home-slider", {
    loop:true,
    grabCursor:true, 
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 5000,
    },
    navigation: {
        nextE1: ".swiper-button-next",
        prevE1: ".swiper-button-prev",
    },

 });

 // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

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