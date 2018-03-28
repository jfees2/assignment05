/*eslint-env browser*/
window.addEventListener("load", function () {
    "use strict";
    
    var $ = function (id) {
        return window.document.getElementById(id);
    };

    function init() {
        var bttns, equal, textbox, bttnClicked;

        bttns = document.querySelectorAll("input[type='button']");
        textbox = document.getElementById("result");
        
        bttns.forEach(function (bttn) {
            if (bttn.id === "equal") {
                bttn.addEventListener("click", calculate, false);
            }
            else {
                bttn.addEventListener("click", enter, false);
            }
        });
 
        function enter(val) {
            bttnClicked = val.target.value;
            textbox.value += bttnClicked.toString();
        }

        function calculate() {
            textbox.value = eval(textbox.value);
        }
    }
    
    init();
});