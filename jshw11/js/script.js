
const btns = [...document.getElementsByClassName('btn')];
console.log(btns);

 document.onkeypress = function(event){  
  btns.forEach(element => {
      if(element.classList.contains(`blue`)){
          element.classList.remove(`blue`)
      }
      if(element.innerText.toLowerCase()=== event.key.toLowerCase())
      element.classList.add(`blue`)
      console.log(event);
 });
}

















