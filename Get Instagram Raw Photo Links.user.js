// ==UserScript==
// @name         Get Instagram Raw Photo Links
// @namespace    http://kevinweng.tk/
// @version      1
// @description  Get Instagram Raw Photo Links
// @author       nevikw39
// @match        https://www.instagram.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener('click', (e) => {
        if(e.target.className=="_9AhH0") {
            const input = document.createElement('input');
            document.body.appendChild(input);
            input.setAttribute('value', e.target.previousSibling.childNodes[0].getAttribute("src"));
            input.select();
            document.execCommand('copy');
            document.body.removeChild(input);
            alert("Linked Cpoied : "+e.target.previousSibling.childNodes[0].getAttribute("src"));
        }
    })
    document.getElementBy
})();