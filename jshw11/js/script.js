
const btns = document.getElementsByClassName('btn');
 document.onkeypress = function(event){  
 for (var i = 0; i < btns.length; i++) {
     if (event.keyCode == 13){
         btns[i].classList.add(`blue`)
     }  else  {
         btns[i].classList.remove(`blue`)
        
     }
 }
 }


















