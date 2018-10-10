// ==UserScript==
// @name         Get Instagram Raw Photo Links
// @namespace    http://kevinweng.tk/
// @version      1.2
// @description  Get Instagram Raw Photo Links
// @author       nevikw39
// @match        https://www.instagram.com/*
// @grant        GM_setClipboard
// @grant        GM_notification
// @grant        GM_openInTab
// @downloadURL  https://github.com/nevikw39/Get-Instagram-Raw-Photo-Links/raw/master/Get%20Instagram%20Raw%20Photo%20Links.user.js
// @updateURL  https://github.com/nevikw39/Get-Instagram-Raw-Photo-Links/raw/master/Get%20Instagram%20Raw%20Photo%20Links.user.js
// ==/UserScript==

(function() {
    'use strict';
    document.addEventListener('click', (e) => {
        if(e.target.className=="_9AhH0") {
            var url = e.target.previousSibling.childNodes[0].getAttribute("src");
            GM_setClipboard (url);
            GM_notification("The following link has been copied : " + url, "Link is Copied :))", url, function() {
                GM_openInTab(url,false);
            });
        }
    })
    document.getElementBy
})();