"use strict"

let number = prompt("Enter the number:");
if (!isNaN(+number) && number !== "" && number !== null) {
for (let i= 0; i<=number; i++){
    if(i%5==0){
        console.log(i);
    }  
    else if (number==1||number==2||number==3||number==4){
        console.log("Sorry, no numbers");
    }
} 
}


