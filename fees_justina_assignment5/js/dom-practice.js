/*eslint-env browser*/

//STEP 1

function oneFunction() {
    "use strict";
    window.alert("1. I have been clicked.");
}

//STEP 2

function twoFunction() {
    "use strict";
    document.getElementById("bttnTwo").onclick = window.alert("2. I have been clicked.");
}

//STEP 3

window.addEventListener("load", function () {
    "use strict";
    
    function threeFunction() {
        window.alert("3. I have been clicked");
    }
    
    document.getElementById("bttnthree").addEventListener("click", threeFunction, false);
});

//STEP 4

window.addEventListener("load", function () {
    "use strict";
    
    document.getElementById("bttnfour").addEventListener("click", function () {
        window.alert("4. I have been clicked");
    }, false);
});

//STEP 5
/*
window.addEventListener("load", function () {
    "use strict";
    
    document.getElementById("bttnfive").addEventListener("click", function () {
        window.alert("5. I have been clicked");
    }, false);
});
*/

//STEP 6

window.addEventListener("load", function () {
    "use strict";
    
    var button_six = document.getElementById("redirect").addEventListener("click", function (target) {
        window.alert("The browser is preventing you from viewing this link.");
        target.preventDefault();
    }, false);
});

//STEP 7

window.addEventListener("load", function () {
    "use strict";
    
    var buttonSeven = document.getElementById("bttnseven");
    buttonSeven.addEventListener("click", function () {
        var message = document.getElementById("textbox").value;
        window.alert(message);
    }, false);

});


//STEP 8

window.addEventListener("load", function () {
    "use strict";
    
    var newWindow = document.getElementById("bttneight").addEventListener("click", function () {
        var myWindow = window.open("newpage.html", "", "width=300, height=300");
    }, false);
});


//STEP 9

window.addEventListener("load", function () {
    "use strict";
    var start = document.getElementById("bttnNine1"), stop = document.getElementById("bttnNine2"), interval, text;
    
    start.addEventListener("click", function () {
        var n = 0;
        text = document.getElementById("text").innerText;
        interval = setInterval(function () {
            window.console.log(text);
            n++;
        }, 2000);
    });
    
    stop.addEventListener("click", function () {
        clearInterval(interval);
        window.console.log("Fun Over");
    });

});
    

//STEP 10
window.addEventListener("load", function () {
    "use strict";

    var item = document.getElementById("bttnTen");
    item.addEventListener("click", function () {
        var itemList = document.getElementById("list-content");
        var selectedItem = itemList.options[itemList.selectedIndex].text;
        window.alert(selectedItem);
    }, false);
});












