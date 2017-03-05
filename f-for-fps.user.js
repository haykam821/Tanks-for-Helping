// ==UserScript==
// @name         F for FPS
// @namespace    http://reddit.com/u/haykam821
// @version      0.1
// @description  When you press 'F', the FPS counter will show.
// @author       /u/haykam821
// @match        *://*.diep.io/*
// ==/UserScript==

// Script made by /u/haykam821, requested by /u/joshi 77

document.addEventListener('keydown',function(event){
    if(event.keyCode==70){
        input.set_convar('ren_fps',true);
    }
});

document.addEventListener('keyup',function(event){
    if(event.keyCode==70){
        input.set_convar('ren_fps',false); 
    }
});
