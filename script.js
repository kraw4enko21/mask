const menu = document.querySelector('.menu__list')
const menuBtn = document.querySelector('.menu__burger')
const menuLink = document.querySelectorAll('.menu__link-lists')

menuBtn.addEventListener('click',()=>{
    menu.classList.toggle('close')
})
menuLink.forEach((i)=>{
    i.addEventListener('click',()=>{
        menu.classList.add('close')
    })
})