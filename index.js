let string = '';


let display = document.getElementById('calc-display');
let displayTop = document.getElementById('display-top');
let displayBottom = document.getElementById('display-bottom');
let calKey = document.getElementById('calc-key');


calKey.addEventListener('click', function (event) {
    let chackClass = event.target.className.includes("dNum");


    if (chackClass == true) {
        let events = event.target.innerText;

        if (events == "=") {

            string = eval(string);
            displayBottom.innerText = string;
        }
        else if (events !== "=" && events !== "AC" && events !== "DEL") {
            string += events
            displayTop.innerText = string;
        }

        else if (events == "AC") {

            string = "";
            displayTop.innerText = string;
            displayBottom.innerText = "";
        }
        else if (events == "DEL") {

            let xx = string.split("");
            let yy = xx.slice(0, -1).join('');
            string = yy;

            displayTop.innerText = string;
            console.log(yy);

        }

    }


});