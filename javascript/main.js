const btn = document.querySelector('span')
const mobileMenu = document.querySelector('#mobile-menu')

btn.addEventListener('click',()=> { 
    mobileMenu.classList.toggle('on')
})