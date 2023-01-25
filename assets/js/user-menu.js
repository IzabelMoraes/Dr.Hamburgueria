const btnMobile = document.getElementById('btn');

function toggleMenu(){
    const userMenu = document.getElementById('menu-nav');
    userMenu.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
