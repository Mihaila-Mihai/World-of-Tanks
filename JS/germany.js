window.onload = function() {
    document.getElementById('meniu').className += ' hide_for_desktop';
    const button = document.getElementById('buttonF');
    const button2 = document.getElementById('set');
    const btnHamburger = document.getElementById('meniu');
    const body = document.querySelector('body');
    const header = document.querySelector('.header');
    const overlay = document.querySelector('.overlay');
    const menuOverlay = document.querySelector('.mobile-menu');
    const art = document.getElementsByTagName('article');

    for (let i = 0; i < art.length; i++) {
        art[i].addEventListener('click', function(event) {

            event.target.style.visibility = 'hidden';
        })
    }

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


    button2.onclick = function() {

        document.getElementById('foot').style.color = document.getElementById('favcolor').value;

    }







    button.onclick = function() {


        document.getElementById('foot').removeChild(button);
        var close = document.createElement('input');
        close.setAttribute('type', 'button');
        close.setAttribute('value', 'Close');
        close.id = "closeB";
        document.getElementById('foot').appendChild(close);

        var form = document.getElementsByTagName('form')[0];
        form.style.display = 'block';

        close.onclick = function() {
            document.getElementById('foot').appendChild(button);
            //document.getElementById('foot').removeChild(form);
            document.getElementById('foot').removeChild(close);
            form.style.display = 'none';

        }

        


    }
}


function addP(text) {
    var firstParagraph = document.createElement('p');
    firstParagraph.textContent = text;
    document.getElementsByTagName('form')[0].appendChild(firstParagraph);
}

function addIn(type1, value1, name1, id1) {
    var firstOptionP1 = document.createElement('input');
    firstOptionP1.setAttribute("type", type1);
    firstOptionP1.setAttribute('value', value1);
    firstOptionP1.setAttribute('name', name1);
    firstOptionP1.id = id1;
    document.getElementsByTagName('form')[0].appendChild(firstOptionP1);
}

function addL(inner, for1) {
    var label1 = document.createElement('label');
    label1.textContent = inner;
    label1.setAttribute('for', for1);
    document.getElementsByTagName('form')[0].appendChild(label1);
}

function addBR() {
    var br = document.createElement('br');
    document.getElementsByTagName('form')[0].appendChild(br);
}