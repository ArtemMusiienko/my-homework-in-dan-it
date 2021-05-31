// let btns = document.getElementsByTagName(`btn`);
// document.onkeydown = function(event){
//  for (let index = 0; index < btns.length; index++) {
//     btns.style.color = "red";
//  }}
  



// }
var btns = document.getElementsByClassName('btn');
 document.onkeypress = function(event){  
 for (var i = 0; i < btns.length; i++) {
     if (event.keyCode == 13){
         btns[i].classList.add(`blue`)
     }  else  {
         btns[i].classList.remove(`blue`)
        
     }
 }
 }








//  document.onkeypress=function dd (event){
//      console.log(event);

//  }











// let a = document.getElementsByClassName(`btn`)[0];
// document.onkeydown = function(event){
//     if(event.key ===13);
//     a.classList.toggle(`blue`)
    
// }
// let b = document.getElementsByClassName(`btn`)[1];
// document.onkeydown = function(event){
//     if(event.key ===83);
//     b.classList.toggle(`blue`)
// }
// let c = document.getElementsByClassName(`btn`)[2];
// document.onkeydown = function(event){
//     if(event.key ===69);
//     c.classList.toggle(`blue`)
// }
// let d = document.getElementById(`btn`)[3];
// document.onkeydown = function(event){
//     if(event.key ===79);
//     d.classList.toggle(`blue`)
// }
// let e = document.getElementById(`btn`)[4];
// document.onkeydown = function(event){
//     if(event.key ===78);
//     e.classList.toggle(`blue`)
// }
// let  f= document.getElementById(`btn`)[5];
// document.onkeydown = function(event){
//     if(event.key ===76);
//     f.classList.toggle(`blue`)
// }
// let  g= document.getElementById(`btn`)[5];
// document.onkeydown = function(event){
//     if(event.key ===90);
//     g.classList.toggle(`blue`)
// }










