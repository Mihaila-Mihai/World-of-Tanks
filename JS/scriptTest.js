window.onload = function() {
    const btnHamburger = document.querySelector('#meniu');
    const body = document.querySelector('body');
    const header = document.getElementsByClassName('header')[0];
    const overlay = document.querySelector('.overlay');
    const menuOverlay = document.querySelector('.mobile-menu');

    btnHamburger.addEventListener('click', function() {
        console.log('click hamburger');

        if (header.classList.contains('open')) { //Menu closing
            header.classList.remove('open');
            overlay.classList.remove('fade-in');
            overlay.classList.add('fade-out');
            menuOverlay.classList.remove('slideInMenu');
            menuOverlay.classList.add('slideOutMenu');
            body.classList.remove('noscroll');

        } else { // Menu opening
            header.classList.add('open');
            overlay.classList.remove('fade-out');
            overlay.classList.add('fade-in');
            menuOverlay.classList.remove('slideOutMenu');
            menuOverlay.classList.add('slideInMenu');
            body.classList.add('noscroll');
        }
    });

    var button = document.getElementsByClassName('button')[0];

    button.onclick = function() {
        alert('Still working on this feature!');
    }
}