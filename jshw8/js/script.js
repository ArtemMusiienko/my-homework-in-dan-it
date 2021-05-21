"use strict"
const mainimput = document.getElementById("maininput");
maininput.onmouseover = function(event) {
    let target = event.target;
    target.style.outline= '2px solid green';
  };
  mainimput.onmouseout = function(event) {
    let target = event.target;
    target.style.outline = '';
  };
