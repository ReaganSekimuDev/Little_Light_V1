let slashes = document.querySelector('.slashes');
let nav_id = document.querySelector('#nav_2');
let nav_class = document.querySelector('.nav_2');
let slash_1 = document.querySelector('#slash_1');
let slash_2 = document.querySelector('#slash_2');
let slash_3 = document.querySelector('#slash_3');

let logo = document.querySelector('#logo');
let d_btn = document.querySelector('#d_btn');

logo.addEventListener('mouseover', () => logo.style.cursor = 'pointer')
logo.addEventListener('click', () => window.location.href = 'index.html')

slashes.addEventListener('mouseleave', () => {
    setTimeout(() => closeMenue(),100)
})

function openMenue() {
    nav_class.style.width = '75%';
    nav_class.style.marginRight = '0px';
    nav_class.style.overflow = 'visible';

    slashes.style.marginLeft = '15px';

    slash_1.style.transform = 'rotate(45deg)';
    slash_1.style.marginBottom = '-16.5px';
    slash_1.style.border = '2px solid rgb(246, 99, 0)';
    
    slash_2.style.display = 'none'; 
    
    slash_3.style.transform = 'rotate(-45deg)';
    slash_3.style.border = '2px solid rgb(6, 27, 34)';

    slashes.setAttribute('onclick','closeMenue()')
}
function closeMenue() {
    nav_class.style.width = '';
    nav_class.style.marginRight = '';
    nav_class.style.overflow = '';
    
    slashes.style.marginLeft = '';
    
    slash_1.style.transform = '';
    slash_1.style.marginBottom = '';
    slash_1.style.border = '';
    
    slash_2.style.display = ''; 
    
    slash_3.style.transform = '';
    slash_3.style.border = '';

    slashes.setAttribute('onclick','openMenue()')
}
