"use srtict"
window.onload = function(){
    document.querySelector(`.tabs`).addEventListener(`click`, fTabs);
    function fTabs(event) {
        console.log(event);
        if(event.target.className ==`tabs-title`){
        const dataTab =event.target.getAttribute(`data-tab`);
        const tabBody = document.getElementsByClassName(`tabs-content`);
        for (let i = 0; i < tabBody.length; i++) {
            if(dataTab==i){
                tabBody[i].style.display = `block`
                
            }
            else{
                tabBody[i].style.display = `none`
                
                
            }
            }
            
            
        } 
    }

}