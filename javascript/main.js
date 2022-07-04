const btn = document.querySelector('button')
const mobileMenu = document.querySelector('#mobile-menu')

btn.addEventListener('click',()=> { 
    btn.classList.toggle('rotate')
    mobileMenu.classList.toggle('on')
})