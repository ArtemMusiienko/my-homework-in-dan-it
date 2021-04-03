"use strict"

let userName = prompt("What is your name");
 let userAge = prompt("How older you");
 

 if (userAge < 18) {
       alert('You are not allowed to visit this website!');
    }
   if(userAge>=18&&userAge<=22){
          confirm("Are you sure you want to continue?")
          alert('Welcome ' + userName);
         
   } else('You are not allowed to visit this website!');

       if (userAge>22) {
        alert('Welcome ' + userName);}
   

2