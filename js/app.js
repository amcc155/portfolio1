const menu = document.querySelector('#menu')
const dropdown = document.querySelector('.dropdown')
let isDropDownActive

menu.addEventListener('click',(e) =>{
e.target.classList.add('swirl-in-fwd')

dropdown.style.display = 'block'
isDropDownActive = true
})

if(isDropDownActive){
    document.addEventListener('click',()=>{
        dropdown.style.display = 'none'
        isDropDownActive = false;
        console.log('u')
    })
}