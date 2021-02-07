window.onload = function() {



    let nat = document.getElementById('nations').children;
    let sec = document.getElementsByClassName('sec')[1];
    const btnHamburger = document.querySelector('#meniu');
    const body = document.querySelector('body');
    const header = document.getElementsByClassName('header')[0];
    const overlay = document.querySelector('.overlay');
    const menuOverlay = document.querySelector('.mobile-menu');
    const p = document.getElementById('date');

    setInterval(function() {
        let date = new Date();
        p.innerHTML = "Current date and time: " + (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear() + ': ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        //console.log(date.getDate());
    }, 1000);

    for (let i = 0; i < nat.length; i++) {
        nat[i].addEventListener('click', func);

    }

    sec.addEventListener('click', func, true);

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

    // var button = document.getElementsByClassName('button')[0];

    // button.onclick = function() {
    //     alert('Still working on this feature!');
    // }

    function func(event) {


        if (window.getComputedStyle(this).backgroundColor === 'rgb(0, 128, 0)') {
            for (let i = 0; i < nat.length; i++) {
                nat[i].style.backgroundColor = 'green';

            }
            sec.style.backgroundColor = 'blue';
        } else {
            for (let i = 0; i < nat.length; i++) {
                nat[i].style.backgroundColor = 'blue';

            }
            sec.style.backgroundColor = 'green';
        }
        event.stopPropagation();



    }
}