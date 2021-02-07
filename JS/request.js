window.onload = function() {

    document.getElementById('but1').addEventListener('click', winOrLose);

    let x = setInterval(func, 1000, 'green', 'blue');
    let para = document.querySelector('p');
    let compStyles = window.getComputedStyle(para);
    /*para.textContent = 'My computed font-size is ' +
        compStyles.getPropertyValue('font-size') +
        ',\nand my computed line-height is ' +
        compStyles.getPropertyValue('line-height') +
        '.';*/

    function func(a, b) {
        //console.log(window.getComputedStyle(para).color);
        if (window.getComputedStyle(para).color === 'rgb(0, 128, 0)') {
            para.style.color = b;
        } else {
            para.style.color = a;
        }

    }

    function player(name, score) {

        this.name = name;
        this.score = score;

    }
    let players = [];
    let inner;
    let outer;
    const container = document.querySelector('.container');
    //const body = document.querySelector('body');
    const inp = document.querySelector("input");
    const inDiv = document.getElementById('in');
    let seconds;
    let y;
    const ext = document.querySelector(".ext");
    let name;

    //const button = document.querySelector('button');
    document.addEventListener('keydown', enterPressed);

    function enterPressed(e) {
        if (e.key === 'Enter') {
            let ok = 1;
            //console.log("in functie");
            name = inp.value;
            //console.log(name);
            let regEx = /^[a-z]+\d*/i;
            try {
                if (regEx.test(name) === false) {
                    throw "Your nickname can contain only letters and digits but it is mandatory to start with a letter";
                    //console.log(regEx.test(name), "name");
                }
                if (Object.keys(localStorage).indexOf(name) !== -1) {
                    throw "Name already in memory";
                }
            } catch (err) {
                inDiv.innerHTML = "<p><span>" + err + "</span></p>";
                inp.value = "";
                ok = 0;
            }
            if (ok === 1) {
                localStorage[name] = 0;
                inDiv.innerHTML = "<p>Hello " + name + "</p><p>You have 2 minute to match all pictures</p><p>Good luck!</p>";

                setTimeout(function() {
                    const http = new XMLHttpRequest();
                    http.onreadystatechange = function() {
                        if (http.readyState == 4 && http.status == 200) {
                            let res = JSON.parse(this.response);
                            /*container.innerHTML = JSON.parse(this.responseText)[0].picture.src;*/
                            //console.log(res);
                            container.innerHTML = "";
                            for (let i in res) {

                                container.innerHTML += "<div class=\"outer\"><div class=\"inner\"><img src=" + res[i].picture.src +
                                    "><caption>" + res[i].picture.caption + "</caption></div></div>";
                            }


                        }
                    };

                    http.open("GET", "http://localhost:8080", true);
                    http.send();
                    inner = document.getElementsByClassName("inner");
                    outer = document.getElementsByClassName("outer");
                    setTimeout(function() {
                        //console.log(container.children[0]);
                        let clicked1;
                        let clicked2;
                        let matched = [];
                        //console.log(clicked1, clicked2);
                        //console.log(inner);

                        for (let t = 0; t < outer.length; t++) {
                            let ran = Math.floor((Math.random() * outer.length) + 1);
                            outer[t].style.order = ran;
                        }

                        var x = setInterval(function() {
                            for (let t = 0; t < inner.length; t++) {
                                setTimeout(function() {
                                    inner[t].style.transform = "rotateY(180deg)";
                                }, 200 * t + 100)

                            }
                        }, 100)
                        setTimeout(function() {
                            clearInterval(x);
                            //console.log("safe");
                        }, 200 * inner.length + 300)


                        setTimeout(function() {
                            for (let k = 0; k < inner.length; k++) {
                                //console.log("sunt in for");
                                outer[k].addEventListener("click", function() {
                                    inner[k].style.transform = "rotateY(0deg)";
                                    if (typeof clicked1 == "undefined" && matched.indexOf(k) === -1) {
                                        clicked1 = inner[k];
                                        index1 = k;
                                        //console.log(clicked1);
                                    } else if (typeof clicked2 == "undefined" && clicked1 != inner[k] && matched.indexOf(k) === -1) {
                                        clicked2 = inner[k];
                                        index2 = k;
                                        //console.log(clicked2);
                                        if (clicked1.innerHTML === clicked2.innerHTML) {
                                            setTimeout(function() {
                                                matched.push(index1);
                                                matched.push(index2);
                                                //console.log(matched);
                                                //console.log("se potrivesc");
                                                clicked1 = undefined;
                                                clicked2 = undefined;
                                                if (matched.length === inner.length) {
                                                    winOrLose();
                                                }
                                            }, 700)

                                        } else {
                                            setTimeout(function() {
                                                //console.log("nu se potrivesc");
                                                clicked1.style.transform = "rotateY(180deg)";
                                                clicked2.style.transform = "rotateY(180deg)";
                                                clicked1 = undefined;
                                                clicked2 = undefined;
                                            }, 700);

                                        }

                                    } else if (matched.indexOf(k) === -1 && clicked1 != inner[k] && clicked2 != inner[k]) {
                                        inner[k].style.transform = "rotateY(180deg)";
                                    }
                                })


                            }
                            //console.log("Start!");
                            seconds = 120;
                            //let minutes = 0;
                            y = setInterval(function() {
                                seconds -= 1;
                                let time;

                                if (Math.floor(seconds % 60) >= 10) {
                                    time = "0" + Math.floor(seconds / 60) + ":" + Math.floor(seconds % 60);
                                } else time = "0" + Math.floor(seconds / 60) + ":0" + Math.floor(seconds % 60);

                                ext.innerHTML = "<p>Time left: " + time + "</p>";
                                if (seconds === 0) {
                                    winOrLose();
                                }
                            }, 1000)
                        }, 200 * inner.length + 300)

                        //console.log(inner.length);

                    }, 1000)

                    //console.log(inner.length);
                }, 5000)
            }
            //delete localStorage[name];
            //console.log(Object.keys(localStorage));
        }


    }

    function winOrLose() {
        clearInterval(y);
        container.style.flexDirection = "column";
        //container.innerHTML = "Wou Win! :)";
        localStorage[name] = seconds;
        let localKeys = Object.keys(localStorage);
        for (let iterator = 0; iterator < localStorage.length; iterator++) {
            //console.log(players[i])
            players.push(new player(localKeys[iterator], localStorage[localKeys[iterator]]));
        }
        players.sort(function(a, b) {
            return b['score'] - a['score'];
        })

        /*container.innerHTML = "<p id=\"lead\">Leaderboard</p>";
        for (let iterator = 0; iterator < players.length; iterator++) {
            container.innerHTML += "<p>Position: " + (iterator + 1) + " player: " + players[iterator]['name'] + " score: " + players[iterator]['score'] + "</p>";
        }*/

        container.innerHTML = "<p id=\"lead\">Leaderboard";
        createTable();

    }

    function createTable() {
        let tab = document.createElement("table");
        container.appendChild(tab);
        let trHead = document.createElement('tr');
        trHead.innerHTML = "<th>Position</th><th>Player</th><th>Score</th>";
        let table = document.querySelector("table");

        table.appendChild(trHead);
        for (let iterator = 0; iterator < players.length; iterator++) {
            let trBody = document.createElement('tr');
            trBody.innerHTML = "<td>" + (iterator + 1) + "</td><td>" + players[iterator]['name'] + "</td><td>" + players[iterator]['score'] + "</td>";
            table.appendChild(trBody);
        }
        //localStorage.clear();
    }



}