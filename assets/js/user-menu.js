const btnMobile = document.getElementById('btn');

function toggleMenu(event){
    if (event.type === 'touchstart') event.preventDefault()
        const userMenu = document.getElementById('menu-nav');
        userMenu.classList.toggle('active');
        const active = userMenu.classList.contains('active');
        event.currentTarget.setAttribute('aria-expanded', active);
    if(active){
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu de usuário');
    } else{
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu de usuário');

    }
}
    


btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
