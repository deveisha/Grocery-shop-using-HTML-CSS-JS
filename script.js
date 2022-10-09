let searchForm=document.querySelector('.search-form')
document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.toggle('active')
    shoppingCart.classList.remove('active-1')
   loginForm.classList.remove('active-2')
   navbar.classList.remove('active-3')
}
let shoppingCart=document.querySelector('.shopping-cart')
document.querySelector('#cart-btn').onclick=()=>{
   shoppingCart.classList.toggle('active-1')
   searchForm.classList.remove('active')
   loginForm.classList.remove('active-2')
   navbar.classList.remove('active-3')

}
let loginForm=document.querySelector('.login-form')
document.querySelector('#login-btn').onclick=()=>{
    loginForm.classList.toggle('active-2')
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active-1')
    navbar.classList.remove('active-3')
}
let navbar=document.querySelector('.navbar')
document.querySelector('#menu-btn').onclick=()=>{
    navbar.classList.toggle('active-3')
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active-1')
    loginForm.classList.remove('active-2')
}
window.onscroll=()=>{
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active-1')
    loginForm.classList.remove('active-2')
    navbar.classList.remove('active-3')
}
var swiper = new Swiper(".mySwiper", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnInteraction: false,
    },
    breakpoints:{
   0:{
    slidesPerView:1,

   },
   768:{
    slidesPerView:2,

   },
   1020:{
    slidesPerView:3,

   }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });