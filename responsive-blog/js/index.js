const hamburgerBtn = document.getElementById('hamburger');
const nav  = document.getElementById('nav-list');

function toggleButton() {
    console.log('clicked')
    nav.classList.toggle('show')
}

hamburgerBtn.addEventListener('click',toggleButton)