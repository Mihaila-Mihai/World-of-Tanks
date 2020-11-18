window.onload = function() {
    const button = document.getElementById('buttonF');
    const button2 = document.getElementById('set');
    const btnHamburger = document.getElementById('meniu');
    const body = document.querySelector('body');
    const header = document.querySelector('.header');
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

        close.onclick = function() {
            document.getElementById('foot').appendChild(button);
            document.getElementById('foot').removeChild(form);
            document.getElementById('foot').removeChild(close);

        }

        var form = document.createElement('form');
        document.getElementById('foot').appendChild(form);

        addP("Please select your gender:");

        addIn('radio', 'male', 'gender', 'male');

        addL('Male', 'male');



        addBR();

        addIn('radio', 'female', 'gender', 'female');

        addL('Female', 'female');


        addBR();

        addIn('radio', 'other', 'gender', 'other');

        addL('Other', 'other');

        addBR();

        addP('Please select your age:');

        addIn('radio', '18', 'age', 'age1');

        addL('0-18', 'age1');

        addBR();

        addIn('radio', '45', 'age', 'age2');

        addL('19-45', 'age2');

        addBR();

        addIn('radio', 'more', 'age', 'age3');

        addL('46 or more', 'age3');

        addBR();

        addP("Please select the page areas that you like");

        addIn('checkbox', 'first', 'first', 'area1');

        addL("Header", 'area1');

        addBR();

        addIn('checkbox', 'second', 'second', 'area2');

        addL("Nation's presentation", 'area2');

        addBR();

        addIn('checkbox', 'third', 'third', 'area3');

        addL('Tech tree', 'area3');

        addBR();

        addIn('checkbox', 'fourth', 'fourth', 'area4');

        addL('Premium tanks', 'area4');

        addBR();

        addP('Whant to tell something?');

        addIn('text', '');

        addBR();

        addIn('submit', 'Submit');


    }
}


function addP(text) {
    var firstParagraph = document.createElement('p');
    firstParagraph.innerHTML = text;
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
    label1.innerHTML = inner;
    label1.setAttribute('for', for1);
    document.getElementsByTagName('form')[0].appendChild(label1);
}

function addBR() {
    var br = document.createElement('br');
    document.getElementsByTagName('form')[0].appendChild(br);
}