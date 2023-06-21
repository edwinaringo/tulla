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

//  window.onscroll = () =>{
//     navbar.classList.remove('active');

//     if(window.scrollY > 0){
//        document.querySelector('.navbar').classList.add('active');
//     }else{
//        document.querySelector('.navbar').classList.remove('active');
//     }

// };


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
    navigation: {
        nextE1: ".swiper-button-next",
        prevE1: ".swiper-button-prev",
    },

 });